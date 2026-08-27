import { useEffect, useState, type ReactNode } from "react";
import { CountdownLeader, ProjectorBeam } from "./components/Cinema";
import CodeBlock from "./components/CodeBlock";
import { useCinemaFX } from "./hooks/useCinemaFX";
import { Timecode, Ticker } from "./components/Motion";
import Playground from "./components/Playground";
import PromptWizard from "./components/PromptWizard";
import SkillsCatalog from "./components/SkillsCatalog";
import FrameGallery from "./components/FrameGallery";
import MobileNav from "./components/MobileNav";
import CinemaHUD from "./components/CinemaHUD";
import Toast from "./components/Toast";
import BrandLogo from "./components/BrandLogo";
import { SemanticIcon, ZapBoltIcon, BotAgentIcon } from "./components/Icons";
import {
  addSamples,
  agentSample,
  badges,
  cliSample,
  compareRows,
  compositionSample,
  desktopNavLinks,
  docsLinks,
  manifesto,
  packageRows,
  stackRows,
  tickerItems,
  useCases,
} from "./data/content";

function SceneHead({ no, title, lede }: { no: string; title: string; lede?: ReactNode }) {
  return (
    <div className="scene-head">
      <div className="scene-meta">
        <span className="scene-no mono" data-scramble>
          {no}
        </span>
        <span className="scene-rule" data-draw />
      </div>
      <h2 className="scene-title">{title}</h2>
      {lede ? <p className="scene-lede">{lede}</p> : null}
    </div>
  );
}

