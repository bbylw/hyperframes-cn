import type { SVGProps } from "react";

export interface BrandLogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function BrandLogo({ size = 32, className = "", ...props }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`brand-logo-svg ${className}`}
      {...props}
    >
      <defs>
        {/* 金色高光渐变 */}
        <linearGradient id="hf-brand-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="35%" stopColor="#E2A63D" />
          <stop offset="100%" stopColor="#B3781A" />
        </linearGradient>

        {/* 核心立体反光 */}
        <linearGradient id="hf-core-shine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E2A63D" stopOpacity="0.2" />
        </linearGradient>

        {/* 环形光晕 */}
        <radialGradient id="hf-ambient-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E2A63D" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#E2A63D" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#E2A63D" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 质感深黑玻璃衬底 */}
      <rect
        x="1.5"
        y="1.5"
        width="33"
        height="33"
        rx="8"
        fill="#161310"
        stroke="rgba(226, 166, 61, 0.3)"
        strokeWidth="1.2"
      />

      {/* 中心发光层 */}
      <circle cx="18" cy="18" r="11" fill="url(#hf-ambient-glow)" />

      {/* 四角高精电影取景框 (Viewfinder Brackets) */}
      <path
        d="M6.5 13V8.5C6.5 7.4 7.4 6.5 8.5 6.5H13"
        stroke="url(#hf-brand-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 6.5H27.5C28.6 6.5 29.5 7.4 29.5 8.5V13"
        stroke="url(#hf-brand-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 23V27.5C6.5 28.6 7.4 29.5 8.5 29.5H13"
        stroke="url(#hf-brand-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 29.5H27.5C28.6 29.5 29.5 28.6 29.5 27.5V23"
        stroke="url(#hf-brand-gold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 极简光学刻度准星 (Reticle Ticks) */}
      <line x1="18" y1="6.5" x2="18" y2="8.5" stroke="#E2A63D" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="18" y1="27.5" x2="18" y2="29.5" stroke="#E2A63D" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="6.5" y1="18" x2="8.5" y2="18" stroke="#E2A63D" strokeWidth="1" strokeOpacity="0.7" />
      <line x1="27.5" y1="18" x2="29.5" y2="18" stroke="#E2A63D" strokeWidth="1" strokeOpacity="0.7" />

      {/* 核心双重棱镜播放三角 (Hyper Delta Core) */}
      <path
        d="M14.2 12.4C14.2 11.55 15.15 11.05 15.85 11.5L24.2 16.6C24.85 17.02 24.85 17.98 24.2 18.4L15.85 23.5C15.15 23.95 14.2 23.45 14.2 22.6V12.4Z"
        fill="url(#hf-brand-gold)"
      />
      <path
        d="M14.2 12.4L22.5 17.5L14.2 20.2V12.4Z"
        fill="url(#hf-core-shine)"
      />
    </svg>
  );
}
