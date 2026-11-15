import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const TMP = path.join(ROOT, 'tmp-full');

function parseFull(md) {
  const lines = md.split('\n');
  // lede: first non-heading, non-quote-blank paragraph after H1
  let lede = '';
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (!l || l.startsWith('#') || l.startsWith('>') || l.startsWith('<') || l.startsWith('```')) continue;
    lede = l.slice(0, 900);
    break;
  }
  if (!lede) lede = md.split('\n').find((l) => l.trim() && !l.startsWith('#'))?.slice(0, 900) ?? '';

  const sections = [];
  let cur = null;
  let inCode = false;
  let codeBuf = [];
  let codeLang = '';
  const flushCode = () => {
    if (codeBuf.length) {
      cur.codeBlocks = cur.codeBlocks ?? [];
      cur.codeBlocks.push({ code: codeBuf.join('\n').slice(0, 8000), file: codeLang ? codeLang.toUpperCase() : 'EXAMPLE' });
      codeBuf = [];
    }
  };
  const flushSection = () => {
    if (!cur) return;
    flushCode();
    // paras fallback: if no paras but has p content
    if ((!cur.paras || cur.paras.length === 0) && cur.p) {
      cur.paras = [cur.p];
    }
    if (cur.paras && cur.paras.length) sections.push(cur);
    else if (cur.codeBlocks && cur.codeBlocks.length) sections.push(cur);
  };
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      if (!cur) continue;
      if (!inCode) { inCode = true; codeLang = line.trim().replace(/^```/, '').trim(); codeBuf = []; }
      else { inCode = false; flushCode(); }
      continue;
    }
    if (inCode) { codeBuf.push(line); continue; }
    const hm = line.match(/^#{2,6}\s+(.*)$/);
    if (hm) {
      flushSection();
      cur = { h: hm[1].trim().slice(0, 160), p: '', paras: [], codeBlocks: [] };
      continue;
    }
    if (!cur) continue;
    const t = line.trim();
    if (!t) continue;
    // list lines -> bullets
    const bm = t.match(/^[-*]\s+(.*)$/) || t.match(/^\d+\.\s+(.*)$/);
    if (bm) {
      cur.bullets = cur.bullets ?? [];
      if (cur.bullets.length < 80) cur.bullets.push(bm[1].slice(0, 600));
      continue;
    }
    // table lines -> keep as paragraph (single block per row grouped)
    if (t.startsWith('|')) {
      cur.paras.push(t.slice(0, 2000));
      continue;
    }
    // HTML video/img -> keep as para special
    if (t.startsWith('<')) {
      cur.paras.push(t.slice(0, 3000));
      continue;
    }
    // quote lines keep text
    const qm = t.match(/^>\s?(.*)$/);
    const txt = qm ? qm[1] : t;
    if (txt) {
      // merge into last para if previous was part of same paragraph? Just push as own para if long, else merge short continuations
      if (cur.paras.length && cur.paras[cur.paras.length - 1].length < 120 && !cur.paras[cur.paras.length - 1].endsWith('。')) {
        cur.paras[cur.paras.length - 1] += ' ' + txt.slice(0, 800);
      } else {
        cur.paras.push(txt.slice(0, 2000));
      }
    }
  }
  flushSection();
  // drop empty related-topics? keep all for completeness, but cap sections
  return { lede, sections: sections.slice(0, 40) };
}

const files = fs.readdirSync(TMP).filter((f) => f.endsWith('.zh.md'));
const out = {};
for (const f of files) {
  const slug = f.replace('.zh.md', '');
  const zh = fs.readFileSync(path.join(TMP, f), 'utf8');
  const { lede, sections } = parseFull(zh);
  out[slug] = { lede, sections };
}
console.log('parsed', Object.keys(out).length, 'pages');
fs.mkdirSync(path.join(ROOT, 'src/data'), { recursive: true });
const ts = 'import type { DocContent } from "./docs";\n\nexport const DOCS_FULL: Record<string, DocContent> = ' + JSON.stringify(out, null, 1) + ';\n';
fs.writeFileSync(path.join(ROOT, 'src/data/docs-full.ts'), ts);
console.log('wrote src/data/docs-full.ts', ts.length);
