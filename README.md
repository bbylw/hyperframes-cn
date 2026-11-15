<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/logo/dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/logo/light.svg">
    <img alt="HyperFrames" src="https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/logo/light.svg" width="300">
  </picture>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/v/hyperframes.svg?style=flat" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/dm/hyperframes.svg?style=flat" alt="npm downloads"></a>
  <a href="https://github.com/heygen-com/hyperframes/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="License"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22-brightgreen" alt="Node.js"></a>
  <a href="https://discord.gg/fzbdWyjphr"><img src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center"><b>用 HTML 写视频。由 AI 智能体驱动。</b></p>

<p align="center">
  <a href="https://hyperframes.heygen.com/quickstart">快速开始</a> |
  <a href="https://hyperframes.heygen.com/examples">作品展示</a> |
  <a href="https://hyperframes.studio/">在线演练场</a> |
  <a href="https://hyperframes.heygen.com/catalog/blocks/data-chart">组件库</a> |
  <a href="https://hyperframes.heygen.com/introduction">文档</a> |
  <a href="https://discord.gg/fzbdWyjphr">Discord</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/public/images/hyperframes-logo-motion-1280-trimmed.webp" alt="HyperFrames 演示：左侧 HTML 代码实时转换成右侧渲染出的视频" width="800">
</p>

HyperFrames 是一个开源框架，可将 HTML、CSS、媒体与可定位（seekable）动画转化为确定性的 MP4 视频。你可以在本地通过 CLI 使用它，让 AI 编程智能体借助 skills 使用它，或者把它作为托管创作工作流背后的渲染核心。

