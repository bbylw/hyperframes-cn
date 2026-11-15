import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "studio-install": {
    lede: "Mac、Windows 和 Linux 版 HyperFrames Studio 应用是用 HyperFrames 做视频的最简单方法。你描述视频，电脑上的智能体构建它，你通过打字、指点画面、绘画或评论来修改它。你不需要写代码。小小的绿色向导 Framey 会在途中指向下一步。",
    sections: [
      {
        h: "下载和安装",
        p: "",
        paras: [
          "[tab] Mac",
          "**1. 下载** [下载 Mac 版应用](https://hyperframes.studio/studio/download?os=mac&src=docs-install)。一个文件适用于 Apple Silicon 和 Intel Mac。",
          "**2. 安装** 打开下载的磁盘镜像，双击 **Install HyperFrames**。安装过程会把应用复制到 Applications，并显示 **Checking it is really from HeyGen**，这可能需要一两分钟。当显示 **HyperFrames is in Applications** 后，选择 **Open HyperFrames**。",
          "如果你的 Mac 账号对 Applications 文件夹没有写入权限，安装过程会把应用放进主文件夹中的 Applications 文件夹。如果显示 **The download looks damaged**，选择 **Download again**。如果显示检查 **took too long**，说明没有安装任何东西：选择 **Try again**。",
          "[tab] Windows",
          "**1. 下载** [下载 Windows 版应用](https://hyperframes.studio/studio/download?os=windows&src=docs-install)。你会得到 `HyperFrames-win-x64.zip`。",
          "**2. 解压并打开** 右键 zip 并选择 **Extract All**。打开生成的 `HyperFrames-win32-x64` 文件夹，双击 `HyperFrames.exe`。应用会从那里自行更新。",
          "[tab] Linux",
          "**1. 下载** [下载 Linux 版应用](https://hyperframes.studio/studio/download?os=deb&src=docs-install)。64 位 Intel 和 AMD 电脑在 Debian、Ubuntu 及衍生系统上得到 `HyperFrames-amd64.deb`。",
          "**2. 安装并打开** 在终端中，进入你下载到的文件夹：",
          "```bash\nsudo apt install ./HyperFrames-amd64*.deb\n```",
          "然后从应用菜单打开 **HyperFrames**。",
          "更想要单文件便携版，或不在 Debian 系系统上？改为 [下载 AppImage](https://hyperframes.studio/studio/download?os=linux&src=docs-install)，然后在下载到的文件夹中运行：",
          "```bash\nchmod +x HyperFrames-x86_64*.AppImage\n./HyperFrames-x86_64*.AppImage\n```",
          "AppImage 就是完整应用。把它放在任何喜欢的位置，下次用同样方式打开即可。",
        ],
        codeBlocks: [],
        id: "download-and-install",
      },
      {
        h: "首次启动",
        p: "",
        paras: ["还会有一条说明，解释应用记录哪些使用数据。选择 **Got it** 即可关闭。"],
        codeBlocks: [],
        bullets: [
          "一份简短问卷询问你想做什么、用的哪个智能体。每个答案都是可选项，**Skip all** 也算一个答案。你选的内容决定 **Build your video** 打开的位置。如果智能体已设置好，它会成为你的首个对话。",
          "主页打开后会显示 **Create your first video** 卡片。见 [制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)。",
        ],
        id: "first-launch",
      },
      {
        h: "用 HeyGen 登录",
        p: "",
        paras: [
          "首次启动时，在问卷之后的首次点击时，应用会要求你登录。",
          "如果登录超时，请再次选择 **Continue with HeyGen**。如果选择 **Not now**，下次点击时应用还会再询问。随时可以从 **Settings** > **Account** 登录或退出。",
        ],
        codeBlocks: [],
        bullets: [
          "选择 **Continue with HeyGen**。浏览器打开 hyperframes.dev。",
          "在 10 分钟内完成登录。浏览器会把你送回应用，应用显示 **You're in!**，并继续你刚才点击的操作。",
        ],
        id: "sign-in-with-heygen",
      },
      {
        h: "更新",
        p: "",
        paras: [
          '<video aria-label="Settings, Updates: Check for updates" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/settings-updates-v2.jpg" playsInline preload="none" />',
          "应用会自动更新。当新版本就绪后，右下角会出现圆形按钮；点击它，应用会在没有任务运行时重启，并重新打开你之前打开的项目。如需手动检查，使用 **Settings** > **Updates** > **Check for updates**。如果更新卡住，再次点击按钮并选择 **Try again**，或选择 **Download it instead**。",
        ],
        codeBlocks: [],
        id: "updates",
      },
      {
        h: "作品保存在哪里",
        id: "where-your-work-is-kept",
        p: "",
        paras: [],
        bullets: [
          "**项目文件夹**：主目录下的隐藏文件夹 `.hyperframes-studio`，或你当初导入项目时所在的原始目录。每个文件夹都是标准的 HyperFrames 项目，因此也可以直接在[浏览器编辑器](https://hyperframes.heygen.com/studio/index.md)和[命令行 CLI](https://hyperframes.heygen.com/developers/cli.md) 中打开。",
          "**导出的视频**：系统的 Downloads（下载）文件夹。",
          "**应用设置与登录凭据**：Mac 上位于 `~/Library/Application Support/HyperFrames`，Windows 上位于 `%APPDATA%\\HyperFrames`，Linux 上位于 `~/.config/HyperFrames`。",
        ],
        codeBlocks: [],
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[故障排查](https://hyperframes.heygen.com/help.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-first-video": {
    lede: "在主页输入一句话，选择 **Let's go**。智能体可能会问一两个问题，向你展示视频静帧，并得到你批准后构建它。",
    sections: [
      {
        h: "流程",
        p: "",
        paras: [
          '<video aria-label="The Storyboard tab above the preview" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/storyboard-tab-v2.jpg" playsInline preload="none" />',
          "**1. 说出你想要什么** 在 **Make something** 中描述视频（例如“A 12-second launch teaser for Lumen, a running shoe that glows at night”）。用 **+** 添加文件，或在 **Reference** 中从喜欢的视频开始。",
          "**2. 回答它的提问** 当某件事重要而你没说时，智能体会用卡片提问：三个概念选哪个、产品应该是什么样、是否用你自己的图片。选一个（智能体会标出它推荐的那个），或选择 **Something else…** 输入，然后 **Send answer**。",
          "**3. 批准分镜** 开启 **Start with a storyboard**（默认）后，每个镜头会以静帧和时序显示在 **Storyboard** 标签页中。告诉它要改哪一帧，或选择 **Build the video**。",
          "**4. 观看，然后修改** 成品视频在 **Preview** 中播放。用说话、指点或绘画来修改任何内容：[用智能体编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)。",
          "如果你未登录或还没有智能体，应用会先带你完成那一步，再把请求发出去。",
          "[card] [动手练习：简报](https://hyperframes.heygen.com/lessons/the-brief) 20 分钟免费课程，含短视频、测验和一份练习简报。简报是目标、受众、两到四条具体要求，以及用引号写的确切话。",
        ],
        codeBlocks: [],
        id: "what-happens",
      },
      {
        h: "或者分步来",
        p: "",
        paras: [
          "**Take the step by step**（在主页 **Remix from inspiration** 旁边）会从真实发布视频中取的四个部分构建发布视频。第一次使用时它也会自动打开。",
          "![The Create your first video card with Hook, Proof, Turn and Call to action slots and a field for your website or idea](https://mintcdn.com/hyperframes/_6VyncuVwS2Xkc8Q/public/images/studio-app/first-video.jpg?fit=max&auto=format&n=_6VyncuVwS2Xkc8Q&q=85&s=754df32634c21de7640ff62bf98816b0)",
          "第一个视频卡片：四个部分，然后是你的网站或想法。",
          "| 部分 | 作用 |\n| - | - |\n| **Hook** | 在最初几秒抓住注意力 |\n| **Proof** | 展示产品在干活 |\n| **Turn** | 从问题翻到答案 |\n| **Call to action** | 落下品牌和号召 |",
          "把这些部分随机打乱直到喜欢，输入你的网站（它会给智能体你的字体、颜色和标志）或想法，然后选择 **Use this cut**。",
        ],
        codeBlocks: [],
        id: "or-take-the-step-by-step",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[使用品牌工具包](https://hyperframes.heygen.com/studio-app/brand-kits.md)",
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[安装 Studio 应用](https://hyperframes.heygen.com/studio-app/index.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-existing": {
    lede: "在 Claude Code、Codex 或其他智能体中启动了一个视频？在 Studio 应用中打开同一个文件夹并继续工作：预览会显示在对话旁边，你可以指向画面、绘制并发表评论。不会复制或移动任何内容，因此你的智能体和应用会在同一组文件上协作。",
    sections: [
      {
        h: "来自你的智能体：一条命令（Mac）",
        p: "",
        paras: [
          "在 Claude Code、Codex 或 Grok 会话中，进入项目文件夹后运行（或让你的智能体运行）： 应用会打开该项目，并且因为命令是在你的智能体会话中运行的，所以其对话会延续那次对话，无需再解释一遍这个视频。如果改为在普通终端中运行，应用仍会打开项目，但会使用一个新的对话。",
          "目前此交接功能仅在 Mac 上可用。在 Windows 和 Linux 上，以及尚未安装应用的地方，命令会改为打印下载链接。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes open",
            file: "bash",
          },
          {
            code: "◇  Opening Spring Launch in the HyperFrames desktop app\n   Its chat picks up this Claude Code conversation.\n   When the person is back here, run npx hyperframes catch-up to see what they did in the app.",
            file: "text",
          },
        ],
        id: "from-your-agent-one-command-mac",
      },
      {
        h: "来自应用：导入项目",
        p: "",
        paras: [
          '<video aria-label="The sidebar\'s Import projects opens a list of the projects on this computer" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/import-projects-v2.jpg" playsInline preload="none" />',
          "应用会查找你电脑上的 HyperFrames 项目。尚未打开过的项目会出现在侧边栏的 **Import projects** 下，并显示数量。选择某个项目上的 **Import**，或选择 **Import all**。",
          "导入会将项目加入 HyperFrames，但不会移动它：它仍留在原文件夹中，你的修改也会保存在那里。",
          "首次使用时，macOS 会在应用查看文稿、下载和桌面文件夹之前先请求许可。如果项目在别处，请选择 **File** > **Open Folder…**（<kbd>⌘</kbd> <kbd>O</kbd>，在 Windows 和 Linux 上为 <kbd>Ctrl</kbd> <kbd>O</kbd>），或将文件夹拖放到侧边栏。",
        ],
        codeBlocks: [],
        id: "from-the-app-import-projects",
      },
      {
        h: "交回你的智能体：catch up",
        p: "",
        paras: [
          "回到终端后，让你的智能体 catch up，或运行： 它会列出交接以来在应用中发生的内容：你提出了什么问题、Framey 做了什么，以及哪些文件发生了变化。你的智能体会读取这些内容并从那里继续。catch up 仅在 `npx hyperframes open` 是在你的智能体会话中运行时有效；对于从普通终端打开或在应用中导入的项目，没有可供 catch up 的交接。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes catch-up",
            file: "bash",
          },
        ],
        id: "back-to-your-agent-catch-up",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[了解项目界面](https://hyperframes.heygen.com/studio-app/workspace.md)",
          "[连接你的智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-reference": {
    lede: "找到一个你陶醉于其剪辑的视频？把它交给 Studio 应用。你的视频会获得它的剪辑、字幕和特效，并换上你自己的人物、文案和品牌。看一遍视频比描述更快，而一个只喜欢一半的视频，也比一张空白页面更好的起点。",
    sections: [
      {
        h: "1. 选择视频",
        p: "",
        paras: ["在 Home 中打开 **Reference**。然后："],
        codeBlocks: [],
        bullets: [
          "**Paste any URL**，再点击 **Use link**。一个来自 YouTube（普通视频或 Short）、TikTok、Instagram 或 X 的公开视频，最长 30 分钟，或一个已发布的 HyperFrames 项目。",
          "**Upload your reference**：从电脑中拖放一个文件。",
          "从旁边的动态中 **Pick a reference**，这些是为重混而制作的视频（Home 中也有 **Remix from inspiration**）。",
        ],
        id: "1-pick-the-video",
      },
      {
        h: "2. 应用读取并选择方式",
        p: "",
        paras: [
          "应用会观看参考视频并决定如何重制它： 如果无法判断，它会让你在两者之间选择，然后点击 **Continue**。",
        ],
        codeBlocks: [],
        bullets: [
          "**人物对镜头的视频**会变成 **Copy editing style**：你的视频会获得它的剪辑、字幕和特效，并使用你的素材或 AI 形象。",
          "**无人出镜的图形与动画**会变成 **Video brief**：用你的主题和素材重现其动态。",
        ],
        id: "2-the-app-reads-it-and-picks-the-way",
      },
      {
        h: "3. 说明主题",
        p: "",
        paras: [
          "对于 **Copy editing style**，应用会询问 **Who's on camera?** 对于 **Video brief**，填写 **What will your video talk about**（一两句话），并通过 **Upload assets** 添加自己的图片或片段。",
        ],
        codeBlocks: [],
        bullets: [
          "**Upload your own takes。** 如有需要可添加 **Editing instructions**，例如“剪掉停顿，控制在 30 秒以内”。",
          "**AI 形象：**你的照片或 HeyGen 主持人。说明形象要说什么，一两句话即可。",
        ],
        id: "3-say-what-its-about",
      },
      {
        h: "4. 替换为你的内容",
        p: "",
        paras: [
          "**What to swap** 会列出应用在参考视频中发现的部分，每项都标有出现位置，例如 “Your opening question 0:00-0:02” 或 “Your website URL 0:02-0:05”。选择每项的填充方式：",
          "| 选择 | 效果 |\n| - | - |\n| **Framey writes it** / **Framey decides** | Framey 根据你的主题填写 |\n| **Type yours** | 输入确切的文案 |\n| **Upload** | 使用你自己的文件 |\n| **Generate** | 生成图片或片段。选择后价格会显示在该行下方 |",
          "为视频选择品牌套件，或选择 **No brand kit**。工作区默认值保持你设置的内容。然后点击 **Continue**；Framey 可能会就视频未说明的内容追问一两个问题。",
        ],
        codeBlocks: [],
        id: "4-swap-what-should-be-yours",
      },
      {
        h: "5. 与原片对比",
        p: "",
        paras: [
          "Framey 构建期间，预览顶部的 **Show original** 会在画面上播放参考视频。构建完成后，同一按钮会将两者并排显示在同一时间轴上，方便你查看哪些匹配、哪些不匹配。然后像编辑其他视频一样 [编辑结果](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)。",
        ],
        codeBlocks: [],
        id: "5-compare-with-the-original",
      },
      {
        h: "公平地使用他人的视频",
        p: "",
        paras: [
          "应用复制的是剪辑风格，而非素材：你的视频由你自己的实拍、形象、文案和素材构建。除非你拥有权利，否则不要复用原片的素材、音乐或 Logo。",
        ],
        codeBlocks: [],
        id: "use-other-peoples-videos-fairly",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[灵感](https://hyperframes.heygen.com/examples.md)",
          "[用 AI 制作解说视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
          "[制作其他任意视频](https://hyperframes.heygen.com/guides/general-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-brand": {
    lede: "**品牌套件（brand kit）**保存你的颜色、字体、Logo 和文件。为项目选择一个套件后，智能体会按它构建每个视频：主 Logo 领衔标题和结尾卡，你的颜色和文字样式决定整体外观。",
    sections: [
      {
        h: "制作套件",
        p: "",
        paras: [
          '<video aria-label="Brand kits in the sidebar" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/brand-kits-nav-v2.jpg" playsInline preload="none" />',
          "打开侧边栏 **Home** 下的 **Brand kits**。",
          "[tab] 从你的网站 在 **New brand kit** 卡片上输入你的站点，例如 `yoursite.com`，然后选择 **Scan my site**。应用会从中读取你的颜色、字体、Logo 和截图。",
          "[tab] 从你自己的文件 从项目的品牌套件菜单中选择 **New kit from your own files**。你也可以将文件拖放到对话中，让 Framey 将它们放入套件。",
          "智能体也可以从站点制作套件。它在更改套件之前会显示一张审批卡。",
        ],
        codeBlocks: [],
        id: "make-a-kit",
      },
      {
        h: "套件包含的内容",
        p: "",
        paras: [
          "| 组成部分 | 用途 |\n| - | - |\n| **Colors** | 每种颜色都有角色：Main、Secondary、Accent、Text、Background 或 Neutral |\n| **Logos** | **Main logo** 领衔每个标题和结尾卡。可添加完整 Logo 或符号 |\n| **Text styles and fonts** | 视频使用的字体类型，并附带你的字体文件 |\n| **Files** | 智能体可使用的截图、产品图片和音频 |\n| **Rules** | 通俗易懂的规则，若有品牌指南 PDF 也可附上 |",
          "要修改套件，打开它并选择 **Edit**：添加颜色、文字样式、Logo 或规则，或移除不需要的内容。完成时选择 **Done**。下一次网站扫描会保留你添加的内容。",
          "套件文件可以是图片（PNG、JPEG、WebP、AVIF、GIF、ICO、SVG）、音频（MP3、M4A、AAC、OGG、WAV）或字体（WOFF2、WOFF、TTF、OTF）。",
        ],
        codeBlocks: [],
        id: "what-a-kit-holds",
      },
      {
        h: "将套件用于项目",
        p: "",
        paras: [
          '<video aria-label="The brand kit menu in a project" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/brandkit-chip-v2.jpg" playsInline preload="none" />',
          "每个项目都有自己的套件。打开项目中的品牌套件菜单 **Brand kit for this project**，选择一个套件，或选择 **No brand kit** 让 Framey 使用简洁样式。从未选择过的项目会使用工作区的默认套件。",
          "也可以从套件页面选择 **Use this kit**，或开始 **New project with this kit**。",
          "智能体会在每条消息中读取该套件，应用会将套件文件复制到项目的 `assets/brand-kit` 文件夹，因此视频在任何地方渲染效果都相同。",
        ],
        codeBlocks: [],
        id: "use-a-kit-for-a-project",
      },
      {
        h: "套件与你的团队",
        p: "",
        paras: [
          "工作区中的所有人都能在 **Yours** 下看到其套件，并在自己的项目中使用。你无法从 Studio 应用将套件分享到工作区之外，在 app.heygen.com 上制作的套件也不会显示在这里。只有工作区所有者或管理员才能更改工作区的品牌设置。",
        ],
        codeBlocks: [],
        id: "kits-and-your-team",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[了解项目界面](https://hyperframes.heygen.com/studio-app/workspace.md)",
          "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
          "[引用任意视频以重现其风格](https://hyperframes.heygen.com/studio-app/reference-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-clips": {
    lede: "**HeyGen Video 1** 根据描述生成一个不间断的镜头，最长一分钟。片段会落入项目文件，智能体将其放到时间轴上。",
    sections: [
      {
        h: "让智能体制作片段",
        p: "",
        paras: [
          '<video aria-label="Tools (#), then HeyGen Video 1" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/video1-tool-v2.jpg" playsInline preload="none" />',
          "**1. 打开 Tools** 在对话中输入 **#** 打开 **HyperFrames tools**，然后选择 **HeyGen Video 1**。",
          "**2. 设置时长** 选择时长胶囊以打开 **Length in seconds**。片段可为 5 至 60 秒，默认从 15 秒开始。",
          "**3. 描述镜头** 说明发生了什么、镜头如何运动以及画面风格，然后发送。智能体会制作片段并将其放到时间轴上。",
          "你可以在同一条消息中引导片段：",
        ],
        codeBlocks: [],
        bullets: [
          "**从一张图片开始**：提供一张图片，它将成为片段的确切第一帧。",
          "**匹配风格**：最多提供 9 张参考图。",
          "**复制动作**：提供一个 5 秒或更短的参考视频（更长的请先剪短，应用会拒绝），以及要执行动作的人物的图片。片段将是一条最多 15 秒的一镜成片，且没有起始图片。",
          "**形状**：16:9、9:16 或 1:1，480p 或 768p（768p 为默认）。",
        ],
        id: "ask-the-agent-for-a-clip",
      },
      {
        h: "或使用 Generate media",
        p: "",
        paras: [
          "**Generate media** 可以在不发送对话消息的情况下制作片段。在空时间轴上或在文案栏中找到它。选择 **Video**，选择 **Video 1** 模型，设置 **Quality**，如有需要可添加 **Start from** 图片。此表单制作的片段为 5 至 15 秒，16:9 或 9:16。同一表单还提供 **H3 Max** 和 **Seedance**。",
        ],
        codeBlocks: [],
        id: "or-use-generate-media",
      },
      {
        h: "更改已有片段",
        p: "",
        paras: [
          "在预览中选中一个视频，选择其上方工具栏中的 **Generate media**。描述修改内容（“下雪”、“变成夜景”），然后选择 **Make**。工具栏会显示开始前最多花费以及你的密钥剩余。",
          '<video aria-label="Select a clip, Generate media, describe the change, Make" src="https://static.heygen.ai/hyperframes-oss/docs/studio-demos/snow-demo-v2.mp4" poster="https://hyperframes.heygen.com/public/images/studio-app/snow-demo-v2.jpg" muted loop playsInline preload="metadata" />',
          "*“Make it snow”：HeyGen Video 1 把屋顶变白，给她换了个动作，新片段落入 Media。等待过程已被加速。* 保持片段尽量小：一个 7.8 MB 的 5 秒 1080p 文件返回了 **The references are too large to send**，而同一镜头用 720p 则成功通过。",
        ],
        codeBlocks: [],
        id: "change-a-clip-you-already-have",
      },
      {
        h: "费用",
        p: "",
        paras: [
          "在对话中，智能体会在你提出请求后立即制作片段，不会单独确认价格；**Generate media** 表单会在开始前显示价格。套餐覆盖时由你的 HyperFrames 套餐支付，否则由 **Settings** 中密钥上的 HeyGen API 额度支付。",
          "如果片段因 **Out of API credits** 中止，请在 HeyGen 中充值后重试。如果要求你设置密钥，请在 **Settings** 中添加 HeyGen API 密钥，或选择套餐。",
        ],
        codeBlocks: [],
        id: "what-it-costs",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[用免费智能体制作视频](https://hyperframes.heygen.com/guides/free-agents.md)",
          "[为视频添加 AI 形象主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-edit": {
    lede: "每次修改都以同样的方式开始：告诉智能体在哪里、说什么，然后发送。你可以打字、指向画面中的内容、在其上绘制，或在视频的某个时刻留下评论。",
    sections: [
      {
        h: "输入修改",
        p: "",
        paras: [
          "在对话底部的输入框（会显示你的智能体名称，例如 **Text to Claude Code**）中输入并按 Enter。输入 `@` 可将时刻、素材、文件或其他项目加入消息，输入 `#` 可使用 **Storyboard** 等工具（[每个菜单和面板](https://hyperframes.heygen.com/studio-app/workspace.md)）。",
          "智能体工作期间，Enter 会引导当前运行：它会停止并用你的话重新开始。Ctrl+Enter 则相反，会将你的消息排队到下一个运行。想互换的话，请在 **Settings** > **Agent** 中更改 **While Framey works, Send**。选择项和文件始终排队。",
          "[card] [练习：审阅与修正](https://hyperframes.heygen.com/lessons/review-and-correct) 免费的 20 分钟课程，包含一个短视频、一个测验和一份练习简报。回复之前请先开声音把第一个视频完整看完。",
        ],
        codeBlocks: [],
        id: "type-a-change",
      },
      {
        h: "在画面上指向、绘制或评论",
        p: "",
        paras: [
          '<video aria-label="Where Comment is, under the preview" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/comment-tool-v2.jpg" playsInline preload="none" />',
          "画面下方的工具，位于左侧：",
          "| 工具 | 用途 |\n| - | - |\n| **Select** (V) | 点击元素，选择 **Prompt to edit**（或按 A），并描述修改。再次点击可选择其容器。 |\n| **Draw** (D) | 圈出或标记一个位置，并说明要改什么。多次笔画会合并为一幅绘制。 |\n| **Comment** (C) | 在某个位置和时刻固定一条评论：**What should change here?** |",
          "画面以 **Select** 打开。按 Escape 可从其他工具返回它。右键点击元素可获得快捷操作，如 **Ask Framey**、**Hide**、**Bring to front**、**Replace with**、**Cut out object here**（在 Mac 且为 Apple silicon 的素材上）和 **Delete**。",
          "你也可以在时间轴上绘制一段，谈论视频的某一段，例如“把这一段剪紧”。",
        ],
        codeBlocks: [],
        id: "point-draw-or-comment-on-the-picture",
      },
      {
        h: "一次发送多条修改",
        p: "",
        paras: [
          "选择、绘制和评论不会单独运行。每一项都会成为 **Pending video edits** 中的一行。检查它们，为全部添加备注，然后用发送按钮作为一个请求发出，例如 **Send 3 edits to Claude Code**（运行期间为 **Queue 3 edits**）。选择 **Edit note** 可修改某行的文字，或选择 **Delete** 将其丢弃。",
        ],
        codeBlocks: [],
        id: "send-several-edits-at-once",
      },
      {
        h: "自己改时间轴",
        p: "",
        paras: [
          '<video aria-label="Show timeline opens the timeline under the preview" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/show-timeline-v2.jpg" playsInline preload="none" />',
          "有些修改手工更快。用预览下方的按钮显示时间轴。将鼠标悬停在片段上可按播放头 **Split**、**Delete**，打开 **Quick edit** 更改视频或音频片段的 **Speed**、**Volume** 和 **Fade**，向智能体咨询，或移除其背景。拖动片段可移动或裁剪它们。",
          "右键点击空白间隙可 **Close gap** 或 **Close all gaps**。",
        ],
        codeBlocks: [],
        id: "change-the-timeline-yourself",
      },
      {
        h: "获取灵感",
        p: "",
        paras: [
          '<video aria-label="The Inspirations panel on the right" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/inspirations-panel-v2.jpg" playsInline preload="none" />',
          "Home 的 **Remix from inspiration** 动态和项目的 **Inspirations** 标签页保存着真实视频中的短小示例时刻（**Motion graphics**、**A-roll Cuts**、**Mobile Ads**）。在 Home 上选择 **Add as inspiration**，或在标签页中选择 **Use**，可将某个时刻作为参考放入消息，然后说明如何使用并发送。",
        ],
        codeBlocks: [],
        id: "get-inspired",
      },
      {
        h: "撤销",
        p: "",
        paras: [
          '<video aria-label="Go back to before this, under each finished run" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/go-back-v2.jpg" playsInline preload="none" />',
          "按 Cmd+Z 撤销，按 Cmd+Shift+Z 重做（Windows 和 Linux 上为 Ctrl+Z 和 Ctrl+Shift+Z，或 Ctrl+Y）。对话中每次智能体运行下方也有各自的 **Undo** 按钮。",
        ],
        codeBlocks: [],
        id: "undo",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[导出视频](https://hyperframes.heygen.com/studio-app/export.md)",
          "[分享视频以供审阅](https://hyperframes.heygen.com/studio-app/share.md)",
          "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-workspace": {
    lede: "项目分为三列：左侧是与智能体的对话，中间是预览，右侧是面板。用 **Show timeline** 可在预览下方打开时间轴。",
    sections: [
      {
        h: "对话框：@、# 和 /",
        p: "",
        paras: [
          "三个按键会在你输入的位置打开菜单。",
          '<video aria-label="Typing @ opens the menu of things to add" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/at-menu-v2.jpg" playsInline preload="none" />',
          "**`@` 为你的消息添加内容。** 菜单按组排列智能体可使用的一切：你添加的 **Media**、**Scenes & brand kit**、**Inspirations**（真实视频中的时刻）、**Captions** 样式、**Voices**、其他 **Projects**、**Tools**，或 **Add files from your Mac**（Windows 上为 **your PC**）。按 **Tab** 可在组之间跳转。你选择的内容会以 chip 形式显示在文字上方，让智能体清楚知道你指的是哪个文件或样式。",
          '<video aria-label="Typing # opens HyperFrames tools" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/hash-tools-v2.jpg" playsInline preload="none" />',
          "**`#` 为本次请求选择工具**：**Storyboard**、**Brand kit**、**HeyGen Voice 1**、**Remove background**、**HeyGen Video 1**、**Reference video** 或 **Create assets**（部分账户还有 **Podcast edit** 和 **Computer use**）。当你想以特定方式完成某项工作时使用它（“#Remove background on the presenter, then put the title behind her”）。HeyGen 的工具在套餐覆盖时由你的 HeyGen 套餐计费，否则由 **Settings** 中的 HeyGen API 密钥计费。",
          '<video aria-label="Typing / opens commands and skills" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/slash-menu-v2.jpg" playsInline preload="none" />',
          "**`/` 运行命令或开启技能。** **/clear** 开始新对话（旧消息保留在上方），在 Claude Code 中 **/compact** 缩短长对话。其下方是现成的视频格式（创始人自述、AI 解读 reel、身后卡片、头部后字幕等）以及你已安装的技能：选择一个即可为项目开启。",
          '<video aria-label="The Skills menu in the chat header" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/skills-menu-v2.jpg" playsInline preload="none" />',
          "对话标题栏显示下一次请求使用的智能体、模型和 effort（点击可更改），**Skills** 列出智能体可使用的技能：HyperFrames 自带的（始终开启）、仅在选中时生效的 **Talking-head formats** 和 **Video workflows**，以及来自 Claude Code 或 Codex 的 **Your skills**。",
        ],
        codeBlocks: [],
        id: "the-chat-box-and",
      },
      {
        h: "Script：像文档一样编辑视频",
        p: "",
        paras: [
          "打开右面板顶部的 **Script**（部分账户从片段菜单打开）。视频中说出的每个词都会以文本形式出现。音频会发送到 HeyGen 进行转录，因此需要你的 HeyGen 登录包含此功能，或在 **Settings** 中提供 HeyGen API 密钥。",
          "选中词语（点击第一个，按住 Shift 点击最后一个），然后选择 **Cut** 或按 <kbd>⌫</kbd>。词语保留在脚本中并打上删除线，剪辑会和其他暂存内容一起等待在对话上方的 **Pending video edits** 中。选择 **Send 1 edit**（暂存越多数量越大），智能体会一次性应用全部，完成后视频会变短。若要在发送前放弃某个剪辑，请在 **Pending video edits** 中删除其行。要恢复已剪掉的词语，选中它们，选择 **Restore**，并一并发送。",
          '<video aria-label="Cut a sentence in the script, then send it to the agent" src="https://static.heygen.ai/hyperframes-oss/docs/studio-demos/script-demo-v2.mp4" poster="https://hyperframes.heygen.com/public/images/studio-app/script-demo-v2.jpg" muted loop playsInline preload="metadata" />',
          "选中词语后，工具栏提供： 当智能体发现填充词或重复 take 时，脚本顶部会显示它建议的剪辑数量以及能让视频变短多少，并提供 **Keep all** 和 **Cut all**。点击建议的剪辑可查看原因，只保留或剪掉那一条。",
        ],
        codeBlocks: [],
        bullets: [
          "**Comment**：针对这些词语给智能体的备注。",
          "**Cut**（已剪掉的词语上为 **Restore**）。",
          "**Fix words**：纠正转录听错的内容。音频保持不变。",
          "**Add**：在这些词语上添加 **Zoom in**、**B-roll shot** 或 **Title card**。",
          "**Make clip**（播客项目）：把词语剪成一个独立的竖版片段。",
          "**Ask**：向你的智能体询问这些词语。",
        ],
        id: "script-edit-the-video-like-a-document",
      },
      {
        h: "Media、Captions、Inspirations、Layers",
        p: "",
        paras: [
          "右面板顶部的图标行 **All files**、**Captions**、**Inspirations**、**Layers**（开启审阅时还有 **Reviews**），切换面板显示的内容：",
          '<video aria-label="The Captions panel" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/captions-panel-tight-v2.jpg" playsInline preload="none" />',
          "**Captions：** 91 种字幕样式。点击一个即可在对话中使用，然后说明要放在哪里。",
          '<video aria-label="The Inspirations panel" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/inspirations-panel-tight-v2.jpg" playsInline preload="none" />',
          "**Inspirations：** 真实视频中的时刻（动态图形、A-roll 剪辑、移动广告、shader），为你选中的任何内容提供灵感。",
          '<video aria-label="The Layers panel" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/layers-panel-tight-v2.jpg" playsInline preload="none" />',
          "**Layers：** 视频中的每个元素，从上到下排列；选中其一即可在预览中选中它。",
          "**Media** 按文件夹列出项目文件。将其加入对话即可谈论它（“use this as the background”），并可用加号按钮从电脑引入文件。",
        ],
        codeBlocks: [],
        id: "media-captions-inspirations-layers",
      },
      {
        h: "Framey",
        p: "",
        paras: [
          "预览旁的小绿色角色 Framey 会显示你的智能体正在做什么，并通知你视频已就绪或需要你处理。可在 **Settings** > **Framey** 中更改其外观。",
        ],
        codeBlocks: [],
        id: "framey",
      },
      {
        h: "预览工具",
        p: "",
        paras: [
          "预览下方：**Select** 可点击任意元素（右键可 **Ask Framey**、调整图层顺序、在 Mac 且为 Apple silicon 的素材上 **Cut out object here**），**Draw** 可圈出要改的内容，**Comment** 可在某个时刻留下备注。修改会累积并一起交给智能体；参见 [用智能体编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)。",
        ],
        codeBlocks: [],
        id: "the-preview-tools",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
          "[添加配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md)",
          "[引入设计：Figma、Claude Design、Open Design](https://hyperframes.heygen.com/guides/design-tools.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-connect": {
    lede: "应用用运行在你电脑上的智能体制作视频。首次在没有智能体的情况下发送请求时，会打开 **Connect an agent** 面板：选择一个智能体，应用会为你安装，然后协助你登录。",
    sections: [
      {
        h: "设置一个智能体",
        p: "",
        paras: [
          '<video aria-label="Settings, Permissions: every agent and its state" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/settings-permissions-v2.jpg" playsInline preload="none" />',
          "**1. 选择智能体** 在 **Connect an agent** 中，点击想要的智能体旁的 **Install**，或点击其电脑上已有的 **Use**。应用会询问 **Install … from …?** 并运行该公司的官方安装程序，大约需要一分钟。",
          "**2. 登录** 选择 **Sign in to Claude Code**（或你的智能体名称）并在浏览器中完成，或按面板的 Terminal 步骤操作 Antigravity、GitHub Copilot 和 OpenCode。",
          "**3. 发送** 智能体回复后，应用会发送你最初发起的请求。",
          "如果某一步失败，面板会显示可自行运行的命令：选择 **Copy**，然后 **Open Terminal**，并粘贴它。",
          "| 智能体 | 安装命令 | 登录 |\n| - | - | - |\n| Claude Code | `curl -fsSL https://claude.ai/install.sh \\| bash` | `claude auth login` |\n| Codex | `curl -fsSL https://chatgpt.com/codex/install.sh \\| sh` | `codex login` |\n| Grok | `curl -fsSL https://x.ai/cli/install.sh \\| bash` | `grok login` |\n| Antigravity | `curl -fsSL https://antigravity.google/cli/install.sh \\| bash` | run `agy` once |\n| GitHub Copilot | `curl -fsSL https://gh.io/copilot-install \\| bash` | `copilot login` |\n| OpenCode | `curl -fsSL https://opencode.ai/v2/install \\| bash` | optional: `opencode providers login` |",
        ],
        codeBlocks: [],
        id: "set-one-up",
      },
      {
        h: "权限：Auto 或 Full access",
        p: "",
        paras: [
          '<video aria-label="Settings, Agent: Auto or Full access" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/settings-agent-v2.jpg" playsInline preload="none" />',
          "**Auto** 为默认，允许智能体在你的项目中工作并使用互联网，并阻止高风险步骤。**Full access** 允许它安装和运行任何内容，不做检查。可在 **Settings** > **Agent** 中更改。",
          "GitHub Copilot 和 OpenCode 只能在 **Full access** 下运行：首次发送到它们时，应用会要求开启 Full access。",
        ],
        codeBlocks: [],
        id: "access-auto-or-full-access",
      },
      {
        h: "切换智能体",
        p: "",
        paras: [
          '<video aria-label="The agent picker in the chat header" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/agent-picker-v2.jpg" playsInline preload="none" />',
          "打开对话标题栏中的智能体选择器，选择一个就绪的智能体；它会从你的下一个请求开始生效。要为每个新请求设置智能体、模型和 effort，请使用 **Settings** > **Agent**。**Settings** > **Permissions** 会列出每个智能体及其状态（**Ready**、**Not signed in**、**Not installed**、**Needs an update**）以及修复它的按钮。",
        ],
        codeBlocks: [],
        id: "switch-agents",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[用免费智能体制作视频](https://hyperframes.heygen.com/guides/free-agents.md)",
          "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
          "[在 Studio 中继续 Claude Code 或 Codex 项目](https://hyperframes.heygen.com/studio-app/existing-project.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-export": {
    lede: "视频就绪后，选择项目顶栏中的 **Export**。**Export** 面板会在画面旁打开。",
    sections: [
      {
        h: "这台 Mac 或云端",
        p: "",
        paras: [
          "在 Export 的 **Render on** 下选择视频渲染的位置：**This Mac** 或 **Cloud**。你的 HyperFrames 套餐包含云端导出：Free 每月 5 次，Pro 无限次。在 Pro 上，除非你之前选择了其他位置，否则 **Cloud** 为默认。你也可以保存 HeyGen API 密钥：通过它付费的云端渲染会从你的 API 余额中扣除。",
          "|  | 本机（This Mac） | 云端（Cloud） |\n| - | - | - |\n| 费用 | 免费 | 包含在你的套餐中：Free 每月 5 次云端导出，Pro 无限次。通过 HeyGen API 密钥付费时，按视频分钟数从 API 余额计费；Export 会在开始前显示价格，4K 约为 1080p 的两倍 |\n| 你的电脑 | 渲染完成前处于忙碌状态 | 免费。渲染时可以继续工作 |\n| 你的文件 | 留在你的电脑上 | 项目会上传到 HeyGen 进行渲染 |\n| 限制 | 任意形状和长度 | 16:9、9:16 或 1:1，24、25、30 或 60 fps，项目最大 200 MB |",
          "密钥也可放在 **Settings** > **HeyGen API key**。如果项目超过 200 MB，请在 **Make it fit the cloud** 下选择 **Ask Framey to do it**：Framey 会把你的大视频和图片移到 HeyGen 资产中。无论哪种方式，视频都会落入你的 Downloads 文件夹。已开始的云端渲染无法停止：**Cancel** 只是停止等待，云端仍可能完成并扣除你的余额。",
        ],
        codeBlocks: [],
        id: "this-mac-or-the-cloud",
      },
      {
        h: "选择文件",
        p: "",
        paras: [
          "| 选择 | 选项 | 默认 |\n| - | - | - |\n| **Quality** | **1080p** 或 **Project size**，项目支持时还有 **4K** | 1080p |\n| **Format** | **MP4**、**WebM**、**MOV** | MP4 |\n| **Frame rate** | 24、25、30、50、60 或 **Custom…** | 30 |",
          "分享和上传选 MP4。只有当接收方要求其他格式时才选其他格式。",
        ],
        codeBlocks: [],
        id: "choose-the-file",
      },
      {
        h: "渲染",
        p: "",
        paras: [
          "选择渲染按钮，例如 **Render 1080p MP4**。面板会显示 **Preparing**、**Drawing frames**、**Encoding the video**、**Assembling** 和 **Saving to Downloads**。你可以关闭面板继续工作；渲染会继续进行。选择 **Cancel** 可停止它。",
          "智能体构建项目期间 **Export** 不可用。请等运行完成。",
        ],
        codeBlocks: [],
        id: "render",
      },
      {
        h: "找到文件",
        p: "",
        paras: [
          "视频会保存到你的 **Downloads** 文件夹，文件名按项目加日期和时间命名，例如 `Spring Launch 2026-05-04 10.30.mp4`。完成后，面板会显示 **Export ready** 和文件大小： 发送之前，请从头到尾完整观看一遍导出文件。",
        ],
        codeBlocks: [],
        bullets: [
          "**Open video** 播放它。",
          "**Show in Finder**（Windows 上为 **Show in File Explorer**，Linux 上为 **Show in folder**）打开文件夹。",
        ],
        id: "find-the-file",
      },
      {
        h: "如果导出失败",
        id: "if-the-export-fails",
        p: "",
        paras: [],
        bullets: [
          "渲染失败或无法启动：再次点击渲染按钮重试。如果持续失败，请让智能体检查项目，修复后再重新导出。",
          "**视频已渲染完成但未能保存到 Downloads 文件夹**：清理磁盘空间或确认 Downloads 目录存在，然后重新导出。",
          "**HyperFrames 无法启动内置 FFmpeg**：安装包可能已损坏，请从 [hyperframes.studio/studio](https://hyperframes.studio/studio?src=docs-export) 重新下载安装。",
        ],
        codeBlocks: [],
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[分享视频以供审阅](https://hyperframes.heygen.com/studio-app/share.md)",
          "[用智能体编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)",
          "[导出与幻灯片](https://hyperframes.heygen.com/studio/export.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "studio-share": {
    lede: "项目顶栏中的 **Share** 会把你的最新导出变成审阅页并复制其链接。发送给应该观看或评论的人。修改视频后，新版本会出现在同一链接上。",
    sections: [
      {
        h: "分享链接",
        p: "",
        paras: [
          '<video aria-label="Share in the top bar" poster="https://hyperframes.heygen.com/public/images/studio-app/spots/share-button-v2.jpg" playsInline preload="none" />',
          "选择 **Share**。应用会上传你最后一次的 MP4 导出，生成审阅页并复制其链接。如果还没有 MP4，它会先打开 Export 面板，导出完成即分享。参见 [导出视频](https://hyperframes.heygen.com/studio-app/export.md)。",
          "然后 HeyGen 会在审阅者看到之前检查视频。面板会显示 **Checking…**，可能需要几分钟。",
          "你需要登录 HeyGen。链接在你登录的工作区中生成，名称显示在 **Shares to** 下；选择 **Change** 可移到另一个工作区。",
        ],
        codeBlocks: [],
        id: "share-a-link",
      },
      {
        h: "选择谁可以打开",
        p: "",
        paras: [
          "默认情况下，**工作区中任何有链接的人都可以评论**。要更改，请选择 **Who has access** 下的行：",
          "| 选择 | 谁可以打开 |\n| - | - |\n| **Only you** | 无人 |\n| **Only people you invite** | 他们用受邀邮箱登录 |\n| **Anyone in** your workspace | 已登录该工作区的人，不包括外部人员 |\n| **Anyone with the link** | 无需登录。访客输入名字即可评论 |",
          "在旁边选择 **can comment** 或 **can only watch**。分享尚未准备好的内容之前，请先选择 **Only you**。",
          "移除某人的访问后可以再次邀请他。他会按你选择的角色返回；被移除的人会从活跃访问列表中隐藏。",
        ],
        codeBlocks: [],
        id: "choose-who-can-open-it",
      },
      {
        h: "发送新版本",
        p: "",
        paras: [
          "当项目自审阅页上的版本以来发生变化时，面板会提示。导出 MP4，然后选择 **Add this version**。链接相同：所有持有者都会看到新版本。**Open review page** 在浏览器中打开它。对于任何人可打开的链接，按钮为 **View as reviewer**，会以退出登录状态显示页面，如你的访客所见。",
        ],
        codeBlocks: [],
        id: "send-a-new-version",
      },
      {
        h: "关闭链接",
        p: "",
        paras: [
          "选择 **Turn off link**，然后确认。所有人会立即失去访问，评论保留。**Turn on with a new link** 会用新链接重新分享。",
        ],
        codeBlocks: [],
        id: "turn-off-the-link",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)",
          "[用 AI 制作解说视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
          "[制作其他任意视频](https://hyperframes.heygen.com/guides/general-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
