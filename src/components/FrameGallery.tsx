import { useState } from "react";
import { frameTemplates, type FrameTemplate } from "../data/frameTemplates";
import { soundFX } from "../utils/audioFX";
import { copyToClipboard } from "../utils/clipboard";

interface FrameGalleryProps {
  onShowToast: (msg: string) => void;
}

export default function FrameGallery({ onShowToast }: FrameGalleryProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<FrameTemplate>(frameTemplates[0]);

  const copyFrameMdSpec = async (t: FrameTemplate) => {
    soundFX.playSnap();
    const spec = `# Frame.md Spec: ${t.name}
---
name: ${t.name}
category: ${t.category}
ratio: "${t.ratio}"
tokens:
  color:
    primary: "${t.primaryColor}"
    accent: "${t.accentColor}"
    background: "${t.bgColor}"
  typography:
    pairing: "${t.fontPair}"
rules:
  safe-zone: "5% inset"
  motion:
    entrance: "power3.out"
    exit: "power2.in"
---
/* AI Agents read this spec to orchestrate video elements deterministically */
`;
    const ok = await copyToClipboard(spec);
    if (ok) {
      onShowToast(`已复制 ${t.name} 的 frame.md 设计规约`);
    } else {
      onShowToast("复制失败");
    }
  };

  return (
    <section className="section frame-gallery-section" id="frame-gallery">
      <div className="container">
        <div className="scene-head">
          <div className="scene-meta">
            <span className="scene-no mono" data-scramble>
              SC.FRAME
            </span>
            <span className="scene-rule" data-draw />
          </div>
          <h2 className="scene-title">
            frame.md —— 你的设计系统，<em>已为镜头做好准备</em>
          </h2>
          <p className="scene-lede">
            每个品牌都有一份 <code>design.md</code>，但没有一份是为镜头而写的。
            <code>frame.md</code> 就是缺失的那层翻译：把 Web 设计规约反转到「帧」上 ——
            同样的令牌与规则，但改写为 AI 智能体可直接编排视频的 DESIGN.md 超集。
          </p>
        </div>

        {/* 模板交互画廊 */}
        <div className="frame-workspace">
          {/* 左侧：模板选择器 */}
          <div className="frame-cards-grid">
            {frameTemplates.map((t) => {
              const isSelected = t.id === selectedTemplate.id;
              return (
                <div
                  key={t.id}
                  className={`frame-card ${isSelected ? "is-selected" : ""}`}
                  onClick={() => {
                    soundFX.playClick();
                    setSelectedTemplate(t);
                  }}
                  style={{
                    borderColor: isSelected ? t.primaryColor : undefined,
                  }}
                >
                  <div
                    className="frame-card-preview"
                    style={{
                      backgroundColor: t.bgColor,
                      color: t.accentColor,
                    }}
                  >
                    <div
                      className="frame-mock-bar"
                      style={{ backgroundColor: t.primaryColor }}
                    />
                    <span
                      className="frame-mock-title"
                      style={{ color: t.primaryColor }}
                    >
                      {t.name}
                    </span>
                    <span className="frame-mock-tag mono">{t.ratio}</span>
                  </div>

                  <div className="frame-card-info">
                    <div className="frame-card-title-row">
                      <h4 className="frame-name mono">{t.name}</h4>
                      <span className="frame-cat-tag mono">{t.category}</span>
                    </div>

                    <div className="frame-swatches">
                      <span
                        className="swatch-dot"
                        style={{ backgroundColor: t.primaryColor }}
                        title={`主色: ${t.primaryColor}`}
                      />
                      <span
                        className="swatch-dot"
                        style={{ backgroundColor: t.accentColor }}
                        title={`高亮: ${t.accentColor}`}
                      />
                      <span
                        className="swatch-dot"
                        style={{ backgroundColor: t.bgColor, border: "1px solid rgba(255,255,255,0.2)" }}
                        title={`背景: ${t.bgColor}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 右侧：聚焦卡片与 Frame.md 代码规格 */}
          <div className="frame-spec-panel">
            <div
              className="frame-spec-hero"
              style={{
                backgroundColor: selectedTemplate.bgColor,
                borderColor: selectedTemplate.primaryColor,
              }}
            >
              <div className="spec-badge-row">
                <span
                  className="spec-badge mono"
                  style={{
                    backgroundColor: selectedTemplate.primaryColor,
                    color: selectedTemplate.bgColor,
                  }}
                >
                  {selectedTemplate.category}
                </span>
                <span className="spec-ratio mono">{selectedTemplate.ratio} · SAFE ZONE 5%</span>
              </div>

              <h3
                className="spec-title"
                style={{
                  color: selectedTemplate.primaryColor,
                  fontFamily: selectedTemplate.fontPair.split("+")[0].trim(),
                }}
              >
                {selectedTemplate.name}
              </h3>
              <p className="spec-desc" style={{ color: selectedTemplate.accentColor }}>
                {selectedTemplate.tagline}
              </p>

              <div className="spec-meta-list mono">
                <div className="spec-meta-item">
                  <span className="k">FONT PAIR:</span>
                  <span className="v">{selectedTemplate.fontPair}</span>
                </div>
                <div className="spec-meta-item">
                  <span className="k">TOKENS:</span>
                  <span className="v">
                    Primary: {selectedTemplate.primaryColor} · Bg: {selectedTemplate.bgColor}
                  </span>
                </div>
              </div>
            </div>

            <div className="frame-spec-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => copyFrameMdSpec(selectedTemplate)}
              >
                复制该模板 frame.md 规约 ⎘
              </button>
              <a
                href={selectedTemplate.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                在官方演练场混编 ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
