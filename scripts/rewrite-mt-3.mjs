import fs from "node:fs";

let s = fs.readFileSync("src/data/docs-full.ts", "utf8");
s = s
  .replace(/^import.*\n/, "")
  .replace("export const DOCS_FULL: Record<string, DocContent> = ", "")
  .replace(/;\s*$/, "")
  .trim()
  .replace(/;$/, "");
const j = JSON.parse(s);

function set(slug, i, h, paras, extra = {}) {
  const sec = j[slug].sections[i];
  sec.h = h;
  sec.paras = paras;
  if (extra.bullets) sec.bullets = extra.bullets;
  if (extra.codeBlocks) sec.codeBlocks = extra.codeBlocks;
  if (extra.table) sec.table = extra.table;
}

function videos(slug, i) {
  return (j[slug].sections[i].paras || []).filter((p) => p && p.startsWith("<video"));
}

// ---------- data-maps full rebuild ----------
j["data-maps"].lede =
  "数字与地理是“给什么数据”与“怎么动”两分定定的主题。[数据](https://hyperframes.heygen.com/catalog/blocks/data-chart.md)区块给现成图表与地图，你喂数；计数[样例](https://hyperframes.heygen.com/catalog/blocks/apple-money-count.md)区块理里程表高潮。本页讲图表、计数、地图，皆可插进[一次性骨架](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)（数据入“文案”槽，块名入“手法”槽）。";
const dm = j["data-maps"].sections;
const dmV0 = (dm[0].paras || []).filter((p) => p && p.startsWith("<video"));
const dmV1 = (dm[1].paras || []).filter((p) => p && p.startsWith("<video"));
const dmMapsVideos = [];
for (const sec of dm)
  for (const p of sec.paras || [])
    if (p && p.startsWith("<video") && p.includes("validate-us-map")) dmMapsVideos.push(p);
const dmFlightV = (dm[3] ? dm[3].paras || [] : [])
  .filter((p) => p && p.startsWith("<video"))
  .find((p) => p.includes("flight-route"));
const dmCapV = [];
for (const sec of dm)
  for (const p of sec.paras || [])
    if (p && p.startsWith("<video") && p.includes("capstone-region")) dmCapV.push(p);
const DM_CHART_V =
  dmV0[0] ||
  '<video aria-label="Chart languages" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/chart-languages.mp4#t=0.1" loop playsInline preload="metadata" />';
const DM_RACE_V =
  dmV0[1] ||
  '<video aria-label="Barrace handdrawn" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/barrace-handdrawn.mp4#t=0.1" loop playsInline preload="metadata" />';
const DM_MONEY_V =
  dmV1[0] ||
  '<video aria-label="Money count" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/money-count.mp4#t=0.1" loop playsInline preload="metadata" />';
const DM_USMAP_V =
  dmMapsVideos[0] ||
  '<video aria-label="Validate us map flows" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/validate-us-map-flows.mp4#t=0.1" loop playsInline preload="metadata" />';
const DM_FLIGHT_V =
  dmFlightV ||
  '<video aria-label="Flight route" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/flight-route.mp4#t=0.1" loop playsInline preload="metadata" />';
const DM_CAP_V =
  dmCapV[0] ||
  '<video aria-label="Capstone region data map" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/capstone-region-data-map.mp4#t=0.1" loop playsInline preload="metadata" />';

