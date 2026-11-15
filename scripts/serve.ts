import { stat } from "node:fs/promises";
import { extname, join, normalize, sep } from "node:path";

const DIST = normalize(join(import.meta.dir, "..", "dist"));
const INDEX_HTML = join(DIST, "index.html");
const PORT = Number(process.env.PORT ?? 4173);

function cacheControlFor(pathname: string): string {
  if (pathname.startsWith("/assets/")) {
    return "public, max-age=31536000, immutable";
  }
  if (pathname === "/" || pathname === "/index.html") {
    return "no-cache";
  }
  return "public, max-age=3600";
}

async function isRegularFile(filePath: string): Promise<boolean> {
  try {
    const info = await stat(filePath);
    return info.isFile();
  } catch {
    return false;
  }
}

async function serveIndexFallback(): Promise<Response> {
  if (await isRegularFile(INDEX_HTML)) {
    return new Response(Bun.file(INDEX_HTML), {
      headers: { "Cache-Control": "no-cache" },
    });
  }
  return new Response("Build artifacts missing. Run `bun run build` first.", {
    status: 503,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

async function serveFromDist(rawPathname: string): Promise<Response> {
  let decoded: string;
  try {
    decoded = decodeURIComponent(rawPathname);
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  if (decoded.includes("\0")) {
    return new Response("Bad Request", { status: 400 });
  }

  const effectivePath = decoded.endsWith("/") ? `${decoded}index.html` : decoded;
  const relPath = effectivePath.replace(/^\/+/, "");
  const target = normalize(join(DIST, relPath));

  if (target !== DIST && !target.startsWith(DIST + sep)) {
    return new Response("Forbidden", { status: 403 });
  }

  if (await isRegularFile(target)) {
    return new Response(Bun.file(target), {
      headers: { "Cache-Control": cacheControlFor(effectivePath) },
    });
  }

  // 对明确请求静态资源或 /assets/ 路径的缺失文件返回真实 404，避免 MIME 类型错乱
  if (decoded.startsWith("/assets/") || extname(decoded) !== "") {
    return new Response("Not Found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return serveIndexFallback();
}

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    if (req.method !== "GET" && req.method !== "HEAD") {
      return new Response("Method Not Allowed", { status: 405 });
    }
    try {
      const url = new URL(req.url);
      return await serveFromDist(url.pathname);
    } catch {
      return new Response("Bad Request", { status: 400 });
    }
  },
});

console.log(`[bun] hyperframes-site listening on port ${server.port} (serving ./dist)`);
