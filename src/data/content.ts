export interface SkillRow {
  name: string;
  usage: string;
  category?: "router" | "core" | "ondemand";
  categoryLabel?: string;
  tag?: string;
  badge?: string;
  inputFormat?: string;
  cliCommand?: string;
  examplePrompt?: string;
}

export interface StackRow {
  component: string;
  status: string;
  role: string;
  link?: string;
}

export interface CompareRow {
  aspect: string;
  hyperframes: string;
  remotion: string;
}

export interface PkgRow {
  name: string;
  desc: string;
  link: string;
}

export interface Manifesto {
  claim: string;
  detail: string;
  icon?: string;
}

export const badges = [
  { label: "LICENSE", value: "APACHE-2.0" },
  { label: "RUNTIME", value: "NODE ≥ 22" },
  { label: "OUTPUT", value: "DETERMINISTIC MP4" },
  { label: "AGENTS", value: "9 SKILLS" },
];

export interface NavLinkItem {
  href: string;
  label: string;
  badge?: string;
}

export const desktopNavLinks: NavLinkItem[] = [
  { href: "#docs/introduction", label: "文档", badge: "DOCS" },
  { href: "#quickstart", label: "快速开始" },
  { href: "#playground", label: "实时工坊", badge: "LIVE" },
  { href: "#wizard", label: "Prompt 发生器" },
  { href: "#skills", label: "Skills 矩阵" },
  { href: "#frame-gallery", label: "设计系统" },
  { href: "#compare", label: "Remotion 对比" },
];

export const mobileNavLinks: NavLinkItem[] = [
  { href: "#docs/introduction", label: "中文文档", badge: "DOCS" },
  { href: "#quickstart", label: "快速开始" },
  { href: "#playground", label: "实时工坊", badge: "LIVE" },
  { href: "#wizard", label: "Prompt 发生器" },
  { href: "#how-it-works", label: "工作原理" },
  { href: "#skills", label: "Skills 矩阵" },
  { href: "#stack", label: "技术栈" },
  { href: "#frame-gallery", label: "Frame.md 规约" },
  { href: "#catalog", label: "组件库" },
  { href: "#compare", label: "对比 Remotion" },
  { href: "#community", label: "社区与生态" },
];

export const navLinks = mobileNavLinks;

export const tickerItems = [
  "产品发布视频",
  "GitHub PR 讲解",
  "动态图表竞速",
  "地图轨迹动画",
  "电影感嵌入字幕",
  "文档/PDF 转视频",
  "站点交互导览",
  "品牌 3D 片头",
  "社交花字叠层",
  "自动化视频流水线",
];

export const useCases = [
  {
    title: "产品发布视频与功能公告",
    desc: "用网站 URL 或简报直接生成推广短片，30–90 秒黄金区间，支持动态标题、背景虚化与品牌高光。",
    tag: "PROMO",
    icon: "rocket",
  },
  {
    title: "GitHub PR 变更讲解视频",
    desc: "带动态代码 diff、分支徽标、语音旁白与实时字幕的 GitHub 拉取请求讲解，自动解析 PR 描述。",
    tag: "DEV-LOG",
    icon: "git-pr",
  },
  {
    title: "数据可视化与地图动画",
    desc: "逐帧精确呈现的动态柱状图、折线竞速与高精度区域地图动效，数据驱动渲染。",
    tag: "DATA-VIZ",
    icon: "data-chart",
  },
  {
    title: "电影感字幕与短视频剪辑",
    desc: "为真人出镜视频智能嵌入逐字高潮字幕、背景主体抠像分层、动态遮罩与节奏卡点音乐。",
    tag: "CAPTIONS",
    icon: "captions",
  },
  {
    title: "文档与 PDF 转视频导览",
    desc: "输入 Markdown 文档、PDF 或网页 URL，由智能体自动提炼分镜大纲并编排为视听讲解长片。",
    tag: "EXPLAINER",
    icon: "document",
  },
  {
    title: "企业自动化内容流水线",
    desc: "可复用的动态图形组件与着色器转场，结合 AWS Lambda 批量并发渲染，打造全自动媒体生成矩阵。",
    tag: "PIPELINE",
    icon: "pipeline",
  },
];

