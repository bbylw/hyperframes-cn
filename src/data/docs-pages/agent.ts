import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "with-claude-code": {
    lede: "装 HyperFrames 插件，向 Claude Code 要视频：它在文件夹写 HTML 项目，开实时预览，在本机渲 MP4。",
    sections: [
      {
        h: "开始之前",
        p: "",
        paras: ["或 Anthropic 控制台账号，用量记其账。"],
        codeBlocks: [],
        bullets: [
          "[Claude Code](https://code.claude.com/docs)，使用你的 Claude 帐户登录",
          "Node.js 22 或更高版本以及 npm。",
          "FFmpeg，用于渲染 MP4 文件。运行`npx hyperframes doctor`进行检查。",
        ],
        id: "before-you-start",
      },
      {
        h: "安装",
        p: "",
        paras: [
          "[tab] 插件（荐）：终端跑上二命，新起 Claude Code 话，或今话跑 `/reload-plugins`。自更：跑 `/plugin`，开**市场**，选 **HyperFrames**，选**启用自更**。手更与程见 [装插件](https://hyperframes.heygen.com/guides/plugins.md#claude-code)。",
          "[tab] 单技：项目夹跑之选 **核心**，新话续。见 [装更技](https://hyperframes.heygen.com/guides/skills.md)。",
        ],
        codeBlocks: [
          {
            code: "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes",
            file: "bash",
          },
          {
            code: "npx skills add heygen-com/hyperframes",
            file: "bash",
          },
          {
            code: "npx hyperframes skills update",
            file: "bash",
          },
        ],
        id: "install",
      },
      {
        h: "询问你的第一个视频",
        p: "",
        paras: ["空夹开 Claude Code 粘（插件）——单技则 `/hyperframes`："],
        codeBlocks: [
          {
            code: "Using /hyperframes:hyperframes, make a 10-second product intro for https://example.com.",
            file: "text",
          },
        ],
        id: "ask-for-your-first-video",
      },
      {
        h: "会发生什么",
        p: "",
        paras: ["启或讲片，盘内造工。长事片先呈三线任选。", "同话观首版，言改处。"],
        codeBlocks: [],
        bullets: ["Claude Code 读尔类 HyperFrames 指南", "它检查项目并打开本地预览。"],
        id: "what-happens",
      },
      {
        h: "预览和渲染",
        p: "",
        paras: ["后重开览，盘内跑：浏编开览，可手改片。自渲 MP4：亦可令 Claude Code 渲之。"],
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
        id: "preview-and-render",
      },
      {
        h: "更喜欢应用程序？",
        p: "",
        paras: [
          "Mac/Win/Linux [Studio 应用](https://hyperframes.heygen.com/studio-app.md) 可径用 Claude Code 为代。为尔装 Code，一窗聊、览、编。聊内不装而创用[连](https://hyperframes.heygen.com/guides/mcp.md)。",
        ],
        codeBlocks: [],
        id: "prefer-an-app",
      },
      {
        h: "如果出现问题",
        p: "",
        paras: ["按型修："],
        codeBlocks: [],
        bullets: [
          "**未见技。** 新起或跑 `npx hyperframes skills check`。",
          "**渲败。** 跑 `npx hyperframes doctor` 修报。",
          "**余问。** 见 [疑难](https://hyperframes.heygen.com/help.md)。",
        ],
        id: "if-something-goes-wrong",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "with-codex": {
    lede: "装 HyperFrames 技能，向 Codex 要视频：它在文件夹写 HTML 项目，开实时预览，在本机渲 MP4。",
    sections: [
      {
        h: "开始之前",
        p: "",
        paras: ["账或 OpenAI 钥，用量记其账。"],
        codeBlocks: [],
        bullets: [
          "[Codex](https://developers.openai.com/codex)，使用你的 ChatGPT 登录",
          "Node.js 22 或更高版本以及 npm。",
          "FFmpeg，用于渲染 MP4 文件。运行`~/.agents/skills`进行检查。",
        ],
        id: "before-you-start",
      },
      {
        h: "安装",
        p: "",
        paras: [
          "上命跑一回，后复跑翻技。",
          "技留项：盘内跑此，选 **核心** 与 **Codex**。装后新起 Codex 话。验更见 [装更技](https://hyperframes.heygen.com/guides/skills.md)。",
        ],
        codeBlocks: [
          {
            code: "npx skills add heygen-com/hyperframes",
            file: "bash",
          },
        ],
        id: "install",
      },
      {
        h: "询问你的第一个视频",
        p: "",
        paras: ["空夹开 Codex 粘：名技 hyperframes。将 URL 替尔欲片示页。"],
        codeBlocks: [
          {
            code: "Use $hyperframes to make a 10-second product intro for https://example.com.",
            file: "text",
          },
        ],
        id: "ask-for-your-first-video",
      },
      {
        h: "会发生什么",
        p: "",
        paras: [
          "启或讲片，盘内造工。长事先三线任选。",
          "Codex 行命或网前或询。技囊、启览服、驱渲，此夹批之。同话观首版，言改处。",
        ],
        codeBlocks: [],
        bullets: ["Codex 读尔类指南", "它检查项目并打开本地预览。"],
        id: "what-happens",
      },
      {
        h: "预览和渲染",
        p: "",
        paras: ["后重开览，盘内跑：浏编开览，手改片。自渲 MP4：可令 Codex 渲。"],
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
        id: "preview-and-render",
      },
      {
        h: "更喜欢应用程序？",
        p: "",
        paras: [
          "Mac/Win/Linux [Studio](https://hyperframes.heygen.com/studio-app.md) 可径用 Codex 为代。见[连代](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)。ChatGPT 内不装而创用[连](https://hyperframes.heygen.com/guides/mcp.md)。",
        ],
        codeBlocks: [],
        id: "prefer-an-app",
      },
      {
        h: "如果出现问题",
        p: "",
        paras: ["按型修："],
        codeBlocks: [],
        bullets: [
          "**Codex 未见技。** 新起跑",
          "**渲败。**跑 `npx hyperframes skills check` 修报者。",
          "**余问。** 见[疑难](https://hyperframes.heygen.com/help.md)。",
        ],
        id: "if-something-goes-wrong",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "with-cursor": {
    lede: "在项目里装 HyperFrames 技能，向 Cursor 智能体要视频：它在文件夹写 HTML 项目，开实时预览，在本机渲 MP4。",
    sections: [
      {
        h: "准备工作",
        p: "",
        paras: ["装好 HyperFrames 技能，打开 Cursor，智能体即按你的话写视频，预览并在本机渲 MP4。"],
        codeBlocks: [],
        id: "before-you-start",
      },
      {
        h: "安装",
        p: "",
        paras: [
          "[tab] 项目技能：在项目文件夹跑上方命令，技能随项目走，装完重载 Cursor 或新开一轮智能体对话。",
          "[tab] 用户级：每个项目装一次核心集，Cursor 装有则链入 `~/.cursor/skills`，以后再跑即更新。",
          "[tab] 插件：团队走 Cursor 团队市场加 HyperFrames 插件，或加载本地副本，见[装插件](https://hyperframes.heygen.com/guides/plugins.md#cursor)。",
        ],
        codeBlocks: [
          {
            code: "npx skills add heygen-com/hyperframes",
            file: "bash",
          },
          {
            code: "npx hyperframes skills update",
            file: "bash",
          },
        ],
        id: "install",
      },
      {
        h: "要你的第一个视频",
        p: "",
        paras: ["在新空项目开智能体新对话，粘贴："],
        codeBlocks: [
          {
            code: "Using /hyperframes, make a 10-second product intro for https://example.com.",
            file: "text",
          },
        ],
        id: "ask-for-your-first-video",
      },
      {
        h: "会发生什么",
        p: "",
        paras: [
          "智能体读你的视频类型（如发布片或讲解片）的 HyperFrames 指南，在文件夹建工程。长故事型先给三条故事情节任选。",
          "智能体跑终端命令装包、启预览、渲成片，Cursor 弹窗请批准。同对话看第一版，直接说改哪。",
        ],
        codeBlocks: [],
        bullets: ["智能体读对应类型的 HyperFrames 指南。", "工程检查完开本地预览。"],
        id: "what-happens",
      },
      {
        h: "预览与渲染",
        p: "",
        paras: [
          "日后重开预览，在项目文件夹的 Cursor 终端跑：",
          "预览开在浏览器编辑器，可手改。渲 MP4：",
          "也可让智能体替你渲。",
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
        id: "preview-and-render",
      },
      {
        h: "更喜欢应用？",
        p: "",
        paras: [
          "Mac、Windows、Linux 的 [HyperFrames Studio 应用](https://hyperframes.heygen.com/studio-app.md) 把对话、预览、编辑收一窗。它跑 Claude Code、Codex 与其他智能体，不跑 Cursor。见[连接你的智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)。",
        ],
        codeBlocks: [],
        id: "prefer-an-app",
      },
      {
        h: "出问题？",
        p: "",
        paras: ["按类型修："],
        codeBlocks: [],
        bullets: [
          "**智能体看不到技能。** 新开一轮对话，确认 `.agents/skills`（项目装）或 `~/.cursor/skills`（用户装）含 `hyperframes`，再跑 `npx hyperframes skills check`。",
          "**渲染失败。** 跑 `npx hyperframes doctor`，按报告修。",
          "**其余。** 见[疑难解答](https://hyperframes.heygen.com/help.md)。",
        ],
        id: "if-something-goes-wrong",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
          "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  mcp: {
    lede: "HyperFrames MCP 是受支持 AI 聊天产品的托管连接器，借 HeyGen 账号调用创建与渲染工具，不装本地 CLI。",
    sections: [
      {
        h: "选择托管或本地",
        p: "",
        paras: [
          "要托管就用托管连；要本地用[快速入门](https://hyperframes.heygen.com/quickstart.md)：",
        ],
        codeBlocks: [],
        bullets: [
          "没有本地 HyperFrames 设置；",
          "对话式创作流程；",
          "云渲染；",
          "完整的项目文件；",
          "本地渲染；",
          "在浏览器编辑器和源代码中直接编辑；",
          "自定义自动化或部署；",
          "精确的调试和验证。",
        ],
        id: "choose-hosted-or-local",
      },
      {
        h: "连接HyperFrames",
        p: "",
        paras: [
          "生产 MCP 地址见上。你须 HeyGen 账号且有 HyperFrames 连权限。",
          "每个主机控制自定义连接器的显示位置以及哪些计划或工作区角色可以添加它们。使用以下步骤作为方向，然后在其接口不同时按照链接的主机文档进行操作。",
          "[tab] Claude：HeyGen 的 HyperFrames 列在 Claude [连接器目录](https://claude.com/connectors/hyperframes-heygen)。",
          "1. 打开**自定义→连接器**并选择**发现**。",
          "2. 搜索 **HyperFrames** 并在 HyperFrames by HeyGen 上选择 **Connect**。",
          "3. 完成 HeyGen 登录。",
          "如果聊天不使用它，请检查该聊天中 **+ → 连接器** 下的 HyperFrames 是否已打开。",
          "要按地址添加，请在 **自定义 → 连接器** 中选择 **+ 添加 → 添加自定义连接器**，然后输入上面的 MCP 地址。",
          "有关计划和工作区要求，请参阅 [Anthropic 的当前连接器说明](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)。",
          "[tab] ChatGPT：自定义 MCP 仅 ChatGPT Web Business、Enterprise、Edu。Business 仅管理员与业主可加。",
          "1. 打开**插件**。",
          "2. 选择 **+** 按钮，然后选择 **添加自定义 MCP 服务器**。",
          "3. 输入名称，并输入上面的 MCP 地址作为服务器 URL。",
          "4. 设置身份验证，接受风险警告，然后选择**创建为插件**。",
          "5.完成HeyGen授权。",
          "请参阅[OpenAI的当前说明](https://help.openai.com/en/articles/12584461)。",
          "[标签] 格罗克 1. 打开 [grok.com/connectors](https://grok.com/connectors)。",
          "2. 选择 **新连接器 → 自定义**。",
          "3. 输入上面的 MCP 地址。",
          "4.完成HeyGen授权。",
          "请参阅 [xAI 的当前连接器说明](https://docs.x.ai/grok/connectors) 了解工作区要求。",
          "主机产品独立更改其连接器接口。如果菜单或按钮丢失，请先检查该主机的当前计划和工作区权限，然后再将其视为 HyperFrames 故障。",
        ],
        codeBlocks: [
          {
            code: "https://mcp.heygen.com/mcp/hyperframes/",
            file: "text",
          },
        ],
        id: "connect-hyperframes",
      },
      {
        h: "创建第一个作品",
        p: "",
        paras: [
          "像话编辑描述片，并点名 HyperFrames，聊窗才用连而非手码视频：连经窗明示工具提议与建合成。依工具回，别指望特定预览件：各主呈 MCP 输出异。",
        ],
        codeBlocks: [
          {
            code: "Use HyperFrames to make a 15-second vertical product intro for a meditation app.\nAudience: people who have trouble falling asleep.\nStyle: quiet, spacious, and warm.\nShow the breathing timer and end with “Rest starts here.”",
            file: "text",
          },
        ],
        id: "create-a-first-composition",
      },
      {
        h: "以对话方式修改",
        p: "",
        paras: ["续同对话：遍举毛病与所欲，勿每回重起全纲。"],
        codeBlocks: [
          {
            code: "Reveal the product two seconds earlier.\nKeep the current colors.\nMake the captions smaller and slow down the final transition.",
            file: "text",
          },
        ],
        id: "revise-it-conversationally",
      },
      {
        h: "获取 MP4",
        p: "",
        paras: [
          "每跑单渲 MP4，无另导出步。要下载链即索之：连以默认呈 MP4。定帧、4K、WebM/MOV（透明叠或他编）用[本地技能](https://hyperframes.heygen.com/quickstart.md) 本机渲。",
          "连在托管基建渲。留工具回之合成/渲 ID，后续引以续工。",
          "OAuth 连你当 HeyGen 账号。套餐、限额、计费独立于 HyperFrames 自变，重复或长渲前先于账号核。",
        ],
        codeBlocks: [
          {
            code: "Send me the MP4 download link.",
            file: "text",
          },
        ],
        id: "get-the-mp4",
      },
      {
        h: "当前限制",
        id: "current-limits",
        p: "",
        paras: [],
        bullets: [
          "渲染运行在 HeyGen 基础设施上。如果你需要本地渲染或私有自托管，请改用本地路径。",
          "实际可用的工具列表与结果展示形式取决于已部署的服务端和聊天宿主应用。",
          "托管输出不会像本地路径那样提供本地项目文件夹、完整浏览器编辑器界面或底层调试能力。",
          "精细的源码调整与像素级编辑仍然属于本地项目与浏览器编辑器的工作范畴。",
        ],
        codeBlocks: [],
      },
      {
        h: "故障排除",
        p: "",
        paras: [
          "授权循环？建/渲停？HyperFrames 责用[分享反馈](https://hyperframes.heygen.com/help.md#share-feedback)；连装不起、唤不动问主产品。",
          "提示：仅连此页生产 HyperFrames 服。如外连，核权限，秘私非此去勿发。",
        ],
        codeBlocks: [],
        bullets: [
          "确认生产MCP地址；",
          "断开并重新连接 HyperFrame；",
          "确认你的主机规划和工作空间允许连接器；",
          "确认弹出窗口和 HeyGen 登录窗口未被阻止。",
          "保留最后的工具结果及其返回的任何标识符；",
          "如果主持人会话已过期，则从新的聊天中重试；",
          "报告提示、预期结果、实际结果、主机和标识符。",
        ],
        id: "troubleshooting",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[让代理驱动Studio](https://hyperframes.heygen.com/guides/webmcp.md)",
          "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
          "[AI聊天揭秘](https://hyperframes.heygen.com/catalog/blocks/ai-chat-reveal.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "free-agents": {
    lede: "HyperFrames 本身免费，付费的是写视频的智能体——智能体也可以免费。",
    sections: [
      {
        h: "同一提示，付费与开放模型同场比拼",
        p: "",
        paras: [
          "在 HeyGen 的 [Code2Video 基准测试](https://www.heygen.com/research/introducing-code2video-benchmark) 里，模型拿 168 份简报用 HyperFrames 技能写视频、再互评。开源权重模型（Qwen 3.8 Max、DeepSeek V4.1 Flash、Kimi K3、GLM 5.3）都在第一名后 50 Elo 以内。对两类模型给出同一提示：",
          "**Claude Fable 5**",
          '<video aria-label="Product intro by Claude Fable 5" src="https://dynamic.heygen.ai/www/video/research/code2video/claude-fable-5__Product_Intro_31_ijvIoCty8.mp4" poster="https://dynamic.heygen.ai/www/video/research/code2video/claude-fable-5__Product_Intro_31_ijvIoCty8.mp4/ik-thumbnail.jpg?tr=so-3" playsInline preload="metadata" />',
          "**DeepSeek V4 Flash**",
          '<video aria-label="Product intro by DeepSeek V4 Flash" src="https://dynamic.heygen.ai/www/video/research/code2video/deepseek-v4-flash__Product_Intro_31_wJgiSCn0jw.mp4" poster="https://dynamic.heygen.ai/www/video/research/code2video/deepseek-v4-flash__Product_Intro_31_wJgiSCn0jw.mp4/ik-thumbnail.jpg?tr=so-3" playsInline preload="metadata" />',
          "顶级模型难段更稳：时机、构图、收尾。初稿、社媒贴图或教学材料，开源模型通常够用。",
        ],
        codeBlocks: [],
        id: "same-prompt-paid-model-and-open-model",
      },
      {
        h: "在 Studio 应用里：OpenCode",
        p: "",
        paras: [
          "[连接智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md) 选 **OpenCode**，应用来装，无需登录跑免费模型。它要**完全访问**，应用第一次打开时会索取。",
        ],
        codeBlocks: [],
        id: "in-the-studio-app-opencode",
      },
      {
        h: "在你自己的机器上",
        p: "",
        paras: [
          "OpenCode 也能跑本地模型，不出机器、不花钱。起 [Ollama](https://ollama.com) 后 OpenCode 自行发现模型，选支持工具调用的即可。模型细节见 [OpenCode 模型文档](https://opencode.ai/v2/docs/models)。",
          "本地模型比托管版慢且弱，从短视频起步。",
        ],
        codeBlocks: [],
        id: "on-your-own-computer",
      },
      {
        h: "还有什么是免费的",
        p: "",
        paras: [
          "渲染、预览、Kokoro 声音、抠像、内置音效都在你机器上免费跑；用自家智能体时转录也是。Studio 应用免费，要个免费 HeyGen 账号。HeyGen 声音、头像与生成剪辑耗 HeyGen 积分，其余皆代码。免费与 HeyGen 质量之别见 [免费或 HeyGen 质量](https://hyperframes.heygen.com/guides/voice-and-audio.md#free-or-heygen-quality)。",
        ],
        codeBlocks: [],
        id: "what-else-is-free",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[用 AI 制作产品发布视频](https://hyperframes.heygen.com/guides/product-launch-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  skills: {
    lede: "HyperFrames 技能教编码智能体通用 Web 知识之外的项目格式、动效规则、媒体工作流与验收循环。",
    sections: [
      {
        h: "为一个人安装",
        p: "",
        paras: [
          "交互装：盘自视频录跑。贡献克隆走 `/hyperframes` 全局装，自盘单录跑项目装。项地装或叠签源，未提编可覆。",
          "选**核心技能**，裹众片物。余技需时自装，不必先齐全录。",
          "装后新聊，令其用 `skills/`。",
        ],
        codeBlocks: [
          {
            code: "npx skills add heygen-com/hyperframes",
            file: "bash",
          },
        ],
        id: "install-for-a-person",
      },
      {
        h: "从代理安装或刷新",
        p: "",
        paras: [
          "非交互或 CI 用：装或翻全集与 HyperFrames 技，链相合已装代理。不增选技。",
          "翻查装入之 Claude 全储（`/hyperframes` 或 `~/.claude/skills` 下 `skills/`）。他代目录缺核心不算其装，他之选技不自入储。选技明名即增。装录发者性即在储前仍尊。他家技明更不覆，离线鲜不达亦然。",
          "只验鲜不改：显装或翻一技：",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes skills update",
            file: "bash",
          },
          {
            code: "npx hyperframes skills check",
            file: "bash",
          },
          {
            code: "npx hyperframes skills update slideshow",
            file: "bash",
          },
        ],
        id: "install-or-refresh-from-an-agent",
      },
      {
        h: "使用 GitHub Copilot CLI 中的技能",
        p: "",
        paras: [
          "跑 `copilot`，开盘启 Copilot；既跑用 `/skills reload`。探得否由 `/skills list`。GitHub [现指南](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) 列项与个位。",
          "双代可共首求：续同话改之。托管非本地用 [MCP 指南](https://hyperframes.heygen.com/guides/mcp.md)。",
        ],
        codeBlocks: [
          {
            code: "copilot",
            file: "bash",
          },
          {
            code: "Using /hyperframes, make a 10-second product intro for https://example.com.",
            file: "text",
          },
        ],
        id: "use-the-skills-in-github-copilot-cli",
      },
      {
        h: "使用 Google Antigravity 中的技能",
        p: "",
        paras: [
          "盘自 Antigravity 开盘根装之：选**核心**与**Antigravity**。用 Antigravity 所撑项位 `.agents/skills`，技留项内。装后新聊。",
          "Antigravity 还支持全球 `.agents/skills` 目录。在手动管理该目录之前，请参阅 Google 的[当前技能指南](https://antigravity.google/docs/skills?app=antigravity-ide)。",
        ],
        codeBlocks: [
          {
            code: "npx skills add heygen-com/hyperframes",
            file: "bash",
          },
        ],
        id: "use-the-skills-in-google-antigravity",
      },
      {
        h: "使用 IBM Bob 的技能",
        p: "",
        paras: [
          "跑 `bob`，盘开或重启 Bob Shell，探 `~/.bob/skills` 已链之。首求令 Bob 用之。再跑翻全包，不改项形。",
        ],
        codeBlocks: [
          {
            code: "bob",
            file: "bash",
          },
        ],
        id: "use-the-skills-in-ibm-bob",
      },
      {
        h: "技能涵盖哪些内容",
        p: "",
        paras: [
          "直索制片；`/hyperframes` 携约参（片、事、动、观、声、评、字、叠）。",
          "|技能|它涵盖什么 |\n| - | - |\n| `/hyperframes` |首先阅读有关制作、编辑、动画或渲染视频、动态图形、字幕或叠加层的任何请求。保存渲染合同和工作循环，并指向格式、动作、外观、字幕、整部电影和故事板的参考。 |\n| `/hyperframes` | CLI 的工作：脚手架、检查、查看帧、编辑时间线、预览、本地或云端渲染、发布、项目历史记录。 |\n| `/hyperframes-cli` |大约 450 个现成的块和组件作为可编辑源安装：过渡、叠加、标题、动力学类型、标题、图表、地图、3D、摄像机移动。 |\n| `/hyperframes-registry` |音乐、音效、图像、图标、徽标、画外音、头像和生成的视频、文字记录、剪纸、颜色等级和外观，使用 HeyGen 或免费的本地工具；混合放置的音频。 |\n| `/media-use` |将任何视频文件重建为可编辑的 HyperFrames 项目（动态图形、说话的头像、真人动作、AI 生成的镜头），并与原始文件逐帧检查。HyperFrames专业版。 |\n| `/reverse-any-video` |使用五种经过验证的风格之一制作关于你的主题的新剧集：拼贴解释器、金融解释器、动画科学解释器、3D 品牌解释器、3D 真实犯罪。HyperFrames专业版。 |\n| `/style-sampling` | Figma 文件或框架：将资产、品牌标记、组件和故事板框架渲染为重建的运动。 |\n| `/figma` |演示文稿、宣传材料或互动材料。输出是可导航的甲板，而不是渲染的 MP4。 |\n| `/slideshow` |将现有视频代码或素材引入 HyperFrames（首先是 Remotion；还有 Motion Canvas、Lottie、Three.js、canvas、其他工具的渲染），逐帧进行验证。 |",
          "你可以直接命名技能，但无需记住名称即可启动。",
        ],
        codeBlocks: [],
        id: "what-the-skills-cover",
      },
      {
        h: "仅在需要时安装更多",
        p: "",
        paras: [
          "明装全集：`/hyperframes` 另装全发集。默除补购内技。",
          "或单装一技：跨多工无下取境用全。寻常项核心小而易新。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes skills",
            file: "bash",
          },
          {
            code: "npx skills add heygen-com/hyperframes --skill slideshow",
            file: "bash",
          },
        ],
        id: "install-more-only-when-you-need-it",
      },
      {
        h: "如果特工看不到技能",
        p: "",
        paras: [
          "个技定为代之真源，居 [HyperFrames 库](https://github.com/heygen-com/hyperframes/tree/main/skills)。",
        ],
        codeBlocks: [],
        bullets: [
          "启动新的代理会话。",
          "确认项目或全局技能目录属于你正在使用的代理。",
          "运行`npx skills add heygen-com/hyperframes --all`。",
          "当检查报告核心技能缺失或过时时，运行`npx hyperframes skills check`。",
        ],
        id: "if-the-agent-cannot-see-a-skill",
      },
      {
        h: "如果更新显示没有安装的技能匹配",
        p: "",
        paras: [
          "翻时 `skills@1.7.x` 视装名。即使安装了 HyperFrames 技能，它也会报告 `npx skills update heygen-com/hyperframes`。使用 HyperFrames 更新程序刷新已全局安装的核心集和 HyperFrames 技能： 独立的`heygen-com/hyperframes`命令接受技能名称，例如`No installed skills found matching`以仅更新全局`skills update`技能。存储库名称属于`npx skills update hyperframes -g`，如上面的安装步骤所示。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes skills update",
            file: "bash",
          },
        ],
        id: "if-an-update-says-no-installed-skills-match",
      },
      {
        h: "如果安装的技能出现 YAML 解析错误",
        p: "",
        paras: [
          "`/hyperframes` 警告点不可读装档。改前先备，尤自订。述多行续行须缩：续存档述体，此仅示 YAML 式。后跑 `npx hyperframes skills check` 验全，项装跑 `skills add`。",
          "补购内技如 `hyperframes-catalog`、`hyperframes-cloud` 出发集外。翻核心不修旧单装内技。YAML 警与名误可同跑，须各修。",
        ],
        codeBlocks: [
          {
            code: "---\nname: seam-craft\ndescription: >-\n  Render-correctness doctrine for scene-to-scene seams.\n  Load when assembling the master timeline.\n---",
            file: "yaml",
          },
        ],
        id: "if-an-installed-skill-has-a-yaml-parse-error",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
          "[让代理驱动Studio](https://hyperframes.heygen.com/guides/webmcp.md)",
          "[使用 Claude Code 制作视频](https://hyperframes.heygen.com/guides/with-claude-code.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  plugins: {
    lede: "HyperFrames 插件给编码智能体装齐 HyperFrames 技能：发布片、讲解、字幕、动态图形等视频契约与参考，外加 CLI、注册表与媒体技能，需要时加载。",
    sections: [
      {
        h: "Claude Code",
        p: "",
        paras: [
          "在你的终端中运行： 清单应包括`hyperframes`、`hyperframes-cli`和`media-use`。开始一个新会话或运行`/reload-plugins`，然后尝试： **在 Claude Code 的终端 UI 中启用自动更新：** 在项目中打开终端并运行 `claude`。在该会话中，运行 `/plugin`，打开 **Marketplaces**，选择 **hyperframes**，然后选择 **启用自动更新**。如果你通过 Claude Code 的 IDE 扩展或桌面应用程序安装，请在同一台计算机上使用此终端路由。第三方市场默认不启用此功能。有关详细信息，请参阅 [Claude Code 的自动更新指南](https://code.claude.com/docs/en/plugins/install#turn-auto-update-on-or-off-for-a-marketplace)。手动更新：",
          "更新后重新加载插件。要删除插件： 请参阅 [Claude 插件指南](https://code.claude.com/docs/en/plugins/install) 了解项目范围的安装和托管更新策略。",
        ],
        codeBlocks: [
          {
            code: "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes\nclaude plugin details hyperframes",
            file: "bash",
          },
          {
            code: 'Using /hyperframes:hyperframes, make a 5-second title card that says "Hello world".',
            file: "text",
          },
          {
            code: "claude plugin update hyperframes@hyperframes",
            file: "bash",
          },
          {
            code: "claude plugin uninstall hyperframes@hyperframes",
            file: "bash",
          },
        ],
        id: "claude-code",
      },
      {
        h: "GitHub Copilot CLI",
        p: "",
        paras: [
          "开始新的会话并要求 Copilot 使用 HyperFrames 技能制作相同的标题卡。如果技能不可见，请检查`/plugin`。",
          "这些是明确的更新；不要假设 Copilot CLI 共享 VS Code 的更新计划。请参阅 [Copilot 插件指南](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)。",
        ],
        codeBlocks: [
          {
            code: "copilot plugin marketplace add heygen-com/hyperframes\ncopilot plugin install hyperframes@hyperframes\ncopilot plugin list",
            file: "bash",
          },
          {
            code: "copilot plugin update hyperframes\ncopilot plugin uninstall hyperframes",
            file: "bash",
          },
        ],
        id: "github-copilot-cli",
      },
      {
        h: "VS代码",
        p: "",
        paras: [
          "开扩展视野搜 `/skills list`。以外市命令加市场，装 **hyperframes**，于代理定制验技能。VS Code 须开代理插件。",
          "起 `hyperframes` 后 VS Code 每 24h 自查更。手查走**扩展：查更新**。废装自扩展视野。UI 与工作区新注见 [VS Code 指南](https://code.visualstudio.com/docs/agent-customization/agent-plugins)。",
        ],
        codeBlocks: [],
        id: "vs-code",
      },
      {
        h: "光标",
        p: "",
        paras: [
          "团队市：**Dashboard → 插件与 MCP** 引 `@agentPlugins` 加 HyperFrames。队友自**定制**装。GitHub 市自更须 Cursor GitHub app 与市内**启用自更**开。",
          "本地装：解 HyperFrames 壤拷至 `heygen-com/hyperframes`，重载 Cursor 选**定制**。壤须含 `extensions.autoUpdate` 与 `heygen-com/hyperframes`。本地副本随 GitHub 更而手替，不订之。企策或禁地引。删壤即卸。",
          "此存储库的清单并不是公共 Cursor 市场列表的证明。公开列表及其更新要经过光标审核。有关市场和本地安装控件，请参阅 [Cursor 插件指南](https://cursor.com/docs/plugins)。",
        ],
        codeBlocks: [],
        id: "cursor",
      },
      {
        h: "双子座命令行界面",
        p: "",
        paras: [
          "重启 Gemini CLI 唤其用 HyperFrames 技能做标题卡。显管拓：钉版用 `gemini extensions install <url> --pin`。版必含 `skills/`。见 [Gemini 指南](https://geminicli.com/docs/extensions/reference/)。",
          "该插件本身保持只读状态，不包括浏览器或模型权重。",
        ],
        codeBlocks: [
          {
            code: "gemini extensions install https://github.com/heygen-com/hyperframes --auto-update\ngemini extensions list",
            file: "bash",
          },
          {
            code: "gemini extensions update hyperframes\ngemini extensions uninstall hyperframes",
            file: "bash",
          },
        ],
        id: "gemini-cli",
      },
      {
        h: "版本和更新",
        p: "",
        paras: [
          "插件束一源快照工序，跑清单录 CLI 版。代理走其束启，不在工序中跑 `--ref <tag>`。工程依、已下媒、外服各有版，不为插件冻。",
          "更新行为取决于客户端和源参考。例如，[Cursor GitHub 自动刷新](https://cursor.com/docs/plugins#keep-plugins-up-to-date) 会跟随推送到跟踪的分支，因此无需新的 CLI 版本即可更改技能内容。清单固定 CLI 版本，而不是已安装的技能提交。对于可重复安装，请保留版本标签或提取的版本存档并禁用自动更新。在每台计算机上安装相同的版本。基于 Git 的安装可以下载完整的源存储库。发布 ZIP 仅包含插件有效负载，但在本地加载提取的 ZIP 需要手动更新。只有具有 `--auto-update` 资产的版本才提供该便携式 ZIP。",
        ],
        codeBlocks: [],
        id: "versions-and-updates",
      },
      {
        h: "从独立技能或核心技能转向",
        p: "",
        paras: [
          "安装完整的插件并首先验证其库存。在 Claude 中，可以删除旧的 `gemini-extension.json` 安装： 使用独立技能管理器仅删除该代理的旧 HyperFrames 技能。首先检查位置：其他代理可能共享全局技能存储，并且应该备份本地编辑的技能。不要删除整个 `npx hyperframes skills update` 或`hyperframes-agent-plugin.zip` 目录。重新启动代理并确认它选择插件副本而不是重复的独立技能。",
        ],
        codeBlocks: [
          {
            code: "claude plugin uninstall core-skills@hyperframes",
            file: "bash",
          },
        ],
        id: "move-from-standalone-skills-or-core-skills",
      },
      {
        h: "如果工作流程丢失或过时",
        p: "",
        paras: ["把新版技能置入插件壤。"],
        codeBlocks: [],
        bullets: [
          "检查代理已安装的插件清单和版本。",
          "使用该代理的插件管理器进行更新，然后重新加载或重新启动它。",
          "检查旧的独立安装是否也在加载。",
          "对于固定版本，请验证该版本中是否存在工作流程。请勿混合",
        ],
        id: "if-a-workflow-is-missing-or-stale",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
          "[使用 Claude Code 制作视频](https://hyperframes.heygen.com/guides/with-claude-code.md)",
          "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "design-tools": {
    lede: "从 Figma 文件、Claude Design 或 Open Design 起步：完整保留视觉外观，仅重建需要动起来的部分。",
    sections: [
      {
        h: "保留什么作为图片",
        p: "",
        paras: ["作品成品且貌美，导出保留："],
        codeBlocks: [],
        bullets: [
          "徽标、图标、插图、纹理艺术品。",
          "一张截图，仍然证明了这一点。",
          "Figma 组件，当精确像素比编辑更重要时。",
          "故事板框架，作为外观的参考。",
        ],
        id: "what-to-keep-as-a-picture",
      },
      {
        h: "在 HTML 中重建什么",
        p: "",
        paras: [
          "播放中内容会变，HTML 重建：动效在帧间续，不剪。",
          "品牌色字：导入一次，到处复用。",
          "别只因设计工具给一堆完截图就动画截图。截图是证。变化在 HTML。",
          '<video aria-label="A design frame beside the same design rebuilt as working HTML" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/figma-to-html-demo-v1.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/figma-to-html-demo-v1.jpg" playsInline preload="metadata" />',
          "两个面板获得相同的点击次数。只有重建的一面才会做出反应，因为表单的图片无法接受输入。这就是本页的全部规则。",
        ],
        codeBlocks: [],
        bullets: [
          "插图的各个部分单独制作动画。",
          "屏幕显示真实的交互，或者被重新裁剪为其他尺寸。",
          "文本、颜色、布局或开/关状态发生变化。",
          "故事板框架的重点是它们之间的运动 - 构建它",
        ],
        id: "what-to-rebuild-in-html",
      },
      {
        h: "从 Figma 开始",
        p: "",
        paras: [
          "甩给智能体链接与所要结果：`/figma` 技能引美术、读品牌值、组件重建成可编 HTML，动作尽量转。全落工程，渲染不赖 Figma。令牌与命令出错见[Figma 参考](https://hyperframes.heygen.com/guides/figma.md)。",
        ],
        codeBlocks: [
          {
            code: "Use this Figma section as the source for a 20-second product intro:\nhttps://www.figma.com/design/FILE/Project?node-id=10-20\n\nKeep the brand type and colors. Rebuild the states that must move. Treat the\nframes as key moments, not slides.",
            file: "text",
          },
        ],
        id: "start-from-figma",
      },
      {
        h: "从Claude设计或开放设计开始",
        p: "",
        paras: [
          "它们先定布局、板色、字与幕向。",
          "[Claude 设计说明](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/claude-design-hyperframes.md) · [开放设计交接](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/open-design-hyperframes.md)",
        ],
        codeBlocks: [],
        bullets: [
          "为该工具提供 HyperFrames 说明文件和你的品牌材料。",
          "要求一个可行的项目，而不是松散的模型。",
          "将其保存到磁盘，然后使用编码代理打开该文件夹。",
          "让代理检查时间、动作、媒体、字幕和渲染。",
        ],
        id: "start-from-claude-design-or-open-design",
      },
      {
        h: "交接好不好？",
        p: "",
        paras: [
          "好工程须方向明，资产真或诚实标占位，可变处在可编源，媒字在本地，能开。验：跑一遍 check，后在[浏览器编辑器](https://hyperframes.heygen.com/studio.md)看它动——剧照不显时。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes check\nnpx hyperframes preview",
            file: "bash",
          },
        ],
        id: "is-the-handoff-any-good",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[Figma 集成](https://hyperframes.heygen.com/guides/figma.md)",
          "[重用带有变量的设计](https://hyperframes.heygen.com/concepts/variables.md)",
          "[品牌、模板和故事板](https://hyperframes.heygen.com/prompting/design-systems.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
