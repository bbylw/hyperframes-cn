import type { DocContent, DocGroup, DocItem } from "./docs";

function item(slug: string, zh: string, en: string, descZh: string, url: string): DocItem {
  return { slug, zh, en, descZh, url };
}

export const DOCS_DEV_GROUPS: DocGroup[] = [
  {
    id: "dev-core",
    title: "Developers · 开发者入门",
    en: "Developers",
    items: [
      item(
        "dev-overview",
        "HyperFrames 如何接入应用",
        "How HyperFrames fits into an application",
        "先懂合成契约、编辑面、播放器、CLI 与渲染分层，再选集成方式。",
        "https://hyperframes.heygen.com/developers/overview.md",
      ),
      item(
        "dev-index",
        "在 HyperFrames 上构建",
        "Build on HyperFrames",
        "为自动化、编辑、播放、渲染或生成合成选最小够用的 HyperFrames 接口。",
        "https://hyperframes.heygen.com/developers/index.md",
      ),
      item(
        "concepts-index",
        "HyperFrames 项目如何工作",
        "How a HyperFrames project works",
        "理清可编辑文件、合成、时间与工具背后的机制。",
        "https://hyperframes.heygen.com/concepts/index.md",
      ),
      item(
        "dev-cli-guide",
        "CLI 指南",
        "CLI guide",
        "找创建、检查、渲染、发布与自动化的 HyperFrames 命令。",
        "https://hyperframes.heygen.com/developers/cli.md",
      ),
      item(
        "pkg-cli",
        "CLI",
        "CLI",
        "从命令行创建、预览、渲染 HTML 视频合成。",
        "https://hyperframes.heygen.com/packages/cli.md",
      ),
      item(
        "dev-share-source",
        "分享里是否带源码",
        "Editable source in a share",
        "决定 CLI 审阅时是否连项目文件一起带上。",
        "https://hyperframes.heygen.com/developers/share-source.md",
      ),
      item(
        "dev-catalog-search",
        "目录搜索如何工作",
        "How catalog search works",
        "catalog --query 做什么、端侧语义模型、下什么、索引如何建。",
        "https://hyperframes.heygen.com/developers/catalog-search.md",
      ),
      item(
        "dev-harness",
        "从智能体脚手架跑 CLI",
        "Running the CLI from an agent harness",
        "智能体脚手架如何用 HF_TOOL_CONTEXT 声明支持、CLI 如何回报。",
        "https://hyperframes.heygen.com/developers/harness-tool-context.md",
      ),
      item(
        "pkg-lint",
        "lint 检查器",
        "@hyperframes/lint",
        "独立库形态的合成检查器：不经 CLI 直接 lint 目录或单文件。",
        "https://hyperframes.heygen.com/packages/lint.md",
      ),
    ],
  },
  {
    id: "sdk-editing",
    title: "SDK · 编辑引擎",
    en: "SDK",
    items: [
      item(
        "sdk-quickstart",
        "用 SDK 编辑合成",
        "Edit a composition with the SDK",
        "打开合成 HTML、查询编辑元素、序列化结果并加持久化。",
        "https://hyperframes.heygen.com/sdk/quickstart.md",
      ),
      item(
        "sdk-querying",
        "查询与编辑元素",
        "Querying & Editing Elements",
        "按属性找元素、类型化改写、用 batch 成组编辑与句柄选择。",
        "https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md",
      ),
      item(
        "sdk-timing",
        "时间与动画",
        "Timing & Animation",
        "设片段时间、弹性保持、GSAP 补间与关键帧。",
        "https://hyperframes.heygen.com/sdk/guides/timing-and-animation.md",
      ),
      item(
        "sdk-undo",
        "撤销重做与补丁",
        "Undo, Redo & Patches",
        "用内置撤销栈、订阅 patch 事件、与宿主应用历史集成。",
        "https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md",
      ),
      item(
        "sdk-persistence",
        "持久化",
        "Persistence",
        "用可插拔适配器自动保存：文件、内存或自家后端。",
        "https://hyperframes.heygen.com/sdk/guides/persistence.md",
      ),
      item(
        "sdk-embedded",
        "嵌入覆盖模式",
        "Embedded Override Mode",
        "在可复用基底上叠稀疏 delta，宿主只存改动。",
        "https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md",
      ),
      item(
        "sdk-canvas",
        "画布与预览集成",
        "Canvas & Preview Integration",
        "同源 iframe 接 SDK 做命中测试、草稿预览与选择。",
        "https://hyperframes.heygen.com/sdk/guides/canvas-integration.md",
      ),
      item(
        "sdk-affordances",
        "编辑能力",
        "Editing Affordances",
        "按选中元素解析能力标志与检查器分段，让编辑面板懂元素。",
        "https://hyperframes.heygen.com/sdk/guides/editing-affordances.md",
      ),
      item(
        "sdk-open",
        "openComposition",
        "openComposition",
        "打开合成 HTML 字符串做编辑，返回 Composition 会话。",
        "https://hyperframes.heygen.com/sdk/reference/open-composition.md",
      ),
      item(
        "sdk-composition",
        "Composition",
        "Composition",
        "openComposition 返回的主编辑面：查询、改写、动画、序列化。",
        "https://hyperframes.heygen.com/sdk/reference/composition.md",
      ),
      item(
        "sdk-edit-ops",
        "编辑操作",
        "Edit Operations",
        "dispatch、can、batch 的完整 EditOp 目录。",
        "https://hyperframes.heygen.com/sdk/reference/edit-operations.md",
      ),
      item(
        "sdk-types",
        "类型",
        "Types",
        "@hyperframes/sdk 导出的核心类型与适配器、历史、持久化指向。",
        "https://hyperframes.heygen.com/sdk/reference/types.md",
      ),
      item(
        "sdk-adapters",
        "适配器",
        "Adapters",
        "持久化与预览适配器接口、契约与工厂函数。",
        "https://hyperframes.heygen.com/sdk/reference/adapters.md",
      ),
      item(
        "sdk-utils",
        "工具与常量",
        "Utilities & Constants",
        "历史模块、持久队列、文档工具、常量与错误类型。",
        "https://hyperframes.heygen.com/sdk/reference/utilities.md",
      ),
    ],
  },
  {
    id: "concepts",
    title: "Composition · 合成概念",
    en: "Concepts",
    items: [
      item(
        "concepts-compositions",
        "合成",
        "Compositions",
        "HyperFrames 视频的基本构建块。",
        "https://hyperframes.heygen.com/concepts/compositions.md",
      ),
      item(
        "concepts-variables",
        "用变量复用设计",
        "Reuse a design with variables",
        "改已批文案颜色媒体与选项，不重建合成。",
        "https://hyperframes.heygen.com/concepts/variables.md",
      ),
      item(
        "concepts-data",
        "用 data 属性排时间",
        "Time elements with data attributes",
        "把片段放上时间线，不把时间逻辑写进 JS。",
        "https://hyperframes.heygen.com/concepts/data-attributes.md",
      ),
      item(
        "guide-gsap",
        "用 GSAP 动画",
        "Animate with GSAP",
        "做可暂停的时间线，HyperFrames 可 seek 到任意帧。",
        "https://hyperframes.heygen.com/guides/gsap-animation.md",
      ),
      item(
        "guide-frame-sources",
        "帧来源",
        "Frame sources",
        "在时间线上跑确定性场景代码。",
        "https://hyperframes.heygen.com/guides/frame-sources.md",
      ),
      item(
        "guide-imported-film",
        "导入影片 HTML",
        "Imported film HTML",
        "把保留的 film-runner HTML 接进 HyperFrames 采集。",
        "https://hyperframes.heygen.com/guides/imported-film-html.md",
      ),
      item(
        "concepts-frame-adapters",
        "帧适配器",
        "Frame adapters",
        "把可 seek 的动画时间线接进自定义 HyperFrames 宿主。",
        "https://hyperframes.heygen.com/concepts/frame-adapters.md",
      ),
      item(
        "concepts-determinism",
        "确定性渲染",
        "Deterministic Rendering",
        "同输入、同产出，每次一样。",
        "https://hyperframes.heygen.com/concepts/determinism.md",
      ),
      item(
        "guide-html-canvas",
        "HTML 进 Canvas",
        "HTML in Canvas",
        "把实时 DOM 当纹理喂 WebGL 与 canvas 特效。",
        "https://hyperframes.heygen.com/guides/html-in-canvas.md",
      ),
      item(
        "guide-motion-blur",
        "运动模糊",
        "Motion Blur",
        "快动元素沿路径涂抹，预览与渲染与编辑器一致，默认关。",
        "https://hyperframes.heygen.com/guides/motion-blur.md",
      ),
      item(
        "guide-vfx-chain",
        "逐像素特效链",
        "Per-pixel effects with data-vfx-chain",
        "data-vfx-chain：WebGL2 内核链做扭曲位移与生成噪声，每次 seek 都确定性重绘。",
        "https://hyperframes.heygen.com/guides/vfx-chain.md",
      ),
      item(
        "guide-figma",
        "Figma 集成",
        "Figma integration",
        "把 Figma 设计带进来：冻结资产、品牌令牌、可编辑组件、故事板重建与 Motion 翻 GSAP。",
        "https://hyperframes.heygen.com/guides/figma.md",
      ),
    ],
  },
  {
    id: "reference",
    title: "Reference · 参考",
    en: "Reference",
    items: [
      item(
        "ref-html-schema",
        "HTML schema 参考",
        "HTML schema reference",
        "HyperFrames 合成的当前契约。",
        "https://hyperframes.heygen.com/reference/html-schema.md",
      ),
      item(
        "ref-color-grading",
        "调色实现",
        "Color grading implementation",
        "持久化、自动化、动画与空间隔离媒体调色。",
        "https://hyperframes.heygen.com/reference/color-grading.md",
      ),
      item(
        "ref-audio-effects",
        "音频特效实现",
        "Audio effects implementation",
        "四个音频属性、全部特效参数、自动化目标、旁白 carve、分组与预览渲染一致。",
        "https://hyperframes.heygen.com/reference/audio-effects.md",
      ),
      item(
        "ref-speed-ramps",
        "变速坡道",
        "Speed ramps",
        "用 data-automation 速率道改播放速度，一条曲线贯穿预览、渲染与编辑器。",
        "https://hyperframes.heygen.com/reference/speed-ramps.md",
      ),
      item(
        "ref-lint-rules",
        "Lint 规则",
        "Lint rules",
        "每条 lint 码的等级、查什么与怎么修。",
        "https://hyperframes.heygen.com/reference/lint-rules.md",
      ),
      item(
        "guide-rendering",
        "从命令行渲染",
        "Render from the command line",
        "检查项目并渲染 MP4/MOV/WebM/GIF/PNG。",
        "https://hyperframes.heygen.com/guides/rendering.md",
      ),
    ],
  },
  {
    id: "deploy",
    title: "Deploy · 部署渲染",
    en: "Deploy",
    items: [
      item(
        "deploy-overview",
        "选渲染路径",
        "Choose a rendering path",
        "为本地、应用后端、托管云或自营基建选最小渲染面。",
        "https://hyperframes.heygen.com/deploy/overview.md",
      ),
      item(
        "deploy-cloud",
        "云渲染",
        "Cloud rendering",
        "用 HeyGen 托管云渲染，不部署自家基建。",
        "https://hyperframes.heygen.com/deploy/cloud.md",
      ),
      item(
        "guide-deploy",
        "部署预览与渲染 API",
        "Deploy a preview and render API",
        "需托管预览与 MP4 渲染端点时用官方 Vercel/Cloudflare/Modal 模板起步。",
        "https://hyperframes.heygen.com/guides/deploy.md",
      ),
      item(
        "deploy-aws-lambda",
        "AWS Lambda",
        "AWS Lambda",
        "把分布式 HyperFrames 渲染部署到 Lambda，从笔记本或 CI 驱动。",
        "https://hyperframes.heygen.com/deploy/aws-lambda.md",
      ),
      item(
        "deploy-gcp",
        "Google Cloud Run",
        "Google Cloud Run",
        "部署到 Cloud Run、Workflows 与 GCS。",
        "https://hyperframes.heygen.com/deploy/gcp-cloud-run.md",
      ),
      item(
        "deploy-templates-lambda",
        "在 Lambda 上跑模板",
        "Render templates on Lambda",
        "同一合成换变量值，单跑或 JSONL 批量。",
        "https://hyperframes.heygen.com/deploy/templates-on-lambda.md",
      ),
      item(
        "deploy-migrating",
        "迁到 HyperFrames Lambda",
        "Migrating to HyperFrames Lambda",
        "从另一家一键部署渲染器迁来的概念对照表。",
        "https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md",
      ),
      item(
        "pkg-aws-lambda",
        "AWS Lambda 适配器",
        "@hyperframes/aws-lambda",
        "分布式渲染的 Lambda 与 Step Functions 适配器。",
        "https://hyperframes.heygen.com/packages/aws-lambda.md",
      ),
      item(
        "pkg-gcp",
        "GCP 适配器",
        "@hyperframes/gcp-cloud-run",
        "分布式渲染的 Cloud Run 与 Workflows 适配器。",
        "https://hyperframes.heygen.com/packages/gcp-cloud-run.md",
      ),
      item(
        "guide-4k",
        "4K 渲染",
        "4K rendering",
        "3840×2160：按 4K 创作或渲染时超采样。",
        "https://hyperframes.heygen.com/guides/4k-rendering.md",
      ),
      item(
        "guide-hdr",
        "HDR 渲染",
        "Render HDR video",
        "保 BT.2020 PQ/HLG，输出 10-bit H.265 MP4。",
        "https://hyperframes.heygen.com/guides/hdr.md",
      ),
      item(
        "guide-performance",
        "修慢预览/渲染",
        "Fix a slow preview or render",
        "找合成中贵的那段，做便宜。",
        "https://hyperframes.heygen.com/guides/performance.md",
      ),
    ],
  },
  {
    id: "packages",
    title: "Packages · 包",
    en: "Packages",
    items: [
      item(
        "pkg-core",
        "Core",
        "@hyperframes/core",
        "合成类型、生成、编译与浏览器运行时。",
        "https://hyperframes.heygen.com/packages/core.md",
      ),
      item(
        "pkg-parsers",
        "Parsers",
        "@hyperframes/parsers",
        "GSAP + HTML 解析/写入套件，零 HyperFrames 依赖。",
        "https://hyperframes.heygen.com/packages/parsers.md",
      ),
      item(
        "pkg-studio-server",
        "Studio Server",
        "@hyperframes/studio-server",
        "把 Studio 项目与预览 API 挂到自家服务。",
        "https://hyperframes.heygen.com/packages/studio-server.md",
      ),
      item(
        "pkg-sdk",
        "SDK 包",
        "@hyperframes/sdk",
        "无框架、headless 的合成编辑引擎，给智能体与自定义编辑器。",
        "https://hyperframes.heygen.com/packages/sdk.md",
      ),
      item(
        "pkg-engine",
        "Engine",
        "@hyperframes/engine",
        "低层可 seek 帧采集与编码原语。",
        "https://hyperframes.heygen.com/packages/engine.md",
      ),
      item(
        "pkg-player",
        "Player",
        "@hyperframes/player",
        "可嵌入 Web 组件，在任何网页播放 HyperFrames 合成。",
        "https://hyperframes.heygen.com/packages/player.md",
      ),
      item(
        "pkg-producer",
        "Producer",
        "@hyperframes/producer",
        "从 Node.js 渲染 HyperFrames 项目。",
        "https://hyperframes.heygen.com/packages/producer.md",
      ),
      item(
        "pkg-shader",
        "ShaderTransitions",
        "@hyperframes/shader-transitions",
        "HyperFrames 场景与合成的 WebGL shader 转场。",
        "https://hyperframes.heygen.com/packages/shader-transitions.md",
      ),
      item(
        "pkg-studio",
        "Studio 组件",
        "@hyperframes/studio",
        "浏览器编辑器背后的 React 组件与 hooks（给开发者）。",
        "https://hyperframes.heygen.com/packages/studio.md",
      ),
    ],
  },
  {
    id: "contribute",
    title: "Contribute · 贡献",
    en: "Contribute",
    items: [
      item(
        "guide-auth",
        "认证与 API 密钥",
        "Authentication & API keys",
        "登 HeyGen，懂智能体工作流怎么选语音音乐音效与可选采集描述。",
        "https://hyperframes.heygen.com/guides/authentication.md",
      ),
      item(
        "guide-webmcp",
        "让智能体驱动 Studio",
        "Let an agent drive Studio",
        "Studio 以 WebMCP 工具暴露编辑能力，浏览器智能体同开同改。",
        "https://hyperframes.heygen.com/guides/webmcp.md",
      ),
      item(
        "contribute",
        "贡献给 HyperFrames",
        "Contribute to HyperFrames",
        "搭仓库、做小改、开 PR。",
        "https://hyperframes.heygen.com/contributing.md",
      ),
      item(
        "contribute-catalog",
        "贡献到 Catalog",
        "Contribute to the Catalog",
        "往注册表加可复用块与组件。",
        "https://hyperframes.heygen.com/contributing/catalog.md",
      ),
      item(
        "contribute-release-channels",
        "发布通道",
        "Release channels",
        "alpha 存活不污染正式版。",
        "https://hyperframes.heygen.com/contributing/release-channels.md",
      ),
      item(
        "contribute-agent-plugins",
        "发版智能体插件",
        "Release agent plugins",
        "从一次已提交发版构建校验发布插件包。",
        "https://hyperframes.heygen.com/contributing/agent-plugins.md",
      ),
      item(
        "contribute-changelog",
        "Changelog 流程",
        "Changelog process",
        "发版说明如何起草评审发布。",
        "https://hyperframes.heygen.com/contributing/changelog-process.md",
      ),
      item(
        "contribute-testing",
        "测本地 CLI 改动",
        "Test local CLI changes",
        "用未发布 CLI 构建真测仓库外真项目。",
        "https://hyperframes.heygen.com/contributing/testing-local-changes.md",
      ),
      item(
        "contribute-canary",
        "Canary 灰度",
        "Canary rollouts",
        "按比例推，别全量或全不推。",
        "https://hyperframes.heygen.com/contributing/canary-rollouts.md",
      ),
      item(
        "community-adopters",
        "采用方",
        "Adopters",
        "生产在用或在评的组织。",
        "https://hyperframes.heygen.com/community/adopters.md",
      ),
    ],
  },
];