export const coreSkills: SkillRow[] = [
  {
    name: "/hyperframes-cli",
    category: "core",
    categoryLabel: "核心集合",
    tag: "CLI 全流程",
    inputFormat: "脚手架、检查、帧查看、时间线编辑、预览、渲染、分享",
    cliCommand: "npx hyperframes skills update hyperframes-cli",
    examplePrompt:
      "使用 /hyperframes-cli，帮我把这个项目渲染成 1080p 的 MP4；如果有失败，读取 CLI 的 JSON 输出定位原因。",
    usage:
      "按任务使用 HyperFrames CLI —— 脚手架、检查、查看帧、编辑时间线、预览、本地或云端渲染、分享、项目历史 —— 外加读取它的 JSON 输出，以及从构建或渲染失败中恢复。",
  },
  {
    name: "/hyperframes-registry",
    category: "core",
    categoryLabel: "核心集合",
    tag: "约 450 个现成块与组件",
    inputFormat: "需要转场、叠层、标题、图表、地图或 3D 等具名视觉",
    cliCommand: "npx hyperframes skills update hyperframes-registry",
    examplePrompt: "使用 /hyperframes-registry，从组件库安装一个数据图表块并接入当前合成。",
    usage:
      "约 450 个现成的块与组件，以可编辑源码的形式安装 —— 转场、叠层、标题、动态字体、字幕、图表、地图、3D、镜头运动。在手工搭建任何具名视觉之前先用它；也用于 hyperframes add 与 catalog。",
  },
  {
    name: "/media-use",
    category: "core",
    categoryLabel: "核心集合",
    tag: "素材获取与混音",
    badge: "MEDIA OS",
    inputFormat: "音乐、音效、图片、图标、Logo、配音、生成视频、转录、抠像、调色",
    cliCommand: "npx hyperframes skills update media-use",
    examplePrompt:
      "使用 /media-use，为这支 30 秒宣传片挑选并放置背景音乐与转场音效，再把人声与音乐混好。",
    usage:
      "为视频获取或制作任何媒体 —— 音乐、音效、图片、图标、Logo、配音、数字人、生成视频、转录、抠像、调色与视觉风格 —— 可用 HeyGen 或免费的本地工具，并完成已放置音频的混音。也用于处理偏暗、偏平、发闷的素材。",
  },
  {
    name: "/reverse-any-video",
    category: "core",
    categoryLabel: "核心集合",
    tag: "任意视频 → 可编辑工程",
    badge: "PRO",
    inputFormat: "任意已有的视频文件",
    cliCommand: "npx hyperframes skills update reverse-any-video",
    examplePrompt: "使用 /reverse-any-video，把这段参考视频重建为可编辑的 HyperFrames 工程，并逐帧校验。",
    usage:
      "把任意视频文件重建为可编辑的 HyperFrames 工程（动态图形、真人出镜、实拍、AI 生成素材），并与原片逐帧比对校验。HyperFrames Pro。",
  },
  {
    name: "/style-sampling",
    category: "core",
    categoryLabel: "核心集合",
    tag: "五种成熟风格复用",
    badge: "PRO",
    inputFormat: "节目主题 + 目标风格",
    cliCommand: "npx hyperframes skills update style-sampling",
    examplePrompt: "使用 /style-sampling，用「动画科学解说」风格做一期 45 秒的量子计算节目。",
    usage:
      "用五种经过验证的风格为你的主题制作新一期节目：拼贴解说、财经解说、动画科学解说、3D 品牌解说、3D 真实犯罪。HyperFrames Pro。",
  },
];

