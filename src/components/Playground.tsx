import { useEffect, useRef, useState, useTransition } from "react";
import { playgroundPresets, type PlaygroundPreset } from "../data/playgroundData";
import { soundFX } from "../utils/audioFX";
import { copyToClipboard } from "../utils/clipboard";
import { SemanticIcon, BotAgentIcon } from "./Icons";

interface PlaygroundProps {
  onShowToast: (msg: string) => void;
}

export default function Playground({ onShowToast }: PlaygroundProps) {
  const [selectedId, setSelectedId] = useState<string>("product-launch");
  const [currentTime, setCurrentTime] = useState<number>(1.8);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [fps, setFps] = useState<number>(24);
  const [activeTab, setActiveTab] = useState<"html" | "gsap" | "cli">("html");
  const [, startTransition] = useTransition();

  const preset = playgroundPresets.find((p) => p.id === selectedId) ?? playgroundPresets[0];
  const maxDuration = preset.duration;

  // 动画走带循环
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!isPlaying) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      setCurrentTime((prev) => {
        const next = prev + delta;
        if (next >= maxDuration) {
          return 0; // 自动循环播放
        }
        return next;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPlaying, maxDuration]);

  // 格式化 SMPTE 时间码
  const formatTimecode = (seconds: number) => {
    const totalFrames = Math.floor(seconds * fps);
    const f = totalFrames % fps;
    const s = Math.floor(seconds) % 60;
    const m = Math.floor(seconds / 60) % 60;
    const p = (n: number) => String(n).padStart(2, "0");
    return `${p(m)}:${p(s)}:${p(f)}`;
  };

  const handlePresetChange = (id: string) => {
    soundFX.playClick();
    startTransition(() => {
      setSelectedId(id);
      setCurrentTime(1.8);
    });
  };

  const togglePlay = () => {
    soundFX.playClick();
    setIsPlaying((prev) => !prev);
  };

  const stepFrame = (deltaFrames: number) => {
    soundFX.playTick();
    setIsPlaying(false);
    const frameDuration = 1 / fps;
    setCurrentTime((prev) => {
      const next = prev + deltaFrames * frameDuration;
      return Math.max(0, Math.min(maxDuration, next));
    });
  };

  const copyCode = async () => {
    soundFX.playSnap();
    const content =
      activeTab === "html"
        ? preset.htmlCode
        : activeTab === "gsap"
          ? preset.gsapCode
          : `npx hyperframes init ${preset.id}-video\ncd ${preset.id}-video\nnpx hyperframes render`;
    const ok = await copyToClipboard(content);
    if (ok) {
      onShowToast("代码与命令已复制到剪贴板");
    } else {
      onShowToast("复制失败，请手动选取");
    }
  };

  // 渲染动态画布
  const renderLiveCanvas = (p: PlaygroundPreset, t: number) => {
    const progress = Math.min(1, Math.max(0, t / p.duration));

    if (p.id === "product-launch") {
      // 计算卡片与指标动画
      const cardY = t < 0.5 ? 60 : Math.max(0, 60 - (t - 0.5) * 50);
      const cardOpacity = t < 0.5 ? 0 : Math.min(1, (t - 0.5) / 0.8);
      const cardScale = t < 0.5 ? 0.9 : Math.min(1, 0.9 + (t - 0.5) * 0.1);
      
      const cursorX = t < 1.2 ? 50 : Math.min(220, 50 + (t - 1.2) * 120);
      const cursorY = t < 1.2 ? 180 : Math.max(120, 180 - (t - 1.2) * 40);
      const isClicked = t >= 2.0 && t <= 2.4;

      const currentFPS = t < 1.8 ? 0 : Math.min(60, Math.floor((t - 1.8) * 35));
      const currentStars = t < 2.0 ? 0 : Math.min(12.8, Number(((t - 2.0) * 6.4).toFixed(1)));

      return (
        <div className="pg-screen pg-launch-screen">
          <div
            className="pg-glow-orb"
            style={{
              transform: `scale(${1 + Math.sin(t * 2) * 0.15}) translate(${Math.sin(t) * 20}px, ${Math.cos(t) * 15}px)`,
            }}
          />
          <div
            className="pg-card"
            style={{
              transform: `translate3d(0, ${cardY}px, 0) scale(${cardScale})`,
              opacity: cardOpacity,
            }}
          >
            <div className="pg-badge">HYPERFRAMES 2.0</div>
            <h4 className="pg-title">用 HTML 写视频，由 AI 驱动</h4>
            <p className="pg-desc">确定性无头 Chrome 逐帧抽取 · FFmpeg 工业级压制</p>
            <div className="pg-metrics">
              <div className="pg-m-item">
                <span className="pg-m-num">{currentFPS}</span>
                <span className="pg-m-label">Render FPS</span>
              </div>
              <div className="pg-m-item">
                <span className="pg-m-num">{currentStars}k</span>
                <span className="pg-m-label">GitHub Stars</span>
              </div>
            </div>
          </div>

          <div
            className={`pg-cursor ${isClicked ? "is-clicked" : ""}`}
            style={{
              transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`,
              opacity: t >= 1.0 ? 1 : 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                fill="#E2A63D"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            </svg>
            {isClicked && <span className="pg-click-ring" />}
          </div>
        </div>
      );
    }

    if (p.id === "pr-walkthrough") {
      const headerOpacity = Math.min(1, t / 0.6);
      const windowScale = t < 0.6 ? 0.92 : Math.min(1, 0.92 + (t - 0.6) * 0.15);
      const delOpacity = t < 1.2 ? 0 : Math.min(1, (t - 1.2) / 0.5);
      const add1Opacity = t < 1.8 ? 0 : Math.min(1, (t - 1.8) / 0.4);
      const add2Opacity = t < 2.4 ? 0 : Math.min(1, (t - 2.4) / 0.4);
      const tagScale = t < 3.0 ? 0 : Math.min(1, (t - 3.0) / 0.5);

      return (
        <div className="pg-screen pg-pr-screen">
          <div className="pg-pr-header" style={{ opacity: headerOpacity }}>
            <span className="pg-pr-chip">PR #1024</span>
            <span className="pg-pr-h-text">feat: GPU Frame Transition Engine</span>
          </div>

          <div
            className="pg-diff-box"
            style={{
              transform: `scale(${windowScale})`,
              opacity: headerOpacity,
            }}
          >
            <div className="pg-diff-row is-del" style={{ opacity: delOpacity }}>
              <span className="pg-diff-sign">-</span>
              <code>const renderer = new LegacyCanvasRenderer();</code>
            </div>
            <div className="pg-diff-row is-add" style={{ opacity: add1Opacity }}>
              <span className="pg-diff-sign">+</span>
              <code>const renderer = new GPUFrameEngine(&#123; mode: "deterministic" &#125;);</code>
            </div>
            <div className="pg-diff-row is-add" style={{ opacity: add2Opacity }}>
              <span className="pg-diff-sign">+</span>
              <code>await renderer.renderVideo(&#123; format: "mp4", fps: 60 &#125;);</code>
            </div>
          </div>

          <div
            className="pg-agent-stamp"
            style={{
              transform: `scale(${tagScale})`,
              opacity: tagScale,
            }}
          >
            <span className="pg-stamp-icon" aria-hidden="true">
              <BotAgentIcon size={14} />
            </span>
            <span>AI Agent Automated Check: PASSED</span>
          </div>
        </div>
      );
    }

    if (p.id === "data-chart") {
      const b1 = Math.min(15, (t / 1.5) * 15);
      const b2 = Math.min(42, (t / 1.8) * 42);
      const b3 = Math.min(96, (t / 2.2) * 96);
      const highlight = t >= 3.0;

      return (
        <div className="pg-screen pg-chart-screen">
          <div className="pg-chart-head">
            <h4>Rendering Performance Benchmark</h4>
            <span className="pg-chart-tag">Multi-Threaded / Cloud</span>
          </div>
          <div className="pg-chart-bars">
            <div className="pg-bar-item">
              <span className="pg-bar-name">Traditional Cloud</span>
              <div className="pg-bar-bg">
                <div className="pg-bar-val b-dim" style={{ width: `${b1}%` }} />
              </div>
              <span className="pg-bar-score">1.0x</span>
            </div>
            <div className="pg-bar-item">
              <span className="pg-bar-name">React Bundler</span>
              <div className="pg-bar-bg">
                <div className="pg-bar-val b-muted" style={{ width: `${b2}%` }} />
              </div>
              <span className="pg-bar-score">2.8x</span>
            </div>
            <div className="pg-bar-item">
              <span className="pg-bar-name">HyperFrames Lambda</span>
              <div className="pg-bar-bg">
                <div className="pg-bar-val b-gold" style={{ width: `${b3}%` }} />
              </div>
              <span className={`pg-bar-score b-gold-txt ${highlight ? "is-pulse" : ""}`}>
                8.4x
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (p.id === "cinematic-captions") {
      const words = ["HTML", "IS", "THE", "NEW", "TIMELINE"];
      const activeIdx = Math.min(words.length - 1, Math.floor(t / 1.0));

      return (
        <div className="pg-screen pg-caption-screen">
          <div
            className="pg-captions-glow"
            style={{ opacity: 0.2 + (Math.sin(t * 4) + 1) * 0.15 }}
          />
          <div className="pg-captions-words">
            {words.map((w, idx) => {
              const isCurrent = idx === activeIdx;
              const isPast = idx < activeIdx;
              return (
                <span
                  key={w}
                  className={`pg-cap-w ${isCurrent ? "is-active" : isPast ? "is-past" : ""}`}
                >
                  {w}
                </span>
              );
            })}
          </div>
          <div className="pg-audio-waves">
            {Array.from({ length: 24 }).map((_, i) => (
              <span
                key={i}
                className="pg-wave-bar"
                style={{
                  height: `${Math.max(4, Math.sin(t * 8 + i * 0.6) * 22 + 24)}px`,
                  opacity: 0.4 + ((i + (activeIdx % 5)) % 3) * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      );
    }

    // kinetic typography
    const angle = Math.sin(progress * Math.PI) * 4;
    const scale = 0.95 + progress * 0.12;

    return (
      <div
        className="pg-screen pg-kinetic-screen"
        style={{
          transform: `perspective(800px) rotateY(${angle}deg) scale(${scale})`,
        }}
      >
        <div className="pg-kt-row">
          <span className="pg-kt-txt t-sub">NOT JUST CODE</span>
        </div>
        <div className="pg-kt-row">
          <span className="pg-kt-txt t-main">PURE CINEMA</span>
        </div>
        <div className="pg-kt-row">
          <span className="pg-kt-txt t-desc">WEB STANDARDS REINVENTED</span>
        </div>
      </div>
    );
  };

  return (
    <section className="section pg-section" id="playground">
      <div className="container">
        <div className="scene-head">
          <div className="scene-meta">
            <span className="scene-no mono" data-scramble>
              SC.LIVE
            </span>
            <span className="scene-rule" data-draw />
          </div>
          <h2 className="scene-title">实时工坊 · 代码到视频渲染器</h2>
          <p className="scene-lede">
            体验 HTML 与 GSAP 动画的逐帧确定性驱动 ——
            <strong>拖动时间轴游标、切换场景预设</strong>，观察代码如何即时变成高精度视频帧。
          </p>
        </div>

        {/* 预设场景切换栏 */}
        <div className="pg-presets-nav" role="tablist" aria-label="场景预设">
          {playgroundPresets.map((p) => {
            const isSelected = p.id === selectedId;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`pg-preset-btn ${isSelected ? "is-selected" : ""}`}
                onClick={() => handlePresetChange(p.id)}
              >
                <span className="pg-btn-icon" aria-hidden="true">
                  <SemanticIcon name={p.icon} size={18} />
                </span>
                <div className="pg-btn-body">
                  <span className="pg-btn-name">{p.name}</span>
                  <span className="pg-btn-badge mono">{p.badge}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 主工作台 */}
        <div className="pg-workbench">
          {/* 左侧：实时视口与控制器 */}
          <div className="pg-viewport-panel">
            <div className="pg-viewport-header">
              <div className="pg-live-indicator mono">
                <i className={`rec-dot ${isPlaying ? "is-blinking" : ""}`} />
                <span>REC · LIVE VIEW</span>
              </div>
              <div className="pg-view-meta mono">
                <span className="pg-meta-pill">{preset.aspectRatio}</span>
                <span className="pg-meta-pill">CANVAS 1080P</span>
              </div>
            </div>

            {/* 实时渲染视口 */}
            <div className={`pg-canvas-wrapper ratio-${preset.aspectRatio.replace(":", "-")}`}>
              {renderLiveCanvas(preset, currentTime)}
              <div className="pg-canvas-crosshair" aria-hidden="true" />
            </div>

            {/* 时间轴控制器 */}
            <div className="pg-timeline-ctrls">
              <div className="pg-playback-bar">
                <button
                  type="button"
                  className="pg-ctrl-btn"
                  onClick={togglePlay}
                  title={isPlaying ? "暂停 (Space)" : "播放 (Space)"}
                  aria-label={isPlaying ? "暂停" : "播放"}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>
                <button
                  type="button"
                  className="pg-ctrl-btn"
                  onClick={() => stepFrame(-1)}
                  title="上一帧 (Step Back)"
                  aria-label="上一帧"
                >
                  ⏮
                </button>
                <button
                  type="button"
                  className="pg-ctrl-btn"
                  onClick={() => stepFrame(1)}
                  title="下一帧 (Step Forward)"
                  aria-label="下一帧"
                >
                  ⏭
                </button>

                <div className="pg-time-display mono">
                  <span className="pg-tc-current">{formatTimecode(currentTime)}</span>
                  <span className="pg-tc-sep">/</span>
                  <span className="pg-tc-total">{formatTimecode(maxDuration)}</span>
                </div>

                <div className="pg-fps-select mono">
                  <label htmlFor="fps-select" className="sr-only">
                    FPS 选择
                  </label>
                  <select
                    id="fps-select"
                    value={fps}
                    onChange={(e) => {
                      soundFX.playClick();
                      setFps(Number(e.target.value));
                    }}
                    className="pg-select"
                  >
                    <option value={24}>24 FPS (Film)</option>
                    <option value={30}>30 FPS (Web)</option>
                    <option value={60}>60 FPS (Smooth)</option>
                  </select>
                </div>
              </div>

              {/* 进度游标 Scrubber */}
              <div className="pg-scrub-container">
                <input
                  type="range"
                  min="0"
                  max={maxDuration}
                  step="0.02"
                  value={currentTime}
                  onChange={(e) => {
                    setIsPlaying(false);
                    setCurrentTime(Number(e.target.value));
                  }}
                  className="pg-slider"
                  aria-label="时间轴拖动定位"
                />
                <div
                  className="pg-slider-fill"
                  style={{ width: `${(currentTime / maxDuration) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* 右侧：代码与命令检视器 */}
          <div className="pg-code-panel">
            <div className="pg-code-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "html"}
                className={`pg-tab ${activeTab === "html" ? "is-active" : ""}`}
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab("html");
                }}
              >
                INDEX.HTML
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "gsap"}
                className={`pg-tab ${activeTab === "gsap" ? "is-active" : ""}`}
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab("gsap");
                }}
              >
                ANIMATION.JS
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "cli"}
                className={`pg-tab ${activeTab === "cli" ? "is-active" : ""}`}
                onClick={() => {
                  soundFX.playClick();
                  setActiveTab("cli");
                }}
              >
                CLI 渲染命令
              </button>

              <button type="button" className="pg-copy-btn" onClick={copyCode}>
                <span>复制代码 ⎘</span>
              </button>
            </div>

            <div className="pg-code-body mono">
              <pre>
                <code>
                  {activeTab === "html" && preset.htmlCode}
                  {activeTab === "gsap" && preset.gsapCode}
                  {activeTab === "cli" &&
                    `# 1. 建立该合成脚手架\nnpx hyperframes init ${preset.id}-demo\n\n# 2. 浏览器热重载实时调试\ncd ${preset.id}-demo\nnpx hyperframes preview\n\n# 3. 逐帧导出确定性 MP4 视频\nnpx hyperframes render --composition=${preset.id} --fps=${fps}`}
                </code>
              </pre>
            </div>

            <div className="pg-code-footer">
              <p className="pg-footer-hint mono">
                <b>ARCH DOC / 架构原理：</b>
                HyperFrames 会挂载 <code>window.__timelines</code>
                ，无头浏览器在此时间线上以毫秒精度定位并调用 FFmpeg 输出视频。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
