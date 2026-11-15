import { Fragment, useEffect, useMemo, useState } from "react";
import CodeBlock from "./CodeBlock";
import QuickstartArticle from "./QuickstartArticle";
import { DOCS_FLAT, DOCS_GROUPS, findDoc, groupOf } from "../data/docs";
import type { DocContent, DocSection } from "../data/docs";
import { loadDocContent } from "../data/docs-loader";

function normalizeDocPath(rawPath: string): string {
  let p = rawPath.trim().replace(/^\/+|\/+$/g, "");
  p = p.replace(/\.(mdx?|html)$/i, "");
  p = p.replace(/\/index$/i, "");
  return p.toLowerCase();
}

const DOCS_BY_PATH = new Map<string, string>();
for (const doc of DOCS_FLAT) {
  const rel = doc.url.replace(/^https?:\/\/hyperframes\.heygen\.com\//i, "");
  DOCS_BY_PATH.set(normalizeDocPath(rel), doc.slug);
}
DOCS_BY_PATH.set("concepts", "concepts-index");

function extractDocAnchor(hash: string): string {
  if (!hash.startsWith("#docs/")) return "";
  const rest = hash.slice(6);
  const hashIdx = rest.indexOf("#");
  if (hashIdx === -1) return "";
  return rest.slice(hashIdx + 1).split("?")[0] ?? "";
}

interface ResolvedHref {
  href: string;
  external: boolean;
  anchor?: string;
}

function resolveDocHref(rawHref: string, currentSlug: string): ResolvedHref {
  const trimmed = rawHref.trim();
  if (!trimmed) return { href: `#docs/${currentSlug}`, external: false };

  if (trimmed.startsWith("#")) {
    const anchor = trimmed.slice(1).split("?")[0] ?? "";
    return {
      href: anchor ? `#docs/${currentSlug}#${anchor}` : `#docs/${currentSlug}`,
      external: false,
      anchor,
    };
  }

  let pathAndHash = trimmed;
  let isHeyGenOrigin = false;
  if (/^https?:\/\/hyperframes\.heygen\.com(?:\/|$)/i.test(trimmed)) {
    isHeyGenOrigin = true;
    pathAndHash = trimmed.replace(/^https?:\/\/hyperframes\.heygen\.com/i, "") || "/";
  } else if (!trimmed.startsWith("/") || trimmed.startsWith("//")) {
    return { href: trimmed, external: true };
  }

  const hashIdx = pathAndHash.indexOf("#");
  const beforeHash = hashIdx >= 0 ? pathAndHash.slice(0, hashIdx) : pathAndHash;
  const rawAnchor = hashIdx >= 0 ? pathAndHash.slice(hashIdx + 1) : "";
  const queryIdx = beforeHash.indexOf("?");
  const cleanPath = queryIdx >= 0 ? beforeHash.slice(0, queryIdx) : beforeHash;
  const anchor = rawAnchor.split("?")[0] ?? "";

  const matchedSlug = DOCS_BY_PATH.get(normalizeDocPath(cleanPath));
  if (matchedSlug) {
    return {
      href: anchor ? `#docs/${matchedSlug}#${anchor}` : `#docs/${matchedSlug}`,
      external: false,
      anchor,
    };
  }

  return {
    href: isHeyGenOrigin ? trimmed : `https://hyperframes.heygen.com${trimmed}`,
    external: true,
  };
}

function DocLink({
  href,
  currentSlug,
  className,
  children,
}: {
  href: string;
  currentSlug: string;
  className?: string;
  children: React.ReactNode;
}) {
  const resolved = resolveDocHref(href, currentSlug);
  if (resolved.external) {
    return (
      <a className={className} href={resolved.href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  const mergedClass = className ? `docs-internal-link ${className}` : "docs-internal-link";
  return (
    <a
      className={mergedClass}
      href={resolved.href}
      onClick={(e) => {
        if (resolved.anchor && window.location.hash === resolved.href) {
          e.preventDefault();
          document.getElementById(resolved.anchor)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}
    >
      {children}
    </a>
  );
}

function Inline({
  text,
  currentSlug,
  allowLinks = true,
}: {
  text: string;
  currentSlug: string;
  allowLinks?: boolean;
}) {
  const parts: React.ReactNode[] = [];
  const re =
    /(!\[([^\]]*)\]\(([^)\s]+)\))|(`([^`]+)`)|(\[((?:[^\]`]|`[^`]+`)+)\]\(([^)\s]+)\))|(<kbd>([\s\S]*?)<\/kbd>)|(\*\*([^*]+)\*\*)|(\*([^*\s][^*]*?[^*\s]|[^*\s])\*)|(<br\s*\/?>)/gi;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index).replace(/\\_/g, "_"));
    if (m[1]) {
      parts.push(
        <img key={k++} className="docs-inline-img" src={m[3]} alt={m[2]} loading="lazy" />,
      );
    } else if (m[4]) {
      parts.push(<code key={k++}>{m[5]}</code>);
    } else if (m[6]) {
      const label = m[7];
      const href = m[8];
      if (allowLinks) {
        parts.push(
          <DocLink key={k++} href={href} currentSlug={currentSlug}>
            <Inline text={label} currentSlug={currentSlug} allowLinks={false} />
          </DocLink>,
        );
      } else {
        parts.push(
          <Fragment key={k++}>
            <Inline text={label} currentSlug={currentSlug} allowLinks={false} />
          </Fragment>,
        );
      }
    } else if (m[9]) {
      parts.push(
        <kbd key={k++} className="docs-kbd">
          {m[10]}
        </kbd>,
      );
    } else if (m[11]) {
      parts.push(
        <b key={k++}>
          <Inline text={m[12]} currentSlug={currentSlug} allowLinks={allowLinks} />
        </b>,
      );
    } else if (m[13]) {
      parts.push(<em key={k++}>{m[14]}</em>);
    } else if (m[15]) {
      parts.push(<br key={k++} />);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last).replace(/\\_/g, "_"));
  return <>{parts}</>;
}

function splitTableCells(line: string): string[] {
  let s = line.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|") && !(s.length >= 2 && s[s.length - 2] === "\\")) {
    s = s.slice(0, -1);
  }
  const cells: string[] = [];
  let cur = "";
  let inCode = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "\\" && s[i + 1] === "|") {
      cur += "|";
      i++;
      continue;
    }
    if (ch === "`") {
      inCode = !inCode;
      cur += ch;
      continue;
    }
    if (ch === "|" && !inCode) {
      cells.push(cur.trim());
      cur = "";
      continue;
    }
    cur += ch;
  }
  cells.push(cur.trim());
  return cells;
}

