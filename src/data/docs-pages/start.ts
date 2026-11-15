import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  introduction: {
    lede: "HyperFrames 是免费开源框架，把 HTML 变为视频：你提需求，智能体建可编辑工程，HyperFrames 负责播放与渲染。",
    sections: [
      {
        h: "它能做什么？",
        p: "",
        paras: ["下面每块都是已做好的 HyperFrames 成片，点开带声观看。"],
        codeBlocks: [],
        id: "what-can-it-make",
      },
      {
        h: "三件事要知道",
        p: "",
        paras: [
          "**智能体构建。** 你描述视频，智能体写 HTML、CSS 与 JavaScript，走这条路你无需自己写代码。",
          "**可编辑。** 产出的是工程文件夹，不是不可改的黑盒成品。智能体、浏览器编辑器与你的工具操作同一批文件。",
          "**渲染可靠。** HyperFrames 让工程给出每一帧的精确画面，不靠实时播放硬扛，慢机器也不会丢帧。",
        ],
        codeBlocks: [],
        id: "three-things-to-know",
      },
      {
        h: "做一个",
        p: "",
        paras: [
          "[card] [制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md) 装好技能，写一句短请求，再选往下怎么走。",
        ],
        codeBlocks: [],
        id: "make-one",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
          "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
          "[基于 HyperFrames 构建](https://hyperframes.heygen.com/developers/index.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  quickstart: {
    lede: "把一句话变成可编辑视频：Studio 应用起步；已在终端用智能体或本机跑不了应用就走另两种。三种做法做同一种项目。",
    sections: [
      {
        h: "在 Studio 应用程序中",
        p: "",
        paras: [
          "最简单的方法：应用程序在实时预览旁边运行你的代理，然后你可以通过打字、指向或绘图来更改视频。适用于 Mac（Apple Silicon 或 Intel）、Windows（包括 Arm 上的 Windows）和 Linux。",
          "**1.下载并安装** [下载 Studio 应用](https://hyperframes.studio/studio/download?src=docs-quickstart)，打开它，并使用免费的 HeyGen 帐户登录。 [安装 Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 包含每个系统的步骤。",
          "**2.索取视频** 在 **制作一些东西** 中输入你想要的内容并发送。弗莱米问了几个问题，展示了故事板，然后制作了影片。",
          "**3.改变它** 在聊天中要求更改，或指向图片。 [在应用程序中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md) 介绍了它。",
          "[card] [练习：简介](https://hyperframes.heygen.com/lessons/the-brief) 20 分钟的免费课程，包含短片、测验和尝试简介。简介是目标、目标对象、两到四个细节以及引号中的确切单词。",
        ],
        codeBlocks: [],
        id: "in-the-studio-app",
      },
      {
        h: "与你的智能体",
        p: "",
        paras: [
          "适用于 Claude Code、Codex、Cursor、Copilot、Gemini CLI 或在任何系统上的计算机上的文件夹中工作的任何代理。",
        ],
        codeBlocks: [],
        id: "with-your-agent",
      },
      {
        h: "捷径",
        p: "",
        paras: [
          "除非安装了 HyperFrames 插件，否则从项目文件夹中的终端安装一次技能，然后在其中打开或重新启动编码代理： 将其粘贴到代理中。它制作视频并打开预览。你只需更改 URL。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes skills update",
            file: "bash",
          },
          {
            code: "Set this folder up for HyperFrames and make me a video.\n\n1. If the HyperFrames plugin is installed, use its bundled skills and launcher. If the HyperFrames skills are missing, stop and tell me: I install them with npx hyperframes skills update\n2. Then, using /hyperframes, make a 10-second product intro for https://example.com\n3. Open the local preview when it is done and tell me the project folder.",
            file: "text",
          },
        ],
        id: "the-short-way",
      },
      {
        h: "步步",
        p: "",
        paras: [
          "**1.安装插件或技能** 分步页面：[Claude Code](https://hyperframes.heygen.com/guides/with-claude-code.md)、[Codex](https://hyperframes.heygen.com/guides/with-codex.md)、[Cursor](https://hyperframes.heygen.com/guides/with-cursor.md)。",
          "对于 Claude Code、Copilot、VS Code、Cursor 或 Gemini CLI，请从 [插件安装指南](https://hyperframes.heygen.com/guides/plugins.md) 开始。它包括每个代理的更新设置。Claude的插件输入技能是`/hyperframes:hyperframes`。",
          "对于独立技能，请在项目文件夹中运行它，在选择器中选择 **Core Skills**，然后在该文件夹中打开或重新启动代理： **2.索取视频** 将 `https://example.com` 替换为你想要视频显示的页面。对于讲述故事的较长电影，经纪人首先提供三个故事情节供选择。",
          "**3.从第一个版本继续** 代理会给你留下一个项目文件夹，并在浏览器编辑器中打开其预览。要稍后重新打开它，请在项目文件夹中运行`npx hyperframes preview`。下面的所有三个路径都适用于同一个项目。",
        ],
        codeBlocks: [
          {
            code: "npx skills add heygen-com/hyperframes",
            file: "bash",
          },
          {
            code: "Using /hyperframes, make a 10-second product intro for https://example.com.",
            file: "text",
          },
        ],
        id: "step-by-step",
      },
      {
        h: "在 AI 聊天中，无需安装任何内容",
        p: "",
        paras: [
          "在 Claude.ai 或 ChatGPT 中，HyperFrames 连接器在你的 HeyGen 帐户中构建并渲染视频。你放弃了项目文件夹和本地渲染。 [将 HyperFrames 连接到 AI 聊天](https://hyperframes.heygen.com/guides/mcp.md)。",
        ],
        codeBlocks: [],
        id: "in-an-ai-chat-nothing-to-install",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [选择要制作的内容](https://hyperframes.heygen.com/workflows.md) 产品发布、解说、字幕、剪辑、拉取请求、音乐、动态图形或演示。",
          "[card] [从应用程序中的Claude代码继续](https://hyperframes.heygen.com/studio-app/existing-project.md) 打开你的代理在 Studio 应用程序中制作的项目，然后将其交还。",
        ],
        codeBlocks: [],
        bullets: [
          "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
          "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
          "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  examples: {
    lede: "本页每支视频都用 HyperFrames 制作：发布片、动态图形、讲解、3D、Logo 亮相、现场编码音乐。点开带声观看。",
    sections: [
      {
        h: "重新混合你喜欢的视频",
        p: "",
        paras: [
          "拿想要的成片最快，是从一支成片起。下每支皆混音：他人原创，以 HyperFrames 以新词、人物、品牌重建。悬播。要哪支？选 **Remix in Studio** 做自版；机理见[参考任意视频](https://hyperframes.heygen.com/studio-app/reference-video.md)。",
        ],
        codeBlocks: [],
        id: "remix-a-video-you-like",
      },
      {
        h: "推出影片和动态图形",
        p: "",
        paras: ["发布片与字主行动，沿原剪、时与效重建。"],
        codeBlocks: [],
        id: "launch-films-and-motion-graphics",
      },
      {
        h: "真人出镜编辑",
        p: "",
        paras: ["Reels、TikTok、Shorts 的剪风，换演示者：字、剪、注、拍。"],
        codeBlocks: [],
        id: "talking-head-edits",
      },
      {
        h: "1:1 重新创建任何视频",
        p: "",
        paras: [
          "HyperFrames 盯一已成品，以可编 HTML 重建同片——动、字、时皆复。下每对 **参考**（左原片）邻 **HyperFrames 复制**（右），逐帧对。",
          "**大佬** 38.58s · 60fps",
          '<video poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-oblist-reference.jpg" playsInline preload="none" />',
          "参考资料——原片",
          '<video poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-oblist-replica.jpg" muted playsInline preload="none" />',
          "HyperFrames复制品 **Srinika × Mercury** 30.56s · 25fps · 头像片段",
          '<video poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-srinika-reference.jpg" playsInline preload="none" />',
          "参考资料——原片",
          '<video poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-srinika-replica.jpg" muted playsInline preload="none" />',
          "HyperFrames复制品",
        ],
        codeBlocks: [],
        id: "recreate-any-video-11",
      },
      {
        h: "安装最多的块",
        p: "",
        paras: [
          "下皆可跑样，依近 30 天人工安装序。任块加进项目，就地改它。",
          "|样例|从这起 |\n| - | - |\n|标志尾 | npx hyperframes add logo-ending |\n|数据图 | npx hyperframes add data-chart |\n|编辑闪盖 | npx hyperframes add editorial-flash-overlay |\n|有机漏光盖 | npx hyperframes add organic-leak-overlay |\n| mk-进度统计 | npx HyperFrames添加 mk-progress-stat |\n|流程图| npx HyperFrames添加流程图 |\n|mk 规格表 | npx hyperframes add mk-specs-list |\n| mk-标注-突出显示 | npx HyperFrames添加 mk-callout-highlight |\n|硬件标题 | npx hyperframes add hardware-title |\n|代码录入 | npx hyperframes add code-typing |\n|lt 暗卡 | npx hyperframes add lt-dark-card |\n|电影变焦 | npx hyperframes add cinematic-zoom |",
        ],
        codeBlocks: [],
        id: "most-installed-blocks",
      },
      {
        h: "项目模板",
        p: "",
        paras: [
          "初始化模板仍然可用于搭建完整的项目。",
          "|模板|善始 |\n| - | - |\n|暖粒 |品牌、生活、编辑 |\n|播放模式 |社媒与发布 |\n|瑞士格 |技术与企业故事 |\n|动力型 |字主宣传与标题 |\n|决策树 |可解图与教程 |\n|产品促销 |多幕产品展 |\n|nyt 图 |编辑图与数据事 |\n|维涅利 |大胆肖像告 |\n|空白 |智能体自生或全定制 |",
          "提示：整模板用 `npx hyperframes init my-video --example warm-grain`，散块用 `npx hyperframes add <块名>`。",
        ],
        codeBlocks: [],
        id: "project-templates",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[找到解决项目的方法](https://hyperframes.heygen.com/studio-app/workspace.md)",
          "[使用代理编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)",
          "[用AI制作动态图形](https://hyperframes.heygen.com/guides/motion-graphics.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  faq: {
    lede: "人们最常问文档助理的短答，每题都链到含详情的页面。",
    sections: [
      {
        h: "HyperFrames 是免费的吗？",
        p: "",
        paras: [
          "是的。框架、CLI和技能在Apache 2.0下开源，并且在自己的计算机上渲染是免费的，不需要帐户。智能体的计划和可选的 HeyGen 托管功能（例如 HeyGen 语音、头像和云渲染）通过他们自己的帐户计费。请参阅[免费内容以及 HeyGen 添加的内容](https://hyperframes.heygen.com/guides/voice-and-audio.md#free-or-heygen-quality)，以及[使用免费代理制作视频](https://hyperframes.heygen.com/guides/free-agents.md)，了解免费代理。",
          "[Studio 应用](https://hyperframes.heygen.com/studio-app.md) 也可以免费使用。其免费计划包括人工智能配音、字幕、音乐和音效、3 个人工智能视频剪辑和每月 5 个云导出。 Pro 计划每月 25 美元，添加了 HeyGen 的顶级视频、图像、语音和音乐模型，以你上传的风格制作视频，并提供无限的云导出。 [查看计划](https://hyperframes.studio/pricing)。",
        ],
        codeBlocks: [],
        id: "is-hyperframes-free",
      },
      {
        h: "我可以将 HyperFrames 用于商业用途吗？",
        p: "",
        paras: [
          "是的。 [Apache 2.0 许可证](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) 允许你根据其条款使用、更改和分发 HyperFrame，包括在商业作品中。你添加的媒体（例如字体、音乐或素材）保留其自己的许可证。",
        ],
        codeBlocks: [],
        id: "can-i-use-hyperframes-commercially",
      },
      {
        h: "我应该使用哪种智能体？",
        p: "",
        paras: [
          "任何支持技能的编码代理都可以工作，包括 Claude Code、Codex、Cursor、Gemini CLI、GitHub Copilot、Google Antigravity、IBM Bob 和 OpenCode。如果你还没有，请从 Claude Code 或 Codex 开始。设置指南：[Claude Code](https://hyperframes.heygen.com/guides/with-claude-code.md)、[Codex](https://hyperframes.heygen.com/guides/with-codex.md)、[Cursor](https://hyperframes.heygen.com/guides/with-cursor.md)和[其他代理](https://hyperframes.heygen.com/guides/skills.md)。",
        ],
        codeBlocks: [],
        id: "which-ai-agent-should-i-use",
      },
      {
        h: "我可以在 Claude 或 ChatGPT 聊天应用程序中使用它吗？",
        p: "",
        paras: [
          "是的，通过托管的 HyperFrames 连接器。它会在你的 HeyGen 帐户中创建并渲染视频，而无需在你的计算机上安装任何内容。你放弃了本地项目文件夹和Studio。你的聊天产品的计划决定你是否可以添加自定义连接器。请参阅[在 Claude.ai 或 ChatGPT 中制作视频](https://hyperframes.heygen.com/guides/mcp.md)。",
        ],
        codeBlocks: [],
        id: "can-i-use-it-in-the-claude-or-chatgpt-chat-app",
      },
      {
        h: "我该如何安装它？",
        p: "",
        paras: [
          "Claude Code，安装插件： 对于大多数其他代理，运行`npx skills add heygen-com/hyperframes`并选择**核心技能**。然后启动新的代理会话。请参阅[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)。",
        ],
        codeBlocks: [
          {
            code: "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes",
            file: "bash",
          },
        ],
        id: "how-do-i-install-it",
      },
      {
        h: "我需要 HeyGen 帐户或 API 密钥吗？",
        p: "",
        paras: [
          "不要在你的计算机上制作和渲染视频。你需要一个用于 HeyGen 语音和音乐、头像、云渲染、托管连接器和 Studio 应用程序。使用`npx hyperframes auth login`登录。请参阅[身份验证和 API 密钥](https://hyperframes.heygen.com/guides/authentication.md)。",
        ],
        codeBlocks: [],
        id: "do-i-need-a-heygen-account-or-api-key",
      },
      {
        h: "HyperFrames 可以在 Windows 上运行吗？",
        p: "",
        paras: [
          "CLI 和代理技能在 Windows 上运行，包括从 PowerShell 进行渲染，并且 HyperFrames Studio 应用程序具有 Windows 安装程序（64 位 Intel 和 AMD；请参阅[安装 Studio 应用程序](https://hyperframes.heygen.com/studio-app.md)）。要在浏览器中进行编辑，请使用`npx hyperframes preview`。 WSL渲染技巧请参见[WSL2下渲染速度较慢](https://hyperframes.heygen.com/help.md#the-render-is-slow-under-wsl2)。",
        ],
        codeBlocks: [],
        id: "does-hyperframes-work-on-windows",
      },
      {
        h: "Studio 应用程序和浏览器编辑器有什么区别？",
        p: "",
        paras: [
          "**Studio 应用程序** 是一款适用于 Mac、Windows 和 Linux 的桌面应用程序：在一个窗口中与你的代理聊天、预览和编辑器，无需终端。 **浏览器编辑器**是运行`npx hyperframes preview`时从任何项目打开的编辑器。两者都编辑相同的项目文件。请参阅 [获取 Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 和 [在浏览器编辑器中编辑](https://hyperframes.heygen.com/studio.md)。",
        ],
        codeBlocks: [],
        id: "what-is-the-difference-between-the-studio-app-and-the-browser-editor",
      },
      {
        h: "HyperFrames 与 Remotion 有何不同？",
        p: "",
        paras: [
          "Remotion是 React 组件。 HyperFrames 视频是 HTML、CSS 和 JavaScript，通过数据属性和暂停的动画时间轴进行计时。 HyperFrames 不使用或运行 Remotion。请参阅[HyperFrames 与 Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md) 和[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)。",
        ],
        codeBlocks: [],
        id: "how-is-hyperframes-different-from-remotion",
      },
      {
        h: "如何预览和渲染视频？",
        p: "",
        paras: [
          "在项目文件夹开实时预览，再渲 MP4： 渲染需要FFmpeg。运行`npx hyperframes doctor`来检查你的机器。请参阅[从命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes preview",
            file: "bash",
          },
          {
            code: "npx hyperframes render --output final.mp4",
            file: "bash",
          },
        ],
        id: "how-do-i-preview-and-render-a-video",
      },
      {
        h: "渲染需要多长时间？",
        p: "",
        paras: [
          "这取决于长度、分辨率和效果。在一个测量的示例中，一个 300 帧 1920×1080 合成在 9.8 秒内渲染完成，如果保留一个昂贵的 CSS 声明则需要 25 秒。使用 `--quality draft` 可以更快地查看渲染。请参阅[修复预览或渲染缓慢](https://hyperframes.heygen.com/guides/performance.md)。",
        ],
        codeBlocks: [],
        id: "how-long-does-a-render-take",
      },
      {
        h: "可以添加画外音、音乐和音效吗？",
        p: "",
        paras: [
          "是的。在你的请求中向代理询问。通过 HeyGen 帐户，它可以使用 HeyGen 声音和 10,000 首曲目的音乐目录。如果没有的话，语音会使用计算机上的 Kokoro，音乐是你添加的曲目（如果你安装了它，则为本地生成的曲目），而音效则来自捆绑套件。请参阅[添加画外音、音乐、音效和字幕](https://hyperframes.heygen.com/guides/voice-and-audio.md)。",
        ],
        codeBlocks: [],
        id: "can-it-add-voiceover-music-and-sound-effects",
      },
      {
        h: "它可以为我的视频添加字幕吗？",
        p: "",
        paras: [
          "是的。丢给智能体你的谈话录像并要求提供字幕。它会转录演讲内容，为每个单词计时，并在不更改镜头的情况下添加字幕。请参阅[使用 AI 为视频添加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。",
        ],
        codeBlocks: [],
        id: "can-it-add-captions-to-my-video",
      },
      {
        h: "我可以使用自己的字体吗？",
        p: "",
        paras: [
          "是的。将字体文件放入项目中并用`@font-face`声明。项目未声明的字体可以在渲染中回退到默认字体，`npx hyperframes lint` 会报告该情况。请参阅[字体 lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md#fonts)。",
        ],
        codeBlocks: [],
        id: "can-i-use-my-own-fonts",
      },
      {
        h: "我可以在云端或我自己的服务器上渲染吗？",
        p: "",
        paras: [
          "是的。 `hyperframes cloud render` 在 HeyGen 的云上进行渲染，并将积分记入你的 HeyGen 帐户。你还可以在自己的 AWS Lambda 或 Google Cloud Run 上或在 Docker 中进行渲染。请参见[选择渲染路径](https://hyperframes.heygen.com/deploy/overview.md)。",
        ],
        codeBlocks: [],
        id: "can-i-render-in-the-cloud-or-on-my-own-servers",
      },
      {
        h: "HyperFrames 是否会将我的视频发送至 HeyGen？",
        p: "",
        paras: [
          "当你在本地预览和渲染时则不然：项目保留在你的计算机上。云渲染将项目上传到 HeyGen，托管连接器在你的 HeyGen 帐户中构建它。 CLI 发送使用数据，例如命令名称和渲染性能，这些数据在你登录之前保持匿名。它从不发送项目名称或视频内容。用 `npx hyperframes telemetry disable` 将其关闭。智能体会将你的提示发送给其自己的提供商。请参阅[遥测参考](https://hyperframes.heygen.com/packages/cli.md#telemetry)。",
        ],
        codeBlocks: [],
        id: "does-hyperframes-send-my-video-to-heygen",
      },
      {
        h: "有事失败了。我首先要检查什么？",
        p: "",
        paras: [
          "在项目文件夹跑这套，把全输出给智能体： 请参阅[疑难解答](https://hyperframes.heygen.com/help.md)了解具体错误，并参阅[分享反馈](https://hyperframes.heygen.com/help.md#share-feedback)报告错误。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes doctor\nnpx hyperframes lint\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "something-failed-what-do-i-check-first",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
          "[基于 HyperFrames 构建](https://hyperframes.heygen.com/developers/index.md)",
          "[为 HyperFrames 做出贡献](https://hyperframes.heygen.com/contributing.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
