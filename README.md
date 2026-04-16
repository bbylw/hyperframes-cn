<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/heygen-com/hyperframes/blob/main/docs/logo/dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://github.com/heygen-com/hyperframes/blob/main/docs/logo/light.svg">
    <img alt="HyperFrames" src="https://github.com/heygen-com/hyperframes/blob/main/docs/logo/light.svg" width="300">
  </picture>
</p>

> **📌 本项目汉化自 [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes)**

<p align="center">
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/v/hyperframes.svg?style=flat" alt="npm 版本"></a>
  <a href="https://www.npmjs.com/package/hyperframes"><img src="https://img.shields.io/npm/dm/hyperframes.svg?style=flat" alt="npm 下载量"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="许可证"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D22-brightgreen" alt="Node.js"></a>
</p>

<p align="center"><b>编写 HTML。渲染视频。为 AI 智能体而生。</b></p>

<p align="center">
  <img src="https://github.com/heygen-com/hyperframes/blob/main/docs/images/readme-demo.gif" alt="HyperFrames 演示 — 左侧 HTML 代码转换为右侧渲染视频" width="800">
</p>

Hyperframes 是一个开源视频渲染框架，让你能够创建、预览和渲染基于 HTML 的视频合成作品 —— 并为 AI 智能体提供原生支持。

## 快速开始

### 方式 1：使用 AI 编程智能体（推荐）

安装 HyperFrames 技能，然后描述你想要的视频：

```bash
npx skills add heygen-com/hyperframes
```

这将教会你的智能体（Claude Code、Cursor、Gemini CLI、Codex）如何编写正确的合成作品和 GSAP 动画。在 Claude Code 中，这些技能会注册为斜杠命令 —— 调用 `/hyperframes` 来创作合成作品，`/hyperframes-cli` 获取 CLI 命令，`/gsap` 获取动画帮助。

#### 试试看：示例提示词

复制以下任意提示词到你的智能体中开始使用。`/hyperframes` 前缀会显式加载技能上下文，确保你第一次就能获得正确的输出。

**冷启动 — 描述你想要什么：**

> 使用 `/hyperframes`，创建一个 10 秒的产品介绍视频，包含淡入标题、背景视频和背景音乐。

**热启动 — 将现有内容转换为视频：**

> 查看这个 GitHub 仓库 https://github.com/heygen-com/hyperframes 并使用 `/hyperframes` 向我解释它的用途和架构。

> 使用 `/hyperframes` 将附件中的 PDF 总结为一个 45 秒的宣传视频。

> 使用 `/hyperframes` 将这个 CSV 文件转换为动画柱状图竞赛。

**特定格式：**

> 使用 `/hyperframes` 制作一个关于 [主题] 的 9:16 TikTok 风格钩子视频，配合 TTS 旁白同步的弹跳字幕。

**迭代 — 像视频编辑器一样与智能体对话：**

> 将标题放大 2 倍，切换到深色模式，并在结尾添加淡出效果。

> 在 0:03 处添加一个下三分之一字幕，显示我的名字和职位。