function isSeparatorRow(cells: string[]): boolean {
  return cells.length > 0 && cells.every((c) => /^:?-{1,}:?$/.test(c));
}

function parseMarkdownTable(block: string): {
  headers: string[];
  rows: string[][];
} | null {
  const lines = block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("|"));
  if (!lines.length) return null;

  const parsed = lines.map(splitTableCells).filter((c) => c.length > 0);
  if (!parsed.length) return null;

  const sepIdx =
    parsed.length >= 2 && isSeparatorRow(parsed[1]) ? 1 : parsed.findIndex(isSeparatorRow);
  if (sepIdx > 0) {
    const rawHeaders = parsed[sepIdx - 1];
    const bodyRows = parsed.slice(sepIdx + 1).filter((r) => !isSeparatorRow(r));
    const maxCols = bodyRows.reduce((m, r) => Math.max(m, r.length), rawHeaders.length);
    const headers = Array.from({ length: maxCols }, (_, ci) => rawHeaders[ci] ?? "");
    const rows = bodyRows.map((r) => Array.from({ length: maxCols }, (_, ci) => r[ci] ?? ""));
    return { headers, rows };
  }

  if (parsed.length >= 2) {
    const rawHeaders = parsed[0];
    const bodyRows = parsed.slice(1).filter((r) => !isSeparatorRow(r));
    const maxCols = bodyRows.reduce((m, r) => Math.max(m, r.length), rawHeaders.length);
    const headers = Array.from({ length: maxCols }, (_, ci) => rawHeaders[ci] ?? "");
    const rows = bodyRows.map((r) => Array.from({ length: maxCols }, (_, ci) => r[ci] ?? ""));
    return { headers, rows };
  }

  return {
    headers: [],
    rows: parsed.filter((r) => !isSeparatorRow(r)),
  };
}

