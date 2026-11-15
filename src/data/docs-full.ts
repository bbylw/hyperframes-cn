import type { DocContent } from "./docs";

export const DOCS_FULL: Record<string, DocContent> = {
 "avatar": {
  "lede": "化身是一位 HeyGen 演示者，他在镜头前朗读您的脚本。 HyperFrames 围绕它们构建一切：场景、图表、字幕和音乐，所有这些仍然可编辑。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "在 Studio 应用程序中或与您自己的代理一起，说出演示者出现的位置以及他们所说的内容： 如果您有头像和声音（您自己的数字双胞胎，或 HeyGen 库中的一个），请命名，或者描述您想要的人并让代理进行选择。头像是由 HeyGen 制作的，因此需要您的 HeyGen 帐户：在 Studio 应用程序中添加 HeyGen API 密钥；使用您自己的代理，安装 [HeyGen CLI](https://developers.heygen.com/cli) 并使用 C0 登录。头像使用 HeyGen 积分：您的计划在登录时获得的积分，带有 API 密钥的 API 积分。",
     "**已经自己录制了吗？** 跳过头像：添加您的剪辑并查看[字幕和剪辑](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。 **只想要演示者，不需要围绕他们设计任何内容？** 直接在 HeyGen 中制作；它不会是一个可编辑的 HyperFrames 项目。"
    ],
    "codeBlocks": [
     {
      "code": "A 30-second product update. A presenter opens with: \"This week we shipped three things.\"\nThen show each feature full screen with captions, and bring the presenter back to close.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "它可以围绕演示者做什么",
    "p": "",
    "paras": [
     "（[如何](https://hyperframes.heygen.com/guides/remove-background.md)），标题可以从它们后面经过。"
    ],
    "codeBlocks": [],
    "bullets": [
     "将它们放在幕后、幕前或幕后。去除背景后",
     "切换至全屏产品照片或图表并返回。",
     "逐字逐句地说明他们实际上所说的内容。",
     "将剪辑作为文件保留在项目中，因此渲染永远不会依赖于下载。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用 HeyGen Video 1 制作剪辑](https://hyperframes.heygen.com/studio-app/video-clips.md)",
     "[使用 AI 为视频添加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)",
     "[删除视频背景](https://hyperframes.heygen.com/guides/remove-background.md)"
    ]
   }
  ]
 },
 "captions": {
  "lede": "为其提供您的谈话内容、采访或播客剪辑。您可以获得与单词同步的字幕、设计好的卡片（标题、引言、数字、下三分之一），或者删除长停顿的更紧凑的剪辑。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "将剪辑添加到**制作一些东西**并说出你想要的内容： **喜欢其他人视频中的字幕吗？** 也粘贴其链接并说“这样的字幕”。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "Add clear animated captions to this interview. Keep the footage and its spoken edit unchanged.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "要求三件事之一",
    "p": "",
    "paras": [
     "扬声器后面设置大字，营造电影般的外观。",
     "卡片持有，一切都与所说内容同步。",
     "字幕遵循最终时间： 要重新排序故事或从长录音中挑选最佳时刻，请将您想要的视频描述为[自定义视频](https://hyperframes.heygen.com/guides/general-video.md)。",
     "告诉客服人员文字记录中可能遗漏的任何名称或术语，以及说话者的脸部和任何屏幕文本的位置，以便图形不会被遮挡。",
     "[卡片] [练习：编辑自己的素材](https://hyperframes.heygen.com/lessons/edit-your-footage) 20 分钟的免费课程，包含短片、测验和尝试简介。片段简介是目标、播放位置、两到三个编辑以及确切的标题词。"
    ],
    "codeBlocks": [
     {
      "code": "cut the pauses longer than 0.8 s out of assets/interview.mp4, then add clean\ncaptions to the tighter cut.",
      "file": "TEXT THEME={NULL}"
     }
    ],
    "bullets": [
     "**字幕：**屏幕上说出的文字，与声音同步。对于大多数视频，扬声器下方有一条干净的线，或者",
     "**设计的卡片：**标题、引文、数字标注、下三分之一或演讲者在演讲时缩到角落里",
     "**更紧密的剪辑：**删除长时间的停顿或伸展。先询问，然后为剪辑添加标题，这样"
    ]
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "有两个词可以帮助您：**轨道**是承载口语文字的字幕行； **嵌入**是在说话者后面设置的一个大词，表示最强烈的时刻。",
     "将字幕添加到 ./interview\\.mp4。清晰的逐字栏载有口头文字，下三分之一可读。将最受关注的单个单词提升为嵌入到演讲者后面；突出显示每条铁路线中的一个关键词。保持源宽高比。镜头保持不变。",
     "<video aria-label=\"Captions anchor rail\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/captions-anchor-rail-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面生成的演示者镜头的提示制作：一个嵌入扬声器后面，其他所有内容都在导轨上。* 导轨承载了大部分文本； **嵌入**是稀缺的、赢得的高峰——在高潮时主题后面出现一个大词，而不是每一行。嵌入整个成绩单是最常见的错误。"
    ],
    "codeBlocks": []
   },
   {
    "h": "设计卡片",
    "p": "",
    "paras": [
     "包 ./Founder-clip.mp4 与设计的图形覆盖卡同步到成绩单。 9:16 肖像，暖纸风格。打开全屏踢球+标题挂钩，在她命名公司时放下下三分之一，计算“200+团队/ 120万美元ARR”统计数据的数据标注卡，以及最强行的引述卡。扬声器在卡片下方保持全屏显示；当数据卡还存在时，她将她缩小到角落画中画中。该剪辑在下面原封不动地播放。",
     "您描述*卡片* — 它们的内容、时间安排以及演讲者如何与它们共享画布（全出血、分割、画中画或玻璃覆盖）。代理人设计并书写每张卡片；没有固定的原型列表，因此覆盖内容遵循文字记录的实际内容。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在重要的时候说这些",
    "p": "",
    "paras": [
     "**外观和语气（标题）。** 按内容描述外观：解释者/访谈/必读单词 → 清晰易读的栏杆；诗意/社会/电影→演讲者背后的英雄排版；炒作→更大胆、更有力的类型。不确定 → 干净的栏杆：文字被读取，场景保持安全。现成的字幕样式位于[字幕目录](https://hyperframes.heygen.com/prompting/captions-catalog.md)。",
     "**逐字导轨与高潮嵌入。**导轨是默认设置，包含大部分文本。嵌入是一种提升——一个峰值词出现在主题后面，稀缺且间隔（大约每节拍一个，从来没有两个同时可见，最多一个顶点）。告诉代理*哪些*线路获得嵌入；将其余部分留在导轨上。",
     "**样式、布局和画布（覆盖卡）。** 命名样式（暖纸、临床等）、布局（分割/堆叠/画中画/覆盖）和画布比例。匹配源比例是安全的默认设置，但您可以选择 — 桌面/YouTube 为 16:9，Reels/Shorts 为 9:16，Feed 为 4:5。",
     "**关键字突出显示。** 在字幕栏上，打孔词可以携带内嵌 C0 — 强调色或活动词弹出 — 无需离开字幕栏。要求“突出显示每行中的关键词”，这样就可以保持可读性。"
    ],
    "codeBlocks": []
   },
   {
    "h": "变体",
    "p": "",
    "paras": [
     "[手风琴] 电影字幕嵌入（逐字表达情绪） > ./poem.mp4 上的电影字幕 — 无轨道、小写斜体英雄排版在扬声器后面合成，单词累积为一列。每个想法一个顶点词，它们之间有空气。 4:5。切勿对素材进行评分。",
     "放下栏杆并将所有东西都放在扬声器后面，适合诗意/社交/“电影”询问情绪在哪里胜过严格的可读性，而不是在必须阅读单词的解释器上。",
     "[手风琴] 明亮的场景字幕 > 将逐字字幕添加到 ./outdoor-vlog.mp4。这是明亮的日光场景，因此请使用打印在表面上的近乎黑色的字体，而不是会被洗掉的浅色外观。保持可读的导轨。 16:9。",
     "浅色、屏幕混合类型在明亮的背景上显得黯淡（亮度高于 180）；深色、不透明类型。将外观与场景相匹配。",
     "[手风琴] VFX 级主题字幕 > 在 ./hype-clip.mp4 上注入能量 — 我希望字幕具有强烈冲击力：带有爆炸顶点的逐字标记轨道。 Rail 逐字记录；赔付线是定位球。 9:16。",
     "命名处理方式——冲压型、在支付线上爆炸——而不是“让它爆炸”。 A-roll 仍未评级。",
     "[手风琴] 景观数据重新切割 > 将 ./analyst-interview\\.mp4 重新剪辑为具有临床风格的 16:9 解释者。分体式布局：扬声器在右侧，数据卡在左侧。每个主张都有卡片——标题数字的计数、两个选项的瑞士网格比较、技术部分的终端式标注。自动调整 5 分钟剪辑的卡片计数速度。影片未受影响。",
     "布局（split/stack/pip/overlay）设置扬声器和卡片如何共享画布；如果不加说明，卡片密度会随着剪辑的长度而变化——在 5 分钟的剪辑中，大约每 12-20 秒一张卡片。"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**剪辑前添加字幕。** 字幕按原样与剪辑同步。先剪切，再剪切字幕，否则字幕会偏离文字。",
     "**嵌入每个单词。** 在会说话的头上，导轨是逐字默认的；把每一个标题都放在主题后面，就会掩盖文字，让高潮无所事事。",
     "**多主题剪辑。** 演讲者后面的文本与一个人相对应；两个扬声器或硬剪切使其闪烁。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0（在解释器上）",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0 — 或使用单主题剪辑。"
    ]
   },
   {
    "h": "回顾重要的事情",
    "p": "",
    "paras": [
     "然后[更改](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)：询问代理更正的单词或时间，或者在编辑器中手动移动标题。",
     "要从转录文件导入更正的单词，请运行C0。它会替换现有字幕中的完整文字记录，并保留其周围的字幕代码。"
    ],
    "codeBlocks": [],
    "bullets": [
     "名称、产品术语和编号正确。",
     "字幕跟随在所说的话之后。",
     "图形避免了面孔和镜头的重要部分。",
     "该视频有声音且静音。",
     "最终字幕或图形会在视频结束前清除。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[添加画外音、音乐、音效和字幕](https://hyperframes.heygen.com/guides/voice-and-audio.md)",
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
     "[在视频中添加AI头像演示者](https://hyperframes.heygen.com/guides/avatar-presenter.md)"
    ]
   }
  ]
 },
 "data-maps": {
  "lede": "过渡可以指向数字，但动画图表或计数会显示数字本身。本页涵盖图表、计数器和地图。",
  "sections": [
   {
    "h": "图表：命名块，或手绘",
    "p": "",
    "paras": [
     "获取图表有两种方法，选择与控制有关： 内联或作为文件提供数据。小编按提示直走； CSV 在构建时被引用和解析（保持确定性 — 无[渲染时获取](https://hyperframes.heygen.com/concepts/definism.md)）。",
     "12 秒 1920x1080 视频。标题“最常用的语言”，副标题“受访者比例，2026 年调查”。将其转换为动画条形图，每个条形上都有交错显示和计数的值标签，每个标签都带有后缀 C0： ```` Python 41、TypeScript 33、Rust 19、Go 14、Java 9",
     "```` 使用C0注册表块。没有音频。",
     "<video aria-label=\"Chart languages\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/chart-languages.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示渲染，未经编辑 - 标签计数，而下一个条已经在增长。* 10 秒 1920x1080 视频，深色石板背景。标题“2026 年热门语言”位于左上角。五个水平条（Python、TypeScript、Rust、Go、Java）从零开始以交错的方式开始，在动画中间两次超越对方；每个条形都有一个右边缘值标签，计数到其最终百分比。最终状态保持 2 秒，活着——领导者脉冲一次，定时精确地完成最后一帧，绝不是冻结的尾巴。手工创作标记（没有图表库）并使它们“看起来”是手绘的：不稳定的墨水笔划，而不是干净的矩形。说出哪两对超车以及何时超车，否则揭晓者每次运行都会落在不同数量的交叉口上。没有音频。",
     "<video aria-label=\"Barrace handdrawn\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/barrace-handdrawn.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示渲染，未经编辑 - 手工创作的墨迹笔划，没有图表库；排名交换两次。* **说明该块*或*选择退出它 - 不要将其隐式保留。**“动画化此数据”没有决定在通用块和即兴布局之间漂移。",
     "**为您要求的动画设置数字格式。** 里程表计数需要固定的数字列； C0范围迫使C1尴尬的开始。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**命名 [`data-chart`](https://hyperframes.heygen.com/catalog/blocks/data-chart)** 以获得内置的动画条形图 + 折线图 - 交错显示、值标签、纽约时报风格的排版 - 并为其提供您的数字。快速、一致，无需设计决策。",
     "**说“手绘所有内容 - 无图表库”** 让代理从内联 SVG 和 GSAP 构建图表。你放弃了块的抛光，以完全控制形状、运动和布局——超越动画中间的酒吧竞赛，绘制匹配柜台的弧线，没有图书馆提供的布局。",
     "**避免：** C0",
     "**改为：** C0 **或** C1",
     "**避免：** C0",
     "**相反：** C0"
    ]
   },
   {
    "h": "统计统计",
    "p": "",
    "paras": [
     "对于单个英雄数字，[C0](https://hyperframes.heygen.com/catalog/blocks/apple-money-count) 是苹果风格的财务计数器 - 它从 $0 开始滚动，闪烁绿色，并用声音爆裂金钱图标。当你想要那种精确的繁荣时，请说出它；当您想要自己类型的裸数字时，可以手绘。",
     "6 秒 1920x1080 视频，深海军蓝背景。节拍 1（0-1 秒）：标签“ARR”在顶部中心逐渐变小。节拍 2（1-4 秒）：一个巨大的数字随着里程表滚动而计数达 420 万美元，在落地时逐渐消失。节拍 3（4-6 秒）：“+312% YoY”在下方以绿色标记，然后进入温和的环境空闲状态。使用C0注册表块作为基础。没有旁白。",
     "<video aria-label=\"Money count\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/money-count.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示渲染，未经编辑。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "地图：将要求与地图相匹配",
    "p": "",
    "paras": [
     "每个地图块回答不同的地理问题。说出地图的*用途*并命名匹配的块：",
     "|你想要... |将此块命名为 |长度|",
     "| - | - | - |",
     "|按值（等值线）对美国各州进行着色 | [C0](https://hyperframes.heygen.com/catalog/blocks/us-map) | 12 秒 |",
     "|按数值（比例气泡）计算美国城市规模 | [C0](https://hyperframes.heygen.com/catalog/blocks/us-map-bubble) | 12 秒 |",
     "|绘制美国城市之间的联系（出发地→目的地）| [C0](https://hyperframes.heygen.com/catalog/blocks/us-map-flow) | 12 秒 |",
     "|将美国各州显示为等权六角网格 | [C0](https://hyperframes.heygen.com/catalog/blocks/us-map-hex) | 10 秒 |",
     "|自治区为西班牙遮阳 | [C0](https://hyperframes.heygen.com/catalog/blocks/spain-map) | 12 秒 |",
     "|一个国家一个国家地遮蔽世界| [C0](https://hyperframes.heygen.com/catalog/blocks/world-map) | 14 秒 | 美国地图编码相结合 - 要求“对州进行阴影*并*绘制两个城市之间的流量”会得到一种组合：代理将源头的块合并到共享投影上，以便弧线准确落在分区统计图的州上。",
     "12 秒 1920x1080 视频。美国的分区统计图通过交错显示和渐变图例按采用率对各州进行阴影，然后在旧金山、奥斯汀和纽约之间绘制连接弧。使用C0和C1注册表块。没有音频。",
     "<video aria-label=\"Validate us map flows\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-us-map-flows.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示渲染，未经编辑。* [！笔记] 地图块在运行时从 CDN 获取地理数据，这违反了确定性渲染规则 - 代理将投影几何图形烘焙到合成中。你永远不需要提出这个要求；这是正确构建地图的一部分。",
     "**选择编码，不要只说“地图”。** Choropleth（颜色）、气泡（大小）、十六进制（等权）和流（弧）从相同的数据讲述不同的故事。",
     "**命名该地区的区块。** 等值线图是特定于地区的，带有烘焙投影（C0 是 D3 等角圆锥曲线，C1 是自然地球） - 没有通用的“任何国家”地图。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0→C1，或C2→C3",
     "**避免：** C0（将投影和地理留给机会）",
     "**相反：** C0"
    ]
   },
   {
    "h": "航线和航班",
    "p": "",
    "paras": [
     "对于点对点的旅程——在地图上绘制一条带有着陆节奏的路线——[C0](https://hyperframes.heygen.com/catalog/blocks/nyc-paris-flight)是苹果风格的飞行动画：一架飞机从纽约飞往巴黎，带有标记圆圈、着陆流行声和音效。使用它作为基础并在提示中重新指向端点。",
     "6 秒 1920x1080 视频。一张逼真的地图，其中有一架飞机在两个城市之间飞行，在出发地有一个标记圆圈，在目的地有一个着陆弹出窗口。使用 C0 注册表块作为基础 — 路线为纽约 (JFK) → 巴黎 (CDG)，两端都有标记。保留该街区自己的标题卡和路线标记。在已确定的地图上结束，而不是在该街区的白色交接框架上。没有音频。",
     "<video aria-label=\"Flight route\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/flight-route.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示渲染，未经编辑。* **路线是有车辆的流动，而不是静态弧线。**如果你想要绘制的弧线没有平面和声音，那就是C0；如果你想要旅途性能，那就是C1。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `draw a line from NYC to Paris`（仅弧线和全飞行之间不明确）",
     "**相反：** C0→C1"
    ]
   },
   {
    "h": "下一步去哪里",
    "p": "",
    "paras": [
     "[！笔记] **在真实的电影中**：[完整电影](https://hyperframes.heygen.com/prompting/capstone.md) 的“测量”和“无处不在”区域是本页的首尾相连：英雄计数落地时，C0 条从时间线上升起，然后同一根线在 C1 块的真实云渲染区域上变成大圆弧（从电影中剪切，如下）。",
     "这是购买该作品的[完整顶点提示](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)中的条款 - 您可以为自己的视频提升提示语言： **测量（14-21秒）。** 电线成为图表基线（相同的线，相同的厚度 - 没有切割）：调整**C0°注册表块** - 六个标记条在语音提示上从电线本身升起，而英雄数字在巨大的表格单声道中在它们旁边计数：**50+目录块**（真实的注册表计数）\\[...]",
     "**到处（21-28秒）。**电线弧线和地面脱落：调整**C0注册表块** - 虚线世界地图在下方滚动，而电线则变成一条弧形穿过它的大圆路线。真实的渲染基础设施，如实标记：脉冲在 AWS 和 Google Cloud 区域（US-EAST-1 · EU-WEST-1 · AP-SOUTH-1）亮起，带有“CLOUD RENDER · LAMBDA + CLOUD RUN”启动器 \\[…]",
     "<video aria-label=\"Capstone region data map\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-data-map.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款，渲染 - 从成品电影中剪切的区域。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "[一次性提示的剖析](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt) — 骨架，以及为什么里程表需要固定的数字列。",
     "[复制粘贴示例](https://hyperframes.heygen.com/prompting/examples.md) — 条形图竞赛和统计图块提示进行调整。",
     "[生成的艺术作品](https://hyperframes.heygen.com/prompting/color-grading.md# generated-artwork) — 手绘 HTML/CSS/SVG 的闪光点和闪光点。",
     "[规范转盘](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify) - 决定何时命名块而不是手绘。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "【完整影片，提示提示】(https://hyperframes.heygen.com/prompting/capstone.md)",
     "[动画条形图](https://hyperframes.heygen.com/catalog/components/animated-bar-chart.md)",
     "[编辑现有视频](https://hyperframes.heygen.com/prompting/editing-existing-videos.md)"
    ]
   }
  ]
 },
 "design-tools": {
  "lede": "已经有了设计——Figma、设计工具草案、品牌套件？一条规则决定了每件作品的表现方式：",
  "sections": [
   {
    "h": "保留什么作为图片",
    "p": "",
    "paras": [
     "当这件作品刚刚放在那里并且看起来正确时，保留导出："
    ],
    "codeBlocks": [],
    "bullets": [
     "徽标、图标、插图、纹理艺术品。",
     "一张截图，仍然证明了这一点。",
     "Figma 组件，当精确像素比编辑更重要时。",
     "故事板框架，作为外观的参考。"
    ]
   },
   {
    "h": "在 HTML 中重建什么",
    "p": "",
    "paras": [
     "当视频播放时内部发生变化时重建它： 运动，不要在完成的帧之间进行剪切。",
     "品牌颜色和字体：导入一次，随处使用。",
     "不要仅仅因为设计工具制作了一堆完成的屏幕截图而对其进行动画处理。截图为证。 HTML 是变化的部分。",
     "<video aria-label=\"A design frame beside the same design rebuilt as working HTML\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/figma-to-html-demo-v1.mp4\" poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/figma-to-html-demo-v1.jpg\" playsInline preload=\"metadata\" />",
     "两个面板获得相同的点击次数。只有重建的一面才会做出反应，因为表单的图片无法接受输入。这就是本页的全部规则。"
    ],
    "codeBlocks": [],
    "bullets": [
     "插图的各个部分单独制作动画。",
     "屏幕显示真实的交互，或者被重新裁剪为其他尺寸。",
     "文本、颜色、布局或开/关状态发生变化。",
     "故事板框架的重点是它们之间的运动 - 构建它"
    ]
   },
   {
    "h": "从 Figma 开始",
    "p": "",
    "paras": [
     "向代理提供链接和结果： C0 技能导入艺术品、读取品牌价值、将组件重建为可编辑的 HTML，并尽可能地转换动作。一切都落在项目中，因此渲染永远不依赖 Figma。令牌、命令和错误：[Figma 参考](https://hyperframes.heygen.com/guides/figma.md)。"
    ],
    "codeBlocks": [
     {
      "code": "Use this Figma section as the source for a 20-second product intro:\nhttps://www.figma.com/design/FILE/Project?node-id=10-20\n\nKeep the brand type and colors. Rebuild the states that must move. Treat the\nframes as key moments, not slides.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "从克劳德设计或开放设计开始",
    "p": "",
    "paras": [
     "这些首先确定布局、调色板、类型和场景方向。",
     "[Claude 设计说明](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/claude-design-hyperframes.md) · [开放设计交接](https://github.com/heygen-com/hyperframes/blob/main/docs/guides/open-design-hyperframes.md)"
    ],
    "codeBlocks": [],
    "bullets": [
     "为该工具提供 HyperFrames 说明文件和您的品牌材料。",
     "要求一个可行的项目，而不是松散的模型。",
     "将其保存到磁盘，然后使用编码代理打开该文件夹。",
     "让代理检查时间、动作、媒体、字幕和渲染。"
    ]
   },
   {
    "h": "交接好不好？",
    "p": "",
    "paras": [
     "一个好的项目有明确的方向、真实的资产或诚实标记的占位符、可能发生变化的可编辑源、本地媒体和字体以及可打开的项目。自己检查一下： 然后观看它在[浏览器编辑器](https://hyperframes.heygen.com/studio.md)中移动——剧照无法显示时间。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes check\nnpx hyperframes preview",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Figma 集成](https://hyperframes.heygen.com/guides/figma.md)",
     "[重用带有变量的设计](https://hyperframes.heygen.com/concepts/variables.md)",
     "[品牌、模板和故事板](https://hyperframes.heygen.com/prompting/design-systems.md)"
    ]
   }
  ]
 },
 "examples": {
  "lede": "此页面上的每个视频都是使用 HyperFrames 制作的：发布影片、卡通、解说、3D、徽标刺痛、现场编码音乐。单击其中一个即可通过声音观看。",
  "sections": [
   {
    "h": "重新混合您喜欢的视频",
    "p": "",
    "paras": [
     "获得您喜欢的视频的最快方法就是从一个开始。下面的每个视频都是混音：某人的原创视频，在 HyperFrames 中用新词、人物和品牌重建。悬停即可播放。像一个？选择 **Remix in Studio** 并制作您自己的版本；请参阅[参考任何视频](https://hyperframes.heygen.com/studio-app/reference-video.md) 了解其工作原理。"
    ],
    "codeBlocks": []
   },
   {
    "h": "推出影片和动态图形",
    "p": "",
    "paras": [
     "产品发布和以类型为主导的动作，根据原作的剪辑、时间和效果进行重建。"
    ],
    "codeBlocks": []
   },
   {
    "h": "谈话头编辑",
    "p": "",
    "paras": [
     "流行 Reels、TikTok 和 Shorts 的编辑风格，采用不同的演示者：字幕、剪辑、标注和节奏。"
    ],
    "codeBlocks": []
   },
   {
    "h": "1:1 重新创建任何视频",
    "p": "",
    "paras": [
     "将 HyperFrames 指向已完成的视频，它会以可编辑的 HTML 格式重建同一部电影——手势、类型、时间等等。下面，每个 **参考**（原始的，在左侧）位于其 **HyperFrames 复制品**（右侧）旁边，逐帧匹配。",
     "**大佬** 38.58s · 60fps",
     "<video poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-oblist-reference.jpg\" playsInline preload=\"none\" />",
     "参考资料——原片",
     "<video poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-oblist-replica.jpg\" muted playsInline preload=\"none\" />",
     "超帧复制品 **Srinika × Mercury** 30.56s · 25fps · 头像片段",
     "<video poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-srinika-reference.jpg\" playsInline preload=\"none\" />",
     "参考资料——原片",
     "<video poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/reverse-srinika-replica.jpg\" muted playsInline preload=\"none\" />",
     "超帧复制品"
    ],
    "codeBlocks": []
   },
   {
    "h": "安装最多的块",
    "p": "",
    "paras": [
     "这些可立即运行的示例是根据过去 30 天内人工请求的安装来订购的。将任何块添加到项目中，然后就地自定义其内容。",
     "|示例|从这里开始 |",
     "| - | - |",
     "|标志结尾 | npx 超框架添加徽标结尾 |",
     "|数据图表 | npx 超帧添加数据图表 |",
     "|社论闪光覆盖 | npx 超帧添加编辑闪存叠加 |",
     "|有机漏光覆盖 | npx 超框架添加有机光泄漏覆盖 |",
     "| mk-进度统计 | npx 超帧添加 mk-progress-stat |",
     "|流程图| npx 超框架添加流程图 |",
     "| mk 规格列表 | npx 超框架添加 mk-specs-list |",
     "| mk-标注-突出显示 | npx 超框架添加 mk-callout-highlight |",
     "|硬件标题 | npx 超框架添加硬件标题 |",
     "|代码输入 | npx 超框架添加代码输入 |",
     "| lt-暗卡 | npx 超框架添加 lt-dark-card |",
     "|电影变焦| npx 超帧添加电影缩放 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "项目模板",
    "p": "",
    "paras": [
     "初始化模板仍然可用于搭建完整的项目。",
     "|模板|良好的起点 |",
     "| - | - |",
     "|暖粒 |品牌、生活方式和编辑工作 |",
     "|播放模式 |充满活力的社交视频和产品发布|",
     "|瑞士电网|技术、结构和企业故事 |",
     "|动力型 |以类型为主导的宣传片、简介和标题卡 |",
     "|决策树|可解释的图表和教程 |",
     "|产品促销|多场景产品展示|",
     "| nyt-图 |编辑图表和数据故事|",
     "|维涅利|大胆的肖像公告|",
     "|空白|代理生成或完全定制的工作 | [！提示] 使用 npx hyperframes init my-video --example \\T0 来获取完整的项目模板，或者 npx hyperframes add \\T1 来从上面的示例之一开始。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[找到解决项目的方法](https://hyperframes.heygen.com/studio-app/workspace.md)",
     "[使用代理编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)",
     "[用AI制作动态图形](https://hyperframes.heygen.com/guides/motion-graphics.md)"
    ]
   }
  ]
 },
 "faceless-explainer": {
  "lede": "从主题、文章或笔记开始。 HyperFrames 发明了教授它的排版、图表、抽象图形和数据可视化。",
  "sections": [
   {
    "h": "使用 HyperFrames 制作的解释器",
    "p": "",
    "paras": [
     "任何风格都可以。同样的请求会以木版画、3D 教程或手绘图的形式返回，具体取决于您展示的内容。",
     "<video aria-label=\"The journey of k\" src=\"https://static.heygen.ai/hyperframes-oss/homepage/showcase/hq/k-v1.mp4\" poster=\"https://static.heygen.ai/hyperframes-oss/homepage/showcase/poster/k-v1.jpg\" playsInline preload=\"metadata\" />",
     "**“k”的旅程**：一个字母如何跨越海洋。木刻版画，用技巧制作。",
     "<video aria-label=\"How phone GPS works\" src=\"https://static.heygen.ai/hyperframes-oss/docs/films/gps-explainer-v1.mp4\" poster=\"/public/images/films/gps-explainer-v1.jpg\" playsInline preload=\"metadata\" />",
     "**手机 GPS 的工作原理**：根据参考视频在 Studio 应用程序中以其风格制作。",
     "<video aria-label=\"Axe chop\" src=\"https://static.heygen.ai/hyperframes-oss/homepage/showcase/hq/axe-v1.mp4\" poster=\"https://static.heygen.ai/hyperframes-oss/homepage/showcase/poster/axe-v1.jpg\" playsInline preload=\"metadata\" />",
     "**斧头砍**：3D 操作方法，一步一步。"
    ],
    "codeBlocks": []
   },
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "**从您喜欢的解释开始。** 在 Studio 应用程序中，在主页上打开 **参考** 并粘贴其链接（YouTube、TikTok、Instagram 或 X），上传文件，或在 **选择参考** 下选择一个。然后说出你的主题：你有关于你的主题的节奏和绘画风格。你不必热爱这一切；从一件你喜欢的事情开始就足够了。参考使用您的 HeyGen API 密钥，应用程序第一次会要求您提供该密钥。",
     "**或者在**做某事**中描述它**，并附加或粘贴您的注释： 说明哪些事实或措辞必须准确。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "Turn these notes into a 60-second explainer for people new to the topic: [paste notes]",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "想法该如何落地？",
    "p": "",
    "paras": [
     "如果您提供经批准的脚本，请说明 HyperFrames 是否可以对其进行重组或必须保留每个单词。",
     "当真实界面应提供证明时，请使用[产品和网站视频](https://hyperframes.heygen.com/guides/product-launch-video.md)。当现有素材应保留在下方时，请使用[字幕或设计的叠加层](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**理解一个想法**——提出一个有用的问题，然后一次一层地揭示机制。",
     "**遵循流程** — 保留一个视觉阶段并按照观众需要的顺序显示每个步骤。",
     "**记住三点**——使想法平行、具体且视觉上清晰，足以供以后回忆。",
     "**通过故事学习** — 使用一个案例从设置和紧张转向一般课程。"
    ]
   },
   {
    "h": "从信息到理解",
    "p": "",
    "paras": [
     "HyperFrames 不会将每个段落变成一个场景。它找到了教学的主线，删除了旁白，并围绕观众应该保留的一个想法构建了一个序列。",
     "视觉效果共享一种连贯的语言，并随着解释而发展。图表应该揭示一种机制；图表应证明主张；运动应该显示发生了什么变化。"
    ],
    "codeBlocks": []
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "将您的文本粘贴到一封邮件中。对于一个完整的解释器来说这已经足够了。还没有场地，没有镜头，还没有设计决定。",
     "已验证，来自 [examples](https://hyperframes.heygen.com/prompting/examples.md) 页面 - 来自粘贴文本的约 60 秒垂直解释： 将其转换为 \\~60 秒 1080x1920 垂直解释器：\\[粘贴您的文本]。每个场景一个想法，大排版，素材图表，品牌颜色#FF5533 为灰黑色。男声TTS，平静。嵌入标题，关键词以品牌颜色突出显示。",
     "<video aria-label=\"Example explainer\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-explainer.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示制作。* 注意C0。当您提供脚本时，运行时会遵循口语。所以要求“大约”一分钟，而不是一分钟。有关骨架的其余部分，请参阅[解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在重要的时候说这些",
    "p": "",
    "paras": [
     "在学习任何技术之前，您可以根据提示来引导所有这些操作。",
     "|旋钮|说什么 |为什么这很重要 |",
     "| - | - | - |",
     "| **逐字与总结** | “逐字使用我的措辞”或“自由重组”| Verbatim 会保留您的声音，但会锁定字数。总结一下，让它根据节奏进行剪辑和重新排序。 |",
     "| **持续时间** | “\\~60 秒”，绝不是“60 秒”|通过剧本，旁白设定了真实的长度。硬数字会迫使代理修剪或填充单词。 |",
     "| **场景密度** | “每个场景一个想法” |一个不露面的场景有一个发明的焦点来动画。有两个想法没有留下任何余地来推动这项议案。它读取为文本转储。 |",
     "| **角度** | “概念”/“操作方法”/“listicle”/“故事”|角度决定故事的形态。代理会将您的文本重塑为文本，而不是按顺序阅读您的段落。 |",
     "| **标题样式** | “嵌入标题，关键词以强调色突出显示” |字幕被烧入。命名突出显示颜色将它们与您的调色板联系起来，而不是默认的药丸。 |",
     "| **调色板** | “灰黑色上的品牌颜色#FF5533”|由于没有网站可供借用，因此代理商选择了一个调色板。命名的口音和背景使其个性化。 |",
     "| **语音** | 「男声TTS，冷静」/「温暖女声」|性别和语气是提示词。提供者是代理人的决定。 | [！提示] 场景密度是这里最大的质量杠杆。 “每个场景一个想法” 将密集的段落变成有节奏的序列。代理商重新订购并 压缩您的文本以命中它。这就是解释员教学的原因",
     "的背诵。"
    ],
    "codeBlocks": []
   },
   {
    "h": "变体",
    "p": "",
    "paras": [
     "[手风琴] 30秒风景主题讲解 (16:9) > 为非技术受众制作一个约 30 秒的 1920x1080 解释，说明 HTTPS 如何保持请求的私密性 — 要点：您的数据在离开浏览器之前已被密封。概念角度：每个场景一个想法，大几何类型，一个简单的锁和钥匙图作为核心（将隐喻与主题交换）。灰白色近乎黑色墨水，带有深蓝色调。女声TTS，温暖而清晰。嵌入标题，关键术语以强调色突出显示。",
     "更短的运行时间、YouTube 或嵌入的景观。更少的场景意味着 主题必须压缩。为外卖命名告诉代理要保留什么。",
     "T0 *从此提示渲染，主题交换为 HTTP 缓存（缓存图作为比喻），未编辑 — 26 秒，因为旁白设置了长度。* [手风琴] Listicle > 制作一个约 45 秒的 1080x1920 列表文章：“快速发货团队的 5 个习惯”。 Listicle角度——每个场景一个习惯，每个习惯都有一个大数字和一个单行标签，将能量升级到#1。灰黑色带有青柠色。男性TTS语音，乐观。嵌入字幕，习惯标签突出显示每个场景。",
     "列表角度为每个项目提供了自己的场景。每个场景都重复使用相同的内容 数字和标签形状。结果读起来是倒计时，而不是一堵墙 点。",
     "[手风琴] 图表说明 > 为开发人员制作一个时长 60 秒的 1920x1080 如何设置 CI 管道。如何角度：每个场景一个步骤，每个步骤都围绕一个简单的节点和箭头图构建，该图按照旁白的解释进行绘制。带有青色色调的木炭色。平静的男性 TTS 声音。嵌入标题，突出显示步骤名称。",
     "操作方法依靠图表作为承载视觉。描述一下图表 每一步的*形状* — “节点和箭头”，或“向左填充的管道” 对”。让代理人发明细节。"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**“60 秒”而不是“\\~60 秒”。** 与[产品发布页面](https://hyperframes.heygen.com/guides/product-launch-video.md#prompts-that-work) 上的规则相同。这里更困难，因为脚本就是整个视频。在 TTS 呈现之前，您无法知道所提供脚本的语音持续时间。",
     "**将想法塞进场景中。** 每一个不露面的视觉效果都是围绕一个焦点发明的。场景超载并且没有明确的动画内容。",
     "**要求它捕获或提取真实图像。**没有捕获步骤。一位不露面的解释者发明了它的视觉效果。",
     "（[产品发布](https://hyperframes.heygen.com/guides/product-launch-video.md#prompts-that-work)） **当您关心时，请保留未指定的外观。** 没有品牌可供阅读，因此代理商会选择调色板。如果有颜色，请说出它们的名称。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** 这是一个网站或产品视频 - 给它 URL",
     "**避免：** C0",
     "**相反：** C0"
    ]
   },
   {
    "h": "回顾是否有教",
    "p": "",
    "paras": [
     "询问代理人何时必须改变教学顺序或证据。使用浏览器编辑器进行精确的视觉、计时或动画校正。",
     "[卡片][完成并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 检查最终项目，通过您喜欢的表面进行渲染，然后查看文件。"
    ],
    "codeBlocks": [],
    "bullets": [
     "开头会产生问题、紧张或惊喜。",
     "第二个场景的主要思想就很清楚了。",
     "每个身体场景都提出一种机制、步骤、示例或含义。",
     "数字和事实声明与来源相符。",
     "结局是你希望观众记住的那句话。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "【用AI制作产品发布视频】(https://hyperframes.heygen.com/guides/product-launch-video.md)",
     "[使用 AI 为视频添加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)",
     "[用AI制作动态图形](https://hyperframes.heygen.com/guides/motion-graphics.md)"
    ]
   }
  ]
 },
 "faq": {
  "lede": "人们最常向文档助理提出的问题的简短回答。每个答案都链接到包含详细信息的页面。",
  "sections": [
   {
    "h": "HyperFrames 是免费的吗？",
    "p": "",
    "paras": [
     "是的。框架、CLI和技能在Apache 2.0下开源，并且在自己的计算机上渲染是免费的，不需要帐户。您的 AI 代理的计划和可选的 HeyGen 托管功能（例如 HeyGen 语音、头像和云渲染）通过他们自己的帐户计费。请参阅[免费内容以及 HeyGen 添加的内容](https://hyperframes.heygen.com/guides/voice-and-audio.md#free-or-heygen-quality)，以及[使用免费代理制作视频](https://hyperframes.heygen.com/guides/free-agents.md)，了解免费代理。",
     "[Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 也可以免费使用。其免费计划包括人工智能配音、字幕、音乐和音效、3 个人工智能视频剪辑和每月 5 个云导出。 Pro 计划每月 25 美元，添加了 HeyGen 的顶级视频、图像、语音和音乐模型，以您上传的风格制作视频，并提供无限的云导出。 [查看计划](https://hyperframes.studio/pricing)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我可以将 HyperFrames 用于商业用途吗？",
    "p": "",
    "paras": [
     "是的。 [Apache 2.0 许可证](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) 允许您根据其条款使用、更改和分发 HyperFrame，包括在商业作品中。您添加的媒体（例如字体、音乐或素材）保留其自己的许可证。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我应该使用哪种人工智能代理？",
    "p": "",
    "paras": [
     "任何支持技能的编码代理都可以工作，包括 Claude Code、Codex、Cursor、Gemini CLI、GitHub Copilot、Google Antigravity、IBM Bob 和 OpenCode。如果您还没有，请从 Claude Code 或 Codex 开始。设置指南：[Claude Code](https://hyperframes.heygen.com/guides/with-claude-code.md)、[Codex](https://hyperframes.heygen.com/guides/with-codex.md)、[光标](https://hyperframes.heygen.com/guides/with-cursor.md)和[其他代理](https://hyperframes.heygen.com/guides/skills.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我可以在 Claude 或 ChatGPT 聊天应用程序中使用它吗？",
    "p": "",
    "paras": [
     "是的，通过托管的 HyperFrames 连接器。它会在您的 HeyGen 帐户中创建并渲染视频，而无需在您的计算机上安装任何内容。你放弃了本地项目文件夹和Studio。您的聊天产品的计划决定您是否可以添加自定义连接器。请参阅[在 Claude.ai 或 ChatGPT 中制作视频](https://hyperframes.heygen.com/guides/mcp.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我该如何安装它？",
    "p": "",
    "paras": [
     "对于克劳德代码，安装插件： 对于大多数其他代理，运行C0并选择**核心技能**。然后启动新的代理会话。请参阅[制作您的第一个视频](https://hyperframes.heygen.com/quickstart.md)。"
    ],
    "codeBlocks": [
     {
      "code": "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "我需要 HeyGen 帐户或 API 密钥吗？",
    "p": "",
    "paras": [
     "不要在您的计算机上制作和渲染视频。您需要一个用于 HeyGen 语音和音乐、头像、云渲染、托管连接器和 Studio 应用程序。使用C0登录。请参阅[身份验证和 API 密钥](https://hyperframes.heygen.com/guides/authentication.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "HyperFrames 可以在 Windows 上运行吗？",
    "p": "",
    "paras": [
     "CLI 和代理技能在 Windows 上运行，包括从 PowerShell 进行渲染，并且 HyperFrames Studio 应用程序具有 Windows 安装程序（64 位 Intel 和 AMD；请参阅[安装 Studio 应用程序](https://hyperframes.heygen.com/studio-app.md)）。要在浏览器中进行编辑，请使用C0。 WSL渲染技巧请参见[WSL2下渲染速度较慢](https://hyperframes.heygen.com/help.md#the-render-is-slow-under-wsl2)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Studio 应用程序和浏览器编辑器有什么区别？",
    "p": "",
    "paras": [
     "**Studio 应用程序** 是一款适用于 Mac、Windows 和 Linux 的桌面应用程序：在一个窗口中与您的代理聊天、预览和编辑器，无需终端。 **浏览器编辑器**是运行C0时从任何项目打开的编辑器。两者都编辑相同的项目文件。请参阅 [获取 Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 和 [在浏览器编辑器中编辑](https://hyperframes.heygen.com/studio.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "HyperFrames 与 Remotion 有何不同？",
    "p": "",
    "paras": [
     "远程视频是 React 组件。 HyperFrames 视频是 HTML、CSS 和 JavaScript，通过数据属性和暂停的动画时间轴进行计时。 HyperFrames 不使用或运行 Remotion。请参阅[HyperFrames 与 Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md) 和[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "如何预览和渲染视频？",
    "p": "",
    "paras": [
     "在项目文件夹中，打开实时预览： 然后渲染 MP4： 渲染需要FFmpeg。运行C0来检查你的机器。请参阅[从命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染需要多长时间？",
    "p": "",
    "paras": [
     "这取决于长度、分辨率和效果。在一个测量的示例中，一个 300 帧 1920×1080 合成在 9.8 秒内渲染完成，如果保留一个昂贵的 CSS 声明则需要 25 秒。使用 C0 可以更快地查看渲染。请参阅[修复预览或渲染缓慢](https://hyperframes.heygen.com/guides/performance.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "可以添加画外音、音乐和音效吗？",
    "p": "",
    "paras": [
     "是的。在您的请求中向代理询问。通过 HeyGen 帐户，它可以使用 HeyGen 声音和 10,000 首曲目的音乐目录。如果没有的话，语音会使用计算机上的 Kokoro，音乐是您添加的曲目（如果您安装了它，则为本地生成的曲目），而音效则来自捆绑套件。请参阅[添加画外音、音乐、音效和字幕](https://hyperframes.heygen.com/guides/voice-and-audio.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "它可以为我的视频添加字幕吗？",
    "p": "",
    "paras": [
     "是的。向特工提供您的谈话录像并要求提供字幕。它会转录演讲内容，为每个单词计时，并在不更改镜头的情况下添加字幕。请参阅[使用 AI 为视频添加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我可以使用自己的字体吗？",
    "p": "",
    "paras": [
     "是的。将字体文件放入项目中并用C0声明。项目未声明的字体可以在渲染中回退到默认字体，C1 会报告该情况。请参阅[字体 lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md#fonts)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我可以在云端或我自己的服务器上渲染吗？",
    "p": "",
    "paras": [
     "是的。 C0 在 HeyGen 的云上进行渲染，并将积分记入您的 HeyGen 帐户。您还可以在自己的 AWS Lambda 或 Google Cloud Run 上或在 Docker 中进行渲染。请参见【选择渲染路径】(https://hyperframes.heygen.com/deploy/overview.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "HyperFrames 是否会将我的视频发送至 HeyGen？",
    "p": "",
    "paras": [
     "当您在本地预览和渲染时则不然：项目保留在您的计算机上。云渲染将项目上传到 HeyGen，托管连接器在您的 HeyGen 帐户中构建它。 CLI 发送使用数据，例如命令名称和渲染性能，这些数据在您登录之前保持匿名。它从不发送项目名称或视频内容。用 C0 将其关闭。您的 AI 代理会将您的提示发送给其自己的提供商。请参阅[遥测参考](https://hyperframes.heygen.com/packages/cli.md#telemetry)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "有事失败了。我首先要检查什么？",
    "p": "",
    "paras": [
     "在项目文件夹中运行这些并为代理提供完整的输出： 请参阅[疑难解答](https://hyperframes.heygen.com/help.md)了解具体错误，并参阅[分享反馈](https://hyperframes.heygen.com/help.md#share-feedback)报告错误。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes doctor\nnpx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
     "[基于 HyperFrames 构建](https://hyperframes.heygen.com/developers/index.md)",
     "[为 HyperFrames 做出贡献](https://hyperframes.heygen.com/contributing.md)"
    ]
   }
  ]
 },
 "free-agents": {
  "lede": "HyperFrames 无需花费任何费用。你所付费的是编写视频的人工智能代理，而且这也可以是免费的。",
  "sections": [
   {
    "h": "相同的提示，付费模式和开放模式",
    "p": "",
    "paras": [
     "在 HeyGen 的 [Code2Video 基准测试](https://www.heygen.com/research/introducing-code2video-benchmark) 中，模特们使用来自 168 个简报的 HyperFrames 技能编写视频，并相互排名。开放重量型号（Qwen 3.8 Max、DeepSeek V4.1 Flash、Kimi K3、GLM 5.3）均与第一名相差 50 Elo 分以内。对于付费模型和开放模型给出相同的提示：",
     "**克劳德寓言5**",
     "<video aria-label=\"Product intro by Claude Fable 5\" src=\"https://dynamic.heygen.ai/www/video/research/code2video/claude-fable-5__Product_Intro_31_ijvIoCty8.mp4\" poster=\"https://dynamic.heygen.ai/www/video/research/code2video/claude-fable-5__Product_Intro_31_ijvIoCty8.mp4/ik-thumbnail.jpg?tr=so-3\" playsInline preload=\"metadata\" />",
     "**DeepSeek V4 闪存**",
     "<video aria-label=\"Product intro by DeepSeek V4 Flash\" src=\"https://dynamic.heygen.ai/www/video/research/code2video/deepseek-v4-flash__Product_Intro_31_wJgiSCn0jw.mp4\" poster=\"https://dynamic.heygen.ai/www/video/research/code2video/deepseek-v4-flash__Product_Intro_31_wJgiSCn0jw.mp4/ik-thumbnail.jpg?tr=so-3\" playsInline preload=\"metadata\" />",
     "顶级模特在困难的部分仍然做得更好：时机、构图、完成。对于初稿、社交帖子或学习工具，开放模型通常就足够了。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在 Studio 应用程序中：OpenCode",
    "p": "",
    "paras": [
     "[连接代理](https://hyperframes.heygen.com/studio-app/connect-your-agent.md) 并选择 **OpenCode**。该应用程序会安装它，并且无需登录即可运行免费模型。它需要**完全访问权限**，并且应用程序要求首次打开它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在您自己的计算机上",
    "p": "",
    "paras": [
     "OpenCode 还可以使用本地运行的模型，因此不会离开您的计算机，也不会产生任何费用。当 [Ollama](https://ollama.com) 运行时，OpenCode 会自行找到其模型；选择一个支持工具的。请参阅[OpenCode 的模型文档](https://opencode.ai/v2/docs/models)。",
     "本地模型比托管模型慢且弱，因此从短视频开始。"
    ],
    "codeBlocks": []
   },
   {
    "h": "还有什么是免费的",
    "p": "",
    "paras": [
     "渲染、预览、Kokoro 声音、背景去除和捆绑的音效在您的计算机上免费运行，当您自己的代理执行时，转录也是如此。 Studio 应用程序是免费的，需要免费的 HeyGen 帐户。 HeyGen 的声音、头像和生成的剪辑均使用 HeyGen 积分；视频中的其他所有内容都是代码。请参阅[免费或 HeyGen 质量](https://hyperframes.heygen.com/guides/voice-and-audio.md#free-or-heygen-quality)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "【用AI制作产品发布视频】(https://hyperframes.heygen.com/guides/product-launch-video.md)"
    ]
   }
  ]
 },
 "general-video": {
  "lede": "当作品是真正定制的时使用此路径：多种源类型、可编辑的素材、较长的多场景故事、不寻常的格式或密切的创意合作。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "**向其展示一段感觉不错的视频。**将链接粘贴到**制作一些东西**，或使用主页上的**参考**，并说明要保留的内容（节奏、外观、打开方式）以及您的内容。 **主页上的灵感混音**有来自真实视频的简短时刻。参考使用您的 HeyGen API 密钥，应用程序第一次会要求您提供该密钥。",
     "**或描述结果**并附上您所拥有的内容： 当您想在构建之前就故事达成一致时，请先请求处理。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "Make a one-minute recruiting film from the interview clips and office footage I added.\nKeep the employees' own words central.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "代理人应该如何与您合作？",
    "p": "",
    "paras": [
     "在请求中说出您想要其中的哪一个："
    ],
    "codeBlocks": [],
    "bullets": [
     "**为我构建** — 让代理做出创意决策并返回完整的第一个预览。",
     "**首先审查故事** - 在详细制作之前批准故事板和粗略布局。",
     "**共同导演** — 与特工一起塑造故事、视觉系统、动作、过渡、音频、开场和结尾。"
    ]
   },
   {
    "h": "使用自定义路由时",
    "p": "",
    "paras": [
     "如果一个来源已经确定了工作（产品 URL、文章、拉取请求、轨道、头部说话剪辑或短动态图形），请从[该来源的指南](https://hyperframes.heygen.com/workflows.md) 开始。"
    ],
    "codeBlocks": [],
    "bullets": [
     "多种素材必须成为一个视频；",
     "底层素材可能会被修剪、重新排序或更改；",
     "该作品需要较长或不寻常的多场景结构；",
     "同样的想法需要针对不同的格式刻意重新设计版本；",
     "您想与代理人一起制定创造性的治疗方案。"
    ]
   },
   {
    "h": "保持反馈有用",
    "p": "",
    "paras": [
     "在完善动作之前先回顾一下故事。使用浏览器编辑器进行可以指向的直接更改。询问代理反馈何时影响多个场景、源文件、媒体或整体叙述。",
     "导出前请确认： [卡片][完成并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 检查完整的结果并从您喜欢的表面渲染它。"
    ],
    "codeBlocks": [],
    "bullets": [
     "只剩下为故事服务的原始材料；",
     "旁白、音乐、声音和沉默都有着刻意的作用；",
     "每个请求的格式都已组合，而不仅仅是裁剪；",
     "设计的开头和结尾的感觉；",
     "整个项目通过了检查。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)"
    ]
   }
  ]
 },
 "introduction": {
  "lede": "HyperFrames 是一个免费的开源框架，可将 HTML 转换为视频。您提出请求；人工智能代理构建可编辑项目； HyperFrames 播放或渲染它。",
  "sections": [
   {
    "h": "它能做什么？",
    "p": "",
    "paras": [
     "下面的每个图块都是完成的 HyperFrames 影片。打开一个可以有声观看。"
    ],
    "codeBlocks": []
   },
   {
    "h": "三件事要知道",
    "p": "",
    "paras": [
     "**代理构建。** 您描述视频；代理编写 HTML、CSS 和 JavaScript。您不需要为此路径编写代码。",
     "**可编辑。** 结果是一个项目文件夹，而不是一个扁平的黑盒子。代理、浏览器编辑器和您自己的工具可以处理相同的文件。",
     "**可靠的渲染。** HyperFrames 要求项目提供每个精确的帧，而不是依赖于实时播放，因此缓慢的机器不会丢失完成的视频中的片段。"
    ],
    "codeBlocks": []
   },
   {
    "h": "做一个",
    "p": "",
    "paras": [
     "[卡片] [制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md) 安装技能，提出一个简短的请求，然后选择您想要的继续方式。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
     "[基于 HyperFrames 构建](https://hyperframes.heygen.com/developers/index.md)"
    ]
   }
  ]
 },
 "mcp": {
  "lede": "HyperFrames MCP 是受支持的 AI 聊天产品的托管连接器。它允许聊天通过您的 HeyGen 帐户调用 HyperFrames 创建和渲染工具，而无需安装本地 CLI。",
  "sections": [
   {
    "h": "选择托管或本地",
    "p": "",
    "paras": [
     "当您需要时，请使用托管连接器： 当您需要时，请使用[本地快速入门](https://hyperframes.heygen.com/quickstart.md)："
    ],
    "codeBlocks": [],
    "bullets": [
     "没有本地 HyperFrames 设置；",
     "对话式创作流程；",
     "云渲染；",
     "完整的项目文件；",
     "本地渲染；",
     "在浏览器编辑器和源代码中直接编辑；",
     "自定义自动化或部署；",
     "精确的调试和验证。"
    ]
   },
   {
    "h": "连接超框架",
    "p": "",
    "paras": [
     "生产MCP地址为： 您需要一个 HeyGen 帐户并有权访问 HyperFrames 连接器。",
     "每个主机控制自定义连接器的显示位置以及哪些计划或工作区角色可以添加它们。使用以下步骤作为方向，然后在其接口不同时按照链接的主机文档进行操作。",
     "[标签] 克劳德 HeyGen 的 HyperFrames 列在 Claude 的 [连接器目录](https://claude.com/connectors/hyperframes-heygen) 中。",
     "1. 打开**自定义→连接器**并选择**发现**。",
     "2. 搜索 **HyperFrames** 并在 HyperFrames by HeyGen 上选择 **Connect**。",
     "3. 完成 HeyGen 登录。",
     "如果聊天不使用它，请检查该聊天中 **+ → 连接器** 下的 HyperFrames 是否已打开。",
     "要按地址添加，请在 **自定义 → 连接器** 中选择 **+ 添加 → 添加自定义连接器**，然后输入上面的 MCP 地址。",
     "有关计划和工作区要求，请参阅 [Anthropic 的当前连接器说明](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)。",
     "[选项卡] 聊天GPT 自定义 MCP 服务器可在 ChatGPT Web 上的 ChatGPT Business、Enterprise 和 Edu 上运行。在 Business 中，只有工作区管理员和所有者才能添加。",
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
     "主机产品独立更改其连接器接口。如果菜单或按钮丢失，请先检查该主机的当前计划和工作区权限，然后再将其视为 HyperFrames 故障。"
    ],
    "codeBlocks": [
     {
      "code": "https://mcp.heygen.com/mcp/hyperframes/",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "创建第一个作品",
    "p": "",
    "paras": [
     "像向编辑器一样描述视频，并将其命名为 HyperFrames，以便聊天应用程序使用连接器而不是编写自己的视频代码： 连接器通过该聊天中公开的工具提出并构建组合。遵循返回的工具结果，而不是期望特定的预览小部件：主机以不同的方式呈现 MCP 输出。"
    ],
    "codeBlocks": [
     {
      "code": "Use HyperFrames to make a 15-second vertical product intro for a meditation app.\nAudience: people who have trouble falling asleep.\nStyle: quiet, spacious, and warm.\nShow the breathing timer and end with “Rest starts here.”",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "以对话方式修改",
    "p": "",
    "paras": [
     "继续同一个对话： 列出明显的问题和期望的结果。避免每次修订都重新启动完整的概要。"
    ],
    "codeBlocks": [
     {
      "code": "Reveal the product two seconds earlier.\nKeep the current colors.\nMake the captions smaller and slow down the final transition.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "获取 MP4",
    "p": "",
    "paras": [
     "每次运行完成后都会单独渲染 MP4，因此没有单独的导出步骤。求下载链接： 托管连接器以其默认设置呈现 MP4。要选择帧速率、4K、WebM 或 MOV 文件（用于透明叠加或其他编辑器），请使用[本地技能](https://hyperframes.heygen.com/quickstart.md) 制作视频并将其渲染在您的计算机上。",
     "连接器在托管基础设施上呈现。保留该工具返回的任何合成或渲染标识符，以便您可以在后续中参考相同的工作。",
     "OAuth 将服务器连接到您当前的 HeyGen 帐户。计划、限制和计费可以独立于 HyperFrame 进行更改，因此在开始重复或长时间渲染之前，请在帐户中确认它们。"
    ],
    "codeBlocks": [
     {
      "code": "Send me the MP4 download link.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "故障排除",
    "p": "",
    "paras": [
     "如果授权循环： 如果创建或渲染操作停止： 当故障属于 HyperFrames 时，请使用[分享反馈](https://hyperframes.heygen.com/help.md#share-feedback)。当连接器根本无法安装或调用时，请使用主机产品的支持。",
     "[！警告] 仅连接此页面上显示的生产 HyperFrames 服务器。与任何外部连接器一样， 检查权限，不要发送目的地不应发送的秘密或私人材料 收到。"
    ],
    "codeBlocks": [],
    "bullets": [
     "确认生产MCP地址；",
     "断开并重新连接 HyperFrame；",
     "确认您的主机规划和工作空间允许连接器；",
     "确认弹出窗口和 HeyGen 登录窗口未被阻止。",
     "保留最后的工具结果及其返回的任何标识符；",
     "如果主持人会话已过期，则从新的聊天中重试；",
     "报告提示、预期结果、实际结果、主机和标识符。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[让代理驱动Studio](https://hyperframes.heygen.com/guides/webmcp.md)",
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
     "[AI聊天揭秘](https://hyperframes.heygen.com/catalog/blocks/ai-chat-reveal.md)"
    ]
   }
  ]
 },
 "motion-graphics": {
  "lede": "为一个简短的、以设计为主导的想法制作一个动态图形——通常在十秒以内——其中的动作传达信息。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "**指向您喜欢的动作。** 在主页上的 **Remix fromspiration** 下，**动态图形** 包含来自真实视频的简短瞬间：在其中选择 **添加为灵感** 并说出您应该说的话。任何剪辑的链接也可以在**制作一些东西**或**参考**下。",
     "**或者用一句话描述**： 说出您想要一个完成的视频还是一个透明的叠加层（如果可以的话）。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "A six-second motion graphic that counts from zero to 10,000 and lands on \"Thank you.\" No narration.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "你在做什么动画？",
    "p": "",
    "paras": [
     "相同的请求形状可以对动态类型、统计数据、图表、徽标、下三分之一、地图、真实网页、新闻标题或帖子进行动画处理。",
     "如果结果需要旁白、多个场景或较长的故事，请制作[自定义视频](https://hyperframes.heygen.com/guides/general-video.md)。",
     "[卡] [练习：快速获胜：为您的徽标添加动画](https://hyperframes.heygen.com/lessons/logo-quick-win) 18 分钟的免费课程，包含短片、测验和尝试简介。简短的简介就足够了：多长、什么形状、您的徽标文件以及引号中的任何单词。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**文字** — 当动作和强调传达信息时使用动态类型。",
     "**一个数字** — 计算或显示统计数据，确定结果，并保持足够长的时间以进行记录。",
     "**数据** — 制作图表或比较的动画，以便顺序使结论清晰。",
     "**徽标** — 建立一个短刺，并有意地进入、完成和干净地握住。",
     "**叠加** — 创建一个下三分之一或标注，在素材上完全进入、保留和清除。",
     "**页面、帖子或地图** — 捕捉真实来源并将某一细节动画化为视觉效果。"
    ]
   },
   {
    "h": "选择输出",
    "p": "",
    "paras": [
     "对于覆盖层，请指定其应放置的位置以及应保持的时间。第一帧和最后一帧必须清晰干净。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**MP4** 用于完成的独立图形。",
     "**具有透明度的 WebM 或 MOV** 用于在素材上放置徽标、下三分之一、标注或其他覆盖层。"
    ]
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "规范的形状：路由、规范、节拍时间戳、引用副本、技术固定、间隙闭合。",
     "制作 8 秒 1920x1080 视频。节拍 1（0-4 秒）：黑暗的 macOS 终端逐个字符键入“npx Skills add heygen-com/hyperframes”，然后按住闪烁的光标。节拍 2（4-5 秒）：终端粉碎成碎片。节拍 3（5-8 秒）：黑色猛击上的粗体白色动态文字逐字逐句、活泼地写着：“你刚刚用超框架制作了这个。”调整C0和C1注册表块；手工创作动力学文本。没有旁白，没有图像或媒体文件。",
     "<video aria-label=\"Validate anatomy terminal\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-anatomy-terminal.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示制作。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "在重要的时候说这些",
    "p": "",
    "paras": [
     "**持续时间。** 保持简短 - 动态图形的实时时间不超过 10 秒，最多 30 秒。一个 2 秒的想法拉长到 8 秒，无论它如何动画化，都会让人感觉很慢；如果该作品确实需要多个场景或更长的运行时间，那么它就是多场景视频，而不是动态图形。",
     "**MP4 与透明覆盖。** 默认输出是 MP4。要求一个透明的覆盖层——一个下三分之一，一个标注，一个旨在合成其他素材的错误——以及带有alpha的渲染目标C0C1。仅当框架的一部分“意味着”为空时，透明度才有意义。全帧设计（它自己的背景，边到边的构图）没有什么是透明的，因此要求透明的 WebM 会产生一个不透明的文件或一个看起来破碎的文件。仅针对设计为位于其他物体之上的部件才说“透明覆盖层、Alpha 通道”。",
     "**注册表块与自由格式。** 命名块（C0、、C1、C2、C3、C4 / C5）使代理首先进行重用：安装块，就地自定义，仅手动创作间隙。省略该块，它会根据您的描述手工构建 - 适合一次性外观，更多漂移在您未固定的细节上。与[目录](https://hyperframes.heygen.com/catalog/blocks/data-chart.md)中显示的名称完全相同。",
     "**缓动和运动感觉。** 您用来描述“如何”运动感觉的词语——“活泼”、“有弹性”、“解决过冲”——映射到特定的缓动。花掉它们；它们价格便宜，精度高。请参阅[词汇](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)了解形容词轻松表和[高级动作](https://hyperframes.heygen.com/prompting/motion.md)了解防止文章阅读廉价的语法（没有完全停止、动作重叠、相机动作）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "变体",
    "p": "",
    "paras": [
     "每个都重用一个注册表块，因此代理可以组合而不是从头开始手工构建。",
     "[手风琴] 统计计数 > 6 秒 1920x1080 视频，深海军蓝背景。节拍 1（0-1 秒）：标签“ARR”在顶部中心逐渐变小。节拍 2（1-4 秒）：一个巨大的数字随着里程表滚动而计数达 420 万美元，在落地时逐渐消失。节拍 3（4-6 秒）：“+312% YoY”在下方以绿色标记，然后一切都进入温和的环境空闲状态（微妙的呼吸音阶、缓慢的粒子漂移）。使用C0注册表块作为基础。没有旁白。",
     "[手风琴] 标志刺 > 5 秒 1920x1080 徽标刺痛。节拍 1（0-2 秒）：单词“ACME”由分散的粒子组合而成。节拍 2（2-3 秒）：全帧 C0 着色器过渡。节拍 3（3-5 秒）：徽标锁定 + 标语“更快发货”。稳定在白色，然后保持微妙的环境闲置（缓慢的呼吸音阶）。使用C1进行组装。",
     "[手风琴] 动画推文 > 7 秒 1080x1350 垂直视频。一张真正的推文卡（处理@hyperframes，文本“我们现在从 HTML 渲染视频。没有时间轴 UI。只需代码。”）在柔和的动画渐变上向上滑动，就像计数器刻度 0→1.2K，然后卡以 3D 倾斜，突出显示第二个句子。最后在卡上设置一个温和的环境空闲状态。使用C0和C1注册表块。没有旁白，没有图像或媒体文件。",
     "[手风琴] 地图路线 > 8 秒 1920x1080 视频。黑暗的世界地图，一条发光的弧线在 3 秒内从旧金山动画到东京，目的地针随着脉冲下降，然后相机放大到东京，标签“延迟：89 毫秒”出现。使用C0注册表块作为基本图案，重新设计为木炭上的青色。没有旁白。"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**全帧设计上的透明输出。** Alpha 适用于覆盖元素，不适用于填充帧的片段。具有自己背景的设计没有可导出的透明区域。",
     "**关于运动即信息的片段的旁白。** 根据定义，动态图形是无旁白的——视觉承载着它。画外音使它成为一个有旁白的视频。",
     "**将一个短的想法延伸很长。** 运行时间是一个旋钮，超过 30 秒后，单个动作节拍就没有什么可做的了。",
     "[！提示] 对于这些提示共享的六部分骨架和每节拍内容公式，请参阅[提示解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)；有关完整的运行验证示例集，请参阅[验证示例](https://hyperframes.heygen.com/prompting/examples.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0 — 或者，对于在素材上合成的错误：C1",
     "**避免：** C0",
     "**相反：** `a 10s logo sting, no narration` — 对于语音曲目，请要求旁白解释者。",
     "**避免：** C0",
     "**相反：** `an 8-second kinetic-type piece of one headline` — 或将其推广为多场景视频。"
    ]
   },
   {
    "h": "审查动议",
    "p": "",
    "paras": [
     "[卡片][完成并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 全速检查运动，渲染所选格式，并查看最终文件。"
    ],
    "codeBlocks": [],
    "bullets": [
     "文字、数据、来源和徽标均准确无误。",
     "视频播放时可以读取完整的消息。",
     "主要动作有助于传达意思。",
     "开始和结束状态是经过深思熟虑的。",
     "透明导出已通过真实镜头进行检查。"
    ]
   },
   {
    "h": "一个完整的，从头到尾",
    "p": "",
    "paras": [
     "上面的演示显示了范围。这是一个由它构建的完整图形——音乐和声音，没有旁白，动作承载着这一切。",
     "<video aria-label=\"A complete year-in-review motion graphic\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/full-hypecard.mp4\" poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/wfv2-motion.jpg\" playsInline preload=\"metadata\" />",
     "完整的年度回顾图表。它使用音乐和声音，但没有旁白；议案承载着它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[用AI制作讲解视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
     "[你想做什么？](https://hyperframes.heygen.com/workflows.md)",
     "[使用 AI 为视频添加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)"
    ]
   }
  ]
 },
 "music": {
  "lede": "从音乐文件或由音频控制编辑的视频开始。不添加旁白；轨道是脊柱。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "在**制作一些东西**中添加曲目（以及必须出现的任何照片或剪辑）： **有您喜欢的编辑吗？** 也粘贴其链接并说“像这样剪切它”：代理会匹配其节奏并过渡到您的曲目。仅当无法自由选择时才提及片段、歌词或图像顺序。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "Turn this song and the tour photos into a 30-second video cut to the beat.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "赛道应该驱动什么？",
    "p": "",
    "paras": [
     "完整的视频也可以完全根据文字、图形模板和动作来构建。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**使用您的照片或视频** — 根据曲目的乐句、能量、节拍和结尾剪辑经过批准的媒体。",
     "**制作歌词视频** — 首先验证歌词，然后围绕人声同步和设计每一行。",
     "**发明视觉效果**——在没有提供媒体的情况下，通过版式、图形元素和动作构建视觉弧线。"
    ]
   },
   {
    "h": "轨道设定结构",
    "p": "",
    "paras": [
     "HyperFrames 在规划视觉效果之前会映射曲目的乐句、能量、开始、静音、滚动、下降和硬停止。",
     "有节奏的曲目可以支持对其真实节拍网格进行剪切。平静或宽松的音乐应该按乐句和能量流动，而不是强行削减每个节拍。",
     "视觉处理在有意义的音乐时刻发生变化。更多节拍并不自动意味着更多场景。"
    ],
    "codeBlocks": []
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "验证的起点：将照片剪切到轨道，导出到方形MP4。",
     "来自 ./track.mp3 的 20 秒 1080x1080 视频（选择曲目中最好的 20 秒）和 ./shots/ 中的 8 张照片。在节拍网格上剪切，每小节一张照片，在强拍上插入，在乐句变化时进行 C0 过渡。最后一张照片以压缩大写字母“SUMMER '26”结尾。没有 TTS。",
     "<video aria-label=\"Example music slideshow\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-music-slideshow-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示制作。* 这里的每个时间决定都委托给曲目自己的分析 - 您描述*处理*（“每小节一张照片”，“强拍插入”），节拍网格提供*时间*。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在重要的时候说这些",
    "p": "",
    "paras": [
     "**节拍网格。** 代理分析曲目（C0、C1）的节拍、开始和部分，然后根据真实的音乐变化进行剪辑。您控制“如何”剪切，而不是“何时”：“每条一张照片”设置剪切密度，“强拍插入”添加重音，“短语变化的过渡”保留结构边界的可见移动。在真正有节奏的音乐中，网格是值得信赖的，并且可以根据节拍进行切换；在平静的音乐中，网格是分析器强加的节拍器，因此代理通过乐句和能量而不是硬剪切来步调——如果曲目是环境音，则说“让它流动，不要硬剪切”。",
     "**曲目部分 - 描述，不要加时间戳。** 要求“最好的 20 秒”或“进入钩子的诗句”，并让分析器选择落在音乐锚点上的边界。硬时间戳（“使用 0:32–0:52”）会切断中间短语并与网格对抗。",
     "**资产供应。** 零资产是有效的——排版带有完整的视频。你交给它的任何照片或剪辑都被编织在*相同的节拍网格上*（节拍剪辑或肯·伯恩斯），因此更多的资产意味着更多的剪辑，而不是不同的节奏模型。指向一个目录（“./shots/ 中的 8 张照片”）并命名结束卡。"
    ],
    "codeBlocks": []
   },
   {
    "h": "变体",
    "p": "",
    "paras": [
     "[手风琴] 歌词视频 > 来自 ./song.mp3 的 30 秒 1080x1920 歌词视频（选择最强的 30 秒部分 - 一首诗句）。转录声音以进行单词计时。线条随着节拍一次一根地升起，深色纹理背景上的大浓缩字体；钩子落地时，每个单词都以强拍的方式插入。每行中的关键字以酸性绿色突出显示。没有照片——只有排版。没有 TTS。",
     "单词级计时来自于转录曲目（或来自您粘贴的、放置在​​节拍网格上的歌词）。不需要提供的资源 - 类型是整个视频。",
     "[手风琴] 心情简报中的动力学促销（无曲目） > 15 秒 1080x1080 动态宣传片。没有提供轨道 - 生成一个：驱动合成波，高能量。在节拍上大力剪切：全画幅字卡（“更快”、“更清晰”、“运送它”）猛烈地加入强拍，黑/白与倒置类型交替，每个乐句变化时都会出现小故障。以“NOVA”字样结束，并伴有微妙的环境闲置。没有 TTS。",
     "在不提供音频的情况下，曲目是根据您描述的心情生成的；它产生的节拍网格仍然驱动着每一个剪辑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**硬轨时间戳。** 音乐视频的全部要点在于曲目的结构决定了剪辑。字面上的时间窗口会忽略分析的节拍网格并在中间乐句中进行剪切。",
     "**期望从演示文稿中获得 MP4。** 演示文稿是您点击浏览的现场演示文稿；它不会导出为一个视频文件。",
     "**输出的交付内容错误。** 您将导出并发布的设置为音乐的照片是视频；您实时点击的内容就是演示文稿。仅仅通过“幻灯片”这个词来挑选就会产生错误的交付成果。",
     "[！提示] 这里的音乐提示没有旁白；如果需要的话可以要求配音。对于这些提示共享的六部分骨架，请参阅[提示解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)；对于映射到缓和和过渡的形容词，[词汇](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)。",
     "较长电影提示中的一个条款，使剪辑遵循真实的节拍，准备好提升： **节奏（45-52 秒）。** 导线变成波形：**首先解析 BGM，在其上运行 C0，并在检测到的网格上驱动该区域** - 波形脉冲和紧凑型媒体卡（歌词线、照片卡、图表闪光）在相机持续移动时按真实分析的节拍捕捉到导线上；每个快照都会有一个刻度 SFX。至少六首热门歌曲。批准的接缝 #2：节拍命中可能会在节拍上硬切卡片内容 - 批准的例外，因为摄像机本身永远不会停止穿过它们。",
     "<video aria-label=\"Capstone region rhythm\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-rhythm.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*剪切着陆在检测到的真实曲目的节拍上 (C0)。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0 表示要发布的文件，或 C1 表示实时点击"
    ]
   },
   {
    "h": "回顾一下节奏",
    "p": "",
    "paras": [
     "对于直接时间控制，请使用[浏览器编辑器时间线](https://hyperframes.heygen.com/studio/timeline.md) 根据节拍标记来优化剪切、保留和结尾。询问代理何时必须更改部分、媒体计划或整体处理。",
     "[卡片][完成并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 检查最终项目，通过您喜欢的表面进行渲染，然后查看文件。"
    ],
    "codeBlocks": [],
    "bullets": [
     "使用正确的轨道部分。",
     "出现所需的媒体并且歌词与声音相匹配。",
     "最强烈的视觉变化体现在有意义的音乐变化上。",
     "重要的图像和文本保留足够长以便于理解。",
     "结局达到音乐着陆或形成一个有意的循环。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[制作任何其他视频](https://hyperframes.heygen.com/guides/general-video.md)",
     "【用AI制作产品发布视频】(https://hyperframes.heygen.com/guides/product-launch-video.md)"
    ]
   }
  ]
 },
 "plugins": {
  "lede": "HyperFrames 插件为您的编码代理提供了所有 HyperFrames 技能：产品宣传片、解释器、字幕、动态图形等的视频合同和参考，以及 CLI、注册表和媒体技能。技能在需要时加载。",
  "sections": [
   {
    "h": "克劳德·科德",
    "p": "",
    "paras": [
     "在您的终端中运行： 清单应包括C0、C1和C2。开始一个新会话或运行C3，然后尝试： **在 Claude Code 的终端 UI 中启用自动更新：** 在项目中打开终端并运行 C0。在该会话中，运行 `/plugin`，打开 **Marketplaces**，选择 **hyperframes**，然后选择 **启用自动更新**。如果您通过 Claude Code 的 IDE 扩展或桌面应用程序安装，请在同一台计算机上使用此终端路由。第三方市场默认不启用此功能。有关详细信息，请参阅 [Claude Code 的自动更新指南](https://code.claude.com/docs/en/plugins/install#turn-auto-update-on-or-off-for-a-marketplace)。手动更新：",
     "更新后重新加载插件。要删除插件： 请参阅 [Claude 插件指南](https://code.claude.com/docs/en/plugins/install) 了解项目范围的安装和托管更新策略。"
    ],
    "codeBlocks": [
     {
      "code": "claude plugin marketplace add heygen-com/hyperframes\nclaude plugin install hyperframes@hyperframes\nclaude plugin details hyperframes",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "Using /hyperframes:hyperframes, make a 5-second title card that says \"Hello world\".",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "claude plugin update hyperframes@hyperframes",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "claude plugin uninstall hyperframes@hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "GitHub Copilot CLI",
    "p": "",
    "paras": [
     "开始新的会话并要求 Copilot 使用 HyperFrames 技能制作相同的标题卡。如果技能不可见，请检查C0。",
     "这些是明确的更新；不要假设 Copilot CLI 共享 VS Code 的更新计划。请参阅 [Copilot 插件指南](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)。"
    ],
    "codeBlocks": [
     {
      "code": "copilot plugin marketplace add heygen-com/hyperframes\ncopilot plugin install hyperframes@hyperframes\ncopilot plugin list",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "copilot plugin update hyperframes\ncopilot plugin uninstall hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "VS代码",
    "p": "",
    "paras": [
     "打开扩展视图并搜索C0。使用插件市场命令将 C1 添加为市场，然后安装 **hyperframes** 并在代理自定义中验证其技能。必须在 VS Code 设置中启用代理插件。",
     "启用 C0 后，VS Code 每 24 小时检查一次更新。使用 **扩展：检查扩展更新** 进行手动检查。从扩展视图禁用或卸载插件。有关当前 UI 和工作区的建议，请参阅 [VS Code 的插件指南](https://code.visualstudio.com/docs/agent-customization/agent-plugins)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "光标",
    "p": "",
    "paras": [
     "对于团队市场，在 **仪表板 → 插件和 MCP** 中导入 C0 并添加 HyperFrames 插件。队友从 **自定义** 安装它。 GitHub 市场自动刷新需要 Cursor GitHub 应用程序和市场的 **启用自动刷新** 设置。",
     "对于本地安装，将提取的 HyperFrames 插件文件夹复制到 C0，然后重新加载 Cursor 并选中 **自定义**。该文件夹必须包含C1 和C2。本地副本需要手动替换才能更新；他们不订阅 GitHub 的更改。企业策略可能会禁用本地插件导入。删除本地文件夹以卸载该副本。",
     "此存储库的清单并不是公共 Cursor 市场列表的证明。公开列表及其更新要经过光标审核。有关市场和本地安装控件，请参阅 [Cursor 插件指南](https://cursor.com/docs/plugins)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "双子座命令行界面",
    "p": "",
    "paras": [
     "重新启动 Gemini CLI 并要求其对标题卡使用 HyperFrames 技能。要显式管理扩展： 要保留特定版本，请使用 C0 而不是C1 安装。选择包含C2的版本。请参阅[Gemini 的扩展指南](https://geminicli.com/docs/extensions/reference/)。",
     "该插件本身保持只读状态，不包括浏览器或模型权重。"
    ],
    "codeBlocks": [
     {
      "code": "gemini extensions install https://github.com/heygen-com/hyperframes --auto-update\ngemini extensions list",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "gemini extensions update hyperframes\ngemini extensions uninstall hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "版本和更新",
    "p": "",
    "paras": [
     "该插件将来自一个源快照的工作流程捆绑在一起，并运行其清单中记录的 CLI 版本。您的代理应该使用其捆绑的插件启动器；它不应该在插件工作流程期间运行C0。现有的项目依赖项、下载的媒体和外部服务都有自己的版本，并且不会被插件冻结。",
     "更新行为取决于客户端和源参考。例如，[Cursor GitHub 自动刷新](https://cursor.com/docs/plugins#keep-plugins-up-to-date) 会跟随推送到跟踪的分支，因此无需新的 CLI 版本即可更改技能内容。清单固定 CLI 版本，而不是已安装的技能提交。对于可重复安装，请保留版本标签或提取的版本存档并禁用自动更新。在每台计算机上安装相同的版本。基于 Git 的安装可以下载完整的源存储库。发布 ZIP 仅包含插件有效负载，但在本地加载提取的 ZIP 需要手动更新。只有具有 C0 资产的版本才提供该便携式 ZIP。"
    ],
    "codeBlocks": []
   },
   {
    "h": "从独立技能或核心技能转向",
    "p": "",
    "paras": [
     "安装完整的插件并首先验证其库存。在 Claude 中，可以删除旧的 C0 安装： 使用独立技能管理器仅删除该代理的旧 HyperFrames 技能。首先检查位置：其他代理可能共享全局技能存储，并且应该备份本地编辑的技能。不要删除整个 C0 或C1 目录。重新启动代理并确认它选择插件副本而不是重复的独立技能。"
    ],
    "codeBlocks": [
     {
      "code": "claude plugin uninstall core-skills@hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "如果工作流程丢失或过时",
    "p": "",
    "paras": [
     "将较新版本的技能放入插件文件夹中。"
    ],
    "codeBlocks": [],
    "bullets": [
     "检查代理已安装的插件清单和版本。",
     "使用该代理的插件管理器进行更新，然后重新加载或重新启动它。",
     "检查旧的独立安装是否也在加载。",
     "对于固定版本，请验证该版本中是否存在工作流程。请勿混合"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
     "[使用 Claude Code 制作视频](https://hyperframes.heygen.com/guides/with-claude-code.md)",
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)"
    ]
   }
  ]
 },
 "pr-to-video": {
  "lede": "给它一个拉取请求链接。代理读取差异、提交以及处理它的人员，然后解释更改。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "将拉取请求链接粘贴到 **Make Something** 并说明谁将观看： 代理读取实际的拉取请求并检查它是否已交付，因此建议的更改永远不会显示为已发布。如果您的团队已经有您喜欢的发布视频，请添加其链接并要求相同的风格。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "Explain https://github.com/owner/repo/pull/123 to product and engineering teammates.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "为观众选择故事",
    "p": "",
    "paras": [
     "说明它是变更日志、功能展示、修复还是重构，并提及任何重大变更。视频解释了这一变化；它不会大声朗读描述。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**用户：** 引导可见的更改，显示之前和之后，列出他们必须采取的任何操作。",
     "**贡献者：** 架构变更、权衡、审阅者需要的代码路径。",
     "**社交：**一项功能通过可见的证据来揭示，并且只有解释它的代码。"
    ]
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "已验证，来自 [examples](https://hyperframes.heygen.com/prompting/examples.md) 页面 - 30 秒的功能揭示： 从 \\[PR URL] 制作一个 30 秒的 1920x1080 功能展示视频。以用户得到的东西为主导，而不是差异；仅用 C0 块显示一拍的键码变化；以版本号 + 存储库 URL 结尾。没有旁白，而是动态字幕。",
     "<video aria-label=\"Example PR video\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-pr-video-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据上面的提示制作。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "在重要的时候说这些",
    "p": "",
    "paras": [
     "|旋钮|说什么 |为什么这很重要 |",
     "| - | - | - |",
     "| **影响与差异** | “以用户获得的内容为主导，而不是差异”|视频解释了*更改*，它没有大声读出差异；开场就影响力回答“我为什么要关心？”代码之前 |",
     "| **有多少帅哥** | “仅一个C0节拍”/“最多两个帅哥”| Code Beats 共有 2-4 个真正的大块头，每个都是一个清晰的小片段 - 整个文件在视频规模下是无法读取的 |",
     "| **哪个代码块** | C0 表示增量 · C1 表示重构 · C2 表示新代码 |该块与故事相匹配：差异显示添加/删除的线条，变形显示一种形状变成另一种形状 |",
     "| **角度** | “变更日志”/“功能揭示”/“修复解释器”/“重构演练”|设定故事的形式；代理将 PR 重塑为 PR，而不是按照 diff 顺序遍历文件 |",
     "| **观众** | “针对开发人员”（默认）/“混合技术”/“非技术利益相关者”|改变叙述的假设——非技术性的剪辑更注重影响，更注重代码 |",
     "| **结束卡** | “以版本号 + 存储库 URL 结尾”|代码解释器的常规结束语；说明发生了什么，这样它才是真正的 CTA，而不是事后的想法 |",
     "| **旁白与字幕** | “平静的男性旁白”或“无旁白，动态字幕”|两者都支持；仅字幕使其对社交友好，旁白具有更长的演练 |",
     "| **长度** |一个标题“\\~30 秒”，大型 PR 最多 \\~3 分钟 |代理根据变化调整视频大小——巨大的公关是故事的天花板，而不是要填补的地板|"
    ],
    "codeBlocks": []
   },
   {
    "h": "变体",
    "p": "",
    "paras": [
     "[手风琴] 变更日志综述 > 从 \\[PR URL] 制作一个 \\~40 秒的 1920x1080 变更日志视频。变更日志角度：以发布行开头，然后为每个显着的变更打一个节拍——每个标签和一行“它的作用”。整个视频中最多显示两个C0帅哥。以版本 + 存储库 URL 结尾。平静的男性 TTS 旁白，无字幕。",
     "T0 *从此提示使用 \\[PR URL] = heygen-com/hyperframes#2092 渲染，未经编辑。* 变更日志以深度换取广度——许多小的变更，每个变更都是一个节拍，而不是深入探索一个变更。保持代码节拍稀疏，以便保持快速。 PR 不携带其发货版本 - 代理从发布标签或 main 上的包清单中找到它。",
     "[手风琴] 修复解释器 > 从 \\[PR URL] 为开发人员制作一个 \\~40 秒的 1920x1080 修复解释器。修复角度：首先说明错误的症状，然后说明根本原因，然后在 C0 块上进行一行修复。以版本 + 存储库 URL 结尾。没有旁白，只有动态字幕。",
     "修复解读为症状→原因→修复。引导用户看到的中断，而不是堆栈跟踪 - 差异是回报，而不是开头。",
     "[手风琴] 重构演练 > 为开发人员从 [PR URL] 制作一个约 70 秒的 1920x1080 重构演练。重构角度：为什么旧形状会受到伤害，然后是新形状，显示关键文件的 C0 块之前/之后的情况。以版本 + 存储库 URL 结尾。冷静的男性 TTS 旁白。",
     "重构改变了形状而不改变行为，所以故事是“为什么”新结构更好。 C0 将一种形式转变为另一种形式的动画 - 当该点是过渡时的右侧块，而不是逐行增量。"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**询问整个差异。** 公关视频解释了这一变化；它不会背诵每个文件。完整的差异在视频尺度下是无法读取的。",
     "**打开代码。** 差异是回报，而不是钩子——以更改的含义为主导。",
     "**对叙述剪辑进行硬计时。** 语音长度决定了运行时间，因此请给出一个范围。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0"
    ]
   },
   {
    "h": "验证证明",
    "p": "",
    "paras": [
     "询问代理人何时必须更改解释或证据；在编辑器中手动修复时间、代码裁剪或标题。"
    ],
    "codeBlocks": [],
    "bullets": [
     "拉取请求和目标分支是正确的。",
     "提议、合并、发布并不混淆。",
     "面向用户的声明与实际行为相符。",
     "代码摘录仅显示相关行并保持可读性。",
     "测试和重构不作为产品功能呈现。",
     "贡献者姓名和发布详细信息准确无误。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[验证示例提示](https://hyperframes.heygen.com/prompting/examples.md)",
     "[安装HyperFrames插件](https://hyperframes.heygen.com/guides/plugins.md)",
     "[安装和更新代理技能](https://hyperframes.heygen.com/guides/skills.md)"
    ]
   }
  ]
 },
 "product-launch": {
  "lede": "粘贴产品的 URL，您就会收到根据实际内容构建的启动视频：其屏幕、颜色、字体和文字。 HyperFrames 是免费的，代理需要大约 10 到 15 分钟才能构建启动视频。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "**在 Studio 应用程序**中，将 URL 粘贴到 **Make Something**（用一行关于视频的内容），然后选择 **Let's go**。打开**从故事板开始**，在任何内容移动之前将镜头批准为静止图像。",
     "**看到您想要复制的发布？** 在主页上打开 **参考**，粘贴其链接（或在 **选择参考** 下选择一个），然后添加您的 URL：您将获得包含产品的结构和能量。参考使用您的 HeyGen API 密钥，应用程序第一次会要求您提供该密钥。",
     "只添加必须准确的内容：观众、主张、最终行动。当视频应仅使用您的简介时，请说**不要捕获网站**。使用您自己的代理而不是应用程序，以 C0 开始消息。"
    ],
    "codeBlocks": [
     {
      "code": "A 30-second launch video for https://example.com.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "选那种",
    "p": "",
    "paras": [
     "没有产品可展示？制作一个[无脸解释器](https://hyperframes.heygen.com/guides/faceless-explainer.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**启动视频**：将产品的真实证据编排成一个故事，最后有一个明确的动作。",
     "**产品导览**：通过真实屏幕完成一个完整的任务，从第一次点击到结果。",
     "**社交短视频**：一个有用的观点，它的证明，然后停止。"
    ]
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "当您想自己设置结构、声音和音乐时： 为 [https://linear.app](https://linear.app) 制作 45 秒 1920x1080 启动视频。充满活力但又简约，使用网站自己的调色板和屏幕截图。结构：说明问题的钩子、带有 UI 捕获和一行标题的 3 个功能节拍、带有徽标的结束卡 +“免费试用”。女声TTS语音，自信的语气，-18dB以下微妙的电子BGM。",
     "<video aria-label=\"Example product launch\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-product-launch-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*根据此提示制作的启动影片。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "在重要的时候说这些",
    "p": "",
    "paras": [
     "设置您关心的，剩下的交给代理。",
     "|旋钮|说什么 |为什么这很重要 |",
     "| - | - | - |",
     "| **捕获与不捕获** |给出一个URL来捕获真实站点；当没有要捕获的站点时提供脚本或简介 | Capture借用了真实的调色板和屏幕截图；没有它，视觉效果就会被发明，所以为你的品牌颜色命名|",
     "| **调色板源** | “使用网站自己的调色板”|代理根据捕获的品牌标记构建 - 您获得产品的真实颜色，而不是通用主题 |",
     "| **结构** | “挂钩说明问题，N 个功能节拍带有字幕，结束卡带有 CTA”|为节拍命名可以防止钩子和 CTA 被丢弃 |",
     "| **声音和语气** | “女声TTS，自信”/“冷静男声”|语音性别、语气均为提示词；提供者本身是代理的决定 - 有关提供者机制，请参阅[媒体和音频](https://hyperframes.heygen.com/prompting/media-and-audio.md) |",
     "| **背景音乐级别** | “-18dB以下的微妙电子背景音乐”（或“无背景音乐”）|规定的上限使音乐低于声音；完全把它留作预告片|",
     "| **长度和目的地** | “\\~45 秒”、“TikTok 9:16” |最佳点是 30-90 秒；目的地设置方面（16:9 嵌入 · 1:1 feed · 9:16 Shorts） | [！提示] 持续时间和目的地是两个最便宜、影响力最大的事情。如果你保持安静，代理会选择好的其他一切 - 请参阅[规范拨号](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify)了解委托的数量。"
    ],
    "codeBlocks": []
   },
   {
    "h": "变体",
    "p": "",
    "paras": [
     "[手风琴] 20 秒垂直预告片 (9:16) > 为 [https://linear.app](https://linear.app) 制作一个约 20 秒的 1080x1920 预告片。超级简约，只有钩子。节拍1（0-4s）：问题在一行，大类型。节拍 2（4-16 秒）：两个功能节拍，一个 UI 捕获，每个节拍都带有三字标题。第 3 拍（16-20 秒）：徽标 +“免费尝试”结束卡，保持静止直至结束。使用网站自己的调色板。女TTS语音，自信；没有背景音乐。",
     "预告片以专题报道换取节奏——更少的节奏，每个想法。保留目的地（Shorts / TikTok → 9:16）并让代理将故事扩展到更短的运行时间。",
     "[手风琴] 粘贴脚本，没有捕获 > 根据此脚本制作一个约 20 秒的 1920x1080 启动视频 - 逐字使用：“您的 CRM 每天需要三个小时的忙碌工作。AutoCRM 会为您记录每个电话、电子邮件和会议。200 个团队已切换。请在 autocrmhq.com 上免费试用。”无需捕获任何站点 - 从脚本中发明干净的产品视觉效果。男TTS语音，冷静自信； -18dB以下的微妙BGM。",
     "如果没有 URL，就没有什么可捕获的：没有屏幕截图，没有可以借用的网站调色板，因此如果有的话，请命名您的品牌颜色和字体（或者代理发明一个调色板）。逐字脚本设定了持续时间——每分钟大约有 130 个口语单词，因此 30 秒的视频需要 65-70 个单词的脚本。说“逐字使用”可以确定代理是否可以重组您的措辞。",
     "[手风琴] 现场游览（相同的 URL，游览简介） > 根据自己的屏幕截图构建 30 秒的 1920x1080 浏览 [https://example.com](https://example.com)。平静的编辑节奏——显示主页、两个内页和页脚。全程旁白，温暖男声。这是一个展示，而不是推销。",
     "当目标是“展示网站”而不是销售产品时，就可以实现这一点。它是根据捕获的屏幕截图和网站的品牌资产构建的。来自同一 URL 的发布或促销是不同的简介 - 要求出售它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**对逐字脚本进行硬计时。** 通过提供的旁白，真实的 TTS 持续时间会设置长度 - 硬数字会迫使客服人员剪切或填充您的文字。",
     "**放弃结构。** 钩子 → 价值 → 证据 → CTA 的存在是有原因的；放下钩子，促销永远不会回答“我为什么要关心？” **假设代理知道您的资产。** 如果没有 URL 来捕获，就没有网站可供阅读；发明了一个未命名的标志或颜色。",
     "[卡片] [练习：命名场景，说出它会变成什么](https://hyperframes.heygen.com/lessons/name-the-scene) 20 分钟的免费课程，包含短片、测验和尝试简介。将品味词汇换成你能看到的东西：颜色、速度、动作、秒数。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0",
     "**避免：** C0",
     "**相反：** C0"
    ]
   },
   {
    "h": "保持产品及其详细信息的联系",
    "p": "",
    "paras": [
     "完整的界面显示任务发生的位置。特写镜头可以让重要的动作变得清晰易读。当孤立的特写镜头失去了完整产品的意义时，要求两者都提供： 例如，监控影片可以建立仪表板、绘制信号、显示诊断结果并将结果返回到报告视图。产品的实际屏幕或提供的源必须支持该流程。周围的界面提供了上下文；特写镜头带有观众需要阅读的标签和数字。",
     "如果草稿感觉像幻灯片，请要求代理更改每个镜头中发生的情况：显示信号、填充结果或在继续之前打开面板。在同一静止页面上添加相机移动不会显示该动作。保留对更改内容的简短说明，而不是删除所有文本。",
     "对于颜色修改，请命名您想要的背景，并要求代理在每个场景和过渡中调整文本和图表。检查标签是否仍然可读，并且稍后的动画不会恢复旧的背景。"
    ],
    "codeBlocks": [
     {
      "code": "Show the real workspace, bring the relevant chart and result forward,\nthen carry the result back into the interface. Build the changing parts\nseparately, with short explanations where needed. Keep the actual labels\nand values; do not invent controls or interactions.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "查看结果",
    "p": "",
    "paras": [
     "然后[更改](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)：询问代理，指向 Studio 应用中的图片，或手动编辑。"
    ],
    "codeBlocks": [],
    "bullets": [
     "每项产品声明都是最新的。",
     "所显示的屏幕是真实的并且不使用任何私人材料。",
     "视频播放时界面保持可读。",
     "特写镜头连接到整个产品，并且在两个视图之间移动时组件保持清晰。",
     "开头很快就证明了产品，结尾则要求采取一个明确的行动。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[用AI制作讲解视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
     "[使用 AI 为视频添加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)",
     "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)"
    ]
   }
  ]
 },
 "quickstart": {
  "lede": "HyperFrames 将一个句子变成一个可以继续编辑的视频。在 Studio 应用程序中启动；如果您已经在终端中使用 AI 代理，或者您的计算机无法运行该应用程序，请使用其他两种方法之一。这三个人都在做同一种项目。",
  "sections": [
   {
    "h": "在 Studio 应用程序中",
    "p": "",
    "paras": [
     "最简单的方法：应用程序在实时预览旁边运行您的代理，然后您可以通过打字、指向或绘图来更改视频。适用于 Mac（Apple Silicon 或 Intel）、Windows（包括 Arm 上的 Windows）和 Linux。",
     "**1.下载并安装** [下载 Studio 应用](https://hyperframes.studio/studio/download?src=docs-quickstart)，打开它，并使用免费的 HeyGen 帐户登录。 [安装 Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 包含每个系统的步骤。",
     "**2.索取视频** 在 **制作一些东西** 中输入您想要的内容并发送。弗莱米问了几个问题，展示了故事板，然后制作了影片。",
     "**3.改变它** 在聊天中要求更改，或指向图片。 [在应用程序中制作您的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md) 介绍了它。",
     "[卡] [练习：简介](https://hyperframes.heygen.com/lessons/the-brief) 20 分钟的免费课程，包含短片、测验和尝试简介。简介是目标、目标对象、两到四个细节以及引号中的确切单词。"
    ],
    "codeBlocks": []
   },
   {
    "h": "与您的代理人",
    "p": "",
    "paras": [
     "适用于 Claude Code、Codex、Cursor、Copilot、Gemini CLI 或在任何系统上的计算机上的文件夹中工作的任何代理。"
    ],
    "codeBlocks": []
   },
   {
    "h": "捷径",
    "p": "",
    "paras": [
     "除非安装了 HyperFrames 插件，否则从项目文件夹中的终端安装一次技能，然后在其中打开或重新启动编码代理： 将其粘贴到代理中。它制作视频并打开预览。您只需更改 URL。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes skills update",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "Set this folder up for HyperFrames and make me a video.\n\n1. If the HyperFrames plugin is installed, use its bundled skills and launcher. If the HyperFrames skills are missing, stop and tell me: I install them with npx hyperframes skills update\n2. Then, using /hyperframes, make a 10-second product intro for https://example.com\n3. Open the local preview when it is done and tell me the project folder.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "步步",
    "p": "",
    "paras": [
     "**1.安装插件或技能** 分步页面：[Claude Code](https://hyperframes.heygen.com/guides/with-claude-code.md)、[Codex](https://hyperframes.heygen.com/guides/with-codex.md)、[Cursor](https://hyperframes.heygen.com/guides/with-cursor.md)。",
     "对于 Claude Code、Copilot、VS Code、Cursor 或 Gemini CLI，请从 [插件安装指南](https://hyperframes.heygen.com/guides/plugins.md) 开始。它包括每个代理的更新设置。克劳德的插件输入技能是C0。",
     "对于独立技能，请在项目文件夹中运行它，在选择器中选择 **Core Skills**，然后在该文件夹中打开或重新启动代理： **2.索取视频** 将 C0 替换为您想要视频显示的页面。对于讲述故事的较长电影，经纪人首先提供三个故事情节供选择。",
     "**3.从第一个版本继续** 代理会给您留下一个项目文件夹，并在浏览器编辑器中打开其预览。要稍后重新打开它，请在项目文件夹中运行C0。下面的所有三个路径都适用于同一个项目。"
    ],
    "codeBlocks": [
     {
      "code": "npx skills add heygen-com/hyperframes",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "Using /hyperframes, make a 10-second product intro for https://example.com.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "在 AI 聊天中，无需安装任何内容",
    "p": "",
    "paras": [
     "在 Claude.ai 或 ChatGPT 中，HyperFrames 连接器在您的 HeyGen 帐户中构建并渲染视频。你放弃了项目文件夹和本地渲染。 [将 HyperFrames 连接到 AI 聊天](https://hyperframes.heygen.com/guides/mcp.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[卡片] [选择要制作的内容](https://hyperframes.heygen.com/workflows.md) 产品发布、解说、字幕、剪辑、拉取请求、音乐、动态图形或演示。",
     "[卡片] [从应用程序中的克劳德代码继续](https://hyperframes.heygen.com/studio-app/existing-project.md) 打开您的代理在 Studio 应用程序中制作的项目，然后将其交还。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[在 Studio 应用中制作您的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
     "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
     "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)"
    ]
   }
  ]
 },
 "remotion-migration": {
  "lede": "将现有的 Remotion 项目引入 HyperFrames，然后使用其上的其他所有内容：品牌、变量、编辑和导出。",
  "sections": [
   {
    "h": "这使得什么",
    "p": "",
    "paras": [
     "不是新视频——**翻译**。 [C0](https://hyperframes.heygen.com/prompting/overview) 技能读取现有 Remotion (React) 组合的源代码并将其重写为 HyperFrames HTML：相同的帧、相同的时序、相同的视觉输出，在 GSAP 上运行，而不是 React 的帧回调模型。",
     "这是迁移，而不是创建工作流程。它仅在明确要求移植、转换、迁移或翻译 **Remotion** 源时触发。有两件事看起来很相似，但事实并非如此： 方向是单向的。没有导出回 Remotion 或任何其他框架。"
    ],
    "codeBlocks": [],
    "bullets": [
     "“制作类似我的 Remotion 视频的内​​容”，无需迁移实际源 → 使用 [C0 ](https://hyperframes.heygen.com/prompting/overview#one-time-setup) 进行全新构建。",
     "非 Remotion 源（After Effects、Framer Motion、普通 React/CSS）→ 没有要翻译的 Remotion 源；而是在本机重新创建它。"
    ]
   },
   {
    "h": "基本提示",
    "p": "",
    "paras": [
     "/remotion-to hyperframes 将C0（Remotion 项目根：C1）处的合成移植到 HyperFrames。保持相同的持续时间、fps 和尺寸。对于任何翻译不清晰的地方写下C2。",
     "一旦一个项目注册了多个 C0 ，那么命名确切的文件（不仅仅是“我的 Remotion 项目”）就很重要了——说出是哪一个。"
    ],
    "codeBlocks": []
   },
   {
    "h": "什么无法翻译——以及为什么这是正确的",
    "p": "",
    "paras": [
     "该技能在翻译任何内容之前都会对源代码进行检查，并且在遇到 HyperFrames 的搜索驱动模型无法确定性表示的模式时**拒绝**而不是近似： 如果您的源遇到阻碍，期望代理停止并解释互操作建议，而不是推动 - 这是正确的行为，而不是失败。不要要求它“只是近似”地越过障碍物；这项技能的重点是经过验证、测量的翻译，而不是尽力猜测。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**状态驱动动画** — 具有真实依赖性的C0C1或C2C3。 HyperFrames 寻找任意帧并每次都期望相同的像素；对自己的历史做出反应的状态机不能保证这一点。该技能建议使用运行时互操作模式，而不是默默地生成“看起来正确”但不准确的翻译。",
     "**第三方 React UI 套件** — MUI、Chakra、Mantine、antd、shadcn、Radix、NextUI。没有等效的 HTML/CSS/GSAP 可以将它们翻译成。",
     "**C0 部署配置** — 不是拦截器。它已被删除（部署配置，而不是动画），并且合成的其余部分仍然可以翻译。"
    ]
   },
   {
    "h": "验证不是可选的",
    "p": "",
    "paras": [
     "每个翻译都会根据渲染帧上的 SSIM（结构相似性）对 Remotion 原始内容进行评分，而不是通过肉眼观察。如果您要移植一些重要的内容，请明确要求进行检查： 翻译后，渲染 Remotion 原始版本和 HyperFrames 版本并报告 SSIM 差异。",
     "在预览中“看起来正确”的翻译仍然可以在经过验证的基线以下进行有意义的测量 - 这就是该技能旨在捕捉的差异。"
    ],
    "codeBlocks": []
   },
   {
    "h": "重要的旋钮",
    "p": "",
    "paras": [
     "|旋钮|说什么 |为什么这很重要 |",
     "| - | - | - |",
     "| **精确的源文件** | “在C0下的组成” |一个 Remotion 项目可以注册多个 C1 说出你想要的那个 |",
     "| **保持准确的时间** | “保持相同的持续时间、fps 和尺寸”|默认；无论如何都要说明，这样代理就不会舍入或调整大小 |",
     "| **差距文档** | “对于任何翻译不清晰的地方，请写下C0”|近似的字体、降低的音量渐变和替换的演示文稿都会被记录下来，而不是默默地被吸收|",
     "| **验证** | “报告 SSIM 与原始版本的差异”|使保真度检查成为可交付成果的一部分，而不是可选的事后想法 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见故障模式",
    "p": "",
    "paras": [
     "**请求以 Remotion 作为灵感的全新构建。** 如果您没有实际的 Remotion 源代码可供翻译，那么这不是技能 - 这是正常的构建。",
     "**要求它通过 lint 拦截器。** C0 驱动的合成不是“无论如何翻译，尽力而为”的情况 - 这是一个不同的问题（运行时互操作），强制翻译会产生一些看起来合理但不准确的帧。",
     "**跳过重要端口上的验证。** 仅视觉检查会错过仅在逐帧 SSIM 差异中显示的计时/缓动漂移。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** C0",
     "**相反：** `make an intro like this: [description]` — 无远程源，无迁移",
     "**避免：** C0",
     "**相反：** 让代理推荐互操作模式，然后决定是否适合您的情况",
     "**避免：** *（没有验证请求 - 接受“看起来正确”）*",
     "**相反：** C0"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
     "[HyperFrames 与 Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)",
     "[安装HyperFrames插件](https://hyperframes.heygen.com/guides/plugins.md)"
    ]
   }
  ]
 },
 "skills": {
  "lede": "HyperFrames 技能向编码代理传授通用 Web 知识未涵盖的项目格式、动画规则、媒体工作流程和验证循环。",
  "sections": [
   {
    "h": "为一个人安装",
    "p": "",
    "paras": [
     "运行交互式安装程序： 从视频项目的目录运行此命令。如果您克隆了 HyperFrames 来贡献，请使用 C0 从该结帐中进行全局安装，或在单独的视频项目中运行项目安装程序。项目本地安装程序目标可以与签出的跟踪 C1 源重叠并覆盖未提交的编辑。",
     "选择**核心技能**。这涵盖了所有类型的视频；其他技能会在请求需要时安装，因此您不需要预先提供完整的目录。",
     "安装后启动新的代理聊天，然后要求其使用C0。"
    ],
    "codeBlocks": [
     {
      "code": "npx skills add heygen-com/hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "从代理安装或刷新",
    "p": "",
    "paras": [
     "对于非交互式代理或 CI 环境，请使用： 这将安装或刷新全局安装中已存在的核心集和任何 HyperFrames 技能，然后将这些捆绑包链接到兼容的已安装代理中。它不会添加所有可选技能。",
     "更新会检查安装程序写入的 Claude 全局存储（C0 或C2 下的C1 文件夹）。仅在另一个代理的目录中找到的技能不会将缺少的核心技能计为安装在该目录中，并且该其他目录中的可选技能不会自动添加到托管存储中。明确命名可选技能以添加它。即使在托管商店存在之前，安装记录的发布者属性也会受到尊重。对另一个发布者拥有的技能的显式更新请求会失败，而不会覆盖它，包括当新鲜度检查离线时不可用时。",
     "检查新鲜度而不改变任何东西： 显式安装或刷新一项技能："
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes skills update",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes skills check",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes skills update slideshow",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "使用 GitHub Copilot CLI 中的技能",
    "p": "",
    "paras": [
     "运行C0，打开项目，然后启动 Copilot： 如果 Copilot 已在运行，请使用 C0。使用C1或C2确认发现。 GitHub 的[当前技能指南](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-skills) 列出了其项目和个人技能位置。",
     "两个代理可以使用相同的第一个请求： 继续同一对话进行修改。对于托管创建而不是本地项目，请使用 [HyperFrames MCP 指南](https://hyperframes.heygen.com/guides/mcp.md)。"
    ],
    "codeBlocks": [
     {
      "code": "copilot",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "Using /hyperframes, make a 10-second product intro for https://example.com.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "使用 Google Antigravity 中的技能",
    "p": "",
    "paras": [
     "从您在 Antigravity 中打开的项目的根目录安装技能： 选择**核心技能**和**反重力**。这使用了反重力支持的项目位置C0，并保留项目中的技能。安装后开始新的反重力对话。",
     "Antigravity 还支持全球 C0 目录。在手动管理该目录之前，请参阅 Google 的[当前技能指南](https://antigravity.google/docs/skills?app=antigravity-ide)。"
    ],
    "codeBlocks": [
     {
      "code": "npx skills add heygen-com/hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "使用 IBM Bob 的技能",
    "p": "",
    "paras": [
     "运行C0，然后在项目文件夹中打开或重新启动 Bob Shell，以便它发现C1下链接的技能： 要求 Bob 在第一个请求中使用 C0。再次运行更新会刷新相同的全局技能包，而无需更改项目格式。"
    ],
    "codeBlocks": [
     {
      "code": "bob",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "技能涵盖哪些内容",
    "p": "",
    "paras": [
     "通过要求制作任何视频； C0技能包含合同和参考资料（各种电影、故事、动作、外观、声音、评论、字幕、叠加）。",
     "|技能|它涵盖什么 |",
     "| - | - |",
     "| C0 |首先阅读有关制作、编辑、动画或渲染视频、动态图形、字幕或叠加层的任何请求。保存渲染合同和工作循环，并指向格式、动作、外观、字幕、整部电影和故事板的参考。 |",
     "| C0 | CLI 的工作：脚手架、检查、查看帧、编辑时间线、预览、本地或云端渲染、发布、项目历史记录。 |",
     "| C0 |大约 450 个现成的块和组件作为可编辑源安装：过渡、叠加、标题、动力学类型、标题、图表、地图、3D、摄像机移动。 |",
     "| C0 |音乐、音效、图像、图标、徽标、画外音、头像和生成的视频、文字记录、剪纸、颜色等级和外观，使用 HeyGen 或免费的本地工具；混合放置的音频。 |",
     "| C0 |将任何视频文件重建为可编辑的 HyperFrames 项目（动态图形、说话的头像、真人动作、AI 生成的镜头），并与原始文件逐帧检查。超帧专业版。 |",
     "| C0 |使用五种经过验证的风格之一制作关于您的主题的新剧集：拼贴解释器、金融解释器、动画科学解释器、3D 品牌解释器、3D 真实犯罪。超帧专业版。 |",
     "| C0 | Figma 文件或框架：将资产、品牌标记、组件和故事板框架渲染为重建的运动。 |",
     "| C0 |演示文稿、宣传材料或互动材料。输出是可导航的甲板，而不是渲染的 MP4。 |",
     "| C0 |将现有视频代码或素材引入 HyperFrames（首先是 Remotion；还有 Motion Canvas、Lottie、Three.js、canvas、其他工具的渲染），逐帧进行验证。 | 您可以直接命名技能，但无需记住名称即可启动。"
    ],
    "codeBlocks": []
   },
   {
    "h": "仅在需要时安装更多",
    "p": "",
    "paras": [
     "特意安装完整的发布集： C0 还安装完整的已发布集。默认情况下排除回购内部技能。",
     "或者安装一项指定技能： 将全套用于必须跨多个 HyperFrames 任务运行而无需稍后获取的环境。对于正常的项目，核心集更小并且更容易保持最新。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes skills",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx skills add heygen-com/hyperframes --skill slideshow",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "如果特工看不到技能",
    "p": "",
    "paras": [
     "个人技能定义仍然是代理的真实来源，可在 [HyperFrames 存储库](https://github.com/heygen-com/hyperframes/tree/main/skills) 中找到。"
    ],
    "codeBlocks": [],
    "bullets": [
     "启动新的代理会话。",
     "确认项目或全局技能目录属于您正在使用的代理。",
     "运行C0。",
     "当检查报告核心技能缺失或过时时，运行C0。"
    ]
   },
   {
    "h": "如果更新显示没有安装的技能匹配",
    "p": "",
    "paras": [
     "对于C0C1将C2视为已安装的技能名称。即使安装了 HyperFrames 技能，它也会报告 C3。使用 HyperFrames 更新程序刷新已全局安装的核心集和 HyperFrames 技能： 独立的C0命令接受技能名称，例如C1以仅更新全局C2技能。存储库名称属于C3，如上面的安装步骤所示。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes skills update",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "如果安装的技能出现 YAML 解析错误",
    "p": "",
    "paras": [
     "C0 警告指出无法读取的已安装文件。在编辑该文件之前备份该文件，尤其是当它包含自定义指令时。多行描述需要缩进连续行；例如： 保留文件已有的描述文字和技能体；该示例仅显示 YAML 格式。随后运行 C0 来验证全局发现，或者运行 C1 来进行项目安装。",
     "回购内部技能，例如 C0 被排除在已发布的集合之外。刷新核心技能并不能修复旧的、单独安装的内部技能副本。 YAML 警告和名称匹配错误可能会在同一运行中发生，并且需要这些单独的修复。"
    ],
    "codeBlocks": [
     {
      "code": "---\nname: seam-craft\ndescription: >-\n  Render-correctness doctrine for scene-to-scene seams.\n  Load when assembling the master timeline.\n---",
      "file": "YAML THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
     "[让代理驱动Studio](https://hyperframes.heygen.com/guides/webmcp.md)",
     "[使用 Claude Code 制作视频](https://hyperframes.heygen.com/guides/with-claude-code.md)"
    ]
   }
  ]
 },
 "slideshow": {
  "lede": "HyperFrames 演示文稿保持实时状态：您可以像幻灯片一样单击它，其中包含显示、分支和演讲者注释，而不是播放视频。",
  "sections": [
   {
    "h": "做到这一点",
    "p": "",
    "paras": [
     "向代理人提供演示文稿应支持的材料和决策： 代理人确认观众、主要结果，以及牌组是否需要揭示、分支或演示者注释；您无需计划每张幻灯片。使用您自己的代理而不是应用程序，以 C0 开始消息。",
     "列出观众的姓名以及演示后应更改的内容。如果它应该在没有人在场的情况下从头到尾播放，请制作一个[视频](https://hyperframes.heygen.com/workflows.md)：一副牌还不能导出为 MP4。"
    ],
    "codeBlocks": [
     {
      "code": "Turn this product strategy outline into a presentation for our leadership review: [paste outline]",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "一个好的套牌是如何打造的",
    "p": "",
    "paras": [
     "要手动更改顺序、注释、显示或分支，请使用浏览器编辑器中的[幻灯片面板](https://hyperframes.heygen.com/studio/export.md#build-a-slideshow)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**每张幻灯片一个主张**，并用一张视觉效果来证明这一点。",
     "**显示**演示者何时应一次添加一个想法。",
     "**分支和热点**用于可选细节，因此即使没有人打开它们，主要故事仍然有效。",
     "**演讲者备注** 帮助演示者而不是重复幻灯片。"
    ]
   },
   {
    "h": "提示有效",
    "p": "",
    "paras": [
     "按名称询问该套牌的活动部分：“一次显示一个项目符号”、“从热点分支到详细幻灯片”、“添加演讲者注释”。一次提示即可提供完整的宣传材料： 构建 5 张幻灯片的演示文稿，1920x1080。每张幻灯片一个想法，每个标题都是一个完整的句子主张（不是标签），重点在前。幻灯片 2 以片段形式一次揭示了三个痛点。幻灯片 3 显示了自下而上的市场数学（账户 × ACV），而不是纯粹的“\\$40B TAM”。向每张幻灯片添加演示者注释，并在幻灯片 3 上添加一个热点，该热点分支到“调整方法”详细幻灯片。我将用 C0 来呈现它。",
     "这使得您可以点击浏览甲板，而不是视频。每次显示都是幻灯片内的一个停止点；热点会打开一张详细信息幻灯片，然后“后退”会返回到包含该幻灯片的幻灯片。"
    ],
    "codeBlocks": []
   },
   {
    "h": "呈现它",
    "p": "",
    "paras": [
     "打开本地链接并按 **P**（或单击 **呈现**）。观众获得清晰的全屏视图；您可以看到实时幻灯片、笔记、接下来的内容和计时器。在 Google Meet 中，分享观众**选项卡**；在“缩放”中，将该选项卡移动到其自己的窗口中并共享该窗口。",
     "使用**下一步**逐步显示内容，包括最后一张幻灯片上的内容。一旦显示最后一张幻灯片的最后一张，“下一步”按钮就会消失。",
     "[！警告] 不要在甲板上运行C0。它不会失败——套牌没有 主根组合，因此渲染仅解析**第一**幻灯片并且 默默地写下被截断的 MP4。你可以得到四十秒中的六秒 甲板上并没有警告任何东西丢失。",
     "对于现场甲板使用 C0 或对于现场甲板使用C1 每张幻灯片的剧照。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes present <project-directory>",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[导出和幻灯片](https://hyperframes.heygen.com/studio/export.md)",
     "[通过AI聊天创建](https://hyperframes.heygen.com/guides/mcp.md)",
     "[用AI制作动态图形](https://hyperframes.heygen.com/guides/motion-graphics.md)"
    ]
   }
  ]
 },
 "vs-remotion": {
  "lede": "这两种工具都可以从网页中制作视频。两者都打开一个真正的浏览器，绘制每一帧，并对结果进行编码。区别在于你写的内容。",
  "sections": [
   {
    "h": "同一请求，两个代理",
    "p": "",
    "paras": [
     "我们向 Claude Code (Opus 5.5) 两次提出了相同的单段落请求：一次只安装了 Remotion 的官方代理技能，一次只安装了 HyperFrames。每次运行一次，无需重试，之后也不进行任何编辑。",
     "为名为 Inkwell 的虚构笔记应用程序制作 15 秒 1920x1080 启动视频（口号：“写下来。查找” 稍后再说。”）。标志显示，三个简短的特征线，然后是带有标语的结束卡。没有声音。渲染最终的 MP4 到此文件夹中的 out.mp4。不要问我问题；自己做出选择。",
     "**远程**",
     "<video aria-label=\"Inkwell, made with Remotion\" src=\"https://static.heygen.ai/hyperframes-oss/docs/films/vs-remotion-v1.mp4\" poster=\"/public/images/films/vs-remotion-v1.jpg\" playsInline preload=\"metadata\" />",
     "**超级框架**",
     "<video aria-label=\"Inkwell, made with HyperFrames\" src=\"https://static.heygen.ai/hyperframes-oss/docs/films/vs-hyperframes-v1.mp4\" poster=\"/public/images/films/vs-hyperframes-v1.jpg\" playsInline preload=\"metadata\" />",
     "| |远程|超帧 |",
     "| - | - | - |",
     "|渲染 MP4 的时间到了 | 12 分 30 秒 | 11 分 50 秒 |",
     "|写了什么| 10 个 TypeScript 文件，1,037 行 | 4 个 HTML 文件，822 行 |",
     "|安装到项目中 |约 950 MB C0 |什么都没有|",
     "|声音|无 |它选择了一张音乐床和五种音效| 两个都是不错的视频；单次运行并不能决定质量。持续的区别在于您剩下的东西：一个用于继续在代码中构建的 React 项目，或者您可以在浏览器中打开、使用代理进行编辑或在 [Studio 应用程序](https://hyperframes.heygen.com/studio-app/index.md) 中不断更改的 HTML 文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相同的标题卡，两种写法",
    "p": "",
    "paras": [
     "这是同样的三秒钟——一个淡入、保持和淡出的标题——用两种方式写成。这两个版本都没有为了表达观点而进行填充或削弱。",
     "**远程。** 该分量是当前帧编号的函数。您自己以帧为单位进行计时数学计算。",
     "另一个文件中的 C0 条目将其注册为 30fps、1280×720 的 90 帧。",
     "**超帧。** 标记声明事物何时出现在屏幕上。 GSAP 时间表声明了它们的移动方式。两者都存在于一个文件中。",
     "这是除 C0 样板文件之外的整个文件。三个规则使其渲染：每个可见槽都带有 C1 和 C2 、C3 、C4 和 C5 ；时间线已创建**暂停**；并且它以与根元素相同的 id 注册在C6上。错过最后一个，你就会得到一个没有运动的静止帧。 [HTML schema](https://hyperframes.heygen.com/reference/html-schema.md) 列出了每个属性。",
     "这两个文件显然都不是更好。 Remotion 是一种可以在头脑中进行推理的纯函数。 HyperFrames 是一个可以在浏览器中打开并使用开发工具检查的页面。"
    ],
    "codeBlocks": [
     {
      "code": "import { AbsoluteFill, interpolate, useCurrentFrame } from \"remotion\";\n\nexport const TitleCard = () => {\n  const frame = useCurrentFrame();\n\n  // fade in over frames 0-15, hold to 75, fade out by 90\n  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0], {\n    extrapolateLeft: \"clamp\",\n    extrapolateRight: \"clamp\",\n  });\n\n  return (\n    <AbsoluteFill\n      style={{ backgroundColor: \"#0a0a0a\", justifyContent: \"center\", alignItems: \"center\" }}\n    >\n      <div style={{ fontSize: 160, fontWeight: 800, color: \"#fff\", opacity }}>HELLO</div>\n    </AbsoluteFill>\n  );\n};",
      "file": "TSX THEME={NULL}"
     },
     {
      "code": "<style>\n  #stage { position: relative; width: 1280px; height: 720px; overflow: hidden; background: #0a0a0a; }\n  .clip  { position: absolute; inset: 0; display: grid; place-items: center; }\n  #title { font-size: 160px; font-weight: 800; color: #fff; opacity: 0; }\n</style>\n\n<div id=\"stage\" data-composition-id=\"title-card\" data-start=\"0\"\n     data-width=\"1280\" data-height=\"720\" data-duration=\"3\" data-fps=\"30\">\n  <div id=\"card\" class=\"clip\" data-start=\"0\" data-duration=\"3\" data-track-index=\"0\">\n    <div id=\"title\">HELLO</div>\n  </div>\n</div>\n\n<script src=\"https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js\"></script>\n<script>\n  // same fade, written in seconds instead of frames\n  const tl = gsap.timeline({ paused: true });\n  tl.to(\"#title\", { opacity: 1, duration: 0.5, ease: \"none\" }, 0);\n  tl.to(\"#title\", { opacity: 1, duration: 2.0, ease: \"none\" }, 0.5);\n  tl.to(\"#title\", { opacity: 0, duration: 0.5, ease: \"none\" }, 2.5);\n\n  window.__timelines = window.__timelines || {};\n  window.__timelines[\"title-card\"] = tl;\n</script>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "它们实际上不同的地方",
    "p": "",
    "paras": [
     "| |超帧 |远程|",
     "| - | - | - |",
     "|你写的是什么| HTML、CSS 和 JavaScript | React 和 TypeScript |",
     "|运动如何计时？渲染器会暂停您的动画并“寻找”它 - 将其跳转到精确的时刻 - 在捕获每一帧之前 |您的代码读取帧编号并返回该帧的值 |",
     "|现有网页材料| HTML、CSS 和 GSAP 或 Lottie 动画通常接近原样 |重写为 React 组件 |",
     "|许可证| [Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) |它有自己的许可证——对个人和最多三人的公司免费，高于此则付费。查看[当前条款](https://www.remotion.pro/license) |",
     "寻找模型是一个有趣的模型。由于 HyperFrames 驱动动画而不是观看时钟，因此 GSAP、Web 动画、Lottie 和其他浏览器运行时会确定性地渲染 — 每次都会显示相同的帧。请参阅[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)和[确定性渲染](https://hyperframes.heygen.com/concepts/determinism.md)。",
     "这两个项目都附带了可视化编辑器，并且都将更改保存回源。 [HyperFrames 浏览器编辑器](https://hyperframes.heygen.com/studio.md) 编辑渲染器捕获的相同 DOM。 Remotion Studio 编辑 React 组合。它们不可互换，也不能取代编辑源代码以进行真正的结构更改。",
     "两者都在 AWS Lambda 上呈现。 HyperFrames 还在 HeyGen 的托管云和 Google Cloud Run 上进行本地渲染 - 请参阅[渲染路径](https://hyperframes.heygen.com/deploy/overview.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Remotion 做得更好",
    "p": "",
    "paras": [
     "坦白地说，因为今天的选择很重要。",
     "远程控制更古老，也更成熟。它有更多的模板、更多的教程、更多已解答的问题以及更多的生产历史。 Remotion Lambda 尤其是一个成熟的、有大量文档记录的渲染系统；我们的比较新。",
     "如果您的团队已经编写了 React，Remotion 会免费为您提供组件、设计系统、图表库以及类型化、经过验证的组合输入。没什么可翻译的。",
     "而且它的模型确实更容易记住。一个纯粹的帧数函数，没有时间线来注册，没有合同会出现微妙的错误。 HyperFrames 要求您遵守规则——暂停的时间线、没有挂钟、没有未种子的随机性——如果您不这样做，就会悄悄地中断。"
    ],
    "codeBlocks": []
   },
   {
    "h": "HyperFrames 做得更好的地方",
    "p": "",
    "paras": [
     "您不需要 React、构建步骤或组件重写。网站、HTML 原型、导出的设计或现有的浏览器动画已经接近合成。",
     "它是为人工智能代理进行创作而构建的。 [代理技能](https://hyperframes.heygen.com/guides/skills.md) 对框架的规则进行编码，因此代理可以编写有效的组合而不是猜测，然后人类可以在浏览器编辑器中编辑相同的文件。",
     "Apache 2.0 意味着没有席位数，也没有许可证审查。"
    ],
    "codeBlocks": []
   },
   {
    "h": "跨区域移动 Remotion 项目",
    "p": "",
    "paras": [
     "有一条真正的迁移路径，而不是承诺。安装技能： 然后要求您的代理移植该组合物。它将 C0 和 C1 映射到时间线补间，将 C2 映射到剪辑，并将帧转换为秒。",
     "越难的情况才是技能的重点。它拒绝翻译不适合的内容：基于 C0 或 C1 构建的 React 状态机、异步元数据、第三方 React UI 库。这些内容会被标记，而不是默默地误译。它还对自己的输出进行评分——它渲染两个版本并逐帧比较它们，并记下它丢弃的任何内容。",
     "迁移是因为您的源材料或您的团队更适合这一侧。并不是因为某个框架看起来较新。"
    ],
    "codeBlocks": [
     {
      "code": "npx skills add heygen-com/hyperframes --skill remotion-to-hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
     "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
     "[安装HyperFrames插件](https://hyperframes.heygen.com/guides/plugins.md)"
    ]
   }
  ]
 },
 "with-claude-code": {
  "lede": "安装 HyperFrames 插件，然后向 Claude Code 索取视频。 Claude Code 在您的文件夹中编写一个 HTML 项目，打开实时预览，然后在您的计算机上呈现 MP4。",
  "sections": [
   {
    "h": "开始之前",
    "p": "",
    "paras": [
     "或 Anthropic 控制台帐户。它的使用费用记入该帐户。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Claude Code](https://code.claude.com/docs)，使用您的 Claude 帐户登录",
     "Node.js 22 或更高版本以及 npm。",
     "FFmpeg，用于渲染 MP4 文件。运行C0进行检查。"
    ]
   },
   {
    "h": "安装",
    "p": "",
    "paras": [
     "[选项卡] 插件（推荐） 在终端中运行上面的两个命令。然后开始新的克劳德代码 会话，或在当前会话中运行 C0。",
     "要自行获取更新，请运行C0，打开**市场**，选择 **超帧**，然后选择**启用自动更新**。看 [安装 HyperFrames 插件](https://hyperframes.heygen.com/guides/plugins.md#claude-code) 进行手动更新和",
     "移动。",
     "[tab] 单机技能 在您的项目文件夹中运行它并选择 **核心技能**： ```bash 主题={null} npx 技能添加 heygen-com/hyperframes ```` 或者为您的用户安装核心集，不带选择器： ```bash 主题={null}",
     "npx超框架技能更新 ```` 之后开始新的克劳德代码会话。看 [安装和更新代理技能](https://hyperframes.heygen.com/guides/skills.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "询问您的第一个视频",
    "p": "",
    "paras": [
     "在空文件夹中打开 Claude Code 并粘贴： 对于独立技能，技能是C0而不是C1。将 URL 替换为您希望视频显示的页面。"
    ],
    "codeBlocks": [
     {
      "code": "Using /hyperframes:hyperframes, make a 10-second product intro for https://example.com.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "会发生什么",
    "p": "",
    "paras": [
     "启动或解释器，并在您的文件夹中构建项目。对于讲述故事的较长电影，它首先提供三个故事情节可供选择。",
     "在同一对话中观看第一个版本并说出要更改的内容。"
    ],
    "codeBlocks": [],
    "bullets": [
     "Claude Code 阅读适合您的视频类型（例如产品）的 HyperFrames 指南",
     "它检查项目并打开本地预览。"
    ]
   },
   {
    "h": "预览和渲染",
    "p": "",
    "paras": [
     "要稍后重新打开预览，请在项目文件夹中运行以下命令： 预览在浏览器编辑器中打开，您还可以在其中手动编辑视频。自己制作 MP4： 您也可以要求 Claude Code 渲染它。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "更喜欢应用程序？",
    "p": "",
    "paras": [
     "适用于 Mac、Windows 和 Linux 的 [HyperFrames Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 可以使用 Claude Code 作为其代理。它会为您安装 Claude Code，并在一个窗口中为您提供聊天、预览和编辑器。要在 Claude 聊天应用程序内创建而不安装任何内容，请使用[托管连接器](https://hyperframes.heygen.com/guides/mcp.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "如果出现问题",
    "p": "",
    "paras": [
     "C0。对于独立技能，请运行C1。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Claude Code 没有看到该技能。** 开始新会话或运行",
     "**渲染失败。**运行C0并修复它报告的内容。",
     "**还有其他问题。** 请参阅[疑难解答](https://hyperframes.heygen.com/help.md)。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)"
    ]
   }
  ]
 },
 "with-codex": {
  "lede": "安装 HyperFrames 技能，然后向 Codex 索取视频。 Codex 在您的文件夹中写入一个 HTML 项目，打开实时预览，并在您的计算机上呈现 MP4。",
  "sections": [
   {
    "h": "开始之前",
    "p": "",
    "paras": [
     "帐户或 OpenAI API 密钥。它的使用费用记入该帐户。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Codex](https://developers.openai.com/codex)，使用您的 ChatGPT 登录",
     "Node.js 22 或更高版本以及 npm。",
     "FFmpeg，用于渲染 MP4 文件。运行C0进行检查。"
    ]
   },
   {
    "h": "安装",
    "p": "",
    "paras": [
     "运行上面的命令一次。稍后再次运行以更新技能。",
     "要将技能保留在一个项目中，请在项目文件夹中运行此命令，然后在选择器中选择 **Core Skills** 和 **Codex**： 安装后启动新的 Codex 会话。请参阅【安装和更新代理技能】(https://hyperframes.heygen.com/guides/skills.md)进行检查和更新。"
    ],
    "codeBlocks": [
     {
      "code": "npx skills add heygen-com/hyperframes",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "询问您的第一个视频",
    "p": "",
    "paras": [
     "在空文件夹中打开 Codex 并粘贴： C0 将 HyperFrames 技能命名为“HyperFrames”技能。将 URL 替换为您希望视频显示的页面。"
    ],
    "codeBlocks": [
     {
      "code": "Use $hyperframes to make a 10-second product intro for https://example.com.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "会发生什么",
    "p": "",
    "paras": [
     "启动或解释器，并在您的文件夹中构建项目。对于讲述故事的较长电影，它首先提供三个故事情节可供选择。",
     "Codex 可能会在运行命令或使用网络之前询问。技能安装包、启动预览服务器并运行渲染器，因此请批准此文件夹的这些步骤。在同一对话中观看第一个版本并说出要更改的内容。"
    ],
    "codeBlocks": [],
    "bullets": [
     "Codex 会读取适合您的视频类型（例如产品）的 HyperFrames 指南",
     "它检查项目并打开本地预览。"
    ]
   },
   {
    "h": "预览和渲染",
    "p": "",
    "paras": [
     "要稍后重新打开预览，请在项目文件夹中运行以下命令： 预览在浏览器编辑器中打开，您还可以在其中手动编辑视频。自己制作 MP4： 您还可以要求 Codex 渲染它。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "更喜欢应用程序？",
    "p": "",
    "paras": [
     "适用于 Mac、Windows 和 Linux 的 [HyperFrames Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 可以使用 Codex 作为其代理。请参阅[连接您的代理](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)。要在 ChatGPT 内部创建而不安装任何内容，请使用[托管连接器](https://hyperframes.heygen.com/guides/mcp.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "如果出现问题",
    "p": "",
    "paras": [
     "C0。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Codex 没有看到该技能。** 启动一个新会话，然后运行",
     "**渲染失败。**运行C0并修复它报告的内容。",
     "**还有其他问题。** 请参阅[疑难解答](https://hyperframes.heygen.com/help.md)。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用光标制作视频](https://hyperframes.heygen.com/guides/with-cursor.md)",
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)"
    ]
   }
  ]
 },
 "with-cursor": {
  "lede": "在您的项目中安装 HyperFrames 技能，然后向 Cursor 的代理索要视频。该代理会在您的文件夹中写入一个 HTML 项目，打开实时预览，并在您的计算机上呈现 MP4。",
  "sections": [
   {
    "h": "安装",
    "p": "",
    "paras": [
     "[选项卡] 项目技能 在项目文件夹中运行上面的命令。技能就这样 项目。重新加载光标或随后开始新的代理聊天。",
     "[选项卡] 对于您的用户 为每个项目安装一次核心集： ```bash 主题={null} npx超框架技能更新 ```` 安装 Cursor 后，会将技能链接到C0。",
     "稍后再次运行以更新它们。",
     "[标签] 插件 团队可以通过 Cursor 团队市场添加 HyperFrames 插件，或者 加载本地副本。请参阅[安装HyperFrames插件](https://hyperframes.heygen.com/guides/plugins.md#cursor)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "询问您的第一个视频",
    "p": "",
    "paras": [
     "在空项目中打开新的代理聊天并粘贴： 将 URL 替换为您希望视频显示的页面。"
    ],
    "codeBlocks": [
     {
      "code": "Using /hyperframes, make a 10-second product intro for https://example.com.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "会发生什么",
    "p": "",
    "paras": [
     "启动或解释器，并在您的文件夹中构建项目。对于讲述故事的较长电影，它首先提供三个故事情节可供选择。",
     "代理运行终端命令来安装包、启动预览和渲染。当光标询问时批准它们。在同一个聊天中观看第一个版本并说出要更改的内容。"
    ],
    "codeBlocks": [],
    "bullets": [
     "代理会阅读适合您的视频类型（例如产品）的 HyperFrames 指南",
     "它检查项目并打开本地预览。"
    ]
   },
   {
    "h": "预览和渲染",
    "p": "",
    "paras": [
     "要稍后重新打开预览，请在项目文件夹内的 Cursor 终端中运行以下命令： 预览在浏览器编辑器中打开，您还可以在其中手动编辑视频。自己制作 MP4： 您也可以要求代理渲染它。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "更喜欢应用程序？",
    "p": "",
    "paras": [
     "适用于 Mac、Windows 和 Linux 的 [HyperFrames Studio 应用程序](https://hyperframes.heygen.com/studio-app.md) 为您提供在一个窗口中进行聊天、预览和编辑的功能。它运行 Claude Code、Codex 和其他代理，但不运行 Cursor。请参阅[连接您的代理](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "如果出现问题",
    "p": "",
    "paras": [
     "C0（项目安装）或C1（用户安装）包含C2，然后运行C3。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**客服人员看不到技能。** 开始新的客服人员聊天。确认",
     "**渲染失败。**运行C0并修复它报告的内容。",
     "**还有其他问题。** 请参阅[疑难解答](https://hyperframes.heygen.com/help.md)。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[使用 Codex 制作视频](https://hyperframes.heygen.com/guides/with-codex.md)",
     "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)"
    ]
   }
  ]
 },
 "workflows": {
  "lede": "选择你要从什么开始。每个指南都会显示已完成的视频、提出这些视频的请求以及如何更改它们。",
  "sections": [
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档是在开发人员文档平台 [Mintlify](https://mintlify.com) 上构建和托管的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作任何其他视频](https://hyperframes.heygen.com/guides/general-video.md)",
     "[灵感](https://hyperframes.heygen.com/examples.md)",
     "[30 天的 HyperFrames](https://hyperframes.heygen.com/thirty-days.md)"
    ]
   }
  ]
 }
};
