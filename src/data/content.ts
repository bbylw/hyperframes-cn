export interface SkillRow {
  name: string;
  usage: string;
  category?: "router" | "workflow" | "domain" | "audio" | "media";
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
  { label: "AGENTS", value: "20+ SKILLS" },
];

export interface NavLinkItem {
  href: string;
  label: string;
  badge?: string;
}

export const desktopNavLinks: NavLinkItem[] = [
  { href: "#quickstart", label: "快速开始" },
  { href: "#playground", label: "实时工坊", badge: "LIVE" },
  { href: "#wizard", label: "Prompt 发生器" },
  { href: "#skills", label: "Skills 矩阵" },
  { href: "#frame-gallery", label: "设计系统" },
  { href: "#compare", label: "Remotion 对比" },
];

export const mobileNavLinks: NavLinkItem[] = [
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

export const workflowSkills: SkillRow[] = [
  {
    name: "/product-launch-video",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "URL/Brief → 宣传片",
    badge: "RECOMMENDED",
    inputFormat: "产品网址 URL、产品 Brief 或推广脚本",
    cliCommand: "npx hyperframes skills update product-launch-video",
    examplePrompt: "使用 /product-launch-video，根据 https://example.com 制作一段 30 秒的产品发布宣传片，突出核心卖点和行动按钮。",
    usage: "任何网站 —— 对产品进行营销 / 发布 / 推广（通过其 URL、简报或脚本），或以网站自身视觉为主的站点导览 / 展示 / 社交短片。最长约 3 分钟（最佳区间为 30–90 秒）。",
  },
  {
    name: "/faceless-explainer",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "文本 → 科普解说",
    inputFormat: "任意纯文本、科普话题或分步教案",
    cliCommand: "npx hyperframes skills update faceless-explainer",
    examplePrompt: "使用 /faceless-explainer，解释「什么是量子计算的叠加态」，时长 45 秒，使用抽象图示和数据可视化。",
    usage: "基于任意文本解释某个主题 / 概念 —— 没有产品、没有 URL、不抓取网站；所有视觉都由 LLM 生成（排版 / 抽象 / 图示 / 数据可视化）。",
  },
  {
    name: "/pr-to-video",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "PR / Commit → 代码讲解",
    badge: "GITHUB NATIVE",
    inputFormat: "GitHub PR URL 或本地 git 变更",
    cliCommand: "npx hyperframes skills update pr-to-video",
    examplePrompt: "使用 /pr-to-video，针对当前 PR 的 diff 变化制作 20 秒的技术更新日志短片，重点展示重构后的核心架构。",
    usage: "一个 GitHub 拉取请求（PR URL、owner/repo#N 引用，或「这个 PR」）→ 更新日志 / 功能揭晓 / 修复 / 重构讲解视频。",
  },
  {
    name: "/embedded-captions",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "视频 → 电影字幕",
    inputFormat: "已有真人出镜 MP4 视频",
    cliCommand: "npx hyperframes skills update embedded-captions",
    examplePrompt: "使用 /embedded-captions，为这段 footage.mp4 添加电影感嵌入式字幕，重要关键词在人像背后浮现发光。",
    usage: "为已有的真人出镜视频添加字幕 / 标题（原片不动）—— 逐字字幕条、主体身后的嵌入式高潮画面，或纯电影感嵌入。",
  },
  {
    name: "/talking-head-recut",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "访谈/播客 → 图形包装",
    inputFormat: "播客或访谈视频文件",
    cliCommand: "npx hyperframes skills update talking-head-recut",
    examplePrompt: "使用 /talking-head-recut，为这期播客片段添加下三分之一栏人名条、数据引用卡片与图表标注。",
    usage: "为已有的真人出镜 / 访谈 / 播客视频套上设计过的图形叠层 —— 下三分之一栏、数据标注、动态标题、引语卡片、侧边栏、画中画。",
  },
  {
    name: "/motion-graphics",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "短图形 → MP4/透明",
    inputFormat: "Logo 矢量图、数字指标或推文文本",
    cliCommand: "npx hyperframes skills update motion-graphics",
    examplePrompt: "使用 /motion-graphics，制作一个 6 秒的 Logo 粒子汇聚片头，输出透明背景通道。",
    usage: "一段简短、无旁白、设计主导的动态图形（约 10 秒以内）—— 动态字体、数据 / 图表爆点、Logo 片头、下三分之一栏、动态推文 / 标题。输出 MP4 或透明叠层。",
  },
  {
    name: "/music-to-video",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "音轨 → 卡点短片",
    inputFormat: "WAV/MP3 音频音轨或情绪简报",
    cliCommand: "npx hyperframes skills update music-to-video",
    examplePrompt: "使用 /music-to-video，导入 background-beat.mp3，根据音乐鼓点精准卡点切换 8 张产品渲染大图。",
    usage: "一段音乐音轨（音频文件、可提取音频的视频，或根据情绪简报生成的音乐）→ 一段卡点同步的视频 —— 歌词、幻灯片，或动态推广；节奏由音乐驱动。",
  },
  {
    name: "/slideshow",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "Deck → 交互式路演",
    inputFormat: "大纲文本或 Markdown 幻灯片",
    cliCommand: "npx hyperframes skills update slideshow",
    examplePrompt: "使用 /slideshow，制作一份 10 页商业路演 Deck，包含步骤揭示动画与演讲者模式备注。",
    usage: "一场演示文稿 / 路演 deck / 交互式 deck —— 离散幻灯片、分段揭示、分支、热点导航、演讲者模式。输出是可导航的 deck，而不是渲染出的视频。",
  },
  {
    name: "/general-video",
    category: "workflow",
    categoryLabel: "创作工作流",
    tag: "万能兜底 / Companion",
    inputFormat: "多场景自由组合素材与文本",
    cliCommand: "npx hyperframes skills update general-video",
    examplePrompt: "使用 /general-video，自由编排包含 4 个场景的企业形象宣传片，包含片头、客户证言与行动呼吁。",
    usage: "其他一切 —— 更长或多场景的作品、品牌 / 集锦短片、标题卡、静态循环、自由式合成。对输入和时长都无要求的兜底方案。",
  },
  {
    name: "/remotion-to-hyperframes",
    category: "workflow",
    categoryLabel: "迁移工具",
    tag: "React → HTML 迁移",
    badge: "MIGRATION",
    inputFormat: "已有的 Remotion React 代码工程",
    cliCommand: "npx hyperframes skills update remotion-to-hyperframes",
    examplePrompt: "使用 /remotion-to-hyperframes，将此 React Remotion 组件转换为标准 HyperFrames HTML + GSAP 合成。",
    usage: "将已有的 Remotion（React）合成的源码迁移到 HyperFrames HTML。属于单向迁移，而非创作。",
  },
];

export const domainSkills: SkillRow[] = [
  {
    name: "/hyperframes-core",
    category: "domain",
    categoryLabel: "领域原子能力",
    tag: "合成契约与生命周期",
    cliCommand: "npx hyperframes skills update hyperframes-core",
    usage: "合成契约 —— data-* 计时属性、clip 类名、轨道、子合成、变量、框架自有的媒体播放、确定性规则。",
  },
  {
    name: "/hyperframes-animation",
    category: "domain",
    categoryLabel: "领域原子能力",
    tag: "多引擎动画适配",
    cliCommand: "npx hyperframes skills update hyperframes-animation",
    usage: "全部动画知识 —— 原子化运动规则、场景蓝图、转场、运行时适配器（GSAP / Lottie / Three.js / Anime.js / CSS / WAAPI / TypeGPU）。",
  },
  {
    name: "/hyperframes-keyframes",
    category: "domain",
    categoryLabel: "领域原子能力",
    tag: "逐帧精准关键帧",
    cliCommand: "npx hyperframes skills update hyperframes-keyframes",
    usage: "可安全定位（seek-safe）的关键帧创作 —— GSAP 时间线、CSS 关键帧、FLIP、路径、遮罩、SVG 形变 / 描边、3D 景深，外加诊断已渲染运动。",
  },
  {
    name: "/hyperframes-creative",
    category: "domain",
    categoryLabel: "领域原子能力",
    tag: "视觉创意与分镜规约",
    cliCommand: "npx hyperframes skills update hyperframes-creative",
    usage: "非动画类的创意方向 —— frame.md / design.md、调色板、排版、旁白、节拍规划、音频响应式视觉、合成模式。",
  },
  {
    name: "/media-use",
    category: "media",
    categoryLabel: "媒体引擎",
    tag: "素材解析与生成",
    badge: "MEDIA OS",
    cliCommand: "npx hyperframes skills update media-use",
    usage: "媒体操作系统 —— 将任意媒体需求（BGM、音效、图片、图标、Logo、配音、调色、LUT）解析为冻结的本地文件；缺货时通过 TTS / 音乐 / 图像模型生成；转录、加字幕、去背景并跨项目复用素材。",
  },
  {
    name: "/hyperframes-cli",
    category: "domain",
    categoryLabel: "开发工具",
    tag: "CLI 研发闭环",
    cliCommand: "npx hyperframes skills update hyperframes-cli",
    usage: "CLI 开发闭环 —— init、lint、check、snapshot、preview、render、publish、doctor，外加 HeyGen 托管云端渲染与 AWS Lambda 分布式渲染。",
  },
  {
    name: "/hyperframes-audio",
    category: "audio",
    categoryLabel: "混音系统",
    tag: "旁白雕刻与混音链",
    cliCommand: "npx hyperframes skills update hyperframes-audio",
    usage: "混音 —— 旁白雕刻、效果链（EQ、压缩器、限制器、门、饱和、延迟、混响等）、自动化包络与子混音总线。音频来源由 /media-use 提供。",
  },
  {
    name: "/hyperframes-registry",
    category: "domain",
    categoryLabel: "生态注册表",
    tag: "模块与组件安装",
    cliCommand: "npx hyperframes skills update hyperframes-registry",
    usage: "通过 hyperframes add 将注册表中的块和组件安装并接入合成。编写新的块或组件以回馈上游。",
  },
  {
    name: "/figma",
    category: "domain",
    categoryLabel: "设计导入",
    tag: "Figma 资产与动效",
    cliCommand: "npx hyperframes skills update figma",
    usage: "将 Figma 素材、令牌、组件和分镜段落导入并重建为运动（帧被当作状态而非幻灯片读取），引入 Motion 动画与着色器。",
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
  { component: "Studio", status: "持续演进", role: "用于预览与编辑合成的浏览器界面" },
  {
    component: "AWS Lambda 渲染",
    status: "已可用",
    role: "部署分布式渲染栈，并从你的笔记本或 CI 驱动渲染",
  },
  {
    component: "hyperframes.dev",
    status: "已可用",
    role: "用于预览、迭代、分享与渲染 HTML 原生视频项目的社区演练场",
    link: "https://www.hyperframes.dev/",
  },
  {
    component: "frame.md",
    status: "已可用",
    role: "为镜头反转你的设计系统 —— 一份智能体可据此编排视频的 DESIGN.md 超集",
    link: "https://www.hyperframes.dev/design",
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

export const agentSample = `npx skills add heygen-com/hyperframes`;

export const addSamples = `npx hyperframes add flash-through-white   # 着色器转场
npx hyperframes add instagram-follow      # 社交叠层
npx hyperframes add data-chart            # 动态图表`;

export const docsLinks = [
  { label: "快速开始", href: "https://hyperframes.heygen.com/quickstart" },
  { label: "作品展示", href: "https://hyperframes.heygen.com/showcase" },
  { label: "GSAP 动画指南", href: "https://hyperframes.heygen.com/guides/gsap-animation" },
  { label: "API 核心参考", href: "https://hyperframes.heygen.com/packages/core" },
  { label: "组件库 Catalog", href: "https://hyperframes.heygen.com/catalog/blocks/data-chart" },
  { label: "官方实例库", href: "https://hyperframes.heygen.com/examples" },
  { label: "AWS Lambda 部署", href: "https://hyperframes.heygen.com/deploy/aws-lambda" },
];
