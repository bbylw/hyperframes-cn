import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "deploy-overview": {
    lede: "每条渲染路径都从同一个 HyperFrames 项目开始。区别在于：谁在运维 Chrome 和 FFmpeg、请求如何提交，以及你的应用需要控制流水线的多少部分。",
    sections: [
      {
        h: "本地或 CI：使用 CLI",
        p: "",
        paras: [
          "CLI 拥有完整的常规流水线：项目加载、检查、浏览器捕获、音频混音和编码。",
          "除非有应用（不是人员或 CI 任务）必须发起渲染，否则请从这里开始。常规工作流见[渲染](https://hyperframes.heygen.com/guides/rendering.md)，自动化标志的完整 CLI 参考见[CLI 完整参考](https://hyperframes.heygen.com/packages/cli.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes check\nnpx hyperframes render --output video.mp4",
            file: "bash",
          },
        ],
        id: "local-or-ci-use-the-cli",
      },
      {
        h: "Node 应用：使用 Producer",
        p: "",
        paras: [
          "`@hyperframes/producer` 是完整的可编程渲染流水线。它适合需要提供项目输入、接收进度、取消任务，或在不生成 CLI 进程的情况下控制编码的后端。",
          "当前配置和导出 API 见[Producer](https://hyperframes.heygen.com/packages/producer.md)。仅在 Producer 执行了你的应用必须替换的工作时，才使用 Engine。",
        ],
        codeBlocks: [
          {
            code: 'import { createRenderJob, executeRenderJob } from "@hyperframes/producer";\n\nconst job = createRenderJob({ fps: 30, quality: "standard" });\nawait executeRenderJob(job, "./project", "./video.mp4");',
            file: "ts",
          },
        ],
        id: "a-node-application-use-producer",
      },
      {
        h: "精确帧捕获：使用 Engine",
        p: "",
        paras: [
          "`@hyperframes/engine` 打开可定位的合成并捕获精确帧。它不替代完整的 Producer 流水线。",
          "在构建专用捕获、检查或渲染基础设施时使用它。对于普通编码视频，请使用 CLI 或 Producer。见[Engine](https://hyperframes.heygen.com/packages/engine.md)。",
        ],
        codeBlocks: [],
        id: "exact-frame-capture-use-engine",
      },
      {
        h: "无基础设施：使用 HyperFrames Cloud",
        p: "",
        paras: [
          "托管云渲染接收项目、运行渲染，并返回成品文件，无需本地 Chrome 或 FFmpeg。",
          "认证、变量、webhook 和任务管理见[Cloud 渲染](https://hyperframes.heygen.com/deploy/cloud.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes cloud render ./project --output video.mp4",
            file: "bash",
          },
        ],
        id: "no-infrastructure-use-hyperframes-cloud",
      },
      {
        h: "你自己运维的基础设施",
        p: "",
        paras: [
          "当渲染必须在你自己的云账户内运行时，使用[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)或[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。两条路径都会把工作分发到多个工作进程，并把中间媒体和成品媒体存到对应的云存储。",
          "当期望的是在 Vercel、Cloudflare 或 Modal 上的小型预览应用加渲染 API（而不是通用分布式渲染平台）时，使用[托管模板](https://hyperframes.heygen.com/guides/deploy.md)。",
        ],
        codeBlocks: [],
        id: "infrastructure-you-control",
      },
      {
        h: "决策",
        p: "",
        paras: [
          "选择能完成任务的最高层界面： 越往右，应用控制越多，流水线责任也越多。托管 Cloud、AWS Lambda、Cloud Run 和托管模板决定该流水线在哪里运行。",
        ],
        codeBlocks: [
          {
            code: "CLI → Producer → Engine",
            file: "text",
          },
        ],
        id: "the-decision",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[CLI 指南](https://hyperframes.heygen.com/developers/cli.md)",
          "[部署预览和渲染 API](https://hyperframes.heygen.com/guides/deploy.md)",
          "[HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "deploy-cloud": {
    lede: "当你想要成品文件而又不想安装 Chrome 或 FFmpeg、也不想维护 AWS 或 Google Cloud 基础设施时，使用托管云渲染。",
    sections: [
      {
        h: "渲染项目",
        p: "",
        paras: [
          "先登录一次，然后渲染当前项目： 该命令会打包项目、上传它、等待渲染完成，并把成品文件下载到 `renders/`。",
          "当默认设置不合适时，可指定合成或输出路径： 在有人在场的 SSH 或无头终端中，使用设备流程。在任意浏览器中打开显示的 URL 并输入一次性 code： 设备登录需要 TTY，在 CI 中会被拒绝。对于无人值守智能体和 CI，请改用长效 API key：",
          "凭据优先级和本地替代见[认证和 API key](https://hyperframes.heygen.com/guides/authentication.md)。",
        ],
        codeBlocks: [
          {
            code: "hyperframes auth login\nhyperframes cloud render",
            file: "bash",
          },
          {
            code: "hyperframes cloud render . \\\n  --composition compositions/intro.html \\\n  --output renders/intro.mp4",
            file: "bash",
          },
          {
            code: "hyperframes auth login --device",
            file: "bash",
          },
          {
            code: 'echo "$HEYGEN_API_KEY" | hyperframes auth login --api-key',
            file: "bash",
          },
        ],
        id: "render-a-project",
      },
      {
        h: "选择输出",
        p: "",
        paras: [
          "| 选项 | 取值 | 默认值 |\n| - | - | - |\n| `--fps` | 1–240 | `30` |\n| `--quality` | `draft`, `standard`, `high` | `standard` |\n| `--format` | `mp4`, `webm`, `mov` | `mp4` |\n| `--resolution` | `1080p`, `4k` | `1080p` |\n| `--aspect-ratio` | `16:9`, `9:16`, `1:1` | 尽可能从本地合成检测 |",
          "[!WARNING] 4K 按 1.5 倍计费。",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloud render --quality high --fps 60\nhyperframes cloud render --resolution 4k",
            file: "bash",
          },
        ],
        id: "choose-the-output",
      },
      {
        h: "检查将会上传的内容",
        p: "",
        paras: [
          "项目按路径命名的 5 MB 或更大的媒体文件会作为 HeyGen 资源上传，并通过公开、无签名的 URL 引用，因此大片段和音频不会计入 200 MB 项目存档限制。上传有缓存，因此重新渲染时仅上传新增或变更的媒体。媒体在上传时从磁盘流式传输，大文件无需完整载入内存；在命令准备它时编辑它会终止本次运行。渲染前请检查将上传的内容：",
          "必要时把生成文件或无用文件加入 `.hyperframesignore`： 不要排除合成在渲染时需要的媒体。HyperFrames 已经忽略了常见开发和生成路径，包括 `.git`、`node_modules`、顶层 `renders/` 和顶层 `snapshots/`。",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloud render --dry-run",
            file: "bash",
          },
          {
            code: "/exports/\n/source-masters/",
            file: "gitignore",
          },
        ],
        id: "check-what-will-upload",
      },
      {
        h: "填充模板变量",
        p: "",
        paras: [
          "使用合成声明的变量： 对于更大的载荷，用 `--variables-file` 传入 JSON 文件。",
          "对于本地项目，变量校验使用 `--composition` 指定的入口（省略时为 `index.html`）。`--strict-variables` 会在上传前停下，条件是某个值与该入口的声明不匹配。",
          "首次上传本地项目的 `hyperframes cloud render` 会打印一个 `asset_id`。复用它，用不同的值渲染同一已上传项目：",
        ],
        codeBlocks: [
          {
            code: 'hyperframes cloud render \\\n  --variables \'{"title":"Q4 recap","theme":"dark"}\' \\\n  --strict-variables',
            file: "bash",
          },
          {
            code: 'hyperframes cloud render \\\n  --asset-id asst_abc123 \\\n  --variables \'{"title":"Customer update"}\'',
            file: "bash",
          },
        ],
        id: "fill-template-variables",
      },
      {
        h: "异步运行",
        p: "",
        paras: [
          "提交后不等待，并在渲染完成时接收 webhook： 然后按 ID 检查或管理渲染： 对于自动重试，传入稳定的 `--idempotency-key`，使中断的请求可以安全重放。",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloud render \\\n  --callback-url https://example.com/hyperframes-hook \\\n  --no-wait",
            file: "bash",
          },
          {
            code: "hyperframes cloud list\nhyperframes cloud get hfr_abc123\nhyperframes cloud delete hfr_abc123",
            file: "bash",
          },
        ],
        id: "run-asynchronously",
      },
      {
        h: "选择其他渲染器",
        p: "",
        paras: [
          "所有标志和 JSON 输出格式见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md#hyperframes-cloud)。",
        ],
        codeBlocks: [],
        bullets: [
          "创作时、或运行命令的机器应承担任务时，使用 [`hyperframes render`](https://hyperframes.heygen.com/guides/rendering)。",
          "需要自己拥有渲染基础设施时，使用[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)或[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。",
          "需要可用的托管起点而不是完整分布式渲染栈时，使用[部署模板](https://hyperframes.heygen.com/guides/deploy.md)。",
        ],
        id: "choose-another-renderer",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[选择渲染路径](https://hyperframes.heygen.com/deploy/overview.md)",
          "[从命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)",
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-deploy": {
    lede: "HyperFrames 有三个官方托管模板。每个模板都会预先内置合成，在 `<hyperframes-player>` 中预览，并在服务器端 Chrome 和 FFmpeg 上渲染为 MP4。",
    sections: [
      {
        h: "Vercel",
        p: "",
        paras: [
          "Vercel 模板是 Next.js 应用。其 `/api/render` 路由会恢复已准备好的 Sandbox、运行 `hyperframes render`、把 MP4 上传到 Blob，并返回公开 URL。",
          "[部署 Vercel 模板](https://vercel.com/new/clone?demo-title=HyperFrames+on+Vercel&demo-description=Preview+HTML+video+compositions+in+the+browser+and+render+MP4s+server-side+on+Vercel+Sandbox.&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fheygen-com%2Fhyperframes-vercel-template%2Fmain%2Fdocs%2Fpreview.png&demo-url=https%3A%2F%2Fhyperframes-on-vercel.vercel.app&from=templates&project-name=hyperframes-on-vercel&repository-name=hyperframes-on-vercel&repository-url=https%3A%2F%2Fgithub.com%2Fheygen-com%2Fhyperframes-vercel-template&stores=%5B%7B%22type%22%3A%22blob%22%2C%22access%22%3A%22public%22%7D%5D)",
          "部署会创建 Blob 存储。Sandbox 访问使用 Vercel 运行时身份。当前账户要求和平台限制请参阅仓库 README。",
        ],
        codeBlocks: [],
        id: "vercel",
      },
      {
        h: "Cloudflare",
        p: "",
        paras: [
          "Cloudflare 模板是 Workers 上的 TanStack Start 应用。`RenderContainer` Durable Object 运行渲染器，并把结果流式写入 R2。模板还包含可选的、基于 prompt 的生成，使用用户自己的 OpenRouter 凭据。",
          "[部署 Cloudflare 模板](https://deploy.workers.cloudflare.com/?url=https://github.com/heygen-com/hyperframes-cloudflare-template)",
          "Cloudflare Containers 需要 Workers Paid 套餐。除非你打算让访问者提交自己的合成，否则托管公开演示前请禁用可选的 AI 生成界面。",
        ],
        codeBlocks: [],
        id: "cloudflare",
      },
      {
        h: "Modal",
        p: "",
        paras: [
          "Modal 模板暴露 FastAPI 应用。`POST /api/render` 启动独立的渲染函数并返回调用 ID；浏览器轮询，直到 MP4 可从 Modal Volume 获取。",
        ],
        codeBlocks: [
          {
            code: "uv sync\nsource .venv/bin/activate\nmodal setup\nmodal deploy src/app.py",
            file: "bash",
          },
        ],
        id: "modal",
      },
      {
        h: "使用你自己的合成",
        p: "",
        paras: [
          "先在本地创作并检查项目： 然后替换所选模板中的内置合成：",
          "| 模板 | 合成文件夹 | 选择合成 |\n| - | - | - |\n| Vercel | `public/compositions/<name>/` | 更新 `lib/preview.ts` 中的 `PREVIEW_COMPOSITION_DIR` |\n| Cloudflare | `public/compositions/<name>/` | 构建或部署时设置 `PREVIEW_COMPOSITION_DIR=compositions/<name>` |\n| Modal | `compositions/<name>/` | 更新 `src/app.py` 中的 `PREVIEW_COMPOSITION` |",
          "如果创作画布不是 1920×1080，还要更新模板中的播放器尺寸。每个仓库 README 都会注明当前文件。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes init my-video\ncd my-video\nnpx hyperframes preview\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "use-your-own-composition",
      },
      {
        h: "暴露端点之前",
        p: "",
        paras: [
          "这些仓库是可运行示例，不是完整的多租户渲染服务。接受公开渲染请求之前，请添加认证、请求限制、输入校验和成本控制。任务需要重试、优先级或受控并发时，请增加队列。",
          "对于围绕分布式任务设计的基础设施，请使用[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)或[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)。",
        ],
        codeBlocks: [],
        id: "before-exposing-the-endpoint",
      },
      {
        h: "来源",
        p: "",
        paras: [
          "[card] [Vercel](https://github.com/heygen-com/hyperframes-vercel-template) Next.js、Sandbox 和 Blob",
          "[card] [Cloudflare](https://github.com/heygen-com/hyperframes-cloudflare-template)",
          "TanStack Start、Containers 和 R2 [card] [Modal](https://github.com/heygen-com/hyperframes-modal-template) FastAPI、生成函数和 Volume 存储",
        ],
        codeBlocks: [],
        id: "source",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[选择渲染路径](https://hyperframes.heygen.com/deploy/overview.md)",
          "[修复慢预览或慢渲染](https://hyperframes.heygen.com/guides/performance.md)",
          "[故障排查](https://hyperframes.heygen.com/help.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "deploy-aws-lambda": {
    lede: "将分布式 HyperFrames 渲染部署到 AWS Lambda（单 Lambda 前端 + Step Functions 扇出并发分片，中间产物存 S3），并从本地终端或 CI 驱动渲染任务。",
    sections: [
      {
        h: "架构",
        p: "",
        paras: [
          "Lambda handler 是薄分发层：解析 Step Functions 事件、从 S3 下载输入到 `/tmp`、调用 `@hyperframes/producer/distributed` 的 OSS 原语、上传回输出、返回小 JSON 结果。所有重活——捕获、编码、音频混音——都在 OSS 原语内完成。",
        ],
        codeBlocks: [
          {
            code: '┌──────────────────────────────────────────────────────────────────┐\n│ Step Functions state machine                                     │\n│   Plan → Map(N) RenderChunk → Assemble                           │\n└──────────────────────────────────────────────────────────────────┘\n                              │ dispatches by event.Action\n                              ▼\n┌──────────────────────────────────────────────────────────────────┐\n│ One Lambda function (packages/aws-lambda/dist/handler.zip)       │\n│   handler.mjs                                                    │\n│     ├─ Action="plan"        → @hyperframes/producer/distributed  │\n│     ├─ Action="renderChunk" → @hyperframes/producer/distributed  │\n│     └─ Action="assemble"    → @hyperframes/producer/distributed  │\n│   bin/ffmpeg                — ffmpeg-static                      │\n│   node_modules/@sparticuz/chromium/ — Lambda-optimised Chromium  │\n└──────────────────────────────────────────────────────────────────┘\n                              │ pure functions over local paths\n                              ▼\n┌──────────────────────────────────────────────────────────────────┐\n│ S3 bucket — plan tarball + per-chunk outputs + final mp4         │\n└──────────────────────────────────────────────────────────────────┘',
            file: "example",
          },
        ],
        id: "architecture",
      },
      {
        h: "前提条件",
        p: "",
        paras: [
          "| 工具 | 用途 | 安装 |\n| - | - | - |\n| AWS 凭据 | CLI 和部署步骤都调用 AWS API。 | Env vars、`~/.aws/credentials`、SSO 或 IMDS——AWS SDK for JavaScript v3 能解析的任意链路。 |\n| AWS SAM CLI | `hyperframes lambda deploy/destroy` 调用 `sam deploy`/`sam delete`。 | [安装指南](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) |\n| Lambda adapter | 已发布 CLI 仅为 Lambda 命令加载 AWS adapter。每个版本固定一个预构建 Lambda handler ZIP（GitHub release asset）；`lambda deploy` 下载它、校验 SHA-256、再用 adapter 的 SAM 模板部署它。无需仓库检出。 | 与 CLI 同版本，在 CLI 旁安装 `npm install -g @hyperframes/aws-lambda` |\n| HyperFrames 仓库检出（可选） | 在检出内，或 `HYPERFRAMES_REPO_ROOT` 指向上时，`lambda deploy` 改从源码构建 handler ZIP（需要 `bun`）。用于部署未发布改动、`--chrome-source=chrome-headless-shell`、或早于预构建 handler 的 adapter 版本。arm64 检出部署还需要从该检出构建视频镜像（`HYPERFRAMES_LAMBDA_VIDEO_IMAGE`），或加 `--video-arch x86_64`。 | `git clone https://github.com/heygen-com/hyperframes`，且 `npm install -g bun` 或 [bun.sh](https://bun.sh) |",
        ],
        codeBlocks: [],
        id: "prerequisites",
      },
      {
        h: "路径 1 — `hyperframes lambda` CLI（推荐）",
        p: "",
        paras: [
          "CLI 是 SAM 模板 + `@hyperframes/aws-lambda` SDK 的薄包装。对大多数采用者，这是正确的起点。",
          "默认栈不预留并发。每次渲染规划时读取账户的未预留 Lambda 并发，并在一次性用好它的至多 90%（至多 256 分片），为账户其他函数留出余量。规划会记录所选数字。改传 `--concurrency=N` 可为该函数预留 `N` 次执行；每次渲染至多同时跑 `N` 分片。",
          "升级：重新部署已有栈时不传 `--concurrency` 会保留已有预留，`deploy` 会打印它。旧 CLI 版本部署的栈默认预留 8，因此在你传 `--concurrency=N` 之前保持为 8。传 `--concurrency=none` 可移除预留，让每次渲染按账户规模自定大小。",
          "`deploy` 把栈的桶和状态机记录到当前目录下的 `.hyperframes/lambda-stack-<stack-name>.json`。其他每个 `lambda` 命令都读取该文件，因此请用相同的 `--stack-name` 在同一目录运行，否则会报“no stack state”。升级用的重部署会改写同一文件。",
          "`deploy` 之后，可渲染任意内容： `--wait` 会阻塞并流式输出逐分片进度 + 累计成本；去掉则触发即忘，再用 `hyperframes lambda progress <renderId>` 按自己节奏轮询。",
          "完整标志文档见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md#hyperframes-lambda)。",
        ],
        codeBlocks: [
          {
            code: "hyperframes lambda deploy \\\n  --stack-name=hyperframes-prod \\\n  --region=us-east-1 \\\n  --memory=10240",
            file: "bash",
          },
          {
            code: "hyperframes lambda render ./my-project --width 1920 --height 1080 --wait",
            file: "bash",
          },
        ],
        id: "path-1-hyperframes-lambda-cli-recommended",
        aliases: ["three-deployment-paths"],
      },
      {
        h: "用 `sites create` 预备项目",
        p: "",
        paras: [
          "不带 `--site-id` 的每次 `lambda render` 调用都会哈希项目树并逐文件对照桶。内循环很紧（CI 烟雾任务、演示流程中的 prompt 迭代）时，预备一次项目并复用上传： `siteId` 按项目树的 SHA-256 内容寻址。站点是一个小 `sites/<siteId>/files.json`，列出每个文件的路径和 SHA-256。文件本身每桶只存一份于 `cas/sha256/` 下，所有站点和渲染共享，因此另一项目已上传的文件永不重传。可把同一 `--site-id` 传给任意多个 `lambda render` 调用。",
          "栈的桶对 `cas/sha256/` 下的对象在最后写入 30 天后过期（`ExpireSharedContent` 生命周期规则）。每次渲染或 `sites create` 复用至少 7 天前的文件都会原地改写，因此在用文件永不过期。若某站点文件已过期，`lambda render --site-id` 会在项目目录副本仍匹配时从其重传。否则，或 `renderToLambda` 收到 `siteHandle` 却无 `projectDir` 时，渲染以 `SITE_FILES_MISSING` 在启动前停下；请再次运行 `sites create` 恢复。",
        ],
        codeBlocks: [
          {
            code: "hyperframes lambda sites create ./my-project\n# → Site ID: a1b2c3d4e5f6g7h8 (content-addressed)\n\nhyperframes lambda render ./my-project --site-id=a1b2c3d4e5f6g7h8 \\\n  --width 1920 --height 1080 --wait",
            file: "bash",
          },
        ],
        id: "pre-staging-a-project-with-sites-create",
      },
      {
        h: "从仅部署 x86 的版本升级",
        p: "",
        paras: [
          "`lambda deploy` 现在默认把计划和渲染分片跑在 arm64 容器镜像函数上；音频和组装留在 x86 函数。不带 `--video-arch` 重部署已有栈会把它们移至 arm64，并加上 `<stack>-video` ECR 仓库。要让栈留在 x86，每次部署都传 `--video-arch x86_64`。`--chrome-source chrome-headless-shell` 也需要 `--video-arch x86_64`，因为 arm64 镜像只捆绑 sparticuz Chrome。",
        ],
        codeBlocks: [],
        id: "upgrading-from-a-version-that-deployed-x86-only",
      },
      {
        h: "从共享内容存储之前的版本升级",
        id: "upgrading-from-a-version-before-shared-content-storage",
        p: "",
        paras: [],
        bullets: [
          "**先重新部署基础设施堆栈，再升级触发渲染的 CLI 或 SDK。** 旧版本部署的堆栈无法读取使用 `files.json` 组织的站点内容。CLI 与 `renderToLambda` 会先校验状态机版本，若太旧则在上传任何文件前中止并报 `STACK_TOO_OLD`；请先运行 `hyperframes lambda deploy`（或用同一版本重新部署你的 SAM 模板 / CDK 构造），然后再重新发起渲染。",
          "**已有 Site ID 继续兼容。** 当找不到 `sites/<siteId>/files.json` 时，渲染流程仍会回退使用旧版的 `project.tar.gz`。若两者皆不存在，渲染中止并报错 `SITE_NOT_FOUND`，提示两个缺失的对象键；此时只需重新运行 `sites create` 即可。",
          "**每个项目会重新上传一次。** Site ID 计算规则已升级（现已将符号链接指向的文件纳入哈希），因此升级后的首次 `sites create` 或 `lambda render` 会生成新的 Site ID 并重新上传一次项目文件。",
        ],
        codeBlocks: [],
      },
      {
        h: "路径 2 — 直接 SAM 部署",
        p: "",
        paras: [
          "如果你想在部署前先读 CloudFormation，或需要定制拓扑（额外告警、SNS 订阅、KMS 键等），直接对 `examples/aws-lambda/template.yaml` 模板调用 SAM： 模板输出三个调用渲染时需要的 CloudFormation 输出：",
          "[!WARNING] SAM 模板 `ReservedConcurrency` 默认 `-1`（不预留），与路径 1 CLI 相同：每次渲染用好账户未预留并发的至多 90%。设它来限制一次跑多少分片。",
        ],
        codeBlocks: [
          {
            code: "cd packages/aws-lambda\nbun run build:zip                     # produces dist/handler.zip\ncd ../../examples/aws-lambda\nsam deploy \\\n  --stack-name=hyperframes-prod \\\n  --region=us-east-1 \\\n  --resolve-s3 \\\n  --capabilities CAPABILITY_IAM \\\n  --no-confirm-changeset \\\n  --parameter-overrides ChromeSource=sparticuz ReservedConcurrency=8",
            file: "bash",
          },
        ],
        bullets: [
          "`RenderBucketName`——计划 tarball + 逐分片输出 + 最终渲染的 S3 桶。",
          "`RenderStateMachineArn`——编排 Plan → Map → Assemble 的 Step Functions 标准工作流。",
          "`RenderFunctionArn`——状态机分发到的单个 Lambda 函数。",
        ],
        id: "path-2-direct-sam-deploy",
      },
      {
        h: "路径 3 — CDK 构造",
        p: "",
        paras: [
          "已在用 CDK 的用户，`@hyperframes/aws-lambda` 包导出 `HyperframesRenderStack` L2 构造，发出与 SAM 模板相同的拓扑： `@hyperframes/aws-lambda` 把 `aws-cdk-lib` 和 `constructs` 声明为**可选 peer dependency**，因此只需 SDK 的使用者不付 CDK 导入成本。",
          "该构造暴露 `.bucket`、`.renderFunction` 和 `.stateMachine`，你可连仪表盘、SNS topic 或其他 AWS 资源一起接线，无需重算 ARN。",
        ],
        codeBlocks: [
          {
            code: 'import { App, CfnOutput, Stack } from "aws-cdk-lib";\nimport { HyperframesRenderStack } from "@hyperframes/aws-lambda/cdk";\n\nconst app = new App();\nconst stack = new Stack(app, "MyApp");\nconst render = new HyperframesRenderStack(stack, "Render", {\n  projectName: "hyperframes",\n  lambdaMemoryMb: 10240,\n  reservedConcurrency: 8,\n  chromeSource: "sparticuz",\n});\n\nnew CfnOutput(stack, "RenderBucketName", { value: render.bucket.bucketName });\nnew CfnOutput(stack, "StateMachineArn", { value: render.stateMachine.stateMachineArn });',
            file: "ts",
          },
        ],
        id: "path-3-cdk-construct",
      },
      {
        h: "IAM 权限",
        p: "",
        paras: [
          "CLI 自带 IAM 引导脚本，避免首次部署的 “User is not authorized to perform iam:CreateRole” 陷阱： 用自己的角色调用 SDK `renderToLambda` 的代码，除 `states:StartExecution` 外还需要状态机上的 `states:DescribeStateMachine`，以及桶上的 S3 读写：每次渲染都要读定义确认栈足够新。",
          '生成文档对 CLI 所需动作集授 `Resource: "*"`。第一次成功部署后，你可把 `Resource` 收窄到已部署 ARN——可按上面 CloudFormation 输出预测。在 CI 中跑 CLI 的采用者通常把策略文档签入源码，并在部署前跑 `policies validate` 防漂移。',
        ],
        codeBlocks: [
          {
            code: "# Print an inline policy doc to attach to the IAM user that runs the CLI.\nhyperframes lambda policies user\n\n# Print { TrustRelationship, InlinePolicy } for a CloudFormation service role.\nhyperframes lambda policies role\n\n# Validate a checked-in policy still covers the CLI's needs (exit non-zero on missing).\nhyperframes lambda policies validate ./infra/iam/hyperframes-deploy.json",
            file: "bash",
          },
        ],
        id: "iam-permissions",
      },
      {
        h: "成本形态",
        p: "",
        paras: [
          "Lambda 渲染按 GB-seconds（Lambda 计费时长 × 配置内存）计费，另加 Step Functions 标准工作流的每状态转移小费。`hyperframes lambda progress` 暴露运行累计： 成本数字是估算：Lambda 时长来自 handler 结果，S3 传输不含在内。实际支出用 AWS 账单数据。",
        ],
        codeBlocks: [
          {
            code: "hyperframes lambda progress my-render-id\n# Status:    SUCCEEDED\n# Progress:  100%\n# Frames:    480 / 480\n# Lambdas:   5\n# Cost:      $0.0214 (Lambda $0.0210 + SFN $0.0004)\n# Output:    s3://hyperframes-renders/.../output.mp4",
            file: "bash",
          },
        ],
        id: "cost-shape",
      },
      {
        h: "`sam deploy` 报 “Stack already exists”",
        p: "",
        paras: [
          "传第一次用的同一 `--stack-name`。SAM 幂等——在已有栈上重跑会变成无操作或原地更新。",
        ],
        codeBlocks: [],
        id: "sam-deploy-fails-with-stack-already-exists",
        aliases: ["troubleshooting"],
      },
      {
        h: "`User is not authorized to perform iam:CreateRole`",
        p: "",
        paras: [
          "运行 `lambda deploy` 的 IAM 凭据无权创建 CloudFormation 需要的服务角色。运行 `hyperframes lambda policies user`，把打印的策略挂到你的 IAM 用户（或取 `policies role` 输出，让管理员建部署角色）。",
        ],
        codeBlocks: [],
        id: "user-is-not-authorized-to-perform-iamcreaterole",
      },
      {
        h: "`Lambda function failed: PLAN_HASH_MISMATCH`",
        p: "",
        paras: [
          "Step Functions 用与 S3 上 planDir 哈希不匹配的计划哈希调用了 `renderChunk`。几乎总是意味着本地 `plan()` 构建与已部署 Lambda ZIP 的 producer 版本不一致。重跑 `hyperframes lambda deploy`（重建 ZIP）并重新渲染。",
        ],
        codeBlocks: [],
        id: "lambda-function-failed-plan_hash_mismatch",
      },
      {
        h: "`Lambda function failed: BROWSER_GPU_NOT_SOFTWARE`",
        p: "",
        paras: [
          "Handler 启动了 Chromium，但运行时探针发现非 SwiftShader 的 GL 后端。跨分片边界硬件 GL 不确定，因此分布式渲染在运行时镜像 / 启动标志层拒绝它（不在合成层）。重建 handler ZIP 并重部署： 构建流水线固定了 `@sparticuz/chromium` + Chrome 标志（`--use-gl=swiftshader --use-angle=swiftshader`），所以全新部署几乎总能解决。若仍持续，栈的 Lambda 函数可能还指向旧部署遗留的 handler ZIP——`lambda deploy` 总会重建，重跑即可解开。",
        ],
        codeBlocks: [
          {
            code: "bun run --cwd packages/aws-lambda build:zip\nhyperframes lambda deploy --stack-name=<your-stack>",
            file: "bash",
          },
        ],
        id: "lambda-function-failed-browser_gpu_not_software",
      },
      {
        h: "渲染似乎卡在 `RUNNING`",
        p: "",
        paras: [
          "多为多分片渲染上的 Lambda 冷启动链。Map 状态的预留并发限制了可并行运行的分片数——如果你设了 `--concurrency=4` 而渲染有 16 分片，状态机按 4 个一批处理。`hyperframes lambda progress <id>` 显示有多少次调用在飞行中。",
          "若进度超过 10 分钟不推进，去 AWS 控制台看 Step Functions 执行——失败 Lambda 调用带类型化错误名（如 `FONT_FETCH_FAILED`、`FFMPEG_VERSION_MISMATCH` 等），它会让状态机短路。",
        ],
        codeBlocks: [],
        id: "render-seems-stuck-at-running",
      },
      {
        h: "长视频规划超时",
        p: "",
        paras: [
          "看失败调用的 CloudWatch 日志，区分 Plan 与 RenderChunk。在当前版本，带 `ffmpeg_timeout` 的 `VIDEO_EXTRACTION_FAILED` 表示提取在配置间隔内没有产出新帧，默认为 300,000 ms。帧进度会重置该计时器，因此提取可以一边持续产出帧一边跑很久，超过五分钟。普通帧提取把长范围切成至多两分钟段，包括可变帧率源。",
          "Plan v2 把符合条件的恒帧率 SDR 提取留给短时序探测之后的分片工作进程。可变帧率源和必需的 HDR 颜色转换仍在 Plan 期间提取；已弃用 v1 路径也会在 Plan 期间提取视频。更小的分片或更高的 `maxParallelChunks` 可减少每分片工作量，但不要除以 Plan 期间仍发生的提取。",
          "若日志显示慢提取需要更长的帧间间隔、且工作量在 Lambda 调用预算内，请增大跑失败阶段的已部署函数上的 `FFMPEG_PROCESS_TIMEOUT_MS`。默认 arm64 部署用视频函数跑 Plan 和 RenderChunk。只在跑 `lambda render` 的终端设该变量不能配置远程函数。CDK 用户可在部署前配置构造的渲染函数。这里，`render` 是上面 CDK 示例创建的 `HyperframesRenderStack` 实例：",
          "这让提取可等待十分钟无新帧。每次 Plan、RenderChunk 和 Assemble 调用仍须在自己配置的 Lambda 超时（至多 15 分钟）内完成，包括下载、处理和上传，并放进其 `/tmp` 存储。在 CloudWatch 中测量失败阶段的耗时和存储占用。",
          "若规划无法容纳，把合成拆成更短、帧对齐的项目，各自作为独立任务渲染，再合并结果。分段长度按实测规划时间选择。视频长度无固定上限：分辨率、帧率、编码和 Lambda 资源都影响提取时间。",
        ],
        codeBlocks: [
          {
            code: 'render.renderFunction.addEnvironment("FFMPEG_PROCESS_TIMEOUT_MS", "600000");',
            file: "ts",
          },
        ],
        id: "long-video-planning-times-out",
      },
      {
        h: "拆除未回收 S3 存储",
        p: "",
        paras: [
          "渲染桶在删除时用 CloudFormation `Retain` 创建——`hyperframes lambda destroy`（或 `sam delete`）拆掉函数 + 状态机，但桶保留。这是故意的：重部署时保住已渲染成品 MP4。要完全回收存储，请在 AWS 控制台 / `aws s3 rb` 中清空并删除桶。",
          "arm64 部署的栈（默认）还有一个 ECR 仓库 `<stack>-video`，持有视频函数的镜像。`hyperframes lambda destroy` 会在删栈后删它。",
        ],
        codeBlocks: [],
        id: "tearing-down-doesnt-reclaim-s3-storage",
      },
      {
        h: "`STACK_TOO_OLD`",
        p: "",
        paras: [
          "栈由无法读取本站点格式的旧版本部署。重部署它（`hyperframes lambda deploy`）再渲染。见[升级](#upgrading-from-a-version-before-shared-content-storage)。",
        ],
        codeBlocks: [],
        id: "stack_too_old",
      },
      {
        h: "`SITE_FILES_MISSING` 或 `SITE_NOT_FOUND`",
        p: "",
        paras: [
          "`SITE_FILES_MISSING`：站点部分文件在 `cas/sha256/` 下超过 30 天未用而过期。从站点创建时的项目目录渲染，或再次运行 `sites create`。`SITE_NOT_FOUND`：桶在任一格式下都无此 id 的站点；再次运行 `sites create` 并使用它打印的 id。",
        ],
        codeBlocks: [],
        id: "site_files_missing-or-site_not_found",
      },
      {
        h: "当前限制",
        id: "current-limits",
        p: "",
        paras: [],
        bullets: [
          "暂不提供完成回调 Webhook，请通过 `hyperframes lambda progress` 轮询或查看 AWS Step Functions 执行状态。",
          "没有 Lambda 专属的合成发现命令，请将 `lambda render` 直接指向包含 `index.html` 的项目根目录。",
          "每个 `--region` 都是独立部署的堆栈，不内置跨区域自动故障转移。",
          "分布式 AWS Lambda 渲染路径目前仅支持 SDR。",
          "Plan v2 会先做短暂时间探测，随后把符合条件的恒定帧率 SDR 视频抽帧下放到各 `RenderChunk` 分片任务执行。每个分片只按字节范围读取并抽取它负责展示的那一段帧。在 10,240 MB 内存的 Lambda 函数上，一段 26 分钟 `576×1024` 24 fps 的 H.264 视频规划阶段仅需约 20 秒。可变帧率（VFR）视频与需要色彩转换的 HDR 素材仍需在 Plan 阶段集中完成抽帧。常规抽帧使用最长 2 分钟的分段；`FFMPEG_PROCESS_TIMEOUT_MS` 限制了连续无新帧产出的最大等待时长，配置与拆分无法在单次超时内完成的任务请参阅[长视频规划超时](#long-video-planning-times-out)。",
          "Plan、每个 RenderChunk 以及 Assemble 阶段都必须在各自配置的 Lambda 超时时间内完成（AWS 上限 15 分钟），且中间产物不能超出函数 `/tmp` 存储空间。遇到超长视频时，请调高 `--max-parallel-chunks`（SDK 中为 `maxParallelChunks`），减少单个分片覆盖的帧数。",
        ],
        codeBlocks: [],
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)",
          "[在 Lambda 上渲染模板](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)",
          "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "deploy-gcp": {
    lede: "当渲染必须在你的 Google Cloud 账户中运行时使用此路径。Cloud Workflow 规划渲染任务，把分片并行发送给 Cloud Run，并在 Google Cloud Storage 中组装结果。",
    sections: [
      {
        h: "前提条件",
        p: "",
        paras: [
          "当 CLI 在 HyperFrames 仓库检出中运行时，它可以自动构建渲染器。在仓库之外，请用 `--image` 传入由 `packages/gcp-cloud-run/Dockerfile` 构建的镜像。",
          "渲染器镜像使用 Chrome 152，与 CLI 的托管浏览器一致，因此变换过的子元素内的渐变文字也能在 Cloud Run 中正确渲染。已有部署需要重建镜像并重新部署，才能获得浏览器更新。",
        ],
        codeBlocks: [],
        bullets: [
          "已启用结算的 Google Cloud 项目",
          "已针对该项目认证的 `gcloud`",
          "Terraform 1.5 或更新版本",
          "Cloud Build 访问，或已有的兼容容器镜像",
          "与 CLI 一起安装 `@hyperframes/gcp-cloud-run`",
        ],
        id: "prerequisites",
      },
      {
        h: "部署",
        p: "",
        paras: [
          "该命令启用所需的 Google Cloud API、必要时构建并推送渲染器、应用内置 Terraform 模块，并把生成的桶、服务 URL 和工作流名称存入 `~/.hyperframes/`。",
          "默认区域是 `us-central1`。机器和扩缩控制包括 `--region`、`--cpu`、`--memory`、`--max-instances` 和 `--timeout`。",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloudrun deploy --project my-gcp-project",
            file: "bash",
          },
        ],
        id: "deploy",
      },
      {
        h: "渲染",
        p: "",
        paras: [
          "宽和高描述创作画布。当编码结果需要超采样但不改变布局时，使用 `--output-resolution`。",
          "该命令接受本地渲染和 AWS 渲染使用的相同模板变量： 支持的分布式输出为 MP4、MOV、WebM 和 PNG 序列。MP4 可使用 H.264 或 H.265。当前分布式渲染仅支持 SDR。",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloudrun render ./my-project \\\n  --width 1920 \\\n  --height 1080 \\\n  --wait",
            file: "bash",
          },
          {
            code: 'hyperframes cloudrun render ./card-template \\\n  --width 1920 \\\n  --height 1080 \\\n  --variables \'{"name":"Ada"}\' \\\n  --wait',
            file: "bash",
          },
        ],
        id: "render",
      },
      {
        h: "复用上传",
        p: "",
        paras: [
          "项目按内容寻址。上传一次不变的项目，然后在后续渲染中复用其站点 ID。旧版本站点 ID 仍可用，但 ID 方案已变更，因此每个项目都会在新 ID 下再上传一次： 当一个模板需要多组变量时，使用 JSONL 文件搭配 `render-batch`：",
          "每行 JSONL 包含输出键和可选变量：",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloudrun sites create ./my-project",
            file: "bash",
          },
          {
            code: "hyperframes cloudrun render-batch ./card-template \\\n  --batch ./recipients.jsonl \\\n  --width 1920 \\\n  --height 1080 \\\n  --max-concurrent 10",
            file: "bash",
          },
          {
            code: '{"outputKey":"renders/ada.mp4","variables":{"name":"Ada"}}',
            file: "json",
          },
        ],
        id: "reuse-an-upload",
      },
      {
        h: "进度和拆除",
        p: "",
        paras: [
          "不带 `--wait` 时，渲染会立即返回其工作流执行名称。",
          "`destroy` 会移除 Terraform 管理的栈及其渲染桶。运行前请先下载需要保留的内容。",
        ],
        codeBlocks: [
          {
            code: "hyperframes cloudrun progress <execution-name>\nhyperframes cloudrun destroy --project my-gcp-project",
            file: "bash",
          },
        ],
        id: "progress-and-teardown",
      },
      {
        h: "编程使用",
        p: "",
        paras: [
          "`@hyperframes/gcp-cloud-run/sdk` 暴露 `deploySite`、`renderToCloudRun` 和 `getRenderProgress`，供 Node 后端使用。该包还导出部署服务使用的 Terraform 模块和 HTTP handler。",
          "SDK 契约和完整基础设施形态见[GCP 包参考](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)。",
        ],
        codeBlocks: [],
        id: "programmatic-use",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/gcp-cloud-run](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)",
          "[Cloud 渲染](https://hyperframes.heygen.com/deploy/cloud.md)",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "deploy-templates-lambda": {
    lede: "HyperFrames 模板是带有声明变量的合成。同一项目无需重写 HTML 即可产出多个视频。",
    sections: [
      {
        h: "声明输入",
        p: "",
        paras: [
          "在文档上声明变量，然后在合成中绑定它们。本例暴露标题和强调色： 所有类型和绑定方法的说明见[变量](https://hyperframes.heygen.com/concepts/variables.md)。",
        ],
        codeBlocks: [
          {
            code: '<!doctype html>\n<html\n  data-composition-variables=\'[\n    {"id":"title","type":"string","label":"Headline","default":"Welcome"},\n    {"id":"accent","type":"color","label":"Accent","default":"#6d5dfc"}\n  ]\'\n>\n  <body>\n    <div\n      id="stage"\n      data-composition-id="welcome"\n      data-start="0"\n      data-width="1920"\n      data-height="1080"\n      data-duration="5"\n      data-no-timeline\n      style="color:var(--accent)"\n    >\n      <h1 data-var-text="title">Welcome</h1>\n    </div>\n  </body>\n</html>',
            file: "html",
          },
        ],
        id: "declare-the-inputs",
      },
      {
        h: "本地测试",
        p: "",
        paras: [
          "在云基础设施之前先渲染一个真实载荷： `--strict-variables` 会拒绝未声明的键和类型错误的值。",
        ],
        codeBlocks: [
          {
            code: 'hyperframes render ./my-template \\\n  --variables \'{"title":"Hello Ada","accent":"#ff4d67"}\' \\\n  --strict-variables \\\n  --output renders/ada-preview.mp4',
            file: "bash",
          },
        ],
        id: "test-locally",
      },
      {
        h: "在 Lambda 上渲染单个版本",
        p: "",
        paras: ["不带 `--wait` 时，命令返回渲染 ID。用以下命令稍后查看："],
        codeBlocks: [
          {
            code: 'hyperframes lambda render ./my-template \\\n  --width 1920 \\\n  --height 1080 \\\n  --variables \'{"title":"Hello Ada","accent":"#ff4d67"}\' \\\n  --output-key renders/ada.mp4 \\\n  --wait',
            file: "bash",
          },
          {
            code: "hyperframes lambda progress <render-id>",
            file: "bash",
          },
        ],
        id: "render-one-version-on-lambda",
      },
      {
        h: "复用项目上传",
        p: "",
        paras: [
          "`lambda render` 可在每次调用时上传项目。对于重复渲染，创建一次内容寻址站点： 在后续渲染中传入返回的 ID： 不变的项目保持相同的站点 ID，并跳过另一次 S3 上传。",
        ],
        codeBlocks: [
          {
            code: "hyperframes lambda sites create ./my-template",
            file: "bash",
          },
          {
            code: 'hyperframes lambda render ./my-template \\\n  --site-id <site-id> \\\n  --width 1920 \\\n  --height 1080 \\\n  --variables \'{"title":"Hello Lin"}\'',
            file: "bash",
          },
        ],
        id: "reuse-the-project-upload",
      },
      {
        h: "批量渲染",
        p: "",
        paras: [
          "每行创建一个 JSON 对象。`outputKey` 必需；`variables` 和 `executionName` 可选。",
          "启动批量任务： 该命令上传一次项目，并为每行输入返回一行 manifest。单行启动失败不会丢弃其他已启动的渲染。",
          "在不启动 AWS 执行的情况下校验文件：",
        ],
        codeBlocks: [
          {
            code: '{"outputKey":"renders/ada.mp4","variables":{"title":"Hello Ada","accent":"#ff4d67"}}\n{"outputKey":"renders/lin.mp4","variables":{"title":"Hello Lin","accent":"#36b37e"}}',
            file: "jsonl",
          },
          {
            code: "hyperframes lambda render-batch ./my-template \\\n  --batch ./recipients.jsonl \\\n  --width 1920 \\\n  --height 1080 \\\n  --max-concurrent 10",
            file: "bash",
          },
          {
            code: "hyperframes lambda render-batch ./my-template \\\n  --batch ./recipients.jsonl \\\n  --width 1920 \\\n  --height 1080 \\\n  --strict-variables \\\n  --dry-run \\\n  --json",
            file: "bash",
          },
        ],
        id: "render-a-batch",
      },
      {
        h: "保持变量精简",
        p: "",
        paras: [
          "完整的 Step Functions Standard 执行输入限制为 256 KiB。HyperFrames 在启动执行前会检查这一点。",
          "变量只用于 JSON 数据。图片、音频和视频请单独存储，传递其 URL 而非 base64 内容。",
        ],
        codeBlocks: [
          {
            code: '{\n  "title": "Hello Ada",\n  "avatarUrl": "https://cdn.example.com/avatars/ada.png"\n}',
            file: "json",
          },
        ],
        id: "keep-variables-small",
      },
      {
        h: "从 Remotion Lambda inputProps 迁移",
        p: "",
        paras: [
          "HyperFrames 变量承担了 Remotion Lambda 渲染中 `inputProps` 的角色：",
          '| Remotion 模式 | HyperFrames 等价物 |\n| - | - |\n| `defaultProps` | `data-composition-variables` 中的 `default` 值 |\n| `inputProps` | `--variables` 或 SDK 渲染配置的 `variables` |\n| `props.title` | `data-var-text="title"`、CSS 变量或 `getVariables().title` |\n| `renderMediaOnLambda()` | `renderToLambda()` |',
          "在合成中声明允许的值，只传递每次渲染的数据，大媒体放在执行载荷之外。在迁移期间使用 `--strict-variables`，使旧的或拼写错误的输入在渲染开始前失败。",
        ],
        codeBlocks: [],
        id: "migrating-from-remotion-lambda-inputprops",
      },
      {
        h: "控制并发",
        p: "",
        paras: [
          "三项设置控制不同层面：",
          "| 设置 | 控制内容 |\n| - | - |\n| `lambda deploy --concurrency` | 已部署 Lambda 函数的最大并发调用数 |\n| `lambda render --max-parallel-chunks` | 单次渲染使用的最大分片工作进程数 |\n| `lambda render-batch --max-concurrent` | 批量命令并发启动的最大渲染执行数 |",
          "先保守启动，在增大它们之前先测量真实合成。",
        ],
        codeBlocks: [],
        id: "control-concurrency",
      },
      {
        h: "使用 SDK",
        p: "",
        paras: [
          "对于后端服务，`@hyperframes/aws-lambda/sdk` 暴露 `deploySite`、`renderToLambda` 和 `getRenderProgress`。当前类型和可运行示例见[AWS 包参考](https://hyperframes.heygen.com/packages/aws-lambda.md)。",
        ],
        codeBlocks: [],
        id: "use-the-sdk",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)",
          "[品牌、模板与故事板](https://hyperframes.heygen.com/prompting/design-systems.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "deploy-migrating": {
    lede: "如果你已经在用另一个框架通过一个命令部署无服务器视频渲染器，肌肉记忆可以平滑迁移：一条 `deploy` 命令即可配置整套堆栈，一条 `render` 命令即可启动一次渲染，一条 `progress` 命令即可轮询进度，一条 `destroy` 命令即可拆除堆栈。本页将你现有概念映射到 HyperFrames 的对应实现，让你把迁移精力花在真正不同的部分，而不是重新学习工作流。",
    sections: [
      {
        h: "概念映射",
        p: "",
        paras: [
          "| 在你当前框架中称为…… | 在 HyperFrames 中称为…… | 说明 |\n| - | - | - |\n| 单次部署命令 | `hyperframes lambda deploy` | 构建 `packages/aws-lambda/dist/handler.zip` 并运行 `sam deploy`。幂等。 |\n| 单次站点上传 | `hyperframes lambda sites create ./project` | 内容寻址文件清单；存储桶共享存储中已存在的文件会被跳过。 |\n| 触发一次渲染 | `hyperframes lambda render ./project --width 1920 --height 1080` | 立即返回 `renderId`；加 `--wait` 可流式输出逐块进度。 |\n| 轮询渲染进度 | `hyperframes lambda progress <renderId>` | 同一响应中包含累计成本。 |\n| 拆除 | `hyperframes lambda destroy` | S3 存储桶为 `Retain`——详见部署指南。 |\n| 打印/校验 IAM 策略 | `hyperframes lambda policies user`/`role`/`validate` | 将 `validate` 接入 CI，在下次部署失败前发现策略漂移。 |",
        ],
        codeBlocks: [],
        id: "concept-mapping",
      },
      {
        h: "合成格式",
        p: "",
        paras: [
          "如果你的当前框架是 **基于 React 的**，你编写 JSX 组件，将其注册到 `Composition` 中，由渲染器在渲染时编译。",
          "在 HyperFrames 中，**合成是纯 HTML 文件**。合成元素声明其 ID 和画布，而剪辑各自声明其时间。没有 JSX 编译步骤。",
          "对于框架无关的动画，HyperFrames 提供 GSAP、Anime.js、CSS 关键帧、Lottie、Three.js 和 Web Animations API 的第一方适配器——详见 [Concepts](https://hyperframes.heygen.com/concepts.md) 及各技能文档。",
        ],
        codeBlocks: [
          {
            code: '<!doctype html>\n<html lang="en">\n  <body>\n    <div\n      id="stage"\n      data-composition-id="intro"\n      data-start="0"\n      data-width="1920"\n      data-height="1080"\n      data-duration="10"\n      data-fps="30"\n      data-no-timeline\n    >\n      <h1 id="title" class="clip" data-start="0" data-duration="10" data-track-index="0">Hello</h1>\n    </div>\n  </body>\n</html>',
            file: "html",
          },
        ],
        id: "composition-format",
      },
      {
        h: "渲染配置",
        p: "",
        paras: [
          "多数采用者的渲染配置可以直接对应：",
          "| 概念 | HyperFrames 对应项 | 位置 |\n| - | - | - |\n| `fps` | `--fps=30`（CLI）或 `config.fps`（SDK） | 仅支持 24、25、30、60——非整数 NTSC 有理数仅限进程内使用。 |\n| `width` / `height` | `--width` / `--height` 标志，或 `config.width` / `config.height` | 偶数整数 ≤ 7680（yuv420p 对齐要求）。 |\n| `codec: 'h264' / 'h265'` | `--codec=h264` 或 `--codec=h265`（仅 mp4） | h265 使用 libx265 并带 closed-GOP keyint 参数，使分块 concat-copy 可无损往返。 |\n| 输出格式 | `--format=mp4 / mov / webm / png-sequence` | webm 使用 libvpx-vp9 + closed-GOP concat-copy。分布式模式仍会在计划阶段拒绝 HDR mp4。 |\n| 质量预设 | `--quality=draft / standard / high` | 映射到 ffmpeg 编码器预设。 |\n| 块大小（帧） | `--chunk-size=240`（默认：自动） | 默认每个块大小为在 Lambda 超时内完成并留有余量；无法在超时内完成的渲染会在计划阶段以 `CHUNK_EXCEEDS_WORKER_TIMEOUT` 失败。 |\n| 最大并行块数 | `--max-parallel-chunks=16`（默认：自动） | 默认按一次部署的 `--concurrency`（或账户未预留并发的 90%）做一波并行；当某块会超过 Lambda 超时时会拓宽。 |\n| 单块帧数上限 | `--target-chunk-frames=N`（可选） | 限制每块帧数，使单块在长视频上不超过 Lambda 的 15 分钟上限：规划器会增加块数（上限 `--max-parallel-chunks`），使每块帧数 ≤ `N`，短视频仍可收拢为更少块数。这是上限而非固定大小；在设置 `--chunk-size` 时忽略。 |\n| 比特率 / CRF | SDK 中的 `config.bitrate` 或 `config.crf` | 互斥；当前 Lambda CLI 不暴露这两个字段。 |",
        ],
        codeBlocks: [],
        id: "render-config",
      },
      {
        h: "变量（inputProps）",
        p: "",
        paras: [
          "渲染时载荷——某些框架中的 `inputProps`、HyperFrames 中的 `variables`——是同构的。在合成的根 `[data-composition-id]` 元素上通过 `data-composition-variables` 声明变量的形状，然后本地用 `hyperframes render --variables '{...}'`、Lambda 侧用 `hyperframes lambda render --variables` 传入每次渲染的值。Lambda 执行输入上限 256 KiB，因此大型素材请用 URL 引用，而非内嵌 base64 数据。",
          "完整映射——`defaultProps` → 声明、`useCurrentFrame()` + `props.<x>` → `__hyperframes.getVariables().<x>`、`renderMediaOnLambda({ inputProps })` → `renderToLambda({ config: { variables } })`——见 [Templates on Lambda](https://hyperframes.heygen.com/deploy/templates-on-lambda.md#migrating-from-remotion-lambda-inputprops)。",
        ],
        codeBlocks: [],
        id: "variables-inputprops",
      },
      {
        h: "HyperFrames 的不同之处",
        p: "",
        paras: ["有几处契约是有意区别于同类框架的。请提前了解，避免迁移中途在部署时才意外发现。"],
        codeBlocks: [],
        id: "what-hyperframes-does-differently",
      },
      {
        h: "强制要求确定性 Chrome 路径",
        p: "",
        paras: [
          'HyperFrames 在分布式模式下拒绝 `data-gpu-mode="hardware"`——硬件 GL 在块边界间是非确定的，而逐块 concat-copy 假定字节级可复现。在进程内选择硬件 GL 的合成，在 Lambda 渲染时必须去掉该选项。在计划阶段 Lambda handler 会触发类型化的 `BROWSER_GPU_NOT_SOFTWARE` 不可重试错误，很容易在进度输出中捕获。',
        ],
        codeBlocks: [],
        id: "deterministic-chrome-path-is-mandatory",
      },
      {
        h: "字体获取默认失败关闭",
        p: "",
        paras: [
          '分布式模式下 `failClosedFontFetch` 默认开启。合成引用了 HyperFrames 无法获取的 `font-family` 时，会在计划阶段失败（`FONT_FETCH_FAILED`），而非静默回退到操作系统默认字体。如果你目前依赖系统字体回退，请用 `<link rel="stylesheet">` 或 `@fontsource/*` 导入显式列出所需字体。',
        ],
        codeBlocks: [],
        id: "font-fetching-fails-closed",
      },
      {
        h: "不支持 HDR",
        p: "",
        paras: [
          "`hdrMode: 'force-hdr'` 会在计划阶段被拒绝。HDR 输出请使用 Lambda 之外的进程内渲染器。",
        ],
        codeBlocks: [],
        id: "hdr-is-not-supported",
      },
      {
        h: "webm 使用 closed-GOP VP9",
        p: "",
        paras: [
          "webm 分布式渲染走 libvpx-vp9，默认带 `-g <chunkSize>`、`-keyint_min <chunkSize>`、`-auto-alt-ref 0` 和 `-cpu-used 4`。其中禁用 alt-ref 是关键：libvpx-vp9 默认的非显示 alt-ref 帧可出现在 GOP 内任意位置，会在块接缝处破坏 concat-copy。closed-GOP 强制在每个块边界处用关键帧，使 `ffmpeg -f concat -c copy` 可无损往返。输出为 `yuva420p` 以保留 alpha 通道。音频以 Opus 复用。",
          "分布式 WebM 可能比同一合成单遍渲染更大，因为 closed-GOP 编码会产生更多关键帧。VP9 编码速度由 `PRODUCER_VP9_CPU_USED` 控制（`-8` 到 `8`）；质量敏感或长时长 WebM 用较低值，重视实际编码耗时时用较高值。请用真实合成基准测试本地与分布式渲染，再决定路径。",
        ],
        codeBlocks: [],
        id: "webm-uses-closed-gop-vp9",
      },
      {
        h: "状态文件默认在本地",
        p: "",
        paras: [
          "`hyperframes lambda deploy` 会写入 `<cwd>/.hyperframes/lambda-stack-<name>.json`，使后续命令不必重新推导存储桶 / 状态机 ARN。两个工作树会产生两个不同的状态文件。如果你需要在多台 CI worker 间共享默认位置，请 symlink 该目录，或在每次调用时显式传入 `--stack-name`。",
        ],
        codeBlocks: [],
        id: "state-files-are-local-by-default",
      },
      {
        h: "IAM 策略先打印再收窄",
        p: "",
        paras: [
          '`hyperframes lambda policies user/role` 输出的默认策略文档使用 `Resource: "*"`，因为 CloudFormation 堆栈会在每个采用者的首次部署时创建新 ARN。首次成功部署后，请将 `Resource` 收窄到已部署的 ARN——它们可从 CFN 输出预测。CI 用户通常将收窄后的策略签入源代码，并以 `hyperframes lambda policies validate ./infra/policy.json` 作为部署前门禁。',
        ],
        codeBlocks: [],
        id: "iam-policy-is-print-then-narrow",
      },
      {
        h: "迁移检查清单",
        id: "migration-checklist",
        p: "",
        paras: [],
        bullets: [
          "1. **盘点（Inventory）** 待迁移的合成。先筛除需要 HDR 的项目 —— 这些暂时保留在原有框架上；WebM 渲染可通过 closed-GOP VP9 + concat-copy 正常分布式完成（见上方 WebM 说明）。",
          "2. **转换（Translate）** 每个合成为纯 HTML。[核心概念](https://hyperframes.heygen.com/concepts/index.md) 页面介绍了 data 属性约定；运行 `npx hyperframes skills update` 安装技能后，Claude / Cursor / Codex 智能体也会自动掌握它们（入口为 `/hyperframes`，其中携带合成契约并指向 `references/format.md`）。",
          "3. **接入（Wire）** 构建管线，与旧流程并行验证。HyperFrames 无需外部打包器 —— 可以直接针对 HTML 运行 `npx hyperframes preview`。",
          "4. **演练部署（Deploy）** 到独立 AWS 账号或先使用 `--stack-name=hyperframes-staging`。带上 `--wait` 跑通一次真实渲染并核验输出文件。",
          "5. **纳入 CI 校验策略（Add the policy）**。运行 `hyperframes lambda policies user > infra/iam/hyperframes.json`，并在每次 PR 上用 `hyperframes lambda policies validate infra/iam/hyperframes.json` 校验。",
          "6. **平滑切换（Cut over）** 自动化流水线指向新渲染端点。保留旧部署观察一个发布周期确认滚动渲染稳定后，再执行 `hyperframes lambda destroy` 下线测试栈并退役旧系统。",
        ],
        codeBlocks: [],
      },
      {
        h: "非 Lambda 运行时",
        p: "",
        paras: [
          "如果你不想用 Lambda，相同的 `@hyperframes/producer/distributed` 原语可在任何有 Node + Chrome + ffmpeg + S3 的环境运行。参考 Dockerfile 位于 `examples/k8s-jobs/Dockerfile.example`，适用于运行在以下平台的采用者：",
          "请自行构建——我们不向 registry 发布 Docker 镜像。该 Dockerfile 有内联文档，内置 Node 22 + chrome-headless-shell + ffmpeg + 你当前 checkout 版本的 producer。",
        ],
        codeBlocks: [],
        bullets: [
          "Google Cloud Run Jobs",
          "Azure Container Apps Jobs",
          "AWS ECS Fargate",
          "Kubernetes Jobs / Argo Workflows",
          "大型 VM 上的普通 Docker",
        ],
        id: "non-lambda-runtimes",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题（FAQ）](https://hyperframes.heygen.com/faq.md)",
          "[参与贡献 HyperFrames](https://hyperframes.heygen.com/contributing.md)",
          "[HyperFrames vs Remotion](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-aws-lambda": {
    lede: "AWS Lambda 包在 AWS 上运行 HyperFrames 的分布式渲染原语。它提供 Lambda handler、Node 客户端 SDK，以及可选的 CDK 构造，用于在采用者的 AWS 账户内配置渲染堆栈。",
    sections: [
      {
        h: "何时使用",
        p: "",
        paras: [
          "**当你需要以下能力时，使用 `@hyperframes/aws-lambda`：** **当你想要以下能力时，使用其他包：** [!WARNING] 本包是 AWS 基础设施的部署胶水代码。它假定你掌控 AWS 账户、S3 存储桶、Step Functions 状态机和 Lambda 运行时配置。",
        ],
        codeBlocks: [],
        bullets: [
          "在 AWS Lambda 上渲染大型合成，而非单台本地机器",
          "通过 Step Functions 编排 `plan`、`renderChunk` 与 `assemble`",
          "将渲染输入、中间块和输出存储到 S3",
          "从 CI、后端服务或自定义 CLI 驱动渲染",
          "从 CDK 应用配置渲染拓扑",
          "本地渲染或在自己的 Node 进程内渲染——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
          "在 Google Cloud 上运行相同的分布式模型——使用 [gcp-cloud-run](https://hyperframes.heygen.com/packages/gcp-cloud-run.md)",
          "构建或编辑合成 HTML——使用 [studio](https://hyperframes.heygen.com/packages/studio.md)、[sdk](https://hyperframes.heygen.com/packages/sdk.md) 或 [core](https://hyperframes.heygen.com/packages/core.md)",
        ],
        id: "when-to-use",
      },
      {
        h: "包导出",
        p: "",
        paras: [
          "| Import | 说明 |\n| - | - |\n| `@hyperframes/aws-lambda` | Handler 类型、运行时 helper、S3 传输和客户端 SDK 导出 |\n| `@hyperframes/aws-lambda/handler` | 供 Step Functions 调度的 Lambda handler 入口点 |\n| `@hyperframes/aws-lambda/sdk` | 轻量 Node SDK，用于部署站点、启动渲染、轮询进度和估算成本 |\n| `@hyperframes/aws-lambda/cdk` | 可选的 CDK 构造，用于配置渲染存储桶、Lambda 和 Step Functions 堆栈 |",
          "`aws-cdk-lib` 和 `constructs` 是可选 peer 依赖。仅使用 SDK 的消费者无需它们，除非从 `@hyperframes/aws-lambda/cdk` 导入。",
        ],
        codeBlocks: [],
        id: "package-exports",
      },
      {
        h: "架构",
        p: "",
        paras: [
          "Lambda 适配器将分布式 producer 原语封装在一个调度边界之后： **1. Plan（计划）** 从 S3 获取项目输入，探测合成，准备音频，并发布计划工件。Plan v2 将符合条件的恒定帧率 SDR 视频抽帧推迟到分块 worker；可变帧率素材和所需的 HDR 色彩转换仍在计划阶段运行。",
          "**2. Render chunks（渲染分块）** Step Functions 扇出分块任务。每次 Lambda 调用下载所需的素材，抽取其推迟的视频帧，渲染一个分块，并上传结果。",
          "**3. Assemble（组装）** 下载所有渲染分块和音频素材，组装最终输出，并将成品文件写入 S3。",
          "三个阶段都必须在配置的单次 Lambda 调用超时（最多 15 分钟）和函数临时存储内完成。较小的块可减少每个 worker 的抽帧和渲染工作量，但不能拆分仍在 Plan 中发生的视频抽帧。FFmpeg 帧停滞超时以及无法在上限内完成的任务如何拆分，见 [long-video planning limits](https://hyperframes.heygen.com/deploy/aws-lambda.md#long-video-planning-times-out)。",
          "Handler 默认使用 `@sparticuz/chromium`，并在需要时提供构建期回退，直接打包 `chrome-headless-shell`。",
        ],
        codeBlocks: [],
        id: "architecture",
      },
      {
        h: "页面网络限制",
        p: "",
        paras: [
          "Handler 在函数未已设置时默认设置 `PRODUCER_RESTRICT_PAGE_NETWORK=true`，使渲染页面只能访问其自己的项目文件和公开互联网地址。页面加载的任何内容中，回环、内网、链路本地和 IPv6 地址都会被拒绝。仅存在于 VPC 主机或私有 DNS 之后的素材不会出现在视频中。",
          "渲染你未编写的合成时请保持开启。要关闭，请在函数环境中设置 `PRODUCER_RESTRICT_PAGE_NETWORK=false`。只有 `false`、`0`、`no` 或 `off` 能关闭。其他任何值都会保持开启，handler 不识别的值会记录警告。",
        ],
        codeBlocks: [],
        id: "page-network-restriction",
      },
      {
        h: "使用 SDK",
        p: "",
        paras: [
          "部署 AWS 资源后，在 Node 中使用 SDK： Plan v2 是唯一支持的分布式计划传输。Worker 获取清单选定的内容寻址工件，SDK 发送显式 v2，无需协议选项。",
          "[!WARNING] 对于已有安装，请暂停新渲染并排空活跃的 Step Functions 执行。先从同一包版本重新部署 Lambda handler 和 SAM/CDK 状态机，再升级应用 SDK。旧基础设施可能缺少仅限 Plan v2 的请求和定位符契约。",
          "`renderToLambda()` 会在启动 Step Functions 执行前校验分布式渲染配置，因此无效的尺寸、格式、块大小或载荷大小会同步失败。",
        ],
        codeBlocks: [
          {
            code: 'import { deploySite, getRenderProgress, renderToLambda } from "@hyperframes/aws-lambda/sdk";\n\nconst site = await deploySite({\n  projectDir: "./my-composition",\n  bucketName: "hyperframes-render-bucket",\n});\n\nconst handle = await renderToLambda({\n  siteHandle: site,\n  bucketName: site.bucketName,\n  stateMachineArn: "arn:aws:states:us-east-1:123456789012:stateMachine:hyperframes-render",\n  config: {\n    fps: 30,\n    width: 1920,\n    height: 1080,\n    format: "mp4",\n    chunkSize: 240,\n    maxParallelChunks: 16,\n    runtimeCap: "lambda",\n  },\n});\n\nconst progress = await getRenderProgress({ executionArn: handle.executionArn });\nconsole.log(progress.status, progress.overallProgress, progress.costs.displayCost);',
            file: "ts",
          },
        ],
        id: "using-the-sdk",
      },
      {
        h: "使用 CDK 构造",
        p: "",
        paras: [],
        codeBlocks: [
          {
            code: 'import { App, Stack } from "aws-cdk-lib";\nimport { HyperframesRenderStack } from "@hyperframes/aws-lambda/cdk";\n\nconst app = new App();\nconst stack = new Stack(app, "VideoRender");\n\nconst render = new HyperframesRenderStack(stack, "HyperframesRender", {\n  // reservedConcurrency: 8,\n  // lambdaMemoryMb: 10240,\n  // chromeSource: "sparticuz",\n});\n\nconsole.log(render.bucket.bucketName, render.stateMachine.stateMachineArn);',
            file: "ts",
          },
        ],
        id: "using-the-cdk-construct",
      },
      {
        h: "构建 Handler ZIP",
        p: "",
        paras: [
          "从 monorepo： 构建会将 Chromium、Puppeteer、FFmpeg 和 handler 打包到 `packages/aws-lambda/dist/handler.zip`。大小校验器保证解压后工件不超过 Lambda 的部署上限。",
        ],
        codeBlocks: [
          {
            code: "bun install\nbun run --cwd packages/aws-lambda build:zip\nbun run --cwd packages/aws-lambda verify:zip-size",
            file: "bash",
          },
        ],
        id: "building-the-handler-zip",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [AWS Lambda 部署](https://hyperframes.heygen.com/deploy/aws-lambda.md) 端到端部署细节和运维说明。",
          "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) Lambda handler 执行的分布式原语。",
        ],
        codeBlocks: [],
        bullets: [
          "[AWS Lambda](https://hyperframes.heygen.com/deploy/aws-lambda.md)",
          "[在 Lambda 上渲染模板](https://hyperframes.heygen.com/deploy/templates-on-lambda.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "pkg-gcp": {
    lede: "GCP Cloud Run 包在 Google Cloud 上运行 HyperFrames 的分布式渲染原语。它提供 Cloud Run HTTP 服务、Node 客户端 SDK，以及用于配置存储桶、服务、工作流和服务账户的 Terraform 模块。",
    sections: [
      {
        h: "何时使用",
        p: "",
        paras: [
          "**当你需要以下能力时，使用 `@hyperframes/gcp-cloud-run`：** **当你想要以下能力时，使用其他包：** [!TIP] Cloud Run 使用容器镜像，因此没有 Lambda ZIP 大小压力，并且可安装与标准渲染器相同的固定 `chrome-headless-shell` 运行时。",
        ],
        codeBlocks: [],
        bullets: [
          "在 Google Cloud 基础设施上渲染大型合成",
          "通过 Cloud Workflows 编排 `plan`、`renderChunk` 与 `assemble`",
          "将项目归档、分块输出和最终视频存储到 GCS",
          "将渲染器作为 Cloud Run 服务部署，运行时固定 Chrome 版本",
          "从 CI、后端服务或自定义内部工具驱动渲染",
          "本地渲染或在单个 Node 进程内渲染——使用 [CLI](https://hyperframes.heygen.com/packages/cli.md) 或 [producer](https://hyperframes.heygen.com/packages/producer.md)",
          "在 AWS 上运行相同的分布式模型——使用 [aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)",
          "构建或编辑合成 HTML——使用 [studio](https://hyperframes.heygen.com/packages/studio.md)、[sdk](https://hyperframes.heygen.com/packages/sdk.md) 或 [core](https://hyperframes.heygen.com/packages/core.md)",
        ],
        id: "when-to-use",
      },
      {
        h: "包导出",
        p: "",
        paras: [
          "| Import | 说明 |\n| - | - |\n| `@hyperframes/gcp-cloud-run` | 服务端 handler、事件类型、GCS 传输和客户端 SDK 导出 |\n| `@hyperframes/gcp-cloud-run/server` | Cloud Run HTTP 服务入口点 |\n| `@hyperframes/gcp-cloud-run/sdk` | 轻量 Node SDK，用于部署站点、启动渲染、轮询进度和估算成本 |",
          "已发布包还包含 `terraform/` 目录和用于部署的 `Dockerfile`。",
        ],
        codeBlocks: [],
        id: "package-exports",
      },
      {
        h: "架构",
        p: "",
        paras: [
          "Cloud Workflows 以不同的 `Action` 值调用同一个 Cloud Run 服务： **1. Plan（计划）** 从 GCS 下载项目归档，运行 producer 规划器，并上传计划目录。",
          "**2. Render chunks（渲染分块）** Cloud Workflows 并行调用针对 Cloud Run 服务的 `renderChunk`。每次请求渲染一个分块，并上传到 GCS。",
          "**3. Assemble（组装）** 下载所有分块和音频素材，组装交付物，并上传最终文件。",
          "该服务刻意贴近 AWS Lambda 适配器：围绕相同的 `@hyperframes/producer/distributed` 原语做一层薄云传输。",
        ],
        codeBlocks: [],
        id: "architecture",
      },
      {
        h: "部署",
        p: "",
        paras: [
          "构建并推送容器，然后应用 Terraform 模块： Terraform 会输出 SDK 所需的存储桶名称、服务 URL、工作流名称和区域。",
        ],
        codeBlocks: [
          {
            code: "gcloud builds submit . \\\n  --tag REGION-docker.pkg.dev/PROJECT/REPO/hyperframes-render:TAG\n\nterraform -chdir=node_modules/@hyperframes/gcp-cloud-run/terraform init\nterraform -chdir=node_modules/@hyperframes/gcp-cloud-run/terraform apply \\\n  -var project_id=PROJECT \\\n  -var region=us-central1 \\\n  -var image=REGION-docker.pkg.dev/PROJECT/REPO/hyperframes-render:TAG",
            file: "bash",
          },
        ],
        id: "deploying",
      },
      {
        h: "页面网络限制",
        p: "",
        paras: [
          "该服务设置 `PRODUCER_RESTRICT_PAGE_NETWORK=true`，使渲染页面只能访问其自己的项目文件和公开互联网地址。页面加载的任何内容中，回环、内网、链路本地和 IPv6 地址都会被拒绝。仅存在于 VPC 主机或私有 DNS 之后的素材不会出现在视频中。ffmpeg 的 https 输入只能打开 https，因此 https 源重定向到 http，或加密 HLS，都不会加载。",
          "渲染你未编写的合成时请保持开启。要关闭，请应用模块时带 `-var restrict_page_network=false`，或在运行 `hyperframes cloudrun deploy` 前设置 `TF_VAR_restrict_page_network=false`。",
        ],
        codeBlocks: [],
        id: "page-network-restriction",
      },
      {
        h: "使用 SDK",
        p: "",
        paras: [
          "Plan v2 是唯一支持的分布式计划传输。Worker 获取清单选定的内容寻址工件，SDK 发送显式 v2，无需协议选项。",
          "[!WARNING] 对于已有安装，请暂停新渲染并排空活跃的工作流执行。先从同一包版本重新部署 Cloud Run 镜像和 Cloud Workflows 定义，再升级应用 SDK。旧工作流可能缺少仅限 Plan v2 的请求和定位符契约。",
          "单次上传时传 `projectDir`，或单独调用 `deploySite()` 并在多次渲染间复用返回的站点句柄。",
        ],
        codeBlocks: [
          {
            code: 'import { getRenderProgress, renderToCloudRun } from "@hyperframes/gcp-cloud-run/sdk";\n\nconst handle = await renderToCloudRun({\n  projectDir: "./my-composition",\n  config: { fps: 30, width: 1920, height: 1080, format: "mp4" },\n  bucketName: "hyperframes-render-my-project",\n  projectId: "my-project",\n  location: "us-central1",\n  workflowId: "hyperframes-render",\n  serviceUrl: "https://hyperframes-render-abc.us-central1.run.app",\n});\n\nlet progress = await getRenderProgress({ executionName: handle.executionName });\nwhile (progress.status === "running") {\n  await new Promise((resolve) => setTimeout(resolve, 5000));\n  progress = await getRenderProgress({ executionName: handle.executionName });\n}\n\nconsole.log(progress.status, progress.outputFile, progress.costs.displayCost);',
            file: "ts",
          },
        ],
        id: "using-the-sdk",
      },
      {
        h: "相关主题",
        p: "",
        paras: [
          "[card] [Google Cloud Run 部署](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md) 端到端部署细节和冒烟测试说明。",
          "[card] [@hyperframes/producer](https://hyperframes.heygen.com/packages/producer.md) Cloud Run 服务执行的分布式原语。",
        ],
        codeBlocks: [],
        bullets: [
          "[Google Cloud Run](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-4k": {
    lede: "以 4K（3840×2160）分辨率渲染 HyperFrames 视频：既可直接按 4K 画布从头创作，也可在渲染时将现有合成超采样至 4K。",
    sections: [
      {
        h: "将现有项目渲染为 4K",
        p: "",
        paras: [
          "HyperFrames 保持合成的布局不变，以更高的设备像素比捕获。1920×1080 的合成会成为 3840×2160 的文件。",
          "竖版或正方形创作使用对应的预设：",
          "| 预设 | 输出分辨率 |\n| - | - |\n| `4k` 或 `landscape-4k` | 3840×2160 |\n| `portrait-4k` | 2160×3840 |\n| `square-4k` | 2160×2160 |",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --resolution 4k --output final-4k.mp4",
            file: "bash",
          },
        ],
        id: "render-an-existing-project-in-4k",
      },
      {
        h: "从一开始按 4K 编写项目",
        p: "",
        paras: [
          "如果项目从一开始就应使用 4K 画布： 当画布或 WebGL 代码、固定分辨率媒体、或布局决策需要在创作时就知道最终像素尺寸时，选择这种方式。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes init my-video --resolution 4k",
            file: "bash",
          },
        ],
        id: "author-a-project-at-4k",
      },
      {
        h: "哪些内容会更清晰",
        p: "",
        paras: [
          "| 内容 | 超采样结果 |\n| - | - |\n| HTML 文本、SVG、CSS 形状、渐变 | 以 4K 重新栅格化 |\n| 高分辨率图片 | 使用其可用的源细节 |\n| 1080p 图片和视频 | 放大；无新增源细节 |\n| `<canvas>` 与 WebGL | 受画布自身尺寸限制 |",
          "要得到完全清晰的 4K 结果，请使用 4K 源媒体，并按目标分辨率确定 canvas/WebGL 缓冲区大小。",
        ],
        codeBlocks: [],
        id: "what-gets-sharper",
      },
      {
        h: "约束",
        p: "",
        paras: [
          "`--resolution` 仅在以下条件成立时有效： HyperFrames 会在打开浏览器前检查这些条件。组合不受支持时，请按合成原生尺寸渲染，再单独缩放。",
        ],
        codeBlocks: [],
        bullets: [
          "预设与合成宽高比相同；",
          "目标是编写尺寸的整数倍；",
          "目标不小于合成尺寸；",
          "输出为 MP4 而非带 alpha 格式；",
          "同一渲染未强制 HDR。",
        ],
        id: "constraints",
      },
      {
        h: "校验文件",
        p: "",
        paras: [
          "横版 4K 的输出应报告 `3840` × `2160`。",
          "4K 捕获的像素数是 1080p 的四倍，请预期渲染耗时、内存占用和输出数据都会增加。先用 `--quality draft` 评审，再用所需质量渲染正式版。",
        ],
        codeBlocks: [
          {
            code: "ffprobe -v error -select_streams v:0 \\\n  -show_entries stream=width,height final-4k.mp4",
            file: "bash",
          },
        ],
        id: "verify-the-file",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[云端渲染（Cloud）](https://hyperframes.heygen.com/deploy/cloud.md)",
          "[使用命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)",
          "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-hdr": {
    lede: "HyperFrames 在渲染时会检测 HDR 媒体。当 MP4 项目包含 BT.2020 PQ 或 HLG 源时，输出使用 10-bit H.265 并保留 HDR 信号。没有 HDR 媒体的项目保持 SDR。",
    sections: [
      {
        h: "渲染并校验",
        p: "",
        paras: ["检查结果： PQ 输出应报告等同于以下的值： HLG 传输报告 `arib-std-b67`。"],
        codeBlocks: [
          {
            code: "npx hyperframes render --output final-hdr.mp4",
            file: "bash",
          },
          {
            code: "ffprobe -v error -select_streams v:0 -show_entries \\\n  stream=codec_name,pix_fmt,color_space,color_primaries,color_transfer \\\n  final-hdr.mp4",
            file: "bash",
          },
          {
            code: "codec_name=hevc\npix_fmt=yuv420p10le\ncolor_space=bt2020nc\ncolor_primaries=bt2020\ncolor_transfer=smpte2084",
            file: "text",
          },
        ],
        id: "render-and-verify",
      },
      {
        h: "控制检测",
        p: "",
        paras: [
          "| 命令 | 何时使用 |\n| - | - |\n| `hyperframes render` | 让源元数据决定 HDR 还是 SDR |\n| `hyperframes render --hdr` | 强制 HDR；未检测到 HDR 媒体时，HyperFrames 使用 HLG 并发出警告 |\n| `hyperframes render --sdr` | 即使项目包含 HDR 媒体也交付 SDR 版本 |",
          "源文件必须包含正确的色彩元数据。HyperFrames 可识别标记为 BT.2020 且为 PQ（`smpte2084`）或 HLG（`arib-std-b67`）的视频。它还能通过原生 HDR 图片路径保留受支持的 HDR 静帧。",
        ],
        codeBlocks: [],
        id: "control-detection",
      },
      {
        h: "混合合成",
        p: "",
        paras: [
          "你可以在 HDR 视频之上叠加 HTML 文本、CSS 图形和 SDR 媒体。HyperFrames 将原生 HDR 图层放在常规浏览器截图之外，将 SDR DOM 图层转换为 HDR 色彩空间，再在编码前合成结果。",
          "因此下三分之一字幕或动态界面可以在 HDR 源上保持视觉一致，而不必把整个项目强制走 SDR 截图。",
        ],
        codeBlocks: [],
        id: "mixed-compositions",
      },
      {
        h: "限制",
        p: "",
        paras: [
          "如果文件看起来像 SDR，请先对源和输出都运行 `ffprobe`，再改合成。缺失或错误的源元数据是最常见原因。",
        ],
        codeBlocks: [],
        bullets: [
          "HDR 输出仅限 MP4。MOV、WebM、GIF、PNG 序列和带 alpha 的输出回退到 SDR。",
          "HDR 和 `--resolution` 超采样不能在同一渲染中组合。请按目标尺寸编写，或在单独步骤中缩放。",
          "分布式 AWS Lambda 和 Cloud Run 渲染目前为 SDR。",
          "硬件 H.265 编码会携带色彩标签，但不包含与软件 `libx265` 路径相同的静态 mastered 元数据。HDR10 交付请使用软件编码。",
          "浏览器播放取决于宿主浏览器、显示器和操作系统；`<hyperframes-player>` 不提供自己的 HDR 播放流水线。",
        ],
        id: "limits",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[渲染并导出 MP4](https://hyperframes.heygen.com/guides/export-and-share.md)",
          "[HyperFrames 常见问题（FAQ）](https://hyperframes.heygen.com/faq.md)",
          "[使用命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-performance": {
    lede: "成品渲染可以很流畅，即使预览卡顿。预览必须实时绘制每一帧；渲染可以花任何时间捕获同一帧。",
    sections: [
      {
        h: "从症状出发",
        p: "",
        paras: [
          "| 你看到的现象 | 先检查 |\n| - | - |\n| 预览在某个场景卡顿 | 该场景中有大面积模糊、遮罩、阴影或大量动态图层 |\n| 图像首次出现时预览暂停 | 源图过大或图像解码 |\n| 整个页面都变慢 | 脚本开销、布局抖动或 DOM 节点过多 |\n| 渲染慢但结果正确 | 源视频抽帧、帧捕获或编码 |\n| WebM 比 MP4 慢得多 | VP9 编码；透明 WebM 对 CPU 要求高 |",
        ],
        codeBlocks: [],
        id: "start-with-the-symptom",
      },
      {
        h: "减少昂贵的浏览器开销",
        p: "",
        paras: [
          "对于 1920×1080 的合成，3840×2160 源已为 2× 显示提供足够细节。更大的源通常只增加内存和解码开销，不改善画面。",
        ],
        codeBlocks: [],
        bullets: [
          "减少大面积的 `backdrop-filter` 和 `filter: blur()` 图层。",
          "避免同时动画数十个带阴影的元素。",
          "用预渲染图片替代静态模糊或纹理叠加层。",
          "按实际交付尺寸调整图片大小。过大的 JPEG 仍会解码成很大的位图。",
          "让动画回调中的工作保持小。不要在同一帧中反复读布局、写样式。",
        ],
        id: "reduce-expensive-browser-work",
      },
      {
        h: "实测而非猜测",
        p: "",
        paras: ["一次只改一个昂贵功能，重新录制，保留能移动瓶颈的版本。"],
        codeBlocks: [],
        bullets: [
          "运行 `npx hyperframes preview`。",
          "打开 Chrome DevTools 并选择 **Performance**。",
          "录制卡顿的部分。",
          "检查最长任务：",
          "**Paint** 或 **Composite Layers** 指向滤镜、阴影、遮罩或大图层。",
          "**Layout** 或 **Recalculate Style** 指向布局开销。",
          "**Script** 指向作者代码。",
        ],
        id: "measure-instead-of-guessing",
      },
      {
        h: "做一次快速评审渲染",
        p: "",
        paras: [
          "如果合成本来就不适合实时播放，请评审编码后的文件： 交付时用 `standard` 或 `high`。Draft 只影响捕获和编码质量，不改变合成的时间。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --quality draft --output review.mp4",
            file: "bash",
          },
        ],
        id: "make-a-fast-review-render",
      },
      {
        h: "仅在需要时调优透明 WebM",
        p: "",
        paras: [
          "WebM 使用 CPU 密集型 VP9 编码器。默认值适合大多数工作。要用更长的编码时间换取压缩质量： `--vp9-cpu-used` 接受 `-8` 到 `8` 的整数；数值越高越快，质量/体积权衡越大。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --format webm --vp9-cpu-used 2 --output overlay.webm",
            file: "bash",
          },
        ],
        id: "tune-transparent-webm-only-when-needed",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题（FAQ）](https://hyperframes.heygen.com/faq.md)",
          "[使用命令行渲染](https://hyperframes.heygen.com/guides/rendering.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
