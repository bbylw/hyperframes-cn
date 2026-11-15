export interface DocItem {
  slug: string;
  zh: string;
  en: string;
  descZh: string;
  url: string;
  video?: string;
  poster?: string;
}

export interface DocGroup {
  id: string;
  title: string;
  en: string;
  items: DocItem[];
}

export const DOCS_GROUPS: DocGroup[] = [
  {
    id: "start",
    title: "Start here · 入门",
    en: "Start here",
    items: [
      {
        slug: "introduction",
        zh: "什么是 HyperFrames",
        en: "What is HyperFrames?",
        descZh: "用普通网页技术，让 AI 智能体做成视频。",
        url: "https://hyperframes.heygen.com/introduction.md",
        video:
          "https://static.heygen.ai/hyperframes-oss/docs/images/showcase/journey-introduction-v5-v2.mp4",
        poster:
          "https://static.heygen.ai/hyperframes-oss/docs/images/showcase/journey-introduction-v5.jpg",
      },
      {
        slug: "quickstart",
        zh: "制作你的第一个视频",
        en: "Make your first video",
        descZh: "在 Studio 应用、本地智能体或 AI 聊天中，零安装制作第一支视频。",
        url: "https://hyperframes.heygen.com/quickstart.md",
      },
      {
        slug: "examples",
        zh: "灵感作品",
        en: "Inspiration",
        descZh: "别人已做好的视频，可在 Studio 中直接 remix。",
        url: "https://hyperframes.heygen.com/examples.md",
      },
      {
        slug: "faq",
        zh: "常见问题",
        en: "HyperFrames FAQ",
        descZh: "费用、智能体选择、Windows、渲染、音频、字体等高频问题的短答。",
        url: "https://hyperframes.heygen.com/faq.md",
      },
    ],
  },
  {
    id: "make",
    title: "Make a video · 制作视频",
    en: "Make a video",
    items: [
      {
        slug: "workflows",
        zh: "你想制作什么？",
        en: "What do you want to make?",
        descZh: "从网站、想法、素材、PR、音乐或数据出发，选对类型再做。",
        url: "https://hyperframes.heygen.com/workflows.md",
        video: "https://static.heygen.ai/hyperframes-oss/docs/studio-demos/reference-demo-v2.mp4",
        poster: "https://hyperframes.heygen.com/public/images/studio-app/reference-demo-v2.jpg",
      },
      {
        slug: "product-launch",
        zh: "用 AI 制作产品发布视频",
        en: "Make a product launch video with AI",
        descZh: "粘贴产品 URL，用真实界面、颜色和文案生成发布片。",
        url: "https://hyperframes.heygen.com/guides/product-launch-video.md",
      },
      {
        slug: "faceless-explainer",
        zh: "用 AI 制作讲解视频",
        en: "Make an explainer video with AI",
        descZh: "把笔记、文章或难题变成不拍真人的视觉讲解。",
        url: "https://hyperframes.heygen.com/guides/faceless-explainer.md",
      },
      {
        slug: "motion-graphics",
        zh: "用 AI 制作动态图形",
        en: "Make motion graphics with AI",
        descZh: "做标题、数据、图表、Logo 动效、叠层等短动效。",
        url: "https://hyperframes.heygen.com/guides/motion-graphics.md",
      },
      {
        slug: "captions",
        zh: "用 AI 给视频加字幕",
        en: "Add captions to a video with AI",
        descZh: "给真人出镜片加字幕、设计卡或精剪去停顿。",
        url: "https://hyperframes.heygen.com/guides/captions-and-recuts.md",
      },
      {
        slug: "music",
        zh: "制作音乐视频或歌词视频",
        en: "Make a music video or lyric video",
        descZh: "按音乐节拍剪辑素材、图片、歌词与动效。",
        url: "https://hyperframes.heygen.com/guides/music-to-video.md",
      },
      {
        slug: "data-maps",
        zh: "把数据变成动画视频",
        en: "Turn data into an animated video",
        descZh: "动画图表、计数、地图：高亮、连线、气泡大小。",
        url: "https://hyperframes.heygen.com/prompting/data-and-maps.md",
      },
      {
        slug: "avatar",
        zh: "添加 AI 数字人主持",
        en: "Add an AI avatar presenter to a video",
        descZh: "HeyGen 数字人出镜，HyperFrames 做场景、图形与字幕。",
        url: "https://hyperframes.heygen.com/guides/avatar-presenter.md",
      },
      {
        slug: "pr-to-video",
        zh: "把 GitHub PR 变成视频",
        en: "Turn a GitHub PR into a video",
        descZh: "粘贴 PR 链接，讲清改了什么、为何重要。",
        url: "https://hyperframes.heygen.com/guides/pr-to-video.md",
      },
      {
        slug: "slideshow",
        zh: "用 AI 制作交互演示",
        en: "Make an interactive presentation with AI",
        descZh: "可现场演示的 deck：点击揭示、分支、热点、演讲者模式。",
        url: "https://hyperframes.heygen.com/guides/slideshow.md",
      },
      {
        slug: "general-video",
        zh: "制作其他任何视频",
        en: "Make any other video",
        descZh: "组合素材、改现有片，或无固定源时与智能体共导。",
        url: "https://hyperframes.heygen.com/guides/general-video.md",
      },
    ],
  },
  {
    id: "agent",
    title: "Use it with your agent · 使用智能体",
    en: "Use it with your agent",
    items: [
      {
        slug: "with-claude-code",
        zh: "使用 Claude Code 制作视频",
        en: "Make videos with Claude Code",
        descZh: "安装插件、开口要片、本地预览并渲染 MP4。",
        url: "https://hyperframes.heygen.com/guides/with-claude-code.md",
      },
      {
        slug: "with-codex",
        zh: "使用 Codex 制作视频",
        en: "Make videos with Codex",
        descZh: "安装 Codex skills、开口要片、本地预览并渲染。",
        url: "https://hyperframes.heygen.com/guides/with-codex.md",
      },
      {
        slug: "with-cursor",
        zh: "使用 Cursor 制作视频",
        en: "Make videos with Cursor",
        descZh: "安装 Cursor skills、用大白话要片、预览渲染。",
        url: "https://hyperframes.heygen.com/guides/with-cursor.md",
      },
      {
        slug: "mcp",
        zh: "通过 AI 聊天创建",
        en: "Create through an AI chat",
        descZh: "用托管 MCP 连接器，不装本地 CLI 即可创建渲染。",
        url: "https://hyperframes.heygen.com/guides/mcp.md",
      },
      {
        slug: "free-agents",
        zh: "使用免费智能体制作视频",
        en: "Make videos with a free agent",
        descZh: "HyperFrames 免费，智能体是唯一成本：OpenCode 免费模型或本地模型。",
        url: "https://hyperframes.heygen.com/guides/free-agents.md",
      },
      {
        slug: "skills",
        zh: "安装与更新 Agent Skills",
        en: "Install and update agent skills",
        descZh: "教会编程智能体用合法项目结构创建 HyperFrames 工程。",
        url: "https://hyperframes.heygen.com/guides/skills.md",
      },
      {
        slug: "plugins",
        zh: "安装 HyperFrames 插件",
        en: "Install the HyperFrames plugin",
        descZh: "用带版本的插件包分发 skills，由智能体管理更新。",
        url: "https://hyperframes.heygen.com/guides/plugins.md",
      },
      {
        slug: "design-tools",
        zh: "引入设计稿",
        en: "Bring in a design: Figma, Claude Design, Open Design",
        descZh: "从 Figma / Claude Design / Open Design 出发，保留观感，只重建必须动的。",
        url: "https://hyperframes.heygen.com/guides/design-tools.md",
      },
    ],
  },
  {
    id: "compare",
    title: "Compare · 对比",
    en: "Compare",
    items: [
      {
        slug: "vs-remotion",
        zh: "HyperFrames vs Remotion",
        en: "HyperFrames vs Remotion",
        descZh: "同一发布片用两种工具做，代码并排对比，讲清选型。",
        url: "https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md",
      },
      {
        slug: "remotion-migration",
        zh: "从 Remotion 迁移",
        en: "Move from Remotion to HyperFrames",
        descZh: "把已有 Remotion（React）合成源码迁为 HTML 该怎么说、会遇到什么拒绝。",
        url: "https://hyperframes.heygen.com/prompting/remotion-migration.md",
      },
    ],
  },
  {
    id: "tips",
    title: "Tips for better videos · 提问技巧",
    en: "Tips for better videos",
    items: [
      {
        slug: "tips-overview",
        zh: "提一个好视频需求",
        en: "Ask for a great video",
        descZh: "一句话够不够、强提示的要素、何时说细、何时迭代。",
        url: "https://hyperframes.heygen.com/prompting/overview.md",
      },
      {
        slug: "tips-motion",
        zh: "要顺滑的动效与转场",
        en: "Ask for smooth motion and transitions",
        descZh: "修讨厌的动效、要镜头/重叠/深度/节奏、选场景转场。",
        url: "https://hyperframes.heygen.com/prompting/motion.md",
      },
      {
        slug: "tips-media",
        zh: "加配音、音乐与音效",
        en: "Add voice, music and sound",
        descZh: "用媒体流水线听得懂的话，要配音、音乐、音效与素材。",
        url: "https://hyperframes.heygen.com/prompting/media-and-audio.md",
      },
      {
        slug: "tips-captions",
        zh: "文字、字幕与屏幕代码",
        en: "Text, captions and code on screen",
        descZh: "字幕语气映射具名组件、逐词强调。",
        url: "https://hyperframes.heygen.com/prompting/captions-catalog.md",
      },
      {
        slug: "tips-color",
        zh: "色彩、特效、3D 与生成图",
        en: "Colour, effects, 3D and generated art",
        descZh: "固定顺序调色：色调、色键、印相与模拟质感；源比载荷重要。",
        url: "https://hyperframes.heygen.com/prompting/color-grading.md",
      },
      {
        slug: "tips-design",
        zh: "品牌、模板与分镜",
        en: "Brand, templates and storyboards",
        descZh: "指给智能体品牌真相源，而不是只说 on-brand，让它构图。",
        url: "https://hyperframes.heygen.com/prompting/design-systems.md",
      },
      {
        slug: "tips-examples",
        zh: "已验证的提示词示例",
        en: "Verified example prompts",
        descZh: "本页视频的提示词与每条共享的动效前缀。",
        url: "https://hyperframes.heygen.com/prompting/examples.md",
      },
      {
        slug: "tips-editing",
        zh: "编辑已有视频",
        en: "Editing existing videos",
        descZh: "像剪辑师一样指挥：剪、移、重计时、替换、重风格。",
        url: "https://hyperframes.heygen.com/prompting/editing-existing-videos.md",
      },
      {
        slug: "tips-recreating",
        zh: "复刻你见过的效果",
        en: "Recreating something you saw",
        descZh: "转录动效、绝对目标迭代、提炼常量，知道纯文本天花板。",
        url: "https://hyperframes.heygen.com/prompting/recreating-references.md",
      },
      {
        slug: "tips-capstone",
        zh: "一整部片，逐条提",
        en: "A full film, prompt by prompt",
        descZh: "一个提示、一镜到底，把本指南全部技法连成 62 秒短片。",
        url: "https://hyperframes.heygen.com/prompting/capstone.md",
      },
    ],
  },
  {
    id: "media",
    title: "Images, sound and footage · 图像声音素材",
    en: "Images, sound and footage",
    items: [
      {
        slug: "media-overview",
        zh: "使用媒体",
        en: "Work with media",
        descZh: "在项目里用素材、图片、音频、字幕、背景与颜色。",
        url: "https://hyperframes.heygen.com/guides/media.md",
      },
      {
        slug: "media-video",
        zh: "加图片与视频片段",
        en: "Add images and video clips",
        descZh: "放图/片段再摆位、剪切、裁剪、替换：提问、拖入或写两个属性。",
        url: "https://hyperframes.heygen.com/guides/video-components.md",
      },
      {
        slug: "media-voice",
        zh: "加配音、音乐、音效与字幕",
        en: "Add voiceover, music, sound effects and captions",
        descZh: "大白话要旁白、音乐、音效、字幕：免费的、HeyGen 的、如何检查混音。",
        url: "https://hyperframes.heygen.com/guides/voice-and-audio.md",
      },
      {
        slug: "media-remove-bg",
        zh: "抠背景",
        en: "Remove a video background",
        descZh: "把人物/对象抠出，让标题从身后穿过：Studio 右键或本地一行命令免费做。",
        url: "https://hyperframes.heygen.com/guides/remove-background.md",
      },
      {
        slug: "media-effects",
        zh: "给图与片加特效",
        en: "Add effects to images and video",
        descZh: "ASCII、半调、磁带损伤、CRT、绘画风，或修色调色；原文件不变。",
        url: "https://hyperframes.heygen.com/guides/media-effects.md",
      },
      {
        slug: "media-export",
        zh: "渲染为 MP4",
        en: "Render a video to MP4",
        descZh: "检查、经智能体/浏览器/CLI 渲染，交付正确文件或链接。",
        url: "https://hyperframes.heygen.com/guides/export-and-share.md",
      },
    ],
  },
  {
    id: "editor",
    title: "Browser editor · 浏览器编辑器",
    en: "Browser editor",
    items: [
      {
        slug: "editor-index",
        zh: "在浏览器编辑器中编辑",
        en: "Edit in the browser editor",
        descZh: "一行打开任意项目，手动改画面、时间与动效。",
        url: "https://hyperframes.heygen.com/studio/index.md",
      },
      {
        slug: "editor-canvas",
        zh: "在画布上编辑",
        en: "Edit on the canvas",
        descZh: "选中改画面、关键帧动效、改代码或交智能体。",
        url: "https://hyperframes.heygen.com/studio/canvas.md",
      },
      {
        slug: "editor-timeline",
        zh: "在时间线上改时间",
        en: "Edit timing on the timeline",
        descZh: "移动、剪切、拆分、对齐片段与按钮说明。",
        url: "https://hyperframes.heygen.com/studio/timeline.md",
      },
      {
        slug: "editor-audio",
        zh: "混音",
        en: "Mix audio",
        descZh: "轨上特效与预设、垫底音乐、分组、静音与自动化。",
        url: "https://hyperframes.heygen.com/studio/audio-effects.md",
      },
      {
        slug: "editor-assets",
        zh: "字幕、素材与变量",
        en: "Captions, assets and variables",
        descZh: "导入复用媒体、加 Catalog 视觉、改字幕词、把值变为模板变量。",
        url: "https://hyperframes.heygen.com/studio/assets-and-blocks.md",
      },
      {
        slug: "editor-export",
        zh: "导出与幻灯片",
        en: "Export and slideshows",
        descZh: "渲染面板设置与执行、搭可导航幻灯片。",
        url: "https://hyperframes.heygen.com/studio/export.md",
      },
    ],
  },
  {
    id: "help",
    title: "Help and updates · 帮助与更新",
    en: "Help and updates",
    items: [
      {
        slug: "help-trouble",
        zh: "故障排查",
        en: "Troubleshooting",
        descZh: "按所见修复：Studio 应用、预览与浏览器编辑器、渲染失败或画面不对。",
        url: "https://hyperframes.heygen.com/help.md",
      },
      {
        slug: "help-thirty",
        zh: "30 天 HyperFrames",
        en: "30 Days of HyperFrames",
        descZh: "30 课顺序：每天教什么、成片预览与提示词。",
        url: "https://hyperframes.heygen.com/thirty-days.md",
      },
      {
        slug: "help-product",
        zh: "产品更新",
        en: "Product updates",
        descZh: "创作编辑渲染时需要知道的 HyperFrames 变化。",
        url: "https://hyperframes.heygen.com/product-updates.md",
      },
      {
        slug: "help-weekly",
        zh: "每周更新",
        en: "Weekly updates",
        descZh: "HyperFrames 每周精选。",
        url: "https://hyperframes.heygen.com/weekly-updates.md",
      },
      {
        slug: "help-changelog",
        zh: "变更日志",
        en: "Changelog",
        descZh: "HyperFrames 发版说明。",
        url: "https://hyperframes.heygen.com/changelog.md",
      },
    ],
  },
  {
    id: "studio",
    title: "Studio app · 桌面应用",
    en: "Studio app",
    items: [
      {
        slug: "studio-install",
        zh: "安装 Studio 应用",
        en: "Install the Studio app",
        descZh: "下载 Mac/Windows/Linux 版、首次打开、登录 HeyGen。",
        url: "https://hyperframes.heygen.com/studio-app/index.md",
      },
      {
        slug: "studio-first-video",
        zh: "在 Studio 做第一支视频",
        en: "Make your first video in the Studio app",
        descZh: "一句话描述、回答问题、过故事板，拿到第一支片。",
        url: "https://hyperframes.heygen.com/studio-app/first-video.md",
      },
      {
        slug: "studio-existing",
        zh: "在 Studio 继续 Claude/Codex 项目",
        en: "Continue a Claude Code or Codex project in Studio",
        descZh: "打开智能体起步的项目，保留对话（Mac），做完交回智能体。",
        url: "https://hyperframes.heygen.com/studio-app/existing-project.md",
      },
      {
        slug: "studio-reference",
        zh: "参考任意视频复刻风格",
        en: "Reference any video to recreate its style",
        descZh: "给链接/文件/灵感流，抄剪辑字幕特效，换你的人词品牌。",
        url: "https://hyperframes.heygen.com/studio-app/reference-video.md",
      },
      {
        slug: "studio-brand",
        zh: "使用品牌套件",
        en: "Use your brand kit",
        descZh: "从网站或文件建品牌套件，全片统一品牌。",
        url: "https://hyperframes.heygen.com/studio-app/brand-kits.md",
      },
      {
        slug: "studio-clips",
        zh: "用 HeyGen Video 1 做片段",
        en: "Make clips with HeyGen Video 1",
        descZh: "在 Studio 用 HeyGen Video 1 生成最多一分钟 AI 片段并入项目。",
        url: "https://hyperframes.heygen.com/studio-app/video-clips.md",
      },
      {
        slug: "studio-edit",
        zh: "用智能体编辑视频",
        en: "Edit a video with the agent",
        descZh: "打字改、指画面、画圈或评论，可批量交给智能体。",
        url: "https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md",
      },
      {
        slug: "studio-workspace",
        zh: "熟悉项目工作区",
        en: "Find your way around a project",
        descZh: "聊天与 @ # / 菜单、脚本面板、媒体、字幕、灵感与图层。",
        url: "https://hyperframes.heygen.com/studio-app/workspace.md",
      },
      {
        slug: "studio-connect",
        zh: "连接你的智能体",
        en: "Connect your agent",
        descZh: "选 Claude Code / Codex / Grok / Antigravity / Copilot / 免费 OpenCode，应用代装。",
        url: "https://hyperframes.heygen.com/studio-app/connect-your-agent.md",
      },
      {
        slug: "studio-export",
        zh: "导出视频",
        en: "Export a video",
        descZh: "在 Studio 渲染成片，去下载文件夹找。",
        url: "https://hyperframes.heygen.com/studio-app/export.md",
      },
      {
        slug: "studio-share",
        zh: "分享审阅",
        en: "Share your video for review",
        descZh: "一键审阅链接，可看片评论；可控访问、同链发新版、可关。",
        url: "https://hyperframes.heygen.com/studio-app/share.md",
      },
    ],
  },
];

