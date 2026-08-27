import { join, normalize, sep } from "node:path";

const DIST = join(import.meta.dir, "..", "dist");
const PORT = Number(process.env.PORT ?? 4173);

async function serveFromDist(pathname: string): Promise<Response> {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  const target = normalize(join(DIST, decoded));
  if (target !== DIST && !target.startsWith(DIST + sep)) {
    return new Response("Forbidden", { status: 403 });
  }

  const file = Bun.file(target);
  if (await file.exists()) {
    return new Response(file);
  }
  return new Response(Bun.file(join(DIST, "index.html")));
}

Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname.endsWith("/") ? url.pathname + "index.html" : url.pathname;
    try {
      return await serveFromDist(path);
    } catch {
      return new Response(Bun.file(join(DIST, "index.html")));
    }
  },
});

console.log(`[bun] hyperframes-site → http://localhost:${PORT} (serving ./dist)`);
