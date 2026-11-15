import fs from "node:fs";

let s = fs.readFileSync("src/data/docs-full.ts", "utf8");
s = s
  .replace(/^import.*\n/, "")
  .replace("export const DOCS_FULL: Record<string, DocContent> = ", "")
  .replace(/;\s*$/, "")
  .trim()
  .replace(/;$/, "");
const j = JSON.parse(s);

function setParas(slug, secIdx, paras, extra = {}) {
  const sec = j[slug].sections[secIdx];
  sec.paras = paras;
  if (extra.h) sec.h = extra.h;
  if (extra.bullets) sec.bullets = extra.bullets;
  if (extra.codeBlocks) sec.codeBlocks = extra.codeBlocks;
}

// snapshot videos before overwrite
function findVideos(slug, secIdx) {
  return (j[slug].sections[secIdx].paras || []).filter((p) => p && p.startsWith("<video"));
}
const CAP_VIDEO = findVideos("captions", 2)[0];
const MOT_VIDEO = findVideos("motion-graphics", 3)[0];
const MOT_FULL = findVideos("motion-graphics", 8)[0];
const MUS_VIDEO = findVideos("music", 3)[0];
const MUS_CAP = findVideos("music", 6)[0];

// ---- captions (0..8) ----
setParas(
  "captions",
  0,
  [
    "在**做点什么**里把剪辑加好，说你要的效果。**爱别人视频里的字幕？** 把链接一道贴上，说“字幕仿这个”。用自家智能体而非应用时，以 `/hyperframes` 开头。",
  ],
  { h: "怎么做" },
);
setParas(
  "captions",
  1,
  [
    "选其一：",
    "**字幕** —— 屏幕上的台词，与人声同步。多数视频是讲者下方一条干净字幕行；电影感则用大字压在讲者身后。",
    "**设计卡** —— 标题、引言、数字标注、下三分之一，或讲者缩到角落而卡片独占画面，全部与台词同步。",
    "**更紧的剪辑** —— 删掉点名的长停顿或冗长。先剪再加字幕，让字幕跟着最终时序。",
    "要重排故事或从长录音挑最佳段落，把想要的成片描述为[自定义视频](https://hyperframes.heygen.com/guides/general-video.md)。",
    "把转录可能漏掉的人名、术语，以及脸与屏字的所在位告诉智能体，图形才不挡脸。",
    "[card] [练习：剪你自己的素材](https://hyperframes.heygen.com/lessons/edit-your-footage) 20 分钟免费小课，含短片、测验与试写题：一份素材简报 = 目标、播放位、两三个剪法与准确标题词。",
  ],
  {
    h: "三选一",
    codeBlocks: [
      {
        code: "Add clear animated captions to this interview. Keep the footage and its spoken edit unchanged.",
        file: "text",
      },
      {
        code: "cut the pauses longer than 0.8 s out of assets/interview.mp4, then add clean\ncaptions to the tighter cut.",
        file: "text",
      },
    ],
  },
);
setParas(
  "captions",
  2,
  [
    "两个词最管用：**轨道**是承载台词的字幕行；**嵌入**是压在讲者身后的一词大字，留给最强的一刻。",
    "给 `./interview.mp4` 加字幕。干净逐字轨道承载台词，下三分之一可读。把最有力的一词提为讲者身后嵌入，每行轨道高亮一关键词。保持原画幅，剪辑不动。",
    CAP_VIDEO,
    "*上提示在生成数字人镜头上所做的效果：讲者身后一处嵌入，其余在轨道。* 轨道承载大段文字；**嵌入**是稀缺的、挣来的高潮——高潮处主题身后一词巨字，不是每行都有。把整稿嵌入是最常见错误。",
  ],
  { h: "有效提示" },
);
setParas(
  "captions",
  3,
  [
    "给 `./founder-clip.mp4` 配同步图形卡。9:16 竖屏，暖纸质感。全屏踢球加标题钩子开场；她报公司名时下三分之一落下；“200+ 团队 / $1.2M ARR”计数数据卡；最强一句引言卡。卡下讲者保持全屏，数据卡停留时缩她到角落画中画。剪辑原片不断。",
    "你主理*卡片*——内容、时序、讲者如何与卡共享画布（全屏、分屏、画中画、玻璃覆盖）。智能体逐卡设计书写，没有固定原型，覆盖只跟转录实际内容走。",
  ],
  { h: "设计卡片" },
);
setParas(
  "captions",
  4,
  [
    "**外观与语调（字幕）。** 按内容定外观：讲解/访谈/必读词 → 干净可读轨道；诗意/社交/电影感 → 讲者身后英雄排字；炒作 → 更粗更有力的字。不确定 → 干净轨道：字可读，画面守安。成套样式在[字幕目录](https://hyperframes.heygen.com/prompting/captions-catalog.md)。",
    "**逐字轨道对高潮嵌入。** 轨道是默认，扛大段文字。嵌入是提级——峰值词压主题身后，稀缺隔段（约一拍一处，从不见双、高潮至多一）。告诉智能体*哪些*行配嵌入，余留轨道。",
    "**样式、布局、画幅（覆盖卡）。** 点名风格（暖纸、临床……）、布局（分屏/堆叠/画中画/覆盖）与画幅。跟原画幅是稳妥默认，取舍在你——桌面/YouTube 16:9，Reels/Shorts 9:16，信息流 4:5。",
    "**关键词高亮。** 轨道上， punch 词可带内联 `emphasis`——主题色或动词弹跳——不出轨道。说“每行高亮关键词”即可保可读。",
  ],
  { h: "关键时说这些" },
);
setParas(
  "captions",
  5,
  [
    "[accordion] 电影字幕嵌入（逐字带情绪）> `./poem.mp4` 电影字幕——无轨道，小写斜体英雄排字在讲者身后拼成，词逐字叠成一列。每想一顶点词，词间留气。4:5。素材不评级。",
    "放下轨道，全部压讲者身后，适合诗意/社交/“电影感”——情绪重于可读，不用在必读的讲解片。",
    "[accordion] 明亮场景字幕 > 给 `./outdoor-vlog.mp4` 加逐字字幕。日光太亮，用近黑印在面上的字体，别用浅色会被洗掉。保可读轨道。16:9。",
    "浅色、屏幕混色在亮底上发虚（亮度高于 180）；深色不透明。外观贴合场景。",
    "[accordion] VFX 级主题字幕 > 在 `./hype-clip.mp4` 上灌注能量——字幕要强冲击：逐字标记轨道带爆点顶点。轨道逐字记录， payoff 行是主罚球。9:16。",
    "点名手法——冲压型、payoff 行爆开——而非“炸起来”。A-roll 不评级。",
    "[accordion] 横屏数据精剪 > 把 `./analyst-interview.mp4` 重剪为 16:9 临床风讲解。分屏：讲者在右，数据卡在左。每主张一卡——标题数字计数、双选项瑞士格比较、技术段终端式标注。5 分钟剪辑自动调卡速。成片不动。",
    "布局（分屏/堆叠/画中画/覆盖）定讲者与卡共享画布；不言明，卡速随片长变——5 分钟约每 12–20 秒一张。",
  ],
  { h: "变体" },
);
setParas(
  "captions",
  6,
  [
    "**先剪后加字幕。** 字幕按原剪同步，剪即偏。先剪，再加字幕。",
    "**嵌入别滥用。** 讲者头上轨道是逐字默认，每条全压主题身后，文字被盖，高潮无活。",
    "**别一剪跨双主。** 讲者身后文本对应一主；双主或硬切会闪烁。",
  ],
  {
    h: "常见错误",
    bullets: [
      "**避免：** `add captions, then remove the pauses`",
      "**改成：** `remove the pauses, then add captions to the cut`",
      "**避免：** `composite every caption behind the speaker for a cinematic look`（讲解片）",
      "**改成：** `verbatim rail; promote only the two payoff lines to an embed`",
      "**避免：** `caption this two-person podcast in one pass`",
      "**改成：** `split the clip per shot / per speaker first, then caption each`——或用单主剪辑。",
    ],
  },
);
setParas(
  "captions",
  7,
  [
    "再[修改](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md)：让智能体改词或改时，或在编辑器手挪标题。",
    "要从转录文件导入改词，跑 `hyperframes transcribe transcript.json --dir ./my-video`，它把整稿填回现有字幕，保留字幕代码。",
  ],
  {
    h: "复核要点",
    bullets: [
      "人名、产品词、数字正确。",
      "字幕跟在词后。",
      "图形避脸避要位。",
      "有声未静默。",
      "字幕/图形收于片尾前。",
    ],
  },
);

