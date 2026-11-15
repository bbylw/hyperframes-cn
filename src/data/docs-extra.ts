export const DOCS_EXTRA = {
  "vs-remotion": {
    lede: "同一条发布片用 Remotion 与 HyperFrames 各做一遍并排看：标题卡代码对照，客观讲清谁适合什么项目。",
    sections: [
      {
        h: "同要求、两智能体",
        p: "15 秒 1080p 发布片：虚构笔记应用 Inkwell，Logo 亮相 + 三条功能行 + 标语结尾，无配音，渲染到 out.mp4，智能体不得追问、自己作主。两边都在真实环境里跑通。",
        code: 'Make a 15-second 1920x1080 launch video for a fictional note-taking app called Inkwell (tagline: "Write it down. Find it later.")\nLogo reveal, three short feature lines, then an end card with the tagline. No voice.\nRender the final MP4 to out.mp4 in this folder.',
        codeFile: "PROMPT",
      },
      {
        h: "同一标题卡，两种写法",
        p: "同张卡在 Remotion 是 React 组件、在 HyperFrames 是带 data 属性的 HTML + 暂停的 GSAP 时间线。创作模型差异是根因。",
      },
      {
        h: "真正不同处与各长",
        p: "Remotion 长在 React 生态与复杂组件树；HyperFrames 长在纯 HTML 易交付与适配器动效。没有统一优劣，按项目选：要 React 体系选 Remotion，要智能体直写选 HyperFrames。",
        bullets: [
          "Remotion：React 组件、打包器、生态成熟",
          "HyperFrames：纯 HTML、零构建、智能体友好",
        ],
      },
      {
        h: "迁项目",
        p: "Remotion 项目迁移看同组下一页的迁移指南：说什么、会遇到什么拒绝、怎么验收。",
      },
    ],
  },
  "remotion-migration": {
    lede: "把已有 Remotion（React）合成源码迁成 HyperFrames HTML 该怎么说、会遇到什么拒绝。",
    sections: [
      {
        h: "迁出来是什么",
        p: "保留画面与节奏，放弃 React 组件树，产物是可定位 HTML + 适配器时间线。",
      },
      {
        h: "基础提示",
        p: "作者给一段迁移用的 base prompt：先定 data-start/duration、时间线挂载，再搬视觉。",
      },
      {
        h: "翻不过去的，为何正确",
        p: "墙钟动画、须渲染时才算的逻辑、非确定性随机本就没有等价物——拒绝是对的，渲染靠逐帧定位。",
      },
      { h: "验收不可省", p: "逐帧比对、时长与音频轨对齐、镜头不掉帧，留一遍真渲染验收。" },
    ],
  },
  "tips-overview": {
    lede: "怎么向智能体要一支 HyperFrames 视频：一句够了、强提示的要素、说细的度与迭代法。",
    sections: [
      { h: "一次性准备", p: "装好 skills/插件，开新会话再要片。" },
      {
        h: "描述或交付素材",
        p: "一句自然语言即可；或直接给 URL、CSV、截图。例：10 秒产品片 + 暗背景 + 轻音乐；CSV 变成动画柱竞速。",
        code: "Create a 10-second product intro with a title over a dark background and quiet music.\nTurn this CSV into an animated bar chart race.",
        codeFile: "PROMPT",
      },
      {
        h: "强提示的形态",
        p: "定长宽时长、逐拍时间、内容顺序、品牌色来源、声音与度量（音乐低于 −18dB 垫底）。强提示像分镜脚注：",
      },
    ],
  },
  "tips-motion": {
    lede: "改动效的话术：修不喜欢的动效、要镜头/重叠/深度/节奏、选场景转场。",
    sections: [
      {
        h: "修不喜欢的动效",
        p: "给当前现象 + 想要的现象，分开说起止与时长，例如确认单升 470px/1.2 秒、只淡入，不动旋转缩放模糊。",
      },
      {
        h: "值得主动要的",
        p: "面板在 1.9s 落定；之后只有 feed 变化才动；五段流水线拉宽逐段点亮；地区按距离每 0.09s 点火；视差、地平线、模糊-column 各速。",
      },
      { h: "手工但仍确定", p: "逐帧定位的 GSAP/CSS/Three 都可手调，值全是数字，换渲染结果不变。" },
    ],
  },
  "tips-media": {
    lede: "用媒体流水线听得懂的话，要配音、音乐、音效、字幕与抠像。",
    sections: [
      {
        h: "配音 TTS",
        p: "说清声线、语速、引擎与同步，例如女声 1.1 倍、Gemini TTS、转录同步字幕与画面亮相。",
        code: "Generate narration for this script with a professional female voice.\nAdd TTS voiceover, British male voice, at 1.1x speed.",
        codeFile: "PROMPT",
      },
      { h: "背景音乐", p: "写响度目标：电子底低于 −18dB、垫底 ducking，差别就是托住还是淹死。" },
      { h: "音效字幕抠像", p: "转场音效集合、逐词字幕同步、主体抠像与背景处理，同属媒体流水线。" },
    ],
  },
  "tips-captions": {
    lede: "把字幕语气映射为具名组件，给合成视频做逐词强调。真人 MP4 外挂字幕走另一路径。",
    sections: [
      {
        h: "风格与触发",
        p: "每种字幕组件对应一种语气与场景，按组件名触发，不要自由发挥字色描边。",
      },
      { h: "语气→组件", p: "亲和、严肃、财经、社媒各有匹配组件；偏离就报组件名与参数。" },
      { h: "文字与代码上屏", p: "强调按钮、旋钮、失败模式与叠层下三分之一，都有对应提法。" },
    ],
  },
  "tips-color": {
    lede: "固定顺序调色：色调、色键、印相与模拟质感；源比载荷重要。",
    sections: [
      { h: "源必须有东西可丢", p: "素得发灰的片调不出高级感；先看源头色与动态范围，再后期。" },
      { h: "顺序固定", p: "先色调、再色键、后印相与模拟处理；按值调不按位置。" },
      {
        h: "抠主体与刻意毁画",
        p: "人像留肤、背景半调；抖动、过曝、Kuwahara 绘画都要写清 ramp 曲线。",
      },
    ],
  },
  "tips-design": {
    lede: "指给智能体品牌真相源——设计规范、网站或 Figma，别只说 on-brand，让它自行构图。",
    sections: [
      { h: "指规范不描述氛围", p: "有 frame.md 就让它用其 palette 与字型：" },
      {
        h: "品牌锁颜色字型，版式给视频",
        p: "色值与字体配对锁死，布局间距动效由智能体为镜头编排。",
      },
      {
        h: "Figma/多片一致",
        p: "带品牌令牌、帧作开场、片尾 Logo；多片共用 frame.md，只换标题数字。",
      },
    ],
  },
  "tips-examples": {
    lede: "本页视频背后的提示词（原样），外加每条共享的动效前缀。",
    sections: [
      {
        h: "共享前缀",
        p: "每段前先贴动效规则（密度一焦、次要分段入场、连续不落定镜头、transform 过冲、环境 idle），单段只写 espectacle beat 那一下高光。",
      },
      {
        h: "数字滚动示例",
        p: "ARR 大数滚动 +312% 落定，纸币爆发为 spectacle；用 apple-money-count 块。",
      },
      {
        h: "社媒与地图示例",
        p: "推文卡点赞心弹与粒子、旧金山到东京弧线落点三重冲击波；竖图另说尺寸。",
      },
    ],
  },
  "tips-editing": {
    lede: "像剪辑师指挥智能体：剪、移、重计时、替换、重风格，动词到提示一一映射。",
    sections: [
      {
        h: "动词映射",
        p: "move 改起点、右裁改终点、媒体片可前裁进 GSAP div 不能半路起动；整段变长还要顶根 data-duration。",
      },
      { h: "剪移重排", p: "裁至 0:03、移字幕至 0:06、字幕被压到镜后移轨顶层。" },
      { h: "拆分与重计时", p: "场景 2 在 0:04 切两半加转场；场景改 2.5 为 4 秒保动作放宽。" },
    ],
  },
  "tips-recreating": {
    lede: "转录动效不是只抄构图：绝对目标迭代、回收收敛值，再知道纯文本的天花板。",
    sections: [
      { h: "转录动效", p: "抄运动不只抄构图；时间、曲线、错峰都落成数字。" },
      { h: "绝对目标迭代", p: "给绝对秒与像素目标，不说快一点。" },
      { h: "回收值", p: "把收敛值写回提示；全息地球等长例就是这么收的。" },
    ],
  },
  "tips-capstone": {
    lede: "一题、一镜、一气呵成，把指南全部技法连成 62 秒短片。",
    sections: [
      { h: "题意", p: "全程无剪，单镜长运；颜色一换即换肤。" },
      { h: "前两版为何败", p: "记败因：自私镜头、怂 spectacle、密度超标。" },
      { h: "逐字提示与分工", p: "哪页覆盖哪区、改两色重换皮、提示实际加了什么。" },
    ],
  },
  "media-overview": {
    lede: "在 HyperFrames 项目里用素材、图片、音频、字幕、背景与颜色。",
    sections: [
      { h: "先定角色再定效果", p: "同一素材在主景、背景、纹理里用处完全不同。" },
      { h: "引入与只备需用", p: "拖入、提问或手写均可；只备成片需要的，别堆料。" },
      { h: "记住已确认偏好与复用", p: "偏好与通过的配方记下来复用，终检走时间线。" },
    ],
  },
  "media-video": {
    lede: "放图/片段进片，再摆、剪、裁、换：提问、拖入或手写两个属性。",
    sections: [
      { h: "提问智能体", p: "说片名、位置、时长，智能体落 attrs。" },
      { h: "拖入", p: "浏览器编辑器里直接拖进时间线。" },
      { h: "手写与换文件", p: "HTML 里写两属性即可；换文件只换 src 保轨。" },
    ],
  },
  "media-voice": {
    lede: "大白话要旁白、音乐、音效、字幕：免费的、HeyGen 的与如何查混音。",
    sections: [
      { h: "开口要", p: "旁白、音乐、音效、字幕一次说清。" },
      { h: "免费或 HeyGen 品", p: "免费本地 Kokoro/自带集；HeyGen 声线与万曲库。" },
      { h: "自带录音与查混", p: "可读参考音轨、卡字幕、循环音乐、查混音电平。" },
    ],
  },
  "media-remove-bg": {
    lede: "把人物/物抠出让标题穿过：Studio 右键，或本地一行命令免费做。",
    sections: [
      { h: "Studio 里", p: "右键抠，标题进人后叠层。" },
      { h: "命令行", p: "本地免费模型一命令成片。" },
      { h: "适用与修", p: "发丝边缘、色溢与速度的处理与边界。" },
    ],
  },
  "media-effects": {
    lede: "给照片视频加 ASCII、半调、磁带、CRT、绘画，或修色调色；原文件不变。",
    sections: [
      { h: "开口要风格", p: "报风名加强度，智能体落滤镜。" },
      { h: "特效库", p: "ASCII、半调、磁带损伤、CRT、绘画各有起效点。" },
      { h: "修色与 LUT", p: "纠偏与 LUT 手调，改的是渲染不改原片。" },
    ],
  },
  "media-export": {
    lede: "审项目、跑检查、经智能体/浏览器/CLI 渲染，交付正确文件或链接。",
    sections: [
      { h: "批项目不批一帧", p: "全片眼检，不被一张好帧忽悠。" },
      { h: "跑检查", p: "doctor/lint/check 三件套先过。" },
      { h: "在工作处渲染", p: "智能体、浏览器、CLI 三选一；看成片再分享正确形态。" },
    ],
  },
  "editor-index": {
    lede: "浏览器编辑器：一行打开任意项目，手动改画面、时间与动效。",
    sections: [
      { h: "从哪进", p: "项目内跑一行即开浏览器编辑器。" },
      { h: "改所见改时间", p: "点选改画面、拖时间线、撸预览。" },
      { h: "检查导出", p: "检查跑通再导出，快捷键随手。" },
    ],
  },
  "editor-canvas": {
    lede: "浏览器里点选改画面、关键帧动效、改代码或交给智能体。",
    sections: [
      { h: "点选", p: "画布点选所见即所得。" },
      { h: "改与关键帧", p: "改样式与关键帧动画，图层组嵌套场景。" },
      { h: "换媒体与源码", p: "换片、重播校验，不可编辑处说明；直接改源码。" },
    ],
  },
  "editor-timeline": {
    lede: "在浏览器时间线上移、裁、拆、对齐片段，各按钮说明。",
    sections: [
      { h: "移裁拆", p: "拖动即移、edge 即裁，拆分在交点。" },
      { h: "工具栏", p: "按钮含义与快捷对应。" },
    ],
  },
  "editor-audio": {
    lede: "浏览器里：轨上特效预设、垫底音乐、分组、静音与自动化。",
    sections: [
      { h: "特效与预设", p: "打开轨的特效架，预设一键。" },
      { h: "音乐垫底", p: "压到旁白下，写响度。" },
      { h: "分组与自动化", p: "组轨、静音、随时间自动化。" },
    ],
  },
  "editor-assets": {
    lede: "浏览器里导入复用媒体、加 Catalog 视觉、改字幕词、把值变为模板变量。",
    sections: [
      { h: "导入与复用", p: "导入资产，项目内复用。" },
      { h: "加 Catalog 与改字幕", p: "加块改字幕词样式。" },
      { h: "变量", p: "把值抽成变量做模板。" },
    ],
  },
  "editor-export": {
    lede: "浏览器里在 Renders 面板设定并跑渲染，搭可导航幻灯片。",
    sections: [
      { h: "设文件", p: "定名、尺寸、质量。" },
      { h: "队列", p: "跑渲染排队。" },
      { h: "幻灯片", p: "做可翻页演示。" },
    ],
  },
  "help-trouble": {
    lede: "按所见修复：Studio 应用、预览与浏览器编辑器、渲染失败或画面不对。",
    sections: [
      { h: "Studio 应用", p: "更新送达、登录与安装排障。" },
      { h: "预览与浏览器", p: "打不开、同步、字幕、图层排障。" },
      { h: "渲染与卡住", p: "慢渲染、报错、画面错位；还不行就报反馈带完整输出。" },
    ],
  },
  "help-thirty": {
    lede: "30 课顺序：每天教什么、成片预览与提示词。",
    sections: [
      { h: "起步", p: "前段做首片与基础。" },
      { h: "导演精修", p: "中段入动效与声音。" },
      { h: "远方发版", p: "末段做系列与交付。" },
    ],
  },
  "help-product": {
    lede: "创作编辑渲染时需要知道的 HyperFrames 变化。",
    sections: [
      { h: "本月重点", p: "7 月等月度大变化，渲染更准、媒体预览更稳。" },
      { h: "跟上最新", p: "更新 Studio 与 CLI，项目跟着新。" },
    ],
  },
  "help-weekly": {
    lede: "HyperFrames 每周精选，定期聚合大变化。",
    sections: [
      { h: "本周重点", p: "渲染对齐预览、运动模糊、预览播方、浏览器、云与本地渲染。" },
      { h: "检查与 CLI", p: "lint、CLI、计费、Skills 与文档目录。" },
      { h: "0.9 Plan v2", p: "大版本 Plan v2 已上线。" },
    ],
  },
  "help-changelog": {
    lede: "HyperFrames 发版说明，按月聚合，功能修复性能皆记。",
    sections: [
      { h: "看最新", p: "最新月在最前，功能修复性能分栏。" },
      { h: "找你的版本", p: "按版本号定位，升级对影响看迁移。" },
    ],
  },
  "studio-install": {
    lede: "下载 Mac/Windows/Linux 版 Studio 应用、首次打开、登录 HeyGen。",
    sections: [
      { h: "下载安装", p: "官网下载对应系统版装好。" },
      { h: "首次与登录", p: "开应用、登录 HeyGen 免费账号。" },
      { h: "更新与目录", p: "自动更新，工作目录位置。" },
    ],
  },
  "studio-first-video": {
    lede: "一句话描述、回答问题、过故事板拿到首片（Studio 版）。",
    sections: [
      { h: "过程", p: "一句话进，问题答完，故事板过即开建。" },
      { h: "分步版", p: "想稳一点走分步。" },
    ],
  },
  "studio-existing": {
    lede: "把 Claude/Codex 起步的项目带进 Studio，Mac 保留对话，做完交回智能体。",
    sections: [
      { h: "从智能体", p: "Mac 一条命令带过去。" },
      { h: "从应用", p: "Import projects 导入。" },
      { h: "交回", p: "补完上下文交给智能体续。" },
    ],
  },
  "studio-reference": {
    lede: "给链接/文件/灵感流，抄剪辑字幕特效，换你的人词品牌。",
    sections: [
      { h: "选片", p: "链接、上传或流里选。" },
      { h: "定路线", p: "应用读片定抄剪辑还是只抄动效。" },
      { h: "换与年比", p: "换主角文案品牌，与原片逐帧比。" },
    ],
  },
  "studio-brand": {
    lede: "从网站或文件建品牌套件，全片统一品牌。",
    sections: [
      { h: "建套件", p: "给官网或自有文件提炼色字 Logo。" },
      { h: "套件装什么", p: "色、字、Logo、语气。" },
      { h: "用于项目与团队", p: "项目引用套件，团队共享。" },
    ],
  },
  "studio-clips": {
    lede: "在 Studio 用 HeyGen Video 1 生成最多一分钟 AI 片段并入项目。",
    sections: [
      { h: "开口要片段", p: "给智能体报题材时长。" },
      { h: "生成媒体", p: "或点 Generate media。" },
      { h: "改与计费", p: "替换已备片，看费用与额度。" },
    ],
  },
  "studio-edit": {
    lede: "打字改、指画面、画圈评论，可批量交给智能体。",
    sections: [
      { h: "打字", p: "聊窗里写改动。" },
      { h: "指画评论", p: "点、画、注在画面上。" },
      { h: "批量与撤销", p: "多改一次交，撤销回退。" },
    ],
  },
  "studio-workspace": {
    lede: "Studio 项目全图：聊天与 @ # / 菜单、脚本面板、媒体字幕灵感图层与 Framey。",
    sections: [
      { h: "聊窗三菜单", p: "@ 引资产 # 引片 / 引技能。" },
      { h: "脚本面板", p: "像改文档改视频。" },
      { h: "媒体字幕等", p: "Media/Captions/Inspirations/Layers 与预览工具。" },
    ],
  },
  "studio-connect": {
    lede: "选 Studio 的智能体：Claude Code、Codex、Grok、Antigravity、Copilot、免费 OpenCode，应用代装。",
    sections: [
      { h: "设一个", p: "应用里选并装。" },
      { h: "权限", p: "Auto 或 Full access。" },
      { h: "切换", p: "随时换智能体。" },
    ],
  },
  "studio-export": {
    lede: "从 Studio 渲染成片，去下载文件夹找。",
    sections: [
      { h: "本机或云", p: "Mac 或云渲染二选一。" },
      { h: "选文件与跑", p: "选格式跑渲染。" },
      { h: "找文件与失败", p: "下载夹、失败处理。" },
    ],
  },
  "studio-share": {
    lede: "Studio 一键审阅链接，可看片评论，控访问、同链新版、可关。",
    sections: [
      { h: "分享", p: "一键生链。" },
      { h: "控访问", p: "定谁可开。" },
      { h: "新版与关", p: "同链发新、关链。" },
    ],
  },
};