智能体负责脚手架搭建、动画制作和渲染。查看更多模式请访问 [提示词指南](https://hyperframes.heygen.com/guides/prompting)。

### 方式 2：手动启动项目

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # 在浏览器中预览（实时重载）
npx hyperframes render       # 渲染为 MP4
```

`hyperframes init` 会自动安装技能，因此你可以随时交给 AI 智能体处理。

**要求：** Node.js >= 22, FFmpeg

## 为什么选择 Hyperframes？

- **HTML 原生** — 合成作品是带有数据属性的 HTML 文件。无需 React，无需专有 DSL。
- **AI 优先** — 智能体已经懂 HTML。CLI 默认非交互式，专为智能体驱动的工作流设计。
- **确定性渲染** — 相同输入 = 相同输出。专为自动化流水线打造。
- **帧适配器模式** — 自带动画运行时（GSAP、Lottie、CSS、Three.js）。

## 工作原理

使用数据属性将视频定义为 HTML：

```html
<div id="stage" data-composition-id="my-video" data-start="0" data-width="1920" data-height="1080">
  <video
    id="clip-1"
    data-start="0"
    data-duration="5"
    data-track-index="0"
    src="intro.mp4"
    muted
    playsinline
  ></video>
  <img
    id="overlay"
    class="clip"
    data-start="2"
    data-duration="3"
    data-track-index="1"
    src="logo.png"
  />
  <audio
    id="bg-music"
    data-start="0"
    data-duration="9"
    data-track-index="2"
    data-volume="0.5"
    src="music.wav"
  ></audio>
</div>
```

在浏览器中即时预览。在本地或 Docker 中渲染为 MP4。

## 组件库

50+ 即用型区块和组件 —— 社交叠加层、着色器过渡、数据可视化和电影级特效：

```bash
npx hyperframes add flash-through-white   # 着色器过渡
npx hyperframes add instagram-follow      # 社交叠加层
npx hyperframes add data-chart            # 动画图表
```

浏览完整组件库请访问 **[hyperframes.heygen.com/catalog](https://hyperframes.heygen.com/catalog/blocks/data-chart)**。

## 文档

完整文档请访问 **[hyperframes.heygen.com/introduction](https://hyperframes.heygen.com/introduction)** —— [快速开始](https://hyperframes.heygen.com/quickstart) | [指南](https://hyperframes.heygen.com/guides/gsap-animation) | [API 参考](https://hyperframes.heygen.com/packages/core) | [组件库](https://hyperframes.heygen.com/catalog/blocks/data-chart)

## 包

| 包                                                          | 描述                                                 |
| ---------------------------------------------------------------- | ----------------------------------------------------------- |
| [`hyperframes`](https://github.com/heygen-com/hyperframes/tree/main/packages/cli)                                    | CLI — 创建、预览、检查 lint 和渲染合成作品        |
| [`@hyperframes/core`](https://github.com/heygen-com/hyperframes/tree/main/packages/core)                             | 类型、解析器、生成器、linter、运行时、帧适配器 |
| [`@hyperframes/engine`](https://github.com/heygen-com/hyperframes/tree/main/packages/engine)                         | 可寻址页面到视频捕获引擎（Puppeteer + FFmpeg）  |
| [`@hyperframes/producer`](https://github.com/heygen-com/hyperframes/tree/main/packages/producer)                     | 完整渲染流水线（捕获 + 编码 + 音频混合）      |
| [`@hyperframes/studio`](https://github.com/heygen-com/hyperframes/tree/main/packages/studio)                         | 基于浏览器的合成作品编辑器 UI                         |
| [`@hyperframes/player`](https://github.com/heygen-com/hyperframes/tree/main/packages/player)                         | 可嵌入的 `<hyperframes-player>` Web 组件             |
| [`@hyperframes/shader-transitions`](https://github.com/heygen-com/hyperframes/tree/main/packages/shader-transitions) | 用于合成作品的 WebGL 着色器过渡                   |

## 技能

HyperFrames 提供 [skills](https://github.com/vercel-labs/skills)，用于教授 AI 智能体通用文档未涵盖的框架特定模式。

```bash
npx skills add heygen-com/hyperframes
```

| 技能                  | 教学内容                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------- |
| `hyperframes`          | HTML 合成作品创作、字幕、TTS、音频响应动画、过渡             |
| `hyperframes-cli`      | CLI 命令：init、lint、preview、render、transcribe、tts、doctor                           |
| `hyperframes-registry` | 通过 `hyperframes add` 安装区块和组件                                       |
| `gsap`                 | GSAP 动画 API、时间线、缓动、ScrollTrigger、插件、React/Vue/Svelte、性能 |

## 贡献

请参阅 [CONTRIBUTING.md](https://github.com/heygen-com/hyperframes/blob/main/CONTRIBUTING.md) 了解贡献指南。

## 许可证

[Apache 2.0](https://github.com/heygen-com/hyperframes/blob/main/LICENSE)