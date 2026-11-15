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
 },
 "community-adopters": {
  "lede": "下列团队在生产中使用 HyperFrames，或正在积极评估 HyperFrames。如果你的组织使用了 HyperFrames——无论是在生产中、评估中，还是个人项目中——我们都欢迎将其加入。",
  "sections": [
   {
    "h": "如何添加你的组织",
    "p": "",
    "paras": [
     "请提交一个 pull request，将你的团队加入仓库根目录的 [`ADOPTERS.md`](https://github.com/heygen-com/hyperframes/blob/main/ADOPTERS.md)。格式刻意保持轻量：",
     "如果你不想公开列出，我们仍非常乐意听取你的使用情况——请到 [我们的 Discord](https://discord.gg/7uMDe3PwQn) 留言。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**组织**——你的公司或项目名称，并链接到你网站。",
     "**联系人**——GitHub handle，方便其他采用者联系你。",
     "**HyperFrames 的使用方式**——用一句话说明用例。",
     "**Logo** *(可选)*——用于展示在本页的方形 logo 或图标。如果你跳过，条目仍会出现在下方表中。"
    ]
   },
   {
    "h": "使用或评估 HyperFrames 的团队",
    "p": "",
    "paras": [
     "[card] [HeyGen](https://www.heygen.com) ![HeyGen logo](https://app.heygen.com/apple-touch-icon.png) 驱动 HeyGen 视频产品界面中的 AI 生成视频合成与渲染。",
     "[@jrusso1020](https://github.com/jrusso1020) [card] [tldraw](https://tldraw.com) ![tldraw logo](https://www.google.com/s2/favicons?domain=tldraw.com\\&sz=128)",
     "使用带 GSAP 动画代码 diff、旁白和字幕的自动 PR 讲解视频。",
     "[@steveruizok](https://github.com/steveruizok) [card] [TanStack](https://tanstack.com) ![TanStack logo](https://www.google.com/s2/favicons?domain=tanstack.com\\&sz=128)",
     "探索使用 HyperFrames 制作短形式代码演示视频和文档。",
     "[@AlemTuzlak](https://github.com/AlemTuzlak) [card] [OptinMonster](https://optinmonster.com) ![OptinMonster logo](https://www.google.com/s2/favicons?domain=optinmonster.com\\&sz=128)",
     "探索使用 HyperFrames 制作营销和产品视频内容。",
     "Angie Meeker [card] [reap](https://reap.video) ![reap logo](https://www.google.com/s2/favicons?domain=reap.video\\&sz=128)",
     "驱动 reap.video 中面向智能体的 AI 视频剪辑、编辑和渲染，覆盖创作者和智能体工作流。",
     "[@usamaabid](https://github.com/usamaabid) [card] [Typeframe](https://typeframe.app) ![Typeframe logo](https://www.google.com/s2/favicons?domain=typeframe.app\\&sz=128)",
     "将语音视频渲染为可分享的 MP4 导出，带词级时间字幕打字机效果和样式化字幕布局。",
     "[@kiyeonjeon21](https://github.com/kiyeonjeon21) [card] [THU-MAIC](https://github.com/THU-MAIC) ![THU-MAIC logo](https://avatars.githubusercontent.com/u/163809488?v=4)",
     "为 OpenMAIC 提供一键 MP4 导出，使用自包含的 HyperFrames 合成生成 AI 交互课堂。",
     "[@wyuc](https://github.com/wyuc) [card] [Mini Course Generator](https://minicoursegenerator.com/) ![Mini Course Generator logo](https://www.google.com/s2/favicons?domain=minicoursegenerator.com\\&sz=128)",
     "在课程创建工作流中使用 HyperFrames 进行 AI 合成视频。",
     "[@eren-commits](https://github.com/eren-commits) [card] [PandaStudio](https://www.writepanda.ai) ![PandaStudio logo](https://www.google.com/s2/favicons?domain=writepanda.ai\\&sz=128)",
     "在桌面视频编辑器中渲染动态图形、动画字幕和叠加层，用于 MP4 导出。",
     "[@kamskans](https://github.com/kamskans) [card] [Skyflo](https://skyflo.ai) ![Skyflo logo](https://www.google.com/s2/favicons?domain=skyflo.ai\\&sz=128)",
     "渲染 Skyflo 的产品发布影片，端到端由 AI 智能体从脚本到音乐选择创作。",
     "[@KaranJagtiani](https://github.com/KaranJagtiani) [card] [DoneCut](https://donecut.com) ![DoneCut logo](https://www.google.com/s2/favicons?domain=donecut.com\\&sz=128)",
     "在 DoneCut 的 YouTube 和 Shorts 代工剪辑中渲染字幕、片头卡和动态图形叠加层。",
     "[hello@donecut.com](mailto:hello@donecut.com) [card] [varg](https://varg.ai) ![varg logo](https://www.google.com/s2/favicons?domain=varg.ai\\&sz=128)",
     "发布开放智能体技能，为 AI 生成视频添加字幕、标题和动态图形，作为 HyperFrames 合成。",
     "[@SecurityQQ](https://github.com/SecurityQQ) HeyGen 团队实际使用的发布视频源（即产品公告中展示的那些）位于 [hyperframes-launches](https://github.com/heygen-com/hyperframes-launches) —— 说明请参见 [示例](https://hyperframes.heygen.com/examples.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)",
     "[@hyperframes/aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "concepts-compositions": {
  "lede": "组合是一个描述视频的 HTML 文件。你编写元素，给它们 `data-*` 计时属性，框架把它们变为帧。",
  "sections": [
   {
    "h": "HTML 文件如何变为帧",
    "p": "",
    "paras": [
     "这是整个视频：一个 logo，然后一个视频片段。",
     "两条规则使之成立。外层元素需要 `data-composition-id`，且每个计时元素需要 `class=\"clip\"`，运行时才能在它自己的时间窗口之外隐藏它。",
     "片段合计五秒。以 30 帧/秒（默认）计，即 150 帧，编号 0 到 149： 渲染期间没有任何内容实时播放。渲染器依次索取第 0 帧、第 1 帧，每次回答都是一张静态画面。这正是使[渲染确定性](https://hyperframes.heygen.com/concepts/determinism.md)成立的原因。"
    ],
    "codeBlocks": [
     {
      "code": "<div id=\"root\" data-composition-id=\"root\"\n     data-start=\"0\" data-width=\"1920\" data-height=\"1080\">\n  <img class=\"clip\" src=\"assets/logo.png\"\n       data-start=\"0\" data-duration=\"2\" data-track-index=\"0\" />\n  <video class=\"clip\" src=\"assets/video.mp4\"\n         data-start=\"2\" data-duration=\"3\" data-track-index=\"0\"></video>\n</div>",
      "file": "HTML INDEX.HTML THEME={NULL}"
     },
     {
      "code": "flowchart TD\n    A[\"index.html<br/>img: start 0, duration 2<br/>video: start 2, duration 3\"]\n    A --> B[\"One timeline, 5 seconds<br/>30 fps = 150 frames\"]\n    B --> C[\"frames 0-59<br/>image on screen\"]\n    B --> D[\"frames 60-149<br/>video on screen, playing<br/>from its own second 0\"]",
      "file": "MERMAID THEME={NULL}"
     }
    ]
   },
   {
    "h": "时间轴上可以放什么",
    "p": "",
    "paras": [
     "片段是指带计时属性的任何元素： [数据属性](https://hyperframes.heygen.com/concepts/data-attributes.md)页面列出每个计时属性。[HTML schema](https://hyperframes.heygen.com/reference/html-schema.md)有完整契约。"
    ],
    "codeBlocks": [],
    "bullets": [
     "`<video>`——视频片段、B-roll、A-roll",
     "`<img>`——静帧和覆盖层",
     "`<audio>`——音乐和音效",
     "`<div data-composition-id=\"...\">`——嵌套在本组合中的另一个组合"
    ]
   },
   {
    "h": "把一个组合放到另一个组合中",
    "p": "",
    "paras": [
     "你可以指向独立文件，或把嵌套组合内联编写。想复用时使用独立文件。",
     "[tab] 外部文件 `data-composition-src` 命名该文件。框架拉取它，从其 `<template>` 标签中取出内容，挂载它，运行其脚本，并注册其时间轴。",
     "路径从**项目根**解析，而不是从引用文件解析。因此一层深的嵌套组合仍写 `compositions/foo.html`，从不写 `../compositions/foo.html`。",
     "```html index.html theme={null} <div   id=\"el-5\"   data-composition-id=\"intro-anim\"   data-composition-src=\"compositions/intro-anim.html\"",
     "  data-start=\"0\"   data-duration=\"4\"   data-playback-start=\"0\"   data-track-index=\"3\" ></div> ``` 它指向的文件把所有内容包在 `<template>` 中：",
     "```html compositions/intro-anim.html theme={null} <template id=\"intro-anim-template\">   <div data-composition-id=\"intro-anim\" data-width=\"1920\" data-height=\"1080\">",
     "    <div class=\"title\">Welcome!</div>     <style>       [data-composition-id=\"intro-anim\"] .title {         font-size: 72px; color: white; text-align: center;",
     "      }     </style>     <script>       const tl = gsap.timeline({ paused: true });       tl.from(\".title\", { opacity: 0, y: -50, duration: 1 });",
     "      window.__timelines[\"intro-anim\"] = tl;     </script>   </div> </template> ``` `<template>` 前允许前导 HTML 注释。用 `render -c compositions/intro-anim.html` 或 `keyframes compositions/intro-anim.html --shot scene.png` 定向该场景，会复用它在 `index.html` 中的挂载，包括项目的库脚本。",
     "`data-playback-start` 选择子时间轴的哪个时刻先显示。默认 `0`。从左侧修剪或拆分会按所经过时间乘以 `data-playback-rate` 推进该偏移，使嵌套动画继续往前而不是跳回开头。",
     "子文件内的计时相对于该组合局部。若宿主从 `10` 开始，子视频从 `2` 开始，视频在根时间轴上从 `12` 开始。旧项目若在根时间中编写媒体开始，可用 `data-hf-media-start-basis=\"global\"` 显式保留；新组合应使用局部计时。",
     "[tab] 内联 把嵌套组合直接写进父级。仅使用一次时更简单。",
     "```html index.html theme={null} <div id=\"root\" data-composition-id=\"root\"      data-start=\"0\" data-width=\"1920\" data-height=\"1080\">",
     "  <!-- Inline nested composition -->   <div id=\"el-5\" data-composition-id=\"intro-anim\"        data-start=\"0\" data-track-index=\"3\"",
     "       data-width=\"1920\" data-height=\"1080\">     <div class=\"title\">Welcome!</div>   </div>   <script>     // Timeline for the inline composition",
     "    const introTl = gsap.timeline({ paused: true });     introTl.from(\".title\", { opacity: 0, y: -50, duration: 1 });     window.__timelines[\"intro-anim\"] = introTl;",
     "  </script> </div> ``` 这里没有 `<template>` 标签和 `data-composition-src`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "文件放在哪里",
    "p": "",
    "paras": [
     "**project** **index.html** **compositions** **intro-anim.html** **caption-overlay.html** **outro-title.html** **assets**",
     "**video.mp4** **music.mp3** **logo.png**"
    ],
    "codeBlocks": []
   },
   {
    "h": "HTML 定时，脚本做运动",
    "p": "",
    "paras": [
     "你的 HTML 通过[数据属性](https://hyperframes.heygen.com/concepts/data-attributes.md)说明播什么、何时播、在哪一轨；脚本处理创意部分：效果、过渡、canvas、SVG、[GSAP](https://hyperframes.heygen.com/guides/gsap-animation.md)动画。",
     "[!WARNING] 切勿用脚本播放、暂停或寻址媒体元素，也切勿用脚本按时间显示或隐藏片段。框架已根据数据属性完成这些事，脚本再做会与框架冲突。请见[常见错误](https://hyperframes.heygen.com/help.md)查看那是什么样子。"
    ],
    "codeBlocks": []
   },
   {
    "h": "用不同内容复用同一个组合",
    "p": "",
    "paras": [
     "一个源文件可出现在同一视频的多个位置，每份副本携带各自的文本和颜色。HyperFrames 不会替你把 `data-var-*` 属性接线到 DOM 或 CSS——你按三步完成： 第二张卡的 `data-start=\"card-pro\"` 意思是“它结束时开始”。",
     "两张卡共享的源文件是： [变量](https://hyperframes.heygen.com/concepts/variables.md)涵盖类型、无需脚本的绑定、CLI 覆盖，以及哪个值胜出。若你在 `@hyperframes/core` 上构建工具，`extractCompositionMetadata()` 读取同样的 `data-composition-variables` 数组——浏览器编辑器正是这样构建编辑 UI 的。"
    ],
    "codeBlocks": [
     {
      "code": "<div\n  data-composition-id=\"card-pro\"\n  data-composition-src=\"compositions/card.html\"\n  data-start=\"0\"\n  data-duration=\"3\"\n  data-track-index=\"1\"\n  data-variable-values='{\"title\":\"Pro\",\"color\":\"#ff4d4f\"}'\n></div>\n<div\n  data-composition-id=\"card-enterprise\"\n  data-composition-src=\"compositions/card.html\"\n  data-start=\"card-pro\"\n  data-duration=\"3\"\n  data-track-index=\"1\"\n  data-variable-values='{\"title\":\"Enterprise\",\"color\":\"#22c55e\"}'\n></div>",
      "file": "HTML INDEX.HTML THEME={NULL}"
     },
     {
      "code": "<html data-composition-variables='[\n  {\"id\":\"title\",\"type\":\"string\",\"label\":\"Title\",\"default\":\"Fallback\"},\n  {\"id\":\"color\",\"type\":\"color\",\"label\":\"Color\",\"default\":\"#111827\"}\n]'>\n  <body>\n    <div data-composition-id=\"card\" data-width=\"1920\" data-height=\"1080\">\n      <h1 class=\"title\"></h1>\n\n      <style>\n        [data-composition-id=\"card\"] .title { color: var(--card-color, #111827); }\n      </style>\n\n      <script>\n        const { title, color } = __hyperframes.getVariables();\n        const root = document.querySelector('[data-composition-id=\"card\"]');\n        root.querySelector(\".title\").textContent = title;\n        root.style.setProperty(\"--card-color\", color);\n      </script>\n    </div>\n  </body>\n</html>",
      "file": "HTML COMPOSITIONS/CARD.HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "在子组合根上用 `data-composition-variables` 声明每个变量——id、类型、默认值。该根在完整文档组合中是 `<html>` 元素，在模板或片段中是 `[data-composition-id]` 元素。",
     "在每个副本的宿主元素上用 `data-variable-values` 传入该副本的值。",
     "在组合内用 `window.__hyperframes.getVariables()` 读取，把宿主的值叠到已声明默认值上，一次一份。"
    ]
   },
   {
    "h": "从脚本加载组合自身的同级文件",
    "p": "",
    "paras": [
     "当组合被挂载时，指向同级文件的 `src` 或 `href` 属性会被重写到该文件所在处，因此 `<img src=\"assets/logo.png\">` 仍然可用。脚本拼接的路径只是普通字符串，永不重写，请用 `window.__hyperframes.assetUrl()` 解析。它接收相对组合自身文件编写的路径，返回页面可加载的 URL，无论文件是挂载、预览还是独立打开。",
     "意在项目根的路径，如组合位于 `compositions/intro.html`、图像在项目自身 `assets/` 目录中的 `assets/logo.png`，已经从页面解析。请保留为普通字符串：`assetUrl()` 会在组合旁边找它而错过。",
     "独立脚本文件（`<script src=\"...\">`）没有可相对解析的自身组合。请在组合的内联脚本中解析 URL 并移交，例如挂到文件读取的全局对象上。"
    ],
    "codeBlocks": [
     {
      "code": "<div data-composition-id=\"globe\" data-width=\"1920\" data-height=\"1080\">\n  <script>\n    const texture = new THREE.TextureLoader().load(\n      __hyperframes.assetUrl(\"assets/earth.jpg\"),\n    );\n  </script>\n</div>",
      "file": "HTML COMPOSITIONS/GLOBE/GLOBE.HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "查看项目中的每个组合",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "npx hyperframes compositions",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
     "[openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md)",
     "[用 SDK 编辑组合](https://hyperframes.heygen.com/sdk/quickstart.md)"
    ]
   }
  ]
 },
 "concepts-data": {
  "lede": "HyperFrames 将时序保存在 HTML 中。普通的定时元素需要稳定的 ID、起始时间、时长和轨道：",
  "sections": [
   {
    "h": "轨道不是图层",
    "p": "",
    "paras": [
     "轨道是浏览器编辑器绘制的行。它们不决定哪个元素在前面，也不负责调度任何内容。请使用 CSS `z-index` 来决定绘制顺序。",
     "同一轨道上的两个剪辑可以重叠；渲染时会合成两者。分别使用不同轨道可以让刻意的重叠（例如交叉淡入淡出）在浏览器编辑器中更易读："
    ],
    "codeBlocks": [
     {
      "code": "<video\n  id=\"intro\"\n  data-start=\"0\"\n  data-duration=\"4\"\n  data-track-index=\"0\"\n  src=\"./intro.mp4\"\n  muted\n  playsinline\n></video>\n<section id=\"result\" class=\"clip\" data-start=\"intro - 0.5\" data-duration=\"3\" data-track-index=\"1\">\n  The result\n</section>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "将负图层保留在父级内部",
    "p": "",
    "paras": [
     "负的 `z-index` 是有效的 CSS，但当父级没有创建层叠上下文时，它可能把剪辑放到不透明祖先背景之后。例如，这个背景可能会被 root 的背景遮住： 添加一个属性，让背景位于父级背景之上、前景兄弟之下： `isolation: isolate` 会创建局部层叠上下文。背景将在浏览器、`snapshot` 和 `render` 中可见；`z-index: 0` 或更高的兄弟元素仍可以覆盖它。你也可以使用更早的背景兄弟元素，并将前景元素提升为非负的 `z-index` 值。",
     "`hyperframes lint` 会根据 CSS 文本将 `negative_z_index` 报告为警告。当祖先已经创建层叠上下文时它仍可能发出警告，因此请验证可见结果，而不是把每个负值都视为无效。"
    ],
    "codeBlocks": [
     {
      "code": "#root {\n  position: relative;\n  background: #0a0a0a;\n}\n#backdrop {\n  position: absolute;\n  inset: 0;\n  background: #f5e6c8;\n  z-index: -1;\n}",
      "file": "CSS THEME={NULL}"
     },
     {
      "code": "#root {\n  isolation: isolate;\n}",
      "file": "CSS THEME={NULL}"
     }
    ]
   },
   {
    "h": "相对于另一个剪辑开始",
    "p": "",
    "paras": [
     "数值型 `data-start` 是以秒为单位的绝对时间。剪辑 ID 表示“在该剪辑结束时开始”。增减秒数可以实现间隔或重叠： 引用只在同一合成内部解析。被引用的剪辑必须有已知时长，且引用链不能含有循环。"
    ],
    "codeBlocks": [
     {
      "code": "data-start=\"intro\" data-start=\"intro + 0.5\" data-start=\"intro - 0.5\"",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "媒体与嵌套合成",
    "p": "",
    "paras": [
     "媒体还可以声明源偏移、播放速率和音量。嵌套合成会增加源路径和自己的固定时间线窗口。这些都是精确的约定，而非新的时序模型。",
     "所有受支持的属性和元素特有的规则，请使用 [HTML 模式参考](https://hyperframes.heygen.com/reference/html-schema.md)。何时应将场景改为独立合成，请参阅 [合成](https://hyperframes.heygen.com/concepts/compositions.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[合成](https://hyperframes.heygen.com/sdk/reference/composition.md)",
     "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
     "[使用 data-vfx-chain 的逐像素特效](https://hyperframes.heygen.com/guides/vfx-chain.md)"
    ]
   }
  ]
 },
 "concepts-determinism": {
  "lede": "同一[合成](https://hyperframes.heygen.com/concepts/compositions.md)总是产生相同的视频。",
  "sections": [
   {
    "h": "为什么同一帧始终输出相同结果",
    "p": "",
    "paras": [
     "渲染从不播放你的视频。它一次请求一帧， “第 90 帧看起来如何？”的答案只取决于一件事在变化：数字 90。",
     "所以规则很简单："
    ],
    "codeBlocks": [
     {
      "code": "flowchart TD\n    F[\"Frame 90\"] --> T\n    L[\"Locked before frame 0:<br/>fps, width, height, variables\"] --> T\n    T[\"t = 90 / fps<br/>integer math, never a clock\"] --> S[\"Every animation seeked<br/>to exactly t\"]\n    S --> P[\"The same pixels, every run\"]\n    S -.-> X[\"Breaks if a frame reads:<br/>Date.now, unseeded Math.random,<br/>or a mid-render fetch\"]",
      "file": "MERMAID THEME={NULL}"
     }
    ],
    "bullets": [
     "**不要使用墙钟。**不要使用 `Date.now()`、`requestAnimationFrame` 或系统计时器。",
     "**不要使用未播种随机数。**没有种子的 `Math.random()` 每次运行都会给出不同的一帧。",
     "**不要在渲染中途拉取。**所有资产都在第一帧之前加载完成。",
     "**输出尺寸固定。**在第 0 帧之前，`fps`、`width` 和 `height` 已锁定。",
     "**长度有限。**每个合成都有已知的结束点。"
    ]
   },
   {
    "h": "每帧发生什么",
    "p": "",
    "paras": [
     "**1. 帧时钟** [引擎](https://hyperframes.heygen.com/packages/engine.md)用整数数学计算时间： `time = floor(frame) / fps`。从不查询真实时间。",
     "**2. 定位** [帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)接收 `seekFrame(frame)`，并将每个动画、DOM 变化和画布绘制移动到那个确切时刻。所有 [GSAP](https://hyperframes.heygen.com/guides/gsap-animation.md) 时间线都会暂停并定位，永不播放。",
     "**3. 捕获** Chrome 的 `HeadlessExperimental.beginFrame` 以一次原子操作抓取像素。不会有半绘制的帧。",
     "**4. 编码** FFmpeg 将捕获的帧转换为 MP4，并混入你的 `<audio>` 和 `<video>` 元素中的音频。",
     "每个[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)遵循相同的规则。如果编写自定义适配器，必须遵守 [确定性约定](https://hyperframes.heygen.com/concepts/frame-adapters.md#contract)：",
     "`seekFrame(frame)` 对同一帧给出相同结果，定位可以按任意顺序进行，帧提交后不会还有任何内容才决断，且生命周期保持 `init` → `seekFrame`（多次）→ `destroy`。",
     "在截图捕获下，Chrome 会将每个变化的栅格块整体重绘，因此某一帧的像素不取决于页面之前绘制了什么。工作者数量、块边界 和定位顺序都不会改变它们。[运动模糊](https://hyperframes.heygen.com/guides/motion-blur.md#cost-and-limits)是例外。"
    ],
    "codeBlocks": []
   },
   {
    "h": "排除你的机器这一变量",
    "p": "",
    "paras": [
     "字体和 Chrome 版本在不同电脑上存在差异，因此本地渲染可能在两台机器上相差一像素。当需要精确可复现时，请在 Docker 中渲染： Docker 固定了 Chromium 版本、字体集和 FFmpeg 编码器，因此平台不再是输入项。[渲染指南](https://hyperframes.heygen.com/guides/rendering.md)涵盖所有其他选项。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --docker --output output.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "预览会与渲染一致吗？",
    "p": "",
    "paras": [
     "两处每一帧看起来都一样，因为两者都运行相同的 `hyperframe.runtime`，[生产者](https://hyperframes.heygen.com/packages/producer.md)的定位行为是 唯一的事实来源，且 `__playerReady` 和 `__renderReady` 门控会将捕获保持到合成完全加载。",
     "速度是另一回事。预览在你的浏览器中实时播放，因此受 硬件限制。渲染按定位驱动，一次取一帧， 因此无论那一帧多昂贵，从不丢帧。预览卡顿的合成仍可完美渲染 —— 请参阅 [性能](https://hyperframes.heygen.com/guides/performance.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)",
     "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
     "[使用 GSAP 进行动画](https://hyperframes.heygen.com/guides/gsap-animation.md)"
    ]
   }
  ]
 },
 "concepts-frame-adapters": {
  "lede": "帧适配器回答一个问题：第 N 帧动画应处于什么状态？",
  "sections": [
   {
    "h": "接口",
    "p": "",
    "paras": [
     "上下文包含合成 ID、帧率、尺寸和可选的 root 元素。"
    ],
    "codeBlocks": [
     {
      "code": "import type { FrameAdapter, FrameAdapterContext } from \"@hyperframes/core\";\n\ntype FrameAdapter = {\n  id: string;\n  init?: (context: FrameAdapterContext) => Promise<void> | void;\n  getDurationFrames: () => number;\n  seekFrame: (frame: number) => Promise<void> | void;\n  destroy?: () => Promise<void> | void;\n};",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "适配 GSAP 时间线",
    "p": "",
    "paras": [
     "`@hyperframes/core` 为类似 GSAP 的时间线提供辅助函数： 辅助函数会暂停时间线、推导其帧长度，并将每个帧请求转换为秒数。"
    ],
    "codeBlocks": [
     {
      "code": "import { createGSAPFrameAdapter } from \"@hyperframes/core\";\n\nconst adapter = createGSAPFrameAdapter({\n  id: \"intro\",\n  fps: 30,\n  timeline,\n});\n\nawait adapter.init?.({\n  compositionId: \"intro\",\n  fps: 30,\n  width: 1920,\n  height: 1080,\n});\n\nawait adapter.seekFrame(90); // three seconds",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "约定",
    "p": "",
    "paras": [
     "自定义适配器必须： 宿主仍拥有捕获和编码管线。适配器仅拥有动画状态。"
    ],
    "codeBlocks": [],
    "bullets": [
     "返回有限、非负的帧数；",
     "支持向前、向后和随机定位；",
     "再次请求同一帧时返回相同状态；",
     "避免使用墙钟计时器和未播种随机数；",
     "在帧被捕获前完成异步工作；",
     "在 `destroy()` 中释放监听器和其他资源。"
    ]
   },
   {
    "h": "继续阅读",
    "p": "",
    "paras": [
     "时序规则请阅读[确定性渲染](https://hyperframes.heygen.com/concepts/determinism.md)，包导出请参阅 [`@hyperframes/core`](https://hyperframes.heygen.com/packages/core)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
     "[色彩、特效、3D 与生成艺术](https://hyperframes.heygen.com/prompting/color-grading.md)",
     "[确定性渲染](https://hyperframes.heygen.com/concepts/determinism.md)"
    ]
   }
  ]
 },
 "concepts-index": {
  "lede": "HyperFrames 项目是一个文件夹，你的 agent 可以创建它，你也可以持续",
  "sections": [
   {
    "h": "源码即项目",
    "p": "",
    "paras": [
     "agent、浏览器编辑器、CLI、SDK 与 Player 不会创建各自独立版本的 视频。它们都使用相同的项目文件。",
     "| 你想修改的内容 | 最佳入口 |",
     "| - | - |",
     "| 故事情节、结构或多个场景 | 询问 agent |",
     "| 文本、布局、时序或你能看到的动效 | 浏览器编辑器 |",
     "| 预览、检查、快照、渲染或自动化 | CLI |",
     "| 自家产品中的合成 | SDK 或 Player | ![A HyperFrames project open in the browser editor with the source tree, canvas, controls, and timeline](https://static.heygen.ai/hyperframes-oss/docs/images/studio/overview-v1.jpg)",
     "同一个可编辑项目在浏览器编辑器中打开，包含其源码、画布、控件与时间线。",
     "浏览器编辑器会把受支持的编辑写回源码。agent 可以从这些文件继续工作， Git 可以跟踪它们，渲染器看到的也是相同的结果。"
    ],
    "codeBlocks": []
   },
   {
    "h": "agent 创建的内容",
    "p": "",
    "paras": [
     "一个较大的项目通常长这样： 只有项目源码是必需的。规划文件用于在评审和 agent 会话之间保留决策 。简单的标题卡片可能只需要 `index.html` 和一个素材；带旁白的发布大片则受益于 brief、 分镜脚本、脚本和独立场景。"
    ],
    "codeBlocks": [
     {
      "code": "project/\n├── BRIEF.md              what the video must communicate\n├── STORYBOARD.md         the planned sequence and review state\n├── SCRIPT.md             locked narration, when the video has it\n├── frame.md              visual direction, when the project needs one\n├── index.html            the main composition\n├── hyperframes.json      project settings\n├── compositions/         scenes and reusable visual parts\n├── assets/               images, video, audio, and fonts\n└── renders/              finished files",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "合成将视频串联起来",
    "p": "",
    "paras": [
     "**合成**（composition）是项目中有限、可寻址的一段内容。主合成是完整序列， 其他合成可以是场景、字幕、标题系统，或多次复用的视觉素材。",
     "每一部分仍然是 HTML。大型项目之所以可管理，是因为一个场景可以 单独构建并检查，再放入主时间线。",
     "当场景本身需要在所有使用处统一修改时，编辑内嵌合成；当只有本次呈现需要 更早开始、更长播放或换到另一层时，编辑其在主合成中的放置。"
    ],
    "codeBlocks": [
     {
      "code": "flowchart LR\n    M[\"index.html<br/>the main composition\"]\n    M --> O[\"Opening<br/>0s - 4s\"]\n    M --> P[\"Product demo<br/>4s - 10s<br/>compositions/product-demo.html\"]\n    M --> C[\"Customer proof<br/>10s - 15s\"]\n    M --> Z[\"Closing<br/>15s - 18s\"]",
      "file": "MERMAID THEME={NULL}"
     },
     {
      "code": "<div\n  data-composition-id=\"product-demo\"\n  data-composition-src=\"compositions/product-demo.html\"\n  data-start=\"4\"\n  data-duration=\"6\"\n  data-track-index=\"1\"\n></div>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "时间是源码的一部分",
    "p": "",
    "paras": [
     "定时元素在其 HTML 中携带起始时间、时长与轨道： 这张图片在 2 秒处开始，持续 3 秒，出现在 1 号轨道上。动画时间线是暂停且可寻址的， 因此浏览器编辑器、Player 与渲染器都可以请求确切时刻，而无需从头播放。"
    ],
    "codeBlocks": [
     {
      "code": "<img\n  id=\"product-shot\"\n  class=\"clip\"\n  data-start=\"2\"\n  data-duration=\"3\"\n  data-track-index=\"1\"\n  src=\"./assets/product.png\"\n/>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "变量让已批准部分保持可变",
    "p": "",
    "paras": [
     "变量暴露那些本就应该变化的内容——例如标题、logo、 颜色、价格或客户名称——而无需重建布局。一个合成可以 在保留其设计与动效的同时，产出多个已批准版本。",
     "当结构应当保持固定时使用变量；当结构本身需要改变时使用普通编辑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "项目如何推进",
    "p": "",
    "paras": [
     "没有规定必须走的七步仪式。项目只记录其规模与评审流程需要的 决策。",
     "| 决策 | 通常存放在哪里 |",
     "| - | - |",
     "| 视频的用途 | 你的需求，以及更完善项目中的 `BRIEF.md` |",
     "| 内容与顺序 | `STORYBOARD.md` 及可选的 `SCRIPT.md` |",
     "| 视觉呈现 | `frame.md`、项目素材以及合成本身 |",
     "| 可编辑成品 | `index.html`、`compositions/` 与 `assets/` |",
     "| 已批准交付 | 检查加上 `renders/` 中的文件 | 先评审文案与序列，再打磨单个画面。项目看起来对了之后，运行检查、渲染，并观看导出文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染为何能重复同一时刻",
    "p": "",
    "paras": [
     "HyperFrames 会将合成定位到确切时间、捕获画面，再继续推进。媒体与音频遵循 同一时间线。",
     "对于相同源码、媒体与设置，同一时间戳应解析为相同的项目状态。因此合成 应避免使用当前时钟、未播种的随机数以及渲染时网络请求。"
    ],
    "codeBlocks": []
   },
   {
    "h": "需要时再深入",
    "p": "",
    "paras": [
     "[card] [Reuse a design with variables](https://hyperframes.heygen.com/concepts/variables.md) Expose approved content without opening the layout.",
     "[card] [Finish and share a video](https://hyperframes.heygen.com/guides/export-and-share.md) Review, check, render, watch, and deliver the same project.",
     "[card] [Composition structure](https://hyperframes.heygen.com/concepts/compositions.md) Use nested compositions and exact source attributes.",
     "[card] [HTML schema](https://hyperframes.heygen.com/reference/html-schema.md) Look up the complete technical composition contract."
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Brand, templates and storyboards](https://hyperframes.heygen.com/prompting/design-systems.md)",
     "[HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)",
     "[How HyperFrames fits into an application](https://hyperframes.heygen.com/developers/overview.md)"
    ]
   }
  ]
 },
 "concepts-variables": {
  "lede": "变量把组合中预备更改的部分暴露出来。一张客户卡可以接受不同的名称、logo、颜色和套餐，同时保持相同的布局和运动。",
  "sections": [
   {
    "h": "在浏览器编辑器中使用变量",
    "p": "",
    "paras": [
     "浏览器编辑器可以创建和绑定变量、预览覆盖集，并把已审阅的值复制到渲染命令中。完整流程请见[使用变量和模板](https://hyperframes.heygen.com/studio/assets-and-blocks.md#use-variables)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "高级：声明已批准的输入",
    "p": "",
    "paras": [
     "变量位于组合声明上："
    ],
    "codeBlocks": [
     {
      "code": "<html\n  data-composition-variables='[\n  {\"id\":\"title\",\"type\":\"string\",\"label\":\"Title\",\"default\":\"Pro\"},\n  {\"id\":\"accent\",\"type\":\"color\",\"label\":\"Accent color\",\"default\":\"#6c5ce7\"},\n  {\"id\":\"logo\",\"type\":\"string\",\"label\":\"Logo\",\"default\":\"assets/logo.svg\"}\n]'\n></html>",
      "file": "HTML COMPOSITIONS/CARD.HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "变量可是什么",
    "p": "",
    "paras": [
     "变量有七种 kind。kind 决定浏览器编辑器显示的控件，以及渲染为之接受的内容。",
     "| Kind | 存放内容 | 示例 |",
     "| - | - | - |",
     "| `string` | 文本，或到文件的链接 | 客户名、视频链接 |",
     "| `number` | 数量、位置、大小或强度 | 套餐席位、速度 |",
     "| `color` | 一个已批准颜色 | 品牌点缀 |",
     "| `boolean` | 开或关 | 显示徽章 |",
     "| `enum` | 你已批准列表中的一个值 | `light` 或 `dark` |",
     "| `font` | 字体族 | 标题字面 |",
     "| `image` | 到图片的链接 | 客户 logo | 视频和声音没有自有的 kind。请把链接声明为 `string`，然后绑定到 `<video>` 或 `<audio>` 元素，如[替换视频或声音](#swap-in-a-video-or-a-sound)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "说明槽位含义，而不是位置",
    "p": "",
    "paras": [
     "`label` 和 `description` 由人和智能体读取。只给位置的描述（“每条横幅角落的小字署名”）会把槽位含义留给猜测；给出含义的描述（“本视频推广的品牌名称”）则无需打开 HTML 即可正确填充。",
     "对于会针对他人品牌改版的模板，请加 `portrays`——列出槽位代表什么的可选元数据，渲染忽略它，告诉编辑智能体哪些槽位承载身份、不得填入编造的文案：",
     "| 值 | 槽位代表 |",
     "| - | - |",
     "| `subject_name` | 被推广品牌自身的名称 |",
     "| `subject_domain` | 其域名、URL 或 handle |",
     "| `subject_tagline` | 其自身的定位语 |",
     "| `subject_logo` | 其标志或字标 |",
     "| `recommended_position` | 排行中的胜出或主推槽位，被推广品牌应放在那里 |",
     "| `competitor_name` | 与被推广品牌不同的真实产品 |",
     "| `authority_badge` | 代言、排行权威、评分或来源的主张 |",
     "| `host_identity` | 所描绘应用自身的身份，改版时保留不变 | `portrays` 与 `role` 正交：`role` 说明旋钮影响组合的哪个方面（`content`、`style`、`timing`、`motion`、`layout`），而 `portrays` 说明值对观众的含义。"
    ],
    "codeBlocks": [
     {
      "code": "{\"id\":\"appName\",\"type\":\"string\",\"label\":\"App name\",\n \"description\":\"Name of the brand this video promotes, credited in the corner of every banner.\",\n \"portrays\":[\"subject_name\"],\"default\":\"HyperFrames\"}",
      "file": "HTML COMPOSITIONS/CARD.HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "无脚本绑定常见值",
    "p": "",
    "paras": [
     "常见情况使用直接绑定： 仅当结果需要条件、循环或派生值时才使用 `window.__hyperframes.getVariables()`："
    ],
    "codeBlocks": [
     {
      "code": "<h1 data-var-text=\"title\">Pro</h1>\n\n<img data-var-src=\"logo\" src=\"assets/logo.svg\" alt=\"\" />\n\n<style>\n  .card-title {\n    color: var(--accent);\n  }\n</style>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "const { featured = false } = window.__hyperframes.getVariables();\ndocument.querySelector(\".badge\").hidden = !featured;",
      "file": "JS THEME={NULL}"
     }
    ],
    "bullets": [
     "`data-var-text` 替换元素自身的文本。",
     "`data-var-src` 替换图像、视频、音频或 source URL。",
     "标量变量可用作 CSS 自定义属性，如 `var(--accent)`。"
    ]
   },
   {
    "h": "替换视频或声音",
    "p": "",
    "paras": [
     "用 `data-var-src` 把链接绑定到媒体元素。在元素上保留 `src` 作为占位： 按账户渲染同一已保存项目一次，每次传入该账户的片段： 成片按你传入片段的长度和声音，而不是占位的。3 秒占位换成 5 秒片段会渲染 5 秒，且该片段的声音只混合一次。",
     "限制："
    ],
    "codeBlocks": [
     {
      "code": "<html\n  data-composition-variables='[\n  {\"id\":\"welcomeClip\",\"type\":\"string\",\"label\":\"Welcome clip\",\"default\":\"assets/placeholder.mp4\"}\n]'\n>\n  <video\n    data-var-src=\"welcomeClip\"\n    src=\"assets/placeholder.mp4\"\n    data-start=\"0\"\n    data-track-index=\"0\"\n    playsinline\n  ></video>\n</html>",
      "file": "HTML INDEX.HTML THEME={NULL}"
     },
     {
      "code": "npx hyperframes render \\\n  --variables '{\"welcomeClip\":\"https://example.com/clips/northstar.mp4\"}' \\\n  --output northstar.mp4",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "`data-var-src` 适用于 `<video>`、`<audio>`、`<img>` 和 `<source>`。在其他元素上被忽略。",
     "链接必须是路径或 `http`、`https` 或 `blob` URL。其他任何值，包括 `data:` 视频，都会被丢弃而渲染占位，并发出警告。",
     "接收自有 `data-variable-values` 的嵌套组合内片段，在渲染期间由浏览器解析，而不是之前。",
     "根组合的长度跟随其播放的片段。它不是变量。"
    ]
   },
   {
    "h": "给每个嵌套组合不同值",
    "p": "",
    "paras": [
     "父级可多次复用同一组合： 两个实例保持相同源，接收不同内容。"
    ],
    "codeBlocks": [
     {
      "code": "<div\n  data-composition-id=\"card-pro\"\n  data-composition-src=\"compositions/card.html\"\n  data-start=\"0\"\n  data-duration=\"3\"\n  data-track-index=\"1\"\ndata-variable-values='{\"title\":\"Pro\",\"accent\":\"#ff4d4f\"}'\n></div>\n\n<div\n  data-composition-id=\"card-enterprise\"\n  data-composition-src=\"compositions/card.html\"\n  data-start=\"card-pro\"\n  data-duration=\"3\"\n  data-track-index=\"1\"\ndata-variable-values='{\"title\":\"Enterprise\",\"accent\":\"#22c55e\"}'\n></div>",
      "file": "HTML INDEX.HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "高级：从数据渲染版本",
    "p": "",
    "paras": [
     "从 CLI 覆盖顶层值： 对 JSON 文件使用 `--variables-file`，当同一组合必须按数据行渲染多次时使用 `--batch`。[CLI 参考](https://hyperframes.heygen.com/packages/cli.md)涵盖批量输出、校验和自动化。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render \\\n  --variables '{\"title\":\"Enterprise\",\"accent\":\"#22c55e\"}' \\\n  --strict-variables \\\n  --output enterprise.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "批量渲染",
    "p": "",
    "paras": [
     "在 JSON 数组中每行放一个变量对象，然后用行中的占位符命名每个输出。批量文件可用 UTF-8（带或不带 BOM），或带 BOM 的 UTF-16LE。",
     "每个输出仍留在第一个占位符之前写入的文件夹内（此处为 `renders/`）。行值可命名其子文件夹，但引向外部的值，如 `../other`，会在渲染任何内容前停止批量。模板以占位符开头，如 `--output \"{path}\"`，则不命名文件夹，每行值整体用作输出路径，包括绝对路径。",
     "从默认单行并发开始。仅当一次真实渲染稳定且机器有足够内存同时运行多次渲染后，才提高 `--batch-concurrency`。"
    ],
    "codeBlocks": [
     {
      "code": "[\n  { \"name\": \"acme\", \"title\": \"Acme Pro\" },\n  { \"name\": \"northstar\", \"title\": \"Northstar Pro\" }\n]",
      "file": "JSON ROWS.JSON THEME={NULL}"
     },
     {
      "code": "npx hyperframes render \\\n  --batch rows.json \\\n  --strict-variables \\\n  --output \"renders/{name}.mp4\"",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "变量不能是什么",
    "p": "",
    "paras": [
     "变量更改组合内的内容。它们不会更改： 这些选择在组合逻辑运行前从源或渲染设置读取。"
    ],
    "codeBlocks": [],
    "bullets": [
     "组合视口；",
     "根组合的总渲染时长；",
     "帧率；",
     "输出格式、编码或质量；",
     "未显式传入值的父级或兄弟组合。"
    ]
   },
   {
    "h": "检查契约",
    "p": "",
    "paras": [
     "运行： linter 捕获格式错误的声明、缺失字段、错误的默认值类型和无效的枚举选择。`--strict-variables` 把未声明或类型错误的渲染值转为错误。",
     "继续阅读[组合](https://hyperframes.heygen.com/concepts/compositions.md)了解嵌套，或阅读[HTML schema](https://hyperframes.heygen.com/reference/html-schema.md)了解完整属性契约。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts/index.md)",
     "[组合](https://hyperframes.heygen.com/concepts/compositions.md)",
     "[字幕、素材和变量](https://hyperframes.heygen.com/studio/assets-and-blocks.md)"
    ]
   }
  ]
 },
 "contribute-agent-plugins": {
  "lede": "`skills/` 是权威已发布技能源。Claude、Agent Plugins 1.0、Cursor、Codex 与 Gemini manifest 共享 CLI 发布版本。便携格式采纳期间保留现有客户端的厂商 manifest。",
  "sections": [
   {
    "h": "构建一次已提交发布",
    "p": "",
    "paras": [
     "用常规经评审的[发布流程](https://hyperframes.heygen.com/contributing/release-channels.md)。`set-version` 更新全部五个插件 manifest。打包前先提交发布；打包器故意排除未提交变更。",
     "便携构建器在 `dist/` 下写出： 发布工作流在 npm 发布后把便携文件挂到 GitHub release。Codex ZIP 仍是独立提交产物。构建它不会更新 OpenAI 目录清单。"
    ],
    "codeBlocks": [
     {
      "code": "bun run package:agent-plugin\nbun run package:codex-plugin",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "`hyperframes-agent-plugin.zip`：以 `hyperframes/` 为根，含 manifest、技能、技能目录、品牌资源与许可证。",
     "`hyperframes-agent-plugin.json`：源提交、版本、技能清单、归档大小与 SHA-256。",
     "`hyperframes-agent-plugin.sha256`：归档校验和。"
    ]
   },
   {
    "h": "宣称支持前校验",
    "p": "",
    "paras": [
     "Claude 商城保留旧 `core-skills` 安装标识供迁移；新用户应装 `hyperframes@hyperframes`。不测受支持 Claude 版本迁移，不要删旧条目。"
    ],
    "codeBlocks": [],
    "bullets": [
     "跑打包测试、技能校验、技能 manifest 检查与 manifest 校验。检查无仅贡献者技能、运行时需要的 LFS 指针、无未捆绑仓库文件依赖进入载荷。",
     "在隔离档案中安装整包并检查技能清单。试 Claude 命名空间路由与各客户端原生发现。",
     "经真实分发源从 N 升级到 N+1。刷新后确认新版本；验证锁定安装仍在 N。本地目录重刷不证明商城自动更新。",
     "跑本地标题卡工作流。验证 `init` 不刷新全局技能、CLI 版本匹配插件、插件文件未变。不重写锁文件的既有项目依赖里检查。",
     "测 `core-skills` 迁移与重复独立技能，再卸载。保留无关技能与用户编辑。",
     "在 PR/发布说明中记录测试过的客户端版本、操作系统、源提交与结果。不可用客户端标为未验证。"
    ]
   },
   {
    "h": "分发状态与回滚",
    "p": "",
    "paras": [
     "自托管仓库安装、发布产物发布、原生客户端校验与公共商城审批分开跟。Cursor 公共更新需评审。OpenAI 目录提交走自有流程。永远不要把 manifest 检查成功说成已验证原生安装。",
     "回滚时，重装上一个测试过的发布 tag 或归档，并临时禁用更新。不要给改过内容的插件复用版本号。公共商城若有独立已发布修订，也经其自有流程回滚。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[安装 HyperFrames 插件](https://hyperframes.heygen.com/guides/plugins.md)",
     "[安装与更新代理技能](https://hyperframes.heygen.com/guides/skills.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "contribute-canary": {
  "lede": "本仓库中的大多数 flag 都是二值的：变更关闭，或对所有人开启。金丝雀是介于两者之间的",
  "sections": [
   {
    "h": "添加金丝雀",
    "p": "",
    "paras": [
     "**1. 在 `packages/core/src/canaryRegistry.ts` 中以 0% 注册：** 在 `0` 时它不产生任何效果，所以这一步可以安全地单独落地。",
     "**2. 在决策点读取它。** 这就是全部 API。百分比只存在于注册表中，从不在调用处。",
     "**3. 通过在补丁发布中编辑 `percentage` 来扩大**：`0 → 5 → 25 → 100`。",
     "扩大是包含式的——已在 10 中的人仍在 25 中，所以 前后对比在扩大过程中依然有效。不要重命名已上线的金丝雀： 名称是分桶哈希的一部分，重命名会在发布中途打乱 队列。",
     "**4. 在达到 100 且保持稳定时删除它**——包括注册表条目 *和* 受其保护的 分支。定时的 **Canary sunset** 工作流会强制执行这一点：它每周运行一次， 一旦 `sunsetAfter` 过去就会失败，并在运行日志中点名过期的发布及其负责人。",
     "它不会通知任何人，所以如果你拥有金丝雀，请关注它。用 `bun scripts/check-canary-sunset.ts` 自行运行。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  name: \"my-feature\",\n  percentage: 0,\n  description: \"One line on what turning this on actually changes.\",\n  owner: \"your-handle\",\n  sunsetAfter: \"2026-12-01\",\n}",
      "file": "TS THEME={NULL}"
     },
     {
      "code": "import { isCanaryEnabled } from \"../telemetry/canary.js\";\n\nif (isCanaryEnabled(\"my-feature\")) {\n  // new path\n} else {\n  // existing path\n}",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "覆盖金丝雀",
    "p": "",
    "paras": [
     "名称转为大写下划线。在 Studio 中使用 `?hf_canary_my_feature=on`。覆盖 永远优先于百分比，两个方向都如此——升级、内测、二分定位、紧急关闭。",
     "这也是在遥测关闭的情况下演练金丝雀的方法。",
     "其余所有情形在低于 100% 时均按关闭处理：没有分桶种子、未注册的名称、 或 CI 机器都解析为*未纳入*。在恰好 100% 时这些排除条件 不再适用，所以没有人会在删除时首次走到新路径。"
    ],
    "codeBlocks": [
     {
      "code": "HF_CANARY_MY_FEATURE=on   # or off / true / false / 1 / 0 / yes / no",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "从你的机器上移除",
    "p": "",
    "paras": [
     "队列基于 `install-state.json` 中的种子分桶，该文件与 `~/.hyperframes` 中的 `config.json` 相邻——而不是基于遥测 ID。所以完全重置只需一条 命令： `hyperframes telemetry status` 会打印这两个路径，方便你查看或",
     "单独删除它们。除此之外没有任何与金丝雀相关的存储位置。"
    ],
    "codeBlocks": [
     {
      "code": "rm -rf ~/.hyperframes    # clears telemetry id, canary cohorts, and breaker state",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "它位于哪里",
    "p": "",
    "paras": [
     "| 文件 | 作用 |",
     "| - | - |",
     "| `packages/core/src/canaryRegistry.ts` | 所有发布，含负责人和 sunset 日期 |",
     "| `packages/core/src/canary.ts` | 纯求值器——无 fs、无网络、浏览器安全 |",
     "| `packages/cli/src/telemetry/canary.ts` | CLI 绑定：分桶种子、环境变量覆盖、CI 检测 |",
     "| `packages/studio/src/telemetry/canary.ts` | Studio 绑定：采用 CLI 已公布的决策 | 求值器无依赖，所以 Studio 和可嵌入的播放器也可以使用它；每个界面 通过一层薄绑定提供自己的单位 ID。Studio 采用 CLI 的决策，而不是重新推导，所以横跨",
     "两个界面的单次渲染永不半纳入。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "金丝雀。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[测试本地变更](https://hyperframes.heygen.com/contributing/testing-local-changes.md) —— 在任何人获得它之前先演练你的",
     "[发布渠道](https://hyperframes.heygen.com/contributing/release-channels.md) —— 扩大范围属于哪个分支。",
     "[`telemetry` 命令](https://hyperframes.heygen.com/packages/cli#telemetry) —— 收集了什么，用户如何关闭它。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[变更日志](https://hyperframes.heygen.com/changelog.md)",
     "[故障排查](https://hyperframes.heygen.com/help.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "contribute-catalog": {
  "lede": "Catalog 由 HyperFrames 仓库中的 registry 生成。你可以贡献视觉想法，或构建任何人都能安装的条目。",
  "sections": [
   {
    "h": "提想法",
    "p": "",
    "paras": [
     "开 [GitHub issue](https://github.com/heygen-com/hyperframes/issues)，附视觉参考，并说明效果适合用在哪里。录屏、Figma 草图或另一工具的示例都足够起步。"
    ],
    "codeBlocks": []
   },
   {
    "h": "构建条目",
    "p": "",
    "paras": [
     "让代理用 `/hyperframes-registry` 技能，或按下面相同工作流来。"
    ],
    "codeBlocks": []
   },
   {
    "h": "选择条目类型",
    "p": "",
    "paras": [
     "| Type | Use it for | Required files |",
     "| - | - | - |",
     "| Block | 固定尺寸与时长的独立合成 | `registry-item.json` 与合成 HTML |",
     "| Component | 装进另一合成的片段 | `registry-item.json`、片段 HTML 与独立 `demo.html` | 每条目在 `registry/blocks/` 或 `registry/components/` 下有自有目录。每个元素 ID 加条目名短缩写前缀，避免作子合成安装时冲突。",
     "没有 `demo.html` 的组件会被 Catalog 预览生成器跳过。"
    ],
    "codeBlocks": [
     {
      "code": "registry/blocks/my-block/\n  my-block.html\n  registry-item.json\n\nregistry/components/my-effect/\n  my-effect.html\n  demo.html\n  registry-item.json",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "定义 manifest",
    "p": "",
    "paras": [
     "`registry-item.json` 遵循[注册表条目 schema](https://github.com/heygen-com/hyperframes/blob/main/packages/core/schemas/registry-item.json)。Block 声明 `dimensions` 与 `duration`；组件不得声明。",
     "用 `params` 声明可让用户在 Studio 中改、而不用编辑 HTML 的值。支持控件为 `color`、`text`、`number` 与 `select`。",
     "其他有用可选字段含 `author`、`authorUrl`、`relatedSkill`、`registryDependencies`、`license`、`sourcePrompt`、`minCliVersion` 与 `deprecated`。TypeScript 注册表类型与现有 manifest 是当前权威。已发布 JSON schema 校验共享 manifest 字段，尚未描述 block-only 的 `params` 字段。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  \"$schema\": \"https://hyperframes.heygen.com/schema/registry-item.json\",\n  \"name\": \"my-block\",\n  \"type\": \"hyperframes:block\",\n  \"title\": \"My Block\",\n  \"description\": \"What this block does in one sentence\",\n  \"tags\": [\"category\", \"subcategory\"],\n  \"dimensions\": { \"width\": 1920, \"height\": 1080 },\n  \"duration\": 5,\n  \"params\": [\n    {\n      \"key\": \"--accent\",\n      \"label\": \"Accent\",\n      \"type\": \"color\",\n      \"default\": \"#ff4d4d\"\n    }\n  ],\n  \"files\": [\n    {\n      \"path\": \"my-block.html\",\n      \"target\": \"compositions/my-block.html\",\n      \"type\": \"hyperframes:composition\"\n    }\n  ]\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "二进制资源",
    "p": "",
    "paras": [
     "注册表直接从仓库提供，因此条目携带的每个字节永驻历史。合成是文本，成本为零；图片、视频、音频与字体不是。",
     "照常在 PR 中提交这些资源。合并前，维护者跑 `bun run host:registry-assets <item-name>`，把它们上传到 CDN，给各 `files[]` 条目加 `url` 并从树中去掉字节： `path` 不变。它仍是相对条目的落点，因此你的合成 HTML、Catalog 预览渲染器与 `hyperframes add` 行为完全如前——只有字节来源移动。键按内容寻址，多条目共享的图片只上传一次，改过的图片得新 URL，而非陈旧缓存。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  \"path\": \"assets/carousel-images/one.jpg\",\n  \"url\": \"https://static.heygen.ai/hyperframes-oss/registry-assets/deadbeefdeadbeef.jpg\",\n  \"target\": \"assets/carousel-images/one.jpg\",\n  \"type\": \"hyperframes:asset\"\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "安装器元数据",
    "p": "",
    "paras": [
     "用 `registryDependencies` 命名必须先装的注册表条目。安装器传递解析依赖，拒绝缺失条目或环。引用精确条目名，保持依赖图小。",
     "设置 `minCliVersion` 为首个支持该条目的 CLI 版本。所有解析条目（含依赖）必须在安装任何条目文件前通过兼容检查。不兼容的 CLI 会报所需版本与升级命令。",
     "条目有替代时把 `deprecated` 设为简短迁移信息。安装器会警告，并让条目对已有项目可用。",
     "按 tag 安装 `npx hyperframes add <tag>` 会刷新注册表索引与条目 manifest，发布 tag 变更无需等待 24 小时缓存过期。注册表不可达时，已缓存 manifest 仍作兜底可用。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  \"minCliVersion\": \"0.6.96\",\n  \"registryDependencies\": [\"grain-overlay\"],\n  \"deprecated\": \"Use my-block-v2 instead.\"\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "为复用而构建",
    "p": "",
    "paras": [
     "每条注册表条目必须： 一次性示例归 [Examples](https://hyperframes.heygen.com/examples.md)，不进 Catalog。"
    ],
    "codeBlocks": [],
    "bullets": [
     "使用注册在 `window.__timelines` 的暂停 GSAP 时间线；",
     "让 `data-composition-id` 匹配注册时间线 ID；",
     "用带前缀的元素 ID；",
     "避免 `Date.now()`、未播种 `Math.random()` 与实时动画循环；",
     "在任意帧正确 seek；",
     "在源目录之外安装后仍有效。"
    ]
   },
   {
    "h": "校验与预览",
    "p": "",
    "paras": [
     "按用户收到方式 lint 条目——挂进真项目。裸 `npx hyperframes lint` 无法校验注册表目录，因为 CLI 找 `index.html`，条目以 `<name>.html` 或 `demo.html` 发布： 要跑完整门禁，先把条目装进临时项目再在其中跑：",
     "生成 Catalog 页与预览资源： 这些生成器直接从工作树读条目。`add` 命令不能按名安装未发布的本地条目：它从 `hyperframes.json` 中的注册表 URL 解析条目。从干净项目测试 `npx hyperframes add my-block`，需该条目已在该注册表 manifest 中。",
     "不要手改生成的条目页。改其注册表 manifest 或生成器再重生成。",
     "以全速观看预览。通过 `check` 只证明合成有效，不证明运动可读或有用。",
     "| Review question | What good looks like |",
     "| - | - |",
     "| 有一个视觉主角吗？ | 第一秒眼睛知道落点 |",
     "| 重要文本能一次读懂吗？ | 信息落地，剪辑前停留 |",
     "| 动效加速并收住吗？ | 不像幻灯片匀速漂移 |",
     "| 能换肤吗？ | 品牌向值暴露为参数 |",
     "| 真复用吗？ | 解决重复生产问题 |"
    ],
    "codeBlocks": [
     {
      "code": "bun run lint:registry-items my-block",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes init scratch && cd scratch\nnpx hyperframes add my-block\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx tsx scripts/generate-catalog-pages.ts\nnpx tsx scripts/generate-catalog-previews.ts --only my-block",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "开 pull request",
    "p": "",
    "paras": [
     "包含： 外部贡献者请附预览 MP4。维护者会发布最终 Catalog 媒体。HeyGen 贡献者可在预览评审后，用只包含重生成媒体的检出跑 `scripts/upload-docs-images.sh`，不要从贡献者分支跑。该脚本只发普通文件，`docs/images/` 下有符号链接就停。"
    ],
    "codeBlocks": [],
    "bullets": [
     "条目目录；",
     "`registry/registry.json` 中匹配条目；",
     "重生成的 Catalog 输出；",
     "`npx hyperframes publish` 的 `hyperframes.studio` 预览；",
     "何时使用、合适时长范围与已知坑。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Catalog](https://hyperframes.heygen.com/catalog/index.md)",
     "[为 HyperFrames 贡献](https://hyperframes.heygen.com/contributing.md)",
     "[安装与更新代理技能](https://hyperframes.heygen.com/guides/skills.md)"
    ]
   }
  ]
 },
 "contribute-changelog": {
  "lede": "HyperFrames changelog 有两个受众：",
  "sections": [
   {
    "h": "事实来源",
    "p": "",
    "paras": [
     "每条经评审发布说明放在 `releases/vX.Y.Z.md`。",
     "文档 changelog 在 `docs/changelog.mdx`，用 Mintlify `<Update>` 条目。草稿生成器可前置文档条目，但维护者应在打标前改生成副本。任何人工重写后，保持 `releases/vX.Y.Z.md` 与匹配的文档 `<Update>` 条目同步。"
    ],
    "codeBlocks": []
   },
   {
    "h": "稳定发布工作流",
    "p": "",
    "paras": [
     "**1. 准备发布** 从仓库根跑稳定发布命令： 首次运行创建或更新 changelog 草稿，然后在打标前退出： 检查点故意非零退出，让链式发布命令止住。评审生成副本，去掉 TODO 摘要标记，再跑同命令。两份 changelog 产物评审后，`release:prepare` 跑 `set-version` 创建发布提交与标签。",
     "**2. 评审重写** 读生成说明并为用户重写。影响优先于实现细节。",
     "突出： **3. 重跑发布命令** 评审后，再跑同命令： 稳定发布时，`release:prepare` 检查 `releases/v0.6.53.md` 存在、`docs/changelog.mdx` 有匹配 `HyperFrames v0.6.53` 条目，且两产物都不再含生成 TODO 摘要。直接跑底层 `set-version` 的维护者受同一已评审 changelog 检查点约束。预发布与 `--no-tag` 版本 bump 跳过该检查。仅紧急稳定发布用 `--skip-changelog-check`。",
     "发布提交可含版本 bump、`releases/v0.6.53.md` 与文档 changelog 更新。",
     "**4. 发布** 不带本地标签推送 `release/v0.6.53` 分支，向 `main` 开 PR，审批与 CI 后合并。发布工作流把检出锁定到精确合并 SHA，校验该 SHA，创建 `v0.6.53`，并用 `releases/v0.6.53.md` 作 GitHub Release 正文。无已评审发布文件时，退回 GitHub 生成说明。",
     "发布失败恢复时，重跑原始合并 PR 工作流。不要推稳定标签或用手动分发；这些路径故意禁用，恢复不能发布不同提交。",
     "生成 compare 链接指向未来 `v0.6.53` 标签。发布 PR 合并、发布工作流创建标签前可能不可解析。"
    ],
    "codeBlocks": [
     {
      "code": "bun run release:prepare 0.6.53",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "bun run release:prepare 0.6.53",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "`releases/v0.6.53.md`",
     "`docs/changelog.mdx`",
     "破坏性变更与所需迁移步骤",
     "新能力",
     "重要缺陷修复",
     "性能或可靠性改进",
     "安全修复"
    ]
   },
   {
    "h": "草稿重生成",
    "p": "",
    "paras": [
     "评审前需重生成 changelog 副本时，用底层草稿命令： 无 `--force` 时，草稿命令保留已存在的 `releases/vX.Y.Z.md` 不变，缺失时仍补文档 changelog 条目。文档 changelog 已有该版本时，手工改现有文档条目。"
    ],
    "codeBlocks": [
     {
      "code": "bun run changelog:draft 0.6.53 --write --force",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "每周简报工作流",
    "p": "",
    "paras": [
     "每周 packet 是编辑素材，不是公共文档页。保持 `docs/changelog.mdx` 有版本。仅在真实故事、负责人与足够上下文能帮用户行动时，才发布人类可读产品更新。",
     "`docs/product-updates.mdx` 公开后，发布负责人在每月首个稳定发布时评审它。仅当多项变更构成有用用户故事时更新；否则保留最新带日期版并确认其主张仍描述当前产品。无人负责该评审时，从导航去掉该页。",
     "从仓库根生成可编辑每周 packet： 在最新 `main` 分支运行，让所选范围反映公共历史，而非功能分支。",
     "它写出三份内部编辑草稿： [!WARNING] 它还写第四个文件，那个是公开的。`--write` 把生成条目直接前置进 `docs/weekly-updates.mdx`，随 **Explore** 下侧边栏发布。以对待那页的同样审慎评审该 diff——它不是草稿。已存在范围重跑是 no-op，条目之后可在原地安全编辑。",
     "发布任何东西前评审重写四份。社交草稿永不自动发帖。精确版本化发布说明留 [Changelog](https://hyperframes.heygen.com/changelog.md)；[每周更新](https://hyperframes.heygen.com/weekly-updates.md) 承载精选亮点与 RSS feed。"
    ],
    "codeBlocks": [
     {
      "code": "bun run changelog:weekly --from 2026-06-01 --to 2026-06-07 --write",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "`updates/weekly/2026-06-07.md`",
     "`updates/social/2026-06-07.discord.md`",
     "`updates/social/2026-06-07.x.md`"
    ]
   },
   {
    "h": "写作风格",
    "p": "",
    "paras": [
     "用朴实面向用户语言。宁写 \"Fixed Studio render failures when FFmpeg is missing\"，勿写 \"Added pre-flight check in render activity\"。相关文档、迁移指南或 PR 有助行动时加链接。",
     "变更按以下顺序分组（适用时）： 避免列发布提交、纯依赖更新、生成文件 churn 与标 `skip-changelog` 的变更。"
    ],
    "codeBlocks": [],
    "bullets": [
     "Breaking Changes",
     "Features",
     "Fixes",
     "Performance",
     "Docs & Examples",
     "Catalog",
     "Internal"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Changelog](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "contribute-release-channels": {
  "lede": "HyperFrames 发布两种通道：",
  "sections": [
   {
    "h": "分支策略",
    "p": "",
    "paras": [
     "用分支分离决定什么代码有资格进各发布通道。dist-tag 仅控制 npm 安装默认，不从包中去掉代码。",
     "功能仅应进 alpha 时，把该 PR 合并或重定向到预发布分支，而非 `main`。"
    ],
    "codeBlocks": [],
    "bullets": [
     "`main` 稳定/可发布。合并进 `main` 的任何东西都有资格进 `latest`。",
     "`release/v*` 分支供稳定补丁与热修。",
     "`next`、`alpha`、`beta`、`rc`、`canary` 与 `prerelease/*` 分支供预发布集成。"
    ]
   },
   {
    "h": "稳定发布",
    "p": "",
    "paras": [
     "仅当经评审的 `release/vX.Y.Z` PR 合进受保护 `main` 时才发稳定版。创建发布提交前先准备并评审发布说明： 首次运行，`release:prepare` 起草缺失 changelog 产物并以非零退出待评审，让链式发布命令在打标前停住。改好生成的 TODO 摘要后， rerun 同命令创建发布提交与标签。",
     "完整工作流见 [Changelog process](https://hyperframes.heygen.com/contributing/changelog-process.md)。稳定发布时 `bun run set-version <version>` 在维护者直接跑底层发布命令时仍强制该检查点。",
     "不带本地标签推送发布分支，向 `main` 开 PR，审批与 CI 后合并。发布工作流检出精确 PR 合并 SHA，发布前校验，在该提交创建稳定标签，发布 npm 包，并创建 GitHub release。",
     "该工作流需恢复时，重跑其原始合并 PR 事件。稳定标签推送与手动分发不发布，因此恢复不能换提交。",
     "热修时，从上一个稳定标签拉分支，只 cherry-pick 修复，发补丁版，再把同一修复合并或 cherry-pick 回预发布分支。"
    ],
    "codeBlocks": [
     {
      "code": "bun run release:prepare <version>",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "Alpha 发布",
    "p": "",
    "paras": [
     "Alpha 发布必须从 `origin/next` 或 `origin/alpha` 等预发布分支可达。当预发布含用户应知道的变更时，用相同 changelog 草稿工作流。",
     "用户可显式装 alpha 构建："
    ],
    "codeBlocks": [
     {
      "code": "git checkout next\nbun run set-version 0.4.25-alpha.1\ngit push origin next\ngit push origin v0.4.25-alpha.1",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npm install hyperframes@alpha\nnpm install @hyperframes/core@alpha",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "CI 护栏",
    "p": "",
    "paras": [
     "发布工作流在发布前校验发布通道边界： 这防止 alpha-only 功能意外进稳定热修。"
    ],
    "codeBlocks": [],
    "bullets": [
     "稳定版必须以 `latest` 发布。",
     "预发布版必须以预发布 dist-tag（如 `alpha`）发布。",
     "稳定发布必须来自经合并、经评审的 `release/vX.Y.Z` PR。",
     "预发布标签必须从预发布分支可达。",
     "已合并 `release/vX.Y.Z` PR 只发稳定版。",
     "每个发布任务都校验检出与不可变事件 SHA 一致。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[发布代理插件](https://hyperframes.heygen.com/contributing/agent-plugins.md)",
     "[为 HyperFrames 贡献](https://hyperframes.heygen.com/contributing.md)",
     "[Canary 灰度](https://hyperframes.heygen.com/contributing/canary-rollouts.md)"
    ]
   }
  ]
 },
 "contribute-testing": {
  "lede": "包内测试无法证明 CLI 在普通视频项目中的行为是正确的。聚焦测试通过后，请在 HyperFrames 仓库之外的项目上运行变更过的命令。",
  "sections": [
   {
    "h": "构建工作区",
    "p": "",
    "paras": [
     "在仓库根目录执行： 修改 CLI 代码或 CLI 打包的某个包后，需要重新构建。"
    ],
    "codeBlocks": [
     {
      "code": "bun install\nbun run build",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "运行本地构建",
    "p": "",
    "paras": [
     "选择一种方法。"
    ],
    "codeBlocks": []
   },
   {
    "h": "链接 CLI",
    "p": "",
    "paras": [
     "当你需要测试多个命令或多个项目时使用此方法： 解析得到的二进制文件应指向本地的 HyperFrames checkout。请在单独的项目中运行它： 完成后移除链接。`bun unlink` 不需要包名——它 会注销你当前运行所在的目录，所以请先回到 HyperFrames checkout 中的 CLI 包目录（使用绝对路径，因为你现在位于",
     "视频项目内）："
    ],
    "codeBlocks": [
     {
      "code": "cd packages/cli\nbun link\n\nhyperframes --version\nwhich hyperframes",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "cd /path/to/a/video-project\nhyperframes lint\nhyperframes check\nhyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "cd /path/to/hyperframes/packages/cli\nbun unlink",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "直接调用构建好的入口",
    "p": "",
    "paras": [
     "当你不想改变 `PATH` 时使用此方法："
    ],
    "codeBlocks": [
     {
      "code": "node /path/to/hyperframes/packages/cli/dist/cli.js preview /path/to/a/video-project",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "测试包存档",
    "p": "",
    "paras": [
     "发布之前请使用此方法，检查实际会发布的文件： 同样请在隔离项目上运行存档，并测试你变更过的命令。",
     "通过 `npx` 启动的 `hyperframes preview` 在 `npx` 进程停止后， 服务器仍会继续运行。请按监听该端口的进程停止服务器， 否则下次运行会与旧服务器对话："
    ],
    "codeBlocks": [
     {
      "code": "cd packages/cli\nnpm pack\nnpx ./hyperframes-<version>.tgz --help",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "kill \"$(lsof -ti tcp:<port> -sTCP:LISTEN)\"",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "需要验证的内容",
    "p": "",
    "paras": [
     "测试用户可见的结果，而不仅仅是退出码： 对于 Studio 变更，请在 Preview 中走一遍确切的交互。对于渲染变更，请使用 `ffprobe` 或仓库已有的 fixture 测试检查输出，而不要仅依赖视觉播放。"
    ],
    "codeBlocks": [],
    "bullets": [
     "命令接受文档中说明的参数；",
     "错误信息说明如何恢复；",
     "当命令支持 `--json` 时，其输出保持机器可读；",
     "Preview 打开正确的项目并反映文件变更；",
     "渲染产生可播放的文件，时长和媒体符合预期；",
     "成功和失败后，临时文件和后台进程都得到清理。"
    ]
   },
   {
    "h": "常见问题",
    "p": "",
    "paras": [
     "如果全局安装的 CLI 遮蔽了链接，请检查 `which hyperframes`，移除全局包，再重新链接。Preview 默认从端口 `3002` 启动，并会自动尝试空闲端口；只有在需要固定端口时才传 `--port`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[为 HyperFrames 做出贡献](https://hyperframes.heygen.com/contributing.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[变更日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "contribute": {
  "lede": "git clone https://github.com/YOUR_USERNAME/hyperframes.git",
  "sections": [
   {
    "h": "搭建仓库",
    "p": "",
    "paras": [
     "HyperFrames 工作区操作使用 Bun。不要加 `pnpm-lock.yaml`，也不要替换 `bun.lock`。",
     "改 UI 或合成行为时同时启动 Studio： 从 monorepo 运行时，Studio 监听 `http://localhost:5190`。"
    ],
    "codeBlocks": [
     {
      "code": "git clone https://github.com/YOUR_USERNAME/hyperframes.git\ncd hyperframes\nbun install\nbun run build",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "bun run dev",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "检查你的改动",
    "p": "",
    "paras": [
     "迭代时先跑最小相关测试，开 PR 前跑仓库门禁： 合成类改动请从项目目录跑门禁，或直接传路径： 注册表条目需另一条命令。它们以 `<name>.html` 或 `demo.html` 发布，CLI 按找 `index.html` 解析项目，因此对条目目录 lint 会报 \"No composition found\"——`gsap_non_transform_motion` 两个错误曾因此未 lint 就上了 `main`。先用脚本把每条目挂到临时项目（正是 `hyperframes add` 会放的位置）：",
     "pre-commit 钩子会格式化已暂存文件，并对你改过的文件跑检查。"
    ],
    "codeBlocks": [
     {
      "code": "bun run lint\nbun run format:check\nbun run --filter '*' typecheck\nbun run test",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes lint ./my-video\nnpx hyperframes check ./my-video",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "bun run lint:registry-items              # every item\nbun run lint:registry-items my-block     # just one",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "在正确的包中工作",
    "p": "",
    "paras": [
     "| Surface | Package or directory |",
     "| - | - |",
     "| 合成解析、运行时、类型 | `packages/core` 与 `packages/parsers` |",
     "| 浏览器帧捕获 | `packages/engine` |",
     "| 编码与音频/渲染调度 | `packages/producer` |",
     "| 命令行 | `packages/cli` |",
     "| 浏览器编辑器 | `packages/studio` 与 `packages/studio-server` |",
     "| 可嵌入播放器 | `packages/player` |",
     "| 无头编辑 API | `packages/sdk` |",
     "| AWS 与 GCP 分布式渲染 | `packages/aws-lambda` 与 `packages/gcp-cloud-run` |",
     "| 可复用块与片段 | `registry` |",
     "| 代理指令 | `skills` | Studio 改动需在浏览器中验证行为，并保留 [Studio 文档](https://hyperframes.heygen.com/studio/index.md) 描述的源码补丁与能力门契约。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Pull request 要求",
    "p": "",
    "paras": [
     "缺陷与提案用 [GitHub Issues](https://github.com/heygen-com/hyperframes/issues)。有用的缺陷报告含最小复现、首个精确错误、`npx hyperframes info` 与操作系统。",
     "贡献即同意你的工作按 [Apache 2.0 许可证](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) 授权，并遵循[行为准则](https://github.com/heygen-com/hyperframes/blob/main/CODE_OF_CONDUCT.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "保持改动聚焦，并说明用户可见原因。",
     "行为变更时新增或更新测试。",
     "用常规 PR 标题，如 `fix: preserve audio after seeking`。",
     "跑格式化、lint、类型检查与相关测试。",
     "视觉变更附截图或简短录屏。",
     "仅预发布工作定位到 [Release channels](https://hyperframes.heygen.com/contributing/release-channels.md) 描述的分支。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
     "[在 HyperFrames 上构建](https://hyperframes.heygen.com/developers/index.md)"
    ]
   }
  ]
 },
 "deploy-aws-lambda": {
  "lede": "HyperFrames 提供一流 AWS Lambda 部署：单个 Lambda 函数前端接 Step Functions 标准工作流，把渲染扇出到大量并行分片工作进程，中间产物存 S3。配好 AWS 凭据后，端到端三条命令：",
  "sections": [
   {
    "h": "架构",
    "p": "",
    "paras": [
     "Lambda handler 是薄分发层：解析 Step Functions 事件、从 S3 下载输入到 `/tmp`、调用 `@hyperframes/producer/distributed` 的 OSS 原语、上传回输出、返回小 JSON 结果。所有重活——捕获、编码、音频混音——都在 OSS 原语内完成。"
    ],
    "codeBlocks": [
     {
      "code": "┌──────────────────────────────────────────────────────────────────┐\n│ Step Functions state machine                                     │\n│   Plan → Map(N) RenderChunk → Assemble                           │\n└──────────────────────────────────────────────────────────────────┘\n                              │ dispatches by event.Action\n                              ▼\n┌──────────────────────────────────────────────────────────────────┐\n│ One Lambda function (packages/aws-lambda/dist/handler.zip)       │\n│   handler.mjs                                                    │\n│     ├─ Action=\"plan\"        → @hyperframes/producer/distributed  │\n│     ├─ Action=\"renderChunk\" → @hyperframes/producer/distributed  │\n│     └─ Action=\"assemble\"    → @hyperframes/producer/distributed  │\n│   bin/ffmpeg                — ffmpeg-static                      │\n│   node_modules/@sparticuz/chromium/ — Lambda-optimised Chromium  │\n└──────────────────────────────────────────────────────────────────┘\n                              │ pure functions over local paths\n                              ▼\n┌──────────────────────────────────────────────────────────────────┐\n│ S3 bucket — plan tarball + per-chunk outputs + final mp4         │\n└──────────────────────────────────────────────────────────────────┘",
      "file": "EXAMPLE"
     }
    ]
   },
   {
    "h": "前提条件",
    "p": "",
    "paras": [
     "| 工具 | 用途 | 安装 |",
     "| - | - | - |",
     "| AWS 凭据 | CLI 和部署步骤都调用 AWS API。 | Env vars、`~/.aws/credentials`、SSO 或 IMDS——AWS SDK for JavaScript v3 能解析的任意链路。 |",
     "| AWS SAM CLI | `hyperframes lambda deploy/destroy` 调用 `sam deploy`/`sam delete`。 | [安装指南](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) |",
     "| Lambda adapter | 已发布 CLI 仅为 Lambda 命令加载 AWS adapter。每个版本固定一个预构建 Lambda handler ZIP（GitHub release asset）；`lambda deploy` 下载它、校验 SHA-256、再用 adapter 的 SAM 模板部署它。无需仓库检出。 | 与 CLI 同版本，在 CLI 旁安装 `npm install -g @hyperframes/aws-lambda` |",
     "| HyperFrames 仓库检出（可选） | 在检出内，或 `HYPERFRAMES_REPO_ROOT` 指向上时，`lambda deploy` 改从源码构建 handler ZIP（需要 `bun`）。用于部署未发布改动、`--chrome-source=chrome-headless-shell`、或早于预构建 handler 的 adapter 版本。arm64 检出部署还需要从该检出构建视频镜像（`HYPERFRAMES_LAMBDA_VIDEO_IMAGE`），或加 `--video-arch x86_64`。 | `git clone https://github.com/heygen-com/hyperframes`，且 `npm install -g bun` 或 [bun.sh](https://bun.sh) |"
    ],
    "codeBlocks": []
   },
   {
    "h": "路径 1 — `hyperframes lambda` CLI（推荐）",
    "p": "",
    "paras": [
     "CLI 是 SAM 模板 + `@hyperframes/aws-lambda` SDK 的薄包装。对大多数采用者，这是正确的起点。",
     "默认栈不预留并发。每次渲染规划时读取账户的未预留 Lambda 并发，并在一次性用好它的至多 90%（至多 256 分片），为账户其他函数留出余量。规划会记录所选数字。改传 `--concurrency=N` 可为该函数预留 `N` 次执行；每次渲染至多同时跑 `N` 分片。",
     "升级：重新部署已有栈时不传 `--concurrency` 会保留已有预留，`deploy` 会打印它。旧 CLI 版本部署的栈默认预留 8，因此在你传 `--concurrency=N` 之前保持为 8。传 `--concurrency=none` 可移除预留，让每次渲染按账户规模自定大小。",
     "`deploy` 把栈的桶和状态机记录到当前目录下的 `.hyperframes/lambda-stack-<stack-name>.json`。其他每个 `lambda` 命令都读取该文件，因此请用相同的 `--stack-name` 在同一目录运行，否则会报“no stack state”。升级用的重部署会改写同一文件。",
     "`deploy` 之后，可渲染任意内容： `--wait` 会阻塞并流式输出逐分片进度 + 累计成本；去掉则触发即忘，再用 `hyperframes lambda progress <renderId>` 按自己节奏轮询。",
     "完整标志文档见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md#hyperframes-lambda)。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes lambda deploy \\\n  --stack-name=hyperframes-prod \\\n  --region=us-east-1 \\\n  --memory=10240",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes lambda render ./my-project --width 1920 --height 1080 --wait",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "用 `sites create` 预备项目",
    "p": "",
    "paras": [
     "不带 `--site-id` 的每次 `lambda render` 调用都会哈希项目树并逐文件对照桶。内循环很紧（CI 烟雾任务、演示流程中的 prompt 迭代）时，预备一次项目并复用上传： `siteId` 按项目树的 SHA-256 内容寻址。站点是一个小 `sites/<siteId>/files.json`，列出每个文件的路径和 SHA-256。文件本身每桶只存一份于 `cas/sha256/` 下，所有站点和渲染共享，因此另一项目已上传的文件永不重传。可把同一 `--site-id` 传给任意多个 `lambda render` 调用。",
     "栈的桶对 `cas/sha256/` 下的对象在最后写入 30 天后过期（`ExpireSharedContent` 生命周期规则）。每次渲染或 `sites create` 复用至少 7 天前的文件都会原地改写，因此在用文件永不过期。若某站点文件已过期，`lambda render --site-id` 会在项目目录副本仍匹配时从其重传。否则，或 `renderToLambda` 收到 `siteHandle` 却无 `projectDir` 时，渲染以 `SITE_FILES_MISSING` 在启动前停下；请再次运行 `sites create` 恢复。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes lambda sites create ./my-project\n# → Site ID: a1b2c3d4e5f6g7h8 (content-addressed)\n\nhyperframes lambda render ./my-project --site-id=a1b2c3d4e5f6g7h8 \\\n  --width 1920 --height 1080 --wait",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "从仅部署 x86 的版本升级",
    "p": "",
    "paras": [
     "`lambda deploy` 现在默认把计划和渲染分片跑在 arm64 容器镜像函数上；音频和组装留在 x86 函数。不带 `--video-arch` 重部署已有栈会把它们移至 arm64，并加上 `<stack>-video` ECR 仓库。要让栈留在 x86，每次部署都传 `--video-arch x86_64`。`--chrome-source chrome-headless-shell` 也需要 `--video-arch x86_64`，因为 arm64 镜像只捆绑 sparticuz Chrome。"
    ],
    "codeBlocks": []
   },
   {
    "h": "路径 2 — 直接 SAM 部署",
    "p": "",
    "paras": [
     "如果你想在部署前先读 CloudFormation，或需要定制拓扑（额外告警、SNS 订阅、KMS 键等），直接对 `examples/aws-lambda/template.yaml` 模板调用 SAM： 模板输出三个调用渲染时需要的 CloudFormation 输出：",
     "[!WARNING] SAM 模板 `ReservedConcurrency` 默认 `-1`（不预留），与路径 1 CLI 相同：每次渲染用好账户未预留并发的至多 90%。设它来限制一次跑多少分片。"
    ],
    "codeBlocks": [
     {
      "code": "cd packages/aws-lambda\nbun run build:zip                     # produces dist/handler.zip\ncd ../../examples/aws-lambda\nsam deploy \\\n  --stack-name=hyperframes-prod \\\n  --region=us-east-1 \\\n  --resolve-s3 \\\n  --capabilities CAPABILITY_IAM \\\n  --no-confirm-changeset \\\n  --parameter-overrides ChromeSource=sparticuz ReservedConcurrency=8",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "`RenderBucketName`——计划 tarball + 逐分片输出 + 最终渲染的 S3 桶。",
     "`RenderStateMachineArn`——编排 Plan → Map → Assemble 的 Step Functions 标准工作流。",
     "`RenderFunctionArn`——状态机分发到的单个 Lambda 函数。"
    ]
   },
   {
    "h": "路径 3 — CDK 构造",
    "p": "",
    "paras": [
     "已在用 CDK 的用户，`@hyperframes/aws-lambda` 包导出 `HyperframesRenderStack` L2 构造，发出与 SAM 模板相同的拓扑： `@hyperframes/aws-lambda` 把 `aws-cdk-lib` 和 `constructs` 声明为**可选 peer dependency**，因此只需 SDK 的使用者不付 CDK 导入成本。",
     "该构造暴露 `.bucket`、`.renderFunction` 和 `.stateMachine`，你可连仪表盘、SNS topic 或其他 AWS 资源一起接线，无需重算 ARN。"
    ],
    "codeBlocks": [
     {
      "code": "import { App, CfnOutput, Stack } from \"aws-cdk-lib\";\nimport { HyperframesRenderStack } from \"@hyperframes/aws-lambda/cdk\";\n\nconst app = new App();\nconst stack = new Stack(app, \"MyApp\");\nconst render = new HyperframesRenderStack(stack, \"Render\", {\n  projectName: \"hyperframes\",\n  lambdaMemoryMb: 10240,\n  reservedConcurrency: 8,\n  chromeSource: \"sparticuz\",\n});\n\nnew CfnOutput(stack, \"RenderBucketName\", { value: render.bucket.bucketName });\nnew CfnOutput(stack, \"StateMachineArn\", { value: render.stateMachine.stateMachineArn });",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "IAM 权限",
    "p": "",
    "paras": [
     "CLI 自带 IAM 引导脚本，避免首次部署的 “User is not authorized to perform iam:CreateRole” 陷阱： 用自己的角色调用 SDK `renderToLambda` 的代码，除 `states:StartExecution` 外还需要状态机上的 `states:DescribeStateMachine`，以及桶上的 S3 读写：每次渲染都要读定义确认栈足够新。",
     "生成文档对 CLI 所需动作集授 `Resource: \"*\"`。第一次成功部署后，你可把 `Resource` 收窄到已部署 ARN——可按上面 CloudFormation 输出预测。在 CI 中跑 CLI 的采用者通常把策略文档签入源码，并在部署前跑 `policies validate` 防漂移。"
    ],
    "codeBlocks": [
     {
      "code": "# Print an inline policy doc to attach to the IAM user that runs the CLI.\nhyperframes lambda policies user\n\n# Print { TrustRelationship, InlinePolicy } for a CloudFormation service role.\nhyperframes lambda policies role\n\n# Validate a checked-in policy still covers the CLI's needs (exit non-zero on missing).\nhyperframes lambda policies validate ./infra/iam/hyperframes-deploy.json",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "成本形态",
    "p": "",
    "paras": [
     "Lambda 渲染按 GB-seconds（Lambda 计费时长 × 配置内存）计费，另加 Step Functions 标准工作流的每状态转移小费。`hyperframes lambda progress` 暴露运行累计： 成本数字是估算：Lambda 时长来自 handler 结果，S3 传输不含在内。实际支出用 AWS 账单数据。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes lambda progress my-render-id\n# Status:    SUCCEEDED\n# Progress:  100%\n# Frames:    480 / 480\n# Lambdas:   5\n# Cost:      $0.0214 (Lambda $0.0210 + SFN $0.0004)\n# Output:    s3://hyperframes-renders/.../output.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`sam deploy` 报 “Stack already exists”",
    "p": "",
    "paras": [
     "传第一次用的同一 `--stack-name`。SAM 幂等——在已有栈上重跑会变成无操作或原地更新。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`User is not authorized to perform iam:CreateRole`",
    "p": "",
    "paras": [
     "运行 `lambda deploy` 的 IAM 凭据无权创建 CloudFormation 需要的服务角色。运行 `hyperframes lambda policies user`，把打印的策略挂到你的 IAM 用户（或取 `policies role` 输出，让管理员建部署角色）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`Lambda function failed: PLAN_HASH_MISMATCH`",
    "p": "",
    "paras": [
     "Step Functions 用与 S3 上 planDir 哈希不匹配的计划哈希调用了 `renderChunk`。几乎总是意味着本地 `plan()` 构建与已部署 Lambda ZIP 的 producer 版本不一致。重跑 `hyperframes lambda deploy`（重建 ZIP）并重新渲染。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`Lambda function failed: BROWSER_GPU_NOT_SOFTWARE`",
    "p": "",
    "paras": [
     "Handler 启动了 Chromium，但运行时探针发现非 SwiftShader 的 GL 后端。跨分片边界硬件 GL 不确定，因此分布式渲染在运行时镜像 / 启动标志层拒绝它（不在合成层）。重建 handler ZIP 并重部署： 构建流水线固定了 `@sparticuz/chromium` + Chrome 标志（`--use-gl=swiftshader --use-angle=swiftshader`），所以全新部署几乎总能解决。若仍持续，栈的 Lambda 函数可能还指向旧部署遗留的 handler ZIP——`lambda deploy` 总会重建，重跑即可解开。"
    ],
    "codeBlocks": [
     {
      "code": "bun run --cwd packages/aws-lambda build:zip\nhyperframes lambda deploy --stack-name=<your-stack>",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染似乎卡在 `RUNNING`",
    "p": "",
    "paras": [
     "多为多分片渲染上的 Lambda 冷启动链。Map 状态的预留并发限制了可并行运行的分片数——如果你设了 `--concurrency=4` 而渲染有 16 分片，状态机按 4 个一批处理。`hyperframes lambda progress <id>` 显示有多少次调用在飞行中。",
     "若进度超过 10 分钟不推进，去 AWS 控制台看 Step Functions 执行——失败 Lambda 调用带类型化错误名（如 `FONT_FETCH_FAILED`、`FFMPEG_VERSION_MISMATCH` 等），它会让状态机短路。"
    ],
    "codeBlocks": []
   },
   {
    "h": "长视频规划超时",
    "p": "",
    "paras": [
     "看失败调用的 CloudWatch 日志，区分 Plan 与 RenderChunk。在当前版本，带 `ffmpeg_timeout` 的 `VIDEO_EXTRACTION_FAILED` 表示提取在配置间隔内没有产出新帧，默认为 300,000 ms。帧进度会重置该计时器，因此提取可以一边持续产出帧一边跑很久，超过五分钟。普通帧提取把长范围切成至多两分钟段，包括可变帧率源。",
     "Plan v2 把符合条件的恒帧率 SDR 提取留给短时序探测之后的分片工作进程。可变帧率源和必需的 HDR 颜色转换仍在 Plan 期间提取；已弃用 v1 路径也会在 Plan 期间提取视频。更小的分片或更高的 `maxParallelChunks` 可减少每分片工作量，但不要除以 Plan 期间仍发生的提取。",
     "若日志显示慢提取需要更长的帧间间隔、且工作量在 Lambda 调用预算内，请增大跑失败阶段的已部署函数上的 `FFMPEG_PROCESS_TIMEOUT_MS`。默认 arm64 部署用视频函数跑 Plan 和 RenderChunk。只在跑 `lambda render` 的终端设该变量不能配置远程函数。CDK 用户可在部署前配置构造的渲染函数。这里，`render` 是上面 CDK 示例创建的 `HyperframesRenderStack` 实例：",
     "这让提取可等待十分钟无新帧。每次 Plan、RenderChunk 和 Assemble 调用仍须在自己配置的 Lambda 超时（至多 15 分钟）内完成，包括下载、处理和上传，并放进其 `/tmp` 存储。在 CloudWatch 中测量失败阶段的耗时和存储占用。",
     "若规划无法容纳，把合成拆成更短、帧对齐的项目，各自作为独立任务渲染，再合并结果。分段长度按实测规划时间选择。视频长度无固定上限：分辨率、帧率、编码和 Lambda 资源都影响提取时间。"
    ],
    "codeBlocks": [
     {
      "code": "render.renderFunction.addEnvironment(\"FFMPEG_PROCESS_TIMEOUT_MS\", \"600000\");",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "拆除未回收 S3 存储",
    "p": "",
    "paras": [
     "渲染桶在删除时用 CloudFormation `Retain` 创建——`hyperframes lambda destroy`（或 `sam delete`）拆掉函数 + 状态机，但桶保留。这是故意的：重部署时保住已渲染成品 MP4。要完全回收存储，请在 AWS 控制台 / `aws s3 rb` 中清空并删除桶。",
     "arm64 部署的栈（默认）还有一个 ECR 仓库 `<stack>-video`，持有视频函数的镜像。`hyperframes lambda destroy` 会在删栈后删它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`STACK_TOO_OLD`",
    "p": "",
    "paras": [
     "栈由无法读取本站点格式的旧版本部署。重部署它（`hyperframes lambda deploy`）再渲染。见[升级](#upgrading-from-a-version-before-shared-content-storage)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`SITE_FILES_MISSING` 或 `SITE_NOT_FOUND`",
    "p": "",
    "paras": [
     "`SITE_FILES_MISSING`：站点部分文件在 `cas/sha256/` 下超过 30 天未用而过期。从站点创建时的项目目录渲染，或再次运行 `sites create`。`SITE_NOT_FOUND`：桶在任一格式下都无此 id 的站点；再次运行 `sites create` 并使用它打印的 id。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)",
     "[在 Lambda 上渲染模板](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)",
     "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)"
    ]
   }
  ]
 },
 "deploy-cloud": {
  "lede": "当你想要成品文件而又不想安装 Chrome 或 FFmpeg、也不想维护 AWS 或 Google Cloud 基础设施时，使用托管云渲染。",
  "sections": [
   {
    "h": "渲染项目",
    "p": "",
    "paras": [
     "先登录一次，然后渲染当前项目： 该命令会打包项目、上传它、等待渲染完成，并把成品文件下载到 `renders/`。",
     "当默认设置不合适时，可指定合成或输出路径： 在有人在场的 SSH 或无头终端中，使用设备流程。在任意浏览器中打开显示的 URL 并输入一次性 code： 设备登录需要 TTY，在 CI 中会被拒绝。对于无人值守智能体和 CI，请改用长效 API key：",
     "凭据优先级和本地替代见[认证和 API key](https://hyperframes.heygen.com/guides/authentication.md)。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes auth login\nhyperframes cloud render",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes cloud render . \\\n  --composition compositions/intro.html \\\n  --output renders/intro.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes auth login --device",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "echo \"$HEYGEN_API_KEY\" | hyperframes auth login --api-key",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "选择输出",
    "p": "",
    "paras": [
     "| 选项 | 取值 | 默认值 |",
     "| - | - | - |",
     "| `--fps` | 1–240 | `30` |",
     "| `--quality` | `draft`, `standard`, `high` | `standard` |",
     "| `--format` | `mp4`, `webm`, `mov` | `mp4` |",
     "| `--resolution` | `1080p`, `4k` | `1080p` |",
     "| `--aspect-ratio` | `16:9`, `9:16`, `1:1` | 尽可能从本地合成检测 | [!WARNING] 4K 按 1.5 倍计费。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloud render --quality high --fps 60\nhyperframes cloud render --resolution 4k",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "检查将会上传的内容",
    "p": "",
    "paras": [
     "项目按路径命名的 5 MB 或更大的媒体文件会作为 HeyGen 资源上传，并通过公开、无签名的 URL 引用，因此大片段和音频不会计入 200 MB 项目存档限制。上传有缓存，因此重新渲染时仅上传新增或变更的媒体。媒体在上传时从磁盘流式传输，大文件无需完整载入内存；在命令准备它时编辑它会终止本次运行。渲染前请检查将上传的内容：",
     "必要时把生成文件或无用文件加入 `.hyperframesignore`： 不要排除合成在渲染时需要的媒体。HyperFrames 已经忽略了常见开发和生成路径，包括 `.git`、`node_modules`、顶层 `renders/` 和顶层 `snapshots/`。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloud render --dry-run",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "/exports/\n/source-masters/",
      "file": "GITIGNORE THEME={NULL}"
     }
    ]
   },
   {
    "h": "填充模板变量",
    "p": "",
    "paras": [
     "使用合成声明的变量： 对于更大的载荷，用 `--variables-file` 传入 JSON 文件。",
     "对于本地项目，变量校验使用 `--composition` 指定的入口（省略时为 `index.html`）。`--strict-variables` 会在上传前停下，条件是某个值与该入口的声明不匹配。",
     "首次上传本地项目的 `hyperframes cloud render` 会打印一个 `asset_id`。复用它，用不同的值渲染同一已上传项目："
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloud render \\\n  --variables '{\"title\":\"Q4 recap\",\"theme\":\"dark\"}' \\\n  --strict-variables",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes cloud render \\\n  --asset-id asst_abc123 \\\n  --variables '{\"title\":\"Customer update\"}'",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "异步运行",
    "p": "",
    "paras": [
     "提交后不等待，并在渲染完成时接收 webhook： 然后按 ID 检查或管理渲染： 对于自动重试，传入稳定的 `--idempotency-key`，使中断的请求可以安全重放。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloud render \\\n  --callback-url https://example.com/hyperframes-hook \\\n  --no-wait",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes cloud list\nhyperframes cloud get hfr_abc123\nhyperframes cloud delete hfr_abc123",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "选择其他渲染器",
    "p": "",
    "paras": [
     "所有标志和 JSON 输出格式见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md#hyperframes-cloud)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "创作时、或运行命令的机器应承担任务时，使用 [`hyperframes render`](https://hyperframes.heygen.com/guides/rendering)。",
     "需要自己拥有渲染基础设施时，使用[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)或[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。",
     "需要可用的托管起点而不是完整分布式渲染栈时，使用[部署模板](https://hyperframes.heygen.com/guides/deploy.md)。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[选择渲染路径](https://hyperframes.heygen.com/deploy/overview.md)",
     "[从命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)",
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)"
    ]
   }
  ]
 },
 "deploy-gcp": {
  "lede": "当渲染必须在你的 Google Cloud 账户中运行时使用此路径。Cloud Workflow 规划渲染任务，把分片并行发送给 Cloud Run，并在 Google Cloud Storage 中组装结果。",
  "sections": [
   {
    "h": "前提条件",
    "p": "",
    "paras": [
     "当 CLI 在 HyperFrames 仓库检出中运行时，它可以自动构建渲染器。在仓库之外，请用 `--image` 传入由 `packages/gcp-cloud-run/Dockerfile` 构建的镜像。",
     "渲染器镜像使用 Chrome 152，与 CLI 的托管浏览器一致，因此变换过的子元素内的渐变文字也能在 Cloud Run 中正确渲染。已有部署需要重建镜像并重新部署，才能获得浏览器更新。"
    ],
    "codeBlocks": [],
    "bullets": [
     "已启用结算的 Google Cloud 项目",
     "已针对该项目认证的 `gcloud`",
     "Terraform 1.5 或更新版本",
     "Cloud Build 访问，或已有的兼容容器镜像",
     "与 CLI 一起安装 `@hyperframes/gcp-cloud-run`"
    ]
   },
   {
    "h": "部署",
    "p": "",
    "paras": [
     "该命令启用所需的 Google Cloud API、必要时构建并推送渲染器、应用内置 Terraform 模块，并把生成的桶、服务 URL 和工作流名称存入 `~/.hyperframes/`。",
     "默认区域是 `us-central1`。机器和扩缩控制包括 `--region`、`--cpu`、`--memory`、`--max-instances` 和 `--timeout`。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloudrun deploy --project my-gcp-project",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染",
    "p": "",
    "paras": [
     "宽和高描述创作画布。当编码结果需要超采样但不改变布局时，使用 `--output-resolution`。",
     "该命令接受本地渲染和 AWS 渲染使用的相同模板变量： 支持的分布式输出为 MP4、MOV、WebM 和 PNG 序列。MP4 可使用 H.264 或 H.265。当前分布式渲染仅支持 SDR。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloudrun render ./my-project \\\n  --width 1920 \\\n  --height 1080 \\\n  --wait",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes cloudrun render ./card-template \\\n  --width 1920 \\\n  --height 1080 \\\n  --variables '{\"name\":\"Ada\"}' \\\n  --wait",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "复用上传",
    "p": "",
    "paras": [
     "项目按内容寻址。上传一次不变的项目，然后在后续渲染中复用其站点 ID。旧版本站点 ID 仍可用，但 ID 方案已变更，因此每个项目都会在新 ID 下再上传一次： 当一个模板需要多组变量时，使用 JSONL 文件搭配 `render-batch`：",
     "每行 JSONL 包含输出键和可选变量："
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloudrun sites create ./my-project",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes cloudrun render-batch ./card-template \\\n  --batch ./recipients.jsonl \\\n  --width 1920 \\\n  --height 1080 \\\n  --max-concurrent 10",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "{\"outputKey\":\"renders/ada.mp4\",\"variables\":{\"name\":\"Ada\"}}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "进度和拆除",
    "p": "",
    "paras": [
     "不带 `--wait` 时，渲染会立即返回其工作流执行名称。",
     "`destroy` 会移除 Terraform 管理的栈及其渲染桶。运行前请先下载需要保留的内容。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes cloudrun progress <execution-name>\nhyperframes cloudrun destroy --project my-gcp-project",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "编程使用",
    "p": "",
    "paras": [
     "`@hyperframes/gcp-cloud-run/sdk` 暴露 `deploySite`、`renderToCloudRun` 和 `getRenderProgress`，供 Node 后端使用。该包还导出部署服务使用的 Terraform 模块和 HTTP handler。",
     "SDK 契约和完整基础设施形态见[GCP 包参考](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/gcp-cloud-run](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)",
     "[Cloud 渲染](https://hyperframes.heygen.com/deploy/cloud.md)",
     "[变更日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "deploy-migrating": {
  "lede": "如果你已经在用另一个框架通过一个命令部署无服务器视频渲染器，肌肉记忆可以平滑迁移：一条 `deploy` 命令即可配置整套堆栈，一条 `render` 命令即可启动一次渲染，一条 `progress` 命令即可轮询进度，一条 `destroy` 命令即可拆除堆栈。本页将你现有概念映射到 HyperFrames 的对应实现，让你把迁移精力花在真正不同的部分，而不是重新学习工作流。",
  "sections": [
   {
    "h": "概念映射",
    "p": "",
    "paras": [
     "| 在你当前框架中称为…… | 在 HyperFrames 中称为…… | 说明 |",
     "| - | - | - |",
     "| 单次部署命令 | `hyperframes lambda deploy` | 构建 `packages/aws-lambda/dist/handler.zip` 并运行 `sam deploy`。幂等。 |",
     "| 单次站点上传 | `hyperframes lambda sites create ./project` | 内容寻址文件清单；存储桶共享存储中已存在的文件会被跳过。 |",
     "| 触发一次渲染 | `hyperframes lambda render ./project --width 1920 --height 1080` | 立即返回 `renderId`；加 `--wait` 可流式输出逐块进度。 |",
     "| 轮询渲染进度 | `hyperframes lambda progress <renderId>` | 同一响应中包含累计成本。 |",
     "| 拆除 | `hyperframes lambda destroy` | S3 存储桶为 `Retain`——详见部署指南。 |",
     "| 打印/校验 IAM 策略 | `hyperframes lambda policies user`/`role`/`validate` | 将 `validate` 接入 CI，在下次部署失败前发现策略漂移。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "合成格式",
    "p": "",
    "paras": [
     "如果你的当前框架是 **基于 React 的**，你编写 JSX 组件，将其注册到 `Composition` 中，由渲染器在渲染时编译。",
     "在 HyperFrames 中，**合成是纯 HTML 文件**。合成元素声明其 ID 和画布，而剪辑各自声明其时间。没有 JSX 编译步骤。",
     "对于框架无关的动画，HyperFrames 提供 GSAP、Anime.js、CSS 关键帧、Lottie、Three.js 和 Web Animations API 的第一方适配器——详见 [Concepts](https://hyperframes.heygen.com/concepts.md) 及各技能文档。"
    ],
    "codeBlocks": [
     {
      "code": "<!doctype html>\n<html lang=\"en\">\n  <body>\n    <div\n      id=\"stage\"\n      data-composition-id=\"intro\"\n      data-start=\"0\"\n      data-width=\"1920\"\n      data-height=\"1080\"\n      data-duration=\"10\"\n      data-fps=\"30\"\n      data-no-timeline\n    >\n      <h1 id=\"title\" class=\"clip\" data-start=\"0\" data-duration=\"10\" data-track-index=\"0\">Hello</h1>\n    </div>\n  </body>\n</html>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染配置",
    "p": "",
    "paras": [
     "多数采用者的渲染配置可以直接对应：",
     "| 概念 | HyperFrames 对应项 | 位置 |",
     "| - | - | - |",
     "| `fps` | `--fps=30`（CLI）或 `config.fps`（SDK） | 仅支持 24、25、30、60——非整数 NTSC 有理数仅限进程内使用。 |",
     "| `width` / `height` | `--width` / `--height` 标志，或 `config.width` / `config.height` | 偶数整数 ≤ 7680（yuv420p 对齐要求）。 |",
     "| `codec: 'h264' / 'h265'` | `--codec=h264` 或 `--codec=h265`（仅 mp4） | h265 使用 libx265 并带 closed-GOP keyint 参数，使分块 concat-copy 可无损往返。 |",
     "| 输出格式 | `--format=mp4 / mov / webm / png-sequence` | webm 使用 libvpx-vp9 + closed-GOP concat-copy。分布式模式仍会在计划阶段拒绝 HDR mp4。 |",
     "| 质量预设 | `--quality=draft / standard / high` | 映射到 ffmpeg 编码器预设。 |",
     "| 块大小（帧） | `--chunk-size=240`（默认：自动） | 默认每个块大小为在 Lambda 超时内完成并留有余量；无法在超时内完成的渲染会在计划阶段以 `CHUNK_EXCEEDS_WORKER_TIMEOUT` 失败。 |",
     "| 最大并行块数 | `--max-parallel-chunks=16`（默认：自动） | 默认按一次部署的 `--concurrency`（或账户未预留并发的 90%）做一波并行；当某块会超过 Lambda 超时时会拓宽。 |",
     "| 单块帧数上限 | `--target-chunk-frames=N`（可选） | 限制每块帧数，使单块在长视频上不超过 Lambda 的 15 分钟上限：规划器会增加块数（上限 `--max-parallel-chunks`），使每块帧数 ≤ `N`，短视频仍可收拢为更少块数。这是上限而非固定大小；在设置 `--chunk-size` 时忽略。 |",
     "| 比特率 / CRF | SDK 中的 `config.bitrate` 或 `config.crf` | 互斥；当前 Lambda CLI 不暴露这两个字段。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "变量（inputProps）",
    "p": "",
    "paras": [
     "渲染时载荷——某些框架中的 `inputProps`、HyperFrames 中的 `variables`——是同构的。在合成的根 `[data-composition-id]` 元素上通过 `data-composition-variables` 声明变量的形状，然后本地用 `hyperframes render --variables '{...}'`、Lambda 侧用 `hyperframes lambda render --variables` 传入每次渲染的值。Lambda 执行输入上限 256 KiB，因此大型素材请用 URL 引用，而非内嵌 base64 数据。",
     "完整映射——`defaultProps` → 声明、`useCurrentFrame()` + `props.<x>` → `__hyperframes.getVariables().<x>`、`renderMediaOnLambda({ inputProps })` → `renderToLambda({ config: { variables } })`——见 [Templates on Lambda](https://hyperframes.heygen.com/deploy/templates-on-lambda.md#migrating-from-remotion-lambda-inputprops)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "HyperFrames 的不同之处",
    "p": "",
    "paras": [
     "有几处契约是有意区别于同类框架的。请提前了解，避免迁移中途在部署时才意外发现。"
    ],
    "codeBlocks": []
   },
   {
    "h": "强制要求确定性 Chrome 路径",
    "p": "",
    "paras": [
     "HyperFrames 在分布式模式下拒绝 `data-gpu-mode=\"hardware\"`——硬件 GL 在块边界间是非确定的，而逐块 concat-copy 假定字节级可复现。在进程内选择硬件 GL 的合成，在 Lambda 渲染时必须去掉该选项。在计划阶段 Lambda handler 会触发类型化的 `BROWSER_GPU_NOT_SOFTWARE` 不可重试错误，很容易在进度输出中捕获。"
    ],
    "codeBlocks": []
   },
   {
    "h": "字体获取默认失败关闭",
    "p": "",
    "paras": [
     "分布式模式下 `failClosedFontFetch` 默认开启。合成引用了 HyperFrames 无法获取的 `font-family` 时，会在计划阶段失败（`FONT_FETCH_FAILED`），而非静默回退到操作系统默认字体。如果你目前依赖系统字体回退，请用 `<link rel=\"stylesheet\">` 或 `@fontsource/*` 导入显式列出所需字体。"
    ],
    "codeBlocks": []
   },
   {
    "h": "不支持 HDR",
    "p": "",
    "paras": [
     "`hdrMode: 'force-hdr'` 会在计划阶段被拒绝。HDR 输出请使用 Lambda 之外的进程内渲染器。"
    ],
    "codeBlocks": []
   },
   {
    "h": "webm 使用 closed-GOP VP9",
    "p": "",
    "paras": [
     "webm 分布式渲染走 libvpx-vp9，默认带 `-g <chunkSize>`、`-keyint_min <chunkSize>`、`-auto-alt-ref 0` 和 `-cpu-used 4`。其中禁用 alt-ref 是关键：libvpx-vp9 默认的非显示 alt-ref 帧可出现在 GOP 内任意位置，会在块接缝处破坏 concat-copy。closed-GOP 强制在每个块边界处用关键帧，使 `ffmpeg -f concat -c copy` 可无损往返。输出为 `yuva420p` 以保留 alpha 通道。音频以 Opus 复用。",
     "分布式 WebM 可能比同一合成单遍渲染更大，因为 closed-GOP 编码会产生更多关键帧。VP9 编码速度由 `PRODUCER_VP9_CPU_USED` 控制（`-8` 到 `8`）；质量敏感或长时长 WebM 用较低值，重视实际编码耗时时用较高值。请用真实合成基准测试本地与分布式渲染，再决定路径。"
    ],
    "codeBlocks": []
   },
   {
    "h": "状态文件默认在本地",
    "p": "",
    "paras": [
     "`hyperframes lambda deploy` 会写入 `<cwd>/.hyperframes/lambda-stack-<name>.json`，使后续命令不必重新推导存储桶 / 状态机 ARN。两个工作树会产生两个不同的状态文件。如果你需要在多台 CI worker 间共享默认位置，请 symlink 该目录，或在每次调用时显式传入 `--stack-name`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "IAM 策略先打印再收窄",
    "p": "",
    "paras": [
     "`hyperframes lambda policies user/role` 输出的默认策略文档使用 `Resource: \"*\"`，因为 CloudFormation 堆栈会在每个采用者的首次部署时创建新 ARN。首次成功部署后，请将 `Resource` 收窄到已部署的 ARN——它们可从 CFN 输出预测。CI 用户通常将收窄后的策略签入源代码，并以 `hyperframes lambda policies validate ./infra/policy.json` 作为部署前门禁。"
    ],
    "codeBlocks": []
   },
   {
    "h": "非 Lambda 运行时",
    "p": "",
    "paras": [
     "如果你不想用 Lambda，相同的 `@hyperframes/producer/distributed` 原语可在任何有 Node + Chrome + ffmpeg + S3 的环境运行。参考 Dockerfile 位于 `examples/k8s-jobs/Dockerfile.example`，适用于运行在以下平台的采用者：",
     "请自行构建——我们不向 registry 发布 Docker 镜像。该 Dockerfile 有内联文档，内置 Node 22 + chrome-headless-shell + ffmpeg + 你当前 checkout 版本的 producer。"
    ],
    "codeBlocks": [],
    "bullets": [
     "Google Cloud Run Jobs",
     "Azure Container Apps Jobs",
     "AWS ECS Fargate",
     "Kubernetes Jobs / Argo Workflows",
     "大型 VM 上的普通 Docker"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)",
     "[Contribute to HyperFrames](https://hyperframes.heygen.com/contributing.md)",
     "[HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)"
    ]
   }
  ]
 },
 "deploy-overview": {
  "lede": "每条渲染路径都从同一个 HyperFrames 项目开始。区别在于：谁在运维 Chrome 和 FFmpeg、请求如何提交，以及你的应用需要控制流水线的多少部分。",
  "sections": [
   {
    "h": "本地或 CI：使用 CLI",
    "p": "",
    "paras": [
     "CLI 拥有完整的常规流水线：项目加载、检查、浏览器捕获、音频混音和编码。",
     "除非有应用（不是人员或 CI 任务）必须发起渲染，否则请从这里开始。常规工作流见[渲染](https://hyperframes.heygen.com/guides/rendering.md)，自动化标志的完整 CLI 参考见[CLI 完整参考](https://hyperframes.heygen.com/packages/cli.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes check\nnpx hyperframes render --output video.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "Node 应用：使用 Producer",
    "p": "",
    "paras": [
     "`@hyperframes/producer` 是完整的可编程渲染流水线。它适合需要提供项目输入、接收进度、取消任务，或在不生成 CLI 进程的情况下控制编码的后端。",
     "当前配置和导出 API 见[Producer](https://hyperframes.heygen.com/packages/producer.md)。仅在 Producer 执行了你的应用必须替换的工作时，才使用 Engine。"
    ],
    "codeBlocks": [
     {
      "code": "import { createRenderJob, executeRenderJob } from \"@hyperframes/producer\";\n\nconst job = createRenderJob({ fps: 30, quality: \"standard\" });\nawait executeRenderJob(job, \"./project\", \"./video.mp4\");",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "精确帧捕获：使用 Engine",
    "p": "",
    "paras": [
     "`@hyperframes/engine` 打开可定位的合成并捕获精确帧。它不替代完整的 Producer 流水线。",
     "在构建专用捕获、检查或渲染基础设施时使用它。对于普通编码视频，请使用 CLI 或 Producer。见[Engine](https://hyperframes.heygen.com/packages/engine.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "无基础设施：使用 HyperFrames Cloud",
    "p": "",
    "paras": [
     "托管云渲染接收项目、运行渲染，并返回成品文件，无需本地 Chrome 或 FFmpeg。",
     "认证、变量、webhook 和任务管理见[Cloud 渲染](https://hyperframes.heygen.com/deploy/cloud.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes cloud render ./project --output video.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "你自己运维的基础设施",
    "p": "",
    "paras": [
     "当渲染必须在你自己的云账户内运行时，使用[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)或[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。两条路径都会把工作分发到多个工作进程，并把中间媒体和成品媒体存到对应的云存储。",
     "当期望的是在 Vercel、Cloudflare 或 Modal 上的小型预览应用加渲染 API（而不是通用分布式渲染平台）时，使用[托管模板](https://hyperframes.heygen.com/guides/deploy.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "决策",
    "p": "",
    "paras": [
     "选择能完成任务的最高层界面： 越往右，应用控制越多，流水线责任也越多。托管 Cloud、AWS Lambda、Cloud Run 和托管模板决定该流水线在哪里运行。"
    ],
    "codeBlocks": [
     {
      "code": "CLI → Producer → Engine",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI 指南](https://hyperframes.heygen.com/developers/cli.md)",
     "[部署预览和渲染 API](https://hyperframes.heygen.com/guides/deploy.md)",
     "[HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)"
    ]
   }
  ]
 },
 "deploy-templates-lambda": {
  "lede": "HyperFrames 模板是带有声明变量的合成。同一项目无需重写 HTML 即可产出多个视频。",
  "sections": [
   {
    "h": "声明输入",
    "p": "",
    "paras": [
     "在文档上声明变量，然后在合成中绑定它们。本例暴露标题和强调色： 所有类型和绑定方法的说明见[变量](https://hyperframes.heygen.com/concepts/variables.md)。"
    ],
    "codeBlocks": [
     {
      "code": "<!doctype html>\n<html\n  data-composition-variables='[\n    {\"id\":\"title\",\"type\":\"string\",\"label\":\"Headline\",\"default\":\"Welcome\"},\n    {\"id\":\"accent\",\"type\":\"color\",\"label\":\"Accent\",\"default\":\"#6d5dfc\"}\n  ]'\n>\n  <body>\n    <div\n      id=\"stage\"\n      data-composition-id=\"welcome\"\n      data-start=\"0\"\n      data-width=\"1920\"\n      data-height=\"1080\"\n      data-duration=\"5\"\n      data-no-timeline\n      style=\"color:var(--accent)\"\n    >\n      <h1 data-var-text=\"title\">Welcome</h1>\n    </div>\n  </body>\n</html>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "本地测试",
    "p": "",
    "paras": [
     "在云基础设施之前先渲染一个真实载荷： `--strict-variables` 会拒绝未声明的键和类型错误的值。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes render ./my-template \\\n  --variables '{\"title\":\"Hello Ada\",\"accent\":\"#ff4d67\"}' \\\n  --strict-variables \\\n  --output renders/ada-preview.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "在 Lambda 上渲染单个版本",
    "p": "",
    "paras": [
     "不带 `--wait` 时，命令返回渲染 ID。用以下命令稍后查看："
    ],
    "codeBlocks": [
     {
      "code": "hyperframes lambda render ./my-template \\\n  --width 1920 \\\n  --height 1080 \\\n  --variables '{\"title\":\"Hello Ada\",\"accent\":\"#ff4d67\"}' \\\n  --output-key renders/ada.mp4 \\\n  --wait",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes lambda progress <render-id>",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "复用项目上传",
    "p": "",
    "paras": [
     "`lambda render` 可在每次调用时上传项目。对于重复渲染，创建一次内容寻址站点： 在后续渲染中传入返回的 ID： 不变的项目保持相同的站点 ID，并跳过另一次 S3 上传。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes lambda sites create ./my-template",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes lambda render ./my-template \\\n  --site-id <site-id> \\\n  --width 1920 \\\n  --height 1080 \\\n  --variables '{\"title\":\"Hello Lin\"}'",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "批量渲染",
    "p": "",
    "paras": [
     "每行创建一个 JSON 对象。`outputKey` 必需；`variables` 和 `executionName` 可选。",
     "启动批量任务： 该命令上传一次项目，并为每行输入返回一行 manifest。单行启动失败不会丢弃其他已启动的渲染。",
     "在不启动 AWS 执行的情况下校验文件："
    ],
    "codeBlocks": [
     {
      "code": "{\"outputKey\":\"renders/ada.mp4\",\"variables\":{\"title\":\"Hello Ada\",\"accent\":\"#ff4d67\"}}\n{\"outputKey\":\"renders/lin.mp4\",\"variables\":{\"title\":\"Hello Lin\",\"accent\":\"#36b37e\"}}",
      "file": "JSONL THEME={NULL}"
     },
     {
      "code": "hyperframes lambda render-batch ./my-template \\\n  --batch ./recipients.jsonl \\\n  --width 1920 \\\n  --height 1080 \\\n  --max-concurrent 10",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "hyperframes lambda render-batch ./my-template \\\n  --batch ./recipients.jsonl \\\n  --width 1920 \\\n  --height 1080 \\\n  --strict-variables \\\n  --dry-run \\\n  --json",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "保持变量精简",
    "p": "",
    "paras": [
     "完整的 Step Functions Standard 执行输入限制为 256 KiB。HyperFrames 在启动执行前会检查这一点。",
     "变量只用于 JSON 数据。图片、音频和视频请单独存储，传递其 URL 而非 base64 内容。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  \"title\": \"Hello Ada\",\n  \"avatarUrl\": \"https://cdn.example.com/avatars/ada.png\"\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "从 Remotion Lambda inputProps 迁移",
    "p": "",
    "paras": [
     "HyperFrames 变量承担了 Remotion Lambda 渲染中 `inputProps` 的角色：",
     "| Remotion 模式 | HyperFrames 等价物 |",
     "| - | - |",
     "| `defaultProps` | `data-composition-variables` 中的 `default` 值 |",
     "| `inputProps` | `--variables` 或 SDK 渲染配置的 `variables` |",
     "| `props.title` | `data-var-text=\"title\"`、CSS 变量或 `getVariables().title` |",
     "| `renderMediaOnLambda()` | `renderToLambda()` | 在合成中声明允许的值，只传递每次渲染的数据，大媒体放在执行载荷之外。在迁移期间使用 `--strict-variables`，使旧的或拼写错误的输入在渲染开始前失败。"
    ],
    "codeBlocks": []
   },
   {
    "h": "控制并发",
    "p": "",
    "paras": [
     "三项设置控制不同层面：",
     "| 设置 | 控制内容 |",
     "| - | - |",
     "| `lambda deploy --concurrency` | 已部署 Lambda 函数的最大并发调用数 |",
     "| `lambda render --max-parallel-chunks` | 单次渲染使用的最大分片工作进程数 |",
     "| `lambda render-batch --max-concurrent` | 批量命令并发启动的最大渲染执行数 | 先保守启动，在增大它们之前先测量真实合成。"
    ],
    "codeBlocks": []
   },
   {
    "h": "使用 SDK",
    "p": "",
    "paras": [
     "对于后端服务，`@hyperframes/aws-lambda/sdk` 暴露 `deploySite`、`renderToLambda` 和 `getRenderProgress`。当前类型和可运行示例见[AWS 包参考](https://hyperframes.heygen.com/packages/aws-lambda.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)",
     "[品牌、模板与故事板](https://hyperframes.heygen.com/prompting/design-systems.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "dev-catalog-search": {
  "lede": "`hyperframes catalog --query \"<what you want>\"` 按功能而非仅按名称查找 catalog 块与组件。它在你的机器上以两种方式之一运行，且两者都不把查询发送到任何地方。",
  "sections": [
   {
    "h": "词匹配",
    "p": "",
    "paras": [
     "按查询词在条目的名称、标题、描述与标签中共享的词为每个条目打分，停用常见词与一两个字母的词。一个词若命中条目名称或标题，所计权重高于命中描述；少有条目使用的词权重高于多数条目使用的词；复数匹配其单数（\"pulses\" 找到 \"pulse\"），复合词双向匹配（\"countdown\" 与 \"count down\"）。它不需要模型与网络，只能找到确实用了你所用词的条目。"
    ],
    "codeBlocks": []
   },
   {
    "h": "端侧意义搜索",
    "p": "",
    "paras": [
     "把你的查询与每个 catalog 条目都转成数值向量，返回向量方向与查询最接近的条目，因此 \"make the pace feel suddenly faster\" 可以找到描述中从未用过这些词的动效。它显示最接近的 25 个条目，靠前者最优，`--json` 还会增加 `top_score`，即第一个结果的相似度。"
    ],
    "codeBlocks": []
   },
   {
    "h": "开启方式",
    "p": "",
    "paras": [
     "没有明确同意，永不启动下载： 模型已在机器上之后，每个 `catalog --query` 都使用意义搜索。若无法运行，CLI 会说明原因并回退到词匹配。"
    ],
    "codeBlocks": [],
    "bullets": [
     "在终端中，首次词匹配搜索会先展示词匹配找到的内容，然后询问一次是否下载模型。回答会被记住。是，会立即拉取 catalog 向量，下一次搜索时拉取模型。",
     "`--on-device` 会在本次运行准备好意义搜索；若尚未询问过，会先在终端提示。",
     "Agent、CI 与 `--json` 运行永不提示。它们会被告知去询问其服务的用户；`--on-device --yes` 就是那个人的同意，并记录下来。",
     "答否之后，仅 `--on-device` 会跳过并给出提示。只有在交互终端中（stdin 与 stdout 均为终端、无 `--json`、非 CI）使用 `--on-device --yes` 才会更改答案；在其他地方，否仍然成立。"
    ]
   },
   {
    "h": "模型",
    "p": "",
    "paras": [
     "| | |",
     "| - | - |",
     "| 模型 | `bge-small-en-v1.5`，即 `Xenova/bge-small-en-v1.5` 的量化 ONNX 构建 |",
     "| 锁定 | revision `ea104dacec62c0de699686887e3f920caeb4f3e3`，永不使用 `main` |",
     "| 向量大小 | 每条目 384 个数值 |",
     "| 下载 | 32 MB 模型与 0.7 MB tokenizer，共 33 MB | 选用它是因为它在 MTEB benchmark 上的平均分接近 OpenAI 的 `text-embedding-3-small`（62.17 对 62.3），而向量只有四分之一大小（384 数值而非 1,536），且足够小，可按需下载。锁定到单一 revision 是因为 catalog 向量是用那套确切权重生成的：底层模型若悄悄改变，仍会返回结果，只是会是错的。",
     "量化构建也是 catalog 向量的来源，因此查询与 catalog 始终来自同一文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "下载内容与存放位置",
    "p": "",
    "paras": [
     "| 内容 | 来源 | 存放在 |",
     "| - | - | - |",
     "| `model_quantized.onnx` (34,014,426 bytes) | huggingface.co，锁定 revision | `~/.hyperframes/models/bge-small-en-v1.5.onnx` |",
     "| `tokenizer.json` (711,396 bytes) | huggingface.co，锁定 revision | `~/.hyperframes/models/bge-small-en-v1.5.tokenizer.json` |",
     "| `onnxruntime-node` 1.21.1 | npm，首次使用时 | `~/.cache/hyperframes/optional` |",
     "| `local-vectors.json` 与 `local-vectors.bin` | catalog registry，`catalog-artifact/` | `~/.hyperframes/catalog` | 两个模型文件都按锁定 SHA-256 校验。不匹配的文件会被删除，搜索回退到词匹配，因此部分下载或被篡改的下载永不会被使用。runtime 在模型之前安装，因此无法运行它的机器付出的不是先下载那 33 MB。",
     "catalog 向量带有 `revision`。当 registry 发布新版时，CLI 会在下一次意义搜索前拉取新的一对，因此新发布的条目无需更新 CLI 即可被找到。在开发时，`HYPERFRAMES_CATALOG_ARTIFACT_DIR` 会替换 `~/.hyperframes/catalog` 作为保存向量的文件夹。"
    ],
    "codeBlocks": []
   },
   {
    "h": "隐私",
    "p": "",
    "paras": [
     "意义搜索完全在你的机器上运行：查询在本地变成向量，与已在磁盘上的向量比较。唯一网络流量是上述一次性下载与 catalog 向量刷新，都不携带你的查询。",
     "当搜索没有找到有用结果时，CLI 会打印 `hyperframes feedback --search-miss` 命令，你可以运行它来报告这个缺口。该命令会发送查询，且仅在你运行时才发送。"
    ],
    "codeBlocks": []
   },
   {
    "h": "索引构建方式",
    "p": "",
    "paras": [
     "向量随 registry 一起发布，每个可安装块与组件一行，由以下命令构建： 它读取仓库中的 `registry/blocks/*` 与 `registry/components/*`，按名称排序，并用锁定模型每 16 条一批嵌入。批大小很重要：批内文本会被补齐到相同长度，这会影响量化结果，因此同一文本单独嵌入的结果会略有不同。以 16 条分批重建可精确复现已发布的行，这也是验证索引来自该 registry 与该模型的方法。",
     "`revision` 是对模型、其 revision、向量大小、批大小以及每个条目的名称与文本做的 SHA-256。它写入 `local-vectors.json` 与 registry 的 `registry.json`，CLI 由此知道自己的副本已过期。"
    ],
    "codeBlocks": [
     {
      "code": "bun scripts/catalog/build-local-vectors.ts",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "重建",
    "p": "",
    "paras": [
     "添加 catalog 条目的贡献者很少需要重建。`bun run generate:catalog` 会连同其余生成 catalog 一起重建索引，必要时先下载锁定模型；catalog 发布 PR 在源码变更合并后同样如此。没有模型时，构建脚本会停止并说明，而不是中途失败，“Catalog: search index covers the registry” CI 检查会在任何可搜条目缺失时失败。文件格式见",
     "[`registry/catalog-artifact/README.md`](https://github.com/heygen-com/hyperframes/blob/main/registry/catalog-artifact/README.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[Changelog](https://hyperframes.heygen.com/changelog.md)",
     "[Motion Blur](https://hyperframes.heygen.com/catalog/components/motion-blur.md)"
    ]
   }
  ]
 },
 "dev-cli-guide": {
  "lede": "使用本页来选择命令。[CLI 参考](https://hyperframes.heygen.com/packages/cli.md) 包含",
  "sections": [
   {
    "h": "日常项目循环",
    "p": "",
    "paras": [
     "| 任务 | 命令 |",
     "| - | - |",
     "| 创建项目 | `npx hyperframes init my-video` |",
     "| 打开 Studio | `npx hyperframes preview` |",
     "| 检查 HTML 结构 | `npx hyperframes lint` |",
     "| 运行浏览器、布局、动效与对比度检查 | `npx hyperframes check` |",
     "| 捕获评审帧 | `npx hyperframes snapshot --at 0,2,5` |",
     "| 渲染视频 | `npx hyperframes render --output output.mp4` |",
     "| 发布浏览器链接 | `npx hyperframes publish` |",
     "| 诊断机器 | `npx hyperframes doctor` |",
     "| 释放 HyperFrames 已用的磁盘空间 | `npx hyperframes clean` |"
    ],
    "codeBlocks": []
   },
   {
    "h": "处理媒体",
    "p": "",
    "paras": [
     "| 任务 | 命令 |",
     "| - | - |",
     "| 查看项目元信息 | `npx hyperframes info` |",
     "| 测量声音时序 | `npx hyperframes audio <file>` |",
     "| 转写语音 | `npx hyperframes transcribe <file>` |",
     "| 生成旁白 | `npx hyperframes tts <script>` |",
     "| 捕获网站 | `npx hyperframes capture <url>` | 若要把长录音的结尾当作从影片第 4 秒开始来测量，可跳过其前 30 分钟： 结果会在跳过的音频含有录音最响亮时刻时发出警告。可用测量项见 [参考中的 `audio`](https://hyperframes.heygen.com/packages/cli#audio)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes audio recording.wav --place-at 4 --skip-file-seconds 1800 --only moments",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "复用与检查",
    "p": "",
    "paras": [
     "| 任务 | 命令 |",
     "| - | - |",
     "| 添加 Catalog 条目 | `npx hyperframes add <name>` |",
     "| 列出合成 | `npx hyperframes compositions` |",
     "| 打印轨道与片段 | `npx hyperframes timeline`（供 agent 时加 `--json`） |",
     "| 检查关键帧行为 | `npx hyperframes keyframes` |",
     "| 比较两个或更多版本 | `npx hyperframes compare v1/ v2/` | `hyperframes timeline` 还接受 agent 编辑动词。使用 `move`、`trim`、`split` 或 `delete` 并带行引用；加 `--plan` 可在不写入的情况下检查前后行与 diff，或加 `--json` 获取机器可读回执。时间值接受秒数、相对偏移、帧以及 `after:#intro` 这类锚点。",
     "对于脚本，`npx hyperframes keyframes --runtime css --json` 向 stdout 写入一条 JSON 结果。Anime.js 使用 `--runtime anime`。静态编写提示仅出现在人类可读输出中。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染与自动化",
    "p": "",
    "paras": [
     "CLI 还支持批量渲染与按变量渲染，可写出序列帧与多种视频格式，也可在云端运行 —— 托管运行、AWS Lambda 或 Google Cloud Run。多数命令在需要从脚本读取结果时接受 `--json`。",
     "`snapshot` 与 `remove-background` 所使用的浏览器安装与媒体探测会保留 Unicode 文件名与子进程诊断中的非英文文本。",
     "先使用简单命令，再打开[完整参考](https://hyperframes.heygen.com/packages/cli.md)查看自动化或基础设施所需的确切选项。",
     "在预览与渲染之前，HyperFrames 会停止崩溃的 HyperFrames 会话遗留的 headless Chrome 进程。它只停止 HyperFrames 启动的浏览器，因此其他工具的分离浏览器会继续运行。若要跳过该清理，在调用环境中设置 `HYPERFRAMES_NO_ORPHAN_CLEANUP=1`：",
     "清理默认为开启。禁用后，崩溃的 HyperFrames 会话遗留的浏览器会继续运行，直到你自行停止。",
     "[!TIP] 运行 `npx hyperframes <command> --help` 查看已安装版本的确切语法。"
    ],
    "codeBlocks": [
     {
      "code": "HYPERFRAMES_NO_ORPHAN_CLEANUP=1 npx hyperframes preview ./my-video",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[How HyperFrames fits into an application](https://hyperframes.heygen.com/developers/overview.md)",
     "[Render from the command line](https://hyperframes.heygen.com/guides/rendering.md)"
    ]
   }
  ]
 },
 "dev-harness": {
  "lede": "agent harness（Claude Code、Codex 或你自己的）替 agent 运行 `hyperframes` 命令。`HF_TOOL_CONTEXT` 让 harness 告诉一次调用它支持什么，CLI 因此能做更多：报告它产出的图像，或等待轮次而不是与同一项目中的另一命令竞速。没有该变量时，每个命令的行为与在终端中完全相同。",
  "sections": [
   {
    "h": "声明",
    "p": "",
    "paras": [
     "| 字段 | 取值 |",
     "| - | - |",
     "| `version` | `1`。其他版本或非 JSON 值均视为未声明。 |",
     "| `capabilities` | 以能力名为键的对象。每个值配置该能力。 | CLI 会忽略自己不认识的能力名，以及值不合法的已知能力，因此 harness 可以声明比其运行的 CLI 更新的能力。该变量仅携带数据：任何能力都不会运行 harness 命名的代码。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`events`：命令产出了什么",
    "p": "",
    "paras": [
     "CLI 向 `path` 追加每行一个 JSON 对象。它永不创建父目录，写失败会打印警告而不使命令失败。命令退出后再读取文件；一次 shell 调用中的多个命令会追加到同一文件。",
     "每行是一个事件：",
     "| 命令 | `role` | 内容 |",
     "| - | - | - |",
     "| `snapshot` | `frame` | 每个捕获的画面（PNG） |",
     "| `snapshot` | `contact-sheet` | 每个评审拼图页（JPEG） |",
     "| `check` | `check-report` | 已保存的 JSON 报告 |",
     "| `check` | `frame` | 浏览器检查捕获的每个画面 |",
     "| `check` | `finding` | 每个发现周围的裁剪 | 路径为绝对路径，保留命令保存的位置。如何处理产物由 harness 决定：把 contact sheet 附到工具结果、链接报告，或忽略。不认识的事件类型与 role 要忽略；新增时不会改版本。"
    ],
    "codeBlocks": [
     {
      "code": "{ \"transport\": { \"type\": \"ndjson-file\", \"path\": \"/absolute/events.ndjson\" } }",
      "file": "JSON THEME={NULL}"
     },
     {
      "code": "{\n  \"version\": 1,\n  \"type\": \"artifact.created\",\n  \"command\": \"snapshot\",\n  \"artifact\": { \"role\": \"contact-sheet\", \"path\": \"/project/.hyperframes/artifacts/snapshots/…/contact-sheet.jpg\", \"mediaType\": \"image/jpeg\" }\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "`project-lock`：一次一个浏览器命令",
    "p": "",
    "paras": [
     "`check` 与 `snapshot` 在启动浏览器前获取项目锁，完成后释放。第二条命令最多等待 `waitMs` 毫秒等锁，然后失败，并指出持有锁的命令与进程。锁的持有进程已退出时，锁会被接管。被杀进程遗留的 `project.lock.break` 不会被接管：超时会指出该文件及其进程 id，并说明删除它以继续。锁文件是 `.hyperframes/project.lock`。",
     "`waitMs` 应设得小于你工具调用自身的超时，使等待结束在 CLI 的提示里，而不是 harness 杀掉调用。"
    ],
    "codeBlocks": [
     {
      "code": "{ \"waitMs\": 90000 }",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "`check-review`：`check` 的评审开关",
    "p": "",
    "paras": [
     "每个字段都是布尔，默认为 `false`；非 `true` 值即为关，未知字段被忽略。没有该能力时，`check` 输出与终端中相同。",
     "| 字段 | 作用 |",
     "| - | - |",
     "| `skipContrastInMotion` | 省略在 GSAP tween 移动文本或其祖先、或文本半透明时测得的对比度失败（见 [check](https://hyperframes.heygen.com/packages/cli.md#check)）。计数、`ok` 与持久性（persistence）同样省略它们。 |",
     "| `findingFrames` | 为 `layout` 与 `contrast` 中有 bbox 的错误与警告发现（不包括 `motion` 或 `craft`），按每个不同 `frameTime` 保存一帧纯粹、无标注的全画面，并在每个此类发现上增加两个字段：`frameTime`（其 `times` 中最长持续段的中间采样点，间隙规则与 `heldMs` 相同），以及 `frame`（该 PNG 的绝对路径，同一时刻的所有发现共享）。`bbox` 是在发现的 `time` 测得的，因此移动中的元素在画面中可能处于别的位置。只有有限、非负采样时间可入选；无可入选时间的发现不产帧。最多捕获 60 个不同时刻，错误优先。帧放在本次运行的 snapshot 文件夹中，但不列入 `snapshots`，不记入项目历史，也不作为 `events` 报告。 |",
     "| `inspect` | 仅与 `findingFrames` 一起开启时有效；单独则无作用。当每帧在屏时，对该时刻入帧的每个发现运行 [component inspector](https://github.com/heygen-com/hyperframes/tree/main/packages/inspector)，并将其报告原样加为发现的 `inspect` 字段：`results`（元素、目标它的 GSAP 动画数），以及 `snippets`，每个带其源码 `id`（`file:start-end`）、`kind`（`html opening tag`、`matched CSS candidate`、`animation creation` 等）与确切源码 `code`。目标是发现的 `data-hf-id`（若有），否则其 `selector`，在 inspector 默认 12,000 字节预算下不带后代匹配。匹配多个元素的选择器视为检查失败，因此不会附加无关源码片段。检查失败的发现改为得到 `inspect: { \"error\": \"<message>\" }`；检查本身永不因此失败。检查计入检查截止时间的 `frames` 阶段。超时或停止会结束捕获，不附加 frame 或 inspection 字段。仅看到 GSAP 动画，看不到 CSS 动画、Web Animations 或 canvas 绘制。 |"
    ],
    "codeBlocks": [
     {
      "code": "{ \"skipContrastInMotion\": true, \"findingFrames\": true, \"inspect\": true }",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "检查实时预览",
    "p": "",
    "paras": [
     "`@hyperframes/inspector/live` API 读取跨所有合成的组件、时间线与元素映射，包括停放在预览播放头之外的场景。每次查询临时挂载这些场景（不定位），完成后失败或结束时释放自己的持有。并发查询让各自场景挂载直到各自完成；Studio 的选择持有保持独立。预览随后恢复当前播放头的场景窗口。若挂载后仍有场景停放，查询会以 `scenes_not_mounted` 及名称报告，而不是把其元素报告为缺失。挂载通过预览的普通场景生命周期运行这些场景的脚本。"
    ],
    "codeBlocks": []
   },
   {
    "h": "运行代码的 Hooks",
    "p": "",
    "paras": [
     "在 CLI 命令前或后运行你自己的命令不是 `HF_TOOL_CONTEXT` 能力，也永远不会是：任何设置环境变量的东西都能运行代码。这类 hooks 若存在，只来自使用者控制的配置。"
    ],
    "codeBlocks": []
   },
   {
    "h": "一致性",
    "p": "",
    "paras": [
     "`packages/cli/src/utils/toolContext.test.ts` 与 `projectLock.test.ts` 锁定了上述解析、事件与锁行为。harness 对其想要该行为的每次调用设置变量、仅在调用退出后读取 `events`，并且当 CLI 忽略某项能力时同样工作，即为正确。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[Install and update agent skills](https://hyperframes.heygen.com/guides/skills.md)",
     "[@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)"
    ]
   }
  ]
 },
 "dev-index": {
  "lede": "当你想自己编写组合、自动化项目，或把 HyperFrames 加入另一个产品时，使用这条路径。如果只想让智能体制作视频，请从 [first-video 指南](https://hyperframes.heygen.com/quickstart.md) 开始。",
  "sections": [
   {
    "h": "自己编写和渲染项目",
    "p": "",
    "paras": [
     "创建空白项目并在 Studio 中打开它： 项目是普通的 HTML。组合从这个根开始： 项目模板提供组合根、视口和时长。HTML 和 CSS 控制呈现内容；`data-*` 属性控制呈现时机。项目就绪后："
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes init my-video --example blank\ncd my-video\nnpx hyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "<div\n  id=\"root\"\n  data-composition-id=\"main\"\n  data-start=\"0\"\n  data-duration=\"10\"\n  data-width=\"1920\"\n  data-height=\"1080\"\n>\n  <div class=\"clip\" data-start=\"0\" data-duration=\"10\" data-track-index=\"1\">\n    <!-- Ordinary HTML, CSS, images, and timed media. -->\n  </div>\n</div>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "npx hyperframes check\nnpx hyperframes render --output video.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "将 HyperFrames 加入应用",
    "p": "",
    "paras": [
     "选择能完成工作的最小界面： [card] [CLI](https://hyperframes.heygen.com/developers/cli.md) 从脚本或 CI 任务中运行检查和渲染。",
     "[card] [SDK 快速入门](https://hyperframes.heygen.com/sdk/quickstart.md) 从应用中检查和更改组合 HTML。",
     "[card] [Player](https://hyperframes.heygen.com/packages/player.md) 嵌入组合并控制播放。",
     "[card] [渲染基础设施](https://hyperframes.heygen.com/deploy/overview.md) 从 Node 服务、托管云或你运营的基础设施渲染。",
     "项目级自动化从 CLI 开始。只有当代码必须检查或编辑源时才添加 SDK，只有当页面需要实时播放时才添加 Player。Producer 和 Engine 是更低的渲染层，不是必需的设置。"
    ],
    "codeBlocks": []
   },
   {
    "h": "了解架构",
    "p": "",
    "paras": [
     "[开发者概览](https://hyperframes.heygen.com/developers/overview.md) 解释了组合、CLI、SDK、Player、Producer 和 Engine 如何协同。直接生成源时请使用 [HTML schema](https://hyperframes.heygen.com/reference/html-schema.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)"
    ]
   }
  ]
 },
 "dev-overview": {
  "lede": "基于 HyperFrames 构建，意味着使用可编辑的 HTML 组合作为自动化、播放、编辑和渲染的共享源。",
  "sections": [
   {
    "h": "从组合契约开始",
    "p": "",
    "paras": [
     "组合是一个有限 HTML 文档，具有明确视口、定时片段、素材，以及零个或多个可寻址的动画运行时。",
     "运行时读取时间属性，控制片段可见性和素材播放。当组合使用动画运行时，HyperFrames 也会寻址其注册的时间轴。HTML 仍可由常规 Web 工具检查和编辑。",
     "生成组合或构建新的创作界面时，请使用 [组合与 schema 参考](https://hyperframes.heygen.com/reference/html-schema.md)。"
    ],
    "codeBlocks": [
     {
      "code": "<!doctype html>\n<html lang=\"en\">\n  <body>\n    <div\n      id=\"main\"\n      data-composition-id=\"intro\"\n      data-start=\"0\"\n      data-duration=\"5\"\n      data-width=\"1920\"\n      data-height=\"1080\"\n      data-no-timeline\n    >\n      <img\n        id=\"product\"\n        class=\"clip\"\n        data-start=\"0\"\n        data-duration=\"5\"\n        data-track-index=\"1\"\n        src=\"./assets/product.png\"\n      />\n    </div>\n  </body>\n</html>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "选择最小的集成界面",
    "p": "",
    "paras": [
     "| 应用必须做什么 | 从这里开始 | 第一个有用成果 |",
     "| - | - | - |",
     "| 校验、预览、渲染或自动化项目 | CLI | 检查并渲染一个已知项目 |",
     "| 查询和更改组合 HTML | SDK | 找到一个元素，修改它并保存 |",
     "| 嵌入可寻址的组合 | Player | 在页面中播放和寻址一个组合 |",
     "| 构建编辑器 | SDK + Player | 编辑源并在实时预览中反映 |",
     "| 从 Node 服务渲染 | Producer | 把一个组合变成_encoded 文件 |",
     "| 控制帧捕获或构建渲染基础设施 | Engine | 从可寻址页面捕获精确帧 |",
     "| 运行托管或分布式渲染 | Cloud、Lambda 或 Cloud Run | 提交一个项目并取回结果 | 当 CLI 已经能完整完成工作时，不要从渲染引擎开始。当应用只需要播放时，不要添加 SDK。"
    ],
    "codeBlocks": []
   },
   {
    "h": "CLI：操作完整项目",
    "p": "",
    "paras": [
     "CLI 是最高层级的技术界面。它创建项目、打开 Studio、校验组合、捕获审阅帧、渲染文件、发布项目，并驱动云端渲染后端。",
     "日常命令请使用 [CLI 指南](https://hyperframes.heygen.com/developers/cli.md)，标志和自动化请使用 [完整 CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes check\nnpx hyperframes render --output video.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "SDK：检查和编辑",
    "p": "",
    "paras": [
     "`@hyperframes/sdk` 打开组合 HTML，为元素提供稳定的 `data-hf-id` 标识，应用类型化编辑操作，输出 JSON patch，支持撤销和重做，并通过适配器持久化。",
     "适用于智能体、后端任务、自定义编辑器、版本化模板系统，或任何必须更改源而不仅仅播放它的应用。",
     "从 [SDK 快速入门](https://hyperframes.heygen.com/sdk/quickstart.md) 开始。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\nconst html = `<div class=\"clip\" data-start=\"0\" data-duration=\"5\"\n  data-hf-id=\"hf-title\">Old title</div>`;\n\nconst comp = await openComposition(html);\ncomp.setText(\"hf-title\", \"A new title\");\nconst updatedHtml = comp.serialize();",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "Player：嵌入和寻址",
    "p": "",
    "paras": [
     "`@hyperframes/player` 是一个 Web 组件，在隔离的 iframe 中加载组合，并提供类似视频的播放控制。",
     "使用其 JavaScript API 播放、暂停、寻址、改变播放速率，并监听时间轴事件。它不编辑或渲染组合。",
     "参见 [Player 参考](https://hyperframes.heygen.com/packages/player.md)。"
    ],
    "codeBlocks": [
     {
      "code": "<script\n  type=\"module\"\n  src=\"https://cdn.jsdelivr.net/npm/@hyperframes/player\"\n></script>\n\n<hyperframes-player\n  src=\"/compositions/intro.html\"\n  controls\n></hyperframes-player>",
      "file": "HTML TITLE=\"INDEX.HTML\" THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染：选择需要的层",
    "p": "",
    "paras": [
     "大多数应用应从 CLI 或 Producer 开始。只有在构建专用捕获或渲染系统时才使用 Engine。",
     "使用 [渲染基础设施](https://hyperframes.heygen.com/deploy/overview.md) 对比托管、本地和自管路径。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**CLI** — 完整本地和自动化渲染。",
     "**Producer** — Node 渲染流水线：捕获、编码和音频混合。",
     "**Engine** — 更低层级的可寻址页面捕获和精确帧控制。",
     "**托管云** — 无需运营 Chrome 或 FFmpeg 的托管渲染。",
     "**AWS Lambda 或 Google Cloud Run** — 由你部署和控制的基础设施。"
    ]
   },
   {
    "h": "完整的思维模型",
    "p": "",
    "paras": [
     "每个界面都基于同一源工作。选择能产生应用所需结果的最小层，只有当更高层级移除你真正需要的控制时，才下移到更低层。"
    ],
    "codeBlocks": [
     {
      "code": "composition → inspect or edit → play or render",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[基于 HyperFrames 构建](https://hyperframes.heygen.com/developers/index.md)",
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts/index.md)"
    ]
   }
  ]
 },
 "dev-share-source": {
  "lede": "`hyperframes share` 可以将可编辑项目文件附加到与 Desktop 共用的同一评审页面。源码上传要求每次上传（包括更新）都带 `--include-source`。不带它时，终端、JSON 与无人值守命令只分享视频。本地 Studio 在创建或更新分享前提供一个未勾选的 **Include editable project files** 选项，并披露上传范围。",
  "sections": [
   {
    "h": "哪些内容会被带上",
    "p": "",
    "paras": [
     "源码使用与 Desktop 相同的可移植项目策略：手写 HTML、脚本、样式、素材以及受支持的 Studio 编辑元数据。已知凭据文件名（如 `.env`、`.npmrc` 与 `*.pem`）、依赖目录、聊天记录、本地分享状态和已记录的渲染输出不会包含在内。",
     "这些是文件名规则，不是密钥扫描器。`.gitignore` 不控制源码捕获。即使 Git 会忽略，其他普通文件也可以包含进来。请把私密材料放在项目之外，或在不想上传项目文件时使用 `--video-only`。不支持的符号链接和无效文件名会中止源码准备，而不是悄悄产出不完整的可编辑项目。",
     "要排除临时文件，在项目根目录添加 `.hyperframesignore`： 每行排除该文件或文件夹及其内容，不进入源码捕获与分享变更检测。空白行与以 `#` 开头的行会被忽略。使用带 `/` 分隔符的路径或单个 `*` 通配符（例如 `*.log` 或 `scratch/*.json`）。Basename 模式在每个文件夹中都适用。否定、绝对路径以及排除 `index.html` 会被拒绝。不要排除你的合成在用的素材。这些规则只能排除文件，不能重新包含凭据或其他被可移植项目策略阻止的文件。",
     "云渲染以 gitignore 语法读取同一文件，因此它可能包含本读取器拒绝的规则，例如 `/exports/` 或 `**/*.mov`。源码捕获以及其他选取项目文件上传的功能随后会以错误停止。变更检测仍有效并忽略该文件的规则，因此这些文件仍计为变更。",
     "上传使用工作区的文件数、单文件、项目大小与 manifest 上限。大型媒体分片上传。只有已验证发布、且仍与渲染项目一致的快照才能附加到视频版本。CLI 会检查渲染素材内容，包括保持文件大小与时间戳不变的变更。部署必须在 `HYPERFRAMES_REVIEW_UPLOAD_ORIGINS` 中包含确切的源码存储源Alongside视频存储源。"
    ],
    "codeBlocks": [
     {
      "code": "# Literal paths, relative to the project root\nout.json\nscratch/",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "中断的上传与不可用的源码",
    "p": "",
    "paras": [
     "网络中断后重试同一命令。其本地记录保留合成标识、上传幂等键与已完成的文件分片。存储上传若 60 秒无进展会被停止，并在重试上限内重试。源码记录位于 `.hyperframes/share-sync.<backend-hash>.json`，不含登录 token。不要将该记录复制到另一个项目或编辑其账户、工作区或路径：不匹配会停止分享，以免覆盖另一个项目的源码。",
     "若源码已变更、与另一快照冲突，或仍在验证中，命令会说明停止原因。解决问题后重试，或传 `--video-only` 只分享渲染视频。意外的源码上传失败绝不会悄悄把可分享源码的分享降为仅视频。若服务器确认上传已过期或失败，重试会开始新的上传。若文件在先前上传仍挂起期间变更，CLI 会先取消该上传再开始新上传。它会等待已在验证中的上传，并保留冲突待显式解决。",
     "仅视频的重试不会恢复已包含源码的中断视频上传。重试前检查其状态。要在先前上传完成后将同一渲染作为新的仅视频版本发布，使用 `hyperframes share --update --video-only`。先前版本保留其文件。",
     "`--status` 只读取评审，不上传任何内容。其源码状态为 `not_checked`；它不承诺本地文件与已分享版本一致。上传结果在源码验证与附加准备完成后才使用 `ready`；视频就绪仍是单独的顶层 `ready` 字段。"
    ],
    "codeBlocks": []
   },
   {
    "h": "被拒绝的上传",
    "p": "",
    "paras": [
     "被拒绝的上传会保存在本地，因此 `--status` 会报告失败，CLI 重启后亦然。用相同命令重试未完成的首次分享；用 `--update` 替换已分享的视频。结果仍未知的上传会保留其恢复记录，以避免创建重复版本。",
     "`export_blocked` 表示近期内容审核违规阻止了该工作区的新视频版本。请联系 HeyGen 支持申诉。重新渲染、更改受众或拥有付费套餐都不会解除该限制。`can_register_project` 描述项目额度资格，不代表上传视频的审核许可。",
     "`--manage` 要求已有分享。受众参数用于首次分享创建，不能与 `--status`、`--manage` 或 `--update` 组合。每一步都会向 stderr 写入进度；`--json` 会抑制进度与无关的技能更新提示。仅在诊断渲染初始化问题时设置 `HF_DEBUG_RENDER=1`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "集成另一个本地宿主",
    "p": "",
    "paras": [
     "`@hyperframes/share` 导出 `shareSources` 与 `createProjectShareSourceStore`。在 `addVersion` 之前调用 `prepare(projectPath, renderedFingerprint)`，然后传入 `filesForExport` 与 `requireSource: true` 以获得就绪的源码结果。`requireSource` 可防止后续不匹配把结果降为仅视频版本。传入 `omitSource: true` 表示仅视频操作，且不得复用带源码的版本或挂起的上传。",
     "宿主可注入其既有 binding store，或为 Desktop binding 提供只读 `existingBinding` 解析器。精确快照只能在同一账户与属主工作区复用，且不得有挂起的同步操作。Desktop 拥有的 binding 中的未同步变更需要先经 Desktop 同步。独立 CLI 使用自己的项目本地同步记录；它不发现也不修改 Desktop 的应用数据目录。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "分享默认排除临时 `*.log` 与 `*.swp` 文件，渲染变更检测与上传项目文件均如此。其他文件仍作为输入，因为合成可能动态加载它们。无效规则会报告 `invalid_source_ignore`；分享会停止，而不是悄悄上传被排除的文件。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI reference](https://hyperframes.heygen.com/packages/cli.md#share) — audiences, updates, and processing status.",
     "[CLI guide](https://hyperframes.heygen.com/developers/cli.md) — choose the command for your task."
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[Frame sources](https://hyperframes.heygen.com/guides/frame-sources.md)",
     "[Share-Sheet Carousel](https://hyperframes.heygen.com/catalog/blocks/share-sheet-carousel.md)"
    ]
   }
  ]
 },
 "editor-assets": {
  "lede": "用 **Assets** 管理媒体文件。用 **Catalog** 获取可复用的视觉场景和组件。",
  "sections": [
   {
    "h": "导入素材",
    "p": "",
    "paras": [
     "保持清晰的文件名。`product-dashboard-dark.png` 比 `Screenshot 42.png` 更易于复用。"
    ],
    "codeBlocks": [],
    "bullets": [
     "打开 **Assets**。",
     "选择 **Import media**，或把文件拖到面板中。",
     "在加入项目之前先预览它。",
     "把它拖到时间轴，或从相关检查器控件中使用它。"
    ]
   },
   {
    "h": "复用项目素材",
    "p": "",
    "paras": [
     "**This project**（此项目）包含当前打开项目可用的文件。**All projects**（所有项目）是全局 `~/.media` 缓存的只读索引，跨项目可以重新找到已解析的媒体。它不是文件管理器，因此不能从该视图删除或替换文件。",
     "如果大视频仍在准备预览或代理，请先等该进程完成，再判断播放性能。"
    ],
    "codeBlocks": []
   },
   {
    "h": "添加 Catalog 条目",
    "p": "",
    "paras": [
     "打开 **Catalog**，搜索或选择分类（**Captions**、**Code Animations**、**VFX**、**Transitions**、**Effects**），并预览所需内容。凡是提供 **Add** 的地方，选择它即可在播放头处放置；或选择 **Ask agent**，复制一个现成的请求给你的智能体，由它把条目适配到你的合成中。然后把示例内容换成你自己的，并匹配项目的时序和外观。",
     "浏览完整 [Catalog](https://hyperframes.heygen.com/catalog.md) 以便比较分类和各个示例。",
     "[!TIP] 可复用不等于已完成。删除不支持你故事的示例内容和装饰性动态。"
    ],
    "codeBlocks": []
   },
   {
    "h": "编辑字幕",
    "p": "",
    "paras": [
     "当合成包含字幕时，编辑器会切换到字幕编辑：点击帧上某个词，或在预览下方的字幕轨道中找到它。",
     "![HyperFrames browser editor with one caption word selected, word blocks in the caption rail, and position and transform controls](https://static.heygen.ai/hyperframes-oss/docs/images/studio-captions-panel-v1.jpg)",
     "选中的词会把画布、字幕栏和浏览器编辑器当前保存的控件连接起来。"
    ],
    "codeBlocks": []
   },
   {
    "h": "这里可以改什么",
    "p": "",
    "paras": [
     "选择一个词（Shift 点击可多选），然后在帧上拖动、缩放或旋转它。方向键以 1 像素为单位微调，Shift + 方向键以 10 像素为单位。颜色、不透明度、字号、字重和字体在面板中。这些编辑会自动为你保存，写入 `caption-overrides.json`，在你修改后稍等片刻即保存。"
    ],
    "codeBlocks": []
   },
   {
    "h": "应请智能体做什么",
    "p": "",
    "paras": [
     "措辞、时序、词语如何分行以及字幕风格本身都在字幕源文件中，不在编辑器里。请智能体处理（例如“把字幕拆成两词一组”“修正 HeyGen 的拼写”），或直接修改源文件。",
     "然后有声看一次、无声看一次：人名和数字正确，没有遮住脸或按钮，最后一条字幕干净地退出。对于可复用的样式，浏览 [字幕组件](https://hyperframes.heygen.com/catalog/components/caption-highlight.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "使用变量",
    "p": "",
    "paras": [
     "变量让一个项目可以生成许多版本，而无需重建布局或动画。",
     "![HyperFrames browser editor showing a composition beside the Variables panel with Title, Subtitle, and Background inputs](https://static.heygen.ai/hyperframes-oss/docs/images/studio-variables-panel-v1.jpg)",
     "当前 Variables 面板会在真实合成旁预览数值。"
    ],
    "codeBlocks": []
   },
   {
    "h": "创建一个可复用的输入",
    "p": "",
    "paras": [
     "最快的方法从画布开始： 在绑定到现有变量之前，浏览器编辑器会显示其已保存的默认值；对对象值会使用字体名或图片 URL。",
     "对于不与选中元素绑定的值，点击 **Add variable**。浏览器编辑器支持 string、number、color、boolean、enum、font 和 image 变量。Number 变量可以包含最小值、最大值和步进值；enum 可以定义允许的选项。",
     "按含义命名输入——例如 `customerName`、`headline` 或 `brandColor`，而不是按其在设计中的位置。"
    ],
    "codeBlocks": [],
    "bullets": [
     "选择元素。",
     "在右面板打开 **Variables**。",
     "绑定文字、媒体源、文字颜色、背景或字体属性。",
     "创建新变量，或选择一个兼容的现有变量。"
    ]
   },
   {
    "h": "在不改变模板的情况下预览",
    "p": "",
    "paras": [
     "在 Variables 面板中改动数值即可立即预览该版本。预览是覆盖层：不会替换已保存的默认值。",
     "面板会告诉你预览的是默认值还是自定义值。使用 **Reset** 清除所有预览覆盖。希望标量预览成为新的默认值时，使用 **Set default**。",
     "使用 **Edit** 修改变量的标签、说明或已保存默认值。对于 font 和 image 对象，**Default** 编辑字体名或图片 URL。保存会保留字体来源、图片 alt 文本和 fit，以及任何其他存储元数据，包括只改标签或说明时也是如此。",
     "[!NOTE] 其他合成的变量会单独列出。可以编辑其声明，但在当前合成中不会实时预览其值。"
    ],
    "codeBlocks": []
   },
   {
    "h": "交接项目",
    "p": "",
    "paras": [
     "在面板底部，**Use this template** 可以复制： 这样你刚查看的数值就依附在渲染请求上，下一个人不必重新拼凑。"
    ],
    "codeBlocks": [],
    "bullets": [
     "当前生效值为 JSON；",
     "现成的 `npx hyperframes render ... --variables ...` 命令。"
    ]
   },
   {
    "h": "测试回退",
    "p": "",
    "paras": [
     "有用的模板能经受真实的变化。交接之前，请测试： 关于 schema、HTML 绑定和批量渲染示例，请阅读 [Variables](https://hyperframes.heygen.com/concepts/variables.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "长句和短句名称或标题；",
     "图片宽高比；",
     "颜色对比度；",
     "数字格式；",
     "缺少可选值的情况。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Variable Axis Type](https://hyperframes.heygen.com/catalog/components/variable-axis-type.md)",
     "[Camera Follow Captions](https://hyperframes.heygen.com/catalog/components/caption-camera-follow.md)",
     "[Weight Wave](https://hyperframes.heygen.com/catalog/blocks/weight-wave.md)"
    ]
   }
  ]
 },
 "editor-audio": {
  "lede": "浏览器编辑器自带完整的混音台。每条音频轨道都有一个效果架：决定它可以占据哪些频率的滤镜、决定其电平如何表现的动态、改变波形形状的个性效果，以及把声音放到某处的空间效果。",
  "sections": []
 },
 "editor-canvas": {
  "lede": "适用于当前帧中可以指着的任何内容。",
  "sections": [
   {
    "h": "选中它",
    "p": "",
    "paras": [
     "在元素完全可见的位置暂停并点击它。如果选中了错误的物体（或它被隐藏、在帧外、或在组内），改为在 **Layers** 标签页中选取。选择在预览、面板和时间轴中是同一个。"
    ],
    "codeBlocks": []
   },
   {
    "h": "改变它",
    "p": "",
    "paras": [
     "在预览上：在选中框内拖拽可移动它，拖动控制柄可缩放，使用旋转控件，裁剪图片或视频而不移动其边框，用方向键微调。发生吸附时会显示参考线。",
     "对于精确数值，使用 **Design**。其分组取决于所选内容：",
     "| 需要 | 在 Design 中查看 |",
     "| - | - |",
     "| 改措辞或排版 | Text |",
     "| 设置位置、大小、间距或对齐 | Layout |",
     "| 改填充、边框、圆角、阴影、不透明度或效果 | Style |",
     "| 替换或适配图片、视频或音频源 | Media |",
     "| 调整透视或 3D 变换 | Layout (3D Transform) |",
     "| 修正图片或视频的外观 | Grade |",
     "| 改变时序或动画 | Motion |",
     "| 应用外观或媒体特效 | Effects | 每次只做一类修改，播放一遍，再决定下一处。",
     "[!WARNING] **Auto-record manual edits as keyframes**（自动将手动编辑录制为关键帧）默认开启，因此在一帧上移动物体可能会不知不觉变成动画。",
     "要做一处在整个片段中都应保持的修正，请在时间轴工具栏中关闭它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "图层、群组和嵌套场景",
    "p": "",
    "paras": [
     "在 **Layers** 中拖拽可改变前后关系。时间轴轨道管的是时间，不是叠放顺序。用 **⌘G** 把一起移动的东西编组（解组用 **⌘⇧G**）。打开嵌套场景来改场景本身；停留在父场景中只改它出现的位置或时机。"
    ],
    "codeBlocks": []
   },
   {
    "h": "替换媒体",
    "p": "",
    "paras": [
     "选中图片、视频或音频，从 Design 的 **Media** 或 **Assets** 中更换文件。然后检查裁剪、长度和切入切出：新文件可能有不同的形状或时长。"
    ],
    "codeBlocks": []
   },
   {
    "h": "播放检查",
    "p": "",
    "paras": [
     "从编辑前播放到编辑后：最终尺寸下仍可读，没有遮住重要内容，入场和出场仍然有效，文字在经过的每个背景上都可读。⌘Z 可撤销。"
    ],
    "codeBlocks": []
   },
   {
    "h": "无法在此编辑时",
    "p": "",
    "paras": [
     "某些生成或嵌套元素无法暴露全部属性。尝试在 Layers 中选中确切的父级或子级，或打开嵌套场景。否则选择 Design 中的 **Ask agent about this element**（它会复制该元素和你的请求给智能体），或直接提出更大的改动："
    ],
    "codeBlocks": [
     {
      "code": "Keep this scene's content, but rebuild its layout so the product stays readable at phone size.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "用关键帧制作动画",
    "p": "",
    "paras": [
     "关键帧是某一时刻的一个值；动态发生在两个关键帧之间。关键帧在时间轴上显示为菱形。",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-animation-keyframe-loop-v1.mp4#t=0.1\" poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-animation-keyframe-loop-v1.jpg\" autoPlay muted loop playsInline preload=\"metadata\" />",
     "选中元素，放置播放头，并添加关键帧。"
    ],
    "codeBlocks": []
   },
   {
    "h": "先读懂动态",
    "p": "",
    "paras": [
     "选中元素，在时间轴上展开其动画通道，并从移动前播放到移动后。先说出真正的问题：开始太晚、花太久、路径错了、或变速方向错了。每种需要不同的修正方法。"
    ],
    "codeBlocks": []
   },
   {
    "h": "添加、移动或删除关键帧",
    "p": "",
    "paras": [
     "把播放头放在时刻上，选择 **Add keyframe at playhead**（或选中元素后按 **K**），然后改属性。拖动菱形来改时序（离得越近越快），改其值，或按 **Delete**。",
     "开启 **Auto-record manual edits as keyframes**（默认）后，你在播放头处的任何改动都成为关键帧。这就是摆出两个时刻的快捷方式：设第一个，移动播放头，设第二个，播放。要做一处在整个片段都应保持的修正时关闭它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "录制手势",
    "p": "",
    "paras": [
     "当动态用表演比用描述更容易时：选中元素，按 **R**（**Record a gesture**），移动指针，再次按 **R**。拖拽录制位置，滚动录制深度；快捷键面板列出旋转、不透明度和缩放的按键。把它当作第一遍：简化路径并重新定时间。"
    ],
    "codeBlocks": []
   },
   {
    "h": "智能体写的动态",
    "p": "",
    "paras": [
     "某些动态来自代码中的循环或辅助函数。**Unroll to edit** 可以把受支持的情况变成普通关键帧。当值显示 **Computed value. Edit it in the Code tab.** 时，只能在代码中更改，或请智能体处理：",
     "好的动态会揭示、指向或连接；文字有时间被读完；两个无关的移动不在同一时刻争抢。代码层面的规则见 [GSAP 动画指南](https://hyperframes.heygen.com/guides/gsap-animation.md)。"
    ],
    "codeBlocks": [
     {
      "code": "Keep the same curved route, but make the move finish with the voiceover instead of two beats later.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "编辑源文件",
    "p": "",
    "paras": [
     "浏览器编辑器、智能体和 CLI 都在同一批文件上工作。小改动且你能看懂时用 **Code**；跨文件、改变结构或从不认识的错误开始时用智能体。（在 [Studio 应用](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md) 中智能体就在预览旁边，因此不需要下面复制的那些步骤。）"
    ],
    "codeBlocks": []
   },
   {
    "h": "选择最小的安全编辑面",
    "p": "",
    "paras": [
     "| 改动 | 最好的起点 |",
     "| - | - |",
     "| 可见文字、布局、样式、媒体、时序或受支持的动态 | Canvas、Inspector 或时间轴 |",
     "| 已知文件中已知的一个值 | Code |",
     "| 故事、多场景、生成的动画或项目结构 | Agent |",
     "| 报告的 Lint 问题且有明确直接的修复方法 | 浏览器编辑器或 Code |",
     "| 不熟悉的失败或跨文件的修复 | 复制到 Agent | 选择是关于改动本身，不是永久的工作流。你可以互换界面，无需导出或转换项目。"
    ],
    "codeBlocks": []
   },
   {
    "h": "做出聚焦的源文件修改",
    "p": "",
    "paras": [
     "编辑会自动保存并可撤销。如果保存失败，编辑器会说明；请先修复与预览服务器的连接，再继续。",
     "[!WARNING] 创建、重命名、移动或删除文件会破坏项目其他地方的引用。",
     "搜索旧路径，或请智能体更新每一处引用。",
     "不要同时在此处和其他工具中编辑同一文件。如果对方改动先落下，你的保存会被拒绝并提示消息；重新加载文件，看改了什么，再次应用你的编辑。"
    ],
    "codeBlocks": [],
    "bullets": [
     "在左面板列中打开 **Code**。",
     "在项目树中选择确切文件。",
     "找到导致可见结果的值。",
     "做一处聚焦修改。",
     "等预览刷新，然后播放受影响的时刻。"
    ]
   },
   {
    "h": "就选中元素提问",
    "p": "",
    "paras": [
     "当可见元素需要改源文件时，选中它并选择 **Ask agent about this element**。浏览器编辑器会准备好元素和项目上下文，与你的指令结合，并把提示复制到剪贴板。把那段提示粘贴到智能体对话中。",
     "![HyperFrames browser editor dialog for copying a prompt about the selected element and project context](https://static.heygen.ai/hyperframes-oss/docs/images/studio/ask-agent-v1.jpg)",
     "浏览器编辑器会为选中元素准备提示；你把它粘贴到智能体对话中。",
     "复制的上下文会告诉智能体去哪看。你的一句话会告诉它什么必须保持成立。"
    ],
    "codeBlocks": [
     {
      "code": "Keep the current narration and scene order. Make this product panel readable\nat the final video size, and do not change the following scene.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "运行 Lint",
    "p": "",
    "paras": [
     "选择左面板列底部的 **Lint**。浏览器编辑器会打开 **HyperFrame Lint Results**，显示错误、警告、文件位置，以及可用时的修复提示。",
     "直接修复简单且已懂的问题，然后再次运行 Lint。当源位置不熟悉或修复可能影响其他文件时，使用 **Copy to Agent**。把错误发生前你的动作和预期结果也写上： 不要只粘贴错误信息，当预期结果很重要时。技术上成立的修复仍可能做错创意修改。"
    ],
    "codeBlocks": [
     {
      "code": "This appeared after I shortened the intro clip. I expected the title animation\nto keep its current timing. Fix the issue without changing the rest of the\nopening.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "交付前使用项目级门禁",
    "p": "",
    "paras": [
     "Lint 是编辑器内的快速检查。项目级命令仍是最终门禁，尤其当项目包含嵌套合成时： `lint` 检查合成结构。`check` 另外验证浏览器、运行时、布局、动态和 WCAG 对比度。",
     "检查通过不等于故事或最终编码已获批准。源文件修复后请播放项目，并在分享前观看渲染好的文件。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "预览和源文件不一致时",
    "p": "",
    "paras": [
     "编辑器、预览和渲染队列故障见 [故障排查](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。完整的批准、验证、渲染和交付路径见 [完成和分享](https://hyperframes.heygen.com/guides/export-and-share.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "停止编辑，直到最新保存完成。",
     "保留第一个确切错误或保存警告。",
     "仅在检查其他工具是否改过文件之后，再重载项目。",
     "运行项目检查。",
     "带错误、项目路径、导致它的操作和预期结果向智能体提问。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[在浏览器编辑器中编辑](https://hyperframes.heygen.com/studio/index.md)",
     "[Canvas & Preview Integration](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)",
     "[Editing Affordances](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md)"
    ]
   }
  ]
 },
 "editor-export": {
  "lede": "顶部的 **Export** 会立即开始渲染，使用右侧 **Renders** 面板中的设置。所以请先设置好这些。",
  "sections": [
   {
    "h": "设置文件",
    "p": "",
    "paras": [
     "| 设置 | 选择 |",
     "| - | - |",
     "| **Format** | 分享和上传选 **MP4**；用于 Web 和透明叠加选 **WebM**；其他编辑器需要高质量母版时选 **MOV**（ProRes） |",
     "| **Resolution** | **Auto** 保持项目尺寸。更大的渲染更慢，也不会让低分辨率镜头变清晰 |",
     "| **Frame rate** | 默认 30，除非目标或镜头需要 24 或 60 |",
     "| **Quality** | MOV 时隐藏，因为它始终使用 ProRes 质量 |",
     "| **Use GPU encoding** | 在支持的机器上更快 | 设置旁的 **About video formats** 会解释这些选择。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染队列",
    "p": "",
    "paras": [
     "每次导出在 **Renders** 中成为一行，带进度。可以取消正在运行的导出，也可以下载或删除已完成的导出，还可以用 **Hide finished** 整理列表而不删除文件。",
     "发送之前：打开文件本身，观看开头和结尾，在最忙的时刻检查字幕、剪辑和声音，并给它起一个能说明是哪个版本的名字。如果渲染失败，保留错误并查看 [故障排查](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "构建幻灯片",
    "p": "",
    "paras": [
     "幻灯片是实时可导航的演示——不是一条线性视频。当活动合成包含 HyperFrames 幻灯片清单时，会出现 **Slideshow** 标签页。",
     "![HyperFrames browser editor showing three main-line slides in the Slideshow panel beside the deck timeline](https://static.heygen.ai/hyperframes-oss/docs/images/studio-slideshow-panel-v1.jpg)",
     "Slideshow 面板基于真实场景构建主路线，然后再加入可选分支。"
    ],
    "codeBlocks": []
   },
   {
    "h": "构建主路径",
    "p": "",
    "paras": [
     "先确定大家都应该看到的路线： 浏览器编辑器会把幻灯片修改保存到项目清单中。备注在短暂延迟后保存；其他编辑立即保存，并参与项目历史。"
    ],
    "codeBlocks": [],
    "bullets": [
     "在 **Slides** 中勾选属于主演示的场景。",
     "用箭头把它们排到顺序位置。",
     "选中每张幻灯片，确认它独立表达一个完整要点。",
     "在 **Slide Inspector** 中添加帮助演讲者而不是重复幻灯片的备注。"
    ]
   },
   {
    "h": "添加分段揭示",
    "p": "",
    "paras": [
     "把播放头移到演示应该暂停的时刻，然后点击 Slide Inspector 中的 **Mark**。该时间会成为选中幻灯片的片段停留点。",
     "在演讲者需要完整揭示一个要点之前先分段呈现时，使用片段。并非每条要点都需要停留点。"
    ],
    "codeBlocks": []
   },
   {
    "h": "添加可选路径",
    "p": "",
    "paras": [
     "分支把可选细节保留在主故事之外： 删除分支会移除该分支定义和指向它的每个热点，因此浏览器编辑器会先要求确认。源场景仍保留在项目中。"
    ],
    "codeBlocks": [],
    "bullets": [
     "打开 **Branches**，给分支命名，并分配其幻灯片。",
     "在出现选择的幻灯片上，在画布中选中可见按钮或对象。",
     "打开 **Hotspot Tool**，选择目标分支，添加有用的标签，并点击 **Make hotspot**。",
     "保留回到主故事的清晰路线。"
    ]
   },
   {
    "h": "作为演示测试它",
    "p": "",
    "paras": [
     "在本地运行演示： 测试下一张/上一张导航、每个片段、每个热点、每个分支以及返回路径。点击 **Present** 或按 **P** 打开同步的观众视图。",
     "[!NOTE] 幻灯片保持交互性。如果结果只应该从头到尾播放为 MP4，请改用 [视频工作流](https://hyperframes.heygen.com/workflows.md)。",
     "如需先用智能体创建演示，再在此处打磨，请按照 [用 AI 制作交互式演示](https://hyperframes.heygen.com/guides/slideshow.md)。"
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
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
     "[导出视频](https://hyperframes.heygen.com/studio-app/export.md)",
     "[更新日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "editor-index": {
  "lede": "有两个编辑器。**[Studio 应用](https://hyperframes.heygen.com/studio-app/index.md)** 是带智能体位于预览旁边的桌面应用：你说出或画出要改的内容。**浏览器编辑器**即本页的内容，用浏览器打开任意项目文件夹手动编辑，同时你的智能体在终端中工作。两者编辑的是同一批文件。",
  "sections": [
   {
    "h": "从哪里开始",
    "p": "",
    "paras": [
     "| 你想改什么 | 从这里开始 |",
     "| - | - |",
     "| 当前帧中能看到的东西 | 在预览中点击它，然后使用 **Design** 或 **Layers** |",
     "| 何时出现或停留多久 | **Timeline**（时间轴） |",
     "| 一次动态 | 动画控件和关键帧 |",
     "| 故事、多场景、结构 | 让智能体处理。**Describe a change to the agent**（⌘K）会把现成的请求复制下来，等你粘贴给它 | 面板可以拖到任意位置；**Window** 可以重新打开已关闭的面板或重置布局。"
    ],
    "codeBlocks": []
   },
   {
    "h": "编辑你所见的画面",
    "p": "",
    "paras": [
     "在问题所在的位置暂停，点击该元素（如果元素重叠，可在 **Layers** 中选取），然后只改这一处。用拖拽来移动、缩放、旋转或裁剪；用 **Design** 设置文字、布局、样式、媒体、动态和颜色。然后完整播放这一刻：看起来正确的一帧在运动中也可能发生碰撞。",
     "[!WARNING] **Auto-record manual edits as keyframes**（自动将手动编辑录制为关键帧）默认开启，因此你在播放头处做出的改动会变为动画。",
     "如果要做一处在整个片中都保持不变的修正，请在时间轴工具栏中关闭它。",
     "更多内容：[编辑帧画面](https://hyperframes.heygen.com/studio/canvas.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "改变时序",
    "p": "",
    "paras": [
     "拖动片段来移动它，拖动边缘来加长或缩短它，并使用 **Split at playhead**（在播放头处拆分）把一个片段切成两半。每次修改后，拖过切点再播放一遍。更多内容：[时间轴](https://hyperframes.heygen.com/studio/timeline.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在预览中平移播放头",
    "p": "",
    "paras": [
     "点击或拖动预览播放控件上方的进度条，即可在视频中移动位置。它在隐藏时间轴和全屏时仍然可用。当进度条获得焦点时，可使用方向键，或用 Home 和 End 跳到开头和结尾。跳转会像移动时间轴播放头一样暂停播放。"
    ],
    "codeBlocks": []
   },
   {
    "h": "检查与导出",
    "p": "",
    "paras": [
     "运行 **Lint**（左下角），修复它报告的问题，然后在交付前运行完整检查： 选择顶部的 **Export**，或从智能体或命令行渲染，并在分享前先播放一遍成品文件。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "键盘快捷键",
    "p": "",
    "paras": [
     "快捷键取决于当前活动区域。下表为浏览器编辑器播放器、画布和时间轴已实现的快捷键。",
     "按 `?`（Shift + /）从时间轴工具栏打开快捷键面板，再按一次或按 Esc 关闭。在文本输入框中输入时它不起作用。"
    ],
    "codeBlocks": []
   },
   {
    "h": "播放",
    "p": "",
    "paras": [
     "| 快捷键 | 操作 |",
     "| - | - |",
     "| Space | 播放或暂停 |",
     "| J / K / L | 倒放、停止或正放 |",
     "| Left / Right arrow | 单帧步进，或水平微调选中的画布元素 |",
     "| Up / Down arrow | 垂直微调选中的画布元素 |",
     "| Shift + arrow | 水平步进十帧，或更大幅度微调选中元素 |",
     "| M | 静音或取消静音 |",
     "| Shift + L | 切换循环播放 |",
     "| I / O | 设置工作区入点或出点 |",
     "| Shift + I / Shift + O | 清除入点或出点 |",
     "| A / E | 跳到入点或出点 |",
     "| F | 切换全屏 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "编辑",
    "p": "",
    "paras": [
     "| 快捷键 | 操作 |",
     "| - | - |",
     "| V | 选择工具 |",
     "| B | 切换剃刀工具 |",
     "| S | 在播放头处拆分选中的符合条件片段 |",
     "| N | 切换时间轴吸附 |",
     "| Command/Ctrl + Z | 撤销 |",
     "| Command/Ctrl + Shift + Z，或 Ctrl + Y | 重做 |",
     "| Command/Ctrl + C / V / X | 复制、粘贴或剪切选中的元素 |",
     "| Command/Ctrl + G | 编组选中元素 |",
     "| Command/Ctrl + Shift + G | 解组 |",
     "| Delete / Backspace | 删除选中的关键帧或元素 | 获得焦点的区域决定共享快捷键的行为。方向键会微调选中的画布元素；没有可微调的选中项时会逐帧步进；时间轴获得焦点时会移动时间轴目标（见下文 [时间轴导航](#timeline-navigation)）。选中画布元素时，`K` 会在播放头处添加或移除关键帧，为静态元素启动动画，否则停止播放。`J` 始终驱动播放。"
    ],
    "codeBlocks": []
   },
   {
    "h": "时间轴导航",
    "p": "",
    "paras": [
     "先 Tab 进入时间轴再使用这些命令。浏览器编辑器在 Tab 顺序中只保留一个逻辑时间轴目标，并移动该目标，无需让每一行或每个片段都保持挂载。",
     "| 快捷键 | 操作 |",
     "| - | - |",
     "| Left / Right arrow | 在聚焦行中移动到上一个或下一个目标 |",
     "| Up / Down arrow | 移动到上一行或下一行逻辑行中相同时间的最近目标 |",
     "| Home / End | 移动到聚焦行的开头或结尾 |",
     "| Command/Ctrl + Home / End | 移动到第一个或最后一个逻辑行 |",
     "| Page Up / Page Down | 按一页可见逻辑行移动 |",
     "| Enter / Space | 在聚焦轨道行上展开或折叠关键帧属性通道 |",
     "| Context Menu 或 Shift + F10 | 在可用时打开聚焦目标的上下文菜单 | 在可展开的轨道行上，右箭头展开折叠的关键帧通道，左箭头折叠展开的通道。从关键帧属性行中，左箭头返回其父轨道行。当没有披露或父级操作适用时，这些箭头会在行内继续移动。",
     "如果目标在虚拟视口之外，浏览器编辑器会把它滚动入视图，并在挂载后恢复焦点。"
    ],
    "codeBlocks": []
   },
   {
    "h": "关键帧与录制",
    "p": "",
    "paras": [
     "| 快捷键 | 操作 |",
     "| - | - |",
     "| K | 在当前选择支持时，在播放头处添加或移除关键帧 |",
     "| R | 开始或停止手势录制 | 手势录制期间，拖拽录制位置，滚动录制深度，Shift 拖拽录制 3D 旋转，Option/Alt 拖拽录制旋转，Command/Ctrl 拖拽或滚动录制不透明度或缩放。"
    ],
    "codeBlocks": []
   },
   {
    "h": "画布与面板",
    "p": "",
    "paras": [
     "| 快捷键 | 操作 |",
     "| - | - |",
     "| G | 切换画布网格 |",
     "| Command/Ctrl + 1 | 打开 Compositions |",
     "| Command/Ctrl + 2 | 打开 Assets |",
     "| Option/Alt + drag | 移动整个动画路径 |",
     "| Shift + drag a resize handle | 等比缩放 | [!WARNING] 在文本或源代码输入框中输入时，快捷键不应触发。如果焦点区域不对，请先点击画布或时间轴，再使用编辑快捷键。",
     "使用播放控件旁的 **Shortcuts and tools** 按钮查看内置快捷键列表、工作区控件和跳帧输入框。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[用变量复用设计](https://hyperframes.heygen.com/concepts/variables.md)",
     "[动态模糊](https://hyperframes.heygen.com/guides/motion-blur.md)"
    ]
   }
  ]
 },
 "editor-timeline": {
  "lede": "时间轴决定每件事何时出现、停留多久。每一次修改都会直接保存到项目文件中。",
  "sections": [
   {
    "h": "移动、裁剪、拆分",
    "p": "",
    "paras": [
     "任何修改之后，都要播放通过它：入场、出场和旁白不会自行改写。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Move：**拖动片段的中部。长度保持不变。",
     "**Trim：**拖动左边缘改变开始时间，拖动右边缘改变结束时间。",
     "**Split：**把播放头放到要切的位置，选择 **Split at playhead**，或按 **B** 使用拆分工具后点击片段（Shift 点击会在该时间拆分所有片段）。按 **V** 返回选择工具。",
     "**Copy、Duplicate、Delete：**右键点击片段。"
    ]
   },
   {
    "h": "工具栏",
    "p": "",
    "paras": [
     "| 按钮 | 作用 |",
     "| - | - |",
     "| **Linked Selection** | 点击和编辑会作用到与被触及片段相连的所有片段，例如视频和它的声音 |",
     "| **Snapping** | 边缘吸附到播放头、其他片段和节拍 |",
     "| **Ripple edit** | 默认开启：在主轨道上删除片段会关闭空隙而不是留下空位 |",
     "| **Audio meters** | 播放时显示电平 |",
     "| **Add keyframe at playhead** / **Auto-record** | 用于动画的关键帧；见 [动画](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes) |",
     "| **Add beat at playhead** | 用于切点的定时标记，与音乐配合很方便 |",
     "| **Select leftward / rightward**（工具菜单中的 **\\[** 和 **]**） | 选择在播放头之前或之后开始的所有片段，用于整体移动一个段落 | 要添加媒体，把文件拖到时间轴上（**Drop media here**）。要在嵌套场景内工作，展开它或打开它，并使用面包屑返回；请确认你改的是其内部时序还是它在整个视频中的位置。",
     "撤销（⌘Z）涵盖移动、裁剪和拆分。",
     "[accordion] 键盘和读屏导航 Tab 进入时间轴，到达其当前逻辑焦点目标。用 Left 和 Right 在该行内移动。用 Up 和 Down 移动到上一行或下一行相同时间的最近目标。",
     "Home 和 End 移动到聚焦行的开头或结尾。按住 Command 或 Ctrl 移动到第一个或最后一个逻辑行。Page Up 和 Page Down 按一页行移动。",
     "在可展开的轨道行上，Right 展开折叠的关键帧属性通道，Left 折叠展开的通道。从关键帧属性行中，Left 返回其父轨道行。Enter 或 Space 切换同样通道。使用 Context Menu 键或 Shift + F10 打开聚焦目标的菜单（当其有菜单时）。",
     "时间轴在 Tab 顺序中只保留一个逻辑时间轴目标。可见性、关键帧操作等原生头部控件仍是独立的 Tab 停止点。当逻辑目标在虚拟视口之外时，浏览器编辑器会保持它挂载、滚动入视图，然后恢复焦点。",
     "读屏软件把时间轴接收为 treegrid。轨道行会播报其层级和展开状态。片段和关键帧会播报其名称、时间和选中状态。缓动控件会播报其名称和时间。",
     "完整列表见 [快捷键](https://hyperframes.heygen.com/studio/index.md#timeline-navigation)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[在画布上编辑](https://hyperframes.heygen.com/studio/canvas.md)",
     "[在浏览器编辑器中编辑](https://hyperframes.heygen.com/studio/index.md)",
     "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)"
    ]
   }
  ]
 },
 "guide-4k": {
  "lede": "npx hyperframes render --resolution 4k --output final-4k.mp4",
  "sections": [
   {
    "h": "将现有项目渲染为 4K",
    "p": "",
    "paras": [
     "HyperFrames 保持合成的布局不变，以更高的设备像素比捕获。1920×1080 的合成会成为 3840×2160 的文件。",
     "竖版或正方形创作使用对应的预设：",
     "| Preset | Output |",
     "| - | - |",
     "| `4k` 或 `landscape-4k` | 3840×2160 |",
     "| `portrait-4k` | 2160×3840 |",
     "| `square-4k` | 2160×2160 |"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --resolution 4k --output final-4k.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "从一开始按 4K 编写项目",
    "p": "",
    "paras": [
     "如果项目从一开始就应使用 4K 画布： 当画布或 WebGL 代码、固定分辨率媒体、或布局决策需要在创作时就知道最终像素尺寸时，选择这种方式。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes init my-video --resolution 4k",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "哪些内容会更清晰",
    "p": "",
    "paras": [
     "| 内容 | 超采样结果 |",
     "| - | - |",
     "| HTML 文本、SVG、CSS 形状、渐变 | 以 4K 重新栅格化 |",
     "| 高分辨率图片 | 使用其可用的源细节 |",
     "| 1080p 图片和视频 | 放大；无新增源细节 |",
     "| `<canvas>` 与 WebGL | 受画布自身尺寸限制 | 要得到完全清晰的 4K 结果，请使用 4K 源媒体，并按目标分辨率确定 canvas/WebGL 缓冲区大小。"
    ],
    "codeBlocks": []
   },
   {
    "h": "约束",
    "p": "",
    "paras": [
     "`--resolution` 仅在以下条件成立时有效： HyperFrames 会在打开浏览器前检查这些条件。组合不受支持时，请按合成原生尺寸渲染，再单独缩放。"
    ],
    "codeBlocks": [],
    "bullets": [
     "预设与合成宽高比相同；",
     "目标是编写尺寸的整数倍；",
     "目标不小于合成尺寸；",
     "输出为 MP4 而非带 alpha 格式；",
     "同一渲染未强制 HDR。"
    ]
   },
   {
    "h": "校验文件",
    "p": "",
    "paras": [
     "横版 4K 的输出应报告 `3840` × `2160`。",
     "4K 捕获的像素数是 1080p 的四倍，请预期渲染耗时、内存占用和输出数据都会增加。先用 `--quality draft` 评审，再用所需质量渲染正式版。"
    ],
    "codeBlocks": [
     {
      "code": "ffprobe -v error -select_streams v:0 \\\n  -show_entries stream=width,height final-4k.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Cloud rendering](https://hyperframes.heygen.com/deploy/cloud.md)",
     "[Render from the command line](https://hyperframes.heygen.com/guides/rendering.md)",
     "[Render HDR video](https://hyperframes.heygen.com/guides/hdr.md)"
    ]
   }
  ]
 },
 "guide-auth": {
  "lede": "你可以在无账号的情况下本地创建与渲染。无提供方密钥时，语音与音乐可退回本地引擎。想玩 HeyGen 语音与音乐、托管云渲染、托管 MCP，或拥有将来可更新的已发布项目时，再登录。",
  "sections": [
   {
    "h": "登录",
    "p": "",
    "paras": [
     "登录与注册是相同的 OAuth 步骤——新用户会落到注册界面。",
     "**1. 登录** 默认流程会打开浏览器进行 OAuth，并在本地回环端口捕获 token： CI 或无头机器改用长期有效 API 密钥： **2. 确认已配置** 显示当前凭据的来源与已验证身份；登录状态之外，还会显示语音与音乐将使用的本地引擎。脚本中加 `--json` 可得 `{ configured, recommended_action, offline_engines }`。",
     "HyperFrames 使用自己的公共 OAuth 客户端，并将凭据保存在 `~/.hyperframes/credentials`（权限 `0600`）。从共享 HeyGen 登录升级后请重新登录。独立的 [`heygen` CLI](https://github.com/heygen-com/heygen-cli) 在 `~/.heygen` 中保留自己的登录；HyperFrames 不会移动或删除它。已登录的 HyperFrames 会话优先于环境中的 `HEYGEN_API_KEY`。环境密钥只在无登录会话、HeyGen 拒绝刷新会话，或宿主应用经自有网关路由调用时使用。过期会话永远不会改选已保存的 API 密钥。从环境或 `auth login --api-key` 来的 API 密钥，选择 API 密钥计费。",
     "`auth status` 会验证身份。对专用 HyperFrames OAuth 登录，它会报告计费产品，但 HyperFrames 余额在此不可用：`/v3/users/me` 返回的是通用 HeyGen 账户计费字段。这些原始字段保留在 JSON 中，不会呈现为 HyperFrames 余额。宿主注入或自定义客户端 OAuth 报告为未验证计费产品。",
     "[!TIP] 本地试用 HyperFrames 无需账号。无凭据时，语音可用 **Kokoro**，音乐可用 **MusicGen**——见[离线工作](#working-offline)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes auth login\n# ✓ Signed in.",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes auth login --api-key            # hidden-input prompt\necho \"$HEYGEN_API_KEY\" | npx hyperframes auth login --api-key   # from stdin",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes auth status",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "HeyGen 凭据解析",
    "p": "",
    "paras": [
     "捆绑的音频脚本为托管 TTS 与音乐/音效检索使用 HeyGen 凭据。解析顺序先匹配先用： 就近的项目 `.env` 可提供密钥，但永不提供 `HEYGEN_API_BASE`。用 `HYPERFRAMES_CONFIG_DIR` 指向不同配置目录。脚本不能刷新会话；`hyperframes` CLI 自有命令遵循相同顺序，先刷新过期会话。见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。当 `media-use` 调用独立的 `heygen` 可执行文件时，它提供只含所选访问 token 的隔离临时凭据。该辅助函数不能刷新 HyperFrames 授权，也不能拾取其他 HeyGen 登录。"
    ],
    "codeBlocks": [],
    "bullets": [
     "`HEYGEN_API_BASE` 加 `HEYGEN_API_KEY`——宿主应用自有网关，由启动工作流的应用设置",
     "`HEYGEN_ACCESS_TOKEN`——宿主应用注入的 OAuth token",
     "`hyperframes auth login` 保存在 `~/.hyperframes/credentials` 的会话，未过期时",
     "`HEYGEN_API_KEY`——环境变量",
     "`HYPERFRAMES_API_KEY`——别名，与其他工具对齐",
     "`hyperframes auth login --api-key` 保存在 `~/.hyperframes/credentials` 的 API 密钥"
    ]
   },
   {
    "h": "代理工作流使用的提供方",
    "p": "",
    "paras": [
     "工作流登录预检之后，每种媒体能力按其顺序使用首个可用提供方。语音、音乐与音效有离线兜底；捕获描述可选，无受支持视觉密钥时跳过。",
     "| Capability | Provider order | Key(s) — first match wins | Local dependency |",
     "| - | - | - | - |",
     "| **语音 (TTS)** | HeyGen → ElevenLabs → Kokoro | HeyGen 凭据（上）· 其次 `ELEVENLABS_API_KEY` | Kokoro：`pip install kokoro-onnx soundfile` |",
     "| **音乐 (BGM)** | HeyGen 库 → Lyria → MusicGen | HeyGen 凭据（上）· 其次 `GEMINI_API_KEY` → `GOOGLE_API_KEY` | MusicGen：`pip install transformers torch soundfile numpy` |",
     "| **音效** | HeyGen 库 → 捆绑库 | HeyGen 凭据（上） | 捆绑——无依赖 |",
     "| **捕获描述** | OpenRouter → Gemini | `OPENROUTER_API_KEY` → `GEMINI_API_KEY` | 无；可选，供[网站捕获](https://hyperframes.heygen.com/guides/product-launch-video.md) |",
     "运行 `npx hyperframes doctor` 检查本地依赖安装情况。媒体工作流会在生成前运行 `hyperframes auth status`，并告知将走哪条路径。",
     "Gemini 旁白请明确让代理用 Gemini TTS。共享音频工作流支持 3.8 Flash、Flash-Lite、3.1 Flash Preview、2.5 Pro 与 Flash Preview。Gemini 是明确选项；配置凭据不会改变上面的自动语音提供方顺序。",
     "选择一种身份验证方式： 凭据按该顺序解析：Gemini 密钥、Google 密钥、服务账号文件、JSON 环境变量。选服务账号 OAuth 时取消设置 API 密钥。辅助函数每次生成用 `generative-language.retriever` scope 取新 token。密钥与 token 永不放入合成或已保存音频元数据。",
     "两种方式都调用 Gemini Developer Interactions API。你的项目需要访问该 API 与请求模型。Cloud Text-to-Speech 与 Vertex AI 模型可用性不同。本辅助函数接受服务账号 JSON，不接受用户 ADC 文件或元数据服务器凭据。",
     "见 [Gemini 旁白](https://hyperframes.heygen.com/prompting/media-and-audio.md#gemini-voiceover)。",
     "[!NOTE] `npx hyperframes tts` 本身是本地 Kokoro CLI。托管 HeyGen、ElevenLabs 与 Gemini 语音由捆绑的媒体工作流辅助函数选择，而非该命令。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**API 密钥：** 在环境或项目 `.env` 中设置 `GEMINI_API_KEY` 或 `GOOGLE_API_KEY`。此路径无需 Python 依赖。",
     "**服务账号：** 在 Python 3 环境装 `google-auth` 与 `requests`，将 `GOOGLE_APPLICATION_CREDENTIALS` 指向服务账号 JSON 文件绝对路径。也可经密钥管理器注入 `GCS_CREDS`。配额项目不同于服务账号项目时设置 `GOOGLE_CLOUD_PROJECT`。"
    ]
   },
   {
    "h": "离线工作",
    "p": "",
    "paras": [
     "无密钥配置是本地工作的正常状态。依赖与模型文件装好后，以下兜底在本地运行： 本地引擎在安装后不调用托管生成 API。首次使用可能下载模型文件。HeyGen 提供托管语音与成品音乐库；想用这些服务或云渲染时再登录。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**语音**——Kokoro-82M（54 语音），用 Whisper 做词级字幕对齐。",
     "**音乐**——MusicGen（`facebook/musicgen-small`）。",
     "**音效**——捆绑库。"
    ]
   },
   {
    "h": "无账号发布",
    "p": "",
    "paras": [
     "`npx hyperframes publish` 可在未登录时使用。它上传项目并打印含认领 token 的 URL。打开该 URL，在网页应用中认证以认领项目。",
     "想让 CLI 立即拥有项目、用 `--update` 更新同一 URL，或发布到共享空间 `--space` 时，请先用 `npx hyperframes auth login` 登录再发布。"
    ],
    "codeBlocks": []
   },
   {
    "h": "环境变量",
    "p": "",
    "paras": [
     "| Variable | Used for |",
     "| - | - |",
     "| `HEYGEN_API_KEY` | HeyGen 凭据——语音 + 音乐/音效检索 |",
     "| `HYPERFRAMES_API_KEY` | `HEYGEN_API_KEY` 的别名 |",
     "| `HEYGEN_ACCESS_TOKEN` | 宿主应用注入的 OAuth token；永不刷新或保存 |",
     "| `HEYGEN_API_BASE` | 宿主应用给媒体工作流的网关；永不从项目 `.env` 读取 |",
     "| `HEYGEN_API_URL` | `hyperframes` CLI 命令的 API 基址（默认 `https://api.heygen.com`） |",
     "| `HYPERFRAMES_CONFIG_DIR` | HyperFrames 设置根目录：凭据、遥测与更新设置、项目链接（默认 `~/.hyperframes`） |",
     "| `HYPERFRAMES_ENV` | `prod`（默认）或 `dev`；`dev` 把凭据放在根目录下独立的 `dev/` 目录。宿主与 OAuth client id 来自 `HEYGEN_API_URL`、`HYPERFRAMES_OAUTH_*` 与 `HYPERFRAMES_PUBLISHED_PROJECTS_API_URL` |",
     "| `HYPERFRAMES_OAUTH_CLIENT_ID` | 为受控 OAuth 环境覆盖公共 client ID |",
     "| `ELEVENLABS_API_KEY` | ElevenLabs TTS，无 HeyGen 凭据时使用 |",
     "| `GEMINI_API_KEY` / `GOOGLE_API_KEY` | 明确 Gemini TTS 选择与 Lyria 音乐生成；捕获描述用 `GEMINI_API_KEY` |",
     "| `GOOGLE_APPLICATION_CREDENTIALS` / `GCS_CREDS` | Gemini TTS 服务账号 JSON 文件路径 / 注入 JSON。两 API 密钥都不设置时使用 |",
     "| `GOOGLE_CLOUD_PROJECT` / `GCLOUD_PROJECT_ID` | Gemini OAuth 配额项目；先设值优先，其次服务账号项目 |",
     "| `OPENROUTER_API_KEY` | 捕获描述；该步优先于 Gemini |"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[云渲染](https://hyperframes.heygen.com/deploy/cloud.md)"
    ]
   }
  ]
 },
 "guide-deploy": {
  "lede": "HyperFrames 有三个官方托管模板。每个模板都会预先内置合成，在 `<hyperframes-player>` 中预览，并在服务器端 Chrome 和 FFmpeg 上渲染为 MP4。",
  "sections": [
   {
    "h": "Vercel",
    "p": "",
    "paras": [
     "Vercel 模板是 Next.js 应用。其 `/api/render` 路由会恢复已准备好的 Sandbox、运行 `hyperframes render`、把 MP4 上传到 Blob，并返回公开 URL。",
     "[部署 Vercel 模板](https://vercel.com/new/clone?demo-title=HyperFrames+on+Vercel\\&demo-description=Preview+HTML+video+compositions+in+the+browser+and+render+MP4s+server-side+on+Vercel+Sandbox.\\&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fheygen-com%2Fhyperframes-vercel-template%2Fmain%2Fdocs%2Fpreview.png\\&demo-url=https%3A%2F%2Fhyperframes-on-vercel.vercel.app\\&from=templates\\&project-name=hyperframes-on-vercel\\&repository-name=hyperframes-on-vercel\\&repository-url=https%3A%2F%2Fgithub.com%2Fheygen-com%2Fhyperframes-vercel-template\\&stores=%5B%7B%22type%22%3A%22blob%22%2C%22access%22%3A%22public%22%7D%5D)",
     "部署会创建 Blob 存储。Sandbox 访问使用 Vercel 运行时身份。当前账户要求和平台限制请参阅仓库 README。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Cloudflare",
    "p": "",
    "paras": [
     "Cloudflare 模板是 Workers 上的 TanStack Start 应用。`RenderContainer` Durable Object 运行渲染器，并把结果流式写入 R2。模板还包含可选的、基于 prompt 的生成，使用用户自己的 OpenRouter 凭据。",
     "[部署 Cloudflare 模板](https://deploy.workers.cloudflare.com/?url=https://github.com/heygen-com/hyperframes-cloudflare-template)",
     "Cloudflare Containers 需要 Workers Paid 套餐。除非你打算让访问者提交自己的合成，否则托管公开演示前请禁用可选的 AI 生成界面。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Modal",
    "p": "",
    "paras": [
     "Modal 模板暴露 FastAPI 应用。`POST /api/render` 启动独立的渲染函数并返回调用 ID；浏览器轮询，直到 MP4 可从 Modal Volume 获取。"
    ],
    "codeBlocks": [
     {
      "code": "uv sync\nsource .venv/bin/activate\nmodal setup\nmodal deploy src/app.py",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "使用你自己的合成",
    "p": "",
    "paras": [
     "先在本地创作并检查项目： 然后替换所选模板中的内置合成：",
     "| 模板 | 合成文件夹 | 选择合成 |",
     "| - | - | - |",
     "| Vercel | `public/compositions/<name>/` | 更新 `lib/preview.ts` 中的 `PREVIEW_COMPOSITION_DIR` |",
     "| Cloudflare | `public/compositions/<name>/` | 构建或部署时设置 `PREVIEW_COMPOSITION_DIR=compositions/<name>` |",
     "| Modal | `compositions/<name>/` | 更新 `src/app.py` 中的 `PREVIEW_COMPOSITION` | 如果创作画布不是 1920×1080，还要更新模板中的播放器尺寸。每个仓库 README 都会注明当前文件。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes init my-video\ncd my-video\nnpx hyperframes preview\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "暴露端点之前",
    "p": "",
    "paras": [
     "这些仓库是可运行示例，不是完整的多租户渲染服务。接受公开渲染请求之前，请添加认证、请求限制、输入校验和成本控制。任务需要重试、优先级或受控并发时，请增加队列。",
     "对于围绕分布式任务设计的基础设施，请使用[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)或[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "来源",
    "p": "",
    "paras": [
     "[card] [Vercel](https://github.com/heygen-com/hyperframes-vercel-template) Next.js、Sandbox 和 Blob [card] [Cloudflare](https://github.com/heygen-com/hyperframes-cloudflare-template)",
     "TanStack Start、Containers 和 R2 [card] [Modal](https://github.com/heygen-com/hyperframes-modal-template) FastAPI、生成函数和 Volume 存储"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[选择渲染路径](https://hyperframes.heygen.com/deploy/overview.md)",
     "[修复慢预览或慢渲染](https://hyperframes.heygen.com/guides/performance.md)",
     "[故障排查](https://hyperframes.heygen.com/help.md)"
    ]
   }
  ]
 },
 "guide-figma": {
  "lede": "导入 Figma 设计中应保留到项目中的部分：资产、",
  "sections": [
   {
    "h": "可导入的内容",
    "p": "",
    "paras": [
     "| 能力 | 交付内容 | 入口 |",
     "| - | - | - |",
     "| **静态资产** | 帧/图层渲染为 SVG/PNG/JPG/PDF，冻结于 `.media/` 下 | `hyperframes figma asset` |",
     "| **品牌 token** | Figma 变量/样式为合成品牌变量 | `hyperframes figma tokens` 或经 Figma 连接器的 `/figma` 技能 |",
     "| **组件** | 帧为可编辑 HTML，颜色链接品牌 | `hyperframes figma component` |",
     "| **运动** | Figma Motion 时间线为可编辑、暂停的 GSAP 时间线 | `/figma` 技能（agent，MCP） |",
     "| **着色器** | 着色器填充/特效为冻结静帧或剪辑 | `/figma` 技能（agent，MCP） |",
     "| **故事板** | 场景帧重建为运动 —— 帧作为状态解读，非幻灯片 | `/figma` 技能（agent；REST 资产即可） | 资产、token 和组件使用 Figma 的 **REST API**，可无头运行。",
     "运动和着色器数据可经兼容的 **Figma 连接器** 传入；若该入口不可用，请改用原生导出。故事板 重建使用普通帧导出加 agent 分析。"
    ],
    "codeBlocks": []
   },
   {
    "h": "一次性设置",
    "p": "",
    "paras": [
     "大多数人只需要一次连接：",
     "| 你想导入… | 设置 |",
     "| - | - |",
     "| Logo、图片，或整个帧为 HTML（资产、组件） | **token** —— 下文步骤 A |",
     "| 品牌颜色（token） | 任一均可，但在非 Enterprise 套餐上，**MCP 连接器**（步骤 B）一击即达 —— token 路径此项需 Enterprise 套餐 |",
     "| 运动或着色器 | 兼容的 **Figma 连接器**，或原生导出 |",
     "| 故事板帧 | 用于帧导出的 token；不需要连接器 | 项目需要全部时两者都做；各自独立，先后顺序无关。"
    ],
    "codeBlocks": []
   },
   {
    "h": "步骤 A — Figma token（资产、token、组件）",
    "p": "",
    "paras": [
     "`hyperframes figma` CLI 运行所需。",
     "**1. 签发 token** 在 Figma 中：**Settings → Security → Personal access tokens → Generate new token.** **2. 勾选这些 scope** 只读即足够 —— 集成永不写入 Figma。**大多数账号（非 Figma Enterprise）恰好勾选这三项：**",
     "在 **Figma Enterprise** 套餐上，还勾选 **Variables — Read-only**，以便 `tokens` 直接拉取品牌颜色。非 Enterprise？跳过 —— `tokens` 会自动回退到发布样式，或改用 MCP 连接器（步骤 B），任意套餐都能触及变量。",
     "**3. 导出** 将该行加入 shell 配置或项目的 `.env`，后续会话跳过此步。token 可读取其 Figma 账号和 scope 允许的文件。"
    ],
    "codeBlocks": [
     {
      "code": "export FIGMA_TOKEN=\"figd_…\"",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "**File content** — 只读",
     "**File metadata** — 只读",
     "**Library content** — 只读 —— 易漏，且没有它 `tokens` 会在尝试发布样式回退时 403"
    ]
   },
   {
    "h": "步骤 B — Figma 连接器（运动、着色器，以及无需 token 的品牌颜色路径）",
    "p": "",
    "paras": [
     "无 token、无 scope 可选 —— 你的 agent 请求时连接一次（一击 OAuth）即保持连接。",
     "当你的套餐上 REST variables 接口不可用时，这也是读取选区所用品牌值的便捷方式。连接器 可用性与用量限制取决于 Figma 当前套餐和客户端规则， 因此 agent 应批量请求并缓存结果。"
    ],
    "codeBlocks": []
   },
   {
    "h": "导入资产",
    "p": "",
    "paras": [
     "节点经 REST 渲染，冻结于 `.media/images/` 下，命令会打印可直接粘贴的 `<img>` 片段："
    ],
    "codeBlocks": [
     {
      "code": "hyperframes figma asset 'https://www.figma.com/design/KEY/Title?node-id=1-2'",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "imported image_007 → .media/images/image_007.svg\n<img src=\".media/images/image_007.svg\" alt=\"image_007\" data-figma-id=\"1:2\" />",
      "file": "TEXT THEME={NULL}"
     }
    ],
    "bullets": [
     "`--format svg|png|jpg|pdf`（默认 `svg`）。Logo 和矢量用 SVG —— 可缩放、可动画。位图保真用 `--format png --scale 2`。",
     "接受引用：带 `?node-id=…` 的完整 Figma URL（右键图层 → Copy link）或 `fileKey:nodeId` 简写。资产和组件导入始终面向具体节点；只有 `tokens` 接受裸 `fileKey`。",
     "幂等：manifest 记录 `fileKey:nodeId:format:scale:version`，除非设计在 Figma 中真正变更，否则重跑复用文件。"
    ]
   },
   {
    "h": "拉取品牌",
    "p": "",
    "paras": [
     "读取文件变量（或发布样式元数据），写入 `figma-tokens.json` 侧车文件加绑定索引，并打印合成 `data-composition-variables` 的条目。引用那些角色的场景使用相同的本地值。Figma 文件变化时重跑 `tokens`。",
     "[!TIP] **先**导入 token **再**导入组件。这样导入组件的颜色可链接到你的品牌变量，而非烘焙重复字面量。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes figma tokens KEY",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "导入组件",
    "p": "",
    "paras": [
     "帧的节点树变为可编辑 HTML，几何与 Figma 一致，打包于 `compositions/components/<name>/`。映射不到干净 HTML 的矢量和布尔运算节点会自动经资产路径栅格化。",
     "绑定到 Figma 变量的颜色按导入 token 解析： 匹配仅按确切 Figma ID —— 从不按 hex 值 —— 因此撞色的颜色不会造成错误的品牌链接。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes figma component 'https://www.figma.com/design/KEY/Title?node-id=10-20'",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "绑定到**已导入** token → 产出 `var(--brand-slug, #0066FF)` —— 后续品牌刷新会传入组件。",
     "绑定到**未导入** token → 使用字面颜色，且元素标记 `data-figma-unresolved`。命令会告知你；在源（或库）文件上跑 `tokens` 再重新导入即可链接。"
    ]
   },
   {
    "h": "运动、着色器与故事板",
    "p": "",
    "paras": [
     "这些经 `/figma` agent 技能运行： 重复元素成为连续线索，帧间差异成为运动或交互。此路径不需要连接器。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**运动** —— Figma Motion 时间线（关键帧、缓动、重复）结构化翻译为注册在 `window.__timelines`、暂停且有限的 GSAP 时间线，像任何手写动画一样逐帧可定位，事后可编辑。无法真实翻译的轨道回退到烘焙视频剪辑 —— agent 会告知所走路径及原因。",
     "**着色器** —— Figma 导出路径不执行着色器，因此默认是原生 Figma 导出（PNG 或 Motion MP4）作为资产/剪辑导入。",
     "**故事板** —— 一段场景帧被解码，非幻灯片播放："
    ]
   },
   {
    "h": "来源与刷新",
    "p": "",
    "paras": [
     "每次导入都在 `.media/manifest.jsonl` 中记录来源（`fileKey`、`nodeId`、`version`）。渲染的合成中没有一处指向 Figma —— 资产是文件，token 是变量，运动是时间线。Figma 文件更新时，重跑相同导入命令，只重新拉取变更。"
    ],
    "codeBlocks": []
   },
   {
    "h": "故障排查",
    "p": "",
    "paras": [
     "| 错误 | 含义 | 修复 |",
     "| - | - | - |",
     "| `NO_TOKEN` | `FIGMA_TOKEN` 未设置 | 遵循[一次性设置](#one-time-setup) |",
     "| `BAD_TOKEN` | Token 无效、过期或被撤销（Figma 对无效 PAT 返回 **403 `Invalid token`**，而非 401） | 重新签发 token |",
     "| `FORBIDDEN`（403） | 缺少只读 scope，或无权访问文件 | 消息写明 Figma 要求确切 scope（如样式回退的 `library_content:read`）—— 补上，或检查文件可见性 |",
     "| `REQUIRES_ENTERPRISE`（403） | Variables API 需要 Figma Enterprise | 不是失败 —— `tokens` 回退到发布样式（需上方 Library content scope） |",
     "| `RATE_LIMITED`（429） | Figma 每分钟限制 | 客户端自动以退避重试（遵守 `Retry-After`）；若仍冒出，等待一分钟或减少批量节点 |",
     "| 批量导出“Render timeout” | 一次 `/v1/images` 调用中大帧太多 | 分块，每次约 4 个 id |",
     "| `ref has no node id` | 链接指向文件而非节点 | 用 `?node-id=…` 复制链接（右键图层 → Copy link） |"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[引入设计：Figma、Claude Design、Open Design](https://hyperframes.heygen.com/guides/design-tools.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[变更日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "guide-frame-sources": {
  "lede": "HyperFrames 可以驱动无需转换为 GSAP、直接暴露时间函数的场景代码。在运行时初始化完成之前，使用 `window.__hyperframes.registerFrameSource` 将该函数注册到一个定时宿主上。",
  "sections": [
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
     "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
     "[HyperFrames 项目的工作原理](https://hyperframes.heygen.com/concepts/index.md)"
    ]
   }
  ]
 },
 "guide-gsap": {
  "lede": "GSAP 是 HyperFrames 合成的首选动画运行时。你负责编写运动；HyperFrames 负责控制播放头。",
  "sections": [
   {
    "h": "最小约定",
    "p": "",
    "paras": [
     "为合成指定有限时长，创建暂停时间线，并将其注册在合成 ID 之下： 注册键必须与 `data-composition-id` 相匹配。"
    ],
    "codeBlocks": [
     {
      "code": "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <script src=\"https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js\"></script>\n  </head>\n  <body>\n    <div\n      id=\"root\"\n      data-composition-id=\"intro\"\n      data-start=\"0\"\n      data-duration=\"3\"\n      data-width=\"1920\"\n      data-height=\"1080\"\n    >\n      <h1 id=\"title\" class=\"clip\" data-start=\"0\" data-duration=\"3\" data-track-index=\"0\">\n        HyperFrames\n      </h1>\n    </div>\n\n    <script>\n      const timeline = gsap.timeline({ paused: true });\n\n      timeline.fromTo(\n        \"#title\",\n        { opacity: 0, y: 32 },\n        { opacity: 1, y: 0, duration: 0.6, ease: \"power3.out\" },\n        0,\n      );\n\n      window.__timelines = window.__timelines || {};\n      window.__timelines.intro = timeline;\n    </script>\n  </body>\n</html>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "重要的规则",
    "p": "",
    "paras": [
     "常规的时间线方法是 `to()`、`from()`、`fromTo()` 和 `set()`。GSAP 支持许多 CSS 属性，但 [HyperFrames 动画技能](https://github.com/heygen-com/hyperframes/tree/main/skills/hyperframes/animation) 中包含 agent 使用的渲染安全模式。"
    ],
    "codeBlocks": [],
    "bullets": [
     "用 `{ paused: true }` 创建时间线。",
     "将其注册到 `window.__timelines`。",
     "为重要的补间指定显式位置。",
     "当两端都重要时优先使用 `fromTo()`；它在向后或随机定位后仍保持可靠。",
     "用变换和透明度实现运动。避免反复动画 `top`、`left`、`width` 或 `height` 等布局属性。",
     "让 HyperFrames 控制剪辑可见性和媒体播放。"
    ]
   },
   {
    "h": "测量文字前先加载字体",
    "p": "",
    "paras": [
     "根据文字宽度计算的下划线或位置需要最终的字体度量。HyperFrames 会在开始合成脚本之前等待现有标记使用的字体，但仅由脚本创建的文字使用的字重仍可能未加载。",
     "请在测量前用 `document.fonts.load()` 请求该字重。匹配文字的字体族、字重和字号，并传入文字以便浏览器加载所需的字符范围。`document.fonts.ready` 等待的是已经请求的字体；它不会请求未使用过的字重。",
     "此示例使用 `intro` 合成，内联块 `#title` 使用本地 `@font-face` 的 `font: 700 64px \"LocalFace\"` 样式，以及块级 `#underline`： 下划线现在与加载后的文字宽度匹配。请在回调末尾注册时间线之前构建所有补间。在异步构建完成之前注册空时间线，可能导致嵌套合成在其动画存在之前就显示为就绪。"
    ],
    "codeBlocks": [
     {
      "code": "const title = document.getElementById(\"title\");\nconst underline = document.getElementById(\"underline\");\ntitle.textContent = \"Build with HyperFrames\";\n\ndocument.fonts.load('700 64px \"LocalFace\"', title.textContent).then(() => {\n  underline.style.width = `${title.getBoundingClientRect().width}px`;\n\n  const timeline = gsap.timeline({ paused: true });\n  timeline.fromTo(\n    [\"#title\", \"#underline\"],\n    { opacity: 0, y: 32 },\n    { opacity: 1, y: 0, duration: 0.6, ease: \"power3.out\" },\n    0,\n  );\n\n  window.__timelines = window.__timelines || {};\n  window.__timelines.intro = timeline;\n});",
      "file": "JS THEME={NULL}"
     }
    ]
   },
   {
    "h": "时长",
    "p": "",
    "paras": [
     "显式的 root `data-duration` 即合成的渲染长度： 这是完整合成最清晰的选择。如果 root 未指定 `data-duration`，HyperFrames 可以在页面初始化后根据已注册时间线和受支持媒体推断长度。",
     "不要假定较长的源视频会自动延长较短的显式 root 时长。作者指定的时长即输出窗口。"
    ],
    "codeBlocks": [
     {
      "code": "<div data-composition-id=\"demo\" data-duration=\"12\"></div>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "媒体属于运行时",
    "p": "",
    "paras": [
     "不要从 GSAP 时间线播放或定位媒体： 请改用媒体时序属性。如果视频需要移动或调整大小，请动画包裹视频的容器，而非视频元素本身。"
    ],
    "codeBlocks": [
     {
      "code": "// Do not do this.\ndocument.querySelector(\"video\").play();\ndocument.querySelector(\"audio\").currentTime = 5;",
      "file": "JS THEME={NULL}"
     }
    ]
   },
   {
    "h": "嵌套合成",
    "p": "",
    "paras": [
     "每个嵌套合成拥有并注册自己的时间线。父级通过其宿主元素决定嵌套场景何时出现： 不要手动将子时间线添加到父级的 GSAP 时间线。HyperFrames 会将父级播放头映射到嵌套场景。"
    ],
    "codeBlocks": [
     {
      "code": "<div\n  data-composition-id=\"intro\"\n  data-composition-src=\"compositions/intro.html\"\n  data-start=\"2\"\n  data-duration=\"4\"\n></div>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "验证运动",
    "p": "",
    "paras": [
     "检查首帧、运动中状态和末尾状态。仅在浏览器连续播放时看起来正确的时间线，在渲染器直接定位到某一帧时仍可能失效。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint\nnpx hyperframes check\nnpx hyperframes snapshot --at 0,0.6,2.9",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
     "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
     "[变更日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "guide-hdr": {
  "lede": "HyperFrames 在渲染时会检测 HDR 媒体。当 MP4 项目包含 BT.2020 PQ 或 HLG 源时，输出使用 10-bit H.265 并保留 HDR 信号。没有 HDR 媒体的项目保持 SDR。",
  "sections": [
   {
    "h": "渲染并校验",
    "p": "",
    "paras": [
     "检查结果： PQ 输出应报告等同于以下的值： HLG 传输报告 `arib-std-b67`。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --output final-hdr.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "ffprobe -v error -select_streams v:0 -show_entries \\\n  stream=codec_name,pix_fmt,color_space,color_primaries,color_transfer \\\n  final-hdr.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "codec_name=hevc\npix_fmt=yuv420p10le\ncolor_space=bt2020nc\ncolor_primaries=bt2020\ncolor_transfer=smpte2084",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "控制检测",
    "p": "",
    "paras": [
     "| 命令 | 何时使用 |",
     "| - | - |",
     "| `hyperframes render` | 让源元数据决定 HDR 还是 SDR |",
     "| `hyperframes render --hdr` | 强制 HDR；未检测到 HDR 媒体时，HyperFrames 使用 HLG 并发出警告 |",
     "| `hyperframes render --sdr` | 即使项目包含 HDR 媒体也交付 SDR 版本 | 源文件必须包含正确的色彩元数据。HyperFrames 可识别标记为 BT.2020 且为 PQ（`smpte2084`）或 HLG（`arib-std-b67`）的视频。它还能通过原生 HDR 图片路径保留受支持的 HDR 静帧。"
    ],
    "codeBlocks": []
   },
   {
    "h": "混合合成",
    "p": "",
    "paras": [
     "你可以在 HDR 视频之上叠加 HTML 文本、CSS 图形和 SDR 媒体。HyperFrames 将原生 HDR 图层放在常规浏览器截图之外，将 SDR DOM 图层转换为 HDR 色彩空间，再在编码前合成结果。",
     "因此下三分之一字幕或动态界面可以在 HDR 源上保持视觉一致，而不必把整个项目强制走 SDR 截图。"
    ],
    "codeBlocks": []
   },
   {
    "h": "限制",
    "p": "",
    "paras": [
     "如果文件看起来像 SDR，请先对源和输出都运行 `ffprobe`，再改合成。缺失或错误的源元数据是最常见原因。"
    ],
    "codeBlocks": [],
    "bullets": [
     "HDR 输出仅限 MP4。MOV、WebM、GIF、PNG 序列和带 alpha 的输出回退到 SDR。",
     "HDR 和 `--resolution` 超采样不能在同一渲染中组合。请按目标尺寸编写，或在单独步骤中缩放。",
     "分布式 AWS Lambda 和 Cloud Run 渲染目前为 SDR。",
     "硬件 H.265 编码会携带色彩标签，但不包含与软件 `libx265` 路径相同的静态 mastered 元数据。HDR10 交付请使用软件编码。",
     "浏览器播放取决于宿主浏览器、显示器和操作系统；`<hyperframes-player>` 不提供自己的 HDR 播放流水线。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Render a video to MP4](https://hyperframes.heygen.com/guides/export-and-share.md)",
     "[HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)",
     "[Render from the command line](https://hyperframes.heygen.com/guides/rendering.md)"
    ]
   }
  ]
 },
 "guide-html-canvas": {
  "lede": "HTML in Canvas 使用 Chrome 实验性的 `drawElementImage()` API，将已渲染的 DOM 内容复制到画布中。该画布可以成为 Three.js 纹理或着色器特效的输入。",
  "sections": [
   {
    "h": "从现成区块开始",
    "p": "",
    "paras": [
     "最快的路径是安装一个 Catalog 区块，它已经处理了能力检测和回退行为： 其他相关示例包括 [Portal](https://hyperframes.heygen.com/catalog/blocks/vfx-portal.md)、[Shatter](https://hyperframes.heygen.com/catalog/blocks/vfx-shatter.md) 和 [Liquid Glass Notification](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-notification.md)。",
     "只有当你想对比全集时，才安装所有标记了 `html-in-canvas` 的区块："
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes add vfx-iphone-device",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes add html-in-canvas",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "浏览器支持",
    "p": "",
    "paras": [
     "`drawElementImage()` 是实验性的 Chromium 功能。该功能标志仅在包含此 API 的浏览器构建中有效。",
     "HyperFrames 在启动 Chrome 时启用 `CanvasDrawElement`，并检查 API 是否真正可用。当快速捕获 API 不可用或对某个合成不安全时，渲染引擎可以回退到其普通捕获路径。",
     "刷新 CLI 使用的浏览器： 对于普通浏览器预览，请在兼容的 Chrome 或 Brave 构建中启用 `chrome://flags/#canvas-draw-element` 并重启。保留视觉回退，因为协作者可能在没有此功能的浏览器中打开合成。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes browser ensure --force",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "最小模式",
    "p": "",
    "paras": [
     "捕获后，像使用其他任何画布纹理一样使用 `captureCanvas`： 如果 DOM 发生变化，请重新捕获并设置 `texture.needsUpdate = true`。"
    ],
    "codeBlocks": [
     {
      "code": "<canvas id=\"capture\" layoutsubtree width=\"1920\" height=\"1080\">\n  <section id=\"source\">\n    <h1>Revenue: $4.2M</h1>\n  </section>\n</canvas>\n\n<canvas id=\"scene\" width=\"1920\" height=\"1080\"></canvas>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "var captureCanvas = document.getElementById(\"capture\");\nvar source = document.getElementById(\"source\");\nvar captureContext = captureCanvas.getContext(\"2d\");\n\nfunction supportsHtmlInCanvas() {\n  var probe = document.createElement(\"canvas\");\n  probe.setAttribute(\"layoutsubtree\", \"\");\n  var context = probe.getContext(\"2d\");\n\n  return \"layoutSubtree\" in probe && typeof context?.drawElementImage === \"function\";\n}\n\nif (supportsHtmlInCanvas()) {\n  captureContext.drawElementImage(source, 0, 0, 1920, 1080);\n} else {\n  // Draw a simpler canvas version or use a static image.\n}",
      "file": "JAVASCRIPT THEME={NULL}"
     },
     {
      "code": "var texture = new THREE.CanvasTexture(captureCanvas);\nvar material = new THREE.MeshBasicMaterial({ map: texture });",
      "file": "JAVASCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "了解限制",
    "p": "",
    "paras": [
     "浏览器的绘制记录路径并不能复现所有合成器特效。滤镜、背景滤镜、某些 3D 变换、遮罩、混合模式和类似效果可能迫使 HyperFrames 回退到普通捕获路径。",
     "该回退保护最终结果，但也意味着 HTML in Canvas 并不是对通用 CSS 支持或更快渲染的承诺。请测试实际合成： 请在渲染文件中查看过渡帧和特效，而不只看实时预览。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint\nnpx hyperframes check\nnpx hyperframes render --output html-in-canvas.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [着色器过渡](https://hyperframes.heygen.com/packages/shader-transitions.md) 在场景之间应用内置 WebGL 过渡。",
     "[card] [浏览视觉区块](https://hyperframes.heygen.com/catalog.md) 从可用的特效开始，而非重建捕获逻辑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Liquid Glass Notification](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-notification.md)",
     "[Liquid Glass Widgets](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-widgets.md)",
     "[iOS 26 Liquid Glass Home Screen](https://hyperframes.heygen.com/catalog/blocks/ios26-liquid-glass.md)"
    ]
   }
  ]
 },
 "guide-imported-film": {
  "lede": "运行时支持当前 Claude Motion HTML 导出使用的 `appifact-film:` 消息协议。请完整保留原始 `film-runner` HTML 和场景模块。MCP 导入器会将其与 HyperFrames 封装一起打包；HyperFrames 控制时间，并使用其现有渲染器捕获得到的像素。",
  "sections": [
   {
    "h": "可编辑的场景时序",
    "p": "",
    "paras": [
     "要在 HyperFrames 时间线上暴露各个场景，请为每个场景挂载一个定时宿主和独立的运行器 iframe。每个运行器可以加载完整的保留影片。将原始场景不可变的源区间与其可编辑的宿主时序分别注册： 对于原始覆盖 `[3, 7)` 的场景，源时间为 `3 + data-playback-start + rateAdjustedLocalTime`。源区间将结果钳制在 3 与 7 之前的最后一个源帧之间。移动宿主可改变 `data-start`；裁剪可改变其时长和源入点；拉伸使用现有的播放速率属性。超出可用源素材的延长会保持最后一帧。仅改变时长不会自动拉伸动画。",
     "相邻剪辑使用半开时间线窗口。在合成的最终时刻，最终场景会保持其最后一帧。不同的源实例允许重排或重叠的场景请求不同的原始影片时刻，而不共享可变运行器状态。",
     "请将保留的运行器/load 载荷和 `sourceRange` 持久化在封装的初始化数据中。宿主时序保留在普通 HyperFrames 属性中，因此序列化、保存/重开、撤销和重做都能保留它，而无需重写场景模块。不要将原播放器的 `recut` 字段用作宿主时序的替代：该协议无法表示任意裁剪、重排和重叠编辑。",
     "这提供场景级时序和放置。文字、颜色和单个动画更改仍需编辑保留的场景模块。运行时不将 iframe 内部暴露为可手动编辑的 Studio 对象或关键帧。"
    ],
    "codeBlocks": [
     {
      "code": "window.__hyperframes.registerFrameSource({\n  element: sceneHost,\n  ready: bridge.ready,\n  render: bridge.render,\n  dispose: bridge.dispose,\n  sourceRange: { start: 3, duration: 4, fps: 60 },\n});",
      "file": "JAVASCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[变更日志](https://hyperframes.heygen.com/changelog.md)",
     "[薄膜](https://hyperframes.heygen.com/catalog/blocks/thin-film.md)",
     "[拍摄屏幕](https://hyperframes.heygen.com/catalog/components/filmed-screen.md)"
    ]
   }
  ]
 },
 "guide-motion-blur": {
  "lede": "运动模糊给快速运动的元素真实的快门拖影。对于每一帧，HyperFrames 都会读取每个运动体在快门区间内所在的位置，并沿该路径对其模糊。横穿画面的盒子会留下拖痕，而非某个位置上的锐利拷贝。",
  "sections": [
   {
    "h": "开启它",
    "p": "",
    "paras": [
     "就这么简单。同一属性同时驱动浏览器编辑器预览和 `hyperframes render`。",
     "| 属性 | 默认值 | 含义 |",
     "| - | - | - |",
     "| `data-motion-blur` | none | `on` 启用模糊。`off` 退出，可位于 root 或任何子树上。 |",
     "| `data-motion-blur-shutter` | `240` | 快门角度（度），0–720。越大拖影越长。 |",
     "| `data-motion-blur-phase` | centred | 快门开启时刻，以帧的角度计，-360 到 360。窗口从 `t + phase / 360 / fps` 开始，持续 `shutter / 360 / fps`。`0` 表示在帧上开启，拖影向前拖；未指定时居中，相当于负半个快门。与 After Effects 的 Shutter Phase 相匹配。 |",
     "| `data-motion-blur-samples` | 至少 32 | 每帧固定采样数，2–64。未指定时，每个运动体至少 32 个，且当拖影更长时大约每 2 px 一个采样，因此快速运动永远不会出现台阶。 |",
     "| `data-motion-blur-events` | off | `on` 在模糊寻找运动体时运行时间线回调（`onUpdate` 等），并在回调改变元素行内样式或其盒子的每个采样处运行。当运动由回调（如 `render(t)` 函数）设置时需要它，否则模糊看不到。 |",
     "| `data-motion-blur-tier` | `auto` | `auto` 和 `filter` 以滤镜层绘制；`capture` 请求捕获层（见下）。 |"
    ],
    "codeBlocks": [
     {
      "code": "<div\n  id=\"root\"\n  data-composition-id=\"main\"\n  data-width=\"1920\"\n  data-height=\"1080\"\n  data-duration=\"10\"\n  data-motion-blur=\"on\"\n>\n  ...\n</div>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "在浏览器编辑器中",
    "p": "",
    "paras": [
     "浏览器编辑器右侧坞的 **Blur** 标签页用一个控件设置它：**Off**、**Subtle** 或 **Strong**。Subtle 是默认模糊（240° 快门，采样数按拖影计算）。Strong 将快门开到 720°、采样数开到 64。面板会将上述属性写入合成 root，因此渲染使用相同设置，且撤销可用。Subtle 和 Strong 也会开启 `data-motion-blur-events`，因此由 `render(t)` 回调设置的运动能被找到。Off 会移除 `data-motion-blur` 和 `data-motion-blur-events`，其他属性保持不动。"
    ],
    "codeBlocks": []
   },
   {
    "h": "模糊对象",
    "p": "",
    "paras": [
     "2D 中快速运动的元素：来自 GSAP、CSS 动画和过渡以及 Web Animations API 的位置、缩放和旋转变化。慢运动体和静态内容保持锐利。运动体的辉光和阴影随之同行，其后的背景保持原位。"
    ],
    "codeBlocks": []
   },
   {
    "h": "两种绘制方式",
    "p": "",
    "paras": [
     "**Filter** 在每个运动体上加上 SVG 滤镜：沿路径的多个元素拷贝取平均，并沿运动方向软化。`data-motion-blur-tier=\"auto\"`（默认）即以此绘制。它在任何 Chrome 中可用，且可在 WebGL 画布之上工作。在四鞭测试中，它耗时约与无模糊渲染相同；在两部真实影片上，它比捕获更耗时（见成本与限制）。转弯和缩放仅被软化，不会产生拖痕。",
     "**Capture** 通过 `data-motion-blur-tier=\"capture\"` 可选开启。它用 Chrome 的 [HTML in Canvas](https://hyperframes.heygen.com/guides/html-in-canvas.md) API 将每个运动体从页面中拷贝出来，再沿其路径重绘。它真实绘制转弯和缩放：旋转瓷砖沿弧线拖影而中心仍锐利，缩放向外拖影。它也有自己的限制，下文列出（滤镜层的限制列在“成本与限制”下，少数限制如 `backdrop-filter` 两层都适用），因此只为需要旋转和缩放拖痕的影片请求它：",
     "Capture 需要支持 HTML in Canvas 的浏览器。Chrome 157 和 158 构建在无头和 Chrome-for-Testing 构建中无需标志即可暴露它；稳定版 Chrome 是否如此尚未验证。Chrome 155 及更早版本需要 `chrome://flags/#html-in-canvas`。",
     "当捕获不可运行时，请求捕获的页面会改为使用滤镜层：",
     "| 在合成中找到 | 为什么捕获无法绘制它 |",
     "| - | - |",
     "| 文档中任意位置的 WebGL 或 WebGPU 画布 | 会被冻结捕获。 |",
     "| 3D 上下文中的 `backface-visibility: hidden`（包括来自动画） | 会被镜像绘制。 |",
     "| root 元素上的 transform | 会被捕获忽略。 |",
     "| root 元素上不透明度低于 1，或 `mix-blend-mode` | 不会被捕获应用。 |",
     "| root 中的 `iframe`、`object`、`embed` 或自定义元素 | 无法被真实捕获。 |",
     "| 嵌套捕获画布，如 VFX 区块 | 会挂起渲染器。 |",
     "| 不支持 HTML in Canvas 的浏览器，或连续三次捕获失败 | 捕获不可用。 | 这为整个合成一次性决定，以第一帧为准。扫描遗漏的缺陷（如延迟加入的 WebGL 画布）会改为在每帧中捕获：那一帧会以锐利方式渲染，并计入 `failedFrames`。",
     "HDR 渲染和使用引擎自身亚帧模糊的渲染，模糊是关闭的，并且保持关闭。分布式渲染（`plan`、`renderChunk`、`assemble`，即 AWS Lambda 和 Google Cloud Run 适配器的运行方式）和 `--start`/`--end` 范围渲染，其模糊方式与完整本地渲染相同。传入 `--page-motion-blur off`（或在分布式配置中使用 `pageMotionBlur: \"off\"`）可使其锐利渲染。"
    ],
    "codeBlocks": [],
    "bullets": [
     "运动体前方的一切物都会丢失：运动元素之上的静态面板、覆盖层或标题卡在拖影之后绘制。",
     "运动体或其祖先上的 `mix-blend-mode` 和 `backdrop-filter` 不会被应用。",
     "通过父级抵达 root 的 CSS 选择器（如 `body > #root > .m`），在捕获包裹 root 后即停止匹配。",
     "滑入 `overflow: hidden` 或裁剪卡片的运动体会拖着裁剪边缘走，两个重叠运动体会携带彼此的像素，超出帧边缘的内容会留下一条细带。",
     "预览中，每次播放后的第一帧会有一瞬间变黑。"
    ]
   },
   {
    "h": "查明实际绘制层",
    "p": "",
    "paras": [
     "| 发现 | 严重程度 | 含义 |",
     "| - | - | - |",
     "| `motion_blur_filter_fallback` | info | 页面请求了捕获，但无法运行，因此用滤镜层绘制。消息写明原因。 |",
     "| `motion_blur_no_movers` | info | 模糊已开启，但没有足够快的东西可模糊。如果运动由回调设置，请添加 `data-motion-blur-events=\"on\"`。 |",
     "| `motion_blur_unverified` | info | 页面请求了捕获，但检查浏览器无法运行它，因此用滤镜层绘制。渲染一次即可看到捕获。 | 在页面中，`window.__hfMotionBlur.report()` 返回 `state`、`tier`、`reason`、`reasonCode` 和 `movers`。渲染的每个会话会记录一行层信息；若有帧回退为锐利（`failedFrames > 0`），会话结束时还有一行。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[运动模糊](https://hyperframes.heygen.com/catalog/components/motion-blur.md)",
     "[变更日志](https://hyperframes.heygen.com/changelog.md)",
     "[已验证的示例提示](https://hyperframes.heygen.com/prompting/examples.md)"
    ]
   }
  ]
 },
 "guide-performance": {
  "lede": "成品渲染可以很流畅，即使预览卡顿。预览必须实时绘制每一帧；渲染可以花任何时间捕获同一帧。",
  "sections": [
   {
    "h": "从症状出发",
    "p": "",
    "paras": [
     "| 你看到的现象 | 先检查 |",
     "| - | - |",
     "| 预览在某个场景卡顿 | 该场景中有大面积模糊、遮罩、阴影或大量动态图层 |",
     "| 图像首次出现时预览暂停 | 源图过大或图像解码 |",
     "| 整个页面都变慢 | 脚本开销、布局抖动或 DOM 节点过多 |",
     "| 渲染慢但结果正确 | 源视频抽帧、帧捕获或编码 |",
     "| WebM 比 MP4 慢得多 | VP9 编码；透明 WebM 对 CPU 要求高 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "减少昂贵的浏览器开销",
    "p": "",
    "paras": [
     "对于 1920×1080 的合成，3840×2160 源已为 2× 显示提供足够细节。更大的源通常只增加内存和解码开销，不改善画面。"
    ],
    "codeBlocks": [],
    "bullets": [
     "减少大面积的 `backdrop-filter` 和 `filter: blur()` 图层。",
     "避免同时动画数十个带阴影的元素。",
     "用预渲染图片替代静态模糊或纹理叠加层。",
     "按实际交付尺寸调整图片大小。过大的 JPEG 仍会解码成很大的位图。",
     "让动画回调中的工作保持小。不要在同一帧中反复读布局、写样式。"
    ]
   },
   {
    "h": "实测而非猜测",
    "p": "",
    "paras": [
     "一次只改一个昂贵功能，重新录制，保留能移动瓶颈的版本。"
    ],
    "codeBlocks": [],
    "bullets": [
     "运行 `npx hyperframes preview`。",
     "打开 Chrome DevTools 并选择 **Performance**。",
     "录制卡顿的部分。",
     "检查最长任务：",
     "**Paint** 或 **Composite Layers** 指向滤镜、阴影、遮罩或大图层。",
     "**Layout** 或 **Recalculate Style** 指向布局开销。",
     "**Script** 指向作者代码。"
    ]
   },
   {
    "h": "做一次快速评审渲染",
    "p": "",
    "paras": [
     "如果合成本来就不适合实时播放，请评审编码后的文件： 交付时用 `standard` 或 `high`。Draft 只影响捕获和编码质量，不改变合成的时间。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --quality draft --output review.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "仅在需要时调优透明 WebM",
    "p": "",
    "paras": [
     "WebM 使用 CPU 密集型 VP9 编码器。默认值适合大多数工作。要用更长的编码时间换取压缩质量： `--vp9-cpu-used` 接受 `-8` 到 `8` 的整数；数值越高越快，质量/体积权衡越大。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --format webm --vp9-cpu-used 2 --output overlay.webm",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames FAQ](https://hyperframes.heygen.com/faq.md)",
     "[Render from the command line](https://hyperframes.heygen.com/guides/rendering.md)",
     "[Changelog](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "guide-rendering": {
  "lede": "浏览器编辑器是导出项目最简单的地方。当智能体、脚本、CI 任务或高级交付工作流需要控制渲染时，请使用命令行。",
  "sections": [
   {
    "h": "从 Studio 导出 GIF",
    "p": "",
    "paras": [
     "打开**渲染**面板，选择 **GIF**，设置循环次数，然后点击**导出**。用 `0` 无限循环，或用 `1` 到 `65535` 的整数指定有限循环次数。GIF 导出无音频且最高 30 fps；选择 GIF 时 60 fps 选项会被禁用。成品 GIF 在渲染列表中预览，可在彼处打开、下载或删除。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染普通视频",
    "p": "",
    "paras": [
     "在项目目录中： 省略 `--output` 时，HyperFrames 会把结果写到 `renders/` 下。",
     "常规工作流是： `lint` 检查项目结构。`check` 在浏览器中打开项目，查找运行时、布局、动效、媒体和对比度问题。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes lint\nnpx hyperframes check\nnpx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "选择格式",
    "p": "",
    "paras": [
     "| 格式 | 用途 |",
     "| - | - |",
     "| MP4 | 正常共享、发布和交付 |",
     "| MOV | ProRes 工作流和透明编辑中间文件 |",
     "| WebM | Web 交付和透明叠加层 |",
     "| GIF | 在 Issue、PR 和文档中的短预览 |",
     "| PNG 序列 | 逐帧交给合成软件 |",
     "| HLS | 从播放列表目录点播流媒体 | 示例： GIF 无音频且透明度有限。正常播放请优先 MP4 或 WebM。"
    ],
    "codeBlocks": [
     {
      "code": "# Transparent web overlay\nnpx hyperframes render --format webm --output overlay.webm\n\n# ProRes editing file\nnpx hyperframes render --format mov --output master.mov\n\n# Short looping preview\nnpx hyperframes render --format gif --fps 15 --output preview.gif\n\n# RGBA frames in a directory\nnpx hyperframes render --format png-sequence --output frames\n\n# HLS VOD stream in a directory\nnpx hyperframes render --format hls --output stream",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "透明视频",
    "p": "",
    "paras": [
     "透明 Web 叠加层用 WebM，ProRes 4444 编辑中间文件用 MOV。在输出必须保持透明的地方，不要绘制合成背景；不透明的 `html`、`body` 或全帧背景会被编码成可见像素。",
     "MP4 是常规不透明交付格式。渲染透明度后，请在高对比背景上检查文件，不要只信总是显示黑色背景的播放器。",
     "对于 VP9 WebM，`ffprobe` 报告 `pix_fmt=yuv420p` 本身并不意味着透明度丢失。FFmpeg 默认 VP9 解码器也可能从含有 alpha 的文件中产生不透明图像。要检查一帧，请在输入**之前**显式选择感知 alpha 的解码器：",
     "在棋盘格或对比背景上查看 PNG。如果仍然不透明，请与合成的 PNG 序列输出对比，检查视频编码前透明度是否已丢失。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --format webm --output overlay.webm\nnpx hyperframes render --format mov --output overlay.mov",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "ffmpeg -c:v libvpx-vp9 -i overlay.webm -frames:v 1 -pix_fmt rgba overlay-frame.png",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "HLS 流媒体输出",
    "p": "",
    "paras": [
     "`--format hls` 会把 HLS VOD 流写入输出**目录**：`master.m3u8`、`video.m3u8` 和 `video_NNNNN.ts`，有音频时还有 `audio.m3u8` 和 `audio_NNNNN.ts`。视频和音频编码与 MP4 相同；只有交付容器不同，打包是流拷贝而非第二次编码。",
     "除最后一个外，每个分段长度恰为 `--hls-segment-seconds`（默认 4），且每个分段都从关键帧开始。HLS 输出仅 SDR，因此拒绝 `--hdr`；拒绝 `--gpu` 是因为 GPU 编码器会忽略固定长度分段依赖的强制关键帧锁定。Cloud 渲染（`lambda`、`cloudrun`）暂不提供 HLS。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --format hls --output stream\nnpx hyperframes render --format hls --hls-segment-seconds 6 --output stream",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "输入视频编码",
    "p": "",
    "paras": [
     "浏览器编辑器、预览、`check` 和已发布项目通常会对 Chrome 无法可靠解码的本地视频（包括常见 HEVC 和 ProRes 输入）创建缓存浏览器代理。原文件保留在项目中，仍是渲染源。",
     "如果片段在预览中全黑，请保持自动代理开启、确认源为本地，并运行 `npx hyperframes check`。仅在浏览器已支持该源、或正在排查代理本身时才禁用代理。"
    ],
    "codeBlocks": []
   },
   {
    "h": "选择画质和帧率",
    "p": "",
    "paras": [
     "默认 `looks` 画质（CRF 16）是大多数成品工作的正确选择。MOV 是编辑中间文件。它使用带 alpha 的 ProRes 4444，除非 `--prores-profile` 选择更小的 4:2:2 配置（`hq`、`422`、`lt` 或 `proxy`），后者没有 alpha：透明区域渲染为黑色。`--crf` 和 `--video-bitrate` 与 ProRes 无法映射，对 MOV 会被拒绝；需要这些控件时请选 MP4 或 WebM。",
     "交付给播放器或平台时，MP4 渲染还可设置关键帧间隔和峰值码率。`--keyframe-interval 2` 表示至少每两秒一个关键帧。`--max-bitrate 8M` 限制峰值，其余仍由画质目标决定，`--buffer-size`（默认两倍封顶）设置封顶的测量窗口。不设置则编码不变。在 Lambda 上，间隔是上限，因为拼接分片会加入关键帧；封顶按分片生效，因此拼接后可能脉冲到一个 buffer。",
     "仅在源或目的地需要时才用更高帧率。帧更多，渲染耗时更长。",
     "CLI 在合成有 `data-fps` 时使用它，否则默认 30 fps。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --format mov --prores-profile hq --output edit.mov",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --keyframe-interval 2 --max-bitrate 8M --output delivery.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "# Faster review version\nnpx hyperframes render --quality draft --output review.mp4\n\n# Larger final master\nnpx hyperframes render --quality high --output master.mp4\n\n# Explicit frame rate\nnpx hyperframes render --fps 60 --output final-60fps.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "4:4:4 母版",
    "p": "",
    "paras": [
     "MP4 输出每个方向以半分辨率储存颜色（4:2:0）。细彩色文字、UI 笔画和饱和边缘可能变软或出现色边。对于以文字和 UI 为主的母版文件，请用全分辨率颜色渲染： 这会编码 H.264 High 4:4:4 Predictive（yuv444p），并把每一帧都捕获为无损 PNG，因为 Chrome 的 JPEG 捕获在 Linux 上和截图捕获时本身就是 4:2:0。渲染更慢：在我们的测试中，文字和 UI 合成耗时约为默认渲染的两倍，全帧 footage 约三点五倍，因为图像越精细 PNG 编码越贵。",
     "在相同 CRF 下对比无损母版测得，彩色文字的色度 PSNR 提高约 16 dB，UI 录屏提高约 13 dB，摄像机 footage 和渐变无实质变化。画面以 footage 为主的视频请保留默认。",
     "`444` 仅支持 SDR MP4 且只用软件编码器。它会与 `--gpu`、`--hdr` 和其他格式冲突。分布式渲染（包括 Lambda 和 Cloud Run）只编码 4:2:0，并拒绝 `\"444\"` 的 `chromaSubsampling`。",
     "许多播放器无法解码 4:4:4，因此请用于母版和编辑交接，而非直接发布的成品：",
     "| 播放器 | 4:4:4 MP4 |",
     "| - | - |",
     "| Chrome 155 (Windows) | 可播放 |",
     "| Edge 155 (Windows) | 可播放 |",
     "| Firefox 157 (Windows) | 无法播放（无 YUV 4:4:4 解码器） |",
     "| VLC 3.0 (Windows) | 可播放 |",
     "| Windows Media Player 和媒体播放器应用 | 无法播放（“不支持的编码设置”） |",
     "| Safari (iOS 26.6) | 可播放 |",
     "| Safari 26.6 (macOS 26.6) | 可播放 |",
     "| QuickTime / AVFoundation (macOS 26.6) | 可播放 | 已用 H.264 High 4:4:4 Predictive、8-bit、1920×1080 测试。以上所有播放器均可播放默认 4:2:0 输出。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --chroma-subsampling 444 --output master.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "本地或 Docker",
    "p": "",
    "paras": [
     "本地渲染是常规选择： 启动快，可使用本机浏览器 GPU。在 WSL2 上，Chrome 可能无法接通 GPU；见[WSL2 下渲染慢](https://hyperframes.heygen.com/help.md#the-render-is-slow-under-wsl2)。",
     "当需要受控的 Chrome、FFmpeg 和字体环境时使用 Docker： Docker 增加启动和基础设施开销。它适用于 CI 和可重复的生产环境，不是每次成品渲染的必需。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --docker --output final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染另一个合成",
    "p": "",
    "paras": [
     "默认渲染根 `index.html`。要定位另一个独立合成： 使用 `<template>` 包装器的嵌套合成应通过包含它们的根合成渲染。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render \\\n  --composition compositions/intro.html \\\n  --output intro.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "批量和云工作",
    "p": "",
    "paras": [
     "对于多个变量驱动版本，使用批量渲染。对于远程基础设施，使用 HyperFrames cloud、AWS Lambda 或 Google Cloud Run。",
     "这些工作流涉及输出命名、凭据、并发和基础设施选择。请先从 [CLI 指南](https://hyperframes.heygen.com/developers/cli.md) 开始，需要每个标志时使用完整 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染来源",
    "p": "",
    "paras": [
     "渲染视频携带两个容器元数据标签，说明是哪个工具写了文件： 仅此而已。标签只包括渲染器及其版本，不包括文件路径、用户名、机器名、项目名或合成的任何内容。它们是容器元数据，不是可见水印，视频的任何像素都不变。Matroska 读取时会把标签名大写，因此 `.webm` 会报告 `HYPERFRAMES_RENDERER`。",
     "随时可以剥除它们： [!NOTE] 这些标签是未认证的诊断提示，不是来源证明。它们是普通无签名容器键，任何人都可以用一条 `ffmpeg -metadata` 命令写入相同的两个值：标签存在只说明文件*声称*是 HyperFrames 输出，而非 HyperFrames 写过它。标签缺失同样说明不了什么，因为重新编码、remux、或丢弃未知键的工具都会剥掉它，旧版本渲染的文件从未携带它。请把它们当作“大概是哪个工具产出此文件？”的排查提示，永不作真实性、署名或许可依据。可验证的来源需要 C2PA 这类签名声称。"
    ],
    "codeBlocks": [
     {
      "code": "ffprobe -v error -show_entries format_tags -of json out.mp4",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "{ \"hyperframes_renderer\": \"hyperframes\", \"hyperframes_version\": \"0.7.107\" }",
      "file": "JSON THEME={NULL}"
     },
     {
      "code": "ffmpeg -i out.mp4 -map_metadata -1 -c copy clean.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "请智能体给出正确输出",
    "p": "",
    "paras": [
     "以上标志都是智能体替你设置的。请在请求中说出你需要什么，它会选择。默认值（MP4、1920×1080、30fps、`looks` 画质）是故意选好的，因此大部分诀窍在于知道何时*不再*要求更多。"
    ],
    "codeBlocks": []
   },
   {
    "h": "画质等级",
    "p": "",
    "paras": [
     "按名称说出等级，智能体会选择匹配的编码预设——你无需指定 CRF 或编码器速度：",
     "| 说这个 | 等级 | 最适合 |",
     "| - | - | - |",
     "| “draft” / “quick render” | `draft` | 还在评判剪辑时的快速迭代 |",
     "| 什么都不说 | `looks`（默认，CRF 16） | 成品工作：1080p 下视觉无损 |",
     "| “final” / “high quality” | `delivery` | 要交接的母版 | 等级用编码时间交换保真度。`looks`（默认）在 1080p 下已视觉无损，因此把 `delivery` 留给真正要交接的母版，迭代时随意用 `draft`。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `render everything at high quality`",
     "**改为：** `draft renders while we iterate, then one high-quality final`——慢编码只付一次，给已批准的剪辑"
    ]
   },
   {
    "h": "格式",
    "p": "",
    "paras": [
     "MP4 是默认，也是几乎所有场景的正确答案——到处都能播放。只有交付目标需要时才要求其他容器： Render this as a transparent WebM overlay. Export a MOV I can drop into Premiere with the background knocked out.",
     "透明度有容器层级，取舍真实存在：",
     "| 要求 | 得到什么 | 注意 |",
     "| - | - | - |",
     "| “transparent MOV” | 带 alpha 的 ProRes 4444 | 编辑级选择（Premiere、Final Cut、Resolve、After Effects）。文件大——编辑中间文件本就如此。 |",
     "| “transparent WebM” | 带 alpha 的 VP9 | 体积小，但**只有浏览器能解码 alpha**——所有视频编辑器都会把透明区域渲染为黑色。仅浏览器播放。 |",
     "| “PNG sequence” | 无损 RGBA 帧 | 用于 After Effects / Nuke / Fusion 的合成。体积最大。 | 透明度也只在有空位可透视的设计上才*有意义*。下三分之一、订阅卡片或 logo sting 主要是空画布——透明让它与其它 footage 合成。全帧场景（满幅背景、full-bleed 视频、自带底板的标题卡）无物可透；该请求产出的文件看起来与不透明版相同，却更大且能在更少地方播放。",
     "<video aria-label=\"Overlay spotify preview\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/overlay-spotify-preview.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*棋盘格之上的透明 VP9 WebM 叠加层预览。要从 CLI 验证 alpha：VP9 以 out-of-band 储存，查 `ALPHA_MODE=1`（仅查 pix_fmt 会误判），或用 ffmpeg alphaextract 提取。*",
     "[!NOTE] 透明渲染还依赖合成不设置 `html` / `body` 背景——透明只从未绘制处透过。技能会处理这一点；手工创作叠加层请见[渲染指南](https://hyperframes.heygen.com/guides/rendering.md#transparent-video)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Avoid:** `render my full-screen product promo as a transparent WebM`",
     "**Instead:** `render the promo as MP4; export just the lower-third overlay as transparent WebM`——透明属于*叠加*在其他 footage 上的层，而非成品全帧影片"
    ]
   },
   {
    "h": "分辨率和帧率",
    "p": "",
    "paras": [
     "默认 1920×1080、30fps。两者提高都实打实耗费时间，且两者常出于习惯而非需要被要求。",
     "**4K** 是渲染时标志——合成仍保持创作尺寸，Chrome 超采样到 3840×2160。这让任何缩放下的文字、SVG 和 CSS 锐利，但对已锁定在像素网格的内容*毫无*帮助：1080p `<video>`、固定尺寸 `<canvas>` 或低于 4K 的图片得不到细节增益。而且不免费——4K 渲染**每帧慢约 4 倍**并产出**大 3–5 倍的文件**。当交付界面确实需要时（如 4K 显示、客户规范）再要求，不要反射性地要求。",
     "Render this at 4K for the trade-show display. **帧率**逻辑相同：60fps 使引擎捕获和编码的帧数翻倍。面向高刷新屏的快速动态图形值得；说话镜头或慢标题序列则浪费。",
     "[!WARNING] 几个 4K 约束会在渲染开始前停下它（均依据[4K 指南](https://hyperframes.heygen.com/guides/4k-rendering.md#constraints)）：目标方向必须与合成宽高比一致，缩放必须是整数（1080p → 4K 恰为 2×），且**4K 不能与 HDR** 在一次渲染中组合。如果你两者都要，请在合成分辨率渲染 HDR，再单独放大。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `render in 4K 60fps` 给要发 Instagram 的片段——平台会转码调低，慢渲染白付了",
     "**改为：** 社交媒体什么都不说；只有目标确实需要时才点名 `4K`（或 `60fps`）"
    ]
   },
   {
    "h": "HDR",
    "p": "",
    "paras": [
     "HDR 输出为 **HDR10 MP4**（H.265 10-bit，BT.2020），且由*源*驱动——只有合成真正引用了 HDR 媒体（带 BT.2020 标记的 PQ 或 HLG 传输视频，或 16-bit PNG）时渲染才走 HDR。文字、渐变和 GSAP 动画不是 HDR 源；全由它们组成的合成无 HDR 可渲。",
     "This composition has an HDR drone clip — render it as HDR10. 默认自动检测 HDR，所以项目里真有 HDR 源时往往什么都不用说。只有要覆盖探测时才显式强制： HDR **只支持 MP4**（透明 MOV/WebM 请求回落到 SDR），且在 Lambda 上**不可用**（分布式渲染仅 SDR）。源要求和验证见 [HDR 指南](https://hyperframes.heygen.com/guides/hdr.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "“force HDR” → 即便无 HDR 源也强制走 HDR 路径",
     "“force SDR” → 即便有 HDR 源也强制标准范围"
    ]
   },
   {
    "h": "渲染在哪里运行",
    "p": "",
    "paras": [
     "本地渲染是默认，也是整个迭代循环的正确选择。只有单机成为瓶颈时才用云渲染： Render this on Lambda. 它会走 HyperFrames 的 AWS Lambda 路径，把渲染扇出到大量并行工作进程。对于**单主机太长或太大**的渲染是正确选择——数分钟的视频、4K 母版或大并行批量——需要先配好 AWS 凭据。开发循环迭代请留在本地 `render`；往返比任何云分发都快。Lambda 仅 SDR（无 HDR），按计算时间计费；配置、成本形态和保守并发默认值见 [AWS Lambda 指南](https://hyperframes.heygen.com/deploy/aws-lambda.md)。",
     "Lambda 不是唯一的远程目标。**HeyGen 托管云渲染**（[指南](https://hyperframes.heygen.com/deploy/cloud.md)）完全拿掉基础设施——无需配置 AWS 账户；当你的栈已在 GCP 上时用 **Google Cloud Run**（[指南](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)）。点名你要的那一个（“render this on Cloud Run”）；路由是显式的，从不推断。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `set up Lambda so I can preview edits faster`——云分发只给快速本地循环加延迟",
     "**改为：** `render the final 3-minute 4K cut on Lambda`——真正值得扇出的负载"
    ]
   },
   {
    "h": "在花钱渲慢片之前先预览",
    "p": "",
    "paras": [
     "避免浪费 `high`/4K/HDR 渲染的最便宜办法是先判断帧。技能遵循的习惯： [!TIP] 渲染按设计需用户把关——智能体在预览处停下，只在你批准时才渲染。利用这个停顿，在付费导出昂贵文件之前锁定剪辑。"
    ],
    "codeBlocks": [],
    "bullets": [
     "保持 `preview` 运行并拖动时间线——与渲染同运行时，所见即所得。",
     "需要真实文件检查时用 `draft` 渲染迭代。",
     "剪辑锁定后才要求最终等级 / 分辨率 / 格式。",
     "**避免：** `render the final 4K HDR master` 给还没完整看过的剪辑",
     "**改为：** `draft render so I can check timing` → 批准 → `now the 4K final`"
    ]
   },
   {
    "h": "渲染失败时",
    "p": "",
    "paras": [
     "运行： 保留第一条精确错误，而非只有最后的“渲染失败”消息。后续检查见[故障排查](https://hyperframes.heygen.com/help.md)。",
     "[!TIP] 务必观看导出文件本身。预览证明项目可以播放；输出文件证明交付正确。"
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
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)",
     "[修复慢预览或慢渲染](https://hyperframes.heygen.com/guides/performance.md)",
     "[4K 渲染](https://hyperframes.heygen.com/guides/4k-rendering.md)"
    ]
   }
  ]
 },
 "guide-vfx-chain": {
  "lede": "`data-vfx-chain` 为元素提供一串逐像素 WebGL2 内核 —— 扭曲、",
  "sections": [
   {
    "h": "元素",
    "p": "",
    "paras": [
     "`version`、`nodes[]`，以及每个节点的 `type` / `id` / `enabled` / `params`。",
     "补间，如同其他每个导出变量。运行时在每次绘制时先读取 CSS 变量， 解析不到时回退到 `params`。",
     "`(x, y, t, params)` 之外像素时才出现 —— 详见下方[捕获](#capture)。其唯一子元素 `.hf-vfx-in` 是纹理 源。给 `.hf-vfx-in` 指定**显式像素盒子**（`width`/`height`，即图层自身的尺寸）—— `position:absolute; inset:0` 在 `layoutsubtree` 画布内没有可解析的包含块，会坍缩为 0×0，导致捕获成功却什么都不绘制，且无声无息。",
     "`.hf-vfx-in` 上（捕获之内）；**之后**运行的放在 宿主上（在外，由普通页面合成器应用到 `.hf-vfx-out`）。链顺序即嵌套顺序。",
     "`position:absolute; inset:0`，尺寸为宿主自身的（未变换）布局 盒子 —— `offsetWidth`/`offsetHeight` —— 乘以 devicePixelRatio，而非宿主变换后的包围盒。",
     "宿主上的 GSAP 缩放或旋转不会放大或拉伸捕获。"
    ],
    "codeBlocks": [
     {
      "code": "<div id=\"rw-main-text\" class=\"clip\" data-start=\"0\" data-duration=\"8.8\"\n     data-vfx-chain='{\"version\":1,\"nodes\":[{\"type\":\"displacement-map\",\"id\":\"n1\",\"params\":{\"useH\":1,\"useV\":2,\"edge\":0,\"expand\":true}},{\"type\":\"wave-warp\",\"id\":\"n2\",\"params\":{\"waveType\":1,\"direction\":0,\"speed\":1,\"pinning\":1,\"phase\":0}}]}'\n     style=\"--vfx-n1-maxH:150;--vfx-n1-maxV:150;--vfx-n2-height:21;--vfx-n2-width:93.4\">\n  <canvas layoutsubtree class=\"hf-vfx-src\"><div class=\"hf-vfx-in\">…layer content, with any PRECEDING CSS/SVG effects already applied on this wrapper…</div></canvas>\n  <canvas class=\"hf-vfx-out\"></canvas>\n</div>",
      "file": "HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "`data-vfx-chain` 是 JSON，字段名与 `data-fx-chain` 相同：",
     "**静态参数**位于 `params` 中。**动画参数**位于宿主元素上的 CSS 自定义属性中，命名为 `--vfx-<nodeId>-<key>`，由 GSAP",
     "`.hf-vfx-src`（一个 `<canvas layoutsubtree>`）仅在某个节点的定义需要读取",
     "在 After Effects 顺序中**先于**链运行的特效放在",
     "如果未提供 `.hf-vfx-out`，运行时会创建它。它是"
    ]
   },
   {
    "h": "捕获",
    "p": "",
    "paras": [
     "每个内核在其 **def** 上、而非元素上声明 `capture` 需求：",
     "| capture | 读取 | 渲染捕获路径 | 本计划中交付 |",
     "| - | - | - | - |",
     "| `none` | 仅 `(x, y, t, params)` | 截图捕获，工作者未固定 | `fractal-noise` |",
     "| `self` | 通过 `drawElementImage` 读取其自身图层像素 | 截图捕获，**固定为 1 个工作者** | `wave-warp`、`displacement-map` |",
     "| `backdrop` | 其下方的每个图层 | 截图捕获，固定为 1 个工作者 | 尚未 —— 后续阶段 | `self` 或 `backdrop` 节点会将整个合成置于截图捕获并固定为一个工作者（`htmlInCanvas` render-mode hint 正是因此：跨并行浏览器实例的绘制缓存竞态是已测得的失败，而非理论风险）。`none` 节点仍强制截图捕获 —— WebGL 内容不是快速 `drawElementImage` 路径能真实读回的东西 —— 但工作者数量保持自动解析。",
     "两者都不是与“在 After Effects 中烘焙特效并发视频而非实时链”的替代方案相比的回归：烘焙需要在前端付出一次完整的 AE 渲染，且得到的胶片无法重定时。但与**不带**该节点的同一合成的 `drawElement` 渲染相比，两者",
     "`self` 和 `none` 捕获都更慢。请为此留预算，不要给不需要逐像素处理的图层加链。"
    ],
    "codeBlocks": []
   },
   {
    "h": "确定性",
    "p": "",
    "paras": [
     "同一后端、同一 `(u_t, params)` → `.hf-vfx-out` 字节一致的像素。内核只能读取 `(u_size, u_t, u_fps, params, u_src)` —— 不使用 `Math.random`、 不读时钟、两次绘制之间不带状态。正是因此 `data-vfx-chain`",
     "可以在渲染任意位置安全定位，包括向后定位，仍得到与 在浏览器编辑器中正向拖到该处相同的帧。"
    ],
    "codeBlocks": []
   },
   {
    "h": "浏览器编辑器与浏览器支持",
    "p": "",
    "paras": [
     "`self` 和 `backdrop` 捕获依赖 `drawElementImage`，即 [HTML in Canvas](https://hyperframes.heygen.com/guides/html-in-canvas.md) 使用的同一",
     "实验性 Chromium API。在普通浏览器预览中，请在兼容的 Chrome 或 Brave 构建中启用 `chrome://flags/#canvas-draw-element` 并重启，再打开 使用捕获链的合成。没有它 —— 或在无 WebGL2 的浏览器构建上 —— 链会大声失败（控制台一行 `[HyperFrames] composition script error:` 写明该标志），而非悄悄渲染错误结果。`none` 捕获链（如 `fractal-noise`）只需 WebGL2，无需该标志。"
    ],
    "codeBlocks": []
   },
   {
    "h": "已知约束",
    "p": "",
    "paras": [
     "手写链之前，运行时实现发现的几件事值得了解： `drawElementImage` 对孫子元素抛错。`.hf-vfx-in` 必须是画布的 唯一子元素。",
     "`.hf-vfx-out` 的分辨率。",
     "路径都按帧定位，因此这只影响浏览器编辑器无拖动播放， 链在定位之间不会重绘。",
     "捕获型 `data-vfx-chain` 节点的合成，在过渡自身活动窗口之外可能从过期纹理绘制链。如果你的合成同时使用 两者、且过渡之外的链看起来错误，原因即在此。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**`.hf-vfx-in` 需要显式像素盒子。**见上方[元素](#element) —— 不给的话正是这一项会导致无声、空的捕获。",
     "**只有 `layoutsubtree` 画布的直接子元素可被捕获。**",
     "**输出尺寸遵循宿主的布局盒子，而非其变换后包围盒。**宿主上的 GSAP `transform: scale()` 或旋转不会影响",
     "**链在定位时重绘，而非每个动画帧 tick。**所有渲染",
     "**与页面侧着色器过渡的已知冲突。**同时运行 `@hyperframes/shader-transitions` 页面侧合成和"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [HTML in Canvas](https://hyperframes.heygen.com/guides/html-in-canvas.md) 同样的 `drawElementImage` 捕获，用于将 DOM 合成到 3D 场景",
     "而非逐像素内核。",
     "[card] [音频特效实现](https://hyperframes.heygen.com/reference/audio-effects.md) `data-vfx-chain` 对应的 `data-fx-chain` 形状，供音频架使用。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[变更日志](https://hyperframes.heygen.com/changelog.md)",
     "[音频特效实现](https://hyperframes.heygen.com/reference/audio-effects.md)",
     "[Per Word Rise](https://hyperframes.heygen.com/catalog/components/per-word-rise.md)"
    ]
   }
  ]
 },
 "guide-webmcp": {
  "lede": "Studio 将自有能力注册为 WebMCP 工具，因此运行在你浏览器中的 AI 代理可读取 Studio 的掌握内容，做出与你相同的编辑。",
  "sections": [
   {
    "h": "效果",
    "p": "",
    "paras": [
     "有了工具，代理可检查以源码为后盾的场景，做一次定向编辑，并检查结果： 最后一步最重要。它让代理判断改动，而非靠猜。"
    ],
    "codeBlocks": [
     {
      "code": "studio_look                                      -> find the headline and copy its handle\nstudio_select    {\"handle\":\"hf:abc123\"}          -> share the target with the person in Studio\nstudio_inspect   {\"handle\":\"hf:abc123\"}          -> read its styles, text, and capabilities\nstudio_set_style {\"handle\":\"hf:abc123\",\n                  \"styles\":{\"color\":\"red\"}}     -> write that source-backed element\nstudio_frame     {\"time\":2.4}                    -> capture the composition at 2.4 seconds",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "开启",
    "p": "",
    "paras": [
     "Studio 加载时工具自动注册。代理能否*触达*它们取决于浏览器。",
     "| Browser | Status |",
     "| - | - |",
     "| Chrome 149 | Origin Trial |",
     "| Edge 150 | Origin Trial |",
     "| ChatGPT Desktop | 已发布 |",
     "| Brave (Leo) | 实验性 |",
     "| Firefox, Safari | 尚未支持 | 本地 Chrome 开发请启用标志并重启： 然后从 Studio 控制台确认工具存在： [!NOTE] 注册是异步的，Studio 加载瞬间就读 `getTools()` 的调用方可能看到不完整列表。请等待 `toolchange` 事件，或轮询至数量稳定在十二个。",
     "[!WARNING] API 是 `document.modelContext`，不是 `navigator.modelContext`。许多已发布示例用后者。它是某些 polyfill 添加的兼容垫片，不在规范内，因此特性检测它会误导你。",
     "无原生支持的浏览器中，Studio 会加载捆绑的 polyfill，让 WebMCP 桥扩展仍能连接。浏览器已具备 API 时不下载任何东西。Studio 偏好禁用时不注册任何工具。"
    ],
    "codeBlocks": [
     {
      "code": "chrome://flags/#enable-webmcp-testing",
      "file": "TEXT CHROME://FLAGS THEME={NULL}"
     },
     {
      "code": "const tools = await document.modelContext.getTools();\nconsole.log(tools.map((tool) => tool.name));\n// [\"studio_look\", \"studio_select\", \"studio_seek\", ...]",
      "file": "JAVASCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "读取",
    "p": "",
    "paras": [
     "| Tool | Answers |",
     "| - | - |",
     "| `studio_look` | 当前项目与合成、播放头、选择、撤销状态，以及按嵌套顺序的有限源码后盾场景 |",
     "| `studio_inspect` | 单元素全量：解析后样式、文本字段、框、动画及其接受内容 |",
     "| `studio_frame` | 任意时刻合成的 PNG | `studio_look` 返回的每个元素都有**句柄**。它还报告 `sourceFile`、`parentHandle`、`depth` 与 `childCount`，因此代理能区分两个嵌套场景文件中相同的作者 ID。原样传回句柄到每次元素写入。句柄是源码安全地址，不是 CSS 选择器。"
    ],
    "codeBlocks": []
   },
   {
    "h": "变更",
    "p": "",
    "paras": [
     "| Tool | Does |",
     "| - | - |",
     "| `studio_select` | 选择元素，与点击它完全一致 |",
     "| `studio_seek` | 移动播放头 |",
     "| `studio_set_text` | 重写文本 |",
     "| `studio_set_style` | 设置内联样式 |",
     "| `studio_transform` | 移动、缩放或旋转 |",
     "| `studio_add_animation` | 在播放头添加 GSAP 动画 |",
     "| `studio_update_animation` | 改变时长、缓动或位置 |",
     "| `studio_add_keyframe` | 给动画添加关键帧 |",
     "| `studio_delete_animation` | 移除动画 | 元素写入经 Studio 使用的同一提交 actor 运行。当该 actor 转发有版本的持久性证据时，回执会命名源文件与内容版本，编辑进入同一撤销历史。无此证据的 actor 停留在 `dispatched`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "两条值得知道的规则",
    "p": "",
    "paras": [
     "**先表意图，再显式寻址每次写入。** 首次写入目标前，先调 `studio_select`，让 Studio 中人看到与代理相同的选择框与检查器。选择表达意图，不授予写入权限。`studio_set_text`、`studio_set_style`、`studio_transform` 与动画工具仍需要该目标从 `studio_look` 来的句柄，因此之后的人为点击不能改导已寻址写入。",
     "**读回执阶段。** 写入结果区分接受与证明：",
     "| Stage | What it proves |",
     "| - | - |",
     "| `refused` | 未运行提交 actor。先修句柄、输入、能力或 Studio 状态再重试 |",
     "| `dispatched` | actor 接受了请求，但工具没有持久版本或独立读回。用 `studio_inspect` 或 `studio_frame` 跟进 |",
     "| `saved` | Studio 收到了有版本的证据，命名源文件已持久化该写入 |",
     "| `verified` | 写入已保存，独立读回观察到了结果 |",
     "| `failed` | 提交 actor 已运行后失败。检查 `kind`、`reason` 与 `hint` | `changed` 与阶段独立。已保存的无操作仍然真实：文件接受了请求，但值本来已存在。样式写入按属性给回执，可能部分成功。动画处理目前在持久化与实时预览同步结算后报告 `dispatched`；底层处理者无法提供证据时，它不宣称有版本持久性或独立读回。迟到的取消请求也不撤销已分发或已保存的编辑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "与代理并肩工作",
    "p": "",
    "paras": [
     "本功能就是为你与看着同一合成的代理打造的。Studio 正常展示选择，并在事务解析期间围绕寻址元素加**拓扑镜头**。新目标被获取、重复编辑定位更快、持久结果落地。镜头是仅 Studio 的事务反馈：不进作者 HTML、预览 iframe、捕获帧或缩略图。",
     "写入工具成功完成时，打开的 Studio 预览已同步该编辑。观看者无需拖动时间线或刷新浏览器即可看到。",
     "接受源文件变更后，Studio 推进项目缩略图修订号，并重新生成可见合成缩略图。这样侧边栏能收敛到已保存项目，而非继续显示编辑前的缓存像素。",
     "[!NOTE] 自动保存暂停、或文件外部变更等你决定时，Studio 会拒绝代理写入并告知原因。解决横幅后可继续。"
    ],
    "codeBlocks": []
   },
   {
    "h": "关掉它",
    "p": "",
    "paras": [
     "暂无设置开关。开关是 Studio 偏好，从控制台设置并刷新： 按上面那样读现有对象并展开。单独写 `{agentToolsEnabled: false}` 会替换整个偏好 blob，丢失面板尺寸、缩放与时间线设置。",
     "改回 `true` 或删除该键可重新启用。",
     "浏览器在自有权限提示后门控工具访问，因此注册工具不等于授予访问。提示频率（每站点一次还是每次调用）由浏览器决定，API 处于 origin trial 期间仍在变化。"
    ],
    "codeBlocks": [
     {
      "code": "const KEY = \"hf-studio-ui-preferences\";\nconst prefs = JSON.parse(localStorage.getItem(KEY) ?? \"{}\");\nlocalStorage.setItem(KEY, JSON.stringify({ ...prefs, agentToolsEnabled: false }));\nlocation.reload();",
      "file": "JAVASCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[变更日志](https://hyperframes.heygen.com/changelog.md)",
     "[连接你的代理](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)",
     "[在 Studio 应用中做首个视频](https://hyperframes.heygen.com/studio-app/first-video.md)"
    ]
   }
  ]
 },
 "help-product": {
  "lede": "本页用人话说明有意义的产品变化。详细信息和影片请看 [每周更新](https://hyperframes.heygen.com/weekly-updates.md)，每个版本化改动请看 [完整发布存档](https://hyperframes.heygen.com/changelog.md)。",
  "sections": [
   {
    "h": "更可靠的媒体预览",
    "p": "",
    "paras": [
     "Studio、已发布项目和渲染流水线可以自动为难解的视频格式准备兼容的预览版本。这对 HEVC 等浏览器可能无法解码、但 FFmpeg 可以渲染的文件尤其有帮助。",
     "这意味着："
    ],
    "codeBlocks": [],
    "bullets": [
     "Studio 中更少的视频黑帧；",
     "预览和渲染在媒体判断上更一致；",
     "已发布项目可以包含预好的媒体；",
     "不希望自动代理的项目可以退出。"
    ]
   },
   {
    "h": "更清晰的 Studio 检查器",
    "p": "",
    "paras": [
     "更扁平的 Studio 检查器现在是默认的编辑界面。文字、布局、样式、动态、媒体、调色和元素专用控件不再需要在多个互相对立的面板间来回找，更易于扫读。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更可靠的渲染和长任务",
    "p": "",
    "paras": [
     "最近的发布改进了软件 GPU 采集、Windows 行为、浏览器工作进程复用、失败诊断、音频处理和合成同步。",
     "对大多数用户而言结果很简单：长渲染或媒体密集渲染更少地卡住或产出与预览不一致的帧。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更好的分镜审查和智能体复审",
    "p": "",
    "paras": [
     "分镜审查现在有更清晰的交接行为、更安全的历史导航，以及更明确的人工评论与下一轮智能体执行之间的关系。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更安全的智能体生成动态",
    "p": "",
    "paras": [
     "Lint 和验证现在能捕捉更多动画问题，涉及跳转顺序、隐藏初始状态、冲突写入、相对值和 SVG 描边。"
    ],
    "codeBlocks": []
   },
   {
    "h": "保持项目最新",
    "p": "",
    "paras": [
     "脚手架项目可以固定 HyperFrames 版本以保证可复现性。请智能体在影响渲染的工作之前先检查项目，或运行： 升级带有自定义集成的生产工作流之前，请阅读 [发布存档](https://hyperframes.heygen.com/changelog.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes@latest upgrade --project . --check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[更新日志流程](https://hyperframes.heygen.com/contributing/changelog-process.md)",
     "[每周更新](https://hyperframes.heygen.com/weekly-updates.md)",
     "[更新日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "help-thirty": {
  "lede": "三十节短课，每天一节，每节都在发布前构建和渲染过。第 30 天把它们全部剪成一版：",
  "sections": [
   {
    "h": "开始和创作",
    "p": "",
    "paras": [
     "第 1 至 9 天覆盖输入：仓库、音轨、主题、演讲者、设计文件。",
     "<ol />"
    ],
    "codeBlocks": []
   },
   {
    "h": "指导和打磨",
    "p": "",
    "paras": [
     "第 10 至 19 天讲的是如何引导：怎样提问、检查什么，以及渲染前要修什么。",
     "<ol />"
    ],
    "codeBlocks": []
   },
   {
    "h": "扩展和交付",
    "p": "",
    "paras": [
     "第 20 至 30 天从单个合成走向可重复的流水线：可复用的区块、变量、调色，以及在笔记本之外渲染。",
     "<ol />"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)",
     "[HyperFrames 与 Remotion 之比较](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)",
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)"
    ]
   }
  ]
 },
 "help-trouble": {
  "lede": "找到你看到的问题。问题分处三个地方：",
  "sections": [
   {
    "h": "在 Studio 应用中",
    "p": "",
    "paras": [
     "应用中大多数问题来自它配合的智能体（Claude Code、Codex 等），不是 HyperFrames 本身。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更新如何到达",
    "p": "",
    "paras": [
     "应用打开时会检查新版本，之后每几分钟再检查一次。有一个就绪时，你会收到通知，右下角会出现圆形更新按钮，Framey 会指向它：**There's a new update. Click here**。",
     "如需手动检查，打开 **Settings** > **Updates**，选择 **Check for updates**。在 Mac 上，菜单栏中的 **HyperFrames** > **Check for Updates…** 有相同作用。有些更新会带一段介绍新内容的短视频。",
     "**Settings** > **Updates** 中的 **Automatic updates** 默认开启：你离开时应用会自行更新。关闭它则只有点击时才更新。",
     "如果更新提示 **The update is taking longer than it should** 或 **The update didn't finish**，点击更新按钮并选择 **Try again** 取消并开始新的更新，或选择 **Download it instead** 从下载页获取最新版本。**Settings** > **Updates** 中的 **Download the latest version** 也会打开下载页。如果提示 **Could not check for updates**，检查网络，然后重试。"
    ],
    "codeBlocks": [],
    "bullets": [
     "点击更新按钮。更新下载时它会逐渐填满。",
     "一旦没有任务在运行，应用会自动重启：没有智能体运行、导出或设置过程在进行。它会重新打开你之前打开的项目，你不会丢失任何东西。"
    ]
   },
   {
    "h": "应用让我登录 HyperFrames",
    "p": "",
    "paras": [
     "发送请求需要你的 HeyGen 账号。选择 **Continue with HeyGen**，在浏览器中 10 分钟内完成。如果提示 **Couldn't renew your sign-in** 或 **Couldn't finish signing in**，检查网络（以及 VPN 或代理是否覆盖所有应用）。如果提示 **Sign-in timed out**、**Your sign-in expired** 或 **HeyGen didn't sign you in**，选择 **Try again**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Claude Code 已退出登录",
    "p": "",
    "paras": [
     "聊天中会显示一张登录卡片。你的消息会被保留。选择 **Sign in**，在浏览器中完成，回到后消息会自动发送。如 Codex 已就绪，选择 **Use Codex instead** 用 Codex 发送。",
     "对于 Codex，聊天会显示 **Codex is not signed in**。选择 **Copy sign-in command**，在终端中运行它，然后选择 **Try again**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "我的智能体达到使用上限",
    "p": "",
    "paras": [
     "聊天会显示诸如 **Claude Code hit its usage limit. It resets** 于某一时间的消息。这是智能体自身的套餐限制，不是 HyperFrames 的。等重置后选择 **Try again**，或如果另一个智能体已设置好，选择 **Switch to Codex**（或 **Switch to Claude Code**）。",
     "如果聊天说智能体 **had a problem on its side**，说明智能体服务繁忙或宕机。几分钟后重试。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Claude Code 阻止了一个步骤",
    "p": "",
    "paras": [
     "**Settings** > **Agent** 中的 **Agent access** 决定 Claude Code 可以做什么： 在 **Auto** 下，Claude Code 拒绝的步骤会显示为运行工作日志中的 blocked。如果所需要的修改就依赖那个步骤，切换到 **Full access** 并重新发送请求。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Auto**（默认）：在你的项目中工作，自己阻止危险步骤。",
     "**Full access**：可安装、使用互联网、运行任何东西，不检查。"
    ]
   },
   {
    "h": "智能体未安装或无法启动",
    "p": "",
    "paras": [
     "聊天会显示 Claude Code **is not installed**。选择 **Try again**，应用会为你装好。如果 Claude Code 已安装但无法启动，在 **Settings** > **Permissions** 中选择 **Reinstall**。手动命令见 [连接你的智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "其他消息",
    "p": "",
    "paras": [
     "| 聊天提示 | 这样做 |",
     "| - | - |",
     "| **… ran out of room in this chat** | 选择 **Start a fresh session**。 |",
     "| **… needs an update to use** 某个模型 | 选择聊天中的更新按钮。 |",
     "| **… could not reach the internet** | 检查连接，然后 **Try again**。 |",
     "| **… could not finish this change** | 选择 **Try again**，或换个说法再说一遍。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "你的作品保存在哪里",
    "p": "",
    "paras": [
     "每个项目都是普通 HyperFrames 项目文件夹，因此也可在 [Studio 网页编辑器](https://hyperframes.heygen.com/studio/index.md) 和 [命令行](https://hyperframes.heygen.com/developers/cli.md) 中打开。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**你的项目**：主文件夹中的隐藏 `.hyperframes-studio` 文件夹。",
     "**导出的视频**：你的 Downloads 文件夹。",
     "**应用设置和登录**：Mac 上为家目录中的 `Library/Application Support/HyperFrames`，Windows 上为 `%APPDATA%\\HyperFrames`，Linux 上为家目录中的 `.config/HyperFrames`。"
    ]
   },
   {
    "h": "直接编辑不可用",
    "p": "",
    "paras": [
     "选中元素可能是生成的、嵌套的，或不支持该操作。",
     "试检查器、打开嵌套合成、把上下文复制给智能体，或做聚焦的源文件修改。"
    ],
    "codeBlocks": []
   },
   {
    "h": "画布移动变成了动画",
    "p": "",
    "paras": [
     "检查自动关键帧是否开启。撤销该编辑，关闭它，再做一次布局修改。"
    ],
    "codeBlocks": []
   },
   {
    "h": "时间轴编辑落在了错误时间",
    "p": "",
    "paras": [
     "撤销，放大，把播放头放得更精确，再试一次。检查吸附是否把边界挪到了附近的片段或节拍。"
    ],
    "codeBlocks": []
   },
   {
    "h": "媒体缺失或很慢",
    "p": "",
    "paras": [
     "确认文件在项目内存在且路径正确。大媒体需要时间准备预览。远程文件可能因访问或跨域限制而失败。"
    ],
    "codeBlocks": []
   },
   {
    "h": "编辑保存失败",
    "p": "",
    "paras": [
     "保留错误可见，避免在其上叠加更多编辑，并撤销（如可撤销）。把问题、引发它的操作一起复制给智能体。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染失败",
    "p": "",
    "paras": [
     "保留完整错误。运行项目检查，确认 FFmpeg 和源媒体可用，然后重试： 底层故障请继续到 [通用故障排查](https://hyperframes.heygen.com/help.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "视频在预览中是黑的但渲染正常",
    "p": "",
    "paras": [
     "浏览器可能无法解码源编码，尽管 FFmpeg 可以。",
     "HyperFrames 通常会创建并使用兼容的预览代理。如果画面仍是黑的："
    ],
    "codeBlocks": [],
    "bullets": [
     "确认自动代理未被禁用；",
     "运行 `npx hyperframes doctor`；",
     "运行 `npx hyperframes lint --verbose` 找出受影响的文件；",
     "确认源文件存在且可读。"
    ]
   },
   {
    "h": "视频、图片或音频缺失",
    "p": "",
    "paras": [
     "优先使用本地项目素材。确认其路径、文件名大小写，以及是否被移动或重命名。",
     "远程媒体可能因权限、URL 过期或跨域限制而失败。"
    ],
    "codeBlocks": []
   },
   {
    "h": "预览卡顿",
    "p": "",
    "paras": [
     "常见原因： 检查卡顿是否发生在某一场景。先缩放超大媒体并简化昂贵元素，再考虑降低整个项目的质量。",
     "这些问题常出现在智能体写的或手动编辑的源文件中。"
    ],
    "codeBlocks": [],
    "bullets": [
     "非常大的源图片；",
     "多个大的 `backdrop-filter` 模糊；",
     "动画元素上昂贵的阴影或滤镜；",
     "大量大面积重叠图层。"
    ]
   },
   {
    "h": "视频在边框动画时冻结",
    "p": "",
    "paras": [
     "不要直接在 `<video>` 元素上动画 `width`、`height`、`top` 或 `left`。",
     "把视频放在包装器中，动画包装器："
    ],
    "codeBlocks": [
     {
      "code": "<div id=\"video-wrapper\">\n  <video src=\"./assets/video.mp4\" style=\"width:100%;height:100%\"></video>\n</div>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "tl.to(\"#video-wrapper\", { width: 500, height: 280, x: 1200 }, 2);",
      "file": "JAVASCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "媒体播放不同步",
    "p": "",
    "paras": [
     "不要从合成脚本调用 `play()`、`pause()` 或设置 `currentTime`。",
     "HyperFrames 拥有媒体播放。用时序和媒体属性描述文件何时播放。"
    ],
    "codeBlocks": []
   },
   {
    "h": "合成结束太早",
    "p": "",
    "paras": [
     "检查解析后的合成时长： 短动画时间轴会让项目在底层媒体之前结束。按正确的模式延长所编写的根时长或时间轴。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes compositions",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "定时元素始终可见",
    "p": "",
    "paras": [
     "定时可见元素需要 `class=\"clip\"` 以及其时序属性。",
     "`npx hyperframes lint` 通常会捕捉这一问题。"
    ],
    "codeBlocks": [
     {
      "code": "<h1 class=\"clip\" data-start=\"2\" data-duration=\"5\" data-track-index=\"0\">\n  Hello\n</h1>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "动画静止",
    "p": "",
    "paras": [
     "检查动画是否暂停并用确切的合成 ID 注册。",
     "`my-video` 必须匹配 `data-composition-id=\"my-video\"`。"
    ],
    "codeBlocks": [
     {
      "code": "const timeline = gsap.timeline({ paused: true });\nwindow.__timelines = window.__timelines || {};\nwindow.__timelines[\"my-video\"] = timeline;",
      "file": "JAVASCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "从变量改根时长没有效果",
    "p": "",
    "paras": [
     "根渲染时长在合成脚本运行之前决定。直接编写或生成预期的根 `data-duration`。",
     "片段时长仍可变化。安全可改项见 [Variables](https://hyperframes.heygen.com/concepts/variables.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "预览检查了意外的端口范围",
    "p": "",
    "paras": [
     "启动受管的后台预览时，用显式端口指定发现范围： 发现检查 4567–4666 端口。如果本项目在范围外端口有已保存的预览，只有该已保存端口会单独检查。把已有的受管预览移到所请求的端口时，加 `--force-new` 停止并替换它。不加 `--port` 时，发现从已保存预览的端口开始。",
     "`preview --status --port 4567` 使用相同的发现范围，并单独检查范围外的已保存端口。在本项目的预览中，状态优先返回确切请求端口，其次已保存预览端口，再其次其他匹配。已保存日志路径仅在所选服务器确认为该后台预览时出现。如果无法确定监听 PID，JSON 报告 `pid: null`，文本输出省略 PID。",
     "有会话时，`preview --stop` 只检查本项目已保存的端口，即使加了显式 `--port`。没有已保存会话时，`--stop --port 4567` 在 4567–4666 端口中发现预览。停止等待只检查正在停止的端口。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes preview --background --port 4567",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "先查基础",
    "p": "",
    "paras": [
     "**1. 检查机器** 它检查运行时、浏览器、FFmpeg 和其他本地需求。",
     "**2. 检查项目** **3. 查看可见结果** 打开浏览器编辑器或抓取关键帧： **4. 给智能体有用上下文** 复制完整错误，并加上你做了什么、预期是什么、什么不能变。",
     "选择、画布、时间轴、自动保存和仅限编辑器的故障，使用 [浏览器编辑器故障排查](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes doctor",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes snapshot --at 0,3,8",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "“No composition found”",
    "p": "",
    "paras": [
     "项目需要包含有效合成根（带 `data-composition-id`、宽和高）的 `index.html`。",
     "创建新项目： 或把当前源文件与 [Compositions](https://hyperframes.heygen.com/concepts/compositions.md) 对比。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes init my-video",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "“FFmpeg not found”",
    "p": "",
    "paras": [
     "本地视频编码需要 FFmpeg。",
     "用 `ffmpeg -version` 验证，然后重新运行 `npx hyperframes doctor`。"
    ],
    "codeBlocks": [
     {
      "code": "brew install ffmpeg",
      "file": "BASH MACOS THEME={NULL}"
     },
     {
      "code": "sudo apt install ffmpeg",
      "file": "BASH UBUNTU OR DEBIAN THEME={NULL}"
     },
     {
      "code": "# Download a 64-bit Windows build from:\n# https://ffmpeg.org/download.html#build-windows\n# Then add its bin directory to PATH.",
      "file": "POWERSHELL WINDOWS THEME={NULL}"
     }
    ]
   },
   {
    "h": "Docker 渲染无法启动",
    "p": "",
    "paras": [
     "运行 `docker info`。",
     "确认 Docker 已安装、守护进程在运行、你的用户有权限，且首次拉取镜像能到达注册表。"
    ],
    "codeBlocks": []
   },
   {
    "h": "“HyperFrames runtime failed”",
    "p": "",
    "paras": [
     "当启动错误包含 `[thrown at: ...]` 时，用那些脚本位置找出失败的代码。短堆栈会显示错误开始的位置，以及合成调用它的位置（当可辨识时）。位置来自浏览器，可能指向打包代码。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染外观与预览不同",
    "p": "",
    "paras": [
     "检查字体、远程媒体、浏览器专属效果和实际导出的文件。",
     "需要固定渲染环境时用 Docker："
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --docker --output output.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "重复场景字体让导出 HTML 很大",
    "p": "",
    "paras": [
     "嵌入本地字体文件之前，渲染编译器会从活动、无条件的样式中移除重复的顶层 `@font-face` 声明。最后一个副本保留原位，因此与其他 font face 的相对顺序保持不变。条件规则和替代样式不受影响，源场景文件也不会被改动。",
     "只有 family、`src` 和描述符都相同的声明才算重复。如果导出仍很大，让重复场景字体规则完全一致，或把字体声明一次放在共享的根样式中。"
    ],
    "codeBlocks": []
   },
   {
    "h": "每次渲染都比预期多约 45 秒",
    "p": "",
    "paras": [
     "从不注册 GSAP 时间轴的合成，仍让生产器等待时间轴。生产器轮询 `window.__timelines[<id>]`，直到合成播放器报告就绪，默认超时为 45 秒。这个等待是每次渲染都付的固定成本，因此降低质量或缩放媒体都不会缩小它。",
     "声明合成没有时间轴： `npx hyperframes lint` 会把缺失的属性报告为 `missing_data_no_timeline`。已注册时间轴的合成不受影响：轮询在时间轴出现时立即返回，远早于超时。",
     "如需注册时间轴而非跳过等待，见 [GSAP 动画](https://hyperframes.heygen.com/guides/gsap-animation.md)。"
    ],
    "codeBlocks": [
     {
      "code": "<div\n  data-composition-id=\"promo\"\n  data-no-timeline\n  data-width=\"1920\"\n  data-height=\"1080\"\n  data-duration=\"6\"\n></div>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染很慢",
    "p": "",
    "paras": [
     "下面的原因随项目规模放大。每次渲染都存在的固定代价，先查上面的时间轴轮询。",
     "迭代期间： 调 worker 设置时运行 `npx hyperframes benchmark`。"
    ],
    "codeBlocks": [],
    "bullets": [
     "用草稿质量；",
     "开始下一次完整渲染前先查看快照；",
     "缩放大型源媒体；",
     "简化昂贵滤镜；",
     "在需要之前不要提高分辨率或帧率。"
    ]
   },
   {
    "h": "WSL2 下渲染很慢",
    "p": "",
    "paras": [
     "WSL2 可以把显卡暴露给 Linux，但无头 Chrome 可能用不了它。渲染会回退到软件渲染，在长或特效重的视频上慢数倍。渲染日志会说： 后面的行会说明 HyperFrames 检查了什么。如果里面说你的用户不在 `render` 组，把自己加进去，重启 WSL，再渲染：",
     "如果仍未使用 GPU，改为在 Windows 中渲染。把项目复制到 Windows 驱动器（例如 `C:\\Users\\you\\renders\\my-video`），在 PowerShell 中跑同样的命令，此时 Chrome 通过 Direct3D 使用显卡：",
     "在普通 Windows 文件夹运行，不要在 `\\\\wsl.localhost\\...` 路径。"
    ],
    "codeBlocks": [
     {
      "code": "[hyperframes] browserGpuMode probe → software (WebGL unavailable)\n[hyperframes] WSL: the GPU check found no hardware GPU, so this render uses software WebGL ...",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "sudo usermod -aG render $USER\n# then, in Windows PowerShell:\nwsl --shutdown",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes render --output final.mp4",
      "file": "POWERSHELL THEME={NULL}"
     }
    ]
   },
   {
    "h": "期望 HDR 但得到 SDR",
    "p": "",
    "paras": [
     "HDR 需要受支持的输出和正确的源颜色元数据。MP4 是常规 HDR 输出路径；WebM 和 MOV 可能回退到 SDR。",
     "仅当整个源和交付流程都为 HDR 而设计时才用 `--hdr`。交付前阅读 [HDR 渲染](https://hyperframes.heygen.com/guides/hdr.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "仍然卡住",
    "p": "",
    "paras": [
     "运行： 然后搜 [GitHub issues](https://github.com/heygen-com/hyperframes/issues)，或打开报告，附上： 不要包含秘密、私有媒体或访问令牌。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes info",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "完整错误；",
     "复现步骤；",
     "HyperFrames 版本和操作系统；",
     "问题在预览、检查还是渲染时出现；",
     "可分享的小项目（尽量提供）。"
    ]
   },
   {
    "h": "分享反馈",
    "p": "",
    "paras": [
     "有用的反馈说明你想要的结果和什么挡住了你。"
    ],
    "codeBlocks": []
   },
   {
    "h": "与 HyperFrames 团队交流",
    "p": "",
    "paras": [
     "你在用 HyperFrames 做什么？我们想了解你在创作什么、在哪卡住、什么比应该的更难。",
     "[预约与 HyperFrames 团队 30 分钟轻松交流](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cSpKoDgmcmRrgekrnrgqmvPT8W6F2Zg6e7MY7IJqaZKwpn_I0NdTHkN390iguMepE_NVg8ezb?gv=true)。无需准备，这是产品研究——不是销售电话。"
    ],
    "codeBlocks": []
   },
   {
    "h": "从命令行发送反馈",
    "p": "",
    "paras": [
     "在 HyperFrames 项目中运行： 评分 0 到 10。评论可选，但具体示例通常比只给分数有用。",
     "无评分的评论是无分数的报告，说明需要 HyperFrames 目前做不到的事。它不计入评分："
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes feedback --rating 7 --comment \"The render finished, but the captions were missing.\"",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes feedback --comment \"MISSING FEATURE: trim a clip from the timeline | WORKAROUND: none\"",
      "file": "BASH THEME={NULL}"
     }
    ]
   }
  ]
 },
 "media-effects": {
  "lede": "特效改变的是图片的观感，不是它本身。文件保持不动，所以之后可以变弱、做动画或去掉。",
  "sections": [
   {
    "h": "提需求要观感",
    "p": "",
    "paras": [
     "说出想要的感觉即可，不用知道特效名： 在 Studio 应用和自己的智能体里都一样。想从喜欢的视频偷学观感，把它加为参考，说 “grade it like this”。"
    ],
    "codeBlocks": [
     {
      "code": "Make the product clip feel like a clean two-ink editorial print. Keep the label readable.\nThe interview looks too dark and slightly cold. Keep skin natural, no filtered look.\nPixelate the email address in the screen recording from 0:04 to 0:07.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "特效",
    "p": "",
    "paras": [
     "![One presenter frame shown as the original, pixelated, two-ink print, and ASCII treatments](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/media-effects-grid-v1.png)",
     "同一个源，四种成品：原图、像素化、双色印刷和 ASCII。",
     "要么果断用强观感，要么不用：半强度的 ASCII 看起来像失误。颗粒和暗角用下面的颜色控制；HUD、漏光和闪光用 [目录叠加层](https://hyperframes.heygen.com/catalog.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**基础：** 模糊、像素化、辉光。遮住东西、拉焦点、让高光发光。",
     "**复古和故障：** 磁带破损、胶片痕迹、扫描线、CRT 弯曲、通道分离、数字故障、色彩柔化。老磁带、老胶片、老显示器、坏信号，带真实的跟踪抖动和颜色渗漏。",
     "**印刷：** 半调、双色印刷、有序抖动、单色网。",
     "**艺术：** ASCII（八种风格）、雕刻、排线、桑原绘画。"
    ]
   },
   {
    "h": "修正和调色",
    "p": "",
    "paras": [
     "先修正（曝光、白平衡、对比、饱和），再讲风格。没有观感能救过曝的高光或错镜。",
     "![The same presenter frame before and after a restrained natural portrait grade](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/color-grading-before-after-v1.png)",
     "同一个源在克制的自然人像调色前后的对比。",
     "<video aria-label=\"Correction, presets, curves, selective colour, scopes and a LUT on real footage\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/color-grading-demo-v1.mp4\" poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/color-grading-demo-v1.jpg\" playsInline preload=\"metadata\" />"
    ],
    "codeBlocks": []
   },
   {
    "h": "手工微调",
    "p": "",
    "paras": [
     "在[浏览器编辑器](https://hyperframes.heygen.com/studio/index.md)中，选中图片或视频，在检查器里打开 **Effects** 或 **Grade**。**Grade** 先给十三种预设，每种都在你自己的帧上预览，还有一个 **Strength** 滑块。按住对比按钮闪回原图，活动镜头里多拖几个地方看：对一帧好看的调色可能毁掉下一帧。",
     "| 控制 | 用途 |",
     "| - | - |",
     "| 预设和强度 | 先选整套观感，再回调 |",
     "| 曝光、对比、高光、阴影、白、黑 | 整体和分色调的明暗对比 |",
     "| 色温、色调、自然饱和、饱和 | 去掉偏色，或把颜色推远 |",
     "| 色轮 | 分别给阴影、中间调、高光上色 |",
     "| RGB 曲线 | 重画明暗爬升——整图，或一次一通道地画红、绿、蓝 |",
     "| 色相曲线 | 挑一种色相，只动它：平移、饱和或提亮 |",
     "| HSL 选区 | 框住一段色相、饱和和明度，只修正那些像素。最多四个，按顺序 |",
     "| 颗粒和暗角 | 加质感，或压暗边缘吸住目光 |",
     "| 自定义 LUT | 加载一个 `.cube` 文件，把每种颜色映射到另一种 | 示波器是为画面说话，不是凭屏幕判断：**直方图** 显示两端丢了多少细节，**波形** 显示画面各处的情况，**RGB 分量** 指出偏色，**矢量示波器** 把肤色放在一条已知线上。",
     "**Copy grade to** 把调色复用到其他片段上，作为起点；同样的数值很少适合两个镜头。"
    ],
    "codeBlocks": []
   },
   {
    "h": "LUT",
    "p": "",
    "paras": [
     "LUT（一个 `.cube` 文件，每边最多 65 点）把每种颜色映射到另一种，按你设的强度混合。用创意型 Rec.709 LUT。HyperFrames 不会先转相机 LOG 镜头，所以 LOG 片段需要它自带的转换，否则出来是错的。"
    ],
    "codeBlocks": []
   },
   {
    "h": "限制",
    "p": "",
    "paras": [
     "[accordion] 给智能体和代码：命令和存储格式 先看有什么、测一个源，再应用。`--dry-run` 显示改动，`--clear` 移除。",
     "```bash theme={null} npx hyperframes media-treatment --capabilities --json npx hyperframes media-treatment --selector '#interview' --analyze --json",
     "npx hyperframes media-treatment --selector '#product' --grading '{\"preset\":\"two-ink-print\"}' --apply --json ``` 在一帧上对比几种观感（最多十六种，原图在前）：",
     "```bash theme={null} npx hyperframes grade-compare --for frame.png --grades grades.json ``` 手机照片在表格中保留显示方向和宽高比；源图片不变。",
     "一切落在 `data-color-grading`，分命名节：`adjust` 修正，`details` 颗粒和暗角，`effects` 处理。像 `{\"exposure\":0.15}` 这样的扁平对象什么都不渲染，`npx hyperframes lint` 会说明它属于哪个节。",
     "```html theme={null} <video src=\"./interview.mp4\" data-color-grading='{\"preset\":\"skin-soft\",\"intensity\":0.7,\"adjust\":{\"exposure\":0.15},\"effects\":{\"bloom\":0.4}}'></video>",
     "``` 完整格式在 [HTML 架构](https://hyperframes.heygen.com/reference/html-schema.md#color-grading-and-media-effects) 和[色彩校正参考](https://hyperframes.heygen.com/reference/color-grading.md) 中。"
    ],
    "codeBlocks": [],
    "bullets": [
     "特效或调色覆盖整个图层。它不跟着人脸或物体跑：要处理画面的一部分，把那部分放到自己的图层上。",
     "作用于图片、视频和画布，不作用于文字或 HTML。",
     "仅标准视频。HDR 源以 SDR 预览，特效不会带到真正的 HDR。",
     "模糊、辉光和桑原绘画很慢；在大图层上叠几个会拖慢预览和渲染。",
     "把媒体放在项目里。另一台服务器上的文件需要正确的 CORS 头，并可能在渲染前就消失。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[添加图片和视频片段](https://hyperframes.heygen.com/guides/video-components.md)",
     "[添加配音、音乐、音效和字幕](https://hyperframes.heygen.com/guides/voice-and-audio.md)",
     "[移除视频背景](https://hyperframes.heygen.com/guides/remove-background.md)"
    ]
   }
  ]
 },
 "media-export": {
  "lede": "通过智能体、浏览器编辑器或命令行完成同一个可编辑项目。路径可以变，质量门槛不变。",
  "sections": [
   {
    "h": "1. 通过项目，而不只看一帧",
    "p": "",
    "paras": [
     "从头完整看一遍预览。先检查信息和顺序，再花时间在细节上。"
    ],
    "codeBlocks": [],
    "bullets": [
     "开头是否足够快地让主题清楚？",
     "每个场景是否都添了东西？",
     "在交付尺寸下，文字、字幕和产品画面还读得清吗？",
     "旁白、画面、音乐和音效是否一起到达？",
     "结尾是否干净收束，并让下一步动作明确？"
    ]
   },
   {
    "h": "2. 跑项目检查",
    "p": "",
    "paras": [
     "在浏览器编辑器里跑、让智能体跑，或用： `lint` 抓构图结构错误。`check` 在 lint 之上再跑浏览器、运行时、布局、动效和 WCAG 对比度校验。",
     "检查代替不了你判断故事。修好技术问题后，如果修复改变了观众看到的东西，再看一遍项目。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "3. 在工作的地方渲染",
    "p": "",
    "paras": [
     "三条路径渲染的是同一个源。"
    ],
    "codeBlocks": []
   },
   {
    "h": "让智能体处理",
    "p": "",
    "paras": [
     "失败的检查可能需要改源时、或想让一个人管完整个交付时用智能体。`/hyperframes` 技能会在最终预览后等渲染批准。"
    ],
    "codeBlocks": [
     {
      "code": "Run the HyperFrames checks, fix any failures, and show me the final preview.\nWhen I approve it, render an MP4 to renders/final.mp4.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "用浏览器编辑器",
    "p": "",
    "paras": [
     "打开 **Export**，选目的地的格式和尺寸，开始渲染。渲染面板显示进度，已完成的文件可下载。",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-check-render-loop-v2.mp4\" poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-check-render-loop-v2.jpg\" autoPlay muted loop playsInline />",
     "浏览器编辑器正在检查并渲染编辑器中显示的同一个项目。"
    ],
    "codeBlocks": []
   },
   {
    "h": "用 CLI",
    "p": "",
    "paras": [
     "直接本地渲染、脚本、CI 或可重复批处理时用 CLI。已安装版本为准：跑 `npx hyperframes render --help` 看全部选项。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes render --output renders/final.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "4. 按目的地选",
    "p": "",
    "paras": [
     "按项目编写的尺寸出 MP4 是常规交付。只有下一步工具或平台要求时，才要别的格式或分辨率。",
     "| 需求 | 从哪里开始 |",
     "| - | - |",
     "| 观看、上传或发布普通视频 | MP4 |",
     "| 在 Web 上叠透明覆盖层 | 带 alpha 兼容构图的 WebM |",
     "| 继续用专业剪辑工具 | MOV，通常是 ProRes |",
     "| 交付指定的高分辨率母版 | 匹配的 4K 预设 | 更高的输出分辨率不会给低分辨率媒体加细节。更高的帧率会生成更多帧；不会让按低节拍写的动效更顺。",
     "需要看得见的控制就用[浏览器编辑器导出](https://hyperframes.heygen.com/studio/export.md)；格式、Docker、批输出和高级 CLI 行为见[渲染参考](https://hyperframes.heygen.com/guides/rendering.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "5. 看渲染出的文件",
    "p": "",
    "paras": [
     "打开输出文件本身，不要依赖预览。",
     "预览证明项目能播。导出文件证明交付正确。"
    ],
    "codeBlocks": [],
    "bullets": [
     "看第一秒和最后一秒。",
     "检查字幕、切点和最复杂的转场。",
     "听旁白是否被切、音效是否迟到、音乐是否戛然而止。",
     "确认时长、尺寸、格式和音频。",
     "用带项目和版本的文件名。"
    ]
   },
   {
    "h": "6. 分享正确形态",
    "p": "",
    "paras": [
     "| 接收方需要 | 发送 |",
     "| - | - |",
     "| 要观看或上传的视频 | 渲染出的 MP4、WebM 或 MOV |",
     "| 当前项目的浏览器链接 | 已发布的项目 URL |",
     "| 继续编辑的能力 | 源项目和它的素材 | 浏览器链接比文件更合适时，发布项目： 该命令上传项目并返回稳定的 URL。匿名首次发布会生成可认领链接。登录时 CLI 会立即拥有项目、更新已有链接，或发布到共享空间。",
     "用相对路径引用的本地视频海报，例如 `../shared/poster.png`，即使在项目目录外也会被复制进已发布的项目。百分号编码的路径也行，例如 `../shared/poster%20art.svg` 对应 `poster art.svg`，或 `../shared/%E5%B0%81%E9%9D%A2.svg` 对应 `封面.svg`。",
     "通过 `<img>` 或 `<source>` 的 `srcset` 引用的项目外本地图片也会带上。它们的尺寸或像素密度描述会保留，源文件不变。",
     "只复制项目外的图片、视频、音频、字体和 CSS 文件。其他外部文件，如脚本、Lottie `.json` 或 `.pdf`，会被跳过并报警告说明名称；把它们搬进项目目录即可带上。上传前，`publish` 会列出将从项目外复制的每个文件，包括项目仅链接的文件，所以你能看到是什么离开了电脑。",
     "分享源之前，先去掉秘密，并确认每个带上的媒体文件都可以分享。告诉审阅者你需要哪种反馈：故事、视觉、时间、事实，还是最终批准。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes publish",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "如果交付失败",
    "p": "",
    "paras": [
     "保留第一条精确错误，运行： 项目和渲染失败用 [故障排除](https://hyperframes.heygen.com/help.md)，编辑器或其渲染队列问题用[浏览器编辑器故障排除](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes doctor\nnpx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "从本地 Studio 预览分享",
    "p": "",
    "paras": [
     "用 `hyperframes preview` 打开项目，然后点 **Export** 旁边的 **Share**。若有提示，选 **Sign in**。也可以在终端运行 `hyperframes auth login`，再回到 Studio。分享会在浏览器登录后或回到面板时自动重连。凭证留在本地 CLI 进程中。如果在终端切换账号，先重载 Studio 或从面板登录再重试。",
     "选择工作区和谁能访问项目，然后选 **Create share link**。Studio 会在渲染和上传项目前先保存未提交的编辑。五个免费共享项目额度与桌面端和 CLI 共用。工作区用量来自服务器；已注册的重发不需要额外名额。",
     "项目文件可用时一并带上。面板会报告上次 Studio 上传是带了文件还是只有视频。如果附文件失败，重试上传，或明确选择 **Retry with video only**。",
     "视频就绪后选 **Copy link**。本地编辑不会自动替换已分享视频：**Update shared version** 会把保存的项目上传到同一审阅页。改访问权限是单独的 **Save access** 动作。**Turn link off** 保留项目和评论；更新视频会让关掉的链接保持关闭。关掉链接不会释放共享项目名额。",
     "分享还没完时可以关掉分享面板，但本地 Studio 服务器要保持运行。重开面板可恢复进度，连接中断后用 **Refresh**。**Manage sharing** 打开网页里的邀请和所有者设置。已有发布项目 URL 继续单独打开。",
     "本地分享桥只在同源回环地址的 Studio 页可用。它不暴露 CLI 凭证，也不接受其他项目路径。与本地预览一样，只打开你信任脚本的项目。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)",
     "[导出视频](https://hyperframes.heygen.com/studio-app/export.md)",
     "[用 Codex 做视频](https://hyperframes.heygen.com/guides/with-codex.md)"
    ]
   }
  ]
 },
 "media-overview": {
  "lede": "媒体可以来自你的项目、捕获的网站、上传的内容或生成的素材。把最终结果需要的一切都放在项目内，这样预览和渲染使用的是同一个文件。",
  "sections": [
   {
    "h": "先定角色，再谈效果",
    "p": "",
    "paras": [
     "| 媒体 | 给它一个主要任务 |",
     "| - | - |",
     "| 产品截图 | 证明产品如何运行 |",
     "| 镜头素材 | 承载人物、地点、动作或情感 |",
     "| 图片 | 把一个想法停留足够久，让人看懂 |",
     "| 配音 | 承载讲解或叙事 |",
     "| 音乐 | 塑造节奏和氛围 |",
     "| 音效 | 强化一个有意义的动作 | 更多图层不一定能让视频更强。如果两个素材做的是同一个任务，保留更清晰的那个。"
    ],
    "codeBlocks": []
   },
   {
    "h": "把素材带进项目",
    "p": "",
    "paras": [
     "在浏览器编辑器中，打开 **Assets**，选择 **Import media**，或把文件拖到面板中。在放到时间轴之前，先预览文件。你也可以让智能体捕获网站、准备提供的镜头、生成衍生素材，或把已通过的文件复制到项目中。",
     "使用类似 `pricing-page-scroll.mp4` 或 `customer-logo.svg` 这样的名称。清晰的名称能让后续修改对人和智能体都更容易。"
    ],
    "codeBlocks": []
   },
   {
    "h": "只准备结果需要的部分",
    "p": "",
    "paras": [
     "原始文件和准备好的文件应当易于区分。"
    ],
    "codeBlocks": [],
    "bullets": [
     "剪切或裁剪源素材——当未使用的内容拖慢了审阅时。",
     "移除背景——当主体需要叠在设计好的场景上时。",
     "对镜头调色——当素材之间肉眼可见不一致，或故事需要刻意的风格时。",
     "从真实语音生成字幕，然后在样式化之前修正词语和时间。",
     "让旁白清楚地盖过音乐，效果只用于具体的事件。"
    ]
   },
   {
    "h": "记住已确认的偏好",
    "p": "",
    "paras": [
     "媒体使用技能会把已确认的选择记录在 `.media/preferences.json` 中。并发记录会保留每一次选择，包括在两个项目中使用后提升为个人默认值的确认。",
     "把 `.media/*.lock` 加入项目的 `.gitignore`，同时保留 `preferences.json` 提交。如果记录时报告 “Settings are locked…”，在删除所命名的 lock 文件并重试之前，先确认没有 HyperFrames 进程正在记录偏好。锁定的个人层级会保留项目记录，并把个人提升推迟到下一次记录时。"
    ],
    "codeBlocks": []
   },
   {
    "h": "检查最终时间轴",
    "p": "",
    "paras": [
     "从头看到尾，检查："
    ],
    "codeBlocks": [],
    "bullets": [
     "每个视频片段的第一帧和最后一帧；",
     "目标输出尺寸下的裁剪和分辨率；",
     "字幕时间与所说词语是否对齐；",
     "在普通耳机和笔记本扬声器上的配音清晰度；",
     "是否有缺失文件、临时链接和晚加载的媒体。"
    ]
   },
   {
    "h": "复用已通过的配方",
    "p": "",
    "paras": [
     "让智能体把已通过视频的设计和分镜存为一个命名好的配方，供后续项目使用。再次保存同名会创建一个新版本，并归档该项目的旧版本。",
     "如果新版本没有 `BRIEF.md`，把该配方导入另一个项目不会恢复旧简报。早期简报仍在归档版本中可用。"
    ],
    "codeBlocks": []
   },
   {
    "h": "选择媒体任务",
    "p": "",
    "paras": [
     "[card] [图片和视频](https://hyperframes.heygen.com/guides/video-components.md) 导入、放置、替换、剪切和审阅视觉媒体。",
     "[card] [数字主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md) 生成或复用主持人片段，并围绕它构图。",
     "[card] [配音、音乐和音效](https://hyperframes.heygen.com/guides/voice-and-audio.md) 构建听得懂的音频混合。",
     "[card] [移除背景](https://hyperframes.heygen.com/guides/remove-background.md) 从真实图片或片段中分离出人物。",
     "[card] [色彩校正](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color) 修正镜头或确立刻意的观感。",
     "[card] [媒体特效](https://hyperframes.heygen.com/guides/media-effects.md) 应用非破坏性视觉处理。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI 指南](https://hyperframes.heygen.com/developers/cli.md)",
     "[字幕、素材和变量](https://hyperframes.heygen.com/studio/assets-and-blocks.md)",
     "[HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts/index.md)"
    ]
   }
  ]
 },
 "media-remove-bg": {
  "lede": "把人物剪出，让标题从他们身后穿过，把物体从镜头中取出，或替换背后的内容。基础抠图在本机运行：不上传、无账号、无费用。",
  "sections": [
   {
    "h": "在 Studio 应用中",
    "p": "",
    "paras": [
     "在预览中右键点击视频或图片： 或者直接问：“把标题放在她身后”、“把桌子上的杯子拿掉”、“把她放到夜里的雨街上”。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Cut out object here** 会取出你点击的那个物体——人物或东西。在视频中，它会让抠图跟随该物体贯穿整个片段。按住 Shift 点击可加入选区；在图片上，**B** 键可以刷边缘。它在 Mac 上运行：Apple 芯片搭载 macOS 14 或更新版本，或 Intel 芯片搭载 macOS 13.3 或更新版本的图片；视频仅限 Apple 芯片。",
     "**Remove background** 会保留人物并去掉其余部分。它是免费的，在本机运行，适合纯色背景的人物。如果有 HeyGen API 密钥，可以选择通过 HeyGen 云端抠图，从 API 余额中扣费。"
    ]
   },
   {
    "h": "在命令行中",
    "p": "",
    "paras": [
     "首次运行会下载模型，需要 FFmpeg。根据去向选择输出：`.webm` 给 HyperFrames 和 Web，`.mov`（ProRes 4444）给 Premiere、Resolve 或 Final Cut，`.png` 给单张照片。",
     "要让文字在人物身后，先一次生成抠图和带人物形孔洞的背景板，然后叠起来：背景板、你的文字或图形、抠图在最上面。",
     "![The original presenter frame beside its transparent cutout over a green background](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/remove-background-before-after-v1.png)",
     "同一个真实帧在本地模型处理前后的对比。更柔和的头发和手部边缘是这个模型在这段素材上的实际上限。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes remove-background subject.mp4 -o subject.webm",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes remove-background subject.mp4 -o subject.webm --background-output plate.webm",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "什么时候好用，什么时候不行",
    "p": "",
    "paras": [
     "免费模型是为人物而做：主体清晰、构图稳定、与背景有一定对比。手持物（深色的麦克风或手机可能消失）、杂背景下的细头发、快速运动都可能出问题。针对物体，请改用应用中的 **Cut out object here**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "修复、质量和速度",
    "p": "",
    "paras": [
     "| 问题 | 应该检查什么 |",
     "| - | - |",
     "| 背景仍不透明 | 确认输出是透明的 WebM、MOV 或 PNG，并在彩色背景上预览它。 |",
     "| 边缘闪烁 | 换用更干净的素材、减少快速移动，或使用更强的外部抠图工具。 |",
     "| 处理很慢 | 查看 `--info`；CPU 处理能用，但比可用的加速服务慢得多。 |",
     "| 主体有颜色光晕 | 使用 `--quality best`，尤其是叠到原始素材上时。 |",
     "| “背景板”上有个洞 | 正常现象：它是逆 alpha，不是补好的干净背景板。 |",
     "| 手持物缺了一部分 | 模型匹配的是人物，不是他们手里拿的东西。那一镜请换其他抠图工具。 | 抠图叠在自己原始镜头上用 `--quality best`，在无关画面上用较小文件要求 `fast`；`--info` 会显示是否找到快速的本地处理器。要移动抠图，请给视频外面的包装层做动画，不要给视频本身。所有参数都在 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md#remove-background) 中。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[添加图片和视频片段](https://hyperframes.heygen.com/guides/video-components.md)",
     "[给视频添加 AI 数字主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "media-video": {
  "lede": "把图片或片段放进视频有三种方式：让智能体处理、拖进编辑器，或写在 HTML 中。这三者改的是同一个文件，所以可以混用。",
  "sections": [
   {
    "h": "让智能体处理",
    "p": "",
    "paras": [
     "说出文件名，并用你看到的样子说明应该发生什么： 如果文件还不在项目中，智能体会把它复制进项目。在 Studio 应用中，用 **+** 把文件加到消息里，或直接拖进聊天框。"
    ],
    "codeBlocks": [
     {
      "code": "Use assets/product-tour.mp4 from 00:04 to 00:10, muted.\nCrop around the editor canvas and place it under the captions.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "拖进去",
    "p": "",
    "paras": [
     "在浏览器编辑器（`npx hyperframes preview`）中，打开 **Assets**，选择 **Import media**，或把文件拖到面板里，然后拖到时间轴上。图片、SVG、MP4、WebM 和 MOV 都可以。",
     "<video autoPlay loop muted playsInline preload=\"metadata\" poster=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-media-edit-loop-v1.jpg\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-media-edit-loop-v4.mp4\" />",
     "今天的浏览器编辑器正在修改真实项目：查看源文件、改动适配与位置、在画布上裁剪，然后导入另一个本地素材。"
    ],
    "codeBlocks": []
   },
   {
    "h": "写在 HTML 中",
    "p": "",
    "paras": [
     "一张图片在屏幕上停留 3 秒，以及一个静音片段从源素材第 4 秒开始播放 6 秒： `class=\"clip\"` 让时间轴显示和隐藏它；`data-start` 和 `data-duration` 说明什么时候播；`data-media-start` 裁掉源素材的开头。保留片段声音请用 `data-has-audio=\"true\"`，音量用 `data-volume` 设置。要移动或缩放视频，请给它外面的包装层做动画，不要直接给视频本身。所有属性都在 [HTML 架构](https://hyperframes.heygen.com/reference/html-schema.md) 中。"
    ],
    "codeBlocks": [
     {
      "code": "<img class=\"clip\" src=\"assets/logo.svg\"\n     data-start=\"0\" data-duration=\"3\" data-track-index=\"1\" />\n\n<video class=\"clip\" src=\"assets/product-tour.mp4\" muted playsinline\n       data-start=\"3\" data-duration=\"6\" data-media-start=\"4\" data-track-index=\"0\"></video>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "替换文件",
    "p": "",
    "paras": [
     "让智能体用新文件，或改 `src`。然后检查裁剪、时长，以及旧图片带来的移动。如果新文件改变了故事，请改提更大的改动。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在各处都能正常工作",
    "p": "",
    "paras": [
     "把每个文件都复制到项目中，并给它清晰的名称（`pricing-page-scroll.mp4`）。会过期或需要登录的链接在另一台电脑上会使渲染失败。`npx hyperframes check` 可以找出缺失和晚加载的文件。",
     "导出之前，先看一遍，检查每个片段的第一帧和最后一帧、最终尺寸下的裁剪，以及是否有拉伸。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更多媒体任务",
    "p": "",
    "paras": [
     "[card] [数字主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md) 生成或复用主持人片段，并围绕它构图。",
     "[card] [配音、音乐和音效](https://hyperframes.heygen.com/guides/voice-and-audio.md) 构建听得懂的音频混合。",
     "[card] [移除背景](https://hyperframes.heygen.com/guides/remove-background.md) 从真实图片或片段中分离出人物。",
     "[card] [特效和色彩校正](https://hyperframes.heygen.com/guides/media-effects.md) 应用视觉处理、修正镜头，或确立刻意的观感。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[给图片和视频加特效](https://hyperframes.heygen.com/guides/media-effects.md)",
     "[用 HeyGen Video 1 做片段](https://hyperframes.heygen.com/studio-app/video-clips.md)",
     "[做音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)"
    ]
   }
  ]
 },
 "media-voice": {
  "lede": "像给剪辑师下简报一样要求声音。智能体负责找或做每一件，放上时间轴并混好，音乐会在人声下自动压低。",
  "sections": [
   {
    "h": "提需求",
    "p": "",
    "paras": [
     "在 Studio 应用或自己的智能体里，一条消息或一条条地说： 词语已定稿时请直接引用脚本；否则只给要点，让智能体写作。也要说清不要什么：“no music” 和 “no sound effects” 会被原样遵循。"
    ],
    "codeBlocks": [
     {
      "code": "Add a warm, unhurried narration of this script: [paste script]\nPut a calm piano bed under it, quieter while she speaks.\nA soft whoosh on each scene change, nothing else.\nCaptions: two lines at most, key words in the brand color.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "免费的，或 HeyGen 品质",
    "p": "",
    "paras": [
     "| | 免费，在本机 | 用 HeyGen |",
     "| - | - | - |",
     "| **配音** | Kokoro 音色，多语言 | HeyGen 音色和你自己的克隆声音 |",
     "| **音乐** | 你添加的曲目，或装了本地生成工具的话本地生成 | 10000 首曲库 |",
     "| **音效** | 自带一套，加上 Openverse | 同左 |",
     "| **字幕** | 本地转录，用你自己的智能体（Parakeet 或 Whisper） | Studio 应用通过 HeyGen 转录 | 在 Studio 应用中，添加 HeyGen API 密钥时使用 HeyGen（主页会提示 **Add a HeyGen API key to make voiceovers, avatars and clips**）；不加时使用本地音色。用自己的智能体时，登录 HeyGen CLI 或设置 API 密钥。每种情况用的说法在 [配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md) 中。"
    ],
    "codeBlocks": []
   },
   {
    "h": "用你自己的录音",
    "p": "",
    "paras": [
     "添加文件并说明它是什么（“这是旁白”、“保留访谈音频”）。想自己拿到带时间的词语，本地转录免费： 语音不是英语时传 `--language`。它也会导入现有的 `.srt` 或 `.vtt`。想给露脸片段加字幕或剪得更紧，见 [字幕和剪辑](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes transcribe interview.mp4 --language es",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "读取参考音轨",
    "p": "",
    "paras": [
     "想在做新音轨前先听懂一条现有录音，运行： 有 HeyGen 凭证时，录音会被分成六条音轨：人声、鼓、贝斯、吉他、钢琴和其他。读取会描述每条听得见的音轨，然后给整体描述。`voice-free mix:` 指向去掉人声的混音。`bgm prompt:` 描述音乐，让音乐生成器使用，或说明没有音乐。这些描述走 HeyGen，不使用单独的 Google 或 Gemini API 密钥。没有 HeyGen 凭证，或描述服务失败时，会有警告说明描述不可用，而不是猜。",
     "带时间的音效命名为 `effect`，分组为 `S1`、`S2` 等，不指定音色种类。每条保留它的源音轨、时间、频段、起音、尾音、峰值水平和相对周围音乐的水平。模型描述可以解释声音像什么；时间是近似的。带时间的行带测量数据。",
     "使用 HeyGen 服务前，先用 `npx hyperframes auth login` 登录，或设置 `HEYGEN_API_KEY`。转录稿、范围和本地分析选项见 [音频分析](https://hyperframes.heygen.com/packages/cli.md#audio)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes audio reference.mp4 --read --quality best",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "把字幕做对",
    "p": "",
    "paras": [
     "先读转录稿再上屏：人名、产品名和数字最容易识别错。保持每行短、按语义断行，避开人脸和按钮，把承载要点的两三个词加粗强调。想手工调整，在浏览器编辑器里打开 [字幕](https://hyperframes.heygen.com/studio/assets-and-blocks.md#edit-captions)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在时段内循环音乐",
    "p": "",
    "paras": [
     "用原生 `loop` 属性把短曲重复到更长的时段： 曲目会一直重复，直到预览和导出中的 30 秒时段结束。如果设置了 `data-media-start`，每次重复都从该源入点开始。播放速度和速率自动化同样作用于重复的音频。带 `data-has-audio=\"true\"` 的循环视频也会重复声音，包括下一轮之前的静音。"
    ],
    "codeBlocks": [
     {
      "code": "<audio id=\"music\" src=\"music.wav\" data-start=\"0\" data-duration=\"30\" loop></audio>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "检查混音",
    "p": "",
    "paras": [
     "打开声音看一遍，关声看一遍，再只听一遍。",
     "音频分析会给每个声音先猜一个 `voice`、`music` 或 `sfx`。人声需要既有近似说话的水平模式，又有语音范围的音高，所以带近似说话尾音的撞击不太容易被误判为旁白。这些是猜测，不是转录稿标签。检查时间范围时，种类看的是整个片段播放的源跨度，响度、撞击等其他测量仍描述所选范围。因此音乐床的短切片保留床的种类。重复查询范围会复用该猜测，直到源或片段变化。如果整个片段无法分析，结果会警告种类只来自所选范围；范围的其他测量照常返回。见 [音频分析](https://hyperframes.heygen.com/packages/cli.md#audio) 的命令和输出。",
     "想只在人声处压低音乐而不是整体调低，用 [人声挖空](https://hyperframes.heygen.com/studio/audio-effects.md#make-music-sit-under-narration)。",
     "音乐可以晚于旁白开始：压低会从该时刻的正确水平开始，已经结束的说话不会生成新的压低。",
     "[card] [练习：声音](https://hyperframes.heygen.com/lessons/sound) 免费 20 分钟课程，有短视频、测验和练习简报。在简报里说出声音：音乐的氛围、配音、音乐的起止位置。"
    ],
    "codeBlocks": [],
    "bullets": [
     "音乐最响处人声依然清楚。",
     "每个音效都落在它属于的东西上。",
     "场景切换时没有切掉词或呼吸声。",
     "音乐是有意收尾的，不是到文件末尾才停。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[添加配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md)",
     "[用 AI 给视频加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)"
    ]
   }
  ]
 },
 "pkg-aws-lambda": {
  "lede": "AWS Lambda 包在 AWS 上运行 HyperFrames 的分布式渲染原语。它提供 Lambda handler、Node 客户端 SDK，以及可选的 CDK 构造，用于在采用者的 AWS 账户内配置渲染堆栈。",
  "sections": [
   {
    "h": "何时使用",
    "p": "",
    "paras": [
     "**当你需要以下能力时，使用 `@hyperframes/aws-lambda`：** **当你想要以下能力时，使用其他包：** [!WARNING] 本包是 AWS 基础设施的部署胶水代码。它假定你掌控 AWS 账户、S3 存储桶、Step Functions 状态机和 Lambda 运行时配置。"
    ],
    "codeBlocks": [],
    "bullets": [
     "在 AWS Lambda 上渲染大型合成，而非单台本地机器",
     "通过 Step Functions 编排 `plan`、`renderChunk` 与 `assemble`",
     "将渲染输入、中间块和输出存储到 S3",
     "从 CI、后端服务或自定义 CLI 驱动渲染",
     "从 CDK 应用配置渲染拓扑",
     "本地渲染或在自己的 Node 进程内渲染——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
     "在 Google Cloud 上运行相同的分布式模型——使用 [gcp-cloud-run](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)",
     "构建或编辑合成 HTML——使用 [studio](https://hyperframes.heygen.com/packages/studio.md)、[sdk](https://hyperframes.heygen.com/packages/sdk.md) 或 [core](https://hyperframes.heygen.com/packages/core.md)"
    ]
   },
   {
    "h": "包导出",
    "p": "",
    "paras": [
     "| Import | 说明 |",
     "| - | - |",
     "| `@hyperframes/aws-lambda` | Handler 类型、运行时 helper、S3 传输和客户端 SDK 导出 |",
     "| `@hyperframes/aws-lambda/handler` | 供 Step Functions 调度的 Lambda handler 入口点 |",
     "| `@hyperframes/aws-lambda/sdk` | 轻量 Node SDK，用于部署站点、启动渲染、轮询进度和估算成本 |",
     "| `@hyperframes/aws-lambda/cdk` | 可选的 CDK 构造，用于配置渲染存储桶、Lambda 和 Step Functions 堆栈 | `aws-cdk-lib` 和 `constructs` 是可选 peer 依赖。仅使用 SDK 的消费者无需它们，除非从 `@hyperframes/aws-lambda/cdk` 导入。"
    ],
    "codeBlocks": []
   },
   {
    "h": "架构",
    "p": "",
    "paras": [
     "Lambda 适配器将分布式 producer 原语封装在一个调度边界之后： **1. Plan（计划）** 从 S3 获取项目输入，探测合成，准备音频，并发布计划工件。Plan v2 将符合条件的恒定帧率 SDR 视频抽帧推迟到分块 worker；可变帧率素材和所需的 HDR 色彩转换仍在计划阶段运行。",
     "**2. Render chunks（渲染分块）** Step Functions 扇出分块任务。每次 Lambda 调用下载所需的素材，抽取其推迟的视频帧，渲染一个分块，并上传结果。",
     "**3. Assemble（组装）** 下载所有渲染分块和音频素材，组装最终输出，并将成品文件写入 S3。",
     "三个阶段都必须在配置的单次 Lambda 调用超时（最多 15 分钟）和函数临时存储内完成。较小的块可减少每个 worker 的抽帧和渲染工作量，但不能拆分仍在 Plan 中发生的视频抽帧。FFmpeg 帧停滞超时以及无法在上限内完成的任务如何拆分，见 [long-video planning limits](https://hyperframes.heygen.com/deploy/aws-lambda.md#long-video-planning-times-out)。",
     "Handler 默认使用 `@sparticuz/chromium`，并在需要时提供构建期回退，直接打包 `chrome-headless-shell`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "页面网络限制",
    "p": "",
    "paras": [
     "Handler 在函数未已设置时默认设置 `PRODUCER_RESTRICT_PAGE_NETWORK=true`，使渲染页面只能访问其自己的项目文件和公开互联网地址。页面加载的任何内容中，回环、内网、链路本地和 IPv6 地址都会被拒绝。仅存在于 VPC 主机或私有 DNS 之后的素材不会出现在视频中。",
     "渲染你未编写的合成时请保持开启。要关闭，请在函数环境中设置 `PRODUCER_RESTRICT_PAGE_NETWORK=false`。只有 `false`、`0`、`no` 或 `off` 能关闭。其他任何值都会保持开启，handler 不识别的值会记录警告。"
    ],
    "codeBlocks": []
   },
   {
    "h": "使用 SDK",
    "p": "",
    "paras": [
     "部署 AWS 资源后，在 Node 中使用 SDK： Plan v2 是唯一支持的分布式计划传输。Worker 获取清单选定的内容寻址工件，SDK 发送显式 v2，无需协议选项。",
     "[!WARNING] 对于已有安装，请暂停新渲染并排空活跃的 Step Functions 执行。先从同一包版本重新部署 Lambda handler 和 SAM/CDK 状态机，再升级应用 SDK。旧基础设施可能缺少仅限 Plan v2 的请求和定位符契约。",
     "`renderToLambda()` 会在启动 Step Functions 执行前校验分布式渲染配置，因此无效的尺寸、格式、块大小或载荷大小会同步失败。"
    ],
    "codeBlocks": [
     {
      "code": "import { deploySite, getRenderProgress, renderToLambda } from \"@hyperframes/aws-lambda/sdk\";\n\nconst site = await deploySite({\n  projectDir: \"./my-composition\",\n  bucketName: \"hyperframes-render-bucket\",\n});\n\nconst handle = await renderToLambda({\n  siteHandle: site,\n  bucketName: site.bucketName,\n  stateMachineArn: \"arn:aws:states:us-east-1:123456789012:stateMachine:hyperframes-render\",\n  config: {\n    fps: 30,\n    width: 1920,\n    height: 1080,\n    format: \"mp4\",\n    chunkSize: 240,\n    maxParallelChunks: 16,\n    runtimeCap: \"lambda\",\n  },\n});\n\nconst progress = await getRenderProgress({ executionArn: handle.executionArn });\nconsole.log(progress.status, progress.overallProgress, progress.costs.displayCost);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "使用 CDK 构造",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { App, Stack } from \"aws-cdk-lib\";\nimport { HyperframesRenderStack } from \"@hyperframes/aws-lambda/cdk\";\n\nconst app = new App();\nconst stack = new Stack(app, \"VideoRender\");\n\nconst render = new HyperframesRenderStack(stack, \"HyperframesRender\", {\n  // reservedConcurrency: 8,\n  // lambdaMemoryMb: 10240,\n  // chromeSource: \"sparticuz\",\n});\n\nconsole.log(render.bucket.bucketName, render.stateMachine.stateMachineArn);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "构建 Handler ZIP",
    "p": "",
    "paras": [
     "从 monorepo： 构建会将 Chromium、Puppeteer、FFmpeg 和 handler 打包到 `packages/aws-lambda/dist/handler.zip`。大小校验器保证解压后工件不超过 Lambda 的部署上限。"
    ],
    "codeBlocks": [
     {
      "code": "bun install\nbun run --cwd packages/aws-lambda build:zip\nbun run --cwd packages/aws-lambda verify:zip-size",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [AWS Lambda Deployment](https://hyperframes.heygen.com/deploy/aws-lambda.md) 端到端部署细节和运维说明。",
     "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) Lambda handler 执行的分布式原语。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)",
     "[Render templates on Lambda](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "pkg-cli": {
  "lede": "本页列出每一个命令和每一个旗标。如果你还在决定需要哪个命令，[CLI 指南](https://hyperframes.heygen.com/developers/cli.md) 是更短的路径。",
  "sections": [
   {
    "h": "找到你的命令",
    "p": "",
    "paras": [
     "| 你想 | 使用 |",
     "| - | - |",
     "| 开始一个项目 | [`init`](#init)、[`add`](#add)、[`catalog`](#catalog) |",
     "| 引入源素材 | [`capture`](#capture)、[`media-use`](#media-use)、[`transcribe`](#transcribe)、[`tts`](#tts)、[`remove-background`](#remove-background)、[`media-treatment`](#media-treatment)、[`beats`](#beats)、[`audio`](#audio)、[`normalize-audio`](#normalize-audio)、[`models`](#models) |",
     "| 查看或分享 | [`share`](#share)、[`preview`](#preview)、[`present`](#present-and-play)、[`play`](#present-and-play)、[`publish`](#publish)、[`open`](#open-and-catch-up)、[`catch-up`](#open-and-catch-up) |",
     "| 发现问题 | [`lint`](#lint)、[`check`](#check)、[`snapshot`](#snapshot)、[`keyframes`](#keyframes)、[`compare`](#compare-and-grade-compare)、[`grade-compare`](#compare-and-grade-compare) |",
     "| 重建一个视频 | [`reverse`](#reverse)、[`measure`](#measure)、[`diff`](#diff) |",
     "| 从终端编辑 | [`timeline`](#timeline)、[`history`](#history) |",
     "| 生成文件 | [`render`](#render)、[`benchmark`](#benchmark) |",
     "| 在别处渲染 | [`cloud`](#hyperframes-cloud)、[`lambda`](#hyperframes-lambda)、[`cloudrun`](#hyperframes-cloudrun) |",
     "| 修复你的环境 | [`doctor`](#doctor)、[`browser`](#browser)、[`update`](#update)、[`upgrade`](#upgrade)、[`docs`](#docs)、[`info`](#info-and-compositions)、[`compositions`](#info-and-compositions)、[`clean`](#clean) |",
     "| 连接其他工具 | [`auth`](#hyperframes-auth)、[`billing`](#billing)、[`templates`](#templates)、[`skills`](#skills)、[`usage`](#usage)、[`figma`](#figma-and-events)、[`events`](#figma-and-events)、[`telemetry`](#telemetry)、[`feedback`](#feedback) |",
     "`validate`、`inspect` 和 `layout` 仍然可用，但已[废弃](#deprecated-validate-inspect-and-layout)。请改用 `check`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "每个命令共有",
    "p": "",
    "paras": [
     "阅读一次即可，后文不再重复。",
     "**项目目录。** 大多数命令把它作为第一个参数并默认为当前目录：`npx hyperframes check ./my-video`。少数命令把它作为旗标——`add`、`transcribe`、`feedback`、`skills`、`history` 以及 `timeline` 编辑命令使用 `--dir`。",
     "**`--json` 给代理与脚本。** 大多数命令接受它，不接受的命令会以退出码 2 拒绝它。载荷用 `_meta` 字段包装，脚本可以从任何命令的输出中发现过时的 CLI，而无需第二次调用： 版本号来自一个每两小时至多刷新一次的缓存，在后台进程中获取，且从不在 CI 或 `HYPERFRAMES_NO_UPDATE_CHECK=1` 之下获取。`checkedAt` 说明 npm 应答的时间。比运行中的 CLI 更旧的缓存最新版本会被省略，并在下一次运行时重新检查。`skillsOutdated` 统计落后于当前 CLI 发布版本的已安装 HyperFrames 技能数，`skillsMissing` 统计未安装的核心技能数，两者来自同一次后台检查；在该版本完成一次检查之前两者都不存在（超过一天后亦然，例如 `HYPERFRAMES_NO_UPDATE_CHECK=1` 停止了检查时），以及在 `HYPERFRAMES_SKIP_SKILLS=1` 之下。`--json` 从不自行发起网络请求。废弃命令增加 `_meta.deprecated: true`。",
     "`updateNotice` 是一句供代理转告用户的话：更新了什么以及更新命令。是否运行由用户决定。该命令会移动当前运行的安装：",
     "| 安装 | CLI 落后 | 技能也落后，或者仅技能落后 |",
     "| - | - | - |",
     "| npm、pnpm、bun 或 Homebrew 全局 | 对应管理器命令（`npm install -g hyperframes@0.9.8`、`brew upgrade hyperframes`，……） | `hyperframes update`（全局 CLI 自身的；`npx hyperframes` 会运行项目副本或新的副本） |",
     "| 项目 `node_modules` | 项目的管理器，按 lockfile：`npm install`、`pnpm add`、`bun add` 或 `yarn add hyperframes@0.9.8` | 先执行该命令，然后 `npx hyperframes update`；仅技能：`npx hyperframes update` |",
     "| `npx` | `npx hyperframes@latest update`（npx 缓存可能还留着旧 CLI） | 同上；仅技能：`npx hyperframes update` | 当没有技能落后或处于 `HYPERFRAMES_SKIP_SKILLS=1` 之下时，技能那一半会省略。该通知每个项目至多每天出现一次，而数字字段仍出现在每次结果中。它从不在 CI、`HYPERFRAMES_NO_UPDATE_CHECK=1` 或代理插件（`HYPERFRAMES_PLUGIN_VERSION`）之下添加，`update`、`upgrade` 和 `skills` 的输出也不带它。",
     "`--json` 下的失败总会在 stdout 上打印一个 JSON 对象，带有机器可读的 `code`，以及在有下一步时带有 `hint`： 某些命令在 `error` 旁边增加自己的字段，例如 `lint` 的 `findings`，或被拒绝的 `timeline` 编辑的 `reason` 和 `fix`。",
     "**项目 `.env`。** 当前目录中的 `.env` 只设置 CLI 自身的设置：`HEYGEN_API_KEY`、`HYPERFRAMES_API_KEY`、`ELEVENLABS_API_KEY`、`FIGMA_TOKEN`，以及视觉密钥、模型、Vertex 设置与超时，以及遥测退出选项 `HYPERFRAMES_NO_TELEMETRY` 和 `DO_NOT_TRACK`。环境中已有的变量优先。文件中的其他键会被忽略，并在 stderr 上用一行说明它们。",
     "**旗标，而非提示。** 缺少必填旗标会立即以用法示例失败，而不等待输入。以下命令可以在 TTY 上提问：`init` 会提示项目名称和示例，除非传入 `--non-interactive`；`catalog --human-friendly` 会打开选择器；`share` 会询问首次分享的受众。除此之外没有其他提示，只有可用 `--yes` 或 `--no-confirm` 跳过的确认。",
     "**无人值守运行从不提示。** 当 stdin 或 stdout 不是终端、在 CI 下、在编码代理中，或设置了 `HYPERFRAMES_AGENT=1` 时，运行即为无人值守。在那里，需要确认的命令（如 `publish` 或 `upgrade`）会以退出码 2 代替，并注明要传入的旗标（`--yes`），而 spinner 只打印最后一行到 stderr。",
     "**退出码。** `0` 表示命令成功，`1` 表示已运行但失败，`2` 表示命令行本身有误：未知命令或旗标，或缺少/无效的值。",
     "**版本通知。** 自带安装（npm、bun、pnpm）会在后台静默自行更新，并在下一次运行时打印一行：`hyperframes auto-updated to v0.1.5`。它从不跨大版本（1.0 之前跨小版本：0.8 到 0.9 只是通知，不安装）。在任何无法安装的地方——Homebrew（请自行运行 `brew upgrade hyperframes`）、`npx`、未知安装器——改为给出通知：",
     "两者在无人值守运行时都静默，后台安装也从不在那里启动。安装进行中时不显示通知。`HYPERFRAMES_NO_UPDATE_CHECK=1` 关闭检查、安装和通知；`HYPERFRAMES_NO_AUTO_INSTALL=1` 只关闭安装。",
     "**技能通知。** 当已安装的 HyperFrames 技能过期或缺失时，命令以一行 stderr 结尾，注明 `npx hyperframes skills update`。每个项目至多每天显示一次。在无人值守运行时，仅在核心技能缺失时才显示；过期技能会以 `_meta.skillsOutdated` 和 `_meta.updateNotice` 传给代理。`HYPERFRAMES_SKIP_SKILLS=1` 关闭它。用量错误之后不跟通知。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  \"name\": \"my-video\",\n  \"duration\": 10.5,\n  \"_meta\": {\n    \"version\": \"0.1.4\",\n    \"latestVersion\": \"0.1.5\",\n    \"updateAvailable\": true,\n    \"checkedAt\": \"2026-11-03T08:00:00.000Z\",\n    \"skillsOutdated\": 2,\n    \"skillsMissing\": 0,\n    \"updateNotice\": \"For the user: HyperFrames CLI 0.1.5 is available (this run is 0.1.4), and 2 installed HyperFrames skills are out of date. To update both, run: hyperframes update\"\n  }\n}",
      "file": "JSON THEME={NULL}"
     },
     {
      "code": "{\n  \"ok\": false,\n  \"error\": {\n    \"code\": \"unknown_flag\",\n    \"message\": \"Unknown flag: --search\",\n    \"hint\": \"Did you mean --query? Its flags: --type, --tag, --json, --human-friendly, --query, --yes, --on-device. Run 'hyperframes catalog --help' for what each does.\"\n  }\n}",
      "file": "JSON THEME={NULL}"
     },
     {
      "code": "  Update available: 0.1.4 → 0.1.5\n  Run: npx hyperframes@latest",
      "file": "EXAMPLE"
     }
    ]
   },
   {
    "h": "`init`",
    "p": "",
    "paras": [
     "从示例脚手架一个新合成项目。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--example, -e` | 要脚手架的示例。默认是居中空白页。完整列表见 [Examples](https://hyperframes.heygen.com/examples.md)。 |",
     "| `--resolution` | 画布预设：`landscape` (1920×1080)、`portrait` (1080×1920)、`landscape-4k` (3840×2160)、`portrait-4k` (2160×3840)、`square` (1080×1080)、`square-4k` (2160×2160)、`landscape-1440p` (2560×1440)、`portrait-1440p` (1440×2560)、`square-1440p` (1440×1440)。别名：`1080p`、`4k`、`uhd`、`1440p`、`qhd`、`1080p-square`、`square-1080p`、`4k-square`、`1440p-portrait`、`1440p-square`。默认：保持模板尺寸。 |",
     "| `--video, -v` | 视频文件路径（MP4、WebM、MOV） |",
     "| `--audio, -a` | 音频文件路径（MP3、WAV、M4A） |",
     "| `--tailwind` | 给脚手架的 HTML 添加 Tailwind CSS 浏览器运行时支持 |",
     "| `--non-interactive` | 永不提示。供代理与 CI 使用。 |",
     "| `--skip-transcribe` | 跳过自动 Whisper 转录 |",
     "| `--keep-original` | 原样复制 `--video` 文件，而非把非 web 编码转为 H.264 MP4 |",
     "| `--model` | 该次转录的 Whisper 模型（例如 `small.en`、`medium.en`、`large`） |",
     "| `--language` | 转录语言代码（`en`、`es`、`ja`，……）。过滤掉其他语言的语音。 |",
     "| `--skip-skills` | 不碰 AI 编码技能：`init` 不安装核心集。`HYPERFRAMES_SKIP_SKILLS=1` 同理。 | 传入 `--video` 或 `--audio` 时，CLI 用 Whisper 转录音频，并把字幕补丁进合成。`--skip-transcribe` 可关闭该功能。",
     "`--tailwind` 注入锁定的 Tailwind v4 浏览器运行时，并暴露 `window.__tailwindReady` promise，渲染在捕获第 0 帧前会等待该 promise。`/hyperframes-cli` 技能的 `references/init-and-scaffold.md`（Tailwind）说明如何编辑这些项目，代理应遵循 v4 CSS-first 模式而非 v3 `tailwind.config.js` 模式。浏览器运行时面向脚手架项目与快速迭代——对于离线或锁定的生产渲染，请把 Tailwind 编译为 CSS 并链接样式表。",
     "每个新项目都会得到一个 `AGENTS.md` 和一个相同的 `CLAUDE.md`：告诉编码代理 HyperFrames 是什么，以及哪些命令预览、检查、快照和渲染视频。脚手架后，`init` 从当前 GitHub 源检查并安装核心 AI 技能。见 [`skills`](#skills)。"
    ],
    "codeBlocks": [
     {
      "code": "# Default: centered Inter blank. Non-TTY skips the wizard.\nnpx hyperframes init my-video\n\n# Start from a video file\nnpx hyperframes init my-video --video video.mp4 --non-interactive\n\n# With the Tailwind browser runtime\nnpx hyperframes init my-video --tailwind",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`add`",
    "p": "",
    "paras": [
     "从 registry 把一项安装到已有项目中。[`init`](#init) 脚手架整个项目；`add` 放入一个**块**（子合成场景）或一个**组件**（效果或片段）。",
     "位置参数是 registry 项，或标签——标签会安装所有带它的块。`--dir` 选择项目目录，`--json` 打印写入的文件与粘贴片段，`--no-clipboard` 让 CI 跳过剪贴板复制。",
     "如果标签中任一块安装失败，`add` 保留成功安装并以码 1 退出。带 `--json` 时，`ok` 为 `false`，`errors` 列出每个失败块的 `name` 和 `error`；`installed` 列出成功的块。",
     "每次安装都会产生文件加一个**粘贴片段**：块对应 `<iframe>` 标签，组件对应片段路径。默认送入剪贴板。若命中的是示例而非 registry 项（`add warm-grain`），会得到指向 `init --example` 的明确错误。",
     "`add` 读取 [`hyperframes.json`](#hyperframes-json) 了解从哪个 registry 拉取、文件落到哪里。若文件缺失但目录有 `index.html`，首次使用时写入默认文件。",
     "当条目声明 `registryDependencies` 时，`add` 先安装其依赖，传递解析。安装任何条目文件前，会检查每个已解析条目的 `minCliVersion` 并报告不兼容 CLI 的升级指引。`deprecated` 消息只警告，不阻止安装。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes add claude-code-window          # a block\nnpx hyperframes add shader-wipe                 # a component\nnpx hyperframes add captions                    # every block with this tag\nnpx hyperframes add shader-wipe --dir ./my-video\nnpx hyperframes add shader-wipe --no-clipboard --json   # headless / CI",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`catalog`",
    "p": "",
    "paras": [
     "浏览 registry。",
     "用 `--type`（`block` 或 `component`）和 `--tag`（`social`、`transition`、`text`，……）过滤。默认输出是名称、类型、描述、标签的表格，便于代理解析；`--json` 是结构化形式。每行 `--json` 包含条目的名称、类型、标题、描述和标签，以及在有时的尺寸、时长和 `preview`（`video` 和 `poster` URL）。`--human-friendly` 打开选择器，选中后运行 `add`。",
     "`--query \"<what you want>\"` 按描述搜索而非列出全部，`--on-device` 在一次性 33 MB 下载后把搜索从词匹配切换为语义搜索。各自做什么、下载什么、留在本机什么：[How catalog search works](https://hyperframes.heygen.com/developers/catalog-search.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes catalog                          # table of everything\nnpx hyperframes catalog --type block --tag social\nnpx hyperframes catalog --json\nnpx hyperframes catalog --human-friendly         # picker; installs on select",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`capture`",
    "p": "",
    "paras": [
     "把真实网站拉进一个代理可构建的工作目录。",
     "网站捕获接受不带 URL 凭据的公开 HTTP(S) 目标。浏览器流量走每次捕获专属代理，资产下载使用同一已检查地址策略。每个连接使用经校验的数字 IPv4 地址；重定向和后续请求都会再次检查。私有、回环、link-local 与特殊用途地址被拒绝。目前不支持仅 IPv6 网站。普通 WebSocket 升级被拒绝；缓慢或被拒的资源可能缺席于捕获。",
     "默认情况下捕获需要直连外网，并忽略 `HTTPS_PROXY` 和 `HTTP_PROXY`：自身代理直接拨打每个已检查的公开地址。在沙箱、托管代理和公司网络等只有出口代理能出去的地方，把 `HYPERFRAMES_CAPTURE_PROXY` 设为该代理的 `http://` URL（URL 内凭据作为 `Proxy-Authorization` 发送）：",
     "之后捕获发起的每个连接——浏览器页面流量以及每个资产、字体、Lottie 和视频下载，包括 `capture --video`——都按主机名走那个代理：HTTPS 为 `CONNECT host:443`，HTTP 为绝对 URL 请求。捕获自身不再解析任何名称。仍会在接触代理前拒绝非 HTTP(S) URL、URL 凭据、字面私有/回环/link-local/特殊用途 IPv4 地址和本地样式名称（`localhost`、`.local`、`.internal`，……），且 HTTPS 证书仍通过隧道端到端验证。转移到代理的是 DNS 检查：未设该项时，捕获解析名称、检查每个答案并连接到那个已检查的数字，DNS 重绑定无法在中间塞入私有地址。设了之后，代理负责解析与连接，因此代理必须自己拒绝私有/内部目标，作为一步完成解析、检查与连接。代理拒绝会让那个页面或资产像其他不可达资源一样失败。空值或未设保持默认行为；非 `http://` URL 的值让 `capture` 以错误停止。`.env` 文件不能设置它。可选的 AI 图像描述通过 Node 自身的 `fetch` 调用其视觉 API，不受该设置影响；那里用 `--skip-vision` 或 Node 的 `NODE_USE_ENV_PROXY=1`。",
     "捕获使用临时浏览器 profile，并禁用非代理 WebRTC UDP。profile 与代理在浏览器关闭时移除。Chromium 沙箱在 macOS 和 Windows 上保留；Linux 保留容器兼容例外。",
     "祖先 `.env` 文件可提供受支持的视觉 API 密钥、模型、Vertex 凭据/位置与视觉超时。它们不能改变浏览器路径、可执行文件发现、TLS、代理或进程运行时设置。在调用环境中设 `HYPERFRAMES_NO_CAPTURE_DOTENV=1` 可跳过这些文件。继承的 `HYPERFRAMES_BROWSER_PATH` 仍可选择浏览器。",
     "`Dropped` 是页面引用但**不在**文件夹中的资产数，以及原因。仅在非零时打印，`--json` 总是把它作为 `dropped` 对象带上。没有它，稀疏页面的捕获与被配额截断的捕获要看成同一种三行摘要，唯一分辨方式是自己打开页面。",
     "| 原因 | 含义 |",
     "| - | - |",
     "| `size-floor` | 已抓取，然后判定太小而非真实资产，而像占位或追踪像素。 |",
     "| `budget-exhausted` | `--capture-budget` 在到达这一个之前用完了。调大它，或传 `--skip-vision` 买时间。 |",
     "| `cap-reached` | 已达到单次或单家族上限：30 内联 SVG、30 字体、每家族 6 个字重。 |",
     "| `unavailable` | 请求或写入失败：网络错误、超时、地址拒绝、坏状态、磁盘。 | 其中三者是捕获做出的决定，一个是它遇到的失败，所以 `dropped` 全零而稀疏的 run 是页面本身稀疏，带计数的稀疏 run 是被截断了。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--output, -o` | 输出目录。默认 `./capture`，名字被占用时顺延 `./capture-2/`、`./capture-3/`，…… |",
     "| `--timeout` | 页面加载超时（毫秒），或 `30s`、`2m` 这类时长（默认 120000） |",
     "| `--capture-budget` | 页面加载后所有工作的预算（毫秒，默认 120000）。协作式——停止新工作，但不能中断已在运行的工作。 |",
     "| `--skip-assets` | 不下载图片与 SVG |",
     "| `--skip-vision` | 不运行 AI 图像描述 |",
     "| `--max-screenshots` | 最大页面捕获文件数，包括全页底图；派生接触表除外。正整数，默认 21。值为 1 时只捕获顶部视口。 |",
     "| `--json` | 供程序使用的结构化输出 |",
     "| `--local-file` | 捕获本地 HTML 文件，或目录的 `index.html`，而非 URL。见 [Local HTML files](#local-html-files)。 |",
     "| `--local-root` | 与 `--local-file` 配合：页面可读取本地文件的目录。默认是文件所在目录。 |",
     "| `--video <folder>` | 切换到相对已捕获文件夹 manifest 的视频下载模式。配合 `--list`、`--index` 或 `--video-url` 使用。 | 你得到 `AGENTS.md`、`CLAUDE.md`、`meta.json`、滚动截图、提取的 HTML 与 CSS、可见文本、设计令牌、字体文件、图片、SVG、动画元数据和接触表——加上页面暴露的 Lottie、视频与 WebGL 上下文。这是给代理的原料，不是成品合成；`/hyperframes` 技能在真实产品必须上屏时使用它。动态网站、受保护页面和不寻常的媒体加载器会产生部分结果，所以构建前请先读 `dropped`、警告和接触表。",
     "下载的字体保存在 `assets/fonts/`，其 CSS 引用指向那些本地文件。`demo.woff2?v=1` 与 `demo.woff2?v=10` 这类不同 URL 保留为独立文件。字体下载失败会保留原 URL 不变。",
     "AI 图像描述请在 `.env` 文件设置 `GEMINI_API_KEY`（\\~\\$0.001/图），或设 `OPENROUTER_API_KEY` 让任一视觉模型走 [OpenRouter](https://openrouter.ai)——两者都设时后者赢，`HYPERFRAMES_OPENROUTER_MODEL` 覆盖模型。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes capture https://stripe.com\nnpx hyperframes capture https://linear.app -o linear-capture\nnpx hyperframes capture https://example.com --json",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "◇  Captured Stripe | Financial Infrastructure → capture\n\n  Screenshots: 12\n  Assets: 45\n  Dropped: 9 (6 size-floor, 3 cap-reached)\n  Sections: 15\n  Fonts: sohne-var",
      "file": "EXAMPLE"
     },
     {
      "code": "HYPERFRAMES_CAPTURE_PROXY=http://127.0.0.1:3128 npx hyperframes capture https://stripe.com",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "{\n  \"assets\": 45,\n  \"dropped\": { \"size-floor\": 6, \"budget-exhausted\": 0, \"cap-reached\": 3, \"unavailable\": 0 }\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "本地 HTML 文件",
    "p": "",
    "paras": [
     "`--local-file` 捕获磁盘上的 HTML 文件而非 URL，例如别人上传的页面。传目录则打开其 `index.html`。",
     "URL 参数仍只接受公开 HTTP(S) URL；`file://` URL 在那里仍像往常被拒。设 `--local-file` 时，CLI 在捕获时长内以回环端口服务文件所在目录（或 `--local-root`，必须包含该文件），Chrome 从那里加载页面。只有真实路径在该 root 内的普通文件会被服务，HTML 文件本身亦然：`../` 路径和逃逸的 symlink 回答 404，指向外部的 symlink HTML 文件被拒，页面无法读 `file://` URL。其他请求——远程或私有——走捕获代理与上述公开地址策略，所以指向私有地址的引用仍被拒并计为 `unavailable`。本地图片、字体和样式表像远程的一样复制进捕获；`--skip-assets` 对 URL 和本地一样跳过图片与 SVG。临时服务器从不出现在输出中：JSON 结果、`meta.json`（`source`，以及以文件或其文件夹命名的 `id`）、`AGENTS.md` 和提取文件都用 root 内相同路径的 `file://` URL。设了 `HYPERFRAMES_CAPTURE_PROXY` 时本地文件仍直接读取；其他请求走该代理。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes capture --local-file ./upload/index.html -o upload-capture --json\nnpx hyperframes capture --local-file ./site/pages/about.html --local-root ./site",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`transcribe`",
    "p": "",
    "paras": [
     "把音频或视频转成词级时间戳，或导入已有转录。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--dir, -d` | 项目目录（默认：当前目录） |",
     "| `--engine, -e` | ASR 引擎：`auto`（默认——已安装 Parakeet 且语言在它的 25 种之一用 Parakeet，否则 whisper）、`parakeet`（缺失/损坏/缺 `--language` 时失败）、`whisper`。`auto` 或 `parakeet` 下，非英语 `--language` 在已安装 whisper 时跑 whisper 并注明，因为 Parakeet 自行检测语言 |",
     "| `--model, -m` | Whisper 模型（默认 `small.en`）：`tiny.en`、`base.en`、`small.en`、`medium.en`、`small`、`medium`、`large-v3` |",
     "| `--language, -l` | 语言代码（`en`、`es`、`ja`，……）。Whisper 按此转录；Parakeet 自行检测语言，未安装 whisper 时非英语 `--language` 才有效。 |",
     "| `--to` | 写 `srt` 或 `vtt` sidecar：从转录文件是导出而非导入；从音频或视频写到 `transcript.json` 旁边，无空格语言分组为 cues，之后再导出该 `transcript.json` 可能分组不同 |",
     "| `--output, -o` | 导出的 SRT/VTT 放哪里 |",
     "| `--preserve-cues` | 保留每条转录条目为各自字幕 cue，跳过词级分组 |",
     "| `--optional` | whisper-cpp 不可用时跳过并以 0 退出，而非失败。供可无字幕继续的流水线。损坏的 Parakeet 安装是真失败：即使 whisper-cpp 缺失也以 1 退出。 |",
     "| `--timeout` | Whisper 子进程超时（毫秒），覆盖自动缩放默认值。在大型模型每音频秒需许多秒的慢速/模拟 CPU 上调大。仅 Whisper——Parakeet 有自己的。最小 5000。环境变量：`HYPERFRAMES_TRANSCRIBE_TIMEOUT_MS`。 |",
     "| `--json` | 把结果输出为 JSON | 命令会判断你给的是什么。音频与视频本地转录——已安装 Parakeet 时用 Parakeet（`hyperframes models install parakeet`；更快更准），否则 whisper.cpp。Parakeet 支持 en、es、fr、de、bg、hr、cs、da、nl、et、fi、el、hu、it、lv、lt、mt、pl、pt、ro、sk、sl、sv、ru、uk；`auto` 对其他 `--language` 用 whisper。如果 `auto` 下 Parakeet 失败，run 会说明原因、给出修复命令并改用 whisper。转录文件则被导入并归一化：whisper.cpp JSON、带词时间戳的 OpenAI Whisper API JSON、SRT、VTT 都落到 `transcript.json` 里同一个 `[{text, start, end}]` 词数组。项目若有字幕 HTML，会自动补丁。",
     "词级转录在句子边界分组为可读 cues。直接从 `.srt` 或 `.vtt` 导出会保留该文件的 cue 边界。源 `transcript.json` 已是无内部空格的成品 cues（单词或 CJK 字幕）时加 `--preserve-cues`。",
     "[!TIP] 对音乐或噪声音频，`--model medium.en` 明显更准。对于生产内容，经 OpenAI 或 Groq Whisper API 转录并导入 JSON。"
    ],
    "codeBlocks": [
     {
      "code": "# Local transcription\nnpx hyperframes transcribe audio.mp3\nnpx hyperframes transcribe video.mp4 --model medium.en --language en\n\n# Import from another tool\nnpx hyperframes transcribe subtitles.srt\nnpx hyperframes transcribe openai-response.json\n\n# Export a caption sidecar, from a transcript or straight from the media\nnpx hyperframes transcribe transcript.json --to srt\nnpx hyperframes transcribe video.mp4 --to vtt",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`models`",
    "p": "",
    "paras": [
     "列出或下载本地模型。只安装被要求的；首用不下载任何东西。",
     "`list` 仅在 `transcribe` 会用它时把 Parakeet 报告为已安装——经 CLI 自身运行时或 `parakeet-mlx`（`runner`）——并在当前机器无法运行时给出原因。Whisper 模型在 `transcribe` 下载后出现。",
     "`parakeet` 把 sherpa-onnx 运行时（从 npm）和 NVIDIA 的 Parakeet TDT 0.6B v3 语音模型（int8，约 640 MB，CC-BY-4.0）装到 `~/.cache/hyperframes`。每个文件都按锁定大小与 sha256 校验。重跑会在独立进程中加载运行时并重新校验各模型文件 sha256，失败的重装，好的什么都不变。它在 macOS（arm64、x64）、Windows（x64、ia32）和 Linux（x64、arm64，glibc 2.32 或更新）上运行，其他地方直接拒绝。Ctrl-C 停止下载且不保留部分文件。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes models list                      # Parakeet and any downloaded whisper models\nnpx hyperframes models list --json               # { ok, models: [{ engine, model, installed, runner, path }] }\nnpx hyperframes models install parakeet          # progress on stderr\nnpx hyperframes models install parakeet --json   # one JSON result",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`tts`",
    "p": "",
    "paras": [
     "用本地模型（Kokoro-82M）生成语音。无需 API key，什么都不离机。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--output, -o` | 输出路径（默认当前目录 `speech.wav`） |",
     "| `--voice, -v` | 声音 ID。`--list` 查看全部。 |",
     "| `--speed, -s` | 语速乘数（默认 1.0） |",
     "| `--lang, -l` | 音素化 locale：`en-us`、`en-gb`、`es`、`fr-fr`、`hi`、`it`、`pt-br`、`ja`、`zh`。不传时从声音 ID 推断。 |",
     "| `--list` | 列出声音并退出 |",
     "| `--json` | 把结果输出为 JSON | 声音 ID 首字母是其语言：`a` 美式、`b` 英式、`e` 西班牙语、`f` 法语、`h` 印地语、`i` 意大利语、`j` 日语、`p` 巴西葡语、`z` 普通话。所以 `--voice ef_dora` 本就说西班牙语。只有故意混用时才用 `--lang`——例如法语音素化英语文本，做风格化口音。",
     "[!TIP] 要一次拿到配音*和*字幕时序：用 `tts` 生成音频，然后对其跑 [`transcribe`](#transcribe)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes tts \"Welcome to HyperFrames\"\nnpx hyperframes tts \"Intro\" --voice bf_emma --output narration.wav\nnpx hyperframes tts \"Slow and clear\" --speed 0.8\nnpx hyperframes tts script.txt\nnpx hyperframes tts --list",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`remove-background`",
    "p": "",
    "paras": [
     "用本地 AI 模型把视频或图片背景抠出。输出是可直接放入 `<video>` 或 `<img>` 的透明媒体。无需绿幕。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--output, -o` | 输出路径。格式跟随扩展名：`.webm`（默认）、`.mov`、`.png`。 |",
     "| `--background-output, -b` | 第二个输出：反 alpha 底板，主体区域透明、周围不透明。必须是 `.webm` 或 `.mov`。是挖洞，不是补全——请在下面合成别的东西。 |",
     "| `--device` | 执行 provider：`auto`（默认）、`cpu`、`coreml`、`cuda` |",
     "| `--quality` | WebM 预设：`fast`（crf 30）、`balanced`（crf 18，默认）、`best`（crf 12）。更高让抠像 RGB 更接近源，叠在自身素材上时重要。仅 `.webm`。 |",
     "| `--info` | 打印检测到的执行 provider 并退出 |",
     "| `--json` | 把结果输出为 JSON | 你想要哪种格式？",
     "| 格式 | 用途 | 大小（4s @ 1080p） |",
     "| - | - | - |",
     "| `.webm` (VP9 alpha) | 放入 `<video>` 做 HTML5 原生透明播放 | \\~1 MB |",
     "| `.mov` (ProRes 4444) | Premiere / Resolve / DaVinci 剪辑往返 | \\~50 MB |",
     "| `.png` | 单图抠像 | 视情况 | 模型是 `u2net_human_seg`（Apache-2.0，\\~168 MB ONNX）。首次运行下载到 `~/.cache/hyperframes/background-removal/models/`，之后复用。推理峰值 RAM 约 1.5 GB。",
     "`--device auto` 在 Apple Silicon 上选 CoreML，可用时选 CUDA，否则 CPU。首次运行会把 `onnxruntime-node` 的 CPU 版装到 `~/.cache/hyperframes/optional/`（stderr 一行，一次，无提示）；CUDA 需设 `HYPERFRAMES_CUDA=1` 并提供 GPU 版。设 `HYPERFRAMES_NO_OPTIONAL_INSTALL=1` 时首次使用不装任何东西（该包、`@google/genai`，或缺失的 `sharp`），命令失败并注明包名；像 `HYPERFRAMES_NO_OPTIONAL_INSTALL=sharp` 的逗号列表只关掉列出的。",
     "[!TIP] Chrome 的 `<video>` 只有 WebM 是 `yuva420p` 且带 `alpha_mode=1` 元数据标签时才尊重 alpha 面。CLI 已设置两者。若你自己转码输出，请保留它们。",
     "[Remove background guide](https://hyperframes.heygen.com/guides/remove-background.md) 讲完整工作流——在合成里用透明视频、各平台性能、`u2net_human_seg` 在哪里不行，以及免费替代。"
    ],
    "codeBlocks": [
     {
      "code": "# Default: VP9-with-alpha WebM, plays natively in HTML5\nnpx hyperframes remove-background avatar.mp4 -o transparent.webm\n\n# ProRes 4444 for an editing round-trip\nnpx hyperframes remove-background avatar.mp4 -o transparent.mov\n\n# One image → transparent PNG\nnpx hyperframes remove-background portrait.jpg -o cutout.png\n\n# Cutout and inverse-alpha background plate in one pass\nnpx hyperframes remove-background avatar.mp4 -o subject.webm --background-output plate.webm\n\n# What providers does this machine have?\nnpx hyperframes remove-background --info",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`media-treatment`",
    "p": "",
    "paras": [
     "读取或编辑存放在图片和视频上的颜色与效果处理。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--capabilities` | 打印简洁能力概览 |",
     "| `--capability <id>` | 查看一个家族、控件、效果、预设或 palette |",
     "| `--all` | 打印详尽能力目录 |",
     "| `--project <dir>` | 项目目录（默认：当前目录） |",
     "| `--file <path>` | 合成文件；省略则跨挂载场景查找 selector |",
     "| `--selector <css>` | CSS 选择器；每个匹配的 `<img>`、`<video>` 或 `<canvas>` 都得补丁 |",
     "| `--selector-index <n>` | 以零为基的匹配序号，只打一个 |",
     "| `--grading <json>` | 经校验的颜色分级补丁 |",
     "| `--apply` | 应用补丁 |",
     "| `--analyze` | 测量所选本地媒体并建议有界修正 |",
     "| `--clear` | 从目标移除颜色分级 |",
     "| `--dry-run` | 校验并报告，不写入 |",
     "| `--json` | 代理解读的 JSON | 不带 `--file` 时，命令搜索 `index.html` 及它挂载的每个场景，包括嵌套在另一场景 `<template>` 里的场景。它编辑包含匹配 clip 的文件。若 selector 在多文件匹配，传 `--file` 选一个。",
     "`--dry-run` 接受不带 `--apply` 的 `--grading` 且不写入。JSON 含 `count`、`attribute`、apply 会写入的精确归一化 `value`（或移除时的 `null`），以及 `lint`——对拟议 HTML 的颜色分级 lint 结论与发现。当 selector 匹配多元素时，每个把补丁合并进自己当前 grading，JSON 在 `targets` 下列出（各自带 `value`）而非单个 `value`；想视觉一致请先跑 `--clear`。匹配来自主文档，或主文档无时来自第一个含匹配的 `<template>`，与 Studio 源编辑同范围规则。",
     "命令写 `data-color-grading`——Studio、preview、render 共用的同一契约，所以两者永不打架。它不识别主体、不隔离图像某部分；效果覆盖整个媒体层。"
    ],
    "codeBlocks": [
     {
      "code": "# Find out what exists, then look at one family or effect\nnpx hyperframes media-treatment --capabilities --json\nnpx hyperframes media-treatment --capability kuwahara --json\n\n# Measure a selected local source\nnpx hyperframes media-treatment --selector '#hero' --analyze --json\n\n# Apply, preview, or clear\nnpx hyperframes media-treatment --selector '#hero' \\\n  --grading '{\"preset\":\"skin-soft\",\"intensity\":0.6}' --apply\nnpx hyperframes media-treatment --file compositions/scene.html --selector 'video' \\\n  --grading '{\"preset\":\"warm-daylight\"}' --dry-run --json\nnpx hyperframes media-treatment --selector '#hero' --clear",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`media-use`",
    "p": "",
    "paras": [
     "获取视频所需的音乐、音效、图片、图标、logo、配音和调色，存为项目内文件。每个资产都记录，再次索要同一东西复用文件，不重复拉取。`media-use` 技能驱动该命令；你也可以自己跑。",
     "`resolve` 打印一行，如 `resolved sfx_001 → .media/audio/sfx/sfx_001.mp3 (sfx, 0.6s)`，带 `--json` 打印整条记录。它从不编辑你的合成 HTML；文件引用由你自己写。",
     "| 子命令 | 作用 |",
     "| - | - |",
     "| `resolve` | 查找、制作或导入一项资产。接受下表全部旗标 |",
     "| `candidates` | 列出项目内与全局缓存已有的 `--type` 资产，`--intent` 匹配度优先。不下载不改变。等同 `resolve --candidates` |",
     "| `adopt` | 把 `assets/` 里已有文件收录，后续请求可找到，时长与大小由 `ffprobe` 读 |",
     "| `analyze` | 测量图片或视频并打印建议曝光与颜色修正，不保存。需 `--type grade --for <file>` |",
     "| `voices` | 列出当前登录 HyperFrames 账号上的声音克隆，供 `generate` 的 `--voice`。从不列出独立 `heygen` CLI 账号的 |",
     "| `avatars` | 列出当前登录 HyperFrames 账号上的 avatar 形象，格式 `{avatars: [{avatar_id, name, avatar_type, group_id, gender, status, default_voice_id, preview_image_url}]}`，供 `generate --type avatar` 的 `--avatar`。`--limit`（默认 20）。从不列出独立 `heygen` CLI 账号的 |",
     "| `doctor` | 检查 ffmpeg、ffprobe、Node.js、内置音效库，以及 `heygen` CLI（已安装、v0.3.0 或更新、已登录）。不改变任何东西 |",
     "| `stats` | 从项目 `.media/` 与全局 `~/.media/` 统计请求、缺失与复用 |",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--type` | 媒体类型，见下表。除 `doctor`、`stats`、`adopt` 外每个子命令都必填 |",
     "| `--intent` | 用平白话说需要什么。对 `voice` 和 `video` 是要说的话 |",
     "| `--entity` | 名称如品牌（`linkedin`），后续同名复用文件 |",
     "| `--project, -p` | 项目目录（默认：当前目录） |",
     "| `--candidates` | 列出可复用资产而非 resolve。`--dry-run` 同样 |",
     "| `--reuse <sha>` | 把全局缓存的一项资产复制进当前项目，按 `candidates` 打出的内容哈希或前缀 |",
     "| `--from <file>` | 导入本地文件或直接公开媒体 URL。YouTube 等页面被拒 |",
     "| `--params <json>` | 从显式值构建 LUT，如 `'{\"contrast\":0.2}'`。仅 `lut` 与 `grade` |",
     "| `--for <media>` | 测量该图片或视频并把建议修正加到 grade 上。仅 `grade` |",
     "| `--analyze` | 配合 `--type grade --for`，打印测量并停 |",
     "| `--local-only` | 跳过所有网络 provider。只用本机缓存与已装工具 |",
     "| `--provider <name>` | 只用该 provider 并跳过复用：如 `heygen`、`codex`、`mflux`、`kokoro`。未知名字失败并列出合法者 |",
     "| `--voice-id` | `voice` 与 `video` 的 HeyGen 声音（默认：目录第一个） |",
     "| `--avatar-id` | `video` 的 HeyGen 形象（默认：第一个公开形象） |",
     "| `--days <n>` | 配合 `stats`，只计最近 `n` 天 |",
     "| `--json` | 打印 JSON 而非一行 | 每种类型来源（按序试，直到成功）：",
     "| `--type` | 你得到 | 来源 |",
     "| - | - | - |",
     "| `bgm` | 背景音乐 | HeyGen 音乐目录 |",
     "| `sfx` | 音效 | Openverse（CC0 或 CC BY，无需账号），然后可离线的内置库 |",
     "| `image` | 照片与背景 | HeyGen 资产搜索，然后本机 mflux 生成，然后 `codex` CLI |",
     "| `icon` | 图标 | HeyGen 资产搜索 |",
     "| `logo` | 官方品牌标记 | theSVG，然后 GitHub 组织头像，然后站点 favicon |",
     "| `voice` | `--intent` 文本的口播音频 | HeyGen 文本转语音，然后本机 Kokoro |",
     "| `video` | 形象说 `--intent` 文本 | HeyGen 形象视频，然后启用时本机 LTX |",
     "| `brand` | 品牌色、字体与 logo | 项目自有 `frame.md` 或 `design.md`。永不联网 |",
     "| `grade` | `data-color-grading` 的调色块 | 内置预设、look 库 LUT，或从 `--intent` 词构建的 LUT |",
     "| `lut` | `.cube` LUT 文件 | look 库 LUT，或从 `--intent` 词构建 | 拉取任何东西之前，`resolve` 先复用精确旧匹配：本项目同 `--type` 与 `--intent`（或 `--entity`）、`assets/` 里名字与 intent 共享一词的文件、全局缓存 `~/.media/` 同请求。`--provider` 跳过复用。新文件落在 `.media/<kind>/`，记入 `.media/manifest.jsonl` 与 `.media/index.md`，并复制到 `~/.media/` 以便其他项目复用。CC BY 音效的署名写入 `.media/audio/sfx/CREDITS.md`。",
     "**什么需要账号、什么可能花钱。** HeyGen 来源经独立 `heygen` 可执行文件运行，用 `hyperframes auth login` 选定的登录。它拿临时访问令牌凭据，读不到独立 HeyGen 登录，也刷新不了 HyperFrames grant。功能资格与计费由服务端决定。显式 API key 凭据按 API key 计费。当宿主应用设了 `HEYGEN_API_BASE` 与 `HEYGEN_API_KEY` 时，HeyGen 调用改走该宿主并按其 key 计费。`codex` 图像 fallback 用你的 ChatGPT 订阅。Openverse、theSVG、GitHub、favicon、调色与本地生成器免费。`doctor` 仅在 ffmpeg、ffprobe 或内置音效缺失时以 1 退出；HeyGen 问题列出修复法但不失败。",
     "`media-use` 发送用量事件——媒体类型、哪个来源胜出、是否复用文件，从不发你的 intent 文本或路径——与 [`telemetry`](#telemetry) 同退出选项。你登录 HeyGen 前匿名，之后关联到你的账号，如 [`telemetry`](#telemetry) 下所述。",
     "围绕这些资产的工作流见 [Voice, sound, and captions](https://hyperframes.heygen.com/guides/voice-and-audio.md) 与 [Color grading](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color)，HeyGen 凭据见 [Authentication](https://hyperframes.heygen.com/guides/authentication.md)。"
    ],
    "codeBlocks": [
     {
      "code": "# Find or make one asset and save it in the project\nnpx hyperframes media-use resolve --type sfx --intent \"whoosh\"\nnpx hyperframes media-use resolve --type logo --entity linkedin --intent \"LinkedIn logo\"\nnpx hyperframes media-use resolve --type grade --intent \"warm daylight\" --json\n\n# Look at what you already have before fetching more\nnpx hyperframes media-use candidates --type bgm --intent \"upbeat tech launch\"\nnpx hyperframes media-use resolve --type bgm --reuse 06e052c0\n\n# Bring in a file you already have\nnpx hyperframes media-use resolve --type image --from ./photo.jpg\n\n# The voice clones and avatar looks on the account that makes the film\nnpx hyperframes media-use voices\nnpx hyperframes media-use avatars --limit 10\n\n# Check the setup, and see what has been used\nnpx hyperframes media-use doctor\nnpx hyperframes media-use stats --days 7",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`beats`",
    "p": "",
    "paras": [
     "在合成音乐里找节拍并写到 Studio 期望处。",
     "给音频或视频文件而非文件夹时，`beats` 用同一 tracker 分析该文件并打印结果；不写入任何东西。",
     "`beats` 找音乐轨——带 `data-timeline-role=\"music\"` 的 `<audio>` 元素，或 id 像 `music`、`bgm`、`soundtrack` 的——用 ffmpeg 解码，跑 Studio 同版节拍 tracker，并写 `beats/<audio-path>.json`：",
     "authoring 时就跑，让文件在 Studio 打开**前**存在——Studio 原样加载该文件，仅在不存在时才生成。`time` 是音频内秒数；`strength`（0–1）是相对响度。Studio 里加、移、删的节拍存回同一文件。",
     "无稳定节拍的轨（环境音、rubato、太短）得不到节拍文件：命令答空结果（`count: 0`，退出 0）且不写，不编造网格。结果与 Studio 相差一两帧——Studio 在浏览器解码，常以不同采样率，会把节拍挪一点。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes beats [dir]\nnpx hyperframes beats [dir] --json   # { ok, file, count, bpm }\nnpx hyperframes beats <file> --json  # { ok, file, count, bpm, beatTimes }",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "{\n  \"version\": 1,\n  \"audio\": \"music.wav\",\n  \"beats\": [{ \"time\": 2.027, \"strength\": 0.924 }]\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "`audio`",
    "p": "",
    "paras": [
     "测量声音怎样随时间移动，好让剪辑或动画落点命中。",
     "每个声音报告： 影片查询（`--element`、`--at`、`--range`）读当前目录或 `--dir` 的项目，找出覆盖的 `<audio>` 与 `<video>` clip——含嵌套合成——只分析每文件播放的那部分。`--json` 以文件秒返回时间，附每 clip 的 placement（`start`、`mediaStart`、`playbackRate`、以及元素自身 `data-start` 即 `dataStart`，相对于其合成的本地时间），影片时间是 `start + (t − mediaStart) / playbackRate`；文本输出打印影片时间。",
     "文件尚未进片时，`--place-at <s>` 假装它从该影片秒开始；`--skip-file-seconds <s>` 先从文件头剪掉那么长，结果在剪掉部分含最响瞬间时警告。",
     "`--only` 还索要音乐结构（不索不测）： 词时序不在这里：用 [`transcribe`](#transcribe)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes audio sfx/whoosh.mp3                  # one file, in file seconds\nnpx hyperframes audio sfx/hit.wav sfx/whoosh.mp3      # several files, one report\nnpx hyperframes audio sfx/hit.wav --place-at 4.2      # not in the film yet: where it lands if it starts at 4.2 s\nnpx hyperframes audio --element '#riser'              # one clip of the film, in film seconds\nnpx hyperframes audio --at 12                         # every sound playing at 12 s\nnpx hyperframes audio --range 10,14 --only onsets     # every hit between 10 and 14 s",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "**moments**：起处（RMS 首次达峰值 20%）、最快上升处、最响处、尾声落到峰值下 40 dB 处。短打击重音在峰值；慢 whoosh 重音在最陡上升。",
     "**onsets**：每个 hit，强度相对最强者。",
     "**loudness**：综合与短时最大 LUFS（ITU-R BS.1770，与 FFmpeg `ebur128` 吻合至 0.1 LU）、采样与真峰、削波。",
     "**silence**：`--silence-db`（−50 dBFS）下的安静段。",
     "**kind**：`sfx`、`voice`、`music` 的初步判断，带其依据。",
     "**envelope**：随时间电平，每声音约 2,000 值。",
     "**beats**：节拍时间；无节拍可跟时无并带 `reason`（`no steady beat`，或太短无法判断）。",
     "**downbeats**：每小节首拍，带 `meter`（3 或 4）。信号处理推出是猜测（`confidence: \"low\"`）。",
     "**bpm**：从节拍读的速度（中位间隔），渐快渐慢的音乐每 4 s 一条 `curve`。总来自回答 `beats` 的 provider。",
     "**sections**：声音保持相近的段，每段一字母；回归段沿用旧字母。",
     "**describe**：音频内容标签，各带 score。"
    ]
   },
   {
    "h": "整段录音阅读",
    "p": "",
    "paras": [
     "`--read` 把一录音——一期节目、参考视频——转成时间戳行供代理读或 grep，而非单声测量： 句子来自转录：`--transcript <file>`，或录音旁 `<recording>.transcript.json`。无转录时语音行不带词。",
     "已知单层的 file 用 `--layer music|sfx|voice` 整读：不取 stem，什么都不离机，无论 `--quality`。`music` 按音乐 bed 读（段、速度、电平），`voice` 读词与停顿，`sfx` 找其音效。JSON 结果记所声明 `layer`；不带该旗标阅读不变。",
     "音效与音乐从 stem 读。在 `--quality best` 时，录音经 HeyGen `/v3/audio/stems` 分离为 vocals、drums、bass、guitar、piano、other，用你的 HeyGen 凭据（见 [audio services](#audio-services)）：以 192 kb/s MP3 经同 origin 直传 endpoint 上传。分离请求等待 stem；进行中响应或连接丢弃用同一 idempotency key 重试同请求（`HYPERFRAMES_AUDIO_STEMS_TIMEOUT_MS`，默认 30 分钟）。音效从 drums stem 读，并从其余四 stem 中无音乐无环境处读（每 stem 自立，避免 tone 内 click 漏检）；音乐与环境从其余四 stem 读；表头只列有声 stem 及电平。无 stem 时音效从混音在语音外读，音乐不读；无 stem 无转录时语音与音效都不读，因为混音单凭分不清语音与音乐。每种情形都会在警告中说明。",
     "结果按 file 内容算一次并保存在项目下 `.hyperframes/read-audio`（连 stem）；文本输出以全录音文本路径收尾，`--json` 返回分析。",
     "Read schema version 4 增加 `effects.events[].peakDb`（dBFS）；`riseDb` 改为 effect 前录音电平上的峰值，听声时为 `null`，`overMusicDb` 测 effect 旁音乐而非峰值下。句子新增 `againstMusic: { voiceLufs, musicLufs } | null`，停顿新增 `recordingDb`（停顿中录音电平）。Version 3 分析从缓存 stem 重算。",
     "Read schema version 3 把 `analysis.stems` 从名字改为 `{ name, db }[]`，最响在前。只列 −55 dBFS 及以上帧的 stem；`db` 是那些帧的四舍五入功率均值，非 dB 值平均或静隙电平。`analysis.ambience` 含 `{ start, end, db }` 段，无 stem 时为 `null`。/music 能量与音效过音乐电平排除归为 ambience 的段。Version 2 缓存分析用已有缓存 stem 重算；JSON 消费者请用 `stem.name` 而非把每 stem 当字符串。",
     "每次测量走 provider 阶梯，按序试直至一方回答：",
     "| 能力 | 阶梯 |",
     "| - | - |",
     "| moments, onsets, loudness, silence, envelope, kind | `signal` |",
     "| beats, downbeats（连带 bpm） | `api`, `apple-mu`, `beat-this`, `signal` |",
     "| sections | `api`, `apple-mu`, `signal` |",
     "| describe | `api`, `apple-sound` | 不能跑或跑失败的 provider 带警告跳过，警告说清原因。`--quality local|best|fast` 限定哪些 provider 可跑：`local`（默认）音频留本机；`best` 还送到下述音频 services；`fast` 只准信号处理。因把某服务留在外而无回答时，警告说 `--quality best` 能回答它。`--provider beats=signal` 把某能力钉到单 provider，`--full` 显示每阶梯步。用 `--onset-method`、`--threshold`、`--band lo,hi`、`--hop-ms`、`--onset-ratio`、`--tail-db`、`--silence-db` 调分析。解码需 FFmpeg。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes audio refs/episode.mp4 --read                 # the whole recording\nnpx hyperframes audio refs/episode.mp4 --read --range 60,70   # only what overlaps 60–70 s",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "  uv init --bare ~/.beat-this\n  uv add --project ~/.beat-this \"beat-this @ git+https://github.com/CPJKU/beat_this\" torch torchaudio soundfile\n  ~/.beat-this/.venv/bin/python -c \"from beat_this.inference import load_checkpoint; load_checkpoint('small0')\"\n  export HYPERFRAMES_BEAT_THIS_PYTHON=~/.beat-this/.venv/bin/python",
      "file": "BASH THEME={NULL}"
     }
    ],
    "bullets": [
     "**voice**：一句一行，带文本、相对全录音均值的说话率、与中位偏 3 半音以上时的音高、上升或下降结尾，以及在有垫乐时仅就重叠段的语音与音乐综合响度与谁更响：`voice -14 LUFS, music -18 LUFS: voice 4 dB over music`、`…: music 4 dB over voice`，或 0.5 dB 内 `…: level with each other`。鼓算音乐；两者都在单声道下混测。词间 0.4 s 以上停顿保留 `pause` kind，并说明停顿中还有什么在响：其中音效、音乐或环境及其时间、无 bed 可读时录音电平，或 −55 dBFS 下 `silent`。",
     "**effects**：每事件标 `effect`，不指定声音 kind。相似声归组 `S1`、`S2`，……（`S1` 最常用）。每事件保留时间、源 stem、频段、attack、尾声、峰值、高于周围音乐的电平、及在停顿中的位置。峰值是该 effect 处全录音最响 20 ms，以 dBFS 计，不取决于 stem 如何分离或编码；后面数字注明参照：`+4 dB over music` 相对 effect 前一秒音乐（音乐与之同时起则后一秒）、`+12 dB over what played before` 相对前半秒录音中位、`out of silence`。声音止于下一个起处。同声快串一行带计数；在音乐节拍上的击打是音乐自身鼓声，低于录音 20 dB 以上是分离残留无人听得，都略去。组摘要给组 id 与计数，不给声音 kind。",
     "**music**：bed 在掏空处切开，每段说曲子、承载乐器、速度、是起/因中断续/回归/新，以及在哪里淡出。音乐与环境必须 sustained：周围 2 s 内填充不到一半声音处（如散打或短音桥进音乐），bed 按 effects 读，音乐从声音撑住处起。",
     "**ambience**：bed 无音乐证据的段，带 dBFS 电平，−45 dBFS 下称 quiet。门限计该段内检测到的节拍、集中音高类能量、或多 leading stem 为音乐证据。这是信号启发式，非保证：纯音或节奏噪声可算音乐，证据弱的音乐可算环境。仅相邻音乐段间报告 break。",
     "`api` 是 HeyGen `/v3/audio/analysis`，有 HeyGen 凭据时用（见 [audio services](#audio-services)）。音频以 16 kHz 单声道 WAV 经同 origin 公共资产直传与完成 endpoint 上传。每解码信号上传一次；分析请求把其 finalized 资产 ID 作 JSON 发。凭据需资产上传与音频权限。声道平均，除非抵消去掉最响声道 90% 以上能量时用该声道。每请求带新 `Idempotency-Key`；回答可能包 `{ \"data\": … }`。其回答的每节拍、小节首拍或段边界在信号处理测到节拍四分之一拍内时挪到最近者；其余列入 `snap.unsnapped`，`snap.medianShiftMs` 说挪了多远。",
     "`apple-mu` 是 Apple Music Understanding，需 macOS 27。尚不可用。",
     "`beat-this` 是 [Beat This!](https://github.com/CPJKU/beat_this)，在 `HYPERFRAMES_BEAT_THIS_PYTHON` 指名装有 `beat-this` 的 Python 且其 `small0` 权重在盘（`HYPERFRAMES_BEAT_THIS_CHECKPOINT`，或 Torch hub 缓存 `beat_this-small0.ckpt`）时用。CLI 永不下载它们；一次性装好：",
     "`apple-sound` 是 macOS 内置声音分类器，经用 Xcode 命令行工具编译一次的小 Swift helper。"
    ]
   },
   {
    "h": "音频 services",
    "p": "",
    "paras": [
     "仅 `--quality best` 时上传音频。Stem 与 `api` provider 当时调用 HeyGen，可能向你账户计费，与其他 HeyGen 命令同凭据（顺序见 [`hyperframes auth`](#hyperframes-auth)），API 在设 `HEYGEN_API_URL` 时用之。API key 作 `x-api-key` 发；OAuth 凭据作 bearer。服务拒求时分析带警告 fallback。无凭据时 stem 跳过、`api` 跳过。`local`（默认）不查凭据，什么都不离机。",
     "用其他服务时，设 `HYPERFRAMES_AUDIO_STEMS_URL` 或 `HYPERFRAMES_AUDIO_API_URL` 为其完整 URL 并配 `HYPERFRAMES_AUDIO_API_KEY`，作 `x-api-key` 发。HeyGen 凭据永不发到这样设的 URL。任一 URL 设空串即关闭该服务，无论有无凭据。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`normalize-audio`",
    "p": "",
    "paras": [
     "用确切本地媒体字节与 FFmpeg 综合 EBU R128 响度测量，把某已编音频 clip 匹配到参考。",
     "`--reference` 与 `--target` 是 `<audio>` 元素 id，带不带 `#` 皆可。命令在 `index.html` 及挂载场景中找它们，包括嵌套在另一场景 `<template>` 里的场景。多文件同 id 被拒；`--write` 只改含目标 clip 的文件。",
     "参考保持不变；命令计入双 clip 当前 `data-volume` 并写目标绝对匹配增益。测量 `data-media-start` 与 `data-duration` 并拒远程或项目外源。整匹配会超 Studio +12 dB 上限或 -1.5 dBTP 时，取可承受最大并说明比参考低多少。Dry-run 是故意：先看测量再传 `--write`。用 `--tolerance <LU>` 改默认 0.5 LU no-op 阈值。"
    ],
    "codeBlocks": [
     {
      "code": "# Measure only (the default)\nnpx hyperframes normalize-audio --reference target-audio --target user-audio\n\n# Persist the computed gain on #user-audio\nnpx hyperframes normalize-audio --reference target-audio --target user-audio --write\n\n# Agent-readable result\nnpx hyperframes normalize-audio --reference target-audio --target user-audio --json",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`preview`",
    "p": "",
    "paras": [
     "启动带热重载的 live 预览服务器。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--port` | 服务器端口（默认 3002） |",
     "| `--open` / `--no-open` | 打开浏览器，或保持关闭 |",
     "| `--background` | 命令退出后继续运行内嵌预览 |",
     "| `--foreground` | 即使 shell 非交互也挂住 |",
     "| `--json` | 对 managed start、status、stop、list、kill-all 输出一个版本化 JSON 结果 |",
     "| `--browser-gpu` / `--no-browser-gpu` | Studio 缩略图与帧捕获用硬件 GPU，或确定性 SwiftShader（默认：自动检测） |",
     "| `--proxy` / `--no-proxy` | 自动转码浏览器不喜欢的编码（HEVC、ProRes、AV1）为缓存创作代理（默认：开） |",
     "| `--browser-path` | 打开指定浏览器。`--user-data-dir`、`--remote-debugging-port` 和 `--browser-no-gpu` 需要它。 |",
     "| `--status` / `--stop` | 对本项目后台预览行动 |",
     "| `--list` / `--kill-all` | 对全部预览行动 |",
     "| `--force-new` | 对已有预览的项目开第二个服务器 | 管理运行中的服务器：`--status` 和 `--stop` 对本项目后台预览行动，`--list` 和 `--kill-all` 对全部行动，`--force-new` 对已有项目开第二个服务器。各命令即刻退出。",
     "Bare `preview` 按调用方选最安全 lifecycle：人类交互终端里留前台，非交互或代理 shell 起 managed 后台预览。同项目再跑复用健康预览。每次 start 或 status 结果都带确切 Studio 项目 URL 与底层服务器 URL，代理无需从端口猜项目交接。",
     "从脚本读运行中的 Studio：`--selection` 打印选中元素，`--context` 打印代理可读上下文，都带 `--json`。用 `--context-fields`（`server`、`selection`、`lint`、`capabilities`）与 `--context-detail`（`compact` 或 `full`）缩窄上下文。",
     "合成在 HyperFrames Studio 打开，`index.html` 及子合成改动 live 刷新。Preview 与 render 共同一运行时。",
     "服务器自选三种模式之一：**embedded**（`npx` 默认——Studio 打进 CLI，无额外依赖）、**local studio**（完整 HMR 的 Vite，来自 `@hyperframes/studio` 源码 checkout）、或 **monorepo**（从源码仓库运行时跑 studio dev server）。Local studio 模式只在项目解析到与 CLI 自身同 Studio checkout，或你设 `HYPERFRAMES_LOCAL_STUDIO=1` 时跑；项目自有 `node_modules` 里的 Studio 否则不用。`--background` 只对 embedded 服务器可用。",
     "预览服务器只回答它服务的 host 名。经隧道、Codespaces 或反向代理打开时，把该 host 命名到 `HYPERFRAMES_PREVIEW_ALLOWED_HOSTS`（逗号分隔）。被拒请求答 403，host 名与该变量即修复法：",
     "CLI 自带 GSAP、CustomEase、MotionPathPlugin，Studio 加进预览的 GSAP 脚本从预览服务器自身加载，不从 jsDelivr。用你自己的镜像改为启动服务器前设 `HYPERFRAMES_GSAP_BASE_URL`。查找顺序、镜像布局、该设置不覆盖项见 [Where Studio loads GSAP from](https://hyperframes.heygen.com/packages/studio-server.md#where-studio-loads-gsap-from)。",
     "[!NOTE] Preview 实时播放，paint-heavy 合成在本机可能卡顿。Render 按序 seek 并逐帧捕获，同样工作量通常表现为更长渲染而非掉帧。浏览器、字体、GPU 差异仍会改变确切像素——以渲染文件为准。见 [Performance](https://hyperframes.heygen.com/guides/performance.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes preview [dir]\nnpx hyperframes preview --port 4567\nnpx hyperframes preview --background     # keep running after the command exits\nnpx hyperframes preview --foreground     # stay attached in a non-interactive shell\nnpx hyperframes preview --status --json  # inspect a managed preview from an agent\nnpx hyperframes preview --list           # every running preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "HYPERFRAMES_PREVIEW_ALLOWED_HOSTS=demo.tunnels.example hyperframes preview",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`present` 和 `play`",
    "p": "",
    "paras": [
     "`present` 提供幻灯片并打开演示者视图。演示者与观众视图在命令运行时保持同步。",
     "`--port` 默认 3004。`--open` / `--no-open` 控制浏览器，`--browser-path` 打开指定——`--user-data-dir` 与 `--remote-debugging-port` 都需要它。",
     "`play` 把合成在轻量 Player 而非 Studio 打开——无编辑器，只有播放。同旗标，`--port` 默认 3003，另有 `--proxy` / `--no-proxy`。",
     "两者监听每网卡，手机或网内另一台电脑可用本机 LAN 地址或 `.local` 名打开。回答 `localhost`、回环地址、本机自身地址与名字。其他 host 名（如隧道、Codespaces、反向代理）在你于 `HYPERFRAMES_PREVIEW_ALLOWED_HOSTS` 命名前一律 403，与 `preview` 同设置："
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes present [dir]\nnpx hyperframes present [dir] --port 3004",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "HYPERFRAMES_PREVIEW_ALLOWED_HOSTS=demo.tunnels.example hyperframes present",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`publish`",
    "p": "",
    "paras": [
     "新视频评审请用 [`share`](#share)。旧源发布带通知保留 60 天，自宣布通知的发布起算。发布日期尚未排期。窗口后新 `publish` 运行会指引你到 `share` 选新受众；旧旗标永不静默翻译。已发布 URL 与旧更新在另设退役计划下保持支持。窗口后用 `hyperframes auth login` 登录更新已有发布；登出与 API key 发布无法保留 ownership。旧服务器对缺失更新目标的处理不变。",
     "上传项目并返回稳定的 `hyperframes.studio` URL。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--yes, -y` | 跳过确认提示。无人值守运行必填 |",
     "| `--public` | 让认领的项目对任何人可见 |",
     "| `--update <url-or-id>` | 原地更新已有项目。需登录。 |",
     "| `--space <space-id>` | 发布进共享团队 space。需登录。 |",
     "| `--proxy` / `--no-proxy` | 给浏览器不喜欢的编码烘 H.264 代理，或跳过 | `publish` 打包项目、上传，并打印指向存储内容的 URL——CLI 退出后仍可用。无本地服务器常驻，无隧道。",
     "登出也能发布。打印 URL 带 claim token：在 `hyperframes.studio` 打开的人可登录、认领项目、继续在网页编辑。",
     "想拥有可再次发布的稳定链接时先 `npx hyperframes auth login` 登录。`--update` 与 `--space` 都需要该 ownership。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes publish [dir]\nnpx hyperframes publish --yes\nnpx hyperframes publish --update <url-or-id>\nnpx hyperframes publish --space <space-id>",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`open` 和 `catch-up`",
    "p": "",
    "paras": [
     "`open` 在 HyperFrames 桌面 app 打开项目并加入 Home。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `[dir]` | 项目目录（默认：当前） |",
     "| `--json` | 机器可读结果 | 在 Claude Code、Codex 或 Grok 下运行时，app 的聊天会接上该对话。无法打开 app 时（例如未安装），`open` 以 1 退出并打印下载链接。带 `--json` 时结果注明 `reason` 与 `downloadUrl`。交接在 macOS、Windows 与 Linux 可用。",
     "app 不能在该项目预览运行时编辑它，因为预览持有项目编辑历史。所以 `open` 先停该项目 `preview --background` 服务器并告知。其他预览（如终端起的）留着，并打印 `preview --stop` 命令。带 `--json` 时 `preview` 字段报 `none`、`stopped` 或 `left-running`。`left-running` 的预览带 `stopCommand`。文件夹名无法对每种 Windows shell 安全打印时为 `null`，`stopCommandFromProject` 持需在项目文件夹内跑的命令。",
     "`catch-up` 是交接的另一半。你从桌面 app 回来后、先改任何东西前运行：它列出他们所说与上次看后 app 里的改动，以及自此改动的文件。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `[dir]` | 项目目录（默认：当前） |",
     "| `--json` | 机器可读结果 | 每次运行把已展示标记为 seen，下次只列新的。从未从这里交给 app 的项目无可 catch up。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes .               # the project in the current directory\nnpx hyperframes ./my-video      # any folder that isn't a command name\nnpx hyperframes open            # the same, naming the command\nnpx hyperframes open --json     # for agents",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes catch-up\nnpx hyperframes catch-up ./my-video\nnpx hyperframes catch-up --json",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`lint`",
    "p": "",
    "paras": [
     "读 HTML 并报告常见错误。无需浏览器，所以快。",
     "错误（`✗`）渲染前必须修——缺失 adapter 库、无效属性等。警告（`⚠`）多半是问题。信息（`ℹ`）默认隐藏，传 `--verbose` 显示，给代理/CI 保持干净。`render`、`preview`、`publish` 用的 `--lint-verbose` 同愿望，这里与 `check` 也可用。`--json` 增加 `errorCount`、`warningCount`、`infoCount` 与 `findings` 数组。",
     "仅 lint 项目在用的合成：`index.html` 及它经 `data-composition-src` 挂载的每文件，沿它们挂载续跟。`compositions/` 下无挂载文件（装了未放的块）略去，一行说明是多少；`--include-unmounted` 也 lint 它们。`--json` 在 `unmountedCompositions` 列它们。`check` 同 lint 方式并接受同旗标。",
     "linter 抓缺失属性、缺失 adapter 库（GSAP、Lottie、Three.js）和结构问题。每条规则见 [Troubleshooting](https://hyperframes.heygen.com/help.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint [dir]\nnpx hyperframes lint [dir] --verbose   # include info-level findings\nnpx hyperframes lint [dir] --json",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "◆  Linting my-project/index.html\n\n  ✗ missing_gsap_script: Composition uses GSAP but no GSAP script is loaded.\n  ⚠ video_missing_muted [clip-1]: <video id=\"clip-1\"> has data-start but declares neither muted nor data-has-audio. If the file has sound, add data-has-audio=\"true\" (the sound stays on this clip). If it is silent, add muted.\n\n◇  1 error(s), 1 warning(s)",
      "file": "EXAMPLE"
     }
    ]
   },
   {
    "h": "`check`",
    "p": "",
    "paras": [
     "浏览器门禁。旧 `validate` → `inspect` → `snapshot` 循环所做，一条命令、一次浏览器会话全干。",
     "`check` 先跑 linter。lint 错误让 check 失败但不中止：浏览器检查照跑，两边都报，除非 lint 错误使无合成可载（root 无 `data-composition-id`）。然后载一次打包合成并扫一条 seek 网格，每采样跑每审计：运行时控制台错误与失败请求、布局缺陷（溢出、裁剪、常占、遮挡、坐标系漂移）、`*.motion.json` 断言、WCAG AA 对比、craft 警告（见 [Craft warnings](#craft-warnings)）。",
     "`audio` 段读 render 混音的每 clip，浏览器跑的同时：无音轨或无法作音频读的源（error：render 止）、clip 起点过文件尾、clip 播放部分静音（警告）、全片无声（info）。",
     "浏览器从未跑（无合成可载、linter 崩、浏览器拉起失败）时 `browserSkipped` 为 `true`，`layout`、`motion`、`contrast` 段为空非干净。",
     "scoped check 给 JSON 报告加 `scope`，含所求范围与组件、隐藏发现数、scope 说明。组件过滤只改返回的 finding 数组；段计数、`ok` 与退出码仍覆盖每次发现的全 check。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--json` | 一个聚合 envelope。每发现带 selector、`data-*` 身份、源文件、bbox、采样时间。 |",
     "| `--snapshots` | 把五帧审计帧存 `.hyperframes/artifacts/snapshots/`，每发现另存 `finding-NN-<code>.png` 裁图 |",
     "| `--include-unmounted` | 也 lint `compositions/` 里 `index.html` 从不挂载的文件（默认略，并一行说明多少） |",
     "| `--samples` | 跨时长中点采样（默认 9） |",
     "| `--at` | 显式时间戳（秒），逗号分隔 |",
     "| `--at-transitions` | 也采样每 tween 起止，抓过渡接缝瞬过叠合 |",
     "| `--max-transition-samples` | 截断过渡派生采样数。截断时报省略数。默认无上限。 |",
     "| `--range <start,end>` | 只采该区间（全局秒）。Lint 仍全项目；全时间线 motion、`sweep_static` 与 craft 警告跳过。 |",
     "| `--components <selectors>` | 只报涉及这些元素或后代的发现。计数、`ok`、退出码仍覆盖全部。 |",
     "| `--max-issues` | 静态归并后打印/返回的发现数（默认 80） |",
     "| `--collapse-static` / `--no-collapse-static` | 把重复静态发现折一行（默认：开） |",
     "| `--tolerance` | 报告前容许溢出（px，默认 2） |",
     "| `--timeout` | 渲染就绪预算（毫秒）；同时把页面导航在 10s 地板上调高（默认 45000，如 snapshot 与 render） |",
     "| `--budget <ms\\|90s\\|8m>` | check 开始后这么久停全 check（至少 30s）并报所见，`check_budget_reached` 注明所在阶段。供宿主有自设时限用。 |",
     "| `--no-cache` | 即使项目文件、旗标、CLI 与浏览器自上次通过未变也跑。让出的不跑时，没变的项目约一秒返回那次通过并标 cached；远程脚本与资产不再取。失败永不缓存，有 `node_modules` 或链接目录的项目永不重放。 |",
     "| `--no-contrast` | 迭代时跳过 WCAG pass |",
     "| `--no-craft` | 跳过 craft pass（死段、不可读行、静片），全 check 最长一项。报告标 skipped。渲染预检用它；发布前全 check 保留。 |",
     "| `--strict` | 警告也非零退出（默认仅错误） |",
     "| `--caption-zone \"<x0=..;y0=..;x1=..;y1=..>\"` | opt-in 带门禁。文本元素 DOM 盒压上分数带即标。可选 `severity` 与 `seek`。 |",
     "| `--safe-zone <tiktok\\|reels\\|shorts\\|standard\\|off>` | 文本（含字幕）离安全区时警告：9:16 合成上的平台（默认三者）、或任一帧 `standard` 标题安全边（每边 10%）。永不坏 `--strict` |",
     "| `--frame-check` | opt-in `img`、`svg`、`video`、`canvas` 出框检测 |",
     "| `--layout` | 布局旋钮，目前 `proseCoverageFloor=0.05`（0–1，默认 0.15） |",
     "| `--browser-gpu` / `--no-browser-gpu` | 硬件 GPU 捕获，或确定性 SwiftShader（默认：自动检测） |",
     "| `--proxy` / `--no-proxy` | check 前自动转码浏览器不喜欢的编码（默认：开） |",
     "| `--prepare-media` | 只做浏览器可播视频复制然后退：无浏览器无报告。`--json` 按 `ready`/`cached`/`failed` 列每文件；任一 failed 退 1。 | Chrome 解不了的视频（HEVC、ProRes）复制一次，首 check 等之至多 2 分钟；过期 check 停并以 `media_copies_unfinished` 发现注明每未完文件与进度。跑 `--prepare-media`（不限时）把它们了完。合成中长视频每次使用都有已知 `data-duration`（视频上或计时元素上，无 `loop`）时，check 只从头拷那段（上取整 15 秒片），而非整文件。超 22 秒源按 15 秒片拷并保留，中止的复制下次从已完成片续。在事时 check 每 10 秒向 stderr 打印每复制进度（stdout 给 `--json` 留干净），3 分钟无进展的复制结束（`HYPERFRAMES_PROXY_STALL_MS`）。长项目先跑 `hyperframes check --prepare-media`，check 本身即全 ready。",
     "check 开始后 3 分钟 Chrome 未就绪就绪即以 runtime 发现结束，注明 Chrome 未起及各步耗时。首跑 Chrome 或仍在下载：先跑一次 `hyperframes browser ensure` 再 check。",
     "`--caption-zone` 与 `--frame-check` 在所配 seek 采样无一落入 `--range` 时拒 ranged check；所求门禁永不静默 pass。",
     "`<video>` 下文本按采样时刻该视频所示帧判定。不透明视频覆盖全盒，如不透明图片。透明视频（如 `remove-background` 抠像）只在 alpha 处覆盖：词部分在主体后是 info，其 `coveredFraction` 为被盖最深词比例，词 80% 藏或相邻二词各半藏是 error。视频上 CSS 背景仍覆盖全盒，镜像视频（`scaleX(-1)`）按绘制侧读。视频帧读不到时审计按不透明计并加 `video_alpha_unread` info 说明原因：尚无帧解码、seek 仍落、跨源、无线帧尺寸、旋转/偏斜/3D transform、`读回全透`。全透帧故意按未读计，因为绘制失败亦然；抠像主体入场前压其下的文本标 `data-layout-allow-occlusion`。",
     "`canvas_covered` 在跨画布不透明元素压住影片大半时间每可见 clip（shape、图片、视频、文本）之上时为 error，画面只余它：常是全幅背景放 DOM 最后。其名覆盖元素；故意全幅卡标 `data-layout-allow-occlusion`。",
     "对比失败是 error，每条报采样前景/背景色、实测比与所求比、可代用的合规色。",
     "代理 harness 可在 [`HF_TOOL_CONTEXT`](https://hyperframes.heygen.com/developers/harness-tool-context) 的 `check-review` 能力开 `skipContrastInMotion`。它略去在文本或祖先上 GSAP tween 运行中测得的对比失败，或文本不透明度乘祖先小于 1 时。失败不报，计数与 `ok` 亦去之。重复 tween、无限重复 timeline 内 tween、4s 以上 tween（如慢相机运镜）不算运动。该不透明规则于静止亦然（含故意半透明文本），tween 目标为文本或祖先时。无 GSAP tween 目标文本照常报。丢失样本不计 persistence：保留失败在多测时仅剩一失败样本可降警告。默认关。",
     "严重度随 persistence：单采样发现降 info，持续发现 gate 退出码，3s 以上合成帧永不变且 GSAP timeline/tween 或 CSS/Web 动画在页上同久而从不结束、seek 永不推它时以 `sweep_static` 失败。其他永不变帧（如静止标题卡）是 `sweep_static` 警告（\"Nothing on screen moved under seek\"），纯音频推进亦然；`--strict` 对两者都失败。故意静止的合成可声明 `data-no-timeline` 跳过该 guard。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes check [dir]\nnpx hyperframes check [dir] --json         # {ok, browserSkipped, scope, lint, runtime, layout, motion, contrast, craft, audio, hdr, snapshots}\nnpx hyperframes check [dir] --snapshots\nnpx hyperframes check [dir] --at 1.5,4,7.25\nnpx hyperframes check [dir] --strict       # warnings fail too",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "Craft 警告",
    "p": "",
    "paras": [
     "`craft` 段报 viewer 随时间会注意的、单帧看不到的。每 craft 发现都是警告，即使 `--strict`：影片可故意犯一。其消息注明修复法及该读的技能参考。以全片 8 fps 扫测，每短行边以约 0.01 s 重测，`--range` check 跳过。",
     "| 代码 | 何时警告 |",
     "| - | - |",
     "| `line_unread` | 阅读尺寸行（1080 下 30 px 及以上）在屏时长短于其地板：1-2 词 0.4 s，否则 0.5 s 三四分之三 + 每词 0.3 s。影片末行需 2 s。 |",
     "| `dead_stretch` | 屏上超 3 s 无变化，以 `keepsMoving` 同分类器判。 |",
     "| `text_below_floor` | 短边 2.6% 以下（1080 下 28 px）文本在屏 0.5 s 以上。每文件一发现列全此类元素。 |",
     "| `first_frame_empty` | 第 0 帧只画背景（无文本、图片、视频、canvas、SVG），或不透明元素盖住每他 clip 并点名。首帧是社媒播放器缩略图。 |",
     "| `film_silent` | 15 s 以上影片无未静音 `<audio>` 且无带声 `<video>`。 | 字幕轨文本（`data-track-kind=\"captions\"`）与 `data-layout-ignore` 文本豁免文本规。`dead_stretch` 永不计影片末 3 s（定格片尾）与 `data-hold` 元素在屏时，且 `sweep_static` 已报扫或整合成 `keepsMoving` 断言自设限时安静。"
    ],
    "codeBlocks": []
   },
   {
    "h": "音频发现",
    "p": "",
    "paras": [
     "`audio` 段查 render 混音的 clip。即使 lint 停了浏览器 pass 也跑，远程源不取。",
     "| 代码 | 严重度 | 何时触发 | 修复 |",
     "| - | - | - | - |",
     "| `audio_source_unreadable` | error | 文件无法作音频读，render 混音失败渲染止。 | `src` 指带音轨文件，或重导出。 |",
     "| `audio_source_rejected` | error | 文件无音轨，render 在起跑前止。 | `src` 指带音频文件，或从 `<video>` 去掉 `data-has-audio=\"true\"`。 |",
     "| `audio_starts_past_source_end` | warning | `data-media-start` 在或过文件长，clip 播放为空。 | `data-media-start` 调到文件长下。 |",
     "| `audio_clip_silent` | warning | 文件在 clip 播放整段静音。 | 查文件该处有声，或把 `data-media-start` 移到有声处。 |",
     "| `audio_none` | info | 无 clip 播音频且无带音轨未静音 `<video>`。 | 静片无可；否则加 `<audio>`。 |",
     "| `audio_check_unavailable` | info | 音频检查本身失败，消息说原因，clip 未查。 | 重跑；复现跑 `hyperframes doctor`。 |",
     "| `audio_src_not_found` | error | `<audio src>` 点名项目外文件，render 静默。`lint` 报。 | 加文件或改路径。 | 每次媒体 probe（render 用的音频元数据、render 媒体类型规则）每文件至多一次；`<video>` 是否带声每次使用探。check 与浏览器 pass 并行，每时至多四文件。超 3 s clip 先在三处 1 秒采样，三处皆静才全解。",
     "叠合按 viewer 看得见的文本判：溢出 clip、`clip-path` 或梯度 `mask-image`（文本上或祖先）不让画的那部分不算。"
    ],
    "codeBlocks": []
   },
   {
    "h": "标明故意布局选择",
    "p": "",
    "paras": [
     "审计错而布局故意时，在 HTML 说清并重跑。计划画外入场放 `data-layout-allow-overflow`，故意堆叠文本放 `data-layout-allow-overlap`，故意藏在道具后文本放 `data-layout-allow-occlusion`，不该审计的装饰放 `data-layout-ignore`。溢出、遮挡、ignore 标记继承，祖先可。重叠标记故意局部：放参与分层的具体文本块，永不放场景/root wrapper，无关后代冲突仍可审计。",
     "`--caption-zone` 下故意下三分率常文案用 `data-layout-allow-caption-zone`。仅静默 `caption_zone_collision`，余者——溢出、叠合、遮挡、对比——照旧。放拥有带文案的最窄 wrapper 上。",
     "9:16 合成上，check 拿每文本块与字幕行对 TikTok、Instagram Reels、YouTube Shorts 让开按钮与字幕的区域采样。越线块是 `outside_safe_zone` 警告，注明平台与越边，首现时刻。区域取各平台竖版广告规作参考：TikTok 720x1280 右缘阶梯、Reels 去下 35%、上 14%、侧 6%、Shorts 1080x1920 去左 48px、右 192px、上 288px、下 672px。`--safe-zone standard` 查标题安全边，任一宽高比每边内 10%。可能在外的文本标 `data-layout-allow-safe-zone`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "验证运动，而非仅布局",
    "p": "",
    "paras": [
     "布局采样抓不到 render-≠-preview bug：seek 落过的入场、错的 stagger 序、tween 中漂出框、定帧。运动断言能。合成旁放 `*.motion.json` sidecar，`check` 自动评——无旗标，无需改 HTML。无 sidecar 无变化。",
     "| 断言 | 抓什么 |",
     "| - | - |",
     "| `appearsBy(selector, bySec)` | reveal 被 seek 落过——元素须在 `bySec` 前达不透明 ≥ 0.5（`motion_appears_late`） |",
     "| `before(a, b)` | 错 stagger 序——`a` 须先于 `b` 出现（`motion_out_of_order`） |",
     "| `staysInFrame(selector)` | 出框漂移——可见后盒不离画布（`motion_off_frame`） |",
     "| `keepsMoving(withinSelector?)` | 定帧——超 `maxStaticSec`（默认 2s）的全静窗（`motion_frozen`）；影片末 3 s 永不计 | `keepsMoving` 与冻扫 guard 同运动分类器：盒几何、不透明、文本与生成内容、表单控件状态、绘制 CSS counter、clip-path、可变字体轴、filter、色、背景、绘制边框影、可见 canvas/video/img 像素、视频播放时间都算运动——故播放中的背景视频自留 scope 存活，调色画进 canvas 的亦然。音频播放时间永不算此：它只证 timeline 跑过，非 moving picture。冻扫 guard 把纯音频推进报警告而非失败。scope 内 `data-layout-ignore` 下元素永不计；scope 元素自身不退出，因断言中点名优先。浏览器不画的内容（`display: none` 子树、`visibility: hidden` 盒、跳过 `content-visibility` 内容）不算运动，视频播放时间除外，因运行时可能在别处画该视频画面。",
     "`duration`、`keepsMoving.withinSelector`、`keepsMoving.maxStaticSec` 可选。发现同布局发现之形与 envelope，默认 error，断言失败即 run 失败。selector 无匹配报 `motion_selector_missing` 而非静 pass。"
    ],
    "codeBlocks": [
     {
      "code": "{\n  \"duration\": 6,\n  \"assertions\": [\n    { \"kind\": \"appearsBy\", \"selector\": \"#headline\", \"bySec\": 0.5 },\n    { \"kind\": \"before\", \"a\": \"#headline\", \"b\": \"#cta\" },\n    { \"kind\": \"staysInFrame\", \"selector\": \".card\" },\n    { \"kind\": \"keepsMoving\", \"withinSelector\": \".scene\" }\n  ]\n}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "`snapshot`",
    "p": "",
    "paras": [
     "抓定帧为 PNG，不等整渲染。",
     "每子合成可复用 `clip` 这类本地视频 ID。快照把各场景素材分开，需你跨文件重命名那些 ID。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--at` | 时间戳（秒），逗号分隔（`3.0,10.5,18.0`） |",
     "| `--frames` | 改均匀帧（默认 5） |",
     "| `--range <start,end>` | `--frames` 只在该区间展开（root timeline 秒），不加片尾帧 |",
     "| `--composition <id>` | `--frames` 跨此 `data-composition-id` 元素可见区间展开。`--at`、`--range`、`--composition` 取一。 |",
     "| `--output, -o` | PNG 落哪（默认每次新 `<project>/.hyperframes/artifacts/snapshots/<id>`） |",
     "| `--end` / `--no-end` | 总加一可读片尾帧（默认开）。`--no-end` 只抓你的 `--at` 时刻。 |",
     "| `--keep` | 加到 `--output` 而非清它，按时刻命名每 still：`at-0s.png`、`at-1.5s.png`、`at-12.25s.png`（无尾零）。再快同瞬只换那 still。无接触表。 |",
     "| `--zoom` | 裁到 CSS 选择器或确切 `x,y,w,h` 区域，用升起设备缩放。布局不动——永非 CSS zoom 或缩放视口。零匹配是 error。 |",
     "| `--against` | 参考视频，如你重建的素材。每抓时刻另存逐帧精确帧（`ref-XX-…png`）与带标 render/参考对（`pair-XX-…jpg`）。 |",
     "| `--zoom-scale` | `--zoom` 裁图密度（默认 3） |",
     "| `--angle` | 正交 3D 相机验深度与遮挡：`front`、`iso`、`top`、`side`，或度数 `yaw,pitch`。倾全舞台，得真像素。 |",
     "| `--review` | 抓影片随时间的帧而非均匀：`review-beats.jpg`（每场景起 +0.3 s 与中点、每计时 `data-beat=\"name\"` 元素起 +0.3 s）、`review-seam-NN.jpg`（每 cut 前后 −0.2 至 +0.2 s）、`review-phone.jpg`（节拍帧宽 360 px）。场景是顶层计时 clip 与子合成宿主；`--composition` 缩一。 |",
     "| `--json` | 印一 envelope：`frames` 带 path、time、（`--review` 下）role、label，接触表，及 `--review` 下场景、节拍、接缝。进度走 stderr。 |",
     "| `--describe` | 默认关。每帧发 Gemini 写 `descriptions.md`。需 `GEMINI_API_KEY` 或 `GOOGLE_API_KEY`。bare `--describe` 用默认 prompt；`--describe \"<question>\"` 问自己。bare `--describe` 前放项目目录。 |",
     "| `--timeout` | 等运行时毫秒（默认 5000） |",
     "| `--browser-gpu`, `--proxy` | 同 [`check`](#check) 义 | 每快照是 1920×1080 PNG，经打包项目、服务、起无头 Chrome、seek 得。例如代理构建时视觉验，如 [product or website video](https://hyperframes.heygen.com/guides/product-launch-video.md)。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes snapshot my-project --at 2.9,10.4,18.7\nnpx hyperframes snapshot my-project --frames 10\nnpx hyperframes snapshot my-project --zoom '#headline'\nnpx hyperframes snapshot my-project --at 1.5,4.3 --against ref.mp4\nnpx hyperframes snapshot my-project --review --json",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "◆  Capturing 3 frames at [2.9s, 10.4s, 18.7s] from my-project\n\n◇  3 snapshots saved to <project>/.hyperframes/artifacts/snapshots/<id>\n   .hyperframes/artifacts/snapshots/<id>/frame-00-at-2.9s.png\n   .hyperframes/artifacts/snapshots/<id>/frame-01-at-10.4s.png\n   .hyperframes/artifacts/snapshots/<id>/frame-02-at-18.7s.png",
      "file": "EXAMPLE"
     }
    ]
   },
   {
    "h": "`keyframes`",
    "p": "",
    "paras": [
     "显示合成实测到的 GSAP、CSS、Anime.js 关键帧——或渲一元素运动 onion-skin 诊断。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--selector` | 只关键帧匹配此 CSS 选择器 |",
     "| `--runtime` | 过滤提示：`gsap`、`css`、`anime` 或 `all` |",
     "| `--json` | 机器可读结果 |",
     "| `--shot` | 写一真实元素在 timeline 采样的 onion-skin PNG。配 `--selector` 聚一元素。 |",
     "| `--samples` | onion 均匀时间步采样（默认 9） |",
     "| `--layout` | `path`——真位 ghost 加路径（默认）——或 `strip`，原位或重叠运动。`strip` 仅 `--selector` 目标 SVG 元素时为真 per-time 像素 filmstrip；他 selector（如 DOM/子合成宿主）得一 live 帧加矢量位标 |",
     "| `--from`, `--to` | 只采此时段（秒） |",
     "| `--angle` | 环绕相机：`front`、`iso`、`top`、`side`、`rear-iso`，或度数 `yaw,pitch` |",
     "| `--fit` / `--no-fit` | 运动缩放送满诊断帧（默认开） |",
     "| `--ghost` | 真 canvas 帧作半透 ghost 合成，越旧越淡，代 bounding-box 标。需 `<canvas>`。 | `*inside* canvas` 运动用 `--ghost`，mark onion 无可画。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes keyframes [dir]\nnpx hyperframes keyframes [dir] --selector \"#card\" --shot card-motion.png",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`compare` 和 `grade-compare`",
    "p": "",
    "paras": [
     "`compare` 把二以上独立变体渲成一带标 PNG。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--at` | 捕获前 seek 到的 timeline 时间（秒） |",
     "| `--labels` | 逗号分隔标，每输入一路 |",
     "| `--out` | 输出路径（默认 `./compare.png`） |",
     "| `--cols` | 网格列（默认 sqrt 启发，最大 4） |",
     "| `--timeout` | 每变体渲染就绪超时（毫秒），正整数（默认 5000） |",
     "| `--json` | 机器可读结果 | `grade-compare` 对颜色同理：候选 grade 或 LUT 施于一参考帧。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--for` | 必填。图片，或零秒采样视频。 |",
     "| `--grades` | `{ label, grading }` 候选 JSON 数组 |",
     "| `--luts` | 逗号分隔 `.cube` LUT 文件 |",
     "| `--project` | 相对路径基准目录 |",
     "| `--out` | 输出 PNG（默认 `<project>/grade-compare.png`） |",
     "| `--baseline` / `--no-baseline` | 加未分级帧作 `original` 格（开） |",
     "| `--timeout` | 渲染就绪超时（毫秒），或 `30s` 这类时长（默认 5000 毫秒） |",
     "| `--json` | 机器可读结果 |"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes compare ./variant-a ./variant-b --labels \"A,B\"",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "npx hyperframes grade-compare --for frame.png --luts warm.cube,cool.cube",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "废弃：`validate`、`inspect` 和 `layout`",
    "p": "",
    "paras": [
     "三者都仍运行，三者都在 stderr 打废弃行并在 `--json` 输出置 `_meta.deprecated: true`。`validate` 是仅运行时的浏览器检查；`inspect`（及别名 `layout`）是布局扫与 motion-sidecar pass。[`check`](#check) 在一次浏览器会话里全做，新活往哪去。旗标不变——维护仍调用它们的自动化就跑 `npx hyperframes inspect --help`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "重建已有视频",
    "p": "",
    "paras": [
     "这些命令服务 `reverse-any-video` 技能：测量视频、HeyGen 起草 timeline、拿你的重建对它打分。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`reverse`",
    "p": "",
    "paras": [
     "`reverse start` 开一 `reverse-any-video` run。登录后它告知 HeyGen run 已起并把 HeyGen 返回的 session 存项目 `hyperframes.json`，[`cloud render`](#hyperframes-cloud) 随渲染带上该 session。然后打印视频 [`measure probe`](#measure) JSON，含 `reverse` 字段：是否登录、套餐（`free`、`pro`，未知 `null`）、session，以及 Free 下 `upgrade_url` 与 `subscribe_command`（[`billing subscribe`](#billing) 带 feature 与 session，购买记到本次 run）（HeyGen 说此刻买不了时双 `null`）。仅 HeyGen 对 Free 账户拦截时停跑：当时以该命令非零退，无命令时说套餐此刻买不了。登出、离线、服务器无此路时跳过 session 仍 probe；`--dir` 仍以指名该技能的 `hyperframes.json` 建好。`init` 接受该含视频的文件夹作所给 `--video`。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--dir` | 存 session 的项目文件夹（缺失建；`init` 保留）。默认当前文件夹，当前为项目时 |"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes reverse start ref.mp4 --dir my-rebuild\nnpx hyperframes reverse start original.mp4   # resume inside the project",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`measure`",
    "p": "",
    "paras": [
     "测量视频文件并打印 JSON。每测量是子命令；跑 `npx hyperframes measure <subcommand> --help` 看其旗标。",
     "| 子命令 | 报告什么 |",
     "| - | - |",
     "| `probe` | 显示尺寸、帧率、时长、声音、重建前要修什么 |",
     "| `cuts` | 帧差硬切、以及其间镜头 |",
     "| `events` | 切、闪、出现、消失、hold；`--map` 加上声音的 hit |",
     "| `frames` | 帧作图片：所选时刻、总览表、范围、或事件周条 |",
     "| `extract` | 从视频切一 still 或 clip，裁区域，作项目媒体 |",
     "| `curve` | 单元素每动：起、时长、过冲、最近 GSAP ease |",
     "| `energy` | 两 clip 各动多少、是否同时刻 |",
     "| `look` | 亮度、对比、饱和、暖度，单或对另一视频 |",
     "| `face` | 窗内脸大小与位置 |",
     "| `sync` | 嘴动与语音滞后 |"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes measure probe ref.mp4\nnpx hyperframes measure cuts ref.mp4\nnpx hyperframes measure frames ref.mp4 --events\nnpx hyperframes measure face ref.mp4 --start 1 --end 2.5",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`diff`",
    "p": "",
    "paras": [
     "逐帧打分渲染，或未渲染的项目文件夹，对原视频：SSIM、最差时刻、漏与多出切、时长、声音偏移。分数线下非零退。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--at` | 只比这些秒 |",
     "| `--range` | 比 `start,end` 秒每帧 |",
     "| `--offset` | 原在 t 与你在 t + offset 秒比 |",
     "| `--segments` | 文件每 `## S01 · a–b s` 段一结论 |",
     "| `--drawn` | 单打一绘制元素盒 `x,y,w,h[,a-b]`（可重复） |",
     "| `--min-mean` / `--min-p05` / `--min-cell` | SSIM 过线 |",
     "| `--sbs` | 也写原旁你的视频 |",
     "| `--out` | 表与日志文件夹（默认 `.hyperframes/diff/<yours>`） |",
     "| `--json` | 印一 JSON 结果 | `--offset` 以秒记，你比原快时负。每帧分数、切、漏内容段自此你方 t + offset 读，项目文件夹按那些时刻捕获。比对只在双边都有帧的段：`window` 报告它、`warnings` 说扔了帧。`frames.tsv` 中 `t` 是原时刻；你的时刻 t + offset。声音保自身偏移测量，时长报未测，JSON 结果回 `offset`。偏移致无重叠拒并给修复。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes diff original.mp4 renders/final.mp4\nnpx hyperframes diff original.mp4 . --at 0.5,2.4,3.1\nnpx hyperframes diff original.mp4 renders/final.mp4 --segments segments.md --sbs",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`timeline`",
    "p": "",
    "paras": [
     "打印项目轨道与 clip，或编辑一 clip。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `[dir]` | 项目目录（默认：当前） |",
     "| `--json` | 每轨道每 clip 含起、时长、文件、轨道 | 编辑命令取 clip ref（如 `#outro`），把改动写到拥有该 clip 的文件：",
     "| 命令 | 作用 |",
     "| - | - |",
     "| `move <ref> <time>` | clip 从 `<time>` 起，保长 |",
     "| `trim <ref>` | 改 clip 的 `--start`、`--end` 或 `--duration`（至少一） |",
     "| `split <ref> <time>` | clip 从 `<time>` 切两半 |",
     "| `delete <ref>` | 删 clip，或只删其 `--start` 至 `--end` 段，前后保留 |",
     "| `set <ref> <field>=<value>` | 设 `volume`、`rate`（播放速率）或 `track`（整数） |",
     "| `duplicate <ref>` | 复制 clip 到 `--at <time>`（默认：clip 正后） |",
     "| `apply <file>` | 应用 JSON 编辑数组，如 `[{\"verb\": \"move\", \"ref\": \"#intro\", \"time\": \"+1\"}]`，全或无。传 `-` 从 stdin 读。 |",
     "| `undo <receipt>` | 从其收据（JSON 或其文件）恢复被编辑改的文件 |",
     "| `ids` | 给 timeline clip 盖稳定 id | `duplicate` 把同轨在插入时刻或其后 clip 顺移复制 clip 长。视频与音频 clip 可用源长而无需 `data-duration`，含被插入顺移的。有 `data-end` 的，复制与被移 clip 随起移尾保长。",
     "时间是秒（`4.5`）、距 clip 起偏移（`+1`、`-0.5`）、帧（`30f`）、`end`，或另一 clip 锚点：`after:#intro`、`before:#intro`、`start-of:#intro` 或 `end-of:#intro`。编辑命令不用的旗标在写任何东西前被拒。",
     "| 旗标 | 适用 | 说明 |",
     "| - | - | - |",
     "| `--plan` | `move`、`trim`、`split`、`delete`、`set`、`duplicate`、`apply` | 打印结果与 diff 不写。`apply --plan` 只印计数（`planned 1 file`）；加 `--json` 给结果与 diff。 |",
     "| `--overwrite` | `move`、`trim` | 准 clip 在其轨压邻 |",
     "| `--snap` | `move`、`trim`、`split`、`delete`、`duplicate` | 时间取整帧。需项目 `data-fps`。 |",
     "| `--at` | `duplicate` | 复制起处 |",
     "| `--dir` | 全编辑命令 | 项目目录（默认：当前） |",
     "| `--json` | 全编辑命令 | 机器可读结果，含 `undo` 取的收据 | 被拒编辑（如 move 会压邻）不写、退 2 并说如何修。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes timeline [dir]\nnpx hyperframes timeline --json",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "timeline 10s\n\ngraphics (3)\n  |████████████████████████████████████████| #title title 0-10s\n  |████████████                            | #intro intro 0-3s\n  |                    ████████████        | #outro outro 5-8s",
      "file": "EXAMPLE"
     },
     {
      "code": "npx hyperframes timeline move '#outro' +1 --plan   # show the result and diff, write nothing\nnpx hyperframes timeline move '#outro' after:#intro\nnpx hyperframes timeline trim '#intro' --duration 2\nnpx hyperframes timeline split '#outro' 6.5\nnpx hyperframes timeline set '#music' volume=0.5\nnpx hyperframes timeline duplicate '#intro' --at 3\nnpx hyperframes timeline delete '#outro' --json\nnpx hyperframes timeline delete '#outro' --start 6 --end 7   # cut one second out",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`history`",
    "p": "",
    "paras": [
     "列、撤销、恢复项目已录改动。每改动是条，记谁作、标、触文件。",
     "| 旗标 | 说明 |",
     "| - | - |",
     "| `--dir` | 项目目录（默认：当前） |",
     "| `--json` | 机器可读结果 |",
     "| `--since` | 只在条 id、时间、或 `mine` 之后条 |",
     "| `--who` | 你名，供 `--since mine` |",
     "| `--limit` | 显示最新条数（默认 20） |",
     "| 命令 | 作用 |",
     "| - | - |",
     "| `show <ref> [--diff]` | 一条的文件，前后。`--diff` 打文本 diff（需 `git`）。 |",
     "| `undo [ref]` | 撤销一条，或带 `--who <name>` 无 ref 撤销那名字上回合仍有效者（从未用 `begin` 则其最新条）。该回合无一在效时拒而非撤销更旧回合。 |",
     "| `restore <ref> [--who]` | 让文件如一条、时刻、或 `start` 后 |",
     "| `peek <ref> [path]` | 列一条、时刻、或 `start` 时文件不改；带 path 打印那文件 |",
     "| `pin <ref> [--off]` | 老历史修剪时留一条及其需要。`--off` 解钉。 |",
     "| `begin --who --label` | 开回合：`end` 前你的写成你名下一条。另一代理开回合先被结束，或 `--exclusive` 时本命令拒。 |",
     "| `end` | 结束你回合并印其条。`--who <name>` 非其开回合拒；`--if-open` 无开回合成功。 | 每命令亦取 `--dir` 与 `--json`。ref 是条 id 或其唯一前缀；时间是本地日期或日期时间如 `2026-09-24T14:30`。",
     "无运行预览时，`history` 数据在 `~/.cache/hyperframes/history`，设了则在 `HYPERFRAMES_HISTORY_ROOT`，让代理 run 或测试与自有历史分开。路径解析为绝对，项目每代理皆须同：锁在那，回合标在项目。在跑的预览服务器记到自己位置。",
     "`history`、`render`、`check`、`snapshot` 以探本地 3002-3101 与 5190 端口找预览服务器。设 `HYPERFRAMES_NO_PREVIEW_DISCOVERY=1` 跳过探，例如出境连接被拦且每拒探都报：当时 history 总直开，如无预览在跑。`--selection` 与 `--context` 仍找预览。",
     "条内某文件自此被改时，`undo` 不写、退 2 并列更新条。再跑 `--just-this` 只把它条文件压回更新编辑上，或 `--back-to-before` 回到它之前，连更新条亦撤。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes history                              # newest 20 entries\nnpx hyperframes history --since mine --who claude    # what changed since your last entry\nnpx hyperframes history begin --who claude --label \"Bigger title\"\nnpx hyperframes history end\nnpx hyperframes history undo --who claude            # undo your newest turn",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "`render`",
    "p": "",
    "paras": [
     "渲合成到 MP4、WebM、MOV、GIF 或 RGBA PNG 序列。",
     "常用旗标：",
     "| 旗标 | 默认 | 说明 |",
     "| - | - | - |",
     "| `--output, -o` | `renders/<project>_<YYYY-MM-DD>_<HH-MM-SS>.<ext>` | 输出文件路径 |",
     "| `--composition, -c` | `index.html` | 渲别合成文件。用 `<template>` wrapper 子合成必须经 `data-composition-src` 自 `index.html` 引用。 |",
     "| `--format` | `mp4` | `mp4`、`webm`、`mov`、`gif`、`png-sequence` 或 `hls`。WebM 与 MOV 带透明；`png-sequence` 写 RGBA 帧到目录；`hls` 写 VOD playlist 目录。 |",
     "| `--fps, -f` | root `data-fps`，否则 30 | 1–240，或 ffmpeg 有理如 29.97 的 `30000/1001` |",
     "| `--quality, -q` | `looks` | `draft`、`looks`（CRF 16，默认）、`delivery`（= `high`）、`standard` 或 `high`。MOV 恒用定版保 alpha ProRes 4444 档。 |",
     "| `--resolution` | 合成尺寸 | 经 Chrome `deviceScaleFactor` 到预设渲，包括 `landscape-1440p`、`portrait-1440p`、`square-1440p`（别名 `1440p`、`qhd`）。宽高比须合；放大需整数倍。720p→1440p 与 4K→1440p 可；1080p→1440p 拒。不与 `--hdr` 同。见 [4K rendering](https://hyperframes.heygen.com/guides/4k-rendering.md)。 |",
     "| `--docker` | off | 在 Docker 渲做[确定输出](https://hyperframes.heygen.com/concepts/determinism.md) |",
     "| `--variables` | — | JSON 对象混入合成 `data-composition-variables` 默认之上 |",
     "| `--variables-file` | — | 从 JSON 文件读那些覆盖 |",
     "| `--batch` | — | 一变量行一输出，源 JSON 数组或 `{ \"rows\": [...] }` 对象 |",
     "| `--json` | off | 配 `--batch` 印一终 JSON 文档而非进度 | 质量与大小：",
     "| 旗标 | 默认 | 说明 |",
     "| - | - | - |",
     "| `--crf` | 自 `--quality` | 覆盖 MP4/WebM 编码 CRF，0–51。越低越好。不与 `--video-bitrate` 同；MOV 拒。 |",
     "| `--video-bitrate` | 自 `--quality` | 目标 MP4/WebM 码率，如 `10M` 或 `5000k`。不与 `--crf` 同；MOV 拒。 |",
     "| `--keyframe-interval` | 编码器默认 | 仅 MP4。至多每 N 秒一关键帧，如 `2`，播放器可按此间距 seek 或切档。 |",
     "| `--start`, `--end` | 全片 | 只渲其间秒，作从 0 起带该段音频的 MP4。24、25、30、60 fps，SDR 仅。 |",
     "| `--max-bitrate` | 无帽 | 仅 MP4。峰值视频码率帽，如 `8M`，与 `--crf` 或 `--quality` 目标并行而非替换。 |",
     "| `--buffer-size` | 2 × `--max-bitrate` | 仅 MP4。帽所测缓冲，如 `16M`。需 `--max-bitrate`。 |",
     "| `--vp9-cpu-used` | 编码器默认 | WebM 的 libvpx-vp9 速度/质量权衡，-8 至 8。环境变量：`PRODUCER_VP9_CPU_USED`。 |",
     "| `--chroma-subsampling` | `420` | MP4 色度：`420` 或 `444`。`444` 保细彩字与 UI 全分辨色（yuv444p、无损 PNG、更慢）。仅 SDR MP4 软编码；配 `--gpu`、`--hdr`、他格式拒。许多播放器解不了 4:4:4。见 [4:4:4 masters](https://hyperframes.heygen.com/guides/rendering.md#444-masters)。 |",
     "| `--gif-loop` | `0` | GIF 循环数，`0` 永循环。0–65535，仅 `--format gif`。 |",
     "| `--hls-segment-seconds` | `4` | HLS 目标分片长（整秒），1–60。仅 `--format hls`。亦定编码 GOP 使每分片起关键帧。 |",
     "| `--video-frame-format` | `auto` | 源视频帧提取：`auto`、`jpg`、`png`。UI 录屏、截屏等色敏素材用 `png`。 |",
     "| `--hdr` | off | 无 HDR 源也强制 HDR。仅 MP4。见 [HDR rendering](https://hyperframes.heygen.com/guides/hdr.md)。 |",
     "| `--sdr` | off | 检出 HDR 源也强制 SDR |",
     "| `--page-motion-blur` | 作者设置 | 传 `off` 不改合成关页运动模糊。本地、batch、Docker 适用。省略保作者行为。 | 它怎样用机器、何时放弃：",
     "| 旗标 | 默认 | 说明 |",
     "| - | - | - |",
     "| `--workers, -w` | auto | 1–24 工作者。各为独立 Chrome，约 256 MB。Auto 权衡核、内存、帧数、成本。N 是上限：render drawElement 捕获仍用一工作者。 |",
     "| `--low-memory-mode` / `--no-low-memory-mode` | 8 GB RAM 及下 auto | 安全档：一工作者、截图捕获、无校准。见下注。 |",
     "| `--gpu` | off | 硬件 FFmpeg 编码（NVENC、VideoToolbox、AMF、VAAPI、QSV） |",
     "| `--browser-gpu` / `--no-browser-gpu` | 本地 auto，Docker off | 宿主 GPU 给 Chrome 与 WebGL 捕获，或软渲染。Auto 探一次 WebGL 然后 fallback。 |",
     "| `--page-side-compositing` / `--no-page-side-compositing` | on | 页侧 WebGL 做 mp4、hls、gif 的 SDR shader 过渡，\\~6× 快。webm 与 mov 走分层路；gif 恒页侧 WebGL，即使 `--no-page-side-compositing`。 |",
     "| `--experimental-fast-capture` | 可启用处 on | Chrome draw-element 捕获，\\~2× 快；自 fallback 截图。环境：`PRODUCER_EXPERIMENTAL_FAST_CAPTURE`。 |",
     "| `--frames-cache-dir` | `<tmpdir>/hyperframes-extract-cache-<uid>` | 提取源帧缓存落处。`off`、`none`、`false` 或 `0` 关。`doctor` 报现值。 |",
     "| `--max-concurrent-renders` | `2` | Producer 服务器并发工，1–10 |",
     "| `--best-effort` / `--no-best-effort` | on | 带捕获就绪警告了结，或媒体缺失/未就绪失败 |",
     "| `--wait` / `--no-wait` | on | 每用户账户一本地渲染：等另一在跑或立即失败。环境：`HYPERFRAMES_RENDER_LOCK=off` 并行渲。 |",
     "| `--strict` / `--strict-all` | off | lint 错误失败，或错误加警告 |",
     "| `--strict-variables` | off | 未声明或类型错变量键失败而非警告 |",
     "| `--batch-concurrency` / `--batch-fail-fast` | `1` / off | batch 行并发、首败是否停余 |",
     "| `--debug` | off | 留中间并把诊断写 Producer `.debug` 目录 |",
     "| `--quiet` | off | 更少输出 |",
     "| `--skill` | — | 在用量遥测记哪作者工作流起此渲染 | 并行起的渲染互抢 CPU/GPU 直到帧停落，故同用户账户第二个本地或 `--docker` 渲染等首个并说等的是哪（pid 与项目）。槽是该账户 HyperFrames 缓存文件夹里的锁文件，不同账户渲染不互排；设 `HYPERFRAMES_CACHE_DIR` 到共享文件夹给它们一槽。进程死的渲染自释槽。`--workers` 不受影响：它定唯一渲染内并行。",
     "低内存检测读**宿主** RAM，非 cgroup 或容器限，故容器化调用方——含 `--docker`——应显设 `PRODUCER_LOW_MEMORY_MODE`。",
     "渲染 Chrome 在 macOS、Windows、Linux 非 root 非容器用户保其沙箱。作为 root 跑、在 Docker、Podman、Kubernetes、AWS Lambda 与 Cloud Run、Linux 限非特权用户命名空间处（Ubuntu 23.10 及后）无之。沙箱 Linux 拉起仍失败时，渲染警告续跑无沙箱。`HYPERFRAMES_CHROME_SANDBOX=0` 恒无，`1` 要求：`1` 时 Chrome 拒起即败不 fallback。",
     "Chrome 只带用到的环境变量起：系统 path、home 与 temp 目录、locale 时区、显示与 session bus、字体、`LD_LIBRARY_PATH`、GPU 驱动设置（Mesa、Vulkan、NVIDIA）、代理与 CA 包，以及 Windows 与 macOS 系统变量。其他变量，如云凭据与 API key，留 CLI。Chrome 需的变量未透传时，在 `HYPERFRAMES_CHROME_ENV_PASSTHROUGH` 列其名逗号分隔，如 `HYPERFRAMES_CHROME_ENV_PASSTHROUGH=KRB5CCNAME,RADV_PERFTEST`。"
    ],
    "codeBlocks": [
     {
      "code": "# Fast iteration\nnpx hyperframes render --output output.mp4\n\n# Deterministic output\nnpx hyperframes render --docker --output output.mp4\n\n# Transparent, for overlays and lower thirds\nnpx hyperframes render --format webm --output overlay.webm\n\n# HLS VOD stream (output is a directory of playlists and .ts segments)\nnpx hyperframes render --format hls --output stream\n\nnpx hyperframes render --output output.mp4 --fps 60 --quality high\nnpx hyperframes render --gpu --output gpu.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "渲染超时时",
    "p": "",
    "paras": [
     "三独立预算任一过期，错误消息说哪。皆有环境 fallback，**毫秒**记，即使旗标不。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**页面不载。** `--browser-timeout` 是入口 HTML 的 Puppeteer 导航预算，旗标以**秒**记（默认 60，0.001–86400）。多视频、多字体、多资产请求合成限时达不到 `domcontentloaded` 时调大。环境：`PRODUCER_PAGE_NAVIGATION_TIMEOUT_MS`。",
     "**播放器不就绪。** 导航后 `window.__hf` 就绪另预算：`--player-ready-timeout`，毫秒，默认 45000。环境：`PRODUCER_PLAYER_READY_TIMEOUT_MS`。",
     "**单 CDP 调用卡。** `--protocol-timeout` 是 seek、paint、截图往返的 per-call 预算，毫秒，默认 300000。此即 `Runtime.callFunctionOn timed out` 与 `Target closed` 后面那。8 GB 及下宿主与资产重合成上调大。默认随输出像素面积自动缩，放至 30 分钟帽；显式值成地板并在此下停该缩。环境：`PRODUCER_PUPPETEER_PROTOCOL_TIMEOUT_MS`。"
    ]
   }
  ]
 },
 "pkg-core": {
  "lede": "`@hyperframes/core` 包含 HyperFrames 中共享的合成模型和浏览器运行时。",
  "sections": [
   {
    "h": "主要入口",
    "p": "",
    "paras": [
     "| 需求 | Import |",
     "| - | - |",
     "| 类型、生成器和常用工具 | `@hyperframes/core` |",
     "| 时间编译和项目打包 | `@hyperframes/core/compiler` |",
     "| 变量声明和校验 | `@hyperframes/core/variables` |",
     "| 合成契约 helper | `@hyperframes/core/composition-contract` |",
     "| 预构建浏览器运行时 | `@hyperframes/core/runtime` | 独立的 [Parsers](https://hyperframes.heygen.com/packages/parsers.md) 和 [Linter](https://hyperframes.heygen.com/packages/lint.md) 包为新集成拥有这些职责。Core 保留对部分旧导入的兼容再导出。"
    ],
    "codeBlocks": []
   },
   {
    "h": "类型",
    "p": "",
    "paras": [
     "合成变量支持 `string`、`number`、`color`、`boolean`、`enum`、`font` 和 `image` 值。"
    ],
    "codeBlocks": [
     {
      "code": "import type {\n  CanvasResolution,\n  CompositionSpec,\n  CompositionVariable,\n  TimelineCompositionElement,\n  TimelineElement,\n  TimelineMediaElement,\n  TimelineTextElement,\n} from \"@hyperframes/core\";",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "解析或生成 HTML",
    "p": "",
    "paras": [
     "Core 再导出常用的解析 helper： 从 `TimelineElement` 数据生成完整合成： 第二个参数是所请求的时长（秒）。当输出必须可复现时，传入稳定的 `compositionId`。",
     "合成生成器要求承载代码的输入来自可信作者。`styles` 和 `generateHyperframesStyles` 保留作者写的 CSS，可能加载外部资源。`animations` 可能包含作为 JavaScript 输出的 `__raw:` 值；`includeScripts: true` 会包含可执行的 timeline 代码。`serializeGsapAnimations` 还接受原始的 `preamble`、`postamble` 和承载代码的 `timelineVar`。切勿用不可信数据填充这些输入。属性编码和闭合标签隔离不是沙箱；不可信合成应在适当的隔离执行环境中渲染，切勿在其上提供特权源。",
     "文本内容保留受支持的行内格式 sanitizer 契约。剪辑解析器有意将内部格式压平为文本，因此 parse/generate 不是编辑源 HTML 的无损替代。"
    ],
    "codeBlocks": [
     {
      "code": "import { extractCompositionMetadata, parseHtml } from \"@hyperframes/core\";\n\nconst parsed = parseHtml(html);\nconst metadata = extractCompositionMetadata(html);\n\nconsole.log(metadata.compositionId, metadata.compositionDuration, metadata.variables);",
      "file": "TS THEME={NULL}"
     },
     {
      "code": "import { generateHyperframesHtml } from \"@hyperframes/core\";\n\nconst html = generateHyperframesHtml(elements, 6, {\n  compositionId: \"product-intro\",\n  resolution: \"landscape\",\n  animations,\n  styles,\n});",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "读取和校验变量",
    "p": "",
    "paras": [
     "在合成脚本内，`getVariables()` 读取声明的默认值加上当前预览或渲染传入的值： 在 Node 工具中，依据从合成解析出的声明校验一个值对象："
    ],
    "codeBlocks": [
     {
      "code": "import { getVariables } from \"@hyperframes/core\";\n\nconst { title } = getVariables<{ title: string }>();",
      "file": "TS THEME={NULL}"
     },
     {
      "code": "import { formatVariableValidationIssue, validateVariables } from \"@hyperframes/core\";\n\nconst issues = validateVariables({ title: \"Launch day\" }, metadata.variables);\n\nfor (const issue of issues) {\n  console.warn(formatVariableValidationIssue(issue));\n}",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "编译项目",
    "p": "",
    "paras": [
     "当你的集成需要已解析的媒体时间或单个打包文档时，使用 compiler 入口。",
     "打包保留 `<img>` 和 `<source>` 元素图片 `srcset` URL 中的 data URL 和逗号。符合条件的本地候选默认内联；`inlineAssets: false` 时，它们保持为相对于项目根的路径，包括当入口文件在子目录时。宽度和密度描述符都会保留。",
     "挂载场景在文件在其自身目录存在时，从场景自身目录解析其 `srcset` 候选，以项目根路径作为回退。",
     "本地样式表 `@import` 规则保留每次出现的媒体条件和层叠位置，即使多处导入引用同一文件。循环导入在已在展开的样式表上停止。重复导入会将样式表副本加入打包，可能增加体积。",
     "内联的本地素材会去掉缓存破坏查询参数并保留片段。例如，`image.png?v=2#sprite` 会变成以 `#sprite` 结尾的 data URL。`inlineAssets: false` 时，查询和片段都保留在文件 URL 上。",
     "编译器还暴露 `compileTimingAttrs()`、`injectDurations()` 和 `extractResolvedMedia()` 等底层时间 helper。"
    ],
    "codeBlocks": [
     {
      "code": "import { bundleToSingleHtml, compileHtml } from \"@hyperframes/core/compiler\";\n\nconst compiled = await compileHtml(rawHtml, \"./project\", async (mediaPath) =>\n  probeDuration(mediaPath),\n);\n\nconst bundled = await bundleToSingleHtml(\"./project\", {\n  entryFile: \"index.html\",\n});",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "检查静态契约",
    "p": "",
    "paras": [
     "要获得完整的合成 lint 结果，请使用 [`@hyperframes/lint`](https://hyperframes.heygen.com/packages/lint) 或运行 `npx hyperframes lint`。"
    ],
    "codeBlocks": [
     {
      "code": "import { validateHyperframeHtmlContract } from \"@hyperframes/core/compiler\";\n\nconst result = await validateHyperframeHtmlContract(html);\n\nif (!result.isValid) {\n  console.error(result.missingKeys);\n}",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "构建帧适配器",
    "p": "",
    "paras": [
     "帧适配器使动画运行时可按帧定位。Core 包含 GSAP 适配器："
    ],
    "codeBlocks": [
     {
      "code": "import { createGSAPFrameAdapter } from \"@hyperframes/core\";\n\nconst adapter = createGSAPFrameAdapter({\n  id: \"product-intro\",\n  fps: 30,\n  timeline,\n});\n\nawait adapter.init?.({\n  compositionId: \"product-intro\",\n  fps: 30,\n  width: 1920,\n  height: 1080,\n});\n\nawait adapter.seekFrame(42);",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [Composition schema](https://hyperframes.heygen.com/reference/html-schema.md) 了解 Core 读写 HTML 契约。",
     "[card] [@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md) 直接处理 HTML 和 GSAP 解析。",
     "[card] [@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md) 在你自己的工具中校验合成 HTML。",
     "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 从 Node.js 将项目变成成品视频。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
     "[@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)",
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)"
    ]
   }
  ]
 },
 "pkg-engine": {
  "lede": "`@hyperframes/engine` 是 [Producer](https://hyperframes.heygen.com/packages/producer.md) 之下的底层层。它打开实现 HyperFrames seek 协议的页面，定位到确切时间，并捕获该帧状态。",
  "sections": [
   {
    "h": "与录屏的区别",
    "p": "",
    "paras": [
     "录屏器等待 wall clock，并在负载下可能漏帧。Engine 要求页面定位到指定时间，并在继续之前捕获该状态。",
     "这使帧调度可复现，并防止慢速机器导致的丢帧。精确像素仍可能随 Chrome、字体、编码器、GPU 行为和宿主环境而变化。视觉精确可复现时，请固定这些依赖。"
    ],
    "codeBlocks": []
   },
   {
    "h": "捕获帧",
    "p": "",
    "paras": [
     "`serverUrl` 处的页面必须暴露 `window.__hf`，带有 `duration` 和确定性 `seek(time)` 函数。",
     "后续阶段需要内存缓冲而非文件时，使用 `captureFrameToBuffer()`。"
    ],
    "codeBlocks": [
     {
      "code": "import {\n  captureFrame,\n  closeCaptureSession,\n  createCaptureSession,\n  getCompositionDuration,\n  initializeSession,\n} from \"@hyperframes/engine\";\n\nconst fps = { num: 30, den: 1 };\nconst session = await createCaptureSession(\n  serverUrl,\n  \"./frames\",\n  {\n    width: 1920,\n    height: 1080,\n    fps,\n    format: \"jpeg\",\n  },\n);\n\ntry {\n  await initializeSession(session);\n  const duration = await getCompositionDuration(session);\n  const totalFrames = Math.ceil(duration * 30);\n\n  for (let frame = 0; frame < totalFrames; frame += 1) {\n    const time = frame / 30;\n    await captureFrame(session, frame, time);\n  }\n} finally {\n  await closeCaptureSession(session);\n}",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "WebGPU 要求",
    "p": "",
    "paras": [
     "标记 `data-requires-webgpu` 的合成必须能在捕获开始前创建 WebGPU 设备。仅找到 adapter 不足：设备创建仍可能因浏览器或图形驱动而失败。adapter 和设备检查共享十秒超时，失败以 `WebGpuUnavailableError` 停止捕获。",
     "默认要求硬件 adapter。显式配置为软件 WebGPU 的启动可使用 SwiftShader，但仍必须创建设备。该检查会释放其临时设备；合成仍会按其渲染器需要的功能或限制创建自己的设备。"
    ],
    "codeBlocks": []
   },
   {
    "h": "本包还暴露什么",
    "p": "",
    "paras": [
     "| 入口 | 用途 |",
     "| - | - |",
     "| 浏览器管理 | 启动、池化和释放 Chrome |",
     "| 编码器 | MP4、WebM、MOV、GIF、PNG 序列、复用和 faststart |",
     "| 媒体抽取 | 准备源视频帧和音轨 |",
     "| 并行捕获 | 在 worker 间分配帧范围 |",
     "| 诊断 | 捕获性能、媒体元数据和 GPU 一致性 | 传给 `encodeFramesChunkedConcat()` 和 `concatVideoFiles()` 的路径可相对可绝对。相对路径从调用进程的工作目录解析。",
     "`muxVideoWithAudio()` 识别输出文件名的扩展名，不区分大小写。WebM 输出，包括 `.WEBM` 和 `.WeBm`，在拷贝视频流的同时将音频转 Opus。",
     "这些是渲染内部细节。结果和错误约定随操作而异：浏览器和帧捕获编排以抛错为主，FFmpeg 封装通常返回结果对象， teardown helper 避免掩盖原始失败。",
     "浏览器和帧捕获诊断，包括 motion-blur 报告，发送到 stderr。这使 stdout 可用于机器可读结果，如 `hyperframes benchmark --json`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 无需自行组装流水线即可获得成品视频。",
     "[card] [Deterministic rendering](https://hyperframes.heygen.com/concepts/determinism.md) 理解 HyperFrames 控制什么，以及环境仍影响什么。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md)",
     "[Choose a rendering path](https://hyperframes.heygen.com/deploy/overview.md)",
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)"
    ]
   }
  ]
 },
 "pkg-gcp": {
  "lede": "GCP Cloud Run 包在 Google Cloud 上运行 HyperFrames 的分布式渲染原语。它提供 Cloud Run HTTP 服务、Node 客户端 SDK，以及用于配置存储桶、服务、工作流和服务账户的 Terraform 模块。",
  "sections": [
   {
    "h": "何时使用",
    "p": "",
    "paras": [
     "**当你需要以下能力时，使用 `@hyperframes/gcp-cloud-run`：** **当你想要以下能力时，使用其他包：** [!TIP] Cloud Run 使用容器镜像，因此没有 Lambda ZIP 大小压力，并且可安装与标准渲染器相同的固定 `chrome-headless-shell` 运行时。"
    ],
    "codeBlocks": [],
    "bullets": [
     "在 Google Cloud 基础设施上渲染大型合成",
     "通过 Cloud Workflows 编排 `plan`、`renderChunk` 与 `assemble`",
     "将项目归档、分块输出和最终视频存储到 GCS",
     "将渲染器作为 Cloud Run 服务部署，运行时固定 Chrome 版本",
     "从 CI、后端服务或自定义内部工具驱动渲染",
     "本地渲染或在单个 Node 进程内渲染——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
     "在 AWS 上运行相同的分布式模型——使用 [aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)",
     "构建或编辑合成 HTML——使用 [studio](https://hyperframes.heygen.com/packages/studio.md)、[sdk](https://hyperframes.heygen.com/packages/sdk.md) 或 [core](https://hyperframes.heygen.com/packages/core.md)"
    ]
   },
   {
    "h": "包导出",
    "p": "",
    "paras": [
     "| Import | 说明 |",
     "| - | - |",
     "| `@hyperframes/gcp-cloud-run` | 服务端 handler、事件类型、GCS 传输和客户端 SDK 导出 |",
     "| `@hyperframes/gcp-cloud-run/server` | Cloud Run HTTP 服务入口点 |",
     "| `@hyperframes/gcp-cloud-run/sdk` | 轻量 Node SDK，用于部署站点、启动渲染、轮询进度和估算成本 | 已发布包还包含 `terraform/` 目录和用于部署的 `Dockerfile`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "架构",
    "p": "",
    "paras": [
     "Cloud Workflows 以不同的 `Action` 值调用同一个 Cloud Run 服务： **1. Plan（计划）** 从 GCS 下载项目归档，运行 producer 规划器，并上传计划目录。",
     "**2. Render chunks（渲染分块）** Cloud Workflows 并行调用针对 Cloud Run 服务的 `renderChunk`。每次请求渲染一个分块，并上传到 GCS。",
     "**3. Assemble（组装）** 下载所有分块和音频素材，组装交付物，并上传最终文件。",
     "该服务刻意贴近 AWS Lambda 适配器：围绕相同的 `@hyperframes/producer/distributed` 原语做一层薄云传输。"
    ],
    "codeBlocks": []
   },
   {
    "h": "部署",
    "p": "",
    "paras": [
     "构建并推送容器，然后应用 Terraform 模块： Terraform 会输出 SDK 所需的存储桶名称、服务 URL、工作流名称和区域。"
    ],
    "codeBlocks": [
     {
      "code": "gcloud builds submit . \\\n  --tag REGION-docker.pkg.dev/PROJECT/REPO/hyperframes-render:TAG\n\nterraform -chdir=node_modules/@hyperframes/gcp-cloud-run/terraform init\nterraform -chdir=node_modules/@hyperframes/gcp-cloud-run/terraform apply \\\n  -var project_id=PROJECT \\\n  -var region=us-central1 \\\n  -var image=REGION-docker.pkg.dev/PROJECT/REPO/hyperframes-render:TAG",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "页面网络限制",
    "p": "",
    "paras": [
     "该服务设置 `PRODUCER_RESTRICT_PAGE_NETWORK=true`，使渲染页面只能访问其自己的项目文件和公开互联网地址。页面加载的任何内容中，回环、内网、链路本地和 IPv6 地址都会被拒绝。仅存在于 VPC 主机或私有 DNS 之后的素材不会出现在视频中。ffmpeg 的 https 输入只能打开 https，因此 https 源重定向到 http，或加密 HLS，都不会加载。",
     "渲染你未编写的合成时请保持开启。要关闭，请应用模块时带 `-var restrict_page_network=false`，或在运行 `hyperframes cloudrun deploy` 前设置 `TF_VAR_restrict_page_network=false`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "使用 SDK",
    "p": "",
    "paras": [
     "Plan v2 是唯一支持的分布式计划传输。Worker 获取清单选定的内容寻址工件，SDK 发送显式 v2，无需协议选项。",
     "[!WARNING] 对于已有安装，请暂停新渲染并排空活跃的工作流执行。先从同一包版本重新部署 Cloud Run 镜像和 Cloud Workflows 定义，再升级应用 SDK。旧工作流可能缺少仅限 Plan v2 的请求和定位符契约。",
     "单次上传时传 `projectDir`，或单独调用 `deploySite()` 并在多次渲染间复用返回的站点句柄。"
    ],
    "codeBlocks": [
     {
      "code": "import { getRenderProgress, renderToCloudRun } from \"@hyperframes/gcp-cloud-run/sdk\";\n\nconst handle = await renderToCloudRun({\n  projectDir: \"./my-composition\",\n  config: { fps: 30, width: 1920, height: 1080, format: \"mp4\" },\n  bucketName: \"hyperframes-render-my-project\",\n  projectId: \"my-project\",\n  location: \"us-central1\",\n  workflowId: \"hyperframes-render\",\n  serviceUrl: \"https://hyperframes-render-abc.us-central1.run.app\",\n});\n\nlet progress = await getRenderProgress({ executionName: handle.executionName });\nwhile (progress.status === \"running\") {\n  await new Promise((resolve) => setTimeout(resolve, 5000));\n  progress = await getRenderProgress({ executionName: handle.executionName });\n}\n\nconsole.log(progress.status, progress.outputFile, progress.costs.displayCost);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [GCP Cloud Run Deployment](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md) 端到端部署细节和冒烟测试说明。",
     "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) Cloud Run 服务执行的分布式原语。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)",
     "[Changelog](https://hyperframes.heygen.com/changelog.md)",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "pkg-lint": {
  "lede": "lint 包是从 core 中提取的合成 linter，已成为独立可安装的专用包。它是 lint 的**唯一可信来源**：CLI 的 `hyperframes lint` 命令与渲染时渲染门（render-gate）都消费来自这里的同一规则引擎。",
  "sections": [
   {
    "h": "何时使用",
    "p": "",
    "paras": [
     "[!TIP] 这个包的价值在于把验证**作为库**运行，而非 shell 出去调 CLI。Node 应用（agent harness、CI 步骤、编辑器插件）可以直接 `import { lintProject } from '@hyperframes/lint'`，对合成目录做 lint —— 没有 `npx hyperframes lint` 子进程，没有 stdout 解析。",
     "**当你需要以下能力时，使用 `@hyperframes/lint`：** [!NOTE] `@hyperframes/core/lint` 仍然可解析（通过向后兼容的转发 stub），因此现有导入继续有效。新代码应直接从 `@hyperframes/lint` 导入。"
    ],
    "codeBlocks": [],
    "bullets": [
     "从 Node lint 合成项目（index + 子合成）",
     "以编程方式 lint 单个 HTML 字符串",
     "以 lint 发现拦截渲染（`shouldBlockRender`）",
     "在你自己的 UI 或 CI 注解中呈现 lint 发现"
    ]
   },
   {
    "h": "包导出",
    "p": "",
    "paras": [
     "lint 包只有一个入口："
    ],
    "codeBlocks": [
     {
      "code": "import {\n  lintHyperframeHtml,\n  lintMediaUrls,\n  lintProject,\n  shouldBlockRender,\n} from '@hyperframes/lint';\nimport type {\n  HyperframeLintResult,\n  HyperframeLintFinding,\n  HyperframeLintSeverity,   // \"error\" | \"warning\" | \"info\"\n  HyperframeLinterOptions,\n  ProjectLintResult,\n} from '@hyperframes/lint';",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Lint 单个合成",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { lintHyperframeHtml, lintMediaUrls } from '@hyperframes/lint';\n\nconst result = await lintHyperframeHtml(html, { filePath: 'index.html' });\n// result.ok, result.errorCount, result.warningCount, result.findings\n\nfor (const finding of result.findings) {\n  console.log(finding.severity, finding.code, finding.message);\n  // finding.file, finding.selector, finding.elementId, finding.fixHint, finding.snippet\n}\n\n// Additional media URL validation\nconst mediaFindings = await lintMediaUrls(html);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Lint 项目",
    "p": "",
    "paras": [
     "`lintProject` 遍历合成目录 —— index 加上所有子合成 —— 并返回汇总发现。它接收**目录路径字符串**，因此只需一个路径，即可在任何 Node 上下文调用："
    ],
    "codeBlocks": [
     {
      "code": "import { lintProject, shouldBlockRender } from '@hyperframes/lint';\nimport type { ProjectLintResult } from '@hyperframes/lint';\n\nconst result: ProjectLintResult = await lintProject('./my-composition');\n// result.totalErrors, result.totalWarnings, result.results[]\n//   each result entry: { file, result: HyperframeLintResult }\n\nif (shouldBlockRender(true, false, result.totalErrors, result.totalWarnings)) {\n  throw new Error(`Lint found ${result.totalErrors} blocking error(s)`);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "浏览器用法",
    "p": "",
    "paras": [
     "规则引擎**完全在客户端**运行 —— 没有 Node.js，没有文件系统，没有服务器往返。从 `@hyperframes/lint/browser` 入口导入，可在仅浏览器的编辑器或工具中直接验证合成 HTML： 浏览器入口导出 `lintHyperframeHtml`、`lintMediaUrls` 与 `shouldBlockRender` —— 所有作用于 HTML 字符串的东西。它以浏览器目标构建，**零 `node:` 内建**，因此可干净地打进客户端包（构建期已验证）。",
     "[!NOTE] `lintProject`（遍历项目**目录**）基于文件系统，**不**属于浏览器入口 —— 在 Node 中应从主 `@hyperframes/lint` 入口导入。"
    ],
    "codeBlocks": [
     {
      "code": "import { lintHyperframeHtml, shouldBlockRender } from '@hyperframes/lint/browser';\n\nconst result = await lintHyperframeHtml(htmlString, { filePath: 'index.html' });\nif (!result.ok) {\n  for (const f of result.findings) console.warn(f.code, f.message);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Linter 能捕获什么",
    "p": "",
    "paras": [
     "每个发现代码——其严重程度、捕获内容与修复方法——都记录在 [Lint rules](https://hyperframes.heygen.com/reference/lint-rules.md) 参考页。",
     "检测到的问题包括： [!NOTE] 常见失败与修复见 [Troubleshooting](https://hyperframes.heygen.com/help.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "无效的内联 JavaScript 语法。带 `type=\"x-shader/x-fragment\"`、`type=\"x-shader/x-vertex\"` 或 `type=\"text/glsl\"` 的 GLSL 数据块跳过 JavaScript 语法检查，仍会收到 shader 警告。",
     "缺少时间线注册（`window.__timelines`）",
     "定时 `<video>` 既未声明 `muted`（静音素材）也未声明 `data-has-audio=\"true\"`（有声音）—— `video_missing_muted`",
     "定时可见元素缺少 `class=\"clip\"`",
     "已弃用的属性名",
     "缺少合成尺寸（`data-width`、`data-height`）",
     "合成根或其祖先上的 CSS `zoom`（`root_zoom_rescales_a_fixed_canvas`）；后代上的 zoom 允许，包括 `#root .badge` 这类作用域选择器",
     "`data-start` 引用了不存在的片段 ID",
     "在冷渲染 worker 上渲染结果不同的寻址顺序隐患：相对 tween 值（`\"+=...\"`）其属性有第二个并发写入者（`gsap_relative_value_second_writer`）、带相对值的 `repeatRefresh`（`gsap_repeat_refresh_relative_value`）、函数型 tween vars 测量 DOM 或误用 index 参数（`gsap_function_value_hazard`）、可从时间线回调到达的 DOM 测量（`gsap_callback_dom_measurement`），以及 `gsap.utils.random()` / `\"random(...)\"` 这类非确定值（`non_deterministic_code`）",
     "CSS `transition` 声明按浏览器时钟运行，在冷渲染 worker 上重启（`css_transition_used`，为警告）；`none` 与全零时长允许",
     "SVG draw-on 陷阱：对 CSS 声明了多分量 `stroke-dasharray` 的元素写 GSAP `strokeDasharray`（`svg_drawon_css_dasharray_conflict`）、对尚无 `d` 的 path 调用 `getTotalLength()`（`svg_measure_before_path_d`），以及 `tl.set(..., 0)` 的初始状态隐藏在第 0 帧永不渲染（`gsap_timeline_set_initial_hide`）"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md) The HTML + GSAP parsing layer the linter builds on.",
     "[card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md) Types and runtime; re-exports the linter for back-compat.",
     "[card] [CLI](https://hyperframes.heygen.com/packages/cli.md) `npx hyperframes lint` wraps this package. [card] [Studio](https://hyperframes.heygen.com/packages/studio.md)",
     "Surfaces lint findings in the editor."
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
     "[Lint rules](https://hyperframes.heygen.com/reference/lint-rules.md)",
     "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)"
    ]
   }
  ]
 },
 "pkg-parsers": {
  "lede": "parsers 包拥有 GSAP 动画解析/写入器、HTML 合成解析器、hf-id 印制和 spring-ease 生成。它没有任何 `@hyperframes/*` 运行时依赖，因此可独立于框架其余部分使用。",
  "sections": [
   {
    "h": "何时使用",
    "p": "",
    "paras": [
     "[!TIP] **大多数用户不需要直接安装 `@hyperframes/parsers`。** [`@hyperframes/core`](https://hyperframes.heygen.com/packages/core) 再导出其所需的解析 API，[CLI](https://hyperframes.heygen.com/packages/cli.md) / [studio](https://hyperframes.heygen.com/packages/studio.md) 也传递依赖它。只有在你希望**不**引入 core 其余部分、只用解析层时，才直接使用它。",
     "**当你需要以下能力时，使用 `@hyperframes/parsers`：**"
    ],
    "codeBlocks": [],
    "bullets": [
     "将 HTML 合成解析为结构化的 TypeScript 对象",
     "解析、编辑并重新序列化 GSAP 时间线脚本（AST 往返）",
     "在文档上印制确定性 `hf-id` 属性",
     "构建触及解析层但不需要 core 运行时、编译器或生成器的工具"
    ]
   },
   {
    "h": "包导出",
    "p": "",
    "paras": [
     "| Import | 说明 |",
     "| - | - |",
     "| `@hyperframes/parsers` | HTML 解析器、GSAP 序列化/校验 helper、hf-ids、共享类型 |",
     "| `@hyperframes/parsers/gsap-parser` | GSAP 解析器导出、`parseGsapScript`、`SUPPORTED_PROPS`、`SUPPORTED_EASES` |",
     "| `@hyperframes/parsers/gsap-parser-acorn` | 基于 Acorn 的 GSAP 解析器（浏览器安全，读取路径） |",
     "| `@hyperframes/parsers/gsap-writer-acorn` | 基于 Acorn 的 GSAP 写入器（变更 helper） |",
     "| `@hyperframes/parsers/gsap-parser-recast` | 基于 Recast 的 GSAP 解析/写入器（旧实现） |",
     "| `@hyperframes/parsers/gsap-constants` | `SUPPORTED_PROPS`、`SUPPORTED_EASES`、属性组 |",
     "| `@hyperframes/parsers/spring-ease` | Spring-ease 曲线生成 |",
     "| `@hyperframes/parsers/hf-ids` | 确定性元素 id 印制 |",
     "| `@hyperframes/parsers/slideshow` | 幻灯片清单解析器（`parseSlideshowManifest`、`resolveSlideshow`） |",
     "| `@hyperframes/parsers/composition` | 纯净、浏览器安全的合成原语（数据类型、字体别名、URL helper） |",
     "| `@hyperframes/parsers/asset-paths` | 仅 Node 的素材路径重写 helper（`rewriteAssetPath` 等） |",
     "| `@hyperframes/parsers/sub-composition-validity` | 子合成校验工具 | [!NOTE] 本包按聚焦的子路径入口发布。无需 GSAP AST 机器时，请导入 `@hyperframes/parsers/hf-ids`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "HTML 解析",
    "p": "",
    "paras": [
     "在 HTML 与结构化数据之间往返："
    ],
    "codeBlocks": [
     {
      "code": "import {\n  parseHtml,\n  extractCompositionMetadata,\n  validateCompositionHtml,\n} from '@hyperframes/parsers';\nimport type { ParsedHtml, CompositionMetadata } from '@hyperframes/parsers';\n\n// Parse HTML into structured data\nconst parsed: ParsedHtml = parseHtml(htmlString);\n// parsed.elements, parsed.gsapScript, parsed.styles, parsed.resolution, parsed.keyframes\n\n// Extract composition metadata (id, duration, dimensions, variables)\nconst meta: CompositionMetadata = extractCompositionMetadata(htmlString);\n\n// Validate HTML structure\nconst result = validateCompositionHtml(htmlString);\n// result.valid, result.errors",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "修改 HTML",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import {\n  updateElementInHtml,\n  addElementToHtml,\n  removeElementFromHtml,\n} from '@hyperframes/parsers';\n\nconst updated = updateElementInHtml(html, 'el-1', { start: 5 });\nconst added = addElementToHtml(html, newElement);\nconst cleaned = removeElementFromHtml(html, 'el-1');",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "GSAP 脚本解析",
    "p": "",
    "paras": [
     "Acorn 解析/写入器是主路径（浏览器安全）。解析时间线脚本，变更它，并序列化回去，不丢失周边代码： 简单数组关键帧将每个属性的值分布在整条 tween 上，即使数组长度不同。例如，`keyframes: { x: [0, 100, 200], opacity: [0, 1] }` 将 `x: 100` 放在 50% 处、`opacity: 1` 放在 100% 处。将 helper 展开为可编辑 tween 可保留这些位置。",
     "高级的序列化 / 校验 / 关键帧转换 helper 在主入口："
    ],
    "codeBlocks": [
     {
      "code": "import { parseGsapScriptAcorn, extractGsapLabels } from '@hyperframes/parsers/gsap-parser-acorn';\nimport {\n  updateAnimationInScript,\n  addAnimationToScript,\n  removeAnimationFromScript,\n  updateKeyframeInScript,\n  addKeyframeToScript,\n  shiftPositionsInScript,\n  scalePositionsInScript,\n} from '@hyperframes/parsers/gsap-writer-acorn';\nimport type { GsapAnimation, GsapMethod, ParsedGsap } from '@hyperframes/parsers';\n\nconst parsed: ParsedGsap = parseGsapScriptAcorn(scriptContent);\n// parsed.animations, parsed.timelineVar, parsed.preamble, parsed.postamble\n\n// Mutation helpers operate on the script text and preserve unrelated code\nconst next = updateAnimationInScript(scriptContent, animationId, { duration: 2 });",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import {\n  serializeGsapAnimations,\n  getAnimationsForElementId,\n  validateCompositionGsap,\n  keyframesToGsapAnimations,\n  gsapAnimationsToKeyframes,\n} from '@hyperframes/parsers';",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "GSAP 常量",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import {\n  SUPPORTED_PROPS,    // animatable properties\n  SUPPORTED_EASES,    // available easing functions\n  PROPERTY_GROUPS,\n} from '@hyperframes/parsers/gsap-constants';\nimport type { PropertyGroupName } from '@hyperframes/parsers/gsap-constants';",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "hf-ids",
    "p": "",
    "paras": [
     "确定性元素身份，用于稳定的 diff 和编辑："
    ],
    "codeBlocks": [
     {
      "code": "import { ensureHfIds, mintHfId } from '@hyperframes/parsers/hf-ids';\n\n// Stamp hf-id attributes onto every editable element in a document\nconst withIds = ensureHfIds(htmlString);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Spring Ease",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { generateSpringEaseData, SPRING_PRESETS } from '@hyperframes/parsers/spring-ease';",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md) 类型、生成器、运行时和编译器——再导出其所需的解析 API。",
     "[card] [@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md) 构建在 parsers 之上的合成 linter。",
     "[card] [@hyperframes/studio-server](https://hyperframes.heygen.com/packages/studio-server.md) 构建在 parsers 之上的 Studio 预览服务。",
     "[card] [CLI](https://hyperframes.heygen.com/packages/cli.md) 创建、预览、lint 和渲染合成。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)",
     "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
     "[Changelog](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "pkg-player": {
  "lede": "player 包提供了一个 `<hyperframes-player>` 自定义元素，可将 HyperFrames 合成嵌入到纯 HTML 或框架应用中。",
  "sections": [
   {
    "h": "通过 CDN",
    "p": "",
    "paras": [
     "使用包管理器时： 仅在播放无需用户手势即可开始时，才设置 `autoplay muted`。",
     "随时可以添加或移除 `controls`。显示时，控件会反映当前的播放状态、位置和速度。"
    ],
    "codeBlocks": [
     {
      "code": "<script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/@hyperframes/player\"></script>\n\n<hyperframes-player\n  src=\"./my-composition/index.html\"\n  controls\n  style=\"width: 100%; max-width: 800px; aspect-ratio: 16/9\"\n></hyperframes-player>",
      "file": "HTML TITLE=\"INDEX.HTML\" THEME={NULL}"
     },
     {
      "code": "import \"@hyperframes/player\";",
      "file": "JS THEME={NULL}"
     },
     {
      "code": "<hyperframes-player\n  src=\"/compositions/intro.html\"\n  controls\n></hyperframes-player>",
      "file": "HTML TITLE=\"INDEX.HTML\" THEME={NULL}"
     }
    ]
   },
   {
    "h": "属性",
    "p": "",
    "paras": [
     "| Attribute | Type | Default | Description |",
     "| - | - | - | - |",
     "| `src` | string | — | 合成 HTML 的 URL 或相对路径，或配合 `type` 指向的视频文件 |",
     "| `type` | string | — | `video/...` 类型（例如 `video/mp4`）将 `src` 作为视频文件播放 |",
     "| `srcdoc` | string | — | 已作为字符串可用的合成 HTML |",
     "| `width` | number | 1920 | 用于宽高比的原生合成宽度 |",
     "| `height` | number | 1080 | 用于宽高比的原生合成高度 |",
     "| `controls` | boolean | false | 显示播放、拖动、速度、时间与音量控件 |",
     "| `autoplay` | boolean | false | 合成就绪时开始播放 |",
     "| `loop` | boolean | false | 结尾处重新开始 |",
     "| `muted` | boolean | false | 静音音频 |",
     "| `volume` | number | 1 | 播放音量，范围 0 到 1 |",
     "| `poster` | string | — | 首次播放前展示的图片 URL |",
     "| `playback-rate` | number | 1 | 播放速度倍率 |",
     "| `audio-src` | string | — | 可选主音频 URL，在父帧中预加载 |",
     "| `audio-locked` | boolean | false | 强制静音播放并隐藏音量控件 |",
     "| `assets-loading-ui` | `player` or `none` | `player` | `none` 隐藏加载资源卡片；资源事件仍会触发 |",
     "| `low-power-idle` | boolean | false | 暂停时每秒检查一次，而非每 80 ms（大量播放器页面） |",
     "| `disable-click-to-play` | boolean | false | 点击播放器不再播放/暂停，由页面自行处理 |",
     "| `no-load-timeout` | boolean | false | 慢加载永不在 8 s 失败，由页面拥有截止时间；脚本和运行时错误仍立即失败 |",
     "| `range-start` | number | — | 播放开始、循环返回、暂停时停靠的电影秒（`rangeStart`） |",
     "| `range-end` | number | — | 范围在之前结束的电影秒：它在该秒之前的帧停止或循环（`rangeEnd`） | `range-start` 与 `range-end` 播放电影的 \\[start, end) 片段。播放器在 `ready` 时停靠在 `range-start`，当暂停的播放头落到新范围之外时也一样；从范围外 `play()` 会从该处开始。结尾处它停留在 `range-end` 之前最后一帧并触发 `ended`，或在 `loop` 时回到 `range-start`。此时 `ended` 时的 `currentTime` 位于该帧内，而非 `range-end` 本身，因此应监听 `ended` 而非比较时间。目前的运行时会在该帧本身停止；视频与 `__timelines` 播放器会提前一个时钟节拍停止，节拍依据最后两步中的较小值预测，背景标签页中的视频会自行在 `timeupdate` 时检查；旧运行时在播放器看到其时间超过结尾时停止。`currentTime` 与 `duration` 保持电影时间。超出电影的范围会被裁剪到其结尾，空范围或负范围会被忽略；两者都会触发 `rangeclamped`。",
     "Player 还接受 `shader-capture-scale` 与 `shader-loading`，用于预览使用 shader 过渡的项目。这些是预览控件，不是合成编写属性。",
     "使用 `video/...` 类型时，`src` 会在相同播放 API 与事件后方的 `<video>` 中播放。`scenes`、`setRuntimeData()`、`setColorGrading()`、`iframeElement` 与 `stopMedia()` 仅限合成使用，且 `srcdoc` 优先于视频 `src`，与 iframe 中一致。",
     "移除视频播放器 `src` 属性或将其设为空字符串，会卸载电影并将播放重置为在 0:00 暂停。设置新的 `src` 可加载另一个视频。"
    ],
    "codeBlocks": []
   },
   {
    "h": "JavaScript API",
    "p": "",
    "paras": [
     "主要 API 遵循 familiar 的媒体播放器行为： 在 Studio 预览中，拖动时会保持最后一张完整画面可见，视频层按请求时刻解码。快速拖动只保留最新排队的目标，字幕与视频层就绪后一起出现。拖动过程中可以出现完整的中间画面。跳转到不同片段会取代更早的待定拖动；失败的来源不会拖慢预览。"
    ],
    "codeBlocks": [
     {
      "code": "const player = document.querySelector(\"hyperframes-player\");\n\nplayer.play();\nplayer.pause();\nplayer.seek(2.5);\n\nplayer.currentTime = 5;\nplayer.playbackRate = 1.5;\nplayer.muted = true;\n\nconsole.log(player.duration, player.paused, player.ready);\nconsole.log(player.compositionWidth, player.compositionHeight);",
      "file": "JS THEME={NULL}"
     }
    ]
   },
   {
    "h": "事件",
    "p": "",
    "paras": [
     "| Event | Detail | Description |",
     "| - | - | - |",
     "| `ready` | `{ duration, compositionWidth, compositionHeight }` | 合成已加载，时间线已发现 |",
     "| `durationchange` | `{ duration }` | `ready` 后时长变化 |",
     "| `resize` | `{ compositionWidth, compositionHeight }` | 合成尺寸变化 |",
     "| `timeupdate` | `{ currentTime }` | 播放位置变化，约每秒 10 次 |",
     "| `play` | — | 播放开始 |",
     "| `pause` | — | 播放暂停 |",
     "| `ended` | — | 播放到达结尾 |",
     "| `rangeclamped` | `{ rangeStart, rangeEnd, duration }` | 超出电影的范围被裁剪到结尾，或空范围被忽略（nulls） |",
     "| `ratechange` | — | 播放速度变化 |",
     "| `volumechange` | — | 音量或静音状态变化 |",
     "| `scenes` | `{ scenes }` | 运行时上报的场景列表 |",
     "| `error` | `{ message }` | 加载或运行时错误；视频会额外提供 `MediaError` `code` |",
     "| `playbackerror` | `{ source, error }` | 浏览器阻止了播放，例如非静音自动播放 |"
    ],
    "codeBlocks": [
     {
      "code": "const player = document.querySelector(\"hyperframes-player\");\n\nplayer.addEventListener(\"ready\", (event) => {\n  console.log(\"Duration:\", event.detail.duration);\n});\n\nplayer.addEventListener(\"timeupdate\", (event) => {\n  console.log(\"Time:\", event.detail.currentTime);\n});",
      "file": "JS THEME={NULL}"
     }
    ]
   },
   {
    "h": "高级：iframe 访问",
    "p": "",
    "paras": [
     "合成在播放器 Shadow DOM 中的 `<iframe>` 里运行。对于大多数用途，上面的 JavaScript API 与事件已经足够。`iframeElement` getter 供必须检查合成 DOM 或连接自定义编辑界面 的同源工具使用：",
     "仅当合成与宿主页面同源时，直接 DOM 访问才有效。跨源嵌入必须使用 Player API 与事件。",
     "[`@hyperframes/studio`](https://hyperframes.heygen.com/packages/studio) 导出了 `resolveIframe`，供需要将内部 iframe 传给 Studio 时间线钩子的消费者使用："
    ],
    "codeBlocks": [
     {
      "code": "const player = document.querySelector(\"hyperframes-player\");\nconst iframe = player.iframeElement;\n\n// Reach into the composition's DOM\niframe.contentDocument.querySelectorAll(\"[data-composition-id]\");\n\n// Read the runtime (GSAP timelines, element registry, etc.)\niframe.contentWindow.__timelines;",
      "file": "JS THEME={NULL}"
     },
     {
      "code": "import { resolveIframe, useTimelinePlayer } from \"@hyperframes/studio\";\n\nconst { iframeRef } = useTimelinePlayer();\nconst player = document.createElement(\"hyperframes-player\");\nplayer.setAttribute(\"src\", src);\ncontainer.appendChild(player);\n\n// Forward the inner iframe so useTimelinePlayer can drive play/pause/seek.\niframeRef.current = resolveIframe(player);",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "工作原理",
    "p": "",
    "paras": [
     "合成在播放器 Shadow DOM 内的沙盒 iframe 中运行。这样可以隔离其样式、将其缩放至播放器容器，并让播放器通过 `postMessage` 与 HyperFrames 运行时通信。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 在应用中的定位](https://hyperframes.heygen.com/developers/overview.md)",
     "[部署预览与渲染 API](https://hyperframes.heygen.com/guides/deploy.md)",
     "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)"
    ]
   }
  ]
 },
 "pkg-producer": {
  "lede": "`@hyperframes/producer` 拥有完整的渲染管线：编译项目、捕获帧、编码视频、混音音频。",
  "sections": [
   {
    "h": "渲染单个项目",
    "p": "",
    "paras": [
     "`createRenderJob()` 描述渲染任务。`executeRenderJob()` 接收该任务、项目目录与输出路径。",
     "入口文件默认为 `index.html`。当项目入口合成不同时，设置 `entryFile`。"
    ],
    "codeBlocks": [
     {
      "code": "import {\n  createRenderJob,\n  executeRenderJob,\n} from \"@hyperframes/producer\";\n\nconst job = createRenderJob({\n  fps: 30,\n  quality: \"standard\",\n  format: \"mp4\",\n});\n\nawait executeRenderJob(\n  job,\n  \"./my-hyperframes-project\",\n  \"./renders/video.mp4\",\n  (currentJob, message) => {\n    console.log(\n      `${Math.round(currentJob.progress)}% ${message}`,\n    );\n  },\n);",
      "file": "TS THEME={NULL}"
     },
     {
      "code": "const job = createRenderJob({\n  fps: { num: 30000, den: 1001 },\n  quality: \"high\",\n  entryFile: \"compositions/launch.html\",\n});",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "选择输出",
    "p": "",
    "paras": [
     "| Format | Best for | Audio |",
     "| - | - | - |",
     "| `mp4` | 默认交付与网页播放 | AAC |",
     "| `webm` | 网页用透明视频 | Opus |",
     "| `mov` | 供剪辑使用的透明 ProRes 4444 | AAC |",
     "| `gif` | 小体积静音预览 | 无 |",
     "| `png-sequence` | 供另一条管线使用的无损帧 | 需要时带 AAC sidecar |",
     "| `hls` | 从播放列表目录提供点播流 | AAC rendition | MP4 可通过 `hdrMode` 输出 HDR。透明格式在 SDR 下渲染，因为 HDR 与 alpha 不是一条受支持的输出路径。",
     "`chromaSubsampling: \"444\"` 渲染 SDR MP4 母版，全分辨率色彩（H.264 yuv444p、无损 PNG 捕获）。它需要软件编码器，与 `useGpu`、HDR 输出、其他格式及分布式渲染不兼容，且许多播放器无法解码。参见 [4:4:4 masters](https://hyperframes.heygen.com/guides/rendering.md#444-masters)。",
     "源与交付约束参见 [HDR 渲染](https://hyperframes.heygen.com/guides/hdr.md)。"
    ],
    "codeBlocks": [
     {
      "code": "const job = createRenderJob({\n  fps: 30,\n  quality: \"high\",\n  format: \"mp4\",\n  hdrMode: \"auto\",\n});",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "HLS",
    "p": "",
    "paras": [
     "`format: \"hls\"` 将 HLS 点播流写入 `outputPath`（目录）：`master.m3u8`、`video.m3u8` 与 `video_NNNNN.ts`，当合成含音频时还有 `audio.m3u8` 与 `audio_NNNNN.ts`。编码与 MP4 相同（H.264 + AAC）——打包环节仅做流拷贝切段。",
     "除最后一段外，每段长恰为 `hlsSegmentSeconds`，因为编码器 GOP 锁定为 `round(fps × hlsSegmentSeconds)` 帧，使每个分段都从关键帧开始。HLS 仅支持 SDR（`hdrMode: \"force-hdr\"` 会被拒绝），拒绝 GPU 编码（GPU 编码器忽略关键帧锁定），且在分布式渲染、Lambda 或 Cloud Run 中不可用。"
    ],
    "codeBlocks": [
     {
      "code": "const job = createRenderJob({\n  fps: 30,\n  format: \"hls\",\n  hlsSegmentSeconds: 4,\n});",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "检查输出校验",
    "p": "",
    "paras": [
     "匹配的输出时长并不能证明每一期望帧都存在。WebM 与 HLS 常在其元数据中省略帧数。当无可用帧数时，producer 会跳过帧数检查，继续检查时长与请求尺寸。",
     "在 `createRenderJob()` 中设置 `debug: true`，或使用 `npx hyperframes render --debug`，可在渲染工作目录中保留 `render.log`。当跳过该检查时，其 `artifact_frame_count_unavailable` 调试事件会记录输出路径与期望帧数。普通输出保持安静；自定义 `logger` 也可通过其 `debug` 方法收集该事件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "参考背景",
    "p": "",
    "paras": [
     "完成的任务会暴露 `reference_background`。进程内本地渲染结果、阻塞与流式 producer 响应、分布式 plan 与 assembly 结果都携带相同的叠加字段： 该值描述了规范初始电影状态下合成根及其周围页面背景。它在透明捕获改变样式之前，从 Chromium 的计算样式读取，而非从渲染帧或内部面板推断。分布式分块会保留 plan 的参考；不会在每个分块边界选择不同参考。",
     "| Kind | Meaning |",
     "| - | - |",
     "| `solid` | 不透明的计算背景，三个 0–255 整数 sRGB 分量 |",
     "| `none` | 明确声明的 `background: none` 且无有效绘制 |",
     "| `unsupported_non_solid` | 有效背景图片或渐变 |",
     "| `unknown` | 缺失、未解析、变化中、半透明或其他不确定背景 | 仅有透明计算色并**不能**确立 `none`。未声明背景、作者写的透明色，或不可访问的样式表导致无法证明其不存在，都仍为 `unknown`。渐变与图片永远不会被替换为其底层颜色。消费者必须保留不确定结果，而非将其视为默认颜色或空白帧的证明。",
     "进程内本地渲染从其已打开的会话读取。Docker CLI 包装目前不返回子进程的结果元数据。分布式 planner 会打开仅检查页面，即使是静态解析时长的合成。它不需要 WebGPU、不运行 BeginFrame 存活检查、不在该页面上调和媒体。浏览器不可用或检查失败会在不拒绝本就有效的静态 plan 的情况下产生 `unknown`。该值保存在执行计划产物中，不加入带哈希的 v2 传输 manifest，因此旧阅读器与物化器仍兼容。"
    ],
    "codeBlocks": [
     {
      "code": "{\"reference_background\":{\"kind\":\"solid\",\"rgb\":[10,46,138]}}",
      "file": "JSON THEME={NULL}"
     }
    ]
   },
   {
    "h": "取消渲染",
    "p": "",
    "paras": [
     "将中止信号传给最后一个参数： 中止的渲染会抛出 `RenderCancelledError`。启用 `strictness: \"strict\"` 时，正确性警告也可能阻止渲染。"
    ],
    "codeBlocks": [
     {
      "code": "const controller = new AbortController();\n\nawait executeRenderJob(\n  job,\n  \"./my-hyperframes-project\",\n  \"./renders/video.mp4\",\n  undefined,\n  controller.signal,\n);\n\n// Call controller.abort() from your cancellation path.",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "构建渲染服务",
    "p": "",
    "paras": [
     "本包导出 Hono 应用与服务辅助函数： 浏览器请求（携带 `Origin` 或 `Sec-Fetch-Site` 头的请求）仅在 IP 地址、`localhost` 或 `*.localhost` 名称下被接受，因此将自身域名指向服务器的页面不能启动渲染或 lint。若浏览器经代理名称到达服务器，请在 `allowedHosts` 或逗号分隔的 `PRODUCER_ALLOWED_HOSTS` 变量中列出该名称。无这些头的请求（如 curl 或其他服务）不受影响。",
     "服务器默认监听 `127.0.0.1`，除非传入 `hostname` 或设置 `PRODUCER_HOST`。监听其他地址时，还必须设置 `authToken` 或 `PRODUCER_AUTH_TOKEN`。除 `/health` 以外每条路由都需要 `Authorization: Bearer <token>`，无凭据时服务器拒绝启动。请求的 `projectDir` 必须解析（含软链接）在 `projectsDir`（`PRODUCER_PROJECTS_DIR`，默认工作目录）内。其 `entryFile` 必须保留在该项目内，`outputPath` 必须在 `rendersDir`（`PRODUCER_RENDERS_DIR`，默认 `/tmp`）内。除非设置 `allowDebug` 或 `PRODUCER_ALLOW_DEBUG=1`，`debug: true` 会被拒绝。`createProducerApp` 默认应用这些路径与调试检查。`createRenderHandlers` 用于挂载到你自己可信服务内时，仅在 `confineRequests: true` 下应用。",
     "对于更大负载，`@hyperframes/producer/distributed` 入口暴露三个渲染活动——`plan`、`renderChunk` 与 `assemble`。你的调度器仍负责分发、重试、存储与网络。",
     "渲染他人项目的服务应设置 `PRODUCER_RESTRICT_PAGE_NETWORK=true`。渲染浏览器只能到达自己的项目服务器与公网 IPv4 地址：它发送的其他一切（页面、帧、worker、WebSocket、WebRTC 一样）都要经过本地代理，代理会检查名称解析出的每个地址并连接到已检查的地址。被拒绝的请求与任何其他不可达资源一样失败。对于从自己机器或网络加载资源的本地渲染，请保持不设置。",
     "该设置接受 `true`、`1`、`yes` 或 `on` 表示启用，`false`、`0`、`no` 或 `off` 表示关闭，不分大小写。其他任何值都会启用并记录警告，因此拼错的值永远不会让渲染服务开放。",
     "启用限制后，视频或音频 URL 在 FFmpeg 读取之前同样经过地址检查。FFmpeg 确实按 URL 读取的文件，如项目的签名存储 URL 视频，必须是自包含容器，如 MP4、WebM 或 WAV。以媒体文件名结尾的播放列表、manifest 或 concat 列表会被拒绝。",
     "若网络路由了非私有地址段，例如集群的 pod 段，请用 `PRODUCER_NON_PUBLIC_CIDRS`（形如 `192.160.0.0/16` 的逗号分隔列表）加入。资源下载与渲染浏览器也会拒绝这些地址。格式错误的条目会拒绝所有地址而非被跳过，并记录警告。"
    ],
    "codeBlocks": [
     {
      "code": "import { startServer } from \"@hyperframes/producer\";\n\nawait startServer({ port: 8080 });",
      "file": "TS THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [选择渲染基础设施](https://hyperframes.heygen.com/deploy/overview.md) 在本地、服务器、Temporal、AWS 或另一适配器之间做决定。",
     "[card] [@hyperframes/engine](https://hyperframes.heygen.com/packages/engine.md) 使用更底层的捕获与编码原语。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/engine](https://hyperframes.heygen.com/packages/engine.md)",
     "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)"
    ]
   }
  ]
 },
 "pkg-sdk": {
  "lede": "SDK 包为 HyperFrames 合成提供程序化编辑层。它打开合成 HTML，暴露查询和变更 API，发出 JSON patch，支持 undo/redo，并可通过可插拔适配器持久化变更，无需 React、Studio 或浏览器 UI。",
  "sections": [
   {
    "h": "何时使用",
    "p": "",
    "paras": [
     "**当你需要以下能力时，使用 `@hyperframes/sdk`：** **当你想要以下能力时，使用其他包：** [!TIP] SDK 是产品集成和需要结构化编辑的 agent 的正确分层。CLI 和 Studio 是围绕相同合成格式构建的用户工具；SDK 是你嵌入到自己 UI 或自动化之后的编辑引擎。",
     "[!NOTE] 本页是包概览。请从 [SDK quickstart](https://hyperframes.heygen.com/sdk/quickstart.md) 开始，再使用聚焦指南和参考页查看确切方法、操作、类型和适配器。"
    ],
    "codeBlocks": [],
    "bullets": [
     "在自己应用中构建自定义合成编辑器",
     "让 agent 无需驱动浏览器 UI 即可检查和编辑合成 HTML",
     "从代码批量应用文本、样式、时间、素材、变量或动画编辑",
     "跟踪 undo/redo 和 patch 事件供宿主应用历史使用",
     "通过内存、文件系统或自定义存储适配器持久化编辑后的 HTML",
     "在可复用的基础合成模板上叠加稀疏覆盖",
     "渲染合成为 MP4 或 WebM——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
     "开箱即用可视化预览和编辑——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md)（`npx hyperframes preview`）或 [studio](https://hyperframes.heygen.com/packages/studio.md)",
     "解析合成 HTML——使用 [parsers](https://hyperframes.heygen.com/packages/parsers.md)",
     "Lint 合成 HTML 或项目——使用 [lint](https://hyperframes.heygen.com/packages/lint.md)",
     "编译或生成底层合成 HTML——使用 [core](https://hyperframes.heygen.com/packages/core.md)",
     "从无头浏览器捕获帧——使用 [engine](https://hyperframes.heygen.com/packages/engine.md)"
    ]
   },
   {
    "h": "包导出",
    "p": "",
    "paras": [
     "| Import | 说明 |",
     "| - | - |",
     "| `@hyperframes/sdk` | 主编辑 API、类型、内存/无头适配器、iframe 预览适配器 |",
     "| `@hyperframes/sdk/adapters/memory` | 内存持久化适配器，用于测试、演示和临时会话 |",
     "| `@hyperframes/sdk/adapters/fs` | 带版本历史的 Node.js 文件系统持久化适配器 |",
     "| `@hyperframes/sdk/adapters/headless` | 空操作预览适配器，用于 agent、CI 和服务端编辑 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "快速入门",
    "p": "",
    "paras": [
     "打开 HTML，编辑显式元素 id，然后序列化更新后的合成："
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(html);\n\nconst [headlineId] = comp.find({ text: \"Old headline\" });\nif (headlineId) {\n  comp.setText(headlineId, \"New headline\");\n  comp.setStyle(headlineId, {\n    color: \"#FFD60A\",\n    fontSize: \"96px\",\n  });\n}\n\nconst updatedHtml = comp.serialize();\ncomp.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "显式元素 ID",
    "p": "",
    "paras": [
     "所有编辑都针对稳定的 HyperFrames 元素 id。这使 SDK 对无头 agent 和后端任务安全，因为变更不依赖鼠标状态或当前 UI 选区。"
    ],
    "codeBlocks": [
     {
      "code": "const allElements = comp.getElements();\nconst imageIds = allElements\n  .filter((element) => element.tag === \"img\")\n  .map((element) => element.id);\n\nfor (const id of imageIds) {\n  comp.setAttribute(id, \"loading\", \"eager\");\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "类型化方法",
    "p": "",
    "paras": [
     "常见编辑操作有类型化便捷方法： 多项变更应合为一条 undo 记录、一次持久化写入和一次变更通知时，使用 `batch()`："
    ],
    "codeBlocks": [
     {
      "code": "comp.setText(\"hf-title\", \"Launch day\");\ncomp.setStyle(\"hf-title\", { color: \"#ffffff\", transform: \"translateY(24px)\" });\ncomp.setAttribute(\"hf-logo\", \"src\", \"/assets/logo.png\");\ncomp.setTiming(\"hf-title\", { start: 0.5, duration: 2.5 });\ncomp.setVariableValue(\"brandColor\", \"#6C5CE7\");\ncomp.removeElement(\"hf-old-caption\");",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.batch(() => {\n  comp.setText(\"hf-title\", \"Version 2\");\n  comp.setStyle(\"hf-title\", { color: \"#22C55E\" });\n  comp.setTiming(\"hf-title\", { start: 1, duration: 3 });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "高级 Dispatch API",
    "p": "",
    "paras": [
     "Agent 和自动化可通过 `dispatch()` 发出数据形状操作： 显示 UI 控件或应用可选操作前，请先调用 `can()`："
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setStyle\",\n  target: \"hf-card\",\n  styles: { borderRadius: \"24px\" },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const result = comp.can({\n  type: \"setGsapTween\",\n  animationId: \"anim-1\",\n  properties: { ease: \"power3.out\" },\n});\n\nif (result.ok) {\n  comp.setGsapTween(\"anim-1\", { ease: \"power3.out\" });\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "持久化",
    "p": "",
    "paras": [
     "传入持久化适配器可自动保存编辑。SDK 自带内存和文件系统适配器，宿主应用也可为 S3、HTTP、IndexedDB 或应用专用存储实现相同的 `PersistAdapter` 接口。",
     "持久化失败以事件发出，而非使会话崩溃："
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\nimport { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: \"./project\" }),\n  persistPath: \"index.html\",\n});\n\ncomp.setText(\"hf-title\", \"Saved title\");\nawait comp.flush();",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.on(\"persist:error\", ({ error }) => {\n  console.error(\"Autosave failed:\", error.message);\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Undo、Redo 与 Patch 事件",
    "p": "",
    "paras": [
     "独立会话默认包含 undo/redo： Patch 事件让宿主应用可将 SDK 编辑镜像到自身状态、协作层或审计日志："
    ],
    "codeBlocks": [
     {
      "code": "comp.setText(\"hf-title\", \"Draft\");\ncomp.undo();\ncomp.redo();",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const unsubscribe = comp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  saveToHostHistory({ patches, inversePatches, origin });\n});\n\nunsubscribe();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "嵌入覆盖模式",
    "p": "",
    "paras": [
     "模板驱动的产品可用 `overrides` 对象打开合成。SDK 将稀疏覆盖集叠加到基础 HTML 之上，将额外编辑累积到该覆盖集中，宿主只需存储增量。",
     "当宿主拥有 undo/redo，需要将逆向 patch 重放到 SDK 且不产生循环时，使用 `applyPatches()`。"
    ],
    "codeBlocks": [
     {
      "code": "const comp = await openComposition(templateHtml, {\n  overrides: {\n    \"hf-title.text\": \"Customer-specific title\",\n    \"hf-logo.attr.src\": \"/customers/acme/logo.png\",\n  },\n  history: false,\n});\n\ncomp.setStyle(\"hf-title\", { color: \"#0EA5E9\" });\n\nconst nextOverrides = comp.getOverrides();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "预览适配器",
    "p": "",
    "paras": [
     "SDK 可无头运行，也可连接到预览面： 浏览器集成中，`createIframePreviewAdapter()` 将 SDK 桥接到同源合成 iframe，使命中测试、选区和草稿预览更新可保留在模型变更路径之外。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition, createHeadlessAdapter } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(html, {\n  preview: createHeadlessAdapter(),\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md) 底层类型、HTML 工具、运行时 helper 和 linter API。",
     "[card] [@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md) 可嵌入 SDK 驱动编辑流的现成可视编辑器 UI。",
     "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 将编辑后 HTML 变为视频的程序化渲染流水线。",
     "[card] [CLI](https://hyperframes.heygen.com/packages/cli.md) 命令行创建、预览、lint 和渲染工作流。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Adapters](https://hyperframes.heygen.com/sdk/reference/adapters.md)",
     "[How HyperFrames fits into an application](https://hyperframes.heygen.com/developers/overview.md)",
     "[Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)"
    ]
   }
  ]
 },
 "pkg-shader": {
  "lede": "shader transitions 包为 HyperFrames 合成加入 GPU 加速的场景间过渡。它捕获场景样本、作为 WebGL 纹理上传，并从 GSAP 时间线驱动片段 shader 合成。",
  "sections": [
   {
    "h": "何时使用",
    "p": "",
    "paras": [
     "**当你需要以下能力时，使用 `@hyperframes/shader-transitions`：** **若你想做以下事，请用其他包：**"
    ],
    "codeBlocks": [],
    "bullets": [
     "添加基于 shader 的场景过渡，如 domain warp、whip pan、glitch、iris、light leak 或 thermal distortion",
     "将 GPU 过渡挂到现有 GSAP 时间线",
     "围绕可用 shader 注册表构建过渡选择器或校验界面",
     "对原生 HTML-in-canvas 捕获支持做特性检测",
     "为渲染模式捕获使用 producer 的确定性页面端合成器",
     "将完成合成渲染为视频——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
     "以编程方式编辑合成结构——使用 [sdk](https://hyperframes.heygen.com/packages/sdk.md)",
     "构建可视化编辑界面——使用 [studio](https://hyperframes.heygen.com/packages/studio.md)"
    ]
   },
   {
    "h": "包导出",
    "p": "",
    "paras": [
     "| Import | Description |",
     "| - | - |",
     "| `init()` | 构建或增强带 shader 过渡的 GSAP 时间线 |",
     "| `SHADER_NAMES` | 支持的 shader 名称数组，供校验与 UI 选择器 |",
     "| `isHtmlInCanvasCaptureSupported()` | 检测 Chrome 原生 HTML-in-canvas 捕获路径 |",
     "| `installPageSideCompositor()` | 安装 producer 路径使用的渲染模式合成器 |",
     "| `isPageSideCompositingSupported()` | 检查页面端 shader 合成是否可用 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "快速开始",
    "p": "",
    "paras": [
     "当合成已经拥有动画序列时，可传入现有 GSAP 时间线： 若 WebGL 不可用，本包会退回普通时间线播放，不做 shader 合成。"
    ],
    "codeBlocks": [
     {
      "code": "import { init } from \"@hyperframes/shader-transitions\";\n\nconst timeline = init({\n  bgColor: \"#0a0a0a\",\n  accentColor: \"#ff6b2b\",\n  scenes: [\"scene-1\", \"scene-2\", \"scene-3\"],\n  transitions: [\n    { time: 3, shader: \"domain-warp\", duration: 0.8 },\n    { time: 8, shader: \"light-leak\", duration: 0.7 },\n  ],\n});\n\nwindow.__timelines ??= {};\nwindow.__timelines.hero = timeline;",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const timeline = gsap.timeline({ paused: true });\ntimeline.from(\"#headline\", { opacity: 0, y: 40, duration: 0.6 });\n\ninit({\n  bgColor: \"#000000\",\n  scenes: [\"intro\", \"demo\", \"outro\"],\n  transitions: [\n    { time: 5, shader: \"cinematic-zoom\" },\n    { time: 12, shader: \"glitch\", duration: 0.5 },\n  ],\n  timeline,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "可用 Shaders",
    "p": "",
    "paras": [
     "| Shader | Description |",
     "| - | - |",
     "| `domain-warp` | 基于有机噪声的扭曲，带发光边缘 |",
     "| `ridged-burn` | 带火花与热辉的脊状噪声燃烧 |",
     "| `whip-pan` | 水平运动模糊，模拟快速摇镜 |",
     "| `sdf-iris` | 圆形虹膜擦除，带发光环形边缘 |",
     "| `ripple-waves` | 由中心向外扩散的同心波纹扭曲 |",
     "| `gravitational-lens` | 扭曲引力井，带色差 |",
     "| `cinematic-zoom` | 径向缩放模糊，带色散边缘 |",
     "| `chromatic-split` | 由中心向外展开的 RGB 通道分离 |",
     "| `glitch` | 数字故障，块位移与扫描线 |",
     "| `swirl-vortex` | 螺旋旋转，带噪声扭曲 |",
     "| `thermal-distortion` | 自底部升起的热气波动 |",
     "| `flash-through-white` | 闪白，再揭示下一场景 |",
     "| `cross-warp-morph` | 噪声驱动混合两场景 |",
     "| `light-leak` | 暖色电影感漏光，带镜头光晕 | 需要类型化列表时使用 `SHADER_NAMES`："
    ],
    "codeBlocks": [
     {
      "code": "import { SHADER_NAMES } from \"@hyperframes/shader-transitions\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "配置",
    "p": "",
    "paras": [
     "`shader` 可选。省略时，该时间线位置将使用 CSS 兜底过渡。"
    ],
    "codeBlocks": [
     {
      "code": "type TransitionConfig = {\n  time: number;\n  shader?: string;\n  duration?: number;\n  ease?: string;\n};\n\ntype HyperShaderConfig = {\n  bgColor: string;\n  accentColor?: string;\n  scenes: string[];\n  transitions: TransitionConfig[];\n  timeline?: gsap.core.Timeline;\n  compositionId?: string;\n  previewCaptureFps?: number;\n};",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "预览与渲染行为",
    "p": "",
    "paras": [
     "浏览器预览会预捕获过渡样本，并将匹配快照缓存在 IndexedDB。缓存键包括合成 ID、场景 DOM/样式签名、时序、捕获 FPS、缩放与尺寸，因此普通页面刷新可复用样本，运行时编辑只使相邻过渡缓存失效。",
     "producer 渲染期间，shader 过渡改用确定性页面端合成器，而非预览时快照缓存。这样保持帧捕获由 seek 驱动，避免依赖实时播放。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 渲染包含 shader 过渡的合成。",
     "[card] [过渡目录](https://hyperframes.heygen.com/catalog/blocks/transitions-distortion.md) 浏览构建在 shader 系统之上的可安装过渡块。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用 data-vfx-chain 的逐像素效果](https://hyperframes.heygen.com/guides/vfx-chain.md)",
     "[色彩、效果、3D 与生成艺术](https://hyperframes.heygen.com/prompting/color-grading.md)",
     "[已验证的示例提示词](https://hyperframes.heygen.com/prompting/examples.md)"
    ]
   }
  ]
 },
 "pkg-studio-server": {
  "lede": "`@hyperframes/studio-server` 是 Studio 使用的后端。它提供项目和预览、应用源变更、创建缩略图，并启动渲染任务。",
  "sections": [
   {
    "h": "挂载 API",
    "p": "",
    "paras": [
     "`createStudioApi()` 返回一个 Hono 应用。适配器是 Studio 与项目存储、打包器、linter 和渲染器之间的边界。",
     "当 API 来自 loopback（`localhost`、`127.0.0.1` 或 `[::1]`）服务时，Studio 不带 cookie 发送 API 请求，因此不会排在预览媒体之后。对其他任何源，Studio 仍按常规发送，使远程和代理设置（Codespaces、隧道、访问代理）默认保留 cookie。在 loopback 源上用同源 cookie 对挂载 API 做认证时，可在构建时或运行时在 `window.__HF_STUDIO_ENV__` 中设置 `VITE_STUDIO_API_SAME_ORIGIN_CREDENTIALS=true`；代价是该源失去连接加速。Studio 在其模块加载时读取一次该标志，因此要在加载 Studio 之前设置 `window.__HF_STUDIO_ENV__`；CLI 已注入它，但自行挂载 API 的宿主也必须注入。",
     "该 API 未认证，因此状态变更请求按请求自身的源（含 scheme）检查：只有来自本服务提供的 Studio 页面的写入才会被接受。Loopback 无需额外设置。如果你把 API 挂在公开主机名上（自己的域名、隧道、Codespaces 地址），请在 `allowedHosts` 中具名，使该源的写入可通过：",
     "使用 `hyperframes preview` 和 Studio dev server 时无需改代码：两者都从 `HYPERFRAMES_PREVIEW_ALLOWED_HOSTS`（逗号分隔）读取额外主机，并作为 `allowedHosts` 传入。被拒绝的写入返回 403，并给出被拒绝的主机名和该变量作为修复方法：",
     "`StudioApiAdapter` 提供： 请以你所安装版本的导出接口为确切契约。Studio 获得新能力时它也会变化。",
     "`bundle(projectDir, options)` 必须将 `options` 透传给 `bundleToSingleHtml`，展开在你自己的选项之上。预览在那里设置 `stampHfIds`，使每个元素以其源文件印制的 id 提供服务。宿主若去掉它，打包器内联的合成可能以与后续保存所印制不同的 id 提供服务。"
    ],
    "codeBlocks": [
     {
      "code": "import type { Hono } from \"hono\";\nimport {\n  createStudioApi,\n  type StudioApiAdapter,\n} from \"@hyperframes/studio-server\";\n\nexport function mountStudioApi(\n  app: Hono,\n  adapter: StudioApiAdapter,\n) {\n  app.route(\"/api\", createStudioApi(adapter));\n}",
      "file": "TS THEME={NULL}"
     },
     {
      "code": "app.route(\n  \"/api\",\n  createStudioApi(adapter, { allowedHosts: [\"studio.example.com\"] }),\n);",
      "file": "TS THEME={NULL}"
     },
     {
      "code": "HYPERFRAMES_PREVIEW_ALLOWED_HOSTS=demo.tunnels.example hyperframes preview",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "bundle: (dir, options) => bundleToSingleHtml(dir, { runtime: \"inline\", ...options }),",
      "file": "TS THEME={NULL}"
     }
    ],
    "bullets": [
     "项目列表和解析；",
     "合成打包和 lint；",
     "渲染输出存储和任务启动；",
     "可选的缩略图、会话、registry 安装和背景移除。"
    ]
   },
   {
    "h": "源文件备份",
    "p": "",
    "paras": [
     "文件保存和删除会在变更源之前，将先前的字节保存在 `.hyperframes/backup/` 中。成功响应包含相对项目目录的 `backupPath`。若备份失败，操作终止。",
     "长项目相对路径使用 SHA-256 备份键，使带时间戳的备份文件名符合文件系统限制。较短路径保留现有名称。服务默认每个文件保留十个快照，包括用旧备份名称保存的快照。源路径仍必须符合文件系统自身的限制。"
    ],
    "codeBlocks": []
   },
   {
    "h": "提供成品渲染",
    "p": "",
    "paras": [
     "Studio 从磁盘流式传输成品渲染文件，包括大于 2 GiB 的导出。这适用于项目的 `/renders/file/*` 路由以及每个渲染任务的 `/view` 和 `/download` 路由。挂载 API 的宿主应将响应体作为流转发，使其能在不把整个文件缓冲到内存的情况下交付大导出。",
     "`HEAD` 请求返回相同的文件元数据，不打开文件流。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Studio 从何处加载 GSAP",
    "p": "",
    "paras": [
     "合成需要时，Studio 会向预览注入 GSAP 脚本：GSAP 核心和 CustomEase（你在 Studio 中编辑的运动），以及 MotionPathPlugin（运动路径）。它按以下顺序选择来源： 嵌入本包的宿主提供文件并指定根目录即可选择加入：",
     "`gsapLocalRoot` 必须是预览自身源上的路径，如 `/api/vendor/npm`，不能带查询或片段。"
    ],
    "codeBlocks": [
     {
      "code": "gsapLocalRoot: \"/api/vendor/npm\", // serves /api/vendor/npm/gsap@3.15.0/dist/gsap.min.js",
      "file": "TS THEME={NULL}"
     }
    ],
    "bullets": [
     "设置 `HYPERFRAMES_GSAP_BASE_URL` 时。Studio 只用该镜像，永不通过 jsDelivr 重试。",
     "宿主自带的副本，当宿主传入 `gsapLocalRoot` 时。HyperFrames CLI 自带 GSAP `3.15.0`，并从 `/api/vendor/npm` 提供，因此 `npx hyperframes preview` 不会为这些脚本发 jsDelivr 请求。自带副本只含一个版本：加载其他 GSAP 版本（如 `gsap@3.14.2`）的合成，仍会从 jsDelivr 获得匹配插件。",
     "jsDelivr（`https://cdn.jsdelivr.net/npm`），用于没有自带副本的宿主。"
    ]
   },
   {
    "h": "使用你自己的镜像",
    "p": "",
    "paras": [
     "在启动预览服务或创建 Studio API 之前设置 `HYPERFRAMES_GSAP_BASE_URL`： 镜像是 HTTP 服务，不是文件夹：文件路径会被拒绝。按以下布局在该 URL 下提供 GSAP 发行文件，使用你的合成需要的版本：",
     "在编写的 GSAP URL 中保留 `gsap@<version>`，使服务能推断要补哪个插件版本。无法推断版本时，使用框架默认，目前为 `3.15.0`。",
     "该 base 必须是无凭据、无查询字符串、无片段的绝对 URL。请使用 HTTPS。仅允许本机使用裸 `http://`：`localhost`、`127.0.0.0/8` 和 `::1`。首尾空白和结尾斜杠会被去掉。非空无效值会以配置错误停止 API 启动。",
     "服务在启动时只读一次该设置。改值后请重启。对于受管 CLI 预览，重启前先运行 `npx hyperframes preview ./my-video --stop`。缓存的预览 HTML 按 GSAP 来源设键，因此换镜像后重启即生效，无需删除预览缓存。",
     "渲染读取相同设置。当合成指向不存在的本地 `gsap/dist/` 脚本时，渲染编译器从镜像（而非 jsDelivr）加载该文件并内联，与其他远程脚本相同。无效值使该渲染以相同的配置错误失败。渲染不使用 CLI 自带副本。",
     "该设置仅改变 HyperFrames 注入的 GSAP 脚本。合成自身的脚本、字体、图片和媒体 URL 保持原样，包括指向 jsDelivr 的 GSAP `<script>`；离线项目同样请在本地提供这些文件。当 Studio 向合成文件写入 GSAP 时（例如向无 GSAP 文件首次添加动画），它写入 jsDelivr URL，使文件能在 Studio 外渲染。若所选镜像不可用或缺少请求的文件，Studio 不会通过 jsDelivr 重试该依赖。"
    ],
    "codeBlocks": [
     {
      "code": "HYPERFRAMES_GSAP_BASE_URL=http://127.0.0.1:8080/vendor/npm \\\n  npx hyperframes preview ./my-video",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "<mirror-root>/gsap@3.15.0/dist/gsap.min.js\n<mirror-root>/gsap@3.15.0/dist/CustomEase.min.js\n<mirror-root>/gsap@3.15.0/dist/MotionPathPlugin.min.js",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "其他入口",
    "p": "",
    "paras": [
     "| Import | 用途 |",
     "| - | - |",
     "| `@hyperframes/studio-server/source-mutation` | 对合成源应用受守卫的变更 |",
     "| `@hyperframes/studio-server/screenshot-clip` | 计算元素截图像素几何 |",
     "| `@hyperframes/studio-server/safe-path` | 在项目内解析路径并遍历文件，无需服务 |",
     "| `@hyperframes/studio-server/hf-ids` | 向项目 HTML 印制稳定的元素 id，无需服务 |",
     "| `@hyperframes/studio-server/history` | 打开项目的撤销历史，无需服务 |",
     "| `@hyperframes/studio-server/manual-edits-render-script` | 在渲染期间重新应用 Studio 手工编辑 |",
     "| `@hyperframes/studio-server/studio-motion-render-script` | 在渲染期间重新应用 Studio 运动编辑 |",
     "| `@hyperframes/studio-server/draft-markers` | 处理草稿手势标记 |",
     "| `@hyperframes/studio-server/finite-mutation` | 防止源变更使用非有限值 |",
     "| `@hyperframes/studio-server/media-proxy-preview` | 在预览中支持代理媒体 | `@hyperframes/core/studio-api` 仍是已弃用的兼容再导出。新集成应从 `@hyperframes/studio-server` 导入。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md) 嵌入底层 Studio 界面组件。",
     "[card] [Studio guide](https://hyperframes.heygen.com/studio.md) 使用 HyperFrames 自带的完整编辑器。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
     "[Changelog](https://hyperframes.heygen.com/changelog.md)",
     "[@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md)"
    ]
   }
  ]
 },
 "pkg-studio": {
  "lede": "`@hyperframes/studio` 包含 HyperFrames 浏览器编辑器背后的 React 应用、编辑器组件、播放器、时间线与 hooks。",
  "sections": [
   {
    "h": "入口",
    "p": "",
    "paras": [
     "| Import | Contains |",
     "| - | - |",
     "| `@hyperframes/studio` | React 组件、hooks、工具及其公共类型 |",
     "| `@hyperframes/studio/ui` | 不含编辑器的 UI 原语（按钮、菜单、弹出层、表单项） |",
     "| `@hyperframes/studio/player` | 单独的 `Player` 组件，不含时间线 |",
     "| `@hyperframes/studio/tailwind-preset` | Studio 使用的 Tailwind 预设 | 同伴依赖为 React 19、React DOM 19 与 Zustand 4 或 5。"
    ],
    "codeBlocks": []
   },
   {
    "h": "完整应用",
    "p": "",
    "paras": [
     "| Export | Use |",
     "| - | - |",
     "| `StudioApp` | 完整的 Studio 应用 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "编辑器结构",
    "p": "",
    "paras": [
     "| Export | Use |",
     "| - | - |",
     "| `EditorShell` | 预览、侧边栏与时间线外壳 |",
     "| `NLEPreview` | 合成预览界面 |",
     "| `CompositionBreadcrumb` | 在嵌套合成间导航 |",
     "| `SourceEditor` | 源码编辑器 |",
     "| `PropertyPanel` | 所选元素的检查器 |",
     "| `FileTree` | 项目文件浏览器 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "播放与时间线",
    "p": "",
    "paras": [
     "| Export | Use |",
     "| - | - |",
     "| `Player` | 合成 iframe 与播放桥接 |",
     "| `PlayerControls` | 播放、拖动与逐帧控制 |",
     "| `Timeline` | 时间线编辑界面 |",
     "| `VideoThumbnail` | 视频片段缩略图 |",
     "| `CompositionThumbnail` | 嵌套合成缩略图 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "Hooks 与工具",
    "p": "",
    "paras": [
     "| Export | Use |",
     "| - | - |",
     "| `useTimelinePlayer` | 读取与控制共享播放器状态 |",
     "| `usePlayerStore` | 访问 Zustand 播放器 store |",
     "| `useCompositionStack` | 深入与返回嵌套合成 |",
     "| `useElementPicker` | 通过预览 iframe 选择与编辑元素 |",
     "| `resolveSourceFile`, `applyPatch` | 定位与补丁源码 |",
     "| `parseStyleString`, `mergeStyleIntoTag`, `findElementBlock` | 处理内联源码样式与元素 | 本包还导出 `CompositionLevel`、`TimelineElement`、`PickedElement` 与 `PatchOperation`。",
     "`useElementPicker` 在检查激活期间记住当前选择。在 Studio 或预览中按 Escape 可取消并恢复该选择。悬停目标在预览旁标为 `tag#id`、`tag.class` 或仅标签名。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Studio 如何与项目保持连接",
    "p": "",
    "paras": [
     "预览与渲染使用相同的可寻址合成契约。预览仍依赖浏览器实时播放，渲染则逐帧捕获。因此很重的项目在预览时可能卡顿，但仍能渲染每一帧。",
     "暂停时拖动视频会先解码并暂存可见视频层，再推进合成动画。完整帧在拖动中出现，新指针位置合并到下一次解码。Canvas 与 GPU 效果消费相同的暂存像素。连续播放使用原生视频；Studio 会在那些视频追赶上之前保持暂停画面可见，在 Play 之前等待。原生交接最多等待满足就绪帧十秒；Pause 或新的 seek 会取消它。到达期限后，其余部分照常播放，每个未就绪视频继续显示其最后一张全质量画面。播放中，原生帧呈现或播放进度会释放该画面；普通传输同步纠正漂移。暂停恢复仍等待所请求帧。被跳过的来源在其后续 Play 请求中保留画面，直至恢复。超时的暂停兜底保留呈现时钟与画面，暂停同步继续；视频就绪时它仍可发布；新手势取消该恢复。Studio 在准备原生播放前请求释放暂停解码器，暂停拖动恢复时重开读取器。释放暂停读取器最多等待两秒，让透明视频查询清空。此后取消其下载，让播放继续，未完成合并在后台收尾；输入释放仍等待合并完成。同传输偏离半秒以上的恢复中视频，每次恢复注册最多纠正 seek 一次，然后移除其保留画面。拖动与暂停逐帧步进始终以源分辨率解码原视频。自动播放质量降级不会降低这些帧，帧解码器不会用重编码 seek 副本替代。播放质量设置也不会降低这些暂停帧。无法使用帧解码器的浏览器或媒体退回原生拖动。长 GOP 来源 seek 可能更慢，尤其是向后或跨越远距离剪辑时。"
    ],
    "codeBlocks": [],
    "bullets": [
     "Studio 在 iframe 中加载合成，并使用 HyperFrames 运行时。",
     "Player 控件与该运行时通信，以播放、暂停与拖动。",
     "编辑器与时间线通过 Studio API 发送变更。",
     "Studio 服务器将这些变更写回项目文件。",
     "外部文件变更尽可能在保持当前位置的同时刷新预览。"
    ]
   },
   {
    "h": "Tailwind 预设",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import studioPreset from \"@hyperframes/studio/tailwind-preset\";\n\nexport default {\n  presets: [studioPreset],\n};",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "在你自己的应用中使用预览指南",
    "p": "",
    "paras": [
     "宿主应用可用 Studio 同样的标尺、安全边距、网格与吸附工具栏，组合到自己的预览 iframe 上。提供方拥有 iframe 几何与共享偏好，宿主提供当前 iframe 元素，并选择要渲染的部分："
    ],
    "codeBlocks": [
     {
      "code": "import {\n  GridOverlay,\n  PreviewGuides,\n  PreviewOverlayProvider,\n  SnapToolbar,\n} from \"@hyperframes/studio\";\nfunction Preview({ iframe }: { iframe: HTMLIFrameElement | null }) {\n  return (\n    <PreviewOverlayProvider iframe={iframe}>\n      <PreviewGuides />\n      <GridOverlay />\n      <SnapToolbar />\n    </PreviewOverlayProvider>\n  );\n}",
      "file": "TSX THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [使用 Studio](https://hyperframes.heygen.com/studio.md) 学习完整的编辑工作流。",
     "[card] [Studio 服务器](https://hyperframes.heygen.com/packages/studio-server.md) 连接项目文件、媒体、lint 与渲染任务。",
     "[card] [Player](https://hyperframes.heygen.com/packages/player.md) 嵌入播放而无编辑界面。",
     "[card] [SDK](https://hyperframes.heygen.com/sdk/quickstart.md) 无 Studio 时查询与编辑合成。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/studio-server](https://hyperframes.heygen.com/packages/studio-server.md)",
     "[@hyperframes/player](https://hyperframes.heygen.com/packages/player.md)",
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)"
    ]
   }
  ]
 },
 "ref-audio-effects": {
  "lede": "当浏览器编辑器控件不够用时请使用此参考：需要把混音写进 HTML、知道某参数的精确范围、自动化某个旋钮，或理解某行为在渲染中为何与预览不同。日常使用请先查看[混音并应用特效](https://hyperframes.heygen.com/studio/audio-effects.md)，需要让智能体做什么请看[音频特效和混音](https://hyperframes.heygen.com/prompting/media-and-audio.md#mix-it)。",
  "sections": [
   {
    "h": "四个属性",
    "p": "",
    "paras": [
     "| 属性 | 内容 | 形状 | 位置 | 播放时读取 |",
     "| - | - | - | - | - |",
     "| `data-fx-chain` | 特效，按信号序 | JSON | `<audio>`、`<video>`、`<hf-audio-group>` | 是 |",
     "| `data-automation` | 音量或特效参数的包络 | JSON | `<audio>`、`<video>`、`<hf-audio-group>` | 是 |",
     "| `data-fx-carve` | 旁白侧链自身设置 | JSON | `<audio>`、`<video>` | 否——见[下文](#data-fx-carve) |",
     "| `data-audio-group` | 本片段所属组的 id | 纯 id，非 JSON | `<audio>`、可听 `<video>` | 是 | `data-audio-group` 是异类：纯字符串，且**在静音 `<video>` 上被忽略**（`muted`，或 `data-has-audio=\"false\"`）。其他三是 JSON。其中只有 `data-fx-chain` 和 `data-automation` 可放在 `<hf-audio-group>` 上，在那里作用于组整条母线；`data-fx-carve` 属于片段。",
     "**把 JSON 属性双引号写出，并把 JSON 自身的引号转义为 `&quot;`、`&` 转义为 `&amp;`**——本页所有例子都如此。浏览器用 `getAttribute` 读取它，不介意哪种写法，但 `carve.mjs` 用 `name=\"...\"` 正则找它们，单引号属性对它不可见：侧链会报告没有已有链并覆盖看不见的工作。",
     "没有任何静态校验链。无法读取的链预览会**干声**播放，使合成保持可操作；渲染会**整个混音失败**，而非送出听着合理实则错误的干声轨。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`data-fx-chain`",
    "p": "",
    "paras": [
     "不转义即为：标注 Remove Rumble 的高通、标注 Reduce Mud 的峰化切、旁路的限幅器。"
    ],
    "codeBlocks": [
     {
      "code": "<audio\n  id=\"narration\"\n  src=\"assets/vo.wav\"\n  data-start=\"0\"\n  data-duration=\"12\"\n  data-fx-chain=\"{&quot;version&quot;:1,&quot;nodes&quot;:[\n    {&quot;type&quot;:&quot;highpass&quot;,&quot;id&quot;:&quot;n1&quot;,&quot;label&quot;:&quot;Remove Rumble&quot;,\n     &quot;params&quot;:{&quot;frequency&quot;:120,&quot;q&quot;:0.707,&quot;poles&quot;:&quot;2&quot;}},\n    {&quot;type&quot;:&quot;peaking&quot;,&quot;id&quot;:&quot;n2&quot;,&quot;label&quot;:&quot;Reduce Mud&quot;,\n     &quot;params&quot;:{&quot;frequency&quot;:250,&quot;gain&quot;:-3,&quot;q&quot;:1.2}},\n    {&quot;type&quot;:&quot;limiter&quot;,&quot;id&quot;:&quot;n3&quot;,&quot;enabled&quot;:false,\n     &quot;params&quot;:{&quot;limit&quot;:-1,&quot;attack&quot;:5,&quot;release&quot;:50,&quot;level_out&quot;:0}}\n  ]}\"\n></audio>",
      "file": "HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "**顺序即信号序。** 每个节点处理上一个节点的产物。",
     "`type` 是[注册表](#effect-registry)中的特效 id。`params` 用人思考的单位——dB、ms、Hz。越界值读取时钳制，所以能解析的链总是可实现的。",
     "`id` 是稳定句柄。自动化按 id 定址节点，从不按位置，因此重排链不会把轨道重指到不同特效。无 id 的节点加载正常，但无法自动化。浏览器编辑器按 `n1`、`n2`、… 依次发放首个空闲 id。",
     "`label` 替换特效自身名称显示在机架上。节点在做具名任务时写一个——两个 `peaking` 节点不然会显示两行相同名字，你分辨不清哪个是 mud 切、哪个是 clarity 提升。",
     "`enabled: false` 即旁路：节点留在链中，离开信号路径。缺省为启用。",
     "`fromCarve: true` 标记侧链分析生成的节点。`fromPreset` 携带写出节点的预设 id，重套预设时靠它原地替换自己的节点。**不要手工设 `fromCarve`**——下次侧链会正好删掉这些节点。"
    ]
   },
   {
    "h": "`data-automation`",
    "p": "",
    "paras": [
     "这是两轨道：音轨音量到 2.5 s 降到 0.4，节点 `n2` 的 gain 沿弯曲线段到 1 s 降到 −6 dB。",
     "| 字段 | 含义 |",
     "| - | - |",
     "| `target` | 音轨自身电平用 `volume`，或 `fx.<nodeId>.<param>` |",
     "| `t` | 秒——**轨道在哪，时钟归谁**，见下 |",
     "| `v` | 参数自身单位——gain 用 dB，频率用 Hz，音量用线性倍率 |",
     "| `curve` | −1 到 1，弯曲*离开*某点的线段；正值先低后晚升 |",
     "| `viaX` / `viaY` | 线段经过的内部点（进度 0–1、已走值 0–1）；两者同在时取代 `curve` |"
    ],
    "codeBlocks": [
     {
      "code": "data-automation=\"{&quot;version&quot;:1,&quot;lanes&quot;:[\n  {&quot;target&quot;:&quot;volume&quot;,&quot;points&quot;:[{&quot;t&quot;:0,&quot;v&quot;:1},{&quot;t&quot;:2.5,&quot;v&quot;:0.4}]},\n  {&quot;target&quot;:&quot;fx.n2.gain&quot;,&quot;points&quot;:[{&quot;t&quot;:0,&quot;v&quot;:0},{&quot;t&quot;:1,&quot;v&quot;:-6,&quot;curve&quot;:0.4}]}\n]}\"",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "两个时钟",
    "p": "",
    "paras": [
     "| 轨道在 | `t: 0` 含义 |",
     "| - | - |",
     "| 片段（`<audio>` / `<video>`） | **该片段**的起点。`data-start=\"8\"` 的床声，`t: 0` 在合成时间 8 |",
     "| 组（`<hf-audio-group>`） | **合成时间。**组无 `data-start`，时钟从零开始 | 搞反是本页最贵的错误：组轨道写片段相对时间，会落在首个成员碰巧开始的位置。预览和渲染对两时钟一致。"
    ],
    "codeBlocks": []
   },
   {
    "h": "音量不限于 1",
    "p": "",
    "paras": [
     "`volume` 轨道的 `v` 是线性增益倍率，上限 **+12 dB**，约 `3.981`——与 `data-volume` 同上限。高于 1 的增益有效并会播放；`1` 是单位增益，非上限。",
     "该轨道乘于 `data-volume`，正如编辑器中片段增益与音量关键帧叠加：`data-volume=\"0.5\"` 在 `1` 的轨道下播放为 `0.5`。乘积共享同一 +12 dB 上限。片段和组都如此。",
     "在片段上，`data-volume` 在其特效**之前**应用，因此链中的压缩器或限幅器会受它影响；轨道在其后。组的 `data-volume` 留在其特效后，如音轨推子。",
     "轨道把首值向后保持到片段起点、末值向前保持到终点。**比人声早开始的床声因此需要显式 `t: 0` 的“不切”点，否则一开始就已 duck。** 每轨道至多 512 点。节点已删的轨道读取时被剪掉而不是报错——所以拼错 `nodeId` 会静默丢掉包络。不要猜测已发放的 id，请从链中读回。",
     "`volume` 轨道与 GSAP `volume` tween 冲突：轨道胜，tween 被忽略。Linter 报告为 `audio_volume_double_automation`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "音轨相加；不做平均",
    "p": "",
    "paras": [
     "渲染按 unity 求和每个音轨。`data-volume=\"1\"` 的音轨无论独播还是与二十条并行，都坐在源电平上，某片段结束不会提升仍在播放者。加一条轨永不调低其他轨。"
    ],
    "codeBlocks": [],
    "bullets": [
     "`data-volume`、`volume` 轨道、淡入淡出和组推子各只缩放自己的轨或组。翻倍人声人声 +6 dB；整个混音动多少取决于同时在播什么。",
     "求和不限幅。大音轨重叠可超过 0 dBFS。留 headroom，或在[母线](#the-master-bus-data-fx-chain-on-the-composition-root)上放 `truepeak`；`limiter` 可能放过快速峰值。",
     "导出保持成品文件在 -1 dBTP 以下。穿过它的混音会经 -3 dBTP 的 `truepeak`，只压峰。若峰值仍超，导出按一个固定量降低**整个混音**，包括安静段，CLI 打印 `audio_lowered` 警告。",
     "渲染主增益 `PRODUCER_AUDIO_GAIN`（默认 `1`）在母线链前乘一次成品求和。",
     "查电平时，对比导出版与其按所写 `data-volume` 缩放的源，在只有该轨播放的窗口中比。"
    ]
   },
   {
    "h": "`data-fx-carve`",
    "p": "",
    "paras": [
     "不转义：`{\"enabled\":true,\"sources\":[\"voiceover\"],\"strength\":0.25}`。",
     "这属性**播放时不读**——播放的是它产出的链和轨道。它的存在让已有侧链可改 strength，而非从滤波器反猜。",
     "旧项目可能用六个机制数字（`maxCutDb`、`bands`、`q`、`intelligibilityBias`、`duckDb`、`headroomDb`）代替 `strength`。仍可加载：深度映射回 strength，其余重派生。无 `enabled` 的存储侧链读作开，单 `source` 读作单人声 `sources` 列表，存的 `dynamic` 被忽略——每条侧链现都跟语音。"
    ],
    "codeBlocks": [
     {
      "code": "data-fx-carve=\"{&quot;enabled&quot;:true,&quot;sources&quot;:[&quot;voiceover&quot;],&quot;strength&quot;:0.25}\"",
      "file": "HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "`sources` 指明**这条床声为谁腾位置**——元素 id，或组 id 每次分析展开为其当前成员。",
     "`strength` 0–1，派生整个机制。",
     "`enabled: false` 保留设置并停止侧链。它的存在是因为恰一个候选人声的床声默认被侧链；缺省“off”会被读作从未配置，默认又把它加回。"
    ]
   },
   {
    "h": "`data-audio-group`",
    "p": "",
    "paras": [
     "成员关系由**成员**持有，不由组嵌套成员，因此删掉的片段下次解析时自行从组消失，无残留。"
    ],
    "codeBlocks": [
     {
      "code": "<style>hf-audio-group { display: none !important; }</style>\n\n<hf-audio-group id=\"voiceover\" data-label=\"Voiceover\" data-volume=\"1\"></hf-audio-group>\n\n<audio id=\"vo-intro\"  data-audio-group=\"voiceover\" src=\"assets/vo1.wav\" …></audio>\n<audio id=\"vo-middle\" data-audio-group=\"voiceover\" src=\"assets/vo2.wav\" …></audio>",
      "file": "HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "`<hf-audio-group>` 是可选元数据：`data-label`、`data-volume`、`data-hidden`，以及自身的 `data-fx-chain` / `data-automation`。有成员无元素的组仍解析，用其 id 作标签。",
     "**音频和可听视频。**带声 `<video>`（`data-has-audio=\"true\"`，无 `muted`）在预览和渲染中加入组；静音视频上 `data-audio-group` 被忽略。组不嵌套。",
     "`data-audio-group=\"\"` 即无组。",
     "元素必须惰性。运行时注入 `hf-audio-group{display:contents!important}`，使未知自定义元素不会吃到 flex gap，其内各物照常渲染，除非组静音（`data-hidden` 照旧隐藏它）——但请你也写这条规则，以免裸预览把它铺开。用 `</hf-audio-group>` 关闭：HTML 忽略自定义元素上的 `/>`。",
     "组 id 与元素 id 共用一命名空间。"
    ]
   },
   {
    "h": "母线：合成根上的 `data-fx-chain`",
    "p": "",
    "paras": [
     "母线即顶层合成根上的 `data-fx-chain`。它在所有片段、每组自身链和推子之后对求和跑一次，因此此处限幅器看到整个混音的峰。片段只能属一组，所以这是把一个特效铺满一切的办法。"
    ],
    "codeBlocks": [
     {
      "code": "<div id=\"root\" data-composition-id=\"main\" data-width=\"1920\" data-height=\"1080\"\n  data-fx-chain=\"{&quot;version&quot;:1,&quot;nodes&quot;:[\n    {&quot;type&quot;:&quot;truepeak&quot;,&quot;id&quot;:&quot;m1&quot;,&quot;label&quot;:&quot;Delivery ceiling&quot;,\n     &quot;params&quot;:{&quot;ceiling&quot;:-1.5,&quot;lookahead&quot;:3,&quot;release&quot;:80}}\n  ]}\"\n>",
      "file": "HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "只有**顶层**合成根读作母线。片段或组上的 `data-fx-chain` 保持各自含义，子合成根上的在父合成包含时不应用。单独预览或渲染的子合成文件即顶层根，其链正是彼处母线。",
     "没有主自动化：根上的 `data-automation` 不读作母线的。",
     "渲染把音轨求和为 float WAV、跑链、再编码 AAC，因此链读未削波采样。预览把链插在片段求和与监听之间。",
     "根上母线链存在时，预览按渲染那样把每个可听 `<video>` 也经该母线。无母线时，自身无链、无组、无自动化的 `1` 音量视频留在原生输出。",
     "不可读的母线链**整个混音失败**：渲染在每种严格度下都以 `audio_processing_failed` 错误停止，什么都不导出。预览只播干声且无消息。`audio_attribute_unreadable` 抓非 JSON、无 `\"version\": 1`、无 `nodes` 数组的链；未知特效类型仍只在渲染时现形。渲染前请先在预览检查母线链。"
    ]
   },
   {
    "h": "特效注册表",
    "p": "",
    "paras": [
     "十六个特效。范围外值读取时钳制。**AUTO** 标记可被自动化轨道驱动的参数；未标者不能随时间动。`@hyperframes/core/audio-fx` 的 `HF_AUDIO_FX` 是事实源头。"
    ],
    "codeBlocks": []
   },
   {
    "h": "滤波——音轨可用哪些频段",
    "p": "",
    "paras": [
     "| 特效 | 参数 |",
     "| - | - |",
     "| `highpass` | `frequency` 20–20000 Hz (300, log) **AUTO** · `q` 0.1–20 (0.707, log) **AUTO** · `poles` `1`\\|`2` (2) |",
     "| `lowpass` | `frequency` 100–20000 Hz (8000, log) **AUTO** · `q` 0.1–20 (0.707, log) **AUTO** · `poles` `1`\\|`2` (2) |",
     "| `peaking` | `frequency` 20–20000 Hz (1000, log) **AUTO** · `gain` −40–40 dB (0) **AUTO** · `q` 0.1–20 (1, log) **AUTO** |",
     "| `lowshelf` | `frequency` 20–2000 Hz (200, log) **AUTO** · `gain` −40–40 dB (0) **AUTO** |",
     "| `highshelf` | `frequency` 500–20000 Hz (4000, log) **AUTO** · `gain` −40–40 dB (0) **AUTO** | `q` 是带宽——越高越窄。`poles` 是斜度：`2` 为常见双二阶（12 dB/oct），`1` 更缓（6 dB/oct）。搁架滤波无 `q`；Web Audio 规范对它们不使用该项。"
    ],
    "codeBlocks": []
   },
   {
    "h": "动态——电平随时间如何表现",
    "p": "",
    "paras": [
     "| 特效 | 参数 |",
     "| - | - |",
     "| `gain` | `gain` −60–12 dB (0) **AUTO** |",
     "| `compressor` | `threshold` −60–0 dB (−24) · `ratio` 1–20 (4) · `attack` 0.01–2000 ms (20, log) · `release` 0.01–9000 ms (250, log) · `knee` 1–8 (2.83) · `makeup` 0–36 dB (0) · `mix` 0–1 (1) |",
     "| `limiter` | `limit` −24–0 dB (−1) · `attack` 0.1–80 ms (5) · `release` 1–8000 ms (50, log) · `level_out` −24–24 dB (0) |",
     "| `truepeak` | `ceiling` −24–0 dBTP (−1) · `lookahead` 0.5–10 ms (3) · `release` 10–2000 ms (80, log) |",
     "| `gate` | `threshold` −80–0 dB (−35) · `range` −80–0 dB (−24) · `ratio` 1–20 (10) · `attack` 0.01–9000 ms (1, log) · `release` 0.01–9000 ms (100, log) · `knee` 1–8 (2.83) |",
     "`gain` 的切低到 −60 dB、提止于 +12：它是腾位置的电平级，能加 40 dB 的链在起效前早已削波。`knee` 为 1 是硬拐点。`mix` 小于 1 把干声混回（并行压缩）。`range` 是门关时把下压拉多远。",
     "`limiter` 是包络跟随器：响应信号电平、无前瞻，可放过采样峰或样点间峰。交付封顶用 `truepeak`。它在 4x 过采信号上估计真峰、读 `lookahead` ms 前提以使增益峰到前已下降，并把该估计钳在 `ceiling`。各通道共一增益。输出延迟 `lookahead` 加约 0.3 ms（范围 3.3 到 10.3 ms）：离线渲染裁掉该延迟，实时预览播放它，因此声在图像后落后那一截。定位会清掉组或母线上的延迟线和保持增益。改变 `lookahead` 重建节点。",
     "封顶针对这份 4x 估计，而非波形本身。4x 插值看不到贴近 Nyquist 内容的峰，所以真峰可能超过 `ceiling`。对照理想 16x 插值测得，纯音、粉噪声和密集混音至多高 0.6 dB。把全频白噪声推进限幅器 8 dB 或更多，超 1.2 到 1.7 dB（中位 1.4 dB，28 次 10 到 30 s 运行）。也以 4x 读数的表，如 ffmpeg `ebur128=peak=true`，报同噪声约 0.1 dB，所以看不出漏测。硬交付限值下请把 `ceiling` 设至少低 2 dB：-1 dBTP 限值用 −3 dBTP。"
    ],
    "codeBlocks": []
   },
   {
    "h": "非线性——改变波形形状",
    "p": "",
    "paras": [
     "| 特效 | 参数 |",
     "| - | - |",
     "| `saturate` | `type` `tanh`\\|`atan`\\|`cubic`\\|`exp`\\|`alg`\\|`quintic`\\|`sin`\\|`erf`\\|`hard` (tanh) · `threshold` −40–0 dB (−6) · `output` −24–24 dB (0) **AUTO** · `oversample` 1–8× (4) |",
     "| `bitcrush` | `bits` 1–32 (8) · `samples` 1–250× (1) · `mix` 0–1 (1) | `tanh` 最缓，`hard` 直接削波。更高 `oversample` 耗 CPU 更多、压混叠更低。`samples` 把每采样重复 N 次——粗糙降采样，lo-fi 性格即源于此。"
    ],
    "codeBlocks": []
   },
   {
    "h": "时间——音轨位置和移动",
    "p": "",
    "paras": [
     "| 特效 | 参数 |",
     "| - | - |",
     "| `delay` | `time` 1–5000 ms (250, log) **AUTO** · `feedback` 0.01–0.95 (0.35) **AUTO** · `mix` 0–1 (0.4) **AUTO** |",
     "| `reverb` | `size` 0.05–1 (0.7) · `damping` 0–1 (0.5) · `wet` 0–1 (0.35) **AUTO** · `dry` 0–1 (0.7) **AUTO** |",
     "| `chorus` | `delay` 1–100 ms (7) **AUTO** · `depth` 0–10 ms (2) **AUTO** · `speed` 0.01–10 Hz (1) **AUTO** · `mix` 0–1 (0.5) **AUTO** |",
     "| `phaser` | `in_gain` 0–1 (0.4) **AUTO** · `out_gain` 0–2 (0.74) **AUTO** · `delay` 0.1–5 ms (3) · `decay` 0–0.99 (0.4) · `speed` 0.1–2 Hz (0.5) **AUTO** · `type` `0`\\|`1` (0) |",
     "| `pitchshift` | `semitones` −12–12 st (0, whole steps) · `mix` 0–1 (1) | `pitchshift` 移音高而不变播速，正是它区别于变速的地方。两参数都不可自动化——它是 worklet。",
     "混响卷积*生成的*冲激，预览和渲染生成同一个，所以房间可复现、无需另发冲激文件。更高 `damping` 使尾音高频滚得更快。`feedback` 有界小于 1，因为为 1 时永不衰减。"
    ],
    "codeBlocks": []
   },
   {
    "h": "为何某些参数不可自动化",
    "p": "",
    "paras": [
     "自动化一次性交给音频线程，作为原生 `AudioParam` ramp 和曲线——这正是它逐采样精度且预览渲染一致的原因。因此只有被 `AudioParam` 支着的参数可自动化。三类不行：",
     "| 类别 | 特效 | 后果 |",
     "| - | - | - |",
     "| Worklet 处理器选项 | `compressor`, `limiter`, `truepeak`, `gate`, `bitcrush`, `pitchshift` | **无参数可自动化** |",
     "| WaveShaper 曲线 | `saturate` 的 `type`、`threshold`、`oversample` | 只有 `output` 级是真参数 |",
     "| 卷积冲激 | `reverb` 的 `size`、`damping` | `wet` / `dry` 是增益级，可正常自动化 | **不可自动化参数上的轨道静默惰性。** 要让它们随时间表现不同，代以环绕包一层可自动化的 `gain` 级：压缩器前的 `gain` 轨道改变压缩器被驱动多狠，正是自动化其 threshold 大多想做的事。"
    ],
    "codeBlocks": []
   },
   {
    "h": "预设、任务与一旋钮 profile",
    "p": "",
    "paras": [
     "它们都是可手工搭起的链的捷径。打开任一，所见皆普通特效及其参数。"
    ],
    "codeBlocks": []
   },
   {
    "h": "预设",
    "p": "",
    "paras": [
     "二十二个，分四大家族。套用一个会**追加**；重套已在者会把自己的节点原地替换，因为位置是信号序。",
     "| 家族 | Id |",
     "| - | - |",
     "| Voice | `voice-clean`, `voice-broadcast`, `voice-warm` |",
     "| Repair | `rumble-cut`, `room-gate`, `boom-tame`, `harsh-tame` |",
     "| Character | `telephone`, `radio-am`, `megaphone`, `lofi-tape`, `pa-system`, `intercom`, `doofus-worble`, `chipmunk`, `giant`, `monster` |",
     "| Space | `room-tight`, `room-natural`, `hall`, `slap-echo`, `dub-throw` | `chipmunk`、`giant`、`monster` 建于 `pitchshift`，故变说话人而非渠道。",
     "`voice-clean` 是 Remove Rumble → Reduce Mud → Even Out Loudness → Add Clarity → Peak Ceiling。`voice-broadcast` 更密更前；`voice-warm` 主加 body 而非切它。",
     "预设节点包在 wet/dry 混合里，因此 `presetAmount`（0–1）淡掉整套，`fx.preset.<id>` 是可随时间拉升它的自动化目标。这是把预设当整体自动化的唯一办法——其节点没有共同参数。"
    ],
    "codeBlocks": []
   },
   {
    "h": "任务",
    "p": "",
    "paras": [
     "五个具名 `peaking` 滤波，频率已选。选题就是选范围，正是它让单一“多少”旋钮诚实。",
     "| 任务 | 症状 | 设置 |",
     "| - | - | - |",
     "| Tame Boominess | 胸腔过多——发轰 | 200 Hz, −4 dB, Q 1.4 |",
     "| Reduce Mud | 闷声，如在纸板后 | 250 Hz, −3 dB, Q 1.2 |",
     "| Reduce Boxiness | 如小房间、如箱子 | 400 Hz, −3 dB, Q 1.4 |",
     "| Add Clarity | 词听不清 | 3 kHz, +2.5 dB, Q 1 |",
     "| Soften Harshness | 刺耳听累 | 3.2 kHz, −3 dB, Q 1.6 | 手工写时，把名字带在 `label` 里——光参数不是任务。",
     "**每任务都以相同设置内嵌在预设里**，五任务正源于此。所以在叠加任务前先看预设已含什么：`voice-clean` 加 Reduce Mud 任务是 250 Hz 处 −6 dB，而本意 −3。"
    ],
    "codeBlocks": []
   },
   {
    "h": "一旋钮 profile",
    "p": "",
    "paras": [
     "五个特效没有诚实的单参数之脸——压缩器阈值无 ratio 即无意义。它们改给派生控件 0–1，一起设定多参数。",
     "| 特效 | 旋钮 | 0 → 1 | 设定 |",
     "| - | - | - | - |",
     "| `compressor` | Evenness | 几乎不动 → 很匀、挺压 | threshold, ratio, attack, release, makeup |",
     "| `gate` | Tightness | 只切真静音 → 连轻字也切 | threshold, range, release |",
     "| `saturate` | Warmth | 仅光泽 → 明显失真 | threshold, output |",
     "| `reverb` | Space | 小紧房 → 大开厅 | size, wet, dry |",
     "| `bitcrush` | Crush | 微沙 → 毁掉 | bits, samples, mix | Evenness、Warmth、Space **电平匹配**：补偿增益、输出微调和干声 leg 随驱动走，因此旋大不会顺带旋大音轨。Tightness、Crush 不匹配，因为没有 trim 可动。",
     "链存的是机制值，非旋钮位置——旋钮靠反求曲线读回，所以 profile 下手改参数允许且只移动旋钮。"
    ],
    "codeBlocks": []
   },
   {
    "h": "旁白侧链",
    "p": "",
    "paras": [
     "侧链是**关系，非特效**。设置放在*床声*上——被处理的轨——并点名要听的人声，正如侧链压缩器。永不把侧链放在人声轨上。",
     "`strength` 派生真实混音中一起动的六数字：切多深、几频带、多宽、多偏可懂度而非裸人声能量、电平可下潜多远、声下多远作目标。",
     "| Strength | 结果 |",
     "| - | - |",
     "| `0` | 仅频谱——一频带，不做电平匹配 |",
     "| `0.25`（默认） | 三频带 6 dB 凹、6 dB 电平余量 |",
     "| `0.5` | 凹深达 10 dB——侧链开始被听作特效处 |",
     "| `0.5` 以上 | 安静人声下大床声的故意领地 | 每值都成为语音自身电平的包络：静音不碰床声，大声段把侧链推到满深。没有静态模式。",
     "在侧链床声内，信号先过凹、再电平匹配、再你自搭之物——所以你加的限幅器仍作最后封顶。",
     "人声在测量前求和到床声时钟，因此一次分析覆盖所有。人声与床声不同时播的排除在外；它们不能掩床声。",
     "**点名组，别点名一串片段 id。** id 列表要穷尽正确、且只在下次编辑前正确——后加的第四段旁白在侧链意识外播，床声静默不下压。`sources` 点名两个以上普通片段 id 会报 `audio_carve_ungrouped_sources`。",
     "有两安排点名组**更差**，皆源于组形式比写它的分析解析更晚更广：",
     "| 安排 | 会发生什么 |",
     "| - | - |",
     "| 床声本身是人声组的成员 | 床声被当作人声交给自身，按自身内容侧链 |",
     "| 组还持有归为 music 或 SFX 的成员 | 该成员下次分析进入侧链，呼呼声下压床声 | 它们在写它的那跑不现形——分析求和的是当时检测到的人声，存的属性再错首遍也对。下次重分析才现形，对着上跑判好的文件。床声独立一组。",
     "侧链写出的是一普通 `peaking` 滤波串加 `gain` 级，标 `fromCarve`，每侧链参数一条自动化轨道。标签就是诀窍：重跑替换上侧链，你手工搭的特效和轨道原地不动。"
    ],
    "codeBlocks": []
   },
   {
    "h": "从命令行",
    "p": "",
    "paras": [
     "脚本随 `media-use` 技能发布；`<SKILL_DIR>` 是该技能文件夹。",
     "整命令如此——它找人声和床声自身并打印决定： 自动选择错时用 `--bed` / `--voice`（可重复）点名轨，`--strength` 推它，`--dry-run` 只看报告不写。分不清哪轨是床声时它拒绝，不错切。",
     "**`sources` 记什么。** 被分析的每人声同属一组、且该组可安全点名时写组 id。组含床声或 music/SFX 成员时回落到片段 id——并明说——原因见上表。本跑未分析到的归类 voice 或 unknown 组员*不是*回落理由：后日开始播的片段正是点名组的意义。",
     "选轨先看名，用与浏览器编辑器选择器同一分类器，两者不相争：像音乐的名字（`music`、`bgm`、`bed`、`score`…）是床声，其下非 SFX 形其余播者是人声。需要 `PATH` 上 `ffmpeg`，项目装 `@hyperframes/core`。"
    ],
    "codeBlocks": [
     {
      "code": "node <SKILL_DIR>/audio/scripts/carve.mjs --comp index.html",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "bed    music-bed (name looks like music)\nvoice  narration (only track left)\ncarve  strength 0.25\nbands  400Hz -6dB q1.4, 1000Hz -3dB q1.4, 1600Hz -3.17dB q1.4\nlevel  216-point envelope, floor -6 dB",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "组和静音",
    "p": "",
    "paras": [
     "组经一母线求和成员，母线载组自身音量、FX 链和自动化。渲染时每组在进主混音前以全合成长度子混成单音轨，因此组级特效听的是求和、非单个成员。",
     "| 控件 | 位置 | 达导出 |",
     "| - | - | - |",
     "| 静音 | 组元素或片段上的 `data-hidden` | **是**——静音成员从渲染混音剔除 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "预览和渲染",
    "p": "",
    "paras": [
     "两者经同一构建读同一两属性，所以预览预言渲染：",
     "|  | 预览 | 渲染 |",
     "| - | - | - |",
     "| 环境 | 实时 `AudioContext` | 无头浏览器中的 `OfflineAudioContext` |",
     "| 不可读链 | **干声**播，使合成保持可操作 | **整个混音失败** |",
     "| 音量轨道 | 在图上排程 | 混音器烘进 PCM |",
     "| 播放中改属性 | `MutationObserver` 拾取 | n/a | 带尾巴的特效——`reverb`、`delay`——让渲染轨比源**更长**，混音知晓增量。因此带混响床声不再恰止于 `data-duration`。这是预期的。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Linter 检查什么",
    "p": "",
    "paras": [
     "混音几乎无静态闸。四规则存在：",
     "| 规则 | 报告 |",
     "| - | - |",
     "| `audio_attribute_unreadable` | 渲染无法解析的 `data-automation` 或 `data-fx-chain`：非 JSON、无 `\"version\": 1`、无 `lanes` / `nodes` 数组、轨道无 `target` 或 `points`、节点无 `type`。渲染本地和云都失败 |",
     "| `audio_carve_ungrouped_sources` | 侧链点名两个以上普通片段 id 而非组 |",
     "| `audio_volume_double_automation` | 轨上 `volume` 轨道与 GSAP `volume` tween 并存——轨道胜，tween 忽略 |",
     "| `audio_volume_tween_overrides_gain` | 轨有编著 `data-volume` 且 `volume` 被 tween——tween 值绝对，替换增益而非缩放它 | 轨道目标、特效类型和参数无物查。强制它们的是渲染。除此之外，混音靠渲染和聆听验证。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[混音](https://hyperframes.heygen.com/studio/audio-effects.md)",
     "[用 data-vfx-chain 的逐像素特效](https://hyperframes.heygen.com/guides/vfx-chain.md)",
     "[颜色分级实现](https://hyperframes.heygen.com/reference/color-grading.md)"
    ]
   }
  ]
 },
 "ref-color-grading": {
  "lede": "当浏览器编辑器控件不够用时，请使用此参考：你需要把分级写进 HTML、通过自动化应用它、动画控制某个受支持的属性，或把特效限制在合成区域内。关于视觉校正和日常浏览器编辑器使用，请先查看[颜色分级](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color)。",
  "sections": [
   {
    "h": "持久化分级",
    "p": "",
    "paras": [
     "浏览器编辑器和 CLI 会把已解析的分级存入 `data-color-grading`： 通过 CLI 应用相同的有效载荷： 添加 `--dry-run --json` 可在不写入的情况下检查改动。使用 `--clear` 可移除该处理。"
    ],
    "codeBlocks": [
     {
      "code": "<video\n  id=\"interview\"\n  src=\"./assets/interview.mp4\"\n  data-color-grading='{\"preset\":\"skin-soft\",\"intensity\":0.7}'\n></video>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "npx hyperframes media-treatment \\\n  --selector '#interview' \\\n  --grading '{\"preset\":\"skin-soft\",\"intensity\":0.7}' \\\n  --apply",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "为整条轨道分级",
    "p": "",
    "paras": [
     "一个被剪切成数百个片段的机位只需设置一次分级。把分级放在 `<hf-color-group>` 上，再用 `data-color-group` 让每个片段指向它："
    ],
    "codeBlocks": [
     {
      "code": "<hf-color-group\n  id=\"tamer-cam\"\n  data-label=\"Tamer\"\n  data-color-grading='{\"preset\":\"skin-soft\",\"intensity\":0.7}'\n></hf-color-group>\n\n<video id=\"tamer-01\" data-color-group=\"tamer-cam\" src=\"./assets/tamer.mp4\" …></video>\n<video id=\"tamer-02\" data-color-group=\"tamer-cam\" src=\"./assets/tamer.mp4\" …></video>\n<video\n  id=\"tamer-03\"\n  data-color-group=\"tamer-cam\"\n  data-color-grading='{\"adjust\":{\"exposure\":0.3}}'\n  src=\"./assets/tamer.mp4\"\n  …\n></video>",
      "file": "HTML THEME={NULL}"
     }
    ],
    "bullets": [
     "组上的 `data-color-grading` 与片段上的 JSON 格式相同。编辑它会重新为所有成员分级，包括预览和渲染。",
     "`data-color-group` 写在 `<video>`、`<img>` 或 `<canvas>` 上。成员关系由成员持有，因此删除片段后它会自动离开该组。",
     "**片段自身的 `data-color-grading` 优先。** 它会替换该片段的组分级，因此上面的 `tamer-03` 只得到曝光提升，而不得到 skin-soft。",
     "`data-color-group=\"\"` 表示无组；如果某个组 id 没有对应的 `<hf-color-group>` 元素，该片段不分级。移除该元素或其 `data-color-grading` 后，其成员不再分级。",
     "组不可嵌套。组 id 与元素 id 共用同一命名空间。",
     "该元素是惰性的：运行时会注入 `hf-color-group{display:contents!important}`。请用 `</hf-color-group>` 关闭，因为 HTML 会忽略自定义元素上的 `/>`。"
    ]
   },
   {
    "h": "动画控制受支持的属性",
    "p": "",
    "paras": [
     "九个分级属性会暴露为 CSS 自定义属性，暂停的时间线可以直接补间它们： 设置后，该属性会覆盖有效载荷中该控件的值，无论它来自元素内联样式、样式表还是父级。仅在需要动画的媒体上设置，起始值应为补间的起点；静态分级不设置。然后在已注册的时间线上动画它：",
     "`--hf-color-grading-intensity` 缩放主校正、色轮、曲线、选区和 LUT。它不是细节和特效系列（如颗粒、半调、辉光、磁带或 CRT）的主控。应动画具体的已暴露属性，并先验证它确实在变化，再依赖它。"
    ],
    "codeBlocks": [
     {
      "code": "--hf-color-grading-ascii\n--hf-color-grading-bloom\n--hf-color-grading-blur\n--hf-color-grading-dither\n--hf-color-grading-exposure\n--hf-color-grading-intensity\n--hf-color-grading-kuwahara\n--hf-color-grading-pixelate\n--hf-color-grading-lut-intensity",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "tl.to(\n  \"#plate\",\n  {\n    \"--hf-color-grading-pixelate\": 0.5,\n    duration: 3,\n    ease: \"power2.inOut\",\n  },\n  0.3,\n);",
      "file": "JS THEME={NULL}"
     }
    ]
   },
   {
    "h": "把分级限制到画面的部分区域",
    "p": "",
    "paras": [
     "分级按像素值选区，而不是按位置。要处理某个区域，请把它隔离为独立的媒体层：",
     "| 结果 | 层栈 |",
     "| - | - |",
     "| 只给主体分级 | 干净原版底板，然后是已分级的主体抠像 |",
     "| 只给背景分级 | 已分级原版底板，然后是干净主体抠像 |",
     "| 给主体中的一个区域分级 | 干净抠像，然后是裁剪到该区域的第二个已分级抠像 | 把原始片段用作背景底板。移除主体后的底板会在羽化抠像下方留下一个空洞，并可能产生暗边。固定 `clip-path` 只在主体几乎不动时有效；真实运动需要使用 HyperFrames 之外产生的跟踪遮罩。"
    ],
    "codeBlocks": [
     {
      "code": "<video\n  src=\"media/room.mp4\"\n  muted\n  data-start=\"0\"\n  data-duration=\"4\"\n  data-track-index=\"2\"\n></video>\n<video\n  src=\"media/subject.webm\"\n  muted\n  data-start=\"0\"\n  data-duration=\"4\"\n  data-track-index=\"3\"\n></video>\n<video\n  src=\"media/subject.webm\"\n  muted\n  data-start=\"0\"\n  data-duration=\"4\"\n  data-track-index=\"4\"\n  style=\"clip-path: ellipse(9.8% 15.5% at 50.7% 14.5%)\"\n  data-color-grading='{\"intensity\":1,\"effects\":{\"pixelate\":0.5}}'\n></video>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
     "[HTML 架构参考](https://hyperframes.heygen.com/reference/html-schema.md)",
     "[变更日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "ref-html-schema": {
  "lede": "HyperFrames 使用普通 HTML 和 CSS 负责外观。一小集属性",
  "sections": [
   {
    "h": "最小合成",
    "p": "",
    "paras": [
     "root 是真实、显式定尺寸的盒子。其 `data-composition-id` 与时间线注册键匹配。"
    ],
    "codeBlocks": [
     {
      "code": "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=1920, height=1080\" />\n    <script src=\"https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js\"></script>\n    <style>\n      body { margin: 0; }\n      #root {\n        position: relative;\n        width: 1920px;\n        height: 1080px;\n        overflow: hidden;\n      }\n      .clip {\n        position: absolute;\n        inset: 0;\n        display: grid;\n        place-items: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div\n      id=\"root\"\n      data-composition-id=\"main\"\n      data-start=\"0\"\n      data-duration=\"5\"\n      data-width=\"1920\"\n      data-height=\"1080\"\n    >\n      <section\n        id=\"title-card\"\n        class=\"clip\"\n        data-start=\"0\"\n        data-duration=\"5\"\n        data-track-index=\"1\"\n      >\n        <h1 id=\"title\">Hello HyperFrames</h1>\n      </section>\n    </div>\n\n    <script>\n      window.__timelines = window.__timelines || {};\n      const timeline = gsap.timeline({ paused: true });\n      timeline.fromTo(\n        \"#title\",\n        { y: 48, opacity: 0 },\n        { y: 0, opacity: 1, duration: 0.6, ease: \"power3.out\" },\n        0.2,\n      );\n      window.__timelines.main = timeline;\n    </script>\n  </body>\n</html>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "合成 root",
    "p": "",
    "paras": [
     "| 属性 | 必需 | 含义 |",
     "| - | - | - |",
     "| `data-composition-id` | 是 | 唯一合成 ID |",
     "| `data-start=\"0\"` | 顶层 root 必需 | 合成开始处 |",
     "| `data-width` 和 `data-height` | 是 | 作者指定的帧尺寸（像素） |",
     "| `data-duration` | 通常 | 总渲染时长（秒） |",
     "| `data-no-timeline` | 仅无时间线合成 | 告知运行时不要等待时间线。没有它，从不注册时间线的合成在每次渲染时仍会等待 `player-ready-timeout`（默认 45 秒）；`hyperframes lint` 将其报告为 `missing_data_no_timeline` |",
     "显式的 root `data-duration` 即渲染长度。编译器在合成脚本运行前读取它， 因此脚本或变量覆盖不能在同次渲染中改变该值。",
     "仅当 HyperFrames 能从已注册动画运行时或定时媒体推断出有限时长时，root 才能省略 `data-duration`。Three.js、 无界动画和无时间线合成需要显式时长。"
    ],
    "codeBlocks": []
   },
   {
    "h": "定时剪辑",
    "p": "",
    "paras": [
     "| 属性 | 必需 | 含义 |",
     "| - | - | - |",
     "| `id` | 是 | 用于时序、编辑和动画的稳定标识 |",
     "| `data-start` | 是 | 以秒为单位的开始，或相对时序表达式 |",
     "| `data-duration` | DOM 和嵌套合成剪辑必需；图片可选（默认 3 秒），视频和音频（源长度） | 可见槽位长度（秒） |",
     "| `data-track-index` | 否 | 浏览器编辑器时间线轨道，仅显示。渲染永不读取它，它也不防止重叠 |",
     "| `class=\"clip\"` | 建议用于手写定时 DOM 和图片元素 | 布局和工具约定。可见性以 `data-start` 为键，但共享的 `.clip` 规则提供全帧盒子 | `data-track-index` 不控制绘制顺序。请使用 CSS `z-index` 做前后分层。同一轨道上的两个剪辑可以时间重叠；",
     "该轨道只是浏览器编辑器的显示行，不是调度约束。",
     "负的 `z-index` 值是有效的 CSS，但不透明祖先背景可能在父级未创建层叠上下文时遮住剪辑。请在该父级上添加 `isolation: isolate`，使负图层位于父级背景之上、前景兄弟之下。示例见 [前后对照](https://hyperframes.heygen.com/concepts/data-attributes.md#keep-negative-layers-inside-their-parent)。",
     "`negative_z_index` lint 警告对隔离图层也会触发，因为它检查 CSS 文本而非计算后的层叠上下文。",
     "视频可见性按媒体管理，不需要 `class=\"clip\"`。",
     "音频没有视觉生命周期。"
    ],
    "codeBlocks": []
   },
   {
    "h": "媒体",
    "p": "",
    "paras": [
     "| 属性 | 适用对象 | 含义 |",
     "| - | - | - |",
     "| `data-media-start` / `data-playback-start` | 视频、音频、嵌套合成 | 源文件内的偏移，用于裁剪和拆分。两组读取者不一致，因此正确名称取决于元素。**只读 `data-media-start`：**时序编译器、HTML 解析器、`hyperframes validate`（只检查 `<audio>`）和引擎音频混合器（送给 ffmpeg `-ss`）。**先读 `data-playback-start`，回退到 `data-media-start`：**运行时播放器、浏览器编辑器（也会写入它）和 `hyperframes snapshot`。因为音频混合器只读 `data-media-start`，仅用 `data-playback-start` 编写的 `<video>` 会渲染出裁剪画面配未裁音频。请按类型选名：**`<video>` / `<audio>` → `data-media-start`**；**嵌套合成 → `data-playback-start`** —— 合成宿主只由播放入点优先的读取者检查（仅读媒体入点的都是 `<video>`/`<audio>` 范围）。`data-media-start` 在那里仍可作回退，但 `data-playback-start` 是浏览器编辑器为新合成宿主写入并归一化的规范名，因此编辑重写它之前另一个名称有效（它是[子时间线偏移](https://hyperframes.heygen.com/concepts/compositions.md)）。 |",
     "| `data-playback-rate` | 视频、音频、嵌套合成 | 播放倍率，`0.1` 到 `10`。`data-automation` 中的 `rate` 轨道可覆盖；见[变速](https://hyperframes.heygen.com/reference/speed-ramps.md) |",
     "| `data-volume` | 视频和音频 | 静态增益。`1` 为 0 dB，`0` 为静音，大于 `1` 的值最多提升至 `3.98`（+12 dB）。与任何音量轨道相乘，在剪辑上先于剪辑音频特效应用 |",
     "| `data-fade-in` / `data-fade-out` | 视频和音频 | 剪辑边缘淡入淡出（秒）：前 `data-fade-in` 秒内增益 0 → 1，后 `data-fade-out` 秒内 1 → 0。线性，锚定剪辑自身边缘（淡出跟随后裁），且在 `data-volume` 和任何音量轨道之上叠乘。两者合计超过剪辑时长时会被缩放以在内侧相遇。浏览器编辑器可拖音频剪辑顶角的圆点，或在检查器的 Fade 行输入 |",
     "| `data-has-audio=\"true\"` | 视频 | 声明该视频贡献音频 | 视频和音频的内在时长已知、且应播放完剩余源时，可省略 `data-duration`。",
     "不要命令式调用 `play()`、`pause()` 或设置 `currentTime`。",
     "HyperFrames 拥有媒体播放和定位。带声的 `<video>` 声明 `data-has-audio=\"true\"` 且不静音。静音素材用 `muted`。每个定时 `<video>` 必须二选一（lint `video_missing_muted`）。",
     "媒体可位于嵌套合成标记内部。保持元素 ID 在组装项目中唯一，因为渲染时帧注入以这些 ID 为目标。"
    ],
    "codeBlocks": [
     {
      "code": "<video\n  id=\"demo\"\n  src=\"./assets/demo.mp4\"\n  data-start=\"0\"\n  data-duration=\"8\"\n  data-track-index=\"0\"\n  muted\n  playsinline\n></video>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "色彩校正与媒体特效",
    "p": "",
    "paras": [
     "浏览器编辑器和 CLI 将色彩校正、调色、完成控件、LUT 和 媒体特效存于图片或视频的 `data-color-grading` 上： 当前特效家族包括 essentials、retro 和 glitch、print 和 艺术处理。运行 `npx hyperframes media-treatment --capabilities --json` 获取当前",
     "机器可读入口，而不是硬编码旧特效列表。",
     "调色管线适用于真实 `<img>` 和 `<video>` 元素。它 不校完整 HTML 场景。常规编写使用浏览器编辑器或 [`media-treatment`](https://hyperframes.heygen.com/packages/cli#media-treatment)；工作流和当前 SDR/HDR 边界见",
     "[色彩校正](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color) 与 [媒体特效](https://hyperframes.heygen.com/guides/media-effects.md)。"
    ],
    "codeBlocks": [
     {
      "code": "<video\n  id=\"demo\"\n  src=\"./assets/demo.mp4\"\n  data-color-grading='{\n    \"preset\": \"clean-studio\",\n    \"intensity\": 0.8,\n    \"adjust\": { \"highlights\": -0.08, \"shadows\": 0.06 },\n    \"details\": { \"grain\": 0.12, \"vignette\": 0.08 },\n    \"effects\": { \"bloom\": 0.12 },\n    \"colorSpace\": \"rec709\"\n  }'\n></video>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "相对时序",
    "p": "",
    "paras": [
     "非数字 `data-start` 引用同一合成中另一个剪辑的末尾： 支持形式为 `clip-id`、`clip-id + seconds` 和 `clip-id - seconds`。引用保留在同一合成内，必须解析为 已知时长，且不能成环。刻意重叠放在不同轨道。"
    ],
    "codeBlocks": [
     {
      "code": "<video\n  id=\"intro\"\n  data-start=\"0\"\n  data-duration=\"4\"\n  data-track-index=\"0\"\n  src=\"./intro.mp4\"\n  muted\n  playsinline\n></video>\n\n<section\n  id=\"result\"\n  class=\"clip\"\n  data-start=\"intro + 0.5\"\n  data-duration=\"3\"\n  data-track-index=\"0\"\n>\n  Result\n</section>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "嵌套合成",
    "p": "",
    "paras": [
     "宿主声明固定时间线窗口： 宿主 `data-composition-id` 必须与源文件内部 ID 及其时间线注册键匹配。宿主 `data-duration` 控制嵌套合成可见时长。更短的内部时间线保持其最终状态； 更短的宿主时长切断槽位。",
     "嵌套合成文件通过 `<template>` 传输其实时标记。该合成需要的样式和脚本必须写在模板内部： HyperFrames 独立地定位嵌套时间线。不要手动将子时间线添加到父级 GSAP 时间线。"
    ],
    "codeBlocks": [
     {
      "code": "<div\n  id=\"pricing-scene\"\n  data-composition-id=\"pricing\"\n  data-composition-src=\"./compositions/pricing.html\"\n  data-start=\"4\"\n  data-duration=\"6\"\n  data-track-index=\"1\"\n  data-width=\"1920\"\n  data-height=\"1080\"\n></div>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "<template>\n  <style>\n    #root {\n      position: absolute;\n      inset: 0;\n    }\n  </style>\n\n  <div\n    id=\"root\"\n    data-composition-id=\"pricing\"\n    data-width=\"1920\"\n    data-height=\"1080\"\n  >\n    <!-- scene content -->\n  </div>\n\n  <script>\n    window.__timelines = window.__timelines || {};\n    const timeline = gsap.timeline({ paused: true });\n    // scene animation\n    window.__timelines.pricing = timeline;\n  </script>\n</template>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "变量",
    "p": "",
    "paras": [
     "用 `data-composition-variables` 声明模式，再经渲染或嵌套宿主传入值： 直接绑定使用 `data-var-text`、`data-var-src` 或 CSS `var(--variableId)`。值影响逻辑时使用 `getVariables()`。"
    ],
    "codeBlocks": [
     {
      "code": "<html\n  data-composition-variables='[\n    {\"id\":\"title\",\"type\":\"string\",\"label\":\"Title\",\"default\":\"Hello\"}\n  ]'\n>",
      "file": "HTML THEME={NULL}"
     },
     {
      "code": "<div\n  data-composition-id=\"pricing\"\n  data-composition-src=\"./compositions/pricing.html\"\n  data-variable-values='{\"title\":\"Built for teams\"}'\n  data-start=\"0\"\n  data-duration=\"6\"\n  data-track-index=\"1\"\n  data-width=\"1920\"\n  data-height=\"1080\"\n></div>",
      "file": "HTML THEME={NULL}"
     }
    ]
   },
   {
    "h": "动画约定",
    "p": "",
    "paras": [
     "使用 GSAP 的合成必须： HyperFrames 控制定位。合成代码描述给定时刻视觉状态的样子。",
     "异步设置，如[测量文字前先加载字体](https://hyperframes.heygen.com/guides/gsap-animation.md#load-fonts-before-measuring-text)，受支持。请在回调末尾、其补间加完后注册完成的时间线。在异步构建完成前不要注册空时间线。",
     "每个带 `data-composition-id` 的元素都参与时间线就绪判定。",
     "对于静态嵌套段，请改用普通 `id`，或添加 `data-no-timeline` 声明不会注册时间线。否则渲染器会等待该元素时间线长达播放器就绪超时。`hyperframes lint` 将没有匹配时间线注册也没有 显式退出的裸合成宿主报告为 `missing_data_no_timeline`。"
    ],
    "codeBlocks": [],
    "bullets": [
     "用 `{ paused: true }` 创建一个有限时间线；",
     "在加完其补间后将其注册到 `window.__timelines`；",
     "使用与 `data-composition-id` 相同的键；",
     "避免墙钟状态、未播种随机数和无限重复。"
    ]
   },
   {
    "h": "验证",
    "p": "",
    "paras": [
     "`lint` 检查静态约定。`check` 在浏览器中打开项目，检查运行时行为、布局、运动和对比度。最终视觉门控请看代表性快照和成品渲染。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes lint\nnpx hyperframes check",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
     "[使用数据属性的时间元素](https://hyperframes.heygen.com/concepts/data-attributes.md)",
     "[合成](https://hyperframes.heygen.com/sdk/reference/composition.md)"
    ]
   }
  ]
 },
 "ref-lint-rules": {
  "lede": "`hyperframes lint`、`hyperframes check` 和 `@hyperframes/lint` 包以稳定代码报告发现。本页列出全部代码、严重度和修复。代码直接来自 `packages/lint/src/rules/` 规则集加上项目级探测（项目 lint 的一部分）。",
  "sections": [
   {
    "h": "结构与时间线",
    "p": "",
    "paras": [
     "来源：`packages/lint/src/rules/structure.ts`。",
     "标为 **Warning or error** 的五码在 CLI lint 项目时为警告，在浏览器编辑器 lint 它正在编辑的文件时为错误。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`nested_structure_needs_subcomposition`",
    "p": "",
    "paras": [
     "**Warning or error。** 顶层时间线元素含另一嵌套结构，而非子合成挂载。时间线每顶层元素一列，根合成只由子合成构建。",
     "**修复：** 把元素及其内容移入子合成文件，用 `data-composition-src` 挂载。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`timeline_element_missing_timing`",
    "p": "",
    "paras": [
     "**Warning or error。** 时间线元素无 `data-duration`，时间线画不出它止处。",
     "**修复：** 给元素加 `data-duration`（秒）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`caption_track_kind_missing`",
    "p": "",
    "paras": [
     "**Warning or error。** 元素像字幕行却未标记，时间线无法把它归到字幕轨道。",
     "**修复：** 给元素加 `data-track-kind=\"captions\"`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`multiple_caption_tracks`",
    "p": "",
    "paras": [
     "**Warning or error。** 字幕散在多条时间线轨道，而非一条字幕列。",
     "**修复：** 给每字幕元素相同 `data-track-index`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`multiple_scene_templates`",
    "p": "",
    "paras": [
     "**Warning。** 文件模板内含多个持合成根的 `<template>`，而外面无合成根。只有第一个渲染；消息点名每模板。",
     "**修复：** 每文件留一合成根，或把其他场景移入各自文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`clip_ends_past_root_duration`",
    "p": "",
    "paras": [
     "**Warning。** 片段跑过根合成 `data-duration`，在预览、海报和渲染中被截。",
     "**修复：** 延长根 `data-duration`，或让片段在其前/处止。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`nested_clip_never_visible`",
    "p": "",
    "paras": [
     "**Warning or error。** 定时片段坐在另一定时元素内，其时间窗与其不重叠，故永不出现。嵌套片段 `data-start` 自合成起点起，非自周围元素。子合成文件同样跑。",
     "**修复：** 给片段在合成时间下父窗内起 `data-start`，或把它移出父级。"
    ],
    "codeBlocks": []
   },
   {
    "h": "合成契约",
    "p": "",
    "paras": [
     "来源：`packages/lint/src/rules/composition.ts`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`invalid_composition_variables_declaration`",
    "p": "",
    "paras": [
     "**Error。** `data-composition-variables` 非有效 JSON 或非变量声明数组。",
     "**修复：** 提供 JSON 数组，如 `data-composition-variables='[{\"id\":\"title\",\"type\":\"string\",\"label\":\"Title\",\"default\":\"Hello\"}]'`——属性单引号、JSON 双引号。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`invalid_variable_values_json`",
    "p": "",
    "paras": [
     "**Error。** `data-variable-values` 非有效 JSON。",
     "**修复：** 属性单引、JSON 键值双引，如 `data-variable-values='{\"title\":\"Hello\"}'`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`unknown_variable_binding`",
    "p": "",
    "paras": [
     "**Warning。** 元素绑了 `data-composition-variables` 未声明的变量，绑定静默保持编著 fallback。",
     "**修复：** 在合成根（`<html>`，或模板/片段合成的 `data-composition-id` 根）声明变量。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`unloadable_media_variable_default`",
    "p": "",
    "paras": [
     "**Error。** 变量默认是运行时拒装的 URL，绑定元素渲染编著 fallback src，而渲染仍以 0 退出。",
     "**修复：** 用相对路径、`http(s)`、`blob:` 或 `data:image/*` URI。把文件拷入项目并相对引用。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`deprecated_data_end`",
    "p": "",
    "paras": [
     "**Error。** 旧 `data-end` 无 `data-duration`，或邻旁 `data-duration` 与旧 `data-end` 不一致。",
     "**修复：** 用 `data-duration` 替换 `data-end`。编译器从 `data-duration` 自动生成 `data-end`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`deprecated_data_layer`",
    "p": "",
    "paras": [
     "**Error。** 用了旧 `data-layer` 属性。",
     "**修复：** 用 `data-track-index` 替换它——浏览器编辑器和 linter 读的规范名。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`duplicate_composition_id`",
    "p": "",
    "paras": [
     "**Error。** 同文件多元素同 `data-composition-id`——常是 `<meta>` 标签与根 `<div>` 带同 id。",
     "**修复：** `data-composition-id` 只留一处：合成根。从元数据或重复主机移除它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`invalid_parent_traversal_in_asset_path`",
    "p": "",
    "paras": [
     "**Error。** 资产路径用 `../` 上跳出项目根；渲染和预览钳制或错解。",
     "**修复：** 路径指项目内文件——自 `compositions/scene.html`，`../assets/x.png` 和 `assets/x.png` 都到项目 `assets` 文件夹。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`composition_exceeds_inspection_viewport_cap`",
    "p": "",
    "paras": [
     "**Warning。** 合成大于 4096px 视口封顶，`check`、`validate`、`snapshot`、`compare` 和布局审计都钳到它。`render` 不受影响，但干净检查结果不再覆盖整画布。",
     "**修复：** 输出需要时保留创作尺寸，从渲染而非检查命令验证封顶之外的区域。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`composition_file_too_large`",
    "p": "",
    "paras": [
     "**Warning。** HTML 合成文件大到难读、难迭代、难 diff。",
     "**修复：** 拆子合成并用 `data-composition-src` 从父挂载。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`composition_heavy_overlay_count_high`",
    "p": "",
    "paras": [
     "**Warning。** 多元素带重叠 CSS（`filter: blur`、`radial-gradient`、`clip-path`），可封捕获性能——含隐藏者。",
     "**修复：** 拆合成并拼接片段，使每捕获只见小撮重叠；移除本不可见的叠加。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`missing_data_no_timeline`",
    "p": "",
    "paras": [
     "**Warning。** `data-composition-id` 元素（或根）既无匹配 `window.__timelines` 注册，又无 `data-no-timeline`，producer 轮询至多 45 秒才超时。",
     "**修复：** 注册时间线、用 `data-composition-src` 挂合成，或对真静态段加 `data-no-timeline`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`negative_z_index`",
    "p": "",
    "paras": [
     "**Warning。** 低于 0 的 `z-index` 把元素画在最近层叠上下文内容后；无层叠祖先时即合成根，不透明背景处整藏元素。",
     "**修复：** 给父级层叠上下文（`isolation: isolate` 最便宜；`transform`、`filter`、小于 1 的 `opacity`、`contain: paint`、`will-change` 亦可）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`requestanimationframe_in_composition`",
    "p": "",
    "paras": [
     "**Error。** `requestAnimationFrame` 跑墙钟，非 GSAP 时间线，与帧捕获失同步，渲染可闪或丢帧。",
     "**修复：** 改用 GSAP tween 或时间线 `onUpdate` 回调做动画逻辑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`root_composition_duration_derived`",
    "p": "",
    "paras": [
     "**Warning。** 根无 `data-duration` 也无 GSAP 时间线，长度自片段推断。",
     "**修复：** 在根元素加 `data-duration=\"<seconds>\"` 自定长度。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`root_composition_missing_duration_source`",
    "p": "",
    "paras": [
     "**Error。** 根无 `data-duration`、无 GSAP 时间线，也无 CSS、WAAPI、Lottie 或 Three.js 动画可推时长，渲染引擎定不了捕获时长而失败。",
     "**修复：** 给根加 `data-duration=\"<seconds>\"`，或加已暂停的 GSAP 时间线注册在 `window.__timelines` 上。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`root_composition_missing_html_wrapper`",
    "p": "",
    "paras": [
     "**Error。** 携 `data-composition-id` 的 `index.html` 是裸片段，无 `<!DOCTYPE html>`、`<html>` 或 `<body>`，浏览器 quirks-mode 它，预览服务错服它。",
     "**修复：** 用 `<!DOCTYPE html><html><head><meta charset=\"UTF-8\"></head><body>...</body></html>` 包合成。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`root_zoom_rescales_a_fixed_canvas`",
    "p": "",
    "paras": [
     "**Error。** 画布上 CSS `zoom` 在捕获框内缩放合成图，而框不随它缩放——框尺寸按根 `data-width`、`data-height` 以布局像素定。",
     "**修复：** 按真尺寸编著：设 `data-width`、`data-height`（及根宽高），去掉画布级 `zoom`。要不改布局缩放输出，传 `--output-resolution` 给渲染。后代上 `zoom` 可。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`split_data_attribute_selector`",
    "p": "",
    "paras": [
     "**Error。** CSS 选择器在一 `[...]` 块合两属性，浏览器拒之——GSAP 时间线或 `querySelector` 调用注册前失败。",
     "**修复：** 分开属性选择器：`[data-composition-id=\"x\"][data-track-index=\"1\"]`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`standalone_composition_wrapped_in_template`",
    "p": "",
    "paras": [
     "**Error。** 根 `index.html` 包在 `<template>` 标签里，运行时播不了——只有 `data-composition-src` 加载的子合成用 `<template>` 包装。",
     "**修复：** 去掉 `<template>` 包装，按真文档服合成。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`subcomposition_blanks_before_host`",
    "p": "",
    "paras": [
     "**Warning。** 挂载的子合成在其主机窗内部分空白，因自身 `data-duration` 小于其槽。",
     "**修复：** 设子合成 `data-duration` 填满主机窗，或用另一片段盖缺。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`subcomposition_linked_style_names_root_id`",
    "p": "",
    "paras": [
     "**Warning。** 子合成链接的样式表含 `#<root id>` 规则，即子合成根 id。合成编译时根并入主机，该选择子无物匹配。同规则在内联 `<style>` 会改写并生效。",
     "**修复：** 把规则移入 `<template>` 内的 `<style>`，或在链接文件里选根的子元素而非根自身。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`subcomposition_root_styled_by_class`",
    "p": "",
    "paras": [
     "**Error。** 子合成根元素经 class 选择器定样式，但渲染时每规则域化到 `[data-composition-id=...]`，class 键样式停用。",
     "**修复：** 根给 `id=\"root\"`，用 `#root` 加纯后代选择器定样式。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`subcomposition_style_outside_template`",
    "p": "",
    "paras": [
     "**Warning。** 有 `<template>` 的子合成文件有 `<head>` 外的 `<style>`，或 `<link rel=\"stylesheet\">` 在模板外。挂载只留模板内容和 `<head>` 中样式链接，所以那些样式预览、快照、渲染都不应用。",
     "**修复：** 移入 `<template>`，紧邻合成根。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`template_literal_selector`",
    "p": "",
    "paras": [
     "**Error。** `querySelector` 收到模板字面变量，打包器 CSS 解析崩。",
     "**修复：** 改用硬编码字符串选择器，不插值。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`timed_element_missing_clip_class`",
    "p": "",
    "paras": [
     "**Warning。** 元素有时序属性却无 `class=\"clip\"`。运行时仍计时它，但浏览器编辑器和片段归属规则用 `.clip` 认它，故更难编辑和 lint。",
     "**修复：** 给元素加 `class=\"clip\"`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`timeline_track_too_dense`",
    "p": "",
    "paras": [
     "**Warning。** 同文件一轨道带超 3 定时元素（音频、视频、字幕 cue 和子合成挂载不计），难读、难迭代、难 diff。",
     "**修复：** 拆元素子合成并用 `data-composition-src` 从父挂。"
    ],
    "codeBlocks": []
   },
   {
    "h": "文档、CSS 和脚本",
    "p": "",
    "paras": [
     "来源：`packages/lint/src/rules/core.ts`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`host_missing_composition_id`",
    "p": "",
    "paras": [
     "**Error。** `data-composition-src` 主机元素无自身 `data-composition-id`。",
     "**修复：** 给每个 `data-composition-src` 主机元素设 `data-composition-id`。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`css_parse_error`",
    "p": "",
    "paras": [
     "**Error。** `<style>` 块非有效 CSS 解析失败。",
     "**修复：** 修报出的 CSS 语法错。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`css_transition_used`",
    "p": "",
    "paras": [
     "**Warning。** CSS `transition` 跑浏览器时钟，不能跨渲染工作进程确定性定位。`transition: none` 和全零时长允许。",
     "**修复：** 状态切换保留 class 或属性切换，视觉变化放暂停的 GSAP 时间线。"
    ],
    "codeBlocks": []
   }
  ]
 },
 "ref-speed-ramps": {
  "lede": "速度坡面改变 `<video>` 或 `<audio>` 片段播放时的速度：慢入节拍、快出节拍。它是 [`data-automation`](https://hyperframes.heygen.com/reference/audio-effects#the-four-attributes) 中的 `rate` 轨道，与承载音量包络的同一属性相同。",
  "sections": [
   {
    "h": "轨道",
    "p": "",
    "paras": [
     "| 字段 | 含义 |",
     "| - | - |",
     "| `target` | `\"rate\"` |",
     "| `points[].t` | 从片段开始起的秒数，不是合成开始起的秒数 |",
     "| `points[].v` | 速度倍率。`1` 为正常，`2` 为两倍速。钳制在 `0.1` 到 `10` 之间 |",
     "| `points[].curve` | 可选，`-1` 到 `1`。弯曲从该点出发的线段 | 速度在各点之间按对数刻度移动，因此从 `0.5` 到 `2` 会在中点经过 `1`。轨道优先于同一元素上的常量 `data-playback-rate`。没有轨道时使用该常量。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在各处保持一致",
    "p": "",
    "paras": [
     "每个时刻显示的源帧来自同一个函数 `sourceTimeAt`，预览和渲染器都使用它，因此渲染显示的正是预览显示过的帧。给片段设置 `data-duration` 来固定它占用时间线的长度；不设置则长度由源片和速度决定。",
     "如果浏览器探测到已有片段上有速率轨道，导出的场景裁剪会同时保留坡面位置和源媒体的入点。",
     "音调保持不变。预览保留浏览器的默认变调修正。渲染会在短恒速切片中对音频做时间拉伸（四分之一秒，时长超过一分钟的片段切片更粗），近似复现曲线并保持音调，因此声音近似跟随坡面，而不是精确跟随。"
    ],
    "codeBlocks": []
   },
   {
    "h": "预设",
    "p": "",
    "paras": [
     "浏览器编辑器的**速度预设**菜单会在片段上绘制现成的曲线：Montage、Hero、Bullet、Jump cut、Flash in 和 Flash out。智能体可以手工编写同样的点。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在浏览器编辑器中编辑",
    "p": "",
    "paras": [
     "选择片段并打开其媒体面板。**速度**滑块设置常量速率。旁边的 **A** 开关自动控制速度，会在时间线上显示速率轨道，编辑方式与音量轨道相同。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
     "[Beat Freeze Cut](https://hyperframes.heygen.com/catalog/blocks/beat-freeze-cut.md)",
     "[Whip Pan Cut](https://hyperframes.heygen.com/catalog/components/whip-pan-cut.md)"
    ]
   }
  ]
 },
 "sdk-adapters": {
  "lede": "SDK 通过两个可注入接口 `PersistAdapter` 和 `PreviewAdapter`，把编辑会话与存储和预览界面解耦。两者都附带可传给 `openComposition()` 的具体工厂函数。你也可以直接实现任一接口，用于自定义存储后端（S3、IndexedDB、HTTP）或自定义预览界面。",
  "sections": [
   {
    "h": "PersistAdapter",
    "p": "",
    "paras": [
     "可注入的存储适配器。把 SDK 与底层持久化机制解耦，使同样的会话代码可在测试（内存）、本地开发（文件系统）和生产（云存储）中运行。"
    ],
    "codeBlocks": [
     {
      "code": "import type { PersistAdapter } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "接口",
    "p": "",
    "paras": [
     "**read** `(path: string) =\\> Promise\\<string | undefined\\>` 返回 `path` 的存储内容；从未写入过的路径返回 `undefined`。缺失路径从不抛错。",
     "**write** `(path: string, content: string) =\\> Promise\\<void\\>` 把 `content` 持久化到 `path`。幂等——相同 path 的第二次调用会覆盖先前的值。写入失败不得以抛异常传播；应触发 `persist:error`。",
     "**flush** `() =\\> Promise\\<void\\>` 强制排队或进行中的写入在 resolve 之前提交。在进程退出或导航离开前调用，以防数据丢失。",
     "**listVersions** `(path: string) =\\> Promise\\<PersistVersionEntry[]\\>` 按新到旧顺序返回 `path` 的版本历史。不存在版本时返回空数组。请见下方 `PersistVersionEntry`。",
     "**loadFrom** `(path: string, versionKey: string) =\\> Promise\\<string | undefined\\>` 按 `versionKey` 标识的特定版本返回 HTML 内容。键不存在时返回 `undefined`。",
     "**on** `(event: \"persist:error\", handler) =\\> () =\\> void` 订阅写入失败。返回注销函数。适配器必须发出此事件——而不是抛错——当写入失败时，确保即使存储暂时不可用，会话也能继续运行。"
    ],
    "codeBlocks": [
     {
      "code": "interface PersistAdapter {\n  read(path: string): Promise<string | undefined>;\n  write(path: string, content: string): Promise<void>;\n  flush(): Promise<void>;\n  listVersions(path: string): Promise<PersistVersionEntry[]>;\n  loadFrom(path: string, versionKey: string): Promise<string | undefined>;\n  on(event: \"persist:error\", handler: (event: PersistErrorEvent) => void): () => void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PersistVersionEntry",
    "p": "",
    "paras": [
     "`key` 由适配器定义，对调用方不透明——直接传给 `loadFrom()`。文件系统适配器把毫秒和计数器编码进键；内存适配器使用递增的 `\"v1\"`、`\"v2\"`……方案。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface PersistVersionEntry {\n  /** Opaque key identifying this version (adapter-defined format). */\n  key: string;\n  /** Full HTML content — may be omitted by adapters that load content lazily via loadFrom(). */\n  content?: string;\n  timestamp?: number;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PreviewAdapter",
    "p": "",
    "paras": [
     "可注入的预览界面适配器。把 SDK 与宿主的渲染层解耦。SDK **不在** 60fps 草稿循环中：你的指针移动处理程序以 60fps 直接在适配器上调用 `applyDraft()`，SDK 只在手势结束、触发 `commitPreview()` 派生并派发结果 op 时参与一次。"
    ],
    "codeBlocks": [
     {
      "code": "import type { PreviewAdapter } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "接口",
    "p": "",
    "paras": [
     "**elementAtPoint** `(x, y, opts?) =\\> ElementAtPointResult | null` 在组合坐标 `(x, y)` 处的同步点击测试。返回该点下最近的 `[data-hf-id]` 元素；透明点击（组合根、不透明度 0 的元素，或无）时返回 `null`。需要同源 iframe——跨源访问会抛 DOMException。`atTime` 选项反映当前播放头的 GSAP 状态；不支持寻址到推测时间。",
     "**isProvablyEmptyAt** `(x, y, opts?) =\\> boolean` 可选。`(x, y)` 是否可证明无墨迹——是否可以安全地让点击穿透到下方？在透明组合叠加于其他内容之上、吞掉点击之前，宿主必须回答的问题是：用户指向的是**画面**，还是空隙？仅靠几何无法判断——组合大多是覆盖整帧每一像素却不绘制任何内容的全出血包装器 `<div>`。",
     "**只有组合可读且该处无绘制时为真。** 有墨迹、文档仍在加载或不可读、适配器未实现该方法（`preview.isProvablyEmptyAt?.(x, y)` → `undefined` → 假值），都会返回假值。这种极性是故意的：它把把点击穿透的举证责任放在“必须证明”上，因此失败方式都会让组合保持可点击，而不是从光标下消失。显然的调用点按构造是安全的：",
     "墨迹是计算样式测试——背景颜色、背景图像、可见边框、元素自身文本或内在媒体——仅有一个例外：`<img>`（以及 `<picture>` 中的 `<img>`）按逐像素 alpha 判断，因此透明 PNG 仅在其像素处绘制。像素验证的命中不受 `fullBleedFraction` 折扣：盒子面积不是墨迹面积，因此全帧透明覆盖层在实际不透明处仍可点击。",
     "**已知多计情况**（报告不存在的墨迹，使点击选中组合）：本身大多透明的 `background-image` 会在其整个盒子上读取为绘制；`<video>`、`<svg>` 和 `<canvas>` 无条件不透明；像素不可读的图像——无 CORS 的跨源、仍在加载、已旋转，或超出采样器尺寸预算——回退为不透明。",
     "**已知漏计情况**（漏掉存在的墨迹，使点击可能穿透）：`::before` / `::after` 生成内容、`box-shadow`、`outline` 和 `text-decoration` 未经测试，且前三者在边框盒之外绘制，因此该元素甚至不是候选。SDK 从未标记的内容在默认 `addressableOnly` 下不可见——见下方。",
     "遍历是**几何**的，不是基于 `elementsFromPoint` 的，且按设计对 `pointer-events` 和 `z-index` 盲目：带有 `pointer-events: none` 的装饰性覆盖层仍会绘制，z 堆栈查询会报告可见画面上方无墨迹。",
     "**applyDraft** `(id: string, props: DraftProps) =\\> void` 在拖拽期间以 60fps 可视平移预览元素：把元素的 CSS `translate` 设为拖拽前值与累积增量叠加。对 GSAP 动画元素有效（GSAP 首次解析后设置的 `translate` 会与动画变换叠加）。**此处不调用 SDK**——这是指针移动处理程序对预览界面的直接写入。拖拽中途切换 `id` 会先还原前一个元素的草稿。",
     "**commitPreview** `() =\\> void` 在指针释放时调用一次。读取累积的草稿增量，派生 `moveElement` op 并派发到 SDK，发出补丁事件，并把已提交的位置镜像到实时元素上（因此不重载也能保持）。这是 SDK 唯一感知到拖拽的时刻。若派发抛错，草稿 translate 会被还原，错误继续向上抛。",
     "**cancelPreview** `() =\\> void` 恢复元素的拖拽前 `translate`，不派发任何 op。模型从不改变。在 `Escape` 键按下或拖拽中止时调用。",
     "**select** `(ids: string[], opts?: \\{ additive?: boolean \\}) =\\> void` 设置预览选择，并在会话上触发 `selectionchange`。传入 `{ additive: true }` 可把 `ids` 合并到当前选择，而不是替换。",
     "**on** `(event: \"selection\", handler: (ids: string[]) =\\> void) =\\> () =\\> void` 当预览宿主改变选择时触发（例如用户点击元素）。返回注销函数。在当前版本中，调用方改为监听会话自身的 `selectionchange` 事件——此钩子将在后续阶段接通。",
     "**attachSync** `(comp: Composition) =\\> () =\\> void` 把组合的编辑镜像到适配器自身的实时文档：先对组合的当前覆盖集做一次立即全量同步，然后订阅并重放每个未来的 `patch` 事件——撤销/重做亦然，因为两者都经由同一事件以正/逆补丁触发。当已挂载时再次调用 `attachSync`，会先注销之前的订阅。全覆盖同步每次 iframe `load` 也会重跑，因此与 attach 竞争的 `srcdoc` 导航（或加载窗口期间提交的丢补丁）会在新文档到达后收敛。返回注销函数。",
     "脚本标签补丁（`/script/gsap` 及任何未来的 `/script/*` 路径）从不镜像——重写实时 `<script>` 标签内容不会重新执行它，重新运行 GSAP 初始化会与运行中的时间轴状态冲突。其他补丁种类（样式、文本、属性、计时、保持、元素添加/移除、样式表、变量值、变量声明）原样镜像。"
    ],
    "codeBlocks": [
     {
      "code": "interface PreviewAdapter {\n  elementAtPoint(x: number, y: number, opts?: { atTime?: number }): ElementAtPointResult | null;\n  isProvablyEmptyAt?(x: number, y: number, opts?: PaintQueryOptions): boolean;\n  applyDraft(id: string, props: DraftProps): void;\n  commitPreview(): void;\n  cancelPreview(): void;\n  select(ids: string[], opts?: { additive?: boolean }): void;\n  on(event: \"selection\", handler: (ids: string[]) => void): () => void;\n  attachSync(comp: Composition): () => void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "if (preview.isProvablyEmptyAt?.(x, y)) passThrough();",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const adapter = createIframePreviewAdapter(iframe, dispatch);\nconst comp = await openComposition(html, { preview: adapter });\nconst detach = adapter.attachSync(comp);\n\n// later, if the host tears down the preview:\ndetach();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ElementAtPointResult",
    "p": "",
    "paras": [
     "`id` 是元素的 `data-hf-id` 值；`tag` 是其小写标签名（例如 `\"div\"`、`\"img\"`）。"
    ],
    "codeBlocks": [
     {
      "code": "interface ElementAtPointResult {\n  id: string;\n  tag: string;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "DraftProps",
    "p": "",
    "paras": [
     "`dx` 和 `dy` 是组合像素中的累积拖拽增量。`width` 和 `height` 在接口中定义以便前向兼容，但尚未接通任何 op。"
    ],
    "codeBlocks": [
     {
      "code": "interface DraftProps {\n  dx?: number;\n  dy?: number;\n  width?: number;\n  height?: number;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PaintQueryOptions",
    "p": "",
    "paras": [
     "**fullBleedFraction** `number`（默认：0） 最小绘制盒覆盖至少此比例组合帧的命中读作背景而非墨迹。这是宿主策略，不是关于组合的事实：把“点击了覆盖整帧的层”视为“点击了背景”的编辑器传入 `0.9`，答案字面墨迹问题的调用方保持 `0`。嵌套子组合也携带 `data-composition-id`，因此参考帧是包含该点的最内层组合根。",
     "**addressableOnly** `boolean`（默认：true） 仅考虑模型可寻址元素（`[data-hf-id]`）。标记只在 `openComposition` 给定的文档上做一次，运行时之后创建或拉取的任何内容在默认遍历中不可见：分词文本的词和字符跨度（拆分还会清空被标记父级自身的文本节点，使父级也不再计数）、克隆节点，以及从 `data-composition-src` 挂载的整个子组合场景。因此动态排版和注册表挂载的下三分之一屏——两者都是典型的透明覆盖层内容——默认读作无墨迹。",
     "设为 `false` 可把遍历拓宽到所有元素，以更大的候选集为代价看到该内容。",
     "[!NOTE] `ElementAtPointResult` 和 `DraftProps` 是 `PreviewAdapter` 产生和消费的结构形状。它们**不**从 `@hyperframes/sdk` 桶中重新导出——请按这些形状实现，而不是导入它们。`PaintQueryOptions` **是**重新导出的，因为调用方传入它而非实现它。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface PaintQueryOptions {\n  fullBleedFraction?: number;\n  addressableOnly?: boolean;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "createMemoryAdapter",
    "p": "",
    "paras": [
     "返回由进程内 `Map` 支撑的 `PersistAdapter`。写入同步；`flush()` 为空操作。版本键为 `\"v1\"`、`\"v2\"`……，带完整内容存于内存。",
     "返回值还暴露 `injectFault(message)`——测试辅助，使**下一次** `write()` 调用触发带 `message` 的 `persist:error` 事件而不是提交。用于单元测试验证你的错误处理代码路径。",
     "[!NOTE] `createMemoryAdapter()` 最适合测试、演示和临时进程内会话。本地开发请使用 `createFsAdapter()`，使编辑在重启后存活。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "import { createMemoryAdapter } from \"@hyperframes/sdk\";\n\nfunction createMemoryAdapter(): PersistAdapter & { injectFault(message: string): void };",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const persist = createMemoryAdapter();\n\nconst comp = await openComposition(html, { persist });\ncomp.setText(\"hf-title\", \"Hello\");\nawait comp.flush();\n\nconst saved = await persist.read(\"composition.html\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "createFsAdapter",
    "p": "",
    "paras": [
     "**仅 Node.js。** 返回在根目录下读写文件的 `PersistAdapter`。从 `@hyperframes/sdk/adapters/fs` 子路径导入——该模块使用 Node `fs/promises`，被排除在浏览器安全的主 bundle 之外。"
    ],
    "codeBlocks": [
     {
      "code": "import { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\n\nfunction createFsAdapter(opts: FsAdapterOptions): PersistAdapter;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "FsAdapterOptions",
    "p": "",
    "paras": [
     "**root** `string` *必填* 组合文件写入目录的绝对或相对路径。首次写入时以 `mkdir -p` 创建。",
     "**maxVersions** `number` 每个文件保留的最大历史版本数。超限时自动剪除最旧版本。默认 `20`。",
     "适配器把当前组合写到 `{root}/{path}`，把版本快照存于 `{root}/.hf-versions/{path}/`。版本键编码 `Date.now()` 和单调计数器（`\"1750000000000-0001\"`），因此 `listVersions()` 按字典序降序返回（新到旧）。",
     "[!WARNING] `createFsAdapter` 使用 Node.js `fs/promises`。请勿在浏览器或边缘环境中导入它——请从 `@hyperframes/sdk/adapters/fs`（子路径）导入，以便打包器可以 tree-shake 它。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface FsAdapterOptions {\n  /** Root directory for composition files. */\n  root: string;\n  /** Max versions to keep per file. Default: 20. */\n  maxVersions?: number;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\nimport { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: \"./project\", maxVersions: 50 }),\n  persistPath: \"index.html\",\n});\n\ncomp.setText(\"hf-title\", \"Saved\");\nawait comp.flush();\n\n// List saved versions\nconst adapter = createFsAdapter({ root: \"./project\" });\nconst versions = await adapter.listVersions(\"index.html\");\nconst previous = await adapter.loadFrom(\"index.html\", versions[1].key);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "createHeadlessAdapter",
    "p": "",
    "paras": [
     "返回供无头使用的空操作 `PreviewAdapter`：智能体、CI 流水线和服务端渲染。所有方法都是桩——`elementAtPoint` 恒返回 `null`，`isProvablyEmptyAt` 恒返回 `false`，`applyDraft` 和 `commitPreview` 为空操作，`\"selection\"` 事件从不触发。",
     "`isProvablyEmptyAt` 故意返回 `false`：没有界面的适配器无法证明某点无墨迹，回答 `true` 会告诉宿主可以点击穿透一个无人能见的组合。",
     "当为程序化编辑打开组合、不需要实时预览界面时传入此适配器。",
     "[!NOTE] `openComposition` 不会自动创建预览适配器。不需要预览界面时省略 `preview`，或在显式空操作适配器能让共享代码更清晰时传入 `createHeadlessAdapter()`。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "import { createHeadlessAdapter } from \"@hyperframes/sdk\";\n\nfunction createHeadlessAdapter(): PreviewAdapter;",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import { openComposition, createHeadlessAdapter } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(html, {\n  preview: createHeadlessAdapter(),\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "createIframePreviewAdapter",
    "p": "",
    "paras": [
     "返回把 SDK 桥接到包含组合的同源 `<iframe>` 的 `PreviewAdapter`。提供经由 `elementsFromPoint`（感知 z 堆栈）的真实点击测试、草稿拖拽支持和选择管理。",
     "**要求：** **图像 alpha 点击测试：** 对于 `<img>` 元素，适配器用 `OffscreenCanvas` 在指针下的像素处采样 alpha 通道。透明像素穿透到背后元素。使 canvas 染色的跨源图像视为不透明（安全回退，每 src 记录一次）。",
     "**绘制查询：** `isProvablyEmptyAt` 回答某点是否可以安全点击穿透——请见上方 [`PreviewAdapter` 接口](#previewadapter) 和[透明覆盖层配方](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md#transparent-compositions-over-other-content)。其组件可直接导入，供点击测试策略不同的宿主使用：",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "import { createIframePreviewAdapter } from \"@hyperframes/sdk\";\n\nfunction createIframePreviewAdapter(\n  iframe: HTMLIFrameElement,\n  dispatch?: (op: EditOp) => void,\n): PreviewAdapter;",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import {\n  elementPaintsInk,\n  compositionPaintsAt,\n  imageAlphaOpaqueAt,\n  alphaIsOpaque,\n  mapPointToImagePixel,\n} from \"@hyperframes/sdk/adapters/iframe\";",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import { openComposition, createIframePreviewAdapter } from \"@hyperframes/sdk\";\n\nconst iframe = document.querySelector<HTMLIFrameElement>(\"#preview-frame\")!;\n// Optional, and dispatched with `?.` — the callback cannot fire before\n// openComposition() resolves, but strict TypeScript cannot prove that and\n// rejects a definite `let` captured before assignment (TS2454).\nlet comp: Awaited<ReturnType<typeof openComposition>> | undefined;\nconst preview = createIframePreviewAdapter(iframe, (op) => comp?.dispatch(op));\ncomp = await openComposition(html, { preview });\n\n// Hit-test at pointer position\nconst hit = preview.elementAtPoint(pointerX, pointerY);\nif (hit) {\n  preview.select([hit.id]);\n\n  // Drag: call applyDraft at 60fps, commitPreview on pointer-up\n  preview.applyDraft(hit.id, { dx: 12, dy: -5 });\n  preview.commitPreview();\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ],
    "bullets": [
     "iframe 必须同源（例如 `srcdoc` 或 `blob:` URL）。对 `contentDocument` 的跨源访问会抛 `DOMException`。",
     "传入会话的 `dispatch` 回调以启用 `commitPreview()`——没有它，指针释放对模型为空操作。"
    ]
   },
   {
    "h": "导出映射",
    "p": "",
    "paras": [
     "| 符号 | 导入自 |",
     "| - | - |",
     "| `PersistAdapter`、`PreviewAdapter`、`PersistVersionEntry` | `@hyperframes/sdk`（仅类型） |",
     "| `createMemoryAdapter` | `@hyperframes/sdk` |",
     "| `createHeadlessAdapter` | `@hyperframes/sdk` |",
     "| `createIframePreviewAdapter`、`resolveNearestHfElement` | `@hyperframes/sdk` |",
     "| `PaintQueryOptions` | `@hyperframes/sdk`（仅类型） |",
     "| `elementPaintsInk`、`compositionPaintsAt`、`imageAlphaOpaqueAt`、`alphaIsOpaque`、`mapPointToImagePixel`、`INTRINSIC_PAINT_TAGS` | `@hyperframes/sdk/adapters/iframe` |",
     "| `createFsAdapter`、`FsAdapterOptions` | `@hyperframes/sdk/adapters/fs` | [card] [持久化指南](https://hyperframes.heygen.com/sdk/guides/persistence.md)",
     "如何把适配器接入 openComposition、处理错误，并恢复版本。",
     "[card] [画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 用 iframe 预览适配器和点击测试构建可视编辑器画布。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)",
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
     "[用 SDK 编辑组合](https://hyperframes.heygen.com/sdk/quickstart.md)"
    ]
   }
  ]
 },
 "sdk-affordances": {
  "lede": "`resolveElementAffordances` 回答的是这个问题：“此时用户可以对这个元素做什么？”它需要一个实时 DOM 元素及其 SDK 模型条目作为输入。它返回两个对象：`capabilities`（每个编辑动作的布尔标志）和 `sections`（适用的检查器面板）。你用这些值在编辑器的详情面板中按条件渲染控件，而不是为所有元素显示固定的字段集。",
  "sections": [
   {
    "h": "导入",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { resolveElementAffordances } from \"@hyperframes/sdk/editing\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "签名",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "function resolveElementAffordances(\n  liveEl: HTMLElement,\n  modelEl: Pick<HyperFramesElement, \"text\" | \"animationIds\" | \"start\"> | null,\n  ctx?: AffordanceContext,\n): EditingAffordances",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ],
    "bullets": [
     "`liveEl`——组合 iframe 中一个实时且已布局的 `HTMLElement`。解析器会对它调用 `getComputedStyle`，因此它必须挂载在已渲染的文档中。",
     "`modelEl`——SDK 模型元素（`comp.getElement(id)`），或当元素存在于实时 DOM 中但不在 SDK 源模型中时为 `null`（生成元素）。传入 `null` 会限制能力：样式编辑被禁用，并设置 `reasonIfDisabled`。",
     "`ctx`——针对 Studio 特定概念的可选上下文。对于大多数自定义编辑器，可以省略它或让所有标志保持默认值（`false`）。"
    ]
   },
   {
    "h": "`AffordanceContext`",
    "p": "",
    "paras": [
     "这些标志是 Studio 特定的。在独立自定义编辑器中可以完全省略 `ctx`。"
    ],
    "codeBlocks": [
     {
      "code": "interface AffordanceContext {\n  isCompositionHost?: boolean;      // default false\n  isCompositionRoot?: boolean;      // default false\n  isInsideLockedComposition?: boolean; // default false\n  isMasterView?: boolean;           // default false\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "返回值",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "interface EditingAffordances {\n  capabilities: DomEditCapabilities;\n  sections: EditingSectionApplicability;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`capabilities`",
    "p": "",
    "paras": [
     "[!WARNING] `canMove` 和 `canResize` 表示该元素具有可直接作为字段编辑的已编写 `left`/`top`/`width`/`height` 样式值。画布拖拽操作映射到 `canApplyManualOffset`，而不是 `canMove`。不要用 `canMove` 控制拖拽手柄。"
    ],
    "codeBlocks": [
     {
      "code": "interface DomEditCapabilities {\n  canSelect: boolean;\n  canEditStyles: boolean;\n  /** Apply a non-destructive clip-path crop. */\n  canCrop: boolean;\n  /** Directly editable authored left/top style fields. */\n  canMove: boolean;\n  /** Directly editable authored width/height style fields. */\n  canResize: boolean;\n  /** Canvas translate-drag maps here, not to canMove. */\n  canApplyManualOffset: boolean;\n  canApplyManualSize: boolean;\n  canApplyManualRotation: boolean;\n  /** Set when canEditStyles / canMove / canResize is false; explains why. */\n  reasonIfDisabled?: string;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`sections`",
    "p": "",
    "paras": [
     "`sections.colorGrading` 仅为元素级：它表示该元素支持调色控件。Studio 会为支持的媒体元素显示调色面板。"
    ],
    "codeBlocks": [
     {
      "code": "interface EditingSectionApplicability {\n  text: boolean;         // true when the element has editable text content\n  media: boolean;        // true for <video> and <audio>\n  colorGrading: boolean; // true for <video> and <img> — element-level only\n  timing: boolean;       // true when data-start is present or animationCount > 0\n  animation: boolean;    // true when animationCount > 0\n  layout: boolean;       // position, size, rotation, and stacking controls apply\n  style: boolean;        // fill, radius, stroke, shadow, blend, and clip controls apply\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "端到端示例",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { openComposition, createIframePreviewAdapter } from \"@hyperframes/sdk\";\nimport { resolveElementAffordances } from \"@hyperframes/sdk/editing\";\n\nconst iframe = document.querySelector<HTMLIFrameElement>(\"#composition-frame\")!;\nconst preview = createIframePreviewAdapter(iframe, (op) => comp.dispatch(op));\nconst comp = await openComposition(compositionHtml, { preview });\n\nfunction onElementSelected(hfId: string) {\n  // 1. Get the live DOM element from the iframe.\n  const liveEl = iframe.contentDocument?.querySelector<HTMLElement>(\n    `[data-hf-id=\"${hfId}\"]`,\n  );\n  if (!liveEl) return;\n\n  // 2. Get the SDK model element — null for script-generated elements.\n  const modelEl = comp.getElement(hfId);\n\n  // 3. Resolve affordances.\n  const { capabilities, sections } = resolveElementAffordances(liveEl, modelEl);\n\n  // 4. Render controls conditionally.\n  renderInspector({ capabilities, sections, hfId });\n}\n\nfunction renderInspector({\n  capabilities,\n  sections,\n  hfId,\n}: {\n  capabilities: ReturnType<typeof resolveElementAffordances>[\"capabilities\"];\n  sections: ReturnType<typeof resolveElementAffordances>[\"sections\"];\n  hfId: string;\n}) {\n  // Show a disabled-state tooltip when editing is locked.\n  if (!capabilities.canEditStyles && capabilities.reasonIfDisabled) {\n    showDisabledBanner(capabilities.reasonIfDisabled);\n    return;\n  }\n\n  // Style panel — always show when editing is allowed.\n  if (capabilities.canEditStyles) {\n    showStylePanel(hfId);\n  }\n\n  // Position/size fields — only for absolutely positioned elements with px values.\n  if (capabilities.canMove) {\n    showPositionFields(hfId);\n  }\n  if (capabilities.canResize) {\n    showSizeFields(hfId);\n  }\n\n  // Canvas drag handles — use canApplyManualOffset, NOT canMove.\n  if (capabilities.canApplyManualOffset) {\n    showDragHandles(hfId);\n  }\n\n  // Section panels.\n  if (sections.text) showTextPanel(hfId);\n  if (sections.media) showMediaPanel(hfId);\n  if (sections.colorGrading && myFeatureFlags.colorGrading) showColorGradingPanel(hfId);\n  if (sections.timing) showTimingPanel(hfId);\n  if (sections.animation) showAnimationPanel(hfId);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "注意事项",
    "p": "",
    "paras": [
     "**仅支持浏览器。** `resolveElementAffordances` 在内部调用 `getComputedStyle`。不得在 Node、服务端操作或任何非浏览器路径中导入或调用它。SDK 适配器（`@hyperframes/sdk/editing`）与纯核心解析器分离，正是为了让 Node 端 SDK 路径不带浏览器全局变量。",
     "**需要已布局的 DOM。** `canMove` 和 `canResize` 需要实时计算后的 `position`、`left` 和 `top`。如果在 iframe 完成布局之前（例如在 `srcdoc` 赋值后同步）就调用 `resolveElementAffordances`，这两个标志都会是 `false`。请先等待 iframe 的 `load` 事件或组合的第一帧渲染完成，再解析能力。",
     "**`null` 模型表示仅可选择。** 当 `modelEl` 为 `null`（该元素由运行时生成，没有源条目）时，解析器会设置 `existsInSource: false`。这给出 `canSelect: true`，但 `canEditStyles: false`、`canMove: false`，所有手动几何标志均为 `false`，并设置 `reasonIfDisabled` 为人类可读的解释。你仍可显示选中高亮；只是隐藏或禁用所有编辑控件。",
     "**`canApplyManualOffset` 与 `canMove` 的区别。** 只有当元素具有绝对/固定定位，且有已编写的 `left`/`top` px 值，且几何不是由 transform 驱动时，`canMove` 才为真。而 `canApplyManualOffset` 对所有非根非宿主元素与定位无关均为真。[画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 中的 translate 画布拖拽（`applyDraft` / `commitPreview` 流程）以 `canApplyManualOffset` 为门槛——它不要求 `canMove`。",
     "**`colorGrading` 是元素级而非功能级。** `sections.colorGrading` 表示元素类型支持调色（`<video>` 或 `<img>`）。你自己的功能标志是另一个独立的与条件。切勿用该字段替代你的功能标志。"
    ],
    "codeBlocks": []
   },
   {
    "h": "类型参考",
    "p": "",
    "paras": [
     "完整类型定义——`EditingAffordances`、`DomEditCapabilities`、`EditingSectionApplicability`、`AffordanceContext`、`HyperFramesElement`——记录在 [`/sdk/reference/types`](https://hyperframes.heygen.com/sdk/reference/types)。",
     "纯 DOM 无关解析器（`resolveEditingAffordances`、`EditableElementFacts`）位于 `@hyperframes/core`，记录在 [`/packages/core`](https://hyperframes.heygen.com/packages/core)。",
     "[card] [画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 通过点击测试和 iframe 适配器获取实时元素与选择。",
     "[card] [类型参考](https://hyperframes.heygen.com/sdk/reference/types.md) SDK 公共界面的完整类型定义。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[工具与常量](https://hyperframes.heygen.com/sdk/reference/utilities.md)",
     "[画布与预览集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)",
     "[更新日志](https://hyperframes.heygen.com/changelog.md)"
    ]
   }
  ]
 },
 "sdk-canvas": {
  "lede": "SDK 的 `PreviewAdapter` 接口将编辑模型与视觉呈现层解耦。对于基于浏览器的编辑器，`createIframePreviewAdapter` 将 SDK 桥接到包含组合的同源 `<iframe>`，提供同步点击测试、60fps 拖拽预览和选择管理——在用户提交之前都不触碰模型。",
  "sections": [
   {
    "h": "嵌入组合",
    "p": "",
    "paras": [
     "在编辑器外壳中把组合 HTML 渲染到同源 `<iframe>` 中，然后把该元素和一个 dispatch 回调传给 `createIframePreviewAdapter`： 回调在 `comp` 声明之前就引用了它——这是有意的，也是安全的：箭头函数通过闭包捕获 `comp`，且只会在之后（由指针释放时的 `commitPreview()`）被调用，到那时 `comp` 已赋值。这是消除适配器 ⇄ 会话循环依赖的标准写法。",
     "`dispatch` 回调是可选的。省略它意味着 `commitPreview()` 为空操作，这在你想自行处理 op 派生时很有用。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition, createIframePreviewAdapter } from \"@hyperframes/sdk\";\n\n// Assume `compositionHtml` is the composition's source HTML string.\nconst iframe = document.querySelector<HTMLIFrameElement>(\"#composition-frame\")!;\n\n// Build the adapter first so you can pass it to openComposition.\n// The dispatch callback is called by commitPreview() after a drag completes.\nconst preview = createIframePreviewAdapter(iframe, (op) => {\n  comp.dispatch(op);\n});\n\nconst comp = await openComposition(compositionHtml, { preview });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "让预览保持同步",
    "p": "",
    "paras": [
     "以上内容只接通了点击测试和拖拽——但 iframe 仍不会反映其他方式产生的编辑（例如检查器面板直接调用 `comp.setStyle()`、撤销、或通过 `applyPatches()` 重放的协作者变更）。`attachSync` 正是用来弥补这一差距的：一旦同时有了 `preview` 和 `comp` 就调用一次，之后所有编辑——包括撤销/重做——都会自动镜像到实时 iframe 上。",
     "`attachSync` 会先立即对 `comp` 的当前状态做一次全量同步（因此用已有覆盖集重新打开组合也不会出现空白 iframe），然后订阅与其他监听器相同的 `patch` 事件。你不需要编写自己的镜像代码，也不需要单独处理撤销/重做——两者都流经同一个订阅。脚本标签编辑（GSAP 脚本重写）是唯一不会镜像的内容，因为重放实时 `<script>` 标签不会重新执行它。",
     "[!NOTE] 再次以不同的 `comp` 调用 `attachSync` 时，会先注销之前的订阅——当编辑器不卸载 iframe 就切换其绑定的组合时很有用。"
    ],
    "codeBlocks": [
     {
      "code": "const detach = preview.attachSync(comp);\n\n// later, when the editor unmounts or swaps compositions:\ndetach();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "点击测试：定位用户点击的内容",
    "p": "",
    "paras": [
     "`preview.elementAtPoint(x, y)` 在 iframe 自身坐标系的坐标处执行同步点击测试，返回最近的 `[data-hf-id]` 元素；对于透明点击返回 `null`。",
     "点击测试会跳过计算后不透明度为 `0` 的元素（包括不透明度为 `0` 的祖先），且对于 `<img>` 元素，它使用离屏 canvas 在点击像素处采样 alpha——透明像素会穿透到其背后的元素。使 canvas 染色的跨源图片则回退为把该像素视为不透明。",
     "`opts.atTime` 参数会被接受，但不会寻址 GSAP 时间轴。它反映组合在 iframe 中当前暂停的那一帧。跨时间段的精确不透明度查询是未来功能。"
    ],
    "codeBlocks": [
     {
      "code": "iframe.addEventListener(\"load\", () => {\n  const frameDocument = iframe.contentDocument;\n  if (!frameDocument) return;\n\n  // Events inside an iframe do not bubble to the outer <iframe> element.\n  frameDocument.addEventListener(\"click\", (event) => {\n    const hit = preview.elementAtPoint(event.clientX, event.clientY);\n    if (hit) {\n      // hit.id  — the data-hf-id value\n      // hit.tag — the lowercased tag name (e.g. \"div\", \"img\", \"video\")\n      preview.select([hit.id]);\n    }\n  });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "从点击目标向上走到最近的 HF 元素",
    "p": "",
    "paras": [
     "如果你直接在 iframe 的 `contentDocument` 上处理事件（例如通过 `message` 桥接），请使用导出的 `resolveNearestHfElement` 函数。它从任意节点向上遍历 DOM，直到找到一个 `[data-hf-id]` 祖先，并跳过根节点：",
     "当遍历退出树而未找到 `[data-hf-id]` 节点、匹配节点带有 `[data-hf-root]`（根对选择透明）、或 `isVisible` 对该节点返回 `false` 时，`resolveNearestHfElement` 返回 `null`。"
    ],
    "codeBlocks": [
     {
      "code": "import { resolveNearestHfElement } from \"@hyperframes/sdk\";\n\n// Inside the iframe's own document context:\niframeDoc.addEventListener(\"click\", (e) => {\n  const result = resolveNearestHfElement(\n    e.target as Element | null,\n    (el) => {\n      // Return false to treat this element as invisible and continue the walk.\n      const style = el.ownerDocument.defaultView?.getComputedStyle(el);\n      return style ? parseFloat(style.opacity) !== 0 : true;\n    },\n  );\n  if (result) {\n    // result.id, result.tag\n  }\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "叠加在其他内容之上的透明组合",
    "p": "",
    "paras": [
     "以覆盖层形式编写的组合——例如 1080×1920 帧上叠加在视频或头像之上的小图形——在 DOM 中仍是一个覆盖每一像素的矩形盒子。若不加处理，它会吞掉所有点击，下方的内容将无法触及。",
     "`preview.isProvablyEmptyAt(x, y)` 正是需要回答的问题：这个点是否可证明无墨迹，从而点击可以安全地到达下方内容？根据答案切换包装器的 `pointer-events`，让浏览器把事件交给正确的目标： [!WARNING]",
     "请监听**宿主文档**，不要监听包装器或 iframe。包装器首次设为 `pointer-events: none` 后就不再接收事件，因此挂在那里的监听器永远无法把它改回来——穿透状态会卡住。",
     "这里有三件事容易搞错： **1. 在按下之前决定，而不是在按下时决定** 浏览器在任何处理程序运行之前就选定了事件目标，因此在 `mousedown` 中翻转 `pointer-events` 无法重新定向已在途的点击。请在 `mousemove` 时采样指针位置，并让决策保持最新。",
     "**2. 在每一帧重新评估，而不仅是移动时** 动画画面会在静止光标下移动。任何可能改变答案的东西——指针移动、Alt 键和播放头——都必须从上次已知位置重新运行查询。请把这些触发合并为一次 `requestAnimationFrame` 查询，而不是逐条回答；且在指针位于组合盒子之外时请先短路跳过查询：它是对文档的遍历，不应该放在无门槛的逐事件路径上。",
     "**3. 让极性发挥作用** `isProvablyEmptyAt` 仅在已确认无墨迹时为真。文档未加载完成、适配器没有该方法、以及无法映射的点都会返回假值——这使组合保持可点击而不会消失。不要把它反转为“是否绘制”的变量；那会重新引入极性所消除的 bug。",
     "如果编辑器把几乎覆盖整帧的层视为背景而非画面——这是常见选择，因为全出血包装器通常是脚手架而不是用户所指的内容——请传入 `{ fullBleedFraction: 0.9 }`。",
     "不要用 `elementsFromPoint` 自己重写这个逻辑。该堆栈会省略 `pointer-events: none` 节点，而带有 `pointer-events: none` 的装饰性覆盖层仍会绘制——z 堆栈查询会报告可见画面之上无墨迹，仍然把点击穿透出去。出于这个原因，绘制遍历是按几何方式覆盖元素盒子的。"
    ],
    "codeBlocks": [
     {
      "code": "const wrapper = document.querySelector<HTMLElement>(\"#composition-wrapper\")!;\n\n/**\n * Host-page pointer coordinates → the iframe document's own client space, which is what\n * the paint query samples against. The iframe renders at the composition's native size and is\n * CSS-scaled to fit, so the on-screen scale has to be divided out — skip this and you\n * sample the wrong pixel, and pass-through toggles over the wrong regions.\n */\nfunction toCompositionPoint(clientX: number, clientY: number) {\n  const rect = iframe.getBoundingClientRect();\n  if (!rect.width || !rect.height) return null;\n  const scaleX = rect.width / compositionNativeWidth;\n  const scaleY = rect.height / compositionNativeHeight;\n  if (!scaleX || !scaleY) return null;\n  return { x: (clientX - rect.left) / scaleX, y: (clientY - rect.top) / scaleY };\n}\n\nfunction updatePassThrough(clientX: number, clientY: number, altKey: boolean) {\n  const point = toCompositionPoint(clientX, clientY);\n  // Alt is the escape hatch for grabbing the composition itself in an empty region.\n  // Every uncertain case — no point, still loading, adapter without the method — is\n  // falsy here, so the composition stays clickable rather than vanishing.\n  const passThrough =\n    !!point && !altKey && !!preview.isProvablyEmptyAt?.(point.x, point.y);\n  wrapper.style.pointerEvents = passThrough ? \"none\" : \"\";\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "草稿循环：在不修改模型的情况下实现 60fps 拖拽",
    "p": "",
    "paras": [
     "草稿循环在拖拽期间让模型保持干净。SDK **不在** 60fps 路径中——你在每次 `pointermove` 时调用 `preview.applyDraft`，在 `pointerup` 时调用一次 `preview.commitPreview`。模型每次拖拽只看到一个 `moveElement` op，而不是几百个。",
     "`applyDraft` 直接在 iframe 内设置元素的 CSS `translate`——拖拽前的值与累积增量叠加——因此拖拽在任何组合中可见，无需组合侧 CSS，且对 GSAP 动画元素同样有效（在 GSAP 首次解析之后设置的 `translate` 会与动画变换叠加，而不是被覆盖）。SDK 模型没有任何变化。`cancelPreview` 恢复拖拽前的 translate；`commitPreview` 派生一个 `moveElement` op，并把已提交的位置镜像到实时元素上。",
     "`DraftProps` 接受 `dx`、`dy`、`width` 和 `height`。宽度和高度虽在接口中被接受，但缩放支持（映射到 `setStyle` op）尚未接通——目前只有 `dx`/`dy` 驱动草稿 CSS 变量。",
     "若想丢弃拖拽且不发出任何 op，请调用 `cancelPreview()` 而非 `commitPreview()`。模型从未被修改，CSS 变量会被清除。"
    ],
    "codeBlocks": [
     {
      "code": "let dragging = false;\nlet startX = 0;\nlet startY = 0;\nlet targetId: string | null = null;\n\niframe.addEventListener(\"load\", () => {\n  const frameDocument = iframe.contentDocument;\n  if (!frameDocument) return;\n\n  frameDocument.addEventListener(\"pointerdown\", (event) => {\n    const hit = preview.elementAtPoint(event.clientX, event.clientY);\n    if (!hit) return;\n\n    dragging = true;\n    targetId = hit.id;\n    startX = event.clientX;\n    startY = event.clientY;\n    // The target comes from the iframe's realm, so `instanceof Element` against\n    // this window's constructor is always false and capture would be skipped —\n    // then a pointer leaving the frame loses `pointerup` and drag state sticks.\n    if (event.target && \"setPointerCapture\" in event.target) {\n      (event.target as Element).setPointerCapture(event.pointerId);\n    }\n  });\n\n  frameDocument.addEventListener(\"pointermove\", (event) => {\n    if (!dragging || !targetId) return;\n    preview.applyDraft(targetId, {\n      dx: event.clientX - startX,\n      dy: event.clientY - startY,\n    });\n  });\n\n  frameDocument.addEventListener(\"pointerup\", () => {\n    if (!dragging || !targetId) return;\n    preview.commitPreview();\n    dragging = false;\n    targetId = null;\n  });\n\n  frameDocument.addEventListener(\"pointercancel\", () => {\n    preview.cancelPreview();\n    dragging = false;\n    targetId = null;\n  });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "选择",
    "p": "",
    "paras": [
     "`preview.select(ids, opts?)` 设置选择状态，并向任何监听者触发会话的 `selectionchange` 事件。传入 `{ additive: true }` 可扩展当前选择，而不是替换它。",
     "通过 `comp.on(\"selectionchange\", ...)` 在会话上监听选择变化——由适配器触发该事件，而不是 iframe 上的单独事件。"
    ],
    "codeBlocks": [
     {
      "code": "// Replace selection\npreview.select([\"hf-title\"]);\n\n// Extend selection (e.g. shift-click)\npreview.select([\"hf-logo\"], { additive: true });\n\n// Clear selection\npreview.select([]);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "与嵌入覆盖模式配合",
    "p": "",
    "paras": [
     "对于模板驱动型产品，通常在嵌入覆盖模式下打开组合，只存储稀疏增量，而不是完整 HTML。预览适配器在该模式下同样工作——按相同方式传入即可： 完整模式请见 [嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。"
    ],
    "codeBlocks": [
     {
      "code": "const comp = await openComposition(templateHtml, {\n  preview,\n  overrides: existingOverrides,\n  history: false,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "下一步构建什么",
    "p": "",
    "paras": [
     "点击测试和拖拽跑通后，可以使用能力解析器来驱动上下文感知的检查器面板，呈现当前选中元素的可用控件。参见 [编辑能力](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md) 了解如何把实时元素转换为能力标志与分区适用性。",
     "[card] [适配器参考](https://hyperframes.heygen.com/sdk/reference/adapters.md) 完整 `PreviewAdapter`、`PersistAdapter` 及相关类型文档。",
     "[card] [编辑能力](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md) 解析选中元素应显示哪些编辑控件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[在画布上编辑](https://hyperframes.heygen.com/studio/canvas.md)",
     "[嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)",
     "[适配器](https://hyperframes.heygen.com/sdk/reference/adapters.md)"
    ]
   }
  ]
 },
 "sdk-composition": {
  "lede": "`Composition` 是 [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition) 返回的对象。所有 SDK 编辑都经过此接口。类型化方法是 `dispatch()` 的便捷封装；无论使用哪个入口，校验都在 `dispatch()` 中运行。",
  "sections": [
   {
    "h": "类型化编辑方法",
    "p": "",
    "paras": [
     "类型化方法是应用常见编辑的推荐方式。每个方法内部都会调用 `dispatch()`，因此所有补丁事件、历史记录和持久化行为都相同。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`setStyle`",
    "p": "",
    "paras": [
     "对单个元素应用内联 CSS 样式。使用 camelCase 属性名（与 `CSSStyleDeclaration` 一致）。传入 `null` 作为值可移除该属性。"
    ],
    "codeBlocks": [
     {
      "code": "setStyle(id: HfId, styles: Record<string, string | null>): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setStyle(\"hf-title\", { color: \"#FFD60A\", fontSize: \"96px\" });\ncomp.setStyle(\"hf-card\", { borderRadius: null }); // removes border-radius",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setText`",
    "p": "",
    "paras": [
     "替换元素的显示文本。作用于元素的直接文本内容，而不是所有后代文本。"
    ],
    "codeBlocks": [
     {
      "code": "setText(id: HfId, value: string): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setText(\"hf-headline\", \"Product launch — June 2026\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setAttribute`",
    "p": "",
    "paras": [
     "设置或移除 HTML 属性。传入 `null` 可完全移除该属性。"
    ],
    "codeBlocks": [
     {
      "code": "setAttribute(id: HfId, name: string, value: string | null): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setAttribute(\"hf-logo\", \"src\", \"/assets/logo-v2.png\");\ncomp.setAttribute(\"hf-video\", \"autoplay\", null); // removes autoplay",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setTiming`",
    "p": "",
    "paras": [
     "更新单个元素的 `data-start`、`data-duration` 和/或 `data-track-index` 属性。所有字段均为可选；省略的字段保持不变。"
    ],
    "codeBlocks": [
     {
      "code": "setTiming(id: HfId, timing: { start?: number; duration?: number; trackIndex?: number }): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setTiming(\"hf-title\", { start: 0.5, duration: 2.5 });\ncomp.setTiming(\"hf-cta\", { trackIndex: 1 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`removeElement`",
    "p": "",
    "paras": [
     "从组合中移除元素及其所有后代。逆操作是对被移除子树的 `addElement`，因此 `undo()` 可以精确恢复它。"
    ],
    "codeBlocks": [
     {
      "code": "removeElement(id: HfId): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.removeElement(\"hf-old-badge\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`addElement`",
    "p": "",
    "paras": [
     "将 HTML 片段作为 `parent` 的子元素插入到基于零的兄弟索引 `index` 处。传入 `null` 作为 `parent` 可在文档 body 根部插入。片段必须是单根的，且不得包含 `<script>` 标签。返回插入根元素新生成的 `hf-id`。"
    ],
    "codeBlocks": [
     {
      "code": "addElement(parent: HfId | null, index: number, html: string): HfId",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const newId = comp.addElement(\"hf-scene\", 0, '<div class=\"clip\">New clip</div>');\ncomp.setText(newId, \"Inserted clip\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setVariableValue`",
    "p": "",
    "paras": [
     "更新组合变量。字体变量需要 `FontValue` 对象 `{ name, source }`；图像变量需要 `ImageValue` 对象 `{ url, alt?, fit? }`。标量变量接受 `string | number | boolean`。",
     "[!NOTE] `setVariableValue` 仅更新变量的当前值——它拒绝创建未声明的变量。请使用 `declareVariable` 来创建变量。"
    ],
    "codeBlocks": [
     {
      "code": "setVariableValue(id: string, value: string | number | boolean | FontValue | ImageValue): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setVariableValue(\"brandColor\", \"#6C5CE7\");\ncomp.setVariableValue(\"brandFont\", { name: \"Inter\", source: \"https://fonts.googleapis.com/css2?family=Inter\" });\ncomp.setVariableValue(\"heroImage\", { url: \"/assets/hero.jpg\", fit: \"cover\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getVariableValue`",
    "p": "",
    "paras": [
     "返回已声明变量的当前 `default` 值，若 id 未声明或没有设置值则返回 `undefined`。",
     "传入 `{ base: true }` 可读取**打开时编写的**默认值——在 T3 覆盖集或任何折叠进声明的 `setVariableValue` 之前的值。这是当宿主重放移除 `var.<id>` 覆盖的撤销时需要恢复的值。对于会话中途声明的变量，`{ base: true }` 返回其实时默认值（其声明即其基础）。"
    ],
    "codeBlocks": [
     {
      "code": "getVariableValue(id: string, opts?: { base?: boolean }): string | number | boolean | FontValue | ImageValue | undefined",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const color = comp.getVariableValue(\"brandColor\"); // \"#6C5CE7\"",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`listVariables`",
    "p": "",
    "paras": [
     "返回每个已声明变量的完整 schema——`id`、`type`、`label`、`default`，以及类型专属字段（数字的 `min`/`max`/`step`、枚举的 `options`、字体的 `source` 等）。当组合没有声明变量时返回 `[]`。"
    ],
    "codeBlocks": [
     {
      "code": "listVariables(): CompositionVariable[]",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "for (const v of comp.listVariables()) {\n  console.log(v.id, v.type, v.default);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`declareVariable` / `updateVariableDeclaration` / `removeVariableDeclaration`",
    "p": "",
    "paras": [
     "管理 `data-composition-variables` schema 本身。`declareVariable` 添加新的类型化声明（组合没有该属性时创建属性）；`updateVariableDeclaration` 整体替换现有声明——id 不可变，改名请使用 remove + declare；`removeVariableDeclaration` 删除声明（删除最后一个时会删除整个属性）。三者都通过 `can()` 校验（`E_DUPLICATE_VARIABLE`、`E_VARIABLE_NOT_FOUND`、`E_INVALID_ARGS`、`E_INVALID_VARIABLE_ID`——id 必须匹配 `/^[A-Za-z_][A-Za-z0-9_-]*$/`，因为它会成为 CSS 自定义属性名、`data-var-*` 值和 CLI `--variables` 键；以及 `E_FRAGMENT_COMPOSITION`）。声明位于组合的声明根：完整文档为 `<html>` 元素，模板/片段子组合为组合根元素（`[data-composition-id]`）。尽管名字如此，`E_FRAGMENT_COMPOSITION` 现在仅在源中完全没有根元素可承载 schema 时触发——有组合根的片段是可以接受声明的。（代码保留以兼容；修复方式是“添加组合根元素”，不一定是“添加 `<html>`”。）",
     "[!NOTE] `removeVariable(id)` 是 `removeVariableDeclaration(id)` 的简写别名。"
    ],
    "codeBlocks": [
     {
      "code": "declareVariable(declaration: CompositionVariable): void\nupdateVariableDeclaration(id: string, declaration: CompositionVariable): void\nremoveVariableDeclaration(id: string): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.declareVariable({ id: \"title\", type: \"string\", label: \"Title\", default: \"Hello\" });\ncomp.updateVariableDeclaration(\"title\", { id: \"title\", type: \"string\", label: \"Headline\", default: \"Hello\" });\ncomp.removeVariableDeclaration(\"title\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getVariableDeclarations` / `getVariableValues` / `validateVariableValues` / `getVariableUsage`",
    "p": "",
    "paras": [
     "只读变量 API（不经过 dispatch）。`getVariableDeclarations` 返回类型化 schema（与渲染流水线使用的相同严格过滤）。`getVariableValues` 将该组合文件中已声明默认值与给定覆盖集合并后解析值。运行时还会在组装后的文档中遍历内联子组合的声明，因此需要更宽视角时，请分别查询每个 SDK 组合。`validateVariableValues` 执行与 `--strict-variables` 相同的检查（`undeclared` / `type-mismatch` / `enum-out-of-range`）。`getVariableUsage` 静态扫描每个内联脚本的 `getVariables()` 读取并与 schema 交叉引用：`{ usedIds, unusedDeclarations, undeclaredReads, scanIncomplete }`——当脚本动态访问变量时 `scanIncomplete` 置为真，此时 `usedIds` 是下界。"
    ],
    "codeBlocks": [
     {
      "code": "getVariableDeclarations(): CompositionVariable[]\ngetVariableValues(overrides?: Record<string, unknown>): Record<string, unknown>\nvalidateVariableValues(values: Record<string, unknown>): VariableValidationIssue[]\ngetVariableUsage(): VariableUsageReport",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setPreviewVariables`",
    "p": "",
    "paras": [
     "将临时变量值应用到预览界面（从不持久化——如需更改默认值请使用 `setVariableValue`）。传入 `null` 可恢复已声明默认值。委托给预览适配器的可选 `setPreviewVariables`；当适配器不支持时返回 `false`。"
    ],
    "codeBlocks": [
     {
      "code": "setPreviewVariables(values: Record<string, unknown> | null): boolean",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getElementTimings`",
    "p": "",
    "paras": [
     "返回每个计时元素的进入/退出时间和活动 GSAP 标签。SDK 使用 `data-duration` 派生 `enterAt`/`exitAt`，若无则回退到 `data-end − data-start`。GSAP 标签每次调用时从脚本重新解析。没有计时属性的元素会被排除。"
    ],
    "codeBlocks": [
     {
      "code": "getElementTimings(): Record<HfId, ElementTimingSnapshot>",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const timings = comp.getElementTimings();\nfor (const [id, t] of Object.entries(timings)) {\n  console.log(id, t.enterAt, t.exitAt, t.labels);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setElementTiming`",
    "p": "",
    "paras": [
     "在一批中应用稀疏计时映射。所有条目都在单个 `batch()` 调用内派发，因此历史记录只看到一个撤销步骤。未知 ID 的条目会被静默跳过。"
    ],
    "codeBlocks": [
     {
      "code": "setElementTiming(map: Record<HfId, { start?: number; duration?: number; trackIndex?: number }>): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setElementTiming({\n  \"hf-title\":   { start: 0,   duration: 2   },\n  \"hf-caption\": { start: 1.5, duration: 1.5 },\n  \"hf-cta\":     { start: 3,   duration: 2   },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setHold`",
    "p": "",
    "paras": [
     "设置弹性保持窗口——时间轴暂停期间冻结或循环元素的 `{ start, end, fill }` 范围。"
    ],
    "codeBlocks": [
     {
      "code": "setHold(id: HfId, hold: ElasticHold): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setHold(\"hf-hero\", { start: 2, end: 5, fill: \"freeze\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`addGsapTween`",
    "p": "",
    "paras": [
     "向组合时间轴添加针对给定元素的 GSAP tween。返回新分配的 `animationId`。"
    ],
    "codeBlocks": [
     {
      "code": "addGsapTween(target: HfId, tween: GsapTweenSpec): string",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const animId = comp.addGsapTween(\"hf-title\", {\n  method: \"from\",\n  position: 0,\n  duration: 0.6,\n  ease: \"power3.out\",\n  properties: { opacity: 0, y: 40 },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setGsapTween`",
    "p": "",
    "paras": [
     "更新现有 tween 的属性。仅更改你提供的字段；其余保持不变。"
    ],
    "codeBlocks": [
     {
      "code": "setGsapTween(animationId: string, properties: Partial<GsapTweenSpec>): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setGsapTween(animId, { ease: \"back.out(1.7)\", duration: 0.8 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`removeGsapTween`",
    "p": "",
    "paras": [
     "按动画 ID 移除 tween。"
    ],
    "codeBlocks": [
     {
      "code": "removeGsapTween(animationId: string): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.removeGsapTween(animId);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`addWithKeyframes`",
    "p": "",
    "paras": [
     "为 `targetSelector` 在给定时间轴位置和时长添加新的关键帧 tween。返回新生成的 `animationId`。位置是秒数（不是标签相对字符串）。"
    ],
    "codeBlocks": [
     {
      "code": "addWithKeyframes(\n  targetSelector: string,\n  position: number,\n  duration: number,\n  keyframes: KeyframeSpec[],\n  ease?: string,\n): string",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const animId = comp.addWithKeyframes(\n  \"#hf-logo\",\n  0.5,\n  1.2,\n  [\n    { percentage: 0,   properties: { opacity: 0, scale: 0.8 } },\n    { percentage: 100, properties: { opacity: 1, scale: 1   } },\n  ],\n  \"power2.out\",\n);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`replaceWithKeyframes`",
    "p": "",
    "paras": [
     "原子地移除现有 tween 并添加替换用的关键帧 tween。返回替换 tween 的 `animationId`。由于移除后位置派生的 ID 会重排，返回的 ID 可能与输入的 `animationId` 不同——请把返回值视为新的规范 ID。"
    ],
    "codeBlocks": [
     {
      "code": "replaceWithKeyframes(\n  animationId: string,\n  targetSelector: string,\n  position: number,\n  duration: number,\n  keyframes: KeyframeSpec[],\n  ease?: string,\n): string",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const newId = comp.replaceWithKeyframes(\n  oldAnimId,\n  \"#hf-card\",\n  1.0,\n  0.8,\n  [\n    { percentage: 0,   properties: { x: -100 } },\n    { percentage: 100, properties: { x: 0     } },\n  ],\n);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`undo` / `redo`",
    "p": "",
    "paras": [
     "在撤销历史中前后步进。当历史记录被禁用（选项中 `history: false`）或在嵌入模式下时为空操作。"
    ],
    "codeBlocks": [
     {
      "code": "undo(): void\nredo(): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setText(\"hf-title\", \"Draft\");\ncomp.undo(); // reverts to original text\ncomp.redo(); // re-applies \"Draft\"",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`canUndo` / `canRedo`",
    "p": "",
    "paras": [
     "当该方向有可用步骤时返回 `true`。用它来驱动撤销/重做 UI 控件的启用状态。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "canUndo(): boolean\ncanRedo(): boolean",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "undoButton.disabled = !comp.canUndo();\nredoButton.disabled = !comp.canRedo();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getElements`",
    "p": "",
    "paras": [
     "返回组合中所有元素的扁平数组，包括嵌套在子组合中的元素。每个 `ElementSnapshot` 携带元素的 `id`、`scopedId`、`tag`、`inlineStyles`、`classNames`、`attributes`、`text`、计时字段和 `animationIds`。数组是新副本；对返回对象所做的修改不起作用。",
     "[!NOTE] 对于内联子组合中的元素，请使用 `scopedId`（例如 `\"hf-host/hf-leaf\"`）作为派发目标，而不是 `id`。顶层元素的 `scopedId === id`。"
    ],
    "codeBlocks": [
     {
      "code": "getElements(): ElementSnapshot[]",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const elements = comp.getElements();\nconst images = elements.filter((el) => el.tag === \"img\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getRootElements`",
    "p": "",
    "paras": [
     "仅返回顶层元素，每个元素携带其完整子树——任何 id 不会出现两次（不像 `getElements` 会把每个嵌套元素扁平到同一数组）。当你需要每个顶层片段一条记录，而不是树中每个元素时使用此方法。"
    ],
    "codeBlocks": [
     {
      "code": "getRootElements(): ElementSnapshot[]",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const roots = comp.getRootElements();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getElement`",
    "p": "",
    "paras": [
     "按 ID 返回单个元素的快照。同时接受裸 ID（顶层元素）和作用域 ID（子组合元素）。若没有匹配元素则返回 `null`。"
    ],
    "codeBlocks": [
     {
      "code": "getElement(id: HfId): ElementSnapshot | null",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const el = comp.getElement(\"hf-title\");\nif (el) {\n  console.log(el.tag, el.inlineStyles);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`find`",
    "p": "",
    "paras": [
     "按结构化查询搜索元素。返回匹配元素的 `scopedId` 字符串数组。`FindQuery` 中的所有字段均为可选，按 AND 逻辑组合。",
     "| 字段 | 类型 | 说明 |",
     "| - | - | - |",
     "| `tag` | `string` | 精确的 HTML 标签名，小写（`\"div\"`、`\"img\"`）。 |",
     "| `text` | `string` | 对元素 `text` 字段的子字符串匹配。 |",
     "| `name` | `string` | 与 `data-name` 属性精确匹配。 |",
     "| `track` | `number` | 精确的轨道索引（`data-track-index`）。 |",
     "| `composition` | `string` | 按其 `hf-id` 过滤到特定子组合宿主内部的元素。 |"
    ],
    "codeBlocks": [
     {
      "code": "find(query: FindQuery): string[]",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const headlineIds = comp.find({ name: \"headline\" });\nconst allImages   = comp.find({ tag: \"img\" });\nconst track1Ids   = comp.find({ track: 1 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getAllAnimationIds`",
    "p": "",
    "paras": [
     "返回组合脚本中解析到的每个 GSAP tween id，无论其目标选择器当前是否匹配实时 DOM 元素。这与单个 `ElementSnapshot` 自身的 `animationIds` 字段不同，后者只列出选择器解析到该特定元素的 tween。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "getAllAnimationIds(): Set<string>",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const allIds = comp.getAllAnimationIds();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`selection`",
    "p": "",
    "paras": [
     "返回一个 `SelectionProxy`，它在调用时解析 `getSelection()`，并把操作派发到所有选中元素。代理在调用 `selection()` 时捕获 ID 列表——后续的选择变更不会影响已捕获的代理。"
    ],
    "codeBlocks": [
     {
      "code": "selection(): SelectionProxy",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const sel = comp.selection();\nsel.setStyle({ opacity: \"0.5\" });\nsel.removeElement(); // removes all currently selected elements",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`element`",
    "p": "",
    "paras": [
     "返回单个元素的柯里化 `ElementHandle`。句柄仅存储 ID 字符串，因此即使 DOM 在两次调用之间发生变化，也没有过期引用隐患。"
    ],
    "codeBlocks": [
     {
      "code": "element(id: HfId): ElementHandle",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const title = comp.element(\"hf-title\");\ntitle.setText(\"Hello\");\ntitle.setStyle({ fontWeight: \"700\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getSelection`",
    "p": "",
    "paras": [
     "返回当前选择的副本，以 `hf-id` 字符串数组形式返回。未选中时返回 `[]`。"
    ],
    "codeBlocks": [
     {
      "code": "getSelection(): string[]",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const ids = comp.getSelection();\nconsole.log(`${ids.length} elements selected`);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setSelection`",
    "p": "",
    "paras": [
     "替换当前选择。触发 `selectionchange`。传入 `[]` 可清除选择。重复 ID 会自动去重。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "setSelection(ids: string[]): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.setSelection([\"hf-title\", \"hf-subtitle\"]);\ncomp.setSelection([]); // clear",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`dispatch`",
    "p": "",
    "paras": [
     "应用数据形状的编辑操作。所有类型化方法内部都调用此方法。当需要应用没有类型化封装的操作类型、构建程序化构造 op 的自动化，或需要设置自定义 `origin` 时使用 `dispatch`。",
     "完整 op 目录请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
     "你也可以通过向 `target` 传入数组，用一次 `dispatch` 作用于多个元素："
    ],
    "codeBlocks": [
     {
      "code": "dispatch(op: EditOp, opts?: { origin?: unknown }): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.dispatch({ type: \"setStyle\", target: \"hf-card\", styles: { borderRadius: \"24px\" } });\ncomp.dispatch({ type: \"reorderElements\", entries: [{ target: \"hf-bg\", zIndex: 0 }] });\ncomp.dispatch({ type: \"setCompositionMetadata\", width: 1920, height: 1080, duration: 30 });",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.dispatch({ type: \"setText\", target: [\"hf-title\", \"hf-subtitle\"], value: \"Coming soon\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`batch`",
    "p": "",
    "paras": [
     "把多次派发合并为一个撤销条目和一个 `patch` 事件。若回调抛错，批次内已运行的所有 DOM 修改会被原子回滚，模型恢复到调用 `batch()` 之前的状态。"
    ],
    "codeBlocks": [
     {
      "code": "batch(fn: () => void, opts?: { origin?: unknown }): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.batch(() => {\n  comp.setText(\"hf-title\", \"Version 2\");\n  comp.setStyle(\"hf-title\", { color: \"#22C55E\" });\n  comp.setTiming(\"hf-title\", { start: 1, duration: 3 });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`can`",
    "p": "",
    "paras": [
     "试运行校验。当 `dispatch(op)` 会成功时返回 `{ ok: true }`，当它会失败或成为空操作时返回 `{ ok: false, code, message, hint? }`。",
     "在渲染依赖 GSAP 时间轴可用的控件之前，或在显示应用可选编辑的 UI 之前，把它用作功能检测门槛。",
     "稳定错误码：`E_TARGET_NOT_FOUND`、`E_NO_ROOT`、`E_NO_GSAP_TIMELINE`、`E_NO_GSAP_SCRIPT`。",
     "完整 op 目录请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "can(op: EditOp): CanResult",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const result = comp.can({\n  type: \"setGsapTween\",\n  animationId: \"anim-1\",\n  properties: { ease: \"power3.out\" },\n});\n\nif (result.ok) {\n  comp.setGsapTween(\"anim-1\", { ease: \"power3.out\" });\n} else {\n  console.warn(result.code, result.message);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "事件",
    "p": "",
    "paras": [
     "所有 `on()` 重载都返回注销函数。调用它可移除监听器。"
    ],
    "codeBlocks": [
     {
      "code": "on(event: \"change\",         handler: () => void): () => void\non(event: \"selectionchange\", handler: (ids: string[]) => void): () => void\non(event: \"patch\",           handler: (event: PatchEvent) => void): () => void\non(event: \"persist:error\",   handler: (event: PersistErrorEvent) => void): () => void",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`change`",
    "p": "",
    "paras": [
     "每次已提交的修改后触发（无论是类型化方法、`dispatch` 还是 `batch`）。用它来刷新画布或其他派生视图。"
    ],
    "codeBlocks": [
     {
      "code": "const off = comp.on(\"change\", () => {\n  canvas.render(comp.getElements());\n});\n\noff(); // unsubscribe",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`selectionchange`",
    "p": "",
    "paras": [
     "选择变化时触发，参数为新的 ID 数组。"
    ],
    "codeBlocks": [
     {
      "code": "comp.on(\"selectionchange\", (ids) => {\n  propertiesPanel.show(ids);\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`patch`",
    "p": "",
    "paras": [
     "每次已提交的变更后触发，带有 RFC 6902 正/逆补丁、`origin` 和语义 `opTypes` 的 `PatchEvent`。用它来把编辑镜像到宿主历史栈、协作层或审计日志。",
     "[!WARNING] 在 `patch` 监听器中务必防护 `ORIGIN_APPLY_PATCHES`。不跳过该来源会导致无限循环：当宿主通过 `applyPatches()` 把逆向补丁重放到 SDK 时。"
    ],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\n\ncomp.on(\"patch\", ({ patches, inversePatches, origin, opTypes }) => {\n  if (origin !== ORIGIN_APPLY_PATCHES) {\n    hostHistory.push({ patches, inversePatches });\n  }\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`persist:error`",
    "p": "",
    "paras": [
     "当持久化适配器写入失败时触发。会话会继续运行；编辑在内存中累积，队列在下一次修改时重试。",
     "撤销/重做与补丁模式请见[撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.on(\"persist:error\", ({ error }) => {\n  toast.error(`Autosave failed: ${error.message}`);\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   }
  ]
 },
 "sdk-edit-ops": {
  "lede": "SDK 中的每次修改都表达为 `EditOp`——一个带判别 `type` 字段的普通数据对象。你可以通过 `dispatch()` 逐条提交操作，用 `can()` 校验，或用 `batch()` 把它们分组为单个撤销/持久化步骤。",
  "sections": [
   {
    "h": "dispatch",
    "p": "",
    "paras": [
     "立即应用 `op`。发出 `patch` 事件，若挂载了适配器则持久化，并记录一条历史记录。可选的 `origin` 会原样转发到生成的 `PatchEvent` 中；用它来标注变更来源（例如 `\"user\"`、`\"agent\"`，或你自己的字符串常量）。"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch(op: EditOp, opts?: { origin?: unknown }): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.dispatch(\n  { type: \"setStyle\", target: \"hf-title\", styles: { color: \"#FFD60A\" } },\n  { origin: \"agent\" },\n);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "batch",
    "p": "",
    "paras": [
     "把 `fn` 内发出的所有 `dispatch()` 调用分组为单个撤销步骤、单次持久化写入和单个 `patch` 事件。当多项修改在逻辑上属于一起时使用 `batch()`。"
    ],
    "codeBlocks": [
     {
      "code": "comp.batch(fn: () => void, opts?: { origin?: unknown }): void",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.batch(() => {\n  comp.dispatch({ type: \"setText\", target: \"hf-title\", value: \"Launch Day\" });\n  comp.dispatch({ type: \"setStyle\", target: \"hf-title\", styles: { fontSize: \"96px\" } });\n  comp.dispatch({ type: \"setTiming\", target: \"hf-title\", start: 0.5, duration: 3 });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "can",
    "p": "",
    "paras": [
     "在不修改文档的情况下试运行 `op`。当 `dispatch(op)` 会成功时返回 `{ ok: true }`，当它会成为空操作或错误时返回 `{ ok: false; code: string; message: string; hint?: string }`。",
     "在渲染控件或应用可选操作之前，把 `can()` 用作功能检测门槛： `ok: false` 时稳定的 `code` 值：",
     "| 代码 | 含义 |",
     "| - | - |",
     "| `E_TARGET_NOT_FOUND` | `target` hf-id 在文档中不存在。 |",
     "| `E_NO_ROOT` | 文档没有根元素（HTML 为空）。 |",
     "| `E_NO_GSAP_TIMELINE` | GSAP 脚本没有 `gsap.timeline()` 可挂载。请声明一个（`var tl = gsap.timeline(...)`）然后重试。 |",
     "| `E_NO_GSAP_SCRIPT` | 该操作需要 GSAP `<script>` 块；文档中没有找到。 | [!NOTE] `E_NO_GSAP_TIMELINE` 由两种挂载到时间轴的操作触发——`addGsapTween` 和 `addLabel`。如果组合的 GSAP 脚本没有 `gsap.timeline()` 声明，`can()` 返回 `{ ok: false, code: 'E_NO_GSAP_TIMELINE' }`；添加 `var tl = gsap.timeline(...)` 后即可成功。`dispatch()` 不会查询 `can()`——请先调用 `can()`，失败时跳过该操作。",
     "另见：[`Composition`](https://hyperframes.heygen.com/sdk/reference/composition) 的类型化方法封装，以及 [`类型`](https://hyperframes.heygen.com/sdk/reference/types) 中的 `CanResult` 和 `EditOp`。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.can(op: EditOp): CanResult",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const result = comp.can({\n  type: \"setGsapTween\",\n  animationId: \"anim-1\",\n  properties: { ease: \"power3.out\" },\n});\n\nif (result.ok) {\n  comp.setGsapTween(\"anim-1\", { ease: \"power3.out\" });\n} else {\n  console.warn(result.code, result.message);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "元素编辑",
    "p": "",
    "paras": [
     "这些操作按显式 hf-id 作用于一个或多个元素。`target` 接受单个 `HfId` 字符串或 `HfId[]` 数组；给定数组时，操作会在单个 batch 内逐个应用到每个 id。",
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `setStyle` | `target`、`styles` | 合并 CSS 内联样式。`null` 值移除该属性。 |",
     "| `setText` | `target`、`value` | 替换元素的直接文本内容。 |",
     "| `setAttribute` | `target`、`name`、`value` | 设置或移除 HTML 属性。`null` 移除它。不触碰 `style`、`class` 或 `data-hf-*`。 |",
     "| `setTiming` | `target`、`start?`、`duration?`、`trackIndex?` | 更新一个或多个计时属性（`data-start`、`data-duration`、`data-track-index`）。省略的字段保持不变。 |",
     "| `setHold` | `target`、`hold` | 设置弹性保持窗口；见下方 `ElasticHold` 形状。 |",
     "| `moveElement` | `target`、`x`、`y` | 通过设置 `data-x` / `data-y`（而不是 CSS `left`/`top`）重新定位元素。 |",
     "| `removeElement` | `target` | 从文档中移除元素及其所有子元素。是 `addElement` 的逆操作。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "setStyle",
    "p": "",
    "paras": [
     "`styles` 键是 camelCase 属性名，与 `CSSStyleDeclaration` 约定一致。"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setStyle\",\n  target: \"hf-card\",\n  styles: {\n    borderRadius: \"24px\",\n    backgroundColor: \"#1A1A1A\",\n    color: null,          // removes the color property\n  },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setText",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setText\",\n  target: [\"hf-headline\", \"hf-sub\"],\n  value: \"Coming soon\",\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setAttribute",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setAttribute\",\n  target: \"hf-logo\",\n  name: \"src\",\n  value: \"/assets/logo-v2.png\",\n});\n\n// Remove an attribute:\ncomp.dispatch({\n  type: \"setAttribute\",\n  target: \"hf-video\",\n  name: \"autoplay\",\n  value: null,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setTiming",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setTiming\",\n  target: \"hf-title\",\n  start: 1.5,\n  duration: 3,\n  trackIndex: 0,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setHold",
    "p": "",
    "paras": [
     "`hold` 是 `ElasticHold` 对象："
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setHold\",\n  target: \"hf-badge\",\n  hold: {\n    start: 2,\n    end: 5,\n    fill: \"freeze\",   // \"freeze\" | \"loop\"\n  },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "moveElement",
    "p": "",
    "paras": [
     "通过 `data-x` / `data-y` 属性设置元素位置。坐标为组合空间像素。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"moveElement\",\n  target: \"hf-logo\",\n  x: 120,\n  y: 48,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "结构",
    "p": "",
    "paras": [
     "这些操作修改文档结构（添加/移除/重排元素、应用类级样式，或更改组合元数据）。与元素编辑不同，它们**不**以同样的形式接收 `target` 字段。",
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `addElement` | `parent`、`index`、`html` | 插入 HTML 片段。生成的 hf-id 通过类型化 `comp.addElement()` 方法返回。 |",
     "| `reorderElements` | `entries` | 在一个或多个元素上设置内联 `z-index`，以重排其层叠顺序。 |",
     "| `setClassStyle` | `selector`、`styles` | 合并类选择器的 CSS 规则样式。`null` 值移除属性。 |",
     "| `deleteAllForSelector` | `selector` | 从文档中移除所有匹配 CSS 选择器的元素。 |",
     "| `setCompositionMetadata` | `width?`、`height?`、`duration?` | 更新顶层组合尺寸和/或总时长。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "addElement",
    "p": "",
    "paras": [
     "`parent` 是父元素的 hf-id，或 `null` 表示在文档 body 根部插入。`index` 是基于零的兄弟索引（`>= childCount` 时追加）。`html` 必须是单根 HTML 片段，且不得包含 `<script>`。",
     "使用类型化 `comp.addElement(parent, index, html)` 方法可取回生成的 hf-id。"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"addElement\",\n  parent: \"hf-scene-1\",\n  index: 2,\n  html: '<div class=\"clip\" data-start=\"3\" data-duration=\"2\">New layer</div>',\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "reorderElements",
    "p": "",
    "paras": [
     "每个条目在一个元素上设置 `z-index`。元素必须是非静态定位，`z-index` 才生效——调用方必须确保已设置 `position`。"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"reorderElements\",\n  entries: [\n    { target: \"hf-bg\",   zIndex: 0 },\n    { target: \"hf-logo\", zIndex: 10 },\n    { target: \"hf-text\", zIndex: 20 },\n  ],\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setClassStyle",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setClassStyle\",\n  selector: \".caption\",\n  styles: { fontSize: \"14px\", fontWeight: \"600\" },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "deleteAllForSelector",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"deleteAllForSelector\",\n  selector: \".debug-overlay\",\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setCompositionMetadata",
    "p": "",
    "paras": [
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setCompositionMetadata\",\n  width: 1920,\n  height: 1080,\n  duration: 30,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "变量",
    "p": "",
    "paras": [
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `setVariableValue` | `id`、`value` | 按 id 设置组合变量的当前值。值可以是字符串、数字、布尔值、`FontValue` 或 `ImageValue`。拒绝创建未声明的变量。 |",
     "| `declareVariable` | `declaration` | 创建新变量声明，或完全替换现有声明（类型、标签、默认值及所有其他 schema 字段——不仅仅是值）。这是唯一从头创建 schema 条目的操作。 |",
     "| `removeVariable` | `id` | 完全移除变量的声明。实时 `var.{id}` 覆盖和 `data-var-*` DOM 引用保持不变。 | ***"
    ],
    "codeBlocks": [
     {
      "code": "// Scalar variable\ncomp.dispatch({\n  type: \"setVariableValue\",\n  id: \"brandColor\",\n  value: \"#6C5CE7\",\n});\n\n// Font variable (object-valued — never a CSS string)\ncomp.dispatch({\n  type: \"setVariableValue\",\n  id: \"brand-font\",\n  value: {\n    name: \"Inter\",\n    source: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;700\",\n  },\n});\n\n// Image variable (object-valued)\ncomp.dispatch({\n  type: \"setVariableValue\",\n  id: \"hero-image\",\n  value: {\n    url: \"/assets/hero.jpg\",\n    alt: \"Product hero\",\n    fit: \"cover\",\n  },\n});\n\n// Create a new variable declaration\ncomp.dispatch({\n  type: \"declareVariable\",\n  declaration: {\n    id: \"brandColor\",\n    type: \"color\",\n    label: \"Brand color\",\n    default: \"#6C5CE7\",\n  },\n});\n\n// Remove a variable's declaration\ncomp.dispatch({ type: \"removeVariable\", id: \"brandColor\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "GSAP tweens",
    "p": "",
    "paras": [
     "这些操作在组合的 GSAP 脚本块中添加、编辑和移除 GSAP tween 条目。它们按 `animationId` 操作——tween 创建时生成的稳定字符串标识符。用 `comp.addGsapTween()` 或 `addWithKeyframes` 生成新 id；类型化封装直接返回它。",
     "[!NOTE] 此处只有 `addGsapTween` 需要 `gsap.timeline()` 来挂载——没有它时，`can()` 返回 `{ ok: false, code: 'E_NO_GSAP_TIMELINE' }`，请声明时间轴后重试。`setGsapTween`、`removeGsapTween` 和 `removeGsapProperty` 是对现有 tween 的编辑或移除，不需要它。`dispatch()` 不会查询 `can()`——请先调用 `can()`，失败时跳过该操作。",
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `addGsapTween` | `target`、`tween` | 为目标 hf-id 添加新 tween。通过类型化方法返回生成的 `animationId`。 |",
     "| `setGsapTween` | `animationId`、`properties` | 部分更新现有 tween 的 `GsapTweenSpec` 字段。 |",
     "| `removeGsapTween` | `animationId` | 完全移除该 tween。 |",
     "| `removeGsapProperty` | `animationId`、`property`、`from?` | 从 tween 中移除一个动画属性。`from: true` 表示从 `fromProperties` 移除；否则从 `toProperties` / `properties` 移除。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "addGsapTween",
    "p": "",
    "paras": [
     "`tween` 是 `GsapTweenSpec` 对象： `GsapTweenSpec` 字段：",
     "| 字段 | 类型 | 说明 |",
     "| - | - | - |",
     "| `method` | `\"from\" \\| \"to\" \\| \"fromTo\" \\| \"set\"` | GSAP tween 方法。 |",
     "| `position` | `number \\| string` | 时间轴位置。接受数字（秒）或标签相对字符串（如 `\"intro+=0.5\"`）。 |",
     "| `duration` | `number` | tween 时长（秒）。 |",
     "| `ease` | `string` | GSAP ease 字符串（例如 `\"power3.out\"`）。 |",
     "| `fromProperties` | `Record<string, unknown>` | `fromTo` tween 的起始状态属性。 |",
     "| `toProperties` | `Record<string, unknown>` | 结束状态属性（`fromTo` 使用）。 |",
     "| `properties` | `Record<string, unknown>` | `from` 的起始值、`to` 的目标值、`set` 的即时值，或省略 `toProperties` 时 `fromTo` 的目标值。 |",
     "| `repeat` | `number` | 重复次数（`-1` = 无限）。 |",
     "| `yoyo` | `boolean` | 在交替重复时反向。 |",
     "| `stagger` | `number \\| Record<string, unknown>` | 多目标 tween 的 stagger 配置。 |"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"addGsapTween\",\n  target: \"hf-title\",\n  tween: {\n    method: \"from\",\n    position: 0,\n    duration: 0.8,\n    ease: \"power3.out\",\n    properties: { opacity: 0, y: 40 },\n  },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "setGsapTween",
    "p": "",
    "paras": [
     "仅更改你提供的字段；省略任何字段可保持不变。"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setGsapTween\",\n  animationId: \"anim-1\",\n  properties: { ease: \"elastic.out(1, 0.3)\", duration: 1.2 },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "removeGsapProperty",
    "p": "",
    "paras": [
     "***"
    ],
    "codeBlocks": [
     {
      "code": "// Remove 'scale' from the to-properties of an existing tween\ncomp.dispatch({\n  type: \"removeGsapProperty\",\n  animationId: \"anim-1\",\n  property: \"scale\",\n});\n\n// Remove 'opacity' from the from-properties\ncomp.dispatch({\n  type: \"removeGsapProperty\",\n  animationId: \"anim-2\",\n  property: \"opacity\",\n  from: true,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "关键帧",
    "p": "",
    "paras": [
     "关键帧操作处理使用 CSS `@keyframes` 风格百分比数组的 tween，而不是单个 `fromProperties`/`toProperties` 形状。",
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `setGsapKeyframe` | `animationId`、`keyframeIndex`、`position?`、`value?`、`ease?` | 按索引更新现有关键帧 tween 中的一个关键帧。 |",
     "| `addGsapKeyframe` | `animationId`、`position`、`value` | 在给定百分比位置追加新关键帧。 |",
     "| `removeGsapKeyframe` | `animationId`、`percentage` | 移除特定百分比处的关键帧。 |",
     "| `removeAllKeyframes` | `animationId` | 清除 tween 的所有关键帧，保留 tween 外壳。 |",
     "| `convertToKeyframes` | `animationId`、`resolvedFromValues?` | 把 `from`/`to`/`fromTo` tween 转换为关键帧形式。`resolvedFromValues` 提供 0% 停留点的实时计算值。 |",
     "| `materializeKeyframes` | `animationId`、`keyframes`、`easeEach?`、`resolvedSelector?` | 把完整关键帧集写入现有 tween，替换任何先前的关键帧。 |",
     "| `addWithKeyframes` | `targetSelector`、`position`、`duration`、`keyframes`、`ease?` | 为给定 CSS 选择器创建新关键帧 tween。通过类型化方法返回生成的 `animationId`。 |",
     "| `replaceWithKeyframes` | `animationId`、`targetSelector`、`position`、`duration`、`keyframes`、`ease?` | 原子移除现有 tween 并插入新关键帧 tween。 |",
     "| `splitIntoPropertyGroups` | `animationId` | 把多属性关键帧 tween 拆分为每个动画属性一个 tween。 |",
     "| `splitAnimations` | `originalId`、`newId`、`splitTime`、`elementStart`、`elementDuration` | 在 `splitTime` 处把一个 tween 拆分到两个。第二半得到 `newId`。 |",
     "| `unrollDynamicAnimations` | `animationId`、`elements` | 把匹配多元素的选择器目标 tween 转换为逐元素关键帧 tween。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "materializeKeyframes",
    "p": "",
    "paras": [
     "`keyframes` 是 `{ percentage, properties, ease? }` 对象数组："
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"materializeKeyframes\",\n  animationId: \"anim-3\",\n  keyframes: [\n    { percentage: 0,   properties: { opacity: 0, y: 30 } },\n    { percentage: 100, properties: { opacity: 1, y: 0 }, ease: \"power2.out\" },\n  ],\n  easeEach: \"none\",\n  resolvedSelector: \"#hf-title\",\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "addWithKeyframes / replaceWithKeyframes",
    "p": "",
    "paras": [
     "`position` 是数字（秒）——不像 `GsapTweenSpec.position`，这里不接受标签相对字符串。",
     "[!NOTE] `replaceWithKeyframes` 之后，位置派生的 tween ID 会重排。请重新查询 `comp.getElement(id).animationIds` 以发现新 ID，而不是假设它与旧 ID 相同。",
     "`KeyframeSpec` 字段：",
     "| 字段 | 类型 | 说明 |",
     "| - | - | - |",
     "| `percentage` | `number` | tween 内的关键帧位置（0–100）。 |",
     "| `properties` | `Record<string, number \\| string>` | 该停留点处的 CSS / GSAP 属性。 |",
     "| `ease` | `string` | 从该停留点到下一停留点的 ease。 |",
     "| `auto` | `boolean` | GSAP 端点标志——生成 GSAP 脚本时输出为数字 `_auto: 1`。 | ***"
    ],
    "codeBlocks": [
     {
      "code": "// Create a new keyframed tween:\ncomp.dispatch({\n  type: \"addWithKeyframes\",\n  targetSelector: \"#hf-card\",\n  position: 1.5,\n  duration: 0.6,\n  keyframes: [\n    { percentage: 0,   properties: { scale: 0.8, opacity: 0 } },\n    { percentage: 100, properties: { scale: 1,   opacity: 1 } },\n  ],\n  ease: \"back.out(1.7)\",\n});\n\n// Replace an existing tween atomically:\ncomp.dispatch({\n  type: \"replaceWithKeyframes\",\n  animationId: \"anim-4\",\n  targetSelector: \"#hf-card\",\n  position: 1.5,\n  duration: 0.6,\n  keyframes: [\n    { percentage: 0,   properties: { scale: 0.9 } },\n    { percentage: 100, properties: { scale: 1 } },\n  ],\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "标签",
    "p": "",
    "paras": [
     "GSAP 时间轴标签标记主时间轴中的命名位置（秒）。在 `GsapTweenSpec.position` 中以 `\"intro\"` 或 `\"intro+=0.5\"` 等字符串引用标签。",
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `addLabel` | `name`、`position` | 在时间轴位置（秒）添加命名标签。 |",
     "| `removeLabel` | `name` | 移除命名标签。 | [!NOTE] 与 `addGsapTween` 一样，`addLabel` 挂载到时间轴：脚本中没有 `gsap.timeline()` 声明时，`can()` 返回 `{ ok: false, code: 'E_NO_GSAP_TIMELINE' }`。`removeLabel` 没有此要求。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({ type: \"addLabel\", name: \"intro\", position: 0 });\ncomp.dispatch({ type: \"addLabel\", name: \"outro\", position: 8 });\n\n// Tween positioned relative to a label:\ncomp.dispatch({\n  type: \"addGsapTween\",\n  target: \"hf-cta\",\n  tween: {\n    method: \"from\",\n    position: \"outro-=0.5\",\n    duration: 0.4,\n    properties: { opacity: 0 },\n  },\n});\n\ncomp.dispatch({ type: \"removeLabel\", name: \"intro\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "弧线路径",
    "p": "",
    "paras": [
     "弧线路径操作控制 GSAP tween 的运动路径——元素运动所沿的曲线。",
     "| `type` | 关键字段 | 作用 |",
     "| - | - | - |",
     "| `setArcPath` | `animationId`、`config` | 在 tween 上创建或替换弧线路径配置。 |",
     "| `updateArcSegment` | `animationId`、`segmentIndex`、`update` | 更新一段的曲率或控制点。 |",
     "| `removeArcPath` | `animationId` | 从 tween 中移除弧线路径，恢复为直线路径。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "setArcPath",
    "p": "",
    "paras": [
     "`config` 形状：",
     "| 字段 | 类型 | 说明 |",
     "| - | - | - |",
     "| `enabled` | `boolean` | 弧线路径是否活动。 |",
     "| `autoRotate` | `boolean \\| number` | `true` = 自动旋转以跟随路径切线；数字表示按该度数偏移旋转。 |",
     "| `segments` | `Array<{ curviness?, cp1?, cp2? }>` | 逐段路径定义。`curviness` 是 GSAP Bezier 曲率值；`cp1`/`cp2` 是组合空间中的控制点坐标。 |"
    ],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"setArcPath\",\n  animationId: \"anim-5\",\n  config: {\n    enabled: true,\n    autoRotate: true,            // boolean, or a number (degrees offset)\n    segments: [\n      {\n        curviness: 1.5,\n        cp1: { x: 200, y: -80 }, // first control point\n        cp2: { x: 400, y: 20 },  // second control point\n      },\n    ],\n  },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "updateArcSegment",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.dispatch({\n  type: \"updateArcSegment\",\n  animationId: \"anim-5\",\n  segmentIndex: 0,\n  update: { curviness: 2, cp1: { x: 220, y: -100 } },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[类型](https://hyperframes.heygen.com/sdk/reference/types.md)",
     "[时序与动画](https://hyperframes.heygen.com/sdk/guides/timing-and-animation.md)",
     "[查询与编辑元素](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md)"
    ]
   }
  ]
 },
 "sdk-embedded": {
  "lede": "嵌入覆盖模式适用于模板驱动型产品：维护一份基础组合 HTML 文件，并在其旁边仅存储每个实例的增量（即 `OverrideSet`）。当用户编辑其实例时，SDK 会把进一步的更改累积到同一个增量中——基础部分保持不变。",
  "sections": [
   {
    "h": "使用覆盖集打开",
    "p": "",
    "paras": [
     "调用 `openComposition` 时，把存储的增量作为 `overrides` 传入。SDK 会将已保存的更改应用到基础模板上，因此会话一开始即可呈现用户编辑后的确切状态： `openComposition` 返回后，`comp.getElements()` 会反映覆盖后的状态。任何进一步的编辑都会自动累积到同一个增量中。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\n// Stored delta — loaded from your database or storage layer.\nconst storedOverrides = {\n  \"hf-title.text\": \"Acme Corp Launch\",\n  \"hf-logo.attr.src\": \"/customers/acme/logo.png\",\n  \"hf-subtitle.style.color\": \"#0EA5E9\",\n};\n\nconst comp = await openComposition(templateHtml, {\n  overrides: storedOverrides,\n  history: false, // host owns undo — see below\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "读取当前增量",
    "p": "",
    "paras": [
     "调用 `getOverrides()` 可读取当前增量以便存储。它返回一份可直接序列化保存的副本： 下一次打开会话时，再次把 `nextOverrides` 作为 `overrides` 传入——用户就会看到其确切状态。",
     "通过 `addElement()` 插入的元素也会存入增量，包括其父级和兄弟位置。后续的文本、样式或属性编辑会在恢复的元素上重放： `getOverrides()` 会保存每个新增或恢复元素在所有子节点中的当前位置，包括相邻文本。移除临时兄弟节点在重新打开后不会改变该元素位置。请按原样存储返回的集合，不要对其键排序。SDK 会保留最新的编辑顺序，使后续子元素编辑在其父级快照之后应用。"
    ],
    "codeBlocks": [
     {
      "code": "comp.setText(\"hf-cta\", \"Get started free\");\ncomp.setStyle(\"hf-cta\", { backgroundColor: \"#22C55E\" });\n\nconst nextOverrides = comp.getOverrides();\n// { \"hf-title.text\": \"Acme Corp Launch\", ..., \"hf-cta.text\": \"Get started free\", ... }\n\nawait db.saveOverrides(sessionId, nextOverrides);",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const id = comp.addElement(\"hf-stage\", 1, \"<p>Available today</p>\");\ncomp.setText(id, \"Available worldwide\");\n\nconst reopened = await openComposition(templateHtml, {\n  overrides: comp.getOverrides(),\n});\nreopened.getElement(id)?.text; // \"Available worldwide\"",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "覆盖集键格式",
    "p": "",
    "paras": [
     "键遵循 `hfId.prop.path` 模式。常见形式有：",
     "| 键 | 含义 |",
     "| - | - |",
     "| `\"hf-title.text\"` | 元素 `hf-title` 的内部文本 |",
     "| `\"hf-logo.attr.src\"` | `hf-logo` 上的 `src` 属性 |",
     "| `\"hf-x.style.fontSize\"` | `hf-x` 上的内联 `fontSize` 样式 |",
     "| `\"hf-card\"` 与元素快照 | 新增或恢复的元素，含其 HTML、父级和兄弟位置 |",
     "| `\"hf-card\"` 值为 `null` | 删除标记——元素已被删除 | `null` 值表示删除标记。当 SDK 序列化组合时，会完全省略该元素。这使宿主可以区分“从未触碰”（键不存在）与“用户删除”（键存在，值为 `null`）。",
     "子组合元素使用作用域 ID——`\"hf-host/hf-leaf.text\"`——其中宿主与叶节点以 `/` 分隔。",
     "已编写 ID 中的句点仍属于该 ID：编辑 `hf-title.main` 会生成 `\"hf-title.main.text\"`，重新打开时仍恢复到同一个元素。非空的整个元素值必须是 `getOverrides()` 返回的快照。打开增量时会跳过整个元素键下的标量值和不完整快照。"
    ],
    "codeBlocks": []
   },
   {
    "h": "字体与图像变量覆盖",
    "p": "",
    "paras": [
     "变量覆盖（来自 `setVariableValue`）位于 `var.{id}` 键下。字体与图像值是对象，而非字符串： 当读取 `var.*` 键下的 `OverrideSet` 值时，请先做类型收窄，再将其视为标量——其类型为 `string | number | boolean | Record<string, unknown> | null`。"
    ],
    "codeBlocks": [
     {
      "code": "import type { FontValue, ImageValue } from \"@hyperframes/sdk\";\n\n// Font variable — name is the CSS font-family, source is the stylesheet URL.\nconst fontOverride: FontValue = {\n  name: \"Inter\",\n  source: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap\",\n};\n\n// Image variable — url is the src; alt and fit are optional.\nconst imageOverride: ImageValue = {\n  url: \"/customers/acme/hero.jpg\",\n  alt: \"Acme hero image\",\n  fit: \"cover\",\n};\n\ncomp.setVariableValue(\"brand-font\", fontOverride);\ncomp.setVariableValue(\"hero-image\", imageOverride);\n\nconst overrides = comp.getOverrides();\n// {\n//   \"var.brand-font\": { name: \"Inter\", source: \"https://…\" },\n//   \"var.hero-image\": { url: \"/customers/acme/hero.jpg\", alt: \"…\", fit: \"cover\" },\n// }",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "禁用 SDK 撤销",
    "p": "",
    "paras": [
     "在嵌入模式下，撤销栈通常由宿主管理。SDK 在嵌入模式下默认已关闭历史记录（任何带 `overrides` 打开的会话），因此通常无需做任何操作。仅在独立代码路径中为使意图明确，或在调用点可能或可能不提供 `overrides` 时作为防护，才显式传入 `history: false`：",
     "[!NOTE] `history: false` 仅禁用 SDK 内部的撤销栈。持久化（若你提供了 `persist` 适配器）是独立的——省略它不会影响自动保存。不过在嵌入模式下，撤销和持久化通常都由宿主管理，因此通常两者都不需要传入。"
    ],
    "codeBlocks": [
     {
      "code": "const comp = await openComposition(templateHtml, {\n  overrides: storedOverrides,\n  history: false,\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "通过 `applyPatches()` 实现宿主自有的撤销",
    "p": "",
    "paras": [
     "当宿主弹出一个撤销条目，需要把逆向补丁重放到 SDK 时，请使用 `applyPatches()`。SDK 会将补丁应用到实时文档，更新内部覆盖集，并发出带 `ORIGIN_APPLY_PATCHES` 标记的 `patch` 事件。",
     "`applyPatches()` 接受可选的 `opts.origin` 覆盖项，若你想用其他哨兵值标记事件，但宿主撤销/重做流程通常期望使用默认的 `ORIGIN_APPLY_PATCHES`。",
     "完整的补丁事件契约与逆向补丁处理请见[撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)。"
    ],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\n\n// Host undo stack entry — inversePatches came from a prior 'patch' event.\nfunction hostUndo(inversePatches: JsonPatchOp[]) {\n  comp.applyPatches(inversePatches);\n}\n\n// Guard against undo loops — skip ORIGIN_APPLY_PATCHES events in the patch listener.\ncomp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // already from host undo — do not re-push\n  hostHistory.push({ patches, inversePatches });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "完整示例",
    "p": "",
    "paras": [
     "[card] [openComposition 参考](https://hyperframes.heygen.com/sdk/reference/open-composition.md) 完整 `OpenCompositionOptions`，包括 `overrides`、`history` 和 `persist`。",
     "[card] [类型参考](https://hyperframes.heygen.com/sdk/reference/types.md) `OverrideSet`、`FontValue`、`ImageValue`、`PatchEvent` 和 `ORIGIN_APPLY_PATCHES`。",
     "[card] [撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) 补丁事件格式、逆向补丁契约以及防止撤销循环。",
     "[card] [画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 将 SDK 接入编辑器画布内的实时预览 iframe。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition, ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\nimport type { JsonPatchOp, OverrideSet } from \"@hyperframes/sdk\";\n\nasync function openUserSession(\n  templateHtml: string,\n  storedOverrides: OverrideSet,\n) {\n  const hostHistory: Array<{ patches: readonly JsonPatchOp[]; inversePatches: readonly JsonPatchOp[] }> = [];\n  let historyIndex = hostHistory.length;\n\n  const comp = await openComposition(templateHtml, {\n    overrides: storedOverrides,\n    history: false,\n  });\n\n  // Record every user edit in the host undo stack.\n  comp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n    if (origin === ORIGIN_APPLY_PATCHES) return;\n    // Discard any redo entries ahead of the cursor.\n    hostHistory.splice(historyIndex);\n    hostHistory.push({ patches, inversePatches });\n    historyIndex = hostHistory.length;\n  });\n\n  return {\n    comp,\n\n    undo() {\n      if (historyIndex === 0) return;\n      const { inversePatches } = hostHistory[--historyIndex];\n      comp.applyPatches([...inversePatches]);\n    },\n\n    redo() {\n      if (historyIndex >= hostHistory.length) return;\n      const { patches } = hostHistory[historyIndex++];\n      comp.applyPatches([...patches]);\n    },\n\n    async save() {\n      // Only store the delta — not the full HTML.\n      return comp.getOverrides();\n    },\n  };\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
     "[画布与预览集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)",
     "[撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)"
    ]
   }
  ]
 },
 "sdk-open": {
  "lede": "`openComposition` 是每个 SDK 会话的唯一入口。它解析组合 HTML，为缺少稳定 `hf-id` 属性的元素打上 `hf-id` 标记，并返回可以接收编辑的 [`Composition`](https://hyperframes.heygen.com/sdk/reference/composition)。",
  "sections": [
   {
    "h": "签名",
    "p": "",
    "paras": [
     "| 参数 | 类型 | 说明 |",
     "| - | - | - |",
     "| `html` | `string` | 完整的组合 HTML 字符串。 |",
     "| `opts` | `OpenCompositionOptions` | 可选配置——适配器、覆盖集、历史记录行为。 |"
    ],
    "codeBlocks": [
     {
      "code": "openComposition(html: string, opts?: OpenCompositionOptions): Promise<Composition>",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "模式",
    "p": "",
    "paras": [
     "同一个函数覆盖三种部署模式。你得到哪种模式，完全取决于你在 `opts` 中传入的内容。",
     "**独立（默认）**——你拥有 HTML，SDK 拥有历史记录和持久化。传入 `persist` 适配器可启用自动保存；除非用 `history: false` 退出，否则撤销/重做会自动挂载。",
     "**嵌入 / 覆盖模式**——传入 `overrides` 可在共享基础模板之上应用用户专属增量来打开。SDK 会把进一步的编辑累积到覆盖集中，你只存储增量。嵌入模式下历史记录默认关闭（由宿主的栈驱动撤销）。参见[嵌入覆盖模式指南](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
     "**无头 / 智能体**——省略 `persist` 和 `overrides`。SDK 是纯内存变换。完成后调用 `serialize()` 并丢弃会话。"
    ],
    "codeBlocks": []
   },
   {
    "h": "选项",
    "p": "",
    "paras": [
     "**persist** `PersistAdapter` 用于自动保存的存储适配器。每次已提交的变更后，SDK 会把写入任务排入该适配器的队列。会话会触发 `persist:error` 事件而不是在写入失败时抛错。",
     "内置适配器：`createMemoryAdapter()`（测试/演示）和 `createFsAdapter()`（Node.js）。自定义适配器实现 `PersistAdapter` 接口，从 `@hyperframes/sdk` 导出。（`createHeadlessAdapter()` 是 `preview` 字段下面的 `PreviewAdapter`，不是持久化适配器。）",
     "适配器选择与配置请见[持久化指南](https://hyperframes.heygen.com/sdk/guides/persistence.md)。",
     "**persistPath** `string`（默认：“composition.html”） 持久化队列传给适配器 `write` 调用的相对路径。在会话的生命周期内不可变——更改它会在磁盘上创建新文件而不会删除旧文件。你必须关闭并重新打开会话才能更改保存路径。",
     "**preview** `PreviewAdapter` 将 SDK 模型桥接到渲染界面的实时预览适配器。提供时，适配器的选择事件会更新 `comp.getSelection()`，使指针驱动的点击测试与模型保持同步，而不经过修改路径。",
     "内置：同源组合 iframe 使用 `createIframePreviewAdapter()`，不存在预览界面时使用 `createHeadlessAdapter()`。",
     "**overrides** `OverrideSet` 在会话开始前应用到基础 HTML 之上的稀疏 `{ \"hfId.prop.path\": value }` 映射。每次后续编辑都会累积到此映射中。当前映射可通过 `comp.getOverrides()` 读取。",
     "提供 `overrides` 即会激活**嵌入模式**：历史记录默认为关闭，SDK 发出补丁而非拥有撤销栈。宿主只存储增量，并在每次打开时重放，因此基础模板可以独立更新。",
     "参见[嵌入覆盖模式指南](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
     "**trackedOrigins** `unknown[]` 其修改会进入撤销栈的来源值白名单。默认为除 `ORIGIN_APPLY_PATCHES`（`applyPatches()` 使用的哨兵值）之外的所有来源。当你从多个来源派发编辑，只想让其中一些可撤销时使用此选项——例如，把程序化批量更新排除在用户可见的撤销历史之外。",
     "**coalesceMs** `number`（默认：300） 以毫秒计的自动合并窗口。在此窗口内到达的连续修改会合并为一个撤销条目。对于较慢的交互可增大，对于更细的历史记录粒度可减小，或设为 `0` 完全禁用合并。",
     "**history** `false` 传入 `false` 可跳过挂载撤销/重做模块。会话的 `undo()`、`redo()`、`canUndo()` 和 `canRedo()` 将成为空操作。",
     "当宿主拥有撤销栈，且 SDK 的历史模块会与其重复时使用此选项。注意，禁用历史记录**不会**禁用持久化——自动保存独立运行，因此禁用撤销不会无声丢弃磁盘写入。",
     "在嵌入模式下（提供 `overrides` 时），历史记录默认为关闭，不必使用此选项。"
    ],
    "codeBlocks": []
   },
   {
    "h": "无头智能体编辑",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(html);\n\nconst [titleId] = comp.find({ name: \"headline\" });\nif (titleId) {\n  comp.setText(titleId, \"New headline\");\n  comp.setStyle(titleId, { color: \"#FFD60A\" });\n}\n\nconst updatedHtml = comp.serialize();\ncomp.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "带文件系统持久化的独立模式",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\nimport { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: \"./project\" }),\n  persistPath: \"index.html\",\n});\n\ncomp.on(\"persist:error\", ({ error }) => {\n  console.error(\"Autosave failed:\", error.message);\n});\n\ncomp.setText(\"hf-title\", \"Launch day\");\nawait comp.flush(); // drain any pending write before process exit\ncomp.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "带覆盖集的嵌入模式",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\n\nimport { openComposition } from \"@hyperframes/sdk\";\n\n// Stored override delta for one customer\nconst savedOverrides = {\n  \"hf-title.text\": \"Acme — Q3 Review\",\n  \"hf-logo.attr.src\": \"/customers/acme/logo.png\",\n};\n\nconst comp = await openComposition(baseTemplateHtml, {\n  overrides: savedOverrides,\n  history: false,\n});\n\n// Host drives undo; SDK just accumulates overrides\ncomp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  if (origin !== ORIGIN_APPLY_PATCHES) {\n    hostHistoryStack.push({ patches, inversePatches });\n  }\n});\n\ncomp.setStyle(\"hf-title\", { color: \"#0EA5E9\" });\n\n// Persist the updated delta only — not the full HTML\nconst nextOverrides = comp.getOverrides();\nawait db.save(customerId, nextOverrides);\ncomp.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "禁用历史记录以降低开销",
    "p": "",
    "paras": [
     "[!NOTE] 历史记录在独立模式下默认为**开启**，在嵌入模式下默认为**关闭**。只有当你自行管理撤销栈、不想让 SDK 创建平行副本时，才需要在独立模式下传入 `history: false`。"
    ],
    "codeBlocks": [
     {
      "code": "const comp = await openComposition(html, {\n  persist: createFsAdapter({ root: \"./output\" }),\n  history: false, // host owns undo; persist still runs\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关内容",
    "p": "",
    "paras": [
     "[card] [Composition](https://hyperframes.heygen.com/sdk/reference/composition.md) `openComposition` 返回的完整编辑界面。",
     "[card] [持久化指南](https://hyperframes.heygen.com/sdk/guides/persistence.md) 适配器选择、版本历史和自定义适配器。",
     "[card] [嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md) 宿主自有历史记录的模板驱动型产品。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
     "[用 SDK 编辑组合](https://hyperframes.heygen.com/sdk/quickstart.md)",
     "[嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)"
    ]
   }
  ]
 },
 "sdk-persistence": {
  "lede": "向 `openComposition` 传入 `persist` 适配器后，SDK 会订阅每个 `change` 事件并自动调度异步写入。你永远不需要在每次编辑后调用保存方法 —— 适配器负责处理。",
  "sections": [
   {
    "h": "选项",
    "p": "",
    "paras": [
     "**persist** `PersistAdapter` 存储适配器。每次变更后 SDK 调用 `adapter.write(persistPath, html)`。省略即跳过持久化（headless / agent 用法）。",
     "**persistPath** `string` 每次写入传给适配器的路径键。默认 `\"composition.html\"`。会话寿命内不可变 —— 会话中途改路径不支持。"
    ],
    "codeBlocks": []
   },
   {
    "h": "刷新挂起写入",
    "p": "",
    "paras": [
     "持久化队列会合并快速编辑，因此应用关闭时最后一次写入可能延迟。进程退出前调用 `flush()` 排空挂起写入： `flush()` 在进行中写入完成时 resolve。若没有挂起内容，立即 resolve。未提供 `persist` 适配器时为无操作。"
    ],
    "codeBlocks": [
     {
      "code": "// Ensure the latest state is committed before the process exits.\nawait comp.flush();\ncomp.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "处理写入失败",
    "p": "",
    "paras": [
     "写入错误作为事件发出，而非抛异常 —— 失败的自动保存不能让交互会话崩溃。用 `comp.on('persist:error', …)` 订阅处理： 事件携带 `{ error: { message: string; hint?: string; cause?: unknown } }`。SDK 会在下一次 `change` 事件时重试，因此瞬时错误会自动恢复。"
    ],
    "codeBlocks": [
     {
      "code": "comp.on(\"persist:error\", ({ error }) => {\n  console.error(\"Autosave failed:\", error.message, error.cause);\n  showToast(\"Could not save — retrying next change.\");\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`createMemoryAdapter()` —— 测试与演示",
    "p": "",
    "paras": [
     "进程内存储 —— 无文件 I/O，不要求 Node.js。适合单元测试、演示，或在不访问磁盘的情况下需要版本历史的浏览器会话。",
     "`createMemoryAdapter()` 还暴露 `injectFault(message)` —— 测试辅助，让下一次写入发出 `persist:error` 而非提交。无需真实 I/O 失败即可演练错误处理路径。"
    ],
    "codeBlocks": [
     {
      "code": "import { createMemoryAdapter } from \"@hyperframes/sdk\";\n\nconst adapter = createMemoryAdapter();\n\nconst comp = await openComposition(html, {\n  persist: adapter,\n});\n\ncomp.setText(\"hf-title\", \"v1\");\nawait comp.flush();\ncomp.setText(\"hf-title\", \"v2\");\nawait comp.flush();\n\nconst versions = await adapter.listVersions(\"composition.html\");\n// versions[0] is newest — key \"v2\", versions[1] is \"v1\"\n\nconst v1Html = await adapter.loadFrom(\"composition.html\", versions[1].key);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`createFsAdapter(opts)` —— Node.js 本地开发",
    "p": "",
    "paras": [
     "写入文件系统，并在 `.hf-versions/` 下保留滚动版本历史。仅 Node.js —— 不要在浏览器构建中使用。",
     "[!NOTE] `createFsAdapter` 从 `@hyperframes/sdk/adapters/fs` **子路径**导入，而非像 `createMemoryAdapter` 那样从主 barrel 导入。fs 适配器会拉入 Node 的 `fs` 模块，单独子路径可让浏览器包树摇掉它 —— 从根导入会把 `node:fs` 拖进浏览器构建。",
     "**root** `string` 根目录。适配器写入 `{root}/{persistPath}`，版本文件保存在 `{root}/.hf-versions/{persistPath}/` 下。",
     "**maxVersions** `number` 每个文件最多保留的版本快照数。最旧的自动裁掉。默认 `20`。",
     "**列出与恢复版本：** 版本键为 `{timestamp}-{counter}` 字符串。`listVersions` 按最新优先返回；`timestamp` 为写入时 Unix 毫秒。"
    ],
    "codeBlocks": [
     {
      "code": "import { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\n\nconst adapter = createFsAdapter({\n  root: \"./project\",   // required — directory for composition files\n  maxVersions: 20,     // optional — versions to retain per file (default: 20)\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const versions = await adapter.listVersions(\"composition.html\");\n// [ { key: \"1751234567890-0003\", timestamp: 1751234567890 }, ... ]\n// Entries are newest-first.\n\nconst olderHtml = await adapter.loadFrom(\"composition.html\", versions[2].key);\nif (olderHtml) {\n  // Re-open the old snapshot.\n  const restored = await openComposition(olderHtml, { persist: adapter });\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "实现自定义适配器",
    "p": "",
    "paras": [
     "任何满足 `PersistAdapter` 接口的对象都能直接替换。接口为： **契约：** **最小示例 —— HTTP / S3 风格适配器：** [!NOTE] `write()` 永不抛出 —— 捕获错误并通过 `on('persist:error', …)` 发出。SDK 认为写入在它这边是 fire-and-forget；抛出异常会破坏内部持久化队列。",
     "[card] [Adapter reference](https://hyperframes.heygen.com/sdk/reference/adapters.md) Full `PersistAdapter`, `PersistVersionEntry`, and `PreviewAdapter` type definitions.",
     "[card] [openComposition reference](https://hyperframes.heygen.com/sdk/reference/open-composition.md) All `OpenCompositionOptions` fields including `persist`, `persistPath`, `preview`, and `overrides`."
    ],
    "codeBlocks": [
     {
      "code": "export interface PersistAdapter {\n  read(path: string): Promise<string | undefined>;\n  write(path: string, content: string): Promise<void>;\n  flush(): Promise<void>;\n  listVersions(path: string): Promise<PersistVersionEntry[]>;\n  loadFrom(path: string, versionKey: string): Promise<string | undefined>;\n  on(event: \"persist:error\", handler: (event: PersistErrorEvent) => void): () => void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import type { PersistAdapter, PersistVersionEntry, PersistErrorEvent } from \"@hyperframes/sdk\";\n\nexport function createHttpAdapter(baseUrl: string): PersistAdapter {\n  const errorHandlers: Array<(e: PersistErrorEvent) => void> = [];\n\n  return {\n    async read(path) {\n      const res = await fetch(`${baseUrl}/${path}`);\n      if (res.status === 404) return undefined;\n      return res.text();\n    },\n\n    async write(path, content) {\n      try {\n        await fetch(`${baseUrl}/${path}`, {\n          method: \"PUT\",\n          body: content,\n          headers: { \"Content-Type\": \"text/html\" },\n        });\n      } catch (err) {\n        const message = err instanceof Error ? err.message : String(err);\n        errorHandlers.forEach((h) => h({ error: { message, cause: err } }));\n      }\n    },\n\n    async flush() {\n      // No queuing — writes are immediate.\n    },\n\n    async listVersions(path): Promise<PersistVersionEntry[]> {\n      const res = await fetch(`${baseUrl}/${path}/versions`);\n      if (!res.ok) return [];\n      return res.json() as Promise<PersistVersionEntry[]>;\n    },\n\n    async loadFrom(path, versionKey) {\n      const res = await fetch(`${baseUrl}/${path}/versions/${versionKey}`);\n      if (!res.ok) return undefined;\n      return res.text();\n    },\n\n    on(event, handler) {\n      if (event !== \"persist:error\") return () => {};\n      errorHandlers.push(handler);\n      return () => {\n        const i = errorHandlers.indexOf(handler);\n        if (i !== -1) errorHandlers.splice(i, 1);\n      };\n    },\n  };\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ],
    "bullets": [
     "`read()` 对从未写过的路径返回 `undefined`。",
     "`write()` 幂等 —— 对同一路径的第二次写入覆盖。",
     "`flush()` 在排队写入提交时 resolve。若写入同步，返回 `Promise.resolve()`。",
     "`listVersions()` 按最新优先返回条目。无存储 `content` 的条目合法 —— `loadFrom` 由消费方懒调用。",
     "`loadFrom()` 在版本键未找到时返回 `undefined`。",
     "`on('persist:error', handler)` 注册错误监听器。错误**不得**作为抛出异常传播 —— 应通过事件呈现。返回取消订阅函数。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
     "[Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)",
     "[Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)"
    ]
   }
  ]
 },
 "sdk-querying": {
  "lede": "SDK 暴露两层来处理合成元素：用于读取当前文档状态的**查询 API**，以及用于修改的类型化方法**修改 API**（外加 `dispatch()`）。每次查询与每次编辑都作用于稳定的 `hf-id` 字符串 —— 没有游标、没有“必须先选中的当前选择”不变式，也没有可能过期的 DOM 引用。",
  "sections": [
   {
    "h": "`getElements()`",
    "p": "",
    "paras": [
     "返回 `ElementSnapshot` 对象的扁平数组，代表合成中的每个元素 —— 包括子合成内部嵌套的元素 —— 按文档顺序排列。",
     "每个 `ElementSnapshot`（别名自 `HyperFramesElement`）携带：",
     "| 字段 | 类型 | 说明 |",
     "| - | - | - |",
     "| `id` | `string` | 叶级 `hf-id` —— 在其子合成作用域内唯一 |",
     "| `scopedId` | `string` | 规范的分发目标（见下） |",
     "| `tag` | `string` | 小写 HTML 标签名 |",
     "| `text` | `string \\| null` | 元素的直接文本内容 |",
     "| `inlineStyles` | `Record<string, string>` | camelCase 属性名 |",
     "| `attributes` | `Record<string, string>` | 除 `style`、`class` 与 `data-hf-*` 外的所有属性 |",
     "| `classNames` | `string[]` | |",
     "| `start` | `number \\| null` | 秒 —— 缺少 `data-start` 时为 null |",
     "| `duration` | `number \\| null` | 秒 —— 既无 `data-duration` 也无 `data-end` 时为 null |",
     "| `trackIndex` | `number \\| null` | |",
     "| `animationIds` | `string[]` | 指向该元素的 GSAP tween ID |"
    ],
    "codeBlocks": [
     {
      "code": "const elements = comp.getElements();\n\n// Filter in userland\nconst images = elements.filter((el) => el.tag === \"img\");\nconst timed = elements.filter((el) => el.start !== null);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`getElement(id)`",
    "p": "",
    "paras": [
     "按 `id` 或 `scopedId` 获取单个元素快照。无匹配元素时返回 `null`。",
     "裸 id（顶层元素）与 scoped id（子合成元素）都接受。裸 id 只在顶层元素中解析：仅存在于子合成内部的叶元素即使其 id 在文档中唯一也会返回 `null` —— 用 `find()` 发现其 scoped 形式（`\"hf-HOST/hf-LEAF\"`），再传给 `getElement`。"
    ],
    "codeBlocks": [
     {
      "code": "const el = comp.getElement(\"hf-title\");\nif (el) {\n  console.log(el.text, el.inlineStyles.color);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`find(query)`",
    "p": "",
    "paras": [
     "返回所有匹配全部所给 `FindQuery` 字段的元素的 `scopedId` 字符串数组。所有字段均为可选；空查询匹配全部元素（等价于 `getElements().map(el => el.scopedId)`）。",
     "`FindQuery` 字段：",
     "| 字段 | 类型 | 匹配 |",
     "| - | - | - |",
     "| `tag` | `string` | 精确标签名 |",
     "| `text` | `string` | `el.text` 的子串 |",
     "| `name` | `string` | `data-name` 属性的精确值 |",
     "| `track` | `number` | 精确 `trackIndex` |",
     "| `composition` | `string` | `scopedId` 以 `\"<host-id>/\"` 开头的元素 |"
    ],
    "codeBlocks": [
     {
      "code": "import type { FindQuery } from \"@hyperframes/sdk\";\n\n// By tag\nconst imgIds = comp.find({ tag: \"img\" });\n\n// By text content (substring match)\nconst headlineIds = comp.find({ text: \"Launch\" });\n\n// By data-name attribute\nconst logoIds = comp.find({ name: \"brand-logo\" });\n\n// By track index\nconst track1Ids = comp.find({ track: 1 });\n\n// Filter to elements inside a specific sub-composition (by host hf-id)\nconst innerIds = comp.find({ composition: \"hf-intro-scene\" });\n\n// Combine fields — all must match\nconst [targetId] = comp.find({ tag: \"h1\", track: 0 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "子合成元素的 `scopedId`",
    "p": "",
    "paras": [
     "当合成把另一个合成嵌入为子片段时，内部元素可用形如 `\"hf-HOST/hf-LEAF\"` 的 scoped id 寻址（任意深度：`\"hf-A/hf-B/hf-C\"`）。对子合成元素，始终把 `scopedId` 作为分发目标 —— 当同一叶 id 出现在多个嵌套作用域时，向 `setText` 或 `setStyle` 传裸叶 id 不会正确解析。"
    ],
    "codeBlocks": [
     {
      "code": "// Wrong — bare id for a sub-composition element\ncomp.setText(\"hf-inner-title\", \"New text\"); // may silently no-op\n\n// Correct — use the scopedId returned by find() or getElements()\nconst [id] = comp.find({ name: \"inner-title\" }); // returns \"hf-scene/hf-inner-title\"\nif (id) comp.setText(id, \"New text\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "用类型化方法编辑",
    "p": "",
    "paras": [
     "类型化方法是主要的编辑界面。每个方法分发单个 `EditOp` 并立即返回。变更在下一次 `getElements()` 调用中可见。"
    ],
    "codeBlocks": []
   },
   {
    "h": "`setText(id, value)`",
    "p": "",
    "paras": [
     "设置元素的直接文本内容。"
    ],
    "codeBlocks": [
     {
      "code": "comp.setText(\"hf-title\", \"Shipped.\");\ncomp.setText(\"hf-subtitle\", \"Available now in all regions.\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setStyle(id, styles)`",
    "p": "",
    "paras": [
     "合并内联样式。属性名为 camelCase。传 `null` 表示移除该属性。"
    ],
    "codeBlocks": [
     {
      "code": "comp.setStyle(\"hf-card\", {\n  backgroundColor: \"#1A1A2E\",\n  borderRadius: \"16px\",\n  opacity: \"0.9\",\n});\n\n// Remove a previously-set inline style\ncomp.setStyle(\"hf-card\", { opacity: null });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setAttribute(id, name, value)`",
    "p": "",
    "paras": [
     "设置 HTML 属性。传 `null` 移除它。"
    ],
    "codeBlocks": [
     {
      "code": "comp.setAttribute(\"hf-hero-img\", \"src\", \"/assets/hero-v2.jpg\");\ncomp.setAttribute(\"hf-hero-img\", \"alt\", \"Product screenshot\");\n\n// Remove an attribute\ncomp.setAttribute(\"hf-hero-img\", \"loading\", null);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`removeElement(id)`",
    "p": "",
    "paras": [
     "从合成中移除元素及其所有子元素。"
    ],
    "codeBlocks": [
     {
      "code": "comp.removeElement(\"hf-old-badge\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`addElement(parent, index, html)`",
    "p": "",
    "paras": [
     "以零基兄弟位置 `index` 把 HTML 片段作为 `parent` 子元素插入。`parent` 传 `null` 时插入到文档 body 根。返回新插入根元素新铸的 `hf-id`。",
     "插入的 HTML 必须为单根片段，且不得包含 `<script>` 标签。"
    ],
    "codeBlocks": [
     {
      "code": "const newId = comp.addElement(\"hf-card\", 0, `<span class=\"badge\">New</span>`);\n// newId is a fresh stable hf-id, e.g. \"hf-a3k7\"\n\n// Append at the end (index >= child count)\ncomp.addElement(\"hf-card\", 999, `<div class=\"footer-note\">v2.0</div>`);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`setVariableValue(id, value)`",
    "p": "",
    "paras": [
     "按变量 id 设置合成变量。"
    ],
    "codeBlocks": [
     {
      "code": "// String variable\ncomp.setVariableValue(\"tagline\", \"The fast path to production.\");\n\n// Font variable\ncomp.setVariableValue(\"headingFont\", {\n  name: \"Inter\",\n  source: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;700\",\n});\n\n// Image variable\ncomp.setVariableValue(\"heroBg\", {\n  url: \"/assets/hero.jpg\",\n  fit: \"cover\",\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`batch()` —— 把编辑分组为一步",
    "p": "",
    "paras": [
     "把相关修改包在 `batch()` 中，使它们合并为单个撤销条目、单次持久化写入与单个 `change` 事件。只要两处或更多编辑逻辑上不可分离，就该用它。",
     "批次是事务性的：若回调抛出异常，该批次产生的所有 DOM 修改都会回滚，合成恢复到批次前状态。",
     "批次可以嵌套 —— 只有最外层边界发出事件并触发持久化写入。"
    ],
    "codeBlocks": [
     {
      "code": "comp.batch(() => {\n  comp.setText(\"hf-title\", \"Summer Drop\");\n  comp.setStyle(\"hf-title\", { color: \"#FF6B35\", fontSize: \"112px\" });\n  comp.setTiming(\"hf-title\", { start: 0, duration: 3.5 });\n  comp.setAttribute(\"hf-logo\", \"src\", \"/assets/logo-summer.svg\");\n});\n// One undo entry. One disk write. One change event.",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`comp.element(id)` → `ElementHandle`",
    "p": "",
    "paras": [
     "返回携带 `id` 字符串的单态句柄，暴露与顶层 `comp.*` 方法相同的修改方法。适合对同一元素做多处编辑时使用。",
     "句柄只持有 `id` 字符串 —— 没有过期 DOM 引用隐患。在 `dispose()` 之后调用其方法会通过底层分发路径悄悄无操作。"
    ],
    "codeBlocks": [
     {
      "code": "const title = comp.element(\"hf-title\");\n\ntitle.setText(\"Shipped.\");\ntitle.setStyle({ color: \"#FFD60A\", letterSpacing: \"-0.02em\" });\ntitle.setTiming({ start: 0.5, duration: 3 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "`comp.selection()` → `SelectionProxy`",
    "p": "",
    "paras": [
     "返回在调用时解析*当前*选择的代理，并把修改一次批次应用到所有选中 id。",
     "选择只是运行时概念 —— 它不持久化，也不包含在 patch 或 override 集合中。用 `getSelection()` 读取当前选择，用 `setSelection(ids)` 编程更改。传空数组清空。",
     "[!NOTE] `SelectionProxy` 与 `ElementHandle` 暴露相同的五个方法：`setStyle`、`setText`、`setAttribute`、`setTiming` 与 `removeElement`。它们刻意对称 —— 可自由互换，无需重新思考调用点。"
    ],
    "codeBlocks": [
     {
      "code": "comp.setSelection([\"hf-title\", \"hf-subtitle\"]);\n\nconst sel = comp.selection();\nconsole.log(sel.ids); // [\"hf-title\", \"hf-subtitle\"]\n\n// Applies setStyle to both ids as a single batch\nsel.setStyle({ opacity: \"0.5\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const current = comp.getSelection();\ncomp.setSelection([\"hf-logo\"]);\ncomp.setSelection([]); // clear",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关",
    "p": "",
    "paras": [
     "[card] [Composition reference](https://hyperframes.heygen.com/sdk/reference/composition.md) Full method signatures for every Composition method.",
     "[card] [Types reference](https://hyperframes.heygen.com/sdk/reference/types.md) HyperFramesElement, FindQuery, ElementHandle, SelectionProxy, and more.",
     "[card] [Edit Operations reference](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) Every EditOp variant — for the dispatch() and can() layers."
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)",
     "[Editing Affordances](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md)",
     "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)"
    ]
   }
  ]
 },
 "sdk-quickstart": {
  "lede": "当应用必须在不打开 Studio 的情况下检查或修改合成 HTML 时，使用 `@hyperframes/sdk`。如果只需要播放，使用 [Player](https://hyperframes.heygen.com/packages/player.md)。如果只需要渲染文件，使用 [CLI](https://hyperframes.heygen.com/developers/cli.md) 或 [Producer](https://hyperframes.heygen.com/packages/producer.md)。",
  "sections": [
   {
    "h": "打开、编辑、序列化",
    "p": "",
    "paras": [
     "**1. 安装包** **2. 打开合成** `openComposition` 解析 HTML，给缺少 `data-hf-id` 属性的元素盖戳，并返回一个 `Composition` 会话。",
     "该调用是异步的，因为它先在 DOM 上运行 ID 盖戳遍历，再返回。",
     "**3. 查找元素** 用 `getElements()` 获取合成中所有内容的扁平快照，或用 `find()` 按标签、文本内容、`data-name` 属性、轨道索引或子合成宿主过滤。",
     "`find()` 返回 `scopedId` 字符串数组。对于顶层元素，`scopedId === id`。对于内联子合成内部的元素，它是 `\"hf-HOST/hf-LEAF\"`。",
     "**4. 用类型化方法编辑元素** 类型化方法是最可读的修改合成的方式。每个方法都直接翻译为一次分发的 `EditOp`，并发出 patch 事件。",
     "当多个修改应折叠为一次撤销条目、一次持久化写入与一次 `change` 事件时，使用 `batch()`： **5. 序列化和释放** `serialize()` 返回完整更新后的 HTML 字符串。用完后调用 `dispose()` 释放事件处理器与内部状态。"
    ],
    "codeBlocks": [
     {
      "code": "npm install @hyperframes/sdk",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\nconst html = `<div class=\"clip\" data-start=\"0\" data-duration=\"5\"\n                data-hf-id=\"hf-title\">Launch day</div>`;\n\nconst comp = await openComposition(html);",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "// All elements\nconst all = comp.getElements();\n\n// Elements whose text contains \"Launch\"\nconst ids = comp.find({ text: \"Launch\" });\n\n// A specific element by its hf-id\nconst el = comp.getElement(\"hf-title\");\nconsole.log(el?.text); // \"Launch day\"",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "// Change text\ncomp.setText(\"hf-title\", \"Launch day — we shipped!\");\n\n// Change inline styles (camelCase property names)\ncomp.setStyle(\"hf-title\", {\n  color: \"#FFD60A\",\n  fontSize: \"96px\",\n  fontWeight: \"700\",\n});\n\n// Adjust clip timing\ncomp.setTiming(\"hf-title\", { start: 0.5, duration: 4 });",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.batch(() => {\n  comp.setText(\"hf-title\", \"Launch day — we shipped!\");\n  comp.setStyle(\"hf-title\", { color: \"#FFD60A\" });\n  comp.setTiming(\"hf-title\", { start: 0.5, duration: 4 });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const updatedHtml = comp.serialize();\ncomp.dispose();\n\n// updatedHtml is ready to write to disk, send to a renderer, or store in a database.",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "添加持久化适配器",
    "p": "",
    "paras": [
     "上述 headless 模式适合一次性变换。当你希望 SDK 持久化编辑时，传入 `PersistAdapter`。快速变更会被合并并按顺序写入，以最新状态为准，而不是每次 UI 事件都写一次磁盘。",
     "文件系统适配器（`@hyperframes/sdk/adapters/fs`）写入本地目录，并保留滚动版本历史。",
     "该适配器在每次修改后写入 `./project/index.html`，并在 `./project/.hf-versions/` 下最多保留 20 个版本快照。",
     "[!NOTE] 禁用撤销（`history: false`）**不会**禁用自动保存。两者相互独立。只有当你自己管理撤销栈时才需要传 `history: false`。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\nimport { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\nimport { readFile } from \"node:fs/promises\";\n\n// Load the current HTML from disk (or use a template string on first run).\nconst html = await readFile(\"./project/index.html\", \"utf8\").catch(() => \"<div></div>\");\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: \"./project\" }),\n  persistPath: \"index.html\",\n});\n\n// Persistence failures surface as events, not thrown errors.\ncomp.on(\"persist:error\", ({ error }) => {\n  console.error(\"Autosave failed:\", error.message);\n});\n\ncomp.setText(\"hf-title\", \"Autosaved title\");\ncomp.setStyle(\"hf-title\", { color: \"#22C55E\" });\n\n// Drain any pending write before the process exits.\nawait comp.flush();\ncomp.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "[card] [Querying & Editing Elements](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md) FindQuery fields, scopedId for sub-compositions, batch semantics, and element handles.",
     "[card] [Undo, Redo & Patches](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) History module, patch events for host sync, and applyPatches loop prevention.",
     "[card] [Persistence](https://hyperframes.heygen.com/sdk/guides/persistence.md) Adapter selection, version history, and implementing a custom adapter.",
     "[card] [openComposition reference](https://hyperframes.heygen.com/sdk/reference/open-composition.md) Full option reference — adapters, overrides, coalesce window, and more."
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[How HyperFrames fits into an application](https://hyperframes.heygen.com/developers/overview.md)",
     "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
     "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)"
    ]
   }
  ]
 },
 "sdk-timing": {
  "lede": "HyperFrames 合成中的每个片段在时间线上有个位置（`data-start`、`data-duration`），并可附一个可选动画。SDK 为两者都提供类型化辅助：时序 API 控制元素*何时*出现、停留多久；动画 API 控制它*如何*在该窗口中移动。",
  "sections": [
   {
    "h": "读取时序",
    "p": "",
    "paras": [
     "`getElementTimings()` 返回 `Record<HfId, ElementTimingSnapshot>` —— 每个带时序数据的元素一项。值每次调用都从实时 DOM 派生（永不缓存快照）。键是 `scopedId`：顶层元素等于裸 `id`，子合成内部元素为 scoped 形式 `\"hf-HOST/hf-LEAF\"`。",
     "每个 `ElementTimingSnapshot` 包含： **enterAt** `number` 元素进入的绝对时间线位置（秒）。",
     "**exitAt** `number` 元素退出的绝对时间线位置（秒）。",
     "**labels** `string[]` 数值位置落在 `[enterAt, exitAt]` 内的 GSAP 时间线标签名。每次 `getElementTimings()` 调用都从 GSAP 脚本重新解析 —— 永不过期。",
     "[!NOTE] `getElementTimings()` 只包含有 `data-start` 且有 `data-duration` 或 `data-end` 属性的元素。无时序元素被省略。该方法在两者并存时优先 `data-duration` 而非 `data-end − data-start`，与 `setTiming` 的行为一致。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(html);\nconst timings = comp.getElementTimings();\n\nfor (const [id, t] of Object.entries(timings)) {\n  console.log(id, t.enterAt, \"→\", t.exitAt, \"labels:\", t.labels);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "在单个元素上设置时序",
    "p": "",
    "paras": [
     "三个字段都可选 —— 只传你想改的： **start** `number` 片段开始时间，以秒计。",
     "**duration** `number` 片段时长，以秒计。",
     "**trackIndex** `number` 零基轨道索引。"
    ],
    "codeBlocks": [
     {
      "code": "// Move hf-title to start at 1.0 s, last 2.5 s, on track 0\ncomp.setTiming(\"hf-title\", { start: 1.0, duration: 2.5, trackIndex: 0 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "在一次批次中更新多个元素",
    "p": "",
    "paras": [
     "`setElementTiming(map)` 在单个批次内为每个条目分发一次 `setTiming` op，因此历史记为一步撤销，patch 监听器看到一个事件： 未知 id 被悄悄跳过。"
    ],
    "codeBlocks": [
     {
      "code": "comp.setElementTiming({\n  \"hf-title\": { start: 0.5, duration: 2.0 },\n  \"hf-logo\": { start: 0.0, duration: 5.0, trackIndex: 1 },\n  \"hf-cta\": { start: 3.0, duration: 2.5 },\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "弹性保持",
    "p": "",
    "paras": [
     "弹性保持冻结或循环元素时间线窗口的一部分。在不改变片段时长的情况下，用它在两个动画段之间保持一帧静止画面。",
     "`ElasticHold` 字段： **start** `number` 保持开始的绝对合成时间。",
     "**end** `number` 保持结束的绝对合成时间。",
     "**fill** `\"freeze\" | \"loop\"` `\"freeze\"` 把最后一帧保持到 `end`；`\"loop\"` 从 `start` 回到 `start` 重复该段。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.setHold(\"hf-card\", {\n  start: 1.5, // hold begins at this time within the composition\n  end: 4.0, // hold ends at this time\n  fill: \"freeze\", // \"freeze\" | \"loop\"\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "GSAP Tweens",
    "p": "",
    "paras": [
     "GSAP tween 是主要的动画原语。SDK 从 `element.animationIds`（查询 API 返回）读取 tween ID，并通过 `addGsapTween`、`setGsapTween` 与 `removeGsapTween` 写入。"
    ],
    "codeBlocks": []
   },
   {
    "h": "添加 tween",
    "p": "",
    "paras": [
     "`addGsapTween` 返回新分配的动画 ID，为 `string`。"
    ],
    "codeBlocks": [
     {
      "code": "const animId = comp.addGsapTween(\"hf-title\", {\n  method: \"from\",\n  position: 0.5,\n  duration: 0.6,\n  ease: \"power3.out\",\n  properties: { opacity: 0, y: 40 },\n});\n// animId is the newly-assigned animation ID — store it for subsequent edits",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "GsapTweenSpec 字段",
    "p": "",
    "paras": [
     "**method** `\"from\" | \"to\" | \"fromTo\" | \"set\"` 要调用的 GSAP 时间线方法。",
     "**position** `number | string` 时间线位置：数字（秒）或标签相对字符串（如 `\"intro+=0.3\"`）。`addWithKeyframes` / `replaceWithKeyframes` 要求纯数字 —— 见下方 [关键帧](#keyframes)。",
     "**duration** `number` tween 时长，以秒计。",
     "**ease** `string` GSAP ease 字符串，如 `\"power2.inOut\"`。",
     "**fromProperties** `Record\\<string, unknown\\>` `\"fromTo\"` tween 的起始属性。",
     "**toProperties** `Record\\<string, unknown\\>` 结束属性 —— 与 `\"fromTo\"` 搭配使用。",
     "**properties** `Record\\<string, unknown\\>` `\"from\"` 的起始值、`\"to\"` 的目标值，或 `\"set\"` 的立即值。省略 `toProperties` 时还为 `\"fromTo\"` 供给目的地。",
     "**repeat** `number` 重复次数（`-1` = 无限）。映射到 GSAP 的 `repeat` 选项。",
     "**yoyo** `boolean` 为 `true` 时每次重复交替方向。",
     "**stagger** `number | Record\\<string, unknown\\>` GSAP stagger 量（秒）或完整 stagger 配置对象。"
    ],
    "codeBlocks": []
   },
   {
    "h": "修改 tween",
    "p": "",
    "paras": [
     "`setGsapTween` 接收动画 ID 与 `Partial<GsapTweenSpec>` —— 只更新你传入的键。"
    ],
    "codeBlocks": [
     {
      "code": "// Change ease and duration — all other fields stay as-is\ncomp.setGsapTween(animId, { ease: \"elastic.out(1, 0.5)\", duration: 0.9 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "移除 tween",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "comp.removeGsapTween(animId);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "查找动画 ID",
    "p": "",
    "paras": [
     "查询元素快照，找出附着于给定元素的动画 ID："
    ],
    "codeBlocks": [
     {
      "code": "const el = comp.getElement(\"hf-title\");\nconst [firstAnimId] = el?.animationIds ?? [];\nif (firstAnimId) {\n  comp.setGsapTween(firstAnimId, { ease: \"none\" });\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "用 `can()` 把关 op",
    "p": "",
    "paras": [
     "`dispatch()` 不运行验证，因此任何可能失败的 op 都应先用 `can()` 把关，结果非 `ok` 时跳过。添加 tween 或标签需要挂到时间线上 —— 若脚本中没有 `gsap.timeline()`，`can()` 返回 `E_NO_GSAP_TIMELINE`：",
     "`can()` 返回的稳定错误码：",
     "| 代码 | 含义 |",
     "| - | - |",
     "| `E_TARGET_NOT_FOUND` | 目标 `HfId` 在文档中不存在。 |",
     "| `E_NO_ROOT` | 文档没有根元素。 |",
     "| `E_NO_GSAP_TIMELINE` | GSAP 脚本没有可挂载的 `gsap.timeline()`。先声明一个再重试。 |",
     "| `E_NO_GSAP_SCRIPT` | 合成没有内嵌 GSAP 脚本。 | ***"
    ],
    "codeBlocks": [
     {
      "code": "const op = {\n  type: \"addGsapTween\",\n  target: \"hf-title\",\n  tween: { method: \"to\", properties: { opacity: 1 }, duration: 0.5 },\n} as const;\n\nconst check = comp.can(op);\nif (!check.ok) {\n  if (check.code === \"E_NO_GSAP_TIMELINE\") {\n    // No gsap.timeline() in this composition — add one (var tl = gsap.timeline(...)) or skip\n    console.warn(\"GSAP timeline not available:\", check.message);\n  }\n  return;\n}\n\ncomp.dispatch(op);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "关键帧",
    "p": "",
    "paras": [
     "关键帧动画用 `addWithKeyframes` 与 `replaceWithKeyframes`。两者都作用于 GSAP CSS-keyframes 层，并返回铸出的动画 ID。"
    ],
    "codeBlocks": []
   },
   {
    "h": "添加关键帧 tween",
    "p": "",
    "paras": [
     "返回新的动画 ID 字符串，op 被拒绝时返回 `\"\"`。"
    ],
    "codeBlocks": [
     {
      "code": "const animId = comp.addWithKeyframes(\n  \"#hf-badge\", // CSS selector targeting the element\n  1.0, // timeline position in seconds (number only)\n  0.8, // duration in seconds\n  [\n    { percentage: 0, properties: { opacity: 0, scale: 0.8 } },\n    { percentage: 60, properties: { opacity: 1, scale: 1.05 }, ease: \"power2.out\" },\n    { percentage: 100, properties: { scale: 1 } },\n  ],\n  \"power2.inOut\", // optional overall ease\n);",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "替换已有的关键帧 tween",
    "p": "",
    "paras": [
     "[!WARNING] `replaceWithKeyframes` 等价于在一个原子 op 中做 `removeGsapTween` + `addWithKeyframes`。因为位置派生的 tween ID 在移除步骤后重新编号，返回的 ID 永远是**新** ID，不得假设等于输入的 `animationId`。替换后重新查询 `element.animationIds` 以获取当前集合。"
    ],
    "codeBlocks": [
     {
      "code": "const newAnimId = comp.replaceWithKeyframes(oldAnimId, \"#hf-badge\", 1.0, 1.2, [\n  { percentage: 0, properties: { x: -60, opacity: 0 } },\n  { percentage: 100, properties: { x: 0, opacity: 1 }, ease: \"back.out(1.7)\" },\n]);\n// newAnimId !== oldAnimId — position-derived IDs renumber after the remove",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "KeyframeSpec 字段",
    "p": "",
    "paras": [
     "**percentage** `number` tween 内位置，百分数（0–100）。",
     "**properties** `Record\\<string, number | string\\>` 此关键帧的 CSS / GSAP 属性。",
     "**ease** `string` 从此关键帧到下一关键帧应用的单关键帧 ease。",
     "**auto** `boolean` GSAP 端点标志 —— 为 `true` 时，该关键帧自动取元素当前值。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更底层关键帧与标签 op",
    "p": "",
    "paras": [
     "底层操作 —— 单个关键帧修改（`addGsapKeyframe`、`setGsapKeyframe`、`removeGsapKeyframe`）、属性移除、弧线路径、标签插入、动画分割 —— 直接用 `dispatch()` 及相应 `EditOp` 类型。完整 op 联合见 [Edit Operations reference](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
     "*** [card] [Edit Operations](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) Full reference for every op type in the `EditOp` union, including lower-level keyframe and arc",
     "ops. [card] [Types](https://hyperframes.heygen.com/sdk/reference/types.md) `GsapTweenSpec`, `KeyframeSpec`, `ElasticHold`, `ElementTimingSnapshot`, and all related types.",
     "[card] [GSAP Animation Guide](https://hyperframes.heygen.com/guides/gsap-animation.md) Authoring GSAP timelines in composition HTML.",
     "[card] [Animation in Studio](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes) Keyframe authoring patterns and best practices."
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Edit timing on the timeline](https://hyperframes.heygen.com/studio/timeline.md)",
     "[Imported film HTML](https://hyperframes.heygen.com/guides/imported-film-html.md)",
     "[Compositions](https://hyperframes.heygen.com/concepts/compositions.md)"
    ]
   }
  ]
 },
 "sdk-types": {
  "lede": "本页记录从 `@hyperframes/sdk` 导出的核心类型，已对照 `packages/sdk/src/types.ts` 以及 `packages/sdk/src/index.ts` 中的导出桶核实。适配器、历史记录和持久化类型随接收它们的 API 而存在——请见[适配器](https://hyperframes.heygen.com/sdk/reference/adapters.md)、[工具](https://hyperframes.heygen.com/sdk/reference/utilities.md)、[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)和[openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md)。",
  "sections": [
   {
    "h": "HfId",
    "p": "",
    "paras": [
     "稳定的 HyperFrames 元素标识符——`ensureHfIds` 打到每个可编辑元素上的 `data-hf-id` 属性值。在本应写原始 `string` 处使用 `HfId`，可表明该值是元素 id。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "type HfId = string;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "HyperFramesElement",
    "p": "",
    "paras": [
     "单个可编辑元素的完整 DOM 级视图。由 `comp.getElements()` 和 `comp.getElement(id)` 返回。",
     "**id** `string` 元素的 `data-hf-id` 值——在顶层文档内唯一。",
     "**scopedId** `string` 完全限定的作用域标识符：`host-chain-prefix/leaf`，以 `/` 分隔。对于顶层元素，`scopedId === id`。对于内联子组合中的元素，格式为 `\"hf-HOST/hf-LEAF\"`（任意深度）。在寻址子组合元素时，请使用 `scopedId`——而不是 `id`——作为 `dispatch()` 目标、`getElement()`、`find()` 和 `OverrideSet` 键的规范键。",
     "**tag** `string` 小写 HTML 标签名（`\"div\"`、`\"img\"`、`\"p\"`，……）。",
     "**children** `readonly HyperFramesElement[]` 直接子元素。可用 `@hyperframes/sdk` 工具中的 `flatElements()` 构建扁平列表。",
     "**inlineStyles** `Readonly\\<Record\\<string, string\\>\\>` 以 camelCase 表示的内联 CSS 属性，与 `CSSStyleDeclaration` 约定一致（`fontSize`，而非 `font-size`）。",
     "**classNames** `readonly string[]` 元素的类列表。",
     "**attributes** `Readonly\\<Record\\<string, string\\>\\>` 除 `style`、`class` 和 `data-hf-*` 之外的所有 HTML 属性（它们在模型中另有表示）。",
     "**text** `string | null` 元素的直接文本内容，用作 `setText` 目标。不是完整的后代文本快照。",
     "**start** `number | null` 以秒计的计时开始（`data-start`）。元素没有计时属性时为 `null`。",
     "**duration** `number | null` 以秒计的计时时长（`data-duration`）。未设置时为 `null`。",
     "**trackIndex** `number | null` 基于零的轨道索引（`data-track-index`）。未设置时为 `null`。",
     "**animationIds** `readonly string[]` 目标是该元素的 GSAP tween 的 ID。传给 `dispatch()` 中的 GSAP tween 操作。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface HyperFramesElement {\n  readonly id: string;\n  readonly scopedId: string;\n  readonly tag: string;\n  readonly children: readonly HyperFramesElement[];\n  readonly inlineStyles: Readonly<Record<string, string>>;\n  readonly classNames: readonly string[];\n  readonly attributes: Readonly<Record<string, string>>;\n  readonly text: string | null;\n  readonly start: number | null;\n  readonly duration: number | null;\n  readonly trackIndex: number | null;\n  readonly animationIds: readonly string[];\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ElementSnapshot",
    "p": "",
    "paras": [
     "`HyperFramesElement` 的类型别名。用于 `getElements()` 和 `getElement()` 的返回类型，以表明该值是只读快照——后续修改后不会更新。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "type ElementSnapshot = HyperFramesElement;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "SdkDocument",
    "p": "",
    "paras": [
     "SDK 的内存文档模型。由 `buildDocument()` 返回。",
     "**roots** `readonly HyperFramesElement[]` 组合 body 的顶层元素。通过 `.children` 遍历树。",
     "**gsapScript** `string | null` 组合 GSAP `<script>` 块的原始内容，若存在。",
     "**styles** `string | null` 组合 `<style>` 块的原始内容，若存在。",
     "**width** `number | null` 来自根元素 `data-width` 的组合宽度（像素）。未设置时为 `null`。",
     "**height** `number | null` 来自 `data-height` 的组合高度（像素）。未设置时为 `null`。",
     "**compositionDuration** `number | null` 来自根元素 `data-duration` 的总时长（秒）。未设置时为 `null`。",
     "**html** `string` 构建时 `ensureHfIds` 标记后 HTML 的快照。该值在修改后**永不更新**——请调用 `comp.serialize()` 获取当前文档状态。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface SdkDocument {\n  readonly roots: readonly HyperFramesElement[];\n  readonly gsapScript: string | null;\n  readonly styles: string | null;\n  readonly width: number | null;\n  readonly height: number | null;\n  readonly compositionDuration: number | null;\n  readonly html: string;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "OverrideSet",
    "p": "",
    "paras": [
     "叠加在基础组合模板之上的稀疏覆盖映射。用于嵌入覆盖模式（T3）——作为 `overrides` 传给 `openComposition()`，或用 `comp.getOverrides()` 读取累积的增量。",
     "**键格式：** `hfId.prop.path`，其中： **`null` 值** = 删除标记：元素或属性已被用户删除。",
     "[!WARNING] 值联合类型包含 `Record<string, unknown>`，以容纳对象值变量（字体、图像）。读取 `OverrideSet` 值的代码必须在假设为标量之前先收窄——对象值在任何接受 `unknown` 处都通过类型检查。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "type OverrideSet = Record<\n  string,\n  string | number | boolean | Record<string, unknown> | null\n>;",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const overrides: OverrideSet = {\n  \"hf-title.text\": \"Customer headline\",\n  \"hf-logo.attr.src\": \"/customers/acme/logo.png\",\n  \"hf-title.style.color\": \"#0EA5E9\",\n  \"hf-old-badge\": null,                         // element removed\n  \"var.brand-font\": {                            // font variable\n    name: \"Inter\",\n    source: \"https://fonts.googleapis.com/css2?family=Inter\",\n  },\n};",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ],
    "bullets": [
     "`hfId.style.fontSize`——内联样式属性覆盖",
     "`hfId.text`——文本内容覆盖",
     "`hfId.attr.src`——属性覆盖",
     "`hfId`（仅键，值 `null`）——用户移除的元素",
     "`var.{id}`——变量覆盖；值是标量或对象（`FontValue` / `ImageValue`）"
    ]
   },
   {
    "h": "FindQuery",
    "p": "",
    "paras": [
     "传给 `comp.find(query)`，按描述符搜索元素。",
     "**tag** `string` 按小写 HTML 标签名匹配（`\"img\"`、`\"p\"`，……）。",
     "**text** `string` 按元素的直接文本内容匹配（大小写敏感子字符串匹配——用 `String.includes` 实现）。",
     "**name** `string` 按 `data-name` 属性值匹配。",
     "**track** `number` 按基于零的轨道索引（`data-track-index`）匹配。",
     "**composition** `string` 把结果限制在特定子组合内部、由宿主元素 hf-id 标识的元素。",
     "所有字段均为可选；非空字段按 AND 合并。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface FindQuery {\n  tag?: string;\n  text?: string;\n  name?: string;\n  track?: number;\n  composition?: string;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "// Find all text elements on track 2:\nconst ids = comp.find({ tag: \"p\", track: 2 });\n\n// Find inside a sub-composition:\nconst subIds = comp.find({ composition: \"hf-scene-2\", tag: \"img\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "GsapTweenSpec",
    "p": "",
    "paras": [
     "描述单个 GSAP tween 条目的创建或更新。",
     "**method** `\"from\" | \"to\" | \"fromTo\" | \"set\"` GSAP tween 方法。`\"from\"` 从给定值动画到计算值；`\"to\"` 动画到给定值；`\"fromTo\"` 从 `fromProperties` 动画到 `toProperties`；`\"set\"` 无插值直接设置。",
     "**position** `number | string` 时间轴插入位置。数字是距时间轴开始的秒数。字符串是标签相对偏移，如 `\"intro\"` 或 `\"outro-=0.5\"`。省略则追加。",
     "**duration** `number` tween 时长（秒）。",
     "**ease** `string` GSAP ease 字符串，例如 `\"power3.out\"`、`\"elastic.out(1, 0.3)\"`、`\"none\"`。",
     "**fromProperties** `Record\\<string, unknown\\>` `\"fromTo\"` tween 的起始状态属性映射。",
     "**toProperties** `Record\\<string, unknown\\>` 结束状态属性映射——`\"fromTo\"` 方法使用。",
     "**properties** `Record\\<string, unknown\\>` `\"from\"` 的起始值、`\"to\"` 的目标值、`\"set\"` 的即时值。也提供省略 `toProperties` 时 `\"fromTo\"` 的目标值。",
     "**repeat** `number` 重复次数。`-1` = 无限。",
     "**yoyo** `boolean` 在交替重复时反向。",
     "**stagger** `number | Record\\<string, unknown\\>` 多目标 tween 的 GSAP stagger 配置。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface GsapTweenSpec {\n  method: \"from\" | \"to\" | \"fromTo\" | \"set\";\n  position?: number | string;\n  duration?: number;\n  ease?: string;\n  fromProperties?: Record<string, unknown>;\n  toProperties?: Record<string, unknown>;\n  properties?: Record<string, unknown>;\n  repeat?: number;\n  yoyo?: boolean;\n  stagger?: number | Record<string, unknown>;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "KeyframeSpec",
    "p": "",
    "paras": [
     "`addWithKeyframes` 和 `replaceWithKeyframes` 使用的单个关键帧条目。这是一个结构形状，不是运行时导出——你向这些方法传入此形状的普通对象；它**不**从 `@hyperframes/sdk` 桶中重新导出，因此无需导入。",
     "**percentage** `number` tween 内关键帧停留点位置，从 0 到 100。",
     "**properties** `Record\\<string, number | string\\>` 该关键帧停留点处的 CSS 和 GSAP 属性值。",
     "**ease** `string` 从该停留点应用到下一停留点的 ease。",
     "**auto** `boolean` GSAP 端点标志。为真时，在生成的 GSAP 脚本中输出为数字 `_auto: 1`。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface KeyframeSpec {\n  percentage: number;\n  properties: Record<string, number | string>;\n  ease?: string;\n  auto?: boolean;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ElasticHold",
    "p": "",
    "paras": [
     "控制元素的弹性保持（冻结或循环）窗口。",
     "**start** `number` 保持窗口的开始（秒）。",
     "**end** `number` 保持窗口的结束（秒）。",
     "**fill** `\"freeze\" | \"loop\"` `\"freeze\"` 静态保持最后一帧；`\"loop\"` 在窗口内循环动画。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface ElasticHold {\n  start: number;\n  end: number;\n  fill: \"freeze\" | \"loop\";\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "CompositionVariable",
    "p": "",
    "paras": [
     "单个已声明变量的完整 schema——由 `comp.declareVariable()` 使用，由 `comp.listVariables()` 返回。以 `type` 判别的封闭联合；每个变体共享相同基础字段，外加各自类型专属字段。",
     "**id** `string` 稳定标识符，被 `setVariableValue`、`getVariableValue`、`removeVariable` 和 `var.{id}` 覆盖集键引用。",
     "**type** `string` 判别字段。决定适用哪个变体的额外字段，以及 `default` 的形状。",
     "**label** `string` 变量面板 UI 的人类可读名称。",
     "**default** `string | number | boolean | FontValue | ImageValue` 变量的默认值。`font` 接受字体族字符串或 `FontValue`；`image` 接受 URL 字符串或 `ImageValue`。`setVariableValue` 把整个值存到此处，包括字体 source 和图像元数据。声明读取、校验以及保存/重新打开都保留这些对象。",
     "**brandRole** `string (color, image)` 可选的语义标签，用于品牌系统工具，例如 `\"color:primary\"` 或 `\"logo:primary\"`。",
     "**options** `\\{ value: string; label: string \\}[] (enum only)` `enum` 变量的可选值。",
     "**source** `string (font only)` 字体样式表 URL（例如 Google Fonts CSS 链接），与 `default` 字体族名称配对。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface CompositionVariableBase {\n  id: string;\n  type: \"string\" | \"number\" | \"color\" | \"boolean\" | \"enum\" | \"font\" | \"image\";\n  label: string;\n  description?: string;\n}\n\ninterface StringVariable extends CompositionVariableBase {\n  type: \"string\";\n  default: string;\n  placeholder?: string;\n  maxLength?: number;\n}\n\ninterface NumberVariable extends CompositionVariableBase {\n  type: \"number\";\n  default: number;\n  min?: number;\n  max?: number;\n  step?: number;\n  unit?: string;\n}\n\ninterface ColorVariable extends CompositionVariableBase {\n  type: \"color\";\n  default: string;\n  brandRole?: string;\n}\n\ninterface BooleanVariable extends CompositionVariableBase {\n  type: \"boolean\";\n  default: boolean;\n}\n\ninterface EnumVariable extends CompositionVariableBase {\n  type: \"enum\";\n  default: string;\n  options: { value: string; label: string }[];\n}\n\ninterface FontVariable extends CompositionVariableBase {\n  type: \"font\";\n  default: string | FontValue;\n  source?: string;\n  default_name?: string;\n  default_source?: string;\n}\n\ninterface ImageVariable extends CompositionVariableBase {\n  type: \"image\";\n  default: string | ImageValue;\n  brandRole?: string;\n}\n\ntype CompositionVariable =\n  | StringVariable\n  | NumberVariable\n  | ColorVariable\n  | BooleanVariable\n  | EnumVariable\n  | FontVariable\n  | ImageVariable;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "FontValue",
    "p": "",
    "paras": [
     "`font` 组合变量的对象值。始终是对象——从不是原始 CSS 字符串。",
     "**name** `string` CSS `font-family` 值，例如 `\"Inter\"` 或 `\"'Playfair Display'\"`。",
     "**source** `string` 加载该字体所需的样式表 URL，例如 Google Fonts CSS URL。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface FontValue {\n  name: string;\n  source: string;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ImageValue",
    "p": "",
    "paras": [
     "`image` 组合变量的对象值。始终是对象——从不是原始 URL 字符串。",
     "**url** `string` 图像源 URL。",
     "**alt** `string` 无障碍的替代文本。",
     "**fit** `\"cover\" | \"contain\" | \"fill\" | \"none\" | \"scale-down\"` 图像在其容器内的 object-fit 行为。映射到 CSS `object-fit` 属性。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface ImageValue {\n  url: string;\n  alt?: string;\n  fit?: \"cover\" | \"contain\" | \"fill\" | \"none\" | \"scale-down\";\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "JsonPatchOp",
    "p": "",
    "paras": [
     "[RFC 6902](https://datatracker.ietf.org/doc/html/rfc6902) JSON Patch 的仅发出子集。SDK 从不发出 `move`、`copy` 或 `test` 操作，`applyPatches()` 会忽略此子集之外的操作。",
     "**op** `\"add\" | \"remove\" | \"replace\"` 补丁操作类型。",
     "**path** `string` 正在变更的文档位置的 RFC 6902 JSON Pointer 路径。",
     "**value** `unknown` `\"add\"` 和 `\"replace\"` 操作的新值。`\"remove\"` 省略。",
     "[!WARNING] 把补丁喂回 `applyPatches()` 的宿主必须限制在 `add`、`remove` 和 `replace`。其他 RFC 6902 操作类型会被静默忽略。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface JsonPatchOp {\n  op: \"add\" | \"remove\" | \"replace\";\n  path: string;\n  value?: unknown;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PatchEvent",
    "p": "",
    "paras": [
     "每次已提交的变更后由 `comp.on('patch', handler)` 发出（单次 `dispatch()` 或完成的 `batch()`）。",
     "**formatVersion** `1` 始终为 `1`。`formatVersion` 的变化是破坏性变更。宿主应在启动时检查一次此值，并拒绝未知版本。",
     "**patches** `readonly JsonPatchOp[]` 把先前文档状态变换为新状态的前向补丁。",
     "**inversePatches** `readonly JsonPatchOp[]` 撤销此变更的逆向补丁——应用到新状态可回到先前状态。为宿主侧撤销栈存储这些补丁。",
     "**origin** `unknown` 从修改入口原样重新发出。通过检查 `origin === ORIGIN_APPLY_PATCHES` 识别自动化补丁。",
     "**opTypes** `readonly string[]` 来自 `EditOp.type` 字段的语义操作名（例如 `[\"setStyle\", \"setText\"]`）。适用于分析和历史标签。**未版本化**——请勿用于分支逻辑。",
     "**循环防护。** 当宿主通过 `applyPatches()` 把补丁事件镜像回 SDK 时，必须跳过源自于该调用的事件，以避免无限循环： ***"
    ],
    "codeBlocks": [
     {
      "code": "interface PatchEvent {\n  readonly formatVersion: 1;\n  readonly patches: readonly JsonPatchOp[];\n  readonly inversePatches: readonly JsonPatchOp[];\n  readonly origin: unknown;\n  readonly opTypes: readonly string[];\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return;\n  saveToHostHistory({ patches, inversePatches });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "CanResult",
    "p": "",
    "paras": [
     "由 `comp.can(op)` 返回。完整使用模式请见 [`编辑操作`](https://hyperframes.heygen.com/sdk/reference/edit-operations)。",
     "**ok** `boolean` `dispatch(op)` 会成功时为 `true`。会成为空操作或错误时为 `false`。",
     "**code** `string` `ok: false` 时的稳定错误码——可安全用于 `switch` 语句。代码表请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md#dispatch-batch-and-can)。",
     "**message** `string` 操作无法继续原因的人类可读解释。",
     "**hint** `string` 解决问题的可选可行建议。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "type CanResult =\n  | { ok: true }\n  | { ok: false; code: string; message: string; hint?: string };",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ElementTimingSnapshot",
    "p": "",
    "paras": [
     "单个元素的解析后计时，由 `comp.getElementTimings()` 返回的 `Record<HfId, ElementTimingSnapshot>` 中的值。",
     "**enterAt** `number` 元素进入的秒数。由 `data-duration`（优先）或 `data-end − data-start` 派生，与 `setTiming` 使用相同逻辑。",
     "**exitAt** `number` 元素退出的秒数。",
     "**labels** `string[]` 该元素 `[enterAt, exitAt]` 区间内数字位置的 GSAP `addLabel` 名称。每次 `getElementTimings()` 调用时从 GSAP 脚本重新解析——从不缓存。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface ElementTimingSnapshot {\n  enterAt: number;\n  exitAt: number;\n  labels: string[];\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "SelectionProxy",
    "p": "",
    "paras": [
     "`comp.selection()` 返回的代理。在调用时解析当前选择，并在一个 batch 内按 id 应用操作。由于每次调用 `comp.selection()` 时都会重新解析 `ids`，两次调用之间的选择变更会被自动拾取。",
     "**ids** `readonly string[]` 调用 `comp.selection()` 时刻当前选择中的 hf-id。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface SelectionProxy {\n  readonly ids: readonly string[];\n  setStyle(styles: Record<string, string | null>): void;\n  setText(value: string): void;\n  setAttribute(name: string, value: string | null): void;\n  setTiming(timing: { start?: number; duration?: number; trackIndex?: number }): void;\n  removeElement(): void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const sel = comp.selection();\nif (sel.ids.length > 0) {\n  sel.setStyle({ opacity: \"0.5\" });\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ElementHandle",
    "p": "",
    "paras": [
     "`comp.element(id)` 返回的柯里化元素句柄。仅持有 id 字符串——没有过期引用隐患——并提供与 `Composition` 上类型化方法相同的修改方法。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface ElementHandle {\n  readonly id: string;\n  setStyle(styles: Record<string, string | null>): void;\n  setText(value: string): void;\n  setAttribute(name: string, value: string | null): void;\n  setTiming(timing: { start?: number; duration?: number; trackIndex?: number }): void;\n  removeElement(): void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const title = comp.element(\"hf-title\");\ntitle.setText(\"Launch Day\");\ntitle.setStyle({ color: \"#FFD60A\", fontSize: \"96px\" });\ntitle.setTiming({ start: 0.5, duration: 3 });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "CompositionVariableType",
    "p": "",
    "paras": [
     "组合变量的已声明类型。从 `@hyperframes/parsers` 重新导出；`VARIABLE_TYPES` 是匹配的运行时列表，适用于需要集合而非联合的校验器。"
    ],
    "codeBlocks": [
     {
      "code": "type CompositionVariableType =\n  | \"string\" | \"number\" | \"color\" | \"boolean\" | \"enum\" | \"font\" | \"image\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "VariableUsageScan",
    "p": "",
    "paras": [
     "静态扫描组合脚本变量读取的结果。`usedIds` 按首次发现顺序排列。脚本以扫描无法解析的方式访问变量——计算键、剩余展开、values 对象逃逸到调用中——或解析失败时，`scanIncomplete` 为 `true`；此时 `usedIds` 是下界而非完整列表，因此请把未列出的 id 视为未知而非未使用。"
    ],
    "codeBlocks": [
     {
      "code": "interface VariableUsageScan {\n  usedIds: string[];\n  scanIncomplete: boolean;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ORIGIN\\_APPLY\\_PATCHES / ORIGIN\\_LOCAL",
    "p": "",
    "paras": [
     "保留的 `origin` 标签常量： ***"
    ],
    "codeBlocks": [
     {
      "code": "const ORIGIN_APPLY_PATCHES = \"@hyperframes/sdk:applyPatches\";\nconst ORIGIN_LOCAL = \"local\";",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.on(\"patch\", ({ origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // skip — would loop\n  if (origin === ORIGIN_LOCAL) {\n    // user-driven edit — sync to collaboration layer\n  }\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ],
    "bullets": [
     "**`ORIGIN_APPLY_PATCHES`**——由 `comp.applyPatches()` 自动设置。监听器**必须**跳过此来源，以防止在把补丁事件镜像回 SDK 时出现撤销循环。使用命名空间字符串（而非唯一 Symbol），使哨兵值能跨越 realm 边界（如 `postMessage` 和结构化克隆）存活，T3 嵌入宿主可能用它们转发补丁事件。",
     "**`ORIGIN_LOCAL`**——调用 `dispatch()` 或 `batch()` 未提供显式 `origin` 选项时的默认来源。表示 UI 驱动的用户编辑。"
    ]
   },
   {
    "h": "EditOp",
    "p": "",
    "paras": [
     "所有可派发编辑操作的完整联合。完整目录（含字段说明和代码示例）请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "type EditOp =\n  | { type: \"setStyle\"; target: HfId | HfId[]; styles: Record<string, string | null> }\n  | { type: \"setText\"; target: HfId | HfId[]; value: string }\n  | { type: \"setAttribute\"; target: HfId | HfId[]; name: string; value: string | null }\n  | { type: \"setTiming\"; target: HfId | HfId[]; start?: number; duration?: number; trackIndex?: number }\n  | { type: \"setHold\"; target: HfId | HfId[]; hold: ElasticHold }\n  | { type: \"moveElement\"; target: HfId | HfId[]; x: number; y: number }\n  | { type: \"removeElement\"; target: HfId | HfId[] }\n  | { type: \"addElement\"; parent: HfId | null; index: number; html: string }\n  | { type: \"reorderElements\"; entries: Array<{ target: HfId; zIndex: number }> }\n  | { type: \"setClassStyle\"; selector: string; styles: Record<string, string | null> }\n  | { type: \"setCompositionMetadata\"; width?: number; height?: number; duration?: number }\n  | { type: \"setVariableValue\"; id: string; value: string | number | boolean | FontValue | ImageValue }\n  | { type: \"declareVariable\"; declaration: CompositionVariable }\n  | { type: \"removeVariable\"; id: string }\n  | { type: \"addGsapTween\"; target: HfId; tween: GsapTweenSpec }\n  | { type: \"setGsapTween\"; animationId: string; properties: Partial<GsapTweenSpec> }\n  | { type: \"removeGsapTween\"; animationId: string }\n  | { type: \"removeGsapProperty\"; animationId: string; property: string; from?: boolean }\n  | { type: \"setGsapKeyframe\"; animationId: string; keyframeIndex: number; position?: number; value?: Record<string, unknown>; ease?: string }\n  | { type: \"addGsapKeyframe\"; animationId: string; position: number; value: Record<string, unknown> }\n  | { type: \"removeGsapKeyframe\"; animationId: string; percentage: number }\n  | { type: \"removeAllKeyframes\"; animationId: string }\n  | { type: \"convertToKeyframes\"; animationId: string; resolvedFromValues?: Record<string, number | string> }\n  | { type: \"materializeKeyframes\"; animationId: string; keyframes: Array<{ percentage: number; properties: Record<string, number | string>; ease?: string }>; easeEach?: string; resolvedSelector?: string }\n  | { type: \"splitIntoPropertyGroups\"; animationId: string }\n  | { type: \"splitAnimations\"; originalId: string; newId: string; splitTime: number; elementStart: number; elementDuration: number }\n  | { type: \"addLabel\"; name: string; position: number }\n  | { type: \"removeLabel\"; name: string }\n  | { type: \"setArcPath\"; animationId: string; config: { enabled: boolean; autoRotate: boolean | number; segments: Array<{ curviness?: number; cp1?: { x: number; y: number }; cp2?: { x: number; y: number } }> } }\n  | { type: \"updateArcSegment\"; animationId: string; segmentIndex: number; update: { curviness?: number; cp1?: { x: number; y: number }; cp2?: { x: number; y: number } } }\n  | { type: \"removeArcPath\"; animationId: string }\n  | { type: \"unrollDynamicAnimations\"; animationId: string; elements: Array<{ selector: string; keyframes: Array<{ percentage: number; properties: Record<string, number | string> }>; easeEach?: string }> }\n  | { type: \"addWithKeyframes\"; targetSelector: string; position: number; duration: number; keyframes: KeyframeSpec[]; ease?: string }\n  | { type: \"replaceWithKeyframes\"; animationId: string; targetSelector: string; position: number; duration: number; keyframes: KeyframeSpec[]; ease?: string }\n  | { type: \"deleteAllForSelector\"; selector: string };",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PersistErrorEvent",
    "p": "",
    "paras": [
     "当自动保存写入失败时由 `comp.on('persist:error', handler)` 发出。失败非致命——会话继续正常运行。",
     "**error.message** `string` 持久化失败的人类可读描述。",
     "**error.hint** `string` 解决失败的可选建议。",
     "**error.cause** `unknown` 底层错误对象，若可用。"
    ],
    "codeBlocks": [
     {
      "code": "interface PersistErrorEvent {\n  error: { message: string; hint?: string; cause?: unknown };\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[背景强调类型](https://hyperframes.heygen.com/catalog/components/mk-emphasis-type.md)",
     "[变量轴类型](https://hyperframes.heygen.com/catalog/components/variable-axis-type.md)",
     "[类型匹配剪辑](https://hyperframes.heygen.com/catalog/components/type-match-cut.md)"
    ]
   }
  ]
 },
 "sdk-undo": {
  "lede": "SDK 的独立会话默认自带撤销/重做，并在每次变更时发出 RFC 6902 JSON patch。Patch 事件是宿主应用历史、协作编辑、审计日志与嵌入式 override 模式的集成接缝。",
  "sections": [
   {
    "h": "内置撤销与重做",
    "p": "",
    "paras": [
     "独立会话（无 `overrides` 选项者）自动附加历史模块。直接在合成上调用 `undo()` 与 `redo()`，用 `canUndo()` 与 `canRedo()` 守护 UI 状态。",
     "[!TIP] 当栈为空、或 `openComposition` 曾传 `history: false` 时，`canUndo()` 与 `canRedo()` 返回 `false`。显示撤销/重做控件前检查它们。"
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(html);\n\ncomp.setText(\"hf-title\", \"Draft A\");\ncomp.setText(\"hf-title\", \"Draft B\");\n\ncomp.canUndo(); // true\ncomp.undo();    // reverts \"Draft B\" → \"Draft A\"\ncomp.redo();    // reapplies \"Draft B\"\ncomp.canRedo(); // false — already at tip",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "退出内置历史",
    "p": "",
    "paras": [
     "当宿主应用拥有撤销栈、且希望 SDK 只发出 patch 而不建立平行内部栈时，传 `history: false`： [!NOTE] `history: false` 只禁用 SDK 撤销栈。持久化（自动保存）独立 —— 传 `history: false` 不会抑制磁盘写入。"
    ],
    "codeBlocks": [
     {
      "code": "const comp = await openComposition(html, {\n  overrides: storedOverrides,\n  history: false,\n});\n// comp.undo() / comp.redo() are no-ops — host drives history via applyPatches()",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "合并快速编辑",
    "p": "",
    "paras": [
     "历史模块在两个条件满足时把 patch 事件合并为一个撤销条目：同一 op 类型与同一元素路径在可配置窗口内被触及。这防止滑杆拖动在栈里塞出数百个分立条目。",
     "默认合并窗口为 300 ms。在 `openComposition` 中覆盖： 合并契约与 `HistoryOptions` 类型的更多说明见 [Utilities](https://hyperframes.heygen.com/sdk/reference/utilities.md)。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "const comp = await openComposition(html, {\n  coalesceMs: 500, // ms — increase for slower interactions\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Patch 事件",
    "p": "",
    "paras": [
     "每次提交变更都发出 `patch` 事件。订阅它，把 SDK 编辑镜像到你的宿主状态、审计日志或协作通道。"
    ],
    "codeBlocks": [
     {
      "code": "const off = comp.on(\"patch\", ({ formatVersion, patches, inversePatches, origin, opTypes }) => {\n  if (formatVersion !== 1) throw new Error(\"Unexpected patch format version\");\n  saveToDB({ patches, inversePatches, origin, opTypes });\n});\n\n// Unsubscribe when done\noff();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PatchEvent 字段",
    "p": "",
    "paras": [
     "**formatVersion** `1` 当前 SDK 始终为 `1`。检查它并拒绝未知版本 —— 版本提升意味着破坏性变更。",
     "**patches** `JsonPatchOp[]` 已应用的前向 patch：描述文档如何改变的 add/remove/replace ops。",
     "**inversePatches** `JsonPatchOp[]` 撤销本次变更的逆向 patch。与 `patches` 一起存储，以支持宿主拥有的撤销。",
     "**origin** `unknown` 传给 `dispatch()` 或 `batch()` 的 origin 标签。用它路由或过滤事件。",
     "**opTypes** `string[]` 产生该事件的操作语义名（如 `[\"setStyle\"]`）。用于分析与历史标签。不定版本 —— 当作信息性处理。"
    ],
    "codeBlocks": []
   },
   {
    "h": "JsonPatchOp",
    "p": "",
    "paras": [
     "SDK 只发出与接受 RFC 6902 的 add/remove/replace 子集： SDK 永不发出 `move`、`copy` 或 `test` ops，`applyPatches()` 传入时也会忽略它们。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface JsonPatchOp {\n  op: \"add\" | \"remove\" | \"replace\";\n  path: string;   // JSON Pointer (RFC 6901), e.g. \"/elements/hf-title/style/color\"\n  value?: unknown;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Origin 模型",
    "p": "",
    "paras": [
     "每次修改都带一个 origin 字符串。SDK 定义两个内置 origin：",
     "| 常量 | 取值 | 使用时机 |",
     "| - | - | - |",
     "| `ORIGIN_LOCAL` | `\"local\"` | 所有 `dispatch()` 与 `batch()` 调用的默认 |",
     "| `ORIGIN_APPLY_PATCHES` | `\"@hyperframes/sdk:applyPatches\"` | `applyPatches()` 自动应用 | 两者都从 `@hyperframes/sdk` 导出。"
    ],
    "codeBlocks": []
   },
   {
    "h": "设置自定义 origin",
    "p": "",
    "paras": [
     "在 `dispatch()` 或 `batch()` 的选项中传 `origin`，为下游路由标记事件： ***"
    ],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_LOCAL } from \"@hyperframes/sdk\";\n\ncomp.dispatch(\n  { type: \"setStyle\", target: \"hf-title\", styles: { color: \"#0EA5E9\" } },\n  { origin: \"ui:color-picker\" },\n);\n\ncomp.batch(() => {\n  comp.setText(\"hf-cta\", \"Buy Now\");\n  comp.setStyle(\"hf-cta\", { backgroundColor: \"#22C55E\" });\n}, { origin: \"template-wizard\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "用 applyPatches 做宿主拥有历史",
    "p": "",
    "paras": [
     "`history: false` 时，宿主从 SDK 发出的 patch 事件维护自己的撤销栈。要把某个撤销步骤重放到 SDK，用该栈条目的逆向 patch 调用 `applyPatches()`："
    ],
    "codeBlocks": [
     {
      "code": "// Host undo stack entry (built from PatchEvent)\ntype HostEntry = {\n  patches: JsonPatchOp[];\n  inversePatches: JsonPatchOp[];\n};\n\nlet history: HostEntry[] = [];\n\ncomp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  // Skip — this is the SDK replaying a host-initiated undo\n  if (origin === ORIGIN_APPLY_PATCHES) return;\n  history.push({ patches, inversePatches });\n});\n\nfunction hostUndo() {\n  const entry = history.pop();\n  if (!entry) return;\n  comp.applyPatches(entry.inversePatches);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "防止撤销循环",
    "p": "",
    "paras": [
     "`applyPatches()` 会给其 patch 事件自动打上 `ORIGIN_APPLY_PATCHES` 标签。你的监听器**必须**跳过该 origin，否则会形成无限循环： [!WARNING] 省略 `ORIGIN_APPLY_PATCHES` 守卫会使每次 `applyPatches()` 调用都向宿主栈压入新条目，从而又触发另一次 `applyPatches()`，如此循环。始终先检查 `origin`。",
     "`ORIGIN_APPLY_PATCHES` 是命名空间字符串（`\"@hyperframes/sdk:applyPatches\"`）而非 `Symbol`，因此能挺过 `postMessage`、结构化克隆与 JSON 往返 —— 当宿主跨帧或 worker 转发 patch 事件时很重要。"
    ],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\n\ncomp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // <-- required guard\n  history.push({ patches, inversePatches });\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "带自定义 origin 的 applyPatches",
    "p": "",
    "paras": [
     "若你希望下游监听器收到不同于默认的显式标记： 除 `ORIGIN_APPLY_PATCHES` 外的任何 origin 在 `history` 仍附加时会进入历史模块。运行宿主拥有历史时，用 `history: false` 或 `trackedOrigins` 过滤避免双重堆栈。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "comp.applyPatches(entry.inversePatches, { origin: \"host:undo\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "嵌入式 Override 模式集成",
    "p": "",
    "paras": [
     "嵌入式（T3）模式下，宿主只存储每个用户的稀疏 override 增量。把 `history: false` 与 `applyPatches()` 配对，让宿主驱动撤销，而 SDK 更新合成状态： 完整 T3 集成模式见 [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
     "*** [card] [Composition API](https://hyperframes.heygen.com/sdk/reference/composition.md) Full method signatures for `undo`, `redo`, `canUndo`, `canRedo`, `on`, `applyPatches`, `dispatch`, and `batch`.",
     "[card] [Types](https://hyperframes.heygen.com/sdk/reference/types.md) `PatchEvent`, `JsonPatchOp`, `ORIGIN_APPLY_PATCHES`, `ORIGIN_LOCAL`, and related types.",
     "[card] [Utilities](https://hyperframes.heygen.com/sdk/reference/utilities.md) `HistoryOptions`, `coalesceMs`, `trackedOrigins`, and `createHistory` internals.",
     "[card] [Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md) Full T3 embedded integration with host-owned history."
    ],
    "codeBlocks": [
     {
      "code": "import { openComposition, ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\n\nconst comp = await openComposition(baseTemplateHtml, {\n  overrides: storedUserOverrides,\n  history: false,\n});\n\nlet hostStack: HostEntry[] = [];\n\ncomp.on(\"patch\", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return;\n  hostStack.push({ patches, inversePatches });\n  // Persist the updated override set\n  saveOverrides(comp.getOverrides());\n});\n\nfunction undo() {\n  const entry = hostStack.pop();\n  if (entry) comp.applyPatches(entry.inversePatches);\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Utilities & Constants](https://hyperframes.heygen.com/sdk/reference/utilities.md)",
     "[Edit a composition with the SDK](https://hyperframes.heygen.com/sdk/quickstart.md)",
     "[Embedded Override Mode](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)"
    ]
   }
  ]
 },
 "sdk-utils": {
  "lede": "本页涵盖从 `@hyperframes/sdk` 导出、且未在 [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition)、[`Composition` 接口](https://hyperframes.heygen.com/sdk/reference/composition)、[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)、[类型](https://hyperframes.heygen.com/sdk/reference/types.md)或[适配器](https://hyperframes.heygen.com/sdk/reference/adapters.md)中覆盖的所有内容。",
  "sections": [
   {
    "h": "历史记录模块",
    "p": "",
    "paras": [
     "可选的撤销/重做模块，通过 `\"patch\"` 事件挂到 `Composition` 会话上。`openComposition()` 创建的独立会话会自动挂载历史模块——只有当你构建管理自有撤销栈的宿主应用，或需要非默认合并/深度设置时，才需要直接使用 `createHistory`。"
    ],
    "codeBlocks": [
     {
      "code": "import { createHistory } from \"@hyperframes/sdk\";\nimport type { HistoryModule, HistoryOptions, HistoryEntry } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "createHistory",
    "p": "",
    "paras": [
     "订阅 `session.on('patch')` 并构建撤销/重做栈。把同一元素上连续的同操作爆发合并为单个撤销条目，使滑块拖拽产生一个撤销步骤，而不是数百个。"
    ],
    "codeBlocks": [
     {
      "code": "function createHistory(session: Composition, opts?: HistoryOptions): HistoryModule;",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import { openComposition, createHistory } from \"@hyperframes/sdk\";\n\n// Custom history — host controls undo/redo buttons\nconst comp = await openComposition(html, { history: false });\nconst history = createHistory(comp, { coalesceMs: 500, maxEntries: 50 });\n\ncomp.setText(\"hf-title\", \"Draft v1\");\n\nhistory.canUndo(); // true\nhistory.undo();    // reverts to original\nhistory.redo();    // re-applies\n\nhistory.dispose(); // unsubscribes from patch events",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "HistoryModule",
    "p": "",
    "paras": [
     "**undo** `() =\\> boolean` 从撤销栈弹出顶部条目，并通过 `session.applyPatches()` 应用其逆向补丁，标记为 `ORIGIN_APPLY_PATCHES`。弹出条目时返回 `true`，栈为空时返回 `false`。",
     "**redo** `() =\\> boolean` 从重做栈弹出顶部条目，并重新应用其正向补丁。弹出条目时返回 `true`，栈为空时返回 `false`。任何新操作会清空重做栈。",
     "**canUndo** `() =\\> boolean` 撤销栈至少有一条条目时返回 `true`。",
     "**canRedo** `() =\\> boolean` 重做栈至少有一条条目时返回 `true`。",
     "**dispose** `() =\\> void` 从会话的 `\"patch\"` 事件注销，并清空两栈。在会话关闭时调用。"
    ],
    "codeBlocks": [
     {
      "code": "interface HistoryModule {\n  undo(): boolean;\n  redo(): boolean;\n  canUndo(): boolean;\n  canRedo(): boolean;\n  dispose(): void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "HistoryOptions",
    "p": "",
    "paras": [
     "**trackedOrigins** `unknown[]` 只有 `origin` 值出现在此数组中的操作才进入撤销栈。省略时，除 `ORIGIN_APPLY_PATCHES`（恒排除以防止撤销循环）之外的所有来源均被追踪。用它把撤销栈限制为 UI 驱动的编辑，让程序化补丁静默通过。",
     "**coalesceMs** `number` 同一路径上同操作爆发合并为单个撤销条目的毫秒窗口。时间戳在每个被合并事件上滑动，因此连续编辑会持续合并，直到出现大于 `coalesceMs` 的间隙。默认：`300`。",
     "**maxEntries** `number` 撤销栈的最大深度。超限时丢弃最旧条目。默认：`100`。"
    ],
    "codeBlocks": [
     {
      "code": "interface HistoryOptions {\n  trackedOrigins?: unknown[];\n  coalesceMs?: number;\n  maxEntries?: number;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "HistoryEntry",
    "p": "",
    "paras": [
     "条目是历史模块内部的——你不能直接创建它们。它们镜像 `PatchEvent` 字段的形状，使历史模块无需重新解析即可重建正/逆变更集。",
     "[!NOTE] 独立会话（默认）自动挂载历史记录。当你想通过 `createHistory` 或宿主自有栈自行管理撤销/重做时，向 `openComposition()` 传入 `{ history: false }`。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface HistoryEntry {\n  readonly patches: readonly JsonPatchOp[];\n  readonly inversePatches: readonly JsonPatchOp[];\n  readonly opTypes: readonly string[];\n  readonly origin: unknown;\n  readonly timestamp: number;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "持久化队列",
    "p": "",
    "paras": [
     "可选模块，订阅会话的 `\"change\"` 事件，并通过 `PersistAdapter` 调度异步写入。一次进行一项写入；最新 HTML 恒胜（后写胜合并）。通过 `openComposition()` 接入 `persist` 适配器的独立会话会自动挂载它。只有当你构建把持久化独立于 SDK 会话管理的嵌入宿主时，才直接使用 `createPersistQueue`。"
    ],
    "codeBlocks": [
     {
      "code": "import { createPersistQueue } from \"@hyperframes/sdk\";\nimport type { PersistQueueModule, PersistQueueOptions } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "createPersistQueue",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "function createPersistQueue(\n  session: Composition,\n  adapter: PersistAdapter,\n  opts?: PersistQueueOptions,\n): PersistQueueModule;",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import { openComposition, createPersistQueue } from \"@hyperframes/sdk\";\nimport { createFsAdapter } from \"@hyperframes/sdk/adapters/fs\";\n\nconst adapt = createFsAdapter({ root: \"./project\" });\nconst comp = await openComposition(html, { history: false });\n\nconst queue = createPersistQueue(comp, adapt, {\n  path: \"my-comp.html\",\n  onError: ({ error }) => console.error(\"Write failed:\", error.message),\n});\n\ncomp.setText(\"hf-title\", \"Autosaved\");\n\n// Force immediate flush before app close\nawait queue.flush();\nqueue.dispose();",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PersistQueueModule",
    "p": "",
    "paras": [
     "**flush** `() =\\> Promise\\<void\\>` 立即保存任何挂起的编辑，等待进行中的保存，并在 resolve 之前刷新适配器的存储。没有挂起编辑时，刷新存储但不写入新版本。在应用关闭或页面卸载前使用。",
     "**dispose** `() =\\> void` 取消任何挂起写入，并从会话的 `\"change\"` 事件注销。不刷新——若需确保写入最终状态，请先调用 `flush()`。"
    ],
    "codeBlocks": [
     {
      "code": "interface PersistQueueModule {\n  flush(): Promise<void>;\n  dispose(): void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "PersistQueueOptions",
    "p": "",
    "paras": [
     "**path** `string` 适配器写入路径。直接传给 `adapter.write(path, content)`。默认：`\"composition.html\"`。",
     "**onError** `(e: PersistErrorEvent) =\\> void` 当 `adapter.write()` 或 `adapter.flush()` reject 时调用。接收带 `{ error: { message, cause? } }` 的 `PersistErrorEvent`。用它在 UI 或日志层呈现持久化失败。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "interface PersistQueueOptions {\n  path?: string;\n  onError?: (e: PersistErrorEvent) => void;\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "文档工具",
    "p": "",
    "paras": [
     "从解析后的 HTML 构建 `SdkDocument` 模型和 `HyperFramesElement` 树的高层工具。这些是 SDK 每次调用 `openComposition()` 时内部使用的相同函数。你很少需要直接使用它们——它们面向在会话之外解析 HTML 的宿主，或测试场景。"
    ],
    "codeBlocks": [
     {
      "code": "import { buildDocument, buildRoots, flatElements } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "buildDocument",
    "p": "",
    "paras": [
     "把 HTML 字符串解析为 SDK 文档模型。先调用 `ensureHfIds` 使每个元素都有稳定的 `data-hf-id`。使用 `linkedom` 做 DOM 解析——Node 安全，可在智能体、CI 和服务端代码中使用。返回 `SdkDocument` 快照；实时会话上的修改不会更新返回值。"
    ],
    "codeBlocks": [
     {
      "code": "function buildDocument(html: string): SdkDocument;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "buildRoots",
    "p": "",
    "paras": [
     "从已解析（经 hf-id 标记）的 `linkedom` `Document` 构建元素树。直接遍历实时 DOM——无序列化/重解析往返。这是每次操作后会话查询 API 对其可变文档使用的实现。"
    ],
    "codeBlocks": [
     {
      "code": "function buildRoots(document: Document): HyperFramesElement[];",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "flatElements",
    "p": "",
    "paras": [
     "按文档顺序（深度优先前序）返回 `roots` 及其所有后代中的每个元素。适用于跨完整元素树搜索，而无需自己写递归遍历。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "function flatElements(roots: readonly HyperFramesElement[]): HyperFramesElement[];",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "import { buildDocument, flatElements } from \"@hyperframes/sdk\";\n\nconst doc = buildDocument(html);\nconst all = flatElements(doc.roots);\nconst images = all.filter((el) => el.tag === \"img\");",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "Id 与作用域工具",
    "p": "",
    "paras": [
     "dispatch、补丁重放和查询内部使用的高层 id 解析辅助，面向针对同一文档模型构建自有 DOM 工具的宿主。"
    ],
    "codeBlocks": [
     {
      "code": "import { resolveScoped, findById, bareId, escapeHfId, isNewHostBoundary } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "resolveScoped",
    "p": "",
    "paras": [
     "解析 `HfId`——裸（`\"hf-title\"`）或作用域（`\"hf-host/hf-leaf\"`）——对应的 `Element`。对有歧义的裸 id（同一 id 同时出现在顶层和子组合内部），优先规范顶层匹配，与 `getElement()` 自身的偏好一致。这是所有修改和补丁重放路径共享的单一解析规则——用你自己的 `querySelector` 代替可能静默命中错误的重复项。"
    ],
    "codeBlocks": [
     {
      "code": "function resolveScoped(document: Document, id: string): Element | null;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "findById",
    "p": "",
    "paras": [
     "`resolveScoped` 的薄别名，保留以在“查找”比“解析”更可读的调用点中提升清晰度。行为相同。"
    ],
    "codeBlocks": [
     {
      "code": "function findById(document: Document, id: string): Element | null;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "bareId",
    "p": "",
    "paras": [
     "把作用域 id 剥到叶段：`bareId(\"hf-host/hf-leaf\")` 返回 `\"hf-leaf\"`。对已是裸 id 的为无操作。"
    ],
    "codeBlocks": [
     {
      "code": "function bareId(scopedId: string): string;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "escapeHfId",
    "p": "",
    "paras": [
     "为安全插入 `querySelectorAll` 属性值选择器而转义 id（反斜杠和双引号）。如果你自己写原始 `[data-hf-id=\"...\"]` 选择器而不是走 `resolveScoped`/`findById` 时使用此函数。"
    ],
    "codeBlocks": [
     {
      "code": "function escapeHfId(id: string): string;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "isNewHostBoundary",
    "p": "",
    "paras": [
     "当 `el` 是内联子组合的根时返回 `true`——即它携带的 `data-composition-file` 属性值与父级不同（或父级没有）。在遍历树时用它检测“进入新子组合”，而无需硬编码属性名。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "function isNewHostBoundary(el: Element): boolean;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "变量工具",
    "p": "",
    "paras": [],
    "codeBlocks": [
     {
      "code": "import { readVariableDefault } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "readVariableDefault",
    "p": "",
    "paras": [
     "从携带 `data-composition-variables` 的元素读取已声明变量当前 `default` 值：完整文档通常为 `<html>`，模板/片段为组合根。在会话代码中优先使用类型化的 `Composition` 方法；已有声明元素时使用此辅助函数。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "function readVariableDefault(declarationElement: Element | null, id: string): unknown;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ORIGIN\\_APPLY\\_PATCHES",
    "p": "",
    "paras": [
     "`applyPatches()` 及历史模块的 `undo()` / `redo()` 方法发出的保留来源标签。宿主补丁监听器**必须**跳过此来源以避免撤销循环： 值是命名空间字符串而非 `Symbol`，因此能跨越 realm 边界——`postMessage`、结构化克隆和 JSON 序列化都能正确保留它。跨帧或跨 worker 转发补丁事件的 T3 嵌入宿主依赖此特性。命名空间前缀（`@hyperframes/sdk:`）使与宿主自选来源字符串意外冲突的概率可忽略。"
    ],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_APPLY_PATCHES } from \"@hyperframes/sdk\";\n\nconst ORIGIN_APPLY_PATCHES = \"@hyperframes/sdk:applyPatches\";",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "comp.on(\"patch\", ({ origin, patches }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // SDK-internal replay — skip\n  forwardToCollaborationLayer(patches);\n});",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "ORIGIN\\_LOCAL",
    "p": "",
    "paras": [
     "调用类型化方法（`setText`、`setStyle`，……）或不带显式 `origin` 选项的 `dispatch()` 时应用的默认来源。你可以在历史模块的 `trackedOrigins` 列表中按 `\"local\"` 过滤，只追踪用户驱动的 UI 编辑。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "import { ORIGIN_LOCAL } from \"@hyperframes/sdk\";\n\nconst ORIGIN_LOCAL = \"local\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "UnsupportedOpError",
    "p": "",
    "paras": [
     "当操作类型不被当前引擎版本处理时由 `dispatch()` 抛出。`code` 属性稳定并属于公共 API 契约的一部分——请按它切换而不是按消息字符串切换。",
     "用 `comp.can(op)` 在派发可选操作前做功能检测，避免在热路径中命中此错误： ***"
    ],
    "codeBlocks": [
     {
      "code": "import { UnsupportedOpError } from \"@hyperframes/sdk\";",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "class UnsupportedOpError extends Error {\n  readonly code = \"E_UNSUPPORTED_OP\";\n}",
      "file": "TYPESCRIPT THEME={NULL}"
     },
     {
      "code": "const result = comp.can({ type: \"setGsapTween\", animationId: id, properties: { ease: \"power2.out\" } });\nif (!result.ok) {\n  console.warn(result.message);\n  return;\n}\ncomp.setGsapTween(id, { ease: \"power2.out\" });",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "resolveNearestHfElement",
    "p": "",
    "paras": [
     "从 `el` 经 `parentElement` 向上遍历，返回携带 `[data-hf-id]` 且不是 `[data-hf-root]` 的最近祖先（含自身）。当遍历退出 DOM 而未找到匹配、匹配节点是组合根、或 `isVisible(node)` 对匹配节点返回 `false` 时返回 `null`。",
     "这是一个纯函数（除 `getAttribute` 外不调用 `window` 或 DOM API），可在普通 Node 环境中做单元测试。`createIframePreviewAdapter` 内部用它把原始点击测试结果转换为 SDK 元素 ID。点击测试和可视编辑器画布模式的完整论述请见[画布集成指南](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)。",
     "***"
    ],
    "codeBlocks": [
     {
      "code": "import { resolveNearestHfElement } from \"@hyperframes/sdk\";\n\nfunction resolveNearestHfElement(\n  el: Element | null,\n  isVisible: (el: Element) => boolean,\n): ElementAtPointResult | null;",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "resolveElementAffordances",
    "p": "",
    "paras": [
     "给定实时元素的当前 DOM 状态和模型，决定可用的编辑操作。导入自 `@hyperframes/sdk/editing` 子路径。完整文档见[编辑能力指南](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md)。",
     "*** [card] [撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) 历史模块、ORIGIN\\_APPLY\\_PATCHES 和 applyPatches() 如何协同工作。",
     "[card] [持久化](https://hyperframes.heygen.com/sdk/guides/persistence.md) 接入 PersistAdapter、处理错误，并从版本历史恢复。"
    ],
    "codeBlocks": [
     {
      "code": "import { resolveElementAffordances } from \"@hyperframes/sdk/editing\";",
      "file": "TYPESCRIPT THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
     "[速度坡道](https://hyperframes.heygen.com/reference/speed-ramps.md)",
     "[@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md)"
    ]
   }
  ]
 },
 "studio-brand": {
  "lede": "**品牌套件（brand kit）**保存你的颜色、字体、Logo 和文件。为项目选择一个套件后，智能体会按它构建每个视频：主 Logo 领衔标题和结尾卡，你的颜色和文字样式决定整体外观。",
  "sections": [
   {
    "h": "制作套件",
    "p": "",
    "paras": [
     "<video aria-label=\"Brand kits in the sidebar\" poster=\"/public/images/studio-app/spots/brand-kits-nav-v2.jpg\" playsInline preload=\"none\" />",
     "打开侧边栏 **Home** 下的 **Brand kits**。",
     "[tab] 从你的网站 在 **New brand kit** 卡片上输入你的站点，例如 `yoursite.com`，然后选择 **Scan my site**。应用会从中读取你的颜色、字体、Logo 和截图。",
     "[tab] 从你自己的文件 从项目的品牌套件菜单中选择 **New kit from your own files**。你也可以将文件拖放到对话中，让 Framey 将它们放入套件。",
     "智能体也可以从站点制作套件。它在更改套件之前会显示一张审批卡。"
    ],
    "codeBlocks": []
   },
   {
    "h": "套件包含的内容",
    "p": "",
    "paras": [
     "| 组成部分 | 用途 |",
     "| - | - |",
     "| **Colors** | 每种颜色都有角色：Main、Secondary、Accent、Text、Background 或 Neutral |",
     "| **Logos** | **Main logo** 领衔每个标题和结尾卡。可添加完整 Logo 或符号 |",
     "| **Text styles and fonts** | 视频使用的字体类型，并附带你的字体文件 |",
     "| **Files** | 智能体可使用的截图、产品图片和音频 |",
     "| **Rules** | 通俗易懂的规则，若有品牌指南 PDF 也可附上 | 要修改套件，打开它并选择 **Edit**：添加颜色、文字样式、Logo 或规则，或移除不需要的内容。完成时选择 **Done**。下一次网站扫描会保留你添加的内容。",
     "套件文件可以是图片（PNG、JPEG、WebP、AVIF、GIF、ICO、SVG）、音频（MP3、M4A、AAC、OGG、WAV）或字体（WOFF2、WOFF、TTF、OTF）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "将套件用于项目",
    "p": "",
    "paras": [
     "<video aria-label=\"The brand kit menu in a project\" poster=\"/public/images/studio-app/spots/brandkit-chip-v2.jpg\" playsInline preload=\"none\" />",
     "每个项目都有自己的套件。打开项目中的品牌套件菜单 **Brand kit for this project**，选择一个套件，或选择 **No brand kit** 让 Framey 使用简洁样式。从未选择过的项目会使用工作区的默认套件。",
     "也可以从套件页面选择 **Use this kit**，或开始 **New project with this kit**。",
     "智能体会在每条消息中读取该套件，应用会将套件文件复制到项目的 `assets/brand-kit` 文件夹，因此视频在任何地方渲染效果都相同。"
    ],
    "codeBlocks": []
   },
   {
    "h": "套件与你的团队",
    "p": "",
    "paras": [
     "工作区中的所有人都能在 **Yours** 下看到其套件，并在自己的项目中使用。你无法从 Studio 应用将套件分享到工作区之外，在 app.heygen.com 上制作的套件也不会显示在这里。只有工作区所有者或管理员才能更改工作区的品牌设置。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[了解项目界面](https://hyperframes.heygen.com/studio-app/workspace.md)",
     "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
     "[引用任意视频以重现其风格](https://hyperframes.heygen.com/studio-app/reference-video.md)"
    ]
   }
  ]
 },
 "studio-clips": {
  "lede": "**HeyGen Video 1** 根据描述生成一个不间断的镜头，最长一分钟。片段会落入项目文件，智能体将其放到时间轴上。",
  "sections": [
   {
    "h": "让智能体制作片段",
    "p": "",
    "paras": [
     "<video aria-label=\"Tools (#), then HeyGen Video 1\" poster=\"/public/images/studio-app/spots/video1-tool-v2.jpg\" playsInline preload=\"none\" />",
     "**1. 打开 Tools** 在对话中输入 **#** 打开 **HyperFrames tools**，然后选择 **HeyGen Video 1**。",
     "**2. 设置时长** 选择时长胶囊以打开 **Length in seconds**。片段可为 5 至 60 秒，默认从 15 秒开始。",
     "**3. 描述镜头** 说明发生了什么、镜头如何运动以及画面风格，然后发送。智能体会制作片段并将其放到时间轴上。",
     "你可以在同一条消息中引导片段："
    ],
    "codeBlocks": [],
    "bullets": [
     "**从一张图片开始**：提供一张图片，它将成为片段的确切第一帧。",
     "**匹配风格**：最多提供 9 张参考图。",
     "**复制动作**：提供一个 5 秒或更短的参考视频（更长的请先剪短，应用会拒绝），以及要执行动作的人物的图片。片段将是一条最多 15 秒的一镜成片，且没有起始图片。",
     "**形状**：16:9、9:16 或 1:1，480p 或 768p（768p 为默认）。"
    ]
   },
   {
    "h": "或使用 Generate media",
    "p": "",
    "paras": [
     "**Generate media** 可以在不发送对话消息的情况下制作片段。在空时间轴上或在文案栏中找到它。选择 **Video**，选择 **Video 1** 模型，设置 **Quality**，如有需要可添加 **Start from** 图片。此表单制作的片段为 5 至 15 秒，16:9 或 9:16。同一表单还提供 **H3 Max** 和 **Seedance**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "更改已有片段",
    "p": "",
    "paras": [
     "在预览中选中一个视频，选择其上方工具栏中的 **Generate media**。描述修改内容（“下雪”、“变成夜景”），然后选择 **Make**。工具栏会显示开始前最多花费以及你的密钥剩余。",
     "<video aria-label=\"Select a clip, Generate media, describe the change, Make\" src=\"https://static.heygen.ai/hyperframes-oss/docs/studio-demos/snow-demo-v2.mp4\" poster=\"/public/images/studio-app/snow-demo-v2.jpg\" muted loop playsInline preload=\"metadata\" />",
     "*“Make it snow”：HeyGen Video 1 把屋顶变白，给她换了个动作，新片段落入 Media。等待过程已被加速。* 保持片段尽量小：一个 7.8 MB 的 5 秒 1080p 文件返回了 **The references are too large to send**，而同一镜头用 720p 则成功通过。"
    ],
    "codeBlocks": []
   },
   {
    "h": "费用",
    "p": "",
    "paras": [
     "在对话中，智能体会在你提出请求后立即制作片段，不会单独确认价格；**Generate media** 表单会在开始前显示价格。套餐覆盖时由你的 HyperFrames 套餐支付，否则由 **Settings** 中密钥上的 HeyGen API 额度支付。",
     "如果片段因 **Out of API credits** 中止，请在 HeyGen 中充值后重试。如果要求你设置密钥，请在 **Settings** 中添加 HeyGen API 密钥，或选择套餐。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[用免费智能体制作视频](https://hyperframes.heygen.com/guides/free-agents.md)",
     "[为视频添加 AI 形象主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md)"
    ]
   }
  ]
 },
 "studio-connect": {
  "lede": "应用用运行在你电脑上的智能体制作视频。首次在没有智能体的情况下发送请求时，会打开 **Connect an agent** 面板：选择一个智能体，应用会为你安装，然后协助你登录。",
  "sections": [
   {
    "h": "设置一个智能体",
    "p": "",
    "paras": [
     "<video aria-label=\"Settings, Permissions: every agent and its state\" poster=\"/public/images/studio-app/spots/settings-permissions-v2.jpg\" playsInline preload=\"none\" />",
     "**1. 选择智能体** 在 **Connect an agent** 中，点击想要的智能体旁的 **Install**，或点击其电脑上已有的 **Use**。应用会询问 **Install … from …?** 并运行该公司的官方安装程序，大约需要一分钟。",
     "**2. 登录** 选择 **Sign in to Claude Code**（或你的智能体名称）并在浏览器中完成，或按面板的 Terminal 步骤操作 Antigravity、GitHub Copilot 和 OpenCode。",
     "**3. 发送** 智能体回复后，应用会发送你最初发起的请求。",
     "如果某一步失败，面板会显示可自行运行的命令：选择 **Copy**，然后 **Open Terminal**，并粘贴它。",
     "| 智能体 | 安装命令 | 登录 |",
     "| - | - | - |",
     "| Claude Code | `curl -fsSL https://claude.ai/install.sh \\| bash` | `claude auth login` |",
     "| Codex | `curl -fsSL https://chatgpt.com/codex/install.sh \\| sh` | `codex login` |",
     "| Grok | `curl -fsSL https://x.ai/cli/install.sh \\| bash` | `grok login` |",
     "| Antigravity | `curl -fsSL https://antigravity.google/cli/install.sh \\| bash` | run `agy` once |",
     "| GitHub Copilot | `curl -fsSL https://gh.io/copilot-install \\| bash` | `copilot login` |",
     "| OpenCode | `curl -fsSL https://opencode.ai/v2/install \\| bash` | optional: `opencode providers login` |"
    ],
    "codeBlocks": []
   },
   {
    "h": "权限：Auto 或 Full access",
    "p": "",
    "paras": [
     "<video aria-label=\"Settings, Agent: Auto or Full access\" poster=\"/public/images/studio-app/spots/settings-agent-v2.jpg\" playsInline preload=\"none\" />",
     "**Auto** 为默认，允许智能体在你的项目中工作并使用互联网，并阻止高风险步骤。**Full access** 允许它安装和运行任何内容，不做检查。可在 **Settings** > **Agent** 中更改。",
     "GitHub Copilot 和 OpenCode 只能在 **Full access** 下运行：首次发送到它们时，应用会要求开启 Full access。"
    ],
    "codeBlocks": []
   },
   {
    "h": "切换智能体",
    "p": "",
    "paras": [
     "<video aria-label=\"The agent picker in the chat header\" poster=\"/public/images/studio-app/spots/agent-picker-v2.jpg\" playsInline preload=\"none\" />",
     "打开对话标题栏中的智能体选择器，选择一个就绪的智能体；它会从你的下一个请求开始生效。要为每个新请求设置智能体、模型和 effort，请使用 **Settings** > **Agent**。**Settings** > **Permissions** 会列出每个智能体及其状态（**Ready**、**Not signed in**、**Not installed**、**Needs an update**）以及修复它的按钮。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[用免费智能体制作视频](https://hyperframes.heygen.com/guides/free-agents.md)",
     "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
     "[在 Studio 中继续 Claude Code 或 Codex 项目](https://hyperframes.heygen.com/studio-app/existing-project.md)"
    ]
   }
  ]
 },
 "studio-edit": {
  "lede": "每次修改都以同样的方式开始：告诉智能体在哪里、说什么，然后发送。你可以打字、指向画面中的内容、在其上绘制，或在视频的某个时刻留下评论。",
  "sections": [
   {
    "h": "输入修改",
    "p": "",
    "paras": [
     "在对话底部的输入框（会显示你的智能体名称，例如 **Text to Claude Code**）中输入并按 Enter。输入 `@` 可将时刻、素材、文件或其他项目加入消息，输入 `#` 可使用 **Storyboard** 等工具（[每个菜单和面板](https://hyperframes.heygen.com/studio-app/workspace.md)）。",
     "智能体工作期间，Enter 会引导当前运行：它会停止并用你的话重新开始。Ctrl+Enter 则相反，会将你的消息排队到下一个运行。想互换的话，请在 **Settings** > **Agent** 中更改 **While Framey works, Send**。选择项和文件始终排队。",
     "[card] [练习：审阅与修正](https://hyperframes.heygen.com/lessons/review-and-correct) 免费的 20 分钟课程，包含一个短视频、一个测验和一份练习简报。回复之前请先开声音把第一个视频完整看完。"
    ],
    "codeBlocks": []
   },
   {
    "h": "在画面上指向、绘制或评论",
    "p": "",
    "paras": [
     "<video aria-label=\"Where Comment is, under the preview\" poster=\"/public/images/studio-app/spots/comment-tool-v2.jpg\" playsInline preload=\"none\" />",
     "画面下方的工具，位于左侧：",
     "| 工具 | 用途 |",
     "| - | - |",
     "| **Select** (V) | 点击元素，选择 **Prompt to edit**（或按 A），并描述修改。再次点击可选择其容器。 |",
     "| **Draw** (D) | 圈出或标记一个位置，并说明要改什么。多次笔画会合并为一幅绘制。 |",
     "| **Comment** (C) | 在某个位置和时刻固定一条评论：**What should change here?** | 画面以 **Select** 打开。按 Escape 可从其他工具返回它。右键点击元素可获得快捷操作，如 **Ask Framey**、**Hide**、**Bring to front**、**Replace with**、**Cut out object here**（在 Mac 且为 Apple silicon 的素材上）和 **Delete**。",
     "你也可以在时间轴上绘制一段，谈论视频的某一段，例如“把这一段剪紧”。"
    ],
    "codeBlocks": []
   },
   {
    "h": "一次发送多条修改",
    "p": "",
    "paras": [
     "选择、绘制和评论不会单独运行。每一项都会成为 **Pending video edits** 中的一行。检查它们，为全部添加备注，然后用发送按钮作为一个请求发出，例如 **Send 3 edits to Claude Code**（运行期间为 **Queue 3 edits**）。选择 **Edit note** 可修改某行的文字，或选择 **Delete** 将其丢弃。"
    ],
    "codeBlocks": []
   },
   {
    "h": "自己改时间轴",
    "p": "",
    "paras": [
     "<video aria-label=\"Show timeline opens the timeline under the preview\" poster=\"/public/images/studio-app/spots/show-timeline-v2.jpg\" playsInline preload=\"none\" />",
     "有些修改手工更快。用预览下方的按钮显示时间轴。将鼠标悬停在片段上可按播放头 **Split**、**Delete**，打开 **Quick edit** 更改视频或音频片段的 **Speed**、**Volume** 和 **Fade**，向智能体咨询，或移除其背景。拖动片段可移动或裁剪它们。",
     "右键点击空白间隙可 **Close gap** 或 **Close all gaps**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "获取灵感",
    "p": "",
    "paras": [
     "<video aria-label=\"The Inspirations panel on the right\" poster=\"/public/images/studio-app/spots/inspirations-panel-v2.jpg\" playsInline preload=\"none\" />",
     "Home 的 **Remix from inspiration** 动态和项目的 **Inspirations** 标签页保存着真实视频中的短小示例时刻（**Motion graphics**、**A-roll Cuts**、**Mobile Ads**）。在 Home 上选择 **Add as inspiration**，或在标签页中选择 **Use**，可将某个时刻作为参考放入消息，然后说明如何使用并发送。"
    ],
    "codeBlocks": []
   },
   {
    "h": "撤销",
    "p": "",
    "paras": [
     "<video aria-label=\"Go back to before this, under each finished run\" poster=\"/public/images/studio-app/spots/go-back-v2.jpg\" playsInline preload=\"none\" />",
     "按 Cmd+Z 撤销，按 Cmd+Shift+Z 重做（Windows 和 Linux 上为 Ctrl+Z 和 Ctrl+Shift+Z，或 Ctrl+Y）。对话中每次智能体运行下方也有各自的 **Undo** 按钮。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[导出视频](https://hyperframes.heygen.com/studio-app/export.md)",
     "[分享视频以供审阅](https://hyperframes.heygen.com/studio-app/share.md)",
     "[在 Studio 应用中制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)"
    ]
   }
  ]
 },
 "studio-existing": {
  "lede": "在 Claude Code、Codex 或其他智能体中启动了一个视频？在 Studio 应用中打开同一个文件夹并继续工作：预览会显示在对话旁边，你可以指向画面、绘制并发表评论。不会复制或移动任何内容，因此你的智能体和应用会在同一组文件上协作。",
  "sections": [
   {
    "h": "来自你的智能体：一条命令（Mac）",
    "p": "",
    "paras": [
     "在 Claude Code、Codex 或 Grok 会话中，进入项目文件夹后运行（或让你的智能体运行）： 应用会打开该项目，并且因为命令是在你的智能体会话中运行的，所以其对话会延续那次对话，无需再解释一遍这个视频。如果改为在普通终端中运行，应用仍会打开项目，但会使用一个新的对话。",
     "目前此交接功能仅在 Mac 上可用。在 Windows 和 Linux 上，以及尚未安装应用的地方，命令会改为打印下载链接。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes open",
      "file": "BASH THEME={NULL}"
     },
     {
      "code": "◇  Opening Spring Launch in the HyperFrames desktop app\n   Its chat picks up this Claude Code conversation.\n   When the person is back here, run npx hyperframes catch-up to see what they did in the app.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "来自应用：导入项目",
    "p": "",
    "paras": [
     "<video aria-label=\"The sidebar's Import projects opens a list of the projects on this computer\" poster=\"/public/images/studio-app/spots/import-projects-v2.jpg\" playsInline preload=\"none\" />",
     "应用会查找你电脑上的 HyperFrames 项目。尚未打开过的项目会出现在侧边栏的 **Import projects** 下，并显示数量。选择某个项目上的 **Import**，或选择 **Import all**。",
     "导入会将项目加入 HyperFrames，但不会移动它：它仍留在原文件夹中，你的修改也会保存在那里。",
     "首次使用时，macOS 会在应用查看文稿、下载和桌面文件夹之前先请求许可。如果项目在别处，请选择 **File** > **Open Folder…**（<kbd>⌘</kbd> <kbd>O</kbd>，在 Windows 和 Linux 上为 <kbd>Ctrl</kbd> <kbd>O</kbd>），或将文件夹拖放到侧边栏。"
    ],
    "codeBlocks": []
   },
   {
    "h": "交回你的智能体：catch up",
    "p": "",
    "paras": [
     "回到终端后，让你的智能体 catch up，或运行： 它会列出交接以来在应用中发生的内容：你提出了什么问题、Framey 做了什么，以及哪些文件发生了变化。你的智能体会读取这些内容并从那里继续。catch up 仅在 `npx hyperframes open` 是在你的智能体会话中运行时有效；对于从普通终端打开或在应用中导入的项目，没有可供 catch up 的交接。"
    ],
    "codeBlocks": [
     {
      "code": "npx hyperframes catch-up",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[了解项目界面](https://hyperframes.heygen.com/studio-app/workspace.md)",
     "[连接你的智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)"
    ]
   }
  ]
 },
 "studio-export": {
  "lede": "视频就绪后，选择项目顶栏中的 **Export**。**Export** 面板会在画面旁打开。",
  "sections": [
   {
    "h": "这台 Mac 或云端",
    "p": "",
    "paras": [
     "在 Export 的 **Render on** 下选择视频渲染的位置：**This Mac** 或 **Cloud**。你的 HyperFrames 套餐包含云端导出：Free 每月 5 次，Pro 无限次。在 Pro 上，除非你之前选择了其他位置，否则 **Cloud** 为默认。你也可以保存 HeyGen API 密钥：通过它付费的云端渲染会从你的 API 余额中扣除。",
     "|  | This Mac | Cloud |",
     "| - | - | - |",
     "| 费用 | 免费 | 包含在你的套餐中：Free 每月 5 次云端导出，Pro 无限次。通过 HeyGen API 密钥付费时，按视频分钟数从 API 余额计费；Export 会在开始前显示价格，4K 约为 1080p 的两倍 |",
     "| 你的电脑 | 渲染完成前处于忙碌状态 | 免费。渲染时可以继续工作 |",
     "| 你的文件 | 留在你的电脑上 | 项目会上传到 HeyGen 进行渲染 |",
     "| 限制 | 任意形状和长度 | 16:9、9:16 或 1:1，24、25、30 或 60 fps，项目最大 200 MB | 密钥也可放在 **Settings** > **HeyGen API key**。如果项目超过 200 MB，请在 **Make it fit the cloud** 下选择 **Ask Framey to do it**：Framey 会把你的大视频和图片移到 HeyGen 资产中。无论哪种方式，视频都会落入你的 Downloads 文件夹。已开始的云端渲染无法停止：**Cancel** 只是停止等待，云端仍可能完成并扣除你的余额。"
    ],
    "codeBlocks": []
   },
   {
    "h": "选择文件",
    "p": "",
    "paras": [
     "| 选择 | 选项 | 默认 |",
     "| - | - | - |",
     "| **Quality** | **1080p** 或 **Project size**，项目支持时还有 **4K** | 1080p |",
     "| **Format** | **MP4**、**WebM**、**MOV** | MP4 |",
     "| **Frame rate** | 24、25、30、50、60 或 **Custom…** | 30 | 分享和上传选 MP4。只有当接收方要求其他格式时才选其他格式。"
    ],
    "codeBlocks": []
   },
   {
    "h": "渲染",
    "p": "",
    "paras": [
     "选择渲染按钮，例如 **Render 1080p MP4**。面板会显示 **Preparing**、**Drawing frames**、**Encoding the video**、**Assembling** 和 **Saving to Downloads**。你可以关闭面板继续工作；渲染会继续进行。选择 **Cancel** 可停止它。",
     "智能体构建项目期间 **Export** 不可用。请等运行完成。"
    ],
    "codeBlocks": []
   },
   {
    "h": "找到文件",
    "p": "",
    "paras": [
     "视频会保存到你的 **Downloads** 文件夹，文件名按项目加日期和时间命名，例如 `Spring Launch 2026-05-04 10.30.mp4`。完成后，面板会显示 **Export ready** 和文件大小： 发送之前，请从头到尾完整观看一遍导出文件。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Open video** 播放它。",
     "**Show in Finder**（Windows 上为 **Show in File Explorer**，Linux 上为 **Show in folder**）打开文件夹。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[分享视频以供审阅](https://hyperframes.heygen.com/studio-app/share.md)",
     "[用智能体编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)",
     "[导出与幻灯片](https://hyperframes.heygen.com/studio/export.md)"
    ]
   }
  ]
 },
 "studio-first-video": {
  "lede": "在主页输入一句话，选择 **Let's go**。智能体可能会问一两个问题，向你展示视频静帧，并得到你批准后构建它。",
  "sections": [
   {
    "h": "流程",
    "p": "",
    "paras": [
     "<video aria-label=\"The Storyboard tab above the preview\" poster=\"/public/images/studio-app/spots/storyboard-tab-v2.jpg\" playsInline preload=\"none\" />",
     "**1. 说出你想要什么** 在 **Make something** 中描述视频（例如“A 12-second launch teaser for Lumen, a running shoe that glows at night”）。用 **+** 添加文件，或在 **Reference** 中从喜欢的视频开始。",
     "**2. 回答它的提问** 当某件事重要而你没说时，智能体会用卡片提问：三个概念选哪个、产品应该是什么样、是否用你自己的图片。选一个（智能体会标出它推荐的那个），或选择 **Something else…** 输入，然后 **Send answer**。",
     "**3. 批准分镜** 开启 **Start with a storyboard**（默认）后，每个镜头会以静帧和时序显示在 **Storyboard** 标签页中。告诉它要改哪一帧，或选择 **Build the video**。",
     "**4. 观看，然后修改** 成品视频在 **Preview** 中播放。用说话、指点或绘画来修改任何内容：[用智能体编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)。",
     "如果你未登录或还没有智能体，应用会先带你完成那一步，再把请求发出去。",
     "[card] [动手练习：简报](https://hyperframes.heygen.com/lessons/the-brief) 20 分钟免费课程，含短视频、测验和一份练习简报。简报是目标、受众、两到四条具体要求，以及用引号写的确切话。"
    ],
    "codeBlocks": []
   },
   {
    "h": "或者分步来",
    "p": "",
    "paras": [
     "**Take the step by step**（在主页 **Remix from inspiration** 旁边）会从真实发布视频中取的四个部分构建发布视频。第一次使用时它也会自动打开。",
     "![The Create your first video card with Hook, Proof, Turn and Call to action slots and a field for your website or idea](https://mintcdn.com/hyperframes/_6VyncuVwS2Xkc8Q/public/images/studio-app/first-video.jpg?fit=max\\&auto=format\\&n=_6VyncuVwS2Xkc8Q\\&q=85\\&s=754df32634c21de7640ff62bf98816b0)",
     "第一个视频卡片：四个部分，然后是你的网站或想法。",
     "| 部分 | 作用 |",
     "| - | - |",
     "| **Hook** | 在最初几秒抓住注意力 |",
     "| **Proof** | 展示产品在干活 |",
     "| **Turn** | 从问题翻到答案 |",
     "| **Call to action** | 落下品牌和号召 | 把这些部分随机打乱直到喜欢，输入你的网站（它会给智能体你的字体、颜色和标志）或想法，然后选择 **Use this cut**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[使用品牌工具包](https://hyperframes.heygen.com/studio-app/brand-kits.md)",
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[安装 Studio 应用](https://hyperframes.heygen.com/studio-app/index.md)"
    ]
   }
  ]
 },
 "studio-install": {
  "lede": "Mac、Windows 和 Linux 版 HyperFrames Studio 应用是用 HyperFrames 做视频的最简单方法。你描述视频，电脑上的智能体构建它，你通过打字、指点画面、绘画或评论来修改它。你不需要写代码。小小的绿色向导 Framey 会在途中指向下一步。",
  "sections": [
   {
    "h": "下载和安装",
    "p": "",
    "paras": [
     "[tab] Mac **1. 下载** [下载 Mac 版应用](https://hyperframes.studio/studio/download?os=mac\\&src=docs-install)。一个文件适用于 Apple Silicon 和 Intel Mac。",
     "**2. 安装** 打开下载的磁盘镜像，双击 **Install HyperFrames**。安装过程会把应用复制到 Applications，并显示 **Checking it is really from HeyGen**，这可能需要一两分钟。当显示 **HyperFrames is in Applications** 后，选择 **Open HyperFrames**。",
     "如果你的 Mac 账号对 Applications 文件夹没有写入权限，安装过程会把应用放进主文件夹中的 Applications 文件夹。如果显示 **The download looks damaged**，选择 **Download again**。如果显示检查 **took too long**，说明没有安装任何东西：选择 **Try again**。",
     "[tab] Windows **1. 下载** [下载 Windows 版应用](https://hyperframes.studio/studio/download?os=windows\\&src=docs-install)。你会得到 `HyperFrames-win-x64.zip`。",
     "**2. 解压并打开** 右键 zip 并选择 **Extract All**。打开生成的 `HyperFrames-win32-x64` 文件夹，双击 `HyperFrames.exe`。应用会从那里自行更新。",
     "[tab] Linux **1. 下载** [下载 Linux 版应用](https://hyperframes.studio/studio/download?os=deb\\&src=docs-install)。64 位 Intel 和 AMD 电脑在 Debian、Ubuntu 及衍生系统上得到 `HyperFrames-amd64.deb`。",
     "**2. 安装并打开** 在终端中，进入你下载到的文件夹： ```bash theme={null} sudo apt install ./HyperFrames-amd64*.deb ``` 然后从应用菜单打开 **HyperFrames**。",
     "更想要单文件便携版，或不在 Debian 系系统上？改为 [下载 AppImage](https://hyperframes.studio/studio/download?os=linux\\&src=docs-install)，然后在下载到的文件夹中：",
     "```bash theme={null} chmod +x HyperFrames-x86_64*.AppImage ./HyperFrames-x86_64*.AppImage ``` AppImage 就是完整应用。把它放在任何喜欢的位置，下次用同样方式打开即可。"
    ],
    "codeBlocks": []
   },
   {
    "h": "首次启动",
    "p": "",
    "paras": [
     "还会有一条说明，解释应用记录哪些使用数据。选择 **Got it** 即可关闭。"
    ],
    "codeBlocks": [],
    "bullets": [
     "一份简短问卷询问你想做什么、用的哪个智能体。每个答案都是可选项，**Skip all** 也算一个答案。你选的内容决定 **Build your video** 打开的位置。如果智能体已设置好，它会成为你的首个对话。",
     "主页打开后会显示 **Create your first video** 卡片。见 [制作你的第一个视频](https://hyperframes.heygen.com/studio-app/first-video.md)。"
    ]
   },
   {
    "h": "用 HeyGen 登录",
    "p": "",
    "paras": [
     "首次启动时，在问卷之后的首次点击时，应用会要求你登录。",
     "如果登录超时，请再次选择 **Continue with HeyGen**。如果选择 **Not now**，下次点击时应用还会再询问。随时可以从 **Settings** > **Account** 登录或退出。"
    ],
    "codeBlocks": [],
    "bullets": [
     "选择 **Continue with HeyGen**。浏览器打开 hyperframes.dev。",
     "在 10 分钟内完成登录。浏览器会把你送回应用，应用显示 **You're in!**，并继续你刚才点击的操作。"
    ]
   },
   {
    "h": "更新",
    "p": "",
    "paras": [
     "<video aria-label=\"Settings, Updates: Check for updates\" poster=\"/public/images/studio-app/spots/settings-updates-v2.jpg\" playsInline preload=\"none\" />",
     "应用会自动更新。当新版本就绪后，右下角会出现圆形按钮；点击它，应用会在没有任务运行时重启，并重新打开你之前打开的项目。如需手动检查，使用 **Settings** > **Updates** > **Check for updates**。如果更新卡住，再次点击按钮并选择 **Try again**，或选择 **Download it instead**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
     "[故障排查](https://hyperframes.heygen.com/help.md)"
    ]
   }
  ]
 },
 "studio-reference": {
  "lede": "找到一个你陶醉于其剪辑的视频？把它交给 Studio 应用。你的视频会获得它的剪辑、字幕和特效，并换上你自己的人物、文案和品牌。看一遍视频比描述更快，而一个只喜欢一半的视频，也比一张空白页面更好的起点。",
  "sections": [
   {
    "h": "1. 选择视频",
    "p": "",
    "paras": [
     "在 Home 中打开 **Reference**。然后："
    ],
    "codeBlocks": [],
    "bullets": [
     "**Paste any URL**，再点击 **Use link**。一个来自 YouTube（普通视频或 Short）、TikTok、Instagram 或 X 的公开视频，最长 30 分钟，或一个已发布的 HyperFrames 项目。",
     "**Upload your reference**：从电脑中拖放一个文件。",
     "从旁边的动态中 **Pick a reference**，这些是为重混而制作的视频（Home 中也有 **Remix from inspiration**）。"
    ]
   },
   {
    "h": "2. 应用读取并选择方式",
    "p": "",
    "paras": [
     "应用会观看参考视频并决定如何重制它： 如果无法判断，它会让你在两者之间选择，然后点击 **Continue**。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**人物对镜头的视频**会变成 **Copy editing style**：你的视频会获得它的剪辑、字幕和特效，并使用你的素材或 AI 形象。",
     "**无人出镜的图形与动画**会变成 **Video brief**：用你的主题和素材重现其动态。"
    ]
   },
   {
    "h": "3. 说明主题",
    "p": "",
    "paras": [
     "对于 **Copy editing style**，应用会询问 **Who's on camera?** 对于 **Video brief**，填写 **What will your video talk about**（一两句话），并通过 **Upload assets** 添加自己的图片或片段。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Upload your own takes。** 如有需要可添加 **Editing instructions**，例如“剪掉停顿，控制在 30 秒以内”。",
     "**AI 形象：**你的照片或 HeyGen 主持人。说明形象要说什么，一两句话即可。"
    ]
   },
   {
    "h": "4. 替换为你的内容",
    "p": "",
    "paras": [
     "**What to swap** 会列出应用在参考视频中发现的部分，每项都标有出现位置，例如 “Your opening question 0:00-0:02” 或 “Your website URL 0:02-0:05”。选择每项的填充方式：",
     "| 选择 | 效果 |",
     "| - | - |",
     "| **Framey writes it** / **Framey decides** | Framey 根据你的主题填写 |",
     "| **Type yours** | 输入确切的文案 |",
     "| **Upload** | 使用你自己的文件 |",
     "| **Generate** | 生成图片或片段。选择后价格会显示在该行下方 | 为视频选择品牌套件，或选择 **No brand kit**。工作区默认值保持你设置的内容。然后点击 **Continue**；Framey 可能会就视频未说明的内容追问一两个问题。"
    ],
    "codeBlocks": []
   },
   {
    "h": "5. 与原片对比",
    "p": "",
    "paras": [
     "Framey 构建期间，预览顶部的 **Show original** 会在画面上播放参考视频。构建完成后，同一按钮会将两者并排显示在同一时间轴上，方便你查看哪些匹配、哪些不匹配。然后像编辑其他视频一样 [编辑结果](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "公平地使用他人的视频",
    "p": "",
    "paras": [
     "应用复制的是剪辑风格，而非素材：你的视频由你自己的实拍、形象、文案和素材构建。除非你拥有权利，否则不要复用原片的素材、音乐或 Logo。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[灵感](https://hyperframes.heygen.com/examples.md)",
     "[用 AI 制作解说视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
     "[制作其他任意视频](https://hyperframes.heygen.com/guides/general-video.md)"
    ]
   }
  ]
 },
 "studio-share": {
  "lede": "项目顶栏中的 **Share** 会把你的最新导出变成审阅页并复制其链接。发送给应该观看或评论的人。修改视频后，新版本会出现在同一链接上。",
  "sections": [
   {
    "h": "分享链接",
    "p": "",
    "paras": [
     "<video aria-label=\"Share in the top bar\" poster=\"/public/images/studio-app/spots/share-button-v2.jpg\" playsInline preload=\"none\" />",
     "选择 **Share**。应用会上传你最后一次的 MP4 导出，生成审阅页并复制其链接。如果还没有 MP4，它会先打开 Export 面板，导出完成即分享。参见 [导出视频](https://hyperframes.heygen.com/studio-app/export.md)。",
     "然后 HeyGen 会在审阅者看到之前检查视频。面板会显示 **Checking…**，可能需要几分钟。",
     "你需要登录 HeyGen。链接在你登录的工作区中生成，名称显示在 **Shares to** 下；选择 **Change** 可移到另一个工作区。"
    ],
    "codeBlocks": []
   },
   {
    "h": "选择谁可以打开",
    "p": "",
    "paras": [
     "默认情况下，**工作区中任何有链接的人都可以评论**。要更改，请选择 **Who has access** 下的行：",
     "| 选择 | 谁可以打开 |",
     "| - | - |",
     "| **Only you** | 无人 |",
     "| **Only people you invite** | 他们用受邀邮箱登录 |",
     "| **Anyone in** your workspace | 已登录该工作区的人，不包括外部人员 |",
     "| **Anyone with the link** | 无需登录。访客输入名字即可评论 | 在旁边选择 **can comment** 或 **can only watch**。分享尚未准备好的内容之前，请先选择 **Only you**。",
     "移除某人的访问后可以再次邀请他。他会按你选择的角色返回；被移除的人会从活跃访问列表中隐藏。"
    ],
    "codeBlocks": []
   },
   {
    "h": "发送新版本",
    "p": "",
    "paras": [
     "当项目自审阅页上的版本以来发生变化时，面板会提示。导出 MP4，然后选择 **Add this version**。链接相同：所有持有者都会看到新版本。**Open review page** 在浏览器中打开它。对于任何人可打开的链接，按钮为 **View as reviewer**，会以退出登录状态显示页面，如你的访客所见。"
    ],
    "codeBlocks": []
   },
   {
    "h": "关闭链接",
    "p": "",
    "paras": [
     "选择 **Turn off link**，然后确认。所有人会立即失去访问，评论保留。**Turn on with a new link** 会用新链接重新分享。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)",
     "[用 AI 制作解说视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
     "[制作其他任意视频](https://hyperframes.heygen.com/guides/general-video.md)"
    ]
   }
  ]
 },
 "studio-workspace": {
  "lede": "项目分为三列：左侧是与智能体的对话，中间是预览，右侧是面板。用 **Show timeline** 可在预览下方打开时间轴。",
  "sections": [
   {
    "h": "对话框：@、# 和 /",
    "p": "",
    "paras": [
     "三个按键会在你输入的位置打开菜单。",
     "<video aria-label=\"Typing @ opens the menu of things to add\" poster=\"/public/images/studio-app/spots/at-menu-v2.jpg\" playsInline preload=\"none\" />",
     "**`@` 为你的消息添加内容。** 菜单按组排列智能体可使用的一切：你添加的 **Media**、**Scenes & brand kit**、**Inspirations**（真实视频中的时刻）、**Captions** 样式、**Voices**、其他 **Projects**、**Tools**，或 **Add files from your Mac**（Windows 上为 **your PC**）。按 **Tab** 可在组之间跳转。你选择的内容会以 chip 形式显示在文字上方，让智能体清楚知道你指的是哪个文件或样式。",
     "<video aria-label=\"Typing # opens HyperFrames tools\" poster=\"/public/images/studio-app/spots/hash-tools-v2.jpg\" playsInline preload=\"none\" />",
     "**`#` 为本次请求选择工具**：**Storyboard**、**Brand kit**、**HeyGen Voice 1**、**Remove background**、**HeyGen Video 1**、**Reference video** 或 **Create assets**（部分账户还有 **Podcast edit** 和 **Computer use**）。当你想以特定方式完成某项工作时使用它（“#Remove background on the presenter, then put the title behind her”）。HeyGen 的工具在套餐覆盖时由你的 HeyGen 套餐计费，否则由 **Settings** 中的 HeyGen API 密钥计费。",
     "<video aria-label=\"Typing / opens commands and skills\" poster=\"/public/images/studio-app/spots/slash-menu-v2.jpg\" playsInline preload=\"none\" />",
     "**`/` 运行命令或开启技能。** **/clear** 开始新对话（旧消息保留在上方），在 Claude Code 中 **/compact** 缩短长对话。其下方是现成的视频格式（创始人自述、AI 解读 reel、身后卡片、头部后字幕等）以及你已安装的技能：选择一个即可为项目开启。",
     "<video aria-label=\"The Skills menu in the chat header\" poster=\"/public/images/studio-app/spots/skills-menu-v2.jpg\" playsInline preload=\"none\" />",
     "对话标题栏显示下一次请求使用的智能体、模型和 effort（点击可更改），**Skills** 列出智能体可使用的技能：HyperFrames 自带的（始终开启）、仅在选中时生效的 **Talking-head formats** 和 **Video workflows**，以及来自 Claude Code 或 Codex 的 **Your skills**。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Script：像文档一样编辑视频",
    "p": "",
    "paras": [
     "打开右面板顶部的 **Script**（部分账户从片段菜单打开）。视频中说出的每个词都会以文本形式出现。音频会发送到 HeyGen 进行转录，因此需要你的 HeyGen 登录包含此功能，或在 **Settings** 中提供 HeyGen API 密钥。",
     "选中词语（点击第一个，按住 Shift 点击最后一个），然后选择 **Cut** 或按 <kbd>⌫</kbd>。词语保留在脚本中并打上删除线，剪辑会和其他暂存内容一起等待在对话上方的 **Pending video edits** 中。选择 **Send 1 edit**（暂存越多数量越大），智能体会一次性应用全部，完成后视频会变短。若要在发送前放弃某个剪辑，请在 **Pending video edits** 中删除其行。要恢复已剪掉的词语，选中它们，选择 **Restore**，并一并发送。",
     "<video aria-label=\"Cut a sentence in the script, then send it to the agent\" src=\"https://static.heygen.ai/hyperframes-oss/docs/studio-demos/script-demo-v2.mp4\" poster=\"/public/images/studio-app/script-demo-v2.jpg\" muted loop playsInline preload=\"metadata\" />",
     "选中词语后，工具栏提供： 当智能体发现填充词或重复 take 时，脚本顶部会显示它建议的剪辑数量以及能让视频变短多少，并提供 **Keep all** 和 **Cut all**。点击建议的剪辑可查看原因，只保留或剪掉那一条。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**Comment**：针对这些词语给智能体的备注。",
     "**Cut**（已剪掉的词语上为 **Restore**）。",
     "**Fix words**：纠正转录听错的内容。音频保持不变。",
     "**Add**：在这些词语上添加 **Zoom in**、**B-roll shot** 或 **Title card**。",
     "**Make clip**（播客项目）：把词语剪成一个独立的竖版片段。",
     "**Ask**：向你的智能体询问这些词语。"
    ]
   },
   {
    "h": "Media、Captions、Inspirations、Layers",
    "p": "",
    "paras": [
     "右面板顶部的图标行 **All files**、**Captions**、**Inspirations**、**Layers**（开启审阅时还有 **Reviews**），切换面板显示的内容：",
     "<video aria-label=\"The Captions panel\" poster=\"/public/images/studio-app/spots/captions-panel-tight-v2.jpg\" playsInline preload=\"none\" />",
     "**Captions：** 91 种字幕样式。点击一个即可在对话中使用，然后说明要放在哪里。",
     "<video aria-label=\"The Inspirations panel\" poster=\"/public/images/studio-app/spots/inspirations-panel-tight-v2.jpg\" playsInline preload=\"none\" />",
     "**Inspirations：** 真实视频中的时刻（动态图形、A-roll 剪辑、移动广告、shader），为你选中的任何内容提供灵感。",
     "<video aria-label=\"The Layers panel\" poster=\"/public/images/studio-app/spots/layers-panel-tight-v2.jpg\" playsInline preload=\"none\" />",
     "**Layers：** 视频中的每个元素，从上到下排列；选中其一即可在预览中选中它。",
     "**Media** 按文件夹列出项目文件。将其加入对话即可谈论它（“use this as the background”），并可用加号按钮从电脑引入文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Framey",
    "p": "",
    "paras": [
     "预览旁的小绿色角色 Framey 会显示你的智能体正在做什么，并通知你视频已就绪或需要你处理。可在 **Settings** > **Framey** 中更改其外观。"
    ],
    "codeBlocks": []
   },
   {
    "h": "预览工具",
    "p": "",
    "paras": [
     "预览下方：**Select** 可点击任意元素（右键可 **Ask Framey**、调整图层顺序、在 Mac 且为 Apple silicon 的素材上 **Cut out object here**），**Draw** 可圈出要改的内容，**Comment** 可在某个时刻留下备注。修改会累积并一起交给智能体；参见 [用智能体编辑视频](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建并托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)",
     "[添加配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md)",
     "[引入设计：Figma、Claude Design、Open Design](https://hyperframes.heygen.com/guides/design-tools.md)"
    ]
   }
  ]
 },
 "tips-capstone": {
  "lede": "*“The Timeline”——1920x1080，约 62 秒，一条提示，一镜不切的相机，未编辑。*",
  "sections": [
   {
    "h": "想法",
    "p": "",
    "paras": [
     "概念就是产品。观众沿着一条字面时间线走——HyperFrames 正是建在它上面——从第一个打出的字符到成品 MP4。",
     "片里一切为真。真实目录计数。真实云区域。真实产品界面。镜头素材是工具正在处理的材料，不是代言。",
     "而这部片没有场景。只有一个宽世界和一台在里面穿行的相机。这就是本页最大的课。",
     "[card] [练手：分层一镜](https://hyperframes.heygen.com/lessons/layer-a-shot) 免费 10 分钟课，有短视频、测验和练习简报。按四层送一镜：分镜、时间、相机和转场、再动效与收尾。"
    ],
    "codeBlocks": []
   },
   {
    "h": "为什么前两版构建失败",
    "p": "",
    "paras": [
     "更早的两版收官片全检查都过，仍败在审阅。",
     "第一版像飘在空间里的稀疏框。第二版是打扮好的幻灯片：分开场景、硬切、动效 trapped 在每帧里。",
     "更多动画不是解法。解法是写进提示的**摄影契约**。三条规则： **一台相机，停留与横扫。** 相机一镜不切地推过一个宽世界。节奏与连续性同样重要。相机在区域之间横扫，然后缓到真停。停两秒等区域的主点落地：计数完成、落语盖戳、说出的关键词。然后加速离开。停留给横扫赋义。没有停顿，重点在动中死了。停留时世界仍在解析，所以相机休息，电影不冻。",
     "**区域以抵达切换，不以硬切。** 下个区域在相机到之前就已经露在画面边缘。前一个靠视差离开，不淡出。",
     "**没有幻灯片痕迹。** 没有元素簇居中淡入、坐一会儿、淡出。没有区域读作相机顺路过的静态幻灯。没有原地待机的假动效。",
     "三样东西也永不离框。**索道**是一条连续的线，就是时间线本身。它成了图表基线，然后地图弧线，然后波形，然后 3D 螺旋。**标尺**是顶部一条框线条。播放头跟电影真实播放时间走。**主角**是开场打出的 `<div class=\"clip\">`。它沿索道穿过每个区域，最后被渲染出来的就是它。",
     "这些不会自己发生。linter 能验时间线合法。摄影只能靠提示要。"
    ],
    "codeBlocks": []
   },
   {
    "h": "提示，逐字",
    "p": "",
    "paras": [
     "下面是整个提示，没转述没裁剪。故意长。这就是电影级需求的样子，每个子句都有活。写在 [高保真观感](https://hyperframes.heygen.com/prompting/color-grading.md#high-fidelity-looks) 的细节级别：精确十六进制、精确时间、具名缓动、文案逐字引用。",
     "三条子句是事后加的。审帧时抓到构建者漂移。所以收紧提示，补片对上： 这就是[迭代](https://hyperframes.heygen.com/prompting/overview.md#iterate-toward-the-look)的抓紧循环，应用在提示本身，下次跑不退化。",
     "Make a \\~60-second 1920x1080 promo film for HyperFrames — the open-source framework that turns hand-authored HTML and GSAP animation into deterministic, frame-accurate video. The film's concept IS the product: the viewer travels along one literal timeline — the thing HyperFrames is built on — from the first typed character to the finished MP4. Everything true, nothing invented: real catalog counts, real cloud regions, real product surfaces.",
     "**Design system: the provided `frame.md` is the single source of brand truth — read it first and obey it exactly.** It is the real HyperFrames brand (by HeyGen), dark-first: flat near-black ground (`--page-bg` `#0a0a0a`), greyscale text hierarchy (`#fafafa` / `#a1a1aa` / `#71717a`), and **mint `#3CE6AC` used sparingly as the single accent — mint means go / primary / active**. The mint→cyan gradient (`#3CE6AC → #00E3FF`) appears in exactly one place in the whole film: the final CTA lockup. Typography from the file: **ABC Solar Display 700** for the display lockups (\"WRITE HTML.\" / \"WRITE HTML. RENDER VIDEO.\"), **TT Norms Pro** for everything else, **TT Norms Pro Mono** for all machine-flavored text (code, commands, timecodes, counts, region labels) with `tabular-nums`. Sentence case everywhere except small uppercase letter-spaced eyebrows. Glass surfaces use the file's `--glass-*` tokens with real backdrop blur. Radii, borders, shadows, and easing curves come from the file's tokens (`--ease-out-quint` entrances, `--ease-spring` count-bumps). Font files are provided as woff2 assets — bundle them, don't fetch from the network.",
     "**Cinematography contract (the most important section — this is what the film lives or dies on):** * ONE continuous camera journey with a dwell-and-sweep rhythm. The whole film is a single wide world (one large scene space) that the camera dollies across — left to right, with occasional push-ins and one descent — in one unbroken move with NO hard cuts anywhere except inside the two sanctioned seam moments named below. The rhythm: the camera SWEEPS between regions, then eases to a genuine REST at each region's hero moment — a full stop of roughly 1.5–2.5 seconds while the main point lands (the hero count completing, the kicker stamping, the spoken caption line, the check completing) — then accelerates away. The dwell is what gives the sweep meaning: without the rest, emphasis dies mid-motion. During a dwell the WORLD keeps resolving (counters tick, labels stamp, secondary motion continue",
     "* Scene changes happen by ARRIVING, not cutting. The next region is already visible at the edge of frame before the camera reaches it; the previous region exits by parallax, not by fade-out.",
     "* NO slideshow tells: no element cluster that fades in centered, sits, and fades out; no region that reads as a static slide while the camera happens to pass; no motion that is just shaking or idling in place. Motion = the camera's travel + elements entering along the direction of travel + elements the camera hands off between regions.",
     "* Three persistent elements thread the ENTIRE film and are never absent:   1. **The wire** — a 3px ink-colored horizontal line, the literal timeline. It is the film's spine: every region hangs off it, the camera follows it, and it visibly continues into the next region at all times. It may bend, split into tracks, become a waveform, arc across a map, spiral into 3D — but it is always the same continuous line.",
     "  2. **The ruler** — a thin frame-ruler chrome strip across the top: tick marks, a running timecode, and a playhead marker that advances in sync with the film's actual playback time (at t=30s the playhead is at 30s). The ruler is the product's own UI language and it never leaves.",
     "  3. **The clip card** — the `<div class=\"clip\">` typed in the opening travels the whole journey: it slides onto the wire as a clip chip after being typed, rides ahead of the camera between regions (handing itself off — visible leaving one region and arriving in the next), and is the thing that finally renders at the end. It is the protagonist. **The chip sits ON the wire at every moment: bind its position to the wire's actual path geometry (sample the drawn path, seek-safe), never keyframe it independently — through every bend, arc, waveform, and dive, the chip visibly hugs the line. A chip floating off-path breaks the story.**",
     "**Message, stated once:** \"Write HTML. Render video.\" — opening hook and closing lockup. Arc: Type → Mount → Measure → Everywhere → Material → Surface → Rhythm → Depth → Render. Audience: developers evaluating a programmable video tool. Mood: focused build-up that keeps accelerating, resolving confident and warm at the render.",
     "**Direction (every region obeys it):** * Brand restraint per `frame.md`: the world is greyscale-on-near-black; `ground` `#0a0a0a` and mint `ink` `#3CE6AC` are declared as the two composition variables. The wire, the playhead, active chips, and each region's single hero accent are mint; everything else is the greyscale text/border hierarchy. No other hue anywhere — except cyan `#00E3FF`, which exists only inside the one sanctioned mint→cyan gradient on the final CTA.",
     "* VO-paced reveals: each region's elements land on their spoken cues as the camera arrives; secondary elements keep resolving while the camera is present; the region is complete just as the camera accelerates away.",
     "* Permanent chrome: the ruler (persistent element 2) plus a faint ink grid at \\~8% opacity over the ground, everywhere in the world.",
     "* Density: every region fills three roles — one focal element at display scale, at least two supporting elements on their own cues, and the chrome/wire. Asymmetric compositions; display type \\~a tenth of frame width; three depth layers with parallax between them (foreground elements slide past faster than the wire plane, backdrop slower — the parallax is what sells the continuous travel).",
     "* Negative list: no purple-blue AI gradients, no bokeh, no real browser/OS chrome screenshots, no stock photography, no third hue, no unseeded randomness, no static holds mid-film (the only near-still moment is the final lockup breath).",
     "* SFX from the media pipeline's library on the visual hits: keystrokes at the opening, a soft whoosh at each region handoff, ticks on counters and beat cuts, one riser into the render moment, one stamp on the lockup. All under the VO.",
     "**The journey (regions along the wire, \\~timings; the camera flows through these, they are NOT cuts):** **Type (0–7s).** Black-on-charcoal close-up: a cursor types real HyperFrames markup character by character — `<div class=\"clip\" data-start=\"0\" data-duration=\"4\">` and a `gsap.timeline({ paused: true })` line. As the typed line completes, the text's baseline extends and becomes **the wire** — the underline literally grows into the timeline and the camera begins its dolly along it. The typed div folds into a compact clip chip (persistent element 3) that drops onto the wire. Kinetic display type states \"WRITE HTML.\" as the travel begins.",
     "**Mount (7–14s).** Traveling along the wire: it splits into three parallel track lanes; clip chips slide in along the direction of travel and seat onto the lanes on their spoken cues (audio track chip, video track chip, our protagonist chip among them). Small mono labels (`data-start`, `data-track-index`) tag themselves onto chips as the camera passes. The lanes merge back to one wire as the camera accelerates out.",
     "**Measure (14–21s).** The wire becomes a chart baseline (same line, same thickness — no cut): adapt the **`data-chart` registry block** — six labeled bars rise from the wire itself on spoken cues while a hero numeral counts up beside them in huge tabular mono: **50+ CATALOG BLOCKS** (the real registry count; supporting chips: 19 AGENT SKILLS · 7 RUNTIME ADAPTERS — also real). The bars recede by parallax as the camera moves on; the tallest bar's top edge hands off into the next region's horizon.",
     "**Everywhere (21–28s).** The wire arcs and the ground falls away: adapt the **`world-map` registry block** — the dotted world map scrolls beneath while the wire becomes a great-circle route arcing across it. Real render infrastructure, truthfully labeled: pulses light up at AWS and Google Cloud regions (US-EAST-1 · EU-WEST-1 · AP-SOUTH-1) with a \"CLOUD RENDER · LAMBDA + CLOUD RUN\" kicker — HyperFrames' actual deploy targets. The map fades away as the wire descends into the next region — the pulses hold their size until the fade; nothing on the map ever shrinks.",
     "**Material (28–39s).** The wire threads into a working canvas where footage is the material on the timeline: a real talking-head clip (generate a short clip of a person speaking one neutral line via the media pipeline's avatar video generation — it is material being processed, not a testimonial; **transcode it to HEVC `hvc1`** so the automatic proxy subsystem carries preview) sits as a clip on the wire. The order of operations IS the story: as the camera arrives and BEFORE the person speaks, the framework mattes the footage — **the background peels away via background removal**, sliding off along the travel direction and leaving the cutout standing alone on the brand ground. THEN they speak, and the main **keywords of their own line — derived from the clip's transcription — land word-synced as huge display text BEHIND the cutout**, each keyword slamming in on its spoken moment with the subject's silhouette occluding it (the two-layer text-behind-subject plate); style the keyword type by adapting a bold **catalog caption component** (`caption-kinetic-slam` or similar) at display scale. A designed lower-third chip renders behind the subject. The clip's own audio ducks the BGM briefly; the VO resumes as the camera pulls away and the worked footage recedes by parallax.",
     "**Surface (39–45s).** SANCTIONED SEAM #1: the camera pushes through an **`sdf-iris` shader transition** — the iris opens ONTO the continuation of the same wire (the wire is visible through the iris throughout; this is a lens the journey passes through, not a cut). Inside: frosted-glass inspector panels (real translucency — blur over what's behind; the product's Studio design language) hover above the wire carrying live values (`ease: power3.out`, a color token, an fps readout), over a **generated-artwork backdrop** — a flat abstract mural evoking motion trails, generated **palette-neutral (grayscale) and duotoned live by CSS** from the two variables so it re-skins with everything else. **The mural is a full-frame, screen-fixed backdrop: it never moves on screen — the widening iris circle alone reveals it already in place at full frame, it holds dead still while the wire, glass, and chip travel in front of it, and it exits by fading out. It must never slide, and the iris lens itself must render only its glowing ring — fully transparent outside the circle, no visible container.** Drifting `data-*` tags ride between mural and glass, clear of all text.",
     "**Rhythm (45–52s).** The wire becomes a waveform: **resolve the BGM first, run `hyperframes beats` on it, and drive this region on the detected grid** — the waveform pulses and compact media cards (a lyric line, a photo card, a chart flash) snap onto the wire on real analyzed beats while the camera keeps traveling; each snap gets a tick SFX. At least six beat-hits. SANCTIONED SEAM #2: the beat-hits may hard-cut card content ON the beat — the sanctioned exception, because the camera itself never stops moving through them.",
     "**Depth (52–56s).** The wire spirals off the flat plane into real 3D — a **Three.js scene via the frame adapter** (never CSS fake-3D): the camera descends following the wire as it coils around a rim-lit faceted form (ink material on charcoal), mono axis readouts landing on cue, then rises back to the plane with the wire leading the way out. The coil winds up out of the wire and collapses back onto it — its ends never float cut off in mid-air — and the protagonist chip joins the 3D scene for the crossing: it rides the wire straight through the coil's loops and passes behind the form with true depth occlusion, never floating over the geometry as a flat overlay.",
     "**Render (56–60s).** The wire's end plugs into a render chip; the protagonist clip card from the opening arrives (callback — same chip, having traveled the whole film) and snaps into it. A **seeded confetti burst** fires — mulberry32, **seed 42, each piece holding position for exactly two frames before stepping** (stop-motion feel) — and the VO lands the honest punchline: identical on every render, because determinism is the whole point. \"WRITE HTML. RENDER VIDEO.\" locks up with the install line `npx skills add heygen-com/hyperframes`. The camera finally eases to rest — the film's only true stillness, one breath before the end.",
     "**Copy, quoted exactly:** opening \"WRITE HTML.\" · stats \"50+ CATALOG BLOCKS\", \"19 AGENT SKILLS\", \"7 RUNTIME ADAPTERS\" · map kicker \"CLOUD RENDER · LAMBDA + CLOUD RUN\" · closing \"WRITE HTML. RENDER VIDEO.\" + `npx skills add heygen-com/hyperframes`. The Material region's spoken line and typed code are yours to make real and legible — no lorem ipsum, no invented product claims anywhere.",
     "**Technique, pinned:** continuous world-camera via GSAP transforms (the dolly is the film); parallax layers in every region; `data-chart`, `world-map`, `sdf-iris`, and a caption component adapted from the registry; per-character typing at the open; matched-motion handoffs at every region boundary (the wire IS the match); full footage pipeline (generated clip → HEVC → auto-proxy → background removal → lower-third → word-synced captions); real beat grid from `hyperframes beats`; real Three.js via the frame adapter; seeded two-frame-hold confetti; SFX on hits; VO-paced reveals throughout.",
     "**Variables:** expose `ground` (default `#0a0a0a`) and `ink` (default `#3CE6AC`) as composition variables on the single root file, bound via CSS custom properties everywhere (including the duotoned mural), so one `--variables` call re-skins the entire journey. It will be rendered twice: the default brand palette, and a second full render with `{\"ground\":\"#0d1420\",\"ink\":\"#c8ff3d\"}`.",
     "**Architecture constraint (technical):** single composition file — one `index.html`, one variable scope. The world is one wide scene space traversed by a camera transform; regions may still be timed `class=\"clip\"` sections synchronized to the camera's arrival (so capture stays efficient), but their positions form one continuous world and the wire + ruler + protagonist chip layers persist across 100% of the film. No `data-composition-src` sub-files.",
     "**Voice & music:** confident, energetic female narration — Kokoro `af_sky`, passed explicitly via `--voice` — riding the journey's momentum (the VO never waits for the camera; the camera arrives on the VO). Driving, beat-forward electronic BGM from the catalog at the engine's default narration-bed volume; the same track feeds the Rhythm region's beat analysis.",
     "**Negatives:** no hard cuts outside the two sanctioned seams; no static regions; no shaking or idle-in-place motion passed off as energy; no hue beyond mint (cyan only inside the one CTA gradient) — and per the brand file, no purple-blue SaaS gradients ever; no stock footage or photography; no fictional stats, projects, or testimonials — every number and label must be true of HyperFrames today; no real OS/browser chrome; no unseeded randomness; none of the film is silent."
    ],
    "codeBlocks": [],
    "bullets": [
     "芯片必须绑定索道的真实路径几何。不能飘在线旁。",
     "壁画必须钉住不动，由光圈揭开，淡出离场。",
     "在深度区域，螺旋转出索道再绕回。芯片必须以真实景深遮挡从 3D 形体后面过，不能盖在上。"
    ]
   },
   {
    "h": "Which page covers which region",
    "p": "",
    "paras": [
     "| Region | What it demonstrates | Page that covers it |",
     "| - | - | - |",
     "| Type (0:00–0:07) | Per-character code typing. The underline that becomes the wire. | [Code animations](https://hyperframes.heygen.com/prompting/captions-catalog.md#code-on-screen), [Prompt anatomy](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt) |",
     "| Mount (0:07–0:14) | The timeline's own vocabulary: tracks, clips, `data-*` labels | [Prompt anatomy](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt) |",
     "| Measure (0:14–0:21) | The `data-chart` block. The wire as a chart baseline, by matched motion. | [Turn data into an animated video](https://hyperframes.heygen.com/prompting/data-and-maps.md), [Transitions](https://hyperframes.heygen.com/prompting/motion.md#between-scenes-transitions) |",
     "| Everywhere (0:21–0:28) | The `world-map` block. Real Lambda and Cloud Run regions. | [Turn data into an animated video](https://hyperframes.heygen.com/prompting/data-and-maps.md), [Rendering and output](https://hyperframes.heygen.com/guides/rendering.md#ask-the-agent-for-the-right-output) |",
     "| Material (0:28–0:39) | The footage pipeline, in order. Generated clip, HEVC proxy, background removed *before* the speech, the speaker's own keywords slamming in behind the cutout, lower third behind the subject. | [Add voice, music and sound](https://hyperframes.heygen.com/prompting/media-and-audio.md), [Text, captions and code on screen](https://hyperframes.heygen.com/prompting/captions-catalog.md), [Overlays and lower thirds](https://hyperframes.heygen.com/prompting/captions-catalog.md#overlays-and-lower-thirds) |",
     "| Surface (0:39–0:45) | The `sdf-iris` shader lens, frosted glass, a palette-neutral generated mural. | [Transitions](https://hyperframes.heygen.com/prompting/motion.md#between-scenes-transitions), [VFX and liquid glass](https://hyperframes.heygen.com/prompting/color-grading.md#vfx-and-liquid-glass), [When to generate artwork](https://hyperframes.heygen.com/prompting/color-grading.md#generated-artwork) |",
     "| Rhythm (0:45–0:52) | Cuts on a real analyzed beat grid from `hyperframes beats`. | [Music videos and slideshows](https://hyperframes.heygen.com/guides/music-to-video.md#prompts-that-work) |",
     "| Depth (0:52–0:56) | Real Three.js via the frame adapter. The wire as a 3D coil, with the chip threading the loops and passing behind the form. | [Runtimes and 3D](https://hyperframes.heygen.com/prompting/color-grading.md#3d-and-other-animation-runtimes) |",
     "| Render (0:56–1:02) | Seeded confetti, two-frame holds. Determinism as the punchline. | [Ask for smooth motion and transitions](https://hyperframes.heygen.com/prompting/motion.md) (rule 8) |",
     "另三页贯穿全片，而非单区域。",
     "相机是 [Ask for smooth motion and transitions](https://hyperframes.heygen.com/prompting/motion.md) 里 “camera as actor” 规则推到极限。相机不在片子里。它就是片。",
     "索道、标尺和芯片是 [分镜](https://hyperframes.heygen.com/prompting/design-systems.md#storyboards) 的回调手法拉满全片时长，而不是两帧。",
     "而观感从没在提示里描述。提示指向 `frame.md` 品牌文件，说 obey exactly。那个文件装着真正的 HyperFrames 设计系统。近黑底、灰阶文字层级、薄荷作唯一的 go/active 强调。ABC Solar Display 管组合，TT Norms Pro Mono 管机器文字。认可的薄荷到青渐变只有一个，只在结尾 CTA，别处没有。品牌事实源胜任何形容词。这就是 [品牌、模板和分镜](https://hyperframes.heygen.com/prompting/design-systems.md) 的全部论点，电影尺度展示。"
    ],
    "codeBlocks": []
   },
   {
    "h": "为什么一个文件",
    "p": "",
    "paras": [
     "HyperFrames 按构图文件读 `data-composition-variables`。一个文件一个变量作用域，一个变量作用域才让一次 `--variables` 重换全程皮。所以早前收官片的单文件规则在此仍适用：一个 `index.html`。",
     "新情况是世界。它是一个宽场景空间，相机变换横穿。区域仍是带时间的 `class=\"clip\"` 节，同步到相机到达的时刻，框架按各自时间窗显隐。只有索道、标尺和芯片全 62 秒活着。见 [变量和模板](https://hyperframes.heygen.com/prompting/design-systems.md#templates-and-variables)。"
    ],
    "codeBlocks": []
   },
   {
    "h": "改两个颜色，重换全片皮",
    "p": "",
    "paras": [
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-timeline-reskin-v2.mp4#t=0.1\" />",
     "*同一构图，深蓝加酸绿——索道、标尺、图表、地图、玻璃，连生成的壁画都跟覆盖。* 上部收官片的壁画招数沿用。美术生成时是灰阶，再由 `ground` 和 `ink` 变量驱动的 CSS 层实时 duotone。连位图都换皮。模板帧要活过换皮，颜色放 CSS、形状放位图。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes render --variables '{\"ground\":\"#0d1420\",\"ink\":\"#c8ff3d\"}' --strict-variables",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "提示真正添了什么",
    "p": "",
    "paras": [
     "把指南垫在后面再读提示，它不再像一次巨大的需求。逐区域看都是你已有的材料。没有哪条子句是新的。它们是章节改写成要求。",
     "新的是纽带，也是提示大半字数在的地方。",
     "这就是本指南一步步搭的方法。每技法单独学会。然后写一条提示，它的活不是发明碎片，而是把碎片绑起来：共享空间、共享脊柱、共享品牌、共享变量、共享时钟。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**摄影契约**把九个演示拧成一个空间。抽掉它，你得到播放列表。留住它，同一九块就是电影。",
     "**常设元素做交接。** 索道是让每区域*变成*下个的招数。同一条线是打出的下划线、图表基线、地图弧线、波形和 3D 螺旋。芯片是贯穿九技法的回调。标尺让电影自身的介质可见。",
     "**一个品牌文件统管每区域。** 出自十几页的九技法落下来像一个人做的。",
     "**一个变量作用域重换全皮。** 图表、地图、玻璃、壁画和五彩纸屑都听那两个变量的。",
     "**一条音轨管全片节奏**（[加配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md)）。旁白给每区域的揭入报点。垫旁白的同一条 BGM 喂节奏区域的节拍分析。一套音效计划贴视觉落点：开场击键、每次交接风声、计数和节拍滴答、进渲染一次渐强。"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[已验证示例提示](https://hyperframes.heygen.com/prompting/examples.md)",
     "[把数据变成动画视频](https://hyperframes.heygen.com/prompting/data-and-maps.md)",
     "[屏幕上的文字、字幕和代码](https://hyperframes.heygen.com/prompting/captions-catalog.md)"
    ]
   }
  ]
 },
 "tips-captions": {
  "lede": "索取“embedded captions, keywords highlighted in the accent color”（嵌入字幕，关键词用强调色高亮），你会拿到一个合理的默认。本页是该索取背后的目录：可按语气点名的组件，让高亮颜色和动画成为决策，而不是默认。",
  "sections": [
   {
    "h": "字幕样式各做什么、何时触发",
    "p": "",
    "paras": [
     "字幕组件是即插即用的片段，渲染逐词或逐行的动画屏上文字——每个组件一个视觉身份，按词或按行动画。当你在构建的构图中索取字幕、字幕条、动感文字、歌词风格词或逐词标题时，提示词会触发这一层。描述字幕的*能量*，智能体挑匹配的字体、大小和动画；点名组件则锁定外观。",
     "[!NOTE] 这些组件用于**合成视频**——你亲手写进 HyperFrames 构图的字幕。给已有的** Talking-head MP4** 加字幕，请看 [captions and talking heads](https://hyperframes.heygen.com/guides/captions-and-recuts.md#prompts-that-work)：字幕要落在说话人*后面*，需要把主体抠图叠在上面，下面这些构图片段做不到。"
    ],
    "codeBlocks": []
   },
   {
    "h": "语气 → 字幕组件",
    "p": "",
    "paras": [
     "| 语气 | 组件 |",
     "| - | - |",
     "| **Hype / 高能量社交** | [`caption-kinetic-slam`](https://hyperframes.heygen.com/catalog/components/caption-kinetic-slam), [`caption-highlight`](https://hyperframes.heygen.com/catalog/components/caption-highlight), [`caption-particle-burst`](https://hyperframes.heygen.com/catalog/components/caption-particle-burst), [`caption-emoji-pop`](https://hyperframes.heygen.com/catalog/components/caption-emoji-pop) |",
     "| **干净 / 企业** | [`caption-clip-wipe`](https://hyperframes.heygen.com/catalog/components/caption-clip-wipe), [`caption-weight-shift`](https://hyperframes.heygen.com/catalog/components/caption-weight-shift) |",
     "| **优雅 / 编辑** | [`caption-editorial-emphasis`](https://hyperframes.heygen.com/catalog/components/caption-editorial-emphasis), [`caption-gradient-fill`](https://hyperframes.heygen.com/catalog/components/caption-gradient-fill), [`caption-weight-shift`](https://hyperframes.heygen.com/catalog/components/caption-weight-shift) |",
     "| **霓虹 / 夜生活 / 音乐** | [`caption-neon-glow`](https://hyperframes.heygen.com/catalog/components/caption-neon-glow), [`caption-neon-accent`](https://hyperframes.heygen.com/catalog/components/caption-neon-accent) |",
     "| **科技 / 赛博 / glitch** | [`caption-glitch-rgb`](https://hyperframes.heygen.com/catalog/components/caption-glitch-rgb), [`caption-matrix-decode`](https://hyperframes.heygen.com/catalog/components/caption-matrix-decode) |",
     "| **卡拉 OK / 歌词 / 跟读** | [`caption-pill-karaoke`](https://hyperframes.heygen.com/catalog/components/caption-pill-karaoke), [`caption-highlight`](https://hyperframes.heygen.com/catalog/components/caption-highlight) |",
     "| **质感 / 电影展示字体** | [`caption-texture`](https://hyperframes.heygen.com/catalog/components/caption-texture), [`texture-mask-text`](https://hyperframes.heygen.com/catalog/components/texture-mask-text) |",
     "| **深度 / 3D 分层** | [`caption-parallax-layers`](https://hyperframes.heygen.com/catalog/components/caption-parallax-layers) |"
    ],
    "codeBlocks": []
   },
   {
    "h": "文字特效组件",
    "p": "",
    "paras": [
     "三个[文字特效](https://hyperframes.heygen.com/catalog/components/morph-text.md)组件各做一件专注的事，而不是给整轨加字幕：",
     "| 组件 | 何时用 |",
     "| - | - |",
     "| [`caption-blend-difference`](https://hyperframes.heygen.com/catalog/components/caption-blend-difference) | 文字落在繁忙或跳动的素材上且必须保持可读——它按像素对背后的东西自动反色。 |",
     "| [`morph-text`](https://hyperframes.heygen.com/catalog/components/morph-text) | 想让一个位置用 gooey 变形轮播短词表（“fast / simple / yours”）。 |",
     "| [`texture-mask-text`](https://hyperframes.heygen.com/catalog/components/texture-mask-text) | 把大展示词填进物理质感（砖、石、木、金属、熔岩）。 |"
    ],
    "codeBlocks": []
   },
   {
    "h": "示例提示词",
    "p": "",
    "paras": [
     "30-second vertical explainer. Add [`caption-highlight`](https://hyperframes.heygen.com/catalog/components/caption-highlight) captions, TikTok-style — the visible line stays up, one word highlighted at a time.（30 秒竖版讲解。加 [`caption-highlight`](https://hyperframes.heygen.com/catalog/components/caption-highlight) 字幕，TikTok 风格——当前行保留，每次高亮一个词。）",
     "<video aria-label=\"Validate captions catalog\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-captions-catalog.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。* [!NOTE] 字幕组件以演示形态出厂——固定词表、横版尺寸、8 秒时间线。智能体会按你的旁白重写词和时间，并按你的格式重定尺寸；这是预期的，不是变通。如果你要的是全屏一次一个词（没有可见行），那是 [`caption-kinetic-slam`](https://hyperframes.heygen.com/catalog/components/caption-kinetic-slam)，不是 `caption-highlight`。",
     "Hype captions with [`caption-kinetic-slam`](https://hyperframes.heygen.com/catalog/components/caption-kinetic-slam): one full-screen word per beat, alternating slam-in direction.（用 [`caption-kinetic-slam`](https://hyperframes.heygen.com/catalog/components/caption-kinetic-slam) 做 hype 字幕：每节拍一个全屏词，砸入方向交替。）",
     "<video aria-label=\"Caption kinetic slam\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/caption-kinetic-slam.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，手写了 24 词台词，未经编辑。* Neon music-video captions using [`caption-neon-glow`](https://hyperframes.heygen.com/catalog/components/caption-neon-glow). Make brand names larger with an accent color and highlight the numbers differently.（用 [`caption-neon-glow`](https://hyperframes.heygen.com/catalog/components/caption-neon-glow) 做霓虹音乐视频字幕。品牌名放大并用强调色，数字用不同高亮。）",
     "<video aria-label=\"Caption neon glow\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/caption-neon-glow.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑——品牌以 1.4x 洋红渲染，数字琥珀色，区别于默认的青色。* Fill the hero word \"STONE\" with [`texture-mask-text`](https://hyperframes.heygen.com/catalog/components/texture-mask-text) using the rock texture.（用 [`texture-mask-text`](https://hyperframes.heygen.com/catalog/components/texture-mask-text) 填主词“STONE”，用岩石质感。）"
    ],
    "codeBlocks": []
   },
   {
    "h": "失败模式",
    "p": "",
    "paras": [
     "**不要每个词都堆重特效。** 字幕组件已经按词动画；在上面再叠一层强调会打架、变得不可读。只强调关键词。",
     "**同一节不要混用字幕风格。** 一个构图（或一节）一个身份读作设计；两个互相竞争的风格读作失误。",
     "**不要把它丢到 Talking-head 素材上。** 这是构图片段，不是抠像/遮挡流水线——丢到未处理的 MP4 上，字幕会落在说话人前面，永远不在后面。（下面 capstone 线程里 `caption-kinetic-slam` 在主体*后面*读，不算矛盾：那片构图本身先把素材抠了，所以抠图是独立一层，文字能从下面穿过。限制针对片段本身，不针对技法。）",
     "**不要把 hype 风格配给平静内容。** 高能量字幕贴在企业讲解上会跟语气打架；让语气表选身份。",
     "**不要编造字幕名字。** 只有[字幕](https://hyperframes.heygen.com/catalog/components/caption-highlight.md)和[文字特效](https://hyperframes.heygen.com/catalog/components/morph-text.md)组里的组件存在。",
     "**在真实短片里。** 这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "THEN they speak, and the main **keywords of their own line — derived from the clip's transcription — land word-synced as huge display text BEHIND the cutout**, each keyword slamming in on its spoken moment with the subject's silhouette occluding it (the two-layer text-behind-subject plate); style the keyword type by adapting a bold **catalog caption component** (`caption-kinetic-slam` or similar) at display scale.",
     "<video aria-label=\"Capstone region material\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-material.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make every word explode with particles`（让每个词都粒子爆炸）",
     "**改为：** `caption-particle-burst, firing only on the keywords`（caption-particle-burst，只在关键词上喷发）",
     "**避免：** `use caption-neon-glow and caption-matrix-decode together`（一起用 caption-neon-glow 和 caption-matrix-decode）",
     "**改为：** 选一个；仅在明确的章节切换处换风格",
     "**避免：** `add caption-highlight to my interview.mp4`（给我的 interview.mp4 加 caption-highlight）",
     "**改为：** `caption interview.mp4 with the words set behind the speaker`（给 interview.mp4 加字幕，词落在说话人后面）（见 [captions and talking heads](https://hyperframes.heygen.com/guides/captions-and-recuts.md#prompts-that-work)）",
     "**避免：** `glitchy RGB captions`（贴在 wellness 品牌片上）（glitchy RGB 字幕）",
     "**改为：** `clean captions with caption-clip-wipe`（用 caption-clip-wipe 的干净字幕）",
     "**避免：** `add typewriter-bounce captions`（加 typewriter-bounce 字幕）",
     "**改为：** 描述语气（“tutorial, monospace, typewriter”）或点名真实组件"
    ]
   },
   {
    "h": "屏幕上的代码",
    "p": "",
    "paras": [
     "[PR 视频](https://hyperframes.heygen.com/guides/pr-to-video.md)可以点名 `code-diff` 做单个节拍。其余目录覆盖打字、diff、高亮、滚动，以及按名字选终端或编辑器主题，给 walkthrough（演示）需要慢下来让代码本身撑住场景的时刻。",
     "代码是框架替你干难活的唯一主题。[Code Animations](https://hyperframes.heygen.com/catalog/blocks/code-typing.md)块确定性地处理语法高亮、光标跟踪、diff 着色和镜头运动——你描述*演示路径*，点名块，粘上你的片段。本页是做这件事的词汇；把真实 pull request 变代码改动视频，见 [Code and PRs](https://hyperframes.heygen.com/guides/pr-to-video.md#prompts-that-work)。",
     "这里的一切都遵循[一次成型骨架](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)：路由、规格、节拍、文案、技法、否定。“技法”槽位放块名，“文案”槽位放代码——而且要逐字引用，因为未引用的代码会被改写到编译不过。"
    ],
    "codeBlocks": []
   },
   {
    "h": "按观众该学到什么选动作",
    "p": "",
    "paras": [
     "每个 Code Animations 块回答不同的“观众该注意到什么”。把意图映射到块：",
     "| 你想展示…… | 点名这个块 | 时长 |",
     "| - | - | - |",
     "| 代码逐字被写出来 | [`code-typing`](https://hyperframes.heygen.com/catalog/blocks/code-typing) | 5s |",
     "| 一次编辑——之前 → 之后，红/绿 | [`code-diff`](https://hyperframes.heygen.com/catalog/blocks/code-diff) | 6s |",
     "| 只有一行是*那一行*，其余压暗 | [`code-highlight`](https://hyperframes.heygen.com/catalog/blocks/code-highlight) | 5s |",
     "| 沿长文件走到深处某一点 | [`code-scroll`](https://hyperframes.heygen.com/catalog/blocks/code-scroll) | 6s |",
     "| 一个代码片段变成另一个 | [`code-morph`](https://hyperframes.heygen.com/catalog/blocks/code-morph) | 7s |",
     "| 代码在旋转的 3D 板上（标题卡感） | [`code-3d-extrude`](https://hyperframes.heygen.com/catalog/blocks/code-3d-extrude) | 8s |",
     "| 代码从 shader 溶解中浮现 | [`code-shader-dissolve`](https://hyperframes.heygen.com/catalog/blocks/code-shader-dissolve) | 7s |",
     "| 代码从粒子云装配 | [`code-particle-assemble`](https://hyperframes.heygen.com/catalog/blocks/code-particle-assemble) | 8s | 前四个是代码*演示*的主力——它们让代码可读、观众不迷路。它们往下的一切都拿可读性换动态：作开场或 hero 时刻很棒，但说解说时不要指望它们。",
     "[!TIP] `code-morph` 把 Shiki Magic Move 重驱为暂停的 GSAP 时间线，`code-diff` 折叠删除行、展开新增行。两者都比用 `code-typing` 重打整段更容易读出“发生了一次编辑”——故事是*改动*而不是*从零创作*时，选它们。"
    ],
    "codeBlocks": []
   },
   {
    "h": "提示打字揭示",
    "p": "",
    "paras": [
     "`code-typing` 逐字揭示代码，光标跟随 frontier——没有 CSS 动画，所以抽帧干净。给它确切代码和一个节奏；智能体会把块的语法 token 重烘到你的片段上。",
     "6-second 1920x1080 video. A dark editor types this snippet, character by character, caret tracking the frontier, then holds on the blinking cursor for the final second:",
     "``` export async function render(comp: Composition) {   await comp.seek(0);   return comp.capture(); } ``` Use the `code-typing` registry block. No narration, no image or media files.",
     "<video aria-label=\"Validate code typing\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-code-typing.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。* **把代码作为字面块引用。** 用散文描述代码会被改写。",
     "**给光标一个停留处。** 构图保持最终状态，如果不索取停留，最后一帧会是冻结的完整片段——[死运动信号](https://hyperframes.heygen.com/prompting/motion.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `type out a function that seeks to zero and captures`（打字写一个 seek 到 0 并 capture 的函数）",
     "**改为：** 把真实片段贴进围栏块——逐字渲染",
     "**避免：** `types the code and ends`（打字后结束）",
     "**改为：** `types the code, then holds on the blinking cursor for the final second`（打字，然后在闪烁的光标上停留最后一秒）"
    ]
   },
   {
    "h": "提示 diff 或高亮",
    "p": "",
    "paras": [
     "“改了什么”，就把改前改后交给 `code-diff`，让它给增量着色。“看*这一行*”，就把完整上下文交给 `code-highlight` 并点名目标行。",
     "6-second 1920x1080 video. Show this edit to `api.ts` as a colored diff — the removed line collapses in red, the added line expands in green:",
     "removed: `const res = await fetch(url)` added: `const res = await fetch(url, { signal })` Use the `code-diff` registry block. No audio.",
     "<video aria-label=\"Validate code diff\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-code-diff.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。* 5-second 1920x1080 video. Show a 12-line config file; a highlight band sweeps to line 7 (`timeout: 30_000`) while the surrounding lines dim. Hold with line 7 lit and the cursor blinking. Use the `code-highlight` registry block. No audio.",
     "<video aria-label=\"Validate code highlight\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-code-highlight.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑——智能体手写了 plausible（合理的）上下文 config 行；文件确切内容重要就贴全 12 行。* **无歧义地点名目标行。** 该块把上下文压暗围绕一行——告诉它哪一行。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `highlight the important line`（高亮重要那行）",
     "**改为：** `highlight line 7 (timeout: 30_000)`（高亮第 7 行（timeout: 30_000)）"
    ]
   },
   {
    "h": "提示滚动穿行",
    "p": "",
    "paras": [
     "`code-scroll` 把镜头沿长文件下移，把目标行带到中心并 spotlight——走真实模块的块，不是玩具片段。",
     "6-second 1920x1080 video. Scroll a \\~60-line source file so line 44 (`return dedupeFrames(frames)`) arrives at center and gets spotlighted; ease the scroll and let it settle without snapping. Use the `code-scroll` registry block. No audio.",
     "<video aria-label=\"Code scroll\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/code-scroll.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。* **让滚动缓出并落稳，不要生硬停止。** 线性滚动戛然而止读作机械。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `scroll straight to the line`（直滚到那行）",
     "**改为：** `ease the scroll and let it settle`（让滚动缓出并落稳）——搭配[动态语法](https://hyperframes.heygen.com/prompting/motion.md)"
    ]
   },
   {
    "h": "按名字选主题",
    "p": "",
    "paras": [
     "| 主题 | 块 | 主题 | 块 |",
     "| - | - | - | - | **VS Code 工作台主题** —— 完整编辑器外壳（活动栏、侧边栏、标签页、终端、状态栏）。说“monokai”或“visual studio dark”：",
     "| 说这个 | 块 | 说这个 | 块 |",
     "| - | - | - | - |",
     "<video aria-label=\"Terminal ocean\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/terminal-ocean.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。* **主题要跟你声称展示的表面匹配。** 在 VS Code 编辑器外壳里跑终端命令读着不对；在 Terminal.app 里看源文件也不对。",
     "[!TIP] 模糊会落到最近的具名块。“Dark theme”（深色主题）欠定——智能体在十几个暗色变体里挑一个，你未必拿到想象的那个。说出主题名。这是把[指定程度刻度](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify)用到代码上：默认选择可能错时，点名块。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `monokai theme typing a shell command`（monokai 主题打 shell 命令）",
     "**改为：** `apple terminal homebrew profile typing a shell command`（apple terminal homebrew profile 打 shell 命令）"
    ]
   },
   {
    "h": "搭配 pull request",
    "p": "",
    "paras": [
     "当你动画的代码来自真实 PR，不要手写节拍——[点名智能体看 PR](https://hyperframes.heygen.com/guides/pr-to-video.md#prompts-that-work)，它读 diff 并围绕真实改动的 hunk 编排 `code-diff`、`code-highlight` 和 `code-scroll`。讲概念时直接用本页的块；讲具体改动集时把 PR 交过去。"
    ],
    "codeBlocks": []
   },
   {
    "h": "下一步去哪",
    "p": "",
    "paras": [
     "**在真实短片里。** 这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "**Type (0–7s).** Black-on-charcoal close-up: a cursor types real HyperFrames markup character by character — `<div class=\"clip\" data-start=\"0\" data-duration=\"4\">` and a `gsap.timeline({ paused: true })` line. As the typed line completes, the text's baseline extends and becomes **the wire** — the underline literally grows into the timeline and the camera begins its dolly along it. The typed div folds into a compact clip chip (persistent element 3) that drops onto the wire. Kinetic display type states \"WRITE HTML.\" as the travel begins.",
     "<video aria-label=\"Capstone region type\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-type.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Anatomy of a one-shot prompt](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)（一次成型提示词的解剖）——上方每条提示词用的骨架。",
     "[Copy-paste examples](https://hyperframes.heygen.com/prompting/examples.md)（复制粘贴示例）——可直接改的全条提示词。",
     "[Code and PRs](https://hyperframes.heygen.com/guides/pr-to-video.md#prompts-that-work)（代码与 PR）——把 GitHub PR 变代码改动视频。",
     "[Ask for smooth motion and transitions](https://hyperframes.heygen.com/prompting/motion.md)（索取顺滑动态与转场）——代码块仍需要你给的停稳规则。"
    ]
   },
   {
    "h": "叠加层与下三分之一字幕",
    "p": "",
    "paras": [
     "在[talking-head 素材](https://hyperframes.heygen.com/guides/captions-and-recuts.md)上，下三分之一字幕和卡片叠加层按那份文字记录 bespoke（定制）设计。这里是反过来：可直接丢进你从零构建的构图里的下三分之一和社交叠加块，无需现成素材。同词汇，指向场景而非镜头。"
    ],
    "codeBlocks": []
   },
   {
    "h": "叠加层做什么、何时触发",
    "p": "",
    "paras": [
     "叠加层是压在素材或场景上的时序块——点名说话人的下三分之一、广播 ticker，或复刻社交媒体卡片。因为每个都是定时 clip，当你索取*在*某个时刻*加*东西时提示词触发这一层：“在 0:03 加下三分之一，带名字和职位”、“开场时显示一条动画推文”、“在角落放 Spotify 正在播放卡”。给时间戳、文案和语气；智能体把块放在素材上面的轨上。",
     "两组："
    ],
    "codeBlocks": [],
    "bullets": [
     "**[Lower thirds](https://hyperframes.heygen.com/catalog/blocks/lt-clean-bar.md)**（下三分之一）——说话人、访谈、播客、新闻的姓名/职位标识。",
     "**[Social overlays](https://hyperframes.heygen.com/catalog/blocks/x-post.md)**（社交叠加）——平台 UI 的动画复刻（帖子、卡片、通知、关注提示）。"
    ]
   },
   {
    "h": "品牌语气 → 下三分之一",
    "p": "",
    "paras": [
     "下三分之一分**卡片**（文字背后的填充形）和**无卡**（文字加线或扫过，设计成叠真人素材时不装盒）。",
     "| 语气 | 块 |",
     "| - | - |",
     "| **极简 / 干净 / 企业** | [`lt-clean-bar`](https://hyperframes.heygen.com/catalog/blocks/lt-clean-bar), [`lt-soft-pill`](https://hyperframes.heygen.com/catalog/blocks/lt-soft-pill) |",
     "| **高能量 / 播客 / 粗重** | [`lt-bold-block`](https://hyperframes.heygen.com/catalog/blocks/lt-bold-block), [`lt-color-block`](https://hyperframes.heygen.com/catalog/blocks/lt-color-block) |",
     "| **压在素材上的无卡**（访谈、talking head） | [`lt-accent-underline`](https://hyperframes.heygen.com/catalog/blocks/lt-accent-underline), [`lt-kicker-name`](https://hyperframes.heygen.com/catalog/blocks/lt-kicker-name), [`lt-mask-reveal`](https://hyperframes.heygen.com/catalog/blocks/lt-mask-reveal), [`lt-side-rule`](https://hyperframes.heygen.com/catalog/blocks/lt-side-rule) |",
     "| **压在明亮素材上的卡** | [`lt-dark-card`](https://hyperframes.heygen.com/catalog/blocks/lt-dark-card) |",
     "| **广播 / 新闻** | [`lower-third-bild`](https://hyperframes.heygen.com/catalog/blocks/lower-third-bild), [`news-ticker`](https://hyperframes.heygen.com/catalog/blocks/news-ticker) |",
     "| **双段扫过（名字+职位）** | [`lt-stack-bars`](https://hyperframes.heygen.com/catalog/blocks/lt-stack-bars) | [!TIP] 压真人素材时优先**无卡**下三分之一——它们有文字阴影保可读，没有盒子跟镜头打架。背景太挤、无卡读不清时用**卡**（[`lt-dark-card`](https://hyperframes.heygen.com/catalog/blocks/lt-dark-card) 炭黑，配明亮场景）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "用途 → 社交叠加",
    "p": "",
    "paras": [
     "每个社交叠加都是自带可编辑占位内容的动画卡。",
     "| 你想要 | 块 |",
     "| - | - |",
     "| 带互动数据的动画推文 / X 帖 | [`x-post`](https://hyperframes.heygen.com/catalog/blocks/x-post) |",
     "| Reddit 帖卡，带赞和评论 | [`reddit-post`](https://hyperframes.heygen.com/catalog/blocks/reddit-post) |",
     "| Spotify 正在播放卡，带封面和进度 | [`spotify-card`](https://hyperframes.heygen.com/catalog/blocks/spotify-card) |",
     "| macOS 通知横幅 | [`macos-notification`](https://hyperframes.heygen.com/catalog/blocks/macos-notification) |",
     "| Instagram 关注提示 | [`instagram-follow`](https://hyperframes.heygen.com/catalog/blocks/instagram-follow) |",
     "| TikTok 关注提示 | [`tiktok-follow`](https://hyperframes.heygen.com/catalog/blocks/tiktok-follow) |",
     "| YouTube 订阅下三分之一 | [`yt-lower-third`](https://hyperframes.heygen.com/catalog/blocks/yt-lower-third) |"
    ],
    "codeBlocks": []
   },
   {
    "h": "示例提示词",
    "p": "",
    "paras": [
     "引用确切文案——未加引号的名字和标题会被改写（见[解剖结构](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)）。",
     "Add a lower third at 0:03 for 5 seconds, on a track above the footage, with [`lt-clean-bar`](https://hyperframes.heygen.com/catalog/blocks/lt-clean-bar). Name: \"Dana Ríos\". Title: \"Head of Design\".",
     "<video aria-label=\"Validate lower third\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-lower-third.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词压在占位素材上渲染，未经编辑。* [!NOTE] 至少给下三分之一块自身的时间线长度（多半含设计退场约 \\~5 秒）——窗口更短会在 settle-out 动画播完前把块硬切掉。",
     "Podcast clip. Bring in [`lt-bold-block`](https://hyperframes.heygen.com/catalog/blocks/lt-bold-block) when the guest starts talking, holding 5 seconds — name \"MARCUS LEE\", tag \"GUEST\" — brand accent #FF5A1F.",
     "During the intro, show an [`x-post`](https://hyperframes.heygen.com/catalog/blocks/x-post) card with the quote \"we shipped it in a weekend\" and 12.4K likes, then slide it out before the demo.",
     "<video aria-label=\"Overlay xpost\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/overlay-xpost.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词压在占位场景上渲染，未经编辑——卡自带的点赞跳动把 12.4K 记到 12.5K。* Transparent overlay only — a [`spotify-card`](https://hyperframes.heygen.com/catalog/blocks/spotify-card) now-playing widget animating in, bottom-left. Export as transparent WebM so I can drop it over footage in my editor.",
     "<video aria-label=\"Overlay spotify preview\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/overlay-spotify-preview.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*透明 WebM 在棋盘格上的 MP4 预览——交付文件带真实 VP9 alpha（经 ALPHA\\_MODE + alphaextract 验证）。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "常见错误",
    "p": "",
    "paras": [
     "**不要让文案没引号。** 未加引号的名字和标题会被改写；加引号的逐字渲染。",
     "**不要省略时间戳。** 叠加层是定时 clip；没有起点（最好还有时长），智能体只能猜它何时出现、停留多久。",
     "**不要让叠加层渲染到素材后面。** 它必须在 clip 上方的轨上，否则视频盖住它。",
     "**不要过度指定真实账号数据。** 这些是带可编辑占位的风格化复刻——给想要展示的文案，不要给实时 URL 去抓。",
     "**不要编造叠加层名字。** 只有[Social Overlays](https://hyperframes.heygen.com/catalog/blocks/x-post.md)和[Lower Thirds](https://hyperframes.heygen.com/catalog/blocks/lt-clean-bar.md)组里的块存在。",
     "**在真实短片里。** 这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "\\[…] as the camera arrives and BEFORE the person speaks, the framework mattes the footage — **the background peels away via background removal**, sliding off along the travel direction and leaving the cutout standing alone on the brand ground. \\[…] A designed lower-third chip renders behind the subject.",
     "<video aria-label=\"Capstone region material\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-material.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `add a lower third with the speaker's name and role`（加一个带说话人名字和职位的下三分之一）",
     "**改为：** `lt-clean-bar — name: \"Dana Ríos\", title: \"Head of Design\"`（lt-clean-bar — 名字：“Dana Ríos”，职位：“Head of Design”）",
     "**避免：** `put a lower third somewhere in the intro`（在开场某处放下三分之一）",
     "**改为：** `lower third at 0:03, holding 4 seconds`（0:03 的下三分之一，停留 4 秒）",
     "**避免：** `add the tweet card to the video`（把推文卡加进视频）（分层模糊）",
     "**改为：** `x-post card on a track above the footage, top-right`（x-post 卡在素材上方的轨上，右上）",
     "**避免：** `pull my actual Spotify page`（拉我的真实 Spotify 页）",
     "**改为：** `spotify-card: track \"Midnight City\", artist \"M83\"`（spotify-card：曲目“Midnight City”，艺人“M83”）",
     "**避免：** `add a linkedin-post overlay`（加 linkedin-post 叠加）",
     "**改为：** 选真实块，或描述卡片让智能体在自由构图里定制一个"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[A full film, prompt by prompt](https://hyperframes.heygen.com/prompting/capstone.md)（完整短片，逐条提示词）",
     "[Ask for a great video](https://hyperframes.heygen.com/prompting/overview.md)（索取好视频）",
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)"
    ]
   }
  ]
 },
 "tips-color": {
  "lede": "调色告诉观众这张画面是在什么上拍的：胶带、印刷机、显像管、某台相机。本页是索取它的措辞，外加特效、3D 和生成艺术。调色只动它所在的图像或视频，从不动你的",
  "sections": [
   {
    "h": "来源必须有东西可丢",
    "p": "",
    "paras": [
     "这是耗时最多、又在提示词里看不见的失败。每一个这类处理都靠*移除*某样东西工作，所以镜头里必须有被移除的那个东西。",
     "构建本页时的三个真实例子，每个都技术上执行了，视觉上什么都没教：",
     "| 处理 | 错的来源 | 为什么什么都没显示 |",
     "| - | - | - |",
     "| Hue key —— 只留一种颜色 | 厨房里的说话人头像 | 皮肤**就是**红色波段。键控红色留住了脸；只有 6% 像素动了。 |",
     "| 双色印刷 | 白纸黑字 | 本来就是双色。没有可塌的。 |",
     "| Kuwahara —— 绘画感 | 柔焦办公室 | 保边平滑器需要边可保。 | 所以按效果需要的那样描述主体：*“颜色浓密、边浓密的主体”*、*“环境带颜色，不是中性灰”*。"
    ],
    "codeBlocks": []
   },
   {
    "h": "流水线顺序是固定的",
    "p": "",
    "paras": [
     "不管你怎么写，章节都按固定顺序生效： 所以全局去饱和跑在你想保留的任何颜色之前。要留一种颜色，在 `hueCurves` 里键控，而不是把一切抽干再涂回来。"
    ],
    "codeBlocks": [
     {
      "code": "adjust → wheels → curves → hueCurves → secondaries → lut → details → effects",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "调色按明度限定，从不按位置",
    "p": "",
    "paras": [
     "选区按色相、饱和度和亮度键控。没有遮罩、形状或跟踪区域，唯一空间变化的控件——`vignette`——锁死在画面中心。要处理画面*的一部分*，把那部分拆成独立图层给图层调色。带实例标记的模式在 [Limiting a Grade to Part of the Frame](https://hyperframes.heygen.com/reference/color-grading.md#limit-a-grade-to-part-of-the-frame)（把调色限制在画面一部分）。",
     "***"
    ],
    "codeBlocks": []
   },
   {
    "h": "把主体从背景分离",
    "p": "",
    "paras": [
     "调色最有用的事不是外观。是保护画面的这一部分、处理另一部分——这需要抠像，因此需要两层。"
    ],
    "codeBlocks": []
   },
   {
    "h": "给房间调色，保护脸",
    "p": "",
    "paras": [
     "Take the talking-head clip and separate the subject from the room. Leave the person photographic — a gentle skin-softening pass and about a third of a stop of extra exposure, nothing that reads as an effect on skin. Grade the room behind them instead: across the four seconds bring up a halftone screen so the space resolves into small colored dots, and let a restrained bloom build alongside it so the windows lift. Both start at zero so the shot opens ungraded.",
     "<video aria-label=\"Grade matte separation\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-matte-separation-b0ef8e73.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*房间吃半调屏和 bloom；主体只吃一遍柔肤和三分之一挡加曝。* 这里两个陷阱。用**原始 clip** 作背景底版，不要用抠掉主体的底版——那底版在主体位置是个洞，羽化抠图压上去会有黑边。抠图如果带预乘 alpha，浏览器会按直通合成，边缘像素翻倍相乘产生黑描边；用 `ffmpeg alphamerge` 从原始加遮罩重建。"
    ],
    "codeBlocks": []
   },
   {
    "h": "只给脸打码",
    "p": "",
    "paras": [
     "Matte the subject off the plate, then redact just their face — the rest of them and the room behind both stay completely untouched. Hold pixelation constant at about half strength for the whole shot: no ramp, no fade-up. A redaction that animates on reads as an effect; one that is simply on reads as policy. Size the redaction generously so it takes in the hairline, ears and jaw rather than sitting tight on the features.",
     "<video aria-label=\"Grade redaction engaging\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-redaction-engaging-ec781f26.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*脸打码，身体和房间不动——该区域是第三层上的 `clip-path`，不是 payload 设置。* 脸部区域是抠图调色副本上的 `clip-path`，所以可以越过头部范围而不动房间。它只在主体几乎不动时成立（这里头部动了 5.5 px）；真实运动需要 HyperFrames 外部做的跟踪遮罩。",
     "***"
    ],
    "codeBlocks": []
   },
   {
    "h": "像素化、抖动、泛光",
    "p": "",
    "paras": [
     "三种拆画面的方式，各说一种话。像素化读作*打码*。抖动读作*显示器故障*。泛光读作*光淹没了传感器*。",
     "Degrade the picture into a screen over four seconds. Ramp dithering from clean up to 0.85 at mid pattern size, so continuous tone breaks into discrete quantised levels. It should read as a display failing, not as a filter being applied.",
     "<video aria-label=\"Grade signal loss\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-signal-loss-babe88ef.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*抖动从干净爬到 0.85——连续影调碎成离散档位。* Blow the highlights out over four seconds. Ramp bloom from nothing all the way to 3 — well past a tasteful highlight lift — on a wide radius, so light spills out of the windows and progressively swallows the frame. I want to see the top of the range, not a subtle glow.",
     "<video aria-label=\"Grade bloom out\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-bloom-out-11531968.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*Bloom 推到 3，远远过了高光提升，直到光吞没画面。* [!WARNING] Bloom 是唯一会骗仪表的东西。推狠了看起来爆了，量下来却*比未调色源头*削底（clipped）更少——雾是晕影扩散的光，不是削底。任何削底指标都抓不住它。Bloom 看 1:1，不要看缩略图。"
    ],
    "codeBlocks": []
   },
   {
    "h": "绘画感，但不糊",
    "p": "",
    "paras": [
     "Turn the shot into a painting over four seconds without turning it to mush. Ramp a Kuwahara filter from nothing to full — mid radius, fairly high sharpness so edges stay crisp, and pull the saturation back a little so it reads as brushwork rather than as a filter. Boundaries stay defined while flat areas smooth into strokes. Pick a subject with dense color and dense edges; the effect has nothing to preserve on flat skin or a soft-focus background.",
     "<video aria-label=\"Grade painterly\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-painterly-ffd5c0f9-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*Kuwahara 全强度，主体边够多，值得保。* ***"
    ],
    "codeBlocks": []
   },
   {
    "h": "双色",
    "p": "",
    "paras": [
     "Take the poster and print it in two inks only: a near-black navy and a warm cream, at mid dot size, like a two-color press run. Everything collapses to those two colors. Bring it up across the four seconds from the untouched poster rather than cutting straight to it. Give it the exact hex values rather than a named palette.",
     "<video aria-label=\"Grade two ink press\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-two-ink-press-3c5662f1-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*十个色相家族塌成三色。密排字是双色减法最苛刻的考卷。* 密排小字是双色减法最苛刻的考卷——密小字要么在网点屏上活着，要么成泥，一眼就看得出。注意 payload 吃显式 hex 数组；具名调色板 id 会被拒。"
    ],
    "codeBlocks": []
   },
   {
    "h": "留一种，抽其余",
    "p": "",
    "paras": [
     "A single red apple on a teal backdrop. Hold the apple's color and drain everything else — key off hue and collapse saturation everywhere outside the reds, so the backdrop goes fully neutral grey while the apple stays exactly as saturated as it was. Use a hue-vs-saturation curve rather than a global desaturation with the apple keyed back in: global saturation runs first in the pipeline and would kill the apple before the key ever sees it. Keep a generous skirt on the band so the apple's shadowed side doesn't clip grey.",
     "<video aria-label=\"Grade brand spotlight\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-brand-spotlight-5ebe45bf.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*背景抽到中性灰；苹果的饱和度分毫不差。* 主体必须**无生命**（在人身上脸会变灰）、**单个**（混装果蔬半灰看起来像失误）、环境**带色**（灰变灰什么都不变）。",
     "***"
    ],
    "codeBlocks": []
   },
   {
    "h": "胶片：三种不同故障",
    "p": "",
    "paras": [
     "“让它看起来旧”是三种独立处理，混着来 period（年代感）就闷了。",
     "| 处理 | 漏的是什么 | 标志 |",
     "| - | - | - |",
     "| **Tape（磁带）** | 走带机构 | 滚动横波、跟踪误差、dropout |",
     "| **Tube（显像管）** | 显示玻璃 | 枕形弯曲、扫描线、荧光粉渗色、会聚误差 |",
     "| **Camera（相机）** | 采集 | 噪点、压暗对比、RGB 分离、暗角 | 滚动横波是 `tapeTracking` 和 `tapeDamage`。静止隔行是 `scanlines`——另一回事，归相机或显像管，不带横波一起飘。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Tape（磁带）",
    "p": "",
    "paras": [
     "Make it look like a worn VHS tape. Not one artefact — layer them: strong tape damage with tracking error, a little noise, mid tape speed, scanlines, and noticeable chroma bleed. Any one of these alone reads as a filter; together they read as a failing signal.",
     "<video aria-label=\"Grade tape degradation\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-tape-degradation-6050228f.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*六个磁带伪影齐上——任一单独读作滤镜。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "Tube（显像管）",
    "p": "",
    "paras": [
     "Make this look like it is being displayed on an old CRT television, not like it came off a worn tape. Bow the geometry with barrel curvature so the straight lines curve and the corners pull inward, lay scanlines across it at a fairly fine pitch, add phosphor bleed and enough chromatic aberration to give visible RGB fringing at the edges. Bleed and scanlines want to sit near the top of their range — bleed is subtle even at 0.9. Curvature and chromatic aberration are the exceptions: both read strongly, so hold curvature around half and keep the aberration modest, or the tube turns into a fisheye novelty. Grade the tone as well as the geometry: crush the shadows and blacks, lift the highlights and whites, nudge saturation up, and add a restrained bloom — a CRT has no true black and lets its top end halate. Add grain and a vignette. Use a test card or something with dead-straight lines: curvature is invisible on organic subject matter.",
     "<video aria-label=\"Grade CRT broadcast\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-crt-broadcast-b64dc1a8.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*几何弯曲，扫描线压上，影调压暗——是显像管，不是干净图像上的滤镜。* 影调活干了一半；没有压暗的阴影和晕着的高端，弯曲和扫描线读作贴在干净数字图像上的滤镜。",
     "如果把主体合成进镜头，**在调色之前**完成。CRT 弯曲整个显示画面；分两层调色背景弯、主体平直，会溢出管子的弯边。一层一次弯——跟上面抠像分离规则正相反，原因也正相反。"
    ],
    "codeBlocks": []
   },
   {
    "h": "Camera（相机）",
    "p": "",
    "paras": [
     "Take the clip and give it a camcorder grade: crush the shadows and blacks, lift the highlights and whites, pull the saturation back slightly, and add a restrained bloom, film grain for noise, a vignette, interlacing lines, and a little RGB splitting at the edges. Crushed contrast with muted color is what consumer tape actually looked like — crushed and punchy reads as a modern filter. For the split use chromatic aberration, which offsets the channels; chroma bleed is a different thing, a smear rather than a fringe. Keep the interlacing static — no tape tracking and no tape damage, because those produce a rolling horizontal wave that reads as a broken deck rather than as a camera.",
     "<video aria-label=\"Grade camcorder overlay\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/grade-camcorder-overlay-18e80485.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*素材降级；HUD 不降。它是叠加层，合在媒体画布之上。* HUD 不在调色里：它是 [`camcorder-hud`](https://hyperframes.heygen.com/catalog) 块，真实 HTML 压在素材上，所以画面烂下去时它保持锐利可编辑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "动画化调色",
    "p": "",
    "paras": [
     "九个属性暴露 CSS 自定义属性并可直接 tween——`ascii`、`bloom`、`blur`、`dither`、`exposure`、`intensity`、`kuwahara`、`lut`、`pixelate`。从恒等值开始，让镜头从未调色打开，每个中间值都渲染。",
     "承诺客户一个 ramp 之前，值得知道的两个注意事项："
    ],
    "codeBlocks": [],
    "bullets": [
     "**`--hf-color-grading-intensity` 只缩放主调色**——`adjust`、`wheels`、`curves`、`hueCurves`、`secondaries` 和 LUT。`details` 和 `effects` 在该混音之外，它不缩放：有的先塑形被采样媒体，有的后跑。所以它拉不动噪点、半调、bloom，也拉不动磁带和 CRT 系列。用具体效果，别把它当总闸。",
     "**其余全部没有自定义属性。** 有的可以从时间线改写 `data-color-grading` payload 来动画，有的不能——哪些能、哪些不能，核实过的清单在指南的 [Animating a Grade](https://hyperframes.heygen.com/reference/color-grading.md#animate-a-supported-property)（动画化调色），只在那一处维护。承诺 ramp 前先测你要动画的效果；不动就退回静态。"
    ]
   },
   {
    "h": "高保真外观",
    "p": "",
    "paras": [
     "这是[指定程度刻度](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify)的第三档， 推到底。不是氛围词。场景的每个元素，像设计师规格一样写出来。",
     "词能带出具体外观，但前提是提示词读作规格。每个元素具名、定位、上色、计时。"
    ],
    "codeBlocks": []
   },
   {
    "h": "模糊描述，然后规格",
    "p": "",
    "paras": [
     "模糊描述给智能体留猜的空间：“dark night scene, mountain, glowing ring, title fades in.”（暗夜场景、山、发光圆环、标题淡入。）同一场景写成规格： 8-second 1920x1080 title card. Scene, back to front: #0a0e2a night sky with faint grain; an orange radial glow (#ff6a2b core \\~150px, falling off to transparent by \\~430px) igniting at the mountain peak's right shoulder from 2s, positioned so its upper falloff reaches the wordmark's baseline; over it a huge concentric ring system (5 rings, 1px strokes at 8% white opacity, innermost ring glowing #4a5fd9) centered 40% from the top; a low-poly mountain (6-8 dark navy facets, #141a3d–#1e2650) filling the lower third with its apex left of center, a white road S-curving up its face with a soft glow; thin horizontal cloud streaks (white, 6% opacity) drifting right at two heights; a man's silhouette, pure black, \\~90px tall, bottom-right, fading in at 2.5s. At 3.5s \"SHOWREEL\" — thin geometric sans",
     "<video aria-label=\"Spec showreel\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/spec-showreel.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方规格渲染，未经编辑。* [!NOTE] 本规格里两句是**搭建后被修正的**。",
     "第一稿列了场景“从后到前”，然后把圆环写在说成在圆环*后面*的光晕之前。",
     "它还把那个光晕标为“\\~300px”。太小：给定同句锁死的圆环中心和山的位置，它物理上够不到要 bleed 穿过的 wordmark。",
     "两个错误在页面上看不见。渲染出来一眼全现。这就是本指南运行的[验证规则](https://hyperframes.heygen.com/prompting/overview.md#iterate-toward-the-look)的论据。密到有用的规格，密到自相不一致的程度，只有渲染能发现。"
    ],
    "codeBlocks": []
   },
   {
    "h": "规格带不动的东西",
    "p": "",
    "paras": [
     "上面每个元素都是智能体能直接构建的原语。两个诚实上限："
    ],
    "codeBlocks": [],
    "bullets": [
     "**有机插画** —— 手绘角色、绘画质感。词欠定一幅画。改为引导几何形语言（“flat rounded-geometric figure, circle head, no facial features”），或生成艺术。见[何时生成艺术](#generated-artwork)。",
     "**摄影与实拍内容** 必须给文件。路径写明确。"
    ]
   },
   {
    "h": "密度契约",
    "p": "",
    "paras": [
     "规格告诉构建者每个元素*是什么*。密度契约告诉它每帧必须多满。",
     "[更长的 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md)只写一次契约，每个区域照办。这是[完整 capstone 提示词](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)里买下它的条款：",
     "Density: every region fills three roles — one focal element at display scale, at least two supporting elements on their own cues, and the chrome/wire. Asymmetric compositions; display type \\~a tenth of frame width; three depth layers with parallax between them \\[…]",
     "公式就这么点，任何提示词复用：**一个 focal 元素，至少两个 supporting，加上常驻 chrome。** 非对称构图——60/40，绝不在空里居中一个元素。展示字体按约画面宽度十分之一定尺寸。至少三层深度，让视差卖出空间。",
     "Supporting 元素落在各自 cue 点。t=0 就填满三角色的帧是海报，不是场景。",
     "构建老是稀疏时，显式索取契约。“Every scene carries one focal element, two supporting elements on staggered cues, and the persistent chrome”（每场景带一个 focal 元素、错开 cue 点的两个 supporting 元素和常驻 chrome）是构建者能被追责的一句。"
    ],
    "codeBlocks": []
   },
   {
    "h": "另两个实例规格",
    "p": "",
    "paras": [
     "同一密度，分别用在产品 UI 片和字体片。两者都来自这些确切措辞，一次成型。",
     "第一遍判断被规格锁掉的地方，规格会钉死。这就是规格活着的编辑循环：构建、看到词的欠定处、收紧措辞。",
     "6-second 1920x1080. A frosted-glass command palette (640x84px, 20px radius, rgba(255,255,255,0.08) fill, 1px rgba(255,255,255,0.25) border, heavy backdrop blur) centered on a #0b0f1a field with two soft accent glows drifting slowly — #5b6cff upper-left, #22d3a5 lower-right, \\~400px, 20% opacity. At 0.4s the palette scales in 0.96→1 settling with back.out(1.2). At 0.8s a grey placeholder \"Search commands…\" types on; at 2.2s it fades out over 0.2s and the query \"render 4k\" types in white. At 2.8s three result rows (56px tall, 12px gaps: icon square, label, shortcut chip) cascade in as a detached list below the fixed bar, staggered 0.12s, each rising 12px with back.out(1.4). At 4.2s a 10%-opacity #5b6cff fill sweeps left to right across the first row and its shortcut chip pulses once. Rows and glows keep a barely-visible drift to the end. No audio.",
     "<video aria-label=\"Spec command palette\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/spec-command-palette.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方规格渲染，未经编辑。* 7-second 1920x1080. Off-black #101014 field with fine static film grain at 4%. The word \"PRECISION\" in \\~220px heavy condensed caps (a heavy system face condensed with scaleX 0.82), white, 0.02em tracking, centered: its letters assemble from alternating top/bottom 40px offsets with power3.out and a 0.05s stagger, starting 0.3s. At 1.8s a 2px hairline rule draws left-to-right beneath the word, 60% of its width, centered. At 2.4s a 40px tabular-mono counter fades in below and ticks 99.999 → 00.001 mm over 2.2s with expo.out deceleration. At 5.2s the whole lockup eases to 1.03 scale over 0.5s while the word cools from white to #d8d8de, then settles into a slow ±1% breathing idle to the end. No audio.",
     "<video aria-label=\"Spec precision type\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/spec-precision-type.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方规格渲染，未经编辑。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "生成艺术",
    "p": "",
    "paras": [
     "[音乐幻灯片](https://hyperframes.heygen.com/guides/music-to-video.md)把真实照片按节拍切：有真实艺术可干活。这是反面：hero 角色、绘画场景，或还不存在为照片或截图的雕塑物。"
    ],
    "codeBlocks": []
   },
   {
    "h": "代码擅长画什么——不擅长什么",
    "p": "",
    "paras": [
     "代码画的 HTML、CSS、SVG 在介质天生之处最强。即 UI mockup、字体、几何形、图表、像素画，和 Three.js 的 3D。",
     "**插画主导**的 hero 艺术是例外。手绘 SVG 最不擅长的正是角色、绘画场景和雕塑物。再好的提示词也顶在剪贴画水准。"
    ],
    "codeBlocks": []
   },
   {
    "h": "混合：生成艺术，代码动画",
    "p": "",
    "paras": [
     "从图像模型索取静态艺术，再用代码让它动： Generate the hero artwork as an image (via the media-use skill's image generation), then animate it with code. Anything that must move independently — eyelids, light beams, drawing lines — stays a code layer on top of the static art.",
     "生成的图是一层平面。必须独立动的一切都留在它上面的代码层。"
    ],
    "codeBlocks": []
   },
   {
    "h": "并排对比",
    "p": "",
    "paras": [
     "同一 brief 两种搭法：四人挽臂、暖渐变毛衣、平面插画风。相同动画节拍，相同光影、氛围、调色的工匠层。变量只有 figures 从哪来。",
     "<video aria-label=\"Artwork hand drawn\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/artwork-hand-drawn.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*手绘 SVG 人物——干净，但比例和手势读作剪贴画。*",
     "<video aria-label=\"Artwork generated\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/artwork-generated.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*生成插画分层动画——真实解剖和编辑级阴影。动画线仍从人物后穿过，因为艺术键到了透明。* 这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "\\[…] over a **generated-artwork backdrop** — a flat abstract mural evoking motion trails, generated **palette-neutral (grayscale) and duotoned live by CSS** from the two variables so it re-skins with everything else. **The mural is a full-frame, screen-fixed backdrop: it never moves on screen — the widening iris circle alone reveals it already in place at full frame \\[…] and it exits by fading out.**",
     "<video aria-label=\"Capstone region surface\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-surface.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "VFX 与液态玻璃",
    "p": "",
    "paras": [
     "[动态图形](https://hyperframes.heygen.com/guides/motion-graphics.md)可以点名其中之一，比如终端碎裂那一拍用 `vfx-shatter`。这是目录花哨那端的其余——3D 设备 mockup、磨砂玻璃 Apple UI，以及 HTML 碎裂或被吸进传送门的电影时刻。两组干活——[HTML-in-Canvas](https://hyperframes.heygen.com/catalog/blocks/vfx-iphone-device.md)块（真实 WebGL，实时 HTML 渲染为 GPU 纹理）和[特效](https://hyperframes.heygen.com/catalog/components/vignette.md)组件（轻量 CSS 抛光）。知道哪个是哪个，是效果能渲染和效果出意外的区别。全部插进[一次成型骨架](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)的“技法”步。"
    ],
    "codeBlocks": []
   },
   {
    "h": "设备 mockup",
    "p": "",
    "paras": [
     "把产品 UI 放进真实手机或笔记本，点名 [`vfx-iphone-device`](https://hyperframes.heygen.com/catalog/blocks/vfx-iphone-device)——真实 GLTF iPhone 15 Pro Max 和 MacBook Pro 模型，实时 HTML-in-Canvas 屏幕内容，产品评测镜头编排，360° 转台。想要风格化 iOS/macOS *环境*（主屏、桌面、dock）而不是裸设备，去下面液态玻璃系统块。",
     "15-second 1920x1080 video. Our dashboard UI lives on the screen of a real iPhone 15 Pro Max that turntables slowly under product-review lighting, then a MacBook Pro slides in beside it showing the same UI wider. Use the `vfx-iphone-device` registry block. No narration.",
     "<video aria-label=\"Validate device mockup\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-device-mockup.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染（块的演示 UI 在屏上），未经编辑。* **设备和屏幕上内容都要索。** 该块把实时 HTML 渲染进屏幕，但自带演示 UI——描述你的 UI（或指向截图/路径）才让智能体替换掉块的屏幕内容，而不是出厂演示。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `show my app on an iPhone`（把我的 app 显示在 iPhone 上）（你会拿到块自带的演示 UI）",
     "**改为：** `our dashboard UI (screenshots in assets/ui/) on the screen of the iPhone 15 Pro Max, turntabling`（我们的仪表盘 UI（截图在 assets/ui/）在 iPhone 15 Pro Max 屏幕上，转台）"
    ]
   },
   {
    "h": "液态玻璃 UI 处理",
    "p": "",
    "paras": [
     "液态玻璃块是磨砂玻璃 Apple 风 UI，浮在 aurora shader 背景上。按你要的表面选：",
     "| 你想要…… | 点名这个块 | 时长 |",
     "| - | - | - |",
     "| 3D iPhone 上的完整 iOS 26 主屏 | [`ios26-liquid-glass`](https://hyperframes.heygen.com/catalog/blocks/ios26-liquid-glass) | 15s |",
     "| 3D MacBook 上的 macOS Tahoe 桌面 | [`macos-tahoe-liquid-glass`](https://hyperframes.heygen.com/catalog/blocks/macos-tahoe-liquid-glass) | 15s |",
     "| 玻璃通知卡 | [`liquid-glass-notification`](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-notification) | 8s |",
     "| 玻璃数据卡、面板、 pill chip | [`liquid-glass-widgets`](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-widgets) | 8s |",
     "四个 `liquid-glass-*` 面板块共用 aurora-shader 舞台，所以能干净合成一景；`ios26-liquid-glass` 和 `macos-tahoe-liquid-glass` 是完整设备环境，多半单打。",
     "8-second 1920x1080 video. Frosted glass notification cards drift in and stack over an aurora shader background, each reading a fake alert (\"Build passed\", \"Deploy live\", \"0 incidents\"). Real translucency — the aurora must be visible through each card. Smoke the glass enough to keep white text above 3:1 against the brightest part of the aurora. No audio.",
     "<video aria-label=\"Glass notify\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/glass-notify.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑——CSS `backdrop-filter` 玻璃压在 Three.js aurora 上。* [!WARNING] **`liquid-glass-notification` 块需要 GPU，没有就静默失败。** 它标 `stability: experimental` 并打 `webgpu` 标签，因为磨砂面经 `drawElementImage` 画，折射由 WebGPU renderer 算。验证本章时，`navigator.gpu.requestAdapter()` 在试过的每个无头和有头 Chrome 都返回 `null`——带 `--enable-unsafe-webgpu`、`--use-angle=metal` 和硬件 GPU 模式也不行——块 init 直接 bail（退出）。失败模式不是报错：**一张卡都没有**，只有文字漂在背景上。",
     "所以为可复现渲染，要索取*效果*——“真实透光，背景从卡后透出”——让智能体用 CSS `backdrop-filter` 搭，到哪都渲染。上面视频就是这么来的。只有在渲染环境确认可用的 adapter，且明确要折射、高光和色差（CSS 做不到）时，才摸 WebGPU 块。",
     "**“液态玻璃”指块，不是你描述的滤镜。** 这些是完整 WebGL 舞台；索“给我的 div 加个玻璃模糊”只会得到 CSS `backdrop-filter`，不是这个外观。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `add a liquid glass effect over my text`（给我的文字加个液态玻璃效果）",
     "**改为：** `use the liquid-glass-widgets registry block for the stat cards`（数据卡用 liquid-glass-widgets 注册表块）"
    ]
   },
   {
    "h": "碎裂、传送、磁场与光标时刻",
    "p": "",
    "paras": [
     "`vfx-*` 块是单个电影节拍——花在转场或揭示上，不是一整条视频：",
     "| 时刻 | 点名这个块 | 时长 |",
     "| - | - | - |",
     "| HTML 碎成玻璃碎片 | [`vfx-shatter`](https://hyperframes.heygen.com/catalog/blocks/vfx-shatter) | 12s |",
     "| 体积光的维度缺口 | [`vfx-portal`](https://hyperframes.heygen.com/catalog/blocks/vfx-portal) | 10s |",
     "| 磁场粒子可视化 | [`vfx-magnetic`](https://hyperframes.heygen.com/catalog/blocks/vfx-magnetic) | 15s |",
     "| HTML 浮在有机液面上 | [`vfx-liquid-background`](https://hyperframes.heygen.com/catalog/blocks/vfx-liquid-background) | 12s |",
     "| 色差光线的戏剧文字揭示 | [`vfx-text-cursor`](https://hyperframes.heygen.com/catalog/blocks/vfx-text-cursor) | 8s | 8-second 1920x1080 video. Beat 1 (0-4s): a landing-page hero holds under directional light. Beat 2 (4-6s): the whole page shatters into glass fragments that scatter. Beat 3 (6-8s): bold white text slams in on black. Use the `vfx-shatter` registry block; the final beat reads \"HTML IS VIDEO\". No narration, no image or media files.",
     "<video aria-label=\"Vfx shatter\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/vfx-shatter.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。* **点名确切效果——“explode”（爆炸）、“break”（破碎）、“burst”（迸发）都不映射。** 每个块是特定模拟。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make the UI explode`（让 UI 炸掉）",
     "**改为：** `the page shatters into glass fragments`（页面碎成玻璃碎片）→ `vfx-shatter`，或 `gets pulled through a portal`（被吸进传送门）→ `vfx-portal`"
    ]
   },
   {
    "h": "环境抛光",
    "p": "",
    "paras": [
     "[特效](https://hyperframes.heygen.com/catalog/components/vignette.md)组件是成品场景*之上*叠加的轻量纯 CSS 收尾——噪点、暗角、扫光、推近：",
     "| 说这个 | 组件 |",
     "| - | - |",
     "| 胶片噪点 / 质感 | [`grain-overlay`](https://hyperframes.heygen.com/catalog/components/grain-overlay) |",
     "| 压暗的电影边 | [`vignette`](https://hyperframes.heygen.com/catalog/components/vignette) |",
     "| 扫过文字的光 | [`shimmer-sweep`](https://hyperframes.heygen.com/catalog/components/shimmer-sweep) |",
     "| 卡片慢推近 | [`parallax-zoom`](https://hyperframes.heygen.com/catalog/components/parallax-zoom) |",
     "| 卡拉回露出兄弟 | [`parallax-unzoom`](https://hyperframes.heygen.com/catalog/components/parallax-unzoom) |",
     "| 屏幕溶解成网格 | [`grid-pixelate-wipe`](https://hyperframes.heygen.com/catalog/components/grid-pixelate-wipe) | 这些是收尾层。噪点和暗角加质感而不动任何东西。只有镜头要去某处时才推（[动态](https://hyperframes.heygen.com/prompting/motion.md)）；落位的标题静止。"
    ],
    "codeBlocks": []
   },
   {
    "h": "效果需要 canvas 流水线时",
    "p": "",
    "paras": [
     "绊人的区别：**HTML-in-Canvas 块不是 CSS**。设备 mockup、液态玻璃舞台和 `vfx-*` 块经实验性 `drawElementImage` API 把实时 DOM 渲染进 WebGL 纹理——需要 Chrome flag。[HTML-in-Canvas guide](https://hyperframes.heygen.com/guides/html-in-canvas.md)（HTML-in-Canvas 指南）记了真实行为：",
     "上面特效组件没这回事——纯 CSS，到处动画，预览包括。所以今天要浏览器编辑器预览里零设置能看到东西，优先 CSS 特效；flag 注意事项在 HTML-in-Canvas 组里。",
     "[!WARNING] 不要在没确认该机 Chrome flag 已开的情况下，向 stakeholder 承诺浏览器编辑器里液态玻璃或设备块的实时预览——渲染 MP4 不受影响，但浏览器内预览可能 fallback。见[HTML-in-Canvas guide](https://hyperframes.heygen.com/guides/html-in-canvas.md)。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**渲染自动开 CanvasDrawElement**（`--enable-features=CanvasDrawElement`），Docker 内也包括。这够只用 CanvasDrawElement 的块。和 WebGPU 组合的液态玻璃块仍需经 `PRODUCER_HEADLESS_SHELL_PATH` 配置的兼容浏览器如 Brave 或 Chrome Canary；自带无头 shell 跑不了该组合。",
     "**浏览器编辑器的实时预览要手动开 flag**（`chrome://flags/#canvas-draw-element` → *Enabled* → 重启）。不开，这些块直接 fallback，不在预览里显示效果。",
     "块**特性探测、优雅降级**，所以没 flag 的浏览器不崩溃——只是看不到 WebGL 处理。"
    ]
   },
   {
    "h": "下一步去哪",
    "p": "",
    "paras": [
     "这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "Inside: frosted-glass inspector panels (real translucency — blur over what's behind; the product's the browser editor design language) hover above the wire carrying live values (`ease: power3.out`, a color token, an fps readout) \\[…] Glass surfaces use the file's `--glass-*` tokens with real backdrop blur.",
     "<video aria-label=\"Capstone region surface\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-surface.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "[Anatomy of a one-shot prompt](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)（一次成型提示词的解剖）——骨架，以及屏幕文案加引号。",
     "[Ask for smooth motion and transitions](https://hyperframes.heygen.com/prompting/motion.md)（索取顺滑动态与转场）——何时动、何时静止。",
     "[Copy-paste examples](https://hyperframes.heygen.com/prompting/examples.md)（复制粘贴示例）——可改的 `vfx-liquid-background` 社交卡提示词。",
     "[HTML-in-Canvas guide](https://hyperframes.heygen.com/guides/html-in-canvas.md)——`drawElementImage` 如何工作、flag 细节。"
    ]
   },
   {
    "h": "3D 与其他动画运行时",
    "p": "",
    "paras": [
     "有些提示词索“Build the scene in Three.js via the adapter.”（经 adapter 在 Three.js 里搭场景。）这是为什么，以及运行时地图的其余，为 GSAP 不是对工具的场景。",
     "HyperFrames 经[frame-adapter](https://hyperframes.heygen.com/concepts/frame-adapters.md)模式动画。任何能回答“第 N 帧屏幕该长什么样？”的运行时都能插入并确定性渲染。[GSAP](https://hyperframes.heygen.com/guides/gsap-animation.md)是默认 adapter，覆盖多数动态，所以很少需要点名。默认会错的场景在下面，那里提示词该选运行时。"
    ],
    "codeBlocks": []
   },
   {
    "h": "真实 3D → Three.js via the adapter",
    "p": "",
    "paras": [
     "这是每次都要钉死的一条。任何真实**深度、光照或镜头**——旋转产品、穿行场景、接光表面——都明说 Three.js： Build the scene in **Three.js via the adapter**: a product model on a turntable, one key light and a soft fill, slow rotation.",
     "<video aria-label=\"Example 3D cards\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-3d-cards.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*等距卡提示词的 Three.js 版——真实阴影和光照，一次成型。* 引擎理由很直白。CSS `perspective` 变换只斜切平面。没有光源没有镜头，只有投影矩形，所以光照或视差一重要就读作平面。",
     "Three.js 是一方 seek-safe 运行时。adapter 以 `window.__hfThreeTime` 发布 HyperFrames 时间，并在每次 seek 分发 `hf-seek` 事件，所以真实 3D 场景像其他一切一样逐帧准确渲染。",
     "把“真实 3D”当“Three.js”。这是核实过的默认，不是偏好。例外是明确要平面风格化假 3D 外观时。",
     "镜头运动同属一条规则。无人机环绕、滑轨或推近，只有真有镜头处才存在：",
     "<video aria-label=\"Camera orbit\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/camera-orbit.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*seek 驱动的 Three.js 无人机环绕。镜头扫连续弧，CSS 变换做不到。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `isometric cards floating in CSS 3D with perspective`（CSS 3D 透视浮着等距卡片）",
     "**改为：** `build the isometric scene in Three.js via the adapter, with real depth and lighting`（经 adapter 在 Three.js 里搭等距场景，带真实深度和光照）",
     "**Avoid:** `a drone-orbit camera move around the logo` with no runtime named — CSS has no camera to orbit",
     "**Instead:** `orbit the camera around the logo — Three.js via the adapter`"
    ]
   },
   {
    "h": "现成动画文件 → Lottie",
    "p": "",
    "paras": [
     "你可能已有设计过的动画：After Effects 导出、`.json` 或 `.lottie` 文件、设计师的图标动画。不要让智能体重画。指向文件，索取 Lottie： Play this Lottie file (`assets/loader.lottie`) centered, then fade to the title.",
     "Lottie adapter 逐帧 seek 现有动画，所以设计师的活原样渲染。让智能体在 GSAP 里重做，只会把源头丢了、落到近似。",
     "角色一样。吉祥物走进来、停住、指物，是带表演的 Lottie 文件；智能体在 GSAP 里围着它搭场景： Use this character Lottie (`assets/mascot.json`): it walks in and points right at 5.2s. Bring the title card in on the point.",
     "短走循环 `loop: true` 整景循环。[ `lottie-character-walk`](https://hyperframes.heygen.com/catalog/blocks/lottie-character-walk) 块是可用的起点。"
    ],
    "codeBlocks": []
   },
   {
    "h": "简单 UI 与文字动态 → 默认",
    "p": "",
    "paras": [
     "淡入、滑动、错开、计数、动感文字、hover 风格揭示——日常动态——GSAP 原生就是它。已经是默认。这里不要点名运行时。描述动态本身。见 [Motion that reads premium](https://hyperframes.heygen.com/prompting/motion.md)（读作高级的动态）：",
     "The headline slides up per word, staggered 0.1s apart, easing out as it lands. CSS keyframes 和 Web Animations API 也是受支持的 adapter。只有带入已有 CSS `@keyframes` 或 WAAPI 代码、想原样保留时才点名。新索取让默认担。",
     "SVG“线自己画”效果（动画 `strokeDasharray` / `strokeDashoffset`）同样属 GSAP 默认领地。附录[SVG draw-on rows](https://hyperframes.heygen.com/prompting/overview.md#rules-and-common-mistakes)（SVG 描画行）有两个索取前值得知道的 lint 坑。"
    ],
    "codeBlocks": []
   },
   {
    "h": "场景之间 → shader 转场",
    "p": "",
    "paras": [
     "场景*内*的动态是一回事。场景*间*的交接是另一回事。设计化转场——擦除、故障、液体溶解——在那一刻索取 shader 转场： Hard-cut between the first three scenes; use a **shader transition** (glitch) into the final logo scene.",
     "点名时刻。Shader 转场留给值得的两三拍，不要每刀都用。词汇见 [Transitions](https://hyperframes.heygen.com/prompting/motion.md#between-scenes-transitions)（转场）。"
    ],
    "codeBlocks": []
   },
   {
    "h": "确定性浮到提示词上",
    "p": "",
    "paras": [
     "每个运行时在同一[确定性](https://hyperframes.heygen.com/concepts/determinism.md)契约下渲染。帧时钟是 `t = frame / fps`。**没有墙上时钟，渲染时没有实时网络，没有未播种随机。**",
     "两类索取撞上它，按这样措辞。",
     "实时数据渲染时不能拉，因为渲染必须可复现： 未播种随机每帧不同、破坏可复现： 经验规则：视频需要*知道*的一切，渲染开始前就要在场，烘入或作为[变量](https://hyperframes.heygen.com/prompting/design-systems.md#templates-and-variables)传入。随机必须播种。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `fetch the current BTC price and count up to it`（拉当前 BTC 价格数上去）",
     "**改为：** `count up to $67,400`（数到 $67,400，固定值烘入），或 `read the target from a variable I pass at render time`（目标从渲染时传入的变量读）",
     "**避免：** `scatter 200 particles randomly`（随机撒 200 粒子）",
     "**改为：** `scatter 200 particles from a seeded random layout`（从播种随机布局撒 200 粒子）——说 **seeded**，位置在帧和重渲染间稳定"
    ]
   },
   {
    "h": "在真实短片里",
    "p": "",
    "paras": [
     "这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "**Depth (52–56s).** The wire spirals off the flat plane into real 3D — a **Three.js scene via the frame adapter** (never CSS fake-3D): the camera descends following the wire as it coils around a rim-lit faceted form (ink material on charcoal), mono axis readouts landing on cue, then rises back to the plane with the wire leading the way out. The coil winds up out of the wire and collapses back onto it — its ends never float cut off in mid-air — and the protagonist chip joins the 3D scene for the crossing: it rides the wire straight through the coil's loops and passes behind the form with true depth occlusion, never floating over the geometry as a flat overlay.",
     "<video aria-label=\"Capstone region depth\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-depth.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Ask for a great video](https://hyperframes.heygen.com/prompting/overview.md)（索取好视频）",
     "[Add effects to images and video](https://hyperframes.heygen.com/guides/media-effects.md)（给图片和视频加特效）",
     "[Install and update agent skills](https://hyperframes.heygen.com/guides/skills.md)（安装和更新智能体技能）"
    ]
   }
  ]
 },
 "tips-design": {
  "lede": "“Make it on-brand” 是你能提的最含糊的要求：智能体不懂你的品牌，所以它编一个。给它一个**品牌事实源**，并在提示里点名它：设计规范、线上站点、Figma 文件，或 Studio 应用里的品牌套件。本页还覆盖可复用的模板以及横跨多场的计划。",
  "sections": [
   {
    "h": "指向规范，别描述氛围",
    "p": "",
    "paras": [
     "HyperFrames 项目可以携带设计规范：`frame.md`。它的 frontmatter 里有机器可读的品牌——精确的十六进制、字体族、字重关系。frontmatter 下面的散文承载意图和品牌的该做与不该做。",
     "规范存在时，点名它： Use the palette and type from `frame.md`. Build a 15-second feature announcement. 为什么有效：`on-brand` 是智能体要猜的氛围。规范的 frontmatter 是规范性的。智能体逐字引用你的十六进制和字体族，而不是近似，然后读散文找意图。",
     "品牌在别处就附上它。一份 PDF 品牌手册、一张截图、或粘贴的十六进制码，都比描述的印象更可靠。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make it feel on-brand and premium`",
     "**改成：** `pull colors and fonts from frame.md; premium means generous spacing and one restrained accent`"
    ]
   },
   {
    "h": "品牌管色彩和字体——不管布局",
    "p": "",
    "paras": [
     "设计规范讲品牌*长什么样*。它**不**讲视频帧怎么构图。说出哪些是神圣的，让智能体摆其余的： Colors and fonts are locked to the brand — keep the exact hexes and the display/body pairing. Layout, spacing, and motion are yours to compose for video.",
     "为什么有效：Web 规模的品牌值活不过视频。`1px` 边框配 `0.06` 不透明的影子，H.264 压缩后就看不见了。Web 正文尺寸在 1080p 画框里消失。",
     "所以把规范当两半看： 从 Web 设计系统把布局也钉死会跟这个打架。钉住配色和字体，交出画框。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**严格**——品牌色、字体、字重关系和背景选择。品牌是浅色画布就保持浅色。",
     "**放大给介质**——字号、装饰不透明度、边框粗细。"
    ]
   },
   {
    "h": "用站点自己的配色和字体",
    "p": "",
    "paras": [
     "没有规范但品牌在外面，就指向它，让智能体提取： Match this site's look — pull its palette and fonts — and make a 20-second launch clip: `https://…`",
     "知名品牌点名往往就够了。智能体会自己查配色和字体排印。",
     "有一点要说清。单页应用主页常返回接近空的壳。如果配色提得太薄，就指向博客、新闻稿或文档页。",
     "这是同一招品牌事实移——事实源从文件换成了*站点*。"
    ],
    "codeBlocks": []
   },
   {
    "h": "带入 Figma 画框、品牌或 Logo",
    "p": "",
    "paras": [
     "品牌在 Figma 里就直接要。智能体会导入它，而不是肉眼看截图： Bring in the brand tokens from this Figma file, then build the intro: `https://figma.com/…`",
     "Import this Figma frame as the opening scene and this logo as an SVG: `<links>` [Figma 导入](https://hyperframes.heygen.com/guides/figma.md)把每次导入冻成本地文件并记录来源。渲染从不调 Figma，所以保持确定性。品牌变量以构图品牌令牌进来。",
     "提需求时两件事值得知道："
    ],
    "codeBlocks": [],
    "bullets": [
     "**先导令牌，后导组件。** 说 “brand tokens first, then the components.” 这样导进来的组件颜色才能链接到你的品牌变量，而不是烘进重复的十六进制。",
     "**分镜帧是状态，不是幻灯片。** 指向一排场景帧时，让智能体*复现它们之间的运动*。一帧里元素在四个位置，是一个元素在动，不是四张静帧翻过去。"
    ]
   },
   {
    "h": "让多视频系列保持一致",
    "p": "",
    "paras": [
     "系列是发布套装、每周一条、或分区域版本。一致性来自**共享的事实源**，不是每次重讲品牌： All four videos share `frame.md` for palette and type. Only the headline and the stat change per video.",
     "不变的部分来自那一份编写规范，或一套导入的 Figma 令牌。变化的部分变成[变量](#templates-and-variables)。",
     "`frame.md` 一改，让智能体重建受影响的构图。这就是手写 HTML 拿到新品牌值的方式。",
     "有些构图已经存在，渲染时要重换皮。把共享的品牌令牌声明为构图变量。每标量变量作为 `--{id}` CSS 自定义属性挂在构图根上，所以 CSS 里的 `var(--id)` 跟随覆盖。",
     "设计系统和模板在这里交汇。品牌是共享的，内容是参数化的。"
    ],
    "codeBlocks": []
   },
   {
    "h": "按路径给品牌素材",
    "p": "",
    "paras": [
     "Logo、字体、纹理和产品图是输入。把路径交给智能体——别让它画： Logo at `assets/logo.svg`, brand font files in `assets/fonts/`, product shot at `assets/hero.png`. Use them; don't invent placeholders.",
     "Logo 优先 SVG 而不是位图。它可缩放、可做动画。",
     "把路径说清。这样智能体接的是真素材，而不是生成替身。也让渲染确定性，因为每个素材渲染开始前都在本地。"
    ],
    "codeBlocks": []
   },
   {
    "h": "先给品牌输入——事后别重换皮",
    "p": "",
    "paras": [
     "先给智能体配色、字体和 Logo（或 `frame.md`），再构建。事后别覆盖构图。",
     "为什么有效：智能体在第一场之前就定了观感，颜色、间距、动效和组件处理作为一个系统一起成立。",
     "事后逐场重换皮会把整体平衡好的设计拆散。你花的功夫在跟它斗，而不是交一份规范。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make the launch video, then restyle every scene to my colors afterward`",
     "**改成：** `make the launch video with my palette, fonts, and logo as inputs up front`"
    ]
   },
   {
    "h": "模板和变量",
    "p": "",
    "paras": [
     "上面的品牌节讲的是每次渲染*永不*变的部分。模板和变量讲变化的部分。每客户一张卡、每季度一个数、每收件人一个名。",
     "你知道构图会被复用时，在提示里说。点名变化的部分。智能体会把它们变成已声明的[变量](https://hyperframes.heygen.com/concepts/variables.md)——渲染时填的类型化、带标签的槽位，而不是硬编码进 HTML。",
     "触发句很简单。点出槽位： Build a 6-second title card. Make the **name**, the **logo**, and the **accent color** variables; everything else stays fixed.",
     "<video aria-label=\"Validate variables default\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-variables-default.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*变量默认值。*",
     "<video aria-label=\"Validate variables variant\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-variables-variant.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*同一构图用 `--variables` 覆盖重渲——换了名字、Logo 和强调色，零再提示。* 智能体会把 `data-composition-variables` 声明在构图根上，每个槽位类型正确。name 是 `string`。强调色是 `color`。Logo 是 `image`，普通 URL 就是合法值。普通 `<img>` Logo 不需要时间属性。只有 `<video>` 和 `<audio>` 变量才涉及[变量](https://hyperframes.heygen.com/concepts/variables.md)里的媒体接线。一个构图，多套填装。"
    ],
    "codeBlocks": []
   },
   {
    "h": "说清每个槽位的类型",
    "p": "",
    "paras": [
     "变量有七种类型：`string`、`number`、`color`、`boolean`、`enum`、`font` 和 `image`。渲染时每种校验不同。在[浏览器编辑器](https://hyperframes.heygen.com/studio.md)中，`boolean`、`enum`、`color` 和 `number` 各有自己的控件，`string`、`font` 和 `image` 用普通文本输入。",
     "你不用自己写 JSON。但在提示里点类型省一次猜： Variables: `plan` (enum: Free / Pro / Enterprise), `price` (number, shown as `$`), `featured` (boolean — toggles the ribbon), `headline` (text).",
     "引擎原理：带已声明选项的 `enum` 会在渲染时对照清单检查，所以 `enum-out-of-range` 能被抓到。`number` 可以带 `min`、`max`、`step` 和 `unit` 标签，这才给浏览器编辑器真滑块而不是光文本框。只说 “editable”，类型就留给智能体猜。输错的值很晚才浮出来。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make the plan and price editable`",
     "**改成：** `plan is an enum (Free / Pro / Enterprise); price is a number in dollars`"
    ]
   },
   {
    "h": "先做模板，再按记录渲染",
    "p": "",
    "paras": [
     "变化的部分成为变量后，同一源文件按每行数据渲染一次。这是真批处理，不是复制粘贴循环。你写一次构图，喂它一组值集： Build this as a template with `name` and `title` variables, then render one video per row of my data — output to `renders/{name}.mp4`.",
     "智能体写构图，然后跑[批量渲染](https://hyperframes.heygen.com/concepts/variables.md#batch-renders)。批量输入是 JSON 数组。每行是一套变量值，每行产一个输出文件。输出路径里的 `{key}` 占位符按那行填。",
     "源是 CSV 就说。智能体转成批量要的行数组。",
     "加 “fail on any undeclared or mistyped value” 就用 `--strict-variables` 渲染。列名拼错会停住运行，而不是静默渲染默认值。",
     "一切共享一个构图。所以一次设计修复会在下次渲染传到每一个输出。你不再编辑上百个近重复文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "个性化需求",
    "p": "",
    "paras": [
     "大规模个性化视频是同一招，只是值集来自你的数据： A 10-second welcome clip that greets each new signup by first name and shows their company logo. I'll supply a list of `{ firstName, logoUrl }` records.",
     "`firstName` 是 `string`。`logoUrl` 是构图绑到 `<img src>` 的图片槽位。",
     "素材传**URL 引用，不要内联数据**。URL 形的值能干净穿过本地渲染器和分布式 [Lambda 渲染](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)。",
     "接线在你自己的产品 UI 或智能体后面，而不是 CLI？[`@hyperframes/sdk`](https://hyperframes.heygen.com/packages/sdk)打开基础模板，每实例叠一层稀疏覆盖。宿主只存每条记录的增量。"
    ],
    "codeBlocks": []
   },
   {
    "h": "先声明——别把值烘死",
    "p": "",
    "paras": [
     "最常见的漏是先用fixed 值描述成品视频，再事后来要“可复用”： 引擎原理：变量是脚本应用到实时 DOM 的运行时值。先从声明默认值解，再实例覆盖，再 CLI。",
     "先声明，可复用的结构从第一次渲染就存在。默认值只是又一套值集。把 `\"Acme — Pro — $49\"` 烘进标记，得到的构图没有槽位。复用就成了每个变体改一遍硬编码文字的编辑活。那正是变量要避免的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `Make a card that says \"Acme — Pro plan — $49\". Later I'll want other companies too.`",
     "**改成：** `Make a plan card. Variables: company (text), plan (enum), price (number, $). Show \"Acme / Pro / 49\" as the default.`"
    ]
   },
   {
    "h": "证明模板真换皮",
    "p": "",
    "paras": [
     "从不换皮的模板能过你所有的门。`lint` 和 `check` 只验结构。`--strict-variables` 只抓未声明或输错的键。谁都不知道你传的值到没到 DOM。",
     "失败看起来像成功。渲染完成、退出干净，**和默认像素一致**。",
     "所以要差分测试。渲两次，对一下： 两个文件一致，说明覆盖没到你以为的那个属性。查三件事：变量 ID 声明了吗？渲染命令用的是那个确切 ID 吗？可见属性真的绑到了它的 CSS 自定义属性或变量值吗？ 渲染时 `--variables` 覆盖按变量 ID 全局生效。编译器把匹配的覆盖应用到根和 `data-composition-src` 拉进来的子构图上的 CSS 自定义属性。`data-variable-values` 仍是给两个挂载不同值的实例级方式。",
     "子构图里的作用域 JavaScript 读的是自己的实例级变量表。所以脚本调 `getVariables()` 时，在挂载点转发值，不要读 CSS。",
     "[收官片](https://hyperframes.heygen.com/prompting/capstone.md)把变量保持在一个根文件上是为简单，不是模板要求单文件。只要共享的 CSS 绑定 ID 一致地声明，子构图也行。实例专属或给 JS 读的输入用挂载点值。本节末尾逐字引了它的确切变量子句。"
    ],
    "codeBlocks": [
     {
      "code": "hyperframes render --output default.mp4\nhyperframes render --variables '{\"ground\":\"#0d1420\",\"ink\":\"#c8ff3d\"}' --strict-variables --output reskin.mp4",
      "file": "BASH THEME={NULL}"
     }
    ]
   },
   {
    "h": "什么不能当变量",
    "p": "",
    "paras": [
     "几个输入是编译时读一次的，变量动不了它们： 所以这样写做不到字面意思： 总长必须按输出不同，那就是每次渲染不同的根 `data-duration`，不是变量。完整清单和背后的编译时 vs 实时 DOM 规则见[什么不能当变量](https://hyperframes.heygen.com/concepts/variables.md)。",
     "[!NOTE] 手写的 CSS 自定义属性永远赢同名变量。你的构图已经自带 `:root { --accent: ... }` 手写主题令牌时，名为 `accent` 的变量永远覆盖不到它——手写值站住。渲染时 `--variables` 覆盖仍赢过两者。所以想按渲染覆盖手写值时，用 `--variables`，别用同名声明变量。"
    ],
    "codeBlocks": [],
    "bullets": [
     "构图**尺寸**（`data-width` / `data-height`）",
     "**根构图总时长**",
     "**帧率**",
     "**输出格式、编码或质量**",
     "**避免：** `make the video length a variable so each render can be a different duration`",
     "**改成：** `author one composition per target length` ——或变*片段*的时长，那是实时 DOM 重读的"
    ]
   },
   {
    "h": "相关",
    "p": "",
    "paras": [
     "[card] [变量（概念）](https://hyperframes.heygen.com/concepts/variables.md) 机制：声明类型、实例级覆盖、批量渲染、优先级。",
     "[card] [@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md) 模板 + 稀疏覆盖编辑，接你自己的产品 UI 或智能体。",
     "[card] [规格拨盘](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify) 写多少——以及为什么点类型是便宜的精确。",
     "[card] [品牌、模板和分镜](https://hyperframes.heygen.com/prompting/design-systems.md) 品牌令牌作变量，从一个值给每次复用重换皮。",
     "这个子句来自一部[更长的 HyperFrames 片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)产出了下面的镜头。措辞可直接搬去你的视频：",
     "**Variables:** expose `ground` (default `#0a0a0a`) and `ink` (default `#3CE6AC`) as composition variables on the single root file, bound via CSS custom properties everywhere (including the duotoned mural), so one `--variables` call re-skins the entire journey. It will be rendered twice: the default brand palette, and a second full render with `{\"ground\":\"#0d1420\",\"ink\":\"#c8ff3d\"}`.",
     "**Architecture constraint (technical):** single composition file — one `index.html`, one variable scope. \\[…] No `data-composition-src` sub-files."
    ],
    "codeBlocks": []
   },
   {
    "h": "分镜",
    "p": "",
    "paras": [
     "[变量和模板](#templates-and-variables)把一个构图复用到多次渲染。分镜是另一条规模轴：一部片多场。",
     "过了几个拍点，从空白页每场描述就是慢路。“然后第 2 帧显示 X，然后第 3 帧显示 Y。” 它还会漂，因为帧与帧之间什么都没绑住。",
     "只提示**计划**一次——主线、每帧的任务、管揭入的规则。然后让构建照它摆帧。",
     "这套叙事词汇是写作纪律，不是额外的 `STORYBOARD.md` 架构。工作流把你的计划翻译给构建消费的更小机器可读形状。",
     "[!NOTE] 在[构建前](https://hyperframes.heygen.com/prompting/overview.md#before-the-build)要分镜，就是要先审计划，什么都还没建。哪种都行，本页教的计划就是构建的据。"
    ],
    "codeBlocks": []
   },
   {
    "h": "提示计划，不提示场面",
    "p": "",
    "paras": [
     "分镜是坐在单帧之上的短结构化文档。它拿三样： 工作流读计划，照它给每帧建 HTML 子构图。把电影的*形状*说准，帧与帧在节奏、配色和落点上已经互相赞成。你不用逐帧重讲那一切。",
     "触发就是点名弧线，要分镜而不是单场： Storyboard a 3-frame piece: hook → substance → landing, silent, \\~15 seconds, with a callback that pays off the opening motif.",
     "下面一切都是把 “storyboard” 从松词变成构建一次落地的计划的词汇。"
    ],
    "codeBlocks": [],
    "bullets": [
     "一条弧线",
     "每帧继承的方向块",
     "每关键时刻一份轻量逐帧规格——不是完整描述"
    ]
   },
   {
    "h": "把电影形状一次说清",
    "p": "",
    "paras": [
     "任何帧之前，先定四件，每帧都要对照： 这四件一次说清。后面单帧提示再不用自证语气。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**信息**——全片要证明的一句论点。一帧不服务它，砍帧不砍信息。",
     "**弧线**——拍点序列，直说。`Hook → Substance → Landing`，或 `Hook → Problem → Solution → Proof → CTA`。帧是并列条目时用 “listicle” 之类的形状词，别用上升序列。",
     "**受众**——给谁，一句话。它同时给每帧校准语气和术语。",
     "**氛围**——一个音乐或能量描述，如 “tense synth pulse, resolving to warm”。每帧节奏都要认它，哪怕是静默片。"
    ]
   },
   {
    "h": "方向一次定，每帧继承",
    "p": "",
    "paras": [
     "分镜的方向块是每帧无条件遵守的规则集。四条值得点名。",
     "**双色纪律。** 点一个底色和一个墨色。然后把规则说出来：重音永远不许第二色相。 bigger 时刻 bigger 靠反白、字重、缩放或密度。",
     "**配音卡点的揭入。** 规则本身在[加配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md#pace-reveals-to-the-narration)。分镜是*逐帧应用*的地方。t=0 画面只有旁白正在说的，下一个在说到它的点才到。",
     "配一个停留行为。说定格的帧是全静止还是带轻微待机。永远别要缓慢漂移或“呼吸”——那读起来是未完成，不是选择。",
     "片子是静默就保留规则形状换触发。揭入落在具名时间戳，不是说话子句。节奏仍要有意。只是没有旁白可对。",
     "**一个喘息。** 全片点名恰好一帧为喘息。它是故意更稳、更静的拍点，或最长的一次定格阅读。其余帧持续发展。",
     "点名能防两个失败：构建不会把该让观众喘口气的帧动太多，也不会为配它把其余动太少。",
     "**禁用清单。** 一份视觉陈词滥调清单，一次说清。它是常设滤镜，不是逐帧的清单。每建一帧都要对照它查： no purple-blue AI gradients, no bokeh, no browser chrome, no drop-shadow cards, no infinite loops or randomness",
     "换进你这部片子错的陈词滥调。点名就是要在帧漂ទៅ它之前说。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `use the brand colors, plus a highlight color for the important bits`",
     "**改成：** `ground: deep navy; ink: warm white. Emphasis = invert, scale up, or go denser — never a third color.`"
    ]
   },
   {
    "h": "给每帧派任务",
    "p": "",
    "paras": [
     "方向块覆盖一切共享。所以每帧自己的提示只需说它特别的： `persuasion` 和 `beat` 永不跳过。没有它们，帧是 “一张展示数字的场面”。有了它们，它是 “一张证明数字的场面，而它落地*感觉*是这样的”。",
     "带具名说服手法和拍点的帧，给构建每个选择的理由。只带视觉描述的帧没有理由。"
    ],
    "codeBlocks": [
     {
      "code": "[type]        the frame's category      hook · benefit_highlight · social_proof · cta\n[persuasion]  the rhetorical device     before/after · numbered enumeration · counterexample · callback + distillation\n[beat]        the emotional beat        recognition + tension · aha · resolve + inevitability\n[focal]       the one thing the eye lands on\n[roles]       what's foreground / supporting / background, assigned explicitly",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "回调",
    "p": "",
    "paras": [
     "早点种一个 motif：一个形状、标记、短语、或一片颜色。后面让它更密或更全地回来，当作刻意回报。",
     "计划里两半都说——motif 种在哪，它回来时怎么变。",
     "A single thin accent dot appears top-right in frame 1 at low weight. In the landing frame, that same dot expands and fills into the full logo lockup — same motif, now complete.",
     "把回归说明确。否则重建会把早期 motif 当丢弃纹理。回调生效的前提是计划说第二次出现是*同一个*元素，不是长得像的新元素。"
    ],
    "codeBlocks": []
   },
   {
    "h": "完整示例：静默 3 帧分镜",
    "p": "",
    "paras": [
     "[!TIP] 下面 `storyboard-mini` 故意小且静默：三帧、约 15 秒、无旁白。整套模式一次便宜渲染就能验：弧线、方向块、逐帧任务、一个喘息、一个回调。写更长的带旁白分镜之前，先做这个。",
     "Storyboard a 3-frame, \\~15-second, 1920x1080 piece. Silent — no narration, no VO track. Message: \"Fernwell gives you back the hours other tools take.\" Arc: Hook → Substance → Landing. Audience: small-team operators evaluating a new tool. Mood: tense synth pulse resolving to warm.",
     "Direction for every frame: ground color deep navy `#0b1220`, ink color warm off-white `#f4efe6`. Nothing else gets a hue — emphasis is inversion, scale, or density only. Reveals stage on internal timestamps, since the piece is silent and there's no spoken cue. At each frame's t=0 only its first element is on screen. The rest arrive on the timestamps below. Holds stay fully still, no drift or breathing. No purple-blue AI gradients, no bokeh, no browser chrome, no drop-shadow cards, no infinite loops or randomness.",
     "Frame 1 — Hook (0.0–4.0s), type: hook, persuasion: counterexample, beat: recognition + tension, focal: the headline. At 0.0s: bold ink headline \"Most tools slow you down.\" slams in, centered. At 1.5s: a single thin accent dot (ink color, small, low weight) fades in top-right — the motif, planted quietly. Hold from 3.0–4.0s.",
     "Frame 2 — Substance, **the breather** (4.0–10.0s), type: benefit\\_highlight, persuasion: numbered enumeration, beat: aha, focal: the stat. This is the one deliberately calmer, more static frame in the piece. Everything else develops continuously. This one mostly holds. At 4.0s: the accent dot from frame 1 carries over, now larger, sitting quietly left-of-center. At 5.0s: a big stat \"3.2 hrs / week\" fades in beside it, no motion after it lands. Static hold 6.0–10.0s.",
     "Frame 3 — Landing (10.0–15.0s), type: cta, persuasion: callback + distillation, beat: resolve + inevitability, focal: the completed motif. At 10.0s: the accent dot from frames 1–2 expands and fills into the full Fernwell wordmark lockup — same motif, now complete, denser and larger. At 12.0s: tagline \"Fernwell. Built for flow.\" stamps in below it. Hold 13.5–15.0s.",
     "<video aria-label=\"Storyboard mini\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/storyboard-mini.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面提示渲染，未编辑——无音轨，完全照要求。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关",
    "p": "",
    "paras": [
     "[card] [一镜提示的解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt) 单拍点的六段骨架——同一纪律，一次一帧。",
     "[card] [复现你看过的东西](https://hyperframes.heygen.com/prompting/recreating-references.md) 逐帧记录动效——分镜逐帧时间戳需要的严谨度。",
     "[card] [品牌、模板和分镜](https://hyperframes.heygen.com/prompting/design-systems.md) 分镜方向块取材的双色纪律和品牌令牌。",
     "[card] [HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts.md) `STORYBOARD.md` 作生产工件——分镜计划落在哪，`BRIEF.md` 下游。",
     "**在真实片子里。** 这个子句来自一部[更长的 HyperFrames 片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)产出了下面的镜头。措辞可直接搬去你的视频：",
     "**The clip card** — the `<div class=\"clip\">` typed in the opening travels the whole journey: it slides onto the wire as a clip chip after being typed, rides ahead of the camera between regions (handing itself off — visible leaving one region and arriving in the next), and is the thing that finally renders at the end. It is the protagonist.",
     "<video aria-label=\"Capstone region render\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-render.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*子句落成渲染——主角卡片在索道上跑了一分钟后，抵达渲染槽。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关",
    "p": "",
    "paras": [
     "[card] [Figma 导入](https://hyperframes.heygen.com/guides/figma.md) 从 Figma 文件导入品牌令牌、素材、组件和动效。",
     "[card] [变量和模板](#templates-and-variables) 把品牌令牌变成变量，从一个值给整套系列重换皮。",
     "[card] [规格拨盘](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify) 钉死十六进制和字体方向如何去漂。",
     "[card] [Claude Design](https://hyperframes.heygen.com/guides/design-tools.md) 附品牌手册或截图，从观感种第一稿。",
     "**在真实片子里。** 这个子句来自一部[更长的 HyperFrames 片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)产出了下面的镜头。措辞可直接搬去你的视频：",
     "**Design system: the provided `frame.md` is the single source of brand truth — read it first and obey it exactly.** It is the real HyperFrames brand (by HeyGen), dark-first: flat near-black ground \\[…] **mint `#3CE6AC` used sparingly as the single accent — mint means go / primary / active**. The mint→cyan gradient (`#3CE6AC → #00E3FF`) appears in exactly one place in the whole film: the final CTA lockup.",
     "<video aria-label=\"Capstone region render\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-render.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*子句落成渲染。结尾组合是品牌文件的展示面和唯一认可的渐变第一次同框。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[用你的品牌套件](https://hyperframes.heygen.com/studio-app/brand-kits.md)",
     "[一部完整电影，逐提示](https://hyperframes.heygen.com/prompting/capstone.md)",
     "[要一条好视频](https://hyperframes.heygen.com/prompting/overview.md)"
    ]
   }
  ]
 },
 "tips-editing": {
  "lede": "[分镜](https://hyperframes.heygen.com/prompting/design-systems.md#storyboards)的帧照样会被编辑，你做的其他东西也是——模板化构图、一镜呈现，全都一样。大多数 HyperFrames 时间不在第一次渲染，而在之后的二十次编辑。构图就是纯 HTML，带 `data-*` 时间属性和一个 GSAP 时间线，所以你在非线性编辑器里会做的每个编辑，都对应源里一处具体、可检查的改动。你不用重讲一遍视频；用你会跟真人剪辑师说的话点名这个编辑，智能体做最小的改动就够了。",
  "sections": [
   {
    "h": "动词 → 编辑映射",
    "p": "",
    "paras": [
     "每个时间线动词都落到某个 `data-*` 属性或行内样式。下表是它在底下碰什么——值得知道的是：这就是绝对值能用、有些编辑很便宜的原因：",
     "| 你说 | 编辑动词 | 智能体编辑什么 |",
     "| - | - | - |",
     "| “第 2 场晚点开始 / 早点开始” | 移动 | `data-start` |",
     "| “把字幕放到视频上面” | 重叠 | `data-track-index` + 行内 `z-index` |",
     "| “让 Logo 早点结束” | 剪切（右侧） | `data-duration` |",
     "| “跳过片段的第一秒” | 剪切（前面，仅媒体） | `data-media-start` |",
     "| “让第 2 场长两秒” | 改时间 | `data-duration`（和 GSAP 时间线长度） |",
     "| “音乐床太响了” | 调电平 | `data-volume` | [!NOTE] 浏览器编辑器时间线的心理模型：**移动**改的是片段何时*开始*，**右侧剪切**改的是何时*结束*，**前面剪切**只有媒体片段才有——`<video>` 或 `<audio>` 可以跳进自己的内容，但 GSAP 驱动的 `<div>` 没法从动画中段开始。见[浏览器编辑器时间线](https://hyperframes.heygen.com/studio/timeline.md)的完整片段类型分解。映射里还有一个表面显示不出来：改时间的场景如果横跨整个构图，根节点的 `data-duration` 也要跟着改——根节点管总长，所以更长的子片段永远不会长过它。"
    ],
    "codeBlocks": []
   },
   {
    "h": "剪切、移动和重叠",
    "p": "",
    "paras": [
     "这些是纯时间编辑——不改视觉，只改某层在时间线上的时间和位置。",
     "把片头剪到 0:03 结束，不要 0:05。",
     "把下条移到 0:06 开始。",
     "字幕渲染在视频后面了——把它们放到更高轨道，盖在上面。",
     "移动要以构图长度为界——10 秒视频里把 4 秒片段移到 0:08，几乎看不到就到尾了。绝对值在这里最要紧：“片头 shorten 一点” 是猜；“片头应在 3.0 秒结束” 是一次 `data-duration` 写入，没有 overshoot。",
     "<video aria-label=\"Editing before\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/editing-before.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*改动前——未动的构图。*",
     "<video aria-label=\"Editing after\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/editing-after.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*改动后——本页四个逐字编辑（移动、右侧剪切、改时间、带冻结的改风格）；每个都恰好碰了动词映射承诺的属性，每次编辑后门禁全绿。*"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `tighten up the opening`",
     "**改成：** `intro clip duration = 3s; leave its animation and position alone` ——一个属性，冻结子句防止重建在你已定的轴上漂移"
    ]
   },
   {
    "h": "拆分场景",
    "p": "",
    "paras": [
     "浏览器编辑器时间线可以移动、剪切和拆分片段，在主轨道上可以涟漪删除；还没有滑移、滑动或滚动。也可以指挥智能体拆分，因为它直接改 HTML——拆分就是一个片段变成两个，调整 `data-start` / `data-duration`： 在 0:04 拆分第 2 场，我好在两半之间加个转场。",
     "点名确切切点。智能体把一个片段变成相邻的两个；之后每半都按自己的图层处理。"
    ],
    "codeBlocks": []
   },
   {
    "h": "重新计时场景",
    "p": "",
    "paras": [
     "改时间从场景的 `data-duration` 开始。如果动效要保持原速，时间线可以提前跑完，在场景余下时间里停在最终状态。如果动效本身要变慢或拉长到新场景里，也让智能体把受影响的补间一起改时间。",
     "让第 2 场跑 4 秒，不要 2.5 秒——动画不变，只是多给点空间。",
     "[!WARNING] 渲染时长来自 `data-duration`，不是 GSAP 时间线长。不要用空 `tl.set({}, {}, <seconds>)` 哨兵撑时长。如果场景仍提前结束，检查[数据属性](https://hyperframes.heygen.com/concepts/data-attributes.md)里的场景和构图时间属性。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `stretch scene 2` ——分不清是要变慢还是多停一会",
     "**改成：** `scene 2 duration = 4s, same motion, add the extra time as a hold at the end`"
    ]
   },
   {
    "h": "让它更利落（改的是重计时的*感觉*，不只是时长）",
    "p": "",
    "paras": [
     "“利落”、“有力”、“松弛”都是节奏词，它们对应具体的缓动和时间——[词汇表](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)有完整对照表。智能体把 “snappy” 读成果断的缓动（`power4.out`）和更紧的时长，“dreamy” 读成缓慢对称的运动，以此类推。",
     "让第 2 场更利落——入场更快，切得更硬。",
     "揭入觉得很机械；给个弹跳 overshoot。",
     "一次渲染只改一个场景的感觉，这样才知道是什么起作用。如果场景总不对，先剥到最小版（主体加它的动效），确认读得对，再重加层。"
    ],
    "codeBlocks": []
   },
   {
    "h": "调整关键帧",
    "p": "",
    "paras": [
     "单个动画属性都可以编辑——值、缓动、任意补间的时间。用提示指挥，或在浏览器编辑器设计面板里自己改；两种都落到同样的 GSAP 代码。",
     "标题从太远处滑进来——改成走 40px，不要 200。",
     "给加入购物车的商品一个弧线，不要直线斜飞，像被甩进购物车那样。",
     "把属性目标说成绝对值（`Move X = 40`、`arc curviness ≈ 1.5`）。[动画和关键帧](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes)说明哪些可编辑、运动路径和手势录制。",
     "[!TIP] 元素级编辑时，设计面板的剪贴板图标会复制结构化上下文——元素的 id、位置、大小和当前动画——直接粘进提示。智能体拿到的是精确的空间上下文，而不是含糊的“标题”。"
    ],
    "codeBlocks": []
   },
   {
    "h": "替换素材",
    "p": "",
    "paras": [
     "换视频、图片、Logo 或音轨是源替换。唯一规则：**报路径**。智能体会去找 “my logo”，报路径跳过搜索，消除了指哪个文件的歧义。",
     "用 `assets/track.mp3` 替换背景音乐。",
     "把主图换成 `assets/product-v2.png`，动画保持。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `use the new logo`",
     "**改成：** `swap the logo for assets/logo-2025.svg`"
    ]
   },
   {
    "h": "改文案",
    "p": "",
    "paras": [
     "屏幕上的文字带引号逐字改。没引用的文字会被改写——智能体把描述当成写文案的指令，不是原样放置。",
     "把标题改成 “Ship faster.”——逐字，样式保持。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `update the title to say something about speed`",
     "**改成：** `title copy: \"Ship faster.\"`"
    ]
   },
   {
    "h": "重做单个元素样式",
    "p": "",
    "paras": [
     "视觉微调——单个元素的颜色、大小、字重、位置——正是“冻结其余”子句挣钱的地方。没有它，改风格提示可能触发重建，在你已批的布局或动效上漂移。",
     "把 CTA 按钮放大 20%，换成强调色——别动别的。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make the CTA pop more`",
     "**改成：** `CTA background = accent color, font-size = 1.2× current; framing and motion are right, leave them`"
    ]
   },
   {
    "h": "相关",
    "p": "",
    "paras": [
     "[card] [迭代](https://hyperframes.heygen.com/prompting/overview.md#iterate-toward-the-look) 每次编辑一个变量、绝对值、冻结已成 [card] [动效词汇](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)",
     "改场景*感觉*的节奏和缓动词 [card] [浏览器编辑器时间线](https://hyperframes.heygen.com/studio/timeline.md) 移动、剪切、拆分和导航片段 [card] [数据属性](https://hyperframes.heygen.com/concepts/data-attributes.md)",
     "`data-*` 时间契约"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
     "[从 Remotion 迁到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
     "[渲染视频为 MP4](https://hyperframes.heygen.com/guides/export-and-share.md)"
    ]
   }
  ]
 },
 "tips-examples": {
  "lede": "真实提示和它们做出的东西。连同它映射到的[六段骨架](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)、[规格拨盘](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify)，以及[运动用词表](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)或[完整视觉规格](https://hyperframes.heygen.com/prompting/color-grading.md#high-fidelity-looks)一起读。读的时候在每条提示里找出骨架部件。",
  "sections": [
   {
    "h": "带注册块和源素材",
    "p": "",
    "paras": [
     "[accordion] 统计数字滚动 > 6 秒 1920x1080 视频，深蓝底。拍点 1（0-1s）：标签 “ARR” 小字淡入上浮，顶部居中。拍点 2（1-4s）：巨数字以里程表滚动涨到 \\$4.2M，落定时缓出。拍点 3（4-6s）：“+312% YoY” 绿色落印在下方，一切沉入轻柔的环境待机（微呼吸缩放、慢粒子漂移）。用 `apple-money-count` 注册块打底。无旁白。**演出点：** 4s 落定时，约 60 张纸钱从数字后面喷出飘落，种子化保证每次渲染一致，5.5s 落定——唯一的夸张。",
     "<video aria-label=\"Example stat countup\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-stat-countup.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 动效社交帖 > 7 秒 1080x1350 竖版视频。真实的推文卡（@hyperframes，文案 “we render video from HTML now. no timeline UI. just code.”）在柔和动渐变上滑入，点赞计数 0→1.2K 跳动，然后卡片 3D 倾斜，第二句被高光扫过。结尾卡片定格，带轻微环境待机（慢呼吸缩放）。用 `x-post` 和 `vfx-liquid-background` 注册块。无旁白，无图片或媒体文件。**演出点：** 点赞落定时，爱心弹到 1.6× 带约 24 颗种子化粒子的径向爆，等落定——一个瞬间，别的不夸张。",
     "<video aria-label=\"Example tweet\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-tweet.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 地图航线 > 8 秒 1920x1080 视频。暗色世界地图，发光弧线 3 秒从旧金山连到东京，落点图钉带脉冲砸下，相机推进到东京，标签 “LATENCY: 89ms” 打字机落下。用 `nyc-paris-flight` 注册块打底，重描成炭灰上的青色。无旁白。**演出点：** 落点图钉的落点触发三圈同心冲击波，涨过标签后淡掉，图钉带短暂的色散分离。",
     "<video aria-label=\"Example map route\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-map-route.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 标志开场与着色器转场 > 5 秒 1920x1080 标志开场。拍点 1（0-2s）：词 “ACME” 从散粒子汇拢。拍点 2（2-3s）：全帧 `swirl-vortex` 着色器转场。拍点 3（3-5s）：标志组合 + 标语 “Ship faster.” 落在白色上，带轻微环境待机定格。用 `code-particle-assemble` 做汇拢。**演出点：** 粒子汇拢本身就是演出——约 1200 颗种子化粒子带可见运动轨迹收敛，字标落成那帧来一次辉光闪。",
     "<video aria-label=\"Example logo sting\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-logo-sting.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 从 URL 出的产品发布 > 给 [https://linear.app](https://linear.app) 做 45 秒 1920x1080 发布片。有活力但极简，用站点的配色和截图。结构：点出问题的钩子、3 个带 UI 截图和一句话字幕的功能拍点、结尾卡放 Logo + “Try it free”。女声 TTS，自信语气，-18dB 下的电子 BGM。**演出点：** 一次夸张——结尾卡 Logo 落定时带辉光闪和一道快速扫光扫过字标。功能拍点保持克制。",
     "<video aria-label=\"Example product launch\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-product-launch-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 从粘贴文字出讲解 > 把这段变成约 60 秒 1080x1920 竖版讲解：\\[粘贴你的文字]。一场一个想法，大字体，图解代替库存镜头，品牌色 #FF5533 搭近黑底。男声 TTS，沉稳。嵌入式字幕，关键词用品牌色高亮。**演出点：** 一次夸张——结尾 CTA 关键短语以 1.5× 砸入，色散 0.2s 归位。其他场面保持字体克制。",
     "有逐字稿时，最终时长跟旁白走——说 “约 60 秒”，不要恰好 60。",
     "<video aria-label=\"Example explainer\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-explainer-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] GitHub PR 揭晓 > 从 \\[PR URL] 做 30 秒 1920x1080 功能揭晓片。先说用户得什么，不贴 diff；关键代码改动用 `code-diff` 块只出现一个拍点；结尾落到版本号 + 仓库 URL。无旁白，用动态字幕。**演出点：** diff 里的新增行点火——绿光扫过整行，相机落定时那行绽放。",
     "<video aria-label=\"Example PR video\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-pr-video-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 卡点幻灯 > 20 秒 1080x1080 视频。解出一首暗黑驱动的电子曲，切到分析出的节拍网格——每小节一图，强拍 punch-in，乐句变化处鞭甩转场。不用库存图，生成八图：粗野混凝土细节做高对比单色抽象，八图一套视觉语言，每图一条青色光线。框线：`PLATE 0N/08` 计数。结尾卡 “CAST IN PLACE” 紧缩大写，硬边不透明罩衫压底，下行 “EIGHT SURFACES · ONE HUNDRED BPM”。无 TTS。**演出点：** 最响的强拍上，一图冲到 1.25× 带 RGB 通道分离，下一拍弹回。其余切点干净。",
     "<video aria-label=\"Example music slideshow\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-music-slideshow-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "自由形式——无块，手写 HTML/CSS/SVG/GSAP",
    "p": "",
    "paras": [
     "[accordion] 动态引言 > 12 秒 1920x1080 视频，米白底。引言 “Simplicity is the ultimate sophistication” 逐词建成，巨号黑衬线，每词带轻 overshoot 砸入；“sophistication” 最后用斜体落下，手绘下划线随行画出。出处 “— Leonardo da Vinci” 9s 小字淡入右下。沉入到结尾的几乎不可见的环境待机。无音频。**演出点：** 最后一个词 1.4× 超大落下，带墨迹辉光，然后回到真实尺寸——这句的回报。",
     "<video aria-label=\"Example kinetic quote\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-kinetic-quote-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 倒数标题卡 > 6 秒 1920x1080 视频。数字 3、2、1 各占一秒填满画面——每个数字用对角遮罩扫入，背景黑白交替、文字反白。3s 画面砸到 “LAUNCH DAY” 紧缩大写带屏幕震动，定格带细颗粒闪烁。无音频。**演出点：** 3s 的画面 snap 就是这一刻——一道硬白闪帧，外加 1.5° 旋转踢后 0.25s 落定。",
     "<video aria-label=\"Example countdown\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-countdown.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 条形图竞速 > 10 秒 1920x1080 视频，暗石板底。标题 “Top languages 2026” 在左上。五条横条（Python、TypeScript、Rust、Go、Java）从零错峰生长，中途两次互超；每条右缘有计数到最终 % 的数值。结尾态定格 2s，第一名脉冲一次。手绘一切——不引图表库。无音频。**演出点：** 第一名的单次结尾脉冲就是这一刻——+16px overshoot 加亮帽闪光，恰好在最后一帧回到静止。",
     "<video aria-label=\"Example bar race\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-bar-race.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 前后对照分屏 > 8 秒 1920x1080 视频。竖分：左半标 “BEFORE” 放杂乱的 UI 假图（灰，CSS 画的 12 个重叠窗口），右半 “AFTER” 放一张干净卡。两半第一秒内落定。4s 一条竖分界线自左向右扫，整幅把杂乱擦成干净。结尾中央 “One tool.”。无音频。**演出点：** 分界线的擦除就是这一刻——亮扫描线随分割扫过带辉光，AFTER 半张在它身后浮现。",
     "<video aria-label=\"Example before after\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-before-after.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 加载 → 揭晓 > 7 秒 1920x1080 视频，黑底。细白进度环 4s 从 0° 画到 360°，中间百分比计数（0→100）等宽字跳动，与圆弧严格同步。环和计数 4.2s 完全淡出；4.2s 环向外爆成短径向虚线，“READY.” 落印中央，然后带轻微环境待机（慢呼吸缩放）定格。无音频。**演出点：** 环在 100% 完成时引爆——闪白，涨出画面，揭晓搭着那次膨胀走出去。",
     "<video aria-label=\"Example loader ready\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-loader-ready.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 3D 卡片（Three.js） > 9 秒 1920x1080 视频，浅暖奶油底。用适配器经 Three.js 建场景：三张圆角卡片网格写着 “Design”、“Build”、“Ship”，平躺在地面，相机固定 3/4 等轴角，柔定向光 + 环境光，卡片投软影。卡片逐张升起立正面向画面中央，另两张滑开并调暗；然后归位。8.5s 三张都立成一排，带轻微环境待机定格。缓动全 power3.inOut。无音频。**演出点：** 卡片升成那一排时，一道镜面高光依次扫过三张脸，抓住每条边。",
     "<video aria-label=\"Example 3D cards\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-3d-cards.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] SVG 线条标志揭晓 > 6 秒 1920x1080 视频，深绿底。极简山脉标志以 SVG 笔画 2.5s 画出，然后笔画填入奶油色，字标 “NORTHTRAIL” 在下方字距拉开，一条细线自中央涨开。最后一 1.5s 带轻微环境待机定格。无音频。**演出点：** 笔画完成就是这一刻——画出的路径整条闪一次，然后填充从那道闪光漫开。",
     "<video aria-label=\"Example svg logo\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-svg-logo.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 词替标题 > 8 秒 1920x1080 视频，白底。静态句 “Make it \\_\\_\\_.” 巨号黑字居中，空缺轮换 “faster”、“simpler”、“yours”——每次像翻板一样竖翻，间隔 1.5s，带轻运动模糊。最后 “yours.” 落在橙色，句号弹一下。无音频。**演出点：** 最后一次替换最狠——那词以 1.3× 带着运动模糊拉痕落地，落定时拉痕归位。",
     "<video aria-label=\"Example word swap\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-word-swap.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 统计瓷砖仪表 > 10 秒 1920x1080 视频，近黑底。四块统计瓷砖 2x2 错峰滑入：“99.99% uptime”、“42ms p50”、“18M req/day”、“0 incidents”。每块数字以自己的缓动计数或递减到值，青色迷你折线在下方画出。8s 网格缩小回，“Built to hold.” 在上方淡入。无音频。**演出点：** 第四块落定时，四个数字同帧闪亮——一次同步强调，然后回到克制待机。",
     "<video aria-label=\"Example data ticker\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-data-ticker.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。* [accordion] 竖版社交钩子 > 9 秒 1080x1920 竖版视频，炭灰底。社交风钩子：“nobody talks about this” 居中粗白打字，然后每 1.5s 硬切换下一句——“it's not your code”、“it's your prompts”、“here's the fix”——关键词后有黄色高亮条，交替倾斜。最后一句定格带下箭头弹跳。无音频。**演出点：** 最后一句是回报——1.35× 砸入，带三帧震动和快速归位的色散分离。",
     "<video aria-label=\"Example vertical hook\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-vertical-hook.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上面的提示渲染，未编辑。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[屏幕上的文字、字幕和代码](https://hyperframes.heygen.com/prompting/captions-catalog.md)",
     "[把 GitHub PR 变成视频](https://hyperframes.heygen.com/guides/pr-to-video.md)",
     "[用 AI 做讲解视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)"
    ]
   }
  ]
 },
 "tips-media": {
  "lede": "用朴素的话索取人声、音乐和音效；智能体去找或生成每一个。两种付费方式：",
  "sections": [
   {
    "h": "旁白（TTS）",
    "p": "",
    "paras": [
     "智能体按固定顺序挑选声音引擎。如果你的 HeyGen 账号已配置，HeyGen Starfish 优先。接着是设置了对应 key 的 ElevenLabs。否则跑本地 Kokoro 模型，不需要 API key。",
     "描述内容，让智能体挑一个合适的声音。或者自己点名声音、语气和语速： Generate narration for this script with a professional female voice.（用专业女声为这份脚本生成旁白。） Add TTS voiceover, British male voice, at 1.1× speed.（加 TTS 旁白，英音男声，1.1× 速度。）",
     "下表把内容类型映射到 Kokoro 声音。`af_heart` 和 `af_nova` 适合产品演示。`am_adam` 和 `bf_emma` 适合教程。`af_sky` 和 `am_michael` 适合营销。如果你已经known（知道）某个声音，直接点名。否则描述朗读风格，让智能体选。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `add a voice`（加个声音）",
     "**改为：** `warm, unhurried female narration of the quoted script`（对所引脚本的温暖、不慌不忙的女声旁白）——语气和节奏才是真正改变交付的东西"
    ]
   },
   {
    "h": "Gemini 旁白",
    "p": "",
    "paras": [
     "当你想用描述来指导旁白的交付时选 Gemini。先配置 [Gemini 凭据](https://hyperframes.heygen.com/guides/authentication.md#providers-used-by-agent-workflows)，",
     "然后向你的智能体提问： Use Gemini 3.8 Flash TTS with the Kore voice to narrate this script. Make the delivery warm and unhurried. Use the media-use audio engine, transcribe the",
     "generated audio, and sync the captions and visual reveals to the spoken words.（用 Gemini 3.8 Flash TTS 的 Kore 声音朗读这份脚本。交付要温暖、不慌不忙。使用 media-use 音频引擎，转录生成的音频，并把字幕和视觉揭示与朗读词同步。）",
     "共享音频工作流支持 3.8 Flash 和 Flash-Lite TTS、 3.1 Flash TTS Preview，以及 2.5 Pro 和 Flash TTS Preview。Gemini 是明确选择，不替代上面的自动供应商顺序。把脚本和交付指示分开。helper 对 3.8 用结构化风格元数据，对更早模型用交付提示；检查生成的语音有没有意外指示。",
     "智能体把旁白保存在本地，并通过单独的转录遍拿到词时间。最终渲染前，对照音频检查名字、数字和停顿。重新录一遍叙述需要新的时间。"
    ],
    "codeBlocks": []
   },
   {
    "h": "背景音乐",
    "p": "",
    "paras": [
     "音乐按氛围从大曲库里取。它几乎总是应该 nằm 在*下面* （待在旁白下方），而不是与之竞争。",
     "同时给出氛围**和**响度目标。流水线可以 duck（压低）和归一化到某个电平，所以明确的目标能落成混音而不是猜测。",
     "Add subtle electronic BGM, kept under −18 dB so it stays beneath the voiceover.（加微妙的电子 BGM，保持在 −18 dB 以下，待在旁白下方。） Upbeat tech-launch music bed at a low level, ducking under narration.（轻快的科技发布音乐床，低音量，在旁白下压低。）",
     "[!TIP] 一句明确的响度目标（“under −18 dB”（低于 −18 dB）、“ducked under the voice”（在人声下压低））是支撑片子的音乐和淹没片子的音乐之间的区别。",
     "有旁白时，一定要说音乐床压在它下面。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `add background music`（加背景音乐）——你会拿到一轨全音量、跟 VO 打架的音乐",
     "**改为：** `subtle background music, ducked ~12 dB under the voice`（微妙的背景音乐，在人声下压低约 12 dB）——流水线能执行的混音指示"
    ]
   },
   {
    "h": "音效",
    "p": "",
    "paras": [
     "SFX 来自自带的 19 文件库加曲库。把它们 cue 到具体时刻——转场、盖章、撞击。不要乱撒。",
     "Add a whoosh on each of the three scene transitions.（在三个场景转场处各加一个 whoosh。） Put a soft click on the button press at 0:04.（在 0:04 的按钮按下处放一个轻点击。）"
    ],
    "codeBlocks": []
   },
   {
    "h": "让揭示跟随旁白的节奏",
    "p": "",
    "paras": [
     "视频一旦有了人声，人声就是时钟。说屏幕元素落在**它们被说出的 cue 点**上。数据在旁白说到的那一刻出现，而不是在构建者目测的某个独立时间。跳过这步，旁白和视觉就会漂成两条碰巧共享一个文件的平行轨。",
     "VO-paced reveals: each scene's elements land on their spoken cues; secondary elements keep resolving while the narrator is mid-thought; the scene is complete just as the narration moves on.（VO 节奏的揭示：每个场景的元素落在被说出的 cue 点；次要元素在旁白思考中途继续成形；旁白转场之时场景恰好完成。）",
     "收官短片对每个区域都严格执行这条规则。它的 Direction 块写道： VO-paced reveals: each region's elements land on their spoken cues as the camera arrives; secondary elements keep resolving while the camera is present; the region is complete just as the camera accelerates away.（VO 节奏的揭示：每个区域的元素在镜头到达时落在被说出的 cue 点；次要元素在镜头停留时继续成形；镜头加速离开之时区域恰好完成。）",
     "两条实用说明。",
     "智能体免费拿到词时间。旁白转录带逐词时间戳——正是[字幕](#captions-and-transcription)背后的同一套机制。所以“落在被说出的 cue 点”是真实、可执行的指示。",
     "反向规则同样重要。旁白从不等待视觉。镜头和揭示要跟着人声走，而不是人声跟着动画走。"
    ],
    "codeBlocks": []
   },
   {
    "h": "字幕与转录",
    "p": "",
    "paras": [
     "字幕来自词级时间戳。生成旁白，时间就跟着来。对现成素材，转录产生时间：装了 Parakeet 就跑它，否则 whisper 接手。从源视频脚手架一个项目可以直接从其音频生成字幕。",
     "Transcribe the narration and add karaoke-style captions synced to it.（转录旁白，并加与之同步的卡拉 OK 式字幕。） Generate captions from `assets/interview.mp4` and style them hype, scale-pop.（从 `assets/interview.mp4` 生成字幕，风格 hype、scale-pop。）",
     "字幕*外观*是自己的词汇——语气、大小、逐词强调。样式见 [字幕目录](https://hyperframes.heygen.com/prompting/captions-catalog.md)。本页讲生产带时间文本；那页讲给它定妆。"
    ],
    "codeBlocks": []
   },
   {
    "h": "背景移除（透明抠图）",
    "p": "",
    "paras": [
     "`remove-background` 命令在本地把主体从视频或图片中抠出。你拿到的是透明 WebM，可以作为 `<video>` 丢进任何场景。",
     "Remove the background from `assets/presenter.mp4` and float the subject over the scene.（移除 `assets/presenter.mp4` 的背景，把主体浮在场景上。）",
     "有一个关键注意事项。内置模型（`u2net_human_seg`）是**专为人物打造的**：半身或全身、构图相当稳定、背景与主体对比明显。对**非人物主体** ——产品、动物、物体——它只会返回几乎空的遮罩。",
     "所以如果你要抠产品，请明说。智能体应该改用别的工具，而不是跑人物模型最后什么都拿不到。",
     "[Remove background guide](https://hyperframes.heygen.com/guides/remove-background.md)（背景移除指南）讲了仅限人物的注意事项、文字在主体后面的双层底版，以及物体和发丝级抠像的替代方案。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** 用内置命令 `remove the background from this product shot`（移除这张产品图的背景）——人物抠像模型看不懂它",
     "**改为：** 人物用 `matte the presenter out of assets/talk.mp4`（把 `assets/talk.mp4` 的主持人抠出）。产品则要标明是非人物主体，好让另一个 matter（抠像）来用。"
    ]
   },
   {
    "h": "画中画与视频套视频",
    "p": "",
    "paras": [
     "叠加素材是合成提示词：说话人头像叠在场景上、主体压在标题前、PiP 嵌框。智能体替你执行帧精度规则。点名想要的布局仍有帮助。",
     "Put the transparent presenter cutout in the bottom-right, over the chart scene.（把透明主持人抠图放在右下角，压在图表场景上。） Layer the headline *behind* the presenter so their silhouette occludes the text.（把标题层叠在主持人*后面*，让剪影遮住文字。）",
     "[!NOTE] 技能自动处理两个机制，来自 [Remove background guide](https://hyperframes.heygen.com/guides/remove-background.md#on-the-command-line)（背景移除指南）：",
     "* 揭示才进入视野的抠图放进无时序的 `<div>` 里，被动画处理的是*容器*。HyperFrames 拥有 clip 可见性，直接动画媒体元素会跟 clip 生命周期打架。",
     "* 底视频和抠图都在 `data-start=\"0\"` 挂载，所以切点处两个解码器同步。",
     "这两点你很少需要说。它们解释了“延迟挂载”一个 PiP clip 为什么可能差一帧。"
    ],
    "codeBlocks": []
   },
   {
    "h": "任意素材都能进",
    "p": "",
    "paras": [
     "点名时不需要预先转码你提供的素材。",
     "有些编码在浏览器里播不顺。HEVC (H.265) 是常见情况，常来自 iPhone 或录屏。框架会探测素材，并自动生成有界的 H.264 代理，缓存在 `.transcode-cache/` 下。",
     "`preview`、`play`、浏览器编辑器和发布播放页用该代理播放。渲染永远直接解码原始文件，所以最终画质和颜色都不受影响。`snapshot` 也用 FFmpeg 从原始文件读帧，所以除非传 `--proxy`，否则不生成代理。",
     "`hyperframes lint` 也会在 info 级别标记该素材（`hevc_preview_codec`），让你知道正在用代理。代理是可选的。每条命令传 `--no-proxy`，或在项目级 `hyperframes.json` 里设 `media.autoProxy: false`。",
     "同一机制也覆盖带 alpha 通道的来源。ProRes 4444 和 alpha WebM 会拿到 VP8 + Opus WebM 代理，而不是被拒绝，所以 hostile codec（难对付的编码）里的透明抠图也不是阻碍。",
     "这都不改变你措辞的方式。按路径点名素材，就像其他已供素材一样，并描述你要用它搭什么构图。",
     "Build a short picture-in-picture piece from `source-hevc.mp4` — inset it bottom-right over a full-bleed background scene, with a soft rounded border.（用 `source-hevc.mp4` 搭一小段画中画——嵌在右下角，压在全幅背景场景上，配柔和圆角边。）",
     "<video aria-label=\"Proxy footage\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/proxy-footage.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。源片是普通的 H.265/HEVC 文件。渲染通过 FFmpeg 直接解码了它。预览会用自动 H.264 代理。* 机制细节（代理生成、缓存、覆盖的编码）见[渲染指南](https://hyperframes.heygen.com/guides/rendering.md#input-video-codecs)。",
     "[card] [Practice it: Edit your own footage](https://hyperframes.heygen.com/lessons/edit-your-footage) 免费 20 分钟课程，包含一个短视频、一个测验和一份练习简报。素材简报是目标、播放位置、二到三个修改，以及确切的标题词。"
    ],
    "codeBlocks": []
   },
   {
    "h": "已供素材规则",
    "p": "",
    "paras": [
     "对于你已有的任何素材，明确路径能消除最多歧义。只描述素材时智能体会搜索。路径定下*哪个*文件。",
     "即使搜索也能找到，这仍很重要。品牌和实体素材应该指向*你的*文件，而不是被解析成一个长相近的冒名者。",
     "第三方 logo 是另一种情况。流水线从 logo 级联拉取官方标记，从不手绘。所以“add the LinkedIn logo”（加 LinkedIn logo）没问题。“Add my company's logo”（加我公司 logo）则需要路径。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `use my logo`（用我的 logo）",
     "**改为：** `use assets/logo.svg`（使用 assets/logo.svg）"
    ]
   },
   {
    "h": "说清“没声音”到底指什么",
    "p": "",
    "paras": [
     "最常见的音频错误是说得不够的否定。“No narration”（没旁白）去掉的是旁白。它**不会**静音音乐或音效。如果你要真正的安静，请明说： 这对应[Anatomy](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)（解剖结构）里的否定项纪律。把空缺显式封上，因为引擎按字面行事。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** 意思完全无声却说 `no narration`——音乐和 SFX 仍可能被加入",
     "**改为：** `no audio at all`——索取安静的无歧义说法"
    ]
   },
   {
    "h": "混音",
    "p": "",
    "paras": [
     "把人声、音乐和音效装进视频只是半个活。这部分让它们一起*可听*。",
     "音频工作是提示词最容易在一种具体方式上出错的地方：容易点名机器。“Add a high-pass at 80 Hz with a Q of 0.7”（加一个 80 Hz 高通，Q 0.7）是真实指示，而且比产出它的请求更差，因为它在没人确认问题之前就锁死了解法。混音以每条轨上的效果形式保存——滤波、动态、性格、空间，以及随时间移动任一者——智能体替你去翻那套工具箱。你的活是准确描述症状。"
    ],
    "codeBlocks": []
   },
   {
    "h": "说它听起来如何，不要说加什么",
    "p": "",
    "paras": [
     "机架里的每个效果都为投诉而生。点名投诉。",
     "每个都落到具体小改动：250 Hz 处一刀切、`voice-clean` 链、扣在人声下的高通。你不需要知道是哪一个——而如果你点错了机制，系统会自信地套用错机制。",
     "这比画面工作更重要，因为**你能听见混音，智能体不能**。描述声音的提示词是证据。点名滤波器的提示词是穿着证据外衣的猜测。"
    ],
    "codeBlocks": [
     {
      "code": "The narration sounds muffled, like it's behind cardboard. Fix it.",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "The voice sounds amateur — clean it up but don't make it sound processed.",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "There's a hum under the interview audio the whole way through.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "值得记住名字的一个请求",
    "p": "",
    "paras": [
     "旁白下压音乐是最常见的音频问题，而且习惯性解法是错的。",
     "压低整条音乐轨确实有效，但代价是整段旁白期间音乐全部失去存在感——只要有人说话它就软下去。事实上人声不需要整个频谱。它只需要它实际占据的少几个频段。把那几个从音乐里抽走叫 **carve**（掏空/挖槽），保留低频和高频，所以音乐床仍是音乐，人声仍清晰。",
     "按那个词提： 有两件事值得知道，好让你判断结果： 如果回来后音乐听着*发空*而不是单纯变小，请用那个词原样——那意味着深度太深了，也是唯一有明显听感的失败模式："
    ],
    "codeBlocks": [
     {
      "code": "Put the music under the narration properly — carve it so the voice stays clear\nwithout the track going limp.",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "The music is fighting the voiceover. Make room for the voice in the music\nrather than just turning the music down.",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "Too far — the music sounds notched now. Back it off.",
      "file": "TEXT THEME={NULL}"
     }
    ],
    "bullets": [
     "**它跟着说话走。** 静音时放过音乐；大声段落压得更深。不是每个停顿都保持固定低谷。",
     "**它活在音乐轨上**，并点名给哪些人声让位。谁说他把人声轨 carve 了，那是 bug，不是品味。"
    ]
   },
   {
    "h": "先要电平，再要更深效果",
    "p": "",
    "paras": [
     "carve 修不了根本比人声更响的音乐。旁白被埋住时，有用的指示是关于**电平**，不是频谱： 机器合成的语音常常远低于母版音乐轨的电平。那是算术差距，不是品味，carve 再多也填不上。先索取测量，把一轮猜测变成一个数字。"
    ],
    "codeBlocks": [
     {
      "code": "Check the actual loudness of the voiceover against the music before touching\nthe carve — the voice may just be quieter than the bed.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "把属于一起的东西分组",
    "p": "",
    "paras": [
     "五段旁白要一套效果、一个推子、一个 mute——不是五个在编辑中越漂越远的复制品。点出来： 这句话值得多那半句。指向单个 clip 的 carve 必须逐一列出，而新增一个就全盘失效——第六段 clip 在 carve 的感知之外，音乐悄悄不压了。指向*组*的 carve 在运行时认组里现有的东西。",
     "音效多时也分组。一个能一起调小的地方，比你永远不会再回访的精细单轨电平更值。"
    ],
    "codeBlocks": [
     {
      "code": "Group all the narration clips as one voiceover group, then carve the music\nagainst that group.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "静态定不住时要动态",
    "p": "",
    "paras": [
     "视频全程该变的任何东西都是 envelope（包络），你描述它在时间上的形状来索取： 有一个注意事项值得带着：几个效果完全无法随时间移动——压缩器、limiter、gate、bitcrush 和 pitch shift 是整块配置的，不是逐旋钮的。如果你索取一个随场景搭建而收紧的压缩器，诚实的答案是在它前面放一个在动的电平级。智能体在这类效果上悄悄写 envelope，写的东西是惰性的——所以如果索取的改变听不到动静，先怀疑这个。"
    ],
    "codeBlocks": [
     {
      "code": "Fade the music out over the last three seconds.",
      "file": "TEXT THEME={NULL}"
     },
     {
      "code": "Bring the ambience up while the wide shot is on screen, then pull it back\nunder the interview.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "没有诚实答案的三种请求",
    "p": "",
    "paras": [
     "点名空缺比接受最近预设并称之为对的更有用。",
     "**De-essing（齿音处理）。** 尖锐的 `s` 音需要比工具箱里任何东西都快的检测器。最近的修复是在 5–9 kHz 范围一条窄切，扫动找这个声音真正喷的频点。它一直开着，所以每个词都付出一点空气。那个代价通常值得——但你要知道这是笔交易再提：",
     "**降噪。** gate 关的是短语之间的静音；词*下面*的底噪没有工具能动。底噪可闻的来源需要更好的来源，智能体这么说是在说实话，不是偷懒。",
     "**把一个声音匹配到另一个。** 没有 match-curve 工具。手搓 EQ 可以把两遍拉近，效果是可预测的，派生曲线给不了这种可预测性——但它是手工活，要按手工活来索取。"
    ],
    "codeBlocks": [
     {
      "code": "The s sounds are spitting. I know there's no real de-esser — put a narrow cut\nwhere this voice actually sibilates and tell me what it cost.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "在最后整体描述一次混音",
    "p": "",
    "paras": [
     "单个修复会累积成一个没人整体评判过的东西。一个收尾指示比再补三轮调整更值： 画面不抢注意力时，音频问题更容易注意到。只听不看一次，能抓到二十轮提示词抓不到的东西。",
     "[card] [Practice it: Sound](https://hyperframes.heygen.com/lessons/sound) 免费 20 分钟课程，包含一个短视频、一个测验和一份练习简报。在简报里说清声音：音乐氛围、声音，以及音乐从哪起、到哪止。"
    ],
    "codeBlocks": [
     {
      "code": "Render an audio-only pass and check the mix end to end: voice clear through\nthe loudest musical moment, effects where the action is, nothing surprising\nat the open, and the music finishing on purpose rather than at the file edge.",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "在真实短片里",
    "p": "",
    "paras": [
     "这条来自[更长 HyperFrames 短片](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)的条款产出了下面的镜头。你可以把措辞拿去用在自己的视频里：",
     "\\[…] a real talking-head clip (generate a short clip of a person speaking one neutral line via the media pipeline's avatar video generation \\[…] **transcode it to HEVC `hvc1`** so the automatic proxy subsystem carries preview) sits as a clip on the wire. The order of operations IS the story: as the camera arrives and BEFORE the person speaks, the framework mattes the footage — **the background peels away via background removal** \\[…] THEN they speak, and the main **keywords of their own line — derived from the clip's transcription — land word-synced** \\[…] The clip's own audio ducks the BGM briefly; the VO resumes as the camera pulls away.",
     "<video aria-label=\"Capstone region material\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-material.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*该条款的渲染：来自成品短片的这一镜。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[Ask for smooth motion and transitions](https://hyperframes.heygen.com/prompting/motion.md)（索取顺滑动态与转场）",
     "[A full film, prompt by prompt](https://hyperframes.heygen.com/prompting/capstone.md)（完整短片，逐条提示词）",
     "[Brand, templates and storyboards](https://hyperframes.heygen.com/prompting/design-systems.md)（品牌、模板与分镜）"
    ]
   }
  ]
 },
 "tips-motion": {
  "lede": "你的智能体已经遵循 HyperFrames 的动态规则：元素落位后静止，动作相互重叠，切点发生在运动中途。",
  "sections": [
   {
    "h": "修正不喜欢的动态",
    "p": "",
    "paras": [
     "完整看一遍视频，然后用朴素的话告诉智能体你看到了什么。这些说法管用：",
     "| 你看到的现象 | 这么说 | 智能体会改什么 |",
     "| - | - | - |",
     "| 一切运动太快 | “Too fast. Slow the zooms and pans.”（太快了。把推拉和摇镜放慢。） | 把所有镜头运动降到约 0.7×，其余不动 |",
     "| 拖拖拉拉 | “Speed this up.”（加快。） | 连同内容一起缩短每个节拍，并把后面的节拍提前 |",
     "| 标题出现后还在浮动或变大 | “Land the titles, then hold them still.”（让标题落位，然后保持静止。） | 标题到达、戛然而止、随场景离场 |",
     "| 像幻灯片 | “It feels like slides. Carry one thing across each cut.”（像幻灯片。每个切点带一个东西过去。） | 通过屏幕上的某个对象进入下一场景，在运动中途切 |",
     "| 一齐出现 | “Bring things in one after another, on the voice.”（一个接一个进来，跟随声音。） | 错开入场，让每个都在上一个落稳之前开始 |",
     "| 看起来弹跳或廉价 | “No bounce on text or UI.”（文字或 UI 不要弹跳。） | 用长而平滑的缓出；过冲只留给物理物体 |",
     "| 切点处有跳动 | “There's a jump at 4.2 s.”（4.2 秒处有跳动。） | 匹配该切点两侧的位置和速度 |",
     "| 场景在那儿空转，毫无动静 | “Scene 3 is dead. Give it something to do.”（场景 3 死气沉沉。让它有点事做。） | 加入真正的动作：UI 在工作、素材、镜头移向下一个对象 | 能给时间戳就给（“在 4.2 秒”）。一次只索取一个修改，然后再看一遍。",
     "[card] [Practice it: Timing](https://hyperframes.heygen.com/lessons/timing) 免费 16 分钟课程，包含一个短视频、一个测验和一份练习简报。节拍是一个带时间的屏幕变化：一个词出现，一张卡片离场，一个切点落下。"
    ],
    "codeBlocks": []
   },
   {
    "h": "值得索取的想法",
    "p": "",
    "paras": [
     "下面每个想法都有并排对比的短片：同一个场景搭了两次，提示词只差一行。",
     "左边是没用，右边是用了。"
    ],
    "codeBlocks": []
   },
   {
    "h": "只动活着的东西",
    "p": "",
    "paras": [
     "落位后就静止。继续运动的，是正在变化的东西：跳动的数字、数据流、进度条。",
     "不要索取“轻微呼吸”来让场景显得活；那看起来像 AI 生成。",
     "面板在 1.9 秒落位。之后，只有数据流变化的部分在动：每 300 ms 到来一个读数，末位数字变化，折线延伸一段，`LAST SYNC` 重新盖章。其他一概不动。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule1-nothing-stops.mp4#t=0.1\" />",
     "*左：整个面板在 2 秒冻结，看起来像断开的连接。右：只有读数在动，其余静止。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "移动镜头去往别处",
    "p": "",
    "paras": [
     "镜头运动通过在事物之间穿行来证明其价值，让观众看到它们活在同一个空间里。",
     "无目的地缓慢推近不算有价值。",
     "把五个流水线阶段按 640 px 间隔铺开，宽于画面，用镜头横穿整个行程。一个数据包沿线路运行，到达每个阶段时点亮它。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule2-camera-actor-v2.mp4#t=0.1\" />",
     "*左：五个阶段在同一位置交叉淡入。右：你逐个走过去，邻居始终在视野内。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "重叠，不要排队",
    "p": "",
    "paras": [
     "下一个元素在上一个落稳之前就开始。顺序发生的要错开。已经存在的东西一起出现。",
     "推出从 `us-east-1` 向外扩散，按距离顺序以 0.09 s 间隔抵达每个区域。每个区域 0.5 s 的点亮还在进行时，下三个就已经开始了。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule3-overlapping-action.mp4#t=0.1\" />",
     "*左：十二个区域在同一帧一起点亮，看不出从哪开始。右：明显在扩散。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "每次移动只表达一个想法",
    "p": "",
    "paras": [
     "只有当属性说的是同一件事时才组合。上升加淡入说的是“到达”。再加旋转和缩放会让文字在飞行途中不可读。",
     "确认面板在 1.2 s 内上升 470 px，同时淡入。旋转、缩放、模糊一概不碰。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule4-compound-properties.mp4#t=0.1\" />",
     "*相同的路程和时间。左：“Payment confirmed”是一道倾斜污渍。右：全程可读。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "只给物理物体重量感",
    "p": "",
    "paras": [
     "过冲说的是“这有质量”。把它用在有重量的东西上，比如挡板、卡片和角色。永远不要用在文字、UI 或数字上：计数器冲过 42 再回落，显示的是一个从未真实出现过的数字。",
     "翻页挡板越过静止位再回落；外壳在它们落位时反冲。门牌号永远不会过冲 42。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule5-overshoot.mp4#t=0.1\" />"
    ],
    "codeBlocks": []
   },
   {
    "h": "深度：近的东西动得更快",
    "p": "",
    "paras": [
     "远层比镜头慢，近层比镜头快。一个半透明前景物体从内容前穿过是最强的深度线索。第二个就乱了。",
     "地平线那一排以房间五分之一的速度移动，机柜以全速移动，一个近处立柱以六倍速度模糊地横穿，掠过标题前方。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule6-depth-planes.mp4#t=0.1\" />"
    ],
    "codeBlocks": []
   },
   {
    "h": "按格式定节奏",
    "p": "",
    "paras": [
     "showreel（演示片）每个想法给 1–4 秒；产品演示把一个构图留 7–10 秒，让 UI 去工作。把 2 秒的想法拉到 8 秒，再好的动作也会显得慢。",
     "Showreel 节奏：每节拍 1.1 秒，硬切，三个节拍全部在 3.3 秒内交付。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-rule7-pacing.mp4#t=0.1\" />"
    ],
    "codeBlocks": []
   },
   {
    "h": "手作，但依然确定性",
    "p": "",
    "paras": [
     "想要定格动画或手绘感，就索取在固定位置之间步进的动态，不规则来自种子。",
     "每次渲染必须在同一时刻给出同一帧，所以不允许未播种的随机。",
     "纸剪形状挂在看得见的细线上，像定格动画。给每个元素播种一个随机偏移（每次渲染用同一个种子），每个位置停留恰好两帧，按帧号量化。",
     "<video controls muted loop playsinline preload=\"metadata\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/motion-handmade.mp4#t=0.1\" />",
     "*由上方提示词渲染，未经编辑。两次渲染字节完全一致。* 说“两帧”，不要说“0.067 秒”：以秒计量的停留会漂移成一帧、三帧交替。"
    ],
    "codeBlocks": []
   },
   {
    "h": "场景之间：转场",
    "p": "",
    "paras": [
     "好的转场是由屏幕上的东西引起的：镜头穿过按钮推进到下一屏，卡片长大成下一个场景，背景泛起新颜色而主体不动。",
     "索取这种交接，智能体就会搭出来。在一部片子里用 3–5 种，每种用在合适处，两个无关场景之间永远不要叠化。",
     "要锁定具体效果，就点名目录中的块，以及它用在哪条接缝上： 六场景 SaaS 讲解。[`whip-pan`](https://hyperframes.heygen.com/catalog/blocks/whip-pan) 用在相关论点之间，结尾定价揭示前用一个 [`cinematic-zoom`](https://hyperframes.heygen.com/catalog/blocks/cinematic-zoom)。各约 0.4 s。",
     "<video aria-label=\"Validate transitions\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-transitions.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词渲染，未经编辑。*",
     "| 情绪强度 | Shader 块 | CSS 块 | 时长 |",
     "| - | - | - | - |",
     "| 温和（健康、品牌故事） | [`cross-warp-morph`](https://hyperframes.heygen.com/catalog/blocks/cross-warp-morph), [`light-leak`](https://hyperframes.heygen.com/catalog/blocks/light-leak) | [`transitions-blur`](https://hyperframes.heygen.com/catalog/blocks/transitions-blur) | 0.5–0.8 s |",
     "| 中等（SaaS、讲解） | [`whip-pan`](https://hyperframes.heygen.com/catalog/blocks/whip-pan), [`cinematic-zoom`](https://hyperframes.heygen.com/catalog/blocks/cinematic-zoom) | [`transitions-push`](https://hyperframes.heygen.com/catalog/blocks/transitions-push), [`transitions-cover`](https://hyperframes.heygen.com/catalog/blocks/transitions-cover) | 0.3–0.5 s |",
     "| 高强度（广告、音乐、发布） | [`ridged-burn`](https://hyperframes.heygen.com/catalog/blocks/ridged-burn), [`glitch`](https://hyperframes.heygen.com/catalog/blocks/glitch), [`chromatic-radial-split`](https://hyperframes.heygen.com/catalog/blocks/chromatic-radial-split) | [`transitions-scale`](https://hyperframes.heygen.com/catalog/blocks/transitions-scale), [`transitions-light`](https://hyperframes.heygen.com/catalog/blocks/transitions-light) | 0.15–0.3 s |",
     "Shader 块逐像素扭曲和变形两个场景；当交接本身就是一个时刻时用它们。CSS 块更轻，适合普通场景切换。",
     "它们都在[目录](https://hyperframes.heygen.com/catalog/blocks/cross-warp-morph.md)里；不在那里的名字（`page-curl`）只会让智能体猜。",
     "**不要索取“一个场景淡出，然后下一个淡入”。** 那会渲染成中间带一道低谷的跳切。转场就是退场：索取“`cross-warp-morph` 从场景 1 到场景 2”。",
     "[card] [Practice it: Camera and transitions](https://hyperframes.heygen.com/lessons/camera-and-transitions) 免费 16 分钟课程，包含一个短视频、一个测验和一份练习简报。点名切点：硬切是瞬间切换，匹配切把一个动作带过切点，推近切入再推回。"
    ],
    "codeBlocks": []
   },
   {
    "h": "描述动态 feel（体感）的词",
    "p": "",
    "paras": [
     "描述动态应该*感觉*如何，智能体就会选匹配的 GSAP ease：",
     "| 用这个词 | 智能体使用 | 感觉像 |",
     "| - | - | - |",
     "| smooth（顺滑） | `power2.out` | 自然减速 |",
     "| snappy（干脆） | `power4.out` | 快速果断 |",
     "| bouncy（弹跳） | `back.out` | 过冲后落稳 |",
     "| springy（弹簧） | `elastic.out` | 摆动到位 |",
     "| dramatic（戏剧） | `expo.out` | 快起长滑 |",
     "| dreamy（梦幻） | `sine.inOut` | 缓慢对称 | **时间速记：** fast（0.2s）= 有活力，medium（0.4s) = 专业，slow（0.6s）= 奢华，very slow（1–2s）= 电影感。",
     "每个词都渲染了一遍——同一个动作，只有 ease 不同：",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-power2-out.mp4#t=0.1\" autoPlay muted loop playsInline preload=\"metadata\" aria-label=\"smooth preview\" />",
     "smooth `power2.out`",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-power4-out.mp4#t=0.1\" autoPlay muted loop playsInline preload=\"metadata\" aria-label=\"snappy preview\" />",
     "snappy `power4.out`",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-back-out.mp4#t=0.1\" autoPlay muted loop playsInline preload=\"metadata\" aria-label=\"bouncy preview\" />",
     "bouncy `back.out`",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-elastic-out.mp4#t=0.1\" autoPlay muted loop playsInline preload=\"metadata\" aria-label=\"springy preview\" />",
     "springy `elastic.out`",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-expo-out.mp4#t=0.1\" autoPlay muted loop playsInline preload=\"metadata\" aria-label=\"dramatic preview\" />",
     "dramatic `expo.out`",
     "<video src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/ease-sine-inout.mp4#t=0.1\" autoPlay muted loop playsInline preload=\"metadata\" aria-label=\"dreamy preview\" />",
     "dreamy `sine.inOut`"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[A full film, prompt by prompt](https://hyperframes.heygen.com/prompting/capstone.md)（完整短片，逐条提示词）",
     "[Colour, effects, 3D and generated art](https://hyperframes.heygen.com/prompting/color-grading.md)（颜色、特效、3D 与生成艺术）",
     "[Text, captions and code on screen](https://hyperframes.heygen.com/prompting/captions-catalog.md)（屏幕上的文字、字幕与代码）"
    ]
   }
  ]
 },
 "tips-overview": {
  "lede": "一句话就够了：智能体会为你挑选合适的外观、节奏和结构。只有在必须完全按照你的想象呈现的内容上，才需要多说一些。本页展示如何表述，主题页面则提供关于动态、声音、文字、颜色和品牌的词汇。",
  "sections": [
   {
    "h": "一次性设置",
    "p": "",
    "paras": [
     "在 Studio 应用中无需任何设置。使用你自己的智能体时，只需安装一次技能： [一行粘贴命令](https://hyperframes.heygen.com/quickstart.md#with-your-agent)。然后在每次请求开始时调用该技能：在 Claude Code 和 Cursor 中使用 `/hyperframes`，在 Codex 中使用 `$hyperframes`，或按你的智能体调用技能的方式调用。"
    ],
    "codeBlocks": []
   },
   {
    "h": "描述它，或交给它现成材料",
    "p": "",
    "paras": [
     "**描述视频**，当想法在你脑中时：时长、形状、氛围，以及关键元素。",
     "创建一个 10 秒的产品介绍视频，标题叠加在深色背景上，配以安静的音乐。",
     "**交给它现成材料**，当你已有素材时：一个 URL、一份文档、一个电子表格、一份文字记录。智能体会读取它并围绕真实内容创作，这比凭空编造的文案能产生更丰富的视频。",
     "把这个 CSV 变成动画条形图竞赛。",
     "一个完整示例，一个根据实时网站构建的 45 秒发布视频： 做一个 45 秒的 1920x1080 发布视频，介绍 [https://linear.app](https://linear.app)。充满活力但简洁，使用该网站自身的调色板和截图。结构：开篇陈述问题，3 个功能节拍，配 UI 截图和一行字幕，结尾卡片放 logo +「免费试用」。女性 TTS 声音，自信语气，低于 -18dB 的微妙电子 BGM。",
     "<video aria-label=\"Example product launch\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/example-product-launch-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词生成。* 在另一个极端，一个详尽的视觉规格一次性重建了一个广播风格的地球仪 ([说明](https://hyperframes.heygen.com/prompting/recreating-references.md))：",
     "<video aria-label=\"Recreate globe oneshot\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/recreate-globe-oneshot-v2.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由精炼后的规格一次性渲染，无需迭代。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "构建之前",
    "p": "",
    "paras": [
     "智能体只会询问它无法很好决定的事情，然后开始构建。想先批准计划吗？请索取分镜（在 Studio 应用中，打开 **Start with a storyboard**）：在任何内容移动之前，你能以静帧形式看到视频。赶时间的话，就说 **Just build it, don't ask me anything.**（直接开建，不要问我任何事。）"
    ],
    "codeBlocks": []
   },
   {
    "h": "强提示词的形态",
    "p": "",
    "paras": [
     "该骨架的每个部分都能消除智能体第一次尝试时最容易出错的决策： 组装后： 做一个 8 秒的 1920x1080 视频。节拍 1（0-4 秒）：深色 macOS 终端逐字打出 “npx skills add heygen-com/hyperframes”，然后在闪烁的光标上停留。节拍 2（4-5 秒）：终端碎裂成碎片。节拍 3（5-8 秒）：粗体白色动感文字在黑色背景上逐词砸入，干脆利落：“YOU JUST MADE THIS / WITH HYPERFRAMES.” 改编 `code-typing` 和 `vfx-shatter` 注册表块；动感文字手写。没有旁白，没有图片或媒体文件。",
     "<video aria-label=\"Validate anatomy terminal\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-anatomy-terminal.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*由上方提示词生成。*"
    ],
    "codeBlocks": [
     {
      "code": "[route]      /hyperframes\n[spec]       8-second 1920x1080 video.\n[beats]      Beat 1 (0-4s): ...  Beat 2 (4-5s): ...  Beat 3 (5-8s): ...\n[copy]       the exact on-screen text, quoted\n[technique]  Adapt the `code-typing` and `vfx-shatter` registry blocks.\n[negatives]  No narration, no image or media files.",
      "file": "TEXT THEME={NULL}"
     }
    ],
    "bullets": [
     "**Route（路由）** 用斜杠命令，仅在你使用自己的智能体时：`/hyperframes` 会加载框架规则（幻灯片用 `/slideshow`）。Studio 应用会替你完成这一步。",
     "**Spec（规格）** 在开头给出时长和分辨率。默认是 1920x1080，30fps。",
     "**Beats（节拍）** 要加时间戳。加上节奏指示（“然后在闪烁的光标上停留”）——除非明确告知，智能体会跳过呼吸感。",
     "**Copy（文案）** 要逐字引用，用 `/` 表示换行。未加引号的文案会被改写。",
     "**Technique（技法）** 按 [目录](https://hyperframes.heygen.com/catalog/blocks/data-chart.md) 中的名称精确写出注册表块的名称——它们是可调整的起点，不是即拿即用的（块带有演示内容，智能体会改写成符合你的节拍，所以点名一个块就锁定了*技法*）。在默认选择可能出错的地方，都要锁定技法（见[指定程度刻度](#how-much-to-specify)）。",
     "**Negatives（否定项）** 用来填补空缺：“没有旁白”不等于“静音”——如果你想要完全没有声音，就说“no audio”（无音频）。避免“no external assets”（无外部资源）这类模糊措辞（加载 CDN 运行时是正常的；如果你指的是没有图片或媒体文件，就直说 “no image or media files”）。"
    ]
   },
   {
    "h": "每个节拍内部",
    "p": "",
    "paras": [
     "上面的骨架组织的是*索取*。在每个节拍内部，用同样的五个槽位描述*内容*： 每个元素一句话，槽位顺序任意：*“一个巨大的数字 **(element)** 以里程表滚动递增到 \\$4.2M **(motion)**，落位时缓出 **(timing)**，居中 **(layout)**，深色海军蓝底上的绿色 **(style)**。”* 你不描述的元素，智能体来设计——当你信任它的审美时这没问题，当你不信任时就有漂移风险（见[指定程度刻度](#how-much-to-specify)）。",
     "[card] [Practice it: The brief](https://hyperframes.heygen.com/lessons/the-brief) 免费 20 分钟课程，包含一个短视频、一个测验和一份练习简报。简报是目标、受众对象、二到四个具体要点，以及用引号写出的确切措辞。"
    ],
    "codeBlocks": [
     {
      "code": "[element]   what's on screen        a giant number · the tweet card · \"SHOWREEL\"\n[motion]    what it does            counts up with an odometer roll · slides up · fades in per letter\n[layout]    where it sits           top-center · filling the lower half · bottom-right\n[style]     how it looks            dark navy, green accent · 8-bit pixel · thin geometric sans\n[timing]    when, inside the beat   at 1s · over 3s, easing out as it lands · staggered 0.1s apart",
      "file": "TEXT THEME={NULL}"
     }
    ]
   },
   {
    "h": "需要指定多少",
    "p": "",
    "paras": [
     "你指定的多少，决定结果与你想象的偏离程度，而不是它能否工作。氛围词交给设计师解读；精确的颜色、时间点和具名技法，则由你来定帧。",
     "三种设置： 密度从不有害——更强的模型只是用得上更少的自身审美。它对小模型不太会默认选好的技法选择最重要。有两个值得每次都锁定："
    ],
    "codeBlocks": [],
    "bullets": [
     "**氛围词** —— “温暖、极简的 logo 动画”。最快能写完；外观由智能体掌控。",
     "**风格 token** —— 精确的 hex、具名纹理（“halftone-dot”、“paper-cut matte”、“8-bit pixel”）、字体方向（“condensed caps”、“thin geometric sans, wide tracking”）。低成本精确，没有副作用。",
     "**完整视觉规格** —— 每个元素都写形状 + 颜色 + 位置 + 时间（见[视觉规格](https://hyperframes.heygen.com/prompting/color-grading.md#high-fidelity-looks)）。当你要重现某个具体外观时使用。",
     "**3D**：任何真实深度、光照或镜头运动 → 写 **“Three.js via the adapter”**。CSS 透视变换在光照关键场景中看起来是平的，而 Three.js 是受支持的 seek-safe（可安全抽帧）运行时。",
     "**时序**：在文字中解决同时性。“The counter fades out and READY stamps in at 4s”（计数器淡出，4 秒时 READY 盖章）会产生重叠；“fades out fully by 4.2s; at 4.2s READY stamps in”（4.2 秒前完全淡出；4.2 秒时 READY 盖章）则不会。"
    ]
   },
   {
    "h": "朝着外观迭代",
    "p": "",
    "paras": [
     "第一个版本出来后，像跟视频剪辑师说话一样跟智能体对话，而不是推倒重来： 把标题放大 2 倍。",
     "换成深色模式。",
     "在结尾加一个淡出，并在 0:03 处加一个带我姓名和职位的下三分之一字幕。",
     "字幕太小了，还跟下三分之一字幕重叠。把它们上移并缩小。",
     "把背景音乐换成 `assets/track.mp3`。",
     "智能体已经打开了构图并加载了技能——小而精准的修改比长篇重新指定效果更好。"
    ],
    "codeBlocks": []
   },
   {
    "h": "让每次修改都算数",
    "p": "",
    "paras": [
     "三个动作让迭代收敛而不是空转："
    ],
    "codeBlocks": [],
    "bullets": [
     "**一次只改一个变量。** 改一件事，渲染，判断，重复。一次同时移动三件事（“标题放大、颜色变暖、剪辑加快”）会无法归因什么有帮助、什么有伤害。",
     "**一次只加一层元素类型。** 在搭建复杂场景时？先从最小版本开始（只有主体和它的动作），确认可读后再逐遍各加一层——先镜头运动，再背景动态，再风格处理。每次新增都可归因。",
     "**先剥离，再重新叠加。** 当某个场景总是不对时，不要堆叠修正——退回到能工作的最简版本（固定镜头、简化动作、清空背景），确认后再逐层重新引入复杂性，直到找到导致崩溃的那个元素。"
    ]
   },
   {
    "h": "用绝对目标来校准",
    "p": "",
    "paras": [
     "调外观时，相对修正会震荡——“把点调细一点”会过头，“稍大一点”又荡回来。把目标写成绝对值，智能体一遍就能落位： 并且冻结已经成立的部分：“构图和动作没问题——不要动它们；只改点的大小。”没有这句冻结， rebuild（重建）可能在你已经定好的维度上漂移。",
     "[card] [Practice it: Review and correct](https://hyperframes.heygen.com/lessons/review-and-correct) 免费 20 分钟课程，包含一个短视频、一个测验和一份练习简报。先完整看一遍第一个视频（带声音），再回复。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make the dots 2x finer`（把点调细 2 倍）",
     "**改为：** `dot radius = 25% of row spacing, with clear gaps between dots`（点半径 = 行间距的 25%，点之间留出清晰间隙）",
     "**避免：** `the glow is too strong`（光晕太强）",
     "**改为：** `glow at ~35% peak opacity, always subtler than the orb itself`（光晕峰值不透明度约 35%，始终比球体本身更微妙）"
    ]
   },
   {
    "h": "规则与常见错误",
    "p": "",
    "paras": [
     "**索取停留，但要说清什么保持活动。** 落位的标题应该静止；只有真正变化的东西才继续运动（跳动的数字、素材、镜头移向下一个对象）。不要用“呼吸感”之类来填充时间。",
     "**给每一秒都安排任务。** 索取 12 秒却只有 5 秒内容，智能体就得自己编剩下的。要么缩短时长，要么说清多出的几秒展示什么。",
     "**把时间写出来。** “At 4s the counter fades out and READY stamps in”（4 秒计数器淡出，READY 盖章）会重叠几帧；“the counter is gone by 4.2s; at 4.2s READY stamps in”（4.2 秒计数器已消失；4.2 秒 READY 盖章）则不会。",
     "**屏幕文字要加引号。** 未加引号的文案会被改写；`tagline: \"Ship faster.\"` 会逐字渲染。",
     "**不要索取 React / Vue 组件。** 构图是带 `data-*` 属性的普通 HTML 加上 GSAP 时间线；框架组件会强迫多一步翻译。",
     "**不要过度指定分辨率或帧率。** 默认（1920×1080，30fps）渲染快且效果好；更高规格会显著拖慢渲染。",
     "**用你自己的智能体时，不要跳过斜杠命令。** 没有 `/hyperframes`，智能体只能猜 HTML 视频惯例，而不会加载框架的真实规则。",
     "**不要粘贴原始错误日志。** `check` 会先定位问题（先 lint，再浏览器门禁）；贴裸日志只会让智能体重新推导工具已经知道的内容。",
     "**不要假设智能体知道你的素材。** 它会搜索，但给了路径就不用搜索。",
     "**不要给逐字脚本硬计时。** 提供了旁白文本时，时长跟着朗读词走。",
     "智能体自身的规则（渲染前检查什么、lint 规则）都在 [`/hyperframes` 技能](https://github.com/heygen-com/hyperframes/tree/main/skills/hyperframes) 里；你索取视频时不需要看它们。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `build a React component for the intro`（为开场构建一个 React 组件）",
     "**改为：** `build the intro scene`（构建开场场景）（智能体会直接写构图 HTML）",
     "**避免：** `render in 4K 60fps`（以 4K 60fps 渲染）（用于社交短视频）",
     "**改为：** 什么都不说——或者只有交付目标确实需要时才说 `4K`",
     "**避免：** `make me a video of...`（给我做个……的视频）",
     "**改为：** `/hyperframes make me a video of...`（/hyperframes 给我做个……的视频）",
     "**避免：** 粘贴 200 行控制台输出",
     "**改为：** `check reports a missing asset in scene 2 — fix it`（check 报告场景 2 缺失素材——修复它）",
     "**避免：** `use my logo`（用我的 logo）",
     "**改为：** `use assets/logo.svg`（使用 assets/logo.svg）",
     "**避免：** `a 60-second explainer from this script: ...`（根据这份脚本做 60 秒讲解：……）",
     "**改为：** `a ~60-second explainer from this script: ...`（根据这份脚本做约 60 秒讲解：……）"
    ]
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform."
    ],
    "codeBlocks": [],
    "bullets": [
     "[30 Days of HyperFrames](https://hyperframes.heygen.com/thirty-days.md)",
     "[Make videos with Cursor](https://hyperframes.heygen.com/guides/with-cursor.md)",
     "[Make videos with Codex](https://hyperframes.heygen.com/guides/with-codex.md)"
    ]
   }
  ]
 },
 "tips-recreating": {
  "lede": "[迭代](https://hyperframes.heygen.com/prompting/overview.md#iterate-toward-the-look)讲的是一般修正循环。本页是它最硬的考题：对齐你看过的特定参考，而不是发明观感。",
  "sections": [
   {
    "h": "记录动效，不只是构图",
    "p": "",
    "paras": [
     "逐帧看参考。写下来： 按这种方式写的提示，一镜就能对到约 75%。结构和动效弧线到位。渲染校准还没。"
    ],
    "codeBlocks": [],
    "bullets": [
     "精确时长",
     "相机路径",
     "每个元素做什么，带时间戳",
     "入场如何重叠",
     "哪些层是模糊的",
     "取样的颜色"
    ]
   },
   {
    "h": "用绝对值迭代",
    "p": "",
    "paras": [
     "逐帧对比你的渲染和参考。然后一次只修正一个轴，冻结已对的。",
     "每次修正都写成绝对值，不写相对微调： 相对修正会来回摆——太大、太小、又太大。预期几轮才收敛。"
    ],
    "codeBlocks": [],
    "bullets": [
     "**避免：** `make dots 2x finer`",
     "**改成：** `dot radius = 25% of row spacing`"
    ]
   },
   {
    "h": "把收敛的数值提炼回提示",
    "p": "",
    "paras": [
     "迭代是搜索。找出的常量可复用。",
     "带上这些常量的提示，在新构建上一镜能对到收敛质量的 ~80–90%。离散事实无损迁移：时间、数量、十六进制、比值、相机弧线。连续质感仍差一两句校准注记，比如辉光有多明显、构图什么感觉。",
     "收敛的构图文件本身就是像素精确的工件。渲染是确定性的，重渲该文件就能重现结果。",
     "下面是一份提炼好的规格，一镜复现一条广播风动画地球： [accordion] 完整示例：全息地球（完整提炼规格） > 1.8 秒 1920x1080 视频，Three.js 经适配器（seek 驱动，无 rAF）。连贯一镜。最后一帧每个元素仍在运动。",
     "> > **场景** > > * 蓝紫背景，自上而下线性 #2a24a8 → #12105e，中心有柔和径向抬光 > * 微弱的模糊竖向青色光带（#5ee0e8 约 10% 不透明，间距约 340px），全片向左漂 70px > * 深角暗角",
     "> * 柔光胶片颗粒约 6%（种子噪点） > > **地球** > > * 宝蓝球体（#4348f2），左上受光，环境光底 0.58 > * 一条宽而柔和的缎光带（#6470ff，衰减很宽，混合约 30%）扫过上半曲线 > * 一道强青色轮廓光线（#5ee8f0），只沿上缘走",
     "> * 大陆分两层： >   * （a）紧贴球面之下的重模糊深蓝剪影（#3439c2，80% 不透明），读作柔影形状 >   * （b）球面上方等积网格点阵（纬度行 0.9°，经度步长随纬度加宽） > * 点半径 = 行距 24–28%——点之间有清晰蓝隙——近赤道略大，点不透明度 85%",
     "> * 两种颜色族：北方青蓝 #5ee0e8，从纬度约 32° 向南春绿 #7ce97a，带种子化的每点 ±30% 亮度差 > * 画面空间右下阴影区点阵调暗到 40% > * 大陆读作覆盖可见半球约 30–35% 的独立点状陆块，其余是宝蓝海洋",
     "> > **相机** > > * 开头极近：球面曲线填满整个画面，地平线从上两角出画 > * 然后连贯后拉 + 升降（fov 52°→40°） > * 结尾球顶填满下半边缘到边缘，轮廓贴住画面两侧，地平线约 45% > * 在渲染 1.8 秒的同时按 2.0 秒窗口算 power1.inOut 缓动，运动在画面里永不落定",
     "> * 地球绕竖轴转 28°，线性，大陆自右向左漂，永不停 > > **光球** —— 12 个分在三个景深平面，世界锚定在上半球，茎杆保持竖直 > > * 以 0.45s→1.15s 错峰冒出（间隔 0.06–0.13s） > * 每个用 0.44–0.56s 上升，带 back.out overshoot（每颗 1.7–2.6），然后以相位错开的正弦永远 ±8px 上下浮",
     "> * **5 颗中景**（结尾构图约 90–110px）：柔薄荷体 #a7ecc4，左下深绿底影 #3f9b5e，右上淡轮廓 #d6ffe8，无白心 >   * 每颗裹一个柔和加色辉光精灵，约 3.5 倍直径，中空，峰值约 35% 在球缘外一点。亮心加色辉光盖在不透明球上会把薄荷烧成青绿。",
     ">   * 再加一圈细柔光晕，约 4.2 倍半径，60% 不透明，永远比球本身含蓄，带缓慢的 5% 缩放呼吸 > * **4 颗背景**——约 30px，锐利，辉光更紧 > * **3 颗近镜虚化**——约 160–190px，密集薄荷径向渐变精灵，贴着相机坐在中左 / 下中 / 上右，约 70% 不透明，横漂 ±30px，无茎杆",
     "> * **茎杆**——2–3px 加色青圆柱，到表面渐透明 > * 标注 canvas 生成精灵贴图 sRGB，否则薄荷会洗白 > > **字幕** —— “Across 82 Countries” > > * Inter 300，34px，0.06em 跟踪，白 90%，顶部居中距顶 12%",
     "> * 自左向右逐字淡入，t=1.0s 起，约 1.45s 完成 > * 然后缓慢上漂 6px，最后一帧仍在缓动 > > 无音频。",
     "<video aria-label=\"Recreate globe oneshot\" src=\"https://static.heygen.ai/hyperframes-oss/docs/images/prompting/recreate-globe-oneshot.mp4#t=0.1\" loop playsInline preload=\"metadata\" />",
     "*这份规格在新构建上一镜的渲染——未迭代。*"
    ],
    "codeBlocks": []
   },
   {
    "h": "知道文字这条道的上限在哪",
    "p": "",
    "paras": [
     "词语无损承载离散、可数之物。它们说不清连续的感知质感：辉光衰减、材质感、光学混色。",
     "最后 10% 文字关不掉，只会来回振荡。如果像素精确重要，留住构图文件。"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关",
    "p": "",
    "paras": [
     "[card] [迭代](https://hyperframes.heygen.com/prompting/overview.md#iterate-toward-the-look) 本页推到极限的修正循环 [card] [高保真观感](https://hyperframes.heygen.com/prompting/color-grading.md#high-fidelity-looks)",
     "写复现需要的规格密度 [card] [运行时和 3D](https://hyperframes.heygen.com/prompting/color-grading.md#3d-and-other-animation-runtimes) 示例用的适配器",
     "[card] [收官片](https://hyperframes.heygen.com/prompting/capstone.md) 所有技法装进同一部片子"
    ],
    "codeBlocks": []
   },
   {
    "h": "相关主题",
    "p": "",
    "paras": [
     "本文档由 [Mintlify](https://mintlify.com) 构建和托管，这是一个开发者文档平台。"
    ],
    "codeBlocks": [],
    "bullets": [
     "[品牌、模板和分镜](https://hyperframes.heygen.com/prompting/design-systems.md)",
     "[在 Studio 应用里做第一条视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
     "[在浏览器编辑器里编辑](https://hyperframes.heygen.com/studio/index.md)"
    ]
   }
  ]
 }
};