j["data-maps"].sections = [
  {
    h: "图表：点名区块，或手绘",
    p: "",
    paras: [
      "拿图表两条路，取舍在控制权：",
      "**点名 [`data-chart`](https://hyperframes.heygen.com/catalog/blocks/data-chart)** 得现成动画条 + 线（交错显现、数值标、NYT 体）喂数即可，快、稳、无设计定夺。",
      "**说“全手绘——无图表库”**，智能体以行内 SVG 与 GSAP 自建。舍块精修，换形、动、布局全控——条赛中途超车、弧配计数、库无此布局皆可。",
      "数据行内或文件：短系列直入提示，CSV 构建时引用解析（保确定性——无[渲染时获取](https://hyperframes.heygen.com/concepts/determinism.md)）。",
      "做 12 秒 1920x1080 视频。标题“最常用语言”，副标题“受访比，2026  survey”。做成动画条（交错显现、数值逐条上计、标尾 `%`），基底 `data-chart`。不音频。",
      DM_CHART_V,
      "*上提示所渲，未剪——标上计而次条已涨。*",
      "做 10 秒 1920x1080 深石板底。标题“2026 头号语言”左上。五横条（Python、TypeScript、Rust、Go、Java）零起交错涨，中途两度超车，各右沿数值标上计至终%。终态留 2 秒，活——首脉冲一记，终帧精确收，不冻结。标记手写（无库），形“手绘”：晃墨非净矩。点名哪两对、何时超，否则每跑交叉数异。不音频。",
      DM_RACE_V,
      "*上提示所渲，未剪——手墨无库，名次二易。*",
      "**块与否明示，别含糊。**“动画这数据”不定，漂在通用块与即兴布之间。",
      "**数字随动画定版。** 里程表须定列宽；`$0 → $4.2M` 逼出怪 `$0.0M` 起。",
    ],
    codeBlocks: [{ code: "Python 41, TypeScript 33, Rust 19, Go 14, Java 9", file: "txt" }],
    bullets: [
      "**避免：** `animate this CSV as a chart`",
      "**改成：** `turn this CSV into an animated bar chart — use the data-chart registry block` **或** `…hand-draw everything, no chart library`",
      "**避免：** `counts from $0 to $4.2M`",
      "**改成：** `counts up to $4.2M`",
    ],
  },
  {
    h: "计数统计",
    p: "",
    paras: [
      "单主数字用 [`apple-money-count`](https://hyperframes.heygen.com/catalog/blocks/apple-money-count)，苹果风财务计数——自 $0 滚、绿闪、钱图爆音。求此精手即点名；要自家字裸数则手绘。",
      "做 6 秒 1920x1080 深海军蓝。节拍 1（0-1s）：“ARR”标签顶中渐浮。节拍 2（1-4s）：巨数里程表滚至 $4.2M，落缓出。节拍 3（4-6s）：“+312% YoY”绿戳下方，后温和环境空闲。基底 `apple-money-count`。不旁白。",
      DM_MONEY_V,
      "*上提示所渲，未剪。*",
    ],
    codeBlocks: [],
  },
  {
    h: "地图：问要什么，配哪块",
    p: "",
    paras: [
      "每块回一地理问。说清地图*之用*，点名匹配块（等值着色、气泡、网格、流四览）：",
      DM_USMAP_V,
      "*上提示所渲，未剪。*",
      "提示：地图块运行时自 CDN 取地理，这违确定性——智能体把投影几何烘进合成。你永不须求，此为正确建地图一环。",
      "**选编码，别只说“地图”。** 等值（色）、气泡（径）、六格（等权）、流（弧）同数异事。",
      "**点名地区块。** 等值多系地区专用，投影已烘（`spain-map` 为 D3 等角圆锥，`world-map` 为 Natural Earth），无通用“任意国”图。",
    ],
    codeBlocks: [],
    table: [
      ["你想要……", "点名这块", "长"],
      [
        "按值（等值）阴美国各州",
        "[`us-map`](https://hyperframes.heygen.com/catalog/blocks/us-map)",
        "12s",
      ],
      [
        "按值（气泡）缩美国城",
        "[`us-map-bubble`](https://hyperframes.heygen.com/catalog/blocks/us-map-bubble)",
        "12s",
      ],
      [
        "美国双城连线（起→终）",
        "[`us-map-flow`](https://hyperframes.heygen.com/catalog/blocks/us-map-flow)",
        "12s",
      ],
      [
        "美国各州等权六格",
        "[`us-map-hex`](https://hyperframes.heygen.com/catalog/blocks/us-map-hex)",
        "10s",
      ],
      [
        "按自治区阴西班牙",
        "[`spain-map`](https://hyperframes.heygen.com/catalog/blocks/spain-map)",
        "12s",
      ],
      [
        "世界逐国阴",
        "[`world-map`](https://hyperframes.heygen.com/catalog/blocks/world-map)",
        "14s",
      ],
    ],
    bullets: [
      "美国图编码可叠——“阴州*并*连双城”得一合成：智能体源端叠块于同投影，弧正落等值州上。",
      "**避免：** `put California's number on a US map`",
      "**改成：** `size each city as a proportional bubble` → `us-map-bubble`，或 `shade each state by value` → `us-map`",
      "**避免：** `a map of Spain's regions`（投影地理听天命）",
      "**改成：** `use the spain-map registry block`",
    ],
  },
  {
    h: "航线与航班",
    p: "",
    paras: [
      "点到点——图上画线带落拍——用 [`nyc-paris-flight`](https://hyperframes.heygen.com/catalog/blocks/nyc-paris-flight)，苹果风飞行动画：机自纽约飞巴黎，带标圈、落弹跳与音效。基底上改两端。",
      "做 6 秒 1920x1080。真图，机飞双城，起标圈，终落弹跳。基底 `nyc-paris-flight`——路线纽约 (JFK) → 巴黎 (CDG)，两端标。保块自标题卡与路线刻。终于定图，非块白场缘帧。不音频。",
      DM_FLIGHT_V,
      "*上提示所渲，未剪。*",
      "**路线是带车的流动，非静弧。** 要弧不要机声即 `us-map-flow`；要旅演出即 `nyc-paris-flight`。",
    ],
    codeBlocks: [],
    bullets: [
      "**避免：** `draw a line from NYC to Paris`（弧与全飞 ambiguous）",
      "**改成：** `a plane flies the route with a landing pop` → `nyc-paris-flight`",
    ],
  },
  {
    h: "下一步去哪",
    p: "",
    paras: [
      "提示：**真片里**，[整片](https://hyperframes.heygen.com/prompting/capstone.md) Measure 与 Everywhere 区即本页全程：`data-chart` 条自时间线 Rising， hero 计数落，后同线成大圆弧覆 `world-map` 真云渲区（下为片中剪）。",
      "整片[完整提示](https://hyperframes.heygen.com/prompting/capstone.md#the-prompt-word-for-word)买断此段——自家可借的措辞：**Measure（14-21s）** 线成图基线（同线同粗，无切）：改 **`data-chart` 块**——六标条自线升，spoken cues 催，hero 巨字单宽并计：**50+ CATALOG BLOCKS**（真注册数）……**Everywhere（21-28s）** 线成弧地落：改 **`world-map` 块**——虚世图下滚，线成大圆弧越之。真渲基建，实标：脉冲点 AWS 与 Google 区（US-EAST-1 · EU-WEST-1 · AP-SOUTH-1），kicker“CLOUD RENDER · LAMBDA + CLOUD RUN”……",
      DM_CAP_V,
      "*该段所渲——片中区剪。*",
    ],
    codeBlocks: [],
    bullets: [
      "[一次性提示解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)——骨架，里程表为何须定列。",
      "[复制示例](https://hyperframes.heygen.com/prompting/examples.md)——条赛与统计块提示套用。",
      "[生成美术](https://hyperframes.heygen.com/prompting/color-grading.md#generated-artwork)——手 HTML/CSS/SVG 闪处与不闪处。",
      "[规格拨盘](https://hyperframes.heygen.com/prompting/overview.md#how-much-to-specify)——何时点名块、何时手绘。",
    ],
  },
];

