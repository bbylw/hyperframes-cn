import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "guide-auth": {
    lede: "你可以在无账号的情况下本地创建与渲染。无提供方密钥时，语音与音乐可退回本地引擎。想玩 HeyGen 语音与音乐、托管云渲染、托管 MCP，或拥有将来可更新的已发布项目时，再登录。",
    sections: [
      {
        h: "登录",
        p: "",
        paras: [
          "登录与注册是相同的 OAuth 步骤——新用户会落到注册界面。",
          "**1. 登录** 默认流程会打开浏览器进行 OAuth，并在本地回环端口捕获 token： CI 或无头机器改用长期有效 API 密钥： **2. 确认已配置** 显示当前凭据的来源与已验证身份；登录状态之外，还会显示语音与音乐将使用的本地引擎。脚本中加 `--json` 可得 `{ configured, recommended_action, offline_engines }`。",
          "HyperFrames 使用自己的公共 OAuth 客户端，并将凭据保存在 `~/.hyperframes/credentials`（权限 `0600`）。从共享 HeyGen 登录升级后请重新登录。独立的 [`heygen` CLI](https://github.com/heygen-com/heygen-cli) 在 `~/.heygen` 中保留自己的登录；HyperFrames 不会移动或删除它。已登录的 HyperFrames 会话优先于环境中的 `HEYGEN_API_KEY`。环境密钥只在无登录会话、HeyGen 拒绝刷新会话，或宿主应用经自有网关路由调用时使用。过期会话永远不会改选已保存的 API 密钥。从环境或 `auth login --api-key` 来的 API 密钥，选择 API 密钥计费。",
          "`auth status` 会验证身份。对专用 HyperFrames OAuth 登录，它会报告计费产品，但 HyperFrames 余额在此不可用：`/v3/users/me` 返回的是通用 HeyGen 账户计费字段。这些原始字段保留在 JSON 中，不会呈现为 HyperFrames 余额。宿主注入或自定义客户端 OAuth 报告为未验证计费产品。",
          "[!TIP] 本地试用 HyperFrames 无需账号。无凭据时，语音可用 **Kokoro**，音乐可用 **MusicGen**——见[离线工作](#working-offline)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes auth login\n# ✓ Signed in.",
            file: "bash",
          },
          {
            code: 'npx hyperframes auth login --api-key            # hidden-input prompt\necho "$HEYGEN_API_KEY" | npx hyperframes auth login --api-key   # from stdin',
            file: "bash",
          },
          {
            code: "npx hyperframes auth status",
            file: "bash",
          },
        ],
        id: "sign-in",
      },
      {
        h: "HeyGen 凭据解析",
        p: "",
        paras: [
          "捆绑的音频脚本为托管 TTS 与音乐/音效检索使用 HeyGen 凭据。解析顺序先匹配先用： 就近的项目 `.env` 可提供密钥，但永不提供 `HEYGEN_API_BASE`。用 `HYPERFRAMES_CONFIG_DIR` 指向不同配置目录。脚本不能刷新会话；`hyperframes` CLI 自有命令遵循相同顺序，先刷新过期会话。见 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。当 `media-use` 调用独立的 `heygen` 可执行文件时，它提供只含所选访问 token 的隔离临时凭据。该辅助函数不能刷新 HyperFrames 授权，也不能拾取其他 HeyGen 登录。",
        ],
        codeBlocks: [],
        bullets: [
          "`HEYGEN_API_BASE` 加 `HEYGEN_API_KEY`——宿主应用自有网关，由启动工作流的应用设置",
          "`HEYGEN_ACCESS_TOKEN`——宿主应用注入的 OAuth token",
          "`hyperframes auth login` 保存在 `~/.hyperframes/credentials` 的会话，未过期时",
          "`HEYGEN_API_KEY`——环境变量",
          "`HYPERFRAMES_API_KEY`——别名，与其他工具对齐",
          "`hyperframes auth login --api-key` 保存在 `~/.hyperframes/credentials` 的 API 密钥",
        ],
        id: "how-the-heygen-credential-resolves",
      },
      {
        h: "代理工作流使用的提供方",
        p: "",
        paras: [
          "工作流登录预检之后，每种媒体能力按其顺序使用首个可用提供方。语音、音乐与音效有离线兜底；捕获描述可选，无受支持视觉密钥时跳过。",
          "| 能力 | 提供方顺序 | 密钥（最先命中生效） | 本地依赖 |\n| - | - | - | - |\n| **语音 (TTS)** | HeyGen → ElevenLabs → Kokoro | HeyGen 凭据（上）· 其次 `ELEVENLABS_API_KEY` | Kokoro：`pip install kokoro-onnx soundfile` |\n| **音乐 (BGM)** | HeyGen 库 → Lyria → MusicGen | HeyGen 凭据（上）· 其次 `GEMINI_API_KEY` → `GOOGLE_API_KEY` | MusicGen：`pip install transformers torch soundfile numpy` |\n| **音效** | HeyGen 库 → 捆绑库 | HeyGen 凭据（上） | 捆绑——无依赖 |\n| **捕获描述** | OpenRouter → Gemini | `OPENROUTER_API_KEY` → `GEMINI_API_KEY` | 无；可选，供[网站捕获](https://hyperframes.heygen.com/guides/product-launch-video.md) |",
          "运行 `npx hyperframes doctor` 检查本地依赖安装情况。媒体工作流会在生成前运行 `hyperframes auth status`，并告知将走哪条路径。",
          "Gemini 旁白请明确让代理用 Gemini TTS。共享音频工作流支持 3.8 Flash、Flash-Lite、3.1 Flash Preview、2.5 Pro 与 Flash Preview。Gemini 是明确选项；配置凭据不会改变上面的自动语音提供方顺序。",
          "选择一种身份验证方式： 凭据按该顺序解析：Gemini 密钥、Google 密钥、服务账号文件、JSON 环境变量。选服务账号 OAuth 时取消设置 API 密钥。辅助函数每次生成用 `generative-language.retriever` scope 取新 token。密钥与 token 永不放入合成或已保存音频元数据。",
          "两种方式都调用 Gemini Developer Interactions API。你的项目需要访问该 API 与请求模型。Cloud Text-to-Speech 与 Vertex AI 模型可用性不同。本辅助函数接受服务账号 JSON，不接受用户 ADC 文件或元数据服务器凭据。",
          "见 [Gemini 旁白](https://hyperframes.heygen.com/prompting/media-and-audio.md#gemini-voiceover)。",
          "[!NOTE] `npx hyperframes tts` 本身是本地 Kokoro CLI。托管 HeyGen、ElevenLabs 与 Gemini 语音由捆绑的媒体工作流辅助函数选择，而非该命令。",
        ],
        codeBlocks: [],
        bullets: [
          "**API 密钥：** 在环境或项目 `.env` 中设置 `GEMINI_API_KEY` 或 `GOOGLE_API_KEY`。此路径无需 Python 依赖。",
          "**服务账号：** 在 Python 3 环境装 `google-auth` 与 `requests`，将 `GOOGLE_APPLICATION_CREDENTIALS` 指向服务账号 JSON 文件绝对路径。也可经密钥管理器注入 `GCS_CREDS`。配额项目不同于服务账号项目时设置 `GOOGLE_CLOUD_PROJECT`。",
        ],
        id: "providers-used-by-agent-workflows",
      },
      {
        h: "离线工作",
        p: "",
        paras: [
          "无密钥配置是本地工作的正常状态。依赖与模型文件装好后，以下兜底在本地运行： 本地引擎在安装后不调用托管生成 API。首次使用可能下载模型文件。HeyGen 提供托管语音与成品音乐库；想用这些服务或云渲染时再登录。",
        ],
        codeBlocks: [],
        bullets: [
          "**语音**——Kokoro-82M（54 语音），用 Whisper 做词级字幕对齐。",
          "**音乐**——MusicGen（`facebook/musicgen-small`）。",
          "**音效**——捆绑库。",
        ],
        id: "working-offline",
      },
      {
        h: "无账号发布",
        p: "",
        paras: [
          "`npx hyperframes publish` 可在未登录时使用。它上传项目并打印含认领 token 的 URL。打开该 URL，在网页应用中认证以认领项目。",
          "想让 CLI 立即拥有项目、用 `--update` 更新同一 URL，或发布到共享空间 `--space` 时，请先用 `npx hyperframes auth login` 登录再发布。",
        ],
        codeBlocks: [],
        id: "publishing-without-an-account",
      },
      {
        h: "环境变量",
        p: "",
        paras: [
          "| 环境变量 | 用途 |\n| - | - |\n| `HEYGEN_API_KEY` | HeyGen 凭据——语音 + 音乐/音效检索 |\n| `HYPERFRAMES_API_KEY` | `HEYGEN_API_KEY` 的别名 |\n| `HEYGEN_ACCESS_TOKEN` | 宿主应用注入的 OAuth token；永不刷新或保存 |\n| `HEYGEN_API_BASE` | 宿主应用给媒体工作流的网关；永不从项目 `.env` 读取 |\n| `HEYGEN_API_URL` | `hyperframes` CLI 命令的 API 基址（默认 `https://api.heygen.com`） |\n| `HYPERFRAMES_CONFIG_DIR` | HyperFrames 设置根目录：凭据、遥测与更新设置、项目链接（默认 `~/.hyperframes`） |\n| `HYPERFRAMES_ENV` | `prod`（默认）或 `dev`；`dev` 把凭据放在根目录下独立的 `dev/` 目录。宿主与 OAuth client id 来自 `HEYGEN_API_URL`、`HYPERFRAMES_OAUTH_*` 与 `HYPERFRAMES_PUBLISHED_PROJECTS_API_URL` |\n| `HYPERFRAMES_OAUTH_CLIENT_ID` | 为受控 OAuth 环境覆盖公共 client ID |\n| `ELEVENLABS_API_KEY` | ElevenLabs TTS，无 HeyGen 凭据时使用 |\n| `GEMINI_API_KEY` / `GOOGLE_API_KEY` | 明确 Gemini TTS 选择与 Lyria 音乐生成；捕获描述用 `GEMINI_API_KEY` |\n| `GOOGLE_APPLICATION_CREDENTIALS` / `GCS_CREDS` | Gemini TTS 服务账号 JSON 文件路径 / 注入 JSON。两 API 密钥都不设置时使用 |\n| `GOOGLE_CLOUD_PROJECT` / `GCLOUD_PROJECT_ID` | Gemini OAuth 配额项目；先设值优先，其次服务账号项目 |\n| `OPENROUTER_API_KEY` | 捕获描述；该步优先于 Gemini |",
        ],
        codeBlocks: [],
        id: "environment-variables",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[云渲染](https://hyperframes.heygen.com/deploy/cloud.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "guide-webmcp": {
    lede: "Studio 将自有能力注册为 WebMCP 工具，因此运行在你浏览器中的 AI 代理可读取 Studio 的掌握内容，做出与你相同的编辑。",
    sections: [
      {
        h: "效果",
        p: "",
        paras: [
          "有了工具，代理可检查以源码为后盾的场景，做一次定向编辑，并检查结果： 最后一步最重要。它让代理判断改动，而非靠猜。",
        ],
        codeBlocks: [
          {
            code: 'studio_look                                      -> find the headline and copy its handle\nstudio_select    {"handle":"hf:abc123"}          -> share the target with the person in Studio\nstudio_inspect   {"handle":"hf:abc123"}          -> read its styles, text, and capabilities\nstudio_set_style {"handle":"hf:abc123",\n                  "styles":{"color":"red"}}     -> write that source-backed element\nstudio_frame     {"time":2.4}                    -> capture the composition at 2.4 seconds',
            file: "text",
          },
        ],
        id: "what-it-looks-like",
      },
      {
        h: "开启",
        p: "",
        paras: [
          "Studio 加载时工具自动注册。代理能否*触达*它们取决于浏览器。",
          "| 浏览器 | 支持状态 |\n| - | - |\n| Chrome 149 | Origin Trial |\n| Edge 150 | Origin Trial |\n| ChatGPT Desktop | 已发布 |\n| Brave (Leo) | 实验性 |\n| Firefox, Safari | 尚未支持 |",
          "本地 Chrome 开发请启用标志并重启： 然后从 Studio 控制台确认工具存在： [!NOTE] 注册是异步的，Studio 加载瞬间就读 `getTools()` 的调用方可能看到不完整列表。请等待 `toolchange` 事件，或轮询至数量稳定在十二个。",
          "[!WARNING] API 是 `document.modelContext`，不是 `navigator.modelContext`。许多已发布示例用后者。它是某些 polyfill 添加的兼容垫片，不在规范内，因此特性检测它会误导你。",
          "无原生支持的浏览器中，Studio 会加载捆绑的 polyfill，让 WebMCP 桥扩展仍能连接。浏览器已具备 API 时不下载任何东西。Studio 偏好禁用时不注册任何工具。",
        ],
        codeBlocks: [
          {
            code: "chrome://flags/#enable-webmcp-testing",
            file: "text",
          },
          {
            code: 'const tools = await document.modelContext.getTools();\nconsole.log(tools.map((tool) => tool.name));\n// ["studio_look", "studio_select", "studio_seek", ...]',
            file: "js",
          },
        ],
        id: "turning-it-on",
      },
      {
        h: "读取",
        p: "",
        paras: [
          "| 工具 | 返回内容 |\n| - | - |\n| `studio_look` | 当前项目与合成、播放头、选择、撤销状态，以及按嵌套顺序的有限源码后盾场景 |\n| `studio_inspect` | 单元素全量：解析后样式、文本字段、框、动画及其接受内容 |\n| `studio_frame` | 任意时刻合成的 PNG |",
          "`studio_look` 返回的每个元素都有**句柄**。它还报告 `sourceFile`、`parentHandle`、`depth` 与 `childCount`，因此代理能区分两个嵌套场景文件中相同的作者 ID。原样传回句柄到每次元素写入。句柄是源码安全地址，不是 CSS 选择器。",
        ],
        codeBlocks: [],
        id: "what-an-agent-can-do",
      },
      {
        h: "变更",
        p: "",
        paras: [
          "| 工具 | 执行操作 |\n| - | - |\n| `studio_select` | 选择元素，与点击它完全一致 |\n| `studio_seek` | 移动播放头 |\n| `studio_set_text` | 重写文本 |\n| `studio_set_style` | 设置内联样式 |\n| `studio_transform` | 移动、缩放或旋转 |\n| `studio_add_animation` | 在播放头添加 GSAP 动画 |\n| `studio_update_animation` | 改变时长、缓动或位置 |\n| `studio_add_keyframe` | 给动画添加关键帧 |\n| `studio_delete_animation` | 移除动画 |",
          "元素写入经 Studio 使用的同一提交 actor 运行。当该 actor 转发有版本的持久性证据时，回执会命名源文件与内容版本，编辑进入同一撤销历史。无此证据的 actor 停留在 `dispatched`。",
        ],
        codeBlocks: [],
        id: "read",
      },
      {
        h: "两条值得知道的规则",
        p: "",
        paras: [
          "**先表意图，再显式寻址每次写入。** 首次写入目标前，先调 `studio_select`，让 Studio 中人看到与代理相同的选择框与检查器。选择表达意图，不授予写入权限。`studio_set_text`、`studio_set_style`、`studio_transform` 与动画工具仍需要该目标从 `studio_look` 来的句柄，因此之后的人为点击不能改导已寻址写入。",
          "**读回执阶段。** 写入结果区分接受与证明：",
          "| 阶段 | 证明什么 |\n| - | - |\n| `refused` | 未运行提交 actor。先修句柄、输入、能力或 Studio 状态再重试 |\n| `dispatched` | actor 接受了请求，但工具没有持久版本或独立读回。用 `studio_inspect` 或 `studio_frame` 跟进 |\n| `saved` | Studio 收到了有版本的证据，命名源文件已持久化该写入 |\n| `verified` | 写入已保存，独立读回观察到了结果 |\n| `failed` | 提交 actor 已运行后失败。检查 `kind`、`reason` 与 `hint` |",
          "`changed` 与阶段独立。已保存的无操作仍然真实：文件接受了请求，但值本来已存在。样式写入按属性给回执，可能部分成功。动画处理目前在持久化与实时预览同步结算后报告 `dispatched`；底层处理者无法提供证据时，它不宣称有版本持久性或独立读回。迟到的取消请求也不撤销已分发或已保存的编辑。",
        ],
        codeBlocks: [],
        id: "change",
      },
      {
        h: "与代理并肩工作",
        p: "",
        paras: [
          "本功能就是为你与看着同一合成的代理打造的。Studio 正常展示选择，并在事务解析期间围绕寻址元素加**拓扑镜头**。新目标被获取、重复编辑定位更快、持久结果落地。镜头是仅 Studio 的事务反馈：不进作者 HTML、预览 iframe、捕获帧或缩略图。",
          "写入工具成功完成时，打开的 Studio 预览已同步该编辑。观看者无需拖动时间线或刷新浏览器即可看到。",
          "接受源文件变更后，Studio 推进项目缩略图修订号，并重新生成可见合成缩略图。这样侧边栏能收敛到已保存项目，而非继续显示编辑前的缓存像素。",
          "[!NOTE] 自动保存暂停、或文件外部变更等你决定时，Studio 会拒绝代理写入并告知原因。解决横幅后可继续。",
        ],
        codeBlocks: [],
        id: "two-rules-worth-knowing",
      },
      {
        h: "关掉它",
        p: "",
        paras: [
          "暂无设置开关。开关是 Studio 偏好，从控制台设置并刷新： 按上面那样读现有对象并展开。单独写 `{agentToolsEnabled: false}` 会替换整个偏好 blob，丢失面板尺寸、缩放与时间线设置。",
          "改回 `true` 或删除该键可重新启用。",
          "浏览器在自有权限提示后门控工具访问，因此注册工具不等于授予访问。提示频率（每站点一次还是每次调用）由浏览器决定，API 处于 origin trial 期间仍在变化。",
        ],
        codeBlocks: [
          {
            code: 'const KEY = "hf-studio-ui-preferences";\nconst prefs = JSON.parse(localStorage.getItem(KEY) ?? "{}");\nlocalStorage.setItem(KEY, JSON.stringify({ ...prefs, agentToolsEnabled: false }));\nlocation.reload();',
            file: "js",
          },
        ],
        id: "working-alongside-an-agent",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
          "[连接你的代理](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)",
          "[在 Studio 应用中做首个视频](https://hyperframes.heygen.com/studio-app/first-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  contribute: {
    lede: "搭建本地开发仓库、做出聚焦的改动，并向 HyperFrames 提交 Pull Request。",
    sections: [
      {
        h: "搭建仓库",
        p: "",
        paras: [
          "HyperFrames 工作区操作使用 Bun。不要加 `pnpm-lock.yaml`，也不要替换 `bun.lock`。",
          "改 UI 或合成行为时同时启动 Studio： 从 monorepo 运行时，Studio 监听 `http://localhost:5190`。",
        ],
        codeBlocks: [
          {
            code: "git clone https://github.com/YOUR_USERNAME/hyperframes.git\ncd hyperframes\nbun install\nbun run build",
            file: "bash",
          },
          {
            code: "bun run dev",
            file: "bash",
          },
        ],
        id: "set-up-the-repository",
      },
      {
        h: "检查你的改动",
        p: "",
        paras: [
          '迭代时先跑最小相关测试，开 PR 前跑仓库门禁： 合成类改动请从项目目录跑门禁，或直接传路径： 注册表条目需另一条命令。它们以 `<name>.html` 或 `demo.html` 发布，CLI 按找 `index.html` 解析项目，因此对条目目录 lint 会报 "No composition found"——`gsap_non_transform_motion` 两个错误曾因此未 lint 就上了 `main`。先用脚本把每条目挂到临时项目（正是 `hyperframes add` 会放的位置）：',
          "pre-commit 钩子会格式化已暂存文件，并对你改过的文件跑检查。",
        ],
        codeBlocks: [
          {
            code: "bun run lint\nbun run format:check\nbun run --filter '*' typecheck\nbun run test",
            file: "bash",
          },
          {
            code: "npx hyperframes lint ./my-video\nnpx hyperframes check ./my-video",
            file: "bash",
          },
          {
            code: "bun run lint:registry-items              # every item\nbun run lint:registry-items my-block     # just one",
            file: "bash",
          },
        ],
        id: "check-your-change",
      },
      {
        h: "在正确的包中工作",
        p: "",
        paras: [
          "| 层面 | 所属包或目录 |\n| - | - |\n| 合成解析、运行时、类型 | `packages/core` 与 `packages/parsers` |\n| 浏览器帧捕获 | `packages/engine` |\n| 编码与音频/渲染调度 | `packages/producer` |\n| 命令行 | `packages/cli` |\n| 浏览器编辑器 | `packages/studio` 与 `packages/studio-server` |\n| 可嵌入播放器 | `packages/player` |\n| 无头编辑 API | `packages/sdk` |\n| AWS 与 GCP 分布式渲染 | `packages/aws-lambda` 与 `packages/gcp-cloud-run` |\n| 可复用块与片段 | `registry` |\n| 代理指令 | `skills` |",
          "Studio 改动需在浏览器中验证行为，并保留 [Studio 文档](https://hyperframes.heygen.com/studio/index.md) 描述的源码补丁与能力门契约。",
        ],
        codeBlocks: [],
        id: "work-in-the-right-package",
      },
      {
        h: "Pull request 要求",
        p: "",
        paras: [
          "缺陷与提案用 [GitHub Issues](https://github.com/heygen-com/hyperframes/issues)。有用的缺陷报告含最小复现、首个精确错误、`npx hyperframes info` 与操作系统。",
          "贡献即同意你的工作按 [Apache 2.0 许可证](https://github.com/heygen-com/hyperframes/blob/main/LICENSE) 授权，并遵循[行为准则](https://github.com/heygen-com/hyperframes/blob/main/CODE_OF_CONDUCT.md)。",
        ],
        codeBlocks: [],
        bullets: [
          "保持改动聚焦，并说明用户可见原因。",
          "行为变更时新增或更新测试。",
          "用常规 PR 标题，如 `fix: preserve audio after seeking`。",
          "跑格式化、lint、类型检查与相关测试。",
          "视觉变更附截图或简短录屏。",
          "仅预发布工作定位到 [Release channels](https://hyperframes.heygen.com/contributing/release-channels.md) 描述的分支。",
        ],
        id: "pull-request-requirements",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[什么是 HyperFrames？](https://hyperframes.heygen.com/introduction.md)",
          "[在 HyperFrames 上构建](https://hyperframes.heygen.com/developers/index.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "contribute-catalog": {
    lede: "Catalog 由 HyperFrames 仓库中的 registry 生成。你可以贡献视觉想法，或构建任何人都能安装的条目。",
    sections: [
      {
        h: "提想法",
        p: "",
        paras: [
          "开 [GitHub issue](https://github.com/heygen-com/hyperframes/issues)，附视觉参考，并说明效果适合用在哪里。录屏、Figma 草图或另一工具的示例都足够起步。",
        ],
        codeBlocks: [],
        id: "choose-how-to-contribute",
      },
      {
        h: "构建条目",
        p: "",
        paras: ["让代理用 `/hyperframes-registry` 技能，或按下面相同工作流来。"],
        codeBlocks: [],
        id: "suggest-an-idea",
      },
      {
        h: "选择条目类型",
        p: "",
        paras: [
          "| 类型 | 适用场景 | 必需文件 |\n| - | - | - |\n| Block | 固定尺寸与时长的独立合成 | `registry-item.json` 与合成 HTML |\n| Component | 装进另一合成的片段 | `registry-item.json`、片段 HTML 与独立 `demo.html` |",
          "每条目在 `registry/blocks/` 或 `registry/components/` 下有自有目录。每个元素 ID 加条目名短缩写前缀，避免作子合成安装时冲突。",
          "没有 `demo.html` 的组件会被 Catalog 预览生成器跳过。",
        ],
        codeBlocks: [
          {
            code: "registry/blocks/my-block/\n  my-block.html\n  registry-item.json\n\nregistry/components/my-effect/\n  my-effect.html\n  demo.html\n  registry-item.json",
            file: "text",
          },
        ],
        id: "build-an-item",
      },
      {
        h: "定义 manifest",
        p: "",
        paras: [
          "`registry-item.json` 遵循[注册表条目 schema](https://github.com/heygen-com/hyperframes/blob/main/packages/core/schemas/registry-item.json)。Block 声明 `dimensions` 与 `duration`；组件不得声明。",
          "用 `params` 声明可让用户在 Studio 中改、而不用编辑 HTML 的值。支持控件为 `color`、`text`、`number` 与 `select`。",
          "其他有用可选字段含 `author`、`authorUrl`、`relatedSkill`、`registryDependencies`、`license`、`sourcePrompt`、`minCliVersion` 与 `deprecated`。TypeScript 注册表类型与现有 manifest 是当前权威。已发布 JSON schema 校验共享 manifest 字段，尚未描述 block-only 的 `params` 字段。",
        ],
        codeBlocks: [
          {
            code: '{\n  "$schema": "https://hyperframes.heygen.com/schema/registry-item.json",\n  "name": "my-block",\n  "type": "hyperframes:block",\n  "title": "My Block",\n  "description": "What this block does in one sentence",\n  "tags": ["category", "subcategory"],\n  "dimensions": { "width": 1920, "height": 1080 },\n  "duration": 5,\n  "params": [\n    {\n      "key": "--accent",\n      "label": "Accent",\n      "type": "color",\n      "default": "#ff4d4d"\n    }\n  ],\n  "files": [\n    {\n      "path": "my-block.html",\n      "target": "compositions/my-block.html",\n      "type": "hyperframes:composition"\n    }\n  ]\n}',
            file: "json",
          },
        ],
        id: "choose-the-item-type",
      },
      {
        h: "二进制资源",
        p: "",
        paras: [
          "注册表直接从仓库提供，因此条目携带的每个字节永驻历史。合成是文本，成本为零；图片、视频、音频与字体不是。",
          "照常在 PR 中提交这些资源。合并前，维护者跑 `bun run host:registry-assets <item-name>`，把它们上传到 CDN，给各 `files[]` 条目加 `url` 并从树中去掉字节： `path` 不变。它仍是相对条目的落点，因此你的合成 HTML、Catalog 预览渲染器与 `hyperframes add` 行为完全如前——只有字节来源移动。键按内容寻址，多条目共享的图片只上传一次，改过的图片得新 URL，而非陈旧缓存。",
        ],
        codeBlocks: [
          {
            code: '{\n  "path": "assets/carousel-images/one.jpg",\n  "url": "https://static.heygen.ai/hyperframes-oss/registry-assets/deadbeefdeadbeef.jpg",\n  "target": "assets/carousel-images/one.jpg",\n  "type": "hyperframes:asset"\n}',
            file: "json",
          },
        ],
        id: "define-the-manifest",
      },
      {
        h: "安装器元数据",
        p: "",
        paras: [
          "用 `registryDependencies` 命名必须先装的注册表条目。安装器传递解析依赖，拒绝缺失条目或环。引用精确条目名，保持依赖图小。",
          "设置 `minCliVersion` 为首个支持该条目的 CLI 版本。所有解析条目（含依赖）必须在安装任何条目文件前通过兼容检查。不兼容的 CLI 会报所需版本与升级命令。",
          "条目有替代时把 `deprecated` 设为简短迁移信息。安装器会警告，并让条目对已有项目可用。",
          "按 tag 安装 `npx hyperframes add <tag>` 会刷新注册表索引与条目 manifest，发布 tag 变更无需等待 24 小时缓存过期。注册表不可达时，已缓存 manifest 仍作兜底可用。",
        ],
        codeBlocks: [
          {
            code: '{\n  "minCliVersion": "0.6.96",\n  "registryDependencies": ["grain-overlay"],\n  "deprecated": "Use my-block-v2 instead."\n}',
            file: "json",
          },
        ],
        id: "binary-assets",
      },
      {
        h: "为复用而构建",
        p: "",
        paras: [
          "每条注册表条目必须： 一次性示例归 [Examples](https://hyperframes.heygen.com/examples.md)，不进 Catalog。",
        ],
        codeBlocks: [],
        bullets: [
          "使用注册在 `window.__timelines` 的暂停 GSAP 时间线；",
          "让 `data-composition-id` 匹配注册时间线 ID；",
          "用带前缀的元素 ID；",
          "避免 `Date.now()`、未播种 `Math.random()` 与实时动画循环；",
          "在任意帧正确 seek；",
          "在源目录之外安装后仍有效。",
        ],
        id: "installer-metadata",
      },
      {
        h: "校验与预览",
        p: "",
        paras: [
          "按用户收到方式 lint 条目——挂进真项目。裸 `npx hyperframes lint` 无法校验注册表目录，因为 CLI 找 `index.html`，条目以 `<name>.html` 或 `demo.html` 发布： 要跑完整门禁，先把条目装进临时项目再在其中跑：",
          "生成 Catalog 页与预览资源： 这些生成器直接从工作树读条目。`add` 命令不能按名安装未发布的本地条目：它从 `hyperframes.json` 中的注册表 URL 解析条目。从干净项目测试 `npx hyperframes add my-block`，需该条目已在该注册表 manifest 中。",
          "不要手改生成的条目页。改其注册表 manifest 或生成器再重生成。",
          "以全速观看预览。通过 `check` 只证明合成有效，不证明运动可读或有用。",
          "| 审查问题 | 理想标准 |\n| - | - |\n| 有一个视觉主角吗？ | 第一秒眼睛知道落点 |\n| 重要文本能一次读懂吗？ | 信息落地，剪辑前停留 |\n| 动效加速并收住吗？ | 不像幻灯片匀速漂移 |\n| 能换肤吗？ | 品牌向值暴露为参数 |\n| 真复用吗？ | 解决重复生产问题 |",
        ],
        codeBlocks: [
          {
            code: "bun run lint:registry-items my-block",
            file: "bash",
          },
          {
            code: "npx hyperframes init scratch && cd scratch\nnpx hyperframes add my-block\nnpx hyperframes check",
            file: "bash",
          },
          {
            code: "npx tsx scripts/generate-catalog-pages.ts\nnpx tsx scripts/generate-catalog-previews.ts --only my-block",
            file: "bash",
          },
        ],
        id: "build-for-reuse",
      },
      {
        h: "开 pull request",
        p: "",
        paras: [
          "包含： 外部贡献者请附预览 MP4。维护者会发布最终 Catalog 媒体。HeyGen 贡献者可在预览评审后，用只包含重生成媒体的检出跑 `scripts/upload-docs-images.sh`，不要从贡献者分支跑。该脚本只发普通文件，`docs/images/` 下有符号链接就停。",
        ],
        codeBlocks: [],
        bullets: [
          "条目目录；",
          "`registry/registry.json` 中匹配条目；",
          "重生成的 Catalog 输出；",
          "`npx hyperframes publish` 的 `hyperframes.studio` 预览；",
          "何时使用、合适时长范围与已知坑。",
        ],
        id: "validate-and-preview",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[素材与模板目录（Catalog）](https://hyperframes.heygen.com/catalog/index.md)",
          "[为 HyperFrames 贡献](https://hyperframes.heygen.com/contributing.md)",
          "[安装与更新代理技能](https://hyperframes.heygen.com/guides/skills.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "contribute-release-channels": {
    lede: "HyperFrames 如何将仅限 Alpha 通道的功能隔离在稳定版发布之外。",
    sections: [
      {
        h: "分支策略",
        p: "",
        paras: [
          "用分支分离决定什么代码有资格进各发布通道。dist-tag 仅控制 npm 安装默认，不从包中去掉代码。",
          "功能仅应进 alpha 时，把该 PR 合并或重定向到预发布分支，而非 `main`。",
        ],
        codeBlocks: [],
        bullets: [
          "`main` 稳定/可发布。合并进 `main` 的任何东西都有资格进 `latest`。",
          "`release/v*` 分支供稳定补丁与热修。",
          "`next`、`alpha`、`beta`、`rc`、`canary` 与 `prerelease/*` 分支供预发布集成。",
        ],
        id: "branch-policy",
      },
      {
        h: "稳定发布",
        p: "",
        paras: [
          "仅当经评审的 `release/vX.Y.Z` PR 合进受保护 `main` 时才发稳定版。创建发布提交前先准备并评审发布说明： 首次运行，`release:prepare` 起草缺失 changelog 产物并以非零退出待评审，让链式发布命令在打标前停住。改好生成的 TODO 摘要后， rerun 同命令创建发布提交与标签。",
          "完整工作流见 [Changelog process](https://hyperframes.heygen.com/contributing/changelog-process.md)。稳定发布时 `bun run set-version <version>` 在维护者直接跑底层发布命令时仍强制该检查点。",
          "不带本地标签推送发布分支，向 `main` 开 PR，审批与 CI 后合并。发布工作流检出精确 PR 合并 SHA，发布前校验，在该提交创建稳定标签，发布 npm 包，并创建 GitHub release。",
          "该工作流需恢复时，重跑其原始合并 PR 事件。稳定标签推送与手动分发不发布，因此恢复不能换提交。",
          "热修时，从上一个稳定标签拉分支，只 cherry-pick 修复，发补丁版，再把同一修复合并或 cherry-pick 回预发布分支。",
        ],
        codeBlocks: [
          {
            code: "bun run release:prepare <version>",
            file: "bash",
          },
        ],
        id: "stable-release",
      },
      {
        h: "Alpha 发布",
        p: "",
        paras: [
          "Alpha 发布必须从 `origin/next` 或 `origin/alpha` 等预发布分支可达。当预发布含用户应知道的变更时，用相同 changelog 草稿工作流。",
          "用户可显式装 alpha 构建：",
        ],
        codeBlocks: [
          {
            code: "git checkout next\nbun run set-version 0.4.25-alpha.1\ngit push origin next\ngit push origin v0.4.25-alpha.1",
            file: "bash",
          },
          {
            code: "npm install hyperframes@alpha\nnpm install @hyperframes/core@alpha",
            file: "bash",
          },
        ],
        id: "alpha-release",
      },
      {
        h: "CI 护栏",
        p: "",
        paras: ["发布工作流在发布前校验发布通道边界： 这防止 alpha-only 功能意外进稳定热修。"],
        codeBlocks: [],
        bullets: [
          "稳定版必须以 `latest` 发布。",
          "预发布版必须以预发布 dist-tag（如 `alpha`）发布。",
          "稳定发布必须来自经合并、经评审的 `release/vX.Y.Z` PR。",
          "预发布标签必须从预发布分支可达。",
          "已合并 `release/vX.Y.Z` PR 只发稳定版。",
          "每个发布任务都校验检出与不可变事件 SHA 一致。",
        ],
        id: "ci-guardrails",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[发布代理插件](https://hyperframes.heygen.com/contributing/agent-plugins.md)",
          "[为 HyperFrames 贡献](https://hyperframes.heygen.com/contributing.md)",
          "[Canary 灰度](https://hyperframes.heygen.com/contributing/canary-rollouts.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "contribute-agent-plugins": {
    lede: "`skills/` 是权威已发布技能源。Claude、Agent Plugins 1.0、Cursor、Codex 与 Gemini manifest 共享 CLI 发布版本。便携格式采纳期间保留现有客户端的厂商 manifest。",
    sections: [
      {
        h: "构建一次已提交发布",
        p: "",
        paras: [
          "用常规经评审的[发布流程](https://hyperframes.heygen.com/contributing/release-channels.md)。`set-version` 更新全部五个插件 manifest。打包前先提交发布；打包器故意排除未提交变更。",
          "便携构建器在 `dist/` 下写出： 发布工作流在 npm 发布后把便携文件挂到 GitHub release。Codex ZIP 仍是独立提交产物。构建它不会更新 OpenAI 目录清单。",
        ],
        codeBlocks: [
          {
            code: "bun run package:agent-plugin\nbun run package:codex-plugin",
            file: "bash",
          },
        ],
        bullets: [
          "`hyperframes-agent-plugin.zip`：以 `hyperframes/` 为根，含 manifest、技能、技能目录、品牌资源与许可证。",
          "`hyperframes-agent-plugin.json`：源提交、版本、技能清单、归档大小与 SHA-256。",
          "`hyperframes-agent-plugin.sha256`：归档校验和。",
        ],
        id: "build-a-committed-release",
      },
      {
        h: "宣称支持前校验",
        p: "",
        paras: [
          "Claude 商城保留旧 `core-skills` 安装标识供迁移；新用户应装 `hyperframes@hyperframes`。不测受支持 Claude 版本迁移，不要删旧条目。",
        ],
        codeBlocks: [],
        bullets: [
          "跑打包测试、技能校验、技能 manifest 检查与 manifest 校验。检查无仅贡献者技能、运行时需要的 LFS 指针、无未捆绑仓库文件依赖进入载荷。",
          "在隔离档案中安装整包并检查技能清单。试 Claude 命名空间路由与各客户端原生发现。",
          "经真实分发源从 N 升级到 N+1。刷新后确认新版本；验证锁定安装仍在 N。本地目录重刷不证明商城自动更新。",
          "跑本地标题卡工作流。验证 `init` 不刷新全局技能、CLI 版本匹配插件、插件文件未变。不重写锁文件的既有项目依赖里检查。",
          "测 `core-skills` 迁移与重复独立技能，再卸载。保留无关技能与用户编辑。",
          "在 PR/发布说明中记录测试过的客户端版本、操作系统、源提交与结果。不可用客户端标为未验证。",
        ],
        id: "verify-before-advertising-support",
      },
      {
        h: "分发状态与回滚",
        p: "",
        paras: [
          "自托管仓库安装、发布产物发布、原生客户端校验与公共商城审批分开跟。Cursor 公共更新需评审。OpenAI 目录提交走自有流程。永远不要把 manifest 检查成功说成已验证原生安装。",
          "回滚时，重装上一个测试过的发布 tag 或归档，并临时禁用更新。不要给改过内容的插件复用版本号。公共商城若有独立已发布修订，也经其自有流程回滚。",
        ],
        codeBlocks: [],
        id: "distribution-status-and-rollback",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[安装 HyperFrames 插件](https://hyperframes.heygen.com/guides/plugins.md)",
          "[安装与更新代理技能](https://hyperframes.heygen.com/guides/skills.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "contribute-changelog": {
    lede: "HyperFrames 如何起草、评审并发布各版本的更新日志。",
    sections: [
      {
        h: "目标",
        id: "goals",
        p: "",
        paras: [],
        bullets: [
          "让每个稳定版本的变更在文档站点上一目了然。",
          "发布高质量且对用户有用的 GitHub Release 说明，而不只是简单堆砌原始 commit 日志。",
          "保持发布说明在正式发布前可随时审阅和编辑。",
          "避免过度记录不影响用户行为的纯内部重构提交。",
        ],
        codeBlocks: [],
      },
      {
        h: "事实来源",
        p: "",
        paras: [
          "每条经评审发布说明放在 `releases/vX.Y.Z.md`。",
          "文档 changelog 在 `docs/changelog.mdx`，用 Mintlify `<Update>` 条目。草稿生成器可前置文档条目，但维护者应在打标前改生成副本。任何人工重写后，保持 `releases/vX.Y.Z.md` 与匹配的文档 `<Update>` 条目同步。",
        ],
        codeBlocks: [],
        id: "source-of-truth",
      },
      {
        h: "稳定发布工作流",
        p: "",
        paras: [
          "**1. 准备发布** 从仓库根跑稳定发布命令： 首次运行创建或更新 changelog 草稿，然后在打标前退出： 检查点故意非零退出，让链式发布命令止住。评审生成副本，去掉 TODO 摘要标记，再跑同命令。两份 changelog 产物评审后，`release:prepare` 跑 `set-version` 创建发布提交与标签。",
          "**2. 评审重写** 读生成说明并为用户重写。影响优先于实现细节。",
          "突出： **3. 重跑发布命令** 评审后，再跑同命令： 稳定发布时，`release:prepare` 检查 `releases/v0.6.53.md` 存在、`docs/changelog.mdx` 有匹配 `HyperFrames v0.6.53` 条目，且两产物都不再含生成 TODO 摘要。直接跑底层 `set-version` 的维护者受同一已评审 changelog 检查点约束。预发布与 `--no-tag` 版本 bump 跳过该检查。仅紧急稳定发布用 `--skip-changelog-check`。",
          "发布提交可含版本 bump、`releases/v0.6.53.md` 与文档 changelog 更新。",
          "**4. 发布** 不带本地标签推送 `release/v0.6.53` 分支，向 `main` 开 PR，审批与 CI 后合并。发布工作流把检出锁定到精确合并 SHA，校验该 SHA，创建 `v0.6.53`，并用 `releases/v0.6.53.md` 作 GitHub Release 正文。无已评审发布文件时，退回 GitHub 生成说明。",
          "发布失败恢复时，重跑原始合并 PR 工作流。不要推稳定标签或用手动分发；这些路径故意禁用，恢复不能发布不同提交。",
          "生成 compare 链接指向未来 `v0.6.53` 标签。发布 PR 合并、发布工作流创建标签前可能不可解析。",
        ],
        codeBlocks: [
          {
            code: "bun run release:prepare 0.6.53",
            file: "bash",
          },
          {
            code: "bun run release:prepare 0.6.53",
            file: "bash",
          },
        ],
        bullets: [
          "`releases/v0.6.53.md`",
          "`docs/changelog.mdx`",
          "破坏性变更与所需迁移步骤",
          "新能力",
          "重要缺陷修复",
          "性能或可靠性改进",
          "安全修复",
        ],
        id: "stable-release-workflow",
      },
      {
        h: "草稿重生成",
        p: "",
        paras: [
          "评审前需重生成 changelog 副本时，用底层草稿命令： 无 `--force` 时，草稿命令保留已存在的 `releases/vX.Y.Z.md` 不变，缺失时仍补文档 changelog 条目。文档 changelog 已有该版本时，手工改现有文档条目。",
        ],
        codeBlocks: [
          {
            code: "bun run changelog:draft 0.6.53 --write --force",
            file: "bash",
          },
        ],
        id: "draft-regeneration",
      },
      {
        h: "每周简报工作流",
        p: "",
        paras: [
          "每周 packet 是编辑素材，不是公共文档页。保持 `docs/changelog.mdx` 有版本。仅在真实故事、负责人与足够上下文能帮用户行动时，才发布人类可读产品更新。",
          "`docs/product-updates.mdx` 公开后，发布负责人在每月首个稳定发布时评审它。仅当多项变更构成有用用户故事时更新；否则保留最新带日期版并确认其主张仍描述当前产品。无人负责该评审时，从导航去掉该页。",
          "从仓库根生成可编辑每周 packet： 在最新 `main` 分支运行，让所选范围反映公共历史，而非功能分支。",
          "它写出三份内部编辑草稿： [!WARNING] 它还写第四个文件，那个是公开的。`--write` 把生成条目直接前置进 `docs/weekly-updates.mdx`，随 **Explore** 下侧边栏发布。以对待那页的同样审慎评审该 diff——它不是草稿。已存在范围重跑是 no-op，条目之后可在原地安全编辑。",
          "发布任何东西前评审重写四份。社交草稿永不自动发帖。精确版本化发布说明留 [Changelog](https://hyperframes.heygen.com/changelog.md)；[每周更新](https://hyperframes.heygen.com/weekly-updates.md) 承载精选亮点与 RSS feed。",
        ],
        codeBlocks: [
          {
            code: "bun run changelog:weekly --from 2026-06-01 --to 2026-06-07 --write",
            file: "bash",
          },
        ],
        bullets: [
          "`updates/weekly/2026-06-07.md`",
          "`updates/social/2026-06-07.discord.md`",
          "`updates/social/2026-06-07.x.md`",
        ],
        id: "weekly-digest-workflow",
      },
      {
        h: "写作风格",
        p: "",
        paras: [
          '用朴实面向用户语言。宁写 "Fixed Studio render failures when FFmpeg is missing"，勿写 "Added pre-flight check in render activity"。相关文档、迁移指南或 PR 有助行动时加链接。',
          "变更按以下顺序分组（适用时）： 避免列发布提交、纯依赖更新、生成文件 churn 与标 `skip-changelog` 的变更。",
        ],
        codeBlocks: [],
        bullets: [
          "Breaking Changes",
          "Features",
          "Fixes",
          "Performance",
          "Docs & Examples",
          "Catalog",
          "Internal",
        ],
        id: "writing-style",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: ["[更新日志](https://hyperframes.heygen.com/changelog.md)"],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "contribute-testing": {
    lede: "包内测试无法证明 CLI 在普通视频项目中的行为是正确的。聚焦测试通过后，请在 HyperFrames 仓库之外的项目上运行变更过的命令。",
    sections: [
      {
        h: "构建工作区",
        p: "",
        paras: ["在仓库根目录执行： 修改 CLI 代码或 CLI 打包的某个包后，需要重新构建。"],
        codeBlocks: [
          {
            code: "bun install\nbun run build",
            file: "bash",
          },
        ],
        id: "build-the-workspace",
      },
      {
        h: "运行本地构建",
        p: "",
        paras: ["选择一种方法。"],
        codeBlocks: [],
        id: "run-the-local-build",
      },
      {
        h: "链接 CLI",
        p: "",
        paras: [
          "当你需要测试多个命令或多个项目时使用此方法： 解析得到的二进制文件应指向本地的 HyperFrames checkout。请在单独的项目中运行它： 完成后移除链接。`bun unlink` 不需要包名——它 会注销你当前运行所在的目录，所以请先回到 HyperFrames checkout 中的 CLI 包目录（使用绝对路径，因为你现在位于",
          "视频项目内）：",
        ],
        codeBlocks: [
          {
            code: "cd packages/cli\nbun link\n\nhyperframes --version\nwhich hyperframes",
            file: "bash",
          },
          {
            code: "cd /path/to/a/video-project\nhyperframes lint\nhyperframes check\nhyperframes preview",
            file: "bash",
          },
          {
            code: "cd /path/to/hyperframes/packages/cli\nbun unlink",
            file: "bash",
          },
        ],
        id: "link-the-cli",
      },
      {
        h: "直接调用构建好的入口",
        p: "",
        paras: ["当你不想改变 `PATH` 时使用此方法："],
        codeBlocks: [
          {
            code: "node /path/to/hyperframes/packages/cli/dist/cli.js preview /path/to/a/video-project",
            file: "bash",
          },
        ],
        id: "call-the-built-entry-directly",
      },
      {
        h: "测试包存档",
        p: "",
        paras: [
          "发布之前请使用此方法，检查实际会发布的文件： 同样请在隔离项目上运行存档，并测试你变更过的命令。",
          "通过 `npx` 启动的 `hyperframes preview` 在 `npx` 进程停止后， 服务器仍会继续运行。请按监听该端口的进程停止服务器， 否则下次运行会与旧服务器对话：",
        ],
        codeBlocks: [
          {
            code: "cd packages/cli\nnpm pack\nnpx ./hyperframes-<version>.tgz --help",
            file: "bash",
          },
          {
            code: 'kill "$(lsof -ti tcp:<port> -sTCP:LISTEN)"',
            file: "bash",
          },
        ],
        id: "test-the-package-archive",
      },
      {
        h: "需要验证的内容",
        p: "",
        paras: [
          "测试用户可见的结果，而不仅仅是退出码： 对于 Studio 变更，请在 Preview 中走一遍确切的交互。对于渲染变更，请使用 `ffprobe` 或仓库已有的 fixture 测试检查输出，而不要仅依赖视觉播放。",
        ],
        codeBlocks: [],
        bullets: [
          "命令接受文档中说明的参数；",
          "错误信息说明如何恢复；",
          "当命令支持 `--json` 时，其输出保持机器可读；",
          "Preview 打开正确的项目并反映文件变更；",
          "渲染产生可播放的文件，时长和媒体符合预期；",
          "成功和失败后，临时文件和后台进程都得到清理。",
        ],
        id: "what-to-verify",
      },
      {
        h: "常见问题",
        p: "",
        paras: [
          "如果全局安装的 CLI 遮蔽了链接，请检查 `which hyperframes`，移除全局包，再重新链接。Preview 默认从端口 `3002` 启动，并会自动尝试空闲端口；只有在需要固定端口时才传 `--port`。",
        ],
        codeBlocks: [],
        id: "common-problems",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[为 HyperFrames 做出贡献](https://hyperframes.heygen.com/contributing.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "contribute-canary": {
    lede: "以金丝雀（Canary）比例向部分安装逐步推送变更，而非一次性全量切换或完全关闭。",
    sections: [
      {
        h: "添加金丝雀",
        p: "",
        paras: [
          "**1. 在 `packages/core/src/canaryRegistry.ts` 中以 0% 注册：** 在 `0` 时它不产生任何效果，所以这一步可以安全地单独落地。",
          "**2. 在决策点读取它。** 这就是全部 API。百分比只存在于注册表中，从不在调用处。",
          "**3. 通过在补丁发布中编辑 `percentage` 来扩大**：`0 → 5 → 25 → 100`。",
          "扩大是包含式的——已在 10 中的人仍在 25 中，所以 前后对比在扩大过程中依然有效。不要重命名已上线的金丝雀： 名称是分桶哈希的一部分，重命名会在发布中途打乱 队列。",
          "**4. 在达到 100 且保持稳定时删除它**——包括注册表条目 *和* 受其保护的 分支。定时的 **Canary sunset** 工作流会强制执行这一点：它每周运行一次， 一旦 `sunsetAfter` 过去就会失败，并在运行日志中点名过期的发布及其负责人。",
          "它不会通知任何人，所以如果你拥有金丝雀，请关注它。用 `bun scripts/check-canary-sunset.ts` 自行运行。",
        ],
        codeBlocks: [
          {
            code: '{\n  name: "my-feature",\n  percentage: 0,\n  description: "One line on what turning this on actually changes.",\n  owner: "your-handle",\n  sunsetAfter: "2026-12-01",\n}',
            file: "ts",
          },
          {
            code: 'import { isCanaryEnabled } from "../telemetry/canary.js";\n\nif (isCanaryEnabled("my-feature")) {\n  // new path\n} else {\n  // existing path\n}',
            file: "ts",
          },
        ],
        id: "add-one",
      },
      {
        h: "覆盖金丝雀",
        p: "",
        paras: [
          "名称转为大写下划线。在 Studio 中使用 `?hf_canary_my_feature=on`。覆盖 永远优先于百分比，两个方向都如此——升级、内测、二分定位、紧急关闭。",
          "这也是在遥测关闭的情况下演练金丝雀的方法。",
          "其余所有情形在低于 100% 时均按关闭处理：没有分桶种子、未注册的名称、 或 CI 机器都解析为*未纳入*。在恰好 100% 时这些排除条件 不再适用，所以没有人会在删除时首次走到新路径。",
        ],
        codeBlocks: [
          {
            code: "HF_CANARY_MY_FEATURE=on   # or off / true / false / 1 / 0 / yes / no",
            file: "bash",
          },
        ],
        id: "override-one",
      },
      {
        h: "从你的机器上移除",
        p: "",
        paras: [
          "队列基于 `install-state.json` 中的种子分桶，该文件与 `~/.hyperframes` 中的 `config.json` 相邻——而不是基于遥测 ID。所以完全重置只需一条 命令： `hyperframes telemetry status` 会打印这两个路径，方便你查看或",
          "单独删除它们。除此之外没有任何与金丝雀相关的存储位置。",
        ],
        codeBlocks: [
          {
            code: "rm -rf ~/.hyperframes    # clears telemetry id, canary cohorts, and breaker state",
            file: "bash",
          },
        ],
        id: "remove-one-from-your-machine",
      },
      {
        h: "它位于哪里",
        p: "",
        paras: [
          "| 文件 | 作用 |\n| - | - |\n| `packages/core/src/canaryRegistry.ts` | 所有发布，含负责人和 sunset 日期 |\n| `packages/core/src/canary.ts` | 纯求值器——无 fs、无网络、浏览器安全 |\n| `packages/cli/src/telemetry/canary.ts` | CLI 绑定：分桶种子、环境变量覆盖、CI 检测 |\n| `packages/studio/src/telemetry/canary.ts` | Studio 绑定：采用 CLI 已公布的决策 |",
          "求值器无依赖，所以 Studio 和可嵌入的播放器也可以使用它；每个界面 通过一层薄绑定提供自己的单位 ID。Studio 采用 CLI 的决策，而不是重新推导，所以横跨",
          "两个界面的单次渲染永不半纳入。",
        ],
        codeBlocks: [],
        id: "where-it-lives",
      },
      {
        h: "相关主题",
        p: "",
        paras: ["金丝雀。"],
        codeBlocks: [],
        bullets: [
          "[测试本地变更](https://hyperframes.heygen.com/contributing/testing-local-changes.md) —— 在任何人获得它之前先演练你的",
          "[发布渠道](https://hyperframes.heygen.com/contributing/release-channels.md) —— 扩大范围属于哪个分支。",
          "[`telemetry` 命令](https://hyperframes.heygen.com/packages/cli#telemetry) —— 收集了什么，用户如何关闭它。",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
          "[故障排查](https://hyperframes.heygen.com/help.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "community-adopters": {
    lede: "下列团队在生产中使用 HyperFrames，或正在积极评估 HyperFrames。如果你的组织使用了 HyperFrames——无论是在生产中、评估中，还是个人项目中——我们都欢迎将其加入。",
    sections: [
      {
        h: "如何添加你的组织",
        p: "",
        paras: [
          "请提交一个 pull request，将你的团队加入仓库根目录的 [`ADOPTERS.md`](https://github.com/heygen-com/hyperframes/blob/main/ADOPTERS.md)。格式刻意保持轻量：",
          "如果你不想公开列出，我们仍非常乐意听取你的使用情况——请到 [我们的 Discord](https://discord.gg/7uMDe3PwQn) 留言。",
        ],
        codeBlocks: [],
        bullets: [
          "**组织**——你的公司或项目名称，并链接到你网站。",
          "**联系人**——GitHub handle，方便其他采用者联系你。",
          "**HyperFrames 的使用方式**——用一句话说明用例。",
          "**Logo** *(可选)*——用于展示在本页的方形 logo 或图标。如果你跳过，条目仍会出现在下方表中。",
        ],
        id: "how-to-add-your-organization",
      },
      {
        h: "使用或评估 HyperFrames 的团队",
        p: "",
        paras: [
          "[card] [HeyGen](https://www.heygen.com) ![HeyGen logo](https://app.heygen.com/apple-touch-icon.png) 驱动 HeyGen 视频产品界面中的 AI 生成视频合成与渲染。",
          "[card] [tldraw](https://tldraw.com) ![tldraw logo](https://www.google.com/s2/favicons?domain=tldraw.com&sz=128) 联系人：[@jrusso1020](https://github.com/jrusso1020) —— 使用带 GSAP 动画代码 diff、旁白和字幕的自动 PR 讲解视频。",
          "[card] [TanStack](https://tanstack.com) ![TanStack logo](https://www.google.com/s2/favicons?domain=tanstack.com&sz=128) 联系人：[@steveruizok](https://github.com/steveruizok) —— 探索使用 HyperFrames 制作短形式代码演示视频和文档。",
          "[card] [OptinMonster](https://optinmonster.com) ![OptinMonster logo](https://www.google.com/s2/favicons?domain=optinmonster.com&sz=128) 联系人：[@AlemTuzlak](https://github.com/AlemTuzlak) —— 探索使用 HyperFrames 制作营销和产品视频内容。",
          "[card] [reap](https://reap.video) ![reap logo](https://www.google.com/s2/favicons?domain=reap.video&sz=128) 联系人：Angie Meeker —— 驱动 reap.video 中面向智能体的 AI 视频剪辑、编辑和渲染，覆盖创作者和智能体工作流。",
          "[card] [Typeframe](https://typeframe.app) ![Typeframe logo](https://www.google.com/s2/favicons?domain=typeframe.app&sz=128) 联系人：[@usamaabid](https://github.com/usamaabid) —— 将语音视频渲染为可分享的 MP4 导出，带词级时间字幕打字机效果和样式化字幕布局。",
          "[card] [THU-MAIC](https://github.com/THU-MAIC) ![THU-MAIC logo](https://avatars.githubusercontent.com/u/163809488?v=4) 联系人：[@kiyeonjeon21](https://github.com/kiyeonjeon21) —— 为 OpenMAIC 提供一键 MP4 导出，使用自包含的 HyperFrames 合成生成 AI 交互课堂。",
          "[card] [Mini Course Generator](https://minicoursegenerator.com/) ![Mini Course Generator logo](https://www.google.com/s2/favicons?domain=minicoursegenerator.com&sz=128) 联系人：[@wyuc](https://github.com/wyuc) —— 在课程创建工作流中使用 HyperFrames 进行 AI 合成视频。",
          "[card] [PandaStudio](https://www.writepanda.ai) ![PandaStudio logo](https://www.google.com/s2/favicons?domain=writepanda.ai&sz=128) 联系人：[@eren-commits](https://github.com/eren-commits) —— 在桌面视频编辑器中渲染动态图形、动画字幕和叠加层，用于 MP4 导出。",
          "[card] [Skyflo](https://skyflo.ai) ![Skyflo logo](https://www.google.com/s2/favicons?domain=skyflo.ai&sz=128) 联系人：[@kamskans](https://github.com/kamskans) —— 渲染 Skyflo 的产品发布影片，端到端由 AI 智能体从脚本到音乐选择创作。",
          "[card] [DoneCut](https://donecut.com) ![DoneCut logo](https://www.google.com/s2/favicons?domain=donecut.com&sz=128) 联系人：[@KaranJagtiani](https://github.com/KaranJagtiani) —— 在 DoneCut 的 YouTube 和 Shorts 代工剪辑中渲染字幕、片头卡和动态图形叠加层。",
          "[card] [varg](https://varg.ai) ![varg logo](https://www.google.com/s2/favicons?domain=varg.ai&sz=128) 联系人：[hello@donecut.com](mailto:hello@donecut.com) —— 发布开放智能体技能，为 AI 生成视频添加字幕、标题和动态图形，作为 HyperFrames 合成。",
          "[@SecurityQQ](https://github.com/SecurityQQ) HeyGen 团队实际使用的发布视频源（即产品公告中展示的那些）位于 [hyperframes-launches](https://github.com/heygen-com/hyperframes-launches) —— 说明请参见 [示例](https://hyperframes.heygen.com/examples.md)。",
        ],
        codeBlocks: [],
        id: "teams-using-or-evaluating-hyperframes",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[迁移到 HyperFrames Lambda](https://hyperframes.heygen.com/deploy/migrating-to-hyperframes-lambda.md)",
          "[@hyperframes/aws-lambda](https://hyperframes.heygen.com/packages/aws-lambda.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
