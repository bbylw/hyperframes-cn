import { useState, useId } from "react";
import { soundFX } from "../utils/audioFX";
import { copyToClipboard } from "../utils/clipboard";
import { SemanticIcon, MusicIcon, SubtitlesIcon } from "./Icons";

interface PromptWizardProps {
  onShowToast: (msg: string) => void;
}

export default function PromptWizard({ onShowToast }: PromptWizardProps) {
  const [videoType, setVideoType] = useState<string>("product-launch");
  const [aspectRatio, setAspectRatio] = useState<string>("16:9");
  const [duration, setDuration] = useState<string>("30s");
  const [engine, setEngine] = useState<string>("GSAP");
  const [targetUrlOrTopic, setTargetUrlOrTopic] = useState<string>("https://my-app.io");
  const [audioBed, setAudioBed] = useState<boolean>(true);
  const [captions, setCaptions] = useState<boolean>(true);

  const urlInputId = useId();

  // 根据选定参数生成智能体提示词
  const getSkillName = () => {
    switch (videoType) {
      case "product-launch":
        return "/product-launch-video";
      case "pr-walkthrough":
        return "/pr-to-video";
      case "data-viz":
        return "/motion-graphics";
      case "captions":
        return "/embedded-captions";
      case "explainer":
        return "/faceless-explainer";
      default:
        return "/hyperframes";
    }
  };

  const generateAgentPrompt = () => {
    const skill = getSkillName();
    let prompt = `使用 ${skill} 技能，为我制作一支 ${duration} 的确定性视频。\n`;
    prompt += `• 输入源: ${targetUrlOrTopic}\n`;
    prompt += `• 画幅比例: ${aspectRatio}（目标分辨率: ${aspectRatio === "16:9" ? "1920x1080" : aspectRatio === "9:16" ? "1080x1920" : "1080x1080"}）\n`;
    prompt += `• 动画引擎: ${engine}（严格使用 paused: true 可安全定位时间线）\n`;
    if (audioBed) prompt += `• 音频要求: 接入符合节奏的背景音乐（通过 /media-use 解析并使用 /hyperframes-audio 进行旁白雕刻）\n`;
    if (captions) prompt += `• 字幕要求: 包含动态逐字高潮字幕，重点文字发光或高亮\n`;
    prompt += `• 输出标准: 产出符合 HyperFrames 合成契约的 index.html，并执行 npx hyperframes render 导出 MP4。`;
    return prompt;
  };

  const generateCliCommand = () => {
    const skill = getSkillName().replace("/", "");
    return `# 1. 确保已安装并同步对应技能
npx hyperframes skills update ${skill}

# 2. 初始化项目工程并进入
npx hyperframes init my-${videoType}-video --ratio=${aspectRatio}
cd my-${videoType}-video

# 3. 浏览器热重载实时预览
npx hyperframes preview

# 4. 导出确定性 MP4 视频
npx hyperframes render --fps=30`;
  };

  const copyPrompt = async () => {
    soundFX.playSnap();
    const ok = await copyToClipboard(generateAgentPrompt());
    if (ok) {
      onShowToast("AI 智能体提示词已复制到剪贴板！");
    } else {
      onShowToast("复制失败，请手动选取");
    }
  };

  const copyCli = async () => {
    soundFX.playSnap();
    const ok = await copyToClipboard(generateCliCommand());
    if (ok) {
      onShowToast("CLI 命令链已复制到剪贴板！");
    } else {
      onShowToast("复制失败，请手动选取");
    }
  };

  return (
    <section className="section wizard-section" id="wizard">
      <div className="container">
        <div className="scene-head">
          <div className="scene-meta">
            <span className="scene-no mono" data-scramble>
              SC.WIZARD
            </span>
            <span className="scene-rule" data-draw />
          </div>
          <h2 className="scene-title">AI 智能体提示词 & CLI 生成器</h2>
          <p className="scene-lede">
            无需手动拼装复杂的合成规约 —— <strong>点选你的视频需求</strong>，
            一键生成可直接交付给 Claude Code、Cursor、Codex 等 AI 智能体的 Prompt 与初始化命令。
          </p>
        </div>

        <div className="wizard-grid">
          {/* 左侧：参数配置器 */}
          <div className="wizard-form-card">
            <div className="wz-group">
              <label className="wz-label mono">01 / 视频场景类型</label>
              <div className="wz-chips">
                {[
                  { id: "product-launch", label: "产品发布短片", iconKey: "rocket" },
                  { id: "pr-walkthrough", label: "GitHub PR 讲解", iconKey: "git-pr" },
                  { id: "data-viz", label: "数据图表与动态图形", iconKey: "data-chart" },
                  { id: "captions", label: "电影感逐字字幕", iconKey: "captions" },
                  { id: "explainer", label: "概念与文档科普", iconKey: "document" },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    className={`wz-chip ${videoType === t.id ? "is-active" : ""}`}
                    onClick={() => {
                      soundFX.playClick();
                      setVideoType(t.id);
                    }}
                  >
                    <span className="wz-chip-icon" aria-hidden="true">
                      <SemanticIcon name={t.iconKey} size={14} />
                    </span>
                    <span>{t.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="wz-group">
              <label htmlFor={urlInputId} className="wz-label mono">
                02 / 输入目标（URL 或主题）
              </label>
              <input
                id={urlInputId}
                type="text"
                value={targetUrlOrTopic}
                onChange={(e) => setTargetUrlOrTopic(e.target.value)}
                placeholder="例如: https://github.com/heygen-com/hyperframes 或 讲解量子计算原理"
                className="wz-input mono"
              />
            </div>

            <div className="wz-row-group">
              <div className="wz-group flex-1">
                <label className="wz-label mono">03 / 画幅比例</label>
                <div className="wz-chips">
                  {["16:9", "9:16", "1:1"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      className={`wz-chip ${aspectRatio === r ? "is-active" : ""}`}
                      onClick={() => {
                        soundFX.playClick();
                        setAspectRatio(r);
                      }}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="wz-group flex-1">
                <label className="wz-label mono">04 / 目标时长</label>
                <div className="wz-chips">
                  {["10s", "30s", "60s", "90s"].map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`wz-chip ${duration === d ? "is-active" : ""}`}
                      onClick={() => {
                        soundFX.playClick();
                        setDuration(d);
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="wz-row-group">
              <div className="wz-group flex-1">
                <label className="wz-label mono">05 / 动画适配器</label>
                <div className="wz-chips">
                  {["GSAP", "Three.js", "Anime.js", "CSS Keyframes"].map((eng) => (
                    <button
                      key={eng}
                      type="button"
                      className={`wz-chip ${engine === eng ? "is-active" : ""}`}
                      onClick={() => {
                        soundFX.playClick();
                        setEngine(eng);
                      }}
                    >
                      {eng}
                    </button>
                  ))}
                </div>
              </div>

              <div className="wz-group flex-1">
                <label className="wz-label mono">06 / 附加增强</label>
                <div className="wz-checks">
                  <label className="wz-check-label">
                    <input
                      type="checkbox"
                      checked={audioBed}
                      onChange={(e) => setAudioBed(e.target.checked)}
                    />
                    <span className="wz-check-content">
                      <MusicIcon size={14} />
                      <span>背景音乐与音效雕刻</span>
                    </span>
                  </label>
                  <label className="wz-check-label">
                    <input
                      type="checkbox"
                      checked={captions}
                      onChange={(e) => setCaptions(e.target.checked)}
                    />
                    <span className="wz-check-content">
                      <SubtitlesIcon size={14} />
                      <span>逐字高潮字幕叠层</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：生成输出卡片 */}
          <div className="wizard-output-card">
            <div className="wz-output-box">
              <div className="wz-out-header">
                <span className="wz-out-title mono">
                  <i className="rec-dot" /> AGENT PROMPT (直接发送给智能体)
                </span>
                <button type="button" className="btn btn-primary btn-sm" onClick={copyPrompt}>
                  复制 Prompt ⎘
                </button>
              </div>
              <pre className="wz-out-code mono">
                <code>{generateAgentPrompt()}</code>
              </pre>
            </div>

            <div className="wz-output-box" style={{ marginTop: "16px" }}>
              <div className="wz-out-header">
                <span className="wz-out-title mono">
                  <i className="rec-dot" />配套 CLI 执行脚本
                </span>
                <button type="button" className="btn btn-ghost btn-sm" onClick={copyCli}>
                  复制 CLI ⎘
                </button>
              </div>
              <pre className="wz-out-code mono">
                <code>{generateCliCommand()}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