// keep related topics last
const dmRelated = dm.find((sec) => sec.h === "相关主题") || {
  h: "相关主题",
  p: "",
  paras: ["本文档在 Mintlify 构建托管。"],
  codeBlocks: [],
  bullets: [
    "[整片，逐条提示](https://hyperframes.heygen.com/prompting/capstone.md)",
    "[动画条形图](https://hyperframes.heygen.com/catalog/components/animated-bar-chart.md)",
    "[剪已有视频](https://hyperframes.heygen.com/prompting/editing-existing-videos.md)",
  ],
};
j["data-maps"].sections = [...j["data-maps"].sections, dmRelated];

// ---------- faceless-explainer polish ----------
for (const sec of j["faceless-explainer"].sections) {
  if (!sec.paras) continue;
  sec.paras = sec.paras.map((p) => {
    if (p && p.startsWith("<video")) return p;
    let x = p;
    x = x.replace(/使用 HyperFrames 制作的解释器/g, "用 HyperFrames 做的讲解");
    x = x.replace(/从你喜欢的解释开始/g, "从你爱的讲解起");
    x = x.replace(/或者在做某事中描述它/g, "或在**做点什么**里描述");
    x = x.replace(/使用你自己的代理而不是应用程序/g, "用自家智能体而非应用");
    x = x.replace(/将想法塞进场景中/g, "别把两想法塞一场景");
    x = x.replace(/要求它捕获或提取真实图像/g, "别要它抓取或扒真图");
    x = x.replace(
      /没有捕获步骤。一位不露面的解释者发明了它的视觉效果/g,
      "讲解无抓取步，视觉自发明",
    );
    x = x.replace(/预期从演示文稿中获得 MP4/g, "牌组出不了 MP4");
    return x;
  });
}
set("faceless-explainer", 1, "怎么做", [
  "**从你爱的讲解起。** Studio 首页开 **Reference**，粘链接（YouTube、TikTok、Instagram、X）、传文件，或在**选参考**挑一，再报你的题：节奏与绘画风格随它。你不必全爱，爱一角够了。Reference 用你的 HeyGen 密钥，应用首次索取。",
  "**或在**做点什么**里描述**，附上或粘笔记：定必准的事实与措辞。用自家智能体而非应用时，以 `/hyperframes` 开头。",
]);
set(
  "faceless-explainer",
  2,
  "想法如何落地？",
  [
    "有批稿先说：HyperFrames 可重组还是逐字留。",
    "真界面作证用[产品与网站视频](https://hyperframes.heygen.com/guides/product-launch-video.md)；现素材留底用[字幕或设计叠加](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。",
  ],
  {
    bullets: [
      "**吃透一想** —— 问有用的问，一层层揭机制。",
      "**跟流走** —— 留一视觉期，按观众需顺序显每步。",
      "**记三点** —— 想平行、具体、 When 眼即明，便回想。",
      "**故事习得** —— 一案自设敌至通则。",
    ],
  },
);
set("faceless-explainer", 4, "有效提示", [
  "把文粘进信里。一完整讲解已够，场地、镜头、定调皆无。",
  "已验，取自 [示例](https://hyperframes.heygen.com/prompting/examples.md) 页——约 60 秒竖讲解：转 ~60 秒 1080x1920 竖讲解：[粘你的文]。一意一幕，大字、图象、品牌色 #FF5533 上灰黑。TTS 男声，沉稳。嵌入标题，关键词品牌色亮。",
  videos("faceless-explainer", 4)[0] ?? "【保留视频】",
  "*上提示所成。* 记 `~`。供稿即朗度，运行时依口语走，故要“大约一分”而非一分。余骨架见[解剖](https://hyperframes.heygen.com/prompting/overview.md#the-shape-of-a-strong-prompt)。",
]);
set(
  "faceless-explainer",
  6,
  "常见错误",
  [
    "**“60 秒”对“~60 秒”。** 与[发布页](https://hyperframes.heygen.com/guides/product-launch-video.md#prompts-that-work) 同规。此更难，稿即全片。TTS 前不知稿长。",
    "**两想一幕。** 不露面视觉围绕一焦发明，超载无的放矢。",
    "**要抓扒真图。** 无抓取步，视觉自发明。",
    "（[发布](https://hyperframes.heygen.com/guides/product-launch-video.md#prompts-that-work)）**有品牌顾未定外观。** 无品牌可读，智能体自选板。给色即点名。",
  ],
  {
    bullets: [
      "**避免：** `a 60-second explainer from this text: ...`",
      "**改成：** `a ~60-second explainer from this text: ...`",
      "**避免：** `explain all five caching layers in one scene`",
      "**改成：** `one idea per scene — one caching layer at a time`",
      "**避免：** `pull screenshots from the site and explain the feature`",
      "**改成：** 这是网站或产品视频——给它 URL",
      "**避免：** `make it look on-brand`",
      "**改成：** `brand color #FF5533 on off-black`",
    ],
  },
);
{
  const sec = j["faceless-explainer"].sections[6];
  // restore variant video if overwritten? variant has video at index? keep existing paras untouched aside from polished texts (already fine)
}

