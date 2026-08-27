import { useState, useEffect } from "react";
import { soundFX } from "../utils/audioFX";
import { Timecode } from "./Motion";
import { VolumeUpIcon, VolumeMuteIcon } from "./Icons";

interface CinemaHUDProps {
  onShowToast: (msg: string) => void;
}

export default function CinemaHUD({ onShowToast }: CinemaHUDProps) {
  const [activeScene, setActiveScene] = useState<string>("SC.HERO");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [sfxActive, setSfxActive] = useState<boolean>(soundFX.isEnabled());
  const [showBackTop, setShowBackTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      const progress = total > 0 ? (current / total) * 100 : 0;
      setScrollProgress(progress);
      setShowBackTop(current > 500);

      // 自动侦测当前视口处于哪一幕
      const sections = [
        { id: "top", name: "SC.HERO" },
        { id: "quickstart", name: "SC.01 / 快速开始" },
        { id: "playground", name: "SC.LIVE / 实时工坊" },
        { id: "wizard", name: "SC.WIZARD / PROMPT" },
        { id: "build", name: "SC.02 / 构建范围" },
        { id: "how-it-works", name: "SC.03 / 工作原理" },
        { id: "skills", name: "SC.04 / SKILLS 矩阵" },
        { id: "stack", name: "SC.05 / 技术栈" },
        { id: "frame-gallery", name: "SC.FRAME / 设计系统" },
        { id: "catalog", name: "SC.06 / 组件库" },
        { id: "why", name: "SC.07 / 为什么选 HF" },
        { id: "compare", name: "SC.08 / REMOTION 对比" },
        { id: "docs", name: "SC.09 / 文档与包" },
        { id: "community", name: "SC.10 / 社区" },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveScene(sections[i].name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = soundFX.toggle();
    setSfxActive(next);
    onShowToast(next ? "电影微音效已开启" : "电影微音效已静音");
  };

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="cinema-hud" aria-label="放映控制台">
      {/* 滚动进度细线 */}
      <div className="hud-progress-track">
        <div className="hud-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="hud-content">
        <div className="hud-meta mono">
          <i className="rec-dot is-blinking" aria-hidden="true" />
          <span className="hud-scene-name">{activeScene}</span>
        </div>

        <div className="hud-divider" />

        <div className="hud-timecode">
          <Timecode interactive />
        </div>

        <div className="hud-divider" />

        <div className="hud-actions">
          <button
            type="button"
            className={`hud-btn mono ${sfxActive ? "is-active" : ""}`}
            onClick={toggleSound}
            title={sfxActive ? "关闭微音效" : "开启微音效 (Web Audio)"}
            aria-label="音效开关"
          >
            {sfxActive ? (
              <>
                <VolumeUpIcon size={13} />
                <span>SFX ON</span>
              </>
            ) : (
              <>
                <VolumeMuteIcon size={13} />
                <span>SFX OFF</span>
              </>
            )}
          </button>

          {showBackTop && (
            <button
              type="button"
              className="hud-btn hud-back-top mono"
              onClick={scrollToTop}
              title="返回片头 / Back to Top"
              aria-label="返回片头"
            >
              ▲ TOP
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
