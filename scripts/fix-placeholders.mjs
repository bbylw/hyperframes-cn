import fs from "node:fs";

let s = fs.readFileSync("src/data/docs-full.ts", "utf8");
s = s
  .replace(/^import.*\n/, "")
  .replace("export const DOCS_FULL: Record<string, DocContent> = ", "")
  .replace(/;\s*$/, "")
  .trim()
  .replace(/;$/, "");
const j = JSON.parse(s);

const MT = [
  "avatar",
  "captions",
  "data-maps",
  "design-tools",
  "examples",
  "faceless-explainer",
  "faq",
  "free-agents",
  "general-video",
  "introduction",
  "mcp",
  "motion-graphics",
  "music",
  "plugins",
  "pr-to-video",
  "product-launch",
  "quickstart",
  "remotion-migration",
  "skills",
  "slideshow",
  "vs-remotion",
  "with-claude-code",
  "with-codex",
  "with-cursor",
  "workflows",
];

function outsideFences(md) {
  const out = [];
  let inCode = false;
  for (const line of md.split("\n")) {
    if (/^\s*```/.test(line)) {
      inCode = !inCode;
      continue;
    }
    if (!inCode) out.push(line);
  }
  return out.join("\n");
}

let totalFixed = 0;
for (const slug of MT) {
  const v = j[slug];
  if (!v) continue;
  let en;
  try {
    en = fs.readFileSync(`tmp-polish/${slug}.en.md`, "utf8");
  } catch {
    continue;
  }
  const body = outsideFences(en);
  const codes = [...body.matchAll(/`([^`]+)`/g)].map((m) => m[1]);
  const tags = [...body.matchAll(/<[^>]+>/g)].map((m) => m[0]);
  let ci = 0,
    ti = 0;
  for (const sec of v.sections) {
    for (const key of ["paras", "bullets"]) {
      const arr = sec[key];
      if (!arr) continue;
      for (let i = 0; i < arr.length; i++) {
        let t = arr[i];
        if (!/[\uE000-\uE00A]/.test(t)) continue;
        t = t.replace(/[\uE000-\uE00A]C\d+[\uE000-\uE00A]/g, () => {
          const code = codes[ci++];
          return code ? "`" + code + "`" : "";
        });
        t = t.replace(/[\uE000-\uE00A]T\d+[\uE000-\uE00A]/g, () => {
          const tag = tags[ti++];
          return tag ?? "";
        });
        // any leftover private chars -> strip (fallback: keep text)
        if (/[\uE000-\uE00A]/.test(t)) {
          t = t.replace(/[\uE000-\uF8FF]/g, "");
        }
        arr[i] = t;
        totalFixed++;
      }
    }
    if (sec.p && /[\uE000-\uE00A]/.test(sec.p)) {
      sec.p = sec.p
        .replace(/[\uE000-\uE00A]C\d+[\uE00A]/g, () => {
          const code = codes[ci++];
          return code ? "`" + code + "`" : "";
        })
        .replace(/[\uE000-\uF8FF]/g, "");
      totalFixed++;
    }
  }
  console.log(slug, "enCodes", codes.length, "used", ci, Math.min(ci, codes.length) ? "" : "");
}
console.log("paras fixed", totalFixed);
const ts =
  'import type { DocContent } from "./docs";\n\nexport const DOCS_FULL: Record<string, DocContent> = ' +
  JSON.stringify(j, null, 1) +
  ";\n";
fs.writeFileSync("src/data/docs-full.ts", ts, "utf8");
console.log("wrote", ts.length);
