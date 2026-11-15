import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "concepts-compositions": {
    lede: "组合是一个描述视频的 HTML 文件。你编写元素，给它们 `data-*` 计时属性，框架把它们变为帧。",
    sections: [
      {
        h: "HTML 文件如何变为帧",
        p: "",
        paras: [
          "这是整个视频：一个 logo，然后一个视频片段。",
          '两条规则使之成立。外层元素需要 `data-composition-id`，且每个计时元素需要 `class="clip"`，运行时才能在它自己的时间窗口之外隐藏它。',
          "片段合计五秒。以 30 帧/秒（默认）计，即 150 帧，编号 0 到 149： 渲染期间没有任何内容实时播放。渲染器依次索取第 0 帧、第 1 帧，每次回答都是一张静态画面。这正是使[渲染确定性](https://hyperframes.heygen.com/concepts/determinism.md)成立的原因。",
        ],
        codeBlocks: [
          {
            code: '<div id="root" data-composition-id="root"\n     data-start="0" data-width="1920" data-height="1080">\n  <img class="clip" src="assets/logo.png"\n       data-start="0" data-duration="2" data-track-index="0" />\n  <video class="clip" src="assets/video.mp4"\n         data-start="2" data-duration="3" data-track-index="0"></video>\n</div>',
            file: "html",
          },
          {
            code: 'flowchart TD\n    A["index.html<br/>img: start 0, duration 2<br/>video: start 2, duration 3"]\n    A --> B["One timeline, 5 seconds<br/>30 fps = 150 frames"]\n    B --> C["frames 0-59<br/>image on screen"]\n    B --> D["frames 60-149<br/>video on screen, playing<br/>from its own second 0"]',
            file: "mermaid",
          },
        ],
        id: "how-an-html-file-becomes-frames",
      },
      {
        h: "时间轴上可以放什么",
        p: "",
        paras: [
          "片段是指带计时属性的任何元素： [数据属性](https://hyperframes.heygen.com/concepts/data-attributes.md)页面列出每个计时属性。[HTML schema](https://hyperframes.heygen.com/reference/html-schema.md)有完整契约。",
        ],
        codeBlocks: [],
        bullets: [
          "`<video>`——视频片段、B-roll、A-roll",
          "`<img>`——静帧和覆盖层",
          "`<audio>`——音乐和音效",
          '`<div data-composition-id="...">`——嵌套在本组合中的另一个组合',
        ],
        id: "what-can-go-on-the-timeline",
      },
      {
        h: "把一个组合放到另一个组合中",
        p: "",
        paras: [
          "你可以指向独立文件，或把嵌套组合内联编写。想复用时使用独立文件。",
          "[tab] 外部文件",
          "`data-composition-src` 命名该文件。框架拉取它，从其 `<template>` 标签中取出内容，挂载它，运行其脚本，并注册其时间轴。",
          "路径从**项目根**解析，而不是从引用文件解析。因此一层深的嵌套组合仍写 `compositions/foo.html`，从不写 `../compositions/foo.html`。",
          '```html\n<div\n  id="el-5"\n  data-composition-id="intro-anim"\n  data-composition-src="compositions/intro-anim.html"\n  data-start="0"\n  data-duration="4"\n  data-playback-start="0"\n  data-track-index="3"\n></div>\n```',
          "它指向的文件（`compositions/intro-anim.html`）把所有内容包在 `<template>` 中：",
          '```html\n<template id="intro-anim-template">\n  <div data-composition-id="intro-anim" data-width="1920" data-height="1080">\n    <div class="title">Welcome!</div>\n    <style>\n      [data-composition-id="intro-anim"] .title {\n        font-size: 72px; color: white; text-align: center;\n      }\n    </style>\n    <script>\n      const tl = gsap.timeline({ paused: true });\n      tl.from(".title", { opacity: 0, y: -50, duration: 1 });\n      window.__timelines["intro-anim"] = tl;\n    </script>\n  </div>\n</template>\n```',
          "`<template>` 前允许前导 HTML 注释。用 `render -c compositions/intro-anim.html` 或 `keyframes compositions/intro-anim.html --shot scene.png` 定向该场景，会复用它在 `index.html` 中的挂载，包括项目的库脚本。",
          "`data-playback-start` 选择子时间轴的哪个时刻先显示。默认 `0`。从左侧修剪或拆分会按所经过时间乘以 `data-playback-rate` 推进该偏移，使嵌套动画继续往前而不是跳回开头。",
          '子文件内的计时相对于该组合局部。若宿主从 `10` 开始，子视频从 `2` 开始，视频在根时间轴上从 `12` 开始。旧项目若在根时间中编写媒体开始，可用 `data-hf-media-start-basis="global"` 显式保留；新组合应使用局部计时。',
          "[tab] 内联",
          "把嵌套组合直接写进父级。仅使用一次时更简单。",
          '```html\n<div id="root" data-composition-id="root"\n     data-start="0" data-width="1920" data-height="1080">\n  <!-- Inline nested composition -->\n  <div id="el-5" data-composition-id="intro-anim"\n       data-start="0" data-track-index="3"\n       data-width="1920" data-height="1080">\n    <div class="title">Welcome!</div>\n  </div>\n  <script>\n    // Timeline for the inline composition\n    const introTl = gsap.timeline({ paused: true });\n    introTl.from(".title", { opacity: 0, y: -50, duration: 1 });\n    window.__timelines["intro-anim"] = introTl;\n  </script>\n</div>\n```',
          "这里没有 `<template>` 标签和 `data-composition-src`。",
        ],
        codeBlocks: [],
        id: "put-one-composition-inside-another",
      },
      {
        h: "文件放在哪里",
        p: "",
        paras: [
          "**project** **index.html** **compositions** **intro-anim.html** **caption-overlay.html** **outro-title.html** **assets**",
          "**video.mp4** **music.mp3** **logo.png**",
        ],
        codeBlocks: [],
        id: "where-the-files-live",
      },
      {
        h: "HTML 定时，脚本做运动",
        p: "",
        paras: [
          "你的 HTML 通过[数据属性](https://hyperframes.heygen.com/concepts/data-attributes.md)说明播什么、何时播、在哪一轨；脚本处理创意部分：效果、过渡、canvas、SVG、[GSAP](https://hyperframes.heygen.com/guides/gsap-animation.md)动画。",
          "[!WARNING] 切勿用脚本播放、暂停或寻址媒体元素，也切勿用脚本按时间显示或隐藏片段。框架已根据数据属性完成这些事，脚本再做会与框架冲突。请见[常见错误](https://hyperframes.heygen.com/help.md)查看那是什么样子。",
        ],
        codeBlocks: [],
        id: "html-sets-the-timing-scripts-do-the-motion",
      },
      {
        h: "用不同内容复用同一个组合",
        p: "",
        paras: [
          '一个源文件可出现在同一视频的多个位置，每份副本携带各自的文本和颜色。HyperFrames 不会替你把 `data-var-*` 属性接线到 DOM 或 CSS——你按三步完成： 第二张卡的 `data-start="card-pro"` 意思是“它结束时开始”。',
          "两张卡共享的源文件是： [变量](https://hyperframes.heygen.com/concepts/variables.md)涵盖类型、无需脚本的绑定、CLI 覆盖，以及哪个值胜出。若你在 `@hyperframes/core` 上构建工具，`extractCompositionMetadata()` 读取同样的 `data-composition-variables` 数组——浏览器编辑器正是这样构建编辑 UI 的。",
        ],
        codeBlocks: [
          {
            code: '<div\n  data-composition-id="card-pro"\n  data-composition-src="compositions/card.html"\n  data-start="0"\n  data-duration="3"\n  data-track-index="1"\n  data-variable-values=\'{"title":"Pro","color":"#ff4d4f"}\'\n></div>\n<div\n  data-composition-id="card-enterprise"\n  data-composition-src="compositions/card.html"\n  data-start="card-pro"\n  data-duration="3"\n  data-track-index="1"\n  data-variable-values=\'{"title":"Enterprise","color":"#22c55e"}\'\n></div>',
            file: "html",
          },
          {
            code: '<html data-composition-variables=\'[\n  {"id":"title","type":"string","label":"Title","default":"Fallback"},\n  {"id":"color","type":"color","label":"Color","default":"#111827"}\n]\'>\n  <body>\n    <div data-composition-id="card" data-width="1920" data-height="1080">\n      <h1 class="title"></h1>\n\n      <style>\n        [data-composition-id="card"] .title { color: var(--card-color, #111827); }\n      </style>\n\n      <script>\n        const { title, color } = __hyperframes.getVariables();\n        const root = document.querySelector(\'[data-composition-id="card"]\');\n        root.querySelector(".title").textContent = title;\n        root.style.setProperty("--card-color", color);\n      </script>\n    </div>\n  </body>\n</html>',
            file: "html",
          },
        ],
        bullets: [
          "在子组合根上用 `data-composition-variables` 声明每个变量——id、类型、默认值。该根在完整文档组合中是 `<html>` 元素，在模板或片段中是 `[data-composition-id]` 元素。",
          "在每个副本的宿主元素上用 `data-variable-values` 传入该副本的值。",
          "在组合内用 `window.__hyperframes.getVariables()` 读取，把宿主的值叠到已声明默认值上，一次一份。",
        ],
        id: "reuse-one-composition-with-different-content",
      },
      {
        h: "从脚本加载组合自身的同级文件",
        p: "",
        paras: [
          '当组合被挂载时，指向同级文件的 `src` 或 `href` 属性会被重写到该文件所在处，因此 `<img src="assets/logo.png">` 仍然可用。脚本拼接的路径只是普通字符串，永不重写，请用 `window.__hyperframes.assetUrl()` 解析。它接收相对组合自身文件编写的路径，返回页面可加载的 URL，无论文件是挂载、预览还是独立打开。',
          "意在项目根的路径，如组合位于 `compositions/intro.html`、图像在项目自身 `assets/` 目录中的 `assets/logo.png`，已经从页面解析。请保留为普通字符串：`assetUrl()` 会在组合旁边找它而错过。",
          '独立脚本文件（`<script src="...">`）没有可相对解析的自身组合。请在组合的内联脚本中解析 URL 并移交，例如挂到文件读取的全局对象上。',
        ],
        codeBlocks: [
          {
            code: '<div data-composition-id="globe" data-width="1920" data-height="1080">\n  <script>\n    const texture = new THREE.TextureLoader().load(\n      __hyperframes.assetUrl("assets/earth.jpg"),\n    );\n  </script>\n</div>',
            file: "html",
          },
        ],
        id: "load-a-compositions-own-files-from-its-script",
      },
      {
        h: "查看项目中的每个组合",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "npx hyperframes compositions",
            file: "bash",
          },
        ],
        id: "see-every-composition-in-a-project",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
          "[openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md)",
          "[用 SDK 编辑组合](https://hyperframes.heygen.com/sdk/quickstart.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "concepts-variables": {
    lede: "在不破坏布局的前提下暴露可自定义的内容与选项，让客户名称、配色、媒体资产等均可灵活替换。",
    sections: [
      {
        h: "在浏览器编辑器中使用变量",
        p: "",
        paras: [
          "浏览器编辑器可以创建和绑定变量、预览覆盖集，并把已审阅的值复制到渲染命令中。完整流程请见[使用变量和模板](https://hyperframes.heygen.com/studio/assets-and-blocks.md#use-variables)。",
        ],
        codeBlocks: [],
        id: "use-variables-in-the-browser-editor",
      },
      {
        h: "高级：声明已批准的输入",
        p: "",
        paras: ["变量位于组合声明上："],
        codeBlocks: [
          {
            code: '<html\n  data-composition-variables=\'[\n  {"id":"title","type":"string","label":"Title","default":"Pro"},\n  {"id":"accent","type":"color","label":"Accent color","default":"#6c5ce7"},\n  {"id":"logo","type":"string","label":"Logo","default":"assets/logo.svg"}\n]\'\n></html>',
            file: "html",
          },
        ],
        id: "advanced-declare-the-approved-inputs",
      },
      {
        h: "变量可是什么",
        p: "",
        paras: [
          "变量有七种 kind。kind 决定浏览器编辑器显示的控件，以及渲染为之接受的内容。",
          "| Kind | 存放内容 | 示例 |\n| - | - | - |\n| `string` | 文本，或到文件的链接 | 客户名、视频链接 |\n| `number` | 数量、位置、大小或强度 | 套餐席位、速度 |\n| `color` | 一个已批准颜色 | 品牌点缀 |\n| `boolean` | 开或关 | 显示徽章 |\n| `enum` | 你已批准列表中的一个值 | `light` 或 `dark` |\n| `font` | 字体族 | 标题字面 |\n| `image` | 到图片的链接 | 客户 logo |",
          "视频和声音没有自有的 kind。请把链接声明为 `string`，然后绑定到 `<video>` 或 `<audio>` 元素，如[替换视频或声音](#swap-in-a-video-or-a-sound)。",
        ],
        codeBlocks: [],
        id: "what-can-be-a-variable",
      },
      {
        h: "说明槽位含义，而不是位置",
        p: "",
        paras: [
          "`label` 和 `description` 由人和智能体读取。只给位置的描述（“每条横幅角落的小字署名”）会把槽位含义留给猜测；给出含义的描述（“本视频推广的品牌名称”）则无需打开 HTML 即可正确填充。",
          "对于会针对他人品牌改版的模板，请加 `portrays`——列出槽位代表什么的可选元数据，渲染忽略它，告诉编辑智能体哪些槽位承载身份、不得填入编造的文案：",
          "| 值 | 槽位代表 |\n| - | - |\n| `subject_name` | 被推广品牌自身的名称 |\n| `subject_domain` | 其域名、URL 或 handle |\n| `subject_tagline` | 其自身的定位语 |\n| `subject_logo` | 其标志或字标 |\n| `recommended_position` | 排行中的胜出或主推槽位，被推广品牌应放在那里 |\n| `competitor_name` | 与被推广品牌不同的真实产品 |\n| `authority_badge` | 代言、排行权威、评分或来源的主张 |\n| `host_identity` | 所描绘应用自身的身份，改版时保留不变 |",
          "`portrays` 与 `role` 正交：`role` 说明旋钮影响组合的哪个方面（`content`、`style`、`timing`、`motion`、`layout`），而 `portrays` 说明值对观众的含义。",
        ],
        codeBlocks: [
          {
            code: '{"id":"appName","type":"string","label":"App name",\n "description":"Name of the brand this video promotes, credited in the corner of every banner.",\n "portrays":["subject_name"],"default":"HyperFrames"}',
            file: "html",
          },
        ],
        id: "say-what-a-slot-means-not-where-it-sits",
      },
      {
        h: "无脚本绑定常见值",
        p: "",
        paras: [
          "常见情况使用直接绑定： 仅当结果需要条件、循环或派生值时才使用 `window.__hyperframes.getVariables()`：",
        ],
        codeBlocks: [
          {
            code: '<h1 data-var-text="title">Pro</h1>\n\n<img data-var-src="logo" src="assets/logo.svg" alt="" />\n\n<style>\n  .card-title {\n    color: var(--accent);\n  }\n</style>',
            file: "html",
          },
          {
            code: 'const { featured = false } = window.__hyperframes.getVariables();\ndocument.querySelector(".badge").hidden = !featured;',
            file: "js",
          },
        ],
        bullets: [
          "`data-var-text` 替换元素自身的文本。",
          "`data-var-src` 替换图像、视频、音频或 source URL。",
          "标量变量可用作 CSS 自定义属性，如 `var(--accent)`。",
        ],
        id: "bind-common-values-without-a-script",
      },
      {
        h: "替换视频或声音",
        p: "",
        paras: [
          "用 `data-var-src` 把链接绑定到媒体元素。在元素上保留 `src` 作为占位： 按账户渲染同一已保存项目一次，每次传入该账户的片段： 成片按你传入片段的长度和声音，而不是占位的。3 秒占位换成 5 秒片段会渲染 5 秒，且该片段的声音只混合一次。",
          "限制：",
        ],
        codeBlocks: [
          {
            code: '<html\n  data-composition-variables=\'[\n  {"id":"welcomeClip","type":"string","label":"Welcome clip","default":"assets/placeholder.mp4"}\n]\'\n>\n  <video\n    data-var-src="welcomeClip"\n    src="assets/placeholder.mp4"\n    data-start="0"\n    data-track-index="0"\n    playsinline\n  ></video>\n</html>',
            file: "html",
          },
          {
            code: 'npx hyperframes render \\\n  --variables \'{"welcomeClip":"https://example.com/clips/northstar.mp4"}\' \\\n  --output northstar.mp4',
            file: "bash",
          },
        ],
        bullets: [
          "`data-var-src` 适用于 `<video>`、`<audio>`、`<img>` 和 `<source>`。在其他元素上被忽略。",
          "链接必须是路径或 `http`、`https` 或 `blob` URL。其他任何值，包括 `data:` 视频，都会被丢弃而渲染占位，并发出警告。",
          "接收自有 `data-variable-values` 的嵌套组合内片段，在渲染期间由浏览器解析，而不是之前。",
          "根组合的长度跟随其播放的片段。它不是变量。",
        ],
        id: "swap-in-a-video-or-a-sound",
      },
      {
        h: "给每个嵌套组合不同值",
        p: "",
        paras: ["父级可多次复用同一组合： 两个实例保持相同源，接收不同内容。"],
        codeBlocks: [
          {
            code: '<div\n  data-composition-id="card-pro"\n  data-composition-src="compositions/card.html"\n  data-start="0"\n  data-duration="3"\n  data-track-index="1"\ndata-variable-values=\'{"title":"Pro","accent":"#ff4d4f"}\'\n></div>\n\n<div\n  data-composition-id="card-enterprise"\n  data-composition-src="compositions/card.html"\n  data-start="card-pro"\n  data-duration="3"\n  data-track-index="1"\ndata-variable-values=\'{"title":"Enterprise","accent":"#22c55e"}\'\n></div>',
            file: "html",
          },
        ],
        id: "give-each-nested-composition-different-values",
      },
      {
        h: "高级：从数据渲染版本",
        p: "",
        paras: [
          "从 CLI 覆盖顶层值： 对 JSON 文件使用 `--variables-file`，当同一组合必须按数据行渲染多次时使用 `--batch`。[CLI 参考](https://hyperframes.heygen.com/packages/cli.md)涵盖批量输出、校验和自动化。",
        ],
        codeBlocks: [
          {
            code: 'npx hyperframes render \\\n  --variables \'{"title":"Enterprise","accent":"#22c55e"}\' \\\n  --strict-variables \\\n  --output enterprise.mp4',
            file: "bash",
          },
        ],
        id: "advanced-render-a-version-from-data",
      },
      {
        h: "批量渲染",
        p: "",
        paras: [
          "在 JSON 数组中每行放一个变量对象，然后用行中的占位符命名每个输出。批量文件可用 UTF-8（带或不带 BOM），或带 BOM 的 UTF-16LE。",
          '每个输出仍留在第一个占位符之前写入的文件夹内（此处为 `renders/`）。行值可命名其子文件夹，但引向外部的值，如 `../other`，会在渲染任何内容前停止批量。模板以占位符开头，如 `--output "{path}"`，则不命名文件夹，每行值整体用作输出路径，包括绝对路径。',
          "从默认单行并发开始。仅当一次真实渲染稳定且机器有足够内存同时运行多次渲染后，才提高 `--batch-concurrency`。",
        ],
        codeBlocks: [
          {
            code: '[\n  { "name": "acme", "title": "Acme Pro" },\n  { "name": "northstar", "title": "Northstar Pro" }\n]',
            file: "json",
          },
          {
            code: 'npx hyperframes render \\\n  --batch rows.json \\\n  --strict-variables \\\n  --output "renders/{name}.mp4"',
            file: "bash",
          },
        ],
        id: "batch-renders",
      },
      {
        h: "变量不能是什么",
        p: "",
        paras: [
          "变量更改组合内的内容。它们不会更改： 这些选择在组合逻辑运行前从源或渲染设置读取。",
        ],
        codeBlocks: [],
        bullets: [
          "组合视口；",
          "根组合的总渲染时长；",
          "帧率；",
          "输出格式、编码或质量；",
          "未显式传入值的父级或兄弟组合。",
        ],
        id: "what-cant-be-a-variable",
      },
      {
        h: "检查契约",
        p: "",
        paras: [
          "运行： linter 捕获格式错误的声明、缺失字段、错误的默认值类型和无效的枚举选择。`--strict-variables` 把未声明或类型错误的渲染值转为错误。",
          "继续阅读[组合](https://hyperframes.heygen.com/concepts/compositions.md)了解嵌套，或阅读[HTML schema](https://hyperframes.heygen.com/reference/html-schema.md)了解完整属性契约。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint",
            file: "bash",
          },
        ],
        id: "check-the-contract",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts/index.md)",
          "[组合](https://hyperframes.heygen.com/concepts/compositions.md)",
          "[字幕、素材和变量](https://hyperframes.heygen.com/studio/assets-and-blocks.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "concepts-data": {
    lede: "通过 HTML 属性直接在 HyperFrames 时间线上放置与编排片段，无需把时序逻辑写进 JavaScript。",
    sections: [
      {
        h: "轨道不是图层",
        p: "",
        paras: [
          "轨道是浏览器编辑器绘制的行。它们不决定哪个元素在前面，也不负责调度任何内容。请使用 CSS `z-index` 来决定绘制顺序。",
          "同一轨道上的两个剪辑可以重叠；渲染时会合成两者。分别使用不同轨道可以让刻意的重叠（例如交叉淡入淡出）在浏览器编辑器中更易读：",
        ],
        codeBlocks: [
          {
            code: '<video\n  id="intro"\n  data-start="0"\n  data-duration="4"\n  data-track-index="0"\n  src="./intro.mp4"\n  muted\n  playsinline\n></video>\n<section id="result" class="clip" data-start="intro - 0.5" data-duration="3" data-track-index="1">\n  The result\n</section>',
            file: "html",
          },
        ],
        id: "tracks-are-not-layers",
      },
      {
        h: "将负图层保留在父级内部",
        p: "",
        paras: [
          "负的 `z-index` 是有效的 CSS，但当父级没有创建层叠上下文时，它可能把剪辑放到不透明祖先背景之后。例如，这个背景可能会被 root 的背景遮住： 添加一个属性，让背景位于父级背景之上、前景兄弟之下： `isolation: isolate` 会创建局部层叠上下文。背景将在浏览器、`snapshot` 和 `render` 中可见；`z-index: 0` 或更高的兄弟元素仍可以覆盖它。你也可以使用更早的背景兄弟元素，并将前景元素提升为非负的 `z-index` 值。",
          "`hyperframes lint` 会根据 CSS 文本将 `negative_z_index` 报告为警告。当祖先已经创建层叠上下文时它仍可能发出警告，因此请验证可见结果，而不是把每个负值都视为无效。",
        ],
        codeBlocks: [
          {
            code: "#root {\n  position: relative;\n  background: #0a0a0a;\n}\n#backdrop {\n  position: absolute;\n  inset: 0;\n  background: #f5e6c8;\n  z-index: -1;\n}",
            file: "css",
          },
          {
            code: "#root {\n  isolation: isolate;\n}",
            file: "css",
          },
        ],
        id: "keep-negative-layers-inside-their-parent",
      },
      {
        h: "相对于另一个剪辑开始",
        p: "",
        paras: [
          "数值型 `data-start` 是以秒为单位的绝对时间。剪辑 ID 表示“在该剪辑结束时开始”。增减秒数可以实现间隔或重叠： 引用只在同一合成内部解析。被引用的剪辑必须有已知时长，且引用链不能含有循环。",
        ],
        codeBlocks: [
          {
            code: 'data-start="intro" data-start="intro + 0.5" data-start="intro - 0.5"',
            file: "html",
          },
        ],
        id: "start-relative-to-another-clip",
      },
      {
        h: "媒体与嵌套合成",
        p: "",
        paras: [
          "媒体还可以声明源偏移、播放速率和音量。嵌套合成会增加源路径和自己的固定时间线窗口。这些都是精确的约定，而非新的时序模型。",
          "所有受支持的属性和元素特有的规则，请使用 [HTML 模式参考](https://hyperframes.heygen.com/reference/html-schema.md)。何时应将场景改为独立合成，请参阅 [合成](https://hyperframes.heygen.com/concepts/compositions.md)。",
        ],
        codeBlocks: [],
        id: "media-and-nested-compositions",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[合成](https://hyperframes.heygen.com/sdk/reference/composition.md)",
          "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
          "[使用 data-vfx-chain 的逐像素特效](https://hyperframes.heygen.com/guides/vfx-chain.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-gsap": {
    lede: "GSAP 是 HyperFrames 合成的首选动画运行时。你负责编写运动；HyperFrames 负责控制播放头。",
    sections: [
      {
        h: "最小约定",
        p: "",
        paras: [
          "为合成指定有限时长，创建暂停时间线，并将其注册在合成 ID 之下： 注册键必须与 `data-composition-id` 相匹配。",
        ],
        codeBlocks: [
          {
            code: '<!doctype html>\n<html lang="en">\n  <head>\n    <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>\n  </head>\n  <body>\n    <div\n      id="root"\n      data-composition-id="intro"\n      data-start="0"\n      data-duration="3"\n      data-width="1920"\n      data-height="1080"\n    >\n      <h1 id="title" class="clip" data-start="0" data-duration="3" data-track-index="0">\n        HyperFrames\n      </h1>\n    </div>\n\n    <script>\n      const timeline = gsap.timeline({ paused: true });\n\n      timeline.fromTo(\n        "#title",\n        { opacity: 0, y: 32 },\n        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },\n        0,\n      );\n\n      window.__timelines = window.__timelines || {};\n      window.__timelines.intro = timeline;\n    </script>\n  </body>\n</html>',
            file: "html",
          },
        ],
        id: "minimal-contract",
      },
      {
        h: "重要的规则",
        p: "",
        paras: [
          "常规的时间线方法是 `to()`、`from()`、`fromTo()` 和 `set()`。GSAP 支持许多 CSS 属性，但 [HyperFrames 动画技能](https://github.com/heygen-com/hyperframes/tree/main/skills/hyperframes/animation) 中包含 agent 使用的渲染安全模式。",
        ],
        codeBlocks: [],
        bullets: [
          "用 `{ paused: true }` 创建时间线。",
          "将其注册到 `window.__timelines`。",
          "为重要的补间指定显式位置。",
          "当两端都重要时优先使用 `fromTo()`；它在向后或随机定位后仍保持可靠。",
          "用变换和透明度实现运动。避免反复动画 `top`、`left`、`width` 或 `height` 等布局属性。",
          "让 HyperFrames 控制剪辑可见性和媒体播放。",
        ],
        id: "rules-that-matter",
      },
      {
        h: "测量文字前先加载字体",
        p: "",
        paras: [
          "根据文字宽度计算的下划线或位置需要最终的字体度量。HyperFrames 会在开始合成脚本之前等待现有标记使用的字体，但仅由脚本创建的文字使用的字重仍可能未加载。",
          "请在测量前用 `document.fonts.load()` 请求该字重。匹配文字的字体族、字重和字号，并传入文字以便浏览器加载所需的字符范围。`document.fonts.ready` 等待的是已经请求的字体；它不会请求未使用过的字重。",
          '此示例使用 `intro` 合成，内联块 `#title` 使用本地 `@font-face` 的 `font: 700 64px "LocalFace"` 样式，以及块级 `#underline`： 下划线现在与加载后的文字宽度匹配。请在回调末尾注册时间线之前构建所有补间。在异步构建完成之前注册空时间线，可能导致嵌套合成在其动画存在之前就显示为就绪。',
        ],
        codeBlocks: [
          {
            code: 'const title = document.getElementById("title");\nconst underline = document.getElementById("underline");\ntitle.textContent = "Build with HyperFrames";\n\ndocument.fonts.load(\'700 64px "LocalFace"\', title.textContent).then(() => {\n  underline.style.width = `${title.getBoundingClientRect().width}px`;\n\n  const timeline = gsap.timeline({ paused: true });\n  timeline.fromTo(\n    ["#title", "#underline"],\n    { opacity: 0, y: 32 },\n    { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },\n    0,\n  );\n\n  window.__timelines = window.__timelines || {};\n  window.__timelines.intro = timeline;\n});',
            file: "js",
          },
        ],
        id: "load-fonts-before-measuring-text",
      },
      {
        h: "时长",
        p: "",
        paras: [
          "显式的 root `data-duration` 即合成的渲染长度： 这是完整合成最清晰的选择。如果 root 未指定 `data-duration`，HyperFrames 可以在页面初始化后根据已注册时间线和受支持媒体推断长度。",
          "不要假定较长的源视频会自动延长较短的显式 root 时长。作者指定的时长即输出窗口。",
        ],
        codeBlocks: [
          {
            code: '<div data-composition-id="demo" data-duration="12"></div>',
            file: "html",
          },
        ],
        id: "duration",
      },
      {
        h: "媒体属于运行时",
        p: "",
        paras: [
          "不要从 GSAP 时间线播放或定位媒体： 请改用媒体时序属性。如果视频需要移动或调整大小，请动画包裹视频的容器，而非视频元素本身。",
        ],
        codeBlocks: [
          {
            code: '// Do not do this.\ndocument.querySelector("video").play();\ndocument.querySelector("audio").currentTime = 5;',
            file: "js",
          },
        ],
        id: "media-belongs-to-the-runtime",
      },
      {
        h: "嵌套合成",
        p: "",
        paras: [
          "每个嵌套合成拥有并注册自己的时间线。父级通过其宿主元素决定嵌套场景何时出现： 不要手动将子时间线添加到父级的 GSAP 时间线。HyperFrames 会将父级播放头映射到嵌套场景。",
        ],
        codeBlocks: [
          {
            code: '<div\n  data-composition-id="intro"\n  data-composition-src="compositions/intro.html"\n  data-start="2"\n  data-duration="4"\n></div>',
            file: "html",
          },
        ],
        id: "nested-compositions",
      },
      {
        h: "验证运动",
        p: "",
        paras: [
          "检查首帧、运动中状态和末尾状态。仅在浏览器连续播放时看起来正确的时间线，在渲染器直接定位到某一帧时仍可能失效。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint\nnpx hyperframes check\nnpx hyperframes snapshot --at 0,0.6,2.9",
            file: "bash",
          },
        ],
        id: "verify-the-motion",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
          "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-frame-sources": {
    lede: "HyperFrames 可以驱动无需转换为 GSAP、直接暴露时间函数的场景代码。在运行时初始化完成之前，使用 `window.__hyperframes.registerFrameSource` 将该函数注册到一个定时宿主上。",
    sections: [
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[从 Remotion 迁移到 HyperFrames](https://hyperframes.heygen.com/prompting/remotion-migration.md)",
          "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
          "[HyperFrames 项目的工作原理](https://hyperframes.heygen.com/concepts/index.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-imported-film": {
    lede: "运行时支持当前 Claude Motion HTML 导出使用的 `appifact-film:` 消息协议。请完整保留原始 `film-runner` HTML 和场景模块。MCP 导入器会将其与 HyperFrames 封装一起打包；HyperFrames 控制时间，并使用其现有渲染器捕获得到的像素。",
    sections: [
      {
        h: "可编辑的场景时序",
        p: "",
        paras: [
          "要在 HyperFrames 时间线上暴露各个场景，请为每个场景挂载一个定时宿主和独立的运行器 iframe。每个运行器可以加载完整的保留影片。将原始场景不可变的源区间与其可编辑的宿主时序分别注册： 对于原始覆盖 `[3, 7)` 的场景，源时间为 `3 + data-playback-start + rateAdjustedLocalTime`。源区间将结果钳制在 3 与 7 之前的最后一个源帧之间。移动宿主可改变 `data-start`；裁剪可改变其时长和源入点；拉伸使用现有的播放速率属性。超出可用源素材的延长会保持最后一帧。仅改变时长不会自动拉伸动画。",
          "相邻剪辑使用半开时间线窗口。在合成的最终时刻，最终场景会保持其最后一帧。不同的源实例允许重排或重叠的场景请求不同的原始影片时刻，而不共享可变运行器状态。",
          "请将保留的运行器/load 载荷和 `sourceRange` 持久化在封装的初始化数据中。宿主时序保留在普通 HyperFrames 属性中，因此序列化、保存/重开、撤销和重做都能保留它，而无需重写场景模块。不要将原播放器的 `recut` 字段用作宿主时序的替代：该协议无法表示任意裁剪、重排和重叠编辑。",
          "这提供场景级时序和放置。文字、颜色和单个动画更改仍需编辑保留的场景模块。运行时不将 iframe 内部暴露为可手动编辑的 Studio 对象或关键帧。",
        ],
        codeBlocks: [
          {
            code: "window.__hyperframes.registerFrameSource({\n  element: sceneHost,\n  ready: bridge.ready,\n  render: bridge.render,\n  dispose: bridge.dispose,\n  sourceRange: { start: 3, duration: 4, fps: 60 },\n});",
            file: "js",
          },
        ],
        id: "editable-scene-timing",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
          "[薄膜](https://hyperframes.heygen.com/catalog/blocks/thin-film.md)",
          "[拍摄屏幕](https://hyperframes.heygen.com/catalog/components/filmed-screen.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "concepts-frame-adapters": {
    lede: "帧适配器回答一个问题：第 N 帧动画应处于什么状态？",
    sections: [
      {
        h: "接口",
        p: "",
        paras: ["上下文包含合成 ID、帧率、尺寸和可选的 root 元素。"],
        codeBlocks: [
          {
            code: 'import type { FrameAdapter, FrameAdapterContext } from "@hyperframes/core";\n\ntype FrameAdapter = {\n  id: string;\n  init?: (context: FrameAdapterContext) => Promise<void> | void;\n  getDurationFrames: () => number;\n  seekFrame: (frame: number) => Promise<void> | void;\n  destroy?: () => Promise<void> | void;\n};',
            file: "ts",
          },
        ],
        id: "interface",
      },
      {
        h: "适配 GSAP 时间线",
        p: "",
        paras: [
          "`@hyperframes/core` 为类似 GSAP 的时间线提供辅助函数： 辅助函数会暂停时间线、推导其帧长度，并将每个帧请求转换为秒数。",
        ],
        codeBlocks: [
          {
            code: 'import { createGSAPFrameAdapter } from "@hyperframes/core";\n\nconst adapter = createGSAPFrameAdapter({\n  id: "intro",\n  fps: 30,\n  timeline,\n});\n\nawait adapter.init?.({\n  compositionId: "intro",\n  fps: 30,\n  width: 1920,\n  height: 1080,\n});\n\nawait adapter.seekFrame(90); // three seconds',
            file: "ts",
          },
        ],
        id: "adapt-a-gsap-timeline",
      },
      {
        h: "约定",
        p: "",
        paras: ["自定义适配器必须： 宿主仍拥有捕获和编码管线。适配器仅拥有动画状态。"],
        codeBlocks: [],
        bullets: [
          "返回有限、非负的帧数；",
          "支持向前、向后和随机定位；",
          "再次请求同一帧时返回相同状态；",
          "避免使用墙钟计时器和未播种随机数；",
          "在帧被捕获前完成异步工作；",
          "在 `destroy()` 中释放监听器和其他资源。",
        ],
        id: "contract",
      },
      {
        h: "继续阅读",
        p: "",
        paras: [
          "时序规则请阅读[确定性渲染](https://hyperframes.heygen.com/concepts/determinism.md)，包导出请参阅 [`@hyperframes/core`](https://hyperframes.heygen.com/packages/core)。",
        ],
        codeBlocks: [],
        id: "continue",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
          "[色彩、特效、3D 与生成艺术](https://hyperframes.heygen.com/prompting/color-grading.md)",
          "[确定性渲染](https://hyperframes.heygen.com/concepts/determinism.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "concepts-determinism": {
    lede: "同一[合成](https://hyperframes.heygen.com/concepts/compositions.md)总是产生相同的视频。",
    sections: [
      {
        h: "为什么同一帧始终输出相同结果",
        p: "",
        paras: [
          "渲染从不播放你的视频。它一次请求一帧， “第 90 帧看起来如何？”的答案只取决于一件事在变化：数字 90。",
          "所以规则很简单：",
        ],
        codeBlocks: [
          {
            code: 'flowchart TD\n    F["Frame 90"] --> T\n    L["Locked before frame 0:<br/>fps, width, height, variables"] --> T\n    T["t = 90 / fps<br/>integer math, never a clock"] --> S["Every animation seeked<br/>to exactly t"]\n    S --> P["The same pixels, every run"]\n    S -.-> X["Breaks if a frame reads:<br/>Date.now, unseeded Math.random,<br/>or a mid-render fetch"]',
            file: "mermaid",
          },
        ],
        bullets: [
          "**不要使用墙钟。**不要使用 `Date.now()`、`requestAnimationFrame` 或系统计时器。",
          "**不要使用未播种随机数。**没有种子的 `Math.random()` 每次运行都会给出不同的一帧。",
          "**不要在渲染中途拉取。**所有资产都在第一帧之前加载完成。",
          "**输出尺寸固定。**在第 0 帧之前，`fps`、`width` 和 `height` 已锁定。",
          "**长度有限。**每个合成都有已知的结束点。",
        ],
        id: "why-the-same-frame-always-comes-out-the-same",
      },
      {
        h: "每帧发生什么",
        p: "",
        paras: [
          "**1. 帧时钟** [引擎](https://hyperframes.heygen.com/packages/engine.md)用整数数学计算时间： `time = floor(frame) / fps`。从不查询真实时间。",
          "**2. 定位** [帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)接收 `seekFrame(frame)`，并将每个动画、DOM 变化和画布绘制移动到那个确切时刻。所有 [GSAP](https://hyperframes.heygen.com/guides/gsap-animation.md) 时间线都会暂停并定位，永不播放。",
          "**3. 捕获** Chrome 的 `HeadlessExperimental.beginFrame` 以一次原子操作抓取像素。不会有半绘制的帧。",
          "**4. 编码** FFmpeg 将捕获的帧转换为 MP4，并混入你的 `<audio>` 和 `<video>` 元素中的音频。",
          "每个[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)遵循相同的规则。如果编写自定义适配器，必须遵守 [确定性约定](https://hyperframes.heygen.com/concepts/frame-adapters.md#contract)：",
          "`seekFrame(frame)` 对同一帧给出相同结果，定位可以按任意顺序进行，帧提交后不会还有任何内容才决断，且生命周期保持 `init` → `seekFrame`（多次）→ `destroy`。",
          "在截图捕获下，Chrome 会将每个变化的栅格块整体重绘，因此某一帧的像素不取决于页面之前绘制了什么。工作者数量、块边界 和定位顺序都不会改变它们。[运动模糊](https://hyperframes.heygen.com/guides/motion-blur.md#cost-and-limits)是例外。",
        ],
        codeBlocks: [],
        id: "what-happens-on-each-frame",
      },
      {
        h: "排除你的机器这一变量",
        p: "",
        paras: [
          "字体和 Chrome 版本在不同电脑上存在差异，因此本地渲染可能在两台机器上相差一像素。当需要精确可复现时，请在 Docker 中渲染： Docker 固定了 Chromium 版本、字体集和 FFmpeg 编码器，因此平台不再是输入项。[渲染指南](https://hyperframes.heygen.com/guides/rendering.md)涵盖所有其他选项。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --docker --output output.mp4",
            file: "bash",
          },
        ],
        id: "rule-out-your-machine-as-a-variable",
      },
      {
        h: "预览会与渲染一致吗？",
        p: "",
        paras: [
          "两处每一帧看起来都一样，因为两者都运行相同的 `hyperframe.runtime`，[生产者](https://hyperframes.heygen.com/packages/producer.md)的定位行为是 唯一的事实来源，且 `__playerReady` 和 `__renderReady` 门控会将捕获保持到合成完全加载。",
          "速度是另一回事。预览在你的浏览器中实时播放，因此受 硬件限制。渲染按定位驱动，一次取一帧， 因此无论那一帧多昂贵，从不丢帧。预览卡顿的合成仍可完美渲染 —— 请参阅 [性能](https://hyperframes.heygen.com/guides/performance.md)。",
        ],
        codeBlocks: [],
        id: "will-the-preview-match-the-render",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)",
          "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
          "[使用 GSAP 进行动画](https://hyperframes.heygen.com/guides/gsap-animation.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-html-canvas": {
    lede: "HTML in Canvas 使用 Chrome 实验性的 `drawElementImage()` API，将已渲染的 DOM 内容复制到画布中。该画布可以成为 Three.js 纹理或着色器特效的输入。",
    sections: [
      {
        h: "从现成区块开始",
        p: "",
        paras: [
          "最快的路径是安装一个 Catalog 区块，它已经处理了能力检测和回退行为： 其他相关示例包括 [Portal](https://hyperframes.heygen.com/catalog/blocks/vfx-portal.md)、[Shatter](https://hyperframes.heygen.com/catalog/blocks/vfx-shatter.md) 和 [Liquid Glass Notification](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-notification.md)。",
          "只有当你想对比全集时，才安装所有标记了 `html-in-canvas` 的区块：",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes add vfx-iphone-device",
            file: "bash",
          },
          {
            code: "npx hyperframes add html-in-canvas",
            file: "bash",
          },
        ],
        id: "start-with-a-proven-block",
      },
      {
        h: "浏览器支持",
        p: "",
        paras: [
          "`drawElementImage()` 是实验性的 Chromium 功能。该功能标志仅在包含此 API 的浏览器构建中有效。",
          "HyperFrames 在启动 Chrome 时启用 `CanvasDrawElement`，并检查 API 是否真正可用。当快速捕获 API 不可用或对某个合成不安全时，渲染引擎可以回退到其普通捕获路径。",
          "刷新 CLI 使用的浏览器： 对于普通浏览器预览，请在兼容的 Chrome 或 Brave 构建中启用 `chrome://flags/#canvas-draw-element` 并重启。保留视觉回退，因为协作者可能在没有此功能的浏览器中打开合成。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes browser ensure --force",
            file: "bash",
          },
        ],
        id: "browser-support",
      },
      {
        h: "最小模式",
        p: "",
        paras: [
          "捕获后，像使用其他任何画布纹理一样使用 `captureCanvas`： 如果 DOM 发生变化，请重新捕获并设置 `texture.needsUpdate = true`。",
        ],
        codeBlocks: [
          {
            code: '<canvas id="capture" layoutsubtree width="1920" height="1080">\n  <section id="source">\n    <h1>Revenue: $4.2M</h1>\n  </section>\n</canvas>\n\n<canvas id="scene" width="1920" height="1080"></canvas>',
            file: "html",
          },
          {
            code: 'var captureCanvas = document.getElementById("capture");\nvar source = document.getElementById("source");\nvar captureContext = captureCanvas.getContext("2d");\n\nfunction supportsHtmlInCanvas() {\n  var probe = document.createElement("canvas");\n  probe.setAttribute("layoutsubtree", "");\n  var context = probe.getContext("2d");\n\n  return "layoutSubtree" in probe && typeof context?.drawElementImage === "function";\n}\n\nif (supportsHtmlInCanvas()) {\n  captureContext.drawElementImage(source, 0, 0, 1920, 1080);\n} else {\n  // Draw a simpler canvas version or use a static image.\n}',
            file: "js",
          },
          {
            code: "var texture = new THREE.CanvasTexture(captureCanvas);\nvar material = new THREE.MeshBasicMaterial({ map: texture });",
            file: "js",
          },
        ],
        id: "minimal-pattern",
      },
      {
        h: "了解限制",
        p: "",
        paras: [
          "浏览器的绘制记录路径并不能复现所有合成器特效。滤镜、背景滤镜、某些 3D 变换、遮罩、混合模式和类似效果可能迫使 HyperFrames 回退到普通捕获路径。",
          "该回退保护最终结果，但也意味着 HTML in Canvas 并不是对通用 CSS 支持或更快渲染的承诺。请测试实际合成： 请在渲染文件中查看过渡帧和特效，而不只看实时预览。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint\nnpx hyperframes check\nnpx hyperframes render --output html-in-canvas.mp4",
            file: "bash",
          },
        ],
        id: "know-the-limits",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [着色器过渡](https://hyperframes.heygen.com/packages/shader-transitions.md) 在场景之间应用内置 WebGL 过渡。",
          "[card] [浏览视觉区块](https://hyperframes.heygen.com/catalog.md) 从可用的特效开始，而非重建捕获逻辑。",
        ],
        codeBlocks: [],
        bullets: [
          "[液态玻璃通知（Liquid Glass Notification）](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-notification.md)",
          "[液态玻璃小组件（Liquid Glass Widgets）](https://hyperframes.heygen.com/catalog/blocks/liquid-glass-widgets.md)",
          "[iOS 26 液态玻璃主屏](https://hyperframes.heygen.com/catalog/blocks/ios26-liquid-glass.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-motion-blur": {
    lede: "运动模糊给快速运动的元素真实的快门拖影。对于每一帧，HyperFrames 都会读取每个运动体在快门区间内所在的位置，并沿该路径对其模糊。横穿画面的盒子会留下拖痕，而非某个位置上的锐利拷贝。",
    sections: [
      {
        h: "开启它",
        p: "",
        paras: [
          "就这么简单。同一属性同时驱动浏览器编辑器预览和 `hyperframes render`。",
          "| 属性 | 默认值 | 含义 |\n| - | - | - |\n| `data-motion-blur` | none | `on` 启用模糊。`off` 退出，可位于 root 或任何子树上。 |\n| `data-motion-blur-shutter` | `240` | 快门角度（度），0–720。越大拖影越长。 |\n| `data-motion-blur-phase` | centred | 快门开启时刻，以帧的角度计，-360 到 360。窗口从 `t + phase / 360 / fps` 开始，持续 `shutter / 360 / fps`。`0` 表示在帧上开启，拖影向前拖；未指定时居中，相当于负半个快门。与 After Effects 的 Shutter Phase 相匹配。 |\n| `data-motion-blur-samples` | 至少 32 | 每帧固定采样数，2–64。未指定时，每个运动体至少 32 个，且当拖影更长时大约每 2 px 一个采样，因此快速运动永远不会出现台阶。 |\n| `data-motion-blur-events` | off | `on` 在模糊寻找运动体时运行时间线回调（`onUpdate` 等），并在回调改变元素行内样式或其盒子的每个采样处运行。当运动由回调（如 `render(t)` 函数）设置时需要它，否则模糊看不到。 |\n| `data-motion-blur-tier` | `auto` | `auto` 和 `filter` 以滤镜层绘制；`capture` 请求捕获层（见下）。 |",
        ],
        codeBlocks: [
          {
            code: '<div\n  id="root"\n  data-composition-id="main"\n  data-width="1920"\n  data-height="1080"\n  data-duration="10"\n  data-motion-blur="on"\n>\n  ...\n</div>',
            file: "html",
          },
        ],
        id: "turn-it-on",
      },
      {
        h: "在浏览器编辑器中",
        p: "",
        paras: [
          "浏览器编辑器右侧坞的 **Blur** 标签页用一个控件设置它：**Off**、**Subtle** 或 **Strong**。Subtle 是默认模糊（240° 快门，采样数按拖影计算）。Strong 将快门开到 720°、采样数开到 64。面板会将上述属性写入合成 root，因此渲染使用相同设置，且撤销可用。Subtle 和 Strong 也会开启 `data-motion-blur-events`，因此由 `render(t)` 回调设置的运动能被找到。Off 会移除 `data-motion-blur` 和 `data-motion-blur-events`，其他属性保持不动。",
        ],
        codeBlocks: [],
        id: "in-the-browser-editor",
      },
      {
        h: "模糊对象",
        p: "",
        paras: [
          "2D 中快速运动的元素：来自 GSAP、CSS 动画和过渡以及 Web Animations API 的位置、缩放和旋转变化。慢运动体和静态内容保持锐利。运动体的辉光和阴影随之同行，其后的背景保持原位。",
        ],
        codeBlocks: [],
        id: "what-it-blurs",
      },
      {
        h: "两种绘制方式",
        p: "",
        paras: [
          '**Filter** 在每个运动体上加上 SVG 滤镜：沿路径的多个元素拷贝取平均，并沿运动方向软化。`data-motion-blur-tier="auto"`（默认）即以此绘制。它在任何 Chrome 中可用，且可在 WebGL 画布之上工作。在四鞭测试中，它耗时约与无模糊渲染相同；在两部真实影片上，它比捕获更耗时（见成本与限制）。转弯和缩放仅被软化，不会产生拖痕。',
          '**Capture** 通过 `data-motion-blur-tier="capture"` 可选开启。它用 Chrome 的 [HTML in Canvas](https://hyperframes.heygen.com/guides/html-in-canvas.md) API 将每个运动体从页面中拷贝出来，再沿其路径重绘。它真实绘制转弯和缩放：旋转瓷砖沿弧线拖影而中心仍锐利，缩放向外拖影。它也有自己的限制，下文列出（滤镜层的限制列在“成本与限制”下，少数限制如 `backdrop-filter` 两层都适用），因此只为需要旋转和缩放拖痕的影片请求它：',
          "Capture 需要支持 HTML in Canvas 的浏览器。Chrome 157 和 158 构建在无头和 Chrome-for-Testing 构建中无需标志即可暴露它；稳定版 Chrome 是否如此尚未验证。Chrome 155 及更早版本需要 `chrome://flags/#html-in-canvas`。",
          "当捕获不可运行时，请求捕获的页面会改为使用滤镜层：",
          "| 在合成中找到 | 为什么捕获无法绘制它 |\n| - | - |\n| 文档中任意位置的 WebGL 或 WebGPU 画布 | 会被冻结捕获。 |\n| 3D 上下文中的 `backface-visibility: hidden`（包括来自动画） | 会被镜像绘制。 |\n| root 元素上的 transform | 会被捕获忽略。 |\n| root 元素上不透明度低于 1，或 `mix-blend-mode` | 不会被捕获应用。 |\n| root 中的 `iframe`、`object`、`embed` 或自定义元素 | 无法被真实捕获。 |\n| 嵌套捕获画布，如 VFX 区块 | 会挂起渲染器。 |\n| 不支持 HTML in Canvas 的浏览器，或连续三次捕获失败 | 捕获不可用。 |",
          "这为整个合成一次性决定，以第一帧为准。扫描遗漏的缺陷（如延迟加入的 WebGL 画布）会改为在每帧中捕获：那一帧会以锐利方式渲染，并计入 `failedFrames`。",
          'HDR 渲染和使用引擎自身亚帧模糊的渲染，模糊是关闭的，并且保持关闭。分布式渲染（`plan`、`renderChunk`、`assemble`，即 AWS Lambda 和 Google Cloud Run 适配器的运行方式）和 `--start`/`--end` 范围渲染，其模糊方式与完整本地渲染相同。传入 `--page-motion-blur off`（或在分布式配置中使用 `pageMotionBlur: "off"`）可使其锐利渲染。',
        ],
        codeBlocks: [],
        bullets: [
          "运动体前方的一切物都会丢失：运动元素之上的静态面板、覆盖层或标题卡在拖影之后绘制。",
          "运动体或其祖先上的 `mix-blend-mode` 和 `backdrop-filter` 不会被应用。",
          "通过父级抵达 root 的 CSS 选择器（如 `body > #root > .m`），在捕获包裹 root 后即停止匹配。",
          "滑入 `overflow: hidden` 或裁剪卡片的运动体会拖着裁剪边缘走，两个重叠运动体会携带彼此的像素，超出帧边缘的内容会留下一条细带。",
          "预览中，每次播放后的第一帧会有一瞬间变黑。",
        ],
        id: "two-ways-it-is-drawn",
      },
      {
        h: "查明实际绘制层",
        p: "",
        paras: [
          '| 发现 | 严重程度 | 含义 |\n| - | - | - |\n| `motion_blur_filter_fallback` | info | 页面请求了捕获，但无法运行，因此用滤镜层绘制。消息写明原因。 |\n| `motion_blur_no_movers` | info | 模糊已开启，但没有足够快的东西可模糊。如果运动由回调设置，请添加 `data-motion-blur-events="on"`。 |\n| `motion_blur_unverified` | info | 页面请求了捕获，但检查浏览器无法运行它，因此用滤镜层绘制。渲染一次即可看到捕获。 |',
          "在页面中，`window.__hfMotionBlur.report()` 返回 `state`、`tier`、`reason`、`reasonCode` 和 `movers`。渲染的每个会话会记录一行层信息；若有帧回退为锐利（`failedFrames > 0`），会话结束时还有一行。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes check",
            file: "bash",
          },
        ],
        id: "find-out-which-one-is-drawing",
      },
      {
        h: "性能开销与限制",
        id: "cost-and-limits",
        p: "",
        paras: [],
        bullets: [
          "**渲染耗时：** 具体耗时因影片而异。在一个包含 4 次快速甩动、时长 8 秒的测试合成上，渲染耗时对比为：capture 捕获层 9.8 s，filter 滤镜层 5.2–5.4 s，无模糊 5.3–5.9 s（每组运行两次，均含启动开销）。而在两部真实 1080p 短片上按整次渲染的 CPU 总秒数衡量（高负载机器上墙钟时间波动过大），filter 滤镜层反而比 capture 更耗时：`spacex-launch`（77 个运动元素，39.5 s）filter 耗时 547–552 CPU s，capture 为 302–320 s，无模糊为 184–193 s（各三次，filter 约为无模糊的 2.9 倍）；`k3-promo`（106 个运动元素，16.5 s）分别为 236、205 与 117 CPU s（每组一次，约无模糊的 2.0 倍）。耗时并不严格按运动元素数量排序，filter 每帧要为每个运动元素绘制至少 32 个偏移副本，而 capture 只需在每个模糊帧额外执行一次绘制。",
          '**分布式渲染：** 在 `auto` 模式下每个分片均按 filter 滤镜层应用模糊。两部 1080p 影片按每分片 240 帧在软件 GPU 的 Chrome 153 上实测（高负载环境 load average 12–25）：分片累计 CPU 秒数方面，`k3-promo` 从 155 增至 246（1.6 倍），`spacex-launch` 从 338 增至 545（1.6 倍）；累计墙钟时间分别增至 1.2 倍与 1.4 倍。标记了 `data-motion-blur="on"` 的影片还会从 BeginFrame 捕获切换为 screenshot 捕获，该切换的成本已计入实测数字中。',
          "**可编辑性：** filter 滤镜层从不包裹 DOM 节点。采用 capture 捕获层时，仅在播放或渲染期间包裹根节点；暂停时仍是普通 DOM，因此画布点选依然有效。",
          "**仅限 capture 捕获层：** 重度合成下带模糊预览可能只以一半帧率运行；通过捕获路径绘制的 `<video>` 在浏览器编辑器预览中看起来会比正常播放略暗约 2–3%，成片渲染不受此影响。",
          "**预览与渲染一致性：** `auto` 在全质量预览与最终渲染中采用相同绘制路径。当宿主降低预览质量（Studio 发送 `set-preview-quality` 消息）时，filter 预览在 1/2 质量绘制 16 份副本，在 1/4 及以下绘制 8 份；正式渲染始终绘制 32 份。与亚帧参考值比对：16 份副本与 32 份的差异小于可测见的最小缺陷，8 份在旋转画面上会出现肉眼可见差异。对于显式要求 capture 但在不支持 HTML in Canvas 的浏览器中预览的页面，将回退至 filter 滤镜层，缩放或旋转会比最终渲染柔和。",
          "**Worker 数量：** 不同 worker 数量的输出并非逐比特完全一致（PSNR 约 60 dB），差异量级与分片本身引入的差异相近。",
          "**尚未覆盖的场景：** 受 CSS `zoom`、`position: fixed` 与 `foreignObject` 影响时的姿态误差；落在两次采样间隙之间极短的 Web Animations API 动画；巨大的半透明扫过层（如全屏半透光扫），其本身保持锐利而其快速子元素仍带模糊；在使用 capture 模式时，运动元素会绘制在静态内容之上，因此原本应遮挡该运动元素的静态图层无法遮住它。",
          "**filter 滤镜层（默认）的限制：** 基于单模式测试合成测得：",
          "超出运动元素包围盒的 `::before` 或 `::after` 伪元素内容会被裁切。",
          "运动元素自身的 `clip-path` 或遮罩会出现硬边：模糊拖尾会被裁切在当前帧的形状边界内。",
          "通过 `left` 属性移动的运动元素内部若有 `position: fixed` 子元素，该子元素位置会发生跳变，因为滤镜属性使运动元素成了新的包含块。",
          "根节点子元素上的 `:last-child` 选择器也会匹配到 filter 层添加到根节点下的 `<svg>`（`nth-last-*` 表现同理，暂未单独测验）。",
          "发生在快门时间窗口内的 `visibility` 切换会按全强度绘制，而非半透明。",
          "运动元素上的 `backdrop-filter` 在拖影中与 32 采样参考存在差异（仅影响背景虚化部分）。",
        ],
        codeBlocks: [],
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[运动模糊](https://hyperframes.heygen.com/catalog/components/motion-blur.md)",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
          "[已验证的示例提示](https://hyperframes.heygen.com/prompting/examples.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-vfx-chain": {
    lede: "`data-vfx-chain` 属性：一条逐像素 WebGL2 内核处理链，支持扭曲、置换与程序化噪声，并在每次 seek 时确定性重绘。",
    sections: [
      {
        h: "元素",
        p: "",
        paras: [
          "`version`、`nodes[]`，以及每个节点的 `type` / `id` / `enabled` / `params`。",
          "补间，如同其他每个导出变量。运行时在每次绘制时先读取 CSS 变量， 解析不到时回退到 `params`。",
          "`(x, y, t, params)` 之外像素时才出现 —— 详见下方[捕获](#capture)。其唯一子元素 `.hf-vfx-in` 是纹理 源。给 `.hf-vfx-in` 指定**显式像素盒子**（`width`/`height`，即图层自身的尺寸）—— `position:absolute; inset:0` 在 `layoutsubtree` 画布内没有可解析的包含块，会坍缩为 0×0，导致捕获成功却什么都不绘制，且无声无息。",
          "`.hf-vfx-in` 上（捕获之内）；**之后**运行的放在 宿主上（在外，由普通页面合成器应用到 `.hf-vfx-out`）。链顺序即嵌套顺序。",
          "`position:absolute; inset:0`，尺寸为宿主自身的（未变换）布局 盒子 —— `offsetWidth`/`offsetHeight` —— 乘以 devicePixelRatio，而非宿主变换后的包围盒。",
          "宿主上的 GSAP 缩放或旋转不会放大或拉伸捕获。",
        ],
        codeBlocks: [
          {
            code: '<div id="rw-main-text" class="clip" data-start="0" data-duration="8.8"\n     data-vfx-chain=\'{"version":1,"nodes":[{"type":"displacement-map","id":"n1","params":{"useH":1,"useV":2,"edge":0,"expand":true}},{"type":"wave-warp","id":"n2","params":{"waveType":1,"direction":0,"speed":1,"pinning":1,"phase":0}}]}\'\n     style="--vfx-n1-maxH:150;--vfx-n1-maxV:150;--vfx-n2-height:21;--vfx-n2-width:93.4">\n  <canvas layoutsubtree class="hf-vfx-src"><div class="hf-vfx-in">…layer content, with any PRECEDING CSS/SVG effects already applied on this wrapper…</div></canvas>\n  <canvas class="hf-vfx-out"></canvas>\n</div>',
            file: "html",
          },
        ],
        bullets: [
          "`data-vfx-chain` 是 JSON，字段名与 `data-fx-chain` 相同：",
          "**静态参数**位于 `params` 中。**动画参数**位于宿主元素上的 CSS 自定义属性中，命名为 `--vfx-<nodeId>-<key>`，由 GSAP",
          "`.hf-vfx-src`（一个 `<canvas layoutsubtree>`）仅在某个节点的定义需要读取",
          "在 After Effects 顺序中**先于**链运行的特效放在",
          "如果未提供 `.hf-vfx-out`，运行时会创建它。它是",
        ],
        id: "element",
      },
      {
        h: "捕获",
        p: "",
        paras: [
          "每个内核在其 **def** 上、而非元素上声明 `capture` 需求：",
          "| capture | 读取 | 渲染捕获路径 | 本计划中交付 |\n| - | - | - | - |\n| `none` | 仅 `(x, y, t, params)` | 截图捕获，工作者未固定 | `fractal-noise` |\n| `self` | 通过 `drawElementImage` 读取其自身图层像素 | 截图捕获，**固定为 1 个工作者** | `wave-warp`、`displacement-map` |\n| `backdrop` | 其下方的每个图层 | 截图捕获，固定为 1 个工作者 | 尚未 —— 后续阶段 |",
          "`self` 或 `backdrop` 节点会将整个合成置于截图捕获并固定为一个工作者（`htmlInCanvas` render-mode hint 正是因此：跨并行浏览器实例的绘制缓存竞态是已测得的失败，而非理论风险）。`none` 节点仍强制截图捕获 —— WebGL 内容不是快速 `drawElementImage` 路径能真实读回的东西 —— 但工作者数量保持自动解析。",
          "两者都不是与“在 After Effects 中烘焙特效并发视频而非实时链”的替代方案相比的回归：烘焙需要在前端付出一次完整的 AE 渲染，且得到的胶片无法重定时。但与**不带**该节点的同一合成的 `drawElement` 渲染相比，两者",
          "`self` 和 `none` 捕获都更慢。请为此留预算，不要给不需要逐像素处理的图层加链。",
        ],
        codeBlocks: [],
        id: "capture",
      },
      {
        h: "确定性",
        p: "",
        paras: [
          "同一后端、同一 `(u_t, params)` → `.hf-vfx-out` 字节一致的像素。内核只能读取 `(u_size, u_t, u_fps, params, u_src)` —— 不使用 `Math.random`、 不读时钟、两次绘制之间不带状态。正是因此 `data-vfx-chain`",
          "可以在渲染任意位置安全定位，包括向后定位，仍得到与 在浏览器编辑器中正向拖到该处相同的帧。",
        ],
        codeBlocks: [],
        id: "determinism",
      },
      {
        h: "浏览器编辑器与浏览器支持",
        p: "",
        paras: [
          "`self` 和 `backdrop` 捕获依赖 `drawElementImage`，即 [HTML in Canvas](https://hyperframes.heygen.com/guides/html-in-canvas.md) 使用的同一",
          "实验性 Chromium API。在普通浏览器预览中，请在兼容的 Chrome 或 Brave 构建中启用 `chrome://flags/#canvas-draw-element` 并重启，再打开 使用捕获链的合成。没有它 —— 或在无 WebGL2 的浏览器构建上 —— 链会大声失败（控制台一行 `[HyperFrames] composition script error:` 写明该标志），而非悄悄渲染错误结果。`none` 捕获链（如 `fractal-noise`）只需 WebGL2，无需该标志。",
        ],
        codeBlocks: [],
        id: "the-browser-editor-and-browser-support",
      },
      {
        h: "已知约束",
        p: "",
        paras: [
          "手写链之前，运行时实现发现的几件事值得了解： `drawElementImage` 对孫子元素抛错。`.hf-vfx-in` 必须是画布的 唯一子元素。",
          "`.hf-vfx-out` 的分辨率。",
          "路径都按帧定位，因此这只影响浏览器编辑器无拖动播放， 链在定位之间不会重绘。",
          "捕获型 `data-vfx-chain` 节点的合成，在过渡自身活动窗口之外可能从过期纹理绘制链。如果你的合成同时使用 两者、且过渡之外的链看起来错误，原因即在此。",
        ],
        codeBlocks: [],
        bullets: [
          "**`.hf-vfx-in` 需要显式像素盒子。**见上方[元素](#element) —— 不给的话正是这一项会导致无声、空的捕获。",
          "**只有 `layoutsubtree` 画布的直接子元素可被捕获。**",
          "**输出尺寸遵循宿主的布局盒子，而非其变换后包围盒。**宿主上的 GSAP `transform: scale()` 或旋转不会影响",
          "**链在定位时重绘，而非每个动画帧 tick。**所有渲染",
          "**与页面侧着色器过渡的已知冲突。**同时运行 `@hyperframes/shader-transitions` 页面侧合成和",
        ],
        id: "known-constraints",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [HTML in Canvas 捕获](https://hyperframes.heygen.com/guides/html-in-canvas.md) 同样的 `drawElementImage` 捕获，用于将 DOM 合成到 3D 场景",
          "而非逐像素内核。",
          "[card] [音频特效实现](https://hyperframes.heygen.com/reference/audio-effects.md) `data-vfx-chain` 对应的 `data-fx-chain` 形状，供音频架使用。",
        ],
        codeBlocks: [],
        bullets: [
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
          "[音频特效实现](https://hyperframes.heygen.com/reference/audio-effects.md)",
          "[逐词上浮（Per Word Rise）](https://hyperframes.heygen.com/catalog/components/per-word-rise.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-figma": {
    lede: "将 Figma 设计导入 HyperFrames —— 冻结视觉资产、品牌 Token、可编辑组件、故事板重建，以及将 Figma Motion 时间轴转换为 GSAP。",
    sections: [
      {
        h: "可导入的内容",
        p: "",
        paras: [
          "| 能力 | 交付内容 | 入口 |\n| - | - | - |\n| **静态资产** | 帧/图层渲染为 SVG/PNG/JPG/PDF，冻结于 `.media/` 下 | `hyperframes figma asset` |\n| **品牌 token** | Figma 变量/样式为合成品牌变量 | `hyperframes figma tokens` 或经 Figma 连接器的 `/figma` 技能 |\n| **组件** | 帧为可编辑 HTML，颜色链接品牌 | `hyperframes figma component` |\n| **运动** | Figma Motion 时间线为可编辑、暂停的 GSAP 时间线 | `/figma` 技能（agent，MCP） |\n| **着色器** | 着色器填充/特效为冻结静帧或剪辑 | `/figma` 技能（agent，MCP） |\n| **故事板** | 场景帧重建为运动 —— 帧作为状态解读，非幻灯片 | `/figma` 技能（agent；REST 资产即可） |",
          "资产、token 和组件使用 Figma 的 **REST API**，可无头运行。",
          "运动和着色器数据可经兼容的 **Figma 连接器** 传入；若该入口不可用，请改用原生导出。故事板 重建使用普通帧导出加 agent 分析。",
        ],
        codeBlocks: [],
        id: "what-you-can-import",
      },
      {
        h: "一次性设置",
        p: "",
        paras: [
          "大多数人只需要一次连接：",
          "| 你想导入… | 设置 |\n| - | - |\n| Logo、图片，或整个帧为 HTML（资产、组件） | **token** —— 下文步骤 A |\n| 品牌颜色（token） | 任一均可，但在非 Enterprise 套餐上，**MCP 连接器**（步骤 B）一击即达 —— token 路径此项需 Enterprise 套餐 |\n| 运动或着色器 | 兼容的 **Figma 连接器**，或原生导出 |\n| 故事板帧 | 用于帧导出的 token；不需要连接器 |",
          "项目需要全部时两者都做；各自独立，先后顺序无关。",
        ],
        codeBlocks: [],
        id: "one-time-setup",
      },
      {
        h: "步骤 A — Figma token（资产、token、组件）",
        p: "",
        paras: [
          "`hyperframes figma` CLI 运行所需。",
          "**1. 签发 token** 在 Figma 中：**Settings → Security → Personal access tokens → Generate new token.** **2. 勾选这些 scope** 只读即足够 —— 集成永不写入 Figma。**大多数账号（非 Figma Enterprise）恰好勾选这三项：**",
          "在 **Figma Enterprise** 套餐上，还勾选 **Variables — Read-only**，以便 `tokens` 直接拉取品牌颜色。非 Enterprise？跳过 —— `tokens` 会自动回退到发布样式，或改用 MCP 连接器（步骤 B），任意套餐都能触及变量。",
          "**3. 导出** 将该行加入 shell 配置或项目的 `.env`，后续会话跳过此步。token 可读取其 Figma 账号和 scope 允许的文件。",
        ],
        codeBlocks: [
          {
            code: 'export FIGMA_TOKEN="figd_…"',
            file: "bash",
          },
        ],
        bullets: [
          "**File content** — 只读",
          "**File metadata** — 只读",
          "**Library content** — 只读 —— 易漏，且没有它 `tokens` 会在尝试发布样式回退时 403",
        ],
        id: "step-a-figma-token-assets-tokens-components",
      },
      {
        h: "步骤 B — Figma 连接器（运动、着色器，以及无需 token 的品牌颜色路径）",
        p: "",
        paras: [
          "无 token、无 scope 可选 —— 你的 agent 请求时连接一次（一击 OAuth）即保持连接。",
          "当你的套餐上 REST variables 接口不可用时，这也是读取选区所用品牌值的便捷方式。连接器 可用性与用量限制取决于 Figma 当前套餐和客户端规则， 因此 agent 应批量请求并缓存结果。",
        ],
        codeBlocks: [],
        id: "step-b-figma-connector-motion-shaders-and-a-token-free-path-to-brand-colors",
      },
      {
        h: "导入资产",
        p: "",
        paras: [
          "节点经 REST 渲染，冻结于 `.media/images/` 下，命令会打印可直接粘贴的 `<img>` 片段：",
        ],
        codeBlocks: [
          {
            code: "hyperframes figma asset 'https://www.figma.com/design/KEY/Title?node-id=1-2'",
            file: "bash",
          },
          {
            code: 'imported image_007 → .media/images/image_007.svg\n<img src=".media/images/image_007.svg" alt="image_007" data-figma-id="1:2" />',
            file: "text",
          },
        ],
        bullets: [
          "`--format svg|png|jpg|pdf`（默认 `svg`）。Logo 和矢量用 SVG —— 可缩放、可动画。位图保真用 `--format png --scale 2`。",
          "接受引用：带 `?node-id=…` 的完整 Figma URL（右键图层 → Copy link）或 `fileKey:nodeId` 简写。资产和组件导入始终面向具体节点；只有 `tokens` 接受裸 `fileKey`。",
          "幂等：manifest 记录 `fileKey:nodeId:format:scale:version`，除非设计在 Figma 中真正变更，否则重跑复用文件。",
        ],
        id: "import-an-asset",
      },
      {
        h: "拉取品牌",
        p: "",
        paras: [
          "读取文件变量（或发布样式元数据），写入 `figma-tokens.json` 侧车文件加绑定索引，并打印合成 `data-composition-variables` 的条目。引用那些角色的场景使用相同的本地值。Figma 文件变化时重跑 `tokens`。",
          "[!TIP] **先**导入 token **再**导入组件。这样导入组件的颜色可链接到你的品牌变量，而非烘焙重复字面量。",
        ],
        codeBlocks: [
          {
            code: "hyperframes figma tokens KEY",
            file: "bash",
          },
        ],
        id: "pull-your-brand",
      },
      {
        h: "导入组件",
        p: "",
        paras: [
          "帧的节点树变为可编辑 HTML，几何与 Figma 一致，打包于 `compositions/components/<name>/`。映射不到干净 HTML 的矢量和布尔运算节点会自动经资产路径栅格化。",
          "绑定到 Figma 变量的颜色按导入 token 解析： 匹配仅按确切 Figma ID —— 从不按 hex 值 —— 因此撞色的颜色不会造成错误的品牌链接。",
        ],
        codeBlocks: [
          {
            code: "hyperframes figma component 'https://www.figma.com/design/KEY/Title?node-id=10-20'",
            file: "bash",
          },
        ],
        bullets: [
          "绑定到**已导入** token → 产出 `var(--brand-slug, #0066FF)` —— 后续品牌刷新会传入组件。",
          "绑定到**未导入** token → 使用字面颜色，且元素标记 `data-figma-unresolved`。命令会告知你；在源（或库）文件上跑 `tokens` 再重新导入即可链接。",
        ],
        id: "import-a-component",
      },
      {
        h: "运动、着色器与故事板",
        p: "",
        paras: [
          "这些经 `/figma` agent 技能运行： 重复元素成为连续线索，帧间差异成为运动或交互。此路径不需要连接器。",
        ],
        codeBlocks: [],
        bullets: [
          "**运动** —— Figma Motion 时间线（关键帧、缓动、重复）结构化翻译为注册在 `window.__timelines`、暂停且有限的 GSAP 时间线，像任何手写动画一样逐帧可定位，事后可编辑。无法真实翻译的轨道回退到烘焙视频剪辑 —— agent 会告知所走路径及原因。",
          "**着色器** —— Figma 导出路径不执行着色器，因此默认是原生 Figma 导出（PNG 或 Motion MP4）作为资产/剪辑导入。",
          "**故事板** —— 一段场景帧被解码，非幻灯片播放：",
        ],
        id: "motion-shaders-and-storyboards",
      },
      {
        h: "来源与刷新",
        p: "",
        paras: [
          "每次导入都在 `.media/manifest.jsonl` 中记录来源（`fileKey`、`nodeId`、`version`）。渲染的合成中没有一处指向 Figma —— 资产是文件，token 是变量，运动是时间线。Figma 文件更新时，重跑相同导入命令，只重新拉取变更。",
        ],
        codeBlocks: [],
        id: "provenance-and-refresh",
      },
      {
        h: "故障排查",
        p: "",
        paras: [
          "| 错误 | 含义 | 修复 |\n| - | - | - |\n| `NO_TOKEN` | `FIGMA_TOKEN` 未设置 | 遵循[一次性设置](#one-time-setup) |\n| `BAD_TOKEN` | Token 无效、过期或被撤销（Figma 对无效 PAT 返回 **403 `Invalid token`**，而非 401） | 重新签发 token |\n| `FORBIDDEN`（403） | 缺少只读 scope，或无权访问文件 | 消息写明 Figma 要求确切 scope（如样式回退的 `library_content:read`）—— 补上，或检查文件可见性 |\n| `REQUIRES_ENTERPRISE`（403） | Variables API 需要 Figma Enterprise | 不是失败 —— `tokens` 回退到发布样式（需上方 Library content scope） |\n| `RATE_LIMITED`（429） | Figma 每分钟限制 | 客户端自动以退避重试（遵守 `Retry-After`）；若仍冒出，等待一分钟或减少批量节点 |\n| 批量导出“Render timeout” | 一次 `/v1/images` 调用中大帧太多 | 分块，每次约 4 个 id |\n| `ref has no node id` | 链接指向文件而非节点 | 用 `?node-id=…` 复制链接（右键图层 → Copy link） |",
        ],
        codeBlocks: [],
        id: "troubleshooting",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[引入设计：Figma、Claude Design、Open Design](https://hyperframes.heygen.com/guides/design-tools.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
