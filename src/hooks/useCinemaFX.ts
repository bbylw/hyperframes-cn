import { useEffect } from "react";

const SPOT_SELECTOR = ".chan,.clapper,.vs-frame,.term,.wizard-form-card,.wizard-output-card,.pg-viewport-panel,.pg-code-panel,.skill-card,.frame-card";
const SCRAMBLE_CHARS = "01<>/#▮▯";

export function useCinemaFX() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // 字符乱码破译动效
    const seg = new Intl.Segmenter("zh-CN", { granularity: "grapheme" });

    const scramble = (el: HTMLElement) => {
      const finalText = el.textContent ?? "";
      if (!finalText.trim()) return;
      let step = 0;
      const graphemes = Array.from(seg.segment(finalText), (s) => s.segment);
      const total = Math.max(10, graphemes.length);
      const iv = window.setInterval(() => {
        step += 1;
        el.textContent = graphemes
          .map((ch, i) => {
            if (i < step || ch === " " || ch === "·" || ch === "/") return ch;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join("");
        if (step >= total) {
          window.clearInterval(iv);
          el.textContent = finalText;
        }
      }, 26);
    };

    // 优化视口观察器，使用宽容的阈值与 rootMargin
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          const target = e.target as HTMLElement;
          if (target.dataset.scramble !== undefined) {
            scramble(target);
          }
          target.classList.add("is-in");
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    document.querySelectorAll("[data-scramble], [data-draw]").forEach((el) => io.observe(el));

    // 仅在精细指针（鼠标）设备上启用 spotlight / 磁吸效果
    if (!window.matchMedia("(pointer: fine)").matches) {
      return () => io.disconnect();
    }

    let curMagnet: HTMLElement | null = null;
    let pendingFrame = 0;
    let lastEvent: PointerEvent | null = null;

    const resetMagnet = (el: HTMLElement) => {
      el.style.transform = "";
    };

    const applyPointer = () => {
      pendingFrame = 0;
      const e = lastEvent;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const spot = target?.closest(SPOT_SELECTOR) as HTMLElement | null;
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const magnet = target?.closest("[data-magnet]") as HTMLElement | null;
      if (magnet !== curMagnet) {
        if (curMagnet) resetMagnet(curMagnet);
        curMagnet = magnet;
      }
      if (magnet) {
        const r = magnet.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const x = Math.max(-7, Math.min(7, dx * 0.22));
        const y = Math.max(-5, Math.min(5, dy * 0.22));
        magnet.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      lastEvent = e;
      if (!pendingFrame) pendingFrame = window.requestAnimationFrame(applyPointer);
    };

    const onLeaveWindow = () => {
      if (curMagnet) {
        resetMagnet(curMagnet);
        curMagnet = null;
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      if (pendingFrame) window.cancelAnimationFrame(pendingFrame);
      if (curMagnet) resetMagnet(curMagnet);
    };
  }, []);
}
