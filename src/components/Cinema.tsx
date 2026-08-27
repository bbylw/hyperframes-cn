import { useEffect, useRef, useState } from "react";
import {
  leaderSessionDone,
  markLeaderSessionDone,
  motionReduced,
  pointerFine,
} from "../utils/environment";

export function CountdownLeader() {
  const [phase, setPhase] = useState<number | null>(null);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (leaderSessionDone() || motionReduced()) return;
    const boot = window.setTimeout(() => setPhase(3), 350);
    return () => window.clearTimeout(boot);
  }, []);

  function finish() {
    markLeaderSessionDone();
    setLeaving(true);
    window.setTimeout(() => setPhase(null), 420);
  }

  useEffect(() => {
    if (phase === null) return;
    const t = window.setTimeout(() => {
      if (phase > 1) {
        setPhase(phase - 1);
      } else {
        finish();
      }
    }, 820);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === null) return null;

  return (
    <div
      className={leaving ? "leader leader-out" : "leader"}
      onClick={() => {
        if (!leaving) finish();
      }}
      role="presentation"
      aria-hidden="true"
    >
      <i className="leader-line lx" />
      <i className="leader-line ly" />
      <svg className="leader-ring" viewBox="0 0 120 120">
        <circle key={phase} className="leader-arc" cx="60" cy="60" r="54" pathLength={100} />
        <circle cx="60" cy="60" r="47" pathLength={100} className="leader-guide" />
        <circle cx="60" cy="60" r="61" pathLength={100} className="leader-guide" />
      </svg>
      <span className="leader-num display">{phase}</span>
      <span className="leader-cap tc mono">Picture Start</span>
      <span className="leader-cap tr mono">Hyperframes · Boot Sequence</span>
      <span className="leader-hint mono">点按任意处跳过 / Click to Skip</span>
    </div>
  );
}

const BEAM_SIZE = 680;

export function ProjectorBeam() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || motionReduced() || !pointerFine()) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.075;
      cy += (ty - cy) * 0.075;
      el.style.transform = `translate3d(${cx - BEAM_SIZE / 2}px, ${cy - BEAM_SIZE / 2}px, 0)`;
      if (Math.abs(tx - cx) < 0.2 && Math.abs(ty - cy) < 0.2) {
        raf = 0;
        return;
      }
      raf = window.requestAnimationFrame(tick);
    };

    const wake = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      wake();
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="beam" aria-hidden="true" />;
}