// ---- motion-graphics (0..9) ----
setParas(
  "motion-graphics",
  0,
  [
    "**指给它看你爱的动作。** 首页 **Remix from inspiration** 下 **Motion graphics** 收真实视频短片段：选其一 **Add as inspiration**，说你的片该说什么。任意剪辑链接也可放**做点什么**或 **Reference**。",
    "**或一句话描述**：要成品视频还是透明覆盖，两种皆可时说明。用自家智能体而非应用时，以 `/hyperframes` 开头。",
  ],
  { h: "怎么做" },
);
setParas(
  "motion-graphics",
  1,
  [
    "同形请求可动：动态字、统计、图表、Logo、下三分之一、地图、真实网页、新闻头或帖子。",
    "若需旁白、多幕或更长故事，做[自定义视频](https://hyperframes.heygen.com/guides/general-video.md)。",
    "[card] [练习：快赢——给 Logo 加动画](https://hyperframes.heygen.com/lessons/logo-quick-win) 18 分钟免费小课：一份短简报够了——时长、规格、Logo 文件与引号词。",
  ],
  {
    h: "你想动什么？",
    bullets: [
      "**文字** —— 动作与强调传意时用动态字。",
      "**一个数字** —— 计数或揭晓统计，落定停够久。",
      "**数据** —— 图表或对比动画，让顺序自证结论。",
      "**Logo** —— 短刺：入意、成形、净落。",
      "**覆盖** —— 下三分之一或标注，在素材上入、停、清。",
      "**页面、帖子、地图** —— 抓真实来源，动一细节为 payoff。",
    ],
  },
);
setParas("motion-graphics", 2, ["覆盖须点名位置与停留时长。首末帧须净清。"], {
  h: "选交付",
  bullets: [
    "**MP4** 交付独立成片。",
    "**带透明的 WebM 或 MOV** 叠在素材上的 Logo、下三分之一、标注等。",
  ],
});
setParas(
  "motion-graphics",
  3,
  [
    "规范形：路由、规格、节拍时间戳、文案加引号、手法锁定、缺口补齐。",
    "做 8 秒 1920x1080 视频。节拍 1（0-4s）：暗终端逐字敲“npx skills add heygen-com/hyperframes”，停在闪烁光标。节拍 2（4-5s）：终端粉碎。节拍 3（5-8s）：黑上粗白动态字逐词砸入，干脆：“YOU JUST MADE THIS / WITH HYPERFRAMES.” 改 `code-typing` 与 `vfx-shatter` 注册块，动态字手写。不旁白，不图文素材。",
    MOT_VIDEO,
    "*上提示所成。*",
  ],
  { h: "有效提示" },
);
setParas(
  "motion-graphics",
  4,
  [
    "**时长。** 短——动效常 10 秒内，最多 30。2 秒想法抻到 8 秒无论多动都显慢；真要多幕或长跑，即多幕视频，非动效。",
    "**MP4 与透明覆盖。** 默认 MP4。要透明覆盖——下三分之一、标注、待合成的 bug——渲 `webm` 或 `mov` 带 alpha。透明仅在帧内*本该*空处有义。全帧设计（自带背景、满构图）无透明之空，索取透明 WebM 非不透明即碎。仅对“叠在别物上”的部件说“透明覆盖、alpha 通道”。",
    "**注册块对自由发挥。** 点名块（`apple-money-count`、`x-post`、`data-chart`、`code-typing`、`us-map` / `world-map`），智能体先复用：装块、原入改、仅手补缺口。不点则按描述手建——一次性外观可，漂移多。块名照[目录](https://hyperframes.heygen.com/catalog/blocks/data-chart.md)原样。",
    "**缓动与动感。** “干脆”“弹”“落稳带过冲”等动感词对应具体缓动。舍得用，便宜精准。词到缓动表见[词汇](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)；防廉价语法（无全停、动重叠、镜作动）见[高级动作](https://hyperframes.heygen.com/prompting/motion.md)。",
  ],
  { h: "关键时说这些" },
);
setParas(
  "motion-graphics",
  5,
  [
    "各复用一注册块，智能体拼而非从零手建。",
    "[accordion] 统计计数 > 6 秒 1920x1080，深海军蓝。节拍 1（0-1s）：标签“ARR”顶部居中渐浮。节拍 2（1-4s）：巨数像里程表滚到 $4.2M，落定时缓出。节拍 3（4-6s）：“+312% YoY”绿戳下方，后全入温和环境空闲（微呼吸缩放、慢粒飘）。基底 `apple-money-count`。不旁白。",
    "[accordion] Logo 刺 > 5 秒 1920x1080 Logo 亮相。节拍 1（0-2s）：词“ACME”散粒拼起。节拍 2（2-3s）：全帧 `swirl-vortex` 着色器转场。节拍 3（3-5s）：标志与标语“Ship faster.”白上落定，微环境空闲（慢呼吸缩放）。拼合用 `code-particle-assemble`。",
    "[accordion] 动画帖 > 7 秒 1080x1350 竖屏。真推文卡（@hyperframes，“we render video from HTML now. no timeline UI. just code.”）在柔渐变上滑入，赞数 0→1.2K，卡 3D 倾斜扫亮第二句。末卡温和环境空闲。用 `x-post` 与 `vfx-liquid-background`。不旁白，不图文素材。",
    "[accordion] 地图路线 > 8 秒 1920x1080。暗世图，发光弧 3 秒自旧金山到东京，落针脉冲，镜推东京，标“延迟：89 毫秒”。基底 `us-map`，木炭底青线重调。不旁白。",
  ],
  { h: "变体" },
);
setParas(
  "motion-graphics",
  6,
  [
    "**全帧索取透明。** Alpha 给覆盖元，不给满帧。带自底设计无透明可导。",
    "**运动即信息段还配旁白。** 定义上动效无旁白——视觉即声。配音即成有声视频。",
    "**短想法抻长。** 时长是旋钮，超 30 单节拍无事可做。",
    "六段骨架与拍口径见[提示解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)；全跑验收样例见[验证样例](https://hyperframes.heygen.com/prompting/examples.md)。",
  ],
  {
    h: "常见错误",
    bullets: [
      "**避免：** `world-map`",
      "**改成：** `apple-money-count`——素材叠加用 `swirl-vortex`",
      "**避免：** `code-particle-assemble`",
      "**改成：** `a 10s logo sting, no narration`——语音段另要旁白讲解。",
      "**避免：** `x-post`",
      "**改成：** `an 8-second kinetic-type piece of one headline`——或提为多幕视频。",
    ],
  },
);
setParas(
  "motion-graphics",
  7,
  [
    "[card][完成并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 全速验收动作，渲所选格式，看终文件。",
  ],
  {
    h: "复核动作",
    bullets: [
      "文、数、源、标无误。",
      "播放时整句可读。",
      "主动作传意。",
      "起止皆有意。",
      "透明导出经真镜验收。",
    ],
  },
);
setParas(
  "motion-graphics",
  8,
  [
    "上段示范围。下为其完整所建动效——有乐音效，无旁白，动作即一切。",
    MOT_FULL,
    "完整年度回顾动效。有乐与音效，无旁白，动议即声。",
  ],
  { h: "完整全程" },
);
{
  const sec = j["motion-graphics"].sections[9];
  sec.paras = ["本文档在 Mintlify 构建托管。"];
  sec.bullets = [
    "[用 AI 做讲解视频](https://hyperframes.heygen.com/guides/faceless-explainer.md)",
    "[你想做什么？](https://hyperframes.heygen.com/workflows.md)",
    "[用 AI 给视频加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)",
  ];
}

