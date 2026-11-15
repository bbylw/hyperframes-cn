import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "vs-remotion": {
    lede: "两种工具都能从网页做视频：都开真浏览器、逐帧绘制、编码产出，差别在写的内容。",
    sections: [
      {
        h: "同一请求，两个代理",
        p: "",
        paras: [
          "同段求问 Claude Code (Opus 5.5) 两度：一供 Remotion 官技，一供 HyperFrames。各跑一回，不重，不改。",
          "为虚构笔记 Inkwell 做 15 秒 1920x1080 发布片（签：“写下来。查找”稍后说”。标显、三短征行、签尾卡。无声。MP4 渲至此夹 `out.mp4`。勿问，自择。",
          "**远程**",
          '<video aria-label="Inkwell, made with Remotion" src="https://static.heygen.ai/hyperframes-oss/docs/films/vs-remotion-v1.mp4" poster="https://hyperframes.heygen.com/public/images/films/vs-remotion-v1.jpg" playsInline preload="metadata" />',
          "**超级框架**",
          '<video aria-label="Inkwell, made with HyperFrames" src="https://static.heygen.ai/hyperframes-oss/docs/films/vs-hyperframes-v1.mp4" poster="https://hyperframes.heygen.com/public/images/films/vs-hyperframes-v1.jpg" playsInline preload="metadata" />',
          "| |远程|HyperFrames |\n| - | - | - |\n|渲染 MP4 的时间到了 | 12 分 30 秒 | 11 分 50 秒 |\n|写了何 | 10 TS 档，1,037 行 | 4 HTML 档，822 行 |\n|带进项 |约 950 MB `node_modules` | 无 |\n|声|无 |自选乐床与五音效 |",
          "双片皆可，一跑不定性。恒差在所留：一 React 续码工，或 HTML 开浏、代改、[Studio 应用](https://hyperframes.heygen.com/studio-app/index.md) 常更。",
        ],
        codeBlocks: [],
        id: "same-request-two-agents",
      },
      {
        h: "相同的标题卡，两种写法",
        p: "",
        paras: [
          "这是同样的三秒钟——一个淡入、保持和淡出的标题——用两种方式写成。这两个版本都没有为了表达观点而进行填充或削弱。",
          "**Remotion。** 件为今帧之函。时数算术，自具帧之。",
          "他档 `Composition` 注册 30fps、1280×720、90 帧。",
          "**HyperFrames。** 标宣何时入屏。GSAP 轴宣何动。同档兼之。",
          "此为除 `<Composition>` 样外全档。三规动其渲：可见槽俱带 `data-hf-id` 与 `data-start`/`data-duration`；轴建**暂**；且以根同 id 注册 `<head>`。缺末得静帧。[HTML 式](https://hyperframes.heygen.com/reference/html-schema.md) 列诸属。",
          "双档明无孰优。Remotion 为可脑推纯函。HyperFrames 为开浏可具检页。",
        ],
        codeBlocks: [
          {
            code: 'import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";\n\nexport const TitleCard = () => {\n  const frame = useCurrentFrame();\n\n  // fade in over frames 0-15, hold to 75, fade out by 90\n  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0], {\n    extrapolateLeft: "clamp",\n    extrapolateRight: "clamp",\n  });\n\n  return (\n    <AbsoluteFill\n      style={{ backgroundColor: "#0a0a0a", justifyContent: "center", alignItems: "center" }}\n    >\n      <div style={{ fontSize: 160, fontWeight: 800, color: "#fff", opacity }}>HELLO</div>\n    </AbsoluteFill>\n  );\n};',
            file: "tsx",
          },
          {
            code: '<style>\n  #stage { position: relative; width: 1280px; height: 720px; overflow: hidden; background: #0a0a0a; }\n  .clip  { position: absolute; inset: 0; display: grid; place-items: center; }\n  #title { font-size: 160px; font-weight: 800; color: #fff; opacity: 0; }\n</style>\n\n<div id="stage" data-composition-id="title-card" data-start="0"\n     data-width="1280" data-height="720" data-duration="3" data-fps="30">\n  <div id="card" class="clip" data-start="0" data-duration="3" data-track-index="0">\n    <div id="title">HELLO</div>\n  </div>\n</div>\n\n<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>\n<script>\n  // same fade, written in seconds instead of frames\n  const tl = gsap.timeline({ paused: true });\n  tl.to("#title", { opacity: 1, duration: 0.5, ease: "none" }, 0);\n  tl.to("#title", { opacity: 1, duration: 2.0, ease: "none" }, 0.5);\n  tl.to("#title", { opacity: 0, duration: 0.5, ease: "none" }, 2.5);\n\n  window.__timelines = window.__timelines || {};\n  window.__timelines["title-card"] = tl;\n</script>',
            file: "html",
          },
        ],
        id: "the-same-title-card-written-both-ways",
      },
      {
        h: "它们实际上不同的地方",
        p: "",
        paras: [
          "| |HyperFrames |远程|\n| - | - | - |\n|你写的是什么| HTML、CSS 和 JavaScript | React 和 TypeScript |\n|动何计时 |渲暂停你动并“Seek”——跳确刻——后捕帧 | 你码读帧号回帧值 |\n|现有网页材料| HTML、CSS 和 GSAP 或 Lottie 动画通常接近原样 |重写为 React 组件 |\n|许可证| [Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) |它有自己的许可证——对个人和最多三人的公司免费，高于此则付费。查看[当前条款](https://www.remotion.pro/license) |",
          "Seek 模有意。HyperFrames 驱画非视钟，故 GSAP、Web 动、Lottie 诸浏运定渲——每回同帧。见[帧配](https://hyperframes.heygen.com/concepts/frame-adapters.md) 与[定渲](https://hyperframes.heygen.com/concepts/determinism.md)。",
          "这两个项目都附带了可视化编辑器，并且都将更改保存回源。 [HyperFrames 浏览器编辑器](https://hyperframes.heygen.com/studio.md) 编辑渲染器捕获的相同 DOM。 Remotion Studio 编辑 React 组合。它们不可互换，也不能取代编辑源代码以进行真正的结构更改。",
          "两者都在 AWS Lambda 上呈现。 HyperFrames 还在 HeyGen 的托管云和 Google Cloud Run 上进行本地渲染 - 请参阅[渲染路径](https://hyperframes.heygen.com/deploy/overview.md)。",
        ],
        codeBlocks: [],
        id: "where-they-actually-differ",
      },
      {
        h: "Remotion 做得更好",
        p: "",
        paras: [
          "直言，今日选要。",
          "Remotion 更老更熟。模板、教程、已解问与产史皆多。Remotion Lambda 尤成文繁；我方新。",
          "队已有 React，Remotion 馈件、设系、图库、型验组输。无译之需。",
          "且其模更易记。纯帧函，无轴注，无约微错。HyperFrames 须守规——轴暂、无挂钟、无种未随——违则悄断。",
        ],
        codeBlocks: [],
        id: "what-remotion-does-better",
      },
      {
        h: "HyperFrames 做得更好的地方",
        p: "",
        paras: [
          "React、构建步、件重写皆免。站、HTML 型、导出设、现浏动近合。",
          "此为代创而造。[技](https://hyperframes.heygen.com/guides/skills.md) 码框规，代作有合非猜，人浏编同档。",
          "Apache 2.0 意味着没有席位数，也没有许可证审查。",
        ],
        codeBlocks: [],
        id: "what-hyperframes-does-better",
      },
      {
        h: "跨区域移动 Remotion 项目",
        p: "",
        paras: [
          "有一条真正的迁移路径，而不是承诺。装技：令代移合。它把 data-start/duration 映射轴缓，把 data-track-index 映剪，帧入秒。",
          "难例正技之的。其拒不合者：`useState`/`useEffect` 机、异步元、他家件 UI 皆标，不默错译。自亦评己——渲双版逐帧较，弃者皆录。",
          "迁移是因为你的源材料或你的团队更适合这一侧。并不是因为某个框架看起来较新。",
        ],
        codeBlocks: [
          {
            code: "npx skills add heygen-com/hyperframes --skill remotion-to-hyperframes",
            file: "bash",
          },
        ],
        id: "moving-a-remotion-project-across",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
          "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
          "[安装HyperFrames插件](https://hyperframes.heygen.com/guides/plugins.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "remotion-migration": {
    lede: "把已有 Remotion 项目带进 HyperFrames，再用齐其上全部：品牌、变量、编辑与导出。",
    sections: [
      {
        h: "这使得什么",
        p: "",
        paras: [
          "非自创新片——**翻译**。[Remotion→HyperFrames](https://hyperframes.heygen.com/prompting/overview) 技能读现有 Remotion (React) 源，改写为 HyperFrames HTML：同帧、同序、同视，GSAP 驱，不为 React 帧回。",
          "这是迁移，而不是创建工作流程。它仅在明确要求移植、转换、迁移或翻译 **Remotion** 源时触发。有两件事看起来很相似，但事实并非如此： 方向是单向的。没有导出回 Remotion 或任何其他框架。",
        ],
        codeBlocks: [],
        bullets: [
          "“制作类似我的 Remotion 视频的内​​容”，无需迁移实际源 → 使用 [C0 ](https://hyperframes.heygen.com/prompting/overview#one-time-setup) 进行全新构建。",
          "非 Remotion 源（After Effects、Framer Motion、普通 React/CSS）→ 没有要翻译的 Remotion 源；而是在本机重新创建它。",
        ],
        id: "what-this-makes",
      },
      {
        h: "基本提示",
        p: "",
        paras: [
          "`/remotion-to-hyperframes` 把 Remotion 根（`src/HeroReveal.tsx`）合成移来。时长、帧、尺寸同。不清处落字 `TRANSLATION_NOTES.md`。",
          "一项目多合成，必点确档（非“我的 Remotion”）——言何者。",
        ],
        codeBlocks: [],
        id: "base-prompt",
      },
      {
        h: "什么无法翻译——以及为什么这是正确的",
        p: "",
        paras: [
          "技能先侦源，碰 HyperFrames 搜索驱模型不可定表之式即**拒**不近似：源触碍，望智能体止而释互操，不硬推——正为，不败。勿令“近似”越碍；所重验量准译，非尽猜。",
        ],
        codeBlocks: [],
        bullets: [
          "**状态驱画** —— `useState`/`useEffect`/`useReducer` 真依。HyperFrames 逐帧Seek，须同像素；忆史机不保。此技能建议运行时互操，非“看似对”错译。",
          "**第三方 React UI 套件** — MUI、Chakra、Mantine、antd、shadcn、Radix、NextUI。没有等效的 HTML/CSS/GSAP 可以将它们翻译成。",
          "**C0 部署配置** — 不是拦截器。它已被删除（部署配置，而不是动画），并且合成的其余部分仍然可以翻译。",
        ],
        id: "what-wont-translate-and-why-thats-correct",
      },
      {
        h: "验证不是可选的",
        p: "",
        paras: [
          "每译皆以渲帧 SSIM 较 Remotion 原，非目验。重移须明要验：渲双版报 SSIM 差。",
          "预览“对”的译或量远低验基——此技能正为揪此差。",
        ],
        codeBlocks: [],
        id: "validation-is-not-optional",
      },
      {
        h: "重要的旋钮",
        p: "",
        paras: [
          "|旋钮|说什么 |为什么这很重要 |\n| - | - | - |\n| **确源档** | “`<Composition>` 下合成” | 一项目多 `Composition`，言要者 |\n| **保持准确的时间** | “保持相同的持续时间、fps 和尺寸”|默认；无论如何都要说明，这样代理就不会舍入或调整大小 |\n| **缺口文档** | “不清译处落 `TRANSLATION_NOTES.md`” | 近字、淡音替、代演示皆录，不默吸 |\n| **验证** | “报告 SSIM 与原始版本的差异”|使保真度检查成为可交付成果的一部分，而不是可选的事后想法 |",
        ],
        codeBlocks: [],
        id: "the-knobs-that-matter",
      },
      {
        h: "常见故障模式",
        p: "",
        paras: [
          "**要 Remotion 灵感之自创新建。** 无真 Remotion 源即非技能——常建。",
          "**令其越 lint 墙。** `useEffect` 驱非“尽译”之例——异问（运行时互操），硬译生似帧错。",
          "**重口跳验。** 唯目验，漏仅 SSIM 显之时缓漂。",
        ],
        codeBlocks: [],
        bullets: [
          "**避免：** `useLayoutEffect`",
          "**相反：** `make an intro like this: [description]` — 无远程源，无迁移",
          "**避免：** `@remotion/lambda`",
          "**相反：** 令智能体荐互操式，再定合否",
          "**避免：** *（没有验证请求 - 接受“看起来正确”）*",
          "**相反：** `report SSIM against the original`",
        ],
        id: "common-failure-modes",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)",
          "[HyperFrames 与 Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)",
          "[安装HyperFrames插件](https://hyperframes.heygen.com/guides/plugins.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
