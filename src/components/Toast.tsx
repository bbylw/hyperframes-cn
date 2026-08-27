import { useEffect, useRef } from "react";

interface ToastProps {
  message: string;
  type?: "info" | "success" | "warning";
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type = "success", visible, onClose }: ToastProps) {
  const onCloseRef = useRef(onClose);
  
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!visible) return;
    const timer = window.setTimeout(() => {
      onCloseRef.current();
    }, 3200);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`cinema-toast toast-${type}`} role="status" aria-live="polite">
      <i className="rec-dot" aria-hidden="true" />
      <span className="toast-label mono">
        {type === "success" ? "SIGNAL_OK" : "SYSTEM"}
      </span>
      <span className="toast-divider">/</span>
      <span className="toast-msg">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="toast-close-btn mono"
        aria-label="关闭提示"
        style={{
          background: "none",
          border: "none",
          color: "var(--muted)",
          cursor: "pointer",
          marginLeft: "8px",
          padding: "0 2px",
          fontSize: "12px",
        }}
      >
        ✕
      </button>
    </div>
  );
}