[HyperFrames Studio 桌面应用](https://hyperframes.studio/studio) 同样可以免费使用；它的 [Pro 计划](https://hyperframes.studio/pricing) 额外提供 HeyGen 顶尖的视频、图像、语音与音乐模型。

正在使用 Claude Code、Codex、Cursor 或其他编程智能体？先运行一次 `npx hyperframes skills update`，然后让你的智能体去制作视频。

<p align="center">
  <b>下载桌面应用：</b>
  <a href="https://hyperframes.studio/studio/download?os=mac">macOS</a> ·
  <a href="https://hyperframes.studio/studio/download?os=windows">Windows</a> ·
  <a href="https://hyperframes.studio/studio/download?os=deb">Linux (.deb)</a>
</p>

## 快速开始

### 与 AI 编程智能体一起使用

#### Claude Code 插件

安装带版本号的插件：

```bash
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

要为 **hyperframes** 市场启用自动更新，请在你项目的终端中运行 `claude`。在 Claude Code 的终端界面里执行 `/plugin`，然后选择 **Marketplaces** → **hyperframes** → **Enable auto-update**。之后使用 `/hyperframes:hyperframes`。关于 Copilot、VS Code、Cursor、Gemini CLI、更新与迁移，请参阅[插件指南](docs/guides/plugins.mdx)。

#### 独立 skills

独立安装的 skills（包括 OpenCode）请使用：

```bash
npx skills add heygen-com/hyperframes
```

> 选择器打开时默认不预选任何项 —— 你只需要 **核心 Skills** 分组；`/slideshow`、`/remotion-to-hyperframes` 与 `/figma` 按需安装。在没有选择器的场景（脚本或 CI），`npx hyperframes skills update` 会精确安装核心集合，而 `skills add --all` 会安装全部 9 个已发布 skills。`.claude/skills` / `.agents/skills` 下的六个仓库内部 skills 默认被排除。完整的已发布集合请使用 `npx hyperframes skills`。
>
> `skills add` 解析的是 skills.sh 注册表的 blob，可能比 `main` 分支滞后数小时。`npx hyperframes skills update` 会安装与你 CLI 版本相匹配的 release tag 中的 skills，因此它们与你正在运行的 CLI 保持一致。

请在你的视频项目目录中运行项目内安装。如果你在 HyperFrames 仓库内，请改用 `npx hyperframes skills update` 做全局安装：项目内的安装目标可能与仓库跟踪的 `skills/` 源码目录重叠，并覆盖未提交的改动。参见[贡献者环境搭建](CONTRIBUTING.md#getting-started)。

试着这样提问：

> 使用 `/hyperframes`，制作一段 10 秒的产品宣传片，包含淡入标题、背景视频，以及轻微的背景音乐。

这些 skills 会教智能体掌握 HyperFrames 的生产闭环：规划视频、编写合法的 HTML、接入可定位动画、添加媒体、做 lint 检查、预览并渲染。它们适用于 Claude Code、Codex、Cursor、Gemini CLI、IBM Bob 以及其他支持 skills 的编程智能体。

## Skills

HyperFrames 内置 9 个 skills。想要任何视频，直接开口要就行；`/hyperframes` 承载合成契约与全部参考文档（影片、字幕、叠层、运动、视觉风格），请先读它。

独立安装时请默认使用 **核心集合**（`/hyperframes`、`/hyperframes-cli`、`/hyperframes-registry`、`/media-use`、`/reverse-any-video`、`/style-sampling`）。`npx hyperframes skills update` 可以在任何地方精确安装这套集合；交互式选择器（`npx skills add heygen-com/hyperframes`）将其列为 “Core Skills” 分组，默认不预选任何项。该选择器仅支持交互操作 —— 非交互式或缺少 `--skill` 的智能体运行会安装全部 9 个。使用 `npx skills add heygen-com/hyperframes --all` 可主动安装完整的已发布集合（跳过选择器），或使用 `npx skills add heygen-com/hyperframes --skill <name>` 只安装单个（用裸名，不带前导 `/`）。

此后独立安装始终保持精简：`npx hyperframes init` 仅在缺失时安装 **核心集合**，且绝不会改动你已安装的 skill（`npx hyperframes skills update` 负责刷新，且从不删除任何一个）；`/figma`、`/slideshow` 与 `/remotion-to-hyperframes` 通过 `npx hyperframes skills update <name>` **按需安装**。没有任何操作会在你背后偷偷重新拉取整套集合。

### 插件包

插件打包完整的 skill 目录，并使用各自智能体的更新管理器。`bun run package:agent-plugin` 会构建已提交的可移植 ZIP、源元数据与 SHA-256 校验和。详见[维护者清单](docs/contributing/agent-plugins.mdx)。

### 上传到 Codex

基于已提交的 `HEAD` 版本清单、品牌素材和 skills，构建可用于上传的 Codex 插件包：

```bash
bun run package:codex-plugin
```

该命令会写出 `dist/hyperframes-plugin.zip`，其根目录为 `hyperframes/`，若压缩包超过 Codex 的 100 MB 上传上限则会构建失败。

### 核心集合

| Skill                   | 适用场景                                                                                                                                                                                                                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/hyperframes`          | **任何「制作 / 编辑 / 动效化 / 渲染」视频、动态图形、字幕或叠层的请求都请先读它**（HTML 渲染成视频）。它承载渲染契约与工作循环，并指向格式、运动、视觉风格、字幕、完整影片与分镜的参考文档。                                  |
| `/hyperframes-cli`      | 按任务使用 HyperFrames CLI —— 脚手架、检查、查看帧、编辑时间线、预览、本地或云端渲染、分享、项目历史 —— 外加读取它的 JSON 输出，以及从构建或渲染失败中恢复。                                                                |
| `/hyperframes-registry` | 约 450 个现成的块与组件，以可编辑源码的形式安装 —— 转场、叠层、标题、动态字体、字幕、图表、地图、3D、镜头运动。在手工搭建任何具名视觉之前先用它；也用于 `hyperframes add` 与 `catalog`。                                     |
| `/media-use`            | 为视频获取或制作任何媒体 —— 音乐、音效、图片、图标、Logo、配音、数字人、生成视频、转录、抠像、调色与视觉风格 —— 可用 HeyGen 或免费的本地工具，并完成已放置音频的混音。也用于处理偏暗、偏平、发闷的素材。                    |
| `/reverse-any-video`    | 把任意视频文件重建为可编辑的 HyperFrames 工程（动态图形、真人出镜、实拍、AI 生成素材），并与原片逐帧比对校验。HyperFrames Pro。                                                                                             |
| `/style-sampling`       | 用五种经过验证的风格为你的主题制作新一期节目：拼贴解说、财经解说、动画科学解说、3D 品牌解说、3D 真实犯罪。HyperFrames Pro。                                                                                                 |

### 按需安装

| Skill                      | 适用场景                                                                                                                                                                     |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/figma`                   | 把 Figma 带入视频 —— 渲染素材、品牌令牌、组件、重建为运动的分镜帧、着色器，以及连接器辅助的动效。当你粘贴 figma.com 链接时使用。                                             |
| `/slideshow`               | 一份演示文稿、路演 deck 或交互式 deck —— 离散幻灯片、分段揭示、分支、热点导航、带演讲者备注的演讲者模式。输出是可导航的 deck，而不是渲染出的 MP4。                             |
| `/remotion-to-hyperframes` | 把已有的视频代码或素材迁入 HyperFrames（优先 Remotion；也支持 Motion Canvas、Lottie、Three.js、canvas 及其他工具的渲染结果），并逐帧校验。                                    |

关于可视化设计交付工作流，请参阅 [Claude Design 指南](https://hyperframes.heygen.com/guides/design-tools#start-from-claude-design-or-open-design) 与 [Open Design 指南](https://hyperframes.heygen.com/guides/design-tools#start-from-claude-design-or-open-design)。

### 手动使用 CLI

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # 在浏览器中预览，支持热重载
npx hyperframes render       # 渲染为 MP4
```

**环境要求：** Node.js 22+、FFmpeg

## 你能构建什么

需要灵感？浏览 [作品展示](https://hyperframes.heygen.com/examples)，观看、阅读、运行并混编其中已完成的视频。

- 产品发布视频与功能公告
- 带有动态代码 diff、旁白与字幕的 PR 讲解视频
- 数据可视化、图表竞速与地图动画
- 带动态字幕、叠层与音乐的社交视频
- 文档转视频、PDF 转视频，以及站点导览讲解
- 可复用的动态图形，用于自动化内容流水线

## Frame.md

**frame.md —— 你的设计系统，已为视频做好准备。**

每个品牌都有一份 `design.md`。但没有一份是为镜头而写的。`frame.md` 就是缺失的那层翻译：它把你的 Web 语境设计规约反转到「帧」上 —— 同样的令牌、同样的规则，但被改写过，让 AI 智能体无需猜测缩放比例、也无需去管 Web 的界面外壳，就能直接编排一支宣传视频。

输出是一份 `DESIGN.md` 的超集，你的整条工具链都能读取。原子保持神圣。合成保持自由。数字来自脚本。

<table>
  <tr>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/biennale-yellow"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/biennale-yellow.png" alt="Biennale Yellow" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/biennale-yellow">Biennale Yellow</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/blockframe"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blockframe.png" alt="BlockFrame" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/blockframe">BlockFrame</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/blue-professional"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blue-professional.png" alt="Blue Professional" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/blue-professional">Blue Professional</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/bold-poster"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/bold-poster.png" alt="Bold Poster" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/bold-poster">Bold Poster</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/broadside"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/broadside.png" alt="Broadside" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/broadside">Broadside</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/capsule"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/capsule.png" alt="Capsule" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/capsule">Capsule</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/cartesian"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cartesian.png" alt="Cartesian" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/cartesian">Cartesian</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/cobalt-grid"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cobalt-grid.png" alt="Cobalt Grid" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/cobalt-grid">Cobalt Grid</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/coral"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/coral.png" alt="Coral" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/coral">Coral</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://hyperframes.studio/design/creative-mode"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/creative-mode.png" alt="Creative Mode" width="100%"></a>
      <br><b><a href="https://hyperframes.studio/design/creative-mode">Creative Mode</a></b>
    </td>
  </tr>
</table>

在 [hyperframes.studio/design](https://hyperframes.studio/design) 浏览并混编全部模板。

## 工作原理

把视频定义为 HTML。添加用于计时与轨道的 data 属性。使用 GSAP、CSS、Lottie、Three.js、Anime.js、WAAPI，或你自己的帧适配器来实现可定位动画。

```html
<div id="stage" data-composition-id="launch" data-start="0" data-width="1920" data-height="1080">
  <video
    class="clip"
    data-start="0"
    data-duration="6"
    data-track-index="0"
    src="intro.mp4"
    muted
    playsinline
  ></video>

  <h1 id="title" class="clip" data-start="1" data-duration="4" data-track-index="1">Launch day</h1>

  <audio
    data-start="0"
    data-duration="6"
    data-track-index="2"
    data-volume="0.5"
    src="music.wav"
  ></audio>

  <script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
  <script>
    const tl = gsap.timeline({ paused: true });
    tl.from("#title", { opacity: 0, y: 40, duration: 0.8 }, 1);
    window.__timelines = window.__timelines || {};
    window.__timelines.launch = tl;
  </script>
</div>
```

在浏览器中即时预览。在本地或 Docker 中渲染。渲染器在无头 Chrome 中逐帧定位，并用 FFmpeg 编码，因此相同的输入总能产出相同的视频。

## HyperFrames 技术栈

HyperFrames 是开源渲染引擎，加上围绕 HTML 原生视频创作不断成长的一整套工具。

| 组件                                             | 状态                | 作用                                                                                                |
| ------------------------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------- |
| CLI                                              | 已可用              | 为本地视频项目做脚手架、预览、lint、检查与渲染                                                      |
| Core / Engine / Producer                         | 已可用              | 解析合成、驱动无头 Chrome、编码视频、混音                                                            |
| Catalog                                          | 已可用              | 可复用的块与组件，用于转场、叠层、字幕、图表、地图与特效                                            |
| 智能体 skills                                    | 已可用              | 把通用 Web 文档所缺失的视频生产模式教给编程智能体                                                  |
| Studio                                           | 已可用，持续演进    | 用于预览与编辑合成的浏览器界面                                                                      |
| AWS Lambda 渲染                                  | 已可用              | 部署分布式渲染栈，并从你的笔记本或 CI 驱动渲染                                                      |
| [hyperframes.studio](https://hyperframes.studio/) | 已可用              | 用于预览、迭代、分享与渲染 HTML 原生视频项目的社区演练场                                            |
| [frame.md](https://hyperframes.studio/design)  | 已可用              | 为镜头反转你的设计系统 —— 一份智能体可据此编排视频的 DESIGN.md 超集                                 |

## 组件库

安装即拿即用的块与组件：

```bash
npx hyperframes add flash-through-white   # 着色器转场
npx hyperframes add instagram-follow      # 社交叠层
npx hyperframes add data-chart            # 动态图表
```

在 [hyperframes.heygen.com/catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart) 浏览组件库。

## 为什么选择 HyperFrames？

- **HTML 原生：** 合成就是带 data 属性的 HTML 文件。无需 React，没有专有时间线格式。
- **对智能体友好：** 智能体本来就会写 HTML，而且 CLI 默认非交互。
- **确定性：** 相同输入、相同帧、相同输出。为 CI、回归测试与自动化渲染而构建。
- **无构建步骤：** `index.html` 合成可原样播放，并能在浏览器中直接预览。
- **基于适配器的动画：** 可引入 GSAP、CSS 动画、Lottie、Three.js、Anime.js、WAAPI，或自定义运行时。
- **开源：** Apache 2.0 许可证，没有按次渲染收费或商业使用门槛。

## HyperFrames 与 Remotion 对比

HyperFrames 的灵感来自 [Remotion](https://www.remotion.dev)。两者都用无头 Chrome 与 FFmpeg 渲染视频。主要区别在于创作模型：Remotion 押注于 React 组件；HyperFrames 押注于人类与智能体都能轻松编写的纯 HTML。

|                          | **HyperFrames**                 | **Remotion**                      |
| ------------------------ | ------------------------------- | --------------------------------- |
| 创作方式                 | HTML + CSS + 可定位动画         | React 组件                        |
| 构建步骤                 | 无；`index.html` 原样播放       | 需要打包器                        |
| 智能体交付               | 纯 HTML 文件                    | JSX / React 项目                  |
| 库时钟动画               | 通过适配器可定位、逐帧精确      | 墙钟动画模式需格外小心            |
| 分布式渲染               | 本地与 AWS Lambda 渲染路径      | Remotion Lambda，成熟的云渲染器  |
| 许可证                   | Apache 2.0                      | 源码可见的 Remotion 许可证        |

完整对比请阅读 [HyperFrames 与 Remotion 对比指南](https://hyperframes.heygen.com/guides/hyperframes-vs-remotion)。

## 文档

完整文档：[hyperframes.heygen.com/introduction](https://hyperframes.heygen.com/introduction)

- [快速开始](https://hyperframes.heygen.com/quickstart)
- [作品展示](https://hyperframes.heygen.com/examples)
- [指南](https://hyperframes.heygen.com/guides/gsap-animation)
- [API 参考](https://hyperframes.heygen.com/packages/core)
- [组件库](https://hyperframes.heygen.com/catalog/blocks/data-chart)
- [示例](https://hyperframes.heygen.com/examples)
- [AWS Lambda 渲染](https://hyperframes.heygen.com/deploy/aws-lambda)

## 软件包

| 软件包                                                           | 描述                                                            |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| [`hyperframes`](https://github.com/heygen-com/hyperframes/tree/main/packages/cli)                                    | 用于创建、预览、lint 与渲染合成的 CLI                          |
| [`@hyperframes/core`](https://github.com/heygen-com/hyperframes/tree/main/packages/core)                             | 类型、解析器、生成器、linter、运行时与帧适配器                 |
| [`@hyperframes/engine`](https://github.com/heygen-com/hyperframes/tree/main/packages/engine)                         | 使用 Puppeteer 与 FFmpeg 的可定位页面转视频捕获引擎            |
| [`@hyperframes/producer`](https://github.com/heygen-com/hyperframes/tree/main/packages/producer)                     | 用于捕获、编码与混音的完整渲染流水线                           |
| [`@hyperframes/studio`](https://github.com/heygen-com/hyperframes/tree/main/packages/studio)                         | 基于浏览器的合成编辑器界面                                      |
| [`@hyperframes/player`](https://github.com/heygen-com/hyperframes/tree/main/packages/player)                         | 可嵌入的 `<hyperframes-player>` Web 组件                       |
| [`@hyperframes/shader-transitions`](https://github.com/heygen-com/hyperframes/tree/main/packages/shader-transitions) | 用于合成的 WebGL 着色器转场                                    |
| [`@hyperframes/aws-lambda`](https://github.com/heygen-com/hyperframes/tree/main/packages/aws-lambda)                 | 用于分布式渲染的 AWS Lambda SDK 与部署面                        |

## 社区

HyperFrames 已在 [HeyGen](https://www.heygen.com) 投入生产使用，并有来自 [tldraw](https://tldraw.com)、[TanStack](https://tanstack.com) 等团队的社区示例，详见 [ADOPTERS.md](https://github.com/heygen-com/hyperframes/blob/main/ADOPTERS.md)。如果你的团队正在使用 HyperFrames，欢迎提交 PR。

- 问题与想法：[Discord](https://discord.gg/fzbdWyjphr)
- 缺陷与功能请求：[GitHub Issues](https://github.com/heygen-com/hyperframes/issues)
- 用户调研：[与 HyperFrames 团队预约一次轻松的 30 分钟交流](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cSpKoDgmcmRrgekrnrgqmvPT8W6F2Zg6e7MY7IJqaZKwpn_I0NdTHkN390iguMepE_NVg8ezb?gv=true) —— 无需准备，也无销售推销
- 安全报告：[SECURITY.md](https://github.com/heygen-com/hyperframes/blob/main/SECURITY.md)
- 贡献：[CONTRIBUTING.md](https://github.com/heygen-com/hyperframes/blob/main/CONTRIBUTING.md)

## 开发须知

本仓库使用 [Git LFS](https://git-lfs.com) 来存储 `packages/producer/tests/**/output.mp4` 下的黄金回归测试基线（约 240 MB 的 `.mp4` 文件）。如果你要克隆完整仓库用于开发，请先安装 Git LFS：

```bash
# macOS
brew install git-lfs

# Ubuntu / Debian
sudo apt install git-lfs

# Windows
winget install GitHub.GitLFS

# 然后，每台机器只需执行一次
git lfs install
```

如果你只需要源码文件，可以跳过 LFS 内容：

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/heygen-com/hyperframes.git
```

## 许可证

[Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE)

### 分享视频以供评审

用 `npx hyperframes auth login` 登录，然后运行 `npx hyperframes share` 选择谁可以打开渲染好的评审页。当改动应成为新版本时使用 `share --update`，网页端设置使用 `share --manage`。CLI 与 Desktop 共用同一套分享系统，每个工作区提供五个免费项目。既有的旧版发布链接仍然可访问。