function renderDataTable(
  headers: string[],
  rows: string[][],
  captionLabel: string,
  currentSlug: string,
  key: React.Key,
) {
  return (
    <div key={key} tabIndex={0} role="region" aria-label={captionLabel} className="table-wrapper">
      <table className="docs-table">
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, hi) => (
                <th key={hi} scope="col">
                  <Inline text={h} currentSlug={currentSlug} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        {rows.length > 0 && (
          <tbody>
            {rows.map((cells, ri) => (
              <tr key={ri}>
                {cells.map((c, ci) => (
                  <td key={ci}>
                    <Inline text={c} currentSlug={currentSlug} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}

const CALLOUT_META: Record<string, { cls: string; label: string }> = {
  NOTE: { cls: "docs-callout", label: "说明" },
  TIP: { cls: "docs-callout docs-callout--tip", label: "提示" },
  WARNING: { cls: "docs-callout docs-callout--warning", label: "注意" },
};

function splitParaSegments(raw: string): string[] {
  const s = raw.trim();
  if (!s || /^(`{3,}|~{3,})/.test(s)) return s ? [s] : [];
  const segments: string[] = [];
  let start = 0;
  let inCode = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "`") {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    if (i > start && /\s/.test(s[i - 1])) {
      const rest = s.slice(i);
      if (
        /^(?:\[(?:card|tab|accordion|!(?:NOTE|TIP|WARNING))\]|<video\s+(?=[^>]*\b(?:src|poster)=))/i.test(
          rest,
        )
      ) {
        const piece = s.slice(start, i).trim();
        if (piece) segments.push(piece);
        start = i;
      }
    }
  }
  const tail = s.slice(start).trim();
  if (tail) segments.push(tail);

  const expanded: string[] = [];
  for (const seg of segments) {
    const vm = seg.match(/^(<video\b[\s\S]*?(?:\/>|<\/video>))\s+([\s\S]+)$/i);
    if (vm) {
      expanded.push(vm[1].trim(), ...splitParaSegments(vm[2]));
    } else {
      expanded.push(seg);
    }
  }
  return expanded;
}

function renderPara(
  para: string,
  pi: number,
  sec: DocSection,
  currentSlug: string,
  docTitle: string,
) {
  const segments = splitParaSegments(para);
  if (segments.length === 0) return null;
  if (segments.length === 1) {
    return renderBlockSegment(segments[0], pi, sec, currentSlug, docTitle);
  }
  return (
    <Fragment key={pi}>
      {segments.map((seg, si) =>
        renderBlockSegment(seg, `${pi}-${si}`, sec, currentSlug, docTitle),
      )}
    </Fragment>
  );
}

function renderBlockSegment(
  trimmed: string,
  key: React.Key,
  sec: DocSection,
  currentSlug: string,
  docTitle: string,
) {
  if (!trimmed) return null;

  const fence = trimmed.match(/^(`{3,}|~{3,})([^\n]*)\n([\s\S]*?)\n\1\s*$/);
  if (fence) {
    const info = fence[2].trim();
    return <CodeBlock key={key} code={fence[3]} filename={info || "CODE"} />;
  }

  const img = trimmed.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
  if (img) {
    return (
      <figure key={key} className="docs-video">
        <img src={img[2]} alt={img[1] || `${docTitle} 示意图`} loading="lazy" />
      </figure>
    );
  }

  if (/^<video\b/i.test(trimmed)) {
    const src = trimmed.match(/src="([^"]+)"/)?.[1];
    const poster = trimmed.match(/poster="([^"]+)"/)?.[1];
    const label =
      trimmed.match(/aria-label="([^"]+)"/)?.[1] ?? trimmed.match(/title="([^"]+)"/)?.[1];
    if (src) {
      return (
        <figure key={key} className="docs-video">
          <video
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            controls
            aria-label={label || `${docTitle}演示`}
          />
        </figure>
      );
    }
    if (poster) {
      return (
        <figure key={key} className="docs-video">
          <img src={poster} alt={label || `${docTitle}界面示意图`} loading="lazy" />
        </figure>
      );
    }
  }

  const callout = trimmed.match(/^\[!(NOTE|TIP|WARNING)\]\s*([\s\S]+)$/i);
  if (callout) {
    const kind = callout[1].toUpperCase();
    const meta = CALLOUT_META[kind] ?? CALLOUT_META.NOTE;
    return (
      <aside key={key} className={meta.cls}>
        <span className="docs-callout-tag mono">{meta.label}</span>
        <p className="docs-callout-body">
          <Inline text={callout[2]} currentSlug={currentSlug} />
        </p>
      </aside>
    );
  }

  const card = trimmed.match(/^\[card\]\s*([\s\S]+)$/);
  if (card) {
    const cardBody = card[1].trim();
    const linkPart = cardBody.match(/^\[((?:[^\]`]|`[^`]+`)+)\]\(([^)\s]+)\)(?:\s+([\s\S]+))?$/);
    if (linkPart) {
      return (
        <div key={key} className="docs-link-card">
          <div className="docs-link-card-title">
            <DocLink href={linkPart[2]} currentSlug={currentSlug}>
              <Inline text={linkPart[1]} currentSlug={currentSlug} allowLinks={false} />
            </DocLink>
          </div>
          {linkPart[3] && (
            <p className="docs-link-card-desc">
              <Inline text={linkPart[3]} currentSlug={currentSlug} />
            </p>
          )}
        </div>
      );
    }
    return (
      <div key={key} className="docs-link-card">
        <p className="docs-link-card-desc">
          <Inline text={cardBody} currentSlug={currentSlug} />
        </p>
      </div>
    );
  }

  const tab = trimmed.match(/^\[tab\]\s*([\s\S]+)$/);
  if (tab) {
    return (
      <div key={key} className="docs-tab-tag">
        <Inline text={tab[1]} currentSlug={currentSlug} />
      </div>
    );
  }

  const acc = trimmed.match(/^\[accordion\]\s*([\s\S]+)$/);
  if (acc) {
    const accText = acc[1].trim();
    const gt = accText.indexOf(" > ");
    if (gt > 0 && gt < 120) {
      const title = accText.slice(0, gt).trim();
      const body = accText.slice(gt + 3).trim();
      return (
        <details key={key} className="docs-accordion">
          <summary className="docs-accordion-sum">
            <Inline text={title} currentSlug={currentSlug} allowLinks={false} />
          </summary>
          <div className="docs-accordion-body">
            <Inline text={body} currentSlug={currentSlug} />
          </div>
        </details>
      );
    }
    return (
      <div key={key} className="docs-accordion docs-accordion--inline">
        <Inline text={accText} currentSlug={currentSlug} />
      </div>
    );
  }

  if (trimmed.startsWith("|")) {
    const table = parseMarkdownTable(trimmed);
    if (table && (table.headers.length > 0 || table.rows.length > 0)) {
      return renderDataTable(table.headers, table.rows, `${sec.h} 表格`, currentSlug, key);
    }
  }

  if (/^[-*]\s+/.test(trimmed)) {
    const items = trimmed
      .split(/\n(?=[-*]\s+)/)
      .map((line) => line.replace(/^[-*]\s+/, "").trim())
      .filter(Boolean);
    return (
      <ul key={key} className="docs-bullets">
        {items.map((itemText, li) => (
          <li key={li}>
            <Inline text={itemText} currentSlug={currentSlug} />
          </li>
        ))}
      </ul>
    );
  }

  const orderedFirst = trimmed.match(/^(\d+)\.\s+/);
  if (orderedFirst) {
    const startNum = Number(orderedFirst[1]);
    const items = trimmed
      .split(/\n(?=\d+\.\s+)/)
      .map((line) => line.replace(/^\d+\.\s+/, "").trim())
      .filter(Boolean);
    return (
      <ol key={key} start={startNum} className="docs-bullets docs-ol">
        {items.map((itemText, li) => (
          <li key={li}>
            <Inline text={itemText} currentSlug={currentSlug} />
          </li>
        ))}
      </ol>
    );
  }

  if (/^>\s*/.test(trimmed)) {
    const cleaned = trimmed.replace(/^>\s*(?:>\s*)*/, "").replace(/\s+>\s*(?:>\s*)*/g, "\n");
    const lines = cleaned
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    return (
      <blockquote key={key} className="docs-quote">
        {lines.map((line, li) =>
          /^[-*]\s+/.test(line) ? (
            <p key={li} className="docs-quote-li">
              <Inline text={`· ${line.replace(/^[-*]\s+/, "")}`} currentSlug={currentSlug} />
            </p>
          ) : (
            <p key={li}>
              <Inline text={line} currentSlug={currentSlug} />
            </p>
          ),
        )}
      </blockquote>
    );
  }

  return (
    <p key={key} className="docs-p">
      <Inline text={trimmed} currentSlug={currentSlug} />
    </p>
  );
}

interface DocsPageProps {
  slug: string;
  onBack: () => void;
}

function officialUrl(url: string) {
  return url.replace(/\.mdx?$/, "");
}

export default function DocsPage({ slug, onBack }: DocsPageProps) {
  const item = findDoc(slug) ?? findDoc("introduction")!;
  const group = groupOf(item.slug);
  const groupId = group?.id ?? "start";
  const idx = DOCS_FLAT.findIndex((d) => d.slug === item.slug);
  const prev = idx > 0 ? DOCS_FLAT[idx - 1] : undefined;
  const next = idx < DOCS_FLAT.length - 1 ? DOCS_FLAT[idx + 1] : undefined;

  const isQuickstart = item.slug === "quickstart";
  const [loaded, setLoaded] = useState<{ slug: string; content: DocContent | null } | null>(null);
  const [loadFailedSlug, setLoadFailedSlug] = useState<string | null>(null);
  const [hashAnchor, setHashAnchor] = useState<string>(() =>
    typeof window === "undefined" ? "" : extractDocAnchor(window.location.hash),
  );

  const official = officialUrl(item.url);

  useEffect(() => {
    const syncHash = () => {
      setHashAnchor(extractDocAnchor(window.location.hash));
    };
    window.addEventListener("hashchange", syncHash);
    syncHash();
    return () => window.removeEventListener("hashchange", syncHash);
  }, [slug]);

  useEffect(() => {
    if (isQuickstart) return;
    let active = true;
    loadDocContent(groupId, item.slug)
      .then((content) => {
        if (!active) return;
        setLoadFailedSlug(null);
        setLoaded({ slug: item.slug, content });
      })
      .catch(() => {
        if (!active) return;
        setLoadFailedSlug(item.slug);
      });
    return () => {
      active = false;
    };
  }, [groupId, item.slug, isQuickstart]);

  useEffect(() => {
    document.title = `${item.zh} · HyperFrames 中文文档`;
  }, [item.zh]);

  useEffect(() => {
    if (!hashAnchor) {
      window.scrollTo({ top: 0 });
    }
  }, [item.slug, hashAnchor]);

  const content = loaded?.slug === item.slug ? loaded.content : null;

  useEffect(() => {
    if (!hashAnchor) return;
    if (!isQuickstart && !content) return;
    const raf = window.requestAnimationFrame(() => {
      const target = document.getElementById(hashAnchor);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    return () => window.cancelAnimationFrame(raf);
  }, [isQuickstart, content, hashAnchor]);

  const sectionAnchors = useMemo(() => {
    if (!content) return [] as Array<{ id?: string; aliases: string[] }>;
    const claimed = new Set<string>();
    for (const s of content.sections) {
      if (s.id) claimed.add(s.id);
    }
    const used = new Set<string>();
    return content.sections.map((s) => {
      let primary: string | undefined;
      if (s.id && !used.has(s.id)) {
        used.add(s.id);
        primary = s.id;
      }
      const aliases: string[] = [];
      for (const a of s.aliases ?? []) {
        if (a && a !== primary && !claimed.has(a) && !used.has(a)) {
          used.add(a);
          aliases.push(a);
        }
      }
      return { id: primary, aliases };
    });
  }, [content]);

  function go(s: string) {
    window.location.hash = `#docs/${s}`;
  }

  const isLoading = !isQuickstart && loaded?.slug !== item.slug && loadFailedSlug !== item.slug;
  const isError = !isQuickstart && loadFailedSlug === item.slug;

  return (
    <div className="docs-page">
      <div className="container">
        <div className="docs-crumb mono">
          <button type="button" className="docs-back" onClick={onBack}>
            返回首页
          </button>
          <span className="docs-crumb-sep">/</span>
          <span>文档</span>
          {group && (
            <>
              <span className="docs-crumb-sep">/</span>
              <span>{group.en}</span>
            </>
          )}
          <span className="docs-crumb-sep">/</span>
          <span className="docs-crumb-current">
            {item.zh} · {item.en}
          </span>
          <a className="docs-crumb-src" href={official} target="_blank" rel="noreferrer">
            官网原文
          </a>
        </div>

        <div className="docs-shell">
          <aside className="docs-nav" aria-label="文档侧边导航">
            <p className="docs-toc-title mono">文档目录 · {DOCS_FLAT.length} 页</p>
            <nav className="docs-nav-groups">
              {DOCS_GROUPS.map((g) => (
                <div key={g.id} className="docs-nav-group">
                  <p className="docs-nav-group-title mono">
                    {g.title} <span>{g.en}</span>
                  </p>
                  <ul className="docs-nav-list">
                    {g.items.map((it) => (
                      <li key={it.slug}>
                        <button
                          type="button"
                          className={
                            it.slug === item.slug ? "docs-nav-item is-active" : "docs-nav-item"
                          }
                          onClick={() => go(it.slug)}
                          aria-current={it.slug === item.slug ? "page" : undefined}
                        >
                          <span>{it.zh}</span>
                          <span className="docs-nav-en">{it.en}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            <div className="docs-source-box">
              <p className="mono docs-source-tag">关于本站文档</p>
              <p>
                中文版对应官方{" "}
                <a href={official} target="_blank" rel="noreferrer">
                  {item.en}
                </a>
                ，结构与链接一一对应。完整索引见{" "}
                <a href="https://hyperframes.heygen.com/llms.txt" target="_blank" rel="noreferrer">
                  llms.txt
                </a>
                。
              </p>
            </div>
          </aside>

          <div className="docs-main">
            {isQuickstart ? (
              <QuickstartArticle />
            ) : (
              <>
                <div className="docs-hero docs-hero--page">
                  <p className="docs-kicker mono">
                    {group?.en.toUpperCase()} · {item.en.toUpperCase()}
                  </p>
                  <h1 className="docs-title">{item.zh}</h1>
                  <p className="docs-lede">{content?.lede ?? item.descZh}</p>
                  <ul className="docs-meta mono">
                    <li>来源 · hyperframes.heygen.com</li>
                    <li>语言 · 中文版</li>
                    <li>原文 · {item.en}</li>
                  </ul>
                  {item.video ? (
                    <figure className="docs-video">
                      <video
                        src={item.video}
                        poster={item.poster}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        controls
                        aria-label={`${item.zh}演示`}
                      />
                      <figcaption className="figure-cap mono">
                        <b>▸</b> 演示 · 官方素材
                      </figcaption>
                    </figure>
                  ) : (
                    item.poster && (
                      <figure className="docs-video">
                        <img src={item.poster} alt={`${item.zh} 界面示意图`} loading="lazy" />
                        <figcaption className="figure-cap mono">
                          <b>▸</b> 界面预览 · 官方素材
                        </figcaption>
                      </figure>
                    )
                  )}
                  <div className="docs-page-cta">
                    <a
                      className="btn btn-secondary"
                      href={official}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>阅读官网全文</span>
                    </a>
                    <a className="btn btn-ghost" href={item.url} target="_blank" rel="noreferrer">
                      <span>Markdown 原文 .md</span>
                    </a>
                  </div>
                </div>

                {isLoading && (
                  <div className="docs-loading mono" role="status">
                    正在加载 {item.zh} 文档…
                  </div>
                )}

                {isError && (
                  <div className="docs-loading" role="alert">
                    文档加载失败，请刷新重试或直接查看官网原文。
                  </div>
                )}

                {content && (
                  <article className="docs-article" style={{ maxWidth: "none" }}>
                    {content.sections.map((sec, i) => {
                      const anchors = sectionAnchors[i];
                      return (
                        <section key={i} id={anchors?.id} className="docs-section">
                          {anchors?.aliases.map((alias) => (
                            <span
                              key={alias}
                              id={alias}
                              className="docs-anchor-alias"
                              aria-hidden="true"
                            />
                          ))}
                          <div className="scene-meta">
                            <span className="scene-no mono">{String(i + 1).padStart(2, "0")}</span>
                            <span className="scene-rule" />
                          </div>
                          <h2 className="docs-h2">{sec.h}</h2>
                          {sec.paras && sec.paras.length > 0 ? (
                            sec.paras.map((para, pi) =>
                              renderPara(para, pi, sec, item.slug, item.zh),
                            )
                          ) : sec.p ? (
                            <p className="docs-p">
                              <Inline text={sec.p} currentSlug={item.slug} />
                            </p>
                          ) : null}
                          {sec.table &&
                            sec.table.length > 0 &&
                            renderDataTable(
                              sec.table[0],
                              sec.table.slice(1),
                              `${sec.h} 表格`,
                              item.slug,
                              "sec-table",
                            )}
                          {sec.bullets && sec.bullets.length > 0 && (
                            <ul className="docs-bullets">
                              {sec.bullets.map((b, bi) => (
                                <li key={bi}>
                                  <Inline text={b} currentSlug={item.slug} />
                                </li>
                              ))}
                            </ul>
                          )}
                          {sec.codeBlocks && sec.codeBlocks.length > 0
                            ? sec.codeBlocks.map((cb, ci) => (
                                <CodeBlock
                                  key={ci}
                                  code={cb.code}
                                  filename={cb.file ?? "EXAMPLE"}
                                />
                              ))
                            : sec.code && (
                                <CodeBlock
                                  code={sec.code}
                                  filename={sec.codeFile ?? "EXAMPLE"}
                                  comment={sec.codeComment}
                                />
                              )}
                        </section>
                      );
                    })}

                    <section className="docs-section">
                      <div className="scene-meta">
                        <span className="scene-no mono">SRC</span>
                        <span className="scene-rule" />
                      </div>
                      <h2 className="docs-h2">原文与相关</h2>
                      <p className="docs-p">
                        本页中文要点以上方为准，完整步骤、示例与截图请看官网原文：
                      </p>
                      <p className="docs-cta">
                        <a
                          className="btn btn-ghost btn-sm"
                          href={official}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{item.en} · 官网全文</span>
                        </a>
                      </p>
                    </section>
                  </article>
                )}
              </>
            )}

            <nav className="docs-prevnext" aria-label="上一篇下一篇">
              <div>
                {prev && (
                  <button type="button" className="docs-pn" onClick={() => go(prev.slug)}>
                    <span className="mono docs-pn-label">上一篇</span>
                    <span className="docs-pn-title">{prev.zh}</span>
                    <span className="docs-pn-en">{prev.en}</span>
                  </button>
                )}
              </div>
              <div className="docs-pn-right">
                {next && (
                  <button
                    type="button"
                    className="docs-pn docs-pn--next"
                    onClick={() => go(next.slug)}
                  >
                    <span className="mono docs-pn-label">下一篇</span>
                    <span className="docs-pn-title">{next.zh}</span>
                    <span className="docs-pn-en">{next.en}</span>
                  </button>
                )}
              </div>
            </nav>

            <div className="docs-foot mono">
              <span>HyperFrames 中文文档</span>
              <a href={official} target="_blank" rel="noreferrer">
                {item.en} 官网原文
              </a>
              <span>中文导览与目录整理 · 完整内容请以官网原文为准</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