export const onDemandSkills: SkillRow[] = [
  {
    name: "/figma",
    category: "ondemand",
    categoryLabel: "按需安装",
    tag: "Figma 资产与动效",
    inputFormat: "figma.com 链接",
    cliCommand: "npx hyperframes skills update figma",
    examplePrompt: "使用 /figma，把这个 figma.com 设计稿的分镜帧重建为可定位的运动序列。",
    usage:
      "把 Figma 带入视频 —— 渲染素材、品牌令牌、组件、重建为运动的分镜帧、着色器，以及连接器辅助的动效。当你粘贴 figma.com 链接时使用。",
  },
  {
    name: "/slideshow",
    category: "ondemand",
    categoryLabel: "按需安装",
    tag: "Deck → 交互式演示",
    inputFormat: "大纲文本、Markdown 或既有幻灯片",
    cliCommand: "npx hyperframes skills update slideshow",
    examplePrompt: "使用 /slideshow，制作一份 10 页商业路演 Deck，包含分段揭示与演讲者模式备注。",
    usage:
      "一份演示文稿、路演 deck 或交互式 deck —— 离散幻灯片、分段揭示、分支、热点导航、带演讲者备注的演讲者模式。输出是可导航的 deck，而不是渲染出的 MP4。",
  },
  {
    name: "/remotion-to-hyperframes",
    category: "ondemand",
    categoryLabel: "按需安装",
    tag: "既有视频代码 → 迁移",
    badge: "MIGRATION",
    inputFormat: "Remotion 源码，或 Motion Canvas、Lottie、Three.js、canvas 工程",
    cliCommand: "npx hyperframes skills update remotion-to-hyperframes",
    examplePrompt: "使用 /remotion-to-hyperframes，把这个 Remotion 组件迁移为 HyperFrames HTML + GSAP 合成，并逐帧校验。",
    usage:
      "把已有的视频代码或素材迁入 HyperFrames（优先 Remotion；也支持 Motion Canvas、Lottie、Three.js、canvas 及其他工具的渲染结果），并逐帧校验。",
  },
];

export const compositionSample = `<div id="stage"
     data-composition-id="launch"
     data-start="0"
     data-width="1920" data-height="1080">
  <video class="clip" data-start="0" data-duration="6"
         data-track-index="0" src="intro.mp4"
         muted playsinline></video>

  <h1 id="title" class="clip"
      data-start="1" data-duration="4"
      data-track-index="1">Launch day</h1>

  <audio data-start="0" data-duration="6"
         data-track-index="2" data-volume="0.5"
         src="music.wav"></audio>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>`;

export const stackRows: StackRow[] = [
  { component: "CLI", status: "已可用", role: "为本地视频项目做脚手架、预览、lint、检查与渲染" },
  {
    component: "Core / Engine / Producer",
    status: "已可用",
    role: "解析合成、驱动无头 Chrome、编码视频、混音",
  },
  {
    component: "Catalog",
    status: "已可用",
    role: "可复用的块与组件，用于转场、叠层、字幕、图表、地图与特效",
  },
  {
    component: "智能体 Skills",
    status: "已可用",
    role: "把通用 Web 文档所缺失的视频生产模式教给编程智能体",
  },
  {
    component: "Studio",
    status: "已可用，持续演进",
    role: "用于预览与编辑合成的浏览器界面，另有 macOS / Windows / Linux 桌面应用",
    link: "https://hyperframes.studio/studio",
  },
  {
    component: "AWS Lambda 渲染",
    status: "已可用",
    role: "部署分布式渲染栈，并从你的笔记本或 CI 驱动渲染",
  },
  {
    component: "hyperframes.studio",
    status: "已可用",
    role: "用于预览、迭代、分享与渲染 HTML 原生视频项目的社区演练场",
    link: "https://hyperframes.studio/",
  },
  {
    component: "frame.md",
    status: "已可用",
    role: "为镜头反转你的设计系统 —— 一份智能体可据此编排视频的 DESIGN.md 超集",
    link: "https://hyperframes.studio/design",
  },
];

export const manifesto: Manifesto[] = [
  {
    claim: "HTML 原生",
    icon: "html",
    detail: "合成就是带 data 属性的标准 HTML 文件。无需 JSX，没有专有时间线格式，智能体天生就会写。",
  },
  {
    claim: "对智能体极度友好",
    icon: "bot",
    detail: "LLM 拥有千亿级 HTML/CSS 训练语料；HyperFrames CLI 默认非交互模式，专为智能体执行而生。",
  },
  {
    claim: "逐帧确定性输出",
    icon: "target",
    detail: "相同输入、相同帧号、绝对一致的输出画面。无缝接入 CI 自动化回归测试与分布式批处理。",
  },
  {
    claim: "零构建步骤",
    icon: "zap",
    detail: "index.html 合成文件双击即可在浏览器中原样播放与实时热重载调试，告别庞大的 Node 打包链。",
  },
  {
    claim: "基于适配器的无界动画",
    icon: "palette",
    detail: "自由引入 GSAP、CSS 动画、Lottie、Three.js、Anime.js、WAAPI 或自定义 Shader 渲染器。",
  },
  {
    claim: "真正的开源自由",
    icon: "unlock",
    detail: "Apache 2.0 商业友好许可证，没有任何按次渲染收费、商业门槛或许可锁死限制。",
  },
];