// ---- music (0..8) ----
setParas(
  "music",
  0,
  [
    "在**做点什么**里加曲目（及必现的图/剪辑）：**爱别人剪法？** 把链接一道贴上，说“剪成这样”，智能体贴其节奏接到你曲目。不清条理时别提片段、歌词或序。用自家智能体而非应用时，以 `/hyperframes` 开头。",
  ],
  { h: "怎么做" },
);
setParas("music", 1, ["整片亦可只靠文字、图形模板与动作构建。"], {
  h: "音轨应驱动什么？",
  bullets: [
    "**用你图或视频** —— 依曲目乐句、能量、节拍、结尾剪已批媒体。",
    "**做歌词视频** —— 先验歌词，逐行人声同步、设计字。",
    "**发明视觉** —— 无素材时以版式、图形、动作造视觉弧。",
  ],
});
setParas(
  "music",
  2,
  [
    "HyperFrames 先绘曲目乐句、能量、起止、静音、滚动、下降、硬停，再规视觉。",
    "有劲曲目可贴真节拍网剪。松弛之乐依乐句能量走，别逢节拍硬砍。",
    "视觉在有义音乐刻变化，拍多不自带幕多。",
  ],
  { h: "轨定结构" },
);
setParas(
  "music",
  3,
  [
    "验收起点：图剪到轨，导方形 MP4。",
    "取 `./track.mp3` 最好 20 秒做 1080x1080 视频，配 `./shots/` 八图。贴节拍网剪，每小节一图，强拍插入，乐句变 `whip-pan` 转场。末图压粗字“SUMMER '26”收。不 TTS。",
    MUS_VIDEO,
    "*上提示所成。* 每时间判交曲目自析——你主*手法*（“每小节一图”“强拍插入”），“何时”归节拍网。",
  ],
  { h: "有效提示" },
);
setParas(
  "music",
  4,
  [
    "**节拍网。** 智能体析曲节拍、起止、段（`hyperframes beats`、`hyperframes audio`），按真音乐变剪。你控“如何”非“何时”：“每条一图”密剪，“强拍插入”重音，“乐句变转场”保结构边。有劲乐网可信，贴拍切；松乐网为分析器节拍器，智能体依乐句能量走——环境乐直说“让它流，别硬砍”。",
    "**曲段——描述，不打时间戳。** 要“最好 20 秒”或“入钩诗句”，锚点边界交分析器。硬戳（“用 0:32–0:52”）砍半句、逆网。",
    "**供材。** 零供亦可——版式即整片。交的图/剪织进*同*节拍网（拍剪或 Ken Burns），材多即剪多，非异节奏模型。指目录（“`./shots/` 八图”）并命名尾卡。",
  ],
  { h: "关键时说这些" },
);
setParas(
  "music",
  5,
  [
    "[accordion] 歌词视频 > 取 `./song.mp3` 最强 30 秒做 1080x1920 歌词视频（一诗句）。转录得词时。行随拍逐根升起，暗纹底大浓字；钩子落，词强拍入。每行关键词酸绿高亮。无图——纯字。不 TTS。",
    "词级时序源自转录（或你贴词置节拍网）。无须供材——字即全片。",
    "[accordion] 无曲动力学促销 > 15 秒 1080x1080 动态促。无轨则自生：驱动合成波，高能。强剪贴拍：全幅字卡（“更快”“更清晰”“Ship it”）砸强拍，黑白与反字交错，乐句变小故障。末“NOVA”收，微环境空闲。不 TTS。",
    "无音频时曲依你 Mood 自生，网仍驱每剪。",
  ],
  { h: "变体" },
);
setParas(
  "music",
  6,
  [
    "**硬轨时间戳。** 乐视频精在曲自定剪，字面窗无视网，半句砍。",
    "**指望牌组出 MP4。** 牌组是点击探讲的现场，非视频文件。",
    "**交付认错。** 导之发之、置乐的图是视频；点着走的即牌组。仅以“幻灯片”挑会错交付。",
    "乐提示无旁白，要则另点。六股贯通见[提示解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)；形容到缓转见[词汇](https://hyperframes.heygen.com/prompting/motion.md#words-for-how-motion-feels)。",
    "长片提示条款，剪贴真拍，防备升级：**节奏（45-52 秒）。** 线成波：**先析 BGM，张开 `use the section from 0:32 to 0:52`，驱网**——波脉与紧凑媒体卡（词线、图卡、图闪）在镜不息时贴真析拍捉线，每镜一刻 SFX。至少六热歌。接缝 #2 批注：拍中硬切卡内容可批，镜自不断。",
    MUS_CAP,
    "*剪贴真析拍（`pick the best 20 seconds of the track`）。*",
  ],
  {
    h: "常见错误",
    bullets: [
      "**避免：** `a slideshow deck, then render it to MP4`",
      "**改成：** `a music video from these photos`",
    ],
  },
);
setParas(
  "music",
  7,
  [
    "要直控时刻，用[浏览器编辑器时间线](https://hyperframes.heygen.com/studio/timeline.md) 按拍标优剪、保、收。问智能体何时该改段、改媒、改总法。",
    "[card][完成并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 查终工程，渲所喜之面，视文件。",
  ],
  {
    h: "复核节奏",
    bullets: [
      "用对曲段。",
      "所要媒体在，词贴声。",
      "最强视觉变贴有义音乐变。",
      "要图/字留够读。",
      "尾落乐结或有意循环。",
    ],
  },
);

const ts =
  'import type { DocContent } from "./docs";\n\nexport const DOCS_FULL: Record<string, DocContent> = ' +
  JSON.stringify(j, null, 1) +
  ";\n";
fs.writeFileSync("src/data/docs-full.ts", ts, "utf8");
console.log("wrote", ts.length);
console.log("captions", j.captions.sections.map((s) => s.h).join("|"));
console.log("motion", j["motion-graphics"].sections.map((s) => s.h).join("|"));
console.log("music", j.music.sections.map((s) => s.h).join("|"));
