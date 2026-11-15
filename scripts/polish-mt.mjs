import fs from "node:fs";

let s = fs.readFileSync("src/data/docs-full.ts", "utf8");
s = s
  .replace(/^import.*\n/, "")
  .replace("export const DOCS_FULL: Record<string, DocContent> = ", "")
  .replace(/;\s*$/, "")
  .trim()
  .replace(/;$/, "");
const j = JSON.parse(s);

const MT = [
  "avatar",
  "captions",
  "data-maps",
  "design-tools",
  "examples",
  "faceless-explainer",
  "faq",
  "free-agents",
  "general-video",
  "introduction",
  "mcp",
  "motion-graphics",
  "music",
  "plugins",
  "pr-to-video",
  "product-launch",
  "quickstart",
  "remotion-migration",
  "skills",
  "slideshow",
  "vs-remotion",
  "with-claude-code",
  "with-codex",
  "with-cursor",
  "workflows",
];

function fixGlobal(t) {
  if (typeof t !== "string") return t;
  let x = t;
  x = x.replace(/超框架/g, "HyperFrames").replace(/超帧/g, "HyperFrames");
  x = x.replace(/克劳德·科德/g, "Claude Code").replace(/克劳德/g, "Claude");
  x = x.replace(/\[卡片\]/g, "[card]");
  x = x
    .replace(/人工智能代理/g, "智能体")
    .replace(/AI 代理/g, "智能体")
    .replace(/代理人/g, "智能体");
  x = x.replace(/您的/g, "你的").replace(/您/g, "你");
  x = x
    .replace(/徽标刺痛/g, "Logo 亮相")
    .replace(/谈话头/g, "真人出镜")
    .replace(/化身是/g, "数字人是")
    .replace(/化身/g, "数字人");
  x = x.replace(/一个好的套牌/g, "一套好的演示");
  x = x.replace(/赛道应该驱动/g, "音轨应该驱动").replace(/赛道设定/g, "音轨设定");
  return x;
}

// polished ledes (fluent, terminology unified with LLM pages)
const LEDES = {
  avatar:
    "把 HeyGen 数字人放在镜头前朗读脚本，HyperFrames 包裹场景、图表、字幕与音乐，全部仍可编辑。",
  captions:
    "把真人出镜、访谈或播客剪辑交给它，拿到与词同步的字幕、设计过卡片（标题、引言、数字、下三分之一），或去掉长停顿的精简剪辑。",
  "data-maps": "过渡指向数字，动画图表与计数显示数字本身。本页讲图表、计数与地图。",
  "design-tools": "已经有设计——Figma、设计草案或品牌套件？这条规则决定每件作品如何呈现：",
  examples:
    "本页每支视频都用 HyperFrames 制作：发布片、动态图形、讲解、3D、Logo 亮相、现场编码音乐。点开带声观看。",
  "faceless-explainer":
    "从主题、文章或笔记出发。HyperFrames 发明排版、图表、抽象图形与数据可视化，教它讲明白。",
  faq: "人们最常问文档助理的短答，每题都链到含详情的页面。",
  "free-agents": "HyperFrames 本身免费，付费的是写视频的智能体——智能体也可以免费。",
  "general-video": "真正定制时走这条：多来源、可编辑素材、长多场景故事、异格式或紧合作共创。",
  introduction:
    "HyperFrames 是免费开源框架，把 HTML 变成视频：你提需求，智能体建可编辑工程，HyperFrames 播或渲。",
  mcp: "HyperFrames MCP 是受支持 AI 聊天产品的托管连接器，借 HeyGen 账号调用创建与渲染工具，不装本地 CLI。",
  "motion-graphics": "做一支短小、设计主导的动态图形——通常十秒内——靠运动传递信息。",
  music: "从音乐文件或由音频控剪的视频起，不加旁白，音轨是脊柱。",
  plugins:
    "HyperFrames 插件给编码智能体装齐 HyperFrames 技能：发布片、讲解、字幕、动态图形等视频契约与参考，外加 CLI、注册表与媒体技能，需要时加载。",
  "pr-to-video": "给它一个 PR 链接，智能体读改动、提交与作者，讲清改了什么、为何重要。",
  "product-launch":
    "粘贴产品 URL，按真实屏幕、颜色、字体与文案建发布片。HyperFrames 免费，智能体约十分钟建好。",
  quickstart:
    "把一句话变成可编辑视频：Studio 应用起步；已在终端用智能体或本机跑不了应用就走另两种。三种做法做同一种项目。",
  "remotion-migration":
    "把已有 Remotion 项目带进 HyperFrames，再用齐其上全部：品牌、变量、编辑与导出。",
  skills:
    "HyperFrames 技能教编码智能体通用 Web 知识之外的项目格式、动效规则、媒体工作流与验收循环。",
  slideshow: "HyperFrames 演示保持实时：像幻灯片一样点着讲，含显现、分支与演讲者备注，不播视频。",
  "vs-remotion": "两种工具都能从网页做视频：都开真浏览器、逐帧绘制、编码产出，差别在写的内容。",
  "with-claude-code":
    "装 HyperFrames 插件，向 Claude Code 要视频：它在文件夹写 HTML 项目，开实时预览，在本机渲 MP4。",
  "with-codex":
    "装 HyperFrames 技能，向 Codex 要视频：它在文件夹写 HTML 项目，开实时预览，在本机渲 MP4。",
  "with-cursor":
    "在项目里装 HyperFrames 技能，向 Cursor 智能体要视频：它在文件夹写 HTML 项目，开实时预览，在本机渲 MP4。",
  workflows: "选你要从什么出发。每篇指南都给已成品视频、产出它的请求与改法。",
};