function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="HyperFrames 首页">
          <BrandLogo size={32} />
          <span className="brand-wordmark">
            <span className="brand-hyper">HYPER</span>
            <span className="brand-frames">FRAMES</span>
          </span>
          <span className="brand-badge mono">
            <span className="badge-pulse" />
            v2.0 OSS
          </span>
        </a>

        <nav className="nav-menu" aria-label="主导航">
          <ul className="nav-links">
            {desktopNavLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-item">
                  <span>{l.label}</span>
                  {l.badge && <span className="nav-pill-badge mono">{l.badge}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            className="nav-btn-ghost mono"
            href="https://github.com/heygen-com/hyperframes"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub 仓库"
          >
            <svg className="nav-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            className="nav-btn-primary"
            data-magnet
            href="https://discord.gg/EbK98HBPdk"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="nav-btn-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>加入 Discord</span>
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <span className="watermark display" aria-hidden="true">
        MP4
      </span>
      <aside className="rail" aria-hidden="true">
        <span className="rail-text">
          由 AI 智能体驱动 · 从 HTML 到 MP4 · <b>DETERMINISTIC</b>
        </span>
        <span className="rail-line" />
      </aside>
      <div className="container">
        <div className="hero-frame">
          <i className="tick tl" aria-hidden="true" />
          <i className="tick tr" aria-hidden="true" />
          <i className="tick bl" aria-hidden="true" />
          <i className="tick br" aria-hidden="true" />

          <p className="rec mono">
            <i className="rec-dot" aria-hidden="true" />
            <span data-scramble>REC · HyperFrames OSS</span>
          </p>

          <h1>
            <span className="hero-l" data-reveal>
              用 HTML 写视频。
            </span>
            <span className="hero-l hero-em" data-reveal>
              由 AI 智能体<em>驱动</em>。
            </span>
          </h1>

          <p className="hero-sub" data-reveal>
            描述你想要的画面，剩下的交给渲染核心 —— <strong>HyperFrames</strong> 是一个开源框架，将
            HTML、CSS、媒体与可定位（seekable）动画转化为<strong>确定性的 MP4 视频</strong>。
            在本地用 CLI 驱动它，或让编程智能体借助 Skills 完成整条生产闭环。
          </p>

          <div className="hero-ctas" data-reveal>
            <a className="btn btn-primary" data-magnet href="#playground">
              <ZapBoltIcon size={16} />
              <span>进入实时工坊</span>
            </a>
            <a className="btn btn-secondary" data-magnet href="#wizard">
              <BotAgentIcon size={16} />
              <span>智能体 Prompt 生成器</span>
            </a>
            <a
              className="btn btn-ghost"
              data-magnet
              href="https://www.hyperframes.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <span>打开在线演练场 ↗</span>
            </a>
          </div>

          <ul className="meta-row" data-reveal>
            {badges.map((b) => (
              <li key={b.label}>
                {b.label} · <b>{b.value}</b>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-strip mono">
          <Timecode interactive />
          <span className="strip-hide">HTML IN → MP4 OUT · NO BUILD STEP</span>
          <span>24 FPS · HEADLESS CHROME · FFMPEG</span>
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className="section" id="quickstart">
      <div className="container">
        <SceneHead
          no="SC.01"
          title="快速开始"
          lede={
            <>
              两条通道进入同一套渲染核心：<strong>让智能体替你开拍</strong>，或者亲自坐上剪辑台。
            </>
          }
        />
        <div className="qs-grid">
          <div className="chan" data-reveal>
            <span className="chan-tag">通道 A / AGENTS</span>
            <h3>与 AI 编程智能体一起使用</h3>
            <p>
              安装 HyperFrames Skills，然后用一句话描述你想要的视频。Skills
              会教智能体完成生产闭环：规划视频、编写合法 HTML、接入可定位动画、添加媒体、lint
              检查、预览并渲染。适用于 Claude Code、Cursor、Gemini CLI、Codex 等支持 Skills
              的编程智能体。
            </p>
            <CodeBlock code={agentSample} filename="AGENT SETUP" />
            <div className="callout">
              试着这样提问：使用 <code>/hyperframes</code>
              ，制作一段 10 秒的产品宣传片，包含淡入标题、背景视频，以及轻微的背景音乐。
            </div>
            <p className="req mono">非交互式运行 → npx hyperframes skills update</p>
          </div>
          <div className="chan" data-reveal>
            <span className="chan-tag">通道 B / TERMINAL</span>
            <h3>手动使用 CLI</h3>
            <p>
              init 创建项目、preview 浏览器热重载预览、render 输出 MP4 —— 三条命令走完整个流程。
            </p>
            <CodeBlock code={cliSample} filename="TERMINAL" />
            <p className="req mono">ENV：NODE.JS ≥ 22 · FFMPEG</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildList() {
  return (
    <section className="section alt" id="build">
      <div className="container">
        <SceneHead
          no="SC.02"
          title="你能构建什么"
          lede={
            <>
              从产品发布到文档转视频，任何「该被拍下来」的东西。需要灵感？浏览{" "}
              <a href="https://hyperframes.heygen.com/showcase" target="_blank" rel="noreferrer">
                作品展示
              </a>
              ，观看、阅读、运行并混编其中已完成的视频。
            </>
          }
        />
        <div className="use-cases-grid" data-reveal>
          {useCases.map((u, i) => (
            <article key={u.title} className="use-case-card">
              <div className="uc-header">
                <span className="uc-num mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="uc-icon" aria-hidden="true">
                  <SemanticIcon name={u.icon} size={18} />
                </div>
                <span className="uc-tag mono">{u.tag}</span>
              </div>
              <h3 className="uc-title">{u.title}</h3>
              <p className="uc-desc">{u.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <SceneHead
          no="SC.03"
          title="工作原理"
          lede={
            <>
              把视频定义为 HTML。添加用于计时与轨道的 <code>data-*</code> 属性；用
              GSAP、CSS、Lottie、Three.js、Anime.js、WAAPI， 或你自己的帧适配器实现可定位动画。
            </>
          }
        />
        <div className="how-workflow-grid" data-reveal>
          <div className="hw-step-box">
            <span className="hw-step-num mono">01</span>
            <h4>HTML 声明式轨道</h4>
            <p>使用 <code>data-start</code> 与 <code>data-duration</code> 锁定每个元素的出入场精确时间戳。</p>
          </div>
          <div className="hw-step-box">
            <span className="hw-step-num mono">02</span>
            <h4>逐帧精确定位适配器</h4>
            <p>将 GSAP 等动画引擎设为 <code>paused: true</code>，挂载至 <code>window.__timelines</code>。</p>
          </div>
          <div className="hw-step-box">
            <span className="hw-step-num mono">03</span>
            <h4>无头 Chrome + FFmpeg</h4>
            <p>渲染引擎控制浏览器毫秒级 Seek 捕获帧序列，FFmpeg 进行极速无损编码与旁白混音。</p>
          </div>
        </div>

        <div data-reveal style={{ marginTop: "28px" }}>
          <CodeBlock
            code={compositionSample}
            filename="FIG.01 / INDEX.HTML"
            comment="一段完整的合成：视频轨道 + 标题动画 + 背景音乐"
          />
          <p className="figure-cap mono">
            <b>▸</b> 相同输入、相同帧、相同输出 —— 渲染器在无头 Chrome 中逐帧定位，由 FFmpeg 编码
          </p>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <SceneHead
          no="SC.05"
          title="HyperFrames 技术栈"
          lede="开源渲染引擎，加上围绕 HTML 原生视频创作不断成长的一整套工具生态。"
        />
        <div className="table-wrap" data-reveal>
          <table>
            <thead>
              <tr>
                <th>组件</th>
                <th>状态</th>
                <th>作用</th>
              </tr>
            </thead>
            <tbody>
              {stackRows.map((r) => (
                <tr key={r.component}>
                  <td className="code-cell">
                    {r.link ? (
                      <a className="link-accent" href={r.link} target="_blank" rel="noreferrer">
                        {r.component} ↗
                      </a>
                    ) : (
                      r.component
                    )}
                  </td>
                  <td>
                    <span className="status-tag">{r.status}</span>
                  </td>
                  <td className="dim">{r.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  return (
    <section className="section alt" id="catalog">
      <div className="container">
        <SceneHead
          no="SC.06"
          title="组件库"
          lede={
            <>
              安装即拿即用的块与组件：着色器转场、社交叠层、动态图表等。在{" "}
              <a
                href="https://hyperframes.heygen.com/catalog/blocks/data-chart"
                target="_blank"
                rel="noreferrer"
              >
                hyperframes.heygen.com/catalog
              </a>{" "}
              浏览完整目录。
            </>
          }
        />
        <div data-reveal>
          <CodeBlock
            code={addSamples}
            filename="FIG.02 / ADD BLOCKS"
            comment="三条命令接入注册表中的可复用组件"
          />
        </div>
      </div>
    </section>
  );
}

function WhyAndCompare() {
  return (
    <>
      <section className="section" id="why">
        <div className="container">
          <SceneHead
            no="SC.07"
            title="为什么选择 HyperFrames？"
            lede="为人类开发者与 AI 智能体共同打造的下一代 Web 原生可编程视频渲染架构。"
          />
          <div className="manifesto-grid">
            {manifesto.map((m, i) => (
              <article key={m.claim} className="mani-card" data-reveal>
                <div className="mani-card-top">
                  <span className="mani-num mono">{String(i + 1).padStart(2, "0")}</span>
                  <div className="mani-icon" aria-hidden="true">
                    <SemanticIcon name={m.icon} size={20} />
                  </div>
                </div>
                <h3 className="mani-claim">{m.claim}</h3>
                <p className="mani-detail">{m.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="compare">
        <div className="container">
          <SceneHead
            no="SC.08"
            title="分屏对照：HyperFrames vs Remotion"
            lede={
              <>
                两者都用无头 Chrome 与 FFmpeg 渲染视频，灵感同样来自浏览器时代。区别在于创作模型：
                Remotion 押注 React 组件，
                <strong>HyperFrames 押注人类与智能体都能轻松编写的纯 HTML</strong>。
              </>
            }
          />
          <div className="vs-frame" data-reveal>
            <div className="vs-grid vs-head">
              <div className="vs-cell">
                <span className="vs-brand hf">HyperFrames</span>
              </div>
              <div className="vs-center" aria-hidden="true" />
              <div className="vs-cell dim">
                <span className="vs-brand" style={{ color: "var(--muted)" }}>
                  Remotion
                </span>
              </div>
            </div>
            {compareRows.map((r) => (
              <div key={r.aspect} className="vs-grid vs-row">
                <div className="vs-val hf-col">{r.hyperframes}</div>
                <div className="vs-key vs-center mono">{r.aspect}</div>
                <div className="vs-val dim">{r.remotion}</div>
              </div>
            ))}
          </div>
          <p className="vs-note mono">
            <a
              href="https://hyperframes.heygen.com/guides/hyperframes-vs-remotion"
              target="_blank"
              rel="noreferrer"
            >
              ▸ 阅读完整对比指南 ↗
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

function DocsAndPackages() {
  return (
    <section className="section" id="docs">
      <div className="container">
        <SceneHead
          no="SC.09"
          title="文档与软件包"
          lede={
            <>
              完整文档见{" "}
              <a
                href="https://hyperframes.heygen.com/introduction"
                target="_blank"
                rel="noreferrer"
              >
                hyperframes.heygen.com/introduction
              </a>
            </>
          }
        />
        <div className="docs-grid" data-reveal>
          {docsLinks.map((d) => (
            <a
              key={d.label}
              className="doc-chip mono"
              href={d.href}
              target="_blank"
              rel="noreferrer"
            >
              {d.label} ↗
            </a>
          ))}
        </div>
        <div className="table-wrap" data-reveal>
          <table>
            <thead>
              <tr>
                <th>软件包</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              {packageRows.map((p) => (
                <tr key={p.name}>
                  <td className="code-cell">
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {p.name}
                    </a>
                  </td>
                  <td className="dim">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="section alt" id="community">
      <div className="container">
        <SceneHead
          no="SC.10"
          title="社区"
          lede="已在 HeyGen 投入生产使用，并有来自 tldraw、TanStack 等团队的社区示例（ADOPTERS.md）。你的团队正在使用？欢迎提交 PR 加入名单。"
        />
        <div className="comm-grid" data-reveal>
          <article className="comm-card">
            <span className="comm-idx mono">CH.01 / DISCORD</span>
            <h3>问题与想法</h3>
            <p>
              到{" "}
              <a href="https://discord.gg/EbK98HBPdk" target="_blank" rel="noreferrer">
                Discord
              </a>{" "}
              与团队和社区实时交流。
            </p>
          </article>
          <article className="comm-card">
            <span className="comm-idx mono">CH.02 / ISSUES</span>
            <h3>缺陷与功能请求</h3>
            <p>
              提交{" "}
              <a
                href="https://github.com/heygen-com/hyperframes/issues"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Issues
              </a>{" "}
              ；安全报告请参阅 SECURITY.md。
            </p>
          </article>
          <article className="comm-card">
            <span className="comm-idx mono">CH.03 / RESEARCH</span>
            <h3>用户调研</h3>
            <p>预约一次轻松的 30 分钟交流 —— 无需准备，也无销售推销。</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">
              <BrandLogo size={28} />
              <span className="brand-wordmark">
                <span className="brand-hyper">HYPER</span>
                <span className="brand-frames">FRAMES</span>
              </span>
            </div>
            <p>开源框架：HTML + CSS + 可定位动画 → 确定性 MP4 视频。</p>
          </div>
          <div>
            <h3>资源</h3>
            <ul>
              <li>
                <a
                  href="https://hyperframes.heygen.com/quickstart"
                  target="_blank"
                  rel="noreferrer"
                >
                  快速开始
                </a>
              </li>
              <li>
                <a href="https://hyperframes.heygen.com/showcase" target="_blank" rel="noreferrer">
                  作品展示
                </a>
              </li>
              <li>
                <a href="https://www.hyperframes.dev/" target="_blank" rel="noreferrer">
                  在线演练场
                </a>
              </li>
              <li>
                <a href="https://www.hyperframes.dev/design" target="_blank" rel="noreferrer">
                  frame.md 模板
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>参与贡献</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/heygen-com/hyperframes"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub 仓库
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/heygen-com/hyperframes/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  贡献指南
                </a>
              </li>
              <li>
                <a href="https://discord.gg/EbK98HBPdk" target="_blank" rel="noreferrer">
                  Discord 社区
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-word display" aria-hidden="true">
          HYPERFRAMES
        </div>
        <div className="footer-bottom">
          <span>React 19 + TypeScript + Vite+ + Bun</span>
          <Timecode interactive />
          <span>APACHE-2.0 LICENSE</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useCinemaFX();
  const [toastMsg, setToastMsg] = useState<string>("");
  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
  };

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    
    // 即时触发初始视口内的元素
    const checkImmediate = () => {
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 50) {
          el.classList.add("is-in");
        }
      });
    };

    checkImmediate();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容 / Skip to content
      </a>
      <div className="scrub" aria-hidden="true" />
      <i className="cine-bar cine-bar-top" aria-hidden="true" />
      <i className="cine-bar cine-bar-bottom" aria-hidden="true" />
      <CountdownLeader />
      <ProjectorBeam />
      <CinemaHUD onShowToast={showToast} />
      <Toast
        message={toastMsg}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
      <Nav />
      <main id="main">
        <Hero />
        <div aria-hidden="true">
          <Ticker items={tickerItems} />
          <div style={{ borderTop: "1px solid var(--line)" }}>
            <Ticker items={[...tickerItems].reverse()} reverse />
          </div>
        </div>
        <QuickStart />
        <Playground onShowToast={showToast} />
        <PromptWizard onShowToast={showToast} />
        <BuildList />
        <HowItWorks />
        <SkillsCatalog onShowToast={showToast} />
        <Stack />
        <FrameGallery onShowToast={showToast} />
        <Catalog />
        <WhyAndCompare />
        <DocsAndPackages />
        <Community />
      </main>
      <Footer />
    </>
  );
}
