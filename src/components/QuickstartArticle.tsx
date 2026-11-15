import CodeBlock from "./CodeBlock";

const shortWayCmd = `npx hyperframes skills update`;

const shortWayPrompt = `Set this folder up for HyperFrames and make me a video.

1. If the HyperFrames plugin is installed, use its bundled skills and launcher. If the HyperFrames skills are missing, stop and tell me: I install them with npx hyperframes skills update
2. Then, using /hyperframes, make a 10-second product intro for https://example.com
3. Open the local preview when it is done and tell me the project folder.`;

const skillsAddCmd = `npx skills add heygen-com/hyperframes`;

const askVideoPrompt = `Using /hyperframes, make a 10-second product intro for https://example.com.`;

export default function QuickstartArticle() {
  return (
    <>
      <div className="docs-hero">
        <p className="docs-kicker mono">QUICKSTART · 制作你的第一个视频</p>
        <h1 className="docs-title">
          <span className="docs-title-line">一句话，生成你的</span>
          <em className="docs-title-line">第一支视频</em>
        </h1>
        <p className="docs-lede">
          在免费的 <strong>Studio 应用</strong>（macOS / Windows / Linux）中制作你的第一支
          HyperFrames 视频，或者用你自己的 AI 智能体、或者在 AI 聊天里零安装完成 ——
          三种方式最终产出的都是同一种项目：<strong>HTML + 可定位动画 → 确定性 MP4</strong>，
          可长期编辑。
        </p>
        <ul className="docs-meta mono">
          <li>来源 · hyperframes.heygen.com/quickstart</li>
          <li>语言 · 中文版</li>
          <li>阅读约 5 分钟</li>
        </ul>

        <figure className="docs-video">
          <video
            src="https://static.heygen.ai/hyperframes-oss/docs/studio-demos/first-video-demo-v2.mp4"
            poster="https://hyperframes.heygen.com/public/images/studio-app/first-video-demo-v2.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            controls
            aria-label="在 Studio 应用中制作第一支视频的演示：一句话需求、几个问题、故事板、成片"
          />
          <figcaption className="figure-cap mono">
            <b>▸</b> 演示 · 从一句话需求到成片（官方素材）
          </figcaption>
        </figure>

        <div className="docs-download-card">
          <div>
            <p className="mono docs-download-tag">STUDIO APP · 免费下载</p>
            <p className="docs-download-desc">
              支持 macOS（Apple Silicon / Intel）、Windows（含 Arm）、Linux， 登录免费 HeyGen
              账号即可使用。
            </p>
          </div>
          <a
            className="btn btn-primary"
            href="https://hyperframes.studio/studio/download?src=docs-quickstart-top"
            target="_blank"
            rel="noreferrer"
          >
            <span>下载 HyperFrames Studio</span>
          </a>
        </div>
      </div>

      <article className="docs-article" style={{ maxWidth: "none" }}>
        {/* ---- Studio ---- */}
        <section className="docs-section" id="docs-studio">
          <div className="scene-meta">
            <span className="scene-no mono">WAY 01</span>
            <span className="scene-rule" />
          </div>
          <h2 className="docs-h2">在 Studio 应用中（最简单）</h2>
          <p className="docs-p">
            应用会在实时预览旁运行你的智能体，你用打字、指点或手绘的方式修改视频。 支持 Mac（Apple
            Silicon / Intel）、Windows（含 Arm）、Linux。
          </p>

          <ol className="docs-steps">
            <li className="docs-step">
              <span className="docs-step-num mono">01</span>
              <div>
                <h3>下载并安装</h3>
                <p>
                  下载 Studio 应用并打开，使用免费 HeyGen 账号登录。 各系统安装步骤见{" "}
                  <a
                    href="https://hyperframes.heygen.com/studio-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Install the Studio app
                  </a>
                  。
                </p>
                <p className="docs-step-cta">
                  <a
                    className="btn btn-secondary btn-sm"
                    href="https://hyperframes.studio/studio/download?src=docs-quickstart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    下载 Studio 应用
                  </a>
                </p>
              </div>
            </li>
            <li className="docs-step">
              <span className="docs-step-num mono">02</span>
              <div>
                <h3>提出你的视频需求</h3>
                <p>
                  在 <code>Make something</code> 中输入你想要的内容并发送，Framey
                  会问几个问题、展示故事板，然后建成影片。
                </p>
              </div>
            </li>
            <li className="docs-step">
              <span className="docs-step-num mono">03</span>
              <div>
                <h3>修改成片</h3>
                <p>
                  在聊天中提修改意见，或直接指着画面改。完整步骤见{" "}
                  <a
                    href="https://hyperframes.heygen.com/studio-app/first-video"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Make your first video in the app
                  </a>
                  。
                </p>
              </div>
            </li>
          </ol>

          <div className="docs-card">
            <p className="mono docs-card-tag">练习 · THE BRIEF</p>
            <p className="docs-card-title">
              <a
                href="https://hyperframes.heygen.com/lessons/the-brief"
                target="_blank"
                rel="noreferrer"
              >
                Practice it: The brief
              </a>
            </p>
            <p>
              免费 20 分钟课程：短片 + 测验 + 简报练习。简报 = 目标 + 受众 + 2–4 个具体要求 +
              逐字引用的原话。
            </p>
          </div>
        </section>

        {/* ---- Agent ---- */}
        <section className="docs-section" id="docs-agent">
          <div className="scene-meta">
            <span className="scene-no mono">WAY 02</span>
            <span className="scene-rule" />
          </div>
          <h2 className="docs-h2">与你的智能体一起</h2>
          <p className="docs-p">
            适用于 Claude Code、Codex、Cursor、Copilot、Gemini CLI，
            以及任何在本地文件夹中工作的智能体，任何系统均可。
          </p>

          <h3 className="docs-h3" id="docs-agent-short">
            最短路径
          </h3>
          <p className="docs-p">
            如果还没装 HyperFrames 插件，在项目文件夹的终端里先装一次
            skills，然后在该文件夹打开（或重启）你的编程智能体：
          </p>
          <CodeBlock code={shortWayCmd} filename="TERMINAL / INSTALL SKILLS" />

          <p className="docs-p">把下面这段粘贴给智能体，它会生成视频并打开预览。你只需要改 URL：</p>
          <CodeBlock
            code={shortWayPrompt}
            filename="PROMPT → AGENT"
            comment="粘贴给智能体的提示词（保持英文原文，效果最稳定）"
          />

          <h3 className="docs-h3" id="docs-agent-steps">
            分步流程
          </h3>
          <ol className="docs-steps">
            <li className="docs-step">
              <span className="docs-step-num mono">1</span>
              <div>
                <h3>安装插件或 skills</h3>
                <p>
                  分步教程：{" "}
                  <a
                    href="https://hyperframes.heygen.com/guides/with-claude-code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Claude Code
                  </a>
                  {" · "}
                  <a
                    href="https://hyperframes.heygen.com/guides/with-codex"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Codex
                  </a>
                  {" · "}
                  <a
                    href="https://hyperframes.heygen.com/guides/with-cursor"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Cursor
                  </a>
                  。
                </p>
                <p>
                  Claude Code、Copilot、VS Code、Cursor、Gemini CLI 请先看{" "}
                  <a
                    href="https://hyperframes.heygen.com/guides/plugins"
                    target="_blank"
                    rel="noreferrer"
                  >
                    插件安装指南
                  </a>
                  （含各智能体的更新设置）。Claude 的入口 skill 是{" "}
                  <code>/hyperframes:hyperframes</code>。
                </p>
                <p>独立 skills：在项目文件夹运行后，在选择器中选 Core Skills：</p>
                <CodeBlock code={skillsAddCmd} filename="TERMINAL / STANDALONE SKILLS" />
              </div>
            </li>
            <li className="docs-step">
              <span className="docs-step-num mono">2</span>
              <div>
                <h3>提出视频需求</h3>
                <CodeBlock code={askVideoPrompt} filename="PROMPT → AGENT" />
                <p>
                  把 <code>https://example.com</code> 换成你想展示的页面。
                  如果做较长的叙事片，智能体会先给你三个故事线挑选。
                </p>
              </div>
            </li>
            <li className="docs-step">
              <span className="docs-step-num mono">3</span>
              <div>
                <h3>从第一版继续</h3>
                <p>
                  智能体会留下项目文件夹，并在浏览器编辑器中打开预览。 之后重开：在项目文件夹运行{" "}
                  <code>npx hyperframes preview</code>。下面三种路径共用同一项目。
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* ---- Chat ---- */}
        <section className="docs-section" id="docs-chat">
          <div className="scene-meta">
            <span className="scene-no mono">WAY 03</span>
            <span className="scene-rule" />
          </div>
          <h2 className="docs-h2">在 AI 聊天里（零安装）</h2>
          <p className="docs-p">
            在 Claude.ai 或 ChatGPT 中，HyperFrames 连接器会在你的 HeyGen
            账号内构建并渲染视频。你不需要项目文件夹，也不需要本地渲染。
          </p>
          <p className="docs-cta">
            <a
              className="btn btn-ghost btn-sm"
              href="https://hyperframes.heygen.com/guides/mcp"
              target="_blank"
              rel="noreferrer"
            >
              <span>连接 HyperFrames 到 AI 聊天</span>
            </a>
          </p>
        </section>

        {/* ---- Related ---- */}
        <section className="docs-section" id="docs-related">
          <div className="scene-meta">
            <span className="scene-no mono">NEXT</span>
            <span className="scene-rule" />
          </div>
          <h2 className="docs-h2">相关主题</h2>
          <div className="docs-related-grid">
            <div className="docs-card">
              <p className="mono docs-card-tag">WORKFLOWS</p>
              <p className="docs-card-title">
                <a href="https://hyperframes.heygen.com/workflows" target="_blank" rel="noreferrer">
                  Choose what to make
                </a>
              </p>
              <p>产品发布、解说、字幕、剪辑、PR、音乐、动态图形或演示文稿。</p>
            </div>
            <div className="docs-card">
              <p className="mono docs-card-tag">STUDIO APP</p>
              <p className="docs-card-title">
                <a
                  href="https://hyperframes.heygen.com/studio-app/existing-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  Continue from Claude Code in the app
                </a>
              </p>
              <p>在 Studio 应用里打开智能体做出的项目，再交回去继续。</p>
            </div>
          </div>
          <ul className="docs-related-links mono">
            <li>
              <a
                href="https://hyperframes.heygen.com/studio-app/first-video"
                target="_blank"
                rel="noreferrer"
              >
                ▸ 在 Studio 应用中制作第一支视频
              </a>
            </li>
            <li>
              <a
                href="https://hyperframes.heygen.com/guides/with-cursor"
                target="_blank"
                rel="noreferrer"
              >
                ▸ 使用 Cursor 制作视频
              </a>
            </li>
            <li>
              <a
                href="https://hyperframes.heygen.com/guides/with-codex"
                target="_blank"
                rel="noreferrer"
              >
                ▸ 使用 Codex 制作视频
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
