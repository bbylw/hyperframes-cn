import { useState } from "react";
import { copyToClipboard } from "../utils/clipboard";
import { soundFX } from "../utils/audioFX";

interface CodeBlockProps {
  code: string;
  filename?: string;
  comment?: string;
}

export default function CodeBlock({ code, filename, comment }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    soundFX.playSnap();
    const ok = await copyToClipboard(code);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <figure className="term">
      <span className="spot-layer" aria-hidden="true" />
      <figcaption className="term-bar">
        <span className="term-id mono">
          <i className="rec-dot" aria-hidden="true" />
          {filename ?? "REC"}
        </span>
        <button
          type="button"
          className="term-copy"
          onClick={copy}
          aria-label={`复制 ${filename ?? "示例"} 代码`}
          data-copied={copied ? "" : undefined}
        >
          {copied ? "已复制 ✓" : "复制"}
        </button>
        {/* 实时区域放在按钮外，读屏才能可靠播报复制结果 */}
        <span className="sr-only" role="status">
          {copied ? "代码已复制到剪贴板" : ""}
        </span>
      </figcaption>
      {comment ? <p className="term-comment">{comment}</p> : null}
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