export const DOCS_DEV_CONTENT: Record<string, DocContent> = {
  "dev-overview": {
    lede: "选集成前先懂合成契约、编辑面、播放器、CLI 与渲染分层。",
    sections: [
      { h: "从合成契约起步", p: "HTML 合成是唯一真相：data 时间、GSAP 契约、媒体归运行时。" },
      { h: "选最小集成面", p: "自动化用 CLI，应用内编辑用 SDK，嵌页播放用 Player，渲染各选其层。" },
      { h: "完整模型", p: "源即项目，合成即块，时间即源码，变量即已批输入，渲染逐帧确定。" },
    ],
  },
  "dev-index": {
    lede: "为自动化、编辑、播放、渲染或生成选最小面：手写自渲或嵌应用。",
    sections: [
      { h: "自己写渲", p: "CLI 日常循环：建、查、渲、发、批量。" },
      { h: "加进应用", p: "CLI 跑脚本/CI，SDK 在应用内改 HTML，Player 嵌播，渲染基建各选其一。" },
    ],
  },
  "concepts-index": {
    lede: "源即项目，智能体所建皆拆解：文件、合成、时间与工具。",
    sections: [
      { h: "源即项目", p: "项目文件夹可编辑，生成器只产其一部分。" },
      { h: "合成与时间变量", p: "合成把视频兜住，时间是源码一部分，变量保已批输入可改。" },
      { h: "渲染可重跑同刻", p: "逐帧定位即同刻必同帧，深入见各子页。" },
    ],
  },
  "dev-cli-guide": {
    lede: "找创建、检查、渲染、发布、自动化的对应命令，日常循环与媒体复用一表。",
    sections: [
      { h: "日常循环", p: "init、check、preview、render 按序走。" },
      { h: "渲染与自动化", p: "选格式质量批量，跑脚本 CI。" },
      {
        h: "查帮助",
        p: "以已装版为准：",
        code: "npx hyperframes <command> --help",
        codeFile: "TERMINAL",
      },
    ],
  },
  "pkg-cli": {
    lede: "命令行全量：创建、预览、渲染 HTML 合成，含 telemetry、catalog、lint、doctor 等全部子命令参数表（官方文 17 万字，此处中译要点，参数以 --help 为准）。",
    sections: [
      {
        h: "项目命令",
        p: "init/build/check/lint/preview/render/publish 各管一事；lint 码见 Lint 规则页。",
      },
      { h: "目录与遥测", p: "catalog 查块、doctor 自检、telemetry 关报。" },
      { h: "自动化", p: "脚本/CI 调 render，JSON 输出供程序消费。" },
    ],
  },
  "dev-share-source": {
    lede: "决定 CLI 审阅链接是否连项目源码一带。",
    sections: [
      { h: "带什么", p: "可只带成片，也带用其渲染的项目文件。" },
      { h: "中断与拒绝", p: "中断上传可续、异地源码不可用、上传被拒皆有处理。" },
    ],
  },
  "dev-catalog-search": {
    lede: "catalog --query 做词匹配 + 端侧语义搜索，隐私与索引构建讲清。",
    sections: [
      { h: "词与义", p: "先词匹配，语义走端侧模型，下模型与索引自建。" },
      { h: "隐私", p: "查询不出端，索引本地化。" },
    ],
  },
  "dev-harness": {
    lede: "智能体脚手架用 HF_TOOL_CONTEXT 声明 CLI 支持，CLI 照声明回报。",
    sections: [
      { h: "声明", p: "events/project-lock/check-review 等能力有序声明。" },
      { h: "回报与钩", p: "CLI 回 events，锁同一时刻一浏览器命令，钩子跑代码有 conformance。" },
    ],
  },
  "pkg-lint": {
    lede: "把 lint 当库 import 而非 shell 出 CLI：Node 应用直调 lintProject。",
    sections: [
      { h: "何时用", p: "智能体脚手架、CI、编辑器插件；无 npx 子进程无 stdout 解析。" },
      { h: "两种查", p: "单文件与整目录两种入口，浏览器可用；老 @hyperframes/core/lint 兼容。" },
      {
        h: "包导出",
        p: "见 Types 与规则表。",
        code: "import { lintProject } from '@hyperframes/lint'",
        codeFile: "TYPESCRIPT",
      },
    ],
  },
  "sdk-quickstart": {
    lede: "开 HTML、查改、序列化、加持久化，四步最小 SDK 路径。",
    sections: [
      { h: "开改存", p: "openComposition → query/mutate → serialize。" },
      { h: "加持久", p: "挂 adapter 自动存；关 history 不关自动存，二者独立。" },
    ],
  },
  "sdk-querying": {
    lede: "按属性找元素、类型化改写、batch 成组、句柄与选择同构。",
    sections: [
      { h: "查", p: "FindQuery 字段与 scopedId 映射子合成。" },
      { h: "改与组", p: "setText/setStyle 等类型方法；batch 一组一撤销步。" },
      { h: "句柄", p: "SelectionProxy 与 ElementHandle 同五法，随便互换。" },
    ],
  },
  "sdk-timing": {
    lede: "设片段时间、弹性保持、GSAP 补间与关键帧，值皆数字。",
    sections: [
      { h: "片段", p: "getElementTimings 只含带 data-start 与 duration/end 者，duration 优先。" },
      { h: "补间与关键帧", p: "addGsapTween、replaceWithKeyframes 一并完成删加。" },
    ],
  },
  "sdk-undo": {
    lede: "内置撤销栈与 patch 事件，宿主历史用 applyPatches 接。",
    sections: [
      { h: "内置", p: "canUndo/canRedo 空栈与 history:false 皆假；history:false 不关自动存。" },
      { h: "补丁", p: "订阅 patch，origin 守卫防死循环，宿主接 applyPatches。" },
    ],
  },
  "sdk-persistence": {
    lede: "可插拔自动存：文件、内存或自家后端，写失败走事件不抛错。",
    sections: [
      { h: "选项与刷", p: "挂 adapter，flush 刷待写。" },
      { h: "内置与自做", p: "createFsAdapter 走子路径（浏览器可摇树），自做 write 不抛错。" },
    ],
  },
  "sdk-embedded": {
    lede: "基底上叠稀疏 delta，宿主只存改动；嵌入态撤销存归宿主。",
    sections: [
      { h: "开与读", p: "overrides 入、delta 读、key 格式固定。" },
      { h: "全例", p: "嵌入通常既不开 SDK 撤也不开持久，宿主接管。" },
    ],
  },
  "sdk-canvas": {
    lede: "同源 iframe 接 SDK：命中测、草稿预览、选择同步。",
    sections: [
      { h: "嵌与同步", p: "同源 srcdoc/blob，attachSync 切合成自动退前订阅。" },
      { h: "命中与透明", p: "跨域抛错调用方守；监听 host document 不监听 iframe。" },
    ],
  },
  "sdk-affordances": {
    lede: "按选中元素给能力旗与检查器分段，面板懂元素；拖拽看 manualOffset 别看 canMove。",
    sections: [
      { h: "导入签名", p: "走 @hyperframes/sdk/editing（0.7.22+）。" },
      {
        h: "返回值坑",
        p: "canMove/canResize 指已有 left/top 尺寸可直改；拖拽映射 canApplyManualOffset。",
      },
    ],
  },
  "sdk-open": {
    lede: "开合成 HTML 字符串返回 Compilation 会话，模式选项略。",
    sections: [
      { h: "签名模式", p: "standalone 历史默认开，embedded 默认关。" },
      { h: "选项例", p: "overrides/history/persist 组合，full 见参考。" },
    ],
  },
  "sdk-composition": {
    lede: "主编辑面方法全表：类型改写、查询、选择与高级智能体面。",
    sections: [
      {
        h: "类型化改",
        p: "setVariableValue 只改不建，建用 declareVariable；removeVariable 为别名。",
      },
      { h: "查选", p: "scopedId 定位内联子合成，Selection 与 Handle 同五法。" },
    ],
  },
  "sdk-edit-ops": {
    lede: "dispatch/can/batch 的 EditOp 全目录，显式 target 无隐式选择。",
    sections: [
      { h: "核", p: "类型方法即糖，构造并 dispatch 同 op。" },
      {
        h: "元素/结构/变量/GSAP",
        p: "addGsapTween/addLabel 无时间线报 E_NO_GSAP_TIMELINE 先 can 后 dispatch。",
      },
    ],
  },
  "sdk-types": {
    lede: "HfId、HyperFramesElement、Snapshot、SdkDocument、OverrideSet、FindQuery 与 tween 规格。",
    sections: [
      { h: "核心", p: "HfId 字符串、HFelement 快照与文档、OverrideSet 值须收窄。" },
      { h: "查与动画", p: "FindQuery 字段、GsapTweenSpec/Keyframes 规格与适配器指向。" },
    ],
  },
  "sdk-adapters": {
    lede: "PersistAdapter 与 PreviewAdapter 接口契约与工厂。",
    sections: [
      {
        h: "双接口",
        p: "ElementAtPointResult/DraftProps 自实现不重导出，PaintQueryOptions 重导出。",
      },
      { h: "工厂", p: "内存测演示，Fs 本地存，fs 子路径防拖 node:fs。" },
    ],
  },
  "sdk-utils": {
    lede: "历史模块、持久队列、文档 Id/scope/变量工具、常量错误。",
    sections: [
      { h: "历史队列", p: "standalone 自动挂，history:false 自管 createHistory。" },
      { h: "工具常量错", p: "resolveNearestHfElement 与全错误码。" },
    ],
  },
  "concepts-compositions": {
    lede: "文件即帧，时间线放块，嵌套合成复用。",
    sections: [
      { h: "文件成帧", p: "HTML 文件经抓帧成帧，时间线收合成。" },
      { h: "嵌套", p: "data-composition-src 指文件，路径以项目根为准非相对文件。" },
    ],
  },
  "concepts-variables": {
    lede: "已批文案色媒选可在编辑器改，不重建合成。",
    sections: [
      { h: "编辑器用", p: "批输入直接改，声明与绑定有脚本无脚本两式。" },
      { h: "数据渲染", p: "渲染新版走数据，嵌套各持异值，非变量皆错。" },
    ],
  },
  "concepts-data": {
    lede: "片段挂 data 时间，不写时间 JS；轨非层、相对起点。",
    sections: [{ h: "分轨", p: "轨≠层，相对他片起点，媒体嵌套亦然。" }],
  },
  "guide-gsap": {
    lede: "暂停时间线可到任意帧：最小契约与测字要先载字体。",
    sections: [
      { h: "契约", p: "暂停、无墙钟、字体载入后量字。" },
      { h: "时长媒体嵌套", p: "长短归 root，媒体归运行时，嵌套独立时钟并验动。" },
    ],
  },
  "guide-frame-sources": {
    lede: "在时间线上跑确定性场景代码，逐帧输入输出可复。",
    sections: [{ h: "用法", p: "帧函数纯输入定帧，皆有其消费页。" }],
  },
  "guide-imported-film": {
    lede: "保留 film-runner HTML 接 HyperFrames 采集，场景时可编。",
    sections: [{ h: "接法", p: "导入 HTML 走采集，场景时与可编时同步。" }],
  },
  "concepts-frame-adapters": {
    lede: "可 seek 时间线接自定义宿主，FrameAdapter 实验 v0。",
    sections: [{ h: "接口", p: "FrameAdapter 签名 v0 实验，GSAP 适配范式与契约。" }],
  },
  "concepts-determinism": {
    lede: "同输入同产出：逐帧发生什么、排除本机变量、预览渲染须对齐。",
    sections: [{ h: "为何同帧", p: "逐帧输入输出同，机器不入判据，预览渲染定对齐。" }],
  },
  "guide-html-canvas": {
    lede: "实时 DOM 当纹理喂顶点特效，先用成品块，知其限。",
    sections: [
      { h: "起步", p: "成品块起手，drawElementImage 采图，浏览器撑 shader/块。" },
      { h: "最小式", p: "纹理化、采样、合成三段式，限在转场与 3D 之间。" },
    ],
  },
  "guide-motion-blur": {
    lede: "快动涂抹，预览渲染编辑器同，默认关开则显。",
    sections: [
      { h: "开与视", p: "编辑器开，涂其动元素。" },
      { h: "两法成本限", p: "两种画法各有耗，限见页内。" },
    ],
  },
  "guide-vfx-chain": {
    lede: "data-vfx-chain：WebGL2 内核链扭曲位移生成噪声，seek 确定重绘。",
    sections: [
      { h: "元与采", p: "元挂链，采元素像。" },
      { h: "确定与限", p: "噪种定每次一样，编辑器撑况与已知限见页。" },
    ],
  },
  "guide-figma": {
    lede: "Figma 迎 HyperFrames：冻结资产、品牌牌、可编组件、故事板、Motion 翻 GSAP。",
    sections: [
      { h: "可迎", p: "资产、令牌、组件、故事板皆与 Motion 时轴。" },
      { h: "先牌后件", p: "令牌先行让色链品牌，来源与刷新及排障各有。" },
    ],
  },
  "ref-html-schema": {
    lede: "当前合成契约：最小合成、根、片段、媒体、调色、嵌套、变量、动画与校验。",
    sections: [
      { h: "根与片", p: "根定全局，片挂计时媒体。" },
      { h: "色嵌变量", p: "调色自动、嵌套、变量皆在契内，验方另见页。" },
    ],
  },
  "ref-color-grading": {
    lede: "持久、自动化、动画与空间隔离的调色实现。",
    sections: [
      { h: "持久与整道", p: "存级、整 lane 给级。" },
      { h: "动画与隔离", p: "支属可动，限帧局部。" },
    ],
  },
  "ref-audio-effects": {
    lede: "四音频属性全特效参、自动目标、旁白 carve、分组、预览渲染同。",
    sections: [
      { h: "四性与表", p: "注册表特效参、不可自动参、预设任务一钮档。" },
      { h: "carve组同", p: "旁白 carve、分组静音、lint 盯点。" },
    ],
  },
  "ref-speed-ramps": {
    lede: "data-automation 速率道变速，一线贯预渲编。",
    sections: [
      { h: "道与同", p: "道定随变，预渲编皆同。" },
      { h: "预设编限", p: "预设、编辑器改、限见页。" },
    ],
  },
  "ref-lint-rules": {
    lede: "每 lint 码：级、查点、修法，渲染检查日志码以 lint 为准加 --json。",
    sections: [
      { h: "类", p: "结构时轴、契约、文档 CSS 脚本、GSAP、媒体字幕字体贴图皆分节。" },
      { h: "查", p: "check 另跑运行时版式动效核，疑去查 Help。" },
    ],
  },
  "guide-rendering": {
    lede: "查项目渲 MP4/MOV/WebM/GIF/PNG， Studio 出 GIF 路径。",
    sections: [
      { h: "常渲", p: "寻常片渲，格编位皆选。" },
      { h: "质帧母本", p: "质/帧率旋、4:4:4 母本、本地 Docker 与另合成分渲、批云、出处。" },
    ],
  },
  "deploy-overview": {
    lede: "本地、应用后端、托管云、自营基建选最小渲染面。",
    sections: [
      { h: "选", p: "本地 CI 用 CLI，Node 应用用 Producer，精采帧用 Engine，无基建用 Cloud。" },
      { h: "决", p: "自营基建走 AWS/GCP，决在规模与运维。" },
    ],
  },
  "deploy-cloud": {
    lede: "HeyGen 托管云渲，无自营基建，4K 计 1.5 倍。",
    sections: [
      { h: "渲", p: "渲项目选产出，查上传、填变量、异步跑。" },
      { h: "另选", p: "他渲路见部署总，异选皆备。" },
    ],
  },
  "guide-deploy": {
    lede: "需托管预览与 MP4 端点：Vercel/Cloudflare/Modal 官模起步。",
    sections: [
      { h: "三模", p: "Vercel.Next/Sandbox/Blob，Cloudflare.TanStack/Containers/R2，Modal。" },
      { h: "用自合", p: "自合成接入、端点外露前查与源。" },
    ],
  },
  "deploy-aws-lambda": {
    lede: "分布式渲上 Lambda，笔记本/CI 驱动，预留并发 90% 需缚。",
    sections: [
      { h: "架与备", p: "架构、备、三种部署径，IAM 与费形。" },
      { h: "排障", p: "错源跑步见页。" },
    ],
  },
  "deploy-gcp": {
    lede: "上 Cloud Run、Workflows 与 GCS，渲传进展拆通程控皆有。",
    sections: [
      { h: "备置渲", p: "备、置、渲、复用上传。" },
      { h: "展拆程", p: "展、拆、程控用法。" },
    ],
  },
  "deploy-templates-lambda": {
    lede: "同一合成换变量：单跑、复用上传、JSONL 批，并发自控。",
    sections: [
      { h: "入与测", p: "宣入、本地测、Lambda 单版。" },
      { h: "批与迁", p: "批渲、变小、Remotion inputProps 迁、并控。" },
    ],
  },
  "deploy-migrating": {
    lede: "他家一键渲迁来：概念格式配置变量对照 + 迁单。",
    sections: [
      { h: "对", p: "概念、格式、配置、变量皆与 Remotion 对。" },
      { h: "异与迁", p: "异处、迁单、非 Lambda 皆有。" },
    ],
  },
  "pkg-aws-lambda": {
    lede: "分布式渲的 Lambda 与 Step Functions 适配胶，自营 AWS 前提。",
    sections: [
      { h: "何时", p: "控 AWS、S3、状态机、运行时时用。" },
      { h: "架用", p: "导出、架构、SDK 用，已装停新渲待排。" },
    ],
  },
  "pkg-gcp": {
    lede: "分布式渲的 Cloud Run 与 Workflows 适配胶，镜像避 ZIP 限。",
    sections: [
      { h: "何时", p: "需钉品 chrome-headless-shell 避 Lambda 限时用。" },
      { h: "置用", p: "导出架构部署与 SDK 用。" },
    ],
  },
  "guide-4k": {
    lede: "3840×2160 按 4K 创或渲染超采，验文件。",
    sections: [
      { h: "渲创", p: "老项目 4K 渲、按 4K 创，锐在像素密度。" },
      { h: "限验", p: "限与验文件皆有。" },
    ],
  },
  "guide-hdr": {
    lede: "BT.2020 PQ/HLG 存，10-bit H.265 MP4，验与混限。",
    sections: [
      { h: "渲验与控", p: "渲验、控侦、混合渲。" },
      { h: "限", p: "源限。" },
    ],
  },
  "guide-performance": {
    lede: "贵段找寻降之：症起、降浏览器功、量非猜、速审渲、透明 WebM 后调。",
    sections: [
      { h: "起测", p: "症起、降贵工、量为主、速审先。" },
      { h: "后", p: "透明 WebM 随后。" },
    ],
  },
  "pkg-core": {
    lede: "合成类型生成编译与浏览器运行：主面、解析、变量、编译、契约、帧适配。",
    sections: [
      { h: "主面", p: "型、解生、变量、编译、静契皆有。" },
      { h: "帧适", p: "帧适配器。" },
    ],
  },
  "pkg-parsers": {
    lede: "GSAP + HTML 解析写入，零 HyperFrames 依赖，多数人经 core/CLI 远引不直装。",
    sections: [
      { h: "何时", p: "只取解析层不取全 core 时装。" },
      { h: "子径", p: "子径入口，GSAP AST 与 HTML 解析明。" },
    ],
  },
  "pkg-studio-server": {
    lede: "Studio 项目与预览 API 挂挂自家服，备份供成片 GSAP 源皆定。",
    sections: [{ h: "挂供", p: "挂 API、源备、供成片、GSAP 源出、他入口。" }],
  },
  "pkg-sdk": {
    lede: "headless 无框架编辑引擎，产品集成与智能体结构改用之，CLI/Studio 同一格式环绕之。",
    sections: [
      { h: "何时", p: "需结构改时用 SDK，用户面归 CLI/Studio。" },
      { h: "起", p: "起 SDK quickstart，后指南参考精法。" },
    ],
  },
  "pkg-engine": {
    lede: "低层可 seek 帧采与编原语，异于录屏，WebGPU 要为之。",
    sections: [
      { h: "异采", p: "采帧、WebGPU 要、他露皆有。" },
      { h: "向", p: "成片自组归 Producer，定性归 Determinism。" },
    ],
  },
  "pkg-player": {
    lede: "Web 组件嵌任意页播合成：嵌属、JS API、事进 iframe。",
    sections: [
      { h: "嵌用", p: "嵌合、属性、JS、事。" },
      { h: "高与内", p: "iframe 进、内理。" },
    ],
  },
  "pkg-producer": {
    lede: "Node.js 渲项目：单渲、产、验、背、消、服。",
    sections: [
      { h: "渲验消", p: "单、产、验、背、消。" },
      { h: "服", p: "服化总。" },
    ],
  },
  "pkg-shader": {
    lede: "场景与合成 WebGL shader 转场：导出快始着器配制显行皆有。",
    sections: [{ h: "用起", p: "何时导出、快起、着器、配、显行。" }],
  },
  "pkg-studio": {
    lede: "编辑器 React 块 hooks，组件为块非整嵌编辑器，整需 StudioApp，找 Studio 应用另去。",
    sections: [{ h: "块", p: "Shell/Preview/Timeline/Panel/Tree 需态回调境，整走 StudioApp。" }],
  },
  "guide-auth": {
    lede: "登 HeyGen，懂凭证解与代理流选供应商，本地无账可试：声 Kokoro 乐 MusicGen。",
    sections: [
      { h: "登解", p: "登、凭证解、代理供应商。" },
      { h: "离线", p: "无凭可离线试。" },
    ],
  },
  "guide-webmcp": {
    lede: "Studio WebMCP 暴露编辑，浏览器内智能体同开同改，异于 AI 聊 host 接。",
    sections: [{ h: "样与开", p: "形如、开异步、呼取皆有。" }],
  },
  contribute: {
    lede: "搭库、小改、开 PR，验改、入对包皆有。",
    sections: [
      { h: "搭改", p: "搭、验、对包。" },
      { h: "PR", p: "务求。" },
    ],
  },
  "contribute-catalog": {
    lede: "注册表加可复块件：选型、定单、为复造、验览、开 PR。",
    sections: [{ h: "选", p: "型、单、为复、验。" }],
  },
  "contribute-release-channels": {
    lede: "分支策略稳 alpha 隔离，CI 守护。",
    sections: [{ h: "支稳甲", p: "支、稳、甲、闸。" }],
  },
  "contribute-agent-plugins": {
    lede: "由已提交发版建验发插件包，态滚回。",
    sections: [{ h: "建验", p: "建、验、态、滚。" }],
  },
  "contribute-changelog": {
    lede: "说明起草评审发，源准、稳流、稿再生、周 digest 皆有。",
    sections: [{ h: "源流", p: "源、稳周。" }],
  },
  "contribute-testing": {
    lede: "未发 CLI 测仓库外真项目：建工、跑本地、验点、解错皆有。",
    sections: [
      { h: "工跑", p: "建、跑。" },
      { h: "验错", p: "验、错。" },
    ],
  },
  "contribute-canary": {
    lede: "按百比推可比，退遥测即退 canary。",
    sections: [{ h: "增模撤", p: "增、模、撤本机。" }],
  },
  "community-adopters": {
    lede: "生产或在评组织名单，入列法与全图。",
    sections: [{ h: "列", p: "入、HeyGen/tldraw 等图。" }],
  },
};
