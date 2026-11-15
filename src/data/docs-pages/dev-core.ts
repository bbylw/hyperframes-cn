import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "dev-overview": {
    lede: "基于 HyperFrames 构建，意味着使用可编辑的 HTML 组合作为自动化、播放、编辑和渲染的共享源。",
    sections: [
      {
        h: "从组合契约开始",
        p: "",
        paras: [
          "组合是一个有限 HTML 文档，具有明确视口、定时片段、素材，以及零个或多个可寻址的动画运行时。",
          "运行时读取时间属性，控制片段可见性和素材播放。当组合使用动画运行时，HyperFrames 也会寻址其注册的时间轴。HTML 仍可由常规 Web 工具检查和编辑。",
          "生成组合或构建新的创作界面时，请使用 [组合与 schema 参考](https://hyperframes.heygen.com/reference/html-schema.md)。",
        ],
        codeBlocks: [
          {
            code: '<!doctype html>\n<html lang="en">\n  <body>\n    <div\n      id="main"\n      data-composition-id="intro"\n      data-start="0"\n      data-duration="5"\n      data-width="1920"\n      data-height="1080"\n      data-no-timeline\n    >\n      <img\n        id="product"\n        class="clip"\n        data-start="0"\n        data-duration="5"\n        data-track-index="1"\n        src="./assets/product.png"\n      />\n    </div>\n  </body>\n</html>',
            file: "html",
          },
        ],
        id: "start-with-the-composition-contract",
      },
      {
        h: "选择最小的集成界面",
        p: "",
        paras: [
          "| 应用必须做什么 | 从这里开始 | 第一个有用成果 |\n| - | - | - |\n| 校验、预览、渲染或自动化项目 | CLI | 检查并渲染一个已知项目 |\n| 查询和更改组合 HTML | SDK | 找到一个元素，修改它并保存 |\n| 嵌入可寻址的组合 | Player | 在页面中播放和寻址一个组合 |\n| 构建编辑器 | SDK + Player | 编辑源并在实时预览中反映 |\n| 从 Node 服务渲染 | Producer | 把一个组合变成_encoded 文件 |\n| 控制帧捕获或构建渲染基础设施 | Engine | 从可寻址页面捕获精确帧 |\n| 运行托管或分布式渲染 | Cloud、Lambda 或 Cloud Run | 提交一个项目并取回结果 |",
          "当 CLI 已经能完整完成工作时，不要从渲染引擎开始。当应用只需要播放时，不要添加 SDK。",
        ],
        codeBlocks: [],
        id: "choose-the-smallest-integration-surface",
      },
      {
        h: "CLI：操作完整项目",
        p: "",
        paras: [
          "CLI 是最高层级的技术界面。它创建项目、打开 Studio、校验组合、捕获审阅帧、渲染文件、发布项目，并驱动云端渲染后端。",
          "日常命令请使用 [CLI 指南](https://hyperframes.heygen.com/developers/cli.md)，标志和自动化请使用 [完整 CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes check\nnpx hyperframes render --output video.mp4",
            file: "bash",
          },
        ],
        id: "cli-operate-complete-projects",
      },
      {
        h: "SDK：检查和编辑",
        p: "",
        paras: [
          "`@hyperframes/sdk` 打开组合 HTML，为元素提供稳定的 `data-hf-id` 标识，应用类型化编辑操作，输出 JSON patch，支持撤销和重做，并通过适配器持久化。",
          "适用于智能体、后端任务、自定义编辑器、版本化模板系统，或任何必须更改源而不仅仅播放它的应用。",
          "从 [SDK 快速入门](https://hyperframes.heygen.com/sdk/quickstart.md) 开始。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\nconst html = `<div class="clip" data-start="0" data-duration="5"\n  data-hf-id="hf-title">Old title</div>`;\n\nconst comp = await openComposition(html);\ncomp.setText("hf-title", "A new title");\nconst updatedHtml = comp.serialize();',
            file: "ts",
          },
        ],
        id: "sdk-inspect-and-edit",
      },
      {
        h: "Player：嵌入和寻址",
        p: "",
        paras: [
          "`@hyperframes/player` 是一个 Web 组件，在隔离的 iframe 中加载组合，并提供类似视频的播放控制。",
          "使用其 JavaScript API 播放、暂停、寻址、改变播放速率，并监听时间轴事件。它不编辑或渲染组合。",
          "参见 [Player 参考](https://hyperframes.heygen.com/packages/player.md)。",
        ],
        codeBlocks: [
          {
            code: '<script\n  type="module"\n  src="https://cdn.jsdelivr.net/npm/@hyperframes/player"\n></script>\n\n<hyperframes-player\n  src="/compositions/intro.html"\n  controls\n></hyperframes-player>',
            file: "html",
          },
        ],
        id: "player-embed-and-seek",
      },
      {
        h: "渲染：选择需要的层",
        p: "",
        paras: [
          "大多数应用应从 CLI 或 Producer 开始。只有在构建专用捕获或渲染系统时才使用 Engine。",
          "使用 [渲染基础设施](https://hyperframes.heygen.com/deploy/overview.md) 对比托管、本地和自管路径。",
        ],
        codeBlocks: [],
        bullets: [
          "**CLI** — 完整本地和自动化渲染。",
          "**Producer** — Node 渲染流水线：捕获、编码和音频混合。",
          "**Engine** — 更低层级的可寻址页面捕获和精确帧控制。",
          "**托管云** — 无需运营 Chrome 或 FFmpeg 的托管渲染。",
          "**AWS Lambda 或 Google Cloud Run** — 由你部署和控制的基础设施。",
        ],
        id: "rendering-choose-the-layer-you-need",
      },
      {
        h: "完整的思维模型",
        p: "",
        paras: [
          "每个界面都基于同一源工作。选择能产生应用所需结果的最小层，只有当更高层级移除你真正需要的控制时，才下移到更低层。",
        ],
        codeBlocks: [
          {
            code: "composition → inspect or edit → play or render",
            file: "text",
          },
        ],
        id: "the-complete-mental-model",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[基于 HyperFrames 构建](https://hyperframes.heygen.com/developers/index.md)",
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts/index.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "dev-index": {
    lede: "当你想自己编写组合、自动化项目，或把 HyperFrames 加入另一个产品时，使用这条路径。如果只想让智能体制作视频，请从 [first-video 指南](https://hyperframes.heygen.com/quickstart.md) 开始。",
    sections: [
      {
        h: "自己编写和渲染项目",
        p: "",
        paras: [
          "创建空白项目并在 Studio 中打开它： 项目是普通的 HTML。组合从这个根开始： 项目模板提供组合根、视口和时长。HTML 和 CSS 控制呈现内容；`data-*` 属性控制呈现时机。项目就绪后：",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes init my-video --example blank\ncd my-video\nnpx hyperframes preview",
            file: "bash",
          },
          {
            code: '<div\n  id="root"\n  data-composition-id="main"\n  data-start="0"\n  data-duration="10"\n  data-width="1920"\n  data-height="1080"\n>\n  <div class="clip" data-start="0" data-duration="10" data-track-index="1">\n    <!-- Ordinary HTML, CSS, images, and timed media. -->\n  </div>\n</div>',
            file: "html",
          },
          {
            code: "npx hyperframes check\nnpx hyperframes render --output video.mp4",
            file: "bash",
          },
        ],
        id: "write-and-render-a-project-yourself",
      },
      {
        h: "将 HyperFrames 加入应用",
        p: "",
        paras: [
          "选择能完成工作的最小界面： [card] [CLI](https://hyperframes.heygen.com/developers/cli.md) 从脚本或 CI 任务中运行检查和渲染。",
          "[card] [SDK 快速入门](https://hyperframes.heygen.com/sdk/quickstart.md) 从应用中检查和更改组合 HTML。",
          "[card] [Player 播放器组件](https://hyperframes.heygen.com/packages/player.md) 嵌入组合并控制播放。",
          "[card] [渲染基础设施](https://hyperframes.heygen.com/deploy/overview.md) 从 Node 服务、托管云或你运营的基础设施渲染。",
          "项目级自动化从 CLI 开始。只有当代码必须检查或编辑源时才添加 SDK，只有当页面需要实时播放时才添加 Player。Producer 和 Engine 是更低的渲染层，不是必需的设置。",
        ],
        codeBlocks: [],
        id: "add-hyperframes-to-an-application",
      },
      {
        h: "了解架构",
        p: "",
        paras: [
          "[开发者概览](https://hyperframes.heygen.com/developers/overview.md) 解释了组合、CLI、SDK、Player、Producer 和 Engine 如何协同。直接生成源时请使用 [HTML schema](https://hyperframes.heygen.com/reference/html-schema.md)。",
        ],
        codeBlocks: [],
        id: "understand-the-architecture",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "concepts-index": {
    lede: "了解 HyperFrames 视频背后的可编辑项目文件、合成结构、时序机制与协同工具。",
    sections: [
      {
        h: "源码即项目",
        p: "",
        paras: [
          "agent、浏览器编辑器、CLI、SDK 与 Player 不会创建各自独立版本的 视频。它们都使用相同的项目文件。",
          "| 你想修改的内容 | 最佳入口 |\n| - | - |\n| 故事情节、结构或多个场景 | 询问 agent |\n| 文本、布局、时序或你能看到的动效 | 浏览器编辑器 |\n| 预览、检查、快照、渲染或自动化 | CLI |\n| 自家产品中的合成 | SDK 或 Player |",
          "![A HyperFrames project open in the browser editor with the source tree, canvas, controls, and timeline](https://static.heygen.ai/hyperframes-oss/docs/images/studio/overview-v1.jpg)",
          "同一个可编辑项目在浏览器编辑器中打开，包含其源码、画布、控件与时间线。",
          "浏览器编辑器会把受支持的编辑写回源码。agent 可以从这些文件继续工作， Git 可以跟踪它们，渲染器看到的也是相同的结果。",
        ],
        codeBlocks: [],
        id: "the-source-is-the-project",
      },
      {
        h: "agent 创建的内容",
        p: "",
        paras: [
          "一个较大的项目通常长这样： 只有项目源码是必需的。规划文件用于在评审和 agent 会话之间保留决策 。简单的标题卡片可能只需要 `index.html` 和一个素材；带旁白的发布大片则受益于 brief、 分镜脚本、脚本和独立场景。",
        ],
        codeBlocks: [
          {
            code: "project/\n├── BRIEF.md              what the video must communicate\n├── STORYBOARD.md         the planned sequence and review state\n├── SCRIPT.md             locked narration, when the video has it\n├── frame.md              visual direction, when the project needs one\n├── index.html            the main composition\n├── hyperframes.json      project settings\n├── compositions/         scenes and reusable visual parts\n├── assets/               images, video, audio, and fonts\n└── renders/              finished files",
            file: "text",
          },
        ],
        id: "what-the-agent-creates",
      },
      {
        h: "合成将视频串联起来",
        p: "",
        paras: [
          "**合成**（composition）是项目中有限、可寻址的一段内容。主合成是完整序列， 其他合成可以是场景、字幕、标题系统，或多次复用的视觉素材。",
          "每一部分仍然是 HTML。大型项目之所以可管理，是因为一个场景可以 单独构建并检查，再放入主时间线。",
          "当场景本身需要在所有使用处统一修改时，编辑内嵌合成；当只有本次呈现需要 更早开始、更长播放或换到另一层时，编辑其在主合成中的放置。",
        ],
        codeBlocks: [
          {
            code: 'flowchart LR\n    M["index.html<br/>the main composition"]\n    M --> O["Opening<br/>0s - 4s"]\n    M --> P["Product demo<br/>4s - 10s<br/>compositions/product-demo.html"]\n    M --> C["Customer proof<br/>10s - 15s"]\n    M --> Z["Closing<br/>15s - 18s"]',
            file: "mermaid",
          },
          {
            code: '<div\n  data-composition-id="product-demo"\n  data-composition-src="compositions/product-demo.html"\n  data-start="4"\n  data-duration="6"\n  data-track-index="1"\n></div>',
            file: "html",
          },
        ],
        id: "compositions-hold-the-video-together",
      },
      {
        h: "时间是源码的一部分",
        p: "",
        paras: [
          "定时元素在其 HTML 中携带起始时间、时长与轨道： 这张图片在 2 秒处开始，持续 3 秒，出现在 1 号轨道上。动画时间线是暂停且可寻址的， 因此浏览器编辑器、Player 与渲染器都可以请求确切时刻，而无需从头播放。",
        ],
        codeBlocks: [
          {
            code: '<img\n  id="product-shot"\n  class="clip"\n  data-start="2"\n  data-duration="3"\n  data-track-index="1"\n  src="./assets/product.png"\n/>',
            file: "html",
          },
        ],
        id: "time-is-part-of-the-source",
      },
      {
        h: "变量让已批准部分保持可变",
        p: "",
        paras: [
          "变量暴露那些本就应该变化的内容——例如标题、logo、 颜色、价格或客户名称——而无需重建布局。一个合成可以 在保留其设计与动效的同时，产出多个已批准版本。",
          "当结构应当保持固定时使用变量；当结构本身需要改变时使用普通编辑。",
        ],
        codeBlocks: [],
        id: "variables-keep-approved-parts-changeable",
      },
      {
        h: "项目如何推进",
        p: "",
        paras: [
          "没有规定必须走的七步仪式。项目只记录其规模与评审流程需要的 决策。",
          "| 决策 | 通常存放在哪里 |\n| - | - |\n| 视频的用途 | 你的需求，以及更完善项目中的 `BRIEF.md` |\n| 内容与顺序 | `STORYBOARD.md` 及可选的 `SCRIPT.md` |\n| 视觉呈现 | `frame.md`、项目素材以及合成本身 |\n| 可编辑成品 | `index.html`、`compositions/` 与 `assets/` |\n| 已批准交付 | 检查加上 `renders/` 中的文件 |",
          "先评审文案与序列，再打磨单个画面。项目看起来对了之后，运行检查、渲染，并观看导出文件。",
        ],
        codeBlocks: [],
        id: "how-a-project-moves-forward",
      },
      {
        h: "渲染为何能重复同一时刻",
        p: "",
        paras: [
          "HyperFrames 会将合成定位到确切时间、捕获画面，再继续推进。媒体与音频遵循 同一时间线。",
          "对于相同源码、媒体与设置，同一时间戳应解析为相同的项目状态。因此合成 应避免使用当前时钟、未播种的随机数以及渲染时网络请求。",
        ],
        codeBlocks: [],
        id: "why-rendering-can-repeat-the-same-moment",
      },
      {
        h: "需要时再深入",
        p: "",
        paras: [
          "[card] [用变量复用设计](https://hyperframes.heygen.com/concepts/variables.md) 在不拆开排版布局的前提下暴露经核准的可变内容。",
          "[card] [完成与分享视频](https://hyperframes.heygen.com/guides/export-and-share.md) 围绕同一份工程完成审阅、检查、渲染、试看与交付。",
          "[card] [合成结构](https://hyperframes.heygen.com/concepts/compositions.md) 使用嵌套子合成与精准的资源引用属性。",
          "[card] [HTML 架构规范](https://hyperframes.heygen.com/reference/html-schema.md) 查阅完整的合成技术契约。",
        ],
        codeBlocks: [],
        id: "go-deeper-when-you-need-it",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[品牌规范、模板与分镜](https://hyperframes.heygen.com/prompting/design-systems.md)",
          "[HyperFrames 常见问题（FAQ）](https://hyperframes.heygen.com/faq.md)",
          "[如何将 HyperFrames 集成进应用](https://hyperframes.heygen.com/developers/overview.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "dev-cli-guide": {
    lede: "按开发与自动化任务查找对应的 HyperFrames CLI 命令（创建、检查、渲染、发布与批处理）；完整参数与标志见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。",
    sections: [
      {
        h: "日常项目循环",
        p: "",
        paras: [
          "| 任务 | 命令 |\n| - | - |\n| 创建项目 | `npx hyperframes init my-video` |\n| 打开 Studio | `npx hyperframes preview` |\n| 检查 HTML 结构 | `npx hyperframes lint` |\n| 运行浏览器、布局、动效与对比度检查 | `npx hyperframes check` |\n| 捕获评审帧 | `npx hyperframes snapshot --at 0,2,5` |\n| 渲染视频 | `npx hyperframes render --output output.mp4` |\n| 发布浏览器链接 | `npx hyperframes publish` |\n| 诊断机器 | `npx hyperframes doctor` |\n| 释放 HyperFrames 已用的磁盘空间 | `npx hyperframes clean` |",
        ],
        codeBlocks: [],
        id: "everyday-project-loop",
      },
      {
        h: "处理媒体",
        p: "",
        paras: [
          "| 任务 | 命令 |\n| - | - |\n| 查看项目元信息 | `npx hyperframes info` |\n| 测量声音时序 | `npx hyperframes audio <file>` |\n| 转写语音 | `npx hyperframes transcribe <file>` |\n| 生成旁白 | `npx hyperframes tts <script>` |\n| 捕获网站 | `npx hyperframes capture <url>` |",
          "若要把长录音的结尾当作从影片第 4 秒开始来测量，可跳过其前 30 分钟： 结果会在跳过的音频含有录音最响亮时刻时发出警告。可用测量项见 [参考中的 `audio`](https://hyperframes.heygen.com/packages/cli#audio)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes audio recording.wav --place-at 4 --skip-file-seconds 1800 --only moments",
            file: "bash",
          },
        ],
        id: "work-with-media",
      },
      {
        h: "复用与检查",
        p: "",
        paras: [
          "| 任务 | 命令 |\n| - | - |\n| 添加 Catalog 条目 | `npx hyperframes add <name>` |\n| 列出合成 | `npx hyperframes compositions` |\n| 打印轨道与片段 | `npx hyperframes timeline`（供 agent 时加 `--json`） |\n| 检查关键帧行为 | `npx hyperframes keyframes` |\n| 比较两个或更多版本 | `npx hyperframes compare v1/ v2/` |",
          "`hyperframes timeline` 还接受 agent 编辑动词。使用 `move`、`trim`、`split` 或 `delete` 并带行引用；加 `--plan` 可在不写入的情况下检查前后行与 diff，或加 `--json` 获取机器可读回执。时间值接受秒数、相对偏移、帧以及 `after:#intro` 这类锚点。",
          "对于脚本，`npx hyperframes keyframes --runtime css --json` 向 stdout 写入一条 JSON 结果。Anime.js 使用 `--runtime anime`。静态编写提示仅出现在人类可读输出中。",
        ],
        codeBlocks: [],
        id: "reuse-and-inspect",
      },
      {
        h: "渲染与自动化",
        p: "",
        paras: [
          "CLI 还支持批量渲染与按变量渲染，可写出序列帧与多种视频格式，也可在云端运行 —— 托管运行、AWS Lambda 或 Google Cloud Run。多数命令在需要从脚本读取结果时接受 `--json`。",
          "`snapshot` 与 `remove-background` 所使用的浏览器安装与媒体探测会保留 Unicode 文件名与子进程诊断中的非英文文本。",
          "先使用简单命令，再打开[完整参考](https://hyperframes.heygen.com/packages/cli.md)查看自动化或基础设施所需的确切选项。",
          "在预览与渲染之前，HyperFrames 会停止崩溃的 HyperFrames 会话遗留的 headless Chrome 进程。它只停止 HyperFrames 启动的浏览器，因此其他工具的分离浏览器会继续运行。若要跳过该清理，在调用环境中设置 `HYPERFRAMES_NO_ORPHAN_CLEANUP=1`：",
          "清理默认为开启。禁用后，崩溃的 HyperFrames 会话遗留的浏览器会继续运行，直到你自行停止。",
          "[!TIP] 运行 `npx hyperframes <command> --help` 查看已安装版本的确切语法。",
        ],
        codeBlocks: [
          {
            code: "HYPERFRAMES_NO_ORPHAN_CLEANUP=1 npx hyperframes preview ./my-video",
            file: "bash",
          },
        ],
        id: "rendering-and-automation",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[如何将 HyperFrames 集成进应用](https://hyperframes.heygen.com/developers/overview.md)",
          "[使用命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-cli": {
    lede: "本页列出每一个命令和每一个旗标。如果你还在决定需要哪个命令，[CLI 指南](https://hyperframes.heygen.com/developers/cli.md) 是更短的路径。",
    sections: [
      {
        h: "找到你的命令",
        p: "",
        paras: [
          "| 你想 | 使用 |\n| - | - |\n| 开始一个项目 | [`init`](#init)、[`add`](#add)、[`catalog`](#catalog) |\n| 引入源素材 | [`capture`](#capture)、[`media-use`](#media-use)、[`transcribe`](#transcribe)、[`tts`](#tts)、[`remove-background`](#remove-background)、[`media-treatment`](#media-treatment)、[`beats`](#beats)、[`audio`](#audio)、[`normalize-audio`](#normalize-audio)、[`models`](#models) |\n| 查看或分享 | [`share`](#share)、[`preview`](#preview)、[`present`](#present-and-play)、[`play`](#present-and-play)、[`publish`](#publish)、[`open`](#open-and-catch-up)、[`catch-up`](#open-and-catch-up) |\n| 发现问题 | [`lint`](#lint)、[`check`](#check)、[`snapshot`](#snapshot)、[`keyframes`](#keyframes)、[`compare`](#compare-and-grade-compare)、[`grade-compare`](#compare-and-grade-compare) |\n| 重建一个视频 | [`reverse`](#reverse)、[`measure`](#measure)、[`diff`](#diff) |\n| 从终端编辑 | [`timeline`](#timeline)、[`history`](#history) |\n| 生成文件 | [`render`](#render)、[`benchmark`](#benchmark) |\n| 在别处渲染 | [`cloud`](#hyperframes-cloud)、[`lambda`](#hyperframes-lambda)、[`cloudrun`](#hyperframes-cloudrun) |\n| 修复你的环境 | [`doctor`](#doctor)、[`browser`](#browser)、[`update`](#update)、[`upgrade`](#upgrade)、[`docs`](#docs)、[`info`](#info-and-compositions)、[`compositions`](#info-and-compositions)、[`clean`](#clean) |\n| 连接其他工具 | [`auth`](#hyperframes-auth)、[`billing`](#billing)、[`templates`](#templates)、[`skills`](#skills)、[`usage`](#usage)、[`figma`](#figma-and-events)、[`events`](#figma-and-events)、[`telemetry`](#telemetry)、[`feedback`](#feedback) |",
          "`validate`、`inspect` 和 `layout` 仍然可用，但已[废弃](#deprecated-validate-inspect-and-layout)。请改用 `check`。",
        ],
        codeBlocks: [],
        id: "find-your-command",
      },
      {
        h: "每个命令共有",
        p: "",
        paras: [
          "阅读一次即可，后文不再重复。",
          "**项目目录。** 大多数命令把它作为第一个参数并默认为当前目录：`npx hyperframes check ./my-video`。少数命令把它作为旗标——`add`、`transcribe`、`feedback`、`skills`、`history` 以及 `timeline` 编辑命令使用 `--dir`。",
          "**`--json` 给代理与脚本。** 大多数命令接受它，不接受的命令会以退出码 2 拒绝它。载荷用 `_meta` 字段包装，脚本可以从任何命令的输出中发现过时的 CLI，而无需第二次调用： 版本号来自一个每两小时至多刷新一次的缓存，在后台进程中获取，且从不在 CI 或 `HYPERFRAMES_NO_UPDATE_CHECK=1` 之下获取。`checkedAt` 说明 npm 应答的时间。比运行中的 CLI 更旧的缓存最新版本会被省略，并在下一次运行时重新检查。`skillsOutdated` 统计落后于当前 CLI 发布版本的已安装 HyperFrames 技能数，`skillsMissing` 统计未安装的核心技能数，两者来自同一次后台检查；在该版本完成一次检查之前两者都不存在（超过一天后亦然，例如 `HYPERFRAMES_NO_UPDATE_CHECK=1` 停止了检查时），以及在 `HYPERFRAMES_SKIP_SKILLS=1` 之下。`--json` 从不自行发起网络请求。废弃命令增加 `_meta.deprecated: true`。",
          "`updateNotice` 是一句供代理转告用户的话：更新了什么以及更新命令。是否运行由用户决定。该命令会移动当前运行的安装：",
          "| 安装 | CLI 落后 | 技能也落后，或者仅技能落后 |\n| - | - | - |\n| npm、pnpm、bun 或 Homebrew 全局 | 对应管理器命令（`npm install -g hyperframes@0.9.8`、`brew upgrade hyperframes`，……） | `hyperframes update`（全局 CLI 自身的；`npx hyperframes` 会运行项目副本或新的副本） |\n| 项目 `node_modules` | 项目的管理器，按 lockfile：`npm install`、`pnpm add`、`bun add` 或 `yarn add hyperframes@0.9.8` | 先执行该命令，然后 `npx hyperframes update`；仅技能：`npx hyperframes update` |\n| `npx` | `npx hyperframes@latest update`（npx 缓存可能还留着旧 CLI） | 同上；仅技能：`npx hyperframes update` |",
          "当没有技能落后或处于 `HYPERFRAMES_SKIP_SKILLS=1` 之下时，技能那一半会省略。该通知每个项目至多每天出现一次，而数字字段仍出现在每次结果中。它从不在 CI、`HYPERFRAMES_NO_UPDATE_CHECK=1` 或代理插件（`HYPERFRAMES_PLUGIN_VERSION`）之下添加，`update`、`upgrade` 和 `skills` 的输出也不带它。",
          "`--json` 下的失败总会在 stdout 上打印一个 JSON 对象，带有机器可读的 `code`，以及在有下一步时带有 `hint`： 某些命令在 `error` 旁边增加自己的字段，例如 `lint` 的 `findings`，或被拒绝的 `timeline` 编辑的 `reason` 和 `fix`。",
          "**项目 `.env`。** 当前目录中的 `.env` 只设置 CLI 自身的设置：`HEYGEN_API_KEY`、`HYPERFRAMES_API_KEY`、`ELEVENLABS_API_KEY`、`FIGMA_TOKEN`，以及视觉密钥、模型、Vertex 设置与超时，以及遥测退出选项 `HYPERFRAMES_NO_TELEMETRY` 和 `DO_NOT_TRACK`。环境中已有的变量优先。文件中的其他键会被忽略，并在 stderr 上用一行说明它们。",
          "**旗标，而非提示。** 缺少必填旗标会立即以用法示例失败，而不等待输入。以下命令可以在 TTY 上提问：`init` 会提示项目名称和示例，除非传入 `--non-interactive`；`catalog --human-friendly` 会打开选择器；`share` 会询问首次分享的受众。除此之外没有其他提示，只有可用 `--yes` 或 `--no-confirm` 跳过的确认。",
          "**无人值守运行从不提示。** 当 stdin 或 stdout 不是终端、在 CI 下、在编码代理中，或设置了 `HYPERFRAMES_AGENT=1` 时，运行即为无人值守。在那里，需要确认的命令（如 `publish` 或 `upgrade`）会以退出码 2 代替，并注明要传入的旗标（`--yes`），而 spinner 只打印最后一行到 stderr。",
          "**退出码。** `0` 表示命令成功，`1` 表示已运行但失败，`2` 表示命令行本身有误：未知命令或旗标，或缺少/无效的值。",
          "**版本通知。** 自带安装（npm、bun、pnpm）会在后台静默自行更新，并在下一次运行时打印一行：`hyperframes auto-updated to v0.1.5`。它从不跨大版本（1.0 之前跨小版本：0.8 到 0.9 只是通知，不安装）。在任何无法安装的地方——Homebrew（请自行运行 `brew upgrade hyperframes`）、`npx`、未知安装器——改为给出通知：",
          "两者在无人值守运行时都静默，后台安装也从不在那里启动。安装进行中时不显示通知。`HYPERFRAMES_NO_UPDATE_CHECK=1` 关闭检查、安装和通知；`HYPERFRAMES_NO_AUTO_INSTALL=1` 只关闭安装。",
          "**技能通知。** 当已安装的 HyperFrames 技能过期或缺失时，命令以一行 stderr 结尾，注明 `npx hyperframes skills update`。每个项目至多每天显示一次。在无人值守运行时，仅在核心技能缺失时才显示；过期技能会以 `_meta.skillsOutdated` 和 `_meta.updateNotice` 传给代理。`HYPERFRAMES_SKIP_SKILLS=1` 关闭它。用量错误之后不跟通知。",
        ],
        codeBlocks: [
          {
            code: '{\n  "name": "my-video",\n  "duration": 10.5,\n  "_meta": {\n    "version": "0.1.4",\n    "latestVersion": "0.1.5",\n    "updateAvailable": true,\n    "checkedAt": "2026-11-03T08:00:00.000Z",\n    "skillsOutdated": 2,\n    "skillsMissing": 0,\n    "updateNotice": "For the user: HyperFrames CLI 0.1.5 is available (this run is 0.1.4), and 2 installed HyperFrames skills are out of date. To update both, run: hyperframes update"\n  }\n}',
            file: "json",
          },
          {
            code: '{\n  "ok": false,\n  "error": {\n    "code": "unknown_flag",\n    "message": "Unknown flag: --search",\n    "hint": "Did you mean --query? Its flags: --type, --tag, --json, --human-friendly, --query, --yes, --on-device. Run \'hyperframes catalog --help\' for what each does."\n  }\n}',
            file: "json",
          },
          {
            code: "  Update available: 0.1.4 → 0.1.5\n  Run: npx hyperframes@latest",
            file: "example",
          },
        ],
        id: "what-every-command-shares",
      },
      {
        h: "`init`",
        p: "",
        paras: [
          "从示例脚手架一个新合成项目。",
          "| 旗标 | 说明 |\n| - | - |\n| `--example, -e` | 要脚手架的示例。默认是居中空白页。完整列表见 [Examples](https://hyperframes.heygen.com/examples.md)。 |\n| `--resolution` | 画布预设：`landscape` (1920×1080)、`portrait` (1080×1920)、`landscape-4k` (3840×2160)、`portrait-4k` (2160×3840)、`square` (1080×1080)、`square-4k` (2160×2160)、`landscape-1440p` (2560×1440)、`portrait-1440p` (1440×2560)、`square-1440p` (1440×1440)。别名：`1080p`、`4k`、`uhd`、`1440p`、`qhd`、`1080p-square`、`square-1080p`、`4k-square`、`1440p-portrait`、`1440p-square`。默认：保持模板尺寸。 |\n| `--video, -v` | 视频文件路径（MP4、WebM、MOV） |\n| `--audio, -a` | 音频文件路径（MP3、WAV、M4A） |\n| `--tailwind` | 给脚手架的 HTML 添加 Tailwind CSS 浏览器运行时支持 |\n| `--non-interactive` | 永不提示。供代理与 CI 使用。 |\n| `--skip-transcribe` | 跳过自动 Whisper 转录 |\n| `--keep-original` | 原样复制 `--video` 文件，而非把非 web 编码转为 H.264 MP4 |\n| `--model` | 该次转录的 Whisper 模型（例如 `small.en`、`medium.en`、`large`） |\n| `--language` | 转录语言代码（`en`、`es`、`ja`，……）。过滤掉其他语言的语音。 |\n| `--skip-skills` | 不碰 AI 编码技能：`init` 不安装核心集。`HYPERFRAMES_SKIP_SKILLS=1` 同理。 |",
          "传入 `--video` 或 `--audio` 时，CLI 用 Whisper 转录音频，并把字幕补丁进合成。`--skip-transcribe` 可关闭该功能。",
          "`--tailwind` 注入锁定的 Tailwind v4 浏览器运行时，并暴露 `window.__tailwindReady` promise，渲染在捕获第 0 帧前会等待该 promise。`/hyperframes-cli` 技能的 `references/init-and-scaffold.md`（Tailwind）说明如何编辑这些项目，代理应遵循 v4 CSS-first 模式而非 v3 `tailwind.config.js` 模式。浏览器运行时面向脚手架项目与快速迭代——对于离线或锁定的生产渲染，请把 Tailwind 编译为 CSS 并链接样式表。",
          "每个新项目都会得到一个 `AGENTS.md` 和一个相同的 `CLAUDE.md`：告诉编码代理 HyperFrames 是什么，以及哪些命令预览、检查、快照和渲染视频。脚手架后，`init` 从当前 GitHub 源检查并安装核心 AI 技能。见 [`skills`](#skills)。",
        ],
        codeBlocks: [
          {
            code: "# Default: centered Inter blank. Non-TTY skips the wizard.\nnpx hyperframes init my-video\n\n# Start from a video file\nnpx hyperframes init my-video --video video.mp4 --non-interactive\n\n# With the Tailwind browser runtime\nnpx hyperframes init my-video --tailwind",
            file: "bash",
          },
        ],
        id: "init",
        aliases: ["create-a-project"],
      },
      {
        h: "`add`",
        p: "",
        paras: [
          "从 registry 把一项安装到已有项目中。[`init`](#init) 脚手架整个项目；`add` 放入一个**块**（子合成场景）或一个**组件**（效果或片段）。",
          "位置参数是 registry 项，或标签——标签会安装所有带它的块。`--dir` 选择项目目录，`--json` 打印写入的文件与粘贴片段，`--no-clipboard` 让 CI 跳过剪贴板复制。",
          "如果标签中任一块安装失败，`add` 保留成功安装并以码 1 退出。带 `--json` 时，`ok` 为 `false`，`errors` 列出每个失败块的 `name` 和 `error`；`installed` 列出成功的块。",
          "每次安装都会产生文件加一个**粘贴片段**：块对应 `<iframe>` 标签，组件对应片段路径。默认送入剪贴板。若命中的是示例而非 registry 项（`add warm-grain`），会得到指向 `init --example` 的明确错误。",
          "`add` 读取 [`hyperframes.json`](#hyperframes-json) 了解从哪个 registry 拉取、文件落到哪里。若文件缺失但目录有 `index.html`，首次使用时写入默认文件。",
          "当条目声明 `registryDependencies` 时，`add` 先安装其依赖，传递解析。安装任何条目文件前，会检查每个已解析条目的 `minCliVersion` 并报告不兼容 CLI 的升级指引。`deprecated` 消息只警告，不阻止安装。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes add claude-code-window          # a block\nnpx hyperframes add shader-wipe                 # a component\nnpx hyperframes add captions                    # every block with this tag\nnpx hyperframes add shader-wipe --dir ./my-video\nnpx hyperframes add shader-wipe --no-clipboard --json   # headless / CI",
            file: "bash",
          },
        ],
        id: "add",
      },
      {
        h: "`catalog`",
        p: "",
        paras: [
          "浏览 registry。",
          "用 `--type`（`block` 或 `component`）和 `--tag`（`social`、`transition`、`text`，……）过滤。默认输出是名称、类型、描述、标签的表格，便于代理解析；`--json` 是结构化形式。每行 `--json` 包含条目的名称、类型、标题、描述和标签，以及在有时的尺寸、时长和 `preview`（`video` 和 `poster` URL）。`--human-friendly` 打开选择器，选中后运行 `add`。",
          '`--query "<what you want>"` 按描述搜索而非列出全部，`--on-device` 在一次性 33 MB 下载后把搜索从词匹配切换为语义搜索。各自做什么、下载什么、留在本机什么：[How catalog search works](https://hyperframes.heygen.com/developers/catalog-search.md)。',
        ],
        codeBlocks: [
          {
            code: "npx hyperframes catalog                          # table of everything\nnpx hyperframes catalog --type block --tag social\nnpx hyperframes catalog --json\nnpx hyperframes catalog --human-friendly         # picker; installs on select",
            file: "bash",
          },
        ],
        id: "catalog",
      },
      {
        h: "`capture`",
        p: "",
        paras: [
          "把真实网站拉进一个代理可构建的工作目录。",
          "网站捕获接受不带 URL 凭据的公开 HTTP(S) 目标。浏览器流量走每次捕获专属代理，资产下载使用同一已检查地址策略。每个连接使用经校验的数字 IPv4 地址；重定向和后续请求都会再次检查。私有、回环、link-local 与特殊用途地址被拒绝。目前不支持仅 IPv6 网站。普通 WebSocket 升级被拒绝；缓慢或被拒的资源可能缺席于捕获。",
          "默认情况下捕获需要直连外网，并忽略 `HTTPS_PROXY` 和 `HTTP_PROXY`：自身代理直接拨打每个已检查的公开地址。在沙箱、托管代理和公司网络等只有出口代理能出去的地方，把 `HYPERFRAMES_CAPTURE_PROXY` 设为该代理的 `http://` URL（URL 内凭据作为 `Proxy-Authorization` 发送）：",
          "之后捕获发起的每个连接——浏览器页面流量以及每个资产、字体、Lottie 和视频下载，包括 `capture --video`——都按主机名走那个代理：HTTPS 为 `CONNECT host:443`，HTTP 为绝对 URL 请求。捕获自身不再解析任何名称。仍会在接触代理前拒绝非 HTTP(S) URL、URL 凭据、字面私有/回环/link-local/特殊用途 IPv4 地址和本地样式名称（`localhost`、`.local`、`.internal`，……），且 HTTPS 证书仍通过隧道端到端验证。转移到代理的是 DNS 检查：未设该项时，捕获解析名称、检查每个答案并连接到那个已检查的数字，DNS 重绑定无法在中间塞入私有地址。设了之后，代理负责解析与连接，因此代理必须自己拒绝私有/内部目标，作为一步完成解析、检查与连接。代理拒绝会让那个页面或资产像其他不可达资源一样失败。空值或未设保持默认行为；非 `http://` URL 的值让 `capture` 以错误停止。`.env` 文件不能设置它。可选的 AI 图像描述通过 Node 自身的 `fetch` 调用其视觉 API，不受该设置影响；那里用 `--skip-vision` 或 Node 的 `NODE_USE_ENV_PROXY=1`。",
          "捕获使用临时浏览器 profile，并禁用非代理 WebRTC UDP。profile 与代理在浏览器关闭时移除。Chromium 沙箱在 macOS 和 Windows 上保留；Linux 保留容器兼容例外。",
          "祖先 `.env` 文件可提供受支持的视觉 API 密钥、模型、Vertex 凭据/位置与视觉超时。它们不能改变浏览器路径、可执行文件发现、TLS、代理或进程运行时设置。在调用环境中设 `HYPERFRAMES_NO_CAPTURE_DOTENV=1` 可跳过这些文件。继承的 `HYPERFRAMES_BROWSER_PATH` 仍可选择浏览器。",
          "`Dropped` 是页面引用但**不在**文件夹中的资产数，以及原因。仅在非零时打印，`--json` 总是把它作为 `dropped` 对象带上。没有它，稀疏页面的捕获与被配额截断的捕获要看成同一种三行摘要，唯一分辨方式是自己打开页面。",
          "| 原因 | 含义 |\n| - | - |\n| `size-floor` | 已抓取，然后判定太小而非真实资产，而像占位或追踪像素。 |\n| `budget-exhausted` | `--capture-budget` 在到达这一个之前用完了。调大它，或传 `--skip-vision` 买时间。 |\n| `cap-reached` | 已达到单次或单家族上限：30 内联 SVG、30 字体、每家族 6 个字重。 |\n| `unavailable` | 请求或写入失败：网络错误、超时、地址拒绝、坏状态、磁盘。 |",
          "其中三者是捕获做出的决定，一个是它遇到的失败，所以 `dropped` 全零而稀疏的 run 是页面本身稀疏，带计数的稀疏 run 是被截断了。",
          "| 旗标 | 说明 |\n| - | - |\n| `--output, -o` | 输出目录。默认 `./capture`，名字被占用时顺延 `./capture-2/`、`./capture-3/`，…… |\n| `--timeout` | 页面加载超时（毫秒），或 `30s`、`2m` 这类时长（默认 120000） |\n| `--capture-budget` | 页面加载后所有工作的预算（毫秒，默认 120000）。协作式——停止新工作，但不能中断已在运行的工作。 |\n| `--skip-assets` | 不下载图片与 SVG |\n| `--skip-vision` | 不运行 AI 图像描述 |\n| `--max-screenshots` | 最大页面捕获文件数，包括全页底图；派生接触表除外。正整数，默认 21。值为 1 时只捕获顶部视口。 |\n| `--json` | 供程序使用的结构化输出 |\n| `--local-file` | 捕获本地 HTML 文件，或目录的 `index.html`，而非 URL。见 [Local HTML files](#local-html-files)。 |\n| `--local-root` | 与 `--local-file` 配合：页面可读取本地文件的目录。默认是文件所在目录。 |\n| `--video <folder>` | 切换到相对已捕获文件夹 manifest 的视频下载模式。配合 `--list`、`--index` 或 `--video-url` 使用。 |",
          "你得到 `AGENTS.md`、`CLAUDE.md`、`meta.json`、滚动截图、提取的 HTML 与 CSS、可见文本、设计令牌、字体文件、图片、SVG、动画元数据和接触表——加上页面暴露的 Lottie、视频与 WebGL 上下文。这是给代理的原料，不是成品合成；`/hyperframes` 技能在真实产品必须上屏时使用它。动态网站、受保护页面和不寻常的媒体加载器会产生部分结果，所以构建前请先读 `dropped`、警告和接触表。",
          "下载的字体保存在 `assets/fonts/`，其 CSS 引用指向那些本地文件。`demo.woff2?v=1` 与 `demo.woff2?v=10` 这类不同 URL 保留为独立文件。字体下载失败会保留原 URL 不变。",
          "AI 图像描述请在 `.env` 文件设置 `GEMINI_API_KEY`（~\\$0.001/图），或设 `OPENROUTER_API_KEY` 让任一视觉模型走 [OpenRouter](https://openrouter.ai)——两者都设时后者赢，`HYPERFRAMES_OPENROUTER_MODEL` 覆盖模型。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes capture https://stripe.com\nnpx hyperframes capture https://linear.app -o linear-capture\nnpx hyperframes capture https://example.com --json",
            file: "bash",
          },
          {
            code: "◇  Captured Stripe | Financial Infrastructure → capture\n\n  Screenshots: 12\n  Assets: 45\n  Dropped: 9 (6 size-floor, 3 cap-reached)\n  Sections: 15\n  Fonts: sohne-var",
            file: "example",
          },
          {
            code: "HYPERFRAMES_CAPTURE_PROXY=http://127.0.0.1:3128 npx hyperframes capture https://stripe.com",
            file: "bash",
          },
          {
            code: '{\n  "assets": 45,\n  "dropped": { "size-floor": 6, "budget-exhausted": 0, "cap-reached": 3, "unavailable": 0 }\n}',
            file: "json",
          },
        ],
        id: "capture",
        aliases: ["bring-in-source-material"],
      },
      {
        h: "本地 HTML 文件",
        p: "",
        paras: [
          "`--local-file` 捕获磁盘上的 HTML 文件而非 URL，例如别人上传的页面。传目录则打开其 `index.html`。",
          "URL 参数仍只接受公开 HTTP(S) URL；`file://` URL 在那里仍像往常被拒。设 `--local-file` 时，CLI 在捕获时长内以回环端口服务文件所在目录（或 `--local-root`，必须包含该文件），Chrome 从那里加载页面。只有真实路径在该 root 内的普通文件会被服务，HTML 文件本身亦然：`../` 路径和逃逸的 symlink 回答 404，指向外部的 symlink HTML 文件被拒，页面无法读 `file://` URL。其他请求——远程或私有——走捕获代理与上述公开地址策略，所以指向私有地址的引用仍被拒并计为 `unavailable`。本地图片、字体和样式表像远程的一样复制进捕获；`--skip-assets` 对 URL 和本地一样跳过图片与 SVG。临时服务器从不出现在输出中：JSON 结果、`meta.json`（`source`，以及以文件或其文件夹命名的 `id`）、`AGENTS.md` 和提取文件都用 root 内相同路径的 `file://` URL。设了 `HYPERFRAMES_CAPTURE_PROXY` 时本地文件仍直接读取；其他请求走该代理。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes capture --local-file ./upload/index.html -o upload-capture --json\nnpx hyperframes capture --local-file ./site/pages/about.html --local-root ./site",
            file: "bash",
          },
        ],
        id: "local-html-files",
      },
      {
        h: "`transcribe`",
        p: "",
        paras: [
          "把音频或视频转成词级时间戳，或导入已有转录。",
          "| 旗标 | 说明 |\n| - | - |\n| `--dir, -d` | 项目目录（默认：当前目录） |\n| `--engine, -e` | ASR 引擎：`auto`（默认——已安装 Parakeet 且语言在它的 25 种之一用 Parakeet，否则 whisper）、`parakeet`（缺失/损坏/缺 `--language` 时失败）、`whisper`。`auto` 或 `parakeet` 下，非英语 `--language` 在已安装 whisper 时跑 whisper 并注明，因为 Parakeet 自行检测语言 |\n| `--model, -m` | Whisper 模型（默认 `small.en`）：`tiny.en`、`base.en`、`small.en`、`medium.en`、`small`、`medium`、`large-v3` |\n| `--language, -l` | 语言代码（`en`、`es`、`ja`，……）。Whisper 按此转录；Parakeet 自行检测语言，未安装 whisper 时非英语 `--language` 才有效。 |\n| `--to` | 写 `srt` 或 `vtt` sidecar：从转录文件是导出而非导入；从音频或视频写到 `transcript.json` 旁边，无空格语言分组为 cues，之后再导出该 `transcript.json` 可能分组不同 |\n| `--output, -o` | 导出的 SRT/VTT 放哪里 |\n| `--preserve-cues` | 保留每条转录条目为各自字幕 cue，跳过词级分组 |\n| `--optional` | whisper-cpp 不可用时跳过并以 0 退出，而非失败。供可无字幕继续的流水线。损坏的 Parakeet 安装是真失败：即使 whisper-cpp 缺失也以 1 退出。 |\n| `--timeout` | Whisper 子进程超时（毫秒），覆盖自动缩放默认值。在大型模型每音频秒需许多秒的慢速/模拟 CPU 上调大。仅 Whisper——Parakeet 有自己的。最小 5000。环境变量：`HYPERFRAMES_TRANSCRIBE_TIMEOUT_MS`。 |\n| `--json` | 把结果输出为 JSON |",
          "命令会判断你给的是什么。音频与视频本地转录——已安装 Parakeet 时用 Parakeet（`hyperframes models install parakeet`；更快更准），否则 whisper.cpp。Parakeet 支持 en、es、fr、de、bg、hr、cs、da、nl、et、fi、el、hu、it、lv、lt、mt、pl、pt、ro、sk、sl、sv、ru、uk；`auto` 对其他 `--language` 用 whisper。如果 `auto` 下 Parakeet 失败，run 会说明原因、给出修复命令并改用 whisper。转录文件则被导入并归一化：whisper.cpp JSON、带词时间戳的 OpenAI Whisper API JSON、SRT、VTT 都落到 `transcript.json` 里同一个 `[{text, start, end}]` 词数组。项目若有字幕 HTML，会自动补丁。",
          "词级转录在句子边界分组为可读 cues。直接从 `.srt` 或 `.vtt` 导出会保留该文件的 cue 边界。源 `transcript.json` 已是无内部空格的成品 cues（单词或 CJK 字幕）时加 `--preserve-cues`。",
          "[!TIP] 对音乐或噪声音频，`--model medium.en` 明显更准。对于生产内容，经 OpenAI 或 Groq Whisper API 转录并导入 JSON。",
        ],
        codeBlocks: [
          {
            code: "# Local transcription\nnpx hyperframes transcribe audio.mp3\nnpx hyperframes transcribe video.mp4 --model medium.en --language en\n\n# Import from another tool\nnpx hyperframes transcribe subtitles.srt\nnpx hyperframes transcribe openai-response.json\n\n# Export a caption sidecar, from a transcript or straight from the media\nnpx hyperframes transcribe transcript.json --to srt\nnpx hyperframes transcribe video.mp4 --to vtt",
            file: "bash",
          },
        ],
        id: "transcribe",
      },
      {
        h: "`models`",
        p: "",
        paras: [
          "列出或下载本地模型。只安装被要求的；首用不下载任何东西。",
          "`list` 仅在 `transcribe` 会用它时把 Parakeet 报告为已安装——经 CLI 自身运行时或 `parakeet-mlx`（`runner`）——并在当前机器无法运行时给出原因。Whisper 模型在 `transcribe` 下载后出现。",
          "`parakeet` 把 sherpa-onnx 运行时（从 npm）和 NVIDIA 的 Parakeet TDT 0.6B v3 语音模型（int8，约 640 MB，CC-BY-4.0）装到 `~/.cache/hyperframes`。每个文件都按锁定大小与 sha256 校验。重跑会在独立进程中加载运行时并重新校验各模型文件 sha256，失败的重装，好的什么都不变。它在 macOS（arm64、x64）、Windows（x64、ia32）和 Linux（x64、arm64，glibc 2.32 或更新）上运行，其他地方直接拒绝。Ctrl-C 停止下载且不保留部分文件。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes models list                      # Parakeet and any downloaded whisper models\nnpx hyperframes models list --json               # { ok, models: [{ engine, model, installed, runner, path }] }\nnpx hyperframes models install parakeet          # progress on stderr\nnpx hyperframes models install parakeet --json   # one JSON result",
            file: "bash",
          },
        ],
        id: "models",
      },
      {
        h: "`tts`",
        p: "",
        paras: [
          "用本地模型（Kokoro-82M）生成语音。无需 API key，什么都不离机。",
          "| 旗标 | 说明 |\n| - | - |\n| `--output, -o` | 输出路径（默认当前目录 `speech.wav`） |\n| `--voice, -v` | 声音 ID。`--list` 查看全部。 |\n| `--speed, -s` | 语速乘数（默认 1.0） |\n| `--lang, -l` | 音素化 locale：`en-us`、`en-gb`、`es`、`fr-fr`、`hi`、`it`、`pt-br`、`ja`、`zh`。不传时从声音 ID 推断。 |\n| `--list` | 列出声音并退出 |\n| `--json` | 把结果输出为 JSON |",
          "声音 ID 首字母是其语言：`a` 美式、`b` 英式、`e` 西班牙语、`f` 法语、`h` 印地语、`i` 意大利语、`j` 日语、`p` 巴西葡语、`z` 普通话。所以 `--voice ef_dora` 本就说西班牙语。只有故意混用时才用 `--lang`——例如法语音素化英语文本，做风格化口音。",
          "[!TIP] 要一次拿到配音*和*字幕时序：用 `tts` 生成音频，然后对其跑 [`transcribe`](#transcribe)。",
        ],
        codeBlocks: [
          {
            code: 'npx hyperframes tts "Welcome to HyperFrames"\nnpx hyperframes tts "Intro" --voice bf_emma --output narration.wav\nnpx hyperframes tts "Slow and clear" --speed 0.8\nnpx hyperframes tts script.txt\nnpx hyperframes tts --list',
            file: "bash",
          },
        ],
        id: "tts",
      },
      {
        h: "`remove-background`",
        p: "",
        paras: [
          "用本地 AI 模型把视频或图片背景抠出。输出是可直接放入 `<video>` 或 `<img>` 的透明媒体。无需绿幕。",
          "| 旗标 | 说明 |\n| - | - |\n| `--output, -o` | 输出路径。格式跟随扩展名：`.webm`（默认）、`.mov`、`.png`。 |\n| `--background-output, -b` | 第二个输出：反 alpha 底板，主体区域透明、周围不透明。必须是 `.webm` 或 `.mov`。是挖洞，不是补全——请在下面合成别的东西。 |\n| `--device` | 执行 provider：`auto`（默认）、`cpu`、`coreml`、`cuda` |\n| `--quality` | WebM 预设：`fast`（crf 30）、`balanced`（crf 18，默认）、`best`（crf 12）。更高让抠像 RGB 更接近源，叠在自身素材上时重要。仅 `.webm`。 |\n| `--info` | 打印检测到的执行 provider 并退出 |\n| `--json` | 把结果输出为 JSON |",
          "你想要哪种格式？",
          "| 格式 | 用途 | 大小（4s @ 1080p） |\n| - | - | - |\n| `.webm` (VP9 alpha) | 放入 `<video>` 做 HTML5 原生透明播放 | ~1 MB |\n| `.mov` (ProRes 4444) | Premiere / Resolve / DaVinci 剪辑往返 | ~50 MB |\n| `.png` | 单图抠像 | 视情况 |",
          "模型是 `u2net_human_seg`（Apache-2.0，~168 MB ONNX）。首次运行下载到 `~/.cache/hyperframes/background-removal/models/`，之后复用。推理峰值 RAM 约 1.5 GB。",
          "`--device auto` 在 Apple Silicon 上选 CoreML，可用时选 CUDA，否则 CPU。首次运行会把 `onnxruntime-node` 的 CPU 版装到 `~/.cache/hyperframes/optional/`（stderr 一行，一次，无提示）；CUDA 需设 `HYPERFRAMES_CUDA=1` 并提供 GPU 版。设 `HYPERFRAMES_NO_OPTIONAL_INSTALL=1` 时首次使用不装任何东西（该包、`@google/genai`，或缺失的 `sharp`），命令失败并注明包名；像 `HYPERFRAMES_NO_OPTIONAL_INSTALL=sharp` 的逗号列表只关掉列出的。",
          "[!TIP] Chrome 的 `<video>` 只有 WebM 是 `yuva420p` 且带 `alpha_mode=1` 元数据标签时才尊重 alpha 面。CLI 已设置两者。若你自己转码输出，请保留它们。",
          "[Remove background guide](https://hyperframes.heygen.com/guides/remove-background.md) 讲完整工作流——在合成里用透明视频、各平台性能、`u2net_human_seg` 在哪里不行，以及免费替代。",
        ],
        codeBlocks: [
          {
            code: "# Default: VP9-with-alpha WebM, plays natively in HTML5\nnpx hyperframes remove-background avatar.mp4 -o transparent.webm\n\n# ProRes 4444 for an editing round-trip\nnpx hyperframes remove-background avatar.mp4 -o transparent.mov\n\n# One image → transparent PNG\nnpx hyperframes remove-background portrait.jpg -o cutout.png\n\n# Cutout and inverse-alpha background plate in one pass\nnpx hyperframes remove-background avatar.mp4 -o subject.webm --background-output plate.webm\n\n# What providers does this machine have?\nnpx hyperframes remove-background --info",
            file: "bash",
          },
        ],
        id: "remove-background",
      },
      {
        h: "`media-treatment`",
        p: "",
        paras: [
          "读取或编辑存放在图片和视频上的颜色与效果处理。",
          "| 旗标 | 说明 |\n| - | - |\n| `--capabilities` | 打印简洁能力概览 |\n| `--capability <id>` | 查看一个家族、控件、效果、预设或 palette |\n| `--all` | 打印详尽能力目录 |\n| `--project <dir>` | 项目目录（默认：当前目录） |\n| `--file <path>` | 合成文件；省略则跨挂载场景查找 selector |\n| `--selector <css>` | CSS 选择器；每个匹配的 `<img>`、`<video>` 或 `<canvas>` 都得补丁 |\n| `--selector-index <n>` | 以零为基的匹配序号，只打一个 |\n| `--grading <json>` | 经校验的颜色分级补丁 |\n| `--apply` | 应用补丁 |\n| `--analyze` | 测量所选本地媒体并建议有界修正 |\n| `--clear` | 从目标移除颜色分级 |\n| `--dry-run` | 校验并报告，不写入 |\n| `--json` | 代理解读的 JSON |",
          "不带 `--file` 时，命令搜索 `index.html` 及它挂载的每个场景，包括嵌套在另一场景 `<template>` 里的场景。它编辑包含匹配 clip 的文件。若 selector 在多文件匹配，传 `--file` 选一个。",
          "`--dry-run` 接受不带 `--apply` 的 `--grading` 且不写入。JSON 含 `count`、`attribute`、apply 会写入的精确归一化 `value`（或移除时的 `null`），以及 `lint`——对拟议 HTML 的颜色分级 lint 结论与发现。当 selector 匹配多元素时，每个把补丁合并进自己当前 grading，JSON 在 `targets` 下列出（各自带 `value`）而非单个 `value`；想视觉一致请先跑 `--clear`。匹配来自主文档，或主文档无时来自第一个含匹配的 `<template>`，与 Studio 源编辑同范围规则。",
          "命令写 `data-color-grading`——Studio、preview、render 共用的同一契约，所以两者永不打架。它不识别主体、不隔离图像某部分；效果覆盖整个媒体层。",
        ],
        codeBlocks: [
          {
            code: "# Find out what exists, then look at one family or effect\nnpx hyperframes media-treatment --capabilities --json\nnpx hyperframes media-treatment --capability kuwahara --json\n\n# Measure a selected local source\nnpx hyperframes media-treatment --selector '#hero' --analyze --json\n\n# Apply, preview, or clear\nnpx hyperframes media-treatment --selector '#hero' \\\n  --grading '{\"preset\":\"skin-soft\",\"intensity\":0.6}' --apply\nnpx hyperframes media-treatment --file compositions/scene.html --selector 'video' \\\n  --grading '{\"preset\":\"warm-daylight\"}' --dry-run --json\nnpx hyperframes media-treatment --selector '#hero' --clear",
            file: "bash",
          },
        ],
        id: "media-treatment",
      },
      {
        h: "`media-use`",
        p: "",
        paras: [
          "获取视频所需的音乐、音效、图片、图标、logo、配音和调色，存为项目内文件。每个资产都记录，再次索要同一东西复用文件，不重复拉取。`media-use` 技能驱动该命令；你也可以自己跑。",
          "`resolve` 打印一行，如 `resolved sfx_001 → .media/audio/sfx/sfx_001.mp3 (sfx, 0.6s)`，带 `--json` 打印整条记录。它从不编辑你的合成 HTML；文件引用由你自己写。",
          "| 子命令 | 作用 |\n| - | - |\n| `resolve` | 查找、制作或导入一项资产。接受下表全部旗标 |\n| `candidates` | 列出项目内与全局缓存已有的 `--type` 资产，`--intent` 匹配度优先。不下载不改变。等同 `resolve --candidates` |\n| `adopt` | 把 `assets/` 里已有文件收录，后续请求可找到，时长与大小由 `ffprobe` 读 |\n| `analyze` | 测量图片或视频并打印建议曝光与颜色修正，不保存。需 `--type grade --for <file>` |\n| `voices` | 列出当前登录 HyperFrames 账号上的声音克隆，供 `generate` 的 `--voice`。从不列出独立 `heygen` CLI 账号的 |\n| `avatars` | 列出当前登录 HyperFrames 账号上的 avatar 形象，格式 `{avatars: [{avatar_id, name, avatar_type, group_id, gender, status, default_voice_id, preview_image_url}]}`，供 `generate --type avatar` 的 `--avatar`。`--limit`（默认 20）。从不列出独立 `heygen` CLI 账号的 |\n| `doctor` | 检查 ffmpeg、ffprobe、Node.js、内置音效库，以及 `heygen` CLI（已安装、v0.3.0 或更新、已登录）。不改变任何东西 |\n| `stats` | 从项目 `.media/` 与全局 `~/.media/` 统计请求、缺失与复用 |\n| 旗标 | 说明 |\n| - | - |\n| `--type` | 媒体类型，见下表。除 `doctor`、`stats`、`adopt` 外每个子命令都必填 |\n| `--intent` | 用平白话说需要什么。对 `voice` 和 `video` 是要说的话 |\n| `--entity` | 名称如品牌（`linkedin`），后续同名复用文件 |\n| `--project, -p` | 项目目录（默认：当前目录） |\n| `--candidates` | 列出可复用资产而非 resolve。`--dry-run` 同样 |\n| `--reuse <sha>` | 把全局缓存的一项资产复制进当前项目，按 `candidates` 打出的内容哈希或前缀 |\n| `--from <file>` | 导入本地文件或直接公开媒体 URL。YouTube 等页面被拒 |\n| `--params <json>` | 从显式值构建 LUT，如 `'{\"contrast\":0.2}'`。仅 `lut` 与 `grade` |\n| `--for <media>` | 测量该图片或视频并把建议修正加到 grade 上。仅 `grade` |\n| `--analyze` | 配合 `--type grade --for`，打印测量并停 |\n| `--local-only` | 跳过所有网络 provider。只用本机缓存与已装工具 |\n| `--provider <name>` | 只用该 provider 并跳过复用：如 `heygen`、`codex`、`mflux`、`kokoro`。未知名字失败并列出合法者 |\n| `--voice-id` | `voice` 与 `video` 的 HeyGen 声音（默认：目录第一个） |\n| `--avatar-id` | `video` 的 HeyGen 形象（默认：第一个公开形象） |\n| `--days <n>` | 配合 `stats`，只计最近 `n` 天 |\n| `--json` | 打印 JSON 而非一行 |",
          "每种类型来源（按序试，直到成功）：",
          "| `--type` | 你得到 | 来源 |\n| - | - | - |\n| `bgm` | 背景音乐 | HeyGen 音乐目录 |\n| `sfx` | 音效 | Openverse（CC0 或 CC BY，无需账号），然后可离线的内置库 |\n| `image` | 照片与背景 | HeyGen 资产搜索，然后本机 mflux 生成，然后 `codex` CLI |\n| `icon` | 图标 | HeyGen 资产搜索 |\n| `logo` | 官方品牌标记 | theSVG，然后 GitHub 组织头像，然后站点 favicon |\n| `voice` | `--intent` 文本的口播音频 | HeyGen 文本转语音，然后本机 Kokoro |\n| `video` | 形象说 `--intent` 文本 | HeyGen 形象视频，然后启用时本机 LTX |\n| `brand` | 品牌色、字体与 logo | 项目自有 `frame.md` 或 `design.md`。永不联网 |\n| `grade` | `data-color-grading` 的调色块 | 内置预设、look 库 LUT，或从 `--intent` 词构建的 LUT |\n| `lut` | `.cube` LUT 文件 | look 库 LUT，或从 `--intent` 词构建 |",
          "拉取任何东西之前，`resolve` 先复用精确旧匹配：本项目同 `--type` 与 `--intent`（或 `--entity`）、`assets/` 里名字与 intent 共享一词的文件、全局缓存 `~/.media/` 同请求。`--provider` 跳过复用。新文件落在 `.media/<kind>/`，记入 `.media/manifest.jsonl` 与 `.media/index.md`，并复制到 `~/.media/` 以便其他项目复用。CC BY 音效的署名写入 `.media/audio/sfx/CREDITS.md`。",
          "**什么需要账号、什么可能花钱。** HeyGen 来源经独立 `heygen` 可执行文件运行，用 `hyperframes auth login` 选定的登录。它拿临时访问令牌凭据，读不到独立 HeyGen 登录，也刷新不了 HyperFrames grant。功能资格与计费由服务端决定。显式 API key 凭据按 API key 计费。当宿主应用设了 `HEYGEN_API_BASE` 与 `HEYGEN_API_KEY` 时，HeyGen 调用改走该宿主并按其 key 计费。`codex` 图像 fallback 用你的 ChatGPT 订阅。Openverse、theSVG、GitHub、favicon、调色与本地生成器免费。`doctor` 仅在 ffmpeg、ffprobe 或内置音效缺失时以 1 退出；HeyGen 问题列出修复法但不失败。",
          "`media-use` 发送用量事件——媒体类型、哪个来源胜出、是否复用文件，从不发你的 intent 文本或路径——与 [`telemetry`](#telemetry) 同退出选项。你登录 HeyGen 前匿名，之后关联到你的账号，如 [`telemetry`](#telemetry) 下所述。",
          "围绕这些资产的工作流见 [Voice, sound, and captions](https://hyperframes.heygen.com/guides/voice-and-audio.md) 与 [Color grading](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color)，HeyGen 凭据见 [Authentication](https://hyperframes.heygen.com/guides/authentication.md)。",
        ],
        codeBlocks: [
          {
            code: '# Find or make one asset and save it in the project\nnpx hyperframes media-use resolve --type sfx --intent "whoosh"\nnpx hyperframes media-use resolve --type logo --entity linkedin --intent "LinkedIn logo"\nnpx hyperframes media-use resolve --type grade --intent "warm daylight" --json\n\n# Look at what you already have before fetching more\nnpx hyperframes media-use candidates --type bgm --intent "upbeat tech launch"\nnpx hyperframes media-use resolve --type bgm --reuse 06e052c0\n\n# Bring in a file you already have\nnpx hyperframes media-use resolve --type image --from ./photo.jpg\n\n# The voice clones and avatar looks on the account that makes the film\nnpx hyperframes media-use voices\nnpx hyperframes media-use avatars --limit 10\n\n# Check the setup, and see what has been used\nnpx hyperframes media-use doctor\nnpx hyperframes media-use stats --days 7',
            file: "bash",
          },
        ],
        id: "media-use",
      },
      {
        h: "`beats`",
        p: "",
        paras: [
          "在合成音乐里找节拍并写到 Studio 期望处。",
          "给音频或视频文件而非文件夹时，`beats` 用同一 tracker 分析该文件并打印结果；不写入任何东西。",
          '`beats` 找音乐轨——带 `data-timeline-role="music"` 的 `<audio>` 元素，或 id 像 `music`、`bgm`、`soundtrack` 的——用 ffmpeg 解码，跑 Studio 同版节拍 tracker，并写 `beats/<audio-path>.json`：',
          "authoring 时就跑，让文件在 Studio 打开**前**存在——Studio 原样加载该文件，仅在不存在时才生成。`time` 是音频内秒数；`strength`（0–1）是相对响度。Studio 里加、移、删的节拍存回同一文件。",
          "无稳定节拍的轨（环境音、rubato、太短）得不到节拍文件：命令答空结果（`count: 0`，退出 0）且不写，不编造网格。结果与 Studio 相差一两帧——Studio 在浏览器解码，常以不同采样率，会把节拍挪一点。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes beats [dir]\nnpx hyperframes beats [dir] --json   # { ok, file, count, bpm }\nnpx hyperframes beats <file> --json  # { ok, file, count, bpm, beatTimes }",
            file: "bash",
          },
          {
            code: '{\n  "version": 1,\n  "audio": "music.wav",\n  "beats": [{ "time": 2.027, "strength": 0.924 }]\n}',
            file: "json",
          },
        ],
        id: "beats",
      },
      {
        h: "`audio`",
        p: "",
        paras: [
          "测量声音怎样随时间移动，好让剪辑或动画落点命中。",
          "每个声音报告： 影片查询（`--element`、`--at`、`--range`）读当前目录或 `--dir` 的项目，找出覆盖的 `<audio>` 与 `<video>` clip——含嵌套合成——只分析每文件播放的那部分。`--json` 以文件秒返回时间，附每 clip 的 placement（`start`、`mediaStart`、`playbackRate`、以及元素自身 `data-start` 即 `dataStart`，相对于其合成的本地时间），影片时间是 `start + (t − mediaStart) / playbackRate`；文本输出打印影片时间。",
          "文件尚未进片时，`--place-at <s>` 假装它从该影片秒开始；`--skip-file-seconds <s>` 先从文件头剪掉那么长，结果在剪掉部分含最响瞬间时警告。",
          "`--only` 还索要音乐结构（不索不测）： 词时序不在这里：用 [`transcribe`](#transcribe)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes audio sfx/whoosh.mp3                  # one file, in file seconds\nnpx hyperframes audio sfx/hit.wav sfx/whoosh.mp3      # several files, one report\nnpx hyperframes audio sfx/hit.wav --place-at 4.2      # not in the film yet: where it lands if it starts at 4.2 s\nnpx hyperframes audio --element '#riser'              # one clip of the film, in film seconds\nnpx hyperframes audio --at 12                         # every sound playing at 12 s\nnpx hyperframes audio --range 10,14 --only onsets     # every hit between 10 and 14 s",
            file: "bash",
          },
        ],
        bullets: [
          "**moments**：起处（RMS 首次达峰值 20%）、最快上升处、最响处、尾声落到峰值下 40 dB 处。短打击重音在峰值；慢 whoosh 重音在最陡上升。",
          "**onsets**：每个 hit，强度相对最强者。",
          "**loudness**：综合与短时最大 LUFS（ITU-R BS.1770，与 FFmpeg `ebur128` 吻合至 0.1 LU）、采样与真峰、削波。",
          "**silence**：`--silence-db`（−50 dBFS）下的安静段。",
          "**kind**：`sfx`、`voice`、`music` 的初步判断，带其依据。",
          "**envelope**：随时间电平，每声音约 2,000 值。",
          "**beats**：节拍时间；无节拍可跟时无并带 `reason`（`no steady beat`，或太短无法判断）。",
          '**downbeats**：每小节首拍，带 `meter`（3 或 4）。信号处理推出是猜测（`confidence: "low"`）。',
          "**bpm**：从节拍读的速度（中位间隔），渐快渐慢的音乐每 4 s 一条 `curve`。总来自回答 `beats` 的 provider。",
          "**sections**：声音保持相近的段，每段一字母；回归段沿用旧字母。",
          "**describe**：音频内容标签，各带 score。",
        ],
        id: "audio",
      },
      {
        h: "整段录音阅读",
        p: "",
        paras: [
          "`--read` 把一录音——一期节目、参考视频——转成时间戳行供代理读或 grep，而非单声测量： 句子来自转录：`--transcript <file>`，或录音旁 `<recording>.transcript.json`。无转录时语音行不带词。",
          "已知单层的 file 用 `--layer music|sfx|voice` 整读：不取 stem，什么都不离机，无论 `--quality`。`music` 按音乐 bed 读（段、速度、电平），`voice` 读词与停顿，`sfx` 找其音效。JSON 结果记所声明 `layer`；不带该旗标阅读不变。",
          "音效与音乐从 stem 读。在 `--quality best` 时，录音经 HeyGen `/v3/audio/stems` 分离为 vocals、drums、bass、guitar、piano、other，用你的 HeyGen 凭据（见 [audio services](#audio-services)）：以 192 kb/s MP3 经同 origin 直传 endpoint 上传。分离请求等待 stem；进行中响应或连接丢弃用同一 idempotency key 重试同请求（`HYPERFRAMES_AUDIO_STEMS_TIMEOUT_MS`，默认 30 分钟）。音效从 drums stem 读，并从其余四 stem 中无音乐无环境处读（每 stem 自立，避免 tone 内 click 漏检）；音乐与环境从其余四 stem 读；表头只列有声 stem 及电平。无 stem 时音效从混音在语音外读，音乐不读；无 stem 无转录时语音与音效都不读，因为混音单凭分不清语音与音乐。每种情形都会在警告中说明。",
          "结果按 file 内容算一次并保存在项目下 `.hyperframes/read-audio`（连 stem）；文本输出以全录音文本路径收尾，`--json` 返回分析。",
          "Read schema version 4 增加 `effects.events[].peakDb`（dBFS）；`riseDb` 改为 effect 前录音电平上的峰值，听声时为 `null`，`overMusicDb` 测 effect 旁音乐而非峰值下。句子新增 `againstMusic: { voiceLufs, musicLufs } | null`，停顿新增 `recordingDb`（停顿中录音电平）。Version 3 分析从缓存 stem 重算。",
          "Read schema version 3 把 `analysis.stems` 从名字改为 `{ name, db }[]`，最响在前。只列 −55 dBFS 及以上帧的 stem；`db` 是那些帧的四舍五入功率均值，非 dB 值平均或静隙电平。`analysis.ambience` 含 `{ start, end, db }` 段，无 stem 时为 `null`。/music 能量与音效过音乐电平排除归为 ambience 的段。Version 2 缓存分析用已有缓存 stem 重算；JSON 消费者请用 `stem.name` 而非把每 stem 当字符串。",
          "每次测量走 provider 阶梯，按序试直至一方回答：",
          "| 能力 | 阶梯 |\n| - | - |\n| moments, onsets, loudness, silence, envelope, kind | `signal` |\n| beats, downbeats（连带 bpm） | `api`, `apple-mu`, `beat-this`, `signal` |\n| sections | `api`, `apple-mu`, `signal` |\n| describe | `api`, `apple-sound` |",
          "不能跑或跑失败的 provider 带警告跳过，警告说清原因。`--quality local|best|fast` 限定哪些 provider 可跑：`local`（默认）音频留本机；`best` 还送到下述音频 services；`fast` 只准信号处理。因把某服务留在外而无回答时，警告说 `--quality best` 能回答它。`--provider beats=signal` 把某能力钉到单 provider，`--full` 显示每阶梯步。用 `--onset-method`、`--threshold`、`--band lo,hi`、`--hop-ms`、`--onset-ratio`、`--tail-db`、`--silence-db` 调分析。解码需 FFmpeg。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes audio refs/episode.mp4 --read                 # the whole recording\nnpx hyperframes audio refs/episode.mp4 --read --range 60,70   # only what overlaps 60–70 s",
            file: "bash",
          },
          {
            code: '  uv init --bare ~/.beat-this\n  uv add --project ~/.beat-this "beat-this @ git+https://github.com/CPJKU/beat_this" torch torchaudio soundfile\n  ~/.beat-this/.venv/bin/python -c "from beat_this.inference import load_checkpoint; load_checkpoint(\'small0\')"\n  export HYPERFRAMES_BEAT_THIS_PYTHON=~/.beat-this/.venv/bin/python',
            file: "bash",
          },
        ],
        bullets: [
          "**voice**：一句一行，带文本、相对全录音均值的说话率、与中位偏 3 半音以上时的音高、上升或下降结尾，以及在有垫乐时仅就重叠段的语音与音乐综合响度与谁更响：`voice -14 LUFS, music -18 LUFS: voice 4 dB over music`、`…: music 4 dB over voice`，或 0.5 dB 内 `…: level with each other`。鼓算音乐；两者都在单声道下混测。词间 0.4 s 以上停顿保留 `pause` kind，并说明停顿中还有什么在响：其中音效、音乐或环境及其时间、无 bed 可读时录音电平，或 −55 dBFS 下 `silent`。",
          "**effects**：每事件标 `effect`，不指定声音 kind。相似声归组 `S1`、`S2`，……（`S1` 最常用）。每事件保留时间、源 stem、频段、attack、尾声、峰值、高于周围音乐的电平、及在停顿中的位置。峰值是该 effect 处全录音最响 20 ms，以 dBFS 计，不取决于 stem 如何分离或编码；后面数字注明参照：`+4 dB over music` 相对 effect 前一秒音乐（音乐与之同时起则后一秒）、`+12 dB over what played before` 相对前半秒录音中位、`out of silence`。声音止于下一个起处。同声快串一行带计数；在音乐节拍上的击打是音乐自身鼓声，低于录音 20 dB 以上是分离残留无人听得，都略去。组摘要给组 id 与计数，不给声音 kind。",
          "**music**：bed 在掏空处切开，每段说曲子、承载乐器、速度、是起/因中断续/回归/新，以及在哪里淡出。音乐与环境必须 sustained：周围 2 s 内填充不到一半声音处（如散打或短音桥进音乐），bed 按 effects 读，音乐从声音撑住处起。",
          "**ambience**：bed 无音乐证据的段，带 dBFS 电平，−45 dBFS 下称 quiet。门限计该段内检测到的节拍、集中音高类能量、或多 leading stem 为音乐证据。这是信号启发式，非保证：纯音或节奏噪声可算音乐，证据弱的音乐可算环境。仅相邻音乐段间报告 break。",
          '`api` 是 HeyGen `/v3/audio/analysis`，有 HeyGen 凭据时用（见 [audio services](#audio-services)）。音频以 16 kHz 单声道 WAV 经同 origin 公共资产直传与完成 endpoint 上传。每解码信号上传一次；分析请求把其 finalized 资产 ID 作 JSON 发。凭据需资产上传与音频权限。声道平均，除非抵消去掉最响声道 90% 以上能量时用该声道。每请求带新 `Idempotency-Key`；回答可能包 `{ "data": … }`。其回答的每节拍、小节首拍或段边界在信号处理测到节拍四分之一拍内时挪到最近者；其余列入 `snap.unsnapped`，`snap.medianShiftMs` 说挪了多远。',
          "`apple-mu` 是 Apple Music Understanding，需 macOS 27。尚不可用。",
          "`beat-this` 是 [Beat This!](https://github.com/CPJKU/beat_this)，在 `HYPERFRAMES_BEAT_THIS_PYTHON` 指名装有 `beat-this` 的 Python 且其 `small0` 权重在盘（`HYPERFRAMES_BEAT_THIS_CHECKPOINT`，或 Torch hub 缓存 `beat_this-small0.ckpt`）时用。CLI 永不下载它们；一次性装好：",
          "`apple-sound` 是 macOS 内置声音分类器，经用 Xcode 命令行工具编译一次的小 Swift helper。",
        ],
        id: "reading-a-whole-recording",
      },
      {
        h: "音频 services",
        p: "",
        paras: [
          "仅 `--quality best` 时上传音频。Stem 与 `api` provider 当时调用 HeyGen，可能向你账户计费，与其他 HeyGen 命令同凭据（顺序见 [`hyperframes auth`](#hyperframes-auth)），API 在设 `HEYGEN_API_URL` 时用之。API key 作 `x-api-key` 发；OAuth 凭据作 bearer。服务拒求时分析带警告 fallback。无凭据时 stem 跳过、`api` 跳过。`local`（默认）不查凭据，什么都不离机。",
          "用其他服务时，设 `HYPERFRAMES_AUDIO_STEMS_URL` 或 `HYPERFRAMES_AUDIO_API_URL` 为其完整 URL 并配 `HYPERFRAMES_AUDIO_API_KEY`，作 `x-api-key` 发。HeyGen 凭据永不发到这样设的 URL。任一 URL 设空串即关闭该服务，无论有无凭据。",
        ],
        codeBlocks: [],
        id: "audio-services",
      },
      {
        h: "`normalize-audio`",
        p: "",
        paras: [
          "用确切本地媒体字节与 FFmpeg 综合 EBU R128 响度测量，把某已编音频 clip 匹配到参考。",
          "`--reference` 与 `--target` 是 `<audio>` 元素 id，带不带 `#` 皆可。命令在 `index.html` 及挂载场景中找它们，包括嵌套在另一场景 `<template>` 里的场景。多文件同 id 被拒；`--write` 只改含目标 clip 的文件。",
          "参考保持不变；命令计入双 clip 当前 `data-volume` 并写目标绝对匹配增益。测量 `data-media-start` 与 `data-duration` 并拒远程或项目外源。整匹配会超 Studio +12 dB 上限或 -1.5 dBTP 时，取可承受最大并说明比参考低多少。Dry-run 是故意：先看测量再传 `--write`。用 `--tolerance <LU>` 改默认 0.5 LU no-op 阈值。",
        ],
        codeBlocks: [
          {
            code: "# Measure only (the default)\nnpx hyperframes normalize-audio --reference target-audio --target user-audio\n\n# Persist the computed gain on #user-audio\nnpx hyperframes normalize-audio --reference target-audio --target user-audio --write\n\n# Agent-readable result\nnpx hyperframes normalize-audio --reference target-audio --target user-audio --json",
            file: "bash",
          },
        ],
        id: "normalize-audio",
        aliases: ["look-at-it"],
      },
      {
        h: "`preview`",
        p: "",
        paras: [
          "启动带热重载的 live 预览服务器。",
          "| 旗标 | 说明 |\n| - | - |\n| `--port` | 服务器端口（默认 3002） |\n| `--open` / `--no-open` | 打开浏览器，或保持关闭 |\n| `--background` | 命令退出后继续运行内嵌预览 |\n| `--foreground` | 即使 shell 非交互也挂住 |\n| `--json` | 对 managed start、status、stop、list、kill-all 输出一个版本化 JSON 结果 |\n| `--browser-gpu` / `--no-browser-gpu` | Studio 缩略图与帧捕获用硬件 GPU，或确定性 SwiftShader（默认：自动检测） |\n| `--proxy` / `--no-proxy` | 自动转码浏览器不喜欢的编码（HEVC、ProRes、AV1）为缓存创作代理（默认：开） |\n| `--browser-path` | 打开指定浏览器。`--user-data-dir`、`--remote-debugging-port` 和 `--browser-no-gpu` 需要它。 |\n| `--status` / `--stop` | 对本项目后台预览行动 |\n| `--list` / `--kill-all` | 对全部预览行动 |\n| `--force-new` | 对已有预览的项目开第二个服务器 |",
          "管理运行中的服务器：`--status` 和 `--stop` 对本项目后台预览行动，`--list` 和 `--kill-all` 对全部行动，`--force-new` 对已有项目开第二个服务器。各命令即刻退出。",
          "Bare `preview` 按调用方选最安全 lifecycle：人类交互终端里留前台，非交互或代理 shell 起 managed 后台预览。同项目再跑复用健康预览。每次 start 或 status 结果都带确切 Studio 项目 URL 与底层服务器 URL，代理无需从端口猜项目交接。",
          "从脚本读运行中的 Studio：`--selection` 打印选中元素，`--context` 打印代理可读上下文，都带 `--json`。用 `--context-fields`（`server`、`selection`、`lint`、`capabilities`）与 `--context-detail`（`compact` 或 `full`）缩窄上下文。",
          "合成在 HyperFrames Studio 打开，`index.html` 及子合成改动 live 刷新。Preview 与 render 共同一运行时。",
          "服务器自选三种模式之一：**embedded**（`npx` 默认——Studio 打进 CLI，无额外依赖）、**local studio**（完整 HMR 的 Vite，来自 `@hyperframes/studio` 源码 checkout）、或 **monorepo**（从源码仓库运行时跑 studio dev server）。Local studio 模式只在项目解析到与 CLI 自身同 Studio checkout，或你设 `HYPERFRAMES_LOCAL_STUDIO=1` 时跑；项目自有 `node_modules` 里的 Studio 否则不用。`--background` 只对 embedded 服务器可用。",
          "预览服务器只回答它服务的 host 名。经隧道、Codespaces 或反向代理打开时，把该 host 命名到 `HYPERFRAMES_PREVIEW_ALLOWED_HOSTS`（逗号分隔）。被拒请求答 403，host 名与该变量即修复法：",
          "CLI 自带 GSAP、CustomEase、MotionPathPlugin，Studio 加进预览的 GSAP 脚本从预览服务器自身加载，不从 jsDelivr。用你自己的镜像改为启动服务器前设 `HYPERFRAMES_GSAP_BASE_URL`。查找顺序、镜像布局、该设置不覆盖项见 [Where Studio loads GSAP from](https://hyperframes.heygen.com/packages/studio-server.md#where-studio-loads-gsap-from)。",
          "[!NOTE] Preview 实时播放，paint-heavy 合成在本机可能卡顿。Render 按序 seek 并逐帧捕获，同样工作量通常表现为更长渲染而非掉帧。浏览器、字体、GPU 差异仍会改变确切像素——以渲染文件为准。见 [Performance](https://hyperframes.heygen.com/guides/performance.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes preview [dir]\nnpx hyperframes preview --port 4567\nnpx hyperframes preview --background     # keep running after the command exits\nnpx hyperframes preview --foreground     # stay attached in a non-interactive shell\nnpx hyperframes preview --status --json  # inspect a managed preview from an agent\nnpx hyperframes preview --list           # every running preview",
            file: "bash",
          },
          {
            code: "HYPERFRAMES_PREVIEW_ALLOWED_HOSTS=demo.tunnels.example hyperframes preview",
            file: "bash",
          },
        ],
        id: "preview",
      },
      {
        h: "`present` 和 `play`",
        p: "",
        paras: [
          "`present` 提供幻灯片并打开演示者视图。演示者与观众视图在命令运行时保持同步。",
          "`--port` 默认 3004。`--open` / `--no-open` 控制浏览器，`--browser-path` 打开指定——`--user-data-dir` 与 `--remote-debugging-port` 都需要它。",
          "`play` 把合成在轻量 Player 而非 Studio 打开——无编辑器，只有播放。同旗标，`--port` 默认 3003，另有 `--proxy` / `--no-proxy`。",
          "两者监听每网卡，手机或网内另一台电脑可用本机 LAN 地址或 `.local` 名打开。回答 `localhost`、回环地址、本机自身地址与名字。其他 host 名（如隧道、Codespaces、反向代理）在你于 `HYPERFRAMES_PREVIEW_ALLOWED_HOSTS` 命名前一律 403，与 `preview` 同设置：",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes present [dir]\nnpx hyperframes present [dir] --port 3004",
            file: "bash",
          },
          {
            code: "HYPERFRAMES_PREVIEW_ALLOWED_HOSTS=demo.tunnels.example hyperframes present",
            file: "bash",
          },
        ],
        id: "present-and-play",
      },
      {
        h: "`publish`",
        p: "",
        paras: [
          "新视频评审请用 [`share`](#share)。旧源发布带通知保留 60 天，自宣布通知的发布起算。发布日期尚未排期。窗口后新 `publish` 运行会指引你到 `share` 选新受众；旧旗标永不静默翻译。已发布 URL 与旧更新在另设退役计划下保持支持。窗口后用 `hyperframes auth login` 登录更新已有发布；登出与 API key 发布无法保留 ownership。旧服务器对缺失更新目标的处理不变。",
          "上传项目并返回稳定的 `hyperframes.studio` URL。",
          "| 旗标 | 说明 |\n| - | - |\n| `--yes, -y` | 跳过确认提示。无人值守运行必填 |\n| `--public` | 让认领的项目对任何人可见 |\n| `--update <url-or-id>` | 原地更新已有项目。需登录。 |\n| `--space <space-id>` | 发布进共享团队 space。需登录。 |\n| `--proxy` / `--no-proxy` | 给浏览器不喜欢的编码烘 H.264 代理，或跳过 |",
          "`publish` 打包项目、上传，并打印指向存储内容的 URL——CLI 退出后仍可用。无本地服务器常驻，无隧道。",
          "登出也能发布。打印 URL 带 claim token：在 `hyperframes.studio` 打开的人可登录、认领项目、继续在网页编辑。",
          "想拥有可再次发布的稳定链接时先 `npx hyperframes auth login` 登录。`--update` 与 `--space` 都需要该 ownership。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes publish [dir]\nnpx hyperframes publish --yes\nnpx hyperframes publish --update <url-or-id>\nnpx hyperframes publish --space <space-id>",
            file: "bash",
          },
        ],
        id: "publish",
      },
      {
        h: "`open` 和 `catch-up`",
        p: "",
        paras: [
          "`open` 在 HyperFrames 桌面 app 打开项目并加入 Home。",
          "| 旗标 | 说明 |\n| - | - |\n| `[dir]` | 项目目录（默认：当前） |\n| `--json` | 机器可读结果 |",
          "在 Claude Code、Codex 或 Grok 下运行时，app 的聊天会接上该对话。无法打开 app 时（例如未安装），`open` 以 1 退出并打印下载链接。带 `--json` 时结果注明 `reason` 与 `downloadUrl`。交接在 macOS、Windows 与 Linux 可用。",
          "app 不能在该项目预览运行时编辑它，因为预览持有项目编辑历史。所以 `open` 先停该项目 `preview --background` 服务器并告知。其他预览（如终端起的）留着，并打印 `preview --stop` 命令。带 `--json` 时 `preview` 字段报 `none`、`stopped` 或 `left-running`。`left-running` 的预览带 `stopCommand`。文件夹名无法对每种 Windows shell 安全打印时为 `null`，`stopCommandFromProject` 持需在项目文件夹内跑的命令。",
          "`catch-up` 是交接的另一半。你从桌面 app 回来后、先改任何东西前运行：它列出他们所说与上次看后 app 里的改动，以及自此改动的文件。",
          "| 旗标 | 说明 |\n| - | - |\n| `[dir]` | 项目目录（默认：当前） |\n| `--json` | 机器可读结果 |",
          "每次运行把已展示标记为 seen，下次只列新的。从未从这里交给 app 的项目无可 catch up。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes .               # the project in the current directory\nnpx hyperframes ./my-video      # any folder that isn't a command name\nnpx hyperframes open            # the same, naming the command\nnpx hyperframes open --json     # for agents",
            file: "bash",
          },
          {
            code: "npx hyperframes catch-up\nnpx hyperframes catch-up ./my-video\nnpx hyperframes catch-up --json",
            file: "bash",
          },
        ],
        id: "open-and-catch-up",
      },
      {
        h: "`lint`",
        p: "",
        paras: [
          "读 HTML 并报告常见错误。无需浏览器，所以快。",
          "错误（`✗`）渲染前必须修——缺失 adapter 库、无效属性等。警告（`⚠`）多半是问题。信息（`ℹ`）默认隐藏，传 `--verbose` 显示，给代理/CI 保持干净。`render`、`preview`、`publish` 用的 `--lint-verbose` 同愿望，这里与 `check` 也可用。`--json` 增加 `errorCount`、`warningCount`、`infoCount` 与 `findings` 数组。",
          "仅 lint 项目在用的合成：`index.html` 及它经 `data-composition-src` 挂载的每文件，沿它们挂载续跟。`compositions/` 下无挂载文件（装了未放的块）略去，一行说明是多少；`--include-unmounted` 也 lint 它们。`--json` 在 `unmountedCompositions` 列它们。`check` 同 lint 方式并接受同旗标。",
          "linter 抓缺失属性、缺失 adapter 库（GSAP、Lottie、Three.js）和结构问题。每条规则见 [Troubleshooting](https://hyperframes.heygen.com/help.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint [dir]\nnpx hyperframes lint [dir] --verbose   # include info-level findings\nnpx hyperframes lint [dir] --json",
            file: "bash",
          },
          {
            code: '◆  Linting my-project/index.html\n\n  ✗ missing_gsap_script: Composition uses GSAP but no GSAP script is loaded.\n  ⚠ video_missing_muted [clip-1]: <video id="clip-1"> has data-start but declares neither muted nor data-has-audio. If the file has sound, add data-has-audio="true" (the sound stays on this clip). If it is silent, add muted.\n\n◇  1 error(s), 1 warning(s)',
            file: "example",
          },
        ],
        id: "lint",
        aliases: ["check-your-work"],
      },
      {
        h: "`check`",
        p: "",
        paras: [
          "浏览器门禁。旧 `validate` → `inspect` → `snapshot` 循环所做，一条命令、一次浏览器会话全干。",
          "`check` 先跑 linter。lint 错误让 check 失败但不中止：浏览器检查照跑，两边都报，除非 lint 错误使无合成可载（root 无 `data-composition-id`）。然后载一次打包合成并扫一条 seek 网格，每采样跑每审计：运行时控制台错误与失败请求、布局缺陷（溢出、裁剪、常占、遮挡、坐标系漂移）、`*.motion.json` 断言、WCAG AA 对比、craft 警告（见 [Craft warnings](#craft-warnings)）。",
          "`audio` 段读 render 混音的每 clip，浏览器跑的同时：无音轨或无法作音频读的源（error：render 止）、clip 起点过文件尾、clip 播放部分静音（警告）、全片无声（info）。",
          "浏览器从未跑（无合成可载、linter 崩、浏览器拉起失败）时 `browserSkipped` 为 `true`，`layout`、`motion`、`contrast` 段为空非干净。",
          "scoped check 给 JSON 报告加 `scope`，含所求范围与组件、隐藏发现数、scope 说明。组件过滤只改返回的 finding 数组；段计数、`ok` 与退出码仍覆盖每次发现的全 check。",
          '| 旗标 | 说明 |\n| - | - |\n| `--json` | 一个聚合 envelope。每发现带 selector、`data-*` 身份、源文件、bbox、采样时间。 |\n| `--snapshots` | 把五帧审计帧存 `.hyperframes/artifacts/snapshots/`，每发现另存 `finding-NN-<code>.png` 裁图 |\n| `--include-unmounted` | 也 lint `compositions/` 里 `index.html` 从不挂载的文件（默认略，并一行说明多少） |\n| `--samples` | 跨时长中点采样（默认 9） |\n| `--at` | 显式时间戳（秒），逗号分隔 |\n| `--at-transitions` | 也采样每 tween 起止，抓过渡接缝瞬过叠合 |\n| `--max-transition-samples` | 截断过渡派生采样数。截断时报省略数。默认无上限。 |\n| `--range <start,end>` | 只采该区间（全局秒）。Lint 仍全项目；全时间线 motion、`sweep_static` 与 craft 警告跳过。 |\n| `--components <selectors>` | 只报涉及这些元素或后代的发现。计数、`ok`、退出码仍覆盖全部。 |\n| `--max-issues` | 静态归并后打印/返回的发现数（默认 80） |\n| `--collapse-static` / `--no-collapse-static` | 把重复静态发现折一行（默认：开） |\n| `--tolerance` | 报告前容许溢出（px，默认 2） |\n| `--timeout` | 渲染就绪预算（毫秒）；同时把页面导航在 10s 地板上调高（默认 45000，如 snapshot 与 render） |\n| `--budget <ms\\|90s\\|8m>` | check 开始后这么久停全 check（至少 30s）并报所见，`check_budget_reached` 注明所在阶段。供宿主有自设时限用。 |\n| `--no-cache` | 即使项目文件、旗标、CLI 与浏览器自上次通过未变也跑。让出的不跑时，没变的项目约一秒返回那次通过并标 cached；远程脚本与资产不再取。失败永不缓存，有 `node_modules` 或链接目录的项目永不重放。 |\n| `--no-contrast` | 迭代时跳过 WCAG pass |\n| `--no-craft` | 跳过 craft pass（死段、不可读行、静片），全 check 最长一项。报告标 skipped。渲染预检用它；发布前全 check 保留。 |\n| `--strict` | 警告也非零退出（默认仅错误） |\n| `--caption-zone "<x0=..;y0=..;x1=..;y1=..>"` | opt-in 带门禁。文本元素 DOM 盒压上分数带即标。可选 `severity` 与 `seek`。 |\n| `--safe-zone <tiktok\\|reels\\|shorts\\|standard\\|off>` | 文本（含字幕）离安全区时警告：9:16 合成上的平台（默认三者）、或任一帧 `standard` 标题安全边（每边 10%）。永不坏 `--strict` |\n| `--frame-check` | opt-in `img`、`svg`、`video`、`canvas` 出框检测 |\n| `--layout` | 布局旋钮，目前 `proseCoverageFloor=0.05`（0–1，默认 0.15） |\n| `--browser-gpu` / `--no-browser-gpu` | 硬件 GPU 捕获，或确定性 SwiftShader（默认：自动检测） |\n| `--proxy` / `--no-proxy` | check 前自动转码浏览器不喜欢的编码（默认：开） |\n| `--prepare-media` | 只做浏览器可播视频复制然后退：无浏览器无报告。`--json` 按 `ready`/`cached`/`failed` 列每文件；任一 failed 退 1。 |',
          "Chrome 解不了的视频（HEVC、ProRes）复制一次，首 check 等之至多 2 分钟；过期 check 停并以 `media_copies_unfinished` 发现注明每未完文件与进度。跑 `--prepare-media`（不限时）把它们了完。合成中长视频每次使用都有已知 `data-duration`（视频上或计时元素上，无 `loop`）时，check 只从头拷那段（上取整 15 秒片），而非整文件。超 22 秒源按 15 秒片拷并保留，中止的复制下次从已完成片续。在事时 check 每 10 秒向 stderr 打印每复制进度（stdout 给 `--json` 留干净），3 分钟无进展的复制结束（`HYPERFRAMES_PROXY_STALL_MS`）。长项目先跑 `hyperframes check --prepare-media`，check 本身即全 ready。",
          "check 开始后 3 分钟 Chrome 未就绪就绪即以 runtime 发现结束，注明 Chrome 未起及各步耗时。首跑 Chrome 或仍在下载：先跑一次 `hyperframes browser ensure` 再 check。",
          "`--caption-zone` 与 `--frame-check` 在所配 seek 采样无一落入 `--range` 时拒 ranged check；所求门禁永不静默 pass。",
          "`<video>` 下文本按采样时刻该视频所示帧判定。不透明视频覆盖全盒，如不透明图片。透明视频（如 `remove-background` 抠像）只在 alpha 处覆盖：词部分在主体后是 info，其 `coveredFraction` 为被盖最深词比例，词 80% 藏或相邻二词各半藏是 error。视频上 CSS 背景仍覆盖全盒，镜像视频（`scaleX(-1)`）按绘制侧读。视频帧读不到时审计按不透明计并加 `video_alpha_unread` info 说明原因：尚无帧解码、seek 仍落、跨源、无线帧尺寸、旋转/偏斜/3D transform、`读回全透`。全透帧故意按未读计，因为绘制失败亦然；抠像主体入场前压其下的文本标 `data-layout-allow-occlusion`。",
          "`canvas_covered` 在跨画布不透明元素压住影片大半时间每可见 clip（shape、图片、视频、文本）之上时为 error，画面只余它：常是全幅背景放 DOM 最后。其名覆盖元素；故意全幅卡标 `data-layout-allow-occlusion`。",
          "对比失败是 error，每条报采样前景/背景色、实测比与所求比、可代用的合规色。",
          "代理 harness 可在 [`HF_TOOL_CONTEXT`](https://hyperframes.heygen.com/developers/harness-tool-context) 的 `check-review` 能力开 `skipContrastInMotion`。它略去在文本或祖先上 GSAP tween 运行中测得的对比失败，或文本不透明度乘祖先小于 1 时。失败不报，计数与 `ok` 亦去之。重复 tween、无限重复 timeline 内 tween、4s 以上 tween（如慢相机运镜）不算运动。该不透明规则于静止亦然（含故意半透明文本），tween 目标为文本或祖先时。无 GSAP tween 目标文本照常报。丢失样本不计 persistence：保留失败在多测时仅剩一失败样本可降警告。默认关。",
          '严重度随 persistence：单采样发现降 info，持续发现 gate 退出码，3s 以上合成帧永不变且 GSAP timeline/tween 或 CSS/Web 动画在页上同久而从不结束、seek 永不推它时以 `sweep_static` 失败。其他永不变帧（如静止标题卡）是 `sweep_static` 警告（"Nothing on screen moved under seek"），纯音频推进亦然；`--strict` 对两者都失败。故意静止的合成可声明 `data-no-timeline` 跳过该 guard。',
        ],
        codeBlocks: [
          {
            code: "npx hyperframes check [dir]\nnpx hyperframes check [dir] --json         # {ok, browserSkipped, scope, lint, runtime, layout, motion, contrast, craft, audio, hdr, snapshots}\nnpx hyperframes check [dir] --snapshots\nnpx hyperframes check [dir] --at 1.5,4,7.25\nnpx hyperframes check [dir] --strict       # warnings fail too",
            file: "bash",
          },
        ],
        id: "check",
      },
      {
        h: "Craft 警告",
        p: "",
        paras: [
          "`craft` 段报 viewer 随时间会注意的、单帧看不到的。每 craft 发现都是警告，即使 `--strict`：影片可故意犯一。其消息注明修复法及该读的技能参考。以全片 8 fps 扫测，每短行边以约 0.01 s 重测，`--range` check 跳过。",
          "| 代码 | 何时警告 |\n| - | - |\n| `line_unread` | 阅读尺寸行（1080 下 30 px 及以上）在屏时长短于其地板：1-2 词 0.4 s，否则 0.5 s 三四分之三 + 每词 0.3 s。影片末行需 2 s。 |\n| `dead_stretch` | 屏上超 3 s 无变化，以 `keepsMoving` 同分类器判。 |\n| `text_below_floor` | 短边 2.6% 以下（1080 下 28 px）文本在屏 0.5 s 以上。每文件一发现列全此类元素。 |\n| `first_frame_empty` | 第 0 帧只画背景（无文本、图片、视频、canvas、SVG），或不透明元素盖住每他 clip 并点名。首帧是社媒播放器缩略图。 |\n| `film_silent` | 15 s 以上影片无未静音 `<audio>` 且无带声 `<video>`。 |",
          '字幕轨文本（`data-track-kind="captions"`）与 `data-layout-ignore` 文本豁免文本规。`dead_stretch` 永不计影片末 3 s（定格片尾）与 `data-hold` 元素在屏时，且 `sweep_static` 已报扫或整合成 `keepsMoving` 断言自设限时安静。',
        ],
        codeBlocks: [],
        id: "craft-warnings",
      },
      {
        h: "音频发现",
        p: "",
        paras: [
          "`audio` 段查 render 混音的 clip。即使 lint 停了浏览器 pass 也跑，远程源不取。",
          '| 代码 | 严重度 | 何时触发 | 修复 |\n| - | - | - | - |\n| `audio_source_unreadable` | error | 文件无法作音频读，render 混音失败渲染止。 | `src` 指带音轨文件，或重导出。 |\n| `audio_source_rejected` | error | 文件无音轨，render 在起跑前止。 | `src` 指带音频文件，或从 `<video>` 去掉 `data-has-audio="true"`。 |\n| `audio_starts_past_source_end` | warning | `data-media-start` 在或过文件长，clip 播放为空。 | `data-media-start` 调到文件长下。 |\n| `audio_clip_silent` | warning | 文件在 clip 播放整段静音。 | 查文件该处有声，或把 `data-media-start` 移到有声处。 |\n| `audio_none` | info | 无 clip 播音频且无带音轨未静音 `<video>`。 | 静片无可；否则加 `<audio>`。 |\n| `audio_check_unavailable` | info | 音频检查本身失败，消息说原因，clip 未查。 | 重跑；复现跑 `hyperframes doctor`。 |\n| `audio_src_not_found` | error | `<audio src>` 点名项目外文件，render 静默。`lint` 报。 | 加文件或改路径。 |',
          "每次媒体 probe（render 用的音频元数据、render 媒体类型规则）每文件至多一次；`<video>` 是否带声每次使用探。check 与浏览器 pass 并行，每时至多四文件。超 3 s clip 先在三处 1 秒采样，三处皆静才全解。",
          "叠合按 viewer 看得见的文本判：溢出 clip、`clip-path` 或梯度 `mask-image`（文本上或祖先）不让画的那部分不算。",
        ],
        codeBlocks: [],
        id: "audio-findings",
      },
      {
        h: "标明故意布局选择",
        p: "",
        paras: [
          "审计错而布局故意时，在 HTML 说清并重跑。计划画外入场放 `data-layout-allow-overflow`，故意堆叠文本放 `data-layout-allow-overlap`，故意藏在道具后文本放 `data-layout-allow-occlusion`，不该审计的装饰放 `data-layout-ignore`。溢出、遮挡、ignore 标记继承，祖先可。重叠标记故意局部：放参与分层的具体文本块，永不放场景/root wrapper，无关后代冲突仍可审计。",
          "`--caption-zone` 下故意下三分率常文案用 `data-layout-allow-caption-zone`。仅静默 `caption_zone_collision`，余者——溢出、叠合、遮挡、对比——照旧。放拥有带文案的最窄 wrapper 上。",
          "9:16 合成上，check 拿每文本块与字幕行对 TikTok、Instagram Reels、YouTube Shorts 让开按钮与字幕的区域采样。越线块是 `outside_safe_zone` 警告，注明平台与越边，首现时刻。区域取各平台竖版广告规作参考：TikTok 720x1280 右缘阶梯、Reels 去下 35%、上 14%、侧 6%、Shorts 1080x1920 去左 48px、右 192px、上 288px、下 672px。`--safe-zone standard` 查标题安全边，任一宽高比每边内 10%。可能在外的文本标 `data-layout-allow-safe-zone`。",
        ],
        codeBlocks: [],
        id: "mark-intentional-layout-choices",
      },
      {
        h: "验证运动，而非仅布局",
        p: "",
        paras: [
          "布局采样抓不到 render-≠-preview bug：seek 落过的入场、错的 stagger 序、tween 中漂出框、定帧。运动断言能。合成旁放 `*.motion.json` sidecar，`check` 自动评——无旗标，无需改 HTML。无 sidecar 无变化。",
          "| 断言 | 抓什么 |\n| - | - |\n| `appearsBy(selector, bySec)` | reveal 被 seek 落过——元素须在 `bySec` 前达不透明 ≥ 0.5（`motion_appears_late`） |\n| `before(a, b)` | 错 stagger 序——`a` 须先于 `b` 出现（`motion_out_of_order`） |\n| `staysInFrame(selector)` | 出框漂移——可见后盒不离画布（`motion_off_frame`） |\n| `keepsMoving(withinSelector?)` | 定帧——超 `maxStaticSec`（默认 2s）的全静窗（`motion_frozen`）；影片末 3 s 永不计 |",
          "`keepsMoving` 与冻扫 guard 同运动分类器：盒几何、不透明、文本与生成内容、表单控件状态、绘制 CSS counter、clip-path、可变字体轴、filter、色、背景、绘制边框影、可见 canvas/video/img 像素、视频播放时间都算运动——故播放中的背景视频自留 scope 存活，调色画进 canvas 的亦然。音频播放时间永不算此：它只证 timeline 跑过，非 moving picture。冻扫 guard 把纯音频推进报警告而非失败。scope 内 `data-layout-ignore` 下元素永不计；scope 元素自身不退出，因断言中点名优先。浏览器不画的内容（`display: none` 子树、`visibility: hidden` 盒、跳过 `content-visibility` 内容）不算运动，视频播放时间除外，因运行时可能在别处画该视频画面。",
          "`duration`、`keepsMoving.withinSelector`、`keepsMoving.maxStaticSec` 可选。发现同布局发现之形与 envelope，默认 error，断言失败即 run 失败。selector 无匹配报 `motion_selector_missing` 而非静 pass。",
        ],
        codeBlocks: [
          {
            code: '{\n  "duration": 6,\n  "assertions": [\n    { "kind": "appearsBy", "selector": "#headline", "bySec": 0.5 },\n    { "kind": "before", "a": "#headline", "b": "#cta" },\n    { "kind": "staysInFrame", "selector": ".card" },\n    { "kind": "keepsMoving", "withinSelector": ".scene" }\n  ]\n}',
            file: "json",
          },
        ],
        id: "verify-motion-not-just-layout",
      },
      {
        h: "`snapshot`",
        p: "",
        paras: [
          "抓定帧为 PNG，不等整渲染。",
          "每子合成可复用 `clip` 这类本地视频 ID。快照把各场景素材分开，需你跨文件重命名那些 ID。",
          '| 旗标 | 说明 |\n| - | - |\n| `--at` | 时间戳（秒），逗号分隔（`3.0,10.5,18.0`） |\n| `--frames` | 改均匀帧（默认 5） |\n| `--range <start,end>` | `--frames` 只在该区间展开（root timeline 秒），不加片尾帧 |\n| `--composition <id>` | `--frames` 跨此 `data-composition-id` 元素可见区间展开。`--at`、`--range`、`--composition` 取一。 |\n| `--output, -o` | PNG 落哪（默认每次新 `<project>/.hyperframes/artifacts/snapshots/<id>`） |\n| `--end` / `--no-end` | 总加一可读片尾帧（默认开）。`--no-end` 只抓你的 `--at` 时刻。 |\n| `--keep` | 加到 `--output` 而非清它，按时刻命名每 still：`at-0s.png`、`at-1.5s.png`、`at-12.25s.png`（无尾零）。再快同瞬只换那 still。无接触表。 |\n| `--zoom` | 裁到 CSS 选择器或确切 `x,y,w,h` 区域，用升起设备缩放。布局不动——永非 CSS zoom 或缩放视口。零匹配是 error。 |\n| `--against` | 参考视频，如你重建的素材。每抓时刻另存逐帧精确帧（`ref-XX-…png`）与带标 render/参考对（`pair-XX-…jpg`）。 |\n| `--zoom-scale` | `--zoom` 裁图密度（默认 3） |\n| `--angle` | 正交 3D 相机验深度与遮挡：`front`、`iso`、`top`、`side`，或度数 `yaw,pitch`。倾全舞台，得真像素。 |\n| `--review` | 抓影片随时间的帧而非均匀：`review-beats.jpg`（每场景起 +0.3 s 与中点、每计时 `data-beat="name"` 元素起 +0.3 s）、`review-seam-NN.jpg`（每 cut 前后 −0.2 至 +0.2 s）、`review-phone.jpg`（节拍帧宽 360 px）。场景是顶层计时 clip 与子合成宿主；`--composition` 缩一。 |\n| `--json` | 印一 envelope：`frames` 带 path、time、（`--review` 下）role、label，接触表，及 `--review` 下场景、节拍、接缝。进度走 stderr。 |\n| `--describe` | 默认关。每帧发 Gemini 写 `descriptions.md`。需 `GEMINI_API_KEY` 或 `GOOGLE_API_KEY`。bare `--describe` 用默认 prompt；`--describe "<question>"` 问自己。bare `--describe` 前放项目目录。 |\n| `--timeout` | 等运行时毫秒（默认 5000） |\n| `--browser-gpu`, `--proxy` | 同 [`check`](#check) 义 |',
          "每快照是 1920×1080 PNG，经打包项目、服务、起无头 Chrome、seek 得。例如代理构建时视觉验，如 [product or website video](https://hyperframes.heygen.com/guides/product-launch-video.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes snapshot my-project --at 2.9,10.4,18.7\nnpx hyperframes snapshot my-project --frames 10\nnpx hyperframes snapshot my-project --zoom '#headline'\nnpx hyperframes snapshot my-project --at 1.5,4.3 --against ref.mp4\nnpx hyperframes snapshot my-project --review --json",
            file: "bash",
          },
          {
            code: "◆  Capturing 3 frames at [2.9s, 10.4s, 18.7s] from my-project\n\n◇  3 snapshots saved to <project>/.hyperframes/artifacts/snapshots/<id>\n   .hyperframes/artifacts/snapshots/<id>/frame-00-at-2.9s.png\n   .hyperframes/artifacts/snapshots/<id>/frame-01-at-10.4s.png\n   .hyperframes/artifacts/snapshots/<id>/frame-02-at-18.7s.png",
            file: "example",
          },
        ],
        id: "snapshot",
      },
      {
        h: "`keyframes`",
        p: "",
        paras: [
          "显示合成实测到的 GSAP、CSS、Anime.js 关键帧——或渲一元素运动 onion-skin 诊断。",
          "| 旗标 | 说明 |\n| - | - |\n| `--selector` | 只关键帧匹配此 CSS 选择器 |\n| `--runtime` | 过滤提示：`gsap`、`css`、`anime` 或 `all` |\n| `--json` | 机器可读结果 |\n| `--shot` | 写一真实元素在 timeline 采样的 onion-skin PNG。配 `--selector` 聚一元素。 |\n| `--samples` | onion 均匀时间步采样（默认 9） |\n| `--layout` | `path`——真位 ghost 加路径（默认）——或 `strip`，原位或重叠运动。`strip` 仅 `--selector` 目标 SVG 元素时为真 per-time 像素 filmstrip；他 selector（如 DOM/子合成宿主）得一 live 帧加矢量位标 |\n| `--from`, `--to` | 只采此时段（秒） |\n| `--angle` | 环绕相机：`front`、`iso`、`top`、`side`、`rear-iso`，或度数 `yaw,pitch` |\n| `--fit` / `--no-fit` | 运动缩放送满诊断帧（默认开） |\n| `--ghost` | 真 canvas 帧作半透 ghost 合成，越旧越淡，代 bounding-box 标。需 `<canvas>`。 |",
          "`*inside* canvas` 运动用 `--ghost`，mark onion 无可画。",
        ],
        codeBlocks: [
          {
            code: 'npx hyperframes keyframes [dir]\nnpx hyperframes keyframes [dir] --selector "#card" --shot card-motion.png',
            file: "bash",
          },
        ],
        id: "keyframes",
      },
      {
        h: "`compare` 和 `grade-compare`",
        p: "",
        paras: [
          "`compare` 把二以上独立变体渲成一带标 PNG。",
          "| 旗标 | 说明 |\n| - | - |\n| `--at` | 捕获前 seek 到的 timeline 时间（秒） |\n| `--labels` | 逗号分隔标，每输入一路 |\n| `--out` | 输出路径（默认 `./compare.png`） |\n| `--cols` | 网格列（默认 sqrt 启发，最大 4） |\n| `--timeout` | 每变体渲染就绪超时（毫秒），正整数（默认 5000） |\n| `--json` | 机器可读结果 |",
          "`grade-compare` 对颜色同理：候选 grade 或 LUT 施于一参考帧。",
          "| 旗标 | 说明 |\n| - | - |\n| `--for` | 必填。图片，或零秒采样视频。 |\n| `--grades` | `{ label, grading }` 候选 JSON 数组 |\n| `--luts` | 逗号分隔 `.cube` LUT 文件 |\n| `--project` | 相对路径基准目录 |\n| `--out` | 输出 PNG（默认 `<project>/grade-compare.png`） |\n| `--baseline` / `--no-baseline` | 加未分级帧作 `original` 格（开） |\n| `--timeout` | 渲染就绪超时（毫秒），或 `30s` 这类时长（默认 5000 毫秒） |\n| `--json` | 机器可读结果 |",
        ],
        codeBlocks: [
          {
            code: 'npx hyperframes compare ./variant-a ./variant-b --labels "A,B"',
            file: "bash",
          },
          {
            code: "npx hyperframes grade-compare --for frame.png --luts warm.cube,cool.cube",
            file: "bash",
          },
        ],
        id: "compare-and-grade-compare",
      },
      {
        h: "废弃：`validate`、`inspect` 和 `layout`",
        p: "",
        paras: [
          "三者都仍运行，三者都在 stderr 打废弃行并在 `--json` 输出置 `_meta.deprecated: true`。`validate` 是仅运行时的浏览器检查；`inspect`（及别名 `layout`）是布局扫与 motion-sidecar pass。[`check`](#check) 在一次浏览器会话里全做，新活往哪去。旗标不变——维护仍调用它们的自动化就跑 `npx hyperframes inspect --help`。",
        ],
        codeBlocks: [],
        id: "deprecated-validate-inspect-and-layout",
      },
      {
        h: "重建已有视频",
        p: "",
        paras: [
          "这些命令服务 `reverse-any-video` 技能：测量视频、HeyGen 起草 timeline、拿你的重建对它打分。",
        ],
        codeBlocks: [],
        id: "rebuild-an-existing-video",
      },
      {
        h: "`reverse`",
        p: "",
        paras: [
          "`reverse start` 开一 `reverse-any-video` run。登录后它告知 HeyGen run 已起并把 HeyGen 返回的 session 存项目 `hyperframes.json`，[`cloud render`](#hyperframes-cloud) 随渲染带上该 session。然后打印视频 [`measure probe`](#measure) JSON，含 `reverse` 字段：是否登录、套餐（`free`、`pro`，未知 `null`）、session，以及 Free 下 `upgrade_url` 与 `subscribe_command`（[`billing subscribe`](#billing) 带 feature 与 session，购买记到本次 run）（HeyGen 说此刻买不了时双 `null`）。仅 HeyGen 对 Free 账户拦截时停跑：当时以该命令非零退，无命令时说套餐此刻买不了。登出、离线、服务器无此路时跳过 session 仍 probe；`--dir` 仍以指名该技能的 `hyperframes.json` 建好。`init` 接受该含视频的文件夹作所给 `--video`。",
          "| 旗标 | 说明 |\n| - | - |\n| `--dir` | 存 session 的项目文件夹（缺失建；`init` 保留）。默认当前文件夹，当前为项目时 |",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes reverse start ref.mp4 --dir my-rebuild\nnpx hyperframes reverse start original.mp4   # resume inside the project",
            file: "bash",
          },
        ],
        id: "reverse",
      },
      {
        h: "`measure`",
        p: "",
        paras: [
          "测量视频文件并打印 JSON。每测量是子命令；跑 `npx hyperframes measure <subcommand> --help` 看其旗标。",
          "| 子命令 | 报告什么 |\n| - | - |\n| `probe` | 显示尺寸、帧率、时长、声音、重建前要修什么 |\n| `cuts` | 帧差硬切、以及其间镜头 |\n| `events` | 切、闪、出现、消失、hold；`--map` 加上声音的 hit |\n| `frames` | 帧作图片：所选时刻、总览表、范围、或事件周条 |\n| `extract` | 从视频切一 still 或 clip，裁区域，作项目媒体 |\n| `curve` | 单元素每动：起、时长、过冲、最近 GSAP ease |\n| `energy` | 两 clip 各动多少、是否同时刻 |\n| `look` | 亮度、对比、饱和、暖度，单或对另一视频 |\n| `face` | 窗内脸大小与位置 |\n| `sync` | 嘴动与语音滞后 |",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes measure probe ref.mp4\nnpx hyperframes measure cuts ref.mp4\nnpx hyperframes measure frames ref.mp4 --events\nnpx hyperframes measure face ref.mp4 --start 1 --end 2.5",
            file: "bash",
          },
        ],
        id: "measure",
      },
      {
        h: "`diff`",
        p: "",
        paras: [
          "逐帧打分渲染，或未渲染的项目文件夹，对原视频：SSIM、最差时刻、漏与多出切、时长、声音偏移。分数线下非零退。",
          "| 旗标 | 说明 |\n| - | - |\n| `--at` | 只比这些秒 |\n| `--range` | 比 `start,end` 秒每帧 |\n| `--offset` | 原在 t 与你在 t + offset 秒比 |\n| `--segments` | 文件每 `## S01 · a–b s` 段一结论 |\n| `--drawn` | 单打一绘制元素盒 `x,y,w,h[,a-b]`（可重复） |\n| `--min-mean` / `--min-p05` / `--min-cell` | SSIM 过线 |\n| `--sbs` | 也写原旁你的视频 |\n| `--out` | 表与日志文件夹（默认 `.hyperframes/diff/<yours>`） |\n| `--json` | 印一 JSON 结果 |",
          "`--offset` 以秒记，你比原快时负。每帧分数、切、漏内容段自此你方 t + offset 读，项目文件夹按那些时刻捕获。比对只在双边都有帧的段：`window` 报告它、`warnings` 说扔了帧。`frames.tsv` 中 `t` 是原时刻；你的时刻 t + offset。声音保自身偏移测量，时长报未测，JSON 结果回 `offset`。偏移致无重叠拒并给修复。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes diff original.mp4 renders/final.mp4\nnpx hyperframes diff original.mp4 . --at 0.5,2.4,3.1\nnpx hyperframes diff original.mp4 renders/final.mp4 --segments segments.md --sbs",
            file: "bash",
          },
        ],
        id: "diff",
      },
      {
        h: "`timeline`",
        p: "",
        paras: [
          "打印项目轨道与 clip，或编辑一 clip。",
          "| 旗标 | 说明 |\n| - | - |\n| `[dir]` | 项目目录（默认：当前） |\n| `--json` | 每轨道每 clip 含起、时长、文件、轨道 |",
          "编辑命令取 clip ref（如 `#outro`），把改动写到拥有该 clip 的文件：",
          '| 命令 | 作用 |\n| - | - |\n| `move <ref> <time>` | clip 从 `<time>` 起，保长 |\n| `trim <ref>` | 改 clip 的 `--start`、`--end` 或 `--duration`（至少一） |\n| `split <ref> <time>` | clip 从 `<time>` 切两半 |\n| `delete <ref>` | 删 clip，或只删其 `--start` 至 `--end` 段，前后保留 |\n| `set <ref> <field>=<value>` | 设 `volume`、`rate`（播放速率）或 `track`（整数） |\n| `duplicate <ref>` | 复制 clip 到 `--at <time>`（默认：clip 正后） |\n| `apply <file>` | 应用 JSON 编辑数组，如 `[{"verb": "move", "ref": "#intro", "time": "+1"}]`，全或无。传 `-` 从 stdin 读。 |\n| `undo <receipt>` | 从其收据（JSON 或其文件）恢复被编辑改的文件 |\n| `ids` | 给 timeline clip 盖稳定 id |',
          "`duplicate` 把同轨在插入时刻或其后 clip 顺移复制 clip 长。视频与音频 clip 可用源长而无需 `data-duration`，含被插入顺移的。有 `data-end` 的，复制与被移 clip 随起移尾保长。",
          "时间是秒（`4.5`）、距 clip 起偏移（`+1`、`-0.5`）、帧（`30f`）、`end`，或另一 clip 锚点：`after:#intro`、`before:#intro`、`start-of:#intro` 或 `end-of:#intro`。编辑命令不用的旗标在写任何东西前被拒。",
          "| 旗标 | 适用 | 说明 |\n| - | - | - |\n| `--plan` | `move`、`trim`、`split`、`delete`、`set`、`duplicate`、`apply` | 打印结果与 diff 不写。`apply --plan` 只印计数（`planned 1 file`）；加 `--json` 给结果与 diff。 |\n| `--overwrite` | `move`、`trim` | 准 clip 在其轨压邻 |\n| `--snap` | `move`、`trim`、`split`、`delete`、`duplicate` | 时间取整帧。需项目 `data-fps`。 |\n| `--at` | `duplicate` | 复制起处 |\n| `--dir` | 全编辑命令 | 项目目录（默认：当前） |\n| `--json` | 全编辑命令 | 机器可读结果，含 `undo` 取的收据 |",
          "被拒编辑（如 move 会压邻）不写、退 2 并说如何修。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes timeline [dir]\nnpx hyperframes timeline --json",
            file: "bash",
          },
          {
            code: "timeline 10s\n\ngraphics (3)\n  |████████████████████████████████████████| #title title 0-10s\n  |████████████                            | #intro intro 0-3s\n  |                    ████████████        | #outro outro 5-8s",
            file: "example",
          },
          {
            code: "npx hyperframes timeline move '#outro' +1 --plan   # show the result and diff, write nothing\nnpx hyperframes timeline move '#outro' after:#intro\nnpx hyperframes timeline trim '#intro' --duration 2\nnpx hyperframes timeline split '#outro' 6.5\nnpx hyperframes timeline set '#music' volume=0.5\nnpx hyperframes timeline duplicate '#intro' --at 3\nnpx hyperframes timeline delete '#outro' --json\nnpx hyperframes timeline delete '#outro' --start 6 --end 7   # cut one second out",
            file: "bash",
          },
        ],
        id: "timeline",
        aliases: ["edit-from-the-command-line"],
      },
      {
        h: "`history`",
        p: "",
        paras: [
          "列、撤销、恢复项目已录改动。每改动是条，记谁作、标、触文件。",
          "| 旗标 | 说明 |\n| - | - |\n| `--dir` | 项目目录（默认：当前） |\n| `--json` | 机器可读结果 |\n| `--since` | 只在条 id、时间、或 `mine` 之后条 |\n| `--who` | 你名，供 `--since mine` |\n| `--limit` | 显示最新条数（默认 20） |\n| 命令 | 作用 |\n| - | - |\n| `show <ref> [--diff]` | 一条的文件，前后。`--diff` 打文本 diff（需 `git`）。 |\n| `undo [ref]` | 撤销一条，或带 `--who <name>` 无 ref 撤销那名字上回合仍有效者（从未用 `begin` 则其最新条）。该回合无一在效时拒而非撤销更旧回合。 |\n| `restore <ref> [--who]` | 让文件如一条、时刻、或 `start` 后 |\n| `peek <ref> [path]` | 列一条、时刻、或 `start` 时文件不改；带 path 打印那文件 |\n| `pin <ref> [--off]` | 老历史修剪时留一条及其需要。`--off` 解钉。 |\n| `begin --who --label` | 开回合：`end` 前你的写成你名下一条。另一代理开回合先被结束，或 `--exclusive` 时本命令拒。 |\n| `end` | 结束你回合并印其条。`--who <name>` 非其开回合拒；`--if-open` 无开回合成功。 |",
          "每命令亦取 `--dir` 与 `--json`。ref 是条 id 或其唯一前缀；时间是本地日期或日期时间如 `2026-09-24T14:30`。",
          "无运行预览时，`history` 数据在 `~/.cache/hyperframes/history`，设了则在 `HYPERFRAMES_HISTORY_ROOT`，让代理 run 或测试与自有历史分开。路径解析为绝对，项目每代理皆须同：锁在那，回合标在项目。在跑的预览服务器记到自己位置。",
          "`history`、`render`、`check`、`snapshot` 以探本地 3002-3101 与 5190 端口找预览服务器。设 `HYPERFRAMES_NO_PREVIEW_DISCOVERY=1` 跳过探，例如出境连接被拦且每拒探都报：当时 history 总直开，如无预览在跑。`--selection` 与 `--context` 仍找预览。",
          "条内某文件自此被改时，`undo` 不写、退 2 并列更新条。再跑 `--just-this` 只把它条文件压回更新编辑上，或 `--back-to-before` 回到它之前，连更新条亦撤。",
        ],
        codeBlocks: [
          {
            code: 'npx hyperframes history                              # newest 20 entries\nnpx hyperframes history --since mine --who claude    # what changed since your last entry\nnpx hyperframes history begin --who claude --label "Bigger title"\nnpx hyperframes history end\nnpx hyperframes history undo --who claude            # undo your newest turn',
            file: "bash",
          },
        ],
        id: "history",
      },
      {
        h: "`render`",
        p: "",
        paras: [
          "渲合成到 MP4、WebM、MOV、GIF 或 RGBA PNG 序列。",
          "常用旗标：",
          '| 旗标 | 默认 | 说明 |\n| - | - | - |\n| `--output, -o` | `renders/<project>_<YYYY-MM-DD>_<HH-MM-SS>.<ext>` | 输出文件路径 |\n| `--composition, -c` | `index.html` | 渲别合成文件。用 `<template>` wrapper 子合成必须经 `data-composition-src` 自 `index.html` 引用。 |\n| `--format` | `mp4` | `mp4`、`webm`、`mov`、`gif`、`png-sequence` 或 `hls`。WebM 与 MOV 带透明；`png-sequence` 写 RGBA 帧到目录；`hls` 写 VOD playlist 目录。 |\n| `--fps, -f` | root `data-fps`，否则 30 | 1–240，或 ffmpeg 有理如 29.97 的 `30000/1001` |\n| `--quality, -q` | `looks` | `draft`、`looks`（CRF 16，默认）、`delivery`（= `high`）、`standard` 或 `high`。MOV 恒用定版保 alpha ProRes 4444 档。 |\n| `--resolution` | 合成尺寸 | 经 Chrome `deviceScaleFactor` 到预设渲，包括 `landscape-1440p`、`portrait-1440p`、`square-1440p`（别名 `1440p`、`qhd`）。宽高比须合；放大需整数倍。720p→1440p 与 4K→1440p 可；1080p→1440p 拒。不与 `--hdr` 同。见 [4K rendering](https://hyperframes.heygen.com/guides/4k-rendering.md)。 |\n| `--docker` | off | 在 Docker 渲做[确定输出](https://hyperframes.heygen.com/concepts/determinism.md) |\n| `--variables` | — | JSON 对象混入合成 `data-composition-variables` 默认之上 |\n| `--variables-file` | — | 从 JSON 文件读那些覆盖 |\n| `--batch` | — | 一变量行一输出，源 JSON 数组或 `{ "rows": [...] }` 对象 |\n| `--json` | off | 配 `--batch` 印一终 JSON 文档而非进度 |',
          "质量与大小：",
          "| 旗标 | 默认 | 说明 |\n| - | - | - |\n| `--crf` | 自 `--quality` | 覆盖 MP4/WebM 编码 CRF，0–51。越低越好。不与 `--video-bitrate` 同；MOV 拒。 |\n| `--video-bitrate` | 自 `--quality` | 目标 MP4/WebM 码率，如 `10M` 或 `5000k`。不与 `--crf` 同；MOV 拒。 |\n| `--keyframe-interval` | 编码器默认 | 仅 MP4。至多每 N 秒一关键帧，如 `2`，播放器可按此间距 seek 或切档。 |\n| `--start`, `--end` | 全片 | 只渲其间秒，作从 0 起带该段音频的 MP4。24、25、30、60 fps，SDR 仅。 |\n| `--max-bitrate` | 无帽 | 仅 MP4。峰值视频码率帽，如 `8M`，与 `--crf` 或 `--quality` 目标并行而非替换。 |\n| `--buffer-size` | 2 × `--max-bitrate` | 仅 MP4。帽所测缓冲，如 `16M`。需 `--max-bitrate`。 |\n| `--vp9-cpu-used` | 编码器默认 | WebM 的 libvpx-vp9 速度/质量权衡，-8 至 8。环境变量：`PRODUCER_VP9_CPU_USED`。 |\n| `--chroma-subsampling` | `420` | MP4 色度：`420` 或 `444`。`444` 保细彩字与 UI 全分辨色（yuv444p、无损 PNG、更慢）。仅 SDR MP4 软编码；配 `--gpu`、`--hdr`、他格式拒。许多播放器解不了 4:4:4。见 [4:4:4 masters](https://hyperframes.heygen.com/guides/rendering.md#444-masters)。 |\n| `--gif-loop` | `0` | GIF 循环数，`0` 永循环。0–65535，仅 `--format gif`。 |\n| `--hls-segment-seconds` | `4` | HLS 目标分片长（整秒），1–60。仅 `--format hls`。亦定编码 GOP 使每分片起关键帧。 |\n| `--video-frame-format` | `auto` | 源视频帧提取：`auto`、`jpg`、`png`。UI 录屏、截屏等色敏素材用 `png`。 |\n| `--hdr` | off | 无 HDR 源也强制 HDR。仅 MP4。见 [HDR rendering](https://hyperframes.heygen.com/guides/hdr.md)。 |\n| `--sdr` | off | 检出 HDR 源也强制 SDR |\n| `--page-motion-blur` | 作者设置 | 传 `off` 不改合成关页运动模糊。本地、batch、Docker 适用。省略保作者行为。 |",
          "它怎样用机器、何时放弃：",
          "| 旗标 | 默认 | 说明 |\n| - | - | - |\n| `--workers, -w` | auto | 1–24 工作者。各为独立 Chrome，约 256 MB。Auto 权衡核、内存、帧数、成本。N 是上限：render drawElement 捕获仍用一工作者。 |\n| `--low-memory-mode` / `--no-low-memory-mode` | 8 GB RAM 及下 auto | 安全档：一工作者、截图捕获、无校准。见下注。 |\n| `--gpu` | off | 硬件 FFmpeg 编码（NVENC、VideoToolbox、AMF、VAAPI、QSV） |\n| `--browser-gpu` / `--no-browser-gpu` | 本地 auto，Docker off | 宿主 GPU 给 Chrome 与 WebGL 捕获，或软渲染。Auto 探一次 WebGL 然后 fallback。 |\n| `--page-side-compositing` / `--no-page-side-compositing` | on | 页侧 WebGL 做 mp4、hls、gif 的 SDR shader 过渡，~6× 快。webm 与 mov 走分层路；gif 恒页侧 WebGL，即使 `--no-page-side-compositing`。 |\n| `--experimental-fast-capture` | 可启用处 on | Chrome draw-element 捕获，~2× 快；自 fallback 截图。环境：`PRODUCER_EXPERIMENTAL_FAST_CAPTURE`。 |\n| `--frames-cache-dir` | `<tmpdir>/hyperframes-extract-cache-<uid>` | 提取源帧缓存落处。`off`、`none`、`false` 或 `0` 关。`doctor` 报现值。 |\n| `--max-concurrent-renders` | `2` | Producer 服务器并发工，1–10 |\n| `--best-effort` / `--no-best-effort` | on | 带捕获就绪警告了结，或媒体缺失/未就绪失败 |\n| `--wait` / `--no-wait` | on | 每用户账户一本地渲染：等另一在跑或立即失败。环境：`HYPERFRAMES_RENDER_LOCK=off` 并行渲。 |\n| `--strict` / `--strict-all` | off | lint 错误失败，或错误加警告 |\n| `--strict-variables` | off | 未声明或类型错变量键失败而非警告 |\n| `--batch-concurrency` / `--batch-fail-fast` | `1` / off | batch 行并发、首败是否停余 |\n| `--debug` | off | 留中间并把诊断写 Producer `.debug` 目录 |\n| `--quiet` | off | 更少输出 |\n| `--skill` | — | 在用量遥测记哪作者工作流起此渲染 |",
          "并行起的渲染互抢 CPU/GPU 直到帧停落，故同用户账户第二个本地或 `--docker` 渲染等首个并说等的是哪（pid 与项目）。槽是该账户 HyperFrames 缓存文件夹里的锁文件，不同账户渲染不互排；设 `HYPERFRAMES_CACHE_DIR` 到共享文件夹给它们一槽。进程死的渲染自释槽。`--workers` 不受影响：它定唯一渲染内并行。",
          "低内存检测读**宿主** RAM，非 cgroup 或容器限，故容器化调用方——含 `--docker`——应显设 `PRODUCER_LOW_MEMORY_MODE`。",
          "渲染 Chrome 在 macOS、Windows、Linux 非 root 非容器用户保其沙箱。作为 root 跑、在 Docker、Podman、Kubernetes、AWS Lambda 与 Cloud Run、Linux 限非特权用户命名空间处（Ubuntu 23.10 及后）无之。沙箱 Linux 拉起仍失败时，渲染警告续跑无沙箱。`HYPERFRAMES_CHROME_SANDBOX=0` 恒无，`1` 要求：`1` 时 Chrome 拒起即败不 fallback。",
          "Chrome 只带用到的环境变量起：系统 path、home 与 temp 目录、locale 时区、显示与 session bus、字体、`LD_LIBRARY_PATH`、GPU 驱动设置（Mesa、Vulkan、NVIDIA）、代理与 CA 包，以及 Windows 与 macOS 系统变量。其他变量，如云凭据与 API key，留 CLI。Chrome 需的变量未透传时，在 `HYPERFRAMES_CHROME_ENV_PASSTHROUGH` 列其名逗号分隔，如 `HYPERFRAMES_CHROME_ENV_PASSTHROUGH=KRB5CCNAME,RADV_PERFTEST`。",
        ],
        codeBlocks: [
          {
            code: "# Fast iteration\nnpx hyperframes render --output output.mp4\n\n# Deterministic output\nnpx hyperframes render --docker --output output.mp4\n\n# Transparent, for overlays and lower thirds\nnpx hyperframes render --format webm --output overlay.webm\n\n# HLS VOD stream (output is a directory of playlists and .ts segments)\nnpx hyperframes render --format hls --output stream\n\nnpx hyperframes render --output output.mp4 --fps 60 --quality high\nnpx hyperframes render --gpu --output gpu.mp4",
            file: "bash",
          },
        ],
        id: "render",
        aliases: ["render-to-a-file"],
      },
      {
        h: "渲染超时时",
        p: "",
        paras: ["三独立预算任一过期，错误消息说哪。皆有环境 fallback，**毫秒**记，即使旗标不。"],
        codeBlocks: [],
        bullets: [
          "**页面不载。** `--browser-timeout` 是入口 HTML 的 Puppeteer 导航预算，旗标以**秒**记（默认 60，0.001–86400）。多视频、多字体、多资产请求合成限时达不到 `domcontentloaded` 时调大。环境：`PRODUCER_PAGE_NAVIGATION_TIMEOUT_MS`。",
          "**播放器不就绪。** 导航后 `window.__hf` 就绪另预算：`--player-ready-timeout`，毫秒，默认 45000。环境：`PRODUCER_PLAYER_READY_TIMEOUT_MS`。",
          "**单 CDP 调用卡。** `--protocol-timeout` 是 seek、paint、截图往返的 per-call 预算，毫秒，默认 300000。此即 `Runtime.callFunctionOn timed out` 与 `Target closed` 后面那。8 GB 及下宿主与资产重合成上调大。默认随输出像素面积自动缩，放至 30 分钟帽；显式值成地板并在此下停该缩。环境：`PRODUCER_PUPPETEER_PROTOCOL_TIMEOUT_MS`。",
        ],
        id: "when-a-render-times-out",
      },
      {
        id: "long-renders-and-the-capture-path",
        h: "长视频渲染与帧捕获路径",
        p: "捕获到的帧既可以随到随以流式管道喂入 FFmpeg，也可以先以原始 RGBA 形式落地到磁盘——后者占用为 `帧数 × 宽 × 高 × 4` 字节，在 1080p30 下大约每分钟 **25 GB**。对于单 worker 的 mp4/mov 渲染，如今**任意时长默认均直接走流式编码**：过去限制在四分钟的上限最初是为了防御整片级 FFmpeg 超时，现在超时检查改为了按逐帧计，因此旧上限不再适用。",
        paras: [
          "捕获到的帧既可以随到随以流式管道喂入 FFmpeg，也可以先以原始 RGBA 形式落地到磁盘——后者占用为 `帧数 × 宽 × 高 × 4` 字节，在 1080p30 下大约每分钟 **25 GB**。对于单 worker 的 mp4/mov 渲染，如今**任意时长默认均直接走流式编码**：过去限制在四分钟的上限最初是为了防御整片级 FFmpeg 超时，现在超时检查改为了按逐帧计，因此旧上限不再适用。",
          "只要满足走 BeginFrame 捕帧条件（Linux 上使用内置 `chrome-headless-shell`、DPR 1 且未强制截图模式），多 worker 的 mp4/mov 同样会直接流式编码。在 macOS 与 Windows 上，多 worker 捕获基于截图实现，默认仍会先将帧落盘，除非通过 `HF_CAPTURE_PARALLEL_STREAM=true` 主动开启并行流式管道。该并行流式路径如今会在进程池卡死或流式编码中途退出时，退回到单 worker 的全新截图会话自动重试，而不是直接让整次渲染失败；不过在错误率彻底追平磁盘路径前，它仍保持按需开启。",
          "在输出格式为 `png-sequence` 或 `gif`、涉及 HDR 或 Shader 转场分层、或者手动关闭流式编码时，渲染依然会走磁盘落盘路径。如果在预检（preflight）阶段就因为需要数十 GB 临时帧存储空间而失败，错误提示会指出触发落盘的具体条件以及如何让本次渲染避开写盘。提示给出的 `--workers 1` 方案仅针对“多 worker 会被迫落盘而单 worker 能直通流式”的场景（它会慢一些，因此仅作为该类渲染的兜底手段而非默认建议）；至于本来就写盘的 `png-sequence`、`gif` 或已禁用流式模式，就算用单 worker 也会落盘，此时请释放磁盘、改导出 mp4 或撤销关闭流式的设置。",
          "| 环境变量 | 默认值 | 作用说明 |\n| - | - | - |\n| `PRODUCER_ENABLE_STREAMING_ENCODE` | `true` | 设为 `false` 时将所有渲染强制切回磁盘暂存路径 |\n| `HF_CAPTURE_PARALLEL_STREAM` | BeginFrame 下开启 | 设为 `true` 同时为多 worker 截图捕获启用流式直传；设为 `false` 则完全禁用该流式路由 |\n| `PRODUCER_STREAMING_ENCODE_DURATION_CAP_ENABLED` | `false` | 设为 `true` 重新恢复下方的流式时长上限限制 |\n| `PRODUCER_STREAMING_ENCODE_MAX_DURATION_SECONDS` | `240` | 上限阈值秒数；仅当上方开关为 `true` 时生效（设为 `0`“永不超时”亦然） |",
        ],
      },
      {
        id: "segmented-capture",
        h: "分段捕获（Segmented capture）",
        p: "针对超长视频渲染，捕获阶段可以切分成固定长度的小段，每段由独立的 `ffmpeg` 进程各自编码后再以零重编码（stream-copy）拼接成片。与单一编码器全程流式相比虽然会多付出少许切换耗时，但换来三大优势：",
        paras: [
          "分段暂存文件存放于 `renders/.hf-segments/<hash>/`，该哈希涵盖了所有决定每段最终字节内容的因素；因此一旦修改了合成代码、帧率、分辨率、画质等级或分段帧数，都会重新启用新的目录，绝不会拿错误旧切片混拼。整片渲染成功后该目录会自动清理（除非传了 `--keep-segments`），而在失败后会故意保留现场，便于你下一次直接传 `--resume` 断点续传。",
          "目前仅 `mp4` 与 `mov` 支持分段渲染；`png-sequence`、`gif`、`webm`、HDR 与 Shader 转场保留原有流水线。",
          "默认情况下，开跑捕获前会先将每个源视频的所有帧全部抽解完；设置 `HF_VIDEO_FRAME_WINDOW=true` 后，每条分片只在自己启动时按需抽取当前区间真正露出的源帧，并在该分片收尾关闭后立即删除。开启前需了解以下特点：",
          "| 环境变量 | 默认值 | 作用说明 |\n| - | - | - |\n| `HF_SEGMENTED_CAPTURE` | 未设置 | 设为 `true` 对所有支持格式启用分段捕获；`false` 为总关闭开关 |\n| `HF_SEGMENTED_MIN_SECONDS` | 关闭 | 对达到至少该秒数时长的渲染自动分段；未设置则不会单纯按时长自动启用 |\n| `HF_SEGMENT_FRAMES` | `3000` | 每段包含的帧数（30 fps 下约 100 秒），最小 30 |\n| `HF_SEGMENT_BROWSER_RECYCLE` | `3` | 每处理 N 段重启一次无头浏览器进程；设为 `0` 表示全程复用同一浏览器会话 |\n| `HF_VIDEO_FRAME_WINDOW` | 未设置 | 设为 `true` 使每段仅抽取自己展示到的源帧并在结束后立即清理 |",
        ],
        bullets: [
          "**临时空间不再随总时长爆炸：** 中间产物是已编码的视频小段而非动辄上百 GB 的原始未压缩帧，任意时长都放得下。",
          "**Chrome 定时重启保精度：** 在分片边界主动重启无头浏览器，会话永远不会累积跑满数万帧进而诱发 Chrome 时钟/绘制漂移。",
          "**崩溃至多损毁当前一段：** 传 `--resume` 重跑时会在逐一复核已产出分片的完整性后直接复用前面已完成的成品段落，最终接出的文件与一次不停跑完在字节级别完全一致。",
          "*启用 `HF_VIDEO_FRAME_WINDOW` 时的注意项：* 各分段文件在拼接完成一刻即刻删掉（除非配合 `--keep-segments`），所以若在最后合并环节之后出错，`--resume` 需全量重捕；",
          "仅支持分段的 mp4 与 mov 走窗口抽帧；开启运动模糊、可变帧率（VFR）视频以及含 HDR 色彩变换的素材仍按全量抽取，并在渲染日志里标明拒绝原因与留作全抽的视频数；",
          "源帧磁盘峰值仅约 `worker 数 × HF_SEGMENT_FRAMES`（且仅针对支持窗口化的视频）；因跳过了复用抽取缓存，二次重新导出不会获得暖缓存加速。",
        ],
      },
      {
        id: "render-the-same-composition-with-different-content",
        h: "同一合成套用不同数据批量渲染",
        p: "在根合成节点上声明变量并在内部脚本读取，随后即可在每次渲染时覆盖不同的参数值。",
        paras: [
          "在根合成节点上声明变量并在内部脚本读取，随后即可在每次渲染时覆盖不同的参数值。",
          '```html index.html\n<html\n  data-composition-variables=\'[\n    {"id":"title","label":"Title","type":"string","default":"Hello"},\n    {"id":"theme","label":"Theme","type":"enum","options":[\n      {"value":"light","label":"Light"},\n      {"value":"dark","label":"Dark"}\n    ],"default":"light"}\n  ]\'\n>\n  <script>\n    const vars = window.__hyperframes.getVariables();\n    document.getElementById("hero").textContent = vars.title;\n    document.body.dataset.theme = vars.theme;\n  </script>\n</html>\n```',
          '```bash\n# 使用声明的默认值（预览界面同样读取这些默认值）\nnpx hyperframes render --output default.mp4\n\n# 覆盖部分字段；未传入的键继续回退使用默认值\nnpx hyperframes render --variables \'{"title":"Q4 Report","theme":"dark"}\' --output q4.mp4\n\nnpx hyperframes render --variables-file ./vars.json --output out.mp4\n```',
          "`getVariables()` 返回声明默认值与外部传入覆盖值合并后的最终对象，保证同一份工程在本地实时预览与批产渲染里行为一致。若要一次产出成百上千条个性化视频，传 `--batch` 即可按 JSON 数组里的每一行各渲染出一个文件。完整机制见[变量与模板](https://hyperframes.heygen.com/concepts/variables.md)。",
        ],
      },
      {
        id: "transparent-webm-for-overlays",
        h: "用于画面叠加层的透明 WebM",
        p: "`--format webm` 输出携带 Alpha 透明通道的 VP9 视频——这是制作透明字幕条与叠加挂件的标准网页容器格式。",
        paras: [
          "`--format webm` 输出携带 Alpha 透明通道的 VP9 视频——这是制作透明字幕条与叠加挂件的标准网页容器格式。",
          '```bash\nnpx hyperframes render --format webm --output captions.webm\n\nffmpeg -c:v libvpx-vp9 -i captions.webm -i background.mp4 \\\n  -filter_complex "[1:v][0:v]overlay=0:0" -y composited.mp4\n```',
          "[!TIP] 要让透明底真实保留下来，合成根元素的样式上必须设有 `background: transparent`。WebM 导出通道会在捕获期抓取 PNG 无损帧（而非 JPEG）以确保 Alpha 通道不丢失。",
          "全场景容器对比与 Premiere / Resolve 无损 MOV 做法请参阅[渲染指南](https://hyperframes.heygen.com/guides/rendering.md)。",
        ],
      },
      {
        id: "benchmark",
        h: "`benchmark`",
        p: "测试并找出适合当前这台机器的最佳渲染并发与参数组合。",
        paras: [
          "测试并找出适合当前这台机器的最佳渲染并发与参数组合。",
          "```bash\nnpx hyperframes benchmark [dir]\n```",
          "它会轮番实测多组配置（变化 fps、画质等级与 worker 数）并对比耗时与文件体积。通过 `--runs` 指定每组配置跑几轮（1–20，默认 3），加 `--json` 以 JSON 打印评测指标。",
        ],
      },
      {
        id: "keep-the-environment-healthy",
        h: "保持环境与缓存健康",
        p: "HyperFrames 将下载及构建出的运行环境资产（无头浏览器、各类本地 AI 模型、可选依赖包、字体与项目历史记录）保存在 `~/.cache/hyperframes` 下。可以通过设置绝对路径环境变量 `HYPERFRAMES_CACHE_DIR` 统一搬迁目录；之后后台预览记录、注册表清单缓存、本地目录搜索模型与目录索引以及宿主交互展示状态都会一并随之迁移，从而让只允许向项目空间/指定缓存盘写盘的受限沙箱环境也能完整跑通全流程。",
        paras: [
          "HyperFrames 将下载及构建出的运行环境资产（无头浏览器、各类本地 AI 模型、可选依赖包、字体与项目历史记录）保存在 `~/.cache/hyperframes` 下。可以通过设置绝对路径环境变量 `HYPERFRAMES_CACHE_DIR` 统一搬迁目录；之后后台预览记录、注册表清单缓存、本地目录搜索模型与目录索引以及宿主交互展示状态都会一并随之迁移，从而让只允许向项目空间/指定缓存盘写盘的受限沙箱环境也能完整跑通全流程。",
        ],
      },
      {
        id: "doctor",
        h: "`doctor`",
        p: "全面体检当前机器上跑通渲染与预览所需的一切依赖。",
        paras: [
          "全面体检当前机器上跑通渲染与预览所需的一切依赖。",
          "```bash\nnpx hyperframes doctor\nnpx hyperframes doctor --json\n```",
          "```text\nhyperframes doctor\n\n  ✓ Version          0.1.4 (latest)\n  ✓ CLI binary       npm global install · /usr/local/lib/node_modules/hyperframes/dist/cli.js\n  ✓ Node.js          v22.x (linux x64)\n  ✓ FFmpeg            7.x\n  ✓ FFprobe           7.x\n  ✓ Chrome            (system or cached)\n  ✓ Docker            24.x\n  ✓ Docker running    Running\n\n  ◇  All checks passed\n```",
          "报告项覆盖：CLI 版本号、当前执行文件来源及路径（全局 npm/pnpm/bun/Homebrew 安装、项目局部 `node_modules`、`npx` 或智能体插件）、Node.js、CPU、内存、磁盘、抽帧缓存路径、归档解压工具、Linux 下的 `/dev/shm`、运行环境变量、whisper-cpp、本地 TTS 与 BGM 模型、FFmpeg、FFprobe、Chrome 以及 Docker。",
          "建议重点留意 **frames cache（帧缓存）** 一行：它会列出实际生效的缓存目录、剩余可用空间以及位置是否来源于 `HYPERFRAMES_EXTRACT_CACHE_DIR`。若可用空间不足 **2 GB** 将直接报失败，因为长视频抽取原始帧很快就会打满磁盘。需要改到更大容量分区时，设置该环境变量或传递 [`render --frames-cache-dir`](#render)。",
          "**如何在 CI 里安全卡点：** `doctor --json` 只要自身命令成功跑完就永远返回退出码 `0`，哪怕检测到环境缺漏或版本落后也是如此——真正的健康状态落在返回 JSON 载荷的 `ok` 字段中，避免刚发布一个新 CLI 版本就把旧流水线因为版本检测提示给意外炸红。请在流水线上依据 JSON 字段卡点：",
          "```bash\nhyperframes doctor --json | jq -e '.ok' > /dev/null || handle_failure\n```",
          "在 JSON 模式下，`detail` 与 `hint` 字段里的个人主目录路径会自动脱敏替换为字面量 `$HOME`，方便直接粘贴进 Issue 或发送给智能体排查。",
        ],
      },
      {
        id: "clean",
        h: "`clean`",
        p: "查找并安全清理 HyperFrames 遗留在磁盘上的冗余缓存与临时产物。",
        paras: [
          "查找并安全清理 HyperFrames 遗留在磁盘上的冗余缓存与临时产物。",
          "```bash\nnpx hyperframes clean --dry-run   # 仅列出待清理项，不删任何文件\nnpx hyperframes clean\nnpx hyperframes clean --snapshots # 一并清除 snapshots/ 与保存的 check 报告\nnpx hyperframes clean --json\n```",
          "它会检查当前项目目录（不递归扫下级子目录）及 Studio 历史记录过的所有已知项目目录，并回收以下内容：",
          "`snapshots/` 文件夹以及 `.hyperframes/artifacts/` 下留存的快照与 check 报告也会被列作可回收空间，但只有显式传 `--snapshots` 时才会删除。你的成品渲染视频、项目源码、浏览器安装包以及本地 AI 模型永远不会被 `clean` 删掉。",
        ],
        bullets: [
          "被强行中断或崩溃遗留的渲染抽帧与暂存工作目录（正在运行中的渲染现场不受影响）；",
          "`--debug` 调试渲染产出且已超过 6 小时无新写入的工作目录；",
          "已从磁盘删除不存在的老项目的残留历史；",
          "超过一小时未被使用过的视频抽帧缓存与代理转码片（需要时仍可自动重建）。",
        ],
      },
      {
        id: "info-and-compositions",
        h: "`info` 与 `compositions`",
        p: "`npx hyperframes info [dir]` 打印项目摘要信息：项目名、分辨率、总时长、各类型元素计数、轨道数与资产总大小；`npx hyperframes compositions` 列出项目内全部合成及其 ID、时长、分辨率与元素个数，两者均支持 `--json`。",
        paras: [
          "`npx hyperframes info [dir]` 打印项目摘要信息：项目名、分辨率、总时长、各类型元素计数、轨道数与资产总大小；`npx hyperframes compositions` 列出项目内全部合成及其 ID、时长、分辨率与元素个数，两者均支持 `--json`。",
          "加入 `--media --json` 运行 `npx hyperframes info --media --json` 还会额外返回 `heard` 字段：列出渲染器按整部成片时钟听到的所有音频与含声剪辑（含子场景），分别带 `src`、`start`、`end`（截停点或随源媒体播完点；`0` 表示一直放到媒体末尾）、`mediaStart`、`playbackRate`、`volume` 和 `type`。",
        ],
      },
      {
        id: "update",
        h: "`update`",
        p: "一键同步更新 HyperFrames CLI 本体以及配套的智能体技能（skills）。",
        paras: [
          "```bash\nnpx hyperframes update --check          # 仅对比报告 CLI 与技能是否过期，不做任何安装\nnpx hyperframes update --check --json   # 同上，供智能体结构化读取\nnpx hyperframes update --yes            # 无确认直接更新 CLI 与对应版本技能\n```",
          "`update` 会跳过两小时缓存向 npm 查询最新 CLI 版本，同时按照新装 CLI 自身的发布 tag 核对已安装的智能体技能清单。带 `--check` 时只检查不改动；直接执行更新时，它会按 `upgrade --yes` 相同的安装方式（例如全球包就走包管理器、`npx` 则提示改跑 `npx hyperframes@latest`、项目局部依赖则运行如 `npm install hyperframes@0.9.8`）更新 CLI，紧接着再把技能同步到该已安装 CLI 所对应的发布版本号（Homebrew 若暂滞后于 npm 会读回实际落盘版本，未变时标为 `unchanged`）。",
          "在无人值守环境或传了 `--json` 但未附 `--yes`/`--check` 时，命令会直接返回状态码 `2` 并提示“是否升级应由人决定；仅查询状态请使用 `update --check`”。若由智能体插件宿主托管，`update --check` 负责检查并提示，`update` 本身则返回退出码 `1` 与 `plugin_managed` 交由插件市场更新；设 `HYPERFRAMES_SKIP_SKILLS=1` 则跳过技能步骤。若连不上 npm，文本报告会直说 “npm registry not reached”，不会误报你手里是最新版本。",
          "`--check --json` 返回结构示例：",
          '```json\n{\n  "cli": {\n    "current": "0.9.5",\n    "latest": "0.9.8",\n    "updateAvailable": true,\n    "checkedAt": "2026-11-03T08:00:00.000Z",\n    "install": { "channel": "npm", "path": "/usr/local/lib/node_modules/hyperframes/dist/cli.js" },\n    "command": "npm install -g hyperframes@0.9.8"\n  },\n  "skills": {\n    "status": "checked",\n    "ref": "v0.9.5",\n    "location": "/Users/me/.claude/skills",\n    "updateAvailable": true,\n    "outdated": 2,\n    "missing": 0,\n    "command": "hyperframes update"\n  },\n  "_meta": {\n    "version": "0.9.5",\n    "latestVersion": "0.9.8",\n    "updateAvailable": true,\n    "checkedAt": "2026-11-03T08:00:00.000Z",\n    "skillsOutdated": 2,\n    "skillsMissing": 0\n  }\n}\n```',
          "当 npm 未返回数据时 `cli.checkedAt` 为 `null`；`install.channel` 可能为 `npm`、`pnpm`、`bun`、`brew`、`npx`、`project`、`workspace`、`plugin` 或 `unknown`。",
        ],
      },
      {
        id: "upgrade",
        h: "`upgrade`",
        p: "单独比对或升级已安装的 HyperFrames CLI 版本。",
        paras: [
          "```bash\nnpx hyperframes upgrade\nnpx hyperframes upgrade --check         # 只检查并立即退出，不提示交互\nnpx hyperframes upgrade --check --json  # 面向智能体的 JSON 检查输出\nnpx hyperframes upgrade --yes           # 免交互自动升级全局安装\nnpx hyperframes upgrade --project       # 同步升级 package.json 里固定的 CLI 版本脚本\n```",
          "`upgrade` 将本地版本与 npm 对比：`--check` 仅作判断退出；`--yes`/`-y` 针对识别到的全局包直接执行升级（否则打印对应包管理命令；非交互模式若缺 `--yes`/`--check` 则退回 `2`）；`--project [dir]` 会改写项目 `package.json` 中的 `hyperframes@<version>` 锁定版本。",
          "`--check --json` 输出如下：",
          '```json\n{\n  "current": "0.7.84",\n  "latest": "0.7.85",\n  "updateAvailable": true,\n  "_meta": { "version": "0.7.84", "latestVersion": "0.7.85", "updateAvailable": true }\n}\n```',
        ],
      },
      {
        id: "browser",
        h: "`browser`",
        p: "管理本地渲染所用的无头 Chrome 浏览器。",
        paras: [
          "管理本地渲染所用的无头 Chrome 浏览器。",
          "```bash\nnpx hyperframes browser ensure           # 查找本地 Chrome；找不到时下载缓存版本\nnpx hyperframes browser ensure --force   # 废弃残余缓存并强制重新拉取完整 Chrome\nnpx hyperframes browser path             # 仅打印可执行文件绝对路径\nnpx hyperframes browser clear            # 删除已缓存下载的 Chrome\n```",
          "`path` 仅输出路径本身，方便直接组合进命令代换：`$(npx hyperframes browser path)`。下载曾被网络打断留下半截残包时，加 `--force` 强制重拉。",
        ],
      },
      {
        id: "docs",
        h: "`docs`",
        p: "直接在终端命令行中速查核心文档主题。",
        paras: [
          "直接在终端命令行中速查核心文档主题。",
          "```bash\nnpx hyperframes docs [topic]\n```",
          "支持主题：`data-attributes`、`examples`、`rendering`、`gsap`、`troubleshooting`、`compositions`、`motion-blur`。不带参数执行可列出完整目录。",
        ],
      },
      {
        id: "feedback",
        h: "`feedback`",
        p: "提交使用体验评分与改进建议。它走同一套使用遥测信道：在未登录 HeyGen 账号前保持匿名，登录后关联至当前用户；若由其它集成宿主发起 CLI，还可由宿主附带当前用户邮箱。",
        paras: [
          "提交使用体验评分与改进建议。它走同一套使用遥测信道：在未登录 HeyGen 账号前保持匿名，登录后关联至当前用户；若由其它集成宿主发起 CLI，还可由宿主附带当前用户邮箱。",
          '```bash\nnpx hyperframes feedback --rating 10\nnpx hyperframes feedback --rating 7 --comment "render succeeded but GSAP timeline didn\'t animate"\nnpx hyperframes feedback --rating 3 --comment "GSAP timeline froze on seek" --file-issue\nnpx hyperframes feedback --comment "MISSING FEATURE: trim a clip from the timeline | WORKAROUND: none"\n```',
          "`--rating` 范围为 `0–10`。`--comment` 用于填写自由文本描述；不传 `--rating` 只传 `--comment` 会发出一条**不计分的功能需求或宿主体验问题报告**，不会拉低评分指标。`--source person` 或 `--source agent` 标明该报告出自开发者本人还是智能体（`--search-miss` 报告两者均不携带）。传入 `--file-issue` 会附带拉起一篇 GitHub Issue 草稿，`--dir` 指定用于上传复现的工程目录（默认当前目录），脚本自动化中可加 `--yes`/`-y` 跳过交互确认。",
          "使用 `--file-issue` 时，CLI 会在征得你明确同意的前提下把一份最小复现工程发往公共 URL，并在浏览器为你预填 `bug` Issue 表单供人工复核确认提交（全程无需 GitHub Token 或私有后端，详见[故障排除与反馈](https://hyperframes.heygen.com/help.md#report-a-reproducible-bug)）。",
          "AI 智能体也可以在完成一次渲染后主动代为回报体验；数据采集边界详见[关于反馈数据](https://hyperframes.heygen.com/help.md#about-feedback-data)。宿主可通过环境变量 `HYPERFRAMES_FEEDBACK_EMAIL` 附上已登录用户邮箱（绝不能通过 CLI 标志传，也不读取工程 `.env`；仅作反馈联系回邮之用而不进遥测指标，也不作为强身份校验凭据）。关闭遥测后会打印 `Telemetry is disabled. Feedback not sent.` 并干净退出。",
        ],
      },
      {
        id: "telemetry",
        h: "`telemetry`",
        p: "查看或开关 HyperFrames CLI 匿名诊断与性能遥测。",
        paras: [
          "```bash\nnpx hyperframes telemetry enable\nnpx hyperframes telemetry disable\nnpx hyperframes telemetry status\nnpx hyperframes telemetry status --json\n```",
          "在智能体或脚本中可用 `telemetry status --json` 查询，返回 `enabled`、`source`、`configPath`、`statePath` 与 `commandCount` 字段；仅 `status` 支持 `--json`。",
          "遥测仅收集：执行过的子命令名称、渲染耗能与关键节点耗时/错误名称、浏览器诊断汇总计数、浏览器启动用时与补间数量、视频抽帧工作量统计（抽帧数与 VFR 预检）、运动模糊场景的元素构成聚合计数（动画元素、视频、iframe、canvas、自定义元素等）、选用模板、经由 `add` 或 Studio 安装的积木/组件名、上次后台检查时已装技能名及版本滞后状态、调起 `reverse start`/`templates pull` 的技能（及防重算重试的 HeyGen 会话 ID），以及系统粗粒度指纹（操作系统、内核、CPU/内存规模、gVisor/Docker 等容器标识，及触发 CLI 的编程智能体类别如 `claude_code`、`codex`、`cursor`）。错误与关键节点信息里的本地绝对路径和 URL 查询串均会被抹除；工程名、视频内容本身及环境变量值**从不收集**（只限 `AGENT`、`AI_AGENT`、`TERM_PROGRAM` 的短标识，及宿主应用标记 `HYPERFRAMES_CLIENT` 格式 `<app>/<version>/<channel>`）。",
          "本地 Studio 分享面板同时记录额度升级点击（工程上限或分享权限）、可见范围选择、可编辑源码勾选意图及分享动作；这些事件仅含固定分类标签与布尔值，绝不包含任何分享链接、项目路径或受邀者邮箱。本地 Studio 与 `hyperframes share` 的升级 Pro 入口会附加 `?entry=local_studio_share` 或 `?from=cli&entry=cli_share` 以统计转化来源，同样遵从全部遥测关闭开关。",
          "登录前一切上报完全匿名；**一旦执行 `hyperframes auth login` 登录即不再匿名**，后续事件将绑定到从你的 HeyGen 用户名派生的专属账户 ID（与 Web 端及 Desktop 端一致）并记录账户邮箱与用户名。匿名阶段累计数据会合并进来，调用 `media-use` 也采用同等账号归因机制；设置 `HYPERFRAMES_NO_TELEMETRY=1`、`DO_NOT_TRACK=1` 或执行上方 `disable` 命令即可立即全量关停。",
          "[!NOTE] 停用遥测同样会使当前客户端自动退出[金丝雀灰度发布（Canary rollouts）](https://hyperframes.heygen.com/contributing/canary-rollouts.md)——由于灰度对比实验需要依据遥测指标验证稳定度，没有任何信号回传的安装环境不会被选进任何按比例放量人群。",
        ],
      },
      {
        id: "skills",
        h: "`skills`",
        p: "安装或刷新供 AI 编程工具读取的 HyperFrames 视频制作技能包。",
        paras: [
          "安装或刷新供 AI 编程工具读取的 HyperFrames 视频制作技能包。",
          "```bash\n# 安装完整已发布技能全集并链接到本机已安装的智能体宿主\nnpx hyperframes skills\n\n# 检查当前已安装技能状态\nnpx hyperframes skills check\nnpx hyperframes skills check --json\n\n# 刷新核心基础集及本机已安装的技能\nnpx hyperframes skills update\n\n# 刷新的同时按需追加安装某项专长技能\nnpx hyperframes skills update slideshow\n```",
          "直接运行 `skills` 会装齐全部技能；`skills update` 尊重刻意保持精简的局部安装——只刷新核心套装与你此前已装好的部分，不会擅自新增其它领域技能（除非你显式在后面点名，例如 `slideshow`）。`check` 和 `update` 都接受 `--json`，`check` 还支持 `--dir` 与 `--source`。`update` 永不删除已有技能，若检测到某个技能归属其它第三方发布者（即便重名）也会保持原样不覆盖。",
          "若技能交由 CI、测试或外部锁定脚本统一托管，设置 `HYPERFRAMES_SKIP_SKILLS=1` 即可让 `skills` 与 `skills update` 直接带一句提示正常返回 0 退出，不动任何现有技能目录。",
          "CLI 会拉取与自身版本号严格匹配的 Git Tag（`v<version>`）中的技能文件（开发版则取 `main`），并将其链接到已探测到的兼容智能体客户端。新项目初始化执行 `init` 结束时，若未检测到核心基础技能会自动补齐缺失核心集，但绝不会改写或删除已安装的旧技能；刷新已装技能请专门运行 `skills update`。",
        ],
      },
      {
        id: "fatal-active-post-checkout-hook-found-during-git-clone",
        h: "`fatal: active post-checkout hook found during git clone`",
        p: "如果系统全局安装了 Git LFS，Git 2.45+ 在 `git clone` 阶段默认禁止运行活动中的 `post-checkout` 钩子——上游通用 `skills` 工具内部拉库时便可能触发如下报错：",
        paras: [
          "如果系统全局安装了 Git LFS，Git 2.45+ 在 `git clone` 阶段默认禁止运行活动中的 `post-checkout` 钩子——上游通用 `skills` 工具内部拉库时便可能触发如下报错：",
          "```text\n■  Failed to clone repository\nfatal: active `post-checkout` hook found during `git clone`\n└  Installation failed\n```",
          "使用内置的 `hyperframes skills` 时框架已经自动处理了这一问题，无需任何额外环境变量。",
          "如果你是手动直接调用上游第三方 `skills` CLI，请在命令前显式放行：",
          "```bash\nGIT_CLONE_PROTECTION_ACTIVE=0 npx skills add heygen-com/hyperframes\n```",
        ],
      },
      {
        id: "usage",
        h: "`usage`",
        p: "查询当前所用 AI 编程订阅（Claude Code、Codex 或 Grok）还剩多少配额，以便智能体在开工制作复杂视频前合理规划分镜体量与耗时。HyperFrames 核心技能会在片头启动及渲染前自动检查该数值。",
        paras: [
          "查询当前所用 AI 编程订阅（Claude Code、Codex 或 Grok）还剩多少配额，以便智能体在开工制作复杂视频前合理规划分镜体量与耗时。HyperFrames 核心技能会在片头启动及渲染前自动检查该数值。",
          "```bash\nnpx hyperframes usage\nnpx hyperframes usage --json\nnpx hyperframes usage --harness codex --json\n```",
          "| 标志 | 说明 |\n| - | - |\n| `--harness` | 指定宿主 `claude-code`、`codex` 或 `grok`。默认按当前环境变量（`CLAUDECODE`、`CODEX_THREAD_ID`、`GROK_AGENT=1`）自动探测 |\n| `--json` | 将查询结果打印为单行 JSON |",
          '```json\n{\n  "status": "known",\n  "harness": "claude-code",\n  "session": { "usedPercent": 42, "remainingPercent": 58, "resetsAt": "2026-10-20T18:00:00Z" },\n  "weekly": { "usedPercent": 20, "remainingPercent": 80, "resetsAt": "2026-10-24T09:00:00Z" },\n  "spend": null,\n  "planTier": "max"\n}\n```',
          "其中 `session` 表示短时间滑动窗口（Claude Code 与 Codex 上均为 5 小时），`weekly` 表示周限额；订阅套餐未设对应窗口时为 `null`（Grok 仅含 `weekly`）；按金额计费的 Claude Code 企业套餐还会带 `spend` 表示计费周期花费比例；`planTier` 则由提供商返回订阅档位名称。",
          '若无法探测或查询失败，不会胡乱猜测，而是明确回报 `Usage unknown (no_subscription_login).` 或 `{"status":"unknown","reason":"no_subscription_login"}`（其它可能 reason：`expired_login`、`unsupported_auth`（如 Claude Code 使用 API Key 计费）、`unsupported_harness`、`usage_request_failed` 与 `http_<status>`）。两种情况下命令本身均返回退出码 `0`，脚本需判断 payload 内的 `status`。',
          "该命令只读取智能体本机已有的登录凭据位置（Claude Code 读 macOS Keychain 或 `~/.claude/.credentials.json`，Codex 读 `~/.codex/auth.json`，Grok 读 `~/.grok/auth.json`，亦受 `CLAUDE_CONFIG_DIR`、`CODEX_HOME`、`GROK_HOME`、`GROK_AUTH_PATH` 影响）；**绝不刷新、改写或打印任何令牌明文**，令牌仅发送至各自提供商官方配额接口；本命令不发送遥测也不触发版本更新检查。返回数字仅为实时快照，不会预扣额度，也不代表下条视频的实际算力预估。",
        ],
      },
      {
        id: "billing",
        h: "`billing`",
        p: "在浏览器中直接唤起 HyperFrames 方案订阅页（`subscribe`）或独立叠加积分充值页（`add-credits`，与套餐每月固定赠送积分分开消耗），并阻塞等待账户余额变化后自动恢复返回，让智能体长流程能够无需人工反复重输断点继续执行。",
        paras: [
          "在浏览器中直接唤起 HyperFrames 方案订阅页（`subscribe`）或独立叠加积分充值页（`add-credits`，与套餐每月固定赠送积分分开消耗），并阻塞等待账户余额变化后自动恢复返回，让智能体长流程能够无需人工反复重输断点继续执行。目标页面位于 `hyperframes.studio`（亦可通过 `HYPERFRAMES_PLANS_URL` 与 `HYPERFRAMES_CREDITS_URL` 重定向）。",
          "```bash\nnpx hyperframes billing subscribe\nnpx hyperframes billing add-credits --needed 180\n```",
          "| 标志 | 说明 |\n| - | - |\n| `--needed` | 下一步等待操作所需积分数；`add-credits` 会轮询至余额满足该门槛后返回 |\n| `--feature` | 触发本次购买的来源特性名，用于归因记录 |\n| `--session` | 配合 `--feature` 记录归属此次购买的会话 ID |\n| `--tool` | 页面上展示给用户看、当前正在等待付费恢复的步骤工具名 |\n| `--timeout` | 最长等待轮询秒数（默认 `600`） |",
        ],
      },
      {
        id: "templates",
        h: "`templates`",
        p: "为持有 HyperFrames Pro 账号的项目拉取风格化完整工程模板到 `templates/<slug>/` 目录，例如 `collage-explainer`、`finance-explainer`、`animated-science-explainer`、`3d-brand-explainer` 与 `3d-true-crime`。拉取模板**不消耗任何积分**，且目录若已存在则保持不动。",
        paras: [
          "为持有 HyperFrames Pro 账号的项目拉取风格化完整工程模板到 `templates/<slug>/` 目录，例如 `collage-explainer`、`finance-explainer`、`animated-science-explainer`、`3d-brand-explainer` 与 `3d-true-crime`。拉取模板**不消耗任何积分**，且目录若已存在则保持不动。",
          "```bash\nnpx hyperframes templates pull collage-explainer\n```",
          "| 标志 | 说明 |\n| - | - |\n| `--dir` | 目标工程目录（默认当前目录） |",
        ],
      },
      {
        id: "figma-and-events",
        h: "`figma` 与 `events`",
        p: "`npx hyperframes figma` 通过 Figma REST API 执行资源导入，包含三大子命令：`asset`（导出位图或 SVG）、`tokens`（拉取设计变量与色板）和 `component`（导入可编辑组件）。不带参数执行可看完整帮助，配置细节见 [Figma 集成指南](https://hyperframes.heygen.com/guides/figma.md)。",
        paras: [
          "`npx hyperframes figma` 通过 Figma REST API 执行资源导入，包含三大子命令：`asset`（导出位图或 SVG）、`tokens`（拉取设计变量与色板）和 `component`（导入可编辑组件）。不带参数执行可看完整帮助，配置细节见 [Figma 集成指南](https://hyperframes.heygen.com/guides/figma.md)。",
          "`npx hyperframes events` 是提供给已安装工作流技能内部发送执行事件的辅助指令（`--skill`、`--event`、`--outcome`）。与 [`telemetry`](#telemetry) 规则一致，未登录前全部匿名，一般不需用户手动敲击调用。",
        ],
      },
      {
        id: "hyperframes-auth",
        h: "hyperframes auth（认证管理）",
        p: "通过专用的 HyperFrames OAuth 客户端登录你的 HeyGen 账号。凭据以 `0600` 权限单独存放在 `~/.hyperframes/credentials` 下，与通用 `heygen` CLI 完全独立；旧版本共享登录状态升级后需要用新命令重登一次。",
        paras: [
          "通过专用的 HyperFrames OAuth 客户端登录你的 HeyGen 账号。凭据以 `0600` 权限单独存放在 `~/.hyperframes/credentials` 下，与通用 `heygen` CLI 完全独立；旧版本共享登录状态升级后需要用新命令重登一次。",
          "运行时的凭据解析按以下优先级从高到低、命中即止：",
          "1. `HEYGEN_ACCESS_TOKEN`（宿主应用直接注入的 OAuth 访问令牌；只使用，不刷新也不落盘）；",
          "2. 保存在 `~/.hyperframes/credentials` 中的 `hyperframes auth login` 登录会话（若已过期会尝试先自动刷新）；",
          "3. `HEYGEN_API_KEY`；",
          "4. `HYPERFRAMES_API_KEY`（同上，HyperFrames 专用别名）；",
          "5. 通过 `hyperframes auth login --api-key` 手动保存过的 API Key。",
          "已登录的交互式 OAuth 会话优先于环境变量里的 API Key；仅当 HeyGen 服务器拒绝刷新该会话，或者通过 `HEYGEN_API_URL` / `HEYGEN_API_BASE` 指向了宿主私有网关时，才会自动回退使用环境变量 Key。若已登录又临时想强制切回环境变量 Key，可执行 `hyperframes auth logout` 退出；使用 `auth status` 可随时确认当前生效的是哪份凭据。",
        ],
      },
      {
        id: "auth-login",
        h: "`auth login`",
        p: "在浏览器中发起 OAuth 授权登录：",
        paras: [
          "在浏览器中发起 OAuth 授权登录：",
          "```bash\nhyperframes auth login\n```",
          "CLI 最长会等待 60 分钟，以便你在浏览器里顺利完成注册登录乃至选择套餐并结账；按 `Ctrl+C` 可随时中止，超时后重跑即可。如果在 SSH 远程主机或无浏览器环境下无法打开本机回环页，请加设备码登录参数 `hyperframes auth login --device`。",
          "如果打算长期使用服务端自动化用的 API Key，则传入 `--api-key`。落盘前 CLI 会调用 `GET /v3/users/me` 实测该 Key 有效性，确保无效密钥不会写入磁盘：",
          '```bash\n# 安全隐藏回显的交互式输入\nhyperframes auth login --api-key\n\n# 通过标准输入喂入（适合 CI 流水线）\necho "$HEYGEN_API_KEY" | hyperframes auth login --api-key\n```',
        ],
      },
      {
        id: "auth-status",
        h: "`auth status`",
        p: "展示当前生效凭据的来源、认证方式以及核实通过的账户与计费摘要。当无可用配置或服务器拒绝当前凭据时返回非零退出码，方便脚本在启动前检测登录态。",
        paras: [
          "展示当前生效凭据的来源、认证方式以及核实通过的账户与计费摘要。当无可用配置或服务器拒绝当前凭据时返回非零退出码，方便脚本在启动前检测登录态。",
          "```bash\nhyperframes auth status\nhyperframes auth status --json\n```",
        ],
      },
      {
        id: "auth-refresh",
        h: "`auth refresh`",
        p: "强制立即刷新存储在本地的 OAuth 访问令牌（仅适用于 OAuth 会话，不适用于 API Key）。",
        paras: [
          "强制立即刷新存储在本地的 OAuth 访问令牌（仅适用于 OAuth 会话，不适用于 API Key）。",
          "```bash\nhyperframes auth refresh\n```",
        ],
      },
      {
        id: "auth-logout",
        h: "`auth logout`",
        p: "移除已存储的凭据信息（TTY 交互终端下会先提示确认）。",
        paras: [
          "移除已存储的凭据信息（TTY 交互终端下会先提示确认）。",
          "```bash\nhyperframes auth logout\nhyperframes auth logout --keep-api-key   # 仅注销 OAuth 会话，保留 API Key\nhyperframes auth logout --yes            # 跳过交互确认提示\n```",
        ],
      },
      {
        id: "environment-variables",
        h: "环境变量",
        p: "控制认证、接口网关与配置目录的核心环境变量一览：",
        paras: [
          "| 变量名 | 说明 |\n| - | - |\n| `HEYGEN_API_KEY` | 无主动登录会话时使用的 API 密钥；优先级高于 `--api-key` 落盘文件 |\n| `HYPERFRAMES_API_KEY` | `HEYGEN_API_KEY` 的专用别名 |\n| `HEYGEN_ACCESS_TOKEN` | 由宿主注入的 OAuth 访问令牌；优先级最高且不会持久化或自动刷新 |\n| `HEYGEN_API_URL` | API 接口基址（默认 `https://api.heygen.com`） |\n| `HYPERFRAMES_CONFIG_DIR` | 配置根路径：存放凭据、遥测与升级设置及项目绑定记录（默认 `~/.hyperframes`） |\n| `HYPERFRAMES_ENV` | `prod`（默认）或 `dev`；切换为 `dev` 时使用独立凭据目录，网关和客户端可通过 `HEYGEN_API_URL` 与 `HYPERFRAMES_OAUTH_*` 覆写 |\n| `HYPERFRAMES_OAUTH_CLIENT_ID` | 覆写默认选用的公共 OAuth Client ID |",
          "其它外接大模型及媒体备选接口所需的环境变量（例如用于语音/配乐回退生成的 ElevenLabs 与 Gemini、用于网页采集分析的 OpenRouter 与 Gemini）及技能调用优先级，请参阅[认证与 API 密钥指南](https://hyperframes.heygen.com/guides/authentication.md)。",
        ],
      },
      {
        id: "hyperframes-cloud",
        h: "hyperframes cloud（云端托管渲染）",
        p: "直接在 HeyGen 托管的云端集群完成无头渲染——无需在本地维护 Chrome、FFmpeg 或部署 AWS 栈。只需登录一次，同一份登录会话即可驱动全套云渲染命令。",
        paras: [
          "直接在 HeyGen 托管的云端集群完成无头渲染——无需在本地维护 Chrome、FFmpeg 或部署 AWS 栈。只需登录一次，同一份登录会话即可驱动全套云渲染命令。",
          "```bash\nhyperframes auth login                          # 仅需执行一次\nhyperframes cloud render ./my-video             # 自动打包、上传、轮询并拉回成片\nhyperframes cloud render ./my-video --no-wait   # 提交后立即打印 render_id 退出\nhyperframes cloud list                          # 查看近期云端渲染列表\n```",
        ],
      },
      {
        id: "cloud-render-projectdir",
        h: "`cloud render [<projectDir>]`",
        p: "一站式云端渲染：自动压缩当前项目、经直传 S3 资产通道上传、提交 `POST /v3/hyperframes/renders`、轮询 `GET /v3/hyperframes/renders/{id}` 直到结束并下载成品视频至本地磁盘。",
        paras: [
          "一站式云端渲染：自动压缩当前项目、经直传 S3 资产通道上传、提交 `POST /v3/hyperframes/renders`、轮询 `GET /v3/hyperframes/renders/{id}` 直到结束并下载成品视频至本地磁盘。",
          "打包生成的压缩包会自动排除根目录 `renders` 与 `snapshots`、`.git`、`node_modules`、`dist`、`.next`、`coverage`、以 `.` 开头的隐藏文件以及 `.hyperframesignore` 所匹配的条目（后者语法同 `.gitignore`，且同时作用于 `hyperframes publish` 及项目全局 lint 范围；编写时请务必克制收敛，避免误忽略按变量动态选取但无静态直接引用的资产）。处于任何深度的环境文件（`.env`、`.env.*`、`.envrc`）以及 Studio 私有状态 `.hyperframes/` **永远不会打包上传**（即便被反写规整包含进去也会以 `private` 原因跳过）。",
          "项目中通过静态路径引用且体积达到 **5 MB 及以上**的媒体文件会在压缩打包前先行通过 HeyGen 资产服务单独上传，接着只把压缩包内 HTML/CSS/JS/JSON 中的指向改成资产公网 URL（**不会改动本地原工程文件**）。资产 URL 为公开无签名链接并按内容哈希缓存，二次渲染仅上传真正变过的大素材。资产 API 不直接支持的媒体格式会在本机预先由 FFmpeg 转制：不规范封装的视频（如 MKV 或超 200 MB）及音频（如 FLAC、M4A）做视觉无损转码，AVIF 等静图转 PNG，主入口中 ≥5 MB 动图转制为可控跳转视频；需转码的视频或音频还会先按入口合成真正播放区间（前后各多留 0.5 s 余量）做粗裁并对齐时间偏移。而子合成内部媒体、循环播放片、`data-var-src` 动态片及脚本动态组装路径保留原始长度或留在 zip 包内。",
          "整个压缩包必须小于直传上限 **200 MB**，超出时会在上传前中止并点名包内最大几个文件。建议先跑一次 `hyperframes cloud render --dry-run` 离线查看上传媒体与打包后总大小；确有冗余文件时再加进 `.hyperframesignore`。",
          "若合成引用了项目根目录外部的文件，仅图像、视频、音频、字体及 CSS 五类受允许后缀（`.ts`/`.mts` 仅当文件头确认为 MPEG 传输流才算视频，不会误打包 TypeScript 源码）会被收集打包；脚本/Lottie JSON/PDF 等非媒体外链、隐私目录及导入工程衍生出的外部路径会被拒之门外并打印告警（想包含它请将文件拷贝入项目文件夹内）。`--json` 下将以 `left_out`（含 `file`、`reference`、`path`、`reason`: `blocklisted`/`received`/`file_type`/`private`、`levels_up`）以及 `outside_files` 明确清单展示。",
          "渲染核心参数与本地 `hyperframes render` 一致：",
          "| 参数 | 默认值 | 说明 |\n| - | - | - |\n| `--fps` | `30` | 整数帧率（1–240） |\n| `--quality` | `standard` | `draft`、`standard` 或 `high` |\n| `--format` | `mp4` | `mp4`、`webm` 或 `mov` |\n| `--resolution` | `1080p` | `1080p` 或 `4k`；**注意 4k 按 1.5 倍计费** |\n| `--aspect-ratio` | 自动识别 | 自动读取本地工程 `data-width` / `data-height`，通常不需手工指定。在 `1080p` 下严格保留原画布实际尺寸比例（如 `1920×960` 输出仍为 `1920×960`）；`4k` 仅放行 `16:9`、`9:16` 与 `1:1` 三类常见画幅，其余比例会在上传前即拒接 |\n| `--composition` / `-c` | `index.html` | 压缩包内充当主入口的 HTML 文件 |\n| `--variables` | — | 内联 JSON 覆盖 `data-composition-variables` 变量值 |\n| `--variables-file` | — | 从 JSON 文件读取变量覆盖 |\n| `--strict-variables` | 关闭 | 传了未声明或类型错误的变量时直接失败报错 |\n| `--title` | — | 便于查询识别的自由备注标题 |\n| `--output` / `-o` | `renders/<render_id>.<ext>` | 下载成品本地保存路径 |\n| `--dry-run` | 关闭 | 仅构建并审计待传压缩包，不鉴权、不上传、不启动云端任务 |",
          "生命周期与任务控制参数：",
          "| 参数 | 说明 |\n| - | - |\n| `--no-wait` | 提交任务后立即向 stdout 打印 `render_id` 并退出 |\n| `--callback-url` | 渲染终止（成功或失败）后回调的 HTTPS Webhook URL（无论 CLI 是否在轮询均会触发，极适合配合 `--no-wait` 异步调度） |\n| `--callback-id` | 透传进 Webhook 回调载荷中的追踪 ID |\n| `--asset-id` | 跳过打包上传直接重用已上传资产 ID 提交（与项目目录和 `--url` 互斥） |\n| `--url` | 直接提交公开可下载的 HTTPS 压缩包链接（与 `--asset-id` 和本地目录互斥） |\n| `--poll-interval` | 轮询间隔秒数（默认 `2`） |\n| `--max-wait` | 最长阻塞等待分钟数（默认 `60`） |\n| `--idempotency-key` | 安全重试幂等键（1–255 位 `[A-Za-z0-9_:.-]`） |\n| `--json` | 输出机器可读 JSON 而非交互进度条 |",
          "```bash\n# 指定子合成与自定义导出路径\nhyperframes cloud render . \\\n  --composition compositions/intro.html \\\n  --output ./renders/intro.mp4\n\n# 异步即刻返回并配 Webhook 通知\nhyperframes cloud render --callback-url https://example.com/hf-hook --no-wait\n\n# 重跑已有资产或拉取远端压缩包渲染\nhyperframes cloud render --asset-id asst_abc123\nhyperframes cloud render --url https://cdn.example.com/site.zip\n```",
        ],
      },
      {
        id: "why-you-want-idempotency-key",
        h: "为什么建议传入 `--idempotency-key`",
        p: "当接口返回 `401` 时，CLI 会强行刷新 OAuth 访问令牌并自动重放请求。对于读取操作这是安全无害的，但用于上传的 `POST /v3/assets` 本身并非天然幂等——不带幂等键的重试可能会凭空创建一份重复资产并对工作区重复扣费。",
        paras: [
          "当接口返回 `401` 时，CLI 会强行刷新 OAuth 访问令牌并自动重放请求。对于读取操作这是安全无害的，但用于上传的 `POST /v3/assets` 本身并非天然幂等——不带幂等键的重试可能会凭空创建一份重复资产并对工作区重复扣费。",
          "只要需要可靠自动重试，务必传递 `--idempotency-key <key>`。该键会同步穿透用于“上传资产”与“提交任务”两步接口，服务器端针对每个端点分别隔离作用域，因此共用同一个 UUID 既方便又不会产生冲突，从根本上杜绝重复建单。",
          '```bash\nhyperframes cloud render . --idempotency-key "$(uuidgen)"\n```',
        ],
      },
      {
        id: "cloud-list",
        h: "`cloud list`",
        p: "游标分页浏览近期云渲染记录：`--limit` 限制单页条数（1–100，默认 10），`--token` 传入上一页的 `next_token` 继续翻页，`--all` 自动拉完所有分页；加 `--json` 返回完整 JSON。",
        paras: [
          "游标分页浏览近期云渲染记录：`--limit` 限制单页条数（1–100，默认 10），`--token` 传入上一页的 `next_token` 继续翻页，`--all` 自动拉完所有分页；加 `--json` 返回完整 JSON。",
          "```bash\nhyperframes cloud list\nhyperframes cloud list --limit 50 --json\nhyperframes cloud list --all\n```",
        ],
      },
      {
        id: "cloud-get-render_id",
        h: "`cloud get <render_id>`",
        p: "拉取单次渲染的完整详情记录，包括短期有效的预签名 `video_url` 与 `thumbnail_url`（这类 S3 临时链接不宜长期缓存，需用时按需重新请求获取）。",
        paras: [
          "拉取单次渲染的完整详情记录，包括短期有效的预签名 `video_url` 与 `thumbnail_url`（这类 S3 临时链接不宜长期缓存，需用时按需重新请求获取）。",
          "```bash\nhyperframes cloud get hfr_abc123\nhyperframes cloud get hfr_abc123 --json\n```",
        ],
      },
      {
        id: "cloud-delete-render_id",
        h: "`cloud delete <render_id>`",
        p: "软删除一次渲染任务。此后对它的 `GET` 查询会返回 404，原有签名视频下载链接也很快失效。默认有交互式二次确认，脚本中请传 `--no-confirm`（配合 `--json` 时必传）。",
        paras: [
          "软删除一次渲染任务。此后对它的 `GET` 查询会返回 404，原有签名视频下载链接也很快失效。默认有交互式二次确认，脚本中请传 `--no-confirm`（配合 `--json` 时必传）。",
          "```bash\nhyperframes cloud delete hfr_abc123\nhyperframes cloud delete hfr_abc123 --no-confirm --json\n```",
        ],
      },
      {
        id: "which-one-should-you-use",
        h: "三种渲染方式如何取舍？",
        p: "",
        paras: [
          "`cloud` 自动复用 `hyperframes auth status` 解析到的任何活跃账号凭据；如对接预发测试环境，可通过 `HEYGEN_API_URL` 改指接口基址。",
        ],
        bullets: [
          "**`hyperframes render`：** 迭代闭环最快，本地调试创作期间首选。",
          "**`hyperframes cloud render`：** 零运维基础设施，由 HeyGen 云托管运行并按积分计费，适合不想在本机装 Chrome、FFmpeg 或部署 AWS 的团队。",
          "**`hyperframes lambda render`：** 部署到你自己的 AWS 账号、基于并行分片跑在自家算力与 VPC 下，适合已有完备 AWS 体系的企业自建集群。",
        ],
      },
      {
        id: "hyperframes-lambda",
        h: "hyperframes lambda（AWS Lambda 分布式渲染）",
        p: "将分布式渲染栈直接部署至你自己的 AWS Lambda 并从本机或 CI 触发——底层封装 `@hyperframes/aws-lambda` 与 AWS SAM，端到端跑通仅需三条命令：",
        paras: [
          "将分布式渲染栈直接部署至你自己的 AWS Lambda 并从本机或 CI 触发——底层封装 `@hyperframes/aws-lambda` 与 AWS SAM，端到端跑通仅需三条命令：",
          "```bash\nhyperframes lambda deploy\nhyperframes lambda render ./my-project --width 1920 --height 1080 --wait\nhyperframes lambda destroy   # 用完可随时彻底拆除栈\n```",
          "前置条件：有效 AWS 凭据（环境变量、`~/.aws/credentials`、SSO 或 IMDS），且 `PATH` 中已就绪 [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) 与用来打包 Handler ZIP 的 `bun`。",
          "部署与栈形态公共参数：",
          "| 参数 | 默认值 | 说明 |\n| - | - | - |\n| `--stack-name` | `hyperframes-default` | CloudFormation 栈名称 |\n| `--region` | `AWS_REGION`，默认 `us-east-1` | 部署的 AWS 区域 |\n| `--profile` | `AWS_PROFILE` | AWS 凭据 Profile |\n| `--concurrency` | 无预留 | Lambda 预留并发数。新建栈不设时按账号未预留余额的 90% 弹性跑；重部署保留现值，设 `none` 清除预留 |\n| `--memory` | `10240` | Lambda 分配内存（MB） |\n| `--chrome-source` | `sparticuz` | `sparticuz` 或 `chrome-headless-shell` |\n| `--video-arch` | `arm64` | `arm64`（需配 `sparticuz`）使用推送到 `<stack>-video` ECR 的 ARM 容器镜像跑规划与分片渲染（音频与组装留 x86）；`x86_64` 全部留 x86 |\n| `--skip-build` | 关闭 | 复用已构建的 `handler.zip` |\n| `--no-warm` | 自动预热 | 跳过部署后的视频函数预热调用；保持预热可让首次渲染不必干等冷启动拉镜像 |",
          "驱动单次渲染（`render`）与批渲染（`render-batch`）的参数：",
          "| 参数 | 默认值 | 说明 |\n| - | - | - |\n| `--width`、`--height` | 必填 | 输出渲染像素宽高 |\n| `--site-id` | 按内容哈希 | 直接复用此前上传过的内容寻址站点 ID |\n| `--fps` | `30` | `24`、`25`、`30` 或 `60` |\n| `--format` | `mp4` | `mp4`、`mov`、`webm` 或 `png-sequence` |\n| `--codec` | `h264` | `h264` 或 `h265`（仅 MP4） |\n| `--quality` | `standard` | `draft`、`standard` 或 `high` |\n| `--output-resolution` | — | 通过 Chrome `deviceScaleFactor` 超采样放大至目标预设（`1080p`、`4k`、`uhd`、`hd`、`landscape-4k` 等），保持原布局不变 |\n| `--chunk-size` | 自动 | 每个分片的帧数（默认确保单个分片能在 Lambda 超时上限内完成） |\n| `--max-parallel-chunks` | 自动 | 每次渲染的最大分片扇出数（默认平铺满预留并发一波跑完；快超时时自动细拆） |\n| `--target-chunk-frames` | — | 每片帧数目标上限（若已显式指定 `--chunk-size` 则忽略此项） |\n| `--keyframe-interval` | — | 仅 MP4：最大关键帧时间间隔秒数（分片拼接点必插入关键帧） |\n| `--max-bitrate` | — | 仅 MP4：峰值码率上限，如 `8M`（按分片单独控制） |\n| `--buffer-size` | 2 × `--max-bitrate` | 仅 MP4：码率控速缓冲区大小，如 `16M`（需配 `--max-bitrate`） |\n| `--variables` | — | 传递给各个分片渲染 worker `window.__hfVariables` 的 JSON 对象 |\n| `--variables-file` | — | 从 JSON 文件读取变量 |\n| `--strict-variables` | 关闭 | 发现未声明或类型不符的变量名时报错失败而非仅警告 |\n| `--execution-name` | `hf-render-<uuid>` | Step Functions 执行实例名称 |\n| `--output-key` | `renders/<exec>/output.<ext>` | 成品在 S3 存储桶内的目标 Key |\n| `--batch` | — | 供 `render-batch` 使用的 JSONL 批量文件 |\n| `--max-concurrent` | `50` | 批量任务允许同时处于运行状态的 Step Functions 最大数量 |\n| `--dry-run` | 关闭 | 在 `render-batch` 下仅打印即将扇出的清单元信息，不真正调用 AWS |\n| `--wait` | 关闭 | 阻塞等待整片跑完并实时输出各分片推进百分比 |\n| `--wait-interval-ms` | `5000` | `--wait` 轮询间隔毫秒数 |\n| `--json` | 关闭 | 机器可读 JSON 输出 |",
        ],
      },
      {
        id: "lambda-deploy",
        h: "`lambda deploy`",
        p: "打包构建 `packages/aws-lambda/dist/handler.zip`，并通过 AWS SAM 部署 `examples/aws-lambda/template.yaml`。成功后会在 `<cwd>/.hyperframes/lambda-stack-<stackName>.json` 写入桶名与状态机 ARN 缓存；若无变更，对同一 `--stack-name` 重复执行为安全幂等操作。",
        paras: [
          "打包构建 `packages/aws-lambda/dist/handler.zip`，并通过 AWS SAM 部署 `examples/aws-lambda/template.yaml`。成功后会在 `<cwd>/.hyperframes/lambda-stack-<stackName>.json` 写入桶名与状态机 ARN 缓存；若无变更，对同一 `--stack-name` 重复执行为安全幂等操作。",
          "```bash\nhyperframes lambda deploy \\\n  --stack-name=hyperframes-prod \\\n  --region=us-east-1 \\\n  --concurrency=8 \\\n  --memory=10240\n```",
        ],
      },
      {
        id: "lambda-sites-create-projectdir",
        h: "`lambda sites create <projectDir>`",
        p: "将项目资产按内容哈希增量同步至 S3 共享内容库（已存在的文件直接跳过）并返回一个可长期复用的 `siteId`。后续对同一工程树重复提交渲染即可免去上传步骤。",
        paras: [
          "将项目资产按内容哈希增量同步至 S3 共享内容库（已存在的文件直接跳过）并返回一个可长期复用的 `siteId`。后续对同一工程树重复提交渲染即可免去上传步骤。",
          "```bash\nhyperframes lambda sites create ./my-project\n# → siteId: abc1234deadbeef0（相同目录树每次计算稳定一致）\n\nhyperframes lambda render ./my-project --site-id=abc1234deadbeef0 --width 1920 --height 1080\n```",
        ],
      },
      {
        id: "lambda-render-projectdir",
        h: "`lambda render <projectDir>`",
        p: "触发 Step Functions 工作流，除非附带 `--wait`，否则立即返回一个可用 `lambda progress` 查询进度的 `renderId`。",
        paras: [
          "触发 Step Functions 工作流，除非附带 `--wait`，否则立即返回一个可用 `lambda progress` 查询进度的 `renderId`。",
          '```bash\nhyperframes lambda render ./my-project \\\n  --width=1920 --height=1080 --fps=30 --format=mp4 \\\n  --chunk-size=240 --max-parallel-chunks=16 \\\n  --wait\n\nhyperframes lambda render ./my-template --site-id=abc1234deadbeef0 \\\n  --width=1920 --height=1080 \\\n  --variables \'{"title":"Hello Alice","accent":"#ff0000"}\'\n```',
          "所有参数通过 Step Functions Standard 的执行输入载体下发——该载体整包受 AWS **256 KiB** 硬上限约束。因此请只经由变量传递轻量的文本、数字及远程媒体 URL，再在合成渲染期加载，绝不要在 JSON 里直接内嵌大型媒体原始字节流。SDK 客户端提前会校验体积；详细设计规范见 [Lambda 模板渲染指南](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)。",
        ],
      },
      {
        id: "lambda-render-batch-projectdir",
        h: "`lambda render-batch <projectDir>`",
        p: "根据 JSONL 批量文件一次扇出 N 路定制化视频渲染，专用于自动化模板流水线。站点资产只上传或校验一次，随后按每行的 `variables` 与 `outputKey` 逐行调用 `renderToLambda`。",
        paras: [
          "根据 JSONL 批量文件一次扇出 N 路定制化视频渲染，专用于自动化模板流水线。站点资产只上传或校验一次，随后按每行的 `variables` 与 `outputKey` 逐行调用 `renderToLambda`。",
          '```jsonl\n{"outputKey": "renders/alice.mp4", "variables": {"name": "Alice", "accent": "#ff0000"}}\n{"outputKey": "renders/bob.mp4",   "variables": {"name": "Bob",   "accent": "#0000ff"}}\n{"outputKey": "renders/carol.mp4", "variables": {"name": "Carol"}, "executionName": "hf-carol-001"}\n```',
          "```bash\nhyperframes lambda render-batch ./my-template \\\n  --batch ./users.jsonl \\\n  --width 1920 --height 1080 \\\n  --max-concurrent 10\n```",
          "每提交一行即输出一条对应的 `executionArn` 与状态：",
          "```text\nBatch dispatched: 3 started, 0 failed-to-start.\n\n  ✓ line 1  renders/alice.mp4  arn:aws:states:us-east-1:1234:execution:hf:hf-render-...\n  ✓ line 2  renders/bob.mp4    arn:aws:states:us-east-1:1234:execution:hf:hf-render-...\n  ✓ line 3  renders/carol.mp4  arn:aws:states:us-east-1:1234:execution:hf:hf-carol-001\n```",
          '跑大规模计费作业前建议先加 `--dry-run` 预校验清单行；它会把所有有效行标为 `status: "would-invoke"` 而不真正发给 AWS。`--max-concurrent`（默认 `50`）只限流客户端同时启动的 `StartExecution` 数量，避免一万行脚本打爆并发配额；真正的单个函数全局池限流依然取决于你在 `lambda deploy --concurrency=<N>` 配置的预留并发。',
        ],
      },
      {
        id: "lambda-progress-renderid-executionarn",
        h: "`lambda progress <renderId | executionArn>`",
        p: "拉取一次任务快照进度：包含总体完成百分比、已出帧数、Lambda 调用次数、累计开销及异常列表。既支持传简洁的 `renderId`（自动从栈状态解析），也支持传完整 SFN `executionArn`。",
        paras: [
          "拉取一次任务快照进度：包含总体完成百分比、已出帧数、Lambda 调用次数、累计开销及异常列表。既支持传简洁的 `renderId`（自动从栈状态解析），也支持传完整 SFN `executionArn`。",
          "```bash\nhyperframes lambda progress hf-render-abcd1234\n```",
        ],
      },
      {
        id: "lambda-destroy",
        h: "`lambda destroy`",
        p: "执行 `sam delete --no-prompts` 删除栈并移除本地状态文件。渲染 S3 存储桶按 CloudFormation `Retain` 规则预设保留以防止误删已有成片；若确需回收全部存储空间，可在 AWS 控制台或用 AWS CLI 清空桶内容后再手工删除。",
        paras: [
          "执行 `sam delete --no-prompts` 删除栈并移除本地状态文件。渲染 S3 存储桶按 CloudFormation `Retain` 规则预设保留以防止误删已有成片；若确需回收全部存储空间，可在 AWS 控制台或用 AWS CLI 清空桶内容后再手工删除。",
        ],
      },
      {
        id: "lambda-policies-role-user-validate",
        h: "`lambda policies role | user | validate`",
        p: "输出或校验执行部署渲染所需的最小 IAM 权限策略：",
        paras: [
          "输出或校验执行部署渲染所需的最小 IAM 权限策略：",
          "```bash\n# 输出供执行 CLI 的 IAM 用户绑定的最小内联策略\nhyperframes lambda policies user\n\n# 输出供 CloudFormation 服务角色使用的 { TrustRelationship, InlinePolicy }\nhyperframes lambda policies role\n\n# 校验仓库里签入的 IAM 策略是否仍然覆盖当前 CLI 所需动作\nhyperframes lambda policies validate ./infra/iam/hyperframes-deploy.json\n```",
          '`validate` 会读取 JSON 并将 `Effect: Allow` 下扩展后的 `s3:*` / `s3:Get*` / `*` 通配策略与当前 CLI 需求对比，缺失动作会打印至 `stderr` 并以非零退出码终止，可接入 CI 提前拦截权限漂移。初始清单因需要新创建栈资源而将 `Resource` 设为 `"*"`，首次部署就绪后按安全规范缩窄至对应 ARN 即可。',
        ],
      },
      {
        id: "state-files",
        h: "状态文件（State files）",
        p: "`hyperframes lambda` 把各个部署栈的坐标数据缓存在 `<cwd>/.hyperframes/lambda-stack-<name>.json` 中，避免后续动词每次额外请求 AWS `describe-stacks`。你可自由决定是提交入库还是加进 `.gitignore`——里头没有密钥，但记录有桶名、状态机 ARN 与区域名（能够识别对应 AWS 账号）。",
        paras: [
          "`hyperframes lambda` 把各个部署栈的坐标数据缓存在 `<cwd>/.hyperframes/lambda-stack-<name>.json` 中，避免后续动词每次额外请求 AWS `describe-stacks`。你可自由决定是提交入库还是加进 `.gitignore`——里头没有密钥，但记录有桶名、状态机 ARN 与区域名（能够识别对应 AWS 账号）。",
        ],
      },
      {
        id: "hyperframes-cloudrun",
        h: "hyperframes cloudrun（GCP Cloud Run 分布式渲染）",
        p: "面向 Google Cloud 的分布式方案，对应前文的 [`lambda`](#hyperframes-lambda)：在 Cloud Run + Cloud Workflows 上驱动分布式并行渲染，整合 `@hyperframes/gcp-cloud-run` SDK、随包附带的 `terraform` 模块及 `gcloud` / Cloud Build 镜像构建：",
        paras: [
          "面向 Google Cloud 的分布式方案，对应前文的 [`lambda`](#hyperframes-lambda)：在 Cloud Run + Cloud Workflows 上驱动分布式并行渲染，整合 `@hyperframes/gcp-cloud-run` SDK、随包附带的 `terraform` 模块及 `gcloud` / Cloud Build 镜像构建：",
          "```bash\nhyperframes cloudrun deploy --project my-gcp-project\nhyperframes cloudrun render ./my-project --width 1920 --height 1080 --wait\nhyperframes cloudrun destroy --project my-gcp-project\n```",
          "**`deploy`** 会开启所需 GCP API、经 Cloud Build 构建并推送容器镜像（也可传 `--image` 指定已有镜像），随后应用 Terraform 模块自动开通 GCS 存储桶、Cloud Run 服务、Cloud Workflows 编排流程、两个独立服务账号及失控告警，并将坐标参数写入 `~/.hyperframes/cloudrun-state.json` 缓存以供后续复用。必填 `--project`；`--region` 默认 `us-central1`，`--repo` 默认 `hyperframes`，算力规格提供 `--cpu`（1/2/4/8，默认 4）、`--memory`（默认 `16Gi`）、`--max-instances`（默认 100）和 `--timeout`（单请求最长秒数，最大 3600）。如需更细定制可直接调整 Terraform 模块。",
          "其余子命令与 [`lambda`](#hyperframes-lambda) 几乎一一对应：",
          "如果业务后端与素材已经驻留在 GCP，选用 `cloudrun` 即可；底层捕获与编码原语与其它路径完全一致，仅把存储层换作 GCS、计算层换作 Cloud Run、调度换作 Cloud Workflows。详细实操见[Google Cloud Run 部署指南](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。",
        ],
        bullets: [
          "`sites create <projectDir>`：将工程文件上传至 GCS 并打印 `gs://` URI；",
          "`render <projectDir>`：触发分布式渲染（`--width` 与 `--height` 必填，以 `--render-id` 对应 Lambda 的 `--execution-name`）；",
          "`render-batch <projectDir>`：根据 JSONL 批量文件并发扇出；",
          "`progress <executionName>`：查看运行进度与费用估算（执行中按估算值显示，成功后返回精确费用）；",
          "`destroy`：运行 `terraform destroy` 并强制清空销毁渲染存储桶。",
        ],
      },
      {
        id: "hyperframesjson",
        aliases: ["hyperframes-json"],
        h: "`hyperframes.json`",
        p: "`hyperframes init` 会在每个新建工程根目录下写出一份 `hyperframes.json`，而 `hyperframes add` 正是通过读取它来决定从哪个 registry 拉取资产、分别装到哪几个目录下。随时可以编辑它来重塑项目结构或指向私有镜像源——直接删掉它则会无缝回退至默认目录结构。",
        paras: [
          "`hyperframes init` 会在每个新建工程根目录下写出一份 `hyperframes.json`，而 `hyperframes add` 正是通过读取它来决定从哪个 registry 拉取资产、分别装到哪几个目录下。随时可以编辑它来重塑项目结构或指向私有镜像源——直接删掉它则会无缝回退至默认目录结构。",
          '```json\n{\n  "$schema": "https://hyperframes.heygen.com/schema/hyperframes.json",\n  "registry": "https://raw.githubusercontent.com/heygen-com/hyperframes/main/registry",\n  "paths": {\n    "blocks": "compositions",\n    "components": "compositions/components",\n    "assets": "assets"\n  }\n}\n```',
          "| 字段 | 说明 |\n| - | - |\n| `registry` | `add` 拉取区块与组件的注册表基址（默认指向公开官方仓库） |\n| `paths.blocks` | Block 类型 `.html` 文件落地的相对项目根目录路径 |\n| `paths.components` | Component 片段落地的目录路径 |\n| `paths.assets` | 引用的图片、字体等配套资产存放目录 |",
          "文件只需写入你想覆盖的字段，未填写部分会自动沿用系统默认值。",
        ],
      },
      {
        id: "related-topics-cards",
        h: "关联包入口",
        p: "",
        paras: [
          "[card] [Producer（@hyperframes/producer）](https://hyperframes.heygen.com/packages/producer.md) CLI 底层调用的核心渲染管线——需要 Node.js 编程渲染时直接使用。",
          "[card] [Studio（@hyperframes/studio）](https://hyperframes.heygen.com/packages/studio.md) 驱动 `hyperframes preview` 的浏览器编辑器组件——可直接嵌入自有产品。",
          "[card] [Core（@hyperframes/core）](https://hyperframes.heygen.com/packages/core.md) 合成类型定义、规则检查与浏览器核心运行时。",
          "[card] [Engine（@hyperframes/engine）](https://hyperframes.heygen.com/packages/engine.md) 底层寻帧抓图与编码捕获引擎。",
        ],
      },
      {
        id: "share",
        h: "`share`（审片分享）",
        p: "将渲染出的 MP4 视频发布到与 HyperFrames 桌面端一致的协同评审页面，复用同一套项目标识、访问控制、评论批注与历史版本管理。使用前需先运行 `hyperframes auth login` 登录；API Key 无法作为审片项目的所有者。",
        paras: [
          "将渲染出的 MP4 视频发布到与 HyperFrames 桌面端一致的协同评审页面，复用同一套项目标识、访问控制、评论批注与历史版本管理。使用前需先运行 `hyperframes auth login` 登录；API Key 无法作为审片项目的所有者。",
          "```bash\nhyperframes share --public         # 仅分享成片视频；持链接者即可观看\nhyperframes share --public --include-source # 连带上传可编辑工程源文件\nhyperframes share --status --json  # 仅读取分享处理状态；从不上传本地修改\nhyperframes share --update         # 基于当前工程重新渲染并推送新版本\nhyperframes share --manage         # 在浏览器打开 Web 分享设置页\n```",
          "默认仅上传渲染好的视频本身。显式传入 `--include-source` 才会额外上传便携式可编辑工程文件（其中包含当前未用及被 Git 忽略的目录内容；上传前请先自查文件夹与 `.hyperframesignore`）。该项与 `--video-only` 互斥，且每次上传新版本（含 `--update`）都必须重新显式选择是否附带源码——传 `--yes` 不会自动同意上传源码。",
          "首次发起 `share` 必须明确指定目标受众：`--public`、`--team`、`--invite-only` 或 `--private`（交互终端下会由命令行询问你挑一项；传 `--yes` 只会静默提问而不会擅自定下权限）。可用范围档位随你所在工作区方案而定，首次发布传 `--space <id>` 指定归属工作区后，后续迭代会自动延续该归属。免费工作区（CLI 与桌面端合计）至多可保留 **5 个共享项目**——同项目递增推送版本不占新名额，但仅仅关闭分享开关不会释放配额，需到 Web 管理端彻底移除项目或升级方案。",
          "对未改动的工程再次执行 `share` 只会直接返回既有评审链接（附带 `--public` 等权限标志则仅修改现行访问范围而不触发重渲染与新版上传）；推送本地修改后的新版请使用 `--update`（若内容毫无变化则返回 “Already up to date”，JSON 对应 `upToDate: true`；成功推送后为 `updated: true`，旧版在后台处理期间仍可持续预览观看）。已渲染完成的暂存视频会累积到 `.hyperframes/share-renders/` 目录下，确认上传完毕且没有运行中的 `share` 进程后即可删除该目录及 `.hyperframes/share-render.json` 腾出硬盘空间。",
          '`--wait-seconds <1–1800>` 控制命令行最长等待后台视频转码筛查的秒数（默认 `300`）。后台已收件（accepted）**不等同于立即可播**——分发链接前务必在 `--json` 结果里检查 `ready` 与 `state`；只有 `ready` 后才会附带 `url`。失败处理会记忆 `state: "failed"` 及错误返回码 `1`，直到用当前修正好的工程明确加 `--update` 重试（此时旧 `previousUrl` 仍可访问）。他人名下评审会报 `owner_signed_out` 并提示需切换登录的具体邮箱账号。',
          "正式生产版 CLI 内置了经过验证的视频及工程源可信上传源站域名。测试开发、自定义 OAuth/API 网关或私有存储客户可通过环境变量 `HYPERFRAMES_REVIEW_UPLOAD_ORIGINS` 提供逗号分隔的精确 HTTPS 原点列表（无路径或通配符，配置后会全量替代生产默认清单；设为空字符串则关闭上传）。既往历史 `/p/...` 发布地址保持原样与独立可达，不会被新版评审链接改写覆盖。完整源码上传边界说明另见[CLI 指南：控制共享源码](https://hyperframes.heygen.com/developers/share-source.md)。",
        ],
      },
      {
        id: "related-topics",
        h: "相关主题",
        p: "",
        bullets: [
          "[CLI 使用向导](https://hyperframes.heygen.com/developers/cli.md)",
          "[本地调试测试 CLI 源码修改](https://hyperframes.heygen.com/contributing/testing-local-changes.md)",
          "[在智能体 Harness 中调用 CLI](https://hyperframes.heygen.com/developers/harness-tool-context.md)",
        ],
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "dev-share-source": {
    lede: "`hyperframes share` 可以将可编辑项目文件附加到与 Desktop 共用的同一评审页面。源码上传要求每次上传（包括更新）都带 `--include-source`。不带它时，终端、JSON 与无人值守命令只分享视频。本地 Studio 在创建或更新分享前提供一个未勾选的 **Include editable project files** 选项，并披露上传范围。",
    sections: [
      {
        h: "哪些内容会被带上",
        p: "",
        paras: [
          "源码使用与 Desktop 相同的可移植项目策略：手写 HTML、脚本、样式、素材以及受支持的 Studio 编辑元数据。已知凭据文件名（如 `.env`、`.npmrc` 与 `*.pem`）、依赖目录、聊天记录、本地分享状态和已记录的渲染输出不会包含在内。",
          "这些是文件名规则，不是密钥扫描器。`.gitignore` 不控制源码捕获。即使 Git 会忽略，其他普通文件也可以包含进来。请把私密材料放在项目之外，或在不想上传项目文件时使用 `--video-only`。不支持的符号链接和无效文件名会中止源码准备，而不是悄悄产出不完整的可编辑项目。",
          "要排除临时文件，在项目根目录添加 `.hyperframesignore`： 每行排除该文件或文件夹及其内容，不进入源码捕获与分享变更检测。空白行与以 `#` 开头的行会被忽略。使用带 `/` 分隔符的路径或单个 `*` 通配符（例如 `*.log` 或 `scratch/*.json`）。Basename 模式在每个文件夹中都适用。否定、绝对路径以及排除 `index.html` 会被拒绝。不要排除你的合成在用的素材。这些规则只能排除文件，不能重新包含凭据或其他被可移植项目策略阻止的文件。",
          "云渲染以 gitignore 语法读取同一文件，因此它可能包含本读取器拒绝的规则，例如 `/exports/` 或 `**/*.mov`。源码捕获以及其他选取项目文件上传的功能随后会以错误停止。变更检测仍有效并忽略该文件的规则，因此这些文件仍计为变更。",
          "上传使用工作区的文件数、单文件、项目大小与 manifest 上限。大型媒体分片上传。只有已验证发布、且仍与渲染项目一致的快照才能附加到视频版本。CLI 会检查渲染素材内容，包括保持文件大小与时间戳不变的变更。部署必须在 `HYPERFRAMES_REVIEW_UPLOAD_ORIGINS` 中包含确切的源码存储源Alongside视频存储源。",
        ],
        codeBlocks: [
          {
            code: "# Literal paths, relative to the project root\nout.json\nscratch/",
            file: "text",
          },
        ],
        id: "what-travels",
      },
      {
        h: "中断的上传与不可用的源码",
        p: "",
        paras: [
          "网络中断后重试同一命令。其本地记录保留合成标识、上传幂等键与已完成的文件分片。存储上传若 60 秒无进展会被停止，并在重试上限内重试。源码记录位于 `.hyperframes/share-sync.<backend-hash>.json`，不含登录 token。不要将该记录复制到另一个项目或编辑其账户、工作区或路径：不匹配会停止分享，以免覆盖另一个项目的源码。",
          "若源码已变更、与另一快照冲突，或仍在验证中，命令会说明停止原因。解决问题后重试，或传 `--video-only` 只分享渲染视频。意外的源码上传失败绝不会悄悄把可分享源码的分享降为仅视频。若服务器确认上传已过期或失败，重试会开始新的上传。若文件在先前上传仍挂起期间变更，CLI 会先取消该上传再开始新上传。它会等待已在验证中的上传，并保留冲突待显式解决。",
          "仅视频的重试不会恢复已包含源码的中断视频上传。重试前检查其状态。要在先前上传完成后将同一渲染作为新的仅视频版本发布，使用 `hyperframes share --update --video-only`。先前版本保留其文件。",
          "`--status` 只读取评审，不上传任何内容。其源码状态为 `not_checked`；它不承诺本地文件与已分享版本一致。上传结果在源码验证与附加准备完成后才使用 `ready`；视频就绪仍是单独的顶层 `ready` 字段。",
        ],
        codeBlocks: [],
        id: "interrupted-uploads-and-unavailable-source",
      },
      {
        h: "被拒绝的上传",
        p: "",
        paras: [
          "被拒绝的上传会保存在本地，因此 `--status` 会报告失败，CLI 重启后亦然。用相同命令重试未完成的首次分享；用 `--update` 替换已分享的视频。结果仍未知的上传会保留其恢复记录，以避免创建重复版本。",
          "`export_blocked` 表示近期内容审核违规阻止了该工作区的新视频版本。请联系 HeyGen 支持申诉。重新渲染、更改受众或拥有付费套餐都不会解除该限制。`can_register_project` 描述项目额度资格，不代表上传视频的审核许可。",
          "`--manage` 要求已有分享。受众参数用于首次分享创建，不能与 `--status`、`--manage` 或 `--update` 组合。每一步都会向 stderr 写入进度；`--json` 会抑制进度与无关的技能更新提示。仅在诊断渲染初始化问题时设置 `HF_DEBUG_RENDER=1`。",
        ],
        codeBlocks: [],
        id: "refused-uploads",
      },
      {
        h: "集成另一个本地宿主",
        p: "",
        paras: [
          "`@hyperframes/share` 导出 `shareSources` 与 `createProjectShareSourceStore`。在 `addVersion` 之前调用 `prepare(projectPath, renderedFingerprint)`，然后传入 `filesForExport` 与 `requireSource: true` 以获得就绪的源码结果。`requireSource` 可防止后续不匹配把结果降为仅视频版本。传入 `omitSource: true` 表示仅视频操作，且不得复用带源码的版本或挂起的上传。",
          "宿主可注入其既有 binding store，或为 Desktop binding 提供只读 `existingBinding` 解析器。精确快照只能在同一账户与属主工作区复用，且不得有挂起的同步操作。Desktop 拥有的 binding 中的未同步变更需要先经 Desktop 同步。独立 CLI 使用自己的项目本地同步记录；它不发现也不修改 Desktop 的应用数据目录。",
        ],
        codeBlocks: [],
        id: "integrating-another-local-host",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "分享默认排除临时 `*.log` 与 `*.swp` 文件，渲染变更检测与上传项目文件均如此。其他文件仍作为输入，因为合成可能动态加载它们。无效规则会报告 `invalid_source_ignore`；分享会停止，而不是悄悄上传被排除的文件。",
        ],
        codeBlocks: [],
        bullets: [
          "[CLI 参考](https://hyperframes.heygen.com/packages/cli.md#share) —— 访问受众、更新机制与处理状态说明。",
          "[CLI 指南](https://hyperframes.heygen.com/developers/cli.md) —— 按当前任务查找合适的 CLI 命令。",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[自定义帧源（Frame Sources）](https://hyperframes.heygen.com/guides/frame-sources.md)",
          "[分享卡片轮播（Share-Sheet Carousel）](https://hyperframes.heygen.com/catalog/blocks/share-sheet-carousel.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "dev-catalog-search": {
    lede: '`hyperframes catalog --query "<what you want>"` 按功能而非仅按名称查找 catalog 块与组件。它在你的机器上以两种方式之一运行，且两者都不把查询发送到任何地方。',
    sections: [
      {
        h: "词匹配",
        p: "",
        paras: [
          '按查询词在条目的名称、标题、描述与标签中共享的词为每个条目打分，停用常见词与一两个字母的词。一个词若命中条目名称或标题，所计权重高于命中描述；少有条目使用的词权重高于多数条目使用的词；复数匹配其单数（"pulses" 找到 "pulse"），复合词双向匹配（"countdown" 与 "count down"）。它不需要模型与网络，只能找到确实用了你所用词的条目。',
        ],
        codeBlocks: [],
        id: "word-match",
      },
      {
        h: "端侧意义搜索",
        p: "",
        paras: [
          '把你的查询与每个 catalog 条目都转成数值向量，返回向量方向与查询最接近的条目，因此 "make the pace feel suddenly faster" 可以找到描述中从未用过这些词的动效。它显示最接近的 25 个条目，靠前者最优，`--json` 还会增加 `top_score`，即第一个结果的相似度。',
        ],
        codeBlocks: [],
        id: "on-device-meaning-search",
      },
      {
        h: "开启方式",
        p: "",
        paras: [
          "没有明确同意，永不启动下载： 模型已在机器上之后，每个 `catalog --query` 都使用意义搜索。若无法运行，CLI 会说明原因并回退到词匹配。",
        ],
        codeBlocks: [],
        bullets: [
          "在终端中，首次词匹配搜索会先展示词匹配找到的内容，然后询问一次是否下载模型。回答会被记住。是，会立即拉取 catalog 向量，下一次搜索时拉取模型。",
          "`--on-device` 会在本次运行准备好意义搜索；若尚未询问过，会先在终端提示。",
          "Agent、CI 与 `--json` 运行永不提示。它们会被告知去询问其服务的用户；`--on-device --yes` 就是那个人的同意，并记录下来。",
          "答否之后，仅 `--on-device` 会跳过并给出提示。只有在交互终端中（stdin 与 stdout 均为终端、无 `--json`、非 CI）使用 `--on-device --yes` 才会更改答案；在其他地方，否仍然成立。",
        ],
        id: "turning-it-on",
      },
      {
        h: "模型",
        p: "",
        paras: [
          "| 项目 | 说明 |\n| - | - |\n| 模型 | `bge-small-en-v1.5`，即 `Xenova/bge-small-en-v1.5` 的量化 ONNX 构建 |\n| 锁定版本 | revision `ea104dacec62c0de699686887e3f920caeb4f3e3`，永不使用 `main` |\n| 向量维度 | 每条目 384 个数值 |\n| 下载体积 | 32 MB 模型与 0.7 MB tokenizer，共 33 MB |",
          "选用它是因为它在 MTEB benchmark 上的平均分接近 OpenAI 的 `text-embedding-3-small`（62.17 对 62.3），而向量只有四分之一大小（384 数值而非 1,536），且足够小，可按需下载。锁定到单一 revision 是因为 catalog 向量是用那套确切权重生成的：底层模型若悄悄改变，仍会返回结果，只是会是错的。",
          "量化构建也是 catalog 向量的来源，因此查询与 catalog 始终来自同一文件。",
        ],
        codeBlocks: [],
        id: "the-model",
      },
      {
        h: "下载内容与存放位置",
        p: "",
        paras: [
          "| 内容 | 来源 | 存放在 |\n| - | - | - |\n| `model_quantized.onnx` (34,014,426 bytes) | huggingface.co，锁定 revision | `~/.hyperframes/models/bge-small-en-v1.5.onnx` |\n| `tokenizer.json` (711,396 bytes) | huggingface.co，锁定 revision | `~/.hyperframes/models/bge-small-en-v1.5.tokenizer.json` |\n| `onnxruntime-node` 1.21.1 | npm，首次使用时 | `~/.cache/hyperframes/optional` |\n| `local-vectors.json` 与 `local-vectors.bin` | catalog registry，`catalog-artifact/` | `~/.hyperframes/catalog` |",
          "两个模型文件都按锁定 SHA-256 校验。不匹配的文件会被删除，搜索回退到词匹配，因此部分下载或被篡改的下载永不会被使用。runtime 在模型之前安装，因此无法运行它的机器付出的不是先下载那 33 MB。",
          "catalog 向量带有 `revision`。当 registry 发布新版时，CLI 会在下一次意义搜索前拉取新的一对，因此新发布的条目无需更新 CLI 即可被找到。在开发时，`HYPERFRAMES_CATALOG_ARTIFACT_DIR` 会替换 `~/.hyperframes/catalog` 作为保存向量的文件夹。",
        ],
        codeBlocks: [],
        id: "what-is-downloaded-and-where",
      },
      {
        h: "比对什么内容",
        id: "what-is-compared",
        p: "",
        paras: [],
        bullets: [
          "**每个 Catalog 条目**由其标题（title）、描述（description）和标签（tags）按每行一项组成，刻意不包含底层组件文件名。",
          "**你的查询文本**会自动加上 `bge` 模型在短搜索场景下期望的前缀：`Represent this sentence for searching relevant passages: `。",
          "每个向量取模型首 token 输出并归一化为单位长度（length 1），最后按与查询向量之间的余弦相似度进行排序。",
        ],
        codeBlocks: [],
      },
      {
        h: "隐私",
        p: "",
        paras: [
          "意义搜索完全在你的机器上运行：查询在本地变成向量，与已在磁盘上的向量比较。唯一网络流量是上述一次性下载与 catalog 向量刷新，都不携带你的查询。",
          "当搜索没有找到有用结果时，CLI 会打印 `hyperframes feedback --search-miss` 命令，你可以运行它来报告这个缺口。该命令会发送查询，且仅在你运行时才发送。",
        ],
        codeBlocks: [],
        id: "privacy",
      },
      {
        h: "索引构建方式",
        p: "",
        paras: [
          "向量随 registry 一起发布，每个可安装块与组件一行，由以下命令构建： 它读取仓库中的 `registry/blocks/*` 与 `registry/components/*`，按名称排序，并用锁定模型每 16 条一批嵌入。批大小很重要：批内文本会被补齐到相同长度，这会影响量化结果，因此同一文本单独嵌入的结果会略有不同。以 16 条分批重建可精确复现已发布的行，这也是验证索引来自该 registry 与该模型的方法。",
          "`revision` 是对模型、其 revision、向量大小、批大小以及每个条目的名称与文本做的 SHA-256。它写入 `local-vectors.json` 与 registry 的 `registry.json`，CLI 由此知道自己的副本已过期。",
        ],
        codeBlocks: [
          {
            code: "bun scripts/catalog/build-local-vectors.ts",
            file: "bash",
          },
        ],
        id: "how-the-index-is-built",
      },
      {
        h: "重建",
        p: "",
        paras: [
          "添加 catalog 条目的贡献者很少需要重建。`bun run generate:catalog` 会连同其余生成 catalog 一起重建索引，必要时先下载锁定模型；catalog 发布 PR 在源码变更合并后同样如此。没有模型时，构建脚本会停止并说明，而不是中途失败，“Catalog: search index covers the registry” CI 检查会在任何可搜条目缺失时失败。文件格式见",
          "[`registry/catalog-artifact/README.md`](https://github.com/heygen-com/hyperframes/blob/main/registry/catalog-artifact/README.md)。",
        ],
        codeBlocks: [],
        id: "rebuilding-it",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
          "[运动模糊（Motion Blur）](https://hyperframes.heygen.com/catalog/components/motion-blur.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "dev-harness": {
    lede: "agent harness（Claude Code、Codex 或你自己的）替 agent 运行 `hyperframes` 命令。`HF_TOOL_CONTEXT` 让 harness 告诉一次调用它支持什么，CLI 因此能做更多：报告它产出的图像，或等待轮次而不是与同一项目中的另一命令竞速。没有该变量时，每个命令的行为与在终端中完全相同。",
    sections: [
      {
        h: "声明",
        p: "",
        paras: [
          "| 字段 | 取值 |\n| - | - |\n| `version` | `1`。其他版本或非 JSON 值均视为未声明。 |\n| `capabilities` | 以能力名为键的对象。每个值配置该能力。 |",
          "CLI 会忽略自己不认识的能力名，以及值不合法的已知能力，因此 harness 可以声明比其运行的 CLI 更新的能力。该变量仅携带数据：任何能力都不会运行 harness 命名的代码。",
        ],
        codeBlocks: [],
        id: "the-declaration",
      },
      {
        h: "`events`：命令产出了什么",
        p: "",
        paras: [
          "CLI 向 `path` 追加每行一个 JSON 对象。它永不创建父目录，写失败会打印警告而不使命令失败。命令退出后再读取文件；一次 shell 调用中的多个命令会追加到同一文件。",
          "每行是一个事件：",
          "| 命令 | `role` | 内容 |\n| - | - | - |\n| `snapshot` | `frame` | 每个捕获的画面（PNG） |\n| `snapshot` | `contact-sheet` | 每个评审拼图页（JPEG） |\n| `check` | `check-report` | 已保存的 JSON 报告 |\n| `check` | `frame` | 浏览器检查捕获的每个画面 |\n| `check` | `finding` | 每个发现周围的裁剪 |",
          "路径为绝对路径，保留命令保存的位置。如何处理产物由 harness 决定：把 contact sheet 附到工具结果、链接报告，或忽略。不认识的事件类型与 role 要忽略；新增时不会改版本。",
        ],
        codeBlocks: [
          {
            code: '{ "transport": { "type": "ndjson-file", "path": "/absolute/events.ndjson" } }',
            file: "json",
          },
          {
            code: '{\n  "version": 1,\n  "type": "artifact.created",\n  "command": "snapshot",\n  "artifact": { "role": "contact-sheet", "path": "/project/.hyperframes/artifacts/snapshots/…/contact-sheet.jpg", "mediaType": "image/jpeg" }\n}',
            file: "json",
          },
        ],
        id: "events-what-a-command-produced",
      },
      {
        h: "`project-lock`：一次一个浏览器命令",
        p: "",
        paras: [
          "`check` 与 `snapshot` 在启动浏览器前获取项目锁，完成后释放。第二条命令最多等待 `waitMs` 毫秒等锁，然后失败，并指出持有锁的命令与进程。锁的持有进程已退出时，锁会被接管。被杀进程遗留的 `project.lock.break` 不会被接管：超时会指出该文件及其进程 id，并说明删除它以继续。锁文件是 `.hyperframes/project.lock`。",
          "`waitMs` 应设得小于你工具调用自身的超时，使等待结束在 CLI 的提示里，而不是 harness 杀掉调用。",
        ],
        codeBlocks: [
          {
            code: '{ "waitMs": 90000 }',
            file: "json",
          },
        ],
        id: "project-lock-one-browser-command-at-a-time",
      },
      {
        h: "`check-review`：`check` 的评审开关",
        p: "",
        paras: [
          "每个字段都是布尔，默认为 `false`；非 `true` 值即为关，未知字段被忽略。没有该能力时，`check` 输出与终端中相同。",
          '| 字段 | 作用 |\n| - | - |\n| `skipContrastInMotion` | 省略在 GSAP tween 移动文本或其祖先、或文本半透明时测得的对比度失败（见 [check](https://hyperframes.heygen.com/packages/cli.md#check)）。计数、`ok` 与持久性（persistence）同样省略它们。 |\n| `findingFrames` | 为 `layout` 与 `contrast` 中有 bbox 的错误与警告发现（不包括 `motion` 或 `craft`），按每个不同 `frameTime` 保存一帧纯粹、无标注的全画面，并在每个此类发现上增加两个字段：`frameTime`（其 `times` 中最长持续段的中间采样点，间隙规则与 `heldMs` 相同），以及 `frame`（该 PNG 的绝对路径，同一时刻的所有发现共享）。`bbox` 是在发现的 `time` 测得的，因此移动中的元素在画面中可能处于别的位置。只有有限、非负采样时间可入选；无可入选时间的发现不产帧。最多捕获 60 个不同时刻，错误优先。帧放在本次运行的 snapshot 文件夹中，但不列入 `snapshots`，不记入项目历史，也不作为 `events` 报告。 |\n| `inspect` | 仅与 `findingFrames` 一起开启时有效；单独则无作用。当每帧在屏时，对该时刻入帧的每个发现运行 [component inspector](https://github.com/heygen-com/hyperframes/tree/main/packages/inspector)，并将其报告原样加为发现的 `inspect` 字段：`results`（元素、目标它的 GSAP 动画数），以及 `snippets`，每个带其源码 `id`（`file:start-end`）、`kind`（`html opening tag`、`matched CSS candidate`、`animation creation` 等）与确切源码 `code`。目标是发现的 `data-hf-id`（若有），否则其 `selector`，在 inspector 默认 12,000 字节预算下不带后代匹配。匹配多个元素的选择器视为检查失败，因此不会附加无关源码片段。检查失败的发现改为得到 `inspect: { "error": "<message>" }`；检查本身永不因此失败。检查计入检查截止时间的 `frames` 阶段。超时或停止会结束捕获，不附加 frame 或 inspection 字段。仅看到 GSAP 动画，看不到 CSS 动画、Web Animations 或 canvas 绘制。 |',
        ],
        codeBlocks: [
          {
            code: '{ "skipContrastInMotion": true, "findingFrames": true, "inspect": true }',
            file: "json",
          },
        ],
        id: "check-review-review-switches-for-check",
      },
      {
        h: "检查实时预览",
        p: "",
        paras: [
          "`@hyperframes/inspector/live` API 读取跨所有合成的组件、时间线与元素映射，包括停放在预览播放头之外的场景。每次查询临时挂载这些场景（不定位），完成后失败或结束时释放自己的持有。并发查询让各自场景挂载直到各自完成；Studio 的选择持有保持独立。预览随后恢复当前播放头的场景窗口。若挂载后仍有场景停放，查询会以 `scenes_not_mounted` 及名称报告，而不是把其元素报告为缺失。挂载通过预览的普通场景生命周期运行这些场景的脚本。",
        ],
        codeBlocks: [],
        id: "inspecting-a-live-preview",
      },
      {
        h: "运行代码的 Hooks",
        p: "",
        paras: [
          "在 CLI 命令前或后运行你自己的命令不是 `HF_TOOL_CONTEXT` 能力，也永远不会是：任何设置环境变量的东西都能运行代码。这类 hooks 若存在，只来自使用者控制的配置。",
        ],
        codeBlocks: [],
        id: "hooks-that-run-code",
      },
      {
        h: "一致性",
        p: "",
        paras: [
          "`packages/cli/src/utils/toolContext.test.ts` 与 `projectLock.test.ts` 锁定了上述解析、事件与锁行为。harness 对其想要该行为的每次调用设置变量、仅在调用退出后读取 `events`，并且当 CLI 忽略某项能力时同样工作，即为正确。",
        ],
        codeBlocks: [],
        id: "conformance",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[安装与更新智能体技能](https://hyperframes.heygen.com/guides/skills.md)",
          "[@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-lint": {
    lede: "lint 包是从 core 中提取的合成 linter，已成为独立可安装的专用包。它是 lint 的**唯一可信来源**：CLI 的 `hyperframes lint` 命令与渲染时渲染门（render-gate）都消费来自这里的同一规则引擎。",
    sections: [
      {
        h: "何时使用",
        p: "",
        paras: [
          "[!TIP] 这个包的价值在于把验证**作为库**运行，而非 shell 出去调 CLI。Node 应用（agent harness、CI 步骤、编辑器插件）可以直接 `import { lintProject } from '@hyperframes/lint'`，对合成目录做 lint —— 没有 `npx hyperframes lint` 子进程，没有 stdout 解析。",
          "**当你需要以下能力时，使用 `@hyperframes/lint`：** [!NOTE] `@hyperframes/core/lint` 仍然可解析（通过向后兼容的转发 stub），因此现有导入继续有效。新代码应直接从 `@hyperframes/lint` 导入。",
        ],
        codeBlocks: [],
        bullets: [
          "从 Node lint 合成项目（index + 子合成）",
          "以编程方式 lint 单个 HTML 字符串",
          "以 lint 发现拦截渲染（`shouldBlockRender`）",
          "在你自己的 UI 或 CI 注解中呈现 lint 发现",
        ],
        id: "when-to-use",
      },
      {
        h: "包导出",
        p: "",
        paras: ["lint 包只有一个入口："],
        codeBlocks: [
          {
            code: 'import {\n  lintHyperframeHtml,\n  lintMediaUrls,\n  lintProject,\n  shouldBlockRender,\n} from \'@hyperframes/lint\';\nimport type {\n  HyperframeLintResult,\n  HyperframeLintFinding,\n  HyperframeLintSeverity,   // "error" | "warning" | "info"\n  HyperframeLinterOptions,\n  ProjectLintResult,\n} from \'@hyperframes/lint\';',
            file: "ts",
          },
        ],
        id: "package-exports",
      },
      {
        h: "Lint 单个合成",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "import { lintHyperframeHtml, lintMediaUrls } from '@hyperframes/lint';\n\nconst result = await lintHyperframeHtml(html, { filePath: 'index.html' });\n// result.ok, result.errorCount, result.warningCount, result.findings\n\nfor (const finding of result.findings) {\n  console.log(finding.severity, finding.code, finding.message);\n  // finding.file, finding.selector, finding.elementId, finding.fixHint, finding.snippet\n}\n\n// Additional media URL validation\nconst mediaFindings = await lintMediaUrls(html);",
            file: "ts",
          },
        ],
        id: "linting-a-single-composition",
      },
      {
        h: "Lint 项目",
        p: "",
        paras: [
          "`lintProject` 遍历合成目录 —— index 加上所有子合成 —— 并返回汇总发现。它接收**目录路径字符串**，因此只需一个路径，即可在任何 Node 上下文调用：",
        ],
        codeBlocks: [
          {
            code: "import { lintProject, shouldBlockRender } from '@hyperframes/lint';\nimport type { ProjectLintResult } from '@hyperframes/lint';\n\nconst result: ProjectLintResult = await lintProject('./my-composition');\n// result.totalErrors, result.totalWarnings, result.results[]\n//   each result entry: { file, result: HyperframeLintResult }\n\nif (shouldBlockRender(true, false, result.totalErrors, result.totalWarnings)) {\n  throw new Error(`Lint found ${result.totalErrors} blocking error(s)`);\n}",
            file: "ts",
          },
        ],
        id: "linting-a-project",
      },
      {
        h: "浏览器用法",
        p: "",
        paras: [
          "规则引擎**完全在客户端**运行 —— 没有 Node.js，没有文件系统，没有服务器往返。从 `@hyperframes/lint/browser` 入口导入，可在仅浏览器的编辑器或工具中直接验证合成 HTML： 浏览器入口导出 `lintHyperframeHtml`、`lintMediaUrls` 与 `shouldBlockRender` —— 所有作用于 HTML 字符串的东西。它以浏览器目标构建，**零 `node:` 内建**，因此可干净地打进客户端包（构建期已验证）。",
          "[!NOTE] `lintProject`（遍历项目**目录**）基于文件系统，**不**属于浏览器入口 —— 在 Node 中应从主 `@hyperframes/lint` 入口导入。",
        ],
        codeBlocks: [
          {
            code: "import { lintHyperframeHtml, shouldBlockRender } from '@hyperframes/lint/browser';\n\nconst result = await lintHyperframeHtml(htmlString, { filePath: 'index.html' });\nif (!result.ok) {\n  for (const f of result.findings) console.warn(f.code, f.message);\n}",
            file: "ts",
          },
        ],
        id: "browser-usage",
      },
      {
        h: "Linter 能捕获什么",
        p: "",
        paras: [
          "每个发现代码——其严重程度、捕获内容与修复方法——都记录在 [Lint rules](https://hyperframes.heygen.com/reference/lint-rules.md) 参考页。",
          "检测到的问题包括： [!NOTE] 常见失败与修复见 [Troubleshooting](https://hyperframes.heygen.com/help.md)。",
        ],
        codeBlocks: [],
        bullets: [
          '无效的内联 JavaScript 语法。带 `type="x-shader/x-fragment"`、`type="x-shader/x-vertex"` 或 `type="text/glsl"` 的 GLSL 数据块跳过 JavaScript 语法检查，仍会收到 shader 警告。',
          "缺少时间线注册（`window.__timelines`）",
          '定时 `<video>` 既未声明 `muted`（静音素材）也未声明 `data-has-audio="true"`（有声音）—— `video_missing_muted`',
          '定时可见元素缺少 `class="clip"`',
          "已弃用的属性名",
          "缺少合成尺寸（`data-width`、`data-height`）",
          "合成根或其祖先上的 CSS `zoom`（`root_zoom_rescales_a_fixed_canvas`）；后代上的 zoom 允许，包括 `#root .badge` 这类作用域选择器",
          "`data-start` 引用了不存在的片段 ID",
          '在冷渲染 worker 上渲染结果不同的寻址顺序隐患：相对 tween 值（`"+=..."`）其属性有第二个并发写入者（`gsap_relative_value_second_writer`）、带相对值的 `repeatRefresh`（`gsap_repeat_refresh_relative_value`）、函数型 tween vars 测量 DOM 或误用 index 参数（`gsap_function_value_hazard`）、可从时间线回调到达的 DOM 测量（`gsap_callback_dom_measurement`），以及 `gsap.utils.random()` / `"random(...)"` 这类非确定值（`non_deterministic_code`）',
          "CSS `transition` 声明按浏览器时钟运行，在冷渲染 worker 上重启（`css_transition_used`，为警告）；`none` 与全零时长允许",
          "SVG draw-on 陷阱：对 CSS 声明了多分量 `stroke-dasharray` 的元素写 GSAP `strokeDasharray`（`svg_drawon_css_dasharray_conflict`）、对尚无 `d` 的 path 调用 `getTotalLength()`（`svg_measure_before_path_d`），以及 `tl.set(..., 0)` 的初始状态隐藏在第 0 帧永不渲染（`gsap_timeline_set_initial_hide`）",
        ],
        id: "what-the-linter-catches",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md) linter 所依赖的 HTML 与 GSAP 解析层。",
          "[card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md) 核心类型与运行时；为向后兼容仍重新导出 linter。",
          "[card] [CLI](https://hyperframes.heygen.com/packages/cli.md) `npx hyperframes lint` 底层即封装此包。",
          "[card] [Studio](https://hyperframes.heygen.com/packages/studio.md) 在浏览器编辑器中实时呈现 lint 诊断结果。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
          "[Lint 规则参考](https://hyperframes.heygen.com/reference/lint-rules.md)",
          "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