for (const k of MT) {
  const v = j[k];
  if (!v) continue;
  if (LEDES[k]) v.lede = fixGlobal(LEDES[k]);
  else v.lede = fixGlobal(v.lede);
  for (const sec of v.sections) {
    sec.h = fixGlobal(sec.h);
    if (sec.paras) sec.paras = sec.paras.map(fixGlobal);
    if (sec.p) sec.p = fixGlobal(sec.p);
    if (sec.bullets) sec.bullets = sec.bullets.map(fixGlobal);
  }
}

// restore workflows full body (was truncated: only 相关主题 kept)
if (j.workflows) {
  j.workflows.sections = [
    {
      h: "本文",
      p: "",
      paras: [
        "按你手里有什么选起点。每篇指南都给已成品视频、产出它的请求，以及改它的办法。",
        "**已经有喜欢的视频？** 走它别另选。在 Studio 的首页打开 Reference，粘贴链接（YouTube/TikTok/Instagram/X）、上传文件或从灵感流挑一个。应用会抄它的剪辑、字幕与特效（或只抄动态图形），问你谁出镜（你本人或 AI 数字人），再让你换掉该属于你的部分。半喜欢的视频也比空白页强。",
        "**还不确定选哪个？** 用自己的话把整支视频描述出来，智能体按所说定类型。跟自己的智能体就以 `/hyperframes` 开头。",
        "来自 Remotion？先看[迁移 Remotion 合成](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)，再按上文走。",
      ],
      codeBlocks: [],
    },
    {
      h: "相关主题",
      p: "",
      paras: ["本文档在 Mintlify 上构建托管。"],
      codeBlocks: [],
      bullets: [
        "[制作任何其他视频](https://hyperframes.heygen.com/guides/general-video.md)",
        "[灵感](https://hyperframes.heygen.com/examples.md)",
        "[30 天 HyperFrames](https://hyperframes.heygen.com/thirty-days.md)",
      ],
    },
  ];
  j.workflows.lede = "选你要从什么出发。每篇指南都给已成品视频、产出它的请求与改法。";
}

const ts =
  'import type { DocContent } from "./docs";\n\nexport const DOCS_FULL: Record<string, DocContent> = ' +
  JSON.stringify(j, null, 1) +
  ";\n";
fs.writeFileSync("src/data/docs-full.ts", ts, "utf8");
console.log("polished MT 25 pages, wrote", ts.length);