export const DOCS_FLAT: DocItem[] = DOCS_GROUPS.flatMap((g) => g.items);

export function findDoc(slug: string): DocItem | undefined {
  return DOCS_FLAT.find((d) => d.slug === slug);
}

export function groupOf(slug: string) {
  return DOCS_GROUPS.find((g) => g.items.some((i) => i.slug === slug));
}

export interface DocSection {
  h: string;
  p: string;
  bullets?: string[];
  code?: string;
  codeFile?: string;
  codeComment?: string;
}

export interface DocContent {
  lede: string;
  sections: DocSection[];
}

export const DOCS_CONTENT: Record<string, DocContent> = {
  introduction: {
    lede: "免费开源框架，把 HTML 变成视频：你提需求，智能体建可编辑工程，HyperFrames 播放或渲染。",
    sections: [
      { h: "能做什么", p: "本页每张卡都是已完成 HyperFrames 成片，点开带声观看。" },
      {
        h: "三件事",
        p: "智能体建：你描述，智能体写 HTML/CSS/JS，无需手写代码。可编辑：结果是项目文件夹，不是黑盒，智能体、浏览器编辑器与你的工具都在同一套文件上工作。渲染可靠：向项目索取每一帧，不依赖实时播放，慢机器也不掉帧。",
        bullets: ["智能体建：描述画面即可", "可编辑：项目文件夹共用", "可靠渲染：逐帧索取，不掉帧"],
      },
      {
        h: "做一支",
        p: "装 skills、发一条短需求，选继续方式。",
        code: "npx hyperframes skills update",
        codeFile: "TERMINAL",
      },
    ],
  },
  examples: {
    lede: "别人已做好的视频，remix 即得同款：发布片、动态图形、真人剪辑。喜欢就 Remix in Studio 做自己的版本。",
    sections: [
      {
        h: "Remix 喜欢的视频",
        p: "最快的方法是拿一支好的片子开工：每支下面都是别人原片在 HyperFrames 的重建，换了文案、人物与品牌。悬停播放，选 Remix in Studio。",
      },
      {
        h: "1:1 复刻任意视频",
        p: "指向一支成片，HyperFrames 按帧重建成可编辑 HTML：手势、文字、时间全对齐。参考（左）与复刻（右）逐帧匹配。",
      },
      {
        h: "最常用组件与模板",
        p: "按近 30 天安装量排序的现成块，加到项目再改内容；初始化模板适合成片脚手架。",
        code: "npx hyperframes init my-video --example <name>\n# 模板：warm-grain / play-mode / swiss-grid / kinetic-type / decision-tree / product-promo / nyt-graph / vignelli / blank",
        codeFile: "TERMINAL",
      },
    ],
  },
  faq: {
    lede: "费用、智能体、Windows、Studio、Remotion、渲染、音频、字体——短答并链到详情页。",
    sections: [
      {
        h: "免费与商用",
        p: "框架、CLI、skills 是 Apache-2.0，本地渲染免费免账号。你的智能体订阅与 HeyGen 声音、数字人、云渲染另计。Studio 免费版含 AI 配音、字幕、音乐音效、3 条 AI 片段、每月 5 次云导出；Pro $25/月加顶级模型与无限云导出。",
        bullets: [
          "免费：框架/CLI/skills + 本地渲染",
          "HeyGen 另计：声音、音乐、数字人、云渲染",
          "Studio 免费版 + Pro $25/月",
        ],
      },
      {
        h: "安装与账号",
        p: "Claude Code 用插件，其余大多用 skills 选 Core Skills 后开新会话。本地做片渲染不需要 HeyGen 账号/API Key；用 HeyGen 声音数字人云渲染才需要，登录见 auth。",
        code: "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes\n# 或\nnpx skills add heygen-com/hyperframes",
        codeFile: "TERMINAL / INSTALL",
      },
      {
        h: "预览渲染与云",
        p: "项目内 preview 预览、render 出 MP4，需要 FFmpeg，doctor 查环境。300 帧 1080p 约 10 秒（留了贵 CSS 则约 25 秒）。云渲染走 HeyGen 积分，也可自跑 AWS Lambda / Cloud Run / Docker。",
        code: "npx hyperframes preview\nnpx hyperframes render --output final.mp4\nnpx hyperframes doctor",
        codeFile: "TERMINAL / RENDER",
      },
      {
        h: "出错先查",
        p: "在项目内依次跑 doctor / lint / check，把完整输出交给智能体。",
        code: "npx hyperframes doctor\nnpx hyperframes lint\nnpx hyperframes check",
        codeFile: "TERMINAL / DIAGNOSE",
      },
    ],
  },
  workflows: {
    lede: "按已有素材选类型：网站、想法、实拍素材、PR、音乐、数据。指南含成片、提示词与改法。",
    sections: [
      {
        h: "有喜欢的视频就从它出发",
        p: "Studio 首页开 Reference，粘 YouTube/TikTok/Instagram/X 链接、上传或从流里选。应用抄剪辑、字幕与特效（或只抄动效），问出镜是你或 AI 数字人，再换你的部分。",
      },
      {
        h: "不确定选哪个",
        p: "用自己的话把整支片描述完，智能体会从需求判断类型。用自己的智能体时开头加 /hyperframes。从 Remotion 来先看对比页。",
      },
      {
        h: "选了之后",
        p: "进入对应指南：发布、讲解、动效、字幕、音乐、数据地图、数字人、PR、演示与任意视频。每篇都给成片与可改提示。",
      },
    ],
  },
  "product-launch": {
    lede: "粘贴产品 URL，用真实界面、颜色和文案生成发布片，再随意改。",
    sections: [
      {
        h: "怎么做",
        p: "给 URL 或一句 brief，智能体抓好真实截图与品牌色生成初版，在 Studio/预览里改标题、节奏、音乐与 CTA。",
      },
      {
        h: "选种类",
        p: "短 teaser、完整发布片、功能拆解三选一；不同时长节奏完全不同，先定种类再定文案。",
      },
      {
        h: "保持产品细节",
        p: "产品名、数字、界面细节要与真实页面对齐，别让智能体编；review 时逐帧对 UI。",
      },
    ],
  },
  "faceless-explainer": {
    lede: "把笔记、文章或难题变成不依赖产品画面的视觉讲解。",
    sections: [
      { h: "怎么做", p: "给原文或要点，智能体先分镜再成图成片。说清观众是谁、看完该懂什么。" },
      { h: "从信息到理解", p: "一个镜头只讲一个概念，图先于字，字幕兜底；术语出现时配一句人话。" },
      { h: "检查是否真讲明白", p: "静音看一遍仍懂、只看字幕仍懂，再听一遍看节奏稳。" },
    ],
  },
  "motion-graphics": {
    lede: "短的、动效主导的：标题、数据、图表、Logo sting、低三分之一或叠层。",
    sections: [
      {
        h: "动效对象",
        p: "明确动什么：文字出场、数字滚动、图表竞速、Logo 章起、字幕呼吸。一次只主攻一个。",
      },
      { h: "选输出", p: "短图形通常 3–8 秒、1080p、带音频轨；方图与竖图另说尺寸。" },
      { h: "检查动效", p: "常见误区：墙钟动画掉帧、起止太齐、背景抢题。修改时给明确方向与时长。" },
    ],
  },
  captions: {
    lede: "给真人出镜片：字幕、设计卡，或去掉长停顿的紧剪版。",
    sections: [
      { h: "三选一", p: "逐字字幕 / 设计卡 / 精剪。先给片并说要哪种，再定语气与安全区。" },
      { h: "有效的提示", p: "设计卡适合数字与金句；说清每词强调、字色、描边与出入场。" },
      { h: "检查", p: "看字时间不飘、卡片不压脸、精剪不断气；静音与听声各一遍。" },
    ],
  },
  music: {
    lede: "按音乐的节拍网格剪辑素材、图片、歌词与动效。",
    sections: [
      { h: "让曲子定结构", p: "先定曲与 BPM，再卡点：副歌切密、主歌疏、停顿留白。" },
      { h: "素材怎么摆", p: "镜头时长对齐拍点，歌词与画面轮换别同停在同帧。" },
      { h: "检查节奏", p: "闭眼听拍点对齐，再睁眼看切换不抢歌词。" },
    ],
  },
  "data-maps": {
    lede: "动画图表、计数、地图——高亮区域、画路线、气泡大小，或手绘图表全控。",
    sections: [
      { h: "图表：点名或手绘", p: "想要现成块直接报 data-chart；要完全掌控就手绘坐标与轴。" },
      { h: "计数数字", p: "数字滚动配单位与小数位，终值一次定准，别来回跳。" },
      { h: "地图匹配问法", p: "高亮、连线、飞行路线、气泡大小各有匹配提法；先说区域名再说动法。" },
    ],
  },
  avatar: {
    lede: "HeyGen 数字人出镜，HyperFrames 负责场景、图形与字幕。",
    sections: [
      { h: "怎么做", p: "先选数字人并定稿口播，再让 HyperFrames 包场景与叠层。" },
      { h: "出镜之外", p: "背景、侧栏数据、字幕与转场都由合成承担，数字人只主讲。" },
      { h: "分享前检查", p: "口型、字幕同步、图层不压脸与品牌色对齐。" },
    ],
  },
  "pr-to-video": {
    lede: "粘贴 PR 链接，生成讲改了什么、为什么重要的短片，给用户、评审或社交。",
    sections: [
      { h: "怎么做", p: "给 PR URL 与观众，智能体提炼 diff 与动机成镜。" },
      { h: "按观众选故事", p: "用户版讲收益、评审版讲风险与验证、社交版讲一句话 hook。" },
      { h: "核对证据", p: "数字、文件名、分支名逐一对源头，别概括过头。" },
    ],
  },
  slideshow: {
    lede: "现场演示的 deck：点击揭示、分支、热点、演讲者模式带备注与计时。",
    sections: [
      { h: "怎么搭", p: "先定大纲与每页揭示点，再做分支与热点。" },
      { h: "好的 deck 长什么样", p: "一页一意、揭示有节奏、备注能脱稿。" },
      { h: "呈现", p: "输出是可导航 deck 不是 MP4；试走一遍再开讲。" },
    ],
  },
  "general-video": {
    lede: "组合素材、改现有片，或无固定源时与智能体共导。",
    sections: [
      { h: "怎么做", p: "先说源头与目标，混合来源时列清单。" },
      { h: "何时走自定义", p: "没有单一源能定局时，用自定义共导：你拍板，智能体执行。" },
      { h: "反馈怎么给", p: "给有用反馈：改哪镜、改什么、到什么程度，别只说再好点。" },
    ],
  },
  "with-claude-code": {
    lede: "在 Claude Code 里装插件、开口要片，本地预览并渲染 MP4。",
    sections: [
      {
        h: "开始前",
        p: "装好 Claude Code（Claude 或 Anthropic Console 登录），Node 22+、npm、FFmpeg。",
        bullets: ["Claude Code 已登录", "Node.js ≥22、npm", "FFmpeg（doctor 可查）"],
      },
      {
        h: "安装",
        p: "插件推荐；独立 skills 选 Core Skills。装完开新会话。",
        code: "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes\n# 或独立 skills\nnpx skills add heygen-com/hyperframes\nnpx hyperframes skills update",
        codeFile: "TERMINAL / INSTALL",
      },
      {
        h: "第一支片与渲染",
        p: "空文件夹打开 Claude Code，发第一条要片；智能体建项目并开预览，完成后 render。",
        code: "Using /hyperframes:hyperframes, make a 10-second product intro for https://example.com.",
        codeFile: "PROMPT → CLAUDE",
      },
    ],
  },
  "with-codex": {
    lede: "在 OpenAI Codex 里装 skills、开口要片，本地预览并渲染。",
    sections: [
      {
        h: "开始前与安装",
        p: "登录 Codex 并备 Node 22+ 与 FFmpeg，按 Codex 分步页装 HyperFrames skills。",
      },
      {
        h: "第一支片",
        p: "在空文件夹开口：",
        code: "Using /hyperframes, make a 10-second product intro for https://example.com.",
        codeFile: "PROMPT → CODEX",
      },
      { h: "预览渲染", p: "智能体建项目并开浏览器预览；要 MP4 就 render。" },
    ],
  },
  "with-cursor": {
    lede: "在 Cursor 里装 skills、用大白话要片，预览并渲染。",
    sections: [
      {
        h: "开始前与安装",
        p: "登录 Cursor、备 Node 22+ 与 FFmpeg，在项目内跑 skills 安装选 Core Skills。",
      },
      {
        h: "第一支片",
        p: "开口描述即可，智能体建项目；长片会先给三条故事线。",
        code: "Using /hyperframes, make a 10-second product intro for https://example.com.",
        codeFile: "PROMPT → CURSOR",
      },
      { h: "预览渲染", p: "跑 preview 看热重载，render 出 MP4。" },
    ],
  },
  mcp: {
    lede: "用托管 MCP 连接器：不装本地 CLI，在 HeyGen 账号里创建并渲染。",
    sections: [
      { h: "托管还是本地", p: "托管省安装但无项目文件夹与 Studio；本地适合长期迭代。" },
      { h: "连接与首版", p: "在 Claude.ai/ChatGPT 接连接器，说一句要片，连接器建首版。" },
      { h: "改与取 MP4", p: "对话里改，拿 MP4 下载；限制与排障见原文。" },
    ],
  },
  "free-agents": {
    lede: "HyperFrames 免费，智能体才是成本：Studio 里用 OpenCode 免费模型，或跑自己电脑上的模型。",
    sections: [
      { h: "同提示对比", p: "付费与开源模型同提示看质量差，多看实测评分。" },
      { h: "Studio 里用 OpenCode", p: "应用内选免费模型即可开工。" },
      { h: "自己电脑上", p: "本地模型跑同样 skills，效果看模型而定。" },
    ],
  },
  skills: {
    lede: "教会编程智能体按合法项目结构创建 HyperFrames 工程。",
    sections: [
      {
        h: "给人装",
        p: "在视频项目目录跑，选 Core Skills，再开新智能体会话。",
        code: "npx skills add heygen-com/hyperframes",
        codeFile: "TERMINAL",
      },
      {
        h: "智能体装/刷新",
        p: "全局装用 skills update，只装核心集与已装；按名装单个按需 skill。",
        code: "npx hyperframes skills update\nnpx hyperframes skills update <name>\nnpx hyperframes skills check",
        codeFile: "TERMINAL",
      },
      { h: "看不到/更新报错", p: "开新会话、查 skills 列表；YAML 报错与无匹配是常见坑。" },
    ],
  },
  plugins: {
    lede: "把 skills 打包成带版本的插件，由智能体管更新。",
    sections: [
      {
        h: "Claude Code",
        p: "装插件、开自动更新，覆盖项目内与托管策略。",
        code: "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes",
        codeFile: "TERMINAL",
      },
      {
        h: "Copilot / VS Code / Cursor / Gemini",
        p: "各自插件分发口不同，先看插件指南含更新设置。",
      },
      { h: "版本与迁移", p: "更新走 plugin update，卸走 uninstall；独立 skills 迁插件按指南走。" },
    ],
  },
  "design-tools": {
    lede: "从 Figma、Claude Design 或 Open Design 出发：保观感，只重建必须动的。",
    sections: [
      { h: "留图还是重建", p: "静态视觉留图，须动的才在 HTML 里重建。" },
      { h: "从 Figma", p: "给 figma.com 链接，把素材、令牌、组件、帧重建为动效序列。" },
      { h: "Claude Design / Open Design", p: "同理把设计稿转帧；交付前自检层级与对齐。" },
    ],
  },
};

export function genericContent(item: DocItem): DocContent {
  return {
    lede: item.descZh,
    sections: [
      {
        h: "章节定位",
        p: `当前页面仅提供官方文档《${item.en}》的中文目录摘要（${item.descZh}），完整步骤、参数说明与示例代码尚未在本地全量翻译。`,
      },
      {
        h: "查看完整原文",
        p: `请点击页面底部「${item.en} 官网原文」直达官方完整文档；如在本地项目使用智能体协助，也可运行 /hyperframes 并说明对应主题。`,
      },
      {
        h: "继续浏览",
        p: "可以通过左侧或顶部的文档目录跳转到已完成中文导览的章节（如入门、制作视频、智能体与脚本指南），或点击底部翻页继续查看前后目录。",
      },
    ],
  };
}
