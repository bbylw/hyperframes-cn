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
  <a href="https://discord.gg/EbK98HBPdk"><img src="https://img.shields.io/badge/Discord-Join-5865F2?logo=discord&logoColor=white" alt="Discord"></a>
</p>

<p align="center"><b>用 HTML 写视频。由 AI 智能体驱动。</b></p>

<p align="center">
  <a href="https://hyperframes.heygen.com/quickstart">快速开始</a> |
  <a href="https://hyperframes.heygen.com/showcase">作品展示</a> |
  <a href="https://www.hyperframes.dev/">在线演练场</a> |
  <a href="https://hyperframes.heygen.com/catalog/blocks/data-chart">组件库</a> |
  <a href="https://hyperframes.heygen.com/introduction">文档</a> |
  <a href="https://discord.gg/EbK98HBPdk">Discord</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/heygen-com/hyperframes/main/docs/public/images/hyperframes-logo-motion-1280-trimmed.webp" alt="HyperFrames 演示：左侧 HTML 代码实时转换成右侧渲染出的视频" width="800">
</p>

HyperFrames 是一个开源框架，可将 HTML、CSS、媒体与可定位（seekable）动画转化为确定性的 MP4 视频。你可以在本地通过 CLI 使用它，让 AI 编程智能体借助 skills 使用它，或者把它作为托管创作工作流背后的渲染核心。

## 快速开始

### 与 AI 编程智能体一起使用

安装 HyperFrames skills，然后描述你想要的视频：

```bash
npx skills add heygen-com/hyperframes
```

> 选择器打开时默认不预选任何项 —— 你只需要 **核心 Skills** 分组：`/hyperframes` 路由会按需安装各个创作工作流。智能体与非交互式运行应改用 `npx hyperframes skills update`，它会精确安装核心集合；而非交互式的 `skills add`（不带 `--skill`）会安装全部 20 个。
>
> `skills add` 解析的是 skills.sh 注册表的 blob，可能比 `main` 分支滞后数小时。`npx hyperframes skills update` 则从当前 `main` 分支安装，因此当你需要某个 skill 的最新副本时，请优先使用它。

试着这样提问：

> 使用 `/hyperframes`，制作一段 10 秒的产品宣传片，包含淡入标题、背景视频，以及轻微的背景音乐。

这些 skills 会教智能体掌握 HyperFrames 的生产闭环：规划视频、编写合法的 HTML、接入可定位动画、添加媒体、做 lint 检查、预览并渲染。它们适用于 Claude Code、Cursor、Gemini CLI、Codex 以及其他支持 skills 的编程智能体。

## Skills

HyperFrames 内置 20 个智能体可按需加载的 skills。请先阅读 `/hyperframes` —— 它是路由器和能力地图；对于任何「帮我做一个…」的请求（视频、演示文稿，还是合成搬运），它都能挑选合适的工作流，并指向下方的领域 skills。

默认使用 **核心集合** —— 路由器会按需安装各个创作工作流。`npx hyperframes skills update` 可以在任何地方精确安装这套集合；交互式选择器（`npx skills add heygen-com/hyperframes`）将其列为 “Core Skills” 分组，且默认不预选任何项。该选择器仅支持交互操作 —— 非交互式或缺少 `--skill` 的智能体运行会安装全部 20 个。使用 `npx skills add heygen-com/hyperframes --all` 可主动安装全部 20 个（跳过选择器），或使用 `npx skills add heygen-com/hyperframes --skill <name>` 只安装单个（用裸名，不带前导 `/`）。

此后安装始终保持精简：`npx hyperframes init` 会让 **核心集合** 保持最新（路由器、`hyperframes-*` 领域 skills 以及 `media-use` —— 外加已经安装的内容；`/figma` 仍按需加载），且绝不会擅自扩展局部安装；创作工作流 **按需安装** —— 路由器在进入某个工作流前会先运行 `npx hyperframes skills update <workflow>`。没有任何操作会在你背后偷偷重新拉取整套集合。

### 上传到 Codex

基于已提交的 `HEAD` 版本清单、品牌素材和 skills，构建可用于上传的 Codex 插件包：

```bash
bun run package:codex-plugin
```

该命令会写出 `dist/hyperframes-plugin.zip`，其根目录为 `hyperframes/`，若压缩包超过 Codex 的 100 MB 上传上限则会构建失败。

