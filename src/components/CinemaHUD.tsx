import { useState, useEffect, useRef } from "react";
import { soundFX } from "../utils/audioFX";
import { Timecode } from "./Motion";
import { VolumeUpIcon, VolumeMuteIcon } from "./Icons";

interface CinemaHUDProps {
  onShowToast: (msg: string) => void;
  docSlug: string | null;
}

const SCENES = [
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

export default function CinemaHUD({ onShowToast, docSlug }: CinemaHUDProps) {
  const [activeScene, setActiveScene] = useState<string>("SC.HERO");
  const [sfxActive, setSfxActive] = useState<boolean>(soundFX.isEnabled());
  const [showBackTop, setShowBackTop] = useState<boolean>(false);
  const barRef = useRef<HTMLDivElement>(null);

  // 阅读进度：仅在支持 scroll timeline 且未开启减弱动态效果时交由 CSS 驱动，否则用滚动监听兜底
  useEffect(() => {
    const bar = barRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const update = () => {
      raf = 0;
      const scrolled = window.scrollY;
      setShowBackTop(scrolled > 500);
      const nativeTimeline = CSS.supports("animation-timeline", "scroll()") && !motionQuery.matches;
      if (!nativeTimeline && bar) {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${total > 0 ? Math.min(scrolled / total, 1) : 0})`;
      } else if (bar) {
        bar.style.transform = "";
      }
    };

    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motionQuery.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motionQuery.removeEventListener("change", update);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [docSlug]);

  // 当前幕：IntersectionObserver 取代每次滚动遍历 getBoundingClientRect
  useEffect(() => {
    if (docSlug !== null) return;
    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        for (let i = SCENES.length - 1; i >= 0; i--) {
          if (visible.has(SCENES[i].id)) {
            setActiveScene(SCENES[i].name);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    const observed: Element[] = [];
    for (const scene of SCENES) {
      const el = document.getElementById(scene.id);
      if (el) {
        io.observe(el);
        observed.push(el);
      }
    }

    return () => {
      observed.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, [docSlug]);

  const displayScene = docSlug !== null ? `DOCS / ${docSlug.toUpperCase()}` : activeScene;

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
      <div className="hud-progress-track" aria-hidden="true">
        <div className="hud-progress-bar" ref={barRef} />
      </div>

      <div className="hud-content">
        <div className="hud-meta mono">
          <i className="rec-dot is-blinking" aria-hidden="true" />
          <span className="hud-scene-name">{displayScene}</span>
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
