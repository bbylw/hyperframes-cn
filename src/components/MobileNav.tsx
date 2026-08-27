import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { navLinks } from "../data/content";
import { soundFX } from "../utils/audioFX";
import BrandLogo from "./BrandLogo";
import { CloseIcon } from "./Icons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // 阻止抽屉打开时的背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggle = () => {
    soundFX.playClick();
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    soundFX.playClick();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={`mobile-nav-toggle ${isOpen ? "is-open" : ""}`}
        onClick={toggle}
        aria-label={isOpen ? "关闭菜单" : "打开导航菜单"}
        aria-expanded={isOpen}
      >
        <span className="ham-bar top" />
        <span className="ham-bar mid" />
        <span className="ham-bar bot" />
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <>
            {isOpen && (
              <div
                className="mobile-drawer-backdrop"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
              />
            )}

            <aside
              className={`mobile-drawer ${isOpen ? "is-open" : ""}`}
              aria-label="移动端导航"
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
                      <a
                        href={l.href}
                        onClick={handleLinkClick}
                        className="drawer-link"
                      >
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
                  href="https://discord.gg/EbK98HBPdk"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleLinkClick}
                  style={{ marginTop: "8px" }}
                >
                  加入 Discord 社区
                </a>
              </div>
            </aside>
          </>,
          document.body
        )}
    </>
  );
}