export const compareRows: CompareRow[] = [
  { aspect: "创作方式", hyperframes: "HTML + CSS + 可定位动画", remotion: "React 组件 (JSX / TSX)" },
  { aspect: "构建步骤", hyperframes: "无；index.html 原样即时播放", remotion: "需要 Webpack / Vite 打包器" },
  { aspect: "智能体交付", hyperframes: "纯 HTML 文本文件，极其容易生成", remotion: "复杂 React 组件树与依赖管理" },
  {
    aspect: "库时钟动画",
    hyperframes: "通过适配器支持 GSAP / Three.js 逐帧精确定位",
    remotion: "墙钟动画模式容易掉帧，需谨慎包装 Hook",
  },
  {
    aspect: "分布式渲染",
    hyperframes: "本地 CLI + 无服务器 AWS Lambda 极速并发",
    remotion: "Remotion Lambda 方案",
  },
  { aspect: "开源许可证", hyperframes: "Apache 2.0 (完全免费商用)", remotion: "Company License (商业收费规则)" },
];

export const packageRows: PkgRow[] = [
  {
    name: "hyperframes",
    desc: "用于创建、预览、lint 与渲染合成的 CLI 脚手架与核心调度工具",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/cli",
  },
  {
    name: "@hyperframes/core",
    desc: "类型定义、解析器、生成器、linter 规则、运行时与帧适配器标准",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/core",
  },
  {
    name: "@hyperframes/engine",
    desc: "使用 Puppeteer 与 FFmpeg 的可精确定位页面转视频高性能捕获引擎",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/engine",
  },
  {
    name: "@hyperframes/producer",
    desc: "用于逐帧捕获、编码与专业混音的完整工业级视频渲染流水线",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/producer",
  },
  {
    name: "@hyperframes/studio",
    desc: "基于浏览器的可视化合成编辑器与时间轴调试界面",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/studio",
  },
  {
    name: "@hyperframes/player",
    desc: "可嵌入任意 Web 页面或应用的 <hyperframes-player> 标准 Web 组件",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/player",
  },
  {
    name: "@hyperframes/shader-transitions",
    desc: "用于场景间过渡的 WebGL GLSL 高性能着色器转场库",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/shader-transitions",
  },
  {
    name: "@hyperframes/aws-lambda",
    desc: "用于大规模分布式并行切片渲染的 AWS Lambda SDK 与一键部署脚本",
    link: "https://github.com/heygen-com/hyperframes/tree/main/packages/aws-lambda",
  },
];

export const cliSample = `npx hyperframes init my-video
cd my-video
npx hyperframes preview      # 在浏览器中实时预览，支持热重载
npx hyperframes render       # 渲染输出确定性 MP4`;

export const agentSample = `# Claude Code 插件\nclaude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes\n\n# 独立 skills（含 OpenCode）\nnpx skills add heygen-com/hyperframes`;

export const addSamples = `npx hyperframes add flash-through-white   # 着色器转场
npx hyperframes add instagram-follow      # 社交叠层
npx hyperframes add data-chart            # 动态图表`;

export const docsLinks = [
  { label: "快速开始", href: "https://hyperframes.heygen.com/quickstart" },
  { label: "作品展示", href: "https://hyperframes.heygen.com/examples" },
  { label: "GSAP 动画指南", href: "https://hyperframes.heygen.com/guides/gsap-animation" },
  { label: "API 核心参考", href: "https://hyperframes.heygen.com/packages/core" },
  { label: "组件库 Catalog", href: "https://hyperframes.heygen.com/catalog/blocks/data-chart" },
  { label: "官方实例库", href: "https://hyperframes.heygen.com/examples" },
  { label: "AWS Lambda 部署", href: "https://hyperframes.heygen.com/deploy/aws-lambda" },
];
