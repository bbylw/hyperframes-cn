import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "pkg-core": {
    lede: "`@hyperframes/core` 包含 HyperFrames 中共享的合成模型和浏览器运行时。",
    sections: [
      {
        h: "主要入口",
        p: "",
        paras: [
          "| 需求 | Import |\n| - | - |\n| 类型、生成器和常用工具 | `@hyperframes/core` |\n| 时间编译和项目打包 | `@hyperframes/core/compiler` |\n| 变量声明和校验 | `@hyperframes/core/variables` |\n| 合成契约 helper | `@hyperframes/core/composition-contract` |\n| 预构建浏览器运行时 | `@hyperframes/core/runtime` |",
          "独立的 [Parsers](https://hyperframes.heygen.com/packages/parsers.md) 和 [Linter](https://hyperframes.heygen.com/packages/lint.md) 包为新集成拥有这些职责。Core 保留对部分旧导入的兼容再导出。",
        ],
        codeBlocks: [],
        id: "main-surfaces",
      },
      {
        h: "类型",
        p: "",
        paras: [
          "合成变量支持 `string`、`number`、`color`、`boolean`、`enum`、`font` 和 `image` 值。",
        ],
        codeBlocks: [
          {
            code: 'import type {\n  CanvasResolution,\n  CompositionSpec,\n  CompositionVariable,\n  TimelineCompositionElement,\n  TimelineElement,\n  TimelineMediaElement,\n  TimelineTextElement,\n} from "@hyperframes/core";',
            file: "ts",
          },
        ],
        id: "types",
      },
      {
        h: "解析或生成 HTML",
        p: "",
        paras: [
          "Core 再导出常用的解析 helper： 从 `TimelineElement` 数据生成完整合成： 第二个参数是所请求的时长（秒）。当输出必须可复现时，传入稳定的 `compositionId`。",
          "合成生成器要求承载代码的输入来自可信作者。`styles` 和 `generateHyperframesStyles` 保留作者写的 CSS，可能加载外部资源。`animations` 可能包含作为 JavaScript 输出的 `__raw:` 值；`includeScripts: true` 会包含可执行的 timeline 代码。`serializeGsapAnimations` 还接受原始的 `preamble`、`postamble` 和承载代码的 `timelineVar`。切勿用不可信数据填充这些输入。属性编码和闭合标签隔离不是沙箱；不可信合成应在适当的隔离执行环境中渲染，切勿在其上提供特权源。",
          "文本内容保留受支持的行内格式 sanitizer 契约。剪辑解析器有意将内部格式压平为文本，因此 parse/generate 不是编辑源 HTML 的无损替代。",
        ],
        codeBlocks: [
          {
            code: 'import { extractCompositionMetadata, parseHtml } from "@hyperframes/core";\n\nconst parsed = parseHtml(html);\nconst metadata = extractCompositionMetadata(html);\n\nconsole.log(metadata.compositionId, metadata.compositionDuration, metadata.variables);',
            file: "ts",
          },
          {
            code: 'import { generateHyperframesHtml } from "@hyperframes/core";\n\nconst html = generateHyperframesHtml(elements, 6, {\n  compositionId: "product-intro",\n  resolution: "landscape",\n  animations,\n  styles,\n});',
            file: "ts",
          },
        ],
        id: "parse-or-generate-html",
      },
      {
        h: "读取和校验变量",
        p: "",
        paras: [
          "在合成脚本内，`getVariables()` 读取声明的默认值加上当前预览或渲染传入的值： 在 Node 工具中，依据从合成解析出的声明校验一个值对象：",
        ],
        codeBlocks: [
          {
            code: 'import { getVariables } from "@hyperframes/core";\n\nconst { title } = getVariables<{ title: string }>();',
            file: "ts",
          },
          {
            code: 'import { formatVariableValidationIssue, validateVariables } from "@hyperframes/core";\n\nconst issues = validateVariables({ title: "Launch day" }, metadata.variables);\n\nfor (const issue of issues) {\n  console.warn(formatVariableValidationIssue(issue));\n}',
            file: "ts",
          },
        ],
        id: "read-and-validate-variables",
      },
      {
        h: "编译项目",
        p: "",
        paras: [
          "当你的集成需要已解析的媒体时间或单个打包文档时，使用 compiler 入口。",
          "打包保留 `<img>` 和 `<source>` 元素图片 `srcset` URL 中的 data URL 和逗号。符合条件的本地候选默认内联；`inlineAssets: false` 时，它们保持为相对于项目根的路径，包括当入口文件在子目录时。宽度和密度描述符都会保留。",
          "挂载场景在文件在其自身目录存在时，从场景自身目录解析其 `srcset` 候选，以项目根路径作为回退。",
          "本地样式表 `@import` 规则保留每次出现的媒体条件和层叠位置，即使多处导入引用同一文件。循环导入在已在展开的样式表上停止。重复导入会将样式表副本加入打包，可能增加体积。",
          "内联的本地素材会去掉缓存破坏查询参数并保留片段。例如，`image.png?v=2#sprite` 会变成以 `#sprite` 结尾的 data URL。`inlineAssets: false` 时，查询和片段都保留在文件 URL 上。",
          "编译器还暴露 `compileTimingAttrs()`、`injectDurations()` 和 `extractResolvedMedia()` 等底层时间 helper。",
        ],
        codeBlocks: [
          {
            code: 'import { bundleToSingleHtml, compileHtml } from "@hyperframes/core/compiler";\n\nconst compiled = await compileHtml(rawHtml, "./project", async (mediaPath) =>\n  probeDuration(mediaPath),\n);\n\nconst bundled = await bundleToSingleHtml("./project", {\n  entryFile: "index.html",\n});',
            file: "ts",
          },
        ],
        id: "compile-a-project",
      },
      {
        h: "检查静态契约",
        p: "",
        paras: [
          "要获得完整的合成 lint 结果，请使用 [`@hyperframes/lint`](https://hyperframes.heygen.com/packages/lint) 或运行 `npx hyperframes lint`。",
        ],
        codeBlocks: [
          {
            code: 'import { validateHyperframeHtmlContract } from "@hyperframes/core/compiler";\n\nconst result = await validateHyperframeHtmlContract(html);\n\nif (!result.isValid) {\n  console.error(result.missingKeys);\n}',
            file: "ts",
          },
        ],
        id: "check-the-static-contract",
      },
      {
        h: "构建帧适配器",
        p: "",
        paras: ["帧适配器使动画运行时可按帧定位。Core 包含 GSAP 适配器："],
        codeBlocks: [
          {
            code: 'import { createGSAPFrameAdapter } from "@hyperframes/core";\n\nconst adapter = createGSAPFrameAdapter({\n  id: "product-intro",\n  fps: 30,\n  timeline,\n});\n\nawait adapter.init?.({\n  compositionId: "product-intro",\n  fps: 30,\n  width: 1920,\n  height: 1080,\n});\n\nawait adapter.seekFrame(42);',
            file: "ts",
          },
        ],
        id: "build-a-frame-adapter",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [HTML 架构规范](https://hyperframes.heygen.com/reference/html-schema.md) 了解 Core 读写 HTML 契约。",
          "[card] [@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md) 直接处理 HTML 和 GSAP 解析。",
          "[card] [@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md) 在你自己的工具中校验合成 HTML。",
          "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 从 Node.js 将项目变成成品视频。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
          "[@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)",
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-parsers": {
    lede: "parsers 包拥有 GSAP 动画解析/写入器、HTML 合成解析器、hf-id 印制和 spring-ease 生成。它没有任何 `@hyperframes/*` 运行时依赖，因此可独立于框架其余部分使用。",
    sections: [
      {
        h: "何时使用",
        p: "",
        paras: [
          "[!TIP] **大多数用户不需要直接安装 `@hyperframes/parsers`。** [`@hyperframes/core`](https://hyperframes.heygen.com/packages/core) 再导出其所需的解析 API，[CLI](https://hyperframes.heygen.com/packages/cli.md) / [studio](https://hyperframes.heygen.com/packages/studio.md) 也传递依赖它。只有在你希望**不**引入 core 其余部分、只用解析层时，才直接使用它。",
          "**当你需要以下能力时，使用 `@hyperframes/parsers`：**",
        ],
        codeBlocks: [],
        bullets: [
          "将 HTML 合成解析为结构化的 TypeScript 对象",
          "解析、编辑并重新序列化 GSAP 时间线脚本（AST 往返）",
          "在文档上印制确定性 `hf-id` 属性",
          "构建触及解析层但不需要 core 运行时、编译器或生成器的工具",
        ],
        id: "when-to-use",
      },
      {
        h: "包导出",
        p: "",
        paras: [
          "| Import | 说明 |\n| - | - |\n| `@hyperframes/parsers` | HTML 解析器、GSAP 序列化/校验 helper、hf-ids、共享类型 |\n| `@hyperframes/parsers/gsap-parser` | GSAP 解析器导出、`parseGsapScript`、`SUPPORTED_PROPS`、`SUPPORTED_EASES` |\n| `@hyperframes/parsers/gsap-parser-acorn` | 基于 Acorn 的 GSAP 解析器（浏览器安全，读取路径） |\n| `@hyperframes/parsers/gsap-writer-acorn` | 基于 Acorn 的 GSAP 写入器（变更 helper） |\n| `@hyperframes/parsers/gsap-parser-recast` | 基于 Recast 的 GSAP 解析/写入器（旧实现） |\n| `@hyperframes/parsers/gsap-constants` | `SUPPORTED_PROPS`、`SUPPORTED_EASES`、属性组 |\n| `@hyperframes/parsers/spring-ease` | Spring-ease 曲线生成 |\n| `@hyperframes/parsers/hf-ids` | 确定性元素 id 印制 |\n| `@hyperframes/parsers/slideshow` | 幻灯片清单解析器（`parseSlideshowManifest`、`resolveSlideshow`） |\n| `@hyperframes/parsers/composition` | 纯净、浏览器安全的合成原语（数据类型、字体别名、URL helper） |\n| `@hyperframes/parsers/asset-paths` | 仅 Node 的素材路径重写 helper（`rewriteAssetPath` 等） |\n| `@hyperframes/parsers/sub-composition-validity` | 子合成校验工具 |",
          "[!NOTE] 本包按聚焦的子路径入口发布。无需 GSAP AST 机器时，请导入 `@hyperframes/parsers/hf-ids`。",
        ],
        codeBlocks: [],
        id: "package-exports",
      },
      {
        h: "HTML 解析",
        p: "",
        paras: ["在 HTML 与结构化数据之间往返："],
        codeBlocks: [
          {
            code: "import {\n  parseHtml,\n  extractCompositionMetadata,\n  validateCompositionHtml,\n} from '@hyperframes/parsers';\nimport type { ParsedHtml, CompositionMetadata } from '@hyperframes/parsers';\n\n// Parse HTML into structured data\nconst parsed: ParsedHtml = parseHtml(htmlString);\n// parsed.elements, parsed.gsapScript, parsed.styles, parsed.resolution, parsed.keyframes\n\n// Extract composition metadata (id, duration, dimensions, variables)\nconst meta: CompositionMetadata = extractCompositionMetadata(htmlString);\n\n// Validate HTML structure\nconst result = validateCompositionHtml(htmlString);\n// result.valid, result.errors",
            file: "ts",
          },
        ],
        id: "html-parsing",
      },
      {
        h: "修改 HTML",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "import {\n  updateElementInHtml,\n  addElementToHtml,\n  removeElementFromHtml,\n} from '@hyperframes/parsers';\n\nconst updated = updateElementInHtml(html, 'el-1', { start: 5 });\nconst added = addElementToHtml(html, newElement);\nconst cleaned = removeElementFromHtml(html, 'el-1');",
            file: "ts",
          },
        ],
        id: "modifying-html",
      },
      {
        h: "GSAP 脚本解析",
        p: "",
        paras: [
          "Acorn 解析/写入器是主路径（浏览器安全）。解析时间线脚本，变更它，并序列化回去，不丢失周边代码： 简单数组关键帧将每个属性的值分布在整条 tween 上，即使数组长度不同。例如，`keyframes: { x: [0, 100, 200], opacity: [0, 1] }` 将 `x: 100` 放在 50% 处、`opacity: 1` 放在 100% 处。将 helper 展开为可编辑 tween 可保留这些位置。",
          "高级的序列化 / 校验 / 关键帧转换 helper 在主入口：",
        ],
        codeBlocks: [
          {
            code: "import { parseGsapScriptAcorn, extractGsapLabels } from '@hyperframes/parsers/gsap-parser-acorn';\nimport {\n  updateAnimationInScript,\n  addAnimationToScript,\n  removeAnimationFromScript,\n  updateKeyframeInScript,\n  addKeyframeToScript,\n  shiftPositionsInScript,\n  scalePositionsInScript,\n} from '@hyperframes/parsers/gsap-writer-acorn';\nimport type { GsapAnimation, GsapMethod, ParsedGsap } from '@hyperframes/parsers';\n\nconst parsed: ParsedGsap = parseGsapScriptAcorn(scriptContent);\n// parsed.animations, parsed.timelineVar, parsed.preamble, parsed.postamble\n\n// Mutation helpers operate on the script text and preserve unrelated code\nconst next = updateAnimationInScript(scriptContent, animationId, { duration: 2 });",
            file: "ts",
          },
          {
            code: "import {\n  serializeGsapAnimations,\n  getAnimationsForElementId,\n  validateCompositionGsap,\n  keyframesToGsapAnimations,\n  gsapAnimationsToKeyframes,\n} from '@hyperframes/parsers';",
            file: "ts",
          },
        ],
        id: "gsap-script-parsing",
      },
      {
        h: "GSAP 常量",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "import {\n  SUPPORTED_PROPS,    // animatable properties\n  SUPPORTED_EASES,    // available easing functions\n  PROPERTY_GROUPS,\n} from '@hyperframes/parsers/gsap-constants';\nimport type { PropertyGroupName } from '@hyperframes/parsers/gsap-constants';",
            file: "ts",
          },
        ],
        id: "gsap-constants",
      },
      {
        h: "hf-ids",
        p: "",
        paras: ["确定性元素身份，用于稳定的 diff 和编辑："],
        codeBlocks: [
          {
            code: "import { ensureHfIds, mintHfId } from '@hyperframes/parsers/hf-ids';\n\n// Stamp hf-id attributes onto every editable element in a document\nconst withIds = ensureHfIds(htmlString);",
            file: "ts",
          },
        ],
        id: "hf-ids",
      },
      {
        h: "Spring Ease",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: "import { generateSpringEaseData, SPRING_PRESETS } from '@hyperframes/parsers/spring-ease';",
            file: "ts",
          },
        ],
        id: "spring-ease",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md) 类型、生成器、运行时和编译器——再导出其所需的解析 API。",
          "[card] [@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md) 构建在 parsers 之上的合成 linter。",
          "[card] [@hyperframes/studio-server](https://hyperframes.heygen.com/packages/studio-server.md) 构建在 parsers 之上的 Studio 预览服务。",
          "[card] [CLI](https://hyperframes.heygen.com/packages/cli.md) 创建、预览、lint 和渲染合成。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/lint](https://hyperframes.heygen.com/packages/lint.md)",
          "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-studio-server": {
    lede: "`@hyperframes/studio-server` 是 Studio 使用的后端。它提供项目和预览、应用源变更、创建缩略图，并启动渲染任务。",
    sections: [
      {
        h: "挂载 API",
        p: "",
        paras: [
          "`createStudioApi()` 返回一个 Hono 应用。适配器是 Studio 与项目存储、打包器、linter 和渲染器之间的边界。",
          "当 API 来自 loopback（`localhost`、`127.0.0.1` 或 `[::1]`）服务时，Studio 不带 cookie 发送 API 请求，因此不会排在预览媒体之后。对其他任何源，Studio 仍按常规发送，使远程和代理设置（Codespaces、隧道、访问代理）默认保留 cookie。在 loopback 源上用同源 cookie 对挂载 API 做认证时，可在构建时或运行时在 `window.__HF_STUDIO_ENV__` 中设置 `VITE_STUDIO_API_SAME_ORIGIN_CREDENTIALS=true`；代价是该源失去连接加速。Studio 在其模块加载时读取一次该标志，因此要在加载 Studio 之前设置 `window.__HF_STUDIO_ENV__`；CLI 已注入它，但自行挂载 API 的宿主也必须注入。",
          "该 API 未认证，因此状态变更请求按请求自身的源（含 scheme）检查：只有来自本服务提供的 Studio 页面的写入才会被接受。Loopback 无需额外设置。如果你把 API 挂在公开主机名上（自己的域名、隧道、Codespaces 地址），请在 `allowedHosts` 中具名，使该源的写入可通过：",
          "使用 `hyperframes preview` 和 Studio dev server 时无需改代码：两者都从 `HYPERFRAMES_PREVIEW_ALLOWED_HOSTS`（逗号分隔）读取额外主机，并作为 `allowedHosts` 传入。被拒绝的写入返回 403，并给出被拒绝的主机名和该变量作为修复方法：",
          "`StudioApiAdapter` 提供： 请以你所安装版本的导出接口为确切契约。Studio 获得新能力时它也会变化。",
          "`bundle(projectDir, options)` 必须将 `options` 透传给 `bundleToSingleHtml`，展开在你自己的选项之上。预览在那里设置 `stampHfIds`，使每个元素以其源文件印制的 id 提供服务。宿主若去掉它，打包器内联的合成可能以与后续保存所印制不同的 id 提供服务。",
        ],
        codeBlocks: [
          {
            code: 'import type { Hono } from "hono";\nimport {\n  createStudioApi,\n  type StudioApiAdapter,\n} from "@hyperframes/studio-server";\n\nexport function mountStudioApi(\n  app: Hono,\n  adapter: StudioApiAdapter,\n) {\n  app.route("/api", createStudioApi(adapter));\n}',
            file: "ts",
          },
          {
            code: 'app.route(\n  "/api",\n  createStudioApi(adapter, { allowedHosts: ["studio.example.com"] }),\n);',
            file: "ts",
          },
          {
            code: "HYPERFRAMES_PREVIEW_ALLOWED_HOSTS=demo.tunnels.example hyperframes preview",
            file: "bash",
          },
          {
            code: 'bundle: (dir, options) => bundleToSingleHtml(dir, { runtime: "inline", ...options }),',
            file: "ts",
          },
        ],
        bullets: [
          "项目列表和解析；",
          "合成打包和 lint；",
          "渲染输出存储和任务启动；",
          "可选的缩略图、会话、registry 安装和背景移除。",
        ],
        id: "mount-the-api",
      },
      {
        h: "源文件备份",
        p: "",
        paras: [
          "文件保存和删除会在变更源之前，将先前的字节保存在 `.hyperframes/backup/` 中。成功响应包含相对项目目录的 `backupPath`。若备份失败，操作终止。",
          "长项目相对路径使用 SHA-256 备份键，使带时间戳的备份文件名符合文件系统限制。较短路径保留现有名称。服务默认每个文件保留十个快照，包括用旧备份名称保存的快照。源路径仍必须符合文件系统自身的限制。",
        ],
        codeBlocks: [],
        id: "source-file-backups",
      },
      {
        h: "提供成品渲染",
        p: "",
        paras: [
          "Studio 从磁盘流式传输成品渲染文件，包括大于 2 GiB 的导出。这适用于项目的 `/renders/file/*` 路由以及每个渲染任务的 `/view` 和 `/download` 路由。挂载 API 的宿主应将响应体作为流转发，使其能在不把整个文件缓冲到内存的情况下交付大导出。",
          "`HEAD` 请求返回相同的文件元数据，不打开文件流。",
        ],
        codeBlocks: [],
        id: "serving-finished-renders",
      },
      {
        h: "Studio 从何处加载 GSAP",
        p: "",
        paras: [
          "合成需要时，Studio 会向预览注入 GSAP 脚本：GSAP 核心和 CustomEase（你在 Studio 中编辑的运动），以及 MotionPathPlugin（运动路径）。它按以下顺序选择来源： 嵌入本包的宿主提供文件并指定根目录即可选择加入：",
          "`gsapLocalRoot` 必须是预览自身源上的路径，如 `/api/vendor/npm`，不能带查询或片段。",
        ],
        codeBlocks: [
          {
            code: 'gsapLocalRoot: "/api/vendor/npm", // serves /api/vendor/npm/gsap@3.15.0/dist/gsap.min.js',
            file: "ts",
          },
        ],
        bullets: [
          "设置 `HYPERFRAMES_GSAP_BASE_URL` 时。Studio 只用该镜像，永不通过 jsDelivr 重试。",
          "宿主自带的副本，当宿主传入 `gsapLocalRoot` 时。HyperFrames CLI 自带 GSAP `3.15.0`，并从 `/api/vendor/npm` 提供，因此 `npx hyperframes preview` 不会为这些脚本发 jsDelivr 请求。自带副本只含一个版本：加载其他 GSAP 版本（如 `gsap@3.14.2`）的合成，仍会从 jsDelivr 获得匹配插件。",
          "jsDelivr（`https://cdn.jsdelivr.net/npm`），用于没有自带副本的宿主。",
        ],
        id: "where-studio-loads-gsap-from",
      },
      {
        h: "使用你自己的镜像",
        p: "",
        paras: [
          "在启动预览服务或创建 Studio API 之前设置 `HYPERFRAMES_GSAP_BASE_URL`： 镜像是 HTTP 服务，不是文件夹：文件路径会被拒绝。按以下布局在该 URL 下提供 GSAP 发行文件，使用你的合成需要的版本：",
          "在编写的 GSAP URL 中保留 `gsap@<version>`，使服务能推断要补哪个插件版本。无法推断版本时，使用框架默认，目前为 `3.15.0`。",
          "该 base 必须是无凭据、无查询字符串、无片段的绝对 URL。请使用 HTTPS。仅允许本机使用裸 `http://`：`localhost`、`127.0.0.0/8` 和 `::1`。首尾空白和结尾斜杠会被去掉。非空无效值会以配置错误停止 API 启动。",
          "服务在启动时只读一次该设置。改值后请重启。对于受管 CLI 预览，重启前先运行 `npx hyperframes preview ./my-video --stop`。缓存的预览 HTML 按 GSAP 来源设键，因此换镜像后重启即生效，无需删除预览缓存。",
          "渲染读取相同设置。当合成指向不存在的本地 `gsap/dist/` 脚本时，渲染编译器从镜像（而非 jsDelivr）加载该文件并内联，与其他远程脚本相同。无效值使该渲染以相同的配置错误失败。渲染不使用 CLI 自带副本。",
          "该设置仅改变 HyperFrames 注入的 GSAP 脚本。合成自身的脚本、字体、图片和媒体 URL 保持原样，包括指向 jsDelivr 的 GSAP `<script>`；离线项目同样请在本地提供这些文件。当 Studio 向合成文件写入 GSAP 时（例如向无 GSAP 文件首次添加动画），它写入 jsDelivr URL，使文件能在 Studio 外渲染。若所选镜像不可用或缺少请求的文件，Studio 不会通过 jsDelivr 重试该依赖。",
        ],
        codeBlocks: [
          {
            code: "HYPERFRAMES_GSAP_BASE_URL=http://127.0.0.1:8080/vendor/npm \\\n  npx hyperframes preview ./my-video",
            file: "bash",
          },
          {
            code: "<mirror-root>/gsap@3.15.0/dist/gsap.min.js\n<mirror-root>/gsap@3.15.0/dist/CustomEase.min.js\n<mirror-root>/gsap@3.15.0/dist/MotionPathPlugin.min.js",
            file: "text",
          },
        ],
        id: "use-your-own-mirror",
      },
      {
        h: "其他入口",
        p: "",
        paras: [
          "| Import | 用途 |\n| - | - |\n| `@hyperframes/studio-server/source-mutation` | 对合成源应用受守卫的变更 |\n| `@hyperframes/studio-server/screenshot-clip` | 计算元素截图像素几何 |\n| `@hyperframes/studio-server/safe-path` | 在项目内解析路径并遍历文件，无需服务 |\n| `@hyperframes/studio-server/hf-ids` | 向项目 HTML 印制稳定的元素 id，无需服务 |\n| `@hyperframes/studio-server/history` | 打开项目的撤销历史，无需服务 |\n| `@hyperframes/studio-server/manual-edits-render-script` | 在渲染期间重新应用 Studio 手工编辑 |\n| `@hyperframes/studio-server/studio-motion-render-script` | 在渲染期间重新应用 Studio 运动编辑 |\n| `@hyperframes/studio-server/draft-markers` | 处理草稿手势标记 |\n| `@hyperframes/studio-server/finite-mutation` | 防止源变更使用非有限值 |\n| `@hyperframes/studio-server/media-proxy-preview` | 在预览中支持代理媒体 |",
          "`@hyperframes/core/studio-api` 仍是已弃用的兼容再导出。新集成应从 `@hyperframes/studio-server` 导入。",
        ],
        codeBlocks: [],
        id: "other-entry-points",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md) 嵌入底层 Studio 界面组件。",
          "[card] [浏览器编辑器指南](https://hyperframes.heygen.com/studio.md) 使用 HyperFrames 自带的完整编辑器。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
          "[@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-sdk": {
    lede: "SDK 包为 HyperFrames 合成提供程序化编辑层。它打开合成 HTML，暴露查询和变更 API，发出 JSON patch，支持 undo/redo，并可通过可插拔适配器持久化变更，无需 React、Studio 或浏览器 UI。",
    sections: [
      {
        h: "何时使用",
        p: "",
        paras: [
          "**当你需要以下能力时，使用 `@hyperframes/sdk`：** **当你想要以下能力时，使用其他包：** [!TIP] SDK 是产品集成和需要结构化编辑的 agent 的正确分层。CLI 和 Studio 是围绕相同合成格式构建的用户工具；SDK 是你嵌入到自己 UI 或自动化之后的编辑引擎。",
          "[!NOTE] 本页是包概览。请从 [SDK quickstart](https://hyperframes.heygen.com/sdk/quickstart.md) 开始，再使用聚焦指南和参考页查看确切方法、操作、类型和适配器。",
        ],
        codeBlocks: [],
        bullets: [
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
          "从无头浏览器捕获帧——使用 [engine](https://hyperframes.heygen.com/packages/engine.md)",
        ],
        id: "when-to-use",
      },
      {
        h: "包导出",
        p: "",
        paras: [
          "| Import | 说明 |\n| - | - |\n| `@hyperframes/sdk` | 主编辑 API、类型、内存/无头适配器、iframe 预览适配器 |\n| `@hyperframes/sdk/adapters/memory` | 内存持久化适配器，用于测试、演示和临时会话 |\n| `@hyperframes/sdk/adapters/fs` | 带版本历史的 Node.js 文件系统持久化适配器 |\n| `@hyperframes/sdk/adapters/headless` | 空操作预览适配器，用于 agent、CI 和服务端编辑 |",
        ],
        codeBlocks: [],
        id: "package-exports",
      },
      {
        h: "快速入门",
        p: "",
        paras: ["打开 HTML，编辑显式元素 id，然后序列化更新后的合成："],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\n\nconst comp = await openComposition(html);\n\nconst [headlineId] = comp.find({ text: "Old headline" });\nif (headlineId) {\n  comp.setText(headlineId, "New headline");\n  comp.setStyle(headlineId, {\n    color: "#FFD60A",\n    fontSize: "96px",\n  });\n}\n\nconst updatedHtml = comp.serialize();\ncomp.dispose();',
            file: "ts",
          },
        ],
        id: "quick-start",
      },
      {
        h: "显式元素 ID",
        p: "",
        paras: [
          "所有编辑都针对稳定的 HyperFrames 元素 id。这使 SDK 对无头 agent 和后端任务安全，因为变更不依赖鼠标状态或当前 UI 选区。",
        ],
        codeBlocks: [
          {
            code: 'const allElements = comp.getElements();\nconst imageIds = allElements\n  .filter((element) => element.tag === "img")\n  .map((element) => element.id);\n\nfor (const id of imageIds) {\n  comp.setAttribute(id, "loading", "eager");\n}',
            file: "ts",
          },
        ],
        id: "core-concepts",
      },
      {
        h: "类型化方法",
        p: "",
        paras: [
          "常见编辑操作有类型化便捷方法： 多项变更应合为一条 undo 记录、一次持久化写入和一次变更通知时，使用 `batch()`：",
        ],
        codeBlocks: [
          {
            code: 'comp.setText("hf-title", "Launch day");\ncomp.setStyle("hf-title", { color: "#ffffff", transform: "translateY(24px)" });\ncomp.setAttribute("hf-logo", "src", "/assets/logo.png");\ncomp.setTiming("hf-title", { start: 0.5, duration: 2.5 });\ncomp.setVariableValue("brandColor", "#6C5CE7");\ncomp.removeElement("hf-old-caption");',
            file: "ts",
          },
          {
            code: 'comp.batch(() => {\n  comp.setText("hf-title", "Version 2");\n  comp.setStyle("hf-title", { color: "#22C55E" });\n  comp.setTiming("hf-title", { start: 1, duration: 3 });\n});',
            file: "ts",
          },
        ],
        id: "explicit-element-ids",
      },
      {
        h: "高级 Dispatch API",
        p: "",
        paras: [
          "Agent 和自动化可通过 `dispatch()` 发出数据形状操作： 显示 UI 控件或应用可选操作前，请先调用 `can()`：",
        ],
        codeBlocks: [
          {
            code: 'comp.dispatch({\n  type: "setStyle",\n  target: "hf-card",\n  styles: { borderRadius: "24px" },\n});',
            file: "ts",
          },
          {
            code: 'const result = comp.can({\n  type: "setGsapTween",\n  animationId: "anim-1",\n  properties: { ease: "power3.out" },\n});\n\nif (result.ok) {\n  comp.setGsapTween("anim-1", { ease: "power3.out" });\n}',
            file: "ts",
          },
        ],
        id: "typed-methods",
      },
      {
        h: "持久化",
        p: "",
        paras: [
          "传入持久化适配器可自动保存编辑。SDK 自带内存和文件系统适配器，宿主应用也可为 S3、HTTP、IndexedDB 或应用专用存储实现相同的 `PersistAdapter` 接口。",
          "持久化失败以事件发出，而非使会话崩溃：",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition } from "@hyperframes/sdk";\nimport { createFsAdapter } from "@hyperframes/sdk/adapters/fs";\n\nconst comp = await openComposition(html, {\n  persist: createFsAdapter({ root: "./project" }),\n  persistPath: "index.html",\n});\n\ncomp.setText("hf-title", "Saved title");\nawait comp.flush();',
            file: "ts",
          },
          {
            code: 'comp.on("persist:error", ({ error }) => {\n  console.error("Autosave failed:", error.message);\n});',
            file: "ts",
          },
        ],
        id: "advanced-dispatch-api",
      },
      {
        h: "Undo、Redo 与 Patch 事件",
        p: "",
        paras: [
          "独立会话默认包含 undo/redo： Patch 事件让宿主应用可将 SDK 编辑镜像到自身状态、协作层或审计日志：",
        ],
        codeBlocks: [
          {
            code: 'comp.setText("hf-title", "Draft");\ncomp.undo();\ncomp.redo();',
            file: "ts",
          },
          {
            code: 'const unsubscribe = comp.on("patch", ({ patches, inversePatches, origin }) => {\n  saveToHostHistory({ patches, inversePatches, origin });\n});\n\nunsubscribe();',
            file: "ts",
          },
        ],
        id: "persistence",
      },
      {
        h: "嵌入覆盖模式",
        p: "",
        paras: [
          "模板驱动的产品可用 `overrides` 对象打开合成。SDK 将稀疏覆盖集叠加到基础 HTML 之上，将额外编辑累积到该覆盖集中，宿主只需存储增量。",
          "当宿主拥有 undo/redo，需要将逆向 patch 重放到 SDK 且不产生循环时，使用 `applyPatches()`。",
        ],
        codeBlocks: [
          {
            code: 'const comp = await openComposition(templateHtml, {\n  overrides: {\n    "hf-title.text": "Customer-specific title",\n    "hf-logo.attr.src": "/customers/acme/logo.png",\n  },\n  history: false,\n});\n\ncomp.setStyle("hf-title", { color: "#0EA5E9" });\n\nconst nextOverrides = comp.getOverrides();',
            file: "ts",
          },
        ],
        id: "undo-redo-and-patch-events",
      },
      {
        h: "预览适配器",
        p: "",
        paras: [
          "SDK 可无头运行，也可连接到预览面： 浏览器集成中，`createIframePreviewAdapter()` 将 SDK 桥接到同源合成 iframe，使命中测试、选区和草稿预览更新可保留在模型变更路径之外。",
        ],
        codeBlocks: [
          {
            code: 'import { openComposition, createHeadlessAdapter } from "@hyperframes/sdk";\n\nconst comp = await openComposition(html, {\n  preview: createHeadlessAdapter(),\n});',
            file: "ts",
          },
        ],
        id: "embedded-override-mode",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [@hyperframes/core](https://hyperframes.heygen.com/packages/core.md) 底层类型、HTML 工具、运行时 helper 和 linter API。",
          "[card] [@hyperframes/studio](https://hyperframes.heygen.com/packages/studio.md) 可嵌入 SDK 驱动编辑流的现成可视编辑器 UI。",
          "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 将编辑后 HTML 变为视频的程序化渲染流水线。",
          "[card] [CLI](https://hyperframes.heygen.com/packages/cli.md) 命令行创建、预览、lint 和渲染工作流。",
        ],
        codeBlocks: [],
        bullets: [
          "[适配器参考](https://hyperframes.heygen.com/sdk/reference/adapters.md)",
          "[如何将 HyperFrames 集成进应用](https://hyperframes.heygen.com/developers/overview.md)",
          "[使用 SDK 编辑合成](https://hyperframes.heygen.com/sdk/quickstart.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-engine": {
    lede: "`@hyperframes/engine` 是 [Producer](https://hyperframes.heygen.com/packages/producer.md) 之下的底层层。它打开实现 HyperFrames seek 协议的页面，定位到确切时间，并捕获该帧状态。",
    sections: [
      {
        h: "与录屏的区别",
        p: "",
        paras: [
          "录屏器等待 wall clock，并在负载下可能漏帧。Engine 要求页面定位到指定时间，并在继续之前捕获该状态。",
          "这使帧调度可复现，并防止慢速机器导致的丢帧。精确像素仍可能随 Chrome、字体、编码器、GPU 行为和宿主环境而变化。视觉精确可复现时，请固定这些依赖。",
        ],
        codeBlocks: [],
        id: "why-it-is-different-from-screen-recording",
      },
      {
        h: "捕获帧",
        p: "",
        paras: [
          "`serverUrl` 处的页面必须暴露 `window.__hf`，带有 `duration` 和确定性 `seek(time)` 函数。",
          "后续阶段需要内存缓冲而非文件时，使用 `captureFrameToBuffer()`。",
        ],
        codeBlocks: [
          {
            code: 'import {\n  captureFrame,\n  closeCaptureSession,\n  createCaptureSession,\n  getCompositionDuration,\n  initializeSession,\n} from "@hyperframes/engine";\n\nconst fps = { num: 30, den: 1 };\nconst session = await createCaptureSession(\n  serverUrl,\n  "./frames",\n  {\n    width: 1920,\n    height: 1080,\n    fps,\n    format: "jpeg",\n  },\n);\n\ntry {\n  await initializeSession(session);\n  const duration = await getCompositionDuration(session);\n  const totalFrames = Math.ceil(duration * 30);\n\n  for (let frame = 0; frame < totalFrames; frame += 1) {\n    const time = frame / 30;\n    await captureFrame(session, frame, time);\n  }\n} finally {\n  await closeCaptureSession(session);\n}',
            file: "ts",
          },
        ],
        id: "capture-frames",
      },
      {
        h: "WebGPU 要求",
        p: "",
        paras: [
          "标记 `data-requires-webgpu` 的合成必须能在捕获开始前创建 WebGPU 设备。仅找到 adapter 不足：设备创建仍可能因浏览器或图形驱动而失败。adapter 和设备检查共享十秒超时，失败以 `WebGpuUnavailableError` 停止捕获。",
          "默认要求硬件 adapter。显式配置为软件 WebGPU 的启动可使用 SwiftShader，但仍必须创建设备。该检查会释放其临时设备；合成仍会按其渲染器需要的功能或限制创建自己的设备。",
        ],
        codeBlocks: [],
        id: "webgpu-requirements",
      },
      {
        h: "本包还暴露什么",
        p: "",
        paras: [
          "| 入口 | 用途 |\n| - | - |\n| 浏览器管理 | 启动、池化和释放 Chrome |\n| 编码器 | MP4、WebM、MOV、GIF、PNG 序列、复用和 faststart |\n| 媒体抽取 | 准备源视频帧和音轨 |\n| 并行捕获 | 在 worker 间分配帧范围 |\n| 诊断 | 捕获性能、媒体元数据和 GPU 一致性 |",
          "传给 `encodeFramesChunkedConcat()` 和 `concatVideoFiles()` 的路径可相对可绝对。相对路径从调用进程的工作目录解析。",
          "`muxVideoWithAudio()` 识别输出文件名的扩展名，不区分大小写。WebM 输出，包括 `.WEBM` 和 `.WeBm`，在拷贝视频流的同时将音频转 Opus。",
          "这些是渲染内部细节。结果和错误约定随操作而异：浏览器和帧捕获编排以抛错为主，FFmpeg 封装通常返回结果对象， teardown helper 避免掩盖原始失败。",
          "浏览器和帧捕获诊断，包括 motion-blur 报告，发送到 stderr。这使 stdout 可用于机器可读结果，如 `hyperframes benchmark --json`。",
        ],
        codeBlocks: [],
        id: "what-else-the-package-exposes",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 无需自行组装流水线即可获得成品视频。",
          "[card] [确定性渲染](https://hyperframes.heygen.com/concepts/determinism.md) 理解 HyperFrames 控制什么，以及环境仍影响什么。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md)",
          "[选择渲染路径](https://hyperframes.heygen.com/deploy/overview.md)",
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-player": {
    lede: "player 包提供了一个 `<hyperframes-player>` 自定义元素，可将 HyperFrames 合成嵌入到纯 HTML 或框架应用中。",
    sections: [
      {
        h: "通过 CDN",
        p: "",
        paras: [
          "使用包管理器时： 仅在播放无需用户手势即可开始时，才设置 `autoplay muted`。",
          "随时可以添加或移除 `controls`。显示时，控件会反映当前的播放状态、位置和速度。",
        ],
        codeBlocks: [
          {
            code: '<script type="module" src="https://cdn.jsdelivr.net/npm/@hyperframes/player"></script>\n\n<hyperframes-player\n  src="./my-composition/index.html"\n  controls\n  style="width: 100%; max-width: 800px; aspect-ratio: 16/9"\n></hyperframes-player>',
            file: "html",
          },
          {
            code: 'import "@hyperframes/player";',
            file: "js",
          },
          {
            code: '<hyperframes-player\n  src="/compositions/intro.html"\n  controls\n></hyperframes-player>',
            file: "html",
          },
        ],
        id: "embed-a-composition",
      },
      {
        h: "属性",
        p: "",
        paras: [
          "| 属性 | 类型 | 默认值 | 说明 |\n| - | - | - | - |\n| `src` | string | — | 合成 HTML 的 URL 或相对路径，或配合 `type` 指向的视频文件 |\n| `type` | string | — | `video/...` 类型（例如 `video/mp4`）将 `src` 作为视频文件播放 |\n| `srcdoc` | string | — | 已作为字符串可用的合成 HTML |\n| `width` | number | 1920 | 用于宽高比的原生合成宽度 |\n| `height` | number | 1080 | 用于宽高比的原生合成高度 |\n| `controls` | boolean | false | 显示播放、拖动、速度、时间与音量控件 |\n| `autoplay` | boolean | false | 合成就绪时开始播放 |\n| `loop` | boolean | false | 结尾处重新开始 |\n| `muted` | boolean | false | 静音音频 |\n| `volume` | number | 1 | 播放音量，范围 0 到 1 |\n| `poster` | string | — | 首次播放前展示的图片 URL |\n| `playback-rate` | number | 1 | 播放速度倍率 |\n| `audio-src` | string | — | 可选主音频 URL，在父帧中预加载 |\n| `audio-locked` | boolean | false | 强制静音播放并隐藏音量控件 |\n| `assets-loading-ui` | `player` or `none` | `player` | `none` 隐藏加载资源卡片；资源事件仍会触发 |\n| `low-power-idle` | boolean | false | 暂停时每秒检查一次，而非每 80 ms（大量播放器页面） |\n| `disable-click-to-play` | boolean | false | 点击播放器不再播放/暂停，由页面自行处理 |\n| `no-load-timeout` | boolean | false | 慢加载永不在 8 s 失败，由页面拥有截止时间；脚本和运行时错误仍立即失败 |\n| `range-start` | number | — | 播放开始、循环返回、暂停时停靠的电影秒（`rangeStart`） |\n| `range-end` | number | — | 范围在之前结束的电影秒：它在该秒之前的帧停止或循环（`rangeEnd`） |",
          "`range-start` 与 `range-end` 播放电影的 [start, end) 片段。播放器在 `ready` 时停靠在 `range-start`，当暂停的播放头落到新范围之外时也一样；从范围外 `play()` 会从该处开始。结尾处它停留在 `range-end` 之前最后一帧并触发 `ended`，或在 `loop` 时回到 `range-start`。此时 `ended` 时的 `currentTime` 位于该帧内，而非 `range-end` 本身，因此应监听 `ended` 而非比较时间。目前的运行时会在该帧本身停止；视频与 `__timelines` 播放器会提前一个时钟节拍停止，节拍依据最后两步中的较小值预测，背景标签页中的视频会自行在 `timeupdate` 时检查；旧运行时在播放器看到其时间超过结尾时停止。`currentTime` 与 `duration` 保持电影时间。超出电影的范围会被裁剪到其结尾，空范围或负范围会被忽略；两者都会触发 `rangeclamped`。",
          "Player 还接受 `shader-capture-scale` 与 `shader-loading`，用于预览使用 shader 过渡的项目。这些是预览控件，不是合成编写属性。",
          "使用 `video/...` 类型时，`src` 会在相同播放 API 与事件后方的 `<video>` 中播放。`scenes`、`setRuntimeData()`、`setColorGrading()`、`iframeElement` 与 `stopMedia()` 仅限合成使用，且 `srcdoc` 优先于视频 `src`，与 iframe 中一致。",
          "移除视频播放器 `src` 属性或将其设为空字符串，会卸载电影并将播放重置为在 0:00 暂停。设置新的 `src` 可加载另一个视频。",
        ],
        codeBlocks: [],
        id: "via-cdn",
      },
      {
        h: "JavaScript API",
        p: "",
        paras: [
          "主要 API 遵循 familiar 的媒体播放器行为： 在 Studio 预览中，拖动时会保持最后一张完整画面可见，视频层按请求时刻解码。快速拖动只保留最新排队的目标，字幕与视频层就绪后一起出现。拖动过程中可以出现完整的中间画面。跳转到不同片段会取代更早的待定拖动；失败的来源不会拖慢预览。",
        ],
        codeBlocks: [
          {
            code: 'const player = document.querySelector("hyperframes-player");\n\nplayer.play();\nplayer.pause();\nplayer.seek(2.5);\n\nplayer.currentTime = 5;\nplayer.playbackRate = 1.5;\nplayer.muted = true;\n\nconsole.log(player.duration, player.paused, player.ready);\nconsole.log(player.compositionWidth, player.compositionHeight);',
            file: "js",
          },
        ],
        id: "attributes",
      },
      {
        h: "事件",
        p: "",
        paras: [
          "| 事件 | Detail 载荷 | 说明 |\n| - | - | - |\n| `ready` | `{ duration, compositionWidth, compositionHeight }` | 合成已加载，时间线已发现 |\n| `durationchange` | `{ duration }` | `ready` 后时长变化 |\n| `resize` | `{ compositionWidth, compositionHeight }` | 合成尺寸变化 |\n| `timeupdate` | `{ currentTime }` | 播放位置变化，约每秒 10 次 |\n| `play` | — | 播放开始 |\n| `pause` | — | 播放暂停 |\n| `ended` | — | 播放到达结尾 |\n| `rangeclamped` | `{ rangeStart, rangeEnd, duration }` | 超出电影的范围被裁剪到结尾，或空范围被忽略（nulls） |\n| `ratechange` | — | 播放速度变化 |\n| `volumechange` | — | 音量或静音状态变化 |\n| `scenes` | `{ scenes }` | 运行时上报的场景列表 |\n| `error` | `{ message }` | 加载或运行时错误；视频会额外提供 `MediaError` `code` |\n| `playbackerror` | `{ source, error }` | 浏览器阻止了播放，例如非静音自动播放 |",
        ],
        codeBlocks: [
          {
            code: 'const player = document.querySelector("hyperframes-player");\n\nplayer.addEventListener("ready", (event) => {\n  console.log("Duration:", event.detail.duration);\n});\n\nplayer.addEventListener("timeupdate", (event) => {\n  console.log("Time:", event.detail.currentTime);\n});',
            file: "js",
          },
        ],
        id: "javascript-api",
      },
      {
        h: "高级：iframe 访问",
        p: "",
        paras: [
          "合成在播放器 Shadow DOM 中的 `<iframe>` 里运行。对于大多数用途，上面的 JavaScript API 与事件已经足够。`iframeElement` getter 供必须检查合成 DOM 或连接自定义编辑界面 的同源工具使用：",
          "仅当合成与宿主页面同源时，直接 DOM 访问才有效。跨源嵌入必须使用 Player API 与事件。",
          "[`@hyperframes/studio`](https://hyperframes.heygen.com/packages/studio) 导出了 `resolveIframe`，供需要将内部 iframe 传给 Studio 时间线钩子的消费者使用：",
        ],
        codeBlocks: [
          {
            code: 'const player = document.querySelector("hyperframes-player");\nconst iframe = player.iframeElement;\n\n// Reach into the composition\'s DOM\niframe.contentDocument.querySelectorAll("[data-composition-id]");\n\n// Read the runtime (GSAP timelines, element registry, etc.)\niframe.contentWindow.__timelines;',
            file: "js",
          },
          {
            code: 'import { resolveIframe, useTimelinePlayer } from "@hyperframes/studio";\n\nconst { iframeRef } = useTimelinePlayer();\nconst player = document.createElement("hyperframes-player");\nplayer.setAttribute("src", src);\ncontainer.appendChild(player);\n\n// Forward the inner iframe so useTimelinePlayer can drive play/pause/seek.\niframeRef.current = resolveIframe(player);',
            file: "ts",
          },
        ],
        id: "events",
      },
      {
        h: "工作原理",
        p: "",
        paras: [
          "合成在播放器 Shadow DOM 内的沙盒 iframe 中运行。这样可以隔离其样式、将其缩放至播放器容器，并让播放器通过 `postMessage` 与 HyperFrames 运行时通信。",
        ],
        codeBlocks: [],
        id: "advanced-iframe-access",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 在应用中的定位](https://hyperframes.heygen.com/developers/overview.md)",
          "[部署预览与渲染 API](https://hyperframes.heygen.com/guides/deploy.md)",
          "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-producer": {
    lede: "`@hyperframes/producer` 拥有完整的渲染管线：编译项目、捕获帧、编码视频、混音音频。",
    sections: [
      {
        h: "渲染单个项目",
        p: "",
        paras: [
          "`createRenderJob()` 描述渲染任务。`executeRenderJob()` 接收该任务、项目目录与输出路径。",
          "入口文件默认为 `index.html`。当项目入口合成不同时，设置 `entryFile`。",
        ],
        codeBlocks: [
          {
            code: 'import {\n  createRenderJob,\n  executeRenderJob,\n} from "@hyperframes/producer";\n\nconst job = createRenderJob({\n  fps: 30,\n  quality: "standard",\n  format: "mp4",\n});\n\nawait executeRenderJob(\n  job,\n  "./my-hyperframes-project",\n  "./renders/video.mp4",\n  (currentJob, message) => {\n    console.log(\n      `${Math.round(currentJob.progress)}% ${message}`,\n    );\n  },\n);',
            file: "ts",
          },
          {
            code: 'const job = createRenderJob({\n  fps: { num: 30000, den: 1001 },\n  quality: "high",\n  entryFile: "compositions/launch.html",\n});',
            file: "ts",
          },
        ],
        id: "render-one-project",
      },
      {
        h: "选择输出",
        p: "",
        paras: [
          "| 格式 | 适用场景 | 音频 |\n| - | - | - |\n| `mp4` | 默认交付与网页播放 | AAC |\n| `webm` | 网页用透明视频 | Opus |\n| `mov` | 供剪辑使用的透明 ProRes 4444 | AAC |\n| `gif` | 小体积静音预览 | 无 |\n| `png-sequence` | 供另一条管线使用的无损帧 | 需要时带 AAC sidecar |\n| `hls` | 从播放列表目录提供点播流 | AAC rendition |",
          "MP4 可通过 `hdrMode` 输出 HDR。透明格式在 SDR 下渲染，因为 HDR 与 alpha 不是一条受支持的输出路径。",
          '`chromaSubsampling: "444"` 渲染 SDR MP4 母版，全分辨率色彩（H.264 yuv444p、无损 PNG 捕获）。它需要软件编码器，与 `useGpu`、HDR 输出、其他格式及分布式渲染不兼容，且许多播放器无法解码。参见 [4:4:4 masters](https://hyperframes.heygen.com/guides/rendering.md#444-masters)。',
          "源与交付约束参见 [HDR 渲染](https://hyperframes.heygen.com/guides/hdr.md)。",
        ],
        codeBlocks: [
          {
            code: 'const job = createRenderJob({\n  fps: 30,\n  quality: "high",\n  format: "mp4",\n  hdrMode: "auto",\n});',
            file: "ts",
          },
        ],
        id: "choose-an-output",
      },
      {
        h: "HLS",
        p: "",
        paras: [
          '`format: "hls"` 将 HLS 点播流写入 `outputPath`（目录）：`master.m3u8`、`video.m3u8` 与 `video_NNNNN.ts`，当合成含音频时还有 `audio.m3u8` 与 `audio_NNNNN.ts`。编码与 MP4 相同（H.264 + AAC）——打包环节仅做流拷贝切段。',
          '除最后一段外，每段长恰为 `hlsSegmentSeconds`，因为编码器 GOP 锁定为 `round(fps × hlsSegmentSeconds)` 帧，使每个分段都从关键帧开始。HLS 仅支持 SDR（`hdrMode: "force-hdr"` 会被拒绝），拒绝 GPU 编码（GPU 编码器忽略关键帧锁定），且在分布式渲染、Lambda 或 Cloud Run 中不可用。',
        ],
        codeBlocks: [
          {
            code: 'const job = createRenderJob({\n  fps: 30,\n  format: "hls",\n  hlsSegmentSeconds: 4,\n});',
            file: "ts",
          },
        ],
        id: "hls",
      },
      {
        h: "检查输出校验",
        p: "",
        paras: [
          "匹配的输出时长并不能证明每一期望帧都存在。WebM 与 HLS 常在其元数据中省略帧数。当无可用帧数时，producer 会跳过帧数检查，继续检查时长与请求尺寸。",
          "在 `createRenderJob()` 中设置 `debug: true`，或使用 `npx hyperframes render --debug`，可在渲染工作目录中保留 `render.log`。当跳过该检查时，其 `artifact_frame_count_unavailable` 调试事件会记录输出路径与期望帧数。普通输出保持安静；自定义 `logger` 也可通过其 `debug` 方法收集该事件。",
        ],
        codeBlocks: [],
        id: "inspect-output-validation",
      },
      {
        h: "参考背景",
        p: "",
        paras: [
          "完成的任务会暴露 `reference_background`。进程内本地渲染结果、阻塞与流式 producer 响应、分布式 plan 与 assembly 结果都携带相同的叠加字段： 该值描述了规范初始电影状态下合成根及其周围页面背景。它在透明捕获改变样式之前，从 Chromium 的计算样式读取，而非从渲染帧或内部面板推断。分布式分块会保留 plan 的参考；不会在每个分块边界选择不同参考。",
          "| 类型 | 含义 |\n| - | - |\n| `solid` | 不透明的计算背景，三个 0–255 整数 sRGB 分量 |\n| `none` | 明确声明的 `background: none` 且无有效绘制 |\n| `unsupported_non_solid` | 有效背景图片或渐变 |\n| `unknown` | 缺失、未解析、变化中、半透明或其他不确定背景 |",
          "仅有透明计算色并**不能**确立 `none`。未声明背景、作者写的透明色，或不可访问的样式表导致无法证明其不存在，都仍为 `unknown`。渐变与图片永远不会被替换为其底层颜色。消费者必须保留不确定结果，而非将其视为默认颜色或空白帧的证明。",
          "进程内本地渲染从其已打开的会话读取。Docker CLI 包装目前不返回子进程的结果元数据。分布式 planner 会打开仅检查页面，即使是静态解析时长的合成。它不需要 WebGPU、不运行 BeginFrame 存活检查、不在该页面上调和媒体。浏览器不可用或检查失败会在不拒绝本就有效的静态 plan 的情况下产生 `unknown`。该值保存在执行计划产物中，不加入带哈希的 v2 传输 manifest，因此旧阅读器与物化器仍兼容。",
        ],
        codeBlocks: [
          {
            code: '{"reference_background":{"kind":"solid","rgb":[10,46,138]}}',
            file: "json",
          },
        ],
        id: "reference-background",
      },
      {
        h: "取消渲染",
        p: "",
        paras: [
          '将中止信号传给最后一个参数： 中止的渲染会抛出 `RenderCancelledError`。启用 `strictness: "strict"` 时，正确性警告也可能阻止渲染。',
        ],
        codeBlocks: [
          {
            code: 'const controller = new AbortController();\n\nawait executeRenderJob(\n  job,\n  "./my-hyperframes-project",\n  "./renders/video.mp4",\n  undefined,\n  controller.signal,\n);\n\n// Call controller.abort() from your cancellation path.',
            file: "ts",
          },
        ],
        id: "cancel-a-render",
      },
      {
        h: "构建渲染服务",
        p: "",
        paras: [
          "本包导出 Hono 应用与服务辅助函数： 浏览器请求（携带 `Origin` 或 `Sec-Fetch-Site` 头的请求）仅在 IP 地址、`localhost` 或 `*.localhost` 名称下被接受，因此将自身域名指向服务器的页面不能启动渲染或 lint。若浏览器经代理名称到达服务器，请在 `allowedHosts` 或逗号分隔的 `PRODUCER_ALLOWED_HOSTS` 变量中列出该名称。无这些头的请求（如 curl 或其他服务）不受影响。",
          "服务器默认监听 `127.0.0.1`，除非传入 `hostname` 或设置 `PRODUCER_HOST`。监听其他地址时，还必须设置 `authToken` 或 `PRODUCER_AUTH_TOKEN`。除 `/health` 以外每条路由都需要 `Authorization: Bearer <token>`，无凭据时服务器拒绝启动。请求的 `projectDir` 必须解析（含软链接）在 `projectsDir`（`PRODUCER_PROJECTS_DIR`，默认工作目录）内。其 `entryFile` 必须保留在该项目内，`outputPath` 必须在 `rendersDir`（`PRODUCER_RENDERS_DIR`，默认 `/tmp`）内。除非设置 `allowDebug` 或 `PRODUCER_ALLOW_DEBUG=1`，`debug: true` 会被拒绝。`createProducerApp` 默认应用这些路径与调试检查。`createRenderHandlers` 用于挂载到你自己可信服务内时，仅在 `confineRequests: true` 下应用。",
          "对于更大负载，`@hyperframes/producer/distributed` 入口暴露三个渲染活动——`plan`、`renderChunk` 与 `assemble`。你的调度器仍负责分发、重试、存储与网络。",
          "渲染他人项目的服务应设置 `PRODUCER_RESTRICT_PAGE_NETWORK=true`。渲染浏览器只能到达自己的项目服务器与公网 IPv4 地址：它发送的其他一切（页面、帧、worker、WebSocket、WebRTC 一样）都要经过本地代理，代理会检查名称解析出的每个地址并连接到已检查的地址。被拒绝的请求与任何其他不可达资源一样失败。对于从自己机器或网络加载资源的本地渲染，请保持不设置。",
          "该设置接受 `true`、`1`、`yes` 或 `on` 表示启用，`false`、`0`、`no` 或 `off` 表示关闭，不分大小写。其他任何值都会启用并记录警告，因此拼错的值永远不会让渲染服务开放。",
          "启用限制后，视频或音频 URL 在 FFmpeg 读取之前同样经过地址检查。FFmpeg 确实按 URL 读取的文件，如项目的签名存储 URL 视频，必须是自包含容器，如 MP4、WebM 或 WAV。以媒体文件名结尾的播放列表、manifest 或 concat 列表会被拒绝。",
          "若网络路由了非私有地址段，例如集群的 pod 段，请用 `PRODUCER_NON_PUBLIC_CIDRS`（形如 `192.160.0.0/16` 的逗号分隔列表）加入。资源下载与渲染浏览器也会拒绝这些地址。格式错误的条目会拒绝所有地址而非被跳过，并记录警告。",
        ],
        codeBlocks: [
          {
            code: 'import { startServer } from "@hyperframes/producer";\n\nawait startServer({ port: 8080 });',
            file: "ts",
          },
        ],
        id: "build-a-render-service",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [选择渲染基础设施](https://hyperframes.heygen.com/deploy/overview.md) 在本地、服务器、Temporal、AWS 或另一适配器之间做决定。",
          "[card] [@hyperframes/engine](https://hyperframes.heygen.com/packages/engine.md) 使用更底层的捕获与编码原语。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/engine](https://hyperframes.heygen.com/packages/engine.md)",
          "[@hyperframes/core](https://hyperframes.heygen.com/packages/core.md)",
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-shader": {
    lede: "shader transitions 包为 HyperFrames 合成加入 GPU 加速的场景间过渡。它捕获场景样本、作为 WebGL 纹理上传，并从 GSAP 时间线驱动片段 shader 合成。",
    sections: [
      {
        h: "何时使用",
        p: "",
        paras: [
          "**当你需要以下能力时，使用 `@hyperframes/shader-transitions`：** **若你想做以下事，请用其他包：**",
        ],
        codeBlocks: [],
        bullets: [
          "添加基于 shader 的场景过渡，如 domain warp、whip pan、glitch、iris、light leak 或 thermal distortion",
          "将 GPU 过渡挂到现有 GSAP 时间线",
          "围绕可用 shader 注册表构建过渡选择器或校验界面",
          "对原生 HTML-in-canvas 捕获支持做特性检测",
          "为渲染模式捕获使用 producer 的确定性页面端合成器",
          "将完成合成渲染为视频——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
          "以编程方式编辑合成结构——使用 [sdk](https://hyperframes.heygen.com/packages/sdk.md)",
          "构建可视化编辑界面——使用 [studio](https://hyperframes.heygen.com/packages/studio.md)",
        ],
        id: "when-to-use",
      },
      {
        h: "包导出",
        p: "",
        paras: [
          "| 导出项 | 说明 |\n| - | - |\n| `init()` | 构建或增强带 shader 过渡的 GSAP 时间线 |\n| `SHADER_NAMES` | 支持的 shader 名称数组，供校验与 UI 选择器 |\n| `isHtmlInCanvasCaptureSupported()` | 检测 Chrome 原生 HTML-in-canvas 捕获路径 |\n| `installPageSideCompositor()` | 安装 producer 路径使用的渲染模式合成器 |\n| `isPageSideCompositingSupported()` | 检查页面端 shader 合成是否可用 |",
        ],
        codeBlocks: [],
        id: "package-exports",
      },
      {
        h: "快速开始",
        p: "",
        paras: [
          "当合成已经拥有动画序列时，可传入现有 GSAP 时间线： 若 WebGL 不可用，本包会退回普通时间线播放，不做 shader 合成。",
        ],
        codeBlocks: [
          {
            code: 'import { init } from "@hyperframes/shader-transitions";\n\nconst timeline = init({\n  bgColor: "#0a0a0a",\n  accentColor: "#ff6b2b",\n  scenes: ["scene-1", "scene-2", "scene-3"],\n  transitions: [\n    { time: 3, shader: "domain-warp", duration: 0.8 },\n    { time: 8, shader: "light-leak", duration: 0.7 },\n  ],\n});\n\nwindow.__timelines ??= {};\nwindow.__timelines.hero = timeline;',
            file: "ts",
          },
          {
            code: 'const timeline = gsap.timeline({ paused: true });\ntimeline.from("#headline", { opacity: 0, y: 40, duration: 0.6 });\n\ninit({\n  bgColor: "#000000",\n  scenes: ["intro", "demo", "outro"],\n  transitions: [\n    { time: 5, shader: "cinematic-zoom" },\n    { time: 12, shader: "glitch", duration: 0.5 },\n  ],\n  timeline,\n});',
            file: "ts",
          },
        ],
        id: "quick-start",
      },
      {
        h: "可用 Shaders",
        p: "",
        paras: [
          "| 着色器 | 说明 |\n| - | - |\n| `domain-warp` | 基于有机噪声的扭曲，带发光边缘 |\n| `ridged-burn` | 带火花与热辉的脊状噪声燃烧 |\n| `whip-pan` | 水平运动模糊，模拟快速摇镜 |\n| `sdf-iris` | 圆形虹膜擦除，带发光环形边缘 |\n| `ripple-waves` | 由中心向外扩散的同心波纹扭曲 |\n| `gravitational-lens` | 扭曲引力井，带色差 |\n| `cinematic-zoom` | 径向缩放模糊，带色散边缘 |\n| `chromatic-split` | 由中心向外展开的 RGB 通道分离 |\n| `glitch` | 数字故障，块位移与扫描线 |\n| `swirl-vortex` | 螺旋旋转，带噪声扭曲 |\n| `thermal-distortion` | 自底部升起的热气波动 |\n| `flash-through-white` | 闪白，再揭示下一场景 |\n| `cross-warp-morph` | 噪声驱动混合两场景 |\n| `light-leak` | 暖色电影感漏光，带镜头光晕 |",
          "需要类型化列表时使用 `SHADER_NAMES`：",
        ],
        codeBlocks: [
          {
            code: 'import { SHADER_NAMES } from "@hyperframes/shader-transitions";',
            file: "ts",
          },
        ],
        id: "available-shaders",
      },
      {
        h: "配置",
        p: "",
        paras: ["`shader` 可选。省略时，该时间线位置将使用 CSS 兜底过渡。"],
        codeBlocks: [
          {
            code: "type TransitionConfig = {\n  time: number;\n  shader?: string;\n  duration?: number;\n  ease?: string;\n};\n\ntype HyperShaderConfig = {\n  bgColor: string;\n  accentColor?: string;\n  scenes: string[];\n  transitions: TransitionConfig[];\n  timeline?: gsap.core.Timeline;\n  compositionId?: string;\n  previewCaptureFps?: number;\n};",
            file: "ts",
          },
        ],
        id: "configuration",
      },
      {
        h: "预览与渲染行为",
        p: "",
        paras: [
          "浏览器预览会预捕获过渡样本，并将匹配快照缓存在 IndexedDB。缓存键包括合成 ID、场景 DOM/样式签名、时序、捕获 FPS、缩放与尺寸，因此普通页面刷新可复用样本，运行时编辑只使相邻过渡缓存失效。",
          "producer 渲染期间，shader 过渡改用确定性页面端合成器，而非预览时快照缓存。这样保持帧捕获由 seek 驱动，避免依赖实时播放。",
        ],
        codeBlocks: [],
        id: "preview-and-render-behavior",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) 渲染包含 shader 过渡的合成。",
          "[card] [过渡目录](https://hyperframes.heygen.com/catalog/blocks/transitions-distortion.md) 浏览构建在 shader 系统之上的可安装过渡块。",
        ],
        codeBlocks: [],
        bullets: [
          "[使用 data-vfx-chain 的逐像素效果](https://hyperframes.heygen.com/guides/vfx-chain.md)",
          "[色彩、效果、3D 与生成艺术](https://hyperframes.heygen.com/prompting/color-grading.md)",
          "[已验证的示例提示词](https://hyperframes.heygen.com/prompting/examples.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-studio": {
    lede: "`@hyperframes/studio` 包含 HyperFrames 浏览器编辑器背后的 React 应用、编辑器组件、播放器、时间线与 hooks。",
    sections: [
      {
        h: "入口",
        p: "",
        paras: [
          "| 导入路径 | 包含内容 |\n| - | - |\n| `@hyperframes/studio` | React 组件、hooks、工具及其公共类型 |\n| `@hyperframes/studio/ui` | 不含编辑器的 UI 原语（按钮、菜单、弹出层、表单项） |\n| `@hyperframes/studio/player` | 单独的 `Player` 组件，不含时间线 |\n| `@hyperframes/studio/tailwind-preset` | Studio 使用的 Tailwind 预设 |",
          "同伴依赖为 React 19、React DOM 19 与 Zustand 4 或 5。",
        ],
        codeBlocks: [],
        id: "entry-points",
      },
      {
        h: "完整应用",
        p: "",
        paras: ["| 导出项 | 用途 |\n| - | - |\n| `StudioApp` | 完整的 Studio 应用 |"],
        codeBlocks: [],
        id: "main-exports",
      },
      {
        h: "编辑器结构",
        p: "",
        paras: [
          "| 导出项 | 用途 |\n| - | - |\n| `EditorShell` | 预览、侧边栏与时间线外壳 |\n| `NLEPreview` | 合成预览界面 |\n| `CompositionBreadcrumb` | 在嵌套合成间导航 |\n| `SourceEditor` | 源码编辑器 |\n| `PropertyPanel` | 所选元素的检查器 |\n| `FileTree` | 项目文件浏览器 |",
        ],
        codeBlocks: [],
        id: "complete-application",
      },
      {
        h: "播放与时间线",
        p: "",
        paras: [
          "| 导出项 | 用途 |\n| - | - |\n| `Player` | 合成 iframe 与播放桥接 |\n| `PlayerControls` | 播放、拖动与逐帧控制 |\n| `Timeline` | 时间线编辑界面 |\n| `VideoThumbnail` | 视频片段缩略图 |\n| `CompositionThumbnail` | 嵌套合成缩略图 |",
        ],
        codeBlocks: [],
        id: "editor-structure",
      },
      {
        h: "Hooks 与工具",
        p: "",
        paras: [
          "| 导出项 | 用途 |\n| - | - |\n| `useTimelinePlayer` | 读取与控制共享播放器状态 |\n| `usePlayerStore` | 访问 Zustand 播放器 store |\n| `useCompositionStack` | 深入与返回嵌套合成 |\n| `useElementPicker` | 通过预览 iframe 选择与编辑元素 |\n| `resolveSourceFile`, `applyPatch` | 定位与补丁源码 |\n| `parseStyleString`, `mergeStyleIntoTag`, `findElementBlock` | 处理内联源码样式与元素 |",
          "本包还导出 `CompositionLevel`、`TimelineElement`、`PickedElement` 与 `PatchOperation`。",
          "`useElementPicker` 在检查激活期间记住当前选择。在 Studio 或预览中按 Escape 可取消并恢复该选择。悬停目标在预览旁标为 `tag#id`、`tag.class` 或仅标签名。",
        ],
        codeBlocks: [],
        id: "playback-and-timeline",
      },
      {
        h: "Studio 如何与项目保持连接",
        p: "",
        paras: [
          "预览与渲染使用相同的可寻址合成契约。预览仍依赖浏览器实时播放，渲染则逐帧捕获。因此很重的项目在预览时可能卡顿，但仍能渲染每一帧。",
          "暂停时拖动视频会先解码并暂存可见视频层，再推进合成动画。完整帧在拖动中出现，新指针位置合并到下一次解码。Canvas 与 GPU 效果消费相同的暂存像素。连续播放使用原生视频；Studio 会在那些视频追赶上之前保持暂停画面可见，在 Play 之前等待。原生交接最多等待满足就绪帧十秒；Pause 或新的 seek 会取消它。到达期限后，其余部分照常播放，每个未就绪视频继续显示其最后一张全质量画面。播放中，原生帧呈现或播放进度会释放该画面；普通传输同步纠正漂移。暂停恢复仍等待所请求帧。被跳过的来源在其后续 Play 请求中保留画面，直至恢复。超时的暂停兜底保留呈现时钟与画面，暂停同步继续；视频就绪时它仍可发布；新手势取消该恢复。Studio 在准备原生播放前请求释放暂停解码器，暂停拖动恢复时重开读取器。释放暂停读取器最多等待两秒，让透明视频查询清空。此后取消其下载，让播放继续，未完成合并在后台收尾；输入释放仍等待合并完成。同传输偏离半秒以上的恢复中视频，每次恢复注册最多纠正 seek 一次，然后移除其保留画面。拖动与暂停逐帧步进始终以源分辨率解码原视频。自动播放质量降级不会降低这些帧，帧解码器不会用重编码 seek 副本替代。播放质量设置也不会降低这些暂停帧。无法使用帧解码器的浏览器或媒体退回原生拖动。长 GOP 来源 seek 可能更慢，尤其是向后或跨越远距离剪辑时。",
        ],
        codeBlocks: [],
        bullets: [
          "Studio 在 iframe 中加载合成，并使用 HyperFrames 运行时。",
          "Player 控件与该运行时通信，以播放、暂停与拖动。",
          "编辑器与时间线通过 Studio API 发送变更。",
          "Studio 服务器将这些变更写回项目文件。",
          "外部文件变更尽可能在保持当前位置的同时刷新预览。",
        ],
        id: "hooks-and-utilities",
      },
      {
        h: "Tailwind 预设",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import studioPreset from "@hyperframes/studio/tailwind-preset";\n\nexport default {\n  presets: [studioPreset],\n};',
            file: "ts",
          },
        ],
        id: "how-studio-stays-connected-to-a-project",
      },
      {
        h: "在你自己的应用中使用预览指南",
        p: "",
        paras: [
          "宿主应用可用 Studio 同样的标尺、安全边距、网格与吸附工具栏，组合到自己的预览 iframe 上。提供方拥有 iframe 几何与共享偏好，宿主提供当前 iframe 元素，并选择要渲染的部分：",
        ],
        codeBlocks: [
          {
            code: 'import {\n  GridOverlay,\n  PreviewGuides,\n  PreviewOverlayProvider,\n  SnapToolbar,\n} from "@hyperframes/studio";\nfunction Preview({ iframe }: { iframe: HTMLIFrameElement | null }) {\n  return (\n    <PreviewOverlayProvider iframe={iframe}>\n      <PreviewGuides />\n      <GridOverlay />\n      <SnapToolbar />\n    </PreviewOverlayProvider>\n  );\n}',
            file: "tsx",
          },
        ],
        id: "tailwind-preset",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [使用 Studio](https://hyperframes.heygen.com/studio.md) 学习完整的编辑工作流。",
          "[card] [Studio 服务器](https://hyperframes.heygen.com/packages/studio-server.md) 连接项目文件、媒体、lint 与渲染任务。",
          "[card] [Player 播放器组件](https://hyperframes.heygen.com/packages/player.md) 嵌入播放而无编辑界面。",
          "[card] [SDK 参考](https://hyperframes.heygen.com/sdk/quickstart.md) 无 Studio 时查询与编辑合成。",
        ],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/studio-server](https://hyperframes.heygen.com/packages/studio-server.md)",
          "[@hyperframes/player](https://hyperframes.heygen.com/packages/player.md)",
          "[@hyperframes/sdk](https://hyperframes.heygen.com/packages/sdk.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
