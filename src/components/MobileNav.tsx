import { useEffect, useRef, useState, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { navLinks } from "../data/content";
import { soundFX } from "../utils/audioFX";
import BrandLogo from "./BrandLogo";
import { CloseIcon } from "./Icons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // 用原生模态 dialog 管理遮罩、焦点陷阱、Esc 与焦点归还
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  const toggle = () => {
    soundFX.playClick();
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    soundFX.playClick();
    setIsOpen(false);
  };

  // 只有点在 ::backdrop 上才关闭；点面板内边距不关闭
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left) setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`mobile-nav-toggle ${isOpen ? "is-open" : ""}`}
        onClick={toggle}
        aria-label={isOpen ? "关闭菜单" : "打开导航菜单"}
        aria-expanded={isOpen}
        aria-controls="mobile-drawer"
      >
        <span className="ham-bar top" />
        <span className="ham-bar mid" />
        <span className="ham-bar bot" />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <dialog
            ref={dialogRef}
            id="mobile-drawer"
            className="mobile-drawer"
            aria-label="移动端导航"
            onClose={() => setIsOpen(false)}
            onClick={handleBackdropClick}
          >
            <div className="drawer-header">
              <div className="drawer-brand">
                <BrandLogo size={24} />
                <span className="brand-wordmark">
                  <span className="brand-hyper">HYPER</span>
                  <span className="brand-frames">FRAMES</span>
                </span>
              </div>
              <button
                type="button"
                className="drawer-close mono"
                onClick={() => setIsOpen(false)}
                aria-label="关闭"
              >
                <CloseIcon size={14} />
              </button>
            </div>

            <nav className="drawer-nav">
              <ul className="drawer-list">
                {navLinks.map((l, index) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={handleLinkClick} className="drawer-link">
                      <span className="drawer-idx mono">{`0${index + 1}`}</span>
                      <span className="drawer-txt">{l.label}</span>
                      <span className="drawer-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="drawer-footer">
              <a
                className="btn btn-ghost btn-block"
                href="https://github.com/heygen-com/hyperframes"
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
              >
                GitHub 仓库 ↗
              </a>
              <a
                className="btn btn-primary btn-block"
                href="https://discord.gg/fzbdWyjphr"
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
                style={{ marginTop: "8px" }}
              >
                加入 Discord 社区
              </a>
            </div>
          </dialog>,
          document.body,
        )}
    </>
  );
}
