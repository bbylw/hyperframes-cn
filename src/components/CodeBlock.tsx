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
        <button type="button" className="term-copy" onClick={copy}>
          {copied ? "已复制 ✓" : "复制"}
        </button>
      </figcaption>
      {comment ? <p className="term-comment">{comment}</p> : null}
      <pre>
        <code>{code}</code>
      </pre>
    </figure>
  );
}
