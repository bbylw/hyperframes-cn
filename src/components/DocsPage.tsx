import { useEffect } from "react";
import CodeBlock from "./CodeBlock";

function Inline({ text }: { text: string }) {
  // Render **bold** and [label](url) minimally; everything else as text.
  const parts: React.ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))|(`[^`]+`)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<b key={k++}>{m[1].slice(2, -2)}</b>);
    else if (m[2]) {
      const mm = m[2].match(/^\[(.*)\]\((.*)\)$/);
      if (mm) parts.push(<a key={k++} href={mm[2]} target="_blank" rel="noreferrer">{mm[1]}</a>);
      else parts.push(m[2]);
    } else if (m[3]) parts.push(<code key={k++}>{m[3].slice(1, -1)}</code>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
import QuickstartArticle from "./QuickstartArticle";
import {
  DOCS_CONTENT,
  DOCS_FLAT,
  DOCS_GROUPS,
  findDoc,
  genericContent,
  groupOf,
} from "../data/docs";
import { DOCS_EXTRA } from "../data/docs-extra";
import { DOCS_DEV_CONTENT } from "../data/docs-dev";
import { DOCS_FULL } from "../data/docs-full";
import type { DocContent } from "../data/docs";

interface DocsPageProps {
  slug: string;
  onBack: () => void;
}

function officialUrl(url: string) {
  return url.replace(/\.md$/, "");
}

export default function DocsPage({ slug, onBack }: DocsPageProps) {
  const item = findDoc(slug) ?? findDoc("introduction")!;
  const group = groupOf(item.slug);
  const idx = DOCS_FLAT.findIndex((d) => d.slug === item.slug);
  const prev = idx > 0 ? DOCS_FLAT[idx - 1] : undefined;
  const next = idx < DOCS_FLAT.length - 1 ? DOCS_FLAT[idx + 1] : undefined;

  const isQuickstart = item.slug === "quickstart";
  const content =
    (DOCS_FULL as Record<string, DocContent>)[item.slug] ??
    DOCS_CONTENT[item.slug] ??
    (DOCS_EXTRA as Record<string, DocContent>)[item.slug] ??
    (DOCS_DEV_CONTENT as Record<string, DocContent>)[item.slug] ??
    genericContent(item);
  const official = officialUrl(item.url);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    document.title = `${item.zh} · HyperFrames 中文文档`;
  }, [slug, item.zh]);

  function go(s: string) {
    window.location.hash = `#docs/${s}`;
  }

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
                  <p className="docs-lede">{content.lede}</p>
                  <ul className="docs-meta mono">
                    <li>来源 · hyperframes.heygen.com</li>
                    <li>语言 · 中文版</li>
                    <li>原文 · {item.en}</li>
                  </ul>
                  {item.video && (
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

                <article className="docs-article" style={{ maxWidth: "none" }}>
                  {content.sections.map((sec, i) => (
                    <section key={i} className="docs-section">
                      <div className="scene-meta">
                        <span className="scene-no mono">{String(i + 1).padStart(2, "0")}</span>
                        <span className="scene-rule" />
                      </div>
                      <h2 className="docs-h2">{sec.h}</h2>
                      {sec.paras && sec.paras.length > 0
                        ? sec.paras.map((para, pi) => {
                            const img = para.match(/^!\[(.*?)\]\((.*?)\)$/);
                            if (img) {
                              return (
                                <figure key={pi} className="docs-video">
                                  <img src={img[2]} alt={img[1]} loading="lazy" />
                                </figure>
                              );
                            }
                            if (/^<video\b/i.test(para)) {
                              const src = para.match(/src="([^"]+)"/)?.[1];
                              const poster = para.match(/poster="([^"]+)"/)?.[1];
                              if (src) {
                                return (
                                  <figure key={pi} className="docs-video">
                                    <video
                                      src={src}
                                      poster={poster}
                                      muted
                                      loop
                                      playsInline
                                      preload="metadata"
                                      controls
                                    />
                                  </figure>
                                );
                              }
                            }
                            if (para.trim().startsWith("|")) {
                              const rows = para
                                .split("\n")
                                .map((r) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()))
                                .filter((cells) => cells.length && !/^[-: ]+$/.test(cells.join("")));
                              if (rows.length) {
                                return (
                                  <div key={pi} style={{ overflowX: "auto" }}>
                                    <table className="docs-table">
                                      <tbody>
                                        {rows.map((cells, ri) => (
                                          <tr key={ri}>
                                            {cells.map((c, ci) => (
                                              <td key={ci}>
                                                <Inline text={c} />
                                              </td>
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                );
                              }
                            }
                            return (
                              <p key={pi} className="docs-p">
                                <Inline text={para} />
                              </p>
                            );
                          })
                        : (
                          <p className="docs-p">
                            <Inline text={sec.p} />
                          </p>
                        )}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="docs-bullets">
                          {sec.bullets.map((b) => (
                            <li key={b}>
                              <Inline text={b} />
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
                  ))}

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