// ---------- faq polish ----------
for (const sec of j.faq.sections) {
  if (!sec.paras) continue;
  sec.paras = sec.paras.map((p) => {
    if (p && p.startsWith("<video")) return p;
    let x = p;
    x = x.replace(/你的\s+智能体/g, "智能体").replace(/你的智能体/g, "智能体");
    x = x.replace(/对于Claude代码/g, "Claude Code").replace(/Claude代码/g, "Claude Code");
    x = x.replace(/远程视频/g, "Remotion").replace(/远程/g, "Remotion");
    x = x.replace(/向特工提供/g, "丢给智能体").replace(/向智能体提供/g, "丢给智能体");
    x = x.replace(/\[Studio 应用程序\]/g, "【Studio 应用】");
    x = x.replace(/要个免费/g, "要个");
    x = x.replace(/光标/g, "Cursor");
    x = x.replace(/请参阅【选择渲染路径】/g, "见 [选择渲染路径]");
    x = x.replace(
      /在项目文件夹中，打开实时预览： 然后渲染 MP4：/g,
      "在项目文件夹开实时预览，再渲 MP4：",
    );
    x = x.replace(
      /在项目文件夹中运行这些并为代理提供完整的输出：/g,
      "在项目文件夹跑这套，把全输出给智能体：",
    );
    return x;
  });
}

const ts =
  'import type { DocContent } from "./docs";\n\nexport const DOCS_FULL: Record<string, DocContent> = ' +
  JSON.stringify(j, null, 1) +
  ";\n";
fs.writeFileSync("src/data/docs-full.ts", ts, "utf8");
console.log("wrote", ts.length);
console.log(
  "dm secs",
  j["data-maps"].sections.map((s) => s.h + ":" + (s.table ? "T" : "")).join("|"),
);
console.log("faceless", j["faceless-explainer"].sections.map((s) => s.h).join("|"));
