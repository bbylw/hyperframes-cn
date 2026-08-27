export function motionReduced(): boolean {
  return (
    typeof window.matchMedia !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function pointerFine(): boolean {
  return typeof window.matchMedia !== "undefined" && window.matchMedia("(pointer: fine)").matches;
}

const LEADER_KEY = "hf.leader.done";

export function leaderSessionDone(): boolean {
  try {
    return window.sessionStorage.getItem(LEADER_KEY) === "1";
  } catch {
    return false;
  }
}

export function markLeaderSessionDone(): void {
  try {
    window.sessionStorage.setItem(LEADER_KEY, "1");
  } catch {
    /* storage unavailable */
  }
}
