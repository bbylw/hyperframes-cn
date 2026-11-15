import { memo, useEffect, useRef, useState } from "react";

function formatFrames(total: number): string {
  const fps = 24;
  const frames = total % fps;
  const seconds = Math.floor(total / fps);
  const s = seconds % 60;
  const m = Math.floor(seconds / 60) % 60;
  const h = Math.floor(seconds / 3600);
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(h)}:${p(m)}:${p(s)}:${p(frames)}`;
}

interface TimecodeProps {
  interactive?: boolean;
}

export const Timecode = memo(function Timecode({ interactive }: TimecodeProps) {
  const [running, setRunning] = useState(true);
  const textRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    // rAF 驱动 + 直接写 textContent，绕开 React 重渲染；
    // 暂停或页面隐藏时彻底停止调度 rAF，避免后台空转
    let raf = 0;
    let last = 0;

    const step = (t: number) => {
      raf = 0;
      if (document.hidden) return;
      if (t - last >= 1000 / 24) {
        last = t;
        frameRef.current += 1;
        if (textRef.current) textRef.current.textContent = formatFrames(frameRef.current);
      }
      raf = window.requestAnimationFrame(step);
    };

    const start = () => {
      if (!raf && !document.hidden) {
        last = performance.now();
        raf = window.requestAnimationFrame(step);
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (raf) {
          window.cancelAnimationFrame(raf);
          raf = 0;
        }
      } else {
        start();
      }
    };

    start();
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [running]);

  const text = (
    <span className="timecode mono" ref={textRef}>
      {formatFrames(0)}
    </span>
  );

  if (!interactive) {
    return text;
  }

  return (
    <button
      type="button"
      className={running ? "timecode mono timecode-btn" : "timecode mono timecode-btn is-paused"}
      onClick={() => setRunning((r) => !r)}
      title={running ? "暂停走带 / Pause" : "继续走带 / Play"}
      aria-pressed={!running}
      aria-label={running ? "暂停时间码" : "继续时间码"}
    >
      <span aria-hidden="true">{running ? "▶" : "❚❚"}</span>
      {text}
    </button>
  );
});

interface TickerProps {
  items: string[];
  reverse?: boolean;
}

export const Ticker = memo(function Ticker({ items, reverse }: TickerProps) {
  const list = (ariaHidden: boolean) => (
    <ul className="ticker-list" aria-hidden={ariaHidden}>
      {items.map((it) => (
        <li key={it}>
          {it}
          <i aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={reverse ? "ticker ticker-reverse" : "ticker"}>
      <div className="ticker-track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
});
