import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "sdk-quickstart": {
    lede: "当应用必须在不打开 Studio 的情况下检查或修改合成 HTML 时，使用 `@hyperframes/sdk`。如果只需要播放，使用 [Player](https://hyperframes.heygen.com/packages/player.md)。如果只需要渲染文件，使用 [CLI](https://hyperframes.heygen.com/developers/cli.md) 或 [Producer](https://hyperframes.heygen.com/packages/producer.md)。",
    sections: [
      {
        h: "打开、编辑、序列化",
        p: "",
        paras: [
          "**1. 安装包** **2. 打开合成** `openComposition` 解析 HTML，给缺少 `data-hf-id` 属性的元素盖戳，并返回一个 `Composition` 会话。",
          "该调用是异步的，因为它先在 DOM 上运行 ID 盖戳遍历，再返回。",
          "**3. 查找元素** 用 `getElements()` 获取合成中所有内容的扁平快照，或用 `find()` 按标签、文本内容、`data-name` 属性、轨道索引或子合成宿主过滤。",
          '`find()` 返回 `scopedId` 字符串数组。对于顶层元素，`scopedId === id`。对于内联子合成内部的元素，它是 `"hf-HOST/hf-LEAF"`。',
          "**4. 用类型化方法编辑元素** 类型化方法是最可读的修改合成的方式。每个方法都直接翻译为一次分发的 `EditOp`，并发出 patch 事件。",
          "当多个修改应折叠为一次撤销条目、一次持久化写入与一次 `change` 事件时，使用 `batch()`： **5. 序列化和释放** `serialize()` 返回完整更新后的 HTML 字符串。用完后调用 `dispose()` 释放事件处理器与内部状态。",
        ],
        codeBlocks: [
          {
            code: "npm install @hyperframes/sdk",
            file: "bash",
          },
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\nconst html = `<div class="clip" data-start="0" data-duration="5"\n                data-hf-id="hf-title">Launch day</div>`;\n\nconst comp = await openComposition(html);',
            file: "ts",
          },
          {
            code: '// All elements\nconst all = comp.getElements();\n\n// Elements whose text contains "Launch"\nconst ids = comp.find({ text: "Launch" });\n\n// A specific element by its hf-id\nconst el = comp.getElement("hf-title");\nconsole.log(el?.text); // "Launch day"',
            file: "ts",
          },
          {
            code: '// Change text\ncomp.setText("hf-title", "Launch day — we shipped!");\n\n// Change inline styles (camelCase property names)\ncomp.setStyle("hf-title", {\n  color: "#FFD60A",\n  fontSize: "96px",\n  fontWeight: "700",\n});\n\n// Adjust clip timing\ncomp.setTiming("hf-title", { start: 0.5, duration: 4 });',
            file: "ts",
          },
          {
            code: 'comp.batch(() => {\n  comp.setText("hf-title", "Launch day — we shipped!");\n  comp.setStyle("hf-title", { color: "#FFD60A" });\n  comp.setTiming("hf-title", { start: 0.5, duration: 4 });\n});',
            file: "ts",
          },
          {
            code: "const updatedHtml = comp.serialize();\ncomp.dispose();\n\n// updatedHtml is ready to write to disk, send to a renderer, or store in a database.",
            file: "ts",
          },
        ],
        id: "open-edit-serialize",
      },
      {
        h: "添加持久化适配器",
        p: "",
        paras: [
          "上述 headless 模式适合一次性变换。当你希望 SDK 持久化编辑时，传入 `PersistAdapter`。快速变更会被合并并按顺序写入，以最新状态为准，而不是每次 UI 事件都写一次磁盘。",
          "文件系统适配器（`@hyperframes/sdk/adapters/fs`）写入本地目录，并保留滚动版本历史。",
          "该适配器在每次修改后写入 `./project/index.html`，并在 `./project/.hf-versions/` 下最多保留 20 个版本快照。",
          "[!NOTE] 禁用撤销（`history: false`）**不会**禁用自动保存。两者相互独立。只有当你自己管理撤销栈时才需要传 `history: false`。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\nimport { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\nimport { readFile } from "node:fs/promises";\n\n// Load the current HTML from disk (or use a template string on first run).\nconst html = await readFile("./project/index.html", "utf8").catch(() => "<div></div>");\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: "./project" }),\n  persistPath: "index.html",\n});\n\n// Persistence failures surface as events, not thrown errors.\ncomp.on("persist:error", ({ error }) => {\n  console.error("Autosave failed:", error.message);\n});\n\ncomp.setText("hf-title", "Autosaved title");\ncomp.setStyle("hf-title", { color: "#22C55E" });\n\n// Drain any pending write before the process exits.\nawait comp.flush();\ncomp.dispose();',
            file: "ts",
          },
        ],
        id: "add-a-persistence-adapter",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [查询与编辑元素](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md) FindQuery 字段、子合成 `scopedId`、批量事务语义与元素句柄。",
          "[card] [撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) 历史记录模块、用于宿主同步的 patch 事件与 `applyPatches` 循环防护。",
          "[card] [持久化](https://hyperframes.heygen.com/sdk/guides/persistence.md) 适配器选型、版本历史以及实现自定义持久化后端。",
          "[card] [openComposition 参考](https://hyperframes.heygen.com/sdk/reference/open-composition.md) 完整选项参考 —— 适配器、override、事件合并窗口（coalesce）等。",
        ],
        codeBlocks: [],
        bullets: [
          "[如何将 HyperFrames 集成进应用](https://hyperframes.heygen.com/developers/overview.md)",
          "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-querying": {
    lede: "SDK 暴露两层来处理合成元素：用于读取当前文档状态的**查询 API**，以及用于修改的类型化方法**修改 API**（外加 `dispatch()`）。每次查询与每次编辑都作用于稳定的 `hf-id` 字符串 —— 没有游标、没有“必须先选中的当前选择”不变式，也没有可能过期的 DOM 引用。",
    sections: [
      {
        h: "`getElements()`",
        p: "",
        paras: [
          "返回 `ElementSnapshot` 对象的扁平数组，代表合成中的每个元素 —— 包括子合成内部嵌套的元素 —— 按文档顺序排列。",
          "每个 `ElementSnapshot`（别名自 `HyperFramesElement`）携带：",
          "| 字段 | 类型 | 说明 |\n| - | - | - |\n| `id` | `string` | 叶级 `hf-id` —— 在其子合成作用域内唯一 |\n| `scopedId` | `string` | 规范的分发目标（见下） |\n| `tag` | `string` | 小写 HTML 标签名 |\n| `text` | `string \\| null` | 元素的直接文本内容 |\n| `inlineStyles` | `Record<string, string>` | camelCase 属性名 |\n| `attributes` | `Record<string, string>` | 除 `style`、`class` 与 `data-hf-*` 外的所有属性 |\n| `classNames` | `string[]` | |\n| `start` | `number \\| null` | 秒 —— 缺少 `data-start` 时为 null |\n| `duration` | `number \\| null` | 秒 —— 既无 `data-duration` 也无 `data-end` 时为 null |\n| `trackIndex` | `number \\| null` | |\n| `animationIds` | `string[]` | 指向该元素的 GSAP tween ID |",
        ],
        codeBlocks: [
          {
            code: 'const elements = comp.getElements();\n\n// Filter in userland\nconst images = elements.filter((el) => el.tag === "img");\nconst timed = elements.filter((el) => el.start !== null);',
            file: "ts",
          },
        ],
        id: "getelements",
        aliases: ["query-api"],
      },
      {
        h: "`getElement(id)`",
        p: "",
        paras: [
          "按 `id` 或 `scopedId` 获取单个元素快照。无匹配元素时返回 `null`。",
          '裸 id（顶层元素）与 scoped id（子合成元素）都接受。裸 id 只在顶层元素中解析：仅存在于子合成内部的叶元素即使其 id 在文档中唯一也会返回 `null` —— 用 `find()` 发现其 scoped 形式（`"hf-HOST/hf-LEAF"`），再传给 `getElement`。',
        ],
        codeBlocks: [
          {
            code: 'const el = comp.getElement("hf-title");\nif (el) {\n  console.log(el.text, el.inlineStyles.color);\n}',
            file: "ts",
          },
        ],
        id: "getelementid",
      },
      {
        h: "`find(query)`",
        p: "",
        paras: [
          "返回所有匹配全部所给 `FindQuery` 字段的元素的 `scopedId` 字符串数组。所有字段均为可选；空查询匹配全部元素（等价于 `getElements().map(el => el.scopedId)`）。",
          "`FindQuery` 字段：",
          '| 字段 | 类型 | 匹配 |\n| - | - | - |\n| `tag` | `string` | 精确标签名 |\n| `text` | `string` | `el.text` 的子串 |\n| `name` | `string` | `data-name` 属性的精确值 |\n| `track` | `number` | 精确 `trackIndex` |\n| `composition` | `string` | `scopedId` 以 `"<host-id>/"` 开头的元素 |',
        ],
        codeBlocks: [
          {
            code: 'import type { FindQuery } from "@hyperframes/sdk";\n\n// By tag\nconst imgIds = comp.find({ tag: "img" });\n\n// By text content (substring match)\nconst headlineIds = comp.find({ text: "Launch" });\n\n// By data-name attribute\nconst logoIds = comp.find({ name: "brand-logo" });\n\n// By track index\nconst track1Ids = comp.find({ track: 1 });\n\n// Filter to elements inside a specific sub-composition (by host hf-id)\nconst innerIds = comp.find({ composition: "hf-intro-scene" });\n\n// Combine fields — all must match\nconst [targetId] = comp.find({ tag: "h1", track: 0 });',
            file: "ts",
          },
        ],
        id: "findquery",
      },
      {
        h: "子合成元素的 `scopedId`",
        p: "",
        paras: [
          '当合成把另一个合成嵌入为子片段时，内部元素可用形如 `"hf-HOST/hf-LEAF"` 的 scoped id 寻址（任意深度：`"hf-A/hf-B/hf-C"`）。对子合成元素，始终把 `scopedId` 作为分发目标 —— 当同一叶 id 出现在多个嵌套作用域时，向 `setText` 或 `setStyle` 传裸叶 id 不会正确解析。',
        ],
        codeBlocks: [
          {
            code: '// Wrong — bare id for a sub-composition element\ncomp.setText("hf-inner-title", "New text"); // may silently no-op\n\n// Correct — use the scopedId returned by find() or getElements()\nconst [id] = comp.find({ name: "inner-title" }); // returns "hf-scene/hf-inner-title"\nif (id) comp.setText(id, "New text");',
            file: "ts",
          },
        ],
        id: "scopedid-for-sub-composition-elements",
      },
      {
        h: "用类型化方法编辑",
        p: "",
        paras: [
          "类型化方法是主要的编辑界面。每个方法分发单个 `EditOp` 并立即返回。变更在下一次 `getElements()` 调用中可见。",
        ],
        codeBlocks: [],
        id: "editing-with-typed-methods",
      },
      {
        h: "`setText(id, value)`",
        p: "",
        paras: ["设置元素的直接文本内容。"],
        codeBlocks: [
          {
            code: 'comp.setText("hf-title", "Shipped.");\ncomp.setText("hf-subtitle", "Available now in all regions.");',
            file: "ts",
          },
        ],
        id: "settextid-value",
      },
      {
        h: "`setStyle(id, styles)`",
        p: "",
        paras: ["合并内联样式。属性名为 camelCase。传 `null` 表示移除该属性。"],
        codeBlocks: [
          {
            code: 'comp.setStyle("hf-card", {\n  backgroundColor: "#1A1A2E",\n  borderRadius: "16px",\n  opacity: "0.9",\n});\n\n// Remove a previously-set inline style\ncomp.setStyle("hf-card", { opacity: null });',
            file: "ts",
          },
        ],
        id: "setstyleid-styles",
      },
      {
        h: "`setAttribute(id, name, value)`",
        p: "",
        paras: ["设置 HTML 属性。传 `null` 移除它。"],
        codeBlocks: [
          {
            code: 'comp.setAttribute("hf-hero-img", "src", "/assets/hero-v2.jpg");\ncomp.setAttribute("hf-hero-img", "alt", "Product screenshot");\n\n// Remove an attribute\ncomp.setAttribute("hf-hero-img", "loading", null);',
            file: "ts",
          },
        ],
        id: "setattributeid-name-value",
      },
      {
        h: "`removeElement(id)`",
        p: "",
        paras: ["从合成中移除元素及其所有子元素。"],
        codeBlocks: [
          {
            code: 'comp.removeElement("hf-old-badge");',
            file: "ts",
          },
        ],
        id: "removeelementid",
      },
      {
        h: "`addElement(parent, index, html)`",
        p: "",
        paras: [
          "以零基兄弟位置 `index` 把 HTML 片段作为 `parent` 子元素插入。`parent` 传 `null` 时插入到文档 body 根。返回新插入根元素新铸的 `hf-id`。",
          "插入的 HTML 必须为单根片段，且不得包含 `<script>` 标签。",
        ],
        codeBlocks: [
          {
            code: 'const newId = comp.addElement("hf-card", 0, `<span class="badge">New</span>`);\n// newId is a fresh stable hf-id, e.g. "hf-a3k7"\n\n// Append at the end (index >= child count)\ncomp.addElement("hf-card", 999, `<div class="footer-note">v2.0</div>`);',
            file: "ts",
          },
        ],
        id: "addelementparent-index-html",
      },
      {
        h: "`setVariableValue(id, value)`",
        p: "",
        paras: ["按变量 id 设置合成变量。"],
        codeBlocks: [
          {
            code: '// String variable\ncomp.setVariableValue("tagline", "The fast path to production.");\n\n// Font variable\ncomp.setVariableValue("headingFont", {\n  name: "Inter",\n  source: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700",\n});\n\n// Image variable\ncomp.setVariableValue("heroBg", {\n  url: "/assets/hero.jpg",\n  fit: "cover",\n});',
            file: "ts",
          },
        ],
        id: "setvariablevalueid-value",
      },
      {
        h: "`batch()` —— 把编辑分组为一步",
        p: "",
        paras: [
          "把相关修改包在 `batch()` 中，使它们合并为单个撤销条目、单次持久化写入与单个 `change` 事件。只要两处或更多编辑逻辑上不可分离，就该用它。",
          "批次是事务性的：若回调抛出异常，该批次产生的所有 DOM 修改都会回滚，合成恢复到批次前状态。",
          "批次可以嵌套 —— 只有最外层边界发出事件并触发持久化写入。",
        ],
        codeBlocks: [
          {
            code: 'comp.batch(() => {\n  comp.setText("hf-title", "Summer Drop");\n  comp.setStyle("hf-title", { color: "#FF6B35", fontSize: "112px" });\n  comp.setTiming("hf-title", { start: 0, duration: 3.5 });\n  comp.setAttribute("hf-logo", "src", "/assets/logo-summer.svg");\n});\n// One undo entry. One disk write. One change event.',
            file: "ts",
          },
        ],
        id: "batch-group-edits-into-one-step",
      },
      {
        h: "`comp.element(id)` → `ElementHandle`",
        p: "",
        paras: [
          "返回携带 `id` 字符串的单态句柄，暴露与顶层 `comp.*` 方法相同的修改方法。适合对同一元素做多处编辑时使用。",
          "句柄只持有 `id` 字符串 —— 没有过期 DOM 引用隐患。在 `dispose()` 之后调用其方法会通过底层分发路径悄悄无操作。",
        ],
        codeBlocks: [
          {
            code: 'const title = comp.element("hf-title");\n\ntitle.setText("Shipped.");\ntitle.setStyle({ color: "#FFD60A", letterSpacing: "-0.02em" });\ntitle.setTiming({ start: 0.5, duration: 3 });',
            file: "ts",
          },
        ],
        id: "compelementid-elementhandle",
        aliases: ["ergonomic-handles"],
      },
      {
        h: "`comp.selection()` → `SelectionProxy`",
        p: "",
        paras: [
          "返回在调用时解析*当前*选择的代理，并把修改一次批次应用到所有选中 id。",
          "选择只是运行时概念 —— 它不持久化，也不包含在 patch 或 override 集合中。用 `getSelection()` 读取当前选择，用 `setSelection(ids)` 编程更改。传空数组清空。",
          "[!NOTE] `SelectionProxy` 与 `ElementHandle` 暴露相同的五个方法：`setStyle`、`setText`、`setAttribute`、`setTiming` 与 `removeElement`。它们刻意对称 —— 可自由互换，无需重新思考调用点。",
        ],
        codeBlocks: [
          {
            code: 'comp.setSelection(["hf-title", "hf-subtitle"]);\n\nconst sel = comp.selection();\nconsole.log(sel.ids); // ["hf-title", "hf-subtitle"]\n\n// Applies setStyle to both ids as a single batch\nsel.setStyle({ opacity: "0.5" });',
            file: "ts",
          },
          {
            code: 'const current = comp.getSelection();\ncomp.setSelection(["hf-logo"]);\ncomp.setSelection([]); // clear',
            file: "ts",
          },
        ],
        id: "compselection-selectionproxy",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [Composition 参考](https://hyperframes.heygen.com/sdk/reference/composition.md) `Composition` 上每个方法的完整签名说明。",
          "[card] [类型参考](https://hyperframes.heygen.com/sdk/reference/types.md) `HyperFramesElement`、`FindQuery`、`ElementHandle`、`SelectionProxy` 等导出类型。",
          "[card] [编辑操作参考](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) 供 `dispatch()` 与 `can()` 调用的所有 `EditOp` 变体清单。",
        ],
        codeBlocks: [],
        bullets: [
          "[使用 SDK 编辑合成](https://hyperframes.heygen.com/sdk/quickstart.md)",
          "[编辑能力判定（Affordances）](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md)",
          "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-timing": {
    lede: "HyperFrames 合成中的每个片段在时间线上有个位置（`data-start`、`data-duration`），并可附一个可选动画。SDK 为两者都提供类型化辅助：时序 API 控制元素*何时*出现、停留多久；动画 API 控制它*如何*在该窗口中移动。",
    sections: [
      {
        h: "读取时序",
        p: "",
        paras: [
          '`getElementTimings()` 返回 `Record<HfId, ElementTimingSnapshot>` —— 每个带时序数据的元素一项。值每次调用都从实时 DOM 派生（永不缓存快照）。键是 `scopedId`：顶层元素等于裸 `id`，子合成内部元素为 scoped 形式 `"hf-HOST/hf-LEAF"`。',
          "每个 `ElementTimingSnapshot` 包含： **enterAt** `number` 元素进入的绝对时间线位置（秒）。",
          "**exitAt** `number` 元素退出的绝对时间线位置（秒）。",
          "**labels** `string[]` 数值位置落在 `[enterAt, exitAt]` 内的 GSAP 时间线标签名。每次 `getElementTimings()` 调用都从 GSAP 脚本重新解析 —— 永不过期。",
          "[!NOTE] `getElementTimings()` 只包含有 `data-start` 且有 `data-duration` 或 `data-end` 属性的元素。无时序元素被省略。该方法在两者并存时优先 `data-duration` 而非 `data-end − data-start`，与 `setTiming` 的行为一致。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\nconst comp = await openComposition(html);\nconst timings = comp.getElementTimings();\n\nfor (const [id, t] of Object.entries(timings)) {\n  console.log(id, t.enterAt, "→", t.exitAt, "labels:", t.labels);\n}',
            file: "ts",
          },
        ],
        id: "clip-timing",
      },
      {
        h: "在单个元素上设置时序",
        p: "",
        paras: [
          "三个字段都可选 —— 只传你想改的： **start** `number` 片段开始时间，以秒计。",
          "**duration** `number` 片段时长，以秒计。",
          "**trackIndex** `number` 零基轨道索引。",
        ],
        codeBlocks: [
          {
            code: '// Move hf-title to start at 1.0 s, last 2.5 s, on track 0\ncomp.setTiming("hf-title", { start: 1.0, duration: 2.5, trackIndex: 0 });',
            file: "ts",
          },
        ],
        id: "reading-timings",
      },
      {
        h: "在一次批次中更新多个元素",
        p: "",
        paras: [
          "`setElementTiming(map)` 在单个批次内为每个条目分发一次 `setTiming` op，因此历史记为一步撤销，patch 监听器看到一个事件： 未知 id 被悄悄跳过。",
        ],
        codeBlocks: [
          {
            code: 'comp.setElementTiming({\n  "hf-title": { start: 0.5, duration: 2.0 },\n  "hf-logo": { start: 0.0, duration: 5.0, trackIndex: 1 },\n  "hf-cta": { start: 3.0, duration: 2.5 },\n});',
            file: "ts",
          },
        ],
        id: "setting-timing-on-one-element",
      },
      {
        h: "弹性保持",
        p: "",
        paras: [
          "弹性保持冻结或循环元素时间线窗口的一部分。在不改变片段时长的情况下，用它在两个动画段之间保持一帧静止画面。",
          "`ElasticHold` 字段： **start** `number` 保持开始的绝对合成时间。",
          "**end** `number` 保持结束的绝对合成时间。",
          '**fill** `"freeze" | "loop"` `"freeze"` 把最后一帧保持到 `end`；`"loop"` 从 `start` 回到 `start` 重复该段。',
        ],
        codeBlocks: [
          {
            code: 'comp.setHold("hf-card", {\n  start: 1.5, // hold begins at this time within the composition\n  end: 4.0, // hold ends at this time\n  fill: "freeze", // "freeze" | "loop"\n});',
            file: "ts",
          },
        ],
        id: "updating-multiple-elements-in-one-batch",
      },
      {
        h: "GSAP Tweens",
        p: "",
        paras: [
          "GSAP tween 是主要的动画原语。SDK 从 `element.animationIds`（查询 API 返回）读取 tween ID，并通过 `addGsapTween`、`setGsapTween` 与 `removeGsapTween` 写入。",
        ],
        codeBlocks: [],
        id: "elastic-holds",
      },
      {
        h: "添加 tween",
        p: "",
        paras: ["`addGsapTween` 返回新分配的动画 ID，为 `string`。"],
        codeBlocks: [
          {
            code: 'const animId = comp.addGsapTween("hf-title", {\n  method: "from",\n  position: 0.5,\n  duration: 0.6,\n  ease: "power3.out",\n  properties: { opacity: 0, y: 40 },\n});\n// animId is the newly-assigned animation ID — store it for subsequent edits',
            file: "ts",
          },
        ],
        id: "gsap-tweens",
      },
      {
        h: "GsapTweenSpec 字段",
        p: "",
        paras: [
          '**method** `"from" | "to" | "fromTo" | "set"` 要调用的 GSAP 时间线方法。',
          '**position** `number | string` 时间线位置：数字（秒）或标签相对字符串（如 `"intro+=0.3"`）。`addWithKeyframes` / `replaceWithKeyframes` 要求纯数字 —— 见下方 [关键帧](#keyframes)。',
          "**duration** `number` tween 时长，以秒计。",
          '**ease** `string` GSAP ease 字符串，如 `"power2.inOut"`。',
          '**fromProperties** `Record\\<string, unknown\\>` `"fromTo"` tween 的起始属性。',
          '**toProperties** `Record\\<string, unknown\\>` 结束属性 —— 与 `"fromTo"` 搭配使用。',
          '**properties** `Record\\<string, unknown\\>` `"from"` 的起始值、`"to"` 的目标值，或 `"set"` 的立即值。省略 `toProperties` 时还为 `"fromTo"` 供给目的地。',
          "**repeat** `number` 重复次数（`-1` = 无限）。映射到 GSAP 的 `repeat` 选项。",
          "**yoyo** `boolean` 为 `true` 时每次重复交替方向。",
          "**stagger** `number | Record\\<string, unknown\\>` GSAP stagger 量（秒）或完整 stagger 配置对象。",
        ],
        codeBlocks: [],
        id: "adding-a-tween",
      },
      {
        h: "修改 tween",
        p: "",
        paras: ["`setGsapTween` 接收动画 ID 与 `Partial<GsapTweenSpec>` —— 只更新你传入的键。"],
        codeBlocks: [
          {
            code: '// Change ease and duration — all other fields stay as-is\ncomp.setGsapTween(animId, { ease: "elastic.out(1, 0.5)", duration: 0.9 });',
            file: "ts",
          },
        ],
        id: "gsaptweenspec-fields",
      },
      {
        h: "移除 tween",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "comp.removeGsapTween(animId);",
            file: "ts",
          },
        ],
        id: "modifying-a-tween",
      },
      {
        h: "查找动画 ID",
        p: "",
        paras: ["查询元素快照，找出附着于给定元素的动画 ID："],
        codeBlocks: [
          {
            code: 'const el = comp.getElement("hf-title");\nconst [firstAnimId] = el?.animationIds ?? [];\nif (firstAnimId) {\n  comp.setGsapTween(firstAnimId, { ease: "none" });\n}',
            file: "ts",
          },
        ],
        id: "removing-a-tween",
      },
      {
        h: "用 `can()` 把关 op",
        p: "",
        paras: [
          "`dispatch()` 不运行验证，因此任何可能失败的 op 都应先用 `can()` 把关，结果非 `ok` 时跳过。添加 tween 或标签需要挂到时间线上 —— 若脚本中没有 `gsap.timeline()`，`can()` 返回 `E_NO_GSAP_TIMELINE`：",
          "`can()` 返回的稳定错误码：",
          "| 代码 | 含义 |\n| - | - |\n| `E_TARGET_NOT_FOUND` | 目标 `HfId` 在文档中不存在。 |\n| `E_NO_ROOT` | 文档没有根元素。 |\n| `E_NO_GSAP_TIMELINE` | GSAP 脚本没有可挂载的 `gsap.timeline()`。先声明一个再重试。 |\n| `E_NO_GSAP_SCRIPT` | 合成没有内嵌 GSAP 脚本。 |",
        ],
        codeBlocks: [
          {
            code: 'const op = {\n  type: "addGsapTween",\n  target: "hf-title",\n  tween: { method: "to", properties: { opacity: 1 }, duration: 0.5 },\n} as const;\n\nconst check = comp.can(op);\nif (!check.ok) {\n  if (check.code === "E_NO_GSAP_TIMELINE") {\n    // No gsap.timeline() in this composition — add one (var tl = gsap.timeline(...)) or skip\n    console.warn("GSAP timeline not available:", check.message);\n  }\n  return;\n}\n\ncomp.dispatch(op);',
            file: "ts",
          },
        ],
        id: "gating-an-op-with-can",
        aliases: ["looking-up-animation-ids"],
      },
      {
        h: "关键帧",
        p: "",
        paras: [
          "关键帧动画用 `addWithKeyframes` 与 `replaceWithKeyframes`。两者都作用于 GSAP CSS-keyframes 层，并返回铸出的动画 ID。",
        ],
        codeBlocks: [],
        id: "keyframes",
      },
      {
        h: "添加关键帧 tween",
        p: "",
        paras: ['返回新的动画 ID 字符串，op 被拒绝时返回 `""`。'],
        codeBlocks: [
          {
            code: 'const animId = comp.addWithKeyframes(\n  "#hf-badge", // CSS selector targeting the element\n  1.0, // timeline position in seconds (number only)\n  0.8, // duration in seconds\n  [\n    { percentage: 0, properties: { opacity: 0, scale: 0.8 } },\n    { percentage: 60, properties: { opacity: 1, scale: 1.05 }, ease: "power2.out" },\n    { percentage: 100, properties: { scale: 1 } },\n  ],\n  "power2.inOut", // optional overall ease\n);',
            file: "ts",
          },
        ],
        id: "adding-a-keyframed-tween",
      },
      {
        h: "替换已有的关键帧 tween",
        p: "",
        paras: [
          "[!WARNING] `replaceWithKeyframes` 等价于在一个原子 op 中做 `removeGsapTween` + `addWithKeyframes`。因为位置派生的 tween ID 在移除步骤后重新编号，返回的 ID 永远是**新** ID，不得假设等于输入的 `animationId`。替换后重新查询 `element.animationIds` 以获取当前集合。",
        ],
        codeBlocks: [
          {
            code: 'const newAnimId = comp.replaceWithKeyframes(oldAnimId, "#hf-badge", 1.0, 1.2, [\n  { percentage: 0, properties: { x: -60, opacity: 0 } },\n  { percentage: 100, properties: { x: 0, opacity: 1 }, ease: "back.out(1.7)" },\n]);\n// newAnimId !== oldAnimId — position-derived IDs renumber after the remove',
            file: "ts",
          },
        ],
        id: "replacing-an-existing-keyframed-tween",
      },
      {
        h: "KeyframeSpec 字段",
        p: "",
        paras: [
          "**percentage** `number` tween 内位置，百分数（0–100）。",
          "**properties** `Record\\<string, number | string\\>` 此关键帧的 CSS / GSAP 属性。",
          "**ease** `string` 从此关键帧到下一关键帧应用的单关键帧 ease。",
          "**auto** `boolean` GSAP 端点标志 —— 为 `true` 时，该关键帧自动取元素当前值。",
        ],
        codeBlocks: [],
        id: "keyframespec-fields",
      },
      {
        h: "更底层关键帧与标签 op",
        p: "",
        paras: [
          "底层操作 —— 单个关键帧修改（`addGsapKeyframe`、`setGsapKeyframe`、`removeGsapKeyframe`）、属性移除、弧线路径、标签插入、动画分割 —— 直接用 `dispatch()` 及相应 `EditOp` 类型。完整 op 联合见 [编辑操作参考](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
          "[card] [编辑操作（Edit Operations）](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) `EditOp` 联合类型的完整参考，包含底层关键帧与弧线路径操作。",
          "[card] [类型参考（Types）](https://hyperframes.heygen.com/sdk/reference/types.md) `GsapTweenSpec`、`KeyframeSpec`、`ElasticHold`、`ElementTimingSnapshot` 及所有相关类型。",
          "[card] [GSAP 动画指南](https://hyperframes.heygen.com/guides/gsap-animation.md) 在合成 HTML 中手工编写 GSAP 时间轴。",
          "[card] [在 Studio 中制作动画](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes) 关键帧创作模式与最佳实践。",
        ],
        codeBlocks: [],
        id: "lower-level-keyframe-and-label-ops",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[在时间线上编辑时序](https://hyperframes.heygen.com/studio/timeline.md)",
          "[从外部导入视频工程](https://hyperframes.heygen.com/guides/imported-film-html.md)",
          "[合成结构](https://hyperframes.heygen.com/concepts/compositions.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-undo": {
    lede: "SDK 的独立会话默认自带撤销/重做，并在每次变更时发出 RFC 6902 JSON patch。Patch 事件是宿主应用历史、协作编辑、审计日志与嵌入式 override 模式的集成接缝。",
    sections: [
      {
        h: "内置撤销与重做",
        p: "",
        paras: [
          "独立会话（无 `overrides` 选项者）自动附加历史模块。直接在合成上调用 `undo()` 与 `redo()`，用 `canUndo()` 与 `canRedo()` 守护 UI 状态。",
          "[!TIP] 当栈为空、或 `openComposition` 曾传 `history: false` 时，`canUndo()` 与 `canRedo()` 返回 `false`。显示撤销/重做控件前检查它们。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\nconst comp = await openComposition(html);\n\ncomp.setText("hf-title", "Draft A");\ncomp.setText("hf-title", "Draft B");\n\ncomp.canUndo(); // true\ncomp.undo();    // reverts "Draft B" → "Draft A"\ncomp.redo();    // reapplies "Draft B"\ncomp.canRedo(); // false — already at tip',
            file: "ts",
          },
        ],
        id: "built-in-undo-and-redo",
      },
      {
        h: "退出内置历史",
        p: "",
        paras: [
          "当宿主应用拥有撤销栈、且希望 SDK 只发出 patch 而不建立平行内部栈时，传 `history: false`： [!NOTE] `history: false` 只禁用 SDK 撤销栈。持久化（自动保存）独立 —— 传 `history: false` 不会抑制磁盘写入。",
        ],
        codeBlocks: [
          {
            code: "const comp = await openComposition(html, {\n  overrides: storedOverrides,\n  history: false,\n});\n// comp.undo() / comp.redo() are no-ops — host drives history via applyPatches()",
            file: "ts",
          },
        ],
        id: "opting-out-of-the-built-in-history",
      },
      {
        h: "合并快速编辑",
        p: "",
        paras: [
          "历史模块在两个条件满足时把 patch 事件合并为一个撤销条目：同一 op 类型与同一元素路径在可配置窗口内被触及。这防止滑杆拖动在栈里塞出数百个分立条目。",
          "默认合并窗口为 300 ms。在 `openComposition` 中覆盖： 合并契约与 `HistoryOptions` 类型的更多说明见 [Utilities](https://hyperframes.heygen.com/sdk/reference/utilities.md)。",
        ],
        codeBlocks: [
          {
            code: "const comp = await openComposition(html, {\n  coalesceMs: 500, // ms — increase for slower interactions\n});",
            file: "ts",
          },
        ],
        id: "coalescing-rapid-edits",
      },
      {
        h: "Patch 事件",
        p: "",
        paras: [
          "每次提交变更都发出 `patch` 事件。订阅它，把 SDK 编辑镜像到你的宿主状态、审计日志或协作通道。",
        ],
        codeBlocks: [
          {
            code: 'const off = comp.on("patch", ({ formatVersion, patches, inversePatches, origin, opTypes }) => {\n  if (formatVersion !== 1) throw new Error("Unexpected patch format version");\n  saveToDB({ patches, inversePatches, origin, opTypes });\n});\n\n// Unsubscribe when done\noff();',
            file: "ts",
          },
        ],
        id: "patch-events",
      },
      {
        h: "PatchEvent 字段",
        p: "",
        paras: [
          "**formatVersion** `1` 当前 SDK 始终为 `1`。检查它并拒绝未知版本 —— 版本提升意味着破坏性变更。",
          "**patches** `JsonPatchOp[]` 已应用的前向 patch：描述文档如何改变的 add/remove/replace ops。",
          "**inversePatches** `JsonPatchOp[]` 撤销本次变更的逆向 patch。与 `patches` 一起存储，以支持宿主拥有的撤销。",
          "**origin** `unknown` 传给 `dispatch()` 或 `batch()` 的 origin 标签。用它路由或过滤事件。",
          '**opTypes** `string[]` 产生该事件的操作语义名（如 `["setStyle"]`）。用于分析与历史标签。不定版本 —— 当作信息性处理。',
        ],
        codeBlocks: [],
        id: "patchevent-fields",
      },
      {
        h: "JsonPatchOp",
        p: "",
        paras: [
          "SDK 只发出与接受 RFC 6902 的 add/remove/replace 子集： SDK 永不发出 `move`、`copy` 或 `test` ops，`applyPatches()` 传入时也会忽略它们。",
        ],
        codeBlocks: [
          {
            code: 'interface JsonPatchOp {\n  op: "add" | "remove" | "replace";\n  path: string;   // JSON Pointer (RFC 6901), e.g. "/elements/hf-title/style/color"\n  value?: unknown;\n}',
            file: "ts",
          },
        ],
        id: "jsonpatchop",
      },
      {
        h: "Origin 模型",
        p: "",
        paras: [
          "每次修改都带一个 origin 字符串。SDK 定义两个内置 origin：",
          '| 常量 | 取值 | 使用时机 |\n| - | - | - |\n| `ORIGIN_LOCAL` | `"local"` | 所有 `dispatch()` 与 `batch()` 调用的默认 |\n| `ORIGIN_APPLY_PATCHES` | `"@hyperframes/sdk:applyPatches"` | `applyPatches()` 自动应用 |',
          "两者都从 `@hyperframes/sdk` 导出。",
        ],
        codeBlocks: [],
        id: "origin-model",
      },
      {
        h: "设置自定义 origin",
        p: "",
        paras: ["在 `dispatch()` 或 `batch()` 的选项中传 `origin`，为下游路由标记事件："],
        codeBlocks: [
          {
            code: 'import { ORIGIN_LOCAL } from "@hyperframes/sdk";\n\ncomp.dispatch(\n  { type: "setStyle", target: "hf-title", styles: { color: "#0EA5E9" } },\n  { origin: "ui:color-picker" },\n);\n\ncomp.batch(() => {\n  comp.setText("hf-cta", "Buy Now");\n  comp.setStyle("hf-cta", { backgroundColor: "#22C55E" });\n}, { origin: "template-wizard" });',
            file: "ts",
          },
        ],
        id: "setting-a-custom-origin",
      },
      {
        h: "用 applyPatches 做宿主拥有历史",
        p: "",
        paras: [
          "`history: false` 时，宿主从 SDK 发出的 patch 事件维护自己的撤销栈。要把某个撤销步骤重放到 SDK，用该栈条目的逆向 patch 调用 `applyPatches()`：",
        ],
        codeBlocks: [
          {
            code: '// Host undo stack entry (built from PatchEvent)\ntype HostEntry = {\n  patches: JsonPatchOp[];\n  inversePatches: JsonPatchOp[];\n};\n\nlet history: HostEntry[] = [];\n\ncomp.on("patch", ({ patches, inversePatches, origin }) => {\n  // Skip — this is the SDK replaying a host-initiated undo\n  if (origin === ORIGIN_APPLY_PATCHES) return;\n  history.push({ patches, inversePatches });\n});\n\nfunction hostUndo() {\n  const entry = history.pop();\n  if (!entry) return;\n  comp.applyPatches(entry.inversePatches);\n}',
            file: "ts",
          },
        ],
        id: "host-owned-history-with-applypatches",
      },
      {
        h: "防止撤销循环",
        p: "",
        paras: [
          "`applyPatches()` 会给其 patch 事件自动打上 `ORIGIN_APPLY_PATCHES` 标签。你的监听器**必须**跳过该 origin，否则会形成无限循环： [!WARNING] 省略 `ORIGIN_APPLY_PATCHES` 守卫会使每次 `applyPatches()` 调用都向宿主栈压入新条目，从而又触发另一次 `applyPatches()`，如此循环。始终先检查 `origin`。",
          '`ORIGIN_APPLY_PATCHES` 是命名空间字符串（`"@hyperframes/sdk:applyPatches"`）而非 `Symbol`，因此能挺过 `postMessage`、结构化克隆与 JSON 往返 —— 当宿主跨帧或 worker 转发 patch 事件时很重要。',
        ],
        codeBlocks: [
          {
            code: 'import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\n\ncomp.on("patch", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // <-- required guard\n  history.push({ patches, inversePatches });\n});',
            file: "ts",
          },
        ],
        id: "preventing-undo-loops",
      },
      {
        h: "带自定义 origin 的 applyPatches",
        p: "",
        paras: [
          "若你希望下游监听器收到不同于默认的显式标记： 除 `ORIGIN_APPLY_PATCHES` 外的任何 origin 在 `history` 仍附加时会进入历史模块。运行宿主拥有历史时，用 `history: false` 或 `trackedOrigins` 过滤避免双重堆栈。",
        ],
        codeBlocks: [
          {
            code: 'comp.applyPatches(entry.inversePatches, { origin: "host:undo" });',
            file: "ts",
          },
        ],
        id: "applypatches-with-a-custom-origin",
      },
      {
        h: "嵌入式 Override 模式集成",
        p: "",
        paras: [
          "嵌入式（T3）模式下，宿主只存储每个用户的稀疏 override 增量。把 `history: false` 与 `applyPatches()` 配对，让宿主驱动撤销，而 SDK 更新合成状态；完整 T3 集成模式见 [嵌入式 Override 模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
          "[card] [Composition API](https://hyperframes.heygen.com/sdk/reference/composition.md) `undo`、`redo`、`canUndo`、`canRedo`、`on`、`applyPatches`、`dispatch` 与 `batch` 的完整方法签名。",
          "[card] [类型参考（Types）](https://hyperframes.heygen.com/sdk/reference/types.md) `PatchEvent`、`JsonPatchOp`、`ORIGIN_APPLY_PATCHES`、`ORIGIN_LOCAL` 及相关类型。",
          "[card] [工具函数（Utilities）](https://hyperframes.heygen.com/sdk/reference/utilities.md) `HistoryOptions`、`coalesceMs`、`trackedOrigins` 及 `createHistory` 内部机制。",
          "[card] [嵌入式 Override 模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md) 历史栈由宿主应用全权持有的完整 T3 嵌入式集成指南。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition, ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\n\nconst comp = await openComposition(baseTemplateHtml, {\n  overrides: storedUserOverrides,\n  history: false,\n});\n\nlet hostStack: HostEntry[] = [];\n\ncomp.on("patch", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return;\n  hostStack.push({ patches, inversePatches });\n  // Persist the updated override set\n  saveOverrides(comp.getOverrides());\n});\n\nfunction undo() {\n  const entry = hostStack.pop();\n  if (entry) comp.applyPatches(entry.inversePatches);\n}',
            file: "ts",
          },
        ],
        id: "embedded-override-mode-integration",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[工具函数与常量](https://hyperframes.heygen.com/sdk/reference/utilities.md)",
          "[使用 SDK 编辑合成](https://hyperframes.heygen.com/sdk/quickstart.md)",
          "[嵌入式 Override 模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-persistence": {
    lede: "向 `openComposition` 传入 `persist` 适配器后，SDK 会订阅每个 `change` 事件并自动调度异步写入。你永远不需要在每次编辑后调用保存方法 —— 适配器负责处理。",
    sections: [
      {
        h: "选项",
        p: "",
        paras: [
          "**persist** `PersistAdapter` 存储适配器。每次变更后 SDK 调用 `adapter.write(persistPath, html)`。省略即跳过持久化（headless / agent 用法）。",
          '**persistPath** `string` 每次写入传给适配器的路径键。默认 `"composition.html"`。会话寿命内不可变 —— 会话中途改路径不支持。',
        ],
        codeBlocks: [],
        id: "options",
      },
      {
        h: "刷新挂起写入",
        p: "",
        paras: [
          "持久化队列会合并快速编辑，因此应用关闭时最后一次写入可能延迟。进程退出前调用 `flush()` 排空挂起写入： `flush()` 在进行中写入完成时 resolve。若没有挂起内容，立即 resolve。未提供 `persist` 适配器时为无操作。",
        ],
        codeBlocks: [
          {
            code: "// Ensure the latest state is committed before the process exits.\nawait comp.flush();\ncomp.dispose();",
            file: "ts",
          },
        ],
        id: "flushing-pending-writes",
      },
      {
        h: "处理写入失败",
        p: "",
        paras: [
          "写入错误作为事件发出，而非抛异常 —— 失败的自动保存不能让交互会话崩溃。用 `comp.on('persist:error', …)` 订阅处理： 事件携带 `{ error: { message: string; hint?: string; cause?: unknown } }`。SDK 会在下一次 `change` 事件时重试，因此瞬时错误会自动恢复。",
        ],
        codeBlocks: [
          {
            code: 'comp.on("persist:error", ({ error }) => {\n  console.error("Autosave failed:", error.message, error.cause);\n  showToast("Could not save — retrying next change.");\n});',
            file: "ts",
          },
        ],
        id: "handling-write-failures",
      },
      {
        h: "`createMemoryAdapter()` —— 测试与演示",
        p: "",
        paras: [
          "进程内存储 —— 无文件 I/O，不要求 Node.js。适合单元测试、演示，或在不访问磁盘的情况下需要版本历史的浏览器会话。",
          "`createMemoryAdapter()` 还暴露 `injectFault(message)` —— 测试辅助，让下一次写入发出 `persist:error` 而非提交。无需真实 I/O 失败即可演练错误处理路径。",
        ],
        codeBlocks: [
          {
            code: 'import { createMemoryAdapter } from "@hyperframes/sdk";\n\nconst adapter = createMemoryAdapter();\n\nconst comp = await openComposition(html, {\n  persist: adapter,\n});\n\ncomp.setText("hf-title", "v1");\nawait comp.flush();\ncomp.setText("hf-title", "v2");\nawait comp.flush();\n\nconst versions = await adapter.listVersions("composition.html");\n// versions[0] is newest — key "v2", versions[1] is "v1"\n\nconst v1Html = await adapter.loadFrom("composition.html", versions[1].key);',
            file: "ts",
          },
        ],
        id: "creatememoryadapter-tests-and-demos",
        aliases: ["shipped-adapters"],
      },
      {
        h: "`createFsAdapter(opts)` —— Node.js 本地开发",
        p: "",
        paras: [
          "写入文件系统，并在 `.hf-versions/` 下保留滚动版本历史。仅 Node.js —— 不要在浏览器构建中使用。",
          "[!NOTE] `createFsAdapter` 从 `@hyperframes/sdk/adapters/fs` **子路径**导入，而非像 `createMemoryAdapter` 那样从主 barrel 导入。fs 适配器会拉入 Node 的 `fs` 模块，单独子路径可让浏览器包树摇掉它 —— 从根导入会把 `node:fs` 拖进浏览器构建。",
          "**root** `string` 根目录。适配器写入 `{root}/{persistPath}`，版本文件保存在 `{root}/.hf-versions/{persistPath}/` 下。",
          "**maxVersions** `number` 每个文件最多保留的版本快照数。最旧的自动裁掉。默认 `20`。",
          "**列出与恢复版本：** 版本键为 `{timestamp}-{counter}` 字符串。`listVersions` 按最新优先返回；`timestamp` 为写入时 Unix 毫秒。",
        ],
        codeBlocks: [
          {
            code: 'import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\n\nconst adapter = createFsAdapter({\n  root: "./project",   // required — directory for composition files\n  maxVersions: 20,     // optional — versions to retain per file (default: 20)\n});',
            file: "ts",
          },
          {
            code: 'const versions = await adapter.listVersions("composition.html");\n// [ { key: "1751234567890-0003", timestamp: 1751234567890 }, ... ]\n// Entries are newest-first.\n\nconst olderHtml = await adapter.loadFrom("composition.html", versions[2].key);\nif (olderHtml) {\n  // Re-open the old snapshot.\n  const restored = await openComposition(olderHtml, { persist: adapter });\n}',
            file: "ts",
          },
        ],
        id: "createfsadapteropts-nodejs-local-dev",
      },
      {
        h: "实现自定义适配器",
        p: "",
        paras: [
          "任何满足 `PersistAdapter` 接口的对象都能直接替换。接口为：**契约：** **最小示例 —— HTTP / S3 风格适配器：** [!NOTE] `write()` 永不抛出 —— 捕获错误并通过 `on('persist:error', …)` 发出。SDK 认为写入在它这边是 fire-and-forget；抛出异常会破坏内部持久化队列。",
          "[card] [适配器参考（Adapters）](https://hyperframes.heygen.com/sdk/reference/adapters.md) `PersistAdapter`、`PersistVersionEntry` 与 `PreviewAdapter` 的完整类型定义。",
          "[card] [openComposition 参考](https://hyperframes.heygen.com/sdk/reference/open-composition.md) 全部 `OpenCompositionOptions` 字段说明，包括 `persist`、`persistPath`、`preview` 与 `overrides`。",
        ],
        codeBlocks: [
          {
            code: 'export interface PersistAdapter {\n  read(path: string): Promise<string | undefined>;\n  write(path: string, content: string): Promise<void>;\n  flush(): Promise<void>;\n  listVersions(path: string): Promise<PersistVersionEntry[]>;\n  loadFrom(path: string, versionKey: string): Promise<string | undefined>;\n  on(event: "persist:error", handler: (event: PersistErrorEvent) => void): () => void;\n}',
            file: "ts",
          },
          {
            code: 'import type { PersistAdapter, PersistVersionEntry, PersistErrorEvent } from "@hyperframes/sdk";\n\nexport function createHttpAdapter(baseUrl: string): PersistAdapter {\n  const errorHandlers: Array<(e: PersistErrorEvent) => void> = [];\n\n  return {\n    async read(path) {\n      const res = await fetch(`${baseUrl}/${path}`);\n      if (res.status === 404) return undefined;\n      return res.text();\n    },\n\n    async write(path, content) {\n      try {\n        await fetch(`${baseUrl}/${path}`, {\n          method: "PUT",\n          body: content,\n          headers: { "Content-Type": "text/html" },\n        });\n      } catch (err) {\n        const message = err instanceof Error ? err.message : String(err);\n        errorHandlers.forEach((h) => h({ error: { message, cause: err } }));\n      }\n    },\n\n    async flush() {\n      // No queuing — writes are immediate.\n    },\n\n    async listVersions(path): Promise<PersistVersionEntry[]> {\n      const res = await fetch(`${baseUrl}/${path}/versions`);\n      if (!res.ok) return [];\n      return res.json() as Promise<PersistVersionEntry[]>;\n    },\n\n    async loadFrom(path, versionKey) {\n      const res = await fetch(`${baseUrl}/${path}/versions/${versionKey}`);\n      if (!res.ok) return undefined;\n      return res.text();\n    },\n\n    on(event, handler) {\n      if (event !== "persist:error") return () => {};\n      errorHandlers.push(handler);\n      return () => {\n        const i = errorHandlers.indexOf(handler);\n        if (i !== -1) errorHandlers.splice(i, 1);\n      };\n    },\n  };\n}',
            file: "ts",
          },
        ],
        bullets: [
          "`read()` 对从未写过的路径返回 `undefined`。",
          "`write()` 幂等 —— 对同一路径的第二次写入覆盖。",
          "`flush()` 在排队写入提交时 resolve。若写入同步，返回 `Promise.resolve()`。",
          "`listVersions()` 按最新优先返回条目。无存储 `content` 的条目合法 —— `loadFrom` 由消费方懒调用。",
          "`loadFrom()` 在版本键未找到时返回 `undefined`。",
          "`on('persist:error', handler)` 注册错误监听器。错误**不得**作为抛出异常传播 —— 应通过事件呈现。返回取消订阅函数。",
        ],
        id: "implementing-a-custom-adapter",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
          "[使用 SDK 编辑合成](https://hyperframes.heygen.com/sdk/quickstart.md)",
          "[嵌入式 Override 模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-embedded": {
    lede: "嵌入覆盖模式适用于模板驱动型产品：维护一份基础组合 HTML 文件，并在其旁边仅存储每个实例的增量（即 `OverrideSet`）。当用户编辑其实例时，SDK 会把进一步的更改累积到同一个增量中——基础部分保持不变。",
    sections: [
      {
        h: "使用覆盖集打开",
        p: "",
        paras: [
          "调用 `openComposition` 时，把存储的增量作为 `overrides` 传入。SDK 会将已保存的更改应用到基础模板上，因此会话一开始即可呈现用户编辑后的确切状态： `openComposition` 返回后，`comp.getElements()` 会反映覆盖后的状态。任何进一步的编辑都会自动累积到同一个增量中。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\n// Stored delta — loaded from your database or storage layer.\nconst storedOverrides = {\n  "hf-title.text": "Acme Corp Launch",\n  "hf-logo.attr.src": "/customers/acme/logo.png",\n  "hf-subtitle.style.color": "#0EA5E9",\n};\n\nconst comp = await openComposition(templateHtml, {\n  overrides: storedOverrides,\n  history: false, // host owns undo — see below\n});',
            file: "ts",
          },
        ],
        id: "opening-with-overrides",
      },
      {
        h: "读取当前增量",
        p: "",
        paras: [
          "调用 `getOverrides()` 可读取当前增量以便存储。它返回一份可直接序列化保存的副本： 下一次打开会话时，再次把 `nextOverrides` 作为 `overrides` 传入——用户就会看到其确切状态。",
          "通过 `addElement()` 插入的元素也会存入增量，包括其父级和兄弟位置。后续的文本、样式或属性编辑会在恢复的元素上重放： `getOverrides()` 会保存每个新增或恢复元素在所有子节点中的当前位置，包括相邻文本。移除临时兄弟节点在重新打开后不会改变该元素位置。请按原样存储返回的集合，不要对其键排序。SDK 会保留最新的编辑顺序，使后续子元素编辑在其父级快照之后应用。",
        ],
        codeBlocks: [
          {
            code: 'comp.setText("hf-cta", "Get started free");\ncomp.setStyle("hf-cta", { backgroundColor: "#22C55E" });\n\nconst nextOverrides = comp.getOverrides();\n// { "hf-title.text": "Acme Corp Launch", ..., "hf-cta.text": "Get started free", ... }\n\nawait db.saveOverrides(sessionId, nextOverrides);',
            file: "ts",
          },
          {
            code: 'const id = comp.addElement("hf-stage", 1, "<p>Available today</p>");\ncomp.setText(id, "Available worldwide");\n\nconst reopened = await openComposition(templateHtml, {\n  overrides: comp.getOverrides(),\n});\nreopened.getElement(id)?.text; // "Available worldwide"',
            file: "ts",
          },
        ],
        id: "reading-the-current-delta",
      },
      {
        h: "覆盖集键格式",
        p: "",
        paras: [
          "键遵循 `hfId.prop.path` 模式。常见形式有：",
          '| 键 | 含义 |\n| - | - |\n| `"hf-title.text"` | 元素 `hf-title` 的内部文本 |\n| `"hf-logo.attr.src"` | `hf-logo` 上的 `src` 属性 |\n| `"hf-x.style.fontSize"` | `hf-x` 上的内联 `fontSize` 样式 |\n| `"hf-card"` 与元素快照 | 新增或恢复的元素，含其 HTML、父级和兄弟位置 |\n| `"hf-card"` 值为 `null` | 删除标记——元素已被删除 |',
          "`null` 值表示删除标记。当 SDK 序列化组合时，会完全省略该元素。这使宿主可以区分“从未触碰”（键不存在）与“用户删除”（键存在，值为 `null`）。",
          '子组合元素使用作用域 ID——`"hf-host/hf-leaf.text"`——其中宿主与叶节点以 `/` 分隔。',
          '已编写 ID 中的句点仍属于该 ID：编辑 `hf-title.main` 会生成 `"hf-title.main.text"`，重新打开时仍恢复到同一个元素。非空的整个元素值必须是 `getOverrides()` 返回的快照。打开增量时会跳过整个元素键下的标量值和不完整快照。',
        ],
        codeBlocks: [],
        id: "override-set-key-format",
      },
      {
        h: "字体与图像变量覆盖",
        p: "",
        paras: [
          "变量覆盖（来自 `setVariableValue`）位于 `var.{id}` 键下。字体与图像值是对象，而非字符串： 当读取 `var.*` 键下的 `OverrideSet` 值时，请先做类型收窄，再将其视为标量——其类型为 `string | number | boolean | Record<string, unknown> | null`。",
        ],
        codeBlocks: [
          {
            code: 'import type { FontValue, ImageValue } from "@hyperframes/sdk";\n\n// Font variable — name is the CSS font-family, source is the stylesheet URL.\nconst fontOverride: FontValue = {\n  name: "Inter",\n  source: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",\n};\n\n// Image variable — url is the src; alt and fit are optional.\nconst imageOverride: ImageValue = {\n  url: "/customers/acme/hero.jpg",\n  alt: "Acme hero image",\n  fit: "cover",\n};\n\ncomp.setVariableValue("brand-font", fontOverride);\ncomp.setVariableValue("hero-image", imageOverride);\n\nconst overrides = comp.getOverrides();\n// {\n//   "var.brand-font": { name: "Inter", source: "https://…" },\n//   "var.hero-image": { url: "/customers/acme/hero.jpg", alt: "…", fit: "cover" },\n// }',
            file: "ts",
          },
        ],
        id: "font-and-image-variable-overrides",
      },
      {
        h: "禁用 SDK 撤销",
        p: "",
        paras: [
          "在嵌入模式下，撤销栈通常由宿主管理。SDK 在嵌入模式下默认已关闭历史记录（任何带 `overrides` 打开的会话），因此通常无需做任何操作。仅在独立代码路径中为使意图明确，或在调用点可能或可能不提供 `overrides` 时作为防护，才显式传入 `history: false`：",
          "[!NOTE] `history: false` 仅禁用 SDK 内部的撤销栈。持久化（若你提供了 `persist` 适配器）是独立的——省略它不会影响自动保存。不过在嵌入模式下，撤销和持久化通常都由宿主管理，因此通常两者都不需要传入。",
        ],
        codeBlocks: [
          {
            code: "const comp = await openComposition(templateHtml, {\n  overrides: storedOverrides,\n  history: false,\n});",
            file: "ts",
          },
        ],
        id: "disabling-sdk-undo",
      },
      {
        h: "通过 `applyPatches()` 实现宿主自有的撤销",
        p: "",
        paras: [
          "当宿主弹出一个撤销条目，需要把逆向补丁重放到 SDK 时，请使用 `applyPatches()`。SDK 会将补丁应用到实时文档，更新内部覆盖集，并发出带 `ORIGIN_APPLY_PATCHES` 标记的 `patch` 事件。",
          "`applyPatches()` 接受可选的 `opts.origin` 覆盖项，若你想用其他哨兵值标记事件，但宿主撤销/重做流程通常期望使用默认的 `ORIGIN_APPLY_PATCHES`。",
          "完整的补丁事件契约与逆向补丁处理请见[撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)。",
        ],
        codeBlocks: [
          {
            code: 'import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\n\n// Host undo stack entry — inversePatches came from a prior \'patch\' event.\nfunction hostUndo(inversePatches: JsonPatchOp[]) {\n  comp.applyPatches(inversePatches);\n}\n\n// Guard against undo loops — skip ORIGIN_APPLY_PATCHES events in the patch listener.\ncomp.on("patch", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // already from host undo — do not re-push\n  hostHistory.push({ patches, inversePatches });\n});',
            file: "ts",
          },
        ],
        id: "host-owned-undo-via-applypatches",
      },
      {
        h: "完整示例",
        p: "",
        paras: [
          "[card] [openComposition 参考](https://hyperframes.heygen.com/sdk/reference/open-composition.md) 完整 `OpenCompositionOptions`，包括 `overrides`、`history` 和 `persist`。",
          "[card] [类型参考](https://hyperframes.heygen.com/sdk/reference/types.md) `OverrideSet`、`FontValue`、`ImageValue`、`PatchEvent` 和 `ORIGIN_APPLY_PATCHES`。",
          "[card] [撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) 补丁事件格式、逆向补丁契约以及防止撤销循环。",
          "[card] [画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 将 SDK 接入编辑器画布内的实时预览 iframe。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition, ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\nimport type { JsonPatchOp, OverrideSet } from "@hyperframes/sdk";\n\nasync function openUserSession(\n  templateHtml: string,\n  storedOverrides: OverrideSet,\n) {\n  const hostHistory: Array<{ patches: readonly JsonPatchOp[]; inversePatches: readonly JsonPatchOp[] }> = [];\n  let historyIndex = hostHistory.length;\n\n  const comp = await openComposition(templateHtml, {\n    overrides: storedOverrides,\n    history: false,\n  });\n\n  // Record every user edit in the host undo stack.\n  comp.on("patch", ({ patches, inversePatches, origin }) => {\n    if (origin === ORIGIN_APPLY_PATCHES) return;\n    // Discard any redo entries ahead of the cursor.\n    hostHistory.splice(historyIndex);\n    hostHistory.push({ patches, inversePatches });\n    historyIndex = hostHistory.length;\n  });\n\n  return {\n    comp,\n\n    undo() {\n      if (historyIndex === 0) return;\n      const { inversePatches } = hostHistory[--historyIndex];\n      comp.applyPatches([...inversePatches]);\n    },\n\n    redo() {\n      if (historyIndex >= hostHistory.length) return;\n      const { patches } = hostHistory[historyIndex++];\n      comp.applyPatches([...patches]);\n    },\n\n    async save() {\n      // Only store the delta — not the full HTML.\n      return comp.getOverrides();\n    },\n  };\n}',
            file: "ts",
          },
        ],
        id: "full-example",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
          "[画布与预览集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)",
          "[撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-canvas": {
    lede: "SDK 的 `PreviewAdapter` 接口将编辑模型与视觉呈现层解耦。对于基于浏览器的编辑器，`createIframePreviewAdapter` 将 SDK 桥接到包含组合的同源 `<iframe>`，提供同步点击测试、60fps 拖拽预览和选择管理——在用户提交之前都不触碰模型。",
    sections: [
      {
        h: "嵌入组合",
        p: "",
        paras: [
          "在编辑器外壳中把组合 HTML 渲染到同源 `<iframe>` 中，然后把该元素和一个 dispatch 回调传给 `createIframePreviewAdapter`： 回调在 `comp` 声明之前就引用了它——这是有意的，也是安全的：箭头函数通过闭包捕获 `comp`，且只会在之后（由指针释放时的 `commitPreview()`）被调用，到那时 `comp` 已赋值。这是消除适配器 ⇄ 会话循环依赖的标准写法。",
          "`dispatch` 回调是可选的。省略它意味着 `commitPreview()` 为空操作，这在你想自行处理 op 派生时很有用。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition, createIframePreviewAdapter } from "@hyperframes/sdk";\n\n// Assume `compositionHtml` is the composition\'s source HTML string.\nconst iframe = document.querySelector<HTMLIFrameElement>("#composition-frame")!;\n\n// Build the adapter first so you can pass it to openComposition.\n// The dispatch callback is called by commitPreview() after a drag completes.\nconst preview = createIframePreviewAdapter(iframe, (op) => {\n  comp.dispatch(op);\n});\n\nconst comp = await openComposition(compositionHtml, { preview });',
            file: "ts",
          },
        ],
        id: "embedding-the-composition",
      },
      {
        h: "让预览保持同步",
        p: "",
        paras: [
          "以上内容只接通了点击测试和拖拽——但 iframe 仍不会反映其他方式产生的编辑（例如检查器面板直接调用 `comp.setStyle()`、撤销、或通过 `applyPatches()` 重放的协作者变更）。`attachSync` 正是用来弥补这一差距的：一旦同时有了 `preview` 和 `comp` 就调用一次，之后所有编辑——包括撤销/重做——都会自动镜像到实时 iframe 上。",
          "`attachSync` 会先立即对 `comp` 的当前状态做一次全量同步（因此用已有覆盖集重新打开组合也不会出现空白 iframe），然后订阅与其他监听器相同的 `patch` 事件。你不需要编写自己的镜像代码，也不需要单独处理撤销/重做——两者都流经同一个订阅。脚本标签编辑（GSAP 脚本重写）是唯一不会镜像的内容，因为重放实时 `<script>` 标签不会重新执行它。",
          "[!NOTE] 再次以不同的 `comp` 调用 `attachSync` 时，会先注销之前的订阅——当编辑器不卸载 iframe 就切换其绑定的组合时很有用。",
        ],
        codeBlocks: [
          {
            code: "const detach = preview.attachSync(comp);\n\n// later, when the editor unmounts or swaps compositions:\ndetach();",
            file: "ts",
          },
        ],
        id: "keeping-the-preview-in-sync",
      },
      {
        h: "点击测试：定位用户点击的内容",
        p: "",
        paras: [
          "`preview.elementAtPoint(x, y)` 在 iframe 自身坐标系的坐标处执行同步点击测试，返回最近的 `[data-hf-id]` 元素；对于透明点击返回 `null`。",
          "点击测试会跳过计算后不透明度为 `0` 的元素（包括不透明度为 `0` 的祖先），且对于 `<img>` 元素，它使用离屏 canvas 在点击像素处采样 alpha——透明像素会穿透到其背后的元素。使 canvas 染色的跨源图片则回退为把该像素视为不透明。",
          "`opts.atTime` 参数会被接受，但不会寻址 GSAP 时间轴。它反映组合在 iframe 中当前暂停的那一帧。跨时间段的精确不透明度查询是未来功能。",
        ],
        codeBlocks: [
          {
            code: 'iframe.addEventListener("load", () => {\n  const frameDocument = iframe.contentDocument;\n  if (!frameDocument) return;\n\n  // Events inside an iframe do not bubble to the outer <iframe> element.\n  frameDocument.addEventListener("click", (event) => {\n    const hit = preview.elementAtPoint(event.clientX, event.clientY);\n    if (hit) {\n      // hit.id  — the data-hf-id value\n      // hit.tag — the lowercased tag name (e.g. "div", "img", "video")\n      preview.select([hit.id]);\n    }\n  });\n});',
            file: "ts",
          },
        ],
        id: "hit-testing-finding-what-the-user-clicked",
      },
      {
        h: "从点击目标向上走到最近的 HF 元素",
        p: "",
        paras: [
          "如果你直接在 iframe 的 `contentDocument` 上处理事件（例如通过 `message` 桥接），请使用导出的 `resolveNearestHfElement` 函数。它从任意节点向上遍历 DOM，直到找到一个 `[data-hf-id]` 祖先，并跳过根节点：",
          "当遍历退出树而未找到 `[data-hf-id]` 节点、匹配节点带有 `[data-hf-root]`（根对选择透明）、或 `isVisible` 对该节点返回 `false` 时，`resolveNearestHfElement` 返回 `null`。",
        ],
        codeBlocks: [
          {
            code: 'import { resolveNearestHfElement } from "@hyperframes/sdk";\n\n// Inside the iframe\'s own document context:\niframeDoc.addEventListener("click", (e) => {\n  const result = resolveNearestHfElement(\n    e.target as Element | null,\n    (el) => {\n      // Return false to treat this element as invisible and continue the walk.\n      const style = el.ownerDocument.defaultView?.getComputedStyle(el);\n      return style ? parseFloat(style.opacity) !== 0 : true;\n    },\n  );\n  if (result) {\n    // result.id, result.tag\n  }\n});',
            file: "ts",
          },
        ],
        id: "walking-a-click-target-to-the-nearest-hf-element",
      },
      {
        h: "叠加在其他内容之上的透明组合",
        p: "",
        paras: [
          "以覆盖层形式编写的组合——例如 1080×1920 帧上叠加在视频或头像之上的小图形——在 DOM 中仍是一个覆盖每一像素的矩形盒子。若不加处理，它会吞掉所有点击，下方的内容将无法触及。",
          "`preview.isProvablyEmptyAt(x, y)` 正是需要回答的问题：这个点是否可证明无墨迹，从而点击可以安全地到达下方内容？根据答案切换包装器的 `pointer-events`，让浏览器把事件交给正确的目标： [!WARNING]",
          "请监听**宿主文档**，不要监听包装器或 iframe。包装器首次设为 `pointer-events: none` 后就不再接收事件，因此挂在那里的监听器永远无法把它改回来——穿透状态会卡住。",
          "这里有三件事容易搞错： **1. 在按下之前决定，而不是在按下时决定** 浏览器在任何处理程序运行之前就选定了事件目标，因此在 `mousedown` 中翻转 `pointer-events` 无法重新定向已在途的点击。请在 `mousemove` 时采样指针位置，并让决策保持最新。",
          "**2. 在每一帧重新评估，而不仅是移动时** 动画画面会在静止光标下移动。任何可能改变答案的东西——指针移动、Alt 键和播放头——都必须从上次已知位置重新运行查询。请把这些触发合并为一次 `requestAnimationFrame` 查询，而不是逐条回答；且在指针位于组合盒子之外时请先短路跳过查询：它是对文档的遍历，不应该放在无门槛的逐事件路径上。",
          "**3. 让极性发挥作用** `isProvablyEmptyAt` 仅在已确认无墨迹时为真。文档未加载完成、适配器没有该方法、以及无法映射的点都会返回假值——这使组合保持可点击而不会消失。不要把它反转为“是否绘制”的变量；那会重新引入极性所消除的 bug。",
          "如果编辑器把几乎覆盖整帧的层视为背景而非画面——这是常见选择，因为全出血包装器通常是脚手架而不是用户所指的内容——请传入 `{ fullBleedFraction: 0.9 }`。",
          "不要用 `elementsFromPoint` 自己重写这个逻辑。该堆栈会省略 `pointer-events: none` 节点，而带有 `pointer-events: none` 的装饰性覆盖层仍会绘制——z 堆栈查询会报告可见画面之上无墨迹，仍然把点击穿透出去。出于这个原因，绘制遍历是按几何方式覆盖元素盒子的。",
        ],
        codeBlocks: [
          {
            code: 'const wrapper = document.querySelector<HTMLElement>("#composition-wrapper")!;\n\n/**\n * Host-page pointer coordinates → the iframe document\'s own client space, which is what\n * the paint query samples against. The iframe renders at the composition\'s native size and is\n * CSS-scaled to fit, so the on-screen scale has to be divided out — skip this and you\n * sample the wrong pixel, and pass-through toggles over the wrong regions.\n */\nfunction toCompositionPoint(clientX: number, clientY: number) {\n  const rect = iframe.getBoundingClientRect();\n  if (!rect.width || !rect.height) return null;\n  const scaleX = rect.width / compositionNativeWidth;\n  const scaleY = rect.height / compositionNativeHeight;\n  if (!scaleX || !scaleY) return null;\n  return { x: (clientX - rect.left) / scaleX, y: (clientY - rect.top) / scaleY };\n}\n\nfunction updatePassThrough(clientX: number, clientY: number, altKey: boolean) {\n  const point = toCompositionPoint(clientX, clientY);\n  // Alt is the escape hatch for grabbing the composition itself in an empty region.\n  // Every uncertain case — no point, still loading, adapter without the method — is\n  // falsy here, so the composition stays clickable rather than vanishing.\n  const passThrough =\n    !!point && !altKey && !!preview.isProvablyEmptyAt?.(point.x, point.y);\n  wrapper.style.pointerEvents = passThrough ? "none" : "";\n}',
            file: "ts",
          },
        ],
        id: "transparent-compositions-over-other-content",
      },
      {
        h: "草稿循环：在不修改模型的情况下实现 60fps 拖拽",
        p: "",
        paras: [
          "草稿循环在拖拽期间让模型保持干净。SDK **不在** 60fps 路径中——你在每次 `pointermove` 时调用 `preview.applyDraft`，在 `pointerup` 时调用一次 `preview.commitPreview`。模型每次拖拽只看到一个 `moveElement` op，而不是几百个。",
          "`applyDraft` 直接在 iframe 内设置元素的 CSS `translate`——拖拽前的值与累积增量叠加——因此拖拽在任何组合中可见，无需组合侧 CSS，且对 GSAP 动画元素同样有效（在 GSAP 首次解析之后设置的 `translate` 会与动画变换叠加，而不是被覆盖）。SDK 模型没有任何变化。`cancelPreview` 恢复拖拽前的 translate；`commitPreview` 派生一个 `moveElement` op，并把已提交的位置镜像到实时元素上。",
          "`DraftProps` 接受 `dx`、`dy`、`width` 和 `height`。宽度和高度虽在接口中被接受，但缩放支持（映射到 `setStyle` op）尚未接通——目前只有 `dx`/`dy` 驱动草稿 CSS 变量。",
          "若想丢弃拖拽且不发出任何 op，请调用 `cancelPreview()` 而非 `commitPreview()`。模型从未被修改，CSS 变量会被清除。",
        ],
        codeBlocks: [
          {
            code: 'let dragging = false;\nlet startX = 0;\nlet startY = 0;\nlet targetId: string | null = null;\n\niframe.addEventListener("load", () => {\n  const frameDocument = iframe.contentDocument;\n  if (!frameDocument) return;\n\n  frameDocument.addEventListener("pointerdown", (event) => {\n    const hit = preview.elementAtPoint(event.clientX, event.clientY);\n    if (!hit) return;\n\n    dragging = true;\n    targetId = hit.id;\n    startX = event.clientX;\n    startY = event.clientY;\n    // The target comes from the iframe\'s realm, so `instanceof Element` against\n    // this window\'s constructor is always false and capture would be skipped —\n    // then a pointer leaving the frame loses `pointerup` and drag state sticks.\n    if (event.target && "setPointerCapture" in event.target) {\n      (event.target as Element).setPointerCapture(event.pointerId);\n    }\n  });\n\n  frameDocument.addEventListener("pointermove", (event) => {\n    if (!dragging || !targetId) return;\n    preview.applyDraft(targetId, {\n      dx: event.clientX - startX,\n      dy: event.clientY - startY,\n    });\n  });\n\n  frameDocument.addEventListener("pointerup", () => {\n    if (!dragging || !targetId) return;\n    preview.commitPreview();\n    dragging = false;\n    targetId = null;\n  });\n\n  frameDocument.addEventListener("pointercancel", () => {\n    preview.cancelPreview();\n    dragging = false;\n    targetId = null;\n  });\n});',
            file: "ts",
          },
        ],
        id: "draft-loop-60fps-drag-without-model-mutations",
      },
      {
        h: "选择",
        p: "",
        paras: [
          "`preview.select(ids, opts?)` 设置选择状态，并向任何监听者触发会话的 `selectionchange` 事件。传入 `{ additive: true }` 可扩展当前选择，而不是替换它。",
          '通过 `comp.on("selectionchange", ...)` 在会话上监听选择变化——由适配器触发该事件，而不是 iframe 上的单独事件。',
        ],
        codeBlocks: [
          {
            code: '// Replace selection\npreview.select(["hf-title"]);\n\n// Extend selection (e.g. shift-click)\npreview.select(["hf-logo"], { additive: true });\n\n// Clear selection\npreview.select([]);',
            file: "ts",
          },
        ],
        id: "selection",
      },
      {
        h: "与嵌入覆盖模式配合",
        p: "",
        paras: [
          "对于模板驱动型产品，通常在嵌入覆盖模式下打开组合，只存储稀疏增量，而不是完整 HTML。预览适配器在该模式下同样工作——按相同方式传入即可： 完整模式请见 [嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
        ],
        codeBlocks: [
          {
            code: "const comp = await openComposition(templateHtml, {\n  preview,\n  overrides: existingOverrides,\n  history: false,\n});",
            file: "ts",
          },
        ],
        id: "pairing-with-embedded-override-mode",
      },
      {
        h: "下一步构建什么",
        p: "",
        paras: [
          "点击测试和拖拽跑通后，可以使用能力解析器来驱动上下文感知的检查器面板，呈现当前选中元素的可用控件。参见 [编辑能力](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md) 了解如何把实时元素转换为能力标志与分区适用性。",
          "[card] [适配器参考](https://hyperframes.heygen.com/sdk/reference/adapters.md) 完整 `PreviewAdapter`、`PersistAdapter` 及相关类型文档。",
          "[card] [编辑能力](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md) 解析选中元素应显示哪些编辑控件。",
        ],
        codeBlocks: [],
        id: "what-to-build-next",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[在画布上编辑](https://hyperframes.heygen.com/studio/canvas.md)",
          "[嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)",
          "[适配器](https://hyperframes.heygen.com/sdk/reference/adapters.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-affordances": {
    lede: "`resolveElementAffordances` 回答的是这个问题：“此时用户可以对这个元素做什么？”它需要一个实时 DOM 元素及其 SDK 模型条目作为输入。它返回两个对象：`capabilities`（每个编辑动作的布尔标志）和 `sections`（适用的检查器面板）。你用这些值在编辑器的详情面板中按条件渲染控件，而不是为所有元素显示固定的字段集。",
    sections: [
      {
        h: "导入",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { resolveElementAffordances } from "@hyperframes/sdk/editing";',
            file: "ts",
          },
        ],
        id: "import",
      },
      {
        h: "签名",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'function resolveElementAffordances(\n  liveEl: HTMLElement,\n  modelEl: Pick<HyperFramesElement, "text" | "animationIds" | "start"> | null,\n  ctx?: AffordanceContext,\n): EditingAffordances',
            file: "ts",
          },
        ],
        bullets: [
          "`liveEl`——组合 iframe 中一个实时且已布局的 `HTMLElement`。解析器会对它调用 `getComputedStyle`，因此它必须挂载在已渲染的文档中。",
          "`modelEl`——SDK 模型元素（`comp.getElement(id)`），或当元素存在于实时 DOM 中但不在 SDK 源模型中时为 `null`（生成元素）。传入 `null` 会限制能力：样式编辑被禁用，并设置 `reasonIfDisabled`。",
          "`ctx`——针对 Studio 特定概念的可选上下文。对于大多数自定义编辑器，可以省略它或让所有标志保持默认值（`false`）。",
        ],
        id: "signature",
      },
      {
        h: "`AffordanceContext`",
        p: "",
        paras: ["这些标志是 Studio 特定的。在独立自定义编辑器中可以完全省略 `ctx`。"],
        codeBlocks: [
          {
            code: "interface AffordanceContext {\n  isCompositionHost?: boolean;      // default false\n  isCompositionRoot?: boolean;      // default false\n  isInsideLockedComposition?: boolean; // default false\n  isMasterView?: boolean;           // default false\n}",
            file: "ts",
          },
        ],
        id: "affordancecontext",
      },
      {
        h: "返回值",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "interface EditingAffordances {\n  capabilities: DomEditCapabilities;\n  sections: EditingSectionApplicability;\n}",
            file: "ts",
          },
        ],
        id: "return-value",
      },
      {
        h: "`capabilities`",
        p: "",
        paras: [
          "[!WARNING] `canMove` 和 `canResize` 表示该元素具有可直接作为字段编辑的已编写 `left`/`top`/`width`/`height` 样式值。画布拖拽操作映射到 `canApplyManualOffset`，而不是 `canMove`。不要用 `canMove` 控制拖拽手柄。",
        ],
        codeBlocks: [
          {
            code: "interface DomEditCapabilities {\n  canSelect: boolean;\n  canEditStyles: boolean;\n  /** Apply a non-destructive clip-path crop. */\n  canCrop: boolean;\n  /** Directly editable authored left/top style fields. */\n  canMove: boolean;\n  /** Directly editable authored width/height style fields. */\n  canResize: boolean;\n  /** Canvas translate-drag maps here, not to canMove. */\n  canApplyManualOffset: boolean;\n  canApplyManualSize: boolean;\n  canApplyManualRotation: boolean;\n  /** Set when canEditStyles / canMove / canResize is false; explains why. */\n  reasonIfDisabled?: string;\n}",
            file: "ts",
          },
        ],
        id: "capabilities",
      },
      {
        h: "`sections`",
        p: "",
        paras: [
          "`sections.colorGrading` 仅为元素级：它表示该元素支持调色控件。Studio 会为支持的媒体元素显示调色面板。",
        ],
        codeBlocks: [
          {
            code: "interface EditingSectionApplicability {\n  text: boolean;         // true when the element has editable text content\n  media: boolean;        // true for <video> and <audio>\n  colorGrading: boolean; // true for <video> and <img> — element-level only\n  timing: boolean;       // true when data-start is present or animationCount > 0\n  animation: boolean;    // true when animationCount > 0\n  layout: boolean;       // position, size, rotation, and stacking controls apply\n  style: boolean;        // fill, radius, stroke, shadow, blend, and clip controls apply\n}",
            file: "ts",
          },
        ],
        id: "sections",
      },
      {
        h: "端到端示例",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { openComposition, createIframePreviewAdapter } from "@hyperframes/sdk";\nimport { resolveElementAffordances } from "@hyperframes/sdk/editing";\n\nconst iframe = document.querySelector<HTMLIFrameElement>("#composition-frame")!;\nconst preview = createIframePreviewAdapter(iframe, (op) => comp.dispatch(op));\nconst comp = await openComposition(compositionHtml, { preview });\n\nfunction onElementSelected(hfId: string) {\n  // 1. Get the live DOM element from the iframe.\n  const liveEl = iframe.contentDocument?.querySelector<HTMLElement>(\n    `[data-hf-id="${hfId}"]`,\n  );\n  if (!liveEl) return;\n\n  // 2. Get the SDK model element — null for script-generated elements.\n  const modelEl = comp.getElement(hfId);\n\n  // 3. Resolve affordances.\n  const { capabilities, sections } = resolveElementAffordances(liveEl, modelEl);\n\n  // 4. Render controls conditionally.\n  renderInspector({ capabilities, sections, hfId });\n}\n\nfunction renderInspector({\n  capabilities,\n  sections,\n  hfId,\n}: {\n  capabilities: ReturnType<typeof resolveElementAffordances>["capabilities"];\n  sections: ReturnType<typeof resolveElementAffordances>["sections"];\n  hfId: string;\n}) {\n  // Show a disabled-state tooltip when editing is locked.\n  if (!capabilities.canEditStyles && capabilities.reasonIfDisabled) {\n    showDisabledBanner(capabilities.reasonIfDisabled);\n    return;\n  }\n\n  // Style panel — always show when editing is allowed.\n  if (capabilities.canEditStyles) {\n    showStylePanel(hfId);\n  }\n\n  // Position/size fields — only for absolutely positioned elements with px values.\n  if (capabilities.canMove) {\n    showPositionFields(hfId);\n  }\n  if (capabilities.canResize) {\n    showSizeFields(hfId);\n  }\n\n  // Canvas drag handles — use canApplyManualOffset, NOT canMove.\n  if (capabilities.canApplyManualOffset) {\n    showDragHandles(hfId);\n  }\n\n  // Section panels.\n  if (sections.text) showTextPanel(hfId);\n  if (sections.media) showMediaPanel(hfId);\n  if (sections.colorGrading && myFeatureFlags.colorGrading) showColorGradingPanel(hfId);\n  if (sections.timing) showTimingPanel(hfId);\n  if (sections.animation) showAnimationPanel(hfId);\n}',
            file: "ts",
          },
        ],
        id: "end-to-end-example",
      },
      {
        h: "注意事项",
        p: "",
        paras: [
          "**仅支持浏览器。** `resolveElementAffordances` 在内部调用 `getComputedStyle`。不得在 Node、服务端操作或任何非浏览器路径中导入或调用它。SDK 适配器（`@hyperframes/sdk/editing`）与纯核心解析器分离，正是为了让 Node 端 SDK 路径不带浏览器全局变量。",
          "**需要已布局的 DOM。** `canMove` 和 `canResize` 需要实时计算后的 `position`、`left` 和 `top`。如果在 iframe 完成布局之前（例如在 `srcdoc` 赋值后同步）就调用 `resolveElementAffordances`，这两个标志都会是 `false`。请先等待 iframe 的 `load` 事件或组合的第一帧渲染完成，再解析能力。",
          "**`null` 模型表示仅可选择。** 当 `modelEl` 为 `null`（该元素由运行时生成，没有源条目）时，解析器会设置 `existsInSource: false`。这给出 `canSelect: true`，但 `canEditStyles: false`、`canMove: false`，所有手动几何标志均为 `false`，并设置 `reasonIfDisabled` 为人类可读的解释。你仍可显示选中高亮；只是隐藏或禁用所有编辑控件。",
          "**`canApplyManualOffset` 与 `canMove` 的区别。** 只有当元素具有绝对/固定定位，且有已编写的 `left`/`top` px 值，且几何不是由 transform 驱动时，`canMove` 才为真。而 `canApplyManualOffset` 对所有非根非宿主元素与定位无关均为真。[画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 中的 translate 画布拖拽（`applyDraft` / `commitPreview` 流程）以 `canApplyManualOffset` 为门槛——它不要求 `canMove`。",
          "**`colorGrading` 是元素级而非功能级。** `sections.colorGrading` 表示元素类型支持调色（`<video>` 或 `<img>`）。你自己的功能标志是另一个独立的与条件。切勿用该字段替代你的功能标志。",
        ],
        codeBlocks: [],
        id: "gotchas",
      },
      {
        h: "类型参考",
        p: "",
        paras: [
          "完整类型定义——`EditingAffordances`、`DomEditCapabilities`、`EditingSectionApplicability`、`AffordanceContext`、`HyperFramesElement`——记录在 [`/sdk/reference/types`](https://hyperframes.heygen.com/sdk/reference/types)。",
          "纯 DOM 无关解析器（`resolveEditingAffordances`、`EditableElementFacts`）位于 `@hyperframes/core`，记录在 [`/packages/core`](https://hyperframes.heygen.com/packages/core)。",
          "[card] [画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 通过点击测试和 iframe 适配器获取实时元素与选择。",
          "[card] [类型参考](https://hyperframes.heygen.com/sdk/reference/types.md) SDK 公共界面的完整类型定义。",
        ],
        codeBlocks: [],
        id: "type-reference",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[工具与常量](https://hyperframes.heygen.com/sdk/reference/utilities.md)",
          "[画布与预览集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-open": {
    lede: "`openComposition` 是每个 SDK 会话的唯一入口。它解析组合 HTML，为缺少稳定 `hf-id` 属性的元素打上 `hf-id` 标记，并返回可以接收编辑的 [`Composition`](https://hyperframes.heygen.com/sdk/reference/composition)。",
    sections: [
      {
        h: "签名",
        p: "",
        paras: [
          "| 参数 | 类型 | 说明 |\n| - | - | - |\n| `html` | `string` | 完整的组合 HTML 字符串。 |\n| `opts` | `OpenCompositionOptions` | 可选配置——适配器、覆盖集、历史记录行为。 |",
        ],
        codeBlocks: [
          {
            code: "openComposition(html: string, opts?: OpenCompositionOptions): Promise<Composition>",
            file: "ts",
          },
        ],
        id: "signature",
      },
      {
        h: "模式",
        p: "",
        paras: [
          "同一个函数覆盖三种部署模式。你得到哪种模式，完全取决于你在 `opts` 中传入的内容。",
          "**独立（默认）**——你拥有 HTML，SDK 拥有历史记录和持久化。传入 `persist` 适配器可启用自动保存；除非用 `history: false` 退出，否则撤销/重做会自动挂载。",
          "**嵌入 / 覆盖模式**——传入 `overrides` 可在共享基础模板之上应用用户专属增量来打开。SDK 会把进一步的编辑累积到覆盖集中，你只存储增量。嵌入模式下历史记录默认关闭（由宿主的栈驱动撤销）。参见[嵌入覆盖模式指南](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
          "**无头 / 智能体**——省略 `persist` 和 `overrides`。SDK 是纯内存变换。完成后调用 `serialize()` 并丢弃会话。",
        ],
        codeBlocks: [],
        id: "modes",
      },
      {
        h: "选项",
        p: "",
        paras: [
          "**persist** `PersistAdapter` 用于自动保存的存储适配器。每次已提交的变更后，SDK 会把写入任务排入该适配器的队列。会话会触发 `persist:error` 事件而不是在写入失败时抛错。",
          "内置适配器：`createMemoryAdapter()`（测试/演示）和 `createFsAdapter()`（Node.js）。自定义适配器实现 `PersistAdapter` 接口，从 `@hyperframes/sdk` 导出。（`createHeadlessAdapter()` 是 `preview` 字段下面的 `PreviewAdapter`，不是持久化适配器。）",
          "适配器选择与配置请见[持久化指南](https://hyperframes.heygen.com/sdk/guides/persistence.md)。",
          "**persistPath** `string`（默认：“composition.html”） 持久化队列传给适配器 `write` 调用的相对路径。在会话的生命周期内不可变——更改它会在磁盘上创建新文件而不会删除旧文件。你必须关闭并重新打开会话才能更改保存路径。",
          "**preview** `PreviewAdapter` 将 SDK 模型桥接到渲染界面的实时预览适配器。提供时，适配器的选择事件会更新 `comp.getSelection()`，使指针驱动的点击测试与模型保持同步，而不经过修改路径。",
          "内置：同源组合 iframe 使用 `createIframePreviewAdapter()`，不存在预览界面时使用 `createHeadlessAdapter()`。",
          '**overrides** `OverrideSet` 在会话开始前应用到基础 HTML 之上的稀疏 `{ "hfId.prop.path": value }` 映射。每次后续编辑都会累积到此映射中。当前映射可通过 `comp.getOverrides()` 读取。',
          "提供 `overrides` 即会激活**嵌入模式**：历史记录默认为关闭，SDK 发出补丁而非拥有撤销栈。宿主只存储增量，并在每次打开时重放，因此基础模板可以独立更新。",
          "参见[嵌入覆盖模式指南](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
          "**trackedOrigins** `unknown[]` 其修改会进入撤销栈的来源值白名单。默认为除 `ORIGIN_APPLY_PATCHES`（`applyPatches()` 使用的哨兵值）之外的所有来源。当你从多个来源派发编辑，只想让其中一些可撤销时使用此选项——例如，把程序化批量更新排除在用户可见的撤销历史之外。",
          "**coalesceMs** `number`（默认：300） 以毫秒计的自动合并窗口。在此窗口内到达的连续修改会合并为一个撤销条目。对于较慢的交互可增大，对于更细的历史记录粒度可减小，或设为 `0` 完全禁用合并。",
          "**history** `false` 传入 `false` 可跳过挂载撤销/重做模块。会话的 `undo()`、`redo()`、`canUndo()` 和 `canRedo()` 将成为空操作。",
          "当宿主拥有撤销栈，且 SDK 的历史模块会与其重复时使用此选项。注意，禁用历史记录**不会**禁用持久化——自动保存独立运行，因此禁用撤销不会无声丢弃磁盘写入。",
          "在嵌入模式下（提供 `overrides` 时），历史记录默认为关闭，不必使用此选项。",
        ],
        codeBlocks: [],
        id: "options",
      },
      {
        h: "无头智能体编辑",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\nconst comp = await openComposition(html);\n\nconst [titleId] = comp.find({ name: "headline" });\nif (titleId) {\n  comp.setText(titleId, "New headline");\n  comp.setStyle(titleId, { color: "#FFD60A" });\n}\n\nconst updatedHtml = comp.serialize();\ncomp.dispose();',
            file: "ts",
          },
        ],
        id: "examples",
      },
      {
        h: "带文件系统持久化的独立模式",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\nimport { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: "./project" }),\n  persistPath: "index.html",\n});\n\ncomp.on("persist:error", ({ error }) => {\n  console.error("Autosave failed:", error.message);\n});\n\ncomp.setText("hf-title", "Launch day");\nawait comp.flush(); // drain any pending write before process exit\ncomp.dispose();',
            file: "ts",
          },
        ],
        id: "headless-agent-edit",
      },
      {
        h: "带覆盖集的嵌入模式",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\n\nimport { openComposition } from "@hyperframes/sdk";\n\n// Stored override delta for one customer\nconst savedOverrides = {\n  "hf-title.text": "Acme — Q3 Review",\n  "hf-logo.attr.src": "/customers/acme/logo.png",\n};\n\nconst comp = await openComposition(baseTemplateHtml, {\n  overrides: savedOverrides,\n  history: false,\n});\n\n// Host drives undo; SDK just accumulates overrides\ncomp.on("patch", ({ patches, inversePatches, origin }) => {\n  if (origin !== ORIGIN_APPLY_PATCHES) {\n    hostHistoryStack.push({ patches, inversePatches });\n  }\n});\n\ncomp.setStyle("hf-title", { color: "#0EA5E9" });\n\n// Persist the updated delta only — not the full HTML\nconst nextOverrides = comp.getOverrides();\nawait db.save(customerId, nextOverrides);\ncomp.dispose();',
            file: "ts",
          },
        ],
        id: "standalone-with-filesystem-persistence",
      },
      {
        h: "禁用历史记录以降低开销",
        p: "",
        paras: [
          "[!NOTE] 历史记录在独立模式下默认为**开启**，在嵌入模式下默认为**关闭**。只有当你自行管理撤销栈、不想让 SDK 创建平行副本时，才需要在独立模式下传入 `history: false`。",
        ],
        codeBlocks: [
          {
            code: 'const comp = await openComposition(html, {\n  persist: createFsAdapter({ root: "./output" }),\n  history: false, // host owns undo; persist still runs\n});',
            file: "ts",
          },
        ],
        id: "embedded-mode-with-overrides",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [Composition](https://hyperframes.heygen.com/sdk/reference/composition.md) `openComposition` 返回的完整编辑界面。",
          "[card] [持久化指南](https://hyperframes.heygen.com/sdk/guides/persistence.md) 适配器选择、版本历史和自定义适配器。",
          "[card] [嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md) 宿主自有历史记录的模板驱动型产品。",
        ],
        codeBlocks: [],
        bullets: [
          "[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)",
          "[用 SDK 编辑组合](https://hyperframes.heygen.com/sdk/quickstart.md)",
          "[嵌入覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-composition": {
    lede: "`Composition` 是 [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition) 返回的对象。所有 SDK 编辑都经过此接口。类型化方法是 `dispatch()` 的便捷封装；无论使用哪个入口，校验都在 `dispatch()` 中运行。",
    sections: [
      {
        h: "类型化编辑方法",
        p: "",
        paras: [
          "类型化方法是应用常见编辑的推荐方式。每个方法内部都会调用 `dispatch()`，因此所有补丁事件、历史记录和持久化行为都相同。",
        ],
        codeBlocks: [],
        id: "typed-edit-methods",
      },
      {
        h: "`setStyle`",
        p: "",
        paras: [
          "对单个元素应用内联 CSS 样式。使用 camelCase 属性名（与 `CSSStyleDeclaration` 一致）。传入 `null` 作为值可移除该属性。",
        ],
        codeBlocks: [
          {
            code: "setStyle(id: HfId, styles: Record<string, string | null>): void",
            file: "ts",
          },
          {
            code: 'comp.setStyle("hf-title", { color: "#FFD60A", fontSize: "96px" });\ncomp.setStyle("hf-card", { borderRadius: null }); // removes border-radius',
            file: "ts",
          },
        ],
        id: "setstyle",
      },
      {
        h: "`setText`",
        p: "",
        paras: ["替换元素的显示文本。作用于元素的直接文本内容，而不是所有后代文本。"],
        codeBlocks: [
          {
            code: "setText(id: HfId, value: string): void",
            file: "ts",
          },
          {
            code: 'comp.setText("hf-headline", "Product launch — June 2026");',
            file: "ts",
          },
        ],
        id: "settext",
      },
      {
        h: "`setAttribute`",
        p: "",
        paras: ["设置或移除 HTML 属性。传入 `null` 可完全移除该属性。"],
        codeBlocks: [
          {
            code: "setAttribute(id: HfId, name: string, value: string | null): void",
            file: "ts",
          },
          {
            code: 'comp.setAttribute("hf-logo", "src", "/assets/logo-v2.png");\ncomp.setAttribute("hf-video", "autoplay", null); // removes autoplay',
            file: "ts",
          },
        ],
        id: "setattribute",
      },
      {
        h: "`setTiming`",
        p: "",
        paras: [
          "更新单个元素的 `data-start`、`data-duration` 和/或 `data-track-index` 属性。所有字段均为可选；省略的字段保持不变。",
        ],
        codeBlocks: [
          {
            code: "setTiming(id: HfId, timing: { start?: number; duration?: number; trackIndex?: number }): void",
            file: "ts",
          },
          {
            code: 'comp.setTiming("hf-title", { start: 0.5, duration: 2.5 });\ncomp.setTiming("hf-cta", { trackIndex: 1 });',
            file: "ts",
          },
        ],
        id: "settiming",
      },
      {
        h: "`removeElement`",
        p: "",
        paras: [
          "从组合中移除元素及其所有后代。逆操作是对被移除子树的 `addElement`，因此 `undo()` 可以精确恢复它。",
        ],
        codeBlocks: [
          {
            code: "removeElement(id: HfId): void",
            file: "ts",
          },
          {
            code: 'comp.removeElement("hf-old-badge");',
            file: "ts",
          },
        ],
        id: "removeelement",
      },
      {
        h: "`addElement`",
        p: "",
        paras: [
          "将 HTML 片段作为 `parent` 的子元素插入到基于零的兄弟索引 `index` 处。传入 `null` 作为 `parent` 可在文档 body 根部插入。片段必须是单根的，且不得包含 `<script>` 标签。返回插入根元素新生成的 `hf-id`。",
        ],
        codeBlocks: [
          {
            code: "addElement(parent: HfId | null, index: number, html: string): HfId",
            file: "ts",
          },
          {
            code: 'const newId = comp.addElement("hf-scene", 0, \'<div class="clip">New clip</div>\');\ncomp.setText(newId, "Inserted clip");',
            file: "ts",
          },
        ],
        id: "addelement",
      },
      {
        h: "`setVariableValue`",
        p: "",
        paras: [
          "更新组合变量。字体变量需要 `FontValue` 对象 `{ name, source }`；图像变量需要 `ImageValue` 对象 `{ url, alt?, fit? }`。标量变量接受 `string | number | boolean`。",
          "[!NOTE] `setVariableValue` 仅更新变量的当前值——它拒绝创建未声明的变量。请使用 `declareVariable` 来创建变量。",
        ],
        codeBlocks: [
          {
            code: "setVariableValue(id: string, value: string | number | boolean | FontValue | ImageValue): void",
            file: "ts",
          },
          {
            code: 'comp.setVariableValue("brandColor", "#6C5CE7");\ncomp.setVariableValue("brandFont", { name: "Inter", source: "https://fonts.googleapis.com/css2?family=Inter" });\ncomp.setVariableValue("heroImage", { url: "/assets/hero.jpg", fit: "cover" });',
            file: "ts",
          },
        ],
        id: "setvariablevalue",
      },
      {
        h: "`getVariableValue`",
        p: "",
        paras: [
          "返回已声明变量的当前 `default` 值，若 id 未声明或没有设置值则返回 `undefined`。",
          "传入 `{ base: true }` 可读取**打开时编写的**默认值——在 T3 覆盖集或任何折叠进声明的 `setVariableValue` 之前的值。这是当宿主重放移除 `var.<id>` 覆盖的撤销时需要恢复的值。对于会话中途声明的变量，`{ base: true }` 返回其实时默认值（其声明即其基础）。",
        ],
        codeBlocks: [
          {
            code: "getVariableValue(id: string, opts?: { base?: boolean }): string | number | boolean | FontValue | ImageValue | undefined",
            file: "ts",
          },
          {
            code: 'const color = comp.getVariableValue("brandColor"); // "#6C5CE7"',
            file: "ts",
          },
        ],
        id: "getvariablevalue",
      },
      {
        h: "`listVariables`",
        p: "",
        paras: [
          "返回每个已声明变量的完整 schema——`id`、`type`、`label`、`default`，以及类型专属字段（数字的 `min`/`max`/`step`、枚举的 `options`、字体的 `source` 等）。当组合没有声明变量时返回 `[]`。",
        ],
        codeBlocks: [
          {
            code: "listVariables(): CompositionVariable[]",
            file: "ts",
          },
          {
            code: "for (const v of comp.listVariables()) {\n  console.log(v.id, v.type, v.default);\n}",
            file: "ts",
          },
        ],
        id: "listvariables",
      },
      {
        h: "`declareVariable` / `updateVariableDeclaration` / `removeVariableDeclaration`",
        p: "",
        paras: [
          "管理 `data-composition-variables` schema 本身。`declareVariable` 添加新的类型化声明（组合没有该属性时创建属性）；`updateVariableDeclaration` 整体替换现有声明——id 不可变，改名请使用 remove + declare；`removeVariableDeclaration` 删除声明（删除最后一个时会删除整个属性）。三者都通过 `can()` 校验（`E_DUPLICATE_VARIABLE`、`E_VARIABLE_NOT_FOUND`、`E_INVALID_ARGS`、`E_INVALID_VARIABLE_ID`——id 必须匹配 `/^[A-Za-z_][A-Za-z0-9_-]*$/`，因为它会成为 CSS 自定义属性名、`data-var-*` 值和 CLI `--variables` 键；以及 `E_FRAGMENT_COMPOSITION`）。声明位于组合的声明根：完整文档为 `<html>` 元素，模板/片段子组合为组合根元素（`[data-composition-id]`）。尽管名字如此，`E_FRAGMENT_COMPOSITION` 现在仅在源中完全没有根元素可承载 schema 时触发——有组合根的片段是可以接受声明的。（代码保留以兼容；修复方式是“添加组合根元素”，不一定是“添加 `<html>`”。）",
          "[!NOTE] `removeVariable(id)` 是 `removeVariableDeclaration(id)` 的简写别名。",
        ],
        codeBlocks: [
          {
            code: "declareVariable(declaration: CompositionVariable): void\nupdateVariableDeclaration(id: string, declaration: CompositionVariable): void\nremoveVariableDeclaration(id: string): void",
            file: "ts",
          },
          {
            code: 'comp.declareVariable({ id: "title", type: "string", label: "Title", default: "Hello" });\ncomp.updateVariableDeclaration("title", { id: "title", type: "string", label: "Headline", default: "Hello" });\ncomp.removeVariableDeclaration("title");',
            file: "ts",
          },
        ],
        id: "declarevariable-updatevariabledeclaration-removevariabledeclaration",
      },
      {
        h: "`getVariableDeclarations` / `getVariableValues` / `validateVariableValues` / `getVariableUsage`",
        p: "",
        paras: [
          "只读变量 API（不经过 dispatch）。`getVariableDeclarations` 返回类型化 schema（与渲染流水线使用的相同严格过滤）。`getVariableValues` 将该组合文件中已声明默认值与给定覆盖集合并后解析值。运行时还会在组装后的文档中遍历内联子组合的声明，因此需要更宽视角时，请分别查询每个 SDK 组合。`validateVariableValues` 执行与 `--strict-variables` 相同的检查（`undeclared` / `type-mismatch` / `enum-out-of-range`）。`getVariableUsage` 静态扫描每个内联脚本的 `getVariables()` 读取并与 schema 交叉引用：`{ usedIds, unusedDeclarations, undeclaredReads, scanIncomplete }`——当脚本动态访问变量时 `scanIncomplete` 置为真，此时 `usedIds` 是下界。",
        ],
        codeBlocks: [
          {
            code: "getVariableDeclarations(): CompositionVariable[]\ngetVariableValues(overrides?: Record<string, unknown>): Record<string, unknown>\nvalidateVariableValues(values: Record<string, unknown>): VariableValidationIssue[]\ngetVariableUsage(): VariableUsageReport",
            file: "ts",
          },
        ],
        id: "getvariabledeclarations-getvariablevalues-validatevariablevalues-getvariableusage",
      },
      {
        h: "`setPreviewVariables`",
        p: "",
        paras: [
          "将临时变量值应用到预览界面（从不持久化——如需更改默认值请使用 `setVariableValue`）。传入 `null` 可恢复已声明默认值。委托给预览适配器的可选 `setPreviewVariables`；当适配器不支持时返回 `false`。",
        ],
        codeBlocks: [
          {
            code: "setPreviewVariables(values: Record<string, unknown> | null): boolean",
            file: "ts",
          },
        ],
        id: "setpreviewvariables",
      },
      {
        h: "`getElementTimings`",
        p: "",
        paras: [
          "返回每个计时元素的进入/退出时间和活动 GSAP 标签。SDK 使用 `data-duration` 派生 `enterAt`/`exitAt`，若无则回退到 `data-end − data-start`。GSAP 标签每次调用时从脚本重新解析。没有计时属性的元素会被排除。",
        ],
        codeBlocks: [
          {
            code: "getElementTimings(): Record<HfId, ElementTimingSnapshot>",
            file: "ts",
          },
          {
            code: "const timings = comp.getElementTimings();\nfor (const [id, t] of Object.entries(timings)) {\n  console.log(id, t.enterAt, t.exitAt, t.labels);\n}",
            file: "ts",
          },
        ],
        id: "getelementtimings",
      },
      {
        h: "`setElementTiming`",
        p: "",
        paras: [
          "在一批中应用稀疏计时映射。所有条目都在单个 `batch()` 调用内派发，因此历史记录只看到一个撤销步骤。未知 ID 的条目会被静默跳过。",
        ],
        codeBlocks: [
          {
            code: "setElementTiming(map: Record<HfId, { start?: number; duration?: number; trackIndex?: number }>): void",
            file: "ts",
          },
          {
            code: 'comp.setElementTiming({\n  "hf-title":   { start: 0,   duration: 2   },\n  "hf-caption": { start: 1.5, duration: 1.5 },\n  "hf-cta":     { start: 3,   duration: 2   },\n});',
            file: "ts",
          },
        ],
        id: "setelementtiming",
      },
      {
        h: "`setHold`",
        p: "",
        paras: ["设置弹性保持窗口——时间轴暂停期间冻结或循环元素的 `{ start, end, fill }` 范围。"],
        codeBlocks: [
          {
            code: "setHold(id: HfId, hold: ElasticHold): void",
            file: "ts",
          },
          {
            code: 'comp.setHold("hf-hero", { start: 2, end: 5, fill: "freeze" });',
            file: "ts",
          },
        ],
        id: "sethold",
      },
      {
        h: "`addGsapTween`",
        p: "",
        paras: ["向组合时间轴添加针对给定元素的 GSAP tween。返回新分配的 `animationId`。"],
        codeBlocks: [
          {
            code: "addGsapTween(target: HfId, tween: GsapTweenSpec): string",
            file: "ts",
          },
          {
            code: 'const animId = comp.addGsapTween("hf-title", {\n  method: "from",\n  position: 0,\n  duration: 0.6,\n  ease: "power3.out",\n  properties: { opacity: 0, y: 40 },\n});',
            file: "ts",
          },
        ],
        id: "addgsaptween",
      },
      {
        h: "`setGsapTween`",
        p: "",
        paras: ["更新现有 tween 的属性。仅更改你提供的字段；其余保持不变。"],
        codeBlocks: [
          {
            code: "setGsapTween(animationId: string, properties: Partial<GsapTweenSpec>): void",
            file: "ts",
          },
          {
            code: 'comp.setGsapTween(animId, { ease: "back.out(1.7)", duration: 0.8 });',
            file: "ts",
          },
        ],
        id: "setgsaptween",
      },
      {
        h: "`removeGsapTween`",
        p: "",
        paras: ["按动画 ID 移除 tween。"],
        codeBlocks: [
          {
            code: "removeGsapTween(animationId: string): void",
            file: "ts",
          },
          {
            code: "comp.removeGsapTween(animId);",
            file: "ts",
          },
        ],
        id: "removegsaptween",
      },
      {
        h: "`addWithKeyframes`",
        p: "",
        paras: [
          "为 `targetSelector` 在给定时间轴位置和时长添加新的关键帧 tween。返回新生成的 `animationId`。位置是秒数（不是标签相对字符串）。",
        ],
        codeBlocks: [
          {
            code: "addWithKeyframes(\n  targetSelector: string,\n  position: number,\n  duration: number,\n  keyframes: KeyframeSpec[],\n  ease?: string,\n): string",
            file: "ts",
          },
          {
            code: 'const animId = comp.addWithKeyframes(\n  "#hf-logo",\n  0.5,\n  1.2,\n  [\n    { percentage: 0,   properties: { opacity: 0, scale: 0.8 } },\n    { percentage: 100, properties: { opacity: 1, scale: 1   } },\n  ],\n  "power2.out",\n);',
            file: "ts",
          },
        ],
        id: "addwithkeyframes",
      },
      {
        h: "`replaceWithKeyframes`",
        p: "",
        paras: [
          "原子地移除现有 tween 并添加替换用的关键帧 tween。返回替换 tween 的 `animationId`。由于移除后位置派生的 ID 会重排，返回的 ID 可能与输入的 `animationId` 不同——请把返回值视为新的规范 ID。",
        ],
        codeBlocks: [
          {
            code: "replaceWithKeyframes(\n  animationId: string,\n  targetSelector: string,\n  position: number,\n  duration: number,\n  keyframes: KeyframeSpec[],\n  ease?: string,\n): string",
            file: "ts",
          },
          {
            code: 'const newId = comp.replaceWithKeyframes(\n  oldAnimId,\n  "#hf-card",\n  1.0,\n  0.8,\n  [\n    { percentage: 0,   properties: { x: -100 } },\n    { percentage: 100, properties: { x: 0     } },\n  ],\n);',
            file: "ts",
          },
        ],
        id: "replacewithkeyframes",
      },
      {
        h: "`undo` / `redo`",
        p: "",
        paras: [
          "在撤销历史中前后步进。当历史记录被禁用（选项中 `history: false`）或在嵌入模式下时为空操作。",
        ],
        codeBlocks: [
          {
            code: "undo(): void\nredo(): void",
            file: "ts",
          },
          {
            code: 'comp.setText("hf-title", "Draft");\ncomp.undo(); // reverts to original text\ncomp.redo(); // re-applies "Draft"',
            file: "ts",
          },
        ],
        id: "undo-redo",
      },
      {
        h: "`canUndo` / `canRedo`",
        p: "",
        paras: ["当该方向有可用步骤时返回 `true`。用它来驱动撤销/重做 UI 控件的启用状态。"],
        codeBlocks: [
          {
            code: "canUndo(): boolean\ncanRedo(): boolean",
            file: "ts",
          },
          {
            code: "undoButton.disabled = !comp.canUndo();\nredoButton.disabled = !comp.canRedo();",
            file: "ts",
          },
        ],
        id: "canundo-canredo",
      },
      {
        h: "`getElements`",
        p: "",
        paras: [
          "返回组合中所有元素的扁平数组，包括嵌套在子组合中的元素。每个 `ElementSnapshot` 携带元素的 `id`、`scopedId`、`tag`、`inlineStyles`、`classNames`、`attributes`、`text`、计时字段和 `animationIds`。数组是新副本；对返回对象所做的修改不起作用。",
          '[!NOTE] 对于内联子组合中的元素，请使用 `scopedId`（例如 `"hf-host/hf-leaf"`）作为派发目标，而不是 `id`。顶层元素的 `scopedId === id`。',
        ],
        codeBlocks: [
          {
            code: "getElements(): ElementSnapshot[]",
            file: "ts",
          },
          {
            code: 'const elements = comp.getElements();\nconst images = elements.filter((el) => el.tag === "img");',
            file: "ts",
          },
        ],
        id: "getelements",
        aliases: ["query"],
      },
      {
        h: "`getRootElements`",
        p: "",
        paras: [
          "仅返回顶层元素，每个元素携带其完整子树——任何 id 不会出现两次（不像 `getElements` 会把每个嵌套元素扁平到同一数组）。当你需要每个顶层片段一条记录，而不是树中每个元素时使用此方法。",
        ],
        codeBlocks: [
          {
            code: "getRootElements(): ElementSnapshot[]",
            file: "ts",
          },
          {
            code: "const roots = comp.getRootElements();",
            file: "ts",
          },
        ],
        id: "getrootelements",
      },
      {
        h: "`getElement`",
        p: "",
        paras: [
          "按 ID 返回单个元素的快照。同时接受裸 ID（顶层元素）和作用域 ID（子组合元素）。若没有匹配元素则返回 `null`。",
        ],
        codeBlocks: [
          {
            code: "getElement(id: HfId): ElementSnapshot | null",
            file: "ts",
          },
          {
            code: 'const el = comp.getElement("hf-title");\nif (el) {\n  console.log(el.tag, el.inlineStyles);\n}',
            file: "ts",
          },
        ],
        id: "getelement",
      },
      {
        h: "`find`",
        p: "",
        paras: [
          "按结构化查询搜索元素。返回匹配元素的 `scopedId` 字符串数组。`FindQuery` 中的所有字段均为可选，按 AND 逻辑组合。",
          '| 字段 | 类型 | 说明 |\n| - | - | - |\n| `tag` | `string` | 精确的 HTML 标签名，小写（`"div"`、`"img"`）。 |\n| `text` | `string` | 对元素 `text` 字段的子字符串匹配。 |\n| `name` | `string` | 与 `data-name` 属性精确匹配。 |\n| `track` | `number` | 精确的轨道索引（`data-track-index`）。 |\n| `composition` | `string` | 按其 `hf-id` 过滤到特定子组合宿主内部的元素。 |',
        ],
        codeBlocks: [
          {
            code: "find(query: FindQuery): string[]",
            file: "ts",
          },
          {
            code: 'const headlineIds = comp.find({ name: "headline" });\nconst allImages   = comp.find({ tag: "img" });\nconst track1Ids   = comp.find({ track: 1 });',
            file: "ts",
          },
        ],
        id: "find",
      },
      {
        h: "`getAllAnimationIds`",
        p: "",
        paras: [
          "返回组合脚本中解析到的每个 GSAP tween id，无论其目标选择器当前是否匹配实时 DOM 元素。这与单个 `ElementSnapshot` 自身的 `animationIds` 字段不同，后者只列出选择器解析到该特定元素的 tween。",
        ],
        codeBlocks: [
          {
            code: "getAllAnimationIds(): Set<string>",
            file: "ts",
          },
          {
            code: "const allIds = comp.getAllAnimationIds();",
            file: "ts",
          },
        ],
        id: "getallanimationids",
      },
      {
        h: "`selection`",
        p: "",
        paras: [
          "返回一个 `SelectionProxy`，它在调用时解析 `getSelection()`，并把操作派发到所有选中元素。代理在调用 `selection()` 时捕获 ID 列表——后续的选择变更不会影响已捕获的代理。",
        ],
        codeBlocks: [
          {
            code: "selection(): SelectionProxy",
            file: "ts",
          },
          {
            code: 'const sel = comp.selection();\nsel.setStyle({ opacity: "0.5" });\nsel.removeElement(); // removes all currently selected elements',
            file: "ts",
          },
        ],
        id: "selection",
      },
      {
        h: "`element`",
        p: "",
        paras: [
          "返回单个元素的柯里化 `ElementHandle`。句柄仅存储 ID 字符串，因此即使 DOM 在两次调用之间发生变化，也没有过期引用隐患。",
        ],
        codeBlocks: [
          {
            code: "element(id: HfId): ElementHandle",
            file: "ts",
          },
          {
            code: 'const title = comp.element("hf-title");\ntitle.setText("Hello");\ntitle.setStyle({ fontWeight: "700" });',
            file: "ts",
          },
        ],
        id: "element",
        aliases: ["selection"],
      },
      {
        h: "`getSelection`",
        p: "",
        paras: ["返回当前选择的副本，以 `hf-id` 字符串数组形式返回。未选中时返回 `[]`。"],
        codeBlocks: [
          {
            code: "getSelection(): string[]",
            file: "ts",
          },
          {
            code: "const ids = comp.getSelection();\nconsole.log(`${ids.length} elements selected`);",
            file: "ts",
          },
        ],
        id: "getselection",
      },
      {
        h: "`setSelection`",
        p: "",
        paras: ["替换当前选择。触发 `selectionchange`。传入 `[]` 可清除选择。重复 ID 会自动去重。"],
        codeBlocks: [
          {
            code: "setSelection(ids: string[]): void",
            file: "ts",
          },
          {
            code: 'comp.setSelection(["hf-title", "hf-subtitle"]);\ncomp.setSelection([]); // clear',
            file: "ts",
          },
        ],
        id: "setselection",
      },
      {
        h: "`dispatch`",
        p: "",
        paras: [
          "应用数据形状的编辑操作。所有类型化方法内部都调用此方法。当需要应用没有类型化封装的操作类型、构建程序化构造 op 的自动化，或需要设置自定义 `origin` 时使用 `dispatch`。",
          "完整 op 目录请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
          "你也可以通过向 `target` 传入数组，用一次 `dispatch` 作用于多个元素：",
        ],
        codeBlocks: [
          {
            code: "dispatch(op: EditOp, opts?: { origin?: unknown }): void",
            file: "ts",
          },
          {
            code: 'comp.dispatch({ type: "setStyle", target: "hf-card", styles: { borderRadius: "24px" } });\ncomp.dispatch({ type: "reorderElements", entries: [{ target: "hf-bg", zIndex: 0 }] });\ncomp.dispatch({ type: "setCompositionMetadata", width: 1920, height: 1080, duration: 30 });',
            file: "ts",
          },
          {
            code: 'comp.dispatch({ type: "setText", target: ["hf-title", "hf-subtitle"], value: "Coming soon" });',
            file: "ts",
          },
        ],
        id: "dispatch",
        aliases: ["advanced-agent"],
      },
      {
        h: "`batch`",
        p: "",
        paras: [
          "把多次派发合并为一个撤销条目和一个 `patch` 事件。若回调抛错，批次内已运行的所有 DOM 修改会被原子回滚，模型恢复到调用 `batch()` 之前的状态。",
        ],
        codeBlocks: [
          {
            code: "batch(fn: () => void, opts?: { origin?: unknown }): void",
            file: "ts",
          },
          {
            code: 'comp.batch(() => {\n  comp.setText("hf-title", "Version 2");\n  comp.setStyle("hf-title", { color: "#22C55E" });\n  comp.setTiming("hf-title", { start: 1, duration: 3 });\n});',
            file: "ts",
          },
        ],
        id: "batch",
      },
      {
        h: "`can`",
        p: "",
        paras: [
          "试运行校验。当 `dispatch(op)` 会成功时返回 `{ ok: true }`，当它会失败或成为空操作时返回 `{ ok: false, code, message, hint? }`。",
          "在渲染依赖 GSAP 时间轴可用的控件之前，或在显示应用可选编辑的 UI 之前，把它用作功能检测门槛。",
          "稳定错误码：`E_TARGET_NOT_FOUND`、`E_NO_ROOT`、`E_NO_GSAP_TIMELINE`、`E_NO_GSAP_SCRIPT`。",
          "完整 op 目录请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
        ],
        codeBlocks: [
          {
            code: "can(op: EditOp): CanResult",
            file: "ts",
          },
          {
            code: 'const result = comp.can({\n  type: "setGsapTween",\n  animationId: "anim-1",\n  properties: { ease: "power3.out" },\n});\n\nif (result.ok) {\n  comp.setGsapTween("anim-1", { ease: "power3.out" });\n} else {\n  console.warn(result.code, result.message);\n}',
            file: "ts",
          },
        ],
        id: "can",
      },
      {
        h: "事件",
        p: "",
        paras: ["所有 `on()` 重载都返回注销函数。调用它可移除监听器。"],
        codeBlocks: [
          {
            code: 'on(event: "change",         handler: () => void): () => void\non(event: "selectionchange", handler: (ids: string[]) => void): () => void\non(event: "patch",           handler: (event: PatchEvent) => void): () => void\non(event: "persist:error",   handler: (event: PersistErrorEvent) => void): () => void',
            file: "ts",
          },
        ],
        id: "events",
      },
      {
        h: "`change`",
        p: "",
        paras: [
          "每次已提交的修改后触发（无论是类型化方法、`dispatch` 还是 `batch`）。用它来刷新画布或其他派生视图。",
        ],
        codeBlocks: [
          {
            code: 'const off = comp.on("change", () => {\n  canvas.render(comp.getElements());\n});\n\noff(); // unsubscribe',
            file: "ts",
          },
        ],
        id: "change",
      },
      {
        h: "`selectionchange`",
        p: "",
        paras: ["选择变化时触发，参数为新的 ID 数组。"],
        codeBlocks: [
          {
            code: 'comp.on("selectionchange", (ids) => {\n  propertiesPanel.show(ids);\n});',
            file: "ts",
          },
        ],
        id: "selectionchange",
      },
      {
        h: "`patch`",
        p: "",
        paras: [
          "每次已提交的变更后触发，带有 RFC 6902 正/逆补丁、`origin` 和语义 `opTypes` 的 `PatchEvent`。用它来把编辑镜像到宿主历史栈、协作层或审计日志。",
          "[!WARNING] 在 `patch` 监听器中务必防护 `ORIGIN_APPLY_PATCHES`。不跳过该来源会导致无限循环：当宿主通过 `applyPatches()` 把逆向补丁重放到 SDK 时。",
        ],
        codeBlocks: [
          {
            code: 'import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\n\ncomp.on("patch", ({ patches, inversePatches, origin, opTypes }) => {\n  if (origin !== ORIGIN_APPLY_PATCHES) {\n    hostHistory.push({ patches, inversePatches });\n  }\n});',
            file: "ts",
          },
        ],
        id: "patch",
      },
      {
        h: "`persist:error`",
        p: "",
        paras: [
          "当持久化适配器写入失败时触发。会话会继续运行；编辑在内存中累积，队列在下一次修改时重试。",
          "撤销/重做与补丁模式请见[撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md)。",
        ],
        codeBlocks: [
          {
            code: 'comp.on("persist:error", ({ error }) => {\n  toast.error(`Autosave failed: ${error.message}`);\n});',
            file: "ts",
          },
        ],
        id: "persisterror",
      },
      {
        id: "serialize",
        aliases: ["serialization"],
        h: "`serialize`（序列化输出）",
        p: "以 HTML 字符串形式返回应用了自 `openComposition` 以来全部变更的当前合成结果。原始基础 HTML 永远不会被就地改动；每次调用都会实时基于文档现状序列化出全新结果。",
        paras: [
          "```typescript\nserialize(): string\n```",
          "以 HTML 字符串形式返回应用了自 `openComposition` 以来全部变更的当前合成结果。原始基础 HTML 永远不会被就地改动；每次调用都会实时基于文档现状序列化出全新结果。",
          '```typescript\nconst updatedHtml = comp.serialize();\nawait fs.writeFile("output.html", updatedHtml);\n```',
        ],
      },
      {
        id: "getoverrides",
        aliases: ["embedded-extras"],
        h: "`getOverrides`",
        p: "仅在嵌入式/覆盖集（override）模式下有意义，详见[嵌入式覆盖模式指南](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。调用后会返回当前覆盖集的一份拷贝——即叠加在共享底板模板之上的稀疏增量记录。",
        paras: [
          "下列方法仅在嵌入式 / 覆盖（override）模式下有意义，完整说明见[嵌入式覆盖模式指南](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md)。",
          "```typescript\ngetOverrides(): OverrideSet\n```",
          "返回当前覆盖集的拷贝——即叠加在基础模板之上的稀疏变更差量（delta）。当多名用户共享同一底板模板时，持久化保存这份增量即可，不必每人存一份完整 HTML。",
          "```typescript\nconst delta = comp.getOverrides();\nawait db.saveUserOverrides(userId, delta);\n```",
        ],
      },
      {
        id: "applypatches",
        h: "`applyPatches`",
        p: "将 RFC 6902 补丁直接应用到实时内存文档上。默认 `origin` 为 `ORIGIN_APPLY_PATCHES`，从而防止 `patch` 事件监听器再将宿主重放回写进循环触发的撤销栈中。",
        paras: [
          "```typescript\napplyPatches(patches: readonly JsonPatchOp[], opts?: { origin?: unknown }): void\n```",
          "将 RFC 6902 补丁直接应用到实时文档。默认来源标记是 `ORIGIN_APPLY_PATCHES`，用于避免 `patch` 监听器把这些更新再转发出去引起撤销回环。当历史栈归宿主应用所有、且需要从宿主历史回放逆向补丁时使用该方法。",
          "```typescript\n// 宿主撤销：从宿主历史栈中弹出并回放逆向补丁\nconst { inversePatches } = hostHistory.pop();\ncomp.applyPatches(inversePatches);\n```",
        ],
      },
      {
        id: "flush",
        aliases: ["lifecycle"],
        h: "`flush`（落盘刷清）",
        p: "排空持久化写入队列。当所有挂起待写的改动都已提交给持久化适配器后兑现 Promise；若未配置持久化适配器则为空操作。进程退出或页面跳转前请务必调用，防止队列里最后的编辑丢失。",
        paras: [
          "```typescript\nflush(): Promise<void>\n```",
          "排空持久化写入队列。待所有等待中的写入提交给适配器完成后兑现；若未传入 `persist` 适配器则为空操作。离开页面或退出进程前请调用，避免尚未落盘的修改丢失。",
          '```typescript\ncomp.setText("hf-title", "Final title");\nawait comp.flush();\ncomp.dispose();\n```',
        ],
      },
      {
        id: "dispose",
        h: "`dispose`（销毁会话）",
        p: "彻底拆解当前编辑会话：注销预览适配器监听、停止持久化队列、停用内置历史模块并清除全部事件处理函数。调用 `dispose()` 后该 `Composition` 对象进入失效状态，后续再调用可能无操作或抛出错误。",
        paras: [
          "```typescript\ndispose(): void\n```",
          "销毁当前会话：退订预览适配器监听、停掉持久化队列与历史模块，并清空所有事件处理器。调用 `dispose()` 后，`Composition` 对象即失去活性；继续在其上调用方法将变成空操作或报错。",
          "```typescript\ncomp.dispose();\n```",
          "[!NOTE] 结束会话后务必记得调用 `dispose()`；跳过该步骤会让绑定在预览适配器上的监听器长期泄漏。",
        ],
      },
      {
        id: "related",
        h: "相关主题",
        p: "",
        paras: [
          "[card] [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition.md) 会话工厂入口——全部配置选项与模式说明。",
          "[card] [Edit operations（编辑操作）](https://hyperframes.heygen.com/sdk/reference/edit-operations.md) 供 `dispatch()` 与 `can()` 调用的完整 op 清单。",
          "[card] [Types 参考](https://hyperframes.heygen.com/sdk/reference/types.md) 导出的全部 TypeScript 类型：`ElementSnapshot`、`PatchEvent`、`GsapTweenSpec` 等。",
          "[card] [查询与编辑指南](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md) `find`、`getElements` 与类型化修改方法实战。",
          "[card] [撤销、重做与补丁指南](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) 历史模块、补丁事件与 `ORIGIN_APPLY_PATCHES` 防循环守卫。",
          "[card] [嵌入式覆盖模式](https://hyperframes.heygen.com/sdk/guides/embedded-override-mode.md) 宿主接管历史记录的 T3 级模板驱动集成模式。",
        ],
        bullets: [
          "[组合结构（Compositions）](https://hyperframes.heygen.com/concepts/compositions.md)",
          "[`openComposition` 参考](https://hyperframes.heygen.com/sdk/reference/open-composition.md)",
          "[SDK 快速入门：用 SDK 编辑合成](https://hyperframes.heygen.com/sdk/quickstart.md)",
        ],
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-edit-ops": {
    lede: "SDK 中的每次修改都表达为 `EditOp`——一个带判别 `type` 字段的普通数据对象。你可以通过 `dispatch()` 逐条提交操作，用 `can()` 校验，或用 `batch()` 把它们分组为单个撤销/持久化步骤。",
    sections: [
      {
        h: "dispatch",
        p: "",
        paras: [
          '立即应用 `op`。发出 `patch` 事件，若挂载了适配器则持久化，并记录一条历史记录。可选的 `origin` 会原样转发到生成的 `PatchEvent` 中；用它来标注变更来源（例如 `"user"`、`"agent"`，或你自己的字符串常量）。',
        ],
        codeBlocks: [
          {
            code: "comp.dispatch(op: EditOp, opts?: { origin?: unknown }): void",
            file: "ts",
          },
          {
            code: 'comp.dispatch(\n  { type: "setStyle", target: "hf-title", styles: { color: "#FFD60A" } },\n  { origin: "agent" },\n);',
            file: "ts",
          },
        ],
        id: "dispatch-batch-and-can",
      },
      {
        h: "batch",
        p: "",
        paras: [
          "把 `fn` 内发出的所有 `dispatch()` 调用分组为单个撤销步骤、单次持久化写入和单个 `patch` 事件。当多项修改在逻辑上属于一起时使用 `batch()`。",
        ],
        codeBlocks: [
          {
            code: "comp.batch(fn: () => void, opts?: { origin?: unknown }): void",
            file: "ts",
          },
          {
            code: 'comp.batch(() => {\n  comp.dispatch({ type: "setText", target: "hf-title", value: "Launch Day" });\n  comp.dispatch({ type: "setStyle", target: "hf-title", styles: { fontSize: "96px" } });\n  comp.dispatch({ type: "setTiming", target: "hf-title", start: 0.5, duration: 3 });\n});',
            file: "ts",
          },
        ],
        id: "dispatch",
      },
      {
        h: "can",
        p: "",
        paras: [
          "在不修改文档的情况下试运行 `op`。当 `dispatch(op)` 会成功时返回 `{ ok: true }`，当它会成为空操作或错误时返回 `{ ok: false; code: string; message: string; hint?: string }`。",
          "在渲染控件或应用可选操作之前，把 `can()` 用作功能检测门槛： `ok: false` 时稳定的 `code` 值：",
          "| 代码 | 含义 |\n| - | - |\n| `E_TARGET_NOT_FOUND` | `target` hf-id 在文档中不存在。 |\n| `E_NO_ROOT` | 文档没有根元素（HTML 为空）。 |\n| `E_NO_GSAP_TIMELINE` | GSAP 脚本没有 `gsap.timeline()` 可挂载。请声明一个（`var tl = gsap.timeline(...)`）然后重试。 |\n| `E_NO_GSAP_SCRIPT` | 该操作需要 GSAP `<script>` 块；文档中没有找到。 |",
          "[!NOTE] `E_NO_GSAP_TIMELINE` 由两种挂载到时间轴的操作触发——`addGsapTween` 和 `addLabel`。如果组合的 GSAP 脚本没有 `gsap.timeline()` 声明，`can()` 返回 `{ ok: false, code: 'E_NO_GSAP_TIMELINE' }`；添加 `var tl = gsap.timeline(...)` 后即可成功。`dispatch()` 不会查询 `can()`——请先调用 `can()`，失败时跳过该操作。",
          "另见：[`Composition`](https://hyperframes.heygen.com/sdk/reference/composition) 的类型化方法封装，以及 [`类型`](https://hyperframes.heygen.com/sdk/reference/types) 中的 `CanResult` 和 `EditOp`。",
        ],
        codeBlocks: [
          {
            code: "comp.can(op: EditOp): CanResult",
            file: "ts",
          },
          {
            code: 'const result = comp.can({\n  type: "setGsapTween",\n  animationId: "anim-1",\n  properties: { ease: "power3.out" },\n});\n\nif (result.ok) {\n  comp.setGsapTween("anim-1", { ease: "power3.out" });\n} else {\n  console.warn(result.code, result.message);\n}',
            file: "ts",
          },
        ],
        id: "batch",
      },
      {
        h: "元素编辑",
        p: "",
        paras: [
          "这些操作按显式 hf-id 作用于一个或多个元素。`target` 接受单个 `HfId` 字符串或 `HfId[]` 数组；给定数组时，操作会在单个 batch 内逐个应用到每个 id。",
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `setStyle` | `target`、`styles` | 合并 CSS 内联样式。`null` 值移除该属性。 |\n| `setText` | `target`、`value` | 替换元素的直接文本内容。 |\n| `setAttribute` | `target`、`name`、`value` | 设置或移除 HTML 属性。`null` 移除它。不触碰 `style`、`class` 或 `data-hf-*`。 |\n| `setTiming` | `target`、`start?`、`duration?`、`trackIndex?` | 更新一个或多个计时属性（`data-start`、`data-duration`、`data-track-index`）。省略的字段保持不变。 |\n| `setHold` | `target`、`hold` | 设置弹性保持窗口；见下方 `ElasticHold` 形状。 |\n| `moveElement` | `target`、`x`、`y` | 通过设置 `data-x` / `data-y`（而不是 CSS `left`/`top`）重新定位元素。 |\n| `removeElement` | `target` | 从文档中移除元素及其所有子元素。是 `addElement` 的逆操作。 |",
        ],
        codeBlocks: [],
        id: "can",
      },
      {
        h: "setStyle",
        p: "",
        paras: ["`styles` 键是 camelCase 属性名，与 `CSSStyleDeclaration` 约定一致。"],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setStyle",\n  target: "hf-card",\n  styles: {\n    borderRadius: "24px",\n    backgroundColor: "#1A1A1A",\n    color: null,          // removes the color property\n  },\n});',
            file: "ts",
          },
        ],
        id: "element-edits",
      },
      {
        h: "setText",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setText",\n  target: ["hf-headline", "hf-sub"],\n  value: "Coming soon",\n});',
            file: "ts",
          },
        ],
        id: "setstyle",
      },
      {
        h: "setAttribute",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setAttribute",\n  target: "hf-logo",\n  name: "src",\n  value: "/assets/logo-v2.png",\n});\n\n// Remove an attribute:\ncomp.dispatch({\n  type: "setAttribute",\n  target: "hf-video",\n  name: "autoplay",\n  value: null,\n});',
            file: "ts",
          },
        ],
        id: "settext",
      },
      {
        h: "setTiming",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setTiming",\n  target: "hf-title",\n  start: 1.5,\n  duration: 3,\n  trackIndex: 0,\n});',
            file: "ts",
          },
        ],
        id: "setattribute",
      },
      {
        h: "setHold",
        p: "",
        paras: ["`hold` 是 `ElasticHold` 对象："],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setHold",\n  target: "hf-badge",\n  hold: {\n    start: 2,\n    end: 5,\n    fill: "freeze",   // "freeze" | "loop"\n  },\n});',
            file: "ts",
          },
        ],
        id: "settiming",
      },
      {
        h: "moveElement",
        p: "",
        paras: ["通过 `data-x` / `data-y` 属性设置元素位置。坐标为组合空间像素。"],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "moveElement",\n  target: "hf-logo",\n  x: 120,\n  y: 48,\n});',
            file: "ts",
          },
        ],
        id: "sethold",
      },
      {
        h: "结构",
        p: "",
        paras: [
          "这些操作修改文档结构（添加/移除/重排元素、应用类级样式，或更改组合元数据）。与元素编辑不同，它们**不**以同样的形式接收 `target` 字段。",
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `addElement` | `parent`、`index`、`html` | 插入 HTML 片段。生成的 hf-id 通过类型化 `comp.addElement()` 方法返回。 |\n| `reorderElements` | `entries` | 在一个或多个元素上设置内联 `z-index`，以重排其层叠顺序。 |\n| `setClassStyle` | `selector`、`styles` | 合并类选择器的 CSS 规则样式。`null` 值移除属性。 |\n| `deleteAllForSelector` | `selector` | 从文档中移除所有匹配 CSS 选择器的元素。 |\n| `setCompositionMetadata` | `width?`、`height?`、`duration?` | 更新顶层组合尺寸和/或总时长。 |",
        ],
        codeBlocks: [],
        id: "moveelement",
      },
      {
        h: "addElement",
        p: "",
        paras: [
          "`parent` 是父元素的 hf-id，或 `null` 表示在文档 body 根部插入。`index` 是基于零的兄弟索引（`>= childCount` 时追加）。`html` 必须是单根 HTML 片段，且不得包含 `<script>`。",
          "使用类型化 `comp.addElement(parent, index, html)` 方法可取回生成的 hf-id。",
        ],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "addElement",\n  parent: "hf-scene-1",\n  index: 2,\n  html: \'<div class="clip" data-start="3" data-duration="2">New layer</div>\',\n});',
            file: "ts",
          },
        ],
        id: "structure",
      },
      {
        h: "reorderElements",
        p: "",
        paras: [
          "每个条目在一个元素上设置 `z-index`。元素必须是非静态定位，`z-index` 才生效——调用方必须确保已设置 `position`。",
        ],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "reorderElements",\n  entries: [\n    { target: "hf-bg",   zIndex: 0 },\n    { target: "hf-logo", zIndex: 10 },\n    { target: "hf-text", zIndex: 20 },\n  ],\n});',
            file: "ts",
          },
        ],
        id: "addelement",
      },
      {
        h: "setClassStyle",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setClassStyle",\n  selector: ".caption",\n  styles: { fontSize: "14px", fontWeight: "600" },\n});',
            file: "ts",
          },
        ],
        id: "reorderelements",
      },
      {
        h: "deleteAllForSelector",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "deleteAllForSelector",\n  selector: ".debug-overlay",\n});',
            file: "ts",
          },
        ],
        id: "setclassstyle",
      },
      {
        h: "setCompositionMetadata",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setCompositionMetadata",\n  width: 1920,\n  height: 1080,\n  duration: 30,\n});',
            file: "ts",
          },
        ],
        id: "deleteallforselector",
      },
      {
        h: "变量",
        p: "",
        paras: [
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `setVariableValue` | `id`、`value` | 按 id 设置组合变量的当前值。值可以是字符串、数字、布尔值、`FontValue` 或 `ImageValue`。拒绝创建未声明的变量。 |\n| `declareVariable` | `declaration` | 创建新变量声明，或完全替换现有声明（类型、标签、默认值及所有其他 schema 字段——不仅仅是值）。这是唯一从头创建 schema 条目的操作。 |\n| `removeVariable` | `id` | 完全移除变量的声明。实时 `var.{id}` 覆盖和 `data-var-*` DOM 引用保持不变。 |",
        ],
        codeBlocks: [
          {
            code: '// Scalar variable\ncomp.dispatch({\n  type: "setVariableValue",\n  id: "brandColor",\n  value: "#6C5CE7",\n});\n\n// Font variable (object-valued — never a CSS string)\ncomp.dispatch({\n  type: "setVariableValue",\n  id: "brand-font",\n  value: {\n    name: "Inter",\n    source: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700",\n  },\n});\n\n// Image variable (object-valued)\ncomp.dispatch({\n  type: "setVariableValue",\n  id: "hero-image",\n  value: {\n    url: "/assets/hero.jpg",\n    alt: "Product hero",\n    fit: "cover",\n  },\n});\n\n// Create a new variable declaration\ncomp.dispatch({\n  type: "declareVariable",\n  declaration: {\n    id: "brandColor",\n    type: "color",\n    label: "Brand color",\n    default: "#6C5CE7",\n  },\n});\n\n// Remove a variable\'s declaration\ncomp.dispatch({ type: "removeVariable", id: "brandColor" });',
            file: "ts",
          },
        ],
        id: "setcompositionmetadata",
      },
      {
        h: "GSAP tweens",
        p: "",
        paras: [
          "这些操作在组合的 GSAP 脚本块中添加、编辑和移除 GSAP tween 条目。它们按 `animationId` 操作——tween 创建时生成的稳定字符串标识符。用 `comp.addGsapTween()` 或 `addWithKeyframes` 生成新 id；类型化封装直接返回它。",
          "[!NOTE] 此处只有 `addGsapTween` 需要 `gsap.timeline()` 来挂载——没有它时，`can()` 返回 `{ ok: false, code: 'E_NO_GSAP_TIMELINE' }`，请声明时间轴后重试。`setGsapTween`、`removeGsapTween` 和 `removeGsapProperty` 是对现有 tween 的编辑或移除，不需要它。`dispatch()` 不会查询 `can()`——请先调用 `can()`，失败时跳过该操作。",
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `addGsapTween` | `target`、`tween` | 为目标 hf-id 添加新 tween。通过类型化方法返回生成的 `animationId`。 |\n| `setGsapTween` | `animationId`、`properties` | 部分更新现有 tween 的 `GsapTweenSpec` 字段。 |\n| `removeGsapTween` | `animationId` | 完全移除该 tween。 |\n| `removeGsapProperty` | `animationId`、`property`、`from?` | 从 tween 中移除一个动画属性。`from: true` 表示从 `fromProperties` 移除；否则从 `toProperties` / `properties` 移除。 |",
        ],
        codeBlocks: [],
        id: "variables",
      },
      {
        h: "addGsapTween",
        p: "",
        paras: [
          "`tween` 是 `GsapTweenSpec` 对象： `GsapTweenSpec` 字段：",
          '| 字段 | 类型 | 说明 |\n| - | - | - |\n| `method` | `"from" \\| "to" \\| "fromTo" \\| "set"` | GSAP tween 方法。 |\n| `position` | `number \\| string` | 时间轴位置。接受数字（秒）或标签相对字符串（如 `"intro+=0.5"`）。 |\n| `duration` | `number` | tween 时长（秒）。 |\n| `ease` | `string` | GSAP ease 字符串（例如 `"power3.out"`）。 |\n| `fromProperties` | `Record<string, unknown>` | `fromTo` tween 的起始状态属性。 |\n| `toProperties` | `Record<string, unknown>` | 结束状态属性（`fromTo` 使用）。 |\n| `properties` | `Record<string, unknown>` | `from` 的起始值、`to` 的目标值、`set` 的即时值，或省略 `toProperties` 时 `fromTo` 的目标值。 |\n| `repeat` | `number` | 重复次数（`-1` = 无限）。 |\n| `yoyo` | `boolean` | 在交替重复时反向。 |\n| `stagger` | `number \\| Record<string, unknown>` | 多目标 tween 的 stagger 配置。 |',
        ],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "addGsapTween",\n  target: "hf-title",\n  tween: {\n    method: "from",\n    position: 0,\n    duration: 0.8,\n    ease: "power3.out",\n    properties: { opacity: 0, y: 40 },\n  },\n});',
            file: "ts",
          },
        ],
        id: "gsap-tweens",
      },
      {
        h: "setGsapTween",
        p: "",
        paras: ["仅更改你提供的字段；省略任何字段可保持不变。"],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setGsapTween",\n  animationId: "anim-1",\n  properties: { ease: "elastic.out(1, 0.3)", duration: 1.2 },\n});',
            file: "ts",
          },
        ],
        id: "addgsaptween",
      },
      {
        h: "removeGsapProperty",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: '// Remove \'scale\' from the to-properties of an existing tween\ncomp.dispatch({\n  type: "removeGsapProperty",\n  animationId: "anim-1",\n  property: "scale",\n});\n\n// Remove \'opacity\' from the from-properties\ncomp.dispatch({\n  type: "removeGsapProperty",\n  animationId: "anim-2",\n  property: "opacity",\n  from: true,\n});',
            file: "ts",
          },
        ],
        id: "setgsaptween",
      },
      {
        h: "关键帧",
        p: "",
        paras: [
          "关键帧操作处理使用 CSS `@keyframes` 风格百分比数组的 tween，而不是单个 `fromProperties`/`toProperties` 形状。",
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `setGsapKeyframe` | `animationId`、`keyframeIndex`、`position?`、`value?`、`ease?` | 按索引更新现有关键帧 tween 中的一个关键帧。 |\n| `addGsapKeyframe` | `animationId`、`position`、`value` | 在给定百分比位置追加新关键帧。 |\n| `removeGsapKeyframe` | `animationId`、`percentage` | 移除特定百分比处的关键帧。 |\n| `removeAllKeyframes` | `animationId` | 清除 tween 的所有关键帧，保留 tween 外壳。 |\n| `convertToKeyframes` | `animationId`、`resolvedFromValues?` | 把 `from`/`to`/`fromTo` tween 转换为关键帧形式。`resolvedFromValues` 提供 0% 停留点的实时计算值。 |\n| `materializeKeyframes` | `animationId`、`keyframes`、`easeEach?`、`resolvedSelector?` | 把完整关键帧集写入现有 tween，替换任何先前的关键帧。 |\n| `addWithKeyframes` | `targetSelector`、`position`、`duration`、`keyframes`、`ease?` | 为给定 CSS 选择器创建新关键帧 tween。通过类型化方法返回生成的 `animationId`。 |\n| `replaceWithKeyframes` | `animationId`、`targetSelector`、`position`、`duration`、`keyframes`、`ease?` | 原子移除现有 tween 并插入新关键帧 tween。 |\n| `splitIntoPropertyGroups` | `animationId` | 把多属性关键帧 tween 拆分为每个动画属性一个 tween。 |\n| `splitAnimations` | `originalId`、`newId`、`splitTime`、`elementStart`、`elementDuration` | 在 `splitTime` 处把一个 tween 拆分到两个。第二半得到 `newId`。 |\n| `unrollDynamicAnimations` | `animationId`、`elements` | 把匹配多元素的选择器目标 tween 转换为逐元素关键帧 tween。 |",
        ],
        codeBlocks: [],
        id: "removegsapproperty",
      },
      {
        h: "materializeKeyframes",
        p: "",
        paras: ["`keyframes` 是 `{ percentage, properties, ease? }` 对象数组："],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "materializeKeyframes",\n  animationId: "anim-3",\n  keyframes: [\n    { percentage: 0,   properties: { opacity: 0, y: 30 } },\n    { percentage: 100, properties: { opacity: 1, y: 0 }, ease: "power2.out" },\n  ],\n  easeEach: "none",\n  resolvedSelector: "#hf-title",\n});',
            file: "ts",
          },
        ],
        id: "keyframes",
      },
      {
        h: "addWithKeyframes / replaceWithKeyframes",
        p: "",
        paras: [
          "`position` 是数字（秒）——不像 `GsapTweenSpec.position`，这里不接受标签相对字符串。",
          "[!NOTE] `replaceWithKeyframes` 之后，位置派生的 tween ID 会重排。请重新查询 `comp.getElement(id).animationIds` 以发现新 ID，而不是假设它与旧 ID 相同。",
          "`KeyframeSpec` 字段：",
          "| 字段 | 类型 | 说明 |\n| - | - | - |\n| `percentage` | `number` | tween 内的关键帧位置（0–100）。 |\n| `properties` | `Record<string, number \\| string>` | 该停留点处的 CSS / GSAP 属性。 |\n| `ease` | `string` | 从该停留点到下一停留点的 ease。 |\n| `auto` | `boolean` | GSAP 端点标志——生成 GSAP 脚本时输出为数字 `_auto: 1`。 |",
        ],
        codeBlocks: [
          {
            code: '// Create a new keyframed tween:\ncomp.dispatch({\n  type: "addWithKeyframes",\n  targetSelector: "#hf-card",\n  position: 1.5,\n  duration: 0.6,\n  keyframes: [\n    { percentage: 0,   properties: { scale: 0.8, opacity: 0 } },\n    { percentage: 100, properties: { scale: 1,   opacity: 1 } },\n  ],\n  ease: "back.out(1.7)",\n});\n\n// Replace an existing tween atomically:\ncomp.dispatch({\n  type: "replaceWithKeyframes",\n  animationId: "anim-4",\n  targetSelector: "#hf-card",\n  position: 1.5,\n  duration: 0.6,\n  keyframes: [\n    { percentage: 0,   properties: { scale: 0.9 } },\n    { percentage: 100, properties: { scale: 1 } },\n  ],\n});',
            file: "ts",
          },
        ],
        id: "materializekeyframes",
      },
      {
        h: "标签",
        p: "",
        paras: [
          'GSAP 时间轴标签标记主时间轴中的命名位置（秒）。在 `GsapTweenSpec.position` 中以 `"intro"` 或 `"intro+=0.5"` 等字符串引用标签。',
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `addLabel` | `name`、`position` | 在时间轴位置（秒）添加命名标签。 |\n| `removeLabel` | `name` | 移除命名标签。 |",
          "[!NOTE] 与 `addGsapTween` 一样，`addLabel` 挂载到时间轴：脚本中没有 `gsap.timeline()` 声明时，`can()` 返回 `{ ok: false, code: 'E_NO_GSAP_TIMELINE' }`。`removeLabel` 没有此要求。",
        ],
        codeBlocks: [
          {
            code: 'comp.dispatch({ type: "addLabel", name: "intro", position: 0 });\ncomp.dispatch({ type: "addLabel", name: "outro", position: 8 });\n\n// Tween positioned relative to a label:\ncomp.dispatch({\n  type: "addGsapTween",\n  target: "hf-cta",\n  tween: {\n    method: "from",\n    position: "outro-=0.5",\n    duration: 0.4,\n    properties: { opacity: 0 },\n  },\n});\n\ncomp.dispatch({ type: "removeLabel", name: "intro" });',
            file: "ts",
          },
        ],
        id: "addwithkeyframes-replacewithkeyframes",
      },
      {
        h: "弧线路径",
        p: "",
        paras: [
          "弧线路径操作控制 GSAP tween 的运动路径——元素运动所沿的曲线。",
          "| `type` | 关键字段 | 作用 |\n| - | - | - |\n| `setArcPath` | `animationId`、`config` | 在 tween 上创建或替换弧线路径配置。 |\n| `updateArcSegment` | `animationId`、`segmentIndex`、`update` | 更新一段的曲率或控制点。 |\n| `removeArcPath` | `animationId` | 从 tween 中移除弧线路径，恢复为直线路径。 |",
        ],
        codeBlocks: [],
        id: "labels",
      },
      {
        h: "setArcPath",
        p: "",
        paras: [
          "`config` 形状：",
          "| 字段 | 类型 | 说明 |\n| - | - | - |\n| `enabled` | `boolean` | 弧线路径是否活动。 |\n| `autoRotate` | `boolean \\| number` | `true` = 自动旋转以跟随路径切线；数字表示按该度数偏移旋转。 |\n| `segments` | `Array<{ curviness?, cp1?, cp2? }>` | 逐段路径定义。`curviness` 是 GSAP Bezier 曲率值；`cp1`/`cp2` 是组合空间中的控制点坐标。 |",
        ],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setArcPath",\n  animationId: "anim-5",\n  config: {\n    enabled: true,\n    autoRotate: true,            // boolean, or a number (degrees offset)\n    segments: [\n      {\n        curviness: 1.5,\n        cp1: { x: 200, y: -80 }, // first control point\n        cp2: { x: 400, y: 20 },  // second control point\n      },\n    ],\n  },\n});',
            file: "ts",
          },
        ],
        id: "arc-paths",
      },
      {
        h: "updateArcSegment",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "updateArcSegment",\n  animationId: "anim-5",\n  segmentIndex: 0,\n  update: { curviness: 2, cp1: { x: 220, y: -100 } },\n});',
            file: "ts",
          },
        ],
        id: "setarcpath",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[类型](https://hyperframes.heygen.com/sdk/reference/types.md)",
          "[时序与动画](https://hyperframes.heygen.com/sdk/guides/timing-and-animation.md)",
          "[查询与编辑元素](https://hyperframes.heygen.com/sdk/guides/querying-and-editing.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-types": {
    lede: "本页记录从 `@hyperframes/sdk` 导出的核心类型，已对照 `packages/sdk/src/types.ts` 以及 `packages/sdk/src/index.ts` 中的导出桶核实。适配器、历史记录和持久化类型随接收它们的 API 而存在——请见[适配器](https://hyperframes.heygen.com/sdk/reference/adapters.md)、[工具](https://hyperframes.heygen.com/sdk/reference/utilities.md)、[Composition](https://hyperframes.heygen.com/sdk/reference/composition.md)和[openComposition](https://hyperframes.heygen.com/sdk/reference/open-composition.md)。",
    sections: [
      {
        h: "HfId",
        p: "",
        paras: [
          "稳定的 HyperFrames 元素标识符——`ensureHfIds` 打到每个可编辑元素上的 `data-hf-id` 属性值。在本应写原始 `string` 处使用 `HfId`，可表明该值是元素 id。",
        ],
        codeBlocks: [
          {
            code: "type HfId = string;",
            file: "ts",
          },
        ],
        id: "hfid",
      },
      {
        h: "HyperFramesElement",
        p: "",
        paras: [
          "单个可编辑元素的完整 DOM 级视图。由 `comp.getElements()` 和 `comp.getElement(id)` 返回。",
          "**id** `string` 元素的 `data-hf-id` 值——在顶层文档内唯一。",
          '**scopedId** `string` 完全限定的作用域标识符：`host-chain-prefix/leaf`，以 `/` 分隔。对于顶层元素，`scopedId === id`。对于内联子组合中的元素，格式为 `"hf-HOST/hf-LEAF"`（任意深度）。在寻址子组合元素时，请使用 `scopedId`——而不是 `id`——作为 `dispatch()` 目标、`getElement()`、`find()` 和 `OverrideSet` 键的规范键。',
          '**tag** `string` 小写 HTML 标签名（`"div"`、`"img"`、`"p"`，……）。',
          "**children** `readonly HyperFramesElement[]` 直接子元素。可用 `@hyperframes/sdk` 工具中的 `flatElements()` 构建扁平列表。",
          "**inlineStyles** `Readonly\\<Record\\<string, string\\>\\>` 以 camelCase 表示的内联 CSS 属性，与 `CSSStyleDeclaration` 约定一致（`fontSize`，而非 `font-size`）。",
          "**classNames** `readonly string[]` 元素的类列表。",
          "**attributes** `Readonly\\<Record\\<string, string\\>\\>` 除 `style`、`class` 和 `data-hf-*` 之外的所有 HTML 属性（它们在模型中另有表示）。",
          "**text** `string | null` 元素的直接文本内容，用作 `setText` 目标。不是完整的后代文本快照。",
          "**start** `number | null` 以秒计的计时开始（`data-start`）。元素没有计时属性时为 `null`。",
          "**duration** `number | null` 以秒计的计时时长（`data-duration`）。未设置时为 `null`。",
          "**trackIndex** `number | null` 基于零的轨道索引（`data-track-index`）。未设置时为 `null`。",
          "**animationIds** `readonly string[]` 目标是该元素的 GSAP tween 的 ID。传给 `dispatch()` 中的 GSAP tween 操作。",
        ],
        codeBlocks: [
          {
            code: "interface HyperFramesElement {\n  readonly id: string;\n  readonly scopedId: string;\n  readonly tag: string;\n  readonly children: readonly HyperFramesElement[];\n  readonly inlineStyles: Readonly<Record<string, string>>;\n  readonly classNames: readonly string[];\n  readonly attributes: Readonly<Record<string, string>>;\n  readonly text: string | null;\n  readonly start: number | null;\n  readonly duration: number | null;\n  readonly trackIndex: number | null;\n  readonly animationIds: readonly string[];\n}",
            file: "ts",
          },
        ],
        id: "hyperframeselement",
      },
      {
        h: "ElementSnapshot",
        p: "",
        paras: [
          "`HyperFramesElement` 的类型别名。用于 `getElements()` 和 `getElement()` 的返回类型，以表明该值是只读快照——后续修改后不会更新。",
        ],
        codeBlocks: [
          {
            code: "type ElementSnapshot = HyperFramesElement;",
            file: "ts",
          },
        ],
        id: "elementsnapshot",
      },
      {
        h: "SdkDocument",
        p: "",
        paras: [
          "SDK 的内存文档模型。由 `buildDocument()` 返回。",
          "**roots** `readonly HyperFramesElement[]` 组合 body 的顶层元素。通过 `.children` 遍历树。",
          "**gsapScript** `string | null` 组合 GSAP `<script>` 块的原始内容，若存在。",
          "**styles** `string | null` 组合 `<style>` 块的原始内容，若存在。",
          "**width** `number | null` 来自根元素 `data-width` 的组合宽度（像素）。未设置时为 `null`。",
          "**height** `number | null` 来自 `data-height` 的组合高度（像素）。未设置时为 `null`。",
          "**compositionDuration** `number | null` 来自根元素 `data-duration` 的总时长（秒）。未设置时为 `null`。",
          "**html** `string` 构建时 `ensureHfIds` 标记后 HTML 的快照。该值在修改后**永不更新**——请调用 `comp.serialize()` 获取当前文档状态。",
        ],
        codeBlocks: [
          {
            code: "interface SdkDocument {\n  readonly roots: readonly HyperFramesElement[];\n  readonly gsapScript: string | null;\n  readonly styles: string | null;\n  readonly width: number | null;\n  readonly height: number | null;\n  readonly compositionDuration: number | null;\n  readonly html: string;\n}",
            file: "ts",
          },
        ],
        id: "sdkdocument",
      },
      {
        h: "OverrideSet",
        p: "",
        paras: [
          "叠加在基础组合模板之上的稀疏覆盖映射。用于嵌入覆盖模式（T3）——作为 `overrides` 传给 `openComposition()`，或用 `comp.getOverrides()` 读取累积的增量。",
          "**键格式：** `hfId.prop.path`，其中： **`null` 值** = 删除标记：元素或属性已被用户删除。",
          "[!WARNING] 值联合类型包含 `Record<string, unknown>`，以容纳对象值变量（字体、图像）。读取 `OverrideSet` 值的代码必须在假设为标量之前先收窄——对象值在任何接受 `unknown` 处都通过类型检查。",
        ],
        codeBlocks: [
          {
            code: "type OverrideSet = Record<\n  string,\n  string | number | boolean | Record<string, unknown> | null\n>;",
            file: "ts",
          },
          {
            code: 'const overrides: OverrideSet = {\n  "hf-title.text": "Customer headline",\n  "hf-logo.attr.src": "/customers/acme/logo.png",\n  "hf-title.style.color": "#0EA5E9",\n  "hf-old-badge": null,                         // element removed\n  "var.brand-font": {                            // font variable\n    name: "Inter",\n    source: "https://fonts.googleapis.com/css2?family=Inter",\n  },\n};',
            file: "ts",
          },
        ],
        bullets: [
          "`hfId.style.fontSize`——内联样式属性覆盖",
          "`hfId.text`——文本内容覆盖",
          "`hfId.attr.src`——属性覆盖",
          "`hfId`（仅键，值 `null`）——用户移除的元素",
          "`var.{id}`——变量覆盖；值是标量或对象（`FontValue` / `ImageValue`）",
        ],
        id: "overrideset",
      },
      {
        h: "FindQuery",
        p: "",
        paras: [
          "传给 `comp.find(query)`，按描述符搜索元素。",
          '**tag** `string` 按小写 HTML 标签名匹配（`"img"`、`"p"`，……）。',
          "**text** `string` 按元素的直接文本内容匹配（大小写敏感子字符串匹配——用 `String.includes` 实现）。",
          "**name** `string` 按 `data-name` 属性值匹配。",
          "**track** `number` 按基于零的轨道索引（`data-track-index`）匹配。",
          "**composition** `string` 把结果限制在特定子组合内部、由宿主元素 hf-id 标识的元素。",
          "所有字段均为可选；非空字段按 AND 合并。",
        ],
        codeBlocks: [
          {
            code: "interface FindQuery {\n  tag?: string;\n  text?: string;\n  name?: string;\n  track?: number;\n  composition?: string;\n}",
            file: "ts",
          },
          {
            code: '// Find all text elements on track 2:\nconst ids = comp.find({ tag: "p", track: 2 });\n\n// Find inside a sub-composition:\nconst subIds = comp.find({ composition: "hf-scene-2", tag: "img" });',
            file: "ts",
          },
        ],
        id: "findquery",
      },
      {
        h: "GsapTweenSpec",
        p: "",
        paras: [
          "描述单个 GSAP tween 条目的创建或更新。",
          '**method** `"from" | "to" | "fromTo" | "set"` GSAP tween 方法。`"from"` 从给定值动画到计算值；`"to"` 动画到给定值；`"fromTo"` 从 `fromProperties` 动画到 `toProperties`；`"set"` 无插值直接设置。',
          '**position** `number | string` 时间轴插入位置。数字是距时间轴开始的秒数。字符串是标签相对偏移，如 `"intro"` 或 `"outro-=0.5"`。省略则追加。',
          "**duration** `number` tween 时长（秒）。",
          '**ease** `string` GSAP ease 字符串，例如 `"power3.out"`、`"elastic.out(1, 0.3)"`、`"none"`。',
          '**fromProperties** `Record\\<string, unknown\\>` `"fromTo"` tween 的起始状态属性映射。',
          '**toProperties** `Record\\<string, unknown\\>` 结束状态属性映射——`"fromTo"` 方法使用。',
          '**properties** `Record\\<string, unknown\\>` `"from"` 的起始值、`"to"` 的目标值、`"set"` 的即时值。也提供省略 `toProperties` 时 `"fromTo"` 的目标值。',
          "**repeat** `number` 重复次数。`-1` = 无限。",
          "**yoyo** `boolean` 在交替重复时反向。",
          "**stagger** `number | Record\\<string, unknown\\>` 多目标 tween 的 GSAP stagger 配置。",
        ],
        codeBlocks: [
          {
            code: 'interface GsapTweenSpec {\n  method: "from" | "to" | "fromTo" | "set";\n  position?: number | string;\n  duration?: number;\n  ease?: string;\n  fromProperties?: Record<string, unknown>;\n  toProperties?: Record<string, unknown>;\n  properties?: Record<string, unknown>;\n  repeat?: number;\n  yoyo?: boolean;\n  stagger?: number | Record<string, unknown>;\n}',
            file: "ts",
          },
        ],
        id: "gsaptweenspec",
      },
      {
        h: "KeyframeSpec",
        p: "",
        paras: [
          "`addWithKeyframes` 和 `replaceWithKeyframes` 使用的单个关键帧条目。这是一个结构形状，不是运行时导出——你向这些方法传入此形状的普通对象；它**不**从 `@hyperframes/sdk` 桶中重新导出，因此无需导入。",
          "**percentage** `number` tween 内关键帧停留点位置，从 0 到 100。",
          "**properties** `Record\\<string, number | string\\>` 该关键帧停留点处的 CSS 和 GSAP 属性值。",
          "**ease** `string` 从该停留点应用到下一停留点的 ease。",
          "**auto** `boolean` GSAP 端点标志。为真时，在生成的 GSAP 脚本中输出为数字 `_auto: 1`。",
        ],
        codeBlocks: [
          {
            code: "interface KeyframeSpec {\n  percentage: number;\n  properties: Record<string, number | string>;\n  ease?: string;\n  auto?: boolean;\n}",
            file: "ts",
          },
        ],
        id: "keyframespec",
      },
      {
        h: "ElasticHold",
        p: "",
        paras: [
          "控制元素的弹性保持（冻结或循环）窗口。",
          "**start** `number` 保持窗口的开始（秒）。",
          "**end** `number` 保持窗口的结束（秒）。",
          '**fill** `"freeze" | "loop"` `"freeze"` 静态保持最后一帧；`"loop"` 在窗口内循环动画。',
        ],
        codeBlocks: [
          {
            code: 'interface ElasticHold {\n  start: number;\n  end: number;\n  fill: "freeze" | "loop";\n}',
            file: "ts",
          },
        ],
        id: "elastichold",
      },
      {
        h: "CompositionVariable",
        p: "",
        paras: [
          "单个已声明变量的完整 schema——由 `comp.declareVariable()` 使用，由 `comp.listVariables()` 返回。以 `type` 判别的封闭联合；每个变体共享相同基础字段，外加各自类型专属字段。",
          "**id** `string` 稳定标识符，被 `setVariableValue`、`getVariableValue`、`removeVariable` 和 `var.{id}` 覆盖集键引用。",
          "**type** `string` 判别字段。决定适用哪个变体的额外字段，以及 `default` 的形状。",
          "**label** `string` 变量面板 UI 的人类可读名称。",
          "**default** `string | number | boolean | FontValue | ImageValue` 变量的默认值。`font` 接受字体族字符串或 `FontValue`；`image` 接受 URL 字符串或 `ImageValue`。`setVariableValue` 把整个值存到此处，包括字体 source 和图像元数据。声明读取、校验以及保存/重新打开都保留这些对象。",
          '**brandRole** `string (color, image)` 可选的语义标签，用于品牌系统工具，例如 `"color:primary"` 或 `"logo:primary"`。',
          "**options** `\\{ value: string; label: string \\}[] (enum only)` `enum` 变量的可选值。",
          "**source** `string (font only)` 字体样式表 URL（例如 Google Fonts CSS 链接），与 `default` 字体族名称配对。",
        ],
        codeBlocks: [
          {
            code: 'interface CompositionVariableBase {\n  id: string;\n  type: "string" | "number" | "color" | "boolean" | "enum" | "font" | "image";\n  label: string;\n  description?: string;\n}\n\ninterface StringVariable extends CompositionVariableBase {\n  type: "string";\n  default: string;\n  placeholder?: string;\n  maxLength?: number;\n}\n\ninterface NumberVariable extends CompositionVariableBase {\n  type: "number";\n  default: number;\n  min?: number;\n  max?: number;\n  step?: number;\n  unit?: string;\n}\n\ninterface ColorVariable extends CompositionVariableBase {\n  type: "color";\n  default: string;\n  brandRole?: string;\n}\n\ninterface BooleanVariable extends CompositionVariableBase {\n  type: "boolean";\n  default: boolean;\n}\n\ninterface EnumVariable extends CompositionVariableBase {\n  type: "enum";\n  default: string;\n  options: { value: string; label: string }[];\n}\n\ninterface FontVariable extends CompositionVariableBase {\n  type: "font";\n  default: string | FontValue;\n  source?: string;\n  default_name?: string;\n  default_source?: string;\n}\n\ninterface ImageVariable extends CompositionVariableBase {\n  type: "image";\n  default: string | ImageValue;\n  brandRole?: string;\n}\n\ntype CompositionVariable =\n  | StringVariable\n  | NumberVariable\n  | ColorVariable\n  | BooleanVariable\n  | EnumVariable\n  | FontVariable\n  | ImageVariable;',
            file: "ts",
          },
        ],
        id: "compositionvariable",
      },
      {
        h: "FontValue",
        p: "",
        paras: [
          "`font` 组合变量的对象值。始终是对象——从不是原始 CSS 字符串。",
          '**name** `string` CSS `font-family` 值，例如 `"Inter"` 或 `"\'Playfair Display\'"`。',
          "**source** `string` 加载该字体所需的样式表 URL，例如 Google Fonts CSS URL。",
        ],
        codeBlocks: [
          {
            code: "interface FontValue {\n  name: string;\n  source: string;\n}",
            file: "ts",
          },
        ],
        id: "fontvalue",
      },
      {
        h: "ImageValue",
        p: "",
        paras: [
          "`image` 组合变量的对象值。始终是对象——从不是原始 URL 字符串。",
          "**url** `string` 图像源 URL。",
          "**alt** `string` 无障碍的替代文本。",
          '**fit** `"cover" | "contain" | "fill" | "none" | "scale-down"` 图像在其容器内的 object-fit 行为。映射到 CSS `object-fit` 属性。',
        ],
        codeBlocks: [
          {
            code: 'interface ImageValue {\n  url: string;\n  alt?: string;\n  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";\n}',
            file: "ts",
          },
        ],
        id: "imagevalue",
      },
      {
        h: "JsonPatchOp",
        p: "",
        paras: [
          "[RFC 6902](https://datatracker.ietf.org/doc/html/rfc6902) JSON Patch 的仅发出子集。SDK 从不发出 `move`、`copy` 或 `test` 操作，`applyPatches()` 会忽略此子集之外的操作。",
          '**op** `"add" | "remove" | "replace"` 补丁操作类型。',
          "**path** `string` 正在变更的文档位置的 RFC 6902 JSON Pointer 路径。",
          '**value** `unknown` `"add"` 和 `"replace"` 操作的新值。`"remove"` 省略。',
          "[!WARNING] 把补丁喂回 `applyPatches()` 的宿主必须限制在 `add`、`remove` 和 `replace`。其他 RFC 6902 操作类型会被静默忽略。",
        ],
        codeBlocks: [
          {
            code: 'interface JsonPatchOp {\n  op: "add" | "remove" | "replace";\n  path: string;\n  value?: unknown;\n}',
            file: "ts",
          },
        ],
        id: "jsonpatchop",
      },
      {
        h: "PatchEvent",
        p: "",
        paras: [
          "每次已提交的变更后由 `comp.on('patch', handler)` 发出（单次 `dispatch()` 或完成的 `batch()`）。",
          "**formatVersion** `1` 始终为 `1`。`formatVersion` 的变化是破坏性变更。宿主应在启动时检查一次此值，并拒绝未知版本。",
          "**patches** `readonly JsonPatchOp[]` 把先前文档状态变换为新状态的前向补丁。",
          "**inversePatches** `readonly JsonPatchOp[]` 撤销此变更的逆向补丁——应用到新状态可回到先前状态。为宿主侧撤销栈存储这些补丁。",
          "**origin** `unknown` 从修改入口原样重新发出。通过检查 `origin === ORIGIN_APPLY_PATCHES` 识别自动化补丁。",
          '**opTypes** `readonly string[]` 来自 `EditOp.type` 字段的语义操作名（例如 `["setStyle", "setText"]`）。适用于分析和历史标签。**未版本化**——请勿用于分支逻辑。',
          "**循环防护。** 当宿主通过 `applyPatches()` 把补丁事件镜像回 SDK 时，必须跳过源自于该调用的事件，以避免无限循环：",
        ],
        codeBlocks: [
          {
            code: "interface PatchEvent {\n  readonly formatVersion: 1;\n  readonly patches: readonly JsonPatchOp[];\n  readonly inversePatches: readonly JsonPatchOp[];\n  readonly origin: unknown;\n  readonly opTypes: readonly string[];\n}",
            file: "ts",
          },
          {
            code: 'comp.on("patch", ({ patches, inversePatches, origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return;\n  saveToHostHistory({ patches, inversePatches });\n});',
            file: "ts",
          },
        ],
        id: "patchevent",
      },
      {
        h: "CanResult",
        p: "",
        paras: [
          "由 `comp.can(op)` 返回。完整使用模式请见 [`编辑操作`](https://hyperframes.heygen.com/sdk/reference/edit-operations)。",
          "**ok** `boolean` `dispatch(op)` 会成功时为 `true`。会成为空操作或错误时为 `false`。",
          "**code** `string` `ok: false` 时的稳定错误码——可安全用于 `switch` 语句。代码表请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md#dispatch-batch-and-can)。",
          "**message** `string` 操作无法继续原因的人类可读解释。",
          "**hint** `string` 解决问题的可选可行建议。",
        ],
        codeBlocks: [
          {
            code: "type CanResult =\n  | { ok: true }\n  | { ok: false; code: string; message: string; hint?: string };",
            file: "ts",
          },
        ],
        id: "canresult",
      },
      {
        h: "ElementTimingSnapshot",
        p: "",
        paras: [
          "单个元素的解析后计时，由 `comp.getElementTimings()` 返回的 `Record<HfId, ElementTimingSnapshot>` 中的值。",
          "**enterAt** `number` 元素进入的秒数。由 `data-duration`（优先）或 `data-end − data-start` 派生，与 `setTiming` 使用相同逻辑。",
          "**exitAt** `number` 元素退出的秒数。",
          "**labels** `string[]` 该元素 `[enterAt, exitAt]` 区间内数字位置的 GSAP `addLabel` 名称。每次 `getElementTimings()` 调用时从 GSAP 脚本重新解析——从不缓存。",
        ],
        codeBlocks: [
          {
            code: "interface ElementTimingSnapshot {\n  enterAt: number;\n  exitAt: number;\n  labels: string[];\n}",
            file: "ts",
          },
        ],
        id: "elementtimingsnapshot",
      },
      {
        h: "SelectionProxy",
        p: "",
        paras: [
          "`comp.selection()` 返回的代理。在调用时解析当前选择，并在一个 batch 内按 id 应用操作。由于每次调用 `comp.selection()` 时都会重新解析 `ids`，两次调用之间的选择变更会被自动拾取。",
          "**ids** `readonly string[]` 调用 `comp.selection()` 时刻当前选择中的 hf-id。",
        ],
        codeBlocks: [
          {
            code: "interface SelectionProxy {\n  readonly ids: readonly string[];\n  setStyle(styles: Record<string, string | null>): void;\n  setText(value: string): void;\n  setAttribute(name: string, value: string | null): void;\n  setTiming(timing: { start?: number; duration?: number; trackIndex?: number }): void;\n  removeElement(): void;\n}",
            file: "ts",
          },
          {
            code: 'const sel = comp.selection();\nif (sel.ids.length > 0) {\n  sel.setStyle({ opacity: "0.5" });\n}',
            file: "ts",
          },
        ],
        id: "selectionproxy",
      },
      {
        h: "ElementHandle",
        p: "",
        paras: [
          "`comp.element(id)` 返回的柯里化元素句柄。仅持有 id 字符串——没有过期引用隐患——并提供与 `Composition` 上类型化方法相同的修改方法。",
        ],
        codeBlocks: [
          {
            code: "interface ElementHandle {\n  readonly id: string;\n  setStyle(styles: Record<string, string | null>): void;\n  setText(value: string): void;\n  setAttribute(name: string, value: string | null): void;\n  setTiming(timing: { start?: number; duration?: number; trackIndex?: number }): void;\n  removeElement(): void;\n}",
            file: "ts",
          },
          {
            code: 'const title = comp.element("hf-title");\ntitle.setText("Launch Day");\ntitle.setStyle({ color: "#FFD60A", fontSize: "96px" });\ntitle.setTiming({ start: 0.5, duration: 3 });',
            file: "ts",
          },
        ],
        id: "elementhandle",
      },
      {
        h: "CompositionVariableType",
        p: "",
        paras: [
          "组合变量的已声明类型。从 `@hyperframes/parsers` 重新导出；`VARIABLE_TYPES` 是匹配的运行时列表，适用于需要集合而非联合的校验器。",
        ],
        codeBlocks: [
          {
            code: 'type CompositionVariableType =\n  | "string" | "number" | "color" | "boolean" | "enum" | "font" | "image";',
            file: "ts",
          },
        ],
        id: "compositionvariabletype",
      },
      {
        h: "VariableUsageScan",
        p: "",
        paras: [
          "静态扫描组合脚本变量读取的结果。`usedIds` 按首次发现顺序排列。脚本以扫描无法解析的方式访问变量——计算键、剩余展开、values 对象逃逸到调用中——或解析失败时，`scanIncomplete` 为 `true`；此时 `usedIds` 是下界而非完整列表，因此请把未列出的 id 视为未知而非未使用。",
        ],
        codeBlocks: [
          {
            code: "interface VariableUsageScan {\n  usedIds: string[];\n  scanIncomplete: boolean;\n}",
            file: "ts",
          },
        ],
        id: "variableusagescan",
      },
      {
        h: "ORIGIN\\_APPLY\\_PATCHES / ORIGIN\\_LOCAL",
        p: "",
        paras: ["保留的 `origin` 标签常量："],
        codeBlocks: [
          {
            code: 'const ORIGIN_APPLY_PATCHES = "@hyperframes/sdk:applyPatches";\nconst ORIGIN_LOCAL = "local";',
            file: "ts",
          },
          {
            code: 'comp.on("patch", ({ origin }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // skip — would loop\n  if (origin === ORIGIN_LOCAL) {\n    // user-driven edit — sync to collaboration layer\n  }\n});',
            file: "ts",
          },
        ],
        bullets: [
          "**`ORIGIN_APPLY_PATCHES`**——由 `comp.applyPatches()` 自动设置。监听器**必须**跳过此来源，以防止在把补丁事件镜像回 SDK 时出现撤销循环。使用命名空间字符串（而非唯一 Symbol），使哨兵值能跨越 realm 边界（如 `postMessage` 和结构化克隆）存活，T3 嵌入宿主可能用它们转发补丁事件。",
          "**`ORIGIN_LOCAL`**——调用 `dispatch()` 或 `batch()` 未提供显式 `origin` 选项时的默认来源。表示 UI 驱动的用户编辑。",
        ],
        id: "origin_apply_patches-origin_local",
      },
      {
        h: "EditOp",
        p: "",
        paras: [
          "所有可派发编辑操作的完整联合。完整目录（含字段说明和代码示例）请见[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)。",
        ],
        codeBlocks: [
          {
            code: 'type EditOp =\n  | { type: "setStyle"; target: HfId | HfId[]; styles: Record<string, string | null> }\n  | { type: "setText"; target: HfId | HfId[]; value: string }\n  | { type: "setAttribute"; target: HfId | HfId[]; name: string; value: string | null }\n  | { type: "setTiming"; target: HfId | HfId[]; start?: number; duration?: number; trackIndex?: number }\n  | { type: "setHold"; target: HfId | HfId[]; hold: ElasticHold }\n  | { type: "moveElement"; target: HfId | HfId[]; x: number; y: number }\n  | { type: "removeElement"; target: HfId | HfId[] }\n  | { type: "addElement"; parent: HfId | null; index: number; html: string }\n  | { type: "reorderElements"; entries: Array<{ target: HfId; zIndex: number }> }\n  | { type: "setClassStyle"; selector: string; styles: Record<string, string | null> }\n  | { type: "setCompositionMetadata"; width?: number; height?: number; duration?: number }\n  | { type: "setVariableValue"; id: string; value: string | number | boolean | FontValue | ImageValue }\n  | { type: "declareVariable"; declaration: CompositionVariable }\n  | { type: "removeVariable"; id: string }\n  | { type: "addGsapTween"; target: HfId; tween: GsapTweenSpec }\n  | { type: "setGsapTween"; animationId: string; properties: Partial<GsapTweenSpec> }\n  | { type: "removeGsapTween"; animationId: string }\n  | { type: "removeGsapProperty"; animationId: string; property: string; from?: boolean }\n  | { type: "setGsapKeyframe"; animationId: string; keyframeIndex: number; position?: number; value?: Record<string, unknown>; ease?: string }\n  | { type: "addGsapKeyframe"; animationId: string; position: number; value: Record<string, unknown> }\n  | { type: "removeGsapKeyframe"; animationId: string; percentage: number }\n  | { type: "removeAllKeyframes"; animationId: string }\n  | { type: "convertToKeyframes"; animationId: string; resolvedFromValues?: Record<string, number | string> }\n  | { type: "materializeKeyframes"; animationId: string; keyframes: Array<{ percentage: number; properties: Record<string, number | string>; ease?: string }>; easeEach?: string; resolvedSelector?: string }\n  | { type: "splitIntoPropertyGroups"; animationId: string }\n  | { type: "splitAnimations"; originalId: string; newId: string; splitTime: number; elementStart: number; elementDuration: number }\n  | { type: "addLabel"; name: string; position: number }\n  | { type: "removeLabel"; name: string }\n  | { type: "setArcPath"; animationId: string; config: { enabled: boolean; autoRotate: boolean | number; segments: Array<{ curviness?: number; cp1?: { x: number; y: number }; cp2?: { x: number; y: number } }> } }\n  | { type: "updateArcSegment"; animationId: string; segmentIndex: number; update: { curviness?: number; cp1?: { x: number; y: number }; cp2?: { x: number; y: number } } }\n  | { type: "removeArcPath"; animationId: string }\n  | { type: "unrollDynamicAnimations"; animationId: string; elements: Array<{ selector: string; keyframes: Array<{ percentage: number; properties: Record<string, number | string> }>; easeEach?: string }> }\n  | { type: "addWithKeyframes"; targetSelector: string; position: number; duration: number; keyframes: KeyframeSpec[]; ease?: string }\n  | { type: "replaceWithKeyframes"; animationId: string; targetSelector: string; position: number; duration: number; keyframes: KeyframeSpec[]; ease?: string }\n  | { type: "deleteAllForSelector"; selector: string };',
            file: "ts",
          },
        ],
        id: "editop",
      },
      {
        h: "PersistErrorEvent",
        p: "",
        paras: [
          "当自动保存写入失败时由 `comp.on('persist:error', handler)` 发出。失败非致命——会话继续正常运行。",
          "**error.message** `string` 持久化失败的人类可读描述。",
          "**error.hint** `string` 解决失败的可选建议。",
          "**error.cause** `unknown` 底层错误对象，若可用。",
        ],
        codeBlocks: [
          {
            code: "interface PersistErrorEvent {\n  error: { message: string; hint?: string; cause?: unknown };\n}",
            file: "ts",
          },
        ],
        id: "persisterrorevent",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[背景强调类型](https://hyperframes.heygen.com/catalog/components/mk-emphasis-type.md)",
          "[变量轴类型](https://hyperframes.heygen.com/catalog/components/variable-axis-type.md)",
          "[类型匹配剪辑](https://hyperframes.heygen.com/catalog/components/type-match-cut.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-adapters": {
    lede: "SDK 通过两个可注入接口 `PersistAdapter` 和 `PreviewAdapter`，把编辑会话与存储和预览界面解耦。两者都附带可传给 `openComposition()` 的具体工厂函数。你也可以直接实现任一接口，用于自定义存储后端（S3、IndexedDB、HTTP）或自定义预览界面。",
    sections: [
      {
        h: "PersistAdapter",
        p: "",
        paras: [
          "可注入的存储适配器。把 SDK 与底层持久化机制解耦，使同样的会话代码可在测试（内存）、本地开发（文件系统）和生产（云存储）中运行。",
        ],
        codeBlocks: [
          {
            code: 'import type { PersistAdapter } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "persistadapter",
      },
      {
        h: "接口",
        p: "",
        paras: [
          "**read** `(path: string) =\\> Promise\\<string | undefined\\>` 返回 `path` 的存储内容；从未写入过的路径返回 `undefined`。缺失路径从不抛错。",
          "**write** `(path: string, content: string) =\\> Promise\\<void\\>` 把 `content` 持久化到 `path`。幂等——相同 path 的第二次调用会覆盖先前的值。写入失败不得以抛异常传播；应触发 `persist:error`。",
          "**flush** `() =\\> Promise\\<void\\>` 强制排队或进行中的写入在 resolve 之前提交。在进程退出或导航离开前调用，以防数据丢失。",
          "**listVersions** `(path: string) =\\> Promise\\<PersistVersionEntry[]\\>` 按新到旧顺序返回 `path` 的版本历史。不存在版本时返回空数组。请见下方 `PersistVersionEntry`。",
          "**loadFrom** `(path: string, versionKey: string) =\\> Promise\\<string | undefined\\>` 按 `versionKey` 标识的特定版本返回 HTML 内容。键不存在时返回 `undefined`。",
          '**on** `(event: "persist:error", handler) =\\> () =\\> void` 订阅写入失败。返回注销函数。适配器必须发出此事件——而不是抛错——当写入失败时，确保即使存储暂时不可用，会话也能继续运行。',
        ],
        codeBlocks: [
          {
            code: 'interface PersistAdapter {\n  read(path: string): Promise<string | undefined>;\n  write(path: string, content: string): Promise<void>;\n  flush(): Promise<void>;\n  listVersions(path: string): Promise<PersistVersionEntry[]>;\n  loadFrom(path: string, versionKey: string): Promise<string | undefined>;\n  on(event: "persist:error", handler: (event: PersistErrorEvent) => void): () => void;\n}',
            file: "ts",
          },
        ],
        id: "interface",
      },
      {
        h: "契约摘要",
        id: "contract-summary",
        p: "",
        paras: [],
        bullets: [
          "`read()` 对从未写入过的路径必须返回 `undefined` —— 绝不能抛出 `ENOENT` 或 404 类异常。",
          "`write()` 必须是幂等的；对同一路径的第二次写入会覆盖之前存储的内容。",
          "`flush()` 在所有待处理的写入都已提交至持久存储后 resolve。",
          "`listVersions()` 按最新优先的顺序返回版本条目；`loadFrom()` 使用这些条目提供的键名。",
          "写入错误通过 `on('persist:error')` 发出，绝不能直接抛出 —— 编辑会话需继续运行。",
        ],
        codeBlocks: [],
      },
      {
        h: "PersistVersionEntry",
        p: "",
        paras: [
          '`key` 由适配器定义，对调用方不透明——直接传给 `loadFrom()`。文件系统适配器把毫秒和计数器编码进键；内存适配器使用递增的 `"v1"`、`"v2"`……方案。',
        ],
        codeBlocks: [
          {
            code: "interface PersistVersionEntry {\n  /** Opaque key identifying this version (adapter-defined format). */\n  key: string;\n  /** Full HTML content — may be omitted by adapters that load content lazily via loadFrom(). */\n  content?: string;\n  timestamp?: number;\n}",
            file: "ts",
          },
        ],
        id: "persistversionentry",
      },
      {
        h: "PreviewAdapter",
        p: "",
        paras: [
          "可注入的预览界面适配器。把 SDK 与宿主的渲染层解耦。SDK **不在** 60fps 草稿循环中：你的指针移动处理程序以 60fps 直接在适配器上调用 `applyDraft()`，SDK 只在手势结束、触发 `commitPreview()` 派生并派发结果 op 时参与一次。",
        ],
        codeBlocks: [
          {
            code: 'import type { PreviewAdapter } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "previewadapter",
      },
      {
        h: "接口",
        p: "",
        paras: [
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
          '**on** `(event: "selection", handler: (ids: string[]) =\\> void) =\\> () =\\> void` 当预览宿主改变选择时触发（例如用户点击元素）。返回注销函数。在当前版本中，调用方改为监听会话自身的 `selectionchange` 事件——此钩子将在后续阶段接通。',
          "**attachSync** `(comp: Composition) =\\> () =\\> void` 把组合的编辑镜像到适配器自身的实时文档：先对组合的当前覆盖集做一次立即全量同步，然后订阅并重放每个未来的 `patch` 事件——撤销/重做亦然，因为两者都经由同一事件以正/逆补丁触发。当已挂载时再次调用 `attachSync`，会先注销之前的订阅。全覆盖同步每次 iframe `load` 也会重跑，因此与 attach 竞争的 `srcdoc` 导航（或加载窗口期间提交的丢补丁）会在新文档到达后收敛。返回注销函数。",
          "脚本标签补丁（`/script/gsap` 及任何未来的 `/script/*` 路径）从不镜像——重写实时 `<script>` 标签内容不会重新执行它，重新运行 GSAP 初始化会与运行中的时间轴状态冲突。其他补丁种类（样式、文本、属性、计时、保持、元素添加/移除、样式表、变量值、变量声明）原样镜像。",
        ],
        codeBlocks: [
          {
            code: 'interface PreviewAdapter {\n  elementAtPoint(x: number, y: number, opts?: { atTime?: number }): ElementAtPointResult | null;\n  isProvablyEmptyAt?(x: number, y: number, opts?: PaintQueryOptions): boolean;\n  applyDraft(id: string, props: DraftProps): void;\n  commitPreview(): void;\n  cancelPreview(): void;\n  select(ids: string[], opts?: { additive?: boolean }): void;\n  on(event: "selection", handler: (ids: string[]) => void): () => void;\n  attachSync(comp: Composition): () => void;\n}',
            file: "ts",
          },
          {
            code: "if (preview.isProvablyEmptyAt?.(x, y)) passThrough();",
            file: "ts",
          },
          {
            code: "const adapter = createIframePreviewAdapter(iframe, dispatch);\nconst comp = await openComposition(html, { preview: adapter });\nconst detach = adapter.attachSync(comp);\n\n// later, if the host tears down the preview:\ndetach();",
            file: "ts",
          },
        ],
        id: "interface-5",
      },
      {
        h: "ElementAtPointResult",
        p: "",
        paras: ['`id` 是元素的 `data-hf-id` 值；`tag` 是其小写标签名（例如 `"div"`、`"img"`）。'],
        codeBlocks: [
          {
            code: "interface ElementAtPointResult {\n  id: string;\n  tag: string;\n}",
            file: "ts",
          },
        ],
        id: "elementatpointresult",
      },
      {
        h: "DraftProps",
        p: "",
        paras: [
          "`dx` 和 `dy` 是组合像素中的累积拖拽增量。`width` 和 `height` 在接口中定义以便前向兼容，但尚未接通任何 op。",
        ],
        codeBlocks: [
          {
            code: "interface DraftProps {\n  dx?: number;\n  dy?: number;\n  width?: number;\n  height?: number;\n}",
            file: "ts",
          },
        ],
        id: "draftprops",
      },
      {
        h: "PaintQueryOptions",
        p: "",
        paras: [
          "**fullBleedFraction** `number`（默认：0） 最小绘制盒覆盖至少此比例组合帧的命中读作背景而非墨迹。这是宿主策略，不是关于组合的事实：把“点击了覆盖整帧的层”视为“点击了背景”的编辑器传入 `0.9`，答案字面墨迹问题的调用方保持 `0`。嵌套子组合也携带 `data-composition-id`，因此参考帧是包含该点的最内层组合根。",
          "**addressableOnly** `boolean`（默认：true） 仅考虑模型可寻址元素（`[data-hf-id]`）。标记只在 `openComposition` 给定的文档上做一次，运行时之后创建或拉取的任何内容在默认遍历中不可见：分词文本的词和字符跨度（拆分还会清空被标记父级自身的文本节点，使父级也不再计数）、克隆节点，以及从 `data-composition-src` 挂载的整个子组合场景。因此动态排版和注册表挂载的下三分之一屏——两者都是典型的透明覆盖层内容——默认读作无墨迹。",
          "设为 `false` 可把遍历拓宽到所有元素，以更大的候选集为代价看到该内容。",
          "[!NOTE] `ElementAtPointResult` 和 `DraftProps` 是 `PreviewAdapter` 产生和消费的结构形状。它们**不**从 `@hyperframes/sdk` 桶中重新导出——请按这些形状实现，而不是导入它们。`PaintQueryOptions` **是**重新导出的，因为调用方传入它而非实现它。",
        ],
        codeBlocks: [
          {
            code: "interface PaintQueryOptions {\n  fullBleedFraction?: number;\n  addressableOnly?: boolean;\n}",
            file: "ts",
          },
        ],
        id: "paintqueryoptions",
      },
      {
        h: "createMemoryAdapter",
        p: "",
        paras: [
          '返回由进程内 `Map` 支撑的 `PersistAdapter`。写入同步；`flush()` 为空操作。版本键为 `"v1"`、`"v2"`……，带完整内容存于内存。',
          "返回值还暴露 `injectFault(message)`——测试辅助，使**下一次** `write()` 调用触发带 `message` 的 `persist:error` 事件而不是提交。用于单元测试验证你的错误处理代码路径。",
          "[!NOTE] `createMemoryAdapter()` 最适合测试、演示和临时进程内会话。本地开发请使用 `createFsAdapter()`，使编辑在重启后存活。",
        ],
        codeBlocks: [
          {
            code: 'import { createMemoryAdapter } from "@hyperframes/sdk";\n\nfunction createMemoryAdapter(): PersistAdapter & { injectFault(message: string): void };',
            file: "ts",
          },
          {
            code: 'const persist = createMemoryAdapter();\n\nconst comp = await openComposition(html, { persist });\ncomp.setText("hf-title", "Hello");\nawait comp.flush();\n\nconst saved = await persist.read("composition.html");',
            file: "ts",
          },
        ],
        id: "factory-functions",
      },
      {
        h: "createFsAdapter",
        p: "",
        paras: [
          "**仅 Node.js。** 返回在根目录下读写文件的 `PersistAdapter`。从 `@hyperframes/sdk/adapters/fs` 子路径导入——该模块使用 Node `fs/promises`，被排除在浏览器安全的主 bundle 之外。",
        ],
        codeBlocks: [
          {
            code: 'import { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\n\nfunction createFsAdapter(opts: FsAdapterOptions): PersistAdapter;',
            file: "ts",
          },
        ],
        id: "creatememoryadapter",
      },
      {
        h: "FsAdapterOptions",
        p: "",
        paras: [
          "**root** `string` *必填* 组合文件写入目录的绝对或相对路径。首次写入时以 `mkdir -p` 创建。",
          "**maxVersions** `number` 每个文件保留的最大历史版本数。超限时自动剪除最旧版本。默认 `20`。",
          '适配器把当前组合写到 `{root}/{path}`，把版本快照存于 `{root}/.hf-versions/{path}/`。版本键编码 `Date.now()` 和单调计数器（`"1750000000000-0001"`），因此 `listVersions()` 按字典序降序返回（新到旧）。',
          "[!WARNING] `createFsAdapter` 使用 Node.js `fs/promises`。请勿在浏览器或边缘环境中导入它——请从 `@hyperframes/sdk/adapters/fs`（子路径）导入，以便打包器可以 tree-shake 它。",
        ],
        codeBlocks: [
          {
            code: "interface FsAdapterOptions {\n  /** Root directory for composition files. */\n  root: string;\n  /** Max versions to keep per file. Default: 20. */\n  maxVersions?: number;\n}",
            file: "ts",
          },
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\nimport { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: "./project", maxVersions: 50 }),\n  persistPath: "index.html",\n});\n\ncomp.setText("hf-title", "Saved");\nawait comp.flush();\n\n// List saved versions\nconst adapter = createFsAdapter({ root: "./project" });\nconst versions = await adapter.listVersions("index.html");\nconst previous = await adapter.loadFrom("index.html", versions[1].key);',
            file: "ts",
          },
        ],
        id: "createfsadapter",
      },
      {
        h: "createHeadlessAdapter",
        p: "",
        paras: [
          '返回供无头使用的空操作 `PreviewAdapter`：智能体、CI 流水线和服务端渲染。所有方法都是桩——`elementAtPoint` 恒返回 `null`，`isProvablyEmptyAt` 恒返回 `false`，`applyDraft` 和 `commitPreview` 为空操作，`"selection"` 事件从不触发。',
          "`isProvablyEmptyAt` 故意返回 `false`：没有界面的适配器无法证明某点无墨迹，回答 `true` 会告诉宿主可以点击穿透一个无人能见的组合。",
          "当为程序化编辑打开组合、不需要实时预览界面时传入此适配器。",
          "[!NOTE] `openComposition` 不会自动创建预览适配器。不需要预览界面时省略 `preview`，或在显式空操作适配器能让共享代码更清晰时传入 `createHeadlessAdapter()`。",
        ],
        codeBlocks: [
          {
            code: 'import { createHeadlessAdapter } from "@hyperframes/sdk";\n\nfunction createHeadlessAdapter(): PreviewAdapter;',
            file: "ts",
          },
          {
            code: 'import { openComposition, createHeadlessAdapter } from "@hyperframes/sdk";\n\nconst comp = await openComposition(html, {\n  preview: createHeadlessAdapter(),\n});',
            file: "ts",
          },
        ],
        id: "fsadapteroptions",
      },
      {
        h: "createIframePreviewAdapter",
        p: "",
        paras: [
          "返回把 SDK 桥接到包含组合的同源 `<iframe>` 的 `PreviewAdapter`。提供经由 `elementsFromPoint`（感知 z 堆栈）的真实点击测试、草稿拖拽支持和选择管理。",
          "**要求：** **图像 alpha 点击测试：** 对于 `<img>` 元素，适配器用 `OffscreenCanvas` 在指针下的像素处采样 alpha 通道。透明像素穿透到背后元素。使 canvas 染色的跨源图像视为不透明（安全回退，每 src 记录一次）。",
          "**绘制查询：** `isProvablyEmptyAt` 回答某点是否可以安全点击穿透——请见上方 [`PreviewAdapter` 接口](#previewadapter) 和[透明覆盖层配方](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md#transparent-compositions-over-other-content)。其组件可直接导入，供点击测试策略不同的宿主使用：",
        ],
        codeBlocks: [
          {
            code: 'import { createIframePreviewAdapter } from "@hyperframes/sdk";\n\nfunction createIframePreviewAdapter(\n  iframe: HTMLIFrameElement,\n  dispatch?: (op: EditOp) => void,\n): PreviewAdapter;',
            file: "ts",
          },
          {
            code: 'import {\n  elementPaintsInk,\n  compositionPaintsAt,\n  imageAlphaOpaqueAt,\n  alphaIsOpaque,\n  mapPointToImagePixel,\n} from "@hyperframes/sdk/adapters/iframe";',
            file: "ts",
          },
          {
            code: 'import { openComposition, createIframePreviewAdapter } from "@hyperframes/sdk";\n\nconst iframe = document.querySelector<HTMLIFrameElement>("#preview-frame")!;\n// Optional, and dispatched with `?.` — the callback cannot fire before\n// openComposition() resolves, but strict TypeScript cannot prove that and\n// rejects a definite `let` captured before assignment (TS2454).\nlet comp: Awaited<ReturnType<typeof openComposition>> | undefined;\nconst preview = createIframePreviewAdapter(iframe, (op) => comp?.dispatch(op));\ncomp = await openComposition(html, { preview });\n\n// Hit-test at pointer position\nconst hit = preview.elementAtPoint(pointerX, pointerY);\nif (hit) {\n  preview.select([hit.id]);\n\n  // Drag: call applyDraft at 60fps, commitPreview on pointer-up\n  preview.applyDraft(hit.id, { dx: 12, dy: -5 });\n  preview.commitPreview();\n}',
            file: "ts",
          },
        ],
        bullets: [
          "iframe 必须同源（例如 `srcdoc` 或 `blob:` URL）。对 `contentDocument` 的跨源访问会抛 `DOMException`。",
          "传入会话的 `dispatch` 回调以启用 `commitPreview()`——没有它，指针释放对模型为空操作。",
        ],
        id: "createheadlessadapter",
      },
      {
        h: "导出映射",
        p: "",
        paras: [
          "| 符号 | 导入自 |\n| - | - |\n| `PersistAdapter`、`PreviewAdapter`、`PersistVersionEntry` | `@hyperframes/sdk`（仅类型） |\n| `createMemoryAdapter` | `@hyperframes/sdk` |\n| `createHeadlessAdapter` | `@hyperframes/sdk` |\n| `createIframePreviewAdapter`、`resolveNearestHfElement` | `@hyperframes/sdk` |\n| `PaintQueryOptions` | `@hyperframes/sdk`（仅类型） |\n| `elementPaintsInk`、`compositionPaintsAt`、`imageAlphaOpaqueAt`、`alphaIsOpaque`、`mapPointToImagePixel`、`INTRINSIC_PAINT_TAGS` | `@hyperframes/sdk/adapters/iframe` |\n| `createFsAdapter`、`FsAdapterOptions` | `@hyperframes/sdk/adapters/fs` |",
          "[card] [持久化指南](https://hyperframes.heygen.com/sdk/guides/persistence.md)",
          "如何把适配器接入 openComposition、处理错误，并恢复版本。",
          "[card] [画布集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md) 用 iframe 预览适配器和点击测试构建可视编辑器画布。",
        ],
        codeBlocks: [],
        id: "createiframepreviewadapter",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[帧适配器](https://hyperframes.heygen.com/concepts/frame-adapters.md)",
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
          "[用 SDK 编辑组合](https://hyperframes.heygen.com/sdk/quickstart.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "sdk-utils": {
    lede: "本页涵盖从 `@hyperframes/sdk` 导出、且未在 [`openComposition`](https://hyperframes.heygen.com/sdk/reference/open-composition)、[`Composition` 接口](https://hyperframes.heygen.com/sdk/reference/composition)、[编辑操作](https://hyperframes.heygen.com/sdk/reference/edit-operations.md)、[类型](https://hyperframes.heygen.com/sdk/reference/types.md)或[适配器](https://hyperframes.heygen.com/sdk/reference/adapters.md)中覆盖的所有内容。",
    sections: [
      {
        h: "历史记录模块",
        p: "",
        paras: [
          '可选的撤销/重做模块，通过 `"patch"` 事件挂到 `Composition` 会话上。`openComposition()` 创建的独立会话会自动挂载历史模块——只有当你构建管理自有撤销栈的宿主应用，或需要非默认合并/深度设置时，才需要直接使用 `createHistory`。',
        ],
        codeBlocks: [
          {
            code: 'import { createHistory } from "@hyperframes/sdk";\nimport type { HistoryModule, HistoryOptions, HistoryEntry } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "history-module",
      },
      {
        h: "createHistory",
        p: "",
        paras: [
          "订阅 `session.on('patch')` 并构建撤销/重做栈。把同一元素上连续的同操作爆发合并为单个撤销条目，使滑块拖拽产生一个撤销步骤，而不是数百个。",
        ],
        codeBlocks: [
          {
            code: "function createHistory(session: Composition, opts?: HistoryOptions): HistoryModule;",
            file: "ts",
          },
          {
            code: 'import { openComposition, createHistory } from "@hyperframes/sdk";\n\n// Custom history — host controls undo/redo buttons\nconst comp = await openComposition(html, { history: false });\nconst history = createHistory(comp, { coalesceMs: 500, maxEntries: 50 });\n\ncomp.setText("hf-title", "Draft v1");\n\nhistory.canUndo(); // true\nhistory.undo();    // reverts to original\nhistory.redo();    // re-applies\n\nhistory.dispose(); // unsubscribes from patch events',
            file: "ts",
          },
        ],
        id: "createhistory",
      },
      {
        h: "HistoryModule",
        p: "",
        paras: [
          "**undo** `() =\\> boolean` 从撤销栈弹出顶部条目，并通过 `session.applyPatches()` 应用其逆向补丁，标记为 `ORIGIN_APPLY_PATCHES`。弹出条目时返回 `true`，栈为空时返回 `false`。",
          "**redo** `() =\\> boolean` 从重做栈弹出顶部条目，并重新应用其正向补丁。弹出条目时返回 `true`，栈为空时返回 `false`。任何新操作会清空重做栈。",
          "**canUndo** `() =\\> boolean` 撤销栈至少有一条条目时返回 `true`。",
          "**canRedo** `() =\\> boolean` 重做栈至少有一条条目时返回 `true`。",
          '**dispose** `() =\\> void` 从会话的 `"patch"` 事件注销，并清空两栈。在会话关闭时调用。',
        ],
        codeBlocks: [
          {
            code: "interface HistoryModule {\n  undo(): boolean;\n  redo(): boolean;\n  canUndo(): boolean;\n  canRedo(): boolean;\n  dispose(): void;\n}",
            file: "ts",
          },
        ],
        id: "historymodule",
      },
      {
        h: "HistoryOptions",
        p: "",
        paras: [
          "**trackedOrigins** `unknown[]` 只有 `origin` 值出现在此数组中的操作才进入撤销栈。省略时，除 `ORIGIN_APPLY_PATCHES`（恒排除以防止撤销循环）之外的所有来源均被追踪。用它把撤销栈限制为 UI 驱动的编辑，让程序化补丁静默通过。",
          "**coalesceMs** `number` 同一路径上同操作爆发合并为单个撤销条目的毫秒窗口。时间戳在每个被合并事件上滑动，因此连续编辑会持续合并，直到出现大于 `coalesceMs` 的间隙。默认：`300`。",
          "**maxEntries** `number` 撤销栈的最大深度。超限时丢弃最旧条目。默认：`100`。",
        ],
        codeBlocks: [
          {
            code: "interface HistoryOptions {\n  trackedOrigins?: unknown[];\n  coalesceMs?: number;\n  maxEntries?: number;\n}",
            file: "ts",
          },
        ],
        id: "historyoptions",
      },
      {
        h: "HistoryEntry",
        p: "",
        paras: [
          "条目是历史模块内部的——你不能直接创建它们。它们镜像 `PatchEvent` 字段的形状，使历史模块无需重新解析即可重建正/逆变更集。",
          "[!NOTE] 独立会话（默认）自动挂载历史记录。当你想通过 `createHistory` 或宿主自有栈自行管理撤销/重做时，向 `openComposition()` 传入 `{ history: false }`。",
        ],
        codeBlocks: [
          {
            code: "interface HistoryEntry {\n  readonly patches: readonly JsonPatchOp[];\n  readonly inversePatches: readonly JsonPatchOp[];\n  readonly opTypes: readonly string[];\n  readonly origin: unknown;\n  readonly timestamp: number;\n}",
            file: "ts",
          },
        ],
        id: "historyentry",
      },
      {
        h: "持久化队列",
        p: "",
        paras: [
          '可选模块，订阅会话的 `"change"` 事件，并通过 `PersistAdapter` 调度异步写入。一次进行一项写入；最新 HTML 恒胜（后写胜合并）。通过 `openComposition()` 接入 `persist` 适配器的独立会话会自动挂载它。只有当你构建把持久化独立于 SDK 会话管理的嵌入宿主时，才直接使用 `createPersistQueue`。',
        ],
        codeBlocks: [
          {
            code: 'import { createPersistQueue } from "@hyperframes/sdk";\nimport type { PersistQueueModule, PersistQueueOptions } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "persist-queue",
      },
      {
        h: "createPersistQueue",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "function createPersistQueue(\n  session: Composition,\n  adapter: PersistAdapter,\n  opts?: PersistQueueOptions,\n): PersistQueueModule;",
            file: "ts",
          },
          {
            code: 'import { openComposition, createPersistQueue } from "@hyperframes/sdk";\nimport { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\n\nconst adapt = createFsAdapter({ root: "./project" });\nconst comp = await openComposition(html, { history: false });\n\nconst queue = createPersistQueue(comp, adapt, {\n  path: "my-comp.html",\n  onError: ({ error }) => console.error("Write failed:", error.message),\n});\n\ncomp.setText("hf-title", "Autosaved");\n\n// Force immediate flush before app close\nawait queue.flush();\nqueue.dispose();',
            file: "ts",
          },
        ],
        id: "createpersistqueue",
      },
      {
        h: "PersistQueueModule",
        p: "",
        paras: [
          "**flush** `() =\\> Promise\\<void\\>` 立即保存任何挂起的编辑，等待进行中的保存，并在 resolve 之前刷新适配器的存储。没有挂起编辑时，刷新存储但不写入新版本。在应用关闭或页面卸载前使用。",
          '**dispose** `() =\\> void` 取消任何挂起写入，并从会话的 `"change"` 事件注销。不刷新——若需确保写入最终状态，请先调用 `flush()`。',
        ],
        codeBlocks: [
          {
            code: "interface PersistQueueModule {\n  flush(): Promise<void>;\n  dispose(): void;\n}",
            file: "ts",
          },
        ],
        id: "persistqueuemodule",
      },
      {
        h: "PersistQueueOptions",
        p: "",
        paras: [
          '**path** `string` 适配器写入路径。直接传给 `adapter.write(path, content)`。默认：`"composition.html"`。',
          "**onError** `(e: PersistErrorEvent) =\\> void` 当 `adapter.write()` 或 `adapter.flush()` reject 时调用。接收带 `{ error: { message, cause? } }` 的 `PersistErrorEvent`。用它在 UI 或日志层呈现持久化失败。",
        ],
        codeBlocks: [
          {
            code: "interface PersistQueueOptions {\n  path?: string;\n  onError?: (e: PersistErrorEvent) => void;\n}",
            file: "ts",
          },
        ],
        id: "persistqueueoptions",
      },
      {
        h: "文档工具",
        p: "",
        paras: [
          "从解析后的 HTML 构建 `SdkDocument` 模型和 `HyperFramesElement` 树的高层工具。这些是 SDK 每次调用 `openComposition()` 时内部使用的相同函数。你很少需要直接使用它们——它们面向在会话之外解析 HTML 的宿主，或测试场景。",
        ],
        codeBlocks: [
          {
            code: 'import { buildDocument, buildRoots, flatElements } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "document-utilities",
      },
      {
        h: "buildDocument",
        p: "",
        paras: [
          "把 HTML 字符串解析为 SDK 文档模型。先调用 `ensureHfIds` 使每个元素都有稳定的 `data-hf-id`。使用 `linkedom` 做 DOM 解析——Node 安全，可在智能体、CI 和服务端代码中使用。返回 `SdkDocument` 快照；实时会话上的修改不会更新返回值。",
        ],
        codeBlocks: [
          {
            code: "function buildDocument(html: string): SdkDocument;",
            file: "ts",
          },
        ],
        id: "builddocument",
      },
      {
        h: "buildRoots",
        p: "",
        paras: [
          "从已解析（经 hf-id 标记）的 `linkedom` `Document` 构建元素树。直接遍历实时 DOM——无序列化/重解析往返。这是每次操作后会话查询 API 对其可变文档使用的实现。",
        ],
        codeBlocks: [
          {
            code: "function buildRoots(document: Document): HyperFramesElement[];",
            file: "ts",
          },
        ],
        id: "buildroots",
      },
      {
        h: "flatElements",
        p: "",
        paras: [
          "按文档顺序（深度优先前序）返回 `roots` 及其所有后代中的每个元素。适用于跨完整元素树搜索，而无需自己写递归遍历。",
        ],
        codeBlocks: [
          {
            code: "function flatElements(roots: readonly HyperFramesElement[]): HyperFramesElement[];",
            file: "ts",
          },
          {
            code: 'import { buildDocument, flatElements } from "@hyperframes/sdk";\n\nconst doc = buildDocument(html);\nconst all = flatElements(doc.roots);\nconst images = all.filter((el) => el.tag === "img");',
            file: "ts",
          },
        ],
        id: "flatelements",
      },
      {
        h: "Id 与作用域工具",
        p: "",
        paras: [
          "dispatch、补丁重放和查询内部使用的高层 id 解析辅助，面向针对同一文档模型构建自有 DOM 工具的宿主。",
        ],
        codeBlocks: [
          {
            code: 'import { resolveScoped, findById, bareId, escapeHfId, isNewHostBoundary } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "id-scope-utilities",
      },
      {
        h: "resolveScoped",
        p: "",
        paras: [
          '解析 `HfId`——裸（`"hf-title"`）或作用域（`"hf-host/hf-leaf"`）——对应的 `Element`。对有歧义的裸 id（同一 id 同时出现在顶层和子组合内部），优先规范顶层匹配，与 `getElement()` 自身的偏好一致。这是所有修改和补丁重放路径共享的单一解析规则——用你自己的 `querySelector` 代替可能静默命中错误的重复项。',
        ],
        codeBlocks: [
          {
            code: "function resolveScoped(document: Document, id: string): Element | null;",
            file: "ts",
          },
        ],
        id: "resolvescoped",
      },
      {
        h: "findById",
        p: "",
        paras: [
          "`resolveScoped` 的薄别名，保留以在“查找”比“解析”更可读的调用点中提升清晰度。行为相同。",
        ],
        codeBlocks: [
          {
            code: "function findById(document: Document, id: string): Element | null;",
            file: "ts",
          },
        ],
        id: "findbyid",
      },
      {
        h: "bareId",
        p: "",
        paras: [
          '把作用域 id 剥到叶段：`bareId("hf-host/hf-leaf")` 返回 `"hf-leaf"`。对已是裸 id 的为无操作。',
        ],
        codeBlocks: [
          {
            code: "function bareId(scopedId: string): string;",
            file: "ts",
          },
        ],
        id: "bareid",
      },
      {
        h: "escapeHfId",
        p: "",
        paras: [
          '为安全插入 `querySelectorAll` 属性值选择器而转义 id（反斜杠和双引号）。如果你自己写原始 `[data-hf-id="..."]` 选择器而不是走 `resolveScoped`/`findById` 时使用此函数。',
        ],
        codeBlocks: [
          {
            code: "function escapeHfId(id: string): string;",
            file: "ts",
          },
        ],
        id: "escapehfid",
      },
      {
        h: "isNewHostBoundary",
        p: "",
        paras: [
          "当 `el` 是内联子组合的根时返回 `true`——即它携带的 `data-composition-file` 属性值与父级不同（或父级没有）。在遍历树时用它检测“进入新子组合”，而无需硬编码属性名。",
        ],
        codeBlocks: [
          {
            code: "function isNewHostBoundary(el: Element): boolean;",
            file: "ts",
          },
        ],
        id: "isnewhostboundary",
      },
      {
        h: "变量工具",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { readVariableDefault } from "@hyperframes/sdk";',
            file: "ts",
          },
        ],
        id: "variable-utilities",
      },
      {
        h: "readVariableDefault",
        p: "",
        paras: [
          "从携带 `data-composition-variables` 的元素读取已声明变量当前 `default` 值：完整文档通常为 `<html>`，模板/片段为组合根。在会话代码中优先使用类型化的 `Composition` 方法；已有声明元素时使用此辅助函数。",
        ],
        codeBlocks: [
          {
            code: "function readVariableDefault(declarationElement: Element | null, id: string): unknown;",
            file: "ts",
          },
        ],
        id: "readvariabledefault",
      },
      {
        h: "ORIGIN\\_APPLY\\_PATCHES",
        p: "",
        paras: [
          "`applyPatches()` 及历史模块的 `undo()` / `redo()` 方法发出的保留来源标签。宿主补丁监听器**必须**跳过此来源以避免撤销循环： 值是命名空间字符串而非 `Symbol`，因此能跨越 realm 边界——`postMessage`、结构化克隆和 JSON 序列化都能正确保留它。跨帧或跨 worker 转发补丁事件的 T3 嵌入宿主依赖此特性。命名空间前缀（`@hyperframes/sdk:`）使与宿主自选来源字符串意外冲突的概率可忽略。",
        ],
        codeBlocks: [
          {
            code: 'import { ORIGIN_APPLY_PATCHES } from "@hyperframes/sdk";\n\nconst ORIGIN_APPLY_PATCHES = "@hyperframes/sdk:applyPatches";',
            file: "ts",
          },
          {
            code: 'comp.on("patch", ({ origin, patches }) => {\n  if (origin === ORIGIN_APPLY_PATCHES) return; // SDK-internal replay — skip\n  forwardToCollaborationLayer(patches);\n});',
            file: "ts",
          },
        ],
        id: "constants",
      },
      {
        h: "ORIGIN\\_LOCAL",
        p: "",
        paras: [
          '调用类型化方法（`setText`、`setStyle`，……）或不带显式 `origin` 选项的 `dispatch()` 时应用的默认来源。你可以在历史模块的 `trackedOrigins` 列表中按 `"local"` 过滤，只追踪用户驱动的 UI 编辑。',
        ],
        codeBlocks: [
          {
            code: 'import { ORIGIN_LOCAL } from "@hyperframes/sdk";\n\nconst ORIGIN_LOCAL = "local";',
            file: "ts",
          },
        ],
        id: "origin_apply_patches",
      },
      {
        h: "UnsupportedOpError",
        p: "",
        paras: [
          "当操作类型不被当前引擎版本处理时由 `dispatch()` 抛出。`code` 属性稳定并属于公共 API 契约的一部分——请按它切换而不是按消息字符串切换。",
          "用 `comp.can(op)` 在派发可选操作前做功能检测，避免在热路径中命中此错误：",
        ],
        codeBlocks: [
          {
            code: 'import { UnsupportedOpError } from "@hyperframes/sdk";',
            file: "ts",
          },
          {
            code: 'class UnsupportedOpError extends Error {\n  readonly code = "E_UNSUPPORTED_OP";\n}',
            file: "ts",
          },
          {
            code: 'const result = comp.can({ type: "setGsapTween", animationId: id, properties: { ease: "power2.out" } });\nif (!result.ok) {\n  console.warn(result.message);\n  return;\n}\ncomp.setGsapTween(id, { ease: "power2.out" });',
            file: "ts",
          },
        ],
        id: "origin_local",
      },
      {
        h: "resolveNearestHfElement",
        p: "",
        paras: [
          "从 `el` 经 `parentElement` 向上遍历，返回携带 `[data-hf-id]` 且不是 `[data-hf-root]` 的最近祖先（含自身）。当遍历退出 DOM 而未找到匹配、匹配节点是组合根、或 `isVisible(node)` 对匹配节点返回 `false` 时返回 `null`。",
          "这是一个纯函数（除 `getAttribute` 外不调用 `window` 或 DOM API），可在普通 Node 环境中做单元测试。`createIframePreviewAdapter` 内部用它把原始点击测试结果转换为 SDK 元素 ID。点击测试和可视编辑器画布模式的完整论述请见[画布集成指南](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)。",
        ],
        codeBlocks: [
          {
            code: 'import { resolveNearestHfElement } from "@hyperframes/sdk";\n\nfunction resolveNearestHfElement(\n  el: Element | null,\n  isVisible: (el: Element) => boolean,\n): ElementAtPointResult | null;',
            file: "ts",
          },
        ],
        id: "errors",
      },
      {
        h: "resolveElementAffordances",
        p: "",
        paras: [
          "给定实时元素的当前 DOM 状态和模型，决定可用的编辑操作。导入自 `@hyperframes/sdk/editing` 子路径。完整文档见[编辑能力指南](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md)。",
          "[card] [撤销、重做与补丁](https://hyperframes.heygen.com/sdk/guides/undo-redo-and-patches.md) 历史模块、ORIGIN\\_APPLY\\_PATCHES 和 applyPatches() 如何协同工作。",
          "[card] [持久化](https://hyperframes.heygen.com/sdk/guides/persistence.md) 接入 PersistAdapter、处理错误，并从版本历史恢复。",
        ],
        codeBlocks: [
          {
            code: 'import { resolveElementAffordances } from "@hyperframes/sdk/editing";',
            file: "ts",
          },
        ],
        id: "unsupportedoperror",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
          "[速度坡道](https://hyperframes.heygen.com/reference/speed-ramps.md)",
          "[@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