### 路由器

| Skill          | 适用场景                                                                                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/hyperframes` | **任何「制作 / 创建 / 编辑 / 动效化 / 渲染」视频、动画或动态图形的请求都请先读它。** 领域 skills 的能力地图、在开头确认每份创作需求的意图层，以及下方创作工作流的意图路由器。                                                                                                    |

### 创作工作流

| Skill                      | 适用场景                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/product-launch-video`    | 任何**网站** —— 对产品进行营销 / 发布 / 推广（通过其 URL、简报或脚本），或以网站自身视觉为主的站点导览 / 展示 / 社交短片。最长约 3 分钟（最佳区间为 30–90 秒）。                                                                                   |
| `/faceless-explainer`      | 基于任意文本**解释某个主题 / 概念** —— 没有产品、没有 URL、不抓取网站；所有视觉都由 LLM 生成（排版 / 抽象 / 图示 / 数据可视化）。                                                                                                                  |
| `/pr-to-video`             | 一个 **GitHub 拉取请求**（PR URL、`owner/repo#N` 引用，或“这个 PR”）→ 更新日志 / 功能揭晓 / 修复 / 重构讲解视频，通过 `gh` CLI 读取。                                                                                                              |
| `/embedded-captions`       | 为已有的真人出镜视频**添加字幕 / 标题**（原片不动）—— 逐字字幕条、主体身后的嵌入式高潮画面，或纯电影感嵌入。                                                                                                                                       |
| `/talking-head-recut`      | 为已有的真人出镜 / 访谈 / 播客视频**套上设计过的图形叠层** —— 下三分之一栏、数据标注、动态标题、引语卡片、侧边栏、画中画。                                                                                                                         |
| `/motion-graphics`         | 一段简短、**无旁白、设计主导的动态图形**（约 10 秒以内）—— 动态字体、数据 / 图表爆点、Logo 片头、下三分之一栏、动态推文 / 标题。输出 MP4 或透明叠层。                                                                                              |
| `/music-to-video`          | 一段**音乐音轨**（音频文件、可提取音频的视频，或根据情绪简报生成的音乐）→ 一段**卡点同步**的视频 —— 歌词、幻灯片，或动态推广；节奏由音乐驱动。                                                                                                     |
| `/slideshow`               | 一场**演示文稿 / 路演 deck / 交互式 deck** —— 离散幻灯片、分段揭示、分支、热点导航、演讲者模式。输出是可导航的 deck，而不是渲染出的视频。                                                                                                           |
| `/general-video`           | **其他一切** —— 更长或多场景的作品、品牌 / 集锦短片、标题卡、静态循环、自由式合成。对输入和时长都无要求的兜底方案，也是 companion 模式（用全套工具箱协同创作）的所在。                                                                            |
| `/remotion-to-hyperframes` | 将已有的 Remotion（React）**合成的源码迁移**到 HyperFrames HTML。属于单向迁移，而非创作。                                                                                                                                                          |

### 领域 skills（按需加载）

创作工作流所组合调用的原子化能力 —— 当你需要某一特定层时，单独拉取一个即可。

