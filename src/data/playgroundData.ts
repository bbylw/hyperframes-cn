export interface PlaygroundPreset {
  id: string;
  name: string;
  badge: string;
  icon: string;
  description: string;
  duration: number; // in seconds
  aspectRatio: "16:9" | "9:16" | "1:1";
  htmlCode: string;
  gsapCode: string;
}

export const playgroundPresets: PlaygroundPreset[] = [
  {
    id: "product-launch",
    name: "产品发布宣传片",
    badge: "PRODUCT LAUNCH",
    icon: "rocket",
    description: "高对比度粒子背景、光标点击动效、卡片 3D 浮现与数据指标跳动，极佳的 SaaS 产品首发推广模板。",
    duration: 6,
    aspectRatio: "16:9",
    htmlCode: `<div id="stage" data-composition-id="launch" data-start="0" data-width="1920" data-height="1080">
  <!-- 背景动态光晕 -->
  <div class="glow-orb" data-track-index="0"></div>
  
  <!-- 产品主卡片 -->
  <div id="product-card" class="clip" data-start="0.5" data-duration="5.5" data-track-index="1">
    <div class="card-badge">HYPERFRAMES 2.0</div>
    <h1 class="card-title">Turn HTML Into Cinematic Video</h1>
    <p class="card-desc">Deterministic rendering powered by Headless Chrome & FFmpeg.</p>
    
    <div class="metric-row">
      <div class="metric-item">
        <span class="metric-num" id="fps-val">0</span>
        <span class="metric-lbl">RENDER FPS</span>
      </div>
      <div class="metric-item">
        <span class="metric-num" id="star-val">0k</span>
        <span class="metric-lbl">GITHUB STARS</span>
      </div>
    </div>
  </div>

  <!-- 鼠标光标动态点击引导 -->
  <div id="cursor-pointer" data-start="1.2" data-duration="2.0" data-track-index="2"></div>
</div>`,
    gsapCode: `const tl = gsap.timeline({ paused: true });

// 0.5s 卡片 3D 浮现与发光
tl.from("#product-card", {
  opacity: 0,
  scale: 0.85,
  y: 40,
  duration: 1.2,
  ease: "power3.out",
}, 0.5);

// 光晕脉冲
tl.fromTo(".glow-orb", 
  { scale: 0.8, opacity: 0.3 }, 
  { scale: 1.2, opacity: 0.8, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" }, 
  0
);

// 计数器动画 (0 -> 60 FPS, 0k -> 12k Stars)
const fpsObj = { val: 0 };
tl.to(fpsObj, {
  val: 60,
  duration: 1.8,
  ease: "power2.out",
  onUpdate: () => {
    const el = document.getElementById("fps-val");
    if (el) el.innerText = Math.round(fpsObj.val).toString();
  }
}, 1.0);

const starObj = { val: 0 };
tl.to(starObj, {
  val: 12,
  duration: 2.2,
  ease: "power3.out",
  onUpdate: () => {
    const el = document.getElementById("star-val");
    if (el) el.innerText = Math.round(starObj.val).toString() + "k";
  }
}, 1.2);

// 挂载至 HyperFrames 渲染调度器
window.__timelines = window.__timelines || {};
window.__timelines.launch = tl;`,
  },
  {
    id: "pr-walkthrough",
    name: "GitHub PR 代码讲解",
    badge: "PR TO VIDEO",
    icon: "git-pr",
    description: "动态代码差异对比（Diff）、分支徽标、高亮行滑入与打字机效果，适合版本更新日志与技术解说。",
    duration: 6,
    aspectRatio: "16:9",
    htmlCode: `<div id="stage" data-composition-id="pr-diff" data-start="0" data-width="1920" data-height="1080">
  <header class="pr-header" data-start="0.2" data-duration="5.8" data-track-index="1">
    <span class="pr-badge">PR #1024</span>
    <h2 class="pr-title">feat: add WebGL shader transitions</h2>
  </header>

  <div class="code-diff-window" data-start="0.6" data-duration="5.4" data-track-index="2">
    <div class="diff-line line-del">- const renderer = new LegacyRenderer();</div>
    <div class="diff-line line-add">+ const renderer = new GPUFrameEngine({ shader: "wipe" });</div>
    <div class="diff-line line-add">+ await renderer.renderDeterministic();</div>
  </div>

  <div class="author-tag" data-start="1.5" data-duration="4.5" data-track-index="3">
    <span class="tag-avatar">AI</span>
    <span>Merged by AI Agent via /pr-to-video</span>
  </div>
</div>`,
    gsapCode: `const tl = gsap.timeline({ paused: true });

tl.from(".pr-header", { opacity: 0, x: -40, duration: 0.8 }, 0.2);
tl.from(".code-diff-window", { opacity: 0, y: 30, duration: 0.9, ease: "back.out(1.4)" }, 0.6);
tl.from(".line-del", { opacity: 0, x: -20, duration: 0.6 }, 1.2);
tl.from(".line-add", { opacity: 0, x: 20, stagger: 0.4, duration: 0.7 }, 1.8);
tl.from(".author-tag", { opacity: 0, scale: 0.8, duration: 0.8, ease: "elastic.out(1, 0.75)" }, 2.8);

window.__timelines = window.__timelines || {};
window.__timelines["pr-diff"] = tl;`,
  },
  {
    id: "data-chart",
    name: "动态图表竞速",
    badge: "DATA VIZ",
    icon: "data-chart",
    description: "逐帧精准增长的多维柱状图与折线趋势，百分比实时跳动，适合财报汇报与数据大屏展示。",
    duration: 6,
    aspectRatio: "16:9",
    htmlCode: `<div id="stage" data-composition-id="chart-race" data-start="0" data-width="1920" data-height="1080">
  <div class="chart-box" data-start="0.3" data-duration="5.7" data-track-index="1">
    <div class="chart-header">
      <h3>Video Generation Speedup (x Times)</h3>
    </div>
    
    <div class="bar-group">
      <div class="bar-row">
        <span class="bar-lbl">Traditional Cloud</span>
        <div class="bar-track"><div id="bar-1" class="bar-fill dim" style="width: 15%"></div></div>
        <span class="bar-val">1.0x</span>
      </div>
      <div class="bar-row">
        <span class="bar-lbl">Remotion Node</span>
        <div class="bar-track"><div id="bar-2" class="bar-fill muted" style="width: 38%"></div></div>
        <span class="bar-val">2.5x</span>
      </div>
      <div class="bar-row">
        <span class="bar-lbl">HyperFrames Lambda</span>
        <div class="bar-track"><div id="bar-3" class="bar-fill gold" style="width: 95%"></div></div>
        <span class="bar-val gold-text">8.4x</span>
      </div>
    </div>
  </div>
</div>`,
    gsapCode: `const tl = gsap.timeline({ paused: true });

tl.from(".chart-box", { opacity: 0, scale: 0.95, duration: 0.8 }, 0.3);
tl.from("#bar-1", { width: "0%", duration: 1.5, ease: "power2.out" }, 0.8);
tl.from("#bar-2", { width: "0%", duration: 1.8, ease: "power2.out" }, 1.0);
tl.from("#bar-3", { width: "0%", duration: 2.2, ease: "power3.out" }, 1.2);
tl.from(".gold-text", { scale: 1.4, color: "#fff", duration: 0.6, yoyo: true, repeat: 1 }, 3.2);

window.__timelines = window.__timelines || {};
window.__timelines["chart-race"] = tl;`,
  },
  {
    id: "cinematic-captions",
    name: "电影感逐字字幕",
    badge: "SUBTITLES",
    icon: "captions",
    description: "视频主角身后嵌入式字幕、发光关键词点亮、动态高潮音律呼吸，打造电影级短视频质感。",
    duration: 6,
    aspectRatio: "9:16",
    htmlCode: `<div id="stage" data-composition-id="captions" data-start="0" data-width="1080" data-height="1920">
  <div class="video-bg-layer" data-track-index="0"></div>

  <div class="caption-container" data-start="0.5" data-duration="5.5" data-track-index="1">
    <span class="caption-word w1">HTML</span>
    <span class="caption-word w2">IS</span>
    <span class="caption-word w3">THE</span>
    <span class="caption-word w4 highlight">NEW</span>
    <span class="caption-word w5 highlight-gold">TIMELINE</span>
  </div>

  <div class="audio-waveform-fx" data-start="0" data-duration="6" data-track-index="2"></div>
</div>`,
    gsapCode: `const tl = gsap.timeline({ paused: true });

const words = [".w1", ".w2", ".w3", ".w4", ".w5"];
words.forEach((w, i) => {
  tl.fromTo(w, 
    { opacity: 0.15, scale: 0.85, y: 15 },
    { opacity: 1, scale: 1.1, y: 0, duration: 0.35, ease: "back.out(2)" },
    0.6 + i * 0.45
  );
  if (i < words.length - 1) {
    tl.to(w, { scale: 1.0, opacity: 0.6, duration: 0.2 }, 0.95 + i * 0.45);
  }
});

tl.fromTo(".highlight-gold", { textShadow: "0 0 0px #e2a63d" }, { textShadow: "0 0 30px #e2a63d", duration: 0.8, repeat: -1, yoyo: true }, 2.8);

window.__timelines = window.__timelines || {};
window.__timelines.captions = tl;`,
  },
  {
    id: "kinetic-typography",
    name: "动态排版与片头",
    badge: "TYPOGRAPHY",
    icon: "typography",
    description: "大字撞击、字重错落、三维空间切入切出，10秒内极速传达品牌核心主张。",
    duration: 6,
    aspectRatio: "16:9",
    htmlCode: `<div id="stage" data-composition-id="kinetic" data-start="0" data-width="1920" data-height="1080">
  <div class="kinetic-wrapper" data-start="0" data-duration="6" data-track-index="1">
    <div class="kt-row row-top"><span class="kt-text t1">NOT JUST CODE</span></div>
    <div class="kt-row row-mid"><span class="kt-text t2 em-gold">PURE CINEMA</span></div>
    <div class="kt-row row-bot"><span class="kt-text t3">BUILT WITH WEB STANDARDS</span></div>
  </div>
</div>`,
    gsapCode: `const tl = gsap.timeline({ paused: true });

tl.from(".t1", { x: -300, opacity: 0, duration: 1.0, ease: "expo.out" }, 0.3);
tl.from(".t2", { scale: 2.2, opacity: 0, filter: "blur(20px)", duration: 1.2, ease: "power4.out" }, 1.1);
tl.from(".t3", { x: 300, opacity: 0, duration: 1.0, ease: "expo.out" }, 1.8);
tl.to(".kinetic-wrapper", { rotateZ: -2, scale: 1.05, duration: 3.5, ease: "none" }, 1.0);

window.__timelines = window.__timelines || {};
window.__timelines.kinetic = tl;`,
  },
];
