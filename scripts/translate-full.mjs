import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());
const TMP = path.join(ROOT, 'tmp-full');
fs.mkdirSync(TMP, { recursive: true });

// Build URL -> slug map from existing data files
function collectMap(file) {
  const s = fs.readFileSync(file, 'utf8');
  const m = [];
  let x;
  if (file.endsWith('docs-dev.ts')) {
    const re = /item\("([^"]+)"[\s\S]*?(https:\/\/[^\"]+\.md)/g;
    while ((x = re.exec(s))) m.push([x[2], x[1]]);
  } else {
    const re = /slug:\s*"([^"]+)"[\s\S]*?url:\s*"([^"]+\.md)"/g;
    while ((x = re.exec(s))) m.push([x[2], x[1]]);
  }
  return m;
}
let map = [];
for (const f of ['src/data/docs.ts', 'src/data/docs-dev.ts']) {
  map.push(...collectMap(path.join(ROOT, f)));
}
// docs-extra has slugs as keys but URLs in docs.ts already; just use above
console.log('mapped', map.length);
const EXCLUDE = new Set(['help-changelog', 'help-weekly']);
const todo = map.filter(([, slug]) => !EXCLUDE.has(slug));
console.log('todo (excl changelog/weekly)', todo.length);

function protect(line) {
  const urls = [];
  // URLs
  let s = line.replace(/https?:\/\/[^\s"'<>)\\]]+/g, (u) => {
    urls.push(u);
    return `\uE000${urls.length - 1}\uE001`;
  });
  // inline code
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (c) => {
    codes.push(c);
    return `\uE000C${codes.length - 1}\uE001`;
  });
  // html tags
  const tags = [];
  s = s.replace(/<[^>]+>/g, (c) => {
    tags.push(c);
    return `\uE000T${tags.length - 1}\uE001`;
  });
  return { s, urls, codes, tags };
}
function restore(s, urls, codes, tags) {
  let out = s;
  // restore order: codes/tags/urls placeholders use same private range; replace by index lookup via maps
  // Our placeholders: urls \uE000${i}\uE001, codes \uE000C${i}\uE001, tags \uE000T${i}\uE001
  out = out.replace(/\uE000C(\d+)\uE001/g, (_, i) => codes[i]);
  out = out.replace(/\uE000T(\d+)\uE001/g, (_, i) => tags[i]);
  out = out.replace(/\uE000(\d+)\uE001/g, (_, i) => urls[i]);
  return out;
}

async function gtx(text) {
  const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-CN&dt=t&q=' + encodeURIComponent(text);
  const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!r.ok) throw new Error('gtx ' + r.status);
  const j = await r.json();
  // j[0] is array of segments
  return j[0].map((s) => s[0]).join('');
}

async function translateText(text) {
  // chunk by ~900 chars on sentence boundaries
  const chunks = [];
  let cur = '';
  for (const sent of text.split(/(?<=[.!?。；;])\s+/)) {
    if ((cur + ' ' + sent).length > 1400) {
      if (cur) chunks.push(cur);
      cur = sent;
    } else cur = (cur + ' ' + sent).trim();
  }
  if (cur) chunks.push(cur);
  const outs = [];
  for (const c of chunks) {
    let ok = false;
    for (let attempt = 0; attempt < 4 && !ok; attempt++) {
      try {
        outs.push(await gtx(c));
        ok = true;
      } catch (e) {
        console.log('  retry', e.message, 'sleep');
        await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      }
    }
    if (!ok) outs.push(c);
    await new Promise((r) => setTimeout(r, 450));
  }
  return outs.join(' ');
}

async function translateMarkdown(md) {
  const lines = md.split('\n');
  const out = [];
  let inCode = false;
  let buf = '';
  const flush = async () => {
    if (!buf.trim()) { buf = ''; return; }
    const { s, urls, codes, tags } = protect(buf);
    const zh = await translateText(s);
    out.push(restore(zh, urls, codes, tags));
    buf = '';
  };
  for (const line of lines) {
    if (/^\s*```/.test(line)) {
      await flush();
      inCode = !inCode;
      out.push(line);
      continue;
    }
    if (inCode) { out.push(line); continue; }
    // preserve blank, tables separators, horizontal rules, image lines, pure HTML
    if (/^\s*$/.test(line) || /^\s*\|[\s:|-]+\|\s*$/.test(line) || /^\s*!\[.*\]\(/.test(line) || /^\s*</.test(line) || /^\s*\[\w+\]\s*$/.test(line)) {
      await flush();
      out.push(line);
      continue;
    }
    // headings, quotes, list markers: translate body but keep markers
    const m = line.match(/^(\s*#{1,6}\s+|\s*>\s*|\s*[-*]\s+|\s*\d+\.\s+)(.*)$/);
    if (m) {
      await flush();
      const body = m[2];
      if (!body.trim()) { out.push(line); continue; }
      const { s, urls, codes, tags } = protect(body);
      const zh = await translateText(s);
      out.push(m[1] + restore(zh, urls, codes, tags));
      continue;
    }
    // table rows: translate cells prose? translate whole line protected
    if (/^\s*\|/.test(line)) {
      // keep structure; translate via protect (pipes ok)
      await flush();
      const { s, urls, codes, tags } = protect(line);
      const zh = await translateText(s);
      out.push(restore(zh, urls, codes, tags));
      continue;
    }
    buf = buf ? buf + ' ' + line.trim() : line.trim();
  }
  await flush();
  return out.join('\n');
}


let doneCount=0, failCount=0, skipCount=0;
async function workOne([url, slug]) {
  const enPath = path.join(TMP, slug + '.en.md');
  const zhPath = path.join(TMP, slug + '.zh.md');
  if (fs.existsSync(zhPath)) { skipCount++; return; }
  try {
    let en;
    if (fs.existsSync(enPath)) en = fs.readFileSync(enPath, 'utf8');
    else {
      const r = await fetch(url);
      if (!r.ok) throw new Error('fetch ' + r.status);
      en = await r.text();
      fs.writeFileSync(enPath, en);
    }
    const idx2 = en.indexOf(String.fromCharCode(10) + '# ');
    const body = idx2 >= 0 ? en.slice(idx2 + 1) : en;
    const zh = await translateMarkdown(body);
    fs.writeFileSync(zhPath, zh);
    doneCount++;
    console.log('[' + (doneCount+skipCount+failCount) + '/' + todo.length + '] ' + slug + ' en=' + en.length + ' zh=' + zh.length);
  } catch (e) {
    failCount++;
    console.log('FAIL ' + slug + ' ' + e.message);
    await new Promise((r) => setTimeout(r, 2000));
  }
}
(async()=>{
  const W=3;
  let i=0;
  async function worker(){ while(true){ const j=i++; if(j>=todo.length) return; await workOne(todo[j]); } }
  await Promise.all(Array.from({length:W},()=>worker()));
  console.log('finished done='+doneCount+' skip='+skipCount+' fail='+failCount);
})();