| Skill                    | 覆盖范围                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/hyperframes-core`      | 合成契约 —— `data-*` 计时属性、`class="clip"`、轨道、子合成、变量、框架自有的媒体播放、确定性规则。                                                                                                                                                                                                                                                                                                                                            |
| `/hyperframes-animation` | 全部动画知识 —— 原子化运动规则、场景蓝图、转场、运行时适配器（GSAP / Lottie / Three.js / Anime.js / CSS / WAAPI / TypeGPU）。                                                                                                                                                                                                                                                                                                                     |
| `/hyperframes-keyframes` | 跨运行时的、可安全定位（seek-safe）的关键帧创作 —— GSAP 时间线、CSS 关键帧、Anime.js、WAAPI、FLIP、路径、遮罩、SVG 形变 / 描边、3D 景深 —— 外加用于诊断已渲染运动的 `hyperframes keyframes`。                                                                                                                                                                                                                                                     |
| `/hyperframes-creative`  | 非动画类的创意方向 —— `frame.md` / `design.md`、调色板、排版、旁白、节拍规划、音频响应式视觉、合成模式。                                                                                                                                                                                                                                                                                                                                        |
| `/media-use`             | 媒体操作系统 —— 将任意媒体需求（BGM、音效、图片、图标、Logo、配音、调色、LUT）解析为一个冻结的本地文件，或一段可粘贴的块 + 账目记录；当组件库缺货时通过 TTS / 音乐 / 图像模型生成；转录、加字幕、去背景，并在多个项目间复用素材。一个共享的音频引擎 + 清单追踪。                                                                                                                                                                                   |
| `/hyperframes-cli`       | CLI 开发闭环 —— `init`、`lint`、`check`、`snapshot`、`preview`、`render`、`publish`、`doctor`，外加 HeyGen 托管的云端渲染（`cloud render`）与 AWS Lambda 渲染（`lambda deploy / render / progress`）。                                                                                                                                                                                                                                          |
| `/hyperframes-audio`     | 为合成中已放置的音频做混音 —— 旁白雕刻（仅在人声所占频段内压低音乐底床，静态或动态皆可，含电平匹配）、效果链（EQ、压缩器、限制器、门、饱和、延迟、混响、合唱、移相、比特压碎）、音量或任意效果参数的自动化包络，以及可承载一条链、推子和多个轨道统一自动化时钟的子混音总线（`<hf-audio-group>`）。音频的来源是 `/media-use`。                                                                                                                      |
| `/hyperframes-registry`  | 通过 `hyperframes add` 将注册表中的块和组件安装并接入合成。编写新的块或组件以回馈上游。                                                                                                                                                                                                                                                                                                                                                         |
| `/figma`                 | 将 Figma 素材、令牌、组件和分镜段落导入并重建为运动（帧被当作状态而非幻灯片读取）（REST/CLI），外加将 Motion 动画（MCP）与着色器（MCP 来源 / 原生导出）引入合成。                                                                                                                                                                                                                                                                                                                 |

关于可视化设计交付工作流，请参阅 [Claude Design 指南](https://hyperframes.heygen.com/guides/claude-design) 与 [Open Design 指南](https://hyperframes.heygen.com/guides/open-design)。

### 手动使用 CLI

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # 在浏览器中预览，支持热重载
npx hyperframes render       # 渲染为 MP4
```

**环境要求：** Node.js 22+、FFmpeg

## 你能构建什么

需要灵感？浏览 [作品展示](https://hyperframes.heygen.com/showcase)，观看、阅读、运行并混编其中已完成的视频。

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
      <a href="https://www.hyperframes.dev/design/biennale-yellow"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/biennale-yellow.png" alt="Biennale Yellow" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/biennale-yellow">Biennale Yellow</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/blockframe"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blockframe.png" alt="BlockFrame" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/blockframe">BlockFrame</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/blue-professional"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/blue-professional.png" alt="Blue Professional" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/blue-professional">Blue Professional</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/bold-poster"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/bold-poster.png" alt="Bold Poster" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/bold-poster">Bold Poster</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/broadside"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/broadside.png" alt="Broadside" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/broadside">Broadside</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/capsule"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/capsule.png" alt="Capsule" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/capsule">Capsule</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/cartesian"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cartesian.png" alt="Cartesian" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/cartesian">Cartesian</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/cobalt-grid"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/cobalt-grid.png" alt="Cobalt Grid" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/cobalt-grid">Cobalt Grid</a></b>
    </td>
  </tr>
  <tr>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/coral"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/coral.png" alt="Coral" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/coral">Coral</a></b>
    </td>
    <td width="50%" align="center">
      <a href="https://www.hyperframes.dev/design/creative-mode"><img src="https://static.heygen.ai/hyperframes-oss/docs/images/design-templates/creative-mode.png" alt="Creative Mode" width="100%"></a>
      <br><b><a href="https://www.hyperframes.dev/design/creative-mode">Creative Mode</a></b>
    </td>
  </tr>
</table>

在 [hyperframes.dev/design](https://www.hyperframes.dev/design) 浏览并混编全部模板。

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
| [hyperframes.dev](https://www.hyperframes.dev/) | 已可用              | 用于预览、迭代、分享与渲染 HTML 原生视频项目的社区演练场                                            |
| [frame.md](https://www.hyperframes.dev/design)  | 已可用              | 为镜头反转你的设计系统 —— 一份智能体可据此编排视频的 DESIGN.md 超集                                 |

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
- [作品展示](https://hyperframes.heygen.com/showcase)
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

- 问题与想法：[Discord](https://discord.gg/EbK98HBPdk)
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
