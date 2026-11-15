import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "ref-html-schema": {
    lede: "HyperFrames 使用普通 HTML 和 CSS 负责外观。一小集属性",
    sections: [
      {
        h: "最小合成",
        p: "",
        paras: ["root 是真实、显式定尺寸的盒子。其 `data-composition-id` 与时间线注册键匹配。"],
        codeBlocks: [
          {
            code: '<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=1920, height=1080" />\n    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>\n    <style>\n      body { margin: 0; }\n      #root {\n        position: relative;\n        width: 1920px;\n        height: 1080px;\n        overflow: hidden;\n      }\n      .clip {\n        position: absolute;\n        inset: 0;\n        display: grid;\n        place-items: center;\n      }\n    </style>\n  </head>\n  <body>\n    <div\n      id="root"\n      data-composition-id="main"\n      data-start="0"\n      data-duration="5"\n      data-width="1920"\n      data-height="1080"\n    >\n      <section\n        id="title-card"\n        class="clip"\n        data-start="0"\n        data-duration="5"\n        data-track-index="1"\n      >\n        <h1 id="title">Hello HyperFrames</h1>\n      </section>\n    </div>\n\n    <script>\n      window.__timelines = window.__timelines || {};\n      const timeline = gsap.timeline({ paused: true });\n      timeline.fromTo(\n        "#title",\n        { y: 48, opacity: 0 },\n        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },\n        0.2,\n      );\n      window.__timelines.main = timeline;\n    </script>\n  </body>\n</html>',
            file: "html",
          },
        ],
        id: "minimal-composition",
      },
      {
        h: "合成 root",
        p: "",
        paras: [
          '| 属性 | 必需 | 含义 |\n| - | - | - |\n| `data-composition-id` | 是 | 唯一合成 ID |\n| `data-start="0"` | 顶层 root 必需 | 合成开始处 |\n| `data-width` 和 `data-height` | 是 | 作者指定的帧尺寸（像素） |\n| `data-duration` | 通常 | 总渲染时长（秒） |\n| `data-no-timeline` | 仅无时间线合成 | 告知运行时不要等待时间线。没有它，从不注册时间线的合成在每次渲染时仍会等待 `player-ready-timeout`（默认 45 秒）；`hyperframes lint` 将其报告为 `missing_data_no_timeline` |',
          "显式的 root `data-duration` 即渲染长度。编译器在合成脚本运行前读取它， 因此脚本或变量覆盖不能在同次渲染中改变该值。",
          "仅当 HyperFrames 能从已注册动画运行时或定时媒体推断出有限时长时，root 才能省略 `data-duration`。Three.js、 无界动画和无时间线合成需要显式时长。",
        ],
        codeBlocks: [],
        id: "composition-root",
      },
      {
        h: "定时剪辑",
        p: "",
        paras: [
          '| 属性 | 必需 | 含义 |\n| - | - | - |\n| `id` | 是 | 用于时序、编辑和动画的稳定标识 |\n| `data-start` | 是 | 以秒为单位的开始，或相对时序表达式 |\n| `data-duration` | DOM 和嵌套合成剪辑必需；图片可选（默认 3 秒），视频和音频（源长度） | 可见槽位长度（秒） |\n| `data-track-index` | 否 | 浏览器编辑器时间线轨道，仅显示。渲染永不读取它，它也不防止重叠 |\n| `class="clip"` | 建议用于手写定时 DOM 和图片元素 | 布局和工具约定。可见性以 `data-start` 为键，但共享的 `.clip` 规则提供全帧盒子 |',
          "`data-track-index` 不控制绘制顺序。请使用 CSS `z-index` 做前后分层。同一轨道上的两个剪辑可以时间重叠；",
          "该轨道只是浏览器编辑器的显示行，不是调度约束。",
          "负的 `z-index` 值是有效的 CSS，但不透明祖先背景可能在父级未创建层叠上下文时遮住剪辑。请在该父级上添加 `isolation: isolate`，使负图层位于父级背景之上、前景兄弟之下。示例见 [前后对照](https://hyperframes.heygen.com/concepts/data-attributes.md#keep-negative-layers-inside-their-parent)。",
          "`negative_z_index` lint 警告对隔离图层也会触发，因为它检查 CSS 文本而非计算后的层叠上下文。",
          '视频可见性按媒体管理，不需要 `class="clip"`。',
          "音频没有视觉生命周期。",
        ],
        codeBlocks: [],
        id: "timed-clips",
      },
      {
        h: "媒体",
        p: "",
        paras: [
          '| 属性 | 适用对象 | 含义 |\n| - | - | - |\n| `data-media-start` / `data-playback-start` | 视频、音频、嵌套合成 | 源文件内的偏移，用于裁剪和拆分。两组读取者不一致，因此正确名称取决于元素。**只读 `data-media-start`：**时序编译器、HTML 解析器、`hyperframes validate`（只检查 `<audio>`）和引擎音频混合器（送给 ffmpeg `-ss`）。**先读 `data-playback-start`，回退到 `data-media-start`：**运行时播放器、浏览器编辑器（也会写入它）和 `hyperframes snapshot`。因为音频混合器只读 `data-media-start`，仅用 `data-playback-start` 编写的 `<video>` 会渲染出裁剪画面配未裁音频。请按类型选名：**`<video>` / `<audio>` → `data-media-start`**；**嵌套合成 → `data-playback-start`** —— 合成宿主只由播放入点优先的读取者检查（仅读媒体入点的都是 `<video>`/`<audio>` 范围）。`data-media-start` 在那里仍可作回退，但 `data-playback-start` 是浏览器编辑器为新合成宿主写入并归一化的规范名，因此编辑重写它之前另一个名称有效（它是[子时间线偏移](https://hyperframes.heygen.com/concepts/compositions.md)）。 |\n| `data-playback-rate` | 视频、音频、嵌套合成 | 播放倍率，`0.1` 到 `10`。`data-automation` 中的 `rate` 轨道可覆盖；见[变速](https://hyperframes.heygen.com/reference/speed-ramps.md) |\n| `data-volume` | 视频和音频 | 静态增益。`1` 为 0 dB，`0` 为静音，大于 `1` 的值最多提升至 `3.98`（+12 dB）。与任何音量轨道相乘，在剪辑上先于剪辑音频特效应用 |\n| `data-fade-in` / `data-fade-out` | 视频和音频 | 剪辑边缘淡入淡出（秒）：前 `data-fade-in` 秒内增益 0 → 1，后 `data-fade-out` 秒内 1 → 0。线性，锚定剪辑自身边缘（淡出跟随后裁），且在 `data-volume` 和任何音量轨道之上叠乘。两者合计超过剪辑时长时会被缩放以在内侧相遇。浏览器编辑器可拖音频剪辑顶角的圆点，或在检查器的 Fade 行输入 |\n| `data-has-audio="true"` | 视频 | 声明该视频贡献音频 |',
          "视频和音频的内在时长已知、且应播放完剩余源时，可省略 `data-duration`。",
          "不要命令式调用 `play()`、`pause()` 或设置 `currentTime`。",
          'HyperFrames 拥有媒体播放和定位。带声的 `<video>` 声明 `data-has-audio="true"` 且不静音。静音素材用 `muted`。每个定时 `<video>` 必须二选一（lint `video_missing_muted`）。',
          "媒体可位于嵌套合成标记内部。保持元素 ID 在组装项目中唯一，因为渲染时帧注入以这些 ID 为目标。",
        ],
        codeBlocks: [
          {
            code: '<video\n  id="demo"\n  src="./assets/demo.mp4"\n  data-start="0"\n  data-duration="8"\n  data-track-index="0"\n  muted\n  playsinline\n></video>',
            file: "html",
          },
        ],
        id: "media",
      },
      {
        h: "色彩校正与媒体特效",
        p: "",
        paras: [
          "浏览器编辑器和 CLI 将色彩校正、调色、完成控件、LUT 和 媒体特效存于图片或视频的 `data-color-grading` 上： 当前特效家族包括 essentials、retro 和 glitch、print 和 艺术处理。运行 `npx hyperframes media-treatment --capabilities --json` 获取当前",
          "机器可读入口，而不是硬编码旧特效列表。",
          "调色管线适用于真实 `<img>` 和 `<video>` 元素。它 不校完整 HTML 场景。常规编写使用浏览器编辑器或 [`media-treatment`](https://hyperframes.heygen.com/packages/cli#media-treatment)；工作流和当前 SDR/HDR 边界见",
          "[色彩校正](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color) 与 [媒体特效](https://hyperframes.heygen.com/guides/media-effects.md)。",
        ],
        codeBlocks: [
          {
            code: '<video\n  id="demo"\n  src="./assets/demo.mp4"\n  data-color-grading=\'{\n    "preset": "clean-studio",\n    "intensity": 0.8,\n    "adjust": { "highlights": -0.08, "shadows": 0.06 },\n    "details": { "grain": 0.12, "vignette": 0.08 },\n    "effects": { "bloom": 0.12 },\n    "colorSpace": "rec709"\n  }\'\n></video>',
            file: "html",
          },
        ],
        id: "color-grading-and-media-effects",
      },
      {
        h: "相对时序",
        p: "",
        paras: [
          "非数字 `data-start` 引用同一合成中另一个剪辑的末尾： 支持形式为 `clip-id`、`clip-id + seconds` 和 `clip-id - seconds`。引用保留在同一合成内，必须解析为 已知时长，且不能成环。刻意重叠放在不同轨道。",
        ],
        codeBlocks: [
          {
            code: '<video\n  id="intro"\n  data-start="0"\n  data-duration="4"\n  data-track-index="0"\n  src="./intro.mp4"\n  muted\n  playsinline\n></video>\n\n<section\n  id="result"\n  class="clip"\n  data-start="intro + 0.5"\n  data-duration="3"\n  data-track-index="0"\n>\n  Result\n</section>',
            file: "html",
          },
        ],
        id: "relative-timing",
      },
      {
        h: "嵌套合成",
        p: "",
        paras: [
          "宿主声明固定时间线窗口： 宿主 `data-composition-id` 必须与源文件内部 ID 及其时间线注册键匹配。宿主 `data-duration` 控制嵌套合成可见时长。更短的内部时间线保持其最终状态； 更短的宿主时长切断槽位。",
          "嵌套合成文件通过 `<template>` 传输其实时标记。该合成需要的样式和脚本必须写在模板内部： HyperFrames 独立地定位嵌套时间线。不要手动将子时间线添加到父级 GSAP 时间线。",
        ],
        codeBlocks: [
          {
            code: '<div\n  id="pricing-scene"\n  data-composition-id="pricing"\n  data-composition-src="./compositions/pricing.html"\n  data-start="4"\n  data-duration="6"\n  data-track-index="1"\n  data-width="1920"\n  data-height="1080"\n></div>',
            file: "html",
          },
          {
            code: '<template>\n  <style>\n    #root {\n      position: absolute;\n      inset: 0;\n    }\n  </style>\n\n  <div\n    id="root"\n    data-composition-id="pricing"\n    data-width="1920"\n    data-height="1080"\n  >\n    <!-- scene content -->\n  </div>\n\n  <script>\n    window.__timelines = window.__timelines || {};\n    const timeline = gsap.timeline({ paused: true });\n    // scene animation\n    window.__timelines.pricing = timeline;\n  </script>\n</template>',
            file: "html",
          },
        ],
        id: "nested-compositions",
      },
      {
        h: "变量",
        p: "",
        paras: [
          "用 `data-composition-variables` 声明模式，再经渲染或嵌套宿主传入值： 直接绑定使用 `data-var-text`、`data-var-src` 或 CSS `var(--variableId)`。值影响逻辑时使用 `getVariables()`。",
        ],
        codeBlocks: [
          {
            code: '<html\n  data-composition-variables=\'[\n    {"id":"title","type":"string","label":"Title","default":"Hello"}\n  ]\'\n>',
            file: "html",
          },
          {
            code: '<div\n  data-composition-id="pricing"\n  data-composition-src="./compositions/pricing.html"\n  data-variable-values=\'{"title":"Built for teams"}\'\n  data-start="0"\n  data-duration="6"\n  data-track-index="1"\n  data-width="1920"\n  data-height="1080"\n></div>',
            file: "html",
          },
        ],
        id: "variables",
      },
      {
        h: "动画约定",
        p: "",
        paras: [
          "使用 GSAP 的合成必须： HyperFrames 控制定位。合成代码描述给定时刻视觉状态的样子。",
          "异步设置，如[测量文字前先加载字体](https://hyperframes.heygen.com/guides/gsap-animation.md#load-fonts-before-measuring-text)，受支持。请在回调末尾、其补间加完后注册完成的时间线。在异步构建完成前不要注册空时间线。",
          "每个带 `data-composition-id` 的元素都参与时间线就绪判定。",
          "对于静态嵌套段，请改用普通 `id`，或添加 `data-no-timeline` 声明不会注册时间线。否则渲染器会等待该元素时间线长达播放器就绪超时。`hyperframes lint` 将没有匹配时间线注册也没有 显式退出的裸合成宿主报告为 `missing_data_no_timeline`。",
        ],
        codeBlocks: [],
        bullets: [
          "用 `{ paused: true }` 创建一个有限时间线；",
          "在加完其补间后将其注册到 `window.__timelines`；",
          "使用与 `data-composition-id` 相同的键；",
          "避免墙钟状态、未播种随机数和无限重复。",
        ],
        id: "animation-contract",
      },
      {
        h: "验证",
        p: "",
        paras: [
          "`lint` 检查静态约定。`check` 在浏览器中打开项目，检查运行时行为、布局、运动和对比度。最终视觉门控请看代表性快照和成品渲染。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "validate",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[合成](https://hyperframes.heygen.com/concepts/compositions.md)",
          "[使用数据属性的时间元素](https://hyperframes.heygen.com/concepts/data-attributes.md)",
          "[合成](https://hyperframes.heygen.com/sdk/reference/composition.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "ref-color-grading": {
    lede: "当浏览器编辑器控件不够用时，请使用此参考：你需要把分级写进 HTML、通过自动化应用它、动画控制某个受支持的属性，或把特效限制在合成区域内。关于视觉校正和日常浏览器编辑器使用，请先查看[颜色分级](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color)。",
    sections: [
      {
        h: "持久化分级",
        p: "",
        paras: [
          "浏览器编辑器和 CLI 会把已解析的分级存入 `data-color-grading`： 通过 CLI 应用相同的有效载荷： 添加 `--dry-run --json` 可在不写入的情况下检查改动。使用 `--clear` 可移除该处理。",
        ],
        codeBlocks: [
          {
            code: '<video\n  id="interview"\n  src="./assets/interview.mp4"\n  data-color-grading=\'{"preset":"skin-soft","intensity":0.7}\'\n></video>',
            file: "html",
          },
          {
            code: 'npx hyperframes media-treatment \\\n  --selector \'#interview\' \\\n  --grading \'{"preset":"skin-soft","intensity":0.7}\' \\\n  --apply',
            file: "bash",
          },
        ],
        id: "persist-a-grade",
      },
      {
        h: "为整条轨道分级",
        p: "",
        paras: [
          "一个被剪切成数百个片段的机位只需设置一次分级。把分级放在 `<hf-color-group>` 上，再用 `data-color-group` 让每个片段指向它：",
        ],
        codeBlocks: [
          {
            code: '<hf-color-group\n  id="tamer-cam"\n  data-label="Tamer"\n  data-color-grading=\'{"preset":"skin-soft","intensity":0.7}\'\n></hf-color-group>\n\n<video id="tamer-01" data-color-group="tamer-cam" src="./assets/tamer.mp4" …></video>\n<video id="tamer-02" data-color-group="tamer-cam" src="./assets/tamer.mp4" …></video>\n<video\n  id="tamer-03"\n  data-color-group="tamer-cam"\n  data-color-grading=\'{"adjust":{"exposure":0.3}}\'\n  src="./assets/tamer.mp4"\n  …\n></video>',
            file: "html",
          },
        ],
        bullets: [
          "组上的 `data-color-grading` 与片段上的 JSON 格式相同。编辑它会重新为所有成员分级，包括预览和渲染。",
          "`data-color-group` 写在 `<video>`、`<img>` 或 `<canvas>` 上。成员关系由成员持有，因此删除片段后它会自动离开该组。",
          "**片段自身的 `data-color-grading` 优先。** 它会替换该片段的组分级，因此上面的 `tamer-03` 只得到曝光提升，而不得到 skin-soft。",
          '`data-color-group=""` 表示无组；如果某个组 id 没有对应的 `<hf-color-group>` 元素，该片段不分级。移除该元素或其 `data-color-grading` 后，其成员不再分级。',
          "组不可嵌套。组 id 与元素 id 共用同一命名空间。",
          "该元素是惰性的：运行时会注入 `hf-color-group{display:contents!important}`。请用 `</hf-color-group>` 关闭，因为 HTML 会忽略自定义元素上的 `/>`。",
        ],
        id: "grade-a-whole-lane",
      },
      {
        h: "动画控制受支持的属性",
        p: "",
        paras: [
          "九个分级属性会暴露为 CSS 自定义属性，暂停的时间线可以直接补间它们： 设置后，该属性会覆盖有效载荷中该控件的值，无论它来自元素内联样式、样式表还是父级。仅在需要动画的媒体上设置，起始值应为补间的起点；静态分级不设置。然后在已注册的时间线上动画它：",
          "`--hf-color-grading-intensity` 缩放主校正、色轮、曲线、选区和 LUT。它不是细节和特效系列（如颗粒、半调、辉光、磁带或 CRT）的主控。应动画具体的已暴露属性，并先验证它确实在变化，再依赖它。",
        ],
        codeBlocks: [
          {
            code: "--hf-color-grading-ascii\n--hf-color-grading-bloom\n--hf-color-grading-blur\n--hf-color-grading-dither\n--hf-color-grading-exposure\n--hf-color-grading-intensity\n--hf-color-grading-kuwahara\n--hf-color-grading-pixelate\n--hf-color-grading-lut-intensity",
            file: "text",
          },
          {
            code: 'tl.to(\n  "#plate",\n  {\n    "--hf-color-grading-pixelate": 0.5,\n    duration: 3,\n    ease: "power2.inOut",\n  },\n  0.3,\n);',
            file: "js",
          },
        ],
        id: "animate-a-supported-property",
      },
      {
        h: "把分级限制到画面的部分区域",
        p: "",
        paras: [
          "分级按像素值选区，而不是按位置。要处理某个区域，请把它隔离为独立的媒体层：",
          "| 结果 | 层栈 |\n| - | - |\n| 只给主体分级 | 干净原版底板，然后是已分级的主体抠像 |\n| 只给背景分级 | 已分级原版底板，然后是干净主体抠像 |\n| 给主体中的一个区域分级 | 干净抠像，然后是裁剪到该区域的第二个已分级抠像 |",
          "把原始片段用作背景底板。移除主体后的底板会在羽化抠像下方留下一个空洞，并可能产生暗边。固定 `clip-path` 只在主体几乎不动时有效；真实运动需要使用 HyperFrames 之外产生的跟踪遮罩。",
        ],
        codeBlocks: [
          {
            code: '<video\n  src="media/room.mp4"\n  muted\n  data-start="0"\n  data-duration="4"\n  data-track-index="2"\n></video>\n<video\n  src="media/subject.webm"\n  muted\n  data-start="0"\n  data-duration="4"\n  data-track-index="3"\n></video>\n<video\n  src="media/subject.webm"\n  muted\n  data-start="0"\n  data-duration="4"\n  data-track-index="4"\n  style="clip-path: ellipse(9.8% 15.5% at 50.7% 14.5%)"\n  data-color-grading=\'{"intensity":1,"effects":{"pixelate":0.5}}\'\n></video>',
            file: "html",
          },
        ],
        id: "limit-a-grade-to-part-of-the-frame",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
          "[HTML 架构参考](https://hyperframes.heygen.com/reference/html-schema.md)",
          "[变更日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "ref-audio-effects": {
    lede: "当浏览器编辑器控件不够用时请使用此参考：需要把混音写进 HTML、知道某参数的精确范围、自动化某个旋钮，或理解某行为在渲染中为何与预览不同。日常使用请先查看[混音并应用特效](https://hyperframes.heygen.com/studio/audio-effects.md)，需要让智能体做什么请看[音频特效和混音](https://hyperframes.heygen.com/prompting/media-and-audio.md#mix-it)。",
    sections: [
      {
        h: "四个属性",
        p: "",
        paras: [
          "| 属性 | 内容 | 形状 | 位置 | 播放时读取 |\n| - | - | - | - | - |\n| `data-fx-chain` | 特效，按信号序 | JSON | `<audio>`、`<video>`、`<hf-audio-group>` | 是 |\n| `data-automation` | 音量或特效参数的包络 | JSON | `<audio>`、`<video>`、`<hf-audio-group>` | 是 |\n| `data-fx-carve` | 旁白侧链自身设置 | JSON | `<audio>`、`<video>` | 否——见[下文](#data-fx-carve) |\n| `data-audio-group` | 本片段所属组的 id | 纯 id，非 JSON | `<audio>`、可听 `<video>` | 是 |",
          '`data-audio-group` 是异类：纯字符串，且**在静音 `<video>` 上被忽略**（`muted`，或 `data-has-audio="false"`）。其他三是 JSON。其中只有 `data-fx-chain` 和 `data-automation` 可放在 `<hf-audio-group>` 上，在那里作用于组整条母线；`data-fx-carve` 属于片段。',
          '**把 JSON 属性双引号写出，并把 JSON 自身的引号转义为 `&quot;`、`&` 转义为 `&amp;`**——本页所有例子都如此。浏览器用 `getAttribute` 读取它，不介意哪种写法，但 `carve.mjs` 用 `name="..."` 正则找它们，单引号属性对它不可见：侧链会报告没有已有链并覆盖看不见的工作。',
          "没有任何静态校验链。无法读取的链预览会**干声**播放，使合成保持可操作；渲染会**整个混音失败**，而非送出听着合理实则错误的干声轨。",
        ],
        codeBlocks: [],
        id: "the-four-attributes",
      },
      {
        h: "`data-fx-chain`",
        p: "",
        paras: ["不转义即为：标注 Remove Rumble 的高通、标注 Reduce Mud 的峰化切、旁路的限幅器。"],
        codeBlocks: [
          {
            code: '<audio\n  id="narration"\n  src="assets/vo.wav"\n  data-start="0"\n  data-duration="12"\n  data-fx-chain="{&quot;version&quot;:1,&quot;nodes&quot;:[\n    {&quot;type&quot;:&quot;highpass&quot;,&quot;id&quot;:&quot;n1&quot;,&quot;label&quot;:&quot;Remove Rumble&quot;,\n     &quot;params&quot;:{&quot;frequency&quot;:120,&quot;q&quot;:0.707,&quot;poles&quot;:&quot;2&quot;}},\n    {&quot;type&quot;:&quot;peaking&quot;,&quot;id&quot;:&quot;n2&quot;,&quot;label&quot;:&quot;Reduce Mud&quot;,\n     &quot;params&quot;:{&quot;frequency&quot;:250,&quot;gain&quot;:-3,&quot;q&quot;:1.2}},\n    {&quot;type&quot;:&quot;limiter&quot;,&quot;id&quot;:&quot;n3&quot;,&quot;enabled&quot;:false,\n     &quot;params&quot;:{&quot;limit&quot;:-1,&quot;attack&quot;:5,&quot;release&quot;:50,&quot;level_out&quot;:0}}\n  ]}"\n></audio>',
            file: "html",
          },
        ],
        bullets: [
          "**顺序即信号序。** 每个节点处理上一个节点的产物。",
          "`type` 是[注册表](#effect-registry)中的特效 id。`params` 用人思考的单位——dB、ms、Hz。越界值读取时钳制，所以能解析的链总是可实现的。",
          "`id` 是稳定句柄。自动化按 id 定址节点，从不按位置，因此重排链不会把轨道重指到不同特效。无 id 的节点加载正常，但无法自动化。浏览器编辑器按 `n1`、`n2`、… 依次发放首个空闲 id。",
          "`label` 替换特效自身名称显示在机架上。节点在做具名任务时写一个——两个 `peaking` 节点不然会显示两行相同名字，你分辨不清哪个是 mud 切、哪个是 clarity 提升。",
          "`enabled: false` 即旁路：节点留在链中，离开信号路径。缺省为启用。",
          "`fromCarve: true` 标记侧链分析生成的节点。`fromPreset` 携带写出节点的预设 id，重套预设时靠它原地替换自己的节点。**不要手工设 `fromCarve`**——下次侧链会正好删掉这些节点。",
        ],
        id: "data-fx-chain",
      },
      {
        h: "`data-automation`",
        p: "",
        paras: [
          "这是两轨道：音轨音量到 2.5 s 降到 0.4，节点 `n2` 的 gain 沿弯曲线段到 1 s 降到 −6 dB。",
          "| 字段 | 含义 |\n| - | - |\n| `target` | 音轨自身电平用 `volume`，或 `fx.<nodeId>.<param>` |\n| `t` | 秒——**轨道在哪，时钟归谁**，见下 |\n| `v` | 参数自身单位——gain 用 dB，频率用 Hz，音量用线性倍率 |\n| `curve` | −1 到 1，弯曲*离开*某点的线段；正值先低后晚升 |\n| `viaX` / `viaY` | 线段经过的内部点（进度 0–1、已走值 0–1）；两者同在时取代 `curve` |",
        ],
        codeBlocks: [
          {
            code: 'data-automation="{&quot;version&quot;:1,&quot;lanes&quot;:[\n  {&quot;target&quot;:&quot;volume&quot;,&quot;points&quot;:[{&quot;t&quot;:0,&quot;v&quot;:1},{&quot;t&quot;:2.5,&quot;v&quot;:0.4}]},\n  {&quot;target&quot;:&quot;fx.n2.gain&quot;,&quot;points&quot;:[{&quot;t&quot;:0,&quot;v&quot;:0},{&quot;t&quot;:1,&quot;v&quot;:-6,&quot;curve&quot;:0.4}]}\n]}"',
            file: "html",
          },
        ],
        id: "data-automation",
      },
      {
        h: "两个时钟",
        p: "",
        paras: [
          '| 轨道在 | `t: 0` 含义 |\n| - | - |\n| 片段（`<audio>` / `<video>`） | **该片段**的起点。`data-start="8"` 的床声，`t: 0` 在合成时间 8 |\n| 组（`<hf-audio-group>`） | **合成时间。**组无 `data-start`，时钟从零开始 |',
          "搞反是本页最贵的错误：组轨道写片段相对时间，会落在首个成员碰巧开始的位置。预览和渲染对两时钟一致。",
        ],
        codeBlocks: [],
        id: "two-clocks",
      },
      {
        h: "音量不限于 1",
        p: "",
        paras: [
          "`volume` 轨道的 `v` 是线性增益倍率，上限 **+12 dB**，约 `3.981`——与 `data-volume` 同上限。高于 1 的增益有效并会播放；`1` 是单位增益，非上限。",
          '该轨道乘于 `data-volume`，正如编辑器中片段增益与音量关键帧叠加：`data-volume="0.5"` 在 `1` 的轨道下播放为 `0.5`。乘积共享同一 +12 dB 上限。片段和组都如此。',
          "在片段上，`data-volume` 在其特效**之前**应用，因此链中的压缩器或限幅器会受它影响；轨道在其后。组的 `data-volume` 留在其特效后，如音轨推子。",
          "轨道把首值向后保持到片段起点、末值向前保持到终点。**比人声早开始的床声因此需要显式 `t: 0` 的“不切”点，否则一开始就已 duck。** 每轨道至多 512 点。节点已删的轨道读取时被剪掉而不是报错——所以拼错 `nodeId` 会静默丢掉包络。不要猜测已发放的 id，请从链中读回。",
          "`volume` 轨道与 GSAP `volume` tween 冲突：轨道胜，tween 被忽略。Linter 报告为 `audio_volume_double_automation`。",
        ],
        codeBlocks: [],
        id: "volume-is-not-capped-at-1",
      },
      {
        h: "音轨相加；不做平均",
        p: "",
        paras: [
          '渲染按 unity 求和每个音轨。`data-volume="1"` 的音轨无论独播还是与二十条并行，都坐在源电平上，某片段结束不会提升仍在播放者。加一条轨永不调低其他轨。',
        ],
        codeBlocks: [],
        bullets: [
          "`data-volume`、`volume` 轨道、淡入淡出和组推子各只缩放自己的轨或组。翻倍人声人声 +6 dB；整个混音动多少取决于同时在播什么。",
          "求和不限幅。大音轨重叠可超过 0 dBFS。留 headroom，或在[母线](#the-master-bus-data-fx-chain-on-the-composition-root)上放 `truepeak`；`limiter` 可能放过快速峰值。",
          "导出保持成品文件在 -1 dBTP 以下。穿过它的混音会经 -3 dBTP 的 `truepeak`，只压峰。若峰值仍超，导出按一个固定量降低**整个混音**，包括安静段，CLI 打印 `audio_lowered` 警告。",
          "渲染主增益 `PRODUCER_AUDIO_GAIN`（默认 `1`）在母线链前乘一次成品求和。",
          "查电平时，对比导出版与其按所写 `data-volume` 缩放的源，在只有该轨播放的窗口中比。",
        ],
        id: "tracks-add-up-nothing-averages-them",
      },
      {
        h: "`data-fx-carve`",
        p: "",
        paras: [
          '不转义：`{"enabled":true,"sources":["voiceover"],"strength":0.25}`。',
          "这属性**播放时不读**——播放的是它产出的链和轨道。它的存在让已有侧链可改 strength，而非从滤波器反猜。",
          "旧项目可能用六个机制数字（`maxCutDb`、`bands`、`q`、`intelligibilityBias`、`duckDb`、`headroomDb`）代替 `strength`。仍可加载：深度映射回 strength，其余重派生。无 `enabled` 的存储侧链读作开，单 `source` 读作单人声 `sources` 列表，存的 `dynamic` 被忽略——每条侧链现都跟语音。",
        ],
        codeBlocks: [
          {
            code: 'data-fx-carve="{&quot;enabled&quot;:true,&quot;sources&quot;:[&quot;voiceover&quot;],&quot;strength&quot;:0.25}"',
            file: "html",
          },
        ],
        bullets: [
          "`sources` 指明**这条床声为谁腾位置**——元素 id，或组 id 每次分析展开为其当前成员。",
          "`strength` 0–1，派生整个机制。",
          "`enabled: false` 保留设置并停止侧链。它的存在是因为恰一个候选人声的床声默认被侧链；缺省“off”会被读作从未配置，默认又把它加回。",
        ],
        id: "data-fx-carve",
      },
      {
        h: "`data-audio-group`",
        p: "",
        paras: [
          "成员关系由**成员**持有，不由组嵌套成员，因此删掉的片段下次解析时自行从组消失，无残留。",
        ],
        codeBlocks: [
          {
            code: '<style>hf-audio-group { display: none !important; }</style>\n\n<hf-audio-group id="voiceover" data-label="Voiceover" data-volume="1"></hf-audio-group>\n\n<audio id="vo-intro"  data-audio-group="voiceover" src="assets/vo1.wav" …></audio>\n<audio id="vo-middle" data-audio-group="voiceover" src="assets/vo2.wav" …></audio>',
            file: "html",
          },
        ],
        bullets: [
          "`<hf-audio-group>` 是可选元数据：`data-label`、`data-volume`、`data-hidden`，以及自身的 `data-fx-chain` / `data-automation`。有成员无元素的组仍解析，用其 id 作标签。",
          '**音频和可听视频。**带声 `<video>`（`data-has-audio="true"`，无 `muted`）在预览和渲染中加入组；静音视频上 `data-audio-group` 被忽略。组不嵌套。',
          '`data-audio-group=""` 即无组。',
          "元素必须惰性。运行时注入 `hf-audio-group{display:contents!important}`，使未知自定义元素不会吃到 flex gap，其内各物照常渲染，除非组静音（`data-hidden` 照旧隐藏它）——但请你也写这条规则，以免裸预览把它铺开。用 `</hf-audio-group>` 关闭：HTML 忽略自定义元素上的 `/>`。",
          "组 id 与元素 id 共用一命名空间。",
        ],
        id: "data-audio-group",
      },
      {
        h: "母线：合成根上的 `data-fx-chain`",
        p: "",
        paras: [
          "母线即顶层合成根上的 `data-fx-chain`。它在所有片段、每组自身链和推子之后对求和跑一次，因此此处限幅器看到整个混音的峰。片段只能属一组，所以这是把一个特效铺满一切的办法。",
        ],
        codeBlocks: [
          {
            code: '<div id="root" data-composition-id="main" data-width="1920" data-height="1080"\n  data-fx-chain="{&quot;version&quot;:1,&quot;nodes&quot;:[\n    {&quot;type&quot;:&quot;truepeak&quot;,&quot;id&quot;:&quot;m1&quot;,&quot;label&quot;:&quot;Delivery ceiling&quot;,\n     &quot;params&quot;:{&quot;ceiling&quot;:-1.5,&quot;lookahead&quot;:3,&quot;release&quot;:80}}\n  ]}"\n>',
            file: "html",
          },
        ],
        bullets: [
          "只有**顶层**合成根读作母线。片段或组上的 `data-fx-chain` 保持各自含义，子合成根上的在父合成包含时不应用。单独预览或渲染的子合成文件即顶层根，其链正是彼处母线。",
          "没有主自动化：根上的 `data-automation` 不读作母线的。",
          "渲染把音轨求和为 float WAV、跑链、再编码 AAC，因此链读未削波采样。预览把链插在片段求和与监听之间。",
          "根上母线链存在时，预览按渲染那样把每个可听 `<video>` 也经该母线。无母线时，自身无链、无组、无自动化的 `1` 音量视频留在原生输出。",
          '不可读的母线链**整个混音失败**：渲染在每种严格度下都以 `audio_processing_failed` 错误停止，什么都不导出。预览只播干声且无消息。`audio_attribute_unreadable` 抓非 JSON、无 `"version": 1`、无 `nodes` 数组的链；未知特效类型仍只在渲染时现形。渲染前请先在预览检查母线链。',
        ],
        id: "the-master-bus-data-fx-chain-on-the-composition-root",
      },
      {
        h: "特效注册表",
        p: "",
        paras: [
          "十六个特效。范围外值读取时钳制。**AUTO** 标记可被自动化轨道驱动的参数；未标者不能随时间动。`@hyperframes/core/audio-fx` 的 `HF_AUDIO_FX` 是事实源头。",
        ],
        codeBlocks: [],
        id: "effect-registry",
      },
      {
        h: "滤波——音轨可用哪些频段",
        p: "",
        paras: [
          "| 特效 | 参数 |\n| - | - |\n| `highpass` | `frequency` 20–20000 Hz (300, log) **AUTO** · `q` 0.1–20 (0.707, log) **AUTO** · `poles` `1`\\|`2` (2) |\n| `lowpass` | `frequency` 100–20000 Hz (8000, log) **AUTO** · `q` 0.1–20 (0.707, log) **AUTO** · `poles` `1`\\|`2` (2) |\n| `peaking` | `frequency` 20–20000 Hz (1000, log) **AUTO** · `gain` −40–40 dB (0) **AUTO** · `q` 0.1–20 (1, log) **AUTO** |\n| `lowshelf` | `frequency` 20–2000 Hz (200, log) **AUTO** · `gain` −40–40 dB (0) **AUTO** |\n| `highshelf` | `frequency` 500–20000 Hz (4000, log) **AUTO** · `gain` −40–40 dB (0) **AUTO** |",
          "`q` 是带宽——越高越窄。`poles` 是斜度：`2` 为常见双二阶（12 dB/oct），`1` 更缓（6 dB/oct）。搁架滤波无 `q`；Web Audio 规范对它们不使用该项。",
        ],
        codeBlocks: [],
        id: "filter-which-frequencies-a-track-may-occupy",
      },
      {
        h: "动态——电平随时间如何表现",
        p: "",
        paras: [
          "| 特效 | 参数 |\n| - | - |\n| `gain` | `gain` −60–12 dB (0) **AUTO** |\n| `compressor` | `threshold` −60–0 dB (−24) · `ratio` 1–20 (4) · `attack` 0.01–2000 ms (20, log) · `release` 0.01–9000 ms (250, log) · `knee` 1–8 (2.83) · `makeup` 0–36 dB (0) · `mix` 0–1 (1) |\n| `limiter` | `limit` −24–0 dB (−1) · `attack` 0.1–80 ms (5) · `release` 1–8000 ms (50, log) · `level_out` −24–24 dB (0) |\n| `truepeak` | `ceiling` −24–0 dBTP (−1) · `lookahead` 0.5–10 ms (3) · `release` 10–2000 ms (80, log) |\n| `gate` | `threshold` −80–0 dB (−35) · `range` −80–0 dB (−24) · `ratio` 1–20 (10) · `attack` 0.01–9000 ms (1, log) · `release` 0.01–9000 ms (100, log) · `knee` 1–8 (2.83) |",
          "`gain` 的切低到 −60 dB、提止于 +12：它是腾位置的电平级，能加 40 dB 的链在起效前早已削波。`knee` 为 1 是硬拐点。`mix` 小于 1 把干声混回（并行压缩）。`range` 是门关时把下压拉多远。",
          "`limiter` 是包络跟随器：响应信号电平、无前瞻，可放过采样峰或样点间峰。交付封顶用 `truepeak`。它在 4x 过采信号上估计真峰、读 `lookahead` ms 前提以使增益峰到前已下降，并把该估计钳在 `ceiling`。各通道共一增益。输出延迟 `lookahead` 加约 0.3 ms（范围 3.3 到 10.3 ms）：离线渲染裁掉该延迟，实时预览播放它，因此声在图像后落后那一截。定位会清掉组或母线上的延迟线和保持增益。改变 `lookahead` 重建节点。",
          "封顶针对这份 4x 估计，而非波形本身。4x 插值看不到贴近 Nyquist 内容的峰，所以真峰可能超过 `ceiling`。对照理想 16x 插值测得，纯音、粉噪声和密集混音至多高 0.6 dB。把全频白噪声推进限幅器 8 dB 或更多，超 1.2 到 1.7 dB（中位 1.4 dB，28 次 10 到 30 s 运行）。也以 4x 读数的表，如 ffmpeg `ebur128=peak=true`，报同噪声约 0.1 dB，所以看不出漏测。硬交付限值下请把 `ceiling` 设至少低 2 dB：-1 dBTP 限值用 −3 dBTP。",
        ],
        codeBlocks: [],
        id: "dynamics-how-level-behaves-over-time",
      },
      {
        h: "非线性——改变波形形状",
        p: "",
        paras: [
          "| 特效 | 参数 |\n| - | - |\n| `saturate` | `type` `tanh`\\|`atan`\\|`cubic`\\|`exp`\\|`alg`\\|`quintic`\\|`sin`\\|`erf`\\|`hard` (tanh) · `threshold` −40–0 dB (−6) · `output` −24–24 dB (0) **AUTO** · `oversample` 1–8× (4) |\n| `bitcrush` | `bits` 1–32 (8) · `samples` 1–250× (1) · `mix` 0–1 (1) |",
          "`tanh` 最缓，`hard` 直接削波。更高 `oversample` 耗 CPU 更多、压混叠更低。`samples` 把每采样重复 N 次——粗糙降采样，lo-fi 性格即源于此。",
        ],
        codeBlocks: [],
        id: "nonlinear-changes-the-waveforms-shape",
      },
      {
        h: "时间——音轨位置和移动",
        p: "",
        paras: [
          "| 特效 | 参数 |\n| - | - |\n| `delay` | `time` 1–5000 ms (250, log) **AUTO** · `feedback` 0.01–0.95 (0.35) **AUTO** · `mix` 0–1 (0.4) **AUTO** |\n| `reverb` | `size` 0.05–1 (0.7) · `damping` 0–1 (0.5) · `wet` 0–1 (0.35) **AUTO** · `dry` 0–1 (0.7) **AUTO** |\n| `chorus` | `delay` 1–100 ms (7) **AUTO** · `depth` 0–10 ms (2) **AUTO** · `speed` 0.01–10 Hz (1) **AUTO** · `mix` 0–1 (0.5) **AUTO** |\n| `phaser` | `in_gain` 0–1 (0.4) **AUTO** · `out_gain` 0–2 (0.74) **AUTO** · `delay` 0.1–5 ms (3) · `decay` 0–0.99 (0.4) · `speed` 0.1–2 Hz (0.5) **AUTO** · `type` `0`\\|`1` (0) |\n| `pitchshift` | `semitones` −12–12 st (0, whole steps) · `mix` 0–1 (1) |",
          "`pitchshift` 移音高而不变播速，正是它区别于变速的地方。两参数都不可自动化——它是 worklet。",
          "混响卷积*生成的*冲激，预览和渲染生成同一个，所以房间可复现、无需另发冲激文件。更高 `damping` 使尾音高频滚得更快。`feedback` 有界小于 1，因为为 1 时永不衰减。",
        ],
        codeBlocks: [],
        id: "time-where-a-track-sits-and-how-it-moves",
      },
      {
        h: "为何某些参数不可自动化",
        p: "",
        paras: [
          "自动化一次性交给音频线程，作为原生 `AudioParam` ramp 和曲线——这正是它逐采样精度且预览渲染一致的原因。因此只有被 `AudioParam` 支着的参数可自动化。三类不行：",
          "| 类别 | 特效 | 后果 |\n| - | - | - |\n| Worklet 处理器选项 | `compressor`, `limiter`, `truepeak`, `gate`, `bitcrush`, `pitchshift` | **无参数可自动化** |\n| WaveShaper 曲线 | `saturate` 的 `type`、`threshold`、`oversample` | 只有 `output` 级是真参数 |\n| 卷积冲激 | `reverb` 的 `size`、`damping` | `wet` / `dry` 是增益级，可正常自动化 |",
          "**不可自动化参数上的轨道静默惰性。** 要让它们随时间表现不同，代以环绕包一层可自动化的 `gain` 级：压缩器前的 `gain` 轨道改变压缩器被驱动多狠，正是自动化其 threshold 大多想做的事。",
        ],
        codeBlocks: [],
        id: "why-some-parameters-cannot-be-automated",
      },
      {
        h: "预设、任务与一旋钮 profile",
        p: "",
        paras: ["它们都是可手工搭起的链的捷径。打开任一，所见皆普通特效及其参数。"],
        codeBlocks: [],
        id: "presets-jobs-and-one-knob-profiles",
      },
      {
        h: "预设",
        p: "",
        paras: [
          "二十二个，分四大家族。套用一个会**追加**；重套已在者会把自己的节点原地替换，因为位置是信号序。",
          "| 家族 | Id |\n| - | - |\n| Voice | `voice-clean`, `voice-broadcast`, `voice-warm` |\n| Repair | `rumble-cut`, `room-gate`, `boom-tame`, `harsh-tame` |\n| Character | `telephone`, `radio-am`, `megaphone`, `lofi-tape`, `pa-system`, `intercom`, `doofus-worble`, `chipmunk`, `giant`, `monster` |\n| Space | `room-tight`, `room-natural`, `hall`, `slap-echo`, `dub-throw` |",
          "`chipmunk`、`giant`、`monster` 建于 `pitchshift`，故变说话人而非渠道。",
          "`voice-clean` 是 Remove Rumble → Reduce Mud → Even Out Loudness → Add Clarity → Peak Ceiling。`voice-broadcast` 更密更前；`voice-warm` 主加 body 而非切它。",
          "预设节点包在 wet/dry 混合里，因此 `presetAmount`（0–1）淡掉整套，`fx.preset.<id>` 是可随时间拉升它的自动化目标。这是把预设当整体自动化的唯一办法——其节点没有共同参数。",
        ],
        codeBlocks: [],
        id: "presets",
      },
      {
        h: "任务",
        p: "",
        paras: [
          "五个具名 `peaking` 滤波，频率已选。选题就是选范围，正是它让单一“多少”旋钮诚实。",
          "| 任务 | 症状 | 设置 |\n| - | - | - |\n| Tame Boominess | 胸腔过多——发轰 | 200 Hz, −4 dB, Q 1.4 |\n| Reduce Mud | 闷声，如在纸板后 | 250 Hz, −3 dB, Q 1.2 |\n| Reduce Boxiness | 如小房间、如箱子 | 400 Hz, −3 dB, Q 1.4 |\n| Add Clarity | 词听不清 | 3 kHz, +2.5 dB, Q 1 |\n| Soften Harshness | 刺耳听累 | 3.2 kHz, −3 dB, Q 1.6 |",
          "手工写时，把名字带在 `label` 里——光参数不是任务。",
          "**每任务都以相同设置内嵌在预设里**，五任务正源于此。所以在叠加任务前先看预设已含什么：`voice-clean` 加 Reduce Mud 任务是 250 Hz 处 −6 dB，而本意 −3。",
        ],
        codeBlocks: [],
        id: "jobs",
      },
      {
        h: "一旋钮 profile",
        p: "",
        paras: [
          "五个特效没有诚实的单参数之脸——压缩器阈值无 ratio 即无意义。它们改给派生控件 0–1，一起设定多参数。",
          "| 特效 | 旋钮 | 0 → 1 | 设定 |\n| - | - | - | - |\n| `compressor` | Evenness | 几乎不动 → 很匀、挺压 | threshold, ratio, attack, release, makeup |\n| `gate` | Tightness | 只切真静音 → 连轻字也切 | threshold, range, release |\n| `saturate` | Warmth | 仅光泽 → 明显失真 | threshold, output |\n| `reverb` | Space | 小紧房 → 大开厅 | size, wet, dry |\n| `bitcrush` | Crush | 微沙 → 毁掉 | bits, samples, mix |",
          "Evenness、Warmth、Space **电平匹配**：补偿增益、输出微调和干声 leg 随驱动走，因此旋大不会顺带旋大音轨。Tightness、Crush 不匹配，因为没有 trim 可动。",
          "链存的是机制值，非旋钮位置——旋钮靠反求曲线读回，所以 profile 下手改参数允许且只移动旋钮。",
        ],
        codeBlocks: [],
        id: "one-knob-profiles",
      },
      {
        h: "旁白侧链",
        p: "",
        paras: [
          "侧链是**关系，非特效**。设置放在*床声*上——被处理的轨——并点名要听的人声，正如侧链压缩器。永不把侧链放在人声轨上。",
          "`strength` 派生真实混音中一起动的六数字：切多深、几频带、多宽、多偏可懂度而非裸人声能量、电平可下潜多远、声下多远作目标。",
          "| Strength | 结果 |\n| - | - |\n| `0` | 仅频谱——一频带，不做电平匹配 |\n| `0.25`（默认） | 三频带 6 dB 凹、6 dB 电平余量 |\n| `0.5` | 凹深达 10 dB——侧链开始被听作特效处 |\n| `0.5` 以上 | 安静人声下大床声的故意领地 |",
          "每值都成为语音自身电平的包络：静音不碰床声，大声段把侧链推到满深。没有静态模式。",
          "在侧链床声内，信号先过凹、再电平匹配、再你自搭之物——所以你加的限幅器仍作最后封顶。",
          "人声在测量前求和到床声时钟，因此一次分析覆盖所有。人声与床声不同时播的排除在外；它们不能掩床声。",
          "**点名组，别点名一串片段 id。** id 列表要穷尽正确、且只在下次编辑前正确——后加的第四段旁白在侧链意识外播，床声静默不下压。`sources` 点名两个以上普通片段 id 会报 `audio_carve_ungrouped_sources`。",
          "有两安排点名组**更差**，皆源于组形式比写它的分析解析更晚更广：",
          "| 安排 | 会发生什么 |\n| - | - |\n| 床声本身是人声组的成员 | 床声被当作人声交给自身，按自身内容侧链 |\n| 组还持有归为 music 或 SFX 的成员 | 该成员下次分析进入侧链，呼呼声下压床声 |",
          "它们在写它的那跑不现形——分析求和的是当时检测到的人声，存的属性再错首遍也对。下次重分析才现形，对着上跑判好的文件。床声独立一组。",
          "侧链写出的是一普通 `peaking` 滤波串加 `gain` 级，标 `fromCarve`，每侧链参数一条自动化轨道。标签就是诀窍：重跑替换上侧链，你手工搭的特效和轨道原地不动。",
        ],
        codeBlocks: [],
        id: "voiceover-carve",
      },
      {
        h: "从命令行",
        p: "",
        paras: [
          "脚本随 `media-use` 技能发布；`<SKILL_DIR>` 是该技能文件夹。",
          "整命令如此——它找人声和床声自身并打印决定： 自动选择错时用 `--bed` / `--voice`（可重复）点名轨，`--strength` 推它，`--dry-run` 只看报告不写。分不清哪轨是床声时它拒绝，不错切。",
          "**`sources` 记什么。** 被分析的每人声同属一组、且该组可安全点名时写组 id。组含床声或 music/SFX 成员时回落到片段 id——并明说——原因见上表。本跑未分析到的归类 voice 或 unknown 组员*不是*回落理由：后日开始播的片段正是点名组的意义。",
          "选轨先看名，用与浏览器编辑器选择器同一分类器，两者不相争：像音乐的名字（`music`、`bgm`、`bed`、`score`…）是床声，其下非 SFX 形其余播者是人声。需要 `PATH` 上 `ffmpeg`，项目装 `@hyperframes/core`。",
        ],
        codeBlocks: [
          {
            code: "node <SKILL_DIR>/audio/scripts/carve.mjs --comp index.html",
            file: "bash",
          },
          {
            code: "bed    music-bed (name looks like music)\nvoice  narration (only track left)\ncarve  strength 0.25\nbands  400Hz -6dB q1.4, 1000Hz -3dB q1.4, 1600Hz -3.17dB q1.4\nlevel  216-point envelope, floor -6 dB",
            file: "text",
          },
        ],
        id: "from-the-command-line",
      },
      {
        h: "组和静音",
        p: "",
        paras: [
          "组经一母线求和成员，母线载组自身音量、FX 链和自动化。渲染时每组在进主混音前以全合成长度子混成单音轨，因此组级特效听的是求和、非单个成员。",
          "| 控件 | 位置 | 达导出 |\n| - | - | - |\n| 静音 | 组元素或片段上的 `data-hidden` | **是**——静音成员从渲染混音剔除 |",
        ],
        codeBlocks: [],
        id: "groups-and-mute",
      },
      {
        h: "预览和渲染",
        p: "",
        paras: [
          "两者经同一构建读同一两属性，所以预览预言渲染：",
          "|  | 预览 | 渲染 |\n| - | - | - |\n| 环境 | 实时 `AudioContext` | 无头浏览器中的 `OfflineAudioContext` |\n| 不可读链 | **干声**播，使合成保持可操作 | **整个混音失败** |\n| 音量轨道 | 在图上排程 | 混音器烘进 PCM |\n| 播放中改属性 | `MutationObserver` 拾取 | n/a |",
          "带尾巴的特效——`reverb`、`delay`——让渲染轨比源**更长**，混音知晓增量。因此带混响床声不再恰止于 `data-duration`。这是预期的。",
        ],
        codeBlocks: [],
        id: "preview-and-render",
      },
      {
        h: "Linter 检查什么",
        p: "",
        paras: [
          "混音几乎无静态闸。四规则存在：",
          '| 规则 | 报告 |\n| - | - |\n| `audio_attribute_unreadable` | 渲染无法解析的 `data-automation` 或 `data-fx-chain`：非 JSON、无 `"version": 1`、无 `lanes` / `nodes` 数组、轨道无 `target` 或 `points`、节点无 `type`。渲染本地和云都失败 |\n| `audio_carve_ungrouped_sources` | 侧链点名两个以上普通片段 id 而非组 |\n| `audio_volume_double_automation` | 轨上 `volume` 轨道与 GSAP `volume` tween 并存——轨道胜，tween 忽略 |\n| `audio_volume_tween_overrides_gain` | 轨有编著 `data-volume` 且 `volume` 被 tween——tween 值绝对，替换增益而非缩放它 |',
          "轨道目标、特效类型和参数无物查。强制它们的是渲染。除此之外，混音靠渲染和聆听验证。",
        ],
        codeBlocks: [],
        id: "what-the-linter-checks",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[混音](https://hyperframes.heygen.com/studio/audio-effects.md)",
          "[用 data-vfx-chain 的逐像素特效](https://hyperframes.heygen.com/guides/vfx-chain.md)",
          "[颜色分级实现](https://hyperframes.heygen.com/reference/color-grading.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "ref-speed-ramps": {
    lede: "速度坡面改变 `<video>` 或 `<audio>` 片段播放时的速度：慢入节拍、快出节拍。它是 [`data-automation`](https://hyperframes.heygen.com/reference/audio-effects#the-four-attributes) 中的 `rate` 轨道，与承载音量包络的同一属性相同。",
    sections: [
      {
        h: "轨道",
        p: "",
        paras: [
          '| 字段 | 含义 |\n| - | - |\n| `target` | `"rate"` |\n| `points[].t` | 从片段开始起的秒数，不是合成开始起的秒数 |\n| `points[].v` | 速度倍率。`1` 为正常，`2` 为两倍速。钳制在 `0.1` 到 `10` 之间 |\n| `points[].curve` | 可选，`-1` 到 `1`。弯曲从该点出发的线段 |',
          "速度在各点之间按对数刻度移动，因此从 `0.5` 到 `2` 会在中点经过 `1`。轨道优先于同一元素上的常量 `data-playback-rate`。没有轨道时使用该常量。",
        ],
        codeBlocks: [],
        id: "the-lane",
      },
      {
        h: "在各处保持一致",
        p: "",
        paras: [
          "每个时刻显示的源帧来自同一个函数 `sourceTimeAt`，预览和渲染器都使用它，因此渲染显示的正是预览显示过的帧。给片段设置 `data-duration` 来固定它占用时间线的长度；不设置则长度由源片和速度决定。",
          "如果浏览器探测到已有片段上有速率轨道，导出的场景裁剪会同时保留坡面位置和源媒体的入点。",
          "音调保持不变。预览保留浏览器的默认变调修正。渲染会在短恒速切片中对音频做时间拉伸（四分之一秒，时长超过一分钟的片段切片更粗），近似复现曲线并保持音调，因此声音近似跟随坡面，而不是精确跟随。",
        ],
        codeBlocks: [],
        id: "what-stays-the-same-everywhere",
      },
      {
        h: "预设",
        p: "",
        paras: [
          "浏览器编辑器的**速度预设**菜单会在片段上绘制现成的曲线：Montage、Hero、Bullet、Jump cut、Flash in 和 Flash out。智能体可以手工编写同样的点。",
        ],
        codeBlocks: [],
        id: "presets",
      },
      {
        h: "在浏览器编辑器中编辑",
        p: "",
        paras: [
          "选择片段并打开其媒体面板。**速度**滑块设置常量速率。旁边的 **A** 开关自动控制速度，会在时间线上显示速率轨道，编辑方式与音量轨道相同。",
        ],
        codeBlocks: [],
        id: "editing-in-the-browser-editor",
      },
      {
        h: "限制",
        id: "limits",
        p: "",
        paras: [],
        bullets: [
          "只有 `<video>` 和 `<audio>` 片段支持挂载速率曲线轨道。",
          "超出 `0.1` 到 `10` 范围的倍速会被自动钳制。",
          "播放器自身的传输倍速（transport speed）是一个独立控制项，会与片段倍速相乘，且范围更窄：浏览器编辑器倍速菜单支持 `0.25` 到 `2`，Player 组件菜单最高支持到 `4`，运行时会将传输倍速请求钳制在 `0.1` 到 `5` 之间。",
        ],
        codeBlocks: [],
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
          "[节拍定格转场（Beat Freeze Cut）](https://hyperframes.heygen.com/catalog/blocks/beat-freeze-cut.md)",
          "[甩镜转场（Whip Pan Cut）](https://hyperframes.heygen.com/catalog/components/whip-pan-cut.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "ref-lint-rules": {
    lede: "`hyperframes lint`、`hyperframes check` 和 `@hyperframes/lint` 包以稳定代码报告发现。本页列出全部代码、严重度和修复。代码直接来自 `packages/lint/src/rules/` 规则集加上项目级探测（项目 lint 的一部分）。",
    sections: [
      {
        h: "结构与时间线",
        p: "",
        paras: [
          "来源：`packages/lint/src/rules/structure.ts`。",
          "标为 **Warning or error** 的五码在 CLI lint 项目时为警告，在浏览器编辑器 lint 它正在编辑的文件时为错误。",
        ],
        codeBlocks: [],
        id: "structure-and-timeline",
      },
      {
        h: "`nested_structure_needs_subcomposition`",
        p: "",
        paras: [
          "**Warning or error。** 顶层时间线元素含另一嵌套结构，而非子合成挂载。时间线每顶层元素一列，根合成只由子合成构建。",
          "**修复：** 把元素及其内容移入子合成文件，用 `data-composition-src` 挂载。",
        ],
        codeBlocks: [],
        id: "nested_structure_needs_subcomposition",
      },
      {
        h: "`timeline_element_missing_timing`",
        p: "",
        paras: [
          "**Warning or error。** 时间线元素无 `data-duration`，时间线画不出它止处。",
          "**修复：** 给元素加 `data-duration`（秒）。",
        ],
        codeBlocks: [],
        id: "timeline_element_missing_timing",
      },
      {
        h: "`caption_track_kind_missing`",
        p: "",
        paras: [
          "**Warning or error。** 元素像字幕行却未标记，时间线无法把它归到字幕轨道。",
          '**修复：** 给元素加 `data-track-kind="captions"`。',
        ],
        codeBlocks: [],
        id: "caption_track_kind_missing",
      },
      {
        h: "`multiple_caption_tracks`",
        p: "",
        paras: [
          "**Warning or error。** 字幕散在多条时间线轨道，而非一条字幕列。",
          "**修复：** 给每字幕元素相同 `data-track-index`。",
        ],
        codeBlocks: [],
        id: "multiple_caption_tracks",
      },
      {
        h: "`multiple_scene_templates`",
        p: "",
        paras: [
          "**Warning。** 文件模板内含多个持合成根的 `<template>`，而外面无合成根。只有第一个渲染；消息点名每模板。",
          "**修复：** 每文件留一合成根，或把其他场景移入各自文件。",
        ],
        codeBlocks: [],
        id: "multiple_scene_templates",
      },
      {
        h: "`clip_ends_past_root_duration`",
        p: "",
        paras: [
          "**Warning。** 片段跑过根合成 `data-duration`，在预览、海报和渲染中被截。",
          "**修复：** 延长根 `data-duration`，或让片段在其前/处止。",
        ],
        codeBlocks: [],
        id: "clip_ends_past_root_duration",
      },
      {
        h: "`nested_clip_never_visible`",
        p: "",
        paras: [
          "**Warning or error。** 定时片段坐在另一定时元素内，其时间窗与其不重叠，故永不出现。嵌套片段 `data-start` 自合成起点起，非自周围元素。子合成文件同样跑。",
          "**修复：** 给片段在合成时间下父窗内起 `data-start`，或把它移出父级。",
        ],
        codeBlocks: [],
        id: "nested_clip_never_visible",
      },
      {
        h: "合成契约",
        p: "",
        paras: ["来源：`packages/lint/src/rules/composition.ts`。"],
        codeBlocks: [],
        id: "composition-contract",
      },
      {
        h: "`invalid_composition_variables_declaration`",
        p: "",
        paras: [
          "**Error。** `data-composition-variables` 非有效 JSON 或非变量声明数组。",
          '**修复：** 提供 JSON 数组，如 `data-composition-variables=\'[{"id":"title","type":"string","label":"Title","default":"Hello"}]\'`——属性单引号、JSON 双引号。',
        ],
        codeBlocks: [],
        id: "invalid_composition_variables_declaration",
      },
      {
        h: "`invalid_variable_values_json`",
        p: "",
        paras: [
          "**Error。** `data-variable-values` 非有效 JSON。",
          '**修复：** 属性单引、JSON 键值双引，如 `data-variable-values=\'{"title":"Hello"}\'`。',
        ],
        codeBlocks: [],
        id: "invalid_variable_values_json",
      },
      {
        h: "`unknown_variable_binding`",
        p: "",
        paras: [
          "**Warning。** 元素绑了 `data-composition-variables` 未声明的变量，绑定静默保持编著 fallback。",
          "**修复：** 在合成根（`<html>`，或模板/片段合成的 `data-composition-id` 根）声明变量。",
        ],
        codeBlocks: [],
        id: "unknown_variable_binding",
      },
      {
        h: "`unloadable_media_variable_default`",
        p: "",
        paras: [
          "**Error。** 变量默认是运行时拒装的 URL，绑定元素渲染编著 fallback src，而渲染仍以 0 退出。",
          "**修复：** 用相对路径、`http(s)`、`blob:` 或 `data:image/*` URI。把文件拷入项目并相对引用。",
        ],
        codeBlocks: [],
        id: "unloadable_media_variable_default",
      },
      {
        h: "`deprecated_data_end`",
        p: "",
        paras: [
          "**Error。** 旧 `data-end` 无 `data-duration`，或邻旁 `data-duration` 与旧 `data-end` 不一致。",
          "**修复：** 用 `data-duration` 替换 `data-end`。编译器从 `data-duration` 自动生成 `data-end`。",
        ],
        codeBlocks: [],
        id: "deprecated_data_end",
      },
      {
        h: "`deprecated_data_layer`",
        p: "",
        paras: [
          "**Error。** 用了旧 `data-layer` 属性。",
          "**修复：** 用 `data-track-index` 替换它——浏览器编辑器和 linter 读的规范名。",
        ],
        codeBlocks: [],
        id: "deprecated_data_layer",
      },
      {
        h: "`duplicate_composition_id`",
        p: "",
        paras: [
          "**Error。** 同文件多元素同 `data-composition-id`——常是 `<meta>` 标签与根 `<div>` 带同 id。",
          "**修复：** `data-composition-id` 只留一处：合成根。从元数据或重复主机移除它。",
        ],
        codeBlocks: [],
        id: "duplicate_composition_id",
      },
      {
        h: "`invalid_parent_traversal_in_asset_path`",
        p: "",
        paras: [
          "**Error。** 资产路径用 `../` 上跳出项目根；渲染和预览钳制或错解。",
          "**修复：** 路径指项目内文件——自 `compositions/scene.html`，`../assets/x.png` 和 `assets/x.png` 都到项目 `assets` 文件夹。",
        ],
        codeBlocks: [],
        id: "invalid_parent_traversal_in_asset_path",
      },
      {
        h: "`composition_exceeds_inspection_viewport_cap`",
        p: "",
        paras: [
          "**Warning。** 合成大于 4096px 视口封顶，`check`、`validate`、`snapshot`、`compare` 和布局审计都钳到它。`render` 不受影响，但干净检查结果不再覆盖整画布。",
          "**修复：** 输出需要时保留创作尺寸，从渲染而非检查命令验证封顶之外的区域。",
        ],
        codeBlocks: [],
        id: "composition_exceeds_inspection_viewport_cap",
      },
      {
        h: "`composition_file_too_large`",
        p: "",
        paras: [
          "**Warning。** HTML 合成文件大到难读、难迭代、难 diff。",
          "**修复：** 拆子合成并用 `data-composition-src` 从父挂载。",
        ],
        codeBlocks: [],
        id: "composition_file_too_large",
      },
      {
        h: "`composition_heavy_overlay_count_high`",
        p: "",
        paras: [
          "**Warning。** 多元素带重叠 CSS（`filter: blur`、`radial-gradient`、`clip-path`），可封捕获性能——含隐藏者。",
          "**修复：** 拆合成并拼接片段，使每捕获只见小撮重叠；移除本不可见的叠加。",
        ],
        codeBlocks: [],
        id: "composition_heavy_overlay_count_high",
      },
      {
        h: "`missing_data_no_timeline`",
        p: "",
        paras: [
          "**Warning。** `data-composition-id` 元素（或根）既无匹配 `window.__timelines` 注册，又无 `data-no-timeline`，producer 轮询至多 45 秒才超时。",
          "**修复：** 注册时间线、用 `data-composition-src` 挂合成，或对真静态段加 `data-no-timeline`。",
        ],
        codeBlocks: [],
        id: "missing_data_no_timeline",
      },
      {
        h: "`negative_z_index`",
        p: "",
        paras: [
          "**Warning。** 低于 0 的 `z-index` 把元素画在最近层叠上下文内容后；无层叠祖先时即合成根，不透明背景处整藏元素。",
          "**修复：** 给父级层叠上下文（`isolation: isolate` 最便宜；`transform`、`filter`、小于 1 的 `opacity`、`contain: paint`、`will-change` 亦可）。",
        ],
        codeBlocks: [],
        id: "negative_z_index",
      },
      {
        h: "`requestanimationframe_in_composition`",
        p: "",
        paras: [
          "**Error。** `requestAnimationFrame` 跑墙钟，非 GSAP 时间线，与帧捕获失同步，渲染可闪或丢帧。",
          "**修复：** 改用 GSAP tween 或时间线 `onUpdate` 回调做动画逻辑。",
        ],
        codeBlocks: [],
        id: "requestanimationframe_in_composition",
      },
      {
        h: "`root_composition_duration_derived`",
        p: "",
        paras: [
          "**Warning。** 根无 `data-duration` 也无 GSAP 时间线，长度自片段推断。",
          '**修复：** 在根元素加 `data-duration="<seconds>"` 自定长度。',
        ],
        codeBlocks: [],
        id: "root_composition_duration_derived",
      },
      {
        h: "`root_composition_missing_duration_source`",
        p: "",
        paras: [
          "**Error。** 根无 `data-duration`、无 GSAP 时间线，也无 CSS、WAAPI、Lottie 或 Three.js 动画可推时长，渲染引擎定不了捕获时长而失败。",
          '**修复：** 给根加 `data-duration="<seconds>"`，或加已暂停的 GSAP 时间线注册在 `window.__timelines` 上。',
        ],
        codeBlocks: [],
        id: "root_composition_missing_duration_source",
      },
      {
        h: "`root_composition_missing_html_wrapper`",
        p: "",
        paras: [
          "**Error。** 携 `data-composition-id` 的 `index.html` 是裸片段，无 `<!DOCTYPE html>`、`<html>` 或 `<body>`，浏览器 quirks-mode 它，预览服务错服它。",
          '**修复：** 用 `<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>...</body></html>` 包合成。',
        ],
        codeBlocks: [],
        id: "root_composition_missing_html_wrapper",
      },
      {
        h: "`root_zoom_rescales_a_fixed_canvas`",
        p: "",
        paras: [
          "**Error。** 画布上 CSS `zoom` 在捕获框内缩放合成图，而框不随它缩放——框尺寸按根 `data-width`、`data-height` 以布局像素定。",
          "**修复：** 按真尺寸编著：设 `data-width`、`data-height`（及根宽高），去掉画布级 `zoom`。要不改布局缩放输出，传 `--output-resolution` 给渲染。后代上 `zoom` 可。",
        ],
        codeBlocks: [],
        id: "root_zoom_rescales_a_fixed_canvas",
      },
      {
        h: "`split_data_attribute_selector`",
        p: "",
        paras: [
          "**Error。** CSS 选择器在一 `[...]` 块合两属性，浏览器拒之——GSAP 时间线或 `querySelector` 调用注册前失败。",
          '**修复：** 分开属性选择器：`[data-composition-id="x"][data-track-index="1"]`。',
        ],
        codeBlocks: [],
        id: "split_data_attribute_selector",
      },
      {
        h: "`standalone_composition_wrapped_in_template`",
        p: "",
        paras: [
          "**Error。** 根 `index.html` 包在 `<template>` 标签里，运行时播不了——只有 `data-composition-src` 加载的子合成用 `<template>` 包装。",
          "**修复：** 去掉 `<template>` 包装，按真文档服合成。",
        ],
        codeBlocks: [],
        id: "standalone_composition_wrapped_in_template",
      },
      {
        h: "`subcomposition_blanks_before_host`",
        p: "",
        paras: [
          "**Warning。** 挂载的子合成在其主机窗内部分空白，因自身 `data-duration` 小于其槽。",
          "**修复：** 设子合成 `data-duration` 填满主机窗，或用另一片段盖缺。",
        ],
        codeBlocks: [],
        id: "subcomposition_blanks_before_host",
      },
      {
        h: "`subcomposition_linked_style_names_root_id`",
        p: "",
        paras: [
          "**Warning。** 子合成链接的样式表含 `#<root id>` 规则，即子合成根 id。合成编译时根并入主机，该选择子无物匹配。同规则在内联 `<style>` 会改写并生效。",
          "**修复：** 把规则移入 `<template>` 内的 `<style>`，或在链接文件里选根的子元素而非根自身。",
        ],
        codeBlocks: [],
        id: "subcomposition_linked_style_names_root_id",
      },
      {
        h: "`subcomposition_root_styled_by_class`",
        p: "",
        paras: [
          "**Error。** 子合成根元素经 class 选择器定样式，但渲染时每规则域化到 `[data-composition-id=...]`，class 键样式停用。",
          '**修复：** 根给 `id="root"`，用 `#root` 加纯后代选择器定样式。',
        ],
        codeBlocks: [],
        id: "subcomposition_root_styled_by_class",
      },
      {
        h: "`subcomposition_style_outside_template`",
        p: "",
        paras: [
          '**Warning。** 有 `<template>` 的子合成文件有 `<head>` 外的 `<style>`，或 `<link rel="stylesheet">` 在模板外。挂载只留模板内容和 `<head>` 中样式链接，所以那些样式预览、快照、渲染都不应用。',
          "**修复：** 移入 `<template>`，紧邻合成根。",
        ],
        codeBlocks: [],
        id: "subcomposition_style_outside_template",
      },
      {
        h: "`template_literal_selector`",
        p: "",
        paras: [
          "**Error。** `querySelector` 收到模板字面变量，打包器 CSS 解析崩。",
          "**修复：** 改用硬编码字符串选择器，不插值。",
        ],
        codeBlocks: [],
        id: "template_literal_selector",
      },
      {
        h: "`timed_element_missing_clip_class`",
        p: "",
        paras: [
          '**Warning。** 元素有时序属性却无 `class="clip"`。运行时仍计时它，但浏览器编辑器和片段归属规则用 `.clip` 认它，故更难编辑和 lint。',
          '**修复：** 给元素加 `class="clip"`。',
        ],
        codeBlocks: [],
        id: "timed_element_missing_clip_class",
      },
      {
        h: "`timeline_track_too_dense`",
        p: "",
        paras: [
          "**Warning。** 同文件一轨道带超 3 定时元素（音频、视频、字幕 cue 和子合成挂载不计），难读、难迭代、难 diff。",
          "**修复：** 拆元素子合成并用 `data-composition-src` 从父挂。",
        ],
        codeBlocks: [],
        id: "timeline_track_too_dense",
      },
      {
        h: "文档、CSS 和脚本",
        p: "",
        paras: ["来源：`packages/lint/src/rules/core.ts`。"],
        codeBlocks: [],
        id: "document-css-and-scripts",
      },
      {
        h: "`host_missing_composition_id`",
        p: "",
        paras: [
          "**Error。** `data-composition-src` 主机元素无自身 `data-composition-id`。",
          "**修复：** 给每个 `data-composition-src` 主机元素设 `data-composition-id`。",
        ],
        codeBlocks: [],
        id: "host_missing_composition_id",
      },
      {
        h: "`css_parse_error`",
        p: "",
        paras: [
          "**Error。** `<style>` 块非有效 CSS 解析失败。",
          "**修复：** 修报出的 CSS 语法错。",
        ],
        codeBlocks: [],
        id: "css_parse_error",
      },
      {
        h: "`css_transition_used`",
        p: "",
        paras: [
          "**Warning。** CSS `transition` 跑浏览器时钟，不能跨渲染工作进程确定性定位。`transition: none` 和全零时长允许。",
          "**修复：** 状态切换保留 class 或属性切换，视觉变化放暂停的 GSAP 时间线。",
        ],
        codeBlocks: [],
        id: "css_transition_used",
      },
      {
        h: "`id_override_reduced_specificity`",
        id: "id_override_reduced_specificity",
        p: "",
        paras: [
          "**Warning。** 选择器通过 `[id=...]` 或 `:where(#id)` 设置定位属性，而它们的优先级仅相当于类选择器或零优先级，因此同一元素上的复合类规则可能会静默覆盖它。",
          "**修复：** 使用普通的 `#id` 选择器；ID 选择器的优先级高于任何仅由类组成的选择器。",
        ],
        codeBlocks: [],
      },
      {
        h: "`id_requires_css_escape`",
        id: "id_requires_css_escape",
        p: "",
        paras: [
          "**Error / Warning。** 元素的 `id` 以数字开头，会导致 `#id` 选择器在 `querySelector` 和 GSAP 中抛出 `SyntaxError`，并使 CSS 规则失效。若合成中实际用到了这类选择器则报 Error，否则报 Warning。",
          "**修复：** 将 `id` 重命名为以字母开头（推荐），或在运行时使用 `CSS.escape(id)` 构造选择器。",
        ],
        codeBlocks: [],
      },
      {
        h: "`inline_style_attribute_selector`",
        id: "inline_style_attribute_selector",
        p: "",
        paras: [
          "**Error。** 选择器读取内联 `style` 属性（`[style]`、`[style*=...]` 及其他变体）。GSAP 每帧都会写入内联样式，而每次写入都会触发远超该动画元素本身的大范围样式重算，导致预览卡顿到几乎无法运行。",
          "**修复：** 让运行时自己负责隐藏不可见片段——它本来就会隐藏其中的内容。若需表达自定义状态，请在脚本中切换 class 或 data 属性，并基于它们编写选择器。",
        ],
        codeBlocks: [],
      },
      {
        h: "`invalid_inline_script_syntax`",
        id: "invalid_inline_script_syntax",
        p: "",
        paras: [
          "**Error。** 内联 `<script>` 标签以畸形语法闭合。",
          "**修复：** 使用规范的 `</script>` 标签闭合内联脚本。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_timeline_registry`",
        id: "missing_timeline_registry",
        p: "",
        paras: [
          "**Error。** 合成完全没有注册 `window.__timelines` 注册表。",
          "**修复：** 将每条合成时间线注册到 `window.__timelines[compositionId]`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`non_deterministic_code`",
        id: "non_deterministic_code",
        p: "",
        paras: [
          '**Error。** 脚本使用了非确定性值来源（`Math.random`、`Date.now`、`gsap.utils.random`、`"random(...)"`），导致不同帧或不同渲染次数的结果不一致。',
          "**修复：** 在构建时预计算好数值并传入常量，或者使用固定种子的伪随机生成器。",
        ],
        codeBlocks: [],
      },
      {
        h: "`repeated_id_descendant_selector`",
        id: "repeated_id_descendant_selector",
        p: "",
        paras: [
          "**Error。** 选择器要求某个 ID 嵌套在另一个相同 ID 的元素内部。由于 ID 必须唯一，该选择器永远无法匹配。",
          "**修复：** 删除重复的祖先选择器：将 `#x #x` 改为 `#x`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`root_dimensions_mismatch`",
        id: "root_dimensions_mismatch",
        p: "",
        paras: [
          "**Warning。** 根元素的 `data-width`/`data-height` 被直接修改，但脚手架中的 `html, body` CSS 和 `<meta viewport>` 仍保留旧分辨率，导致带 `overflow: hidden` 的 body 视觉裁切了尺寸已更新的根节点。",
          "**修复：** 同步更新 `body` CSS 和 viewport 以匹配尺寸，或使用 `hyperframes init --resolution portrait` 重新创建脚手架。",
        ],
        codeBlocks: [],
      },
      {
        h: "`root_missing_composition_id`",
        id: "root_missing_composition_id",
        p: "",
        paras: [
          "**Error。** 根合成缺少 `data-composition-id`。",
          "**修复：** 为入口合成容器添加稳定的 `data-composition-id`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`root_missing_dimensions`",
        id: "root_missing_dimensions",
        p: "",
        paras: [
          "**Error。** 根合成缺少 `data-width` 或 `data-height`。",
          "**修复：** 在入口合成根节点上设置数值型的 `data-width` 和 `data-height`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`runtime_hidden_style_opacity`",
        id: "runtime_hidden_style_opacity",
        p: "",
        paras: [
          "**Error。** 选择器监听了运行时内部使用的隐藏样式（用于在帧复制期间隐藏原生视频）并强制将 `opacity` 设为 0，从而破坏视频替换管线。",
          "**修复：** 移除该规则；运行时已自动处理隐藏片段及其内容。若需自行淡入淡出或隐藏元素，请在时间线上为其制作动画，或切换 class / data 属性后针对它们编写选择器。",
        ],
        codeBlocks: [],
      },
      {
        h: "`scoped_css_missing_wrapper`",
        id: "scoped_css_missing_wrapper",
        p: "",
        paras: [
          "**Warning。** 作用域 CSS 定向到了一个在当前 HTML 中找不到对应容器的合成 ID。",
          "**修复：** 保留匹配的合成容器，或将 CSS 作用域对齐到现有容器。",
        ],
        codeBlocks: [],
      },
      {
        h: "`studio_missing_editable_id`",
        id: "studio_missing_editable_id",
        p: "",
        paras: [
          "**Warning。** 时间线可见元素没有 `id`，浏览器编辑器无法在时间线与画布编辑中稳定定位它。",
          '**修复：** 为智能体或浏览器编辑器需要编辑的元素添加稳定、可读的 `id`，例如 `id="hero-title"`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`timeline_id_mismatch`",
        id: "timeline_id_mismatch",
        p: "",
        paras: [
          "**Error。** 时间线在某个键下完成注册，但没有元素携带对应的 `data-composition-id`，导致运行时无法自动嵌套它。",
          '**修复：** 使 `window.__timelines["<key>"]` 与元素的 `data-composition-id` 保持一致（或修改元素属性匹配键名）。',
        ],
        codeBlocks: [],
      },
      {
        h: "`unbalanced_style_tags`",
        id: "unbalanced_style_tags",
        p: "",
        paras: [
          "**Error。** `<style>` 块未闭合（后续标记都会被当作 CSS 解析而消失），或者多了一个 `</style>` 提前结束了样式表，把 CSS 当作可见文本直接输出到页面里。",
          "**修复：** 确保 `<style>` 与 `</style>` 成对出现。",
        ],
        codeBlocks: [],
      },
      {
        h: "`unclosed_tag_swallowed_element`",
        id: "unclosed_tag_swallowed_element",
        p: "",
        paras: [
          "**Error。** 某标签在下一个 `<` 之前缺少闭合的 `>`，导致后续元素被吞并成无效属性文本而无法生成真实 DOM 节点。",
          "**修复：** 在打开下一个元素前补全上一个标签的 `>`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`visible_markup_comment`",
        id: "visible_markup_comment",
        p: "",
        paras: [
          "**Error。** CSS 或 JS 的块注释语法（`/* ... */`）出现在可见 HTML 标记中；在 HTML 里只有 `<!-- ... -->` 才是注释，导致它直接作为屏幕文字渲染出来。",
          "**修复：** 删除该文本或改为真正的 HTML 注释；CSS 注释应放在 `<style>` 内，JS 注释应放在 `<script>` 内。",
        ],
        codeBlocks: [],
      },
      {
        h: "GSAP 动画",
        id: "gsap-animation",
        p: "",
        paras: ["来源：`packages/lint/src/rules/gsap.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`audio_reactive_single_tween_per_group`",
        id: "audio_reactive_single_tween_per_group",
        p: "",
        paras: [
          "**Warning。** 音频响应字幕按组基于峰值仅创建一个补间，只设定了一个静态数值，无法体现出随音频变化的响应感。",
          "**修复：** 在每个字幕组生命周期内按 100–200ms 间隔采样音频数据，并为每个采样点创建一个补间。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_animates_clip_element`",
        id: "gsap_animates_clip_element",
        p: "",
        paras: [
          "**Error。** GSAP 直接在由框架控制可见性的片段元素上设置可见性相关属性（`opacity`、`visibility`、`autoAlpha`）。",
          "**修复：** 移除 visibility 或 autoAlpha 补间，或将内容移入子 `<div>` 并改以子元素作为目标。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_callback_dom_measurement`",
        id: "gsap_callback_dom_measurement",
        p: "",
        paras: [
          "**Warning。** 时间线回调中调用了 DOM 测量方法（`getBoundingClientRect`、`getTotalLength`、`getComputedStyle` 等）。每次 seek 都会重新触发回调，而冷启动渲染 worker 在不同于顺序播放的布局状态下拉起它们。",
          "**修复：** 在注册时间线之前，在构建阶段同步完成所有测量和 DOM 初始化，或基于固定的合成坐标直接推导几何信息。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_cold_seek_hidden_fromto_missing_reveal`",
        id: "gsap_cold_seek_hidden_fromto_missing_reveal",
        p: "",
        paras: [
          "**Error。** 初始创作即为隐藏状态的元素使用了 `gsap.fromTo()`，但目标 vars 中省略了 `opacity`/`autoAlpha`，导致冷启动渲染 worker 恢复了隐藏状态而使元素保持不可见。",
          "**修复：** 在目标 vars 中加上 `opacity: 1`（或 `autoAlpha: 1`），确保任何 seek 路径都能正确建立可见终态。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_css_transform_conflict`",
        id: "gsap_css_transform_conflict",
        p: "",
        paras: [
          "**Error。** 元素本身设置了 CSS `transform`（例如用于居中的 `translateX(-50%)`），同时 GSAP 补间也动画化了变换属性——GSAP 会覆盖完整的 CSS transform。",
          "**修复：** 从 CSS 中移除 `transform`，改用 GSAP 属性表达变换；带有显式起始值的 `tl.fromTo` 可豁免此规则。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_from_opacity_noop`",
        id: "gsap_from_opacity_noop",
        p: "",
        paras: [
          "**Error。** 元素已有 CSS `opacity: 0`，同时 `gsap.from()` 也把起始透明度设为 0，导致从 0 动画到 0 而永远不会显示。",
          "**修复：** 从 CSS 或内联样式中删除 `opacity: 0`，交由 `gsap.from()` 负责初始隐藏状态。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_fullscreen_overlay_starts_visible`",
        id: "gsap_fullscreen_overlay_starts_visible",
        p: "",
        paras: [
          "**Error。** 全屏遮罩层在它的第一个 GSAP opacity 补间之前就已经是可见的，因此会遮挡早期渲染帧——常常导致输出空白或全白视频。",
          "**修复：** 在 CSS 中将遮罩层创作设为初始隐藏，或在揭示补间之前紧接着执行 `gsap.set(..., { opacity: 0 })`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_function_value_hazard`",
        id: "gsap_function_value_hazard",
        p: "",
        paras: [
          "**Error / Warning。** 函数型补间值读取了受 transform 影响的几何属性、在补间初始化时测量布局，或访问了第一个参数（第一个参数是数字序号而非元素）。涉及受 transform 影响的读取与错误成员访问时报 Error，其余情况报 Warning。",
          "**修复：** 在构建时一次性计算好数值并传入常量；若需逐元素逻辑，请使用第二个参数：`(index, target) => ...`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_group_selector_keyframes`",
        id: "gsap_group_selector_keyframes",
        p: "",
        paras: [
          "**Warning。** 单个 GSAP 补间用共享关键帧瞄准了多个元素，导致在浏览器编辑器中修改其中一个元素的关键帧时会同时改变全部元素。",
          "**修复：** 将组选择器拆分为针对每个元素的独立 `tl.to()` 调用。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_infinite_repeat`",
        id: "gsap_infinite_repeat",
        p: "",
        paras: [
          "**Error / Warning。** GSAP 补间或时间线使用了 `repeat: -1`。如果合成声明了有限的 `data-duration`（seek 和导出都会据此裁剪），则报 Warning；若没有任何边界限制时间线长度，则报 Error。",
          "**修复：** 声明有限的 `data-duration`，或将 `repeat: -1` 替换为有限次数，例如 `repeat: Math.max(0, Math.floor(totalDuration / cycleDuration) - 1)`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_non_transform_motion`",
        id: "gsap_non_transform_motion",
        p: "",
        paras: [
          "**Error。** GSAP 补间动画化了布局属性（`left`、`top`、`width` 等）、文本重排属性（`fontSize`、`letterSpacing` 等）或设置了 `roundProps`；这些属性会贴齐到整数设备像素，在逐帧捕获下产生明显卡顿。",
          "**修复：** 改为动画化 transform：位置属性改用 `x`/`y`/`scale`；重排属性改为逐字符拆分动画或使用静态终值；移除 `roundProps`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_relative_value_second_writer`",
        id: "gsap_relative_value_second_writer",
        p: "",
        paras: [
          "**Error。** 当同一属性上仍有另一个写入方处于活动状态时，启动了相对补间值（`+=...`），导致不同 seek 路径从不同的基值初始化相对补间并引起画面跳变。",
          "**修复：** 对该属性使用绝对值或显式端点的 `fromTo()`。当同一属性仅有一个写入方时，使用相对值是安全的。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_repeat_ceil_overshoot`",
        id: "gsap_repeat_ceil_overshoot",
        p: "",
        paras: [
          "**Warning。** 使用 `Math.ceil` 计算的重复次数可能会超出合成时长，将动画延长到合成结束之后。",
          "**修复：** 在重复次数计算中使用 `Math.floor`：`repeat: Math.max(0, Math.floor(totalDuration / cycleDuration) - 1)`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_repeat_floor_unclamped`",
        id: "gsap_repeat_floor_unclamped",
        p: "",
        paras: [
          "**Warning。** 当合成短于一个循环周期时，重复计算可能求值为 `-1`，而 GSAP 会将其解释为无限循环。",
          "**修复：** 将结果下限钳制在 0：`repeat: Math.max(0, Math.floor(totalDuration / cycleDuration) - 1)`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_repeat_refresh_relative_value`",
        id: "gsap_repeat_refresh_relative_value",
        p: "",
        paras: [
          "**Error。** `repeatRefresh: true` 与相对值结合时会逐轮累积结果；冷启动渲染 worker 直接 seek 到第 N 轮时并未经历前几轮的累积过程，导致渲染结果不一致。",
          "**修复：** 移除 `repeatRefresh: true`，或改用显式绝对端点的 `fromTo()` 替代相对值。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_repeated_fromto_without_baseline`",
        id: "gsap_repeated_fromto_without_baseline",
        p: "",
        paras: [
          "**Warning。** 多个针对同一元素的 `tl.fromTo()` 调用没有建立稳定的基准状态，导致按编写顺序最靠后的那个 `from` 值会成为首次补间运行前任何 seek 时刻的静止状态。",
          "**修复：** 除了时间位置最早的那个 `fromTo` 之外，为其余所有 `fromTo` 添加 `immediateRender: false`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_timeline_not_registered`",
        id: "gsap_timeline_not_registered",
        p: "",
        paras: [
          "**Error。** 创建了 GSAP 时间线却未将其注册到 `window.__timelines`，运行时无法发现该时间线，导致动画在预览和渲染中均不播放。",
          "**修复：** 添加 `window.__timelines = window.__timelines || {};`，并按合成的 `data-composition-id` 为时间线赋值注册。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_timeline_registered_before_async_build`",
        id: "gsap_timeline_registered_before_async_build",
        p: "",
        paras: [
          "**Error。** 在 `document.fonts.ready` 等异步回调内部构建时间线之前就已经赋值给了 `window.__timelines`，导致先注册了一个空时间线，并在子合成嵌套时拿到空状态。",
          "**修复：** 将 `window.__timelines[id] = tl` 赋值移动到异步构建回调的末尾、所有补间添加完毕之后。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_timeline_return_used_as_tween`",
        id: "gsap_timeline_return_used_as_tween",
        p: "",
        paras: [
          "**Error。** 代码接收 `tl.to()`/`tl.from()`/`tl.set()` 的返回值并误以为是单个补间，但这些方法返回的其实是时间线本身——后续对它调用 `kill()` 或覆写会破坏整条时间线。",
          "**修复：** 将这组补间放入一个嵌套时间线（`gsap.timeline()` 再通过 `tl.add(nested, 0)` 挂载），然后改对嵌套时间线操作 `kill()`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_timeline_set_initial_hide`",
        id: "gsap_timeline_set_initial_hide",
        p: "",
        paras: [
          "**Warning。** 使用暂停时间线内的 `tl.set(..., 0)` 来设置初始隐藏状态；当播放头正好停在 0 时，位置 0 处的零时长 `set` 不会渲染，导致第 0 帧直接露出未隐藏的状态。",
          "**修复：** 在时间线外部调用 `gsap.set(...)`，或直接在 CSS 与 HTML 属性中编写初始隐藏状态。",
        ],
        codeBlocks: [],
      },
      {
        h: "`gsap_undefined_css_variable`",
        id: "gsap_undefined_css_variable",
        p: "",
        paras: [
          "**Warning。** GSAP 动画化了一个在静态 CSS 或合成变量声明中未定义的 `var(--...)` CSS 变量，导致计算出的颜色无效或变成透明。",
          "**修复：** 在 CSS 中定义该变量、在 `data-composition-variables` 中声明它，或加上回退值如 `var(--x, #fff)`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_gsap_plugin`",
        id: "missing_gsap_plugin",
        p: "",
        paras: [
          "**Error。** 补间使用了如 `motionPath` 等插件专属属性，但对应插件未加载且未注册，导致 GSAP 核心直接忽略该属性。",
          "**修复：** 在动画脚本之前加载插件并用 `gsap.registerPlugin(...)` 注册，或改用核心的 `x`/`y` 补间来表达运动。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_gsap_script`",
        id: "missing_gsap_script",
        p: "",
        paras: [
          "**Error。** 合成使用了 GSAP，但未加载 GSAP 脚本，动画将无法运行。",
          "**修复：** 在动画脚本之前添加 GSAP `<script>` 标签。",
        ],
        codeBlocks: [],
      },
      {
        h: "`overlapping_gsap_tweens`",
        id: "overlapping_gsap_tweens",
        p: "",
        paras: [
          "**Warning。** 两条 GSAP 补间在相同目标的同一属性上发生时间重叠，后一条会在运动中途覆写前一条。",
          '**修复：** 缩短前一条补间、移动后一条补间的位置，或添加 `overwrite: "auto"`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`svg_drawon_css_dasharray_conflict`",
        id: "svg_drawon_css_dasharray_conflict",
        p: "",
        paras: [
          "**Error。** GSAP 写入了 `strokeDasharray`，但元素的 CSS 已声明了多段 `stroke-dasharray`；GSAP 会按段合并虚线列表，导致 CSS 留白保留、描边绘制动画出错。",
          "**修复：** 移除 CSS 中的 `stroke-dasharray`（装饰性虚线应放在单独元素上），或在 GSAP 中设置完整的双分量值。",
        ],
        codeBlocks: [],
      },
      {
        h: "`svg_round_cap_hidden_dash`",
        id: "svg_round_cap_hidden_dash",
        p: "",
        paras: [
          "**Warning。** 带圆角或方角线帽（round / square cap）的路径用 `dasharray = gap = pathLength` 且 `dashoffset = dash` 来隐藏。Chrome 可能在路径末端留下零长度细缝，在某些曲线上线帽会将其绘成一个孤立圆点。",
          '**修复：** 让间隙长于路径（例如 `stroke-dasharray="100 120"`、`stroke-dashoffset="110"`），或在绘制补间开始前保持元素 `visibility: hidden`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`svg_measure_before_path_d`",
        id: "svg_measure_before_path_d",
        p: "",
        paras: [
          "**Error / Warning。** 对没有静态 `d` 属性的路径调用了 `getTotalLength()`，返回值会是 0，导致虚线绘制动画失效。完全没有给 `d` 赋值时报错（Error），仅在函数体内赋值时报警告（Warning）。",
          "**修复：** 在构建期顶层同步为路径赋值 `d`（在测量之前），或直接在 HTML 中编写静态 `d` 属性。",
        ],
        codeBlocks: [],
      },
      {
        h: "媒体元素",
        id: "media-elements",
        p: "",
        paras: ["来源：`packages/lint/src/rules/media.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`audio_attribute_unreadable`",
        id: "audio_attribute_unreadable",
        p: "",
        paras: [
          '**Error。** `data-automation` 或 `data-fx-chain` 无法被渲染器解析：不是合法 JSON、缺少 `"version": 1`、缺少 `lanes` / `nodes` 数组、某条轨道缺少 `target` 或 `points`，或某个节点缺少 `type`。本地和云端混音都会因此失败。',
          '**修复：** 写成 `{"version": 1, "lanes": [...]}`（自动化包络）或 `{"version": 1, "nodes": [...]}`（效果链），或移除该属性。',
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_carve_ungrouped_sources`",
        id: "audio_carve_ungrouped_sources",
        p: "",
        paras: [
          "**Warning。** 配音避让（carve）直接按名称列出单个成员片段，而非针对 `<hf-audio-group>` 避让，因此片段变动时名单会静默失效。",
          "**修复：** 将人声片段归入同一个音频组，并针对该音频组设置避让。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_group_carve_attr`",
        id: "audio_group_carve_attr",
        p: "",
        paras: [
          "**Warning。** `<hf-audio-group>` 携带了 `data-fx-carve`（或派生自避让的效果链），但避让属于铺底音频片段本身，而不是总线。",
          "**修复：** 从音频组移除 `data-fx-carve`，改在铺底音轨片段上应用避让。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_group_holds_elements`",
        id: "audio_group_holds_elements",
        p: "",
        paras: [
          '**Warning。** `<hf-audio-group>` 内部包进了子元素。最常见的原因是按自闭合语法书写了 `<hf-audio-group id="sfx" />`——HTML 规范不支持自定义元素自闭合，结果后续所有兄弟元素都被吞进它里面。套在里面既不会把音频路由进总线，而当该组处于 `data-hidden` 时还会导致这些元素在预览与渲染中完全隐藏且静音。',
          "**修复：** 在开标签后紧接着用 `</hf-audio-group>` 明确闭合，并在需要走该总线的片段上添加 `data-audio-group`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_group_no_members`",
        id: "audio_group_no_members",
        p: "",
        paras: [
          "**Error。** 存在一个没有任何片段加入的音频组，因此它的推子、效果器和自动化包络会被静默丢弃。",
          '**修复：** 为该总线对应的片段添加 `data-audio-group="<id>"`，或删除这个空音频组。',
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_group_timing_attrs`",
        id: "audio_group_timing_attrs",
        p: "",
        paras: [
          "**Warning。** `<hf-audio-group>` 携带了时序属性（`data-start`、`data-duration`、`data-track-index`）。音频组没有自己的片段时间窗口，时序由其成员片段各自携带。",
          "**修复：** 从音频组移除时序属性，改为设置到成员片段上。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_volume_double_automation`",
        id: "audio_volume_double_automation",
        p: "",
        paras: [
          "**Warning。** 元素同时拥有音量自动化轨道与 GSAP 对 `volume` 的补间；自动化轨道会胜出，补间在预览与渲染中都被忽略。",
          "**修复：** 只保留一种：删除自动化轨道改用补间，或去掉补间并在自动化轨道里塑造电平。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_volume_tween_overrides_gain`",
        id: "audio_volume_tween_overrides_gain",
        p: "",
        paras: [
          "**Warning。** 元素既有 `data-volume` 增益又有对 `volume` 的 GSAP 补间；补间值属于绝对音量，会直接取代而非按比例缩放增益。",
          "**修复：** 把补间目标值写成已包含该增益的绝对值，或将 `data-volume` 重置为 1 并由补间负责电平变化。",
        ],
        codeBlocks: [],
      },
      {
        h: "`base64_media_prohibited`",
        id: "base64_media_prohibited",
        p: "",
        paras: [
          "**Error。** 存在内联 base64 音频或视频。Base64 媒体会急剧膨胀文件体积并破坏渲染流程。",
          "**修复：** 为 `src` 使用相对路径或 HTTPS URL——切勿以 base64 内嵌音视频媒体。",
        ],
        codeBlocks: [],
      },
      {
        h: "`color_grading_invalid_json`",
        id: "color_grading_invalid_json",
        p: "",
        paras: [
          "**Error。** `<video>` 或 `<img>` 上的 `data-color-grading` 以 `{` 或 `[` 开头但不是合法 JSON，导致调色无法渲染。",
          '**修复：** 使用合法 JSON，例如 `data-color-grading=\'{"preset":"skin-soft","intensity":0.6,"adjust":{"highlights":-0.08}}\'`——属性外层使用单引号，JSON 内部使用双引号。',
        ],
        codeBlocks: [],
      },
      {
        h: "`color_grading_invalid_structure`",
        id: "color_grading_invalid_structure",
        p: "",
        paras: [
          "**Error。** `data-color-grading` 能解析为 JSON，但违反了调色契约——存在不支持的键、值类型错误或数值越界。运行时会静默忽略未知键，导致控制项看似写在 HTML 中却完全不生效。每个问题会分别报告一条诊断，指出问题路径。",
          "**修复：** 按照 [色彩校正参考](https://hyperframes.heygen.com/reference/color-grading.md) 修正或移除诊断中指出的字段与值。",
        ],
        codeBlocks: [],
      },
      {
        h: "`color_grading_non_media`",
        id: "color_grading_non_media",
        p: "",
        paras: [
          "**Error。** 将 `data-color-grading` 设置在了 `<video>`、`<img>`、`<canvas>` 或 `<hf-color-group>` 以外的元素上（如包裹 `<div>` 或使用 CSS 背景的元素）。着色器运行时仅对真正的 `<video>`、`<img>`、`<canvas>` 以及 [调色组](https://hyperframes.heygen.com/reference/color-grading.md#grade-a-whole-lane) 的成员生效，设置在其他元素上没有任何效果。",
          "**修复：** 将该属性移动到真正的 `<video>`、`<img>` 或 `<canvas>` 元素上。",
        ],
        codeBlocks: [],
      },
      {
        h: "`duplicate_media_discovery_risk`",
        id: "duplicate_media_discovery_risk",
        p: "",
        paras: [
          "**Warning。** 多个匹配的媒体节点拥有相同的媒体源、开始时间和时长，编译器可能将同一份媒体重复发现两次。",
          "**修复：** 删除多余的重复媒体节点，使媒体发现仅记录一次。",
        ],
        codeBlocks: [],
      },
      {
        h: "`duplicate_media_id`",
        id: "duplicate_media_id",
        p: "",
        paras: [
          "**Error。** 相同的媒体 `id` 被定义在多个元素上，可能导致预览与 Producer 构建出不同的媒体图。",
          "**修复：** 为每个媒体元素分配唯一的 `id`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`imperative_media_control`",
        id: "imperative_media_control",
        p: "",
        paras: [
          "**Error。** 内联脚本通过命令式 API（`play`、`pause`、`currentTime` 等）控制受管媒体。HyperFrames 必须全权接管播放调度，才能保证预览、时间线和渲染的确定性。",
          "**修复：** 改用 `data-start`/`data-duration` 以及 `data-media-start` 等媒体偏移属性来声明时序。",
        ],
        codeBlocks: [],
      },
      {
        h: "`media_crossorigin_breaks_preview`",
        id: "media_crossorigin_breaks_preview",
        p: "",
        paras: [
          "**Error。** 元素设置了 `crossorigin`，这会强制触发带 CORS 校验的请求；如果宿主服务器未返回 CORS 响应头，浏览器编辑器预览中的媒体会静默加载失败（画面空白），尽管后端渲染仍能正常工作。",
          "**修复：** 除非确定要从已开启 CORS 头的宿主读取媒体到 Canvas、WebGL 或 WebAudio，否则请移除 `crossorigin`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`media_missing_data_start`",
        id: "media_missing_data_start",
        p: "",
        paras: [
          "**Error。** 媒体元素有 `src` 却缺少 `data-start`，HyperFrames 无法接管其播放，导致预览和渲染出现偏差。",
          '**修复：** 添加 `data-start="0"`（或目标开始秒数）；若片段应在源文件播完前结束，请一并设置 `data-duration`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`media_missing_id`",
        id: "media_missing_id",
        p: "",
        paras: [
          "**Error。** 定时媒体元素没有 `id`，渲染器无法发现它——结果表现为音频无声或视频卡帧。",
          "**修复：** 为该元素添加唯一的 `id` 属性。",
        ],
        codeBlocks: [],
      },
      {
        h: "`media_missing_src`",
        id: "media_missing_src",
        p: "",
        paras: [
          "**Error。** 定时媒体元素没有 `src`（既不在元素本身，也不在 `<source>` 子元素上），渲染器无法加载它。",
          '**修复：** 为元素添加 `src`，或在内部添加 `<source src="...">` 子元素。',
        ],
        codeBlocks: [],
      },
      {
        h: "`media_preload_none`",
        id: "media_preload_none",
        p: "",
        paras: [
          '**Warning。** 元素设置了 `preload="none"`，阻碍渲染器加载媒体（编译器会在渲染时剥离该属性，但预览阶段可能出现异常）。',
          '**修复：** 移除 `preload="none"`，或将其改为 `preload="auto"`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`media_runtime_src_mutation`",
        id: "media_runtime_src_mutation",
        p: "",
        paras: [
          "**Warning。** 内联脚本在运行时修改已有受管媒体的 `src`，会与媒体发现及抽帧流程产生竞态。",
          "**修复：** 在源码中直接写入最终静态 `src`，或将 `data-var-src` 绑定到已声明的变量，使数据源在媒体发现前生效。",
        ],
        codeBlocks: [],
      },
      {
        h: "`media_src_kind_mismatch`",
        id: "media_src_kind_mismatch",
        p: "",
        paras: [
          "**Error。** 媒体 URL 的资源类型与标签不匹配——例如将静帧图片挂在 `<video>` 上，或将视频 URL 挂在 `<img>` 上，导致元素渲染空白。",
          "**修复：** 按媒体类型使用对应标签：静图用 `<img>`，视频用 `<video>`，音频用 `<audio>`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`media_variable_src_no_fallback`",
        id: "media_variable_src_no_fallback",
        p: "",
        paras: [
          "**Warning。** 元素依赖 `data-var-src` 且未提供回退 `src`；当渲染未传入该变量值时将无法加载媒体，同时音频提取读取的是源码中编写的 `src`。",
          "**修复：** 添加一个回退 `src`，确保未传变量时合成依然能够正常渲染。",
        ],
        codeBlocks: [],
      },
      {
        h: "`nested_media_start_basis_ambiguous`",
        id: "nested_media_start_basis_ambiguous",
        p: "",
        paras: [
          "**Warning。** 嵌套媒体元素的 `data-start` 基准存在歧义：不知它是相对于当前子合成局部时间还是旧版的根全局时间戳，两者会被读成不同的帧。",
          '**修复：** 让 `data-start` 保持组合局部时间，或使用 `data-hf-media-start-basis="global"` 显式标记旧版基准；否则请转换为局部时间。',
        ],
        codeBlocks: [],
      },
      {
        h: "`placeholder_media_url`",
        id: "placeholder_media_url",
        p: "",
        paras: [
          "**Error。** 元素使用了占位媒体 URL，在渲染时将返回 404。",
          "**修复：** 替换为真实、可访问的媒体 URL。",
        ],
        codeBlocks: [],
      },
      {
        h: "`self_closing_media_tag`",
        id: "self_closing_media_tag",
        p: "",
        paras: [
          "**Error。** 自闭合媒体标签（`<video ... />`）属于无效 HTML：浏览器会保持标签处于未闭合状态，并将后续所有元素吞作不可见的回退内容，使整个合成消失不见。",
          "**修复：** 编写显式闭合标签：`<video ...></video>`。媒体元素绝对不可自闭合。",
        ],
        codeBlocks: [],
      },
      {
        h: "`speed_ramp_on_non_media`",
        id: "speed_ramp_on_non_media",
        p: "",
        paras: [
          "**Warning。** 变速坡道（speed-ramp）轨道挂在了非媒体元素上；只有 `<video>` 和 `<audio>` 片段支持重定时，该轨道不会起任何作用。",
          "**修复：** 将速度轨道移到视频或音频片段上，或者使用 GSAP 时间线重排动画节奏。",
        ],
        codeBlocks: [],
      },
      {
        h: "`video_audio_double_source`",
        id: "video_audio_double_source",
        p: "",
        paras: [
          "**Error。** `<audio>` 元素和 `<video>` 元素在同一时间指向了相同的源文件；未静音的视频本身已经携带了声音，叠加播放会产生回声重音。",
          "**修复：** 让视频直接自带声音（推荐），或在画面与声音必须分开剪辑时将视频设为静音并保留独立的 `<audio>`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`video_missing_muted`",
        id: "video_missing_muted",
        p: "",
        paras: [
          '**Error。** 定时 `<video>` 既没有声明 `muted` 也没有声明 `data-has-audio="true"`，linter 无法区分无声画面与含音频的视频素材。',
          '**修复：** 文件含声音时添加 `data-has-audio="true"`，纯无声画面则添加 `muted`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`video_muted_with_declared_audio`",
        id: "video_muted_with_declared_audio",
        p: "",
        paras: [
          '**Error。** `<video>` 同时声明了 `data-has-audio="true"` 和 `muted`，导致浏览器编辑器预览将本应发声的视频强制静音。',
          '**修复：** 若视频需要发声则移除 `muted`；若是纯无声视觉画面，则删掉 `data-has-audio` 并改用 `data-volume="0"`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`video_nested_in_timed_element`",
        id: "video_nested_in_timed_element",
        p: "",
        paras: [
          "**Error。** 带有 `data-start` 的 `<video>` 被嵌套在了另一个定时元素内部；抽帧器解析视频起点时不计入外层容器偏移，而可见性计算却依赖外层容器的时间窗口，结果片段会播错帧并中途消失。",
          "**修复：** 外层容器和视频两者只保留一处定时：移除外层容器的 `data-start`，或把 `<video>` 提到舞台的直接子节点层级。",
        ],
        codeBlocks: [],
      },
      {
        h: "字幕",
        id: "captions",
        p: "",
        paras: ["来源：`packages/lint/src/rules/captions.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`caption_container_relative_position`",
        id: "caption_container_relative_position",
        p: "",
        paras: [
          "**Error。** 字幕选择器使用了 `position: relative`，会导致布局溢出并破坏字幕堆叠定位。",
          "**修复：** 所有字幕元素均应使用 `position: absolute`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`caption_exit_missing_hard_kill`",
        id: "caption_exit_missing_hard_kill",
        p: "",
        paras: [
          "**Error。** 字幕退场动画（带 `opacity: 0` 的 `tl.to`）后面缺少 `tl.set` 硬终止，相互冲突的卡拉 OK 补间可能把字幕残留在屏幕上。",
          '**修复：** 在每次退场补间之后加上 `tl.set(groupEl, { opacity: 0, visibility: "hidden" }, group.end)` 作为确定性清除。',
        ],
        codeBlocks: [],
      },
      {
        h: "`caption_fittext_scale_mismatch`",
        id: "caption_fittext_scale_mismatch",
        p: "",
        paras: [
          "**Warning。** `fitTextFontSize` 使用的 `maxWidth` 没有为放大超过 1x 的强调词预留余量，实际渲染宽度可能会溢出合成边界。",
          "**修复：** 调小 `maxWidth`，为放大倍率留出安全空间。",
        ],
        codeBlocks: [],
      },
      {
        h: "`caption_overflow_clips_scaled_words`",
        id: "caption_overflow_clips_scaled_words",
        p: "",
        paras: [
          "**Error。** 字幕容器设置了 `overflow: hidden`，而 GSAP 会将强调词放大到 1x 以上，导致放大后的词及其发光特效被裁剪。",
          "**修复：** 在字幕容器上使用 `overflow: visible`，并改用 `fitTextFontSize` 搭配较小的 `maxWidth` 来防止越界。",
        ],
        codeBlocks: [],
      },
      {
        h: "`caption_text_overflow_risk`",
        id: "caption_text_overflow_risk",
        p: "",
        paras: [
          "**Warning。** 字幕选择器设置了 `white-space: nowrap` 但未限制 `max-width`，长短语会溢出屏幕之外。",
          "**修复：** 添加 `max-width: 1600px`（横屏）或 `900px`（竖屏），同时保持 `overflow: visible`。",
        ],
        codeBlocks: [],
      },
      {
        h: "`caption_textshadow_on_group_container`",
        id: "caption_textshadow_on_group_container",
        p: "",
        paras: [
          "**Warning。** 对字幕组容器直接补间动画 `textShadow`；在半透明子元素配合下，外发光会渲染成覆盖整组文字后面的明显矩形块。",
          "**修复：** 将 `textShadow` 应用在单个高亮单词元素上，整个字幕组仅通过 `scale` 做脉冲缩放。",
        ],
        codeBlocks: [],
      },
      {
        h: "`caption_transcript_not_inline`",
        id: "caption_transcript_not_inline",
        p: "",
        paras: [
          "**Error。** 字幕合成通过 `fetch()` 异步加载文稿，但浏览器编辑器内的字幕编辑面板需要内联的 `var TRANSCRIPT = [...]` 数组来检测与编辑字幕。",
          "**修复：** 将文稿内联嵌入为带有 JSON 双引号键名的 `var TRANSCRIPT = [...]`。",
        ],
        codeBlocks: [],
      },
      {
        h: "字体",
        id: "fonts",
        p: "",
        paras: ["来源：`packages/lint/src/rules/fonts.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`font_family_without_font_face`",
        id: "font_family_without_font_face",
        p: "",
        paras: [
          "**Error。** 使用了未通过 `@font-face` 声明的字体族，渲染器无法提供该字体，文字将回退到默认字体。",
          "**修复：** 使用 `@font-face` 声明每个字体族并指向已捕获的 `.woff2` 文件，或将字体打包进 `capture/assets/fonts/`。",
          '声明中的字体名可用引号包裹也可不加引号。如果 `font-family` 是声明块的最后一个描述符，末尾分号可省略。写在 `font` 简写属性中的字体族（如 `font: 500 16px/1 "PingFang SC", sans-serif`）与单独的 `font-family` 等效。',
        ],
        codeBlocks: [],
      },
      {
        h: "`font_face_local_only`",
        id: "font_face_local_only",
        p: "",
        paras: [
          "**Warning。** 某个 `@font-face` 仅指定了 `local()` 来源。本地渲染会使用本机已安装的字体，而云端渲染或未安装该字体的机器则会回退成另一款字体。",
          "**修复：** 添加指向项目内 `.woff2` 文件的 `url()` 来源，或改用 Google Fonts 字体族。",
        ],
        codeBlocks: [],
      },
      {
        h: "`system_font_will_alias`",
        id: "system_font_will_alias",
        p: "",
        paras: [
          "**Warning。** 使用了系统字体却没有匹配的 `@font-face`；在分布式渲染中系统字体捕获默认禁用，字体会在渲染时被替换并可能引发文本重排。该规则仅在启用 `distributed: true` 选项运行 linter 时报告（用于检查分布式或 Lambda 渲染）；本地渲染能按预期捕获系统字体，因此不会触发此警告。",
          "**修复：** 使用 `@font-face` 和项目本地字体文件打包字体，不要依赖操作系统自带字体。",
        ],
        codeBlocks: [],
      },
      {
        h: "纹理",
        id: "textures",
        p: "",
        paras: ["来源：`packages/lint/src/rules/textures.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`texture_class_missing_base`",
        id: "texture_class_missing_base",
        p: "",
        paras: [
          "**Warning。** 使用了材质纹理类名但缺少基础类名 `hf-texture-text`，导致纹理管线不会介入。",
          '**修复：** 将基础类与材质类一起添加，例如 `class="hf-texture-text hf-texture-lava"`。',
        ],
        codeBlocks: [],
      },
      {
        h: "`texture_class_unknown`",
        id: "texture_class_unknown",
        p: "",
        paras: [
          "**Error。** 材质纹理类名在任何本地 CSS 中都未定义，导致文本按无纹理状态渲染。",
          "**修复：** 将 Texture Mask Text 组件对应的 `<style>` 块粘贴进合成，或修正类名拼写错误。",
        ],
        codeBlocks: [],
      },
      {
        h: "`texture_drop_shadow_on_text`",
        id: "texture_drop_shadow_on_text",
        p: "",
        paras: [
          "**Warning。** 直接对带纹理的文字应用了投影（drop shadow），阴影会作用在遮罩而非字形轮廓上。",
          "**修复：** 在文字外包一层容器，并将 `filter: drop-shadow(...)` 应用到外层容器，而非 `hf-texture-text` 元素本身。",
        ],
        codeBlocks: [],
      },
      {
        h: "`texture_text_missing_mask`",
        id: "texture_text_missing_mask",
        p: "",
        paras: [
          "**Warning。** 使用了 `hf-texture-text` 但未搭配任何材质纹理类或自定义 `mask-image`，没有可显露的纹理内容。",
          "**修复：** 添加如 `hf-texture-lava` 之类的材质类，或在元素上设置 `mask-image` 与 `-webkit-mask-image`。",
        ],
        codeBlocks: [],
      },
      {
        h: "幻灯片",
        id: "slideshows",
        p: "",
        paras: ["来源：`packages/lint/src/rules/slideshow.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`slideshow_invalid`",
        id: "slideshow_invalid",
        p: "",
        paras: [
          "**Error。** 幻灯片数据岛包含无效 JSON，或结构不符合 manifest schema。",
          '**修复：** 确保 `<script type="application/hyperframes-slideshow+json">` 块是符合 SlideshowManifest schema 的合法 JSON。若提供了 `startTime` 和 `endTime`，必须为有限 JSON 数字；加引号的数字如 `"0"`、`null` 以及溢出值如 `1e400` 均无效。',
        ],
        codeBlocks: [],
      },
      {
        h: "`slideshow_unresolved_ref`",
        id: "slideshow_unresolved_ref",
        p: "",
        paras: [
          "**Error。** 幻灯片 manifest 引用了找不到匹配场景元素的 `sceneId`，或目标场景没有显式时间窗口。",
          "**修复：** 确保每个 `sceneId` 都匹配一个场景元素的 `data-composition-id`，或为其显式指定 `startTime`/`endTime`。",
        ],
        codeBlocks: [],
      },
      {
        h: "适配器：Lottie 与 Three.js",
        id: "adapters-lottie-and-threejs",
        p: "",
        paras: ["来源：`packages/lint/src/rules/adapters.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`missing_lottie_script`",
        id: "missing_lottie_script",
        p: "",
        paras: [
          "**Error。** 合成使用了 Lottie 但未加载任何 Lottie 脚本，动画无法渲染。",
          "**修复：** 在 Lottie 业务代码之前添加 `lottie-web` `<script>` 标签。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_three_script`",
        id: "missing_three_script",
        p: "",
        paras: [
          "**Error。** 合成使用了 Three.js 但未加载任何 Three.js 脚本，3D 场景无法渲染。",
          "**修复：** 在 Three.js 业务代码之前添加 Three.js `<script>` 标签。",
        ],
        codeBlocks: [],
      },
      {
        h: "关联片段",
        id: "linked-clips",
        p: "",
        paras: ["来源：`packages/lint/src/rules/linkedClips.ts`。"],
        codeBlocks: [],
      },
      {
        h: "`linked_clip_orphan`",
        id: "linked_clip_orphan",
        p: "",
        paras: [
          "**Warning。** 某片段带有 `data-link`，但配对的另一半片段已不存在，导致它按单成员组进行编辑。",
          "**修复：** 移除 `data-link` 属性，或恢复缺失的配对片段。",
        ],
        codeBlocks: [],
      },
      {
        h: "`linked_clips_out_of_sync`",
        id: "linked_clips_out_of_sync",
        p: "",
        paras: [
          "**Warning。** 共享同一个 `data-link` 的片段在时序属性上存在差异，但关联片段应当作为一个整体编辑。",
          "**修复：** 为同组所有成员设置相同的 `data-start`、`data-duration`、`data-media-start` 与 `data-playback-rate`，或移除所有成员的 `data-link` 解除关联。",
        ],
        codeBlocks: [],
      },
      {
        h: "项目级检查",
        id: "project-level-checks",
        p: "",
        paras: [
          "来源：`packages/lint/src/project.ts`、`packages/lint/src/hyperframeLinter.ts` 与 `packages/lint/src/hevcPreviewLint.ts` 中的项目级 lint 扫描阶段。",
        ],
        codeBlocks: [],
      },
      {
        h: "`multiple_root_compositions`",
        id: "multiple_root_compositions",
        p: "",
        paras: [
          "**Error。** 多个根级 HTML 文件同时携带了 `data-composition-id`，运行时可能发现多个入口并重复播放音频。",
          "**修复：** 仅保留一个携带 `data-composition-id` 的根级 `index.html`；删除或重命名其余文件。",
        ],
        codeBlocks: [],
      },
      {
        h: "`blank_root_with_standalone_composition`",
        id: "blank_root_with_standalone_composition",
        p: "",
        paras: [
          "**Error。** 默认 `index.html` 没有可渲染内容，而项目中另有独立定时合成文件，导致默认命令打开一段空白视频。",
          "**修复：** 将该合成移入 `index.html`，或使用 `data-composition-src` 挂载它；如果独立文件是刻意安排，请以显式路径渲染该文件。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_or_empty_sub_composition`",
        id: "missing_or_empty_sub_composition",
        p: "",
        paras: [
          "**Error。** `data-composition-src` 指向了文件夹、空文件或不存在的文件，挂载点不可用且会在渲染预检阶段被拒绝。",
          "**修复：** 将 `data-composition-src` 指向具体 HTML 文件（例如 `<folder>/index.html`），并确保其中有可渲染内容。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_local_asset`",
        id: "missing_local_asset",
        p: "",
        paras: [
          "**Error。** 元素引用了项目中不存在的本地文件，渲染器会静默跳过它们，导致成片画面缺失。",
          "**修复：** 将文件放入项目目录，或更新 `src` 指向真实存在的文件。常见原因之一是重命名了抓包采集来的资产文件。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_file_without_element`",
        id: "audio_file_without_element",
        p: "",
        paras: [
          "**Warning。** 项目目录中有音频文件，但没有任何合成中的 `<audio>` 元素引用它，因此渲染出的视频将无声。",
          "**修复：** 添加引用该文件的 `<audio>` 元素。",
        ],
        codeBlocks: [],
      },
      {
        h: "`audio_src_not_found`",
        id: "audio_src_not_found",
        p: "",
        paras: [
          "**Error。** `<audio>` 元素引用了不在项目中的文件，渲染出的视频将无声。",
          "**修复：** 将缺失文件放入项目目录，或修改 `src` 指向真实存在的文件。",
        ],
        codeBlocks: [],
      },
      {
        h: "`duplicate_audio_track`",
        id: "duplicate_audio_track",
        p: "",
        paras: [
          "**Warning。** 两个可发声片段在同一 `data-track-index` 上发生时间重叠。它们在播放时会同时响起：渲染器不管分轨号都会混音全部发声片段，而 `data-track-index` 仅决定它在 Studio 哪一条轨上绘制，于是 Studio 会把两者重叠画在同一轨内。此类重叠要么是意外残留的副本，要么是两路声音共用了同一轨道。",
          "**修复：** 如果两者都需要同时发声（如呼啸转场音效叠进撞击音），请为其中一个指定独立的 `data-track-index`，混音结果不会改变。如果其中一个是残留副本，请删除它或错开时间使其不再重叠。",
        ],
        codeBlocks: [],
      },
      {
        h: "`texture_mask_asset_not_found`",
        id: "texture_mask_asset_not_found",
        p: "",
        paras: [
          "**Error。** CSS `mask-image` 或 `-webkit-mask-image` 声明引用了项目中不存在的文件，纹理遮罩无法加载。在合法 CSS 中，注释及 `content` 字符串等其他声明里的文本会被自动忽略。",
          "**修复：** 将缺失的遮罩文件添加到项目中，或更新 `mask-image` URL。",
        ],
        codeBlocks: [],
      },
      {
        h: "`missing_stylesheet_asset`",
        id: "missing_stylesheet_asset",
        p: "",
        paras: [
          "**Warning。** 外链本地样式表中的 `url()` 相对该样式表目录无法解析。浏览器按样式表所在文件夹解析 `url()`，因此字体或图片会返回 404，渲染悄然回退。当目标文件存在于上层目录时，修复提示会直接给出可用路径。",
          "**修复：** 将 `url()` 修改为相对于样式表文件的路径（例如在 `styles/main.css` 中写成 `../assets/fonts/x.ttf`），或补齐缺失文件。",
        ],
        codeBlocks: [],
      },
      {
        h: "`inaccessible_media_url`",
        id: "inaccessible_media_url",
        p: "",
        paras: [
          "**Error。** 远程媒体 URL 未对 `HEAD` 请求返回 2xx 状态（或请求失败、超时），媒体无法加载。仅 `@hyperframes/lint` 异步导出的 `lintMediaUrls()` 会报告此项；`hyperframes lint` 与 `hyperframes check` 不会执行该网络探测。",
          "**修复：** 替换为有效且网络可达的媒体 URL。",
        ],
        codeBlocks: [],
      },
      {
        h: "`hevc_preview_codec`",
        id: "hevc_preview_codec",
        p: "",
        paras: [
          "**Info。** 视频文件采用了 HEVC/H.265 编码。后端渲染不受影响（由 FFmpeg 预解码），当浏览器无法硬解 HEVC 时预览也会自动回退到缓存的 H.264 代理文件。",
          "**修复：** 无需操作。若预览依然播放失败，请运行 `hyperframes doctor` 检查媒体自动代理功能是否开启。",
        ],
        codeBlocks: [],
      },
      {
        h: "`video_media_start_at_or_past_eof`",
        id: "video_media_start_at_or_past_eof",
        p: "",
        paras: [
          "**Warning。** 视频的 `data-media-start` 位于或超出了源文件的可播放时长结尾，导致视频在整个片段窗口内一直定格在最后一帧。",
          "**修复：** 若并非有意定格最后一帧，请将 `data-media-start` 调小至源文件时长以内。",
        ],
        codeBlocks: [],
      },
    ],
  },
  "guide-rendering": {
    lede: "浏览器编辑器是导出项目最简单的地方。当智能体、脚本、CI 任务或高级交付工作流需要控制渲染时，请使用命令行。",
    sections: [
      {
        h: "从 Studio 导出 GIF",
        p: "",
        paras: [
          "打开**渲染**面板，选择 **GIF**，设置循环次数，然后点击**导出**。用 `0` 无限循环，或用 `1` 到 `65535` 的整数指定有限循环次数。GIF 导出无音频且最高 30 fps；选择 GIF 时 60 fps 选项会被禁用。成品 GIF 在渲染列表中预览，可在彼处打开、下载或删除。",
        ],
        codeBlocks: [],
        id: "export-a-gif-from-studio",
      },
      {
        h: "渲染普通视频",
        p: "",
        paras: [
          "在项目目录中： 省略 `--output` 时，HyperFrames 会把结果写到 `renders/` 下。",
          "常规工作流是： `lint` 检查项目结构。`check` 在浏览器中打开项目，查找运行时、布局、动效、媒体和对比度问题。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --output final.mp4",
            file: "bash",
          },
          {
            code: "npx hyperframes lint\nnpx hyperframes check\nnpx hyperframes render --output final.mp4",
            file: "bash",
          },
        ],
        id: "render-a-normal-video",
      },
      {
        h: "选择格式",
        p: "",
        paras: [
          "| 格式 | 用途 |\n| - | - |\n| MP4 | 正常共享、发布和交付 |\n| MOV | ProRes 工作流和透明编辑中间文件 |\n| WebM | Web 交付和透明叠加层 |\n| GIF | 在 Issue、PR 和文档中的短预览 |\n| PNG 序列 | 逐帧交给合成软件 |\n| HLS | 从播放列表目录点播流媒体 |",
          "示例： GIF 无音频且透明度有限。正常播放请优先 MP4 或 WebM。",
        ],
        codeBlocks: [
          {
            code: "# Transparent web overlay\nnpx hyperframes render --format webm --output overlay.webm\n\n# ProRes editing file\nnpx hyperframes render --format mov --output master.mov\n\n# Short looping preview\nnpx hyperframes render --format gif --fps 15 --output preview.gif\n\n# RGBA frames in a directory\nnpx hyperframes render --format png-sequence --output frames\n\n# HLS VOD stream in a directory\nnpx hyperframes render --format hls --output stream",
            file: "bash",
          },
        ],
        id: "choose-a-format",
      },
      {
        h: "透明视频",
        p: "",
        paras: [
          "透明 Web 叠加层用 WebM，ProRes 4444 编辑中间文件用 MOV。在输出必须保持透明的地方，不要绘制合成背景；不透明的 `html`、`body` 或全帧背景会被编码成可见像素。",
          "MP4 是常规不透明交付格式。渲染透明度后，请在高对比背景上检查文件，不要只信总是显示黑色背景的播放器。",
          "对于 VP9 WebM，`ffprobe` 报告 `pix_fmt=yuv420p` 本身并不意味着透明度丢失。FFmpeg 默认 VP9 解码器也可能从含有 alpha 的文件中产生不透明图像。要检查一帧，请在输入**之前**显式选择感知 alpha 的解码器：",
          "在棋盘格或对比背景上查看 PNG。如果仍然不透明，请与合成的 PNG 序列输出对比，检查视频编码前透明度是否已丢失。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --format webm --output overlay.webm\nnpx hyperframes render --format mov --output overlay.mov",
            file: "bash",
          },
          {
            code: "ffmpeg -c:v libvpx-vp9 -i overlay.webm -frames:v 1 -pix_fmt rgba overlay-frame.png",
            file: "bash",
          },
        ],
        id: "transparent-video",
      },
      {
        h: "HLS 流媒体输出",
        p: "",
        paras: [
          "`--format hls` 会把 HLS VOD 流写入输出**目录**：`master.m3u8`、`video.m3u8` 和 `video_NNNNN.ts`，有音频时还有 `audio.m3u8` 和 `audio_NNNNN.ts`。视频和音频编码与 MP4 相同；只有交付容器不同，打包是流拷贝而非第二次编码。",
          "除最后一个外，每个分段长度恰为 `--hls-segment-seconds`（默认 4），且每个分段都从关键帧开始。HLS 输出仅 SDR，因此拒绝 `--hdr`；拒绝 `--gpu` 是因为 GPU 编码器会忽略固定长度分段依赖的强制关键帧锁定。Cloud 渲染（`lambda`、`cloudrun`）暂不提供 HLS。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --format hls --output stream\nnpx hyperframes render --format hls --hls-segment-seconds 6 --output stream",
            file: "bash",
          },
        ],
        id: "hls-streaming-output",
      },
      {
        h: "输入视频编码",
        p: "",
        paras: [
          "浏览器编辑器、预览、`check` 和已发布项目通常会对 Chrome 无法可靠解码的本地视频（包括常见 HEVC 和 ProRes 输入）创建缓存浏览器代理。原文件保留在项目中，仍是渲染源。",
          "如果片段在预览中全黑，请保持自动代理开启、确认源为本地，并运行 `npx hyperframes check`。仅在浏览器已支持该源、或正在排查代理本身时才禁用代理。",
        ],
        codeBlocks: [],
        id: "input-video-codecs",
      },
      {
        h: "选择画质和帧率",
        p: "",
        paras: [
          "默认 `looks` 画质（CRF 16）是大多数成品工作的正确选择。MOV 是编辑中间文件。它使用带 alpha 的 ProRes 4444，除非 `--prores-profile` 选择更小的 4:2:2 配置（`hq`、`422`、`lt` 或 `proxy`），后者没有 alpha：透明区域渲染为黑色。`--crf` 和 `--video-bitrate` 与 ProRes 无法映射，对 MOV 会被拒绝；需要这些控件时请选 MP4 或 WebM。",
          "交付给播放器或平台时，MP4 渲染还可设置关键帧间隔和峰值码率。`--keyframe-interval 2` 表示至少每两秒一个关键帧。`--max-bitrate 8M` 限制峰值，其余仍由画质目标决定，`--buffer-size`（默认两倍封顶）设置封顶的测量窗口。不设置则编码不变。在 Lambda 上，间隔是上限，因为拼接分片会加入关键帧；封顶按分片生效，因此拼接后可能脉冲到一个 buffer。",
          "仅在源或目的地需要时才用更高帧率。帧更多，渲染耗时更长。",
          "CLI 在合成有 `data-fps` 时使用它，否则默认 30 fps。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --format mov --prores-profile hq --output edit.mov",
            file: "bash",
          },
          {
            code: "npx hyperframes render --keyframe-interval 2 --max-bitrate 8M --output delivery.mp4",
            file: "bash",
          },
          {
            code: "# Faster review version\nnpx hyperframes render --quality draft --output review.mp4\n\n# Larger final master\nnpx hyperframes render --quality high --output master.mp4\n\n# Explicit frame rate\nnpx hyperframes render --fps 60 --output final-60fps.mp4",
            file: "bash",
          },
        ],
        id: "choose-quality-and-frame-rate",
      },
      {
        h: "4:4:4 母版",
        p: "",
        paras: [
          "MP4 输出每个方向以半分辨率储存颜色（4:2:0）。细彩色文字、UI 笔画和饱和边缘可能变软或出现色边。对于以文字和 UI 为主的母版文件，请用全分辨率颜色渲染： 这会编码 H.264 High 4:4:4 Predictive（yuv444p），并把每一帧都捕获为无损 PNG，因为 Chrome 的 JPEG 捕获在 Linux 上和截图捕获时本身就是 4:2:0。渲染更慢：在我们的测试中，文字和 UI 合成耗时约为默认渲染的两倍，全帧 footage 约三点五倍，因为图像越精细 PNG 编码越贵。",
          "在相同 CRF 下对比无损母版测得，彩色文字的色度 PSNR 提高约 16 dB，UI 录屏提高约 13 dB，摄像机 footage 和渐变无实质变化。画面以 footage 为主的视频请保留默认。",
          '`444` 仅支持 SDR MP4 且只用软件编码器。它会与 `--gpu`、`--hdr` 和其他格式冲突。分布式渲染（包括 Lambda 和 Cloud Run）只编码 4:2:0，并拒绝 `"444"` 的 `chromaSubsampling`。',
          "许多播放器无法解码 4:4:4，因此请用于母版和编辑交接，而非直接发布的成品：",
          "| 播放器 | 4:4:4 MP4 |\n| - | - |\n| Chrome 155 (Windows) | 可播放 |\n| Edge 155 (Windows) | 可播放 |\n| Firefox 157 (Windows) | 无法播放（无 YUV 4:4:4 解码器） |\n| VLC 3.0 (Windows) | 可播放 |\n| Windows Media Player 和媒体播放器应用 | 无法播放（“不支持的编码设置”） |\n| Safari (iOS 26.6) | 可播放 |\n| Safari 26.6 (macOS 26.6) | 可播放 |\n| QuickTime / AVFoundation (macOS 26.6) | 可播放 |",
          "已用 H.264 High 4:4:4 Predictive、8-bit、1920×1080 测试。以上所有播放器均可播放默认 4:2:0 输出。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --chroma-subsampling 444 --output master.mp4",
            file: "bash",
          },
        ],
        id: "444-masters",
      },
      {
        h: "本地或 Docker",
        p: "",
        paras: [
          "本地渲染是常规选择： 启动快，可使用本机浏览器 GPU。在 WSL2 上，Chrome 可能无法接通 GPU；见[WSL2 下渲染慢](https://hyperframes.heygen.com/help.md#the-render-is-slow-under-wsl2)。",
          "当需要受控的 Chrome、FFmpeg 和字体环境时使用 Docker： Docker 增加启动和基础设施开销。它适用于 CI 和可重复的生产环境，不是每次成品渲染的必需。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --output final.mp4",
            file: "bash",
          },
          {
            code: "npx hyperframes render --docker --output final.mp4",
            file: "bash",
          },
        ],
        id: "local-or-docker",
      },
      {
        h: "渲染另一个合成",
        p: "",
        paras: [
          "默认渲染根 `index.html`。要定位另一个独立合成： 使用 `<template>` 包装器的嵌套合成应通过包含它们的根合成渲染。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render \\\n  --composition compositions/intro.html \\\n  --output intro.mp4",
            file: "bash",
          },
        ],
        id: "render-another-composition",
      },
      {
        h: "批量和云工作",
        p: "",
        paras: [
          "对于多个变量驱动版本，使用批量渲染。对于远程基础设施，使用 HyperFrames cloud、AWS Lambda 或 Google Cloud Run。",
          "这些工作流涉及输出命名、凭据、并发和基础设施选择。请先从 [CLI 指南](https://hyperframes.heygen.com/developers/cli.md) 开始，需要每个标志时使用完整 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md)。",
        ],
        codeBlocks: [],
        id: "batch-and-cloud-work",
      },
      {
        h: "渲染来源",
        p: "",
        paras: [
          "渲染视频携带两个容器元数据标签，说明是哪个工具写了文件： 仅此而已。标签只包括渲染器及其版本，不包括文件路径、用户名、机器名、项目名或合成的任何内容。它们是容器元数据，不是可见水印，视频的任何像素都不变。Matroska 读取时会把标签名大写，因此 `.webm` 会报告 `HYPERFRAMES_RENDERER`。",
          "随时可以剥除它们： [!NOTE] 这些标签是未认证的诊断提示，不是来源证明。它们是普通无签名容器键，任何人都可以用一条 `ffmpeg -metadata` 命令写入相同的两个值：标签存在只说明文件*声称*是 HyperFrames 输出，而非 HyperFrames 写过它。标签缺失同样说明不了什么，因为重新编码、remux、或丢弃未知键的工具都会剥掉它，旧版本渲染的文件从未携带它。请把它们当作“大概是哪个工具产出此文件？”的排查提示，永不作真实性、署名或许可依据。可验证的来源需要 C2PA 这类签名声称。",
        ],
        codeBlocks: [
          {
            code: "ffprobe -v error -show_entries format_tags -of json out.mp4",
            file: "bash",
          },
          {
            code: '{ "hyperframes_renderer": "hyperframes", "hyperframes_version": "0.7.107" }',
            file: "json",
          },
          {
            code: "ffmpeg -i out.mp4 -map_metadata -1 -c copy clean.mp4",
            file: "bash",
          },
        ],
        id: "render-provenance",
      },
      {
        h: "请智能体给出正确输出",
        p: "",
        paras: [
          "以上标志都是智能体替你设置的。请在请求中说出你需要什么，它会选择。默认值（MP4、1920×1080、30fps、`looks` 画质）是故意选好的，因此大部分诀窍在于知道何时*不再*要求更多。",
        ],
        codeBlocks: [],
        id: "ask-the-agent-for-the-right-output",
      },
      {
        h: "画质等级",
        p: "",
        paras: [
          "按名称说出等级，智能体会选择匹配的编码预设——你无需指定 CRF 或编码器速度：",
          "| 说这个 | 等级 | 最适合 |\n| - | - | - |\n| “draft” / “quick render” | `draft` | 还在评判剪辑时的快速迭代 |\n| 什么都不说 | `looks`（默认，CRF 16） | 成品工作：1080p 下视觉无损 |\n| “final” / “high quality” | `delivery` | 要交接的母版 |",
          "等级用编码时间交换保真度。`looks`（默认）在 1080p 下已视觉无损，因此把 `delivery` 留给真正要交接的母版，迭代时随意用 `draft`。",
        ],
        codeBlocks: [],
        bullets: [
          "**避免：** `render everything at high quality`",
          "**改为：** `draft renders while we iterate, then one high-quality final`——慢编码只付一次，给已批准的剪辑",
        ],
        id: "quality-tier",
      },
      {
        h: "格式",
        p: "",
        paras: [
          "MP4 是默认，也是几乎所有场景的正确答案——到处都能播放。只有交付目标需要时才要求其他容器： Render this as a transparent WebM overlay. Export a MOV I can drop into Premiere with the background knocked out.",
          "透明度有容器层级，取舍真实存在：",
          "| 要求 | 得到什么 | 注意 |\n| - | - | - |\n| “transparent MOV” | 带 alpha 的 ProRes 4444 | 编辑级选择（Premiere、Final Cut、Resolve、After Effects）。文件大——编辑中间文件本就如此。 |\n| “transparent WebM” | 带 alpha 的 VP9 | 体积小，但**只有浏览器能解码 alpha**——所有视频编辑器都会把透明区域渲染为黑色。仅浏览器播放。 |\n| “PNG sequence” | 无损 RGBA 帧 | 用于 After Effects / Nuke / Fusion 的合成。体积最大。 |",
          "透明度也只在有空位可透视的设计上才*有意义*。下三分之一、订阅卡片或 logo sting 主要是空画布——透明让它与其它 footage 合成。全帧场景（满幅背景、full-bleed 视频、自带底板的标题卡）无物可透；该请求产出的文件看起来与不透明版相同，却更大且能在更少地方播放。",
          '<video aria-label="Overlay spotify preview" src="https://static.heygen.ai/hyperframes-oss/docs/images/prompting/overlay-spotify-preview.mp4#t=0.1" loop playsInline preload="metadata" />',
          "*棋盘格之上的透明 VP9 WebM 叠加层预览。要从 CLI 验证 alpha：VP9 以 out-of-band 储存，查 `ALPHA_MODE=1`（仅查 pix_fmt 会误判），或用 ffmpeg alphaextract 提取。*",
          "[!NOTE] 透明渲染还依赖合成不设置 `html` / `body` 背景——透明只从未绘制处透过。技能会处理这一点；手工创作叠加层请见[渲染指南](https://hyperframes.heygen.com/guides/rendering.md#transparent-video)。",
        ],
        codeBlocks: [],
        bullets: [
          "**避免：** `render my full-screen product promo as a transparent WebM`（把全屏无留白产品宣传片渲染成透明 WebM）",
          "**改为：** `render the promo as MP4; export just the lower-third overlay as transparent WebM` —— 透明属于*叠加*在其他画面上的图层，而非成品全帧影片",
        ],
        id: "format",
      },
      {
        h: "分辨率和帧率",
        p: "",
        paras: [
          "默认 1920×1080、30fps。两者提高都实打实耗费时间，且两者常出于习惯而非需要被要求。",
          "**4K** 是渲染时标志——合成仍保持创作尺寸，Chrome 超采样到 3840×2160。这让任何缩放下的文字、SVG 和 CSS 锐利，但对已锁定在像素网格的内容*毫无*帮助：1080p `<video>`、固定尺寸 `<canvas>` 或低于 4K 的图片得不到细节增益。而且不免费——4K 渲染**每帧慢约 4 倍**并产出**大 3–5 倍的文件**。当交付界面确实需要时（如 4K 显示、客户规范）再要求，不要反射性地要求。",
          "Render this at 4K for the trade-show display. **帧率**逻辑相同：60fps 使引擎捕获和编码的帧数翻倍。面向高刷新屏的快速动态图形值得；说话镜头或慢标题序列则浪费。",
          "[!WARNING] 几个 4K 约束会在渲染开始前停下它（均依据[4K 指南](https://hyperframes.heygen.com/guides/4k-rendering.md#constraints)）：目标方向必须与合成宽高比一致，缩放必须是整数（1080p → 4K 恰为 2×），且**4K 不能与 HDR** 在一次渲染中组合。如果你两者都要，请在合成分辨率渲染 HDR，再单独放大。",
        ],
        codeBlocks: [],
        bullets: [
          "**避免：** `render in 4K 60fps` 给要发 Instagram 的片段——平台会转码调低，慢渲染白付了",
          "**改为：** 社交媒体什么都不说；只有目标确实需要时才点名 `4K`（或 `60fps`）",
        ],
        id: "resolution-and-framerate",
      },
      {
        h: "HDR",
        p: "",
        paras: [
          "HDR 输出为 **HDR10 MP4**（H.265 10-bit，BT.2020），且由*源*驱动——只有合成真正引用了 HDR 媒体（带 BT.2020 标记的 PQ 或 HLG 传输视频，或 16-bit PNG）时渲染才走 HDR。文字、渐变和 GSAP 动画不是 HDR 源；全由它们组成的合成无 HDR 可渲。",
          "This composition has an HDR drone clip — render it as HDR10. 默认自动检测 HDR，所以项目里真有 HDR 源时往往什么都不用说。只有要覆盖探测时才显式强制： HDR **只支持 MP4**（透明 MOV/WebM 请求回落到 SDR），且在 Lambda 上**不可用**（分布式渲染仅 SDR）。源要求和验证见 [HDR 指南](https://hyperframes.heygen.com/guides/hdr.md)。",
        ],
        codeBlocks: [],
        bullets: [
          "“force HDR” → 即便无 HDR 源也强制走 HDR 路径",
          "“force SDR” → 即便有 HDR 源也强制标准范围",
        ],
        id: "hdr",
      },
      {
        h: "渲染在哪里运行",
        p: "",
        paras: [
          "本地渲染是默认，也是整个迭代循环的正确选择。只有单机成为瓶颈时才用云渲染： Render this on Lambda. 它会走 HyperFrames 的 AWS Lambda 路径，把渲染扇出到大量并行工作进程。对于**单主机太长或太大**的渲染是正确选择——数分钟的视频、4K 母版或大并行批量——需要先配好 AWS 凭据。开发循环迭代请留在本地 `render`；往返比任何云分发都快。Lambda 仅 SDR（无 HDR），按计算时间计费；配置、成本形态和保守并发默认值见 [AWS Lambda 指南](https://hyperframes.heygen.com/deploy/aws-lambda.md)。",
          "Lambda 不是唯一的远程目标。**HeyGen 托管云渲染**（[指南](https://hyperframes.heygen.com/deploy/cloud.md)）完全拿掉基础设施——无需配置 AWS 账户；当你的栈已在 GCP 上时用 **Google Cloud Run**（[指南](https://hyperframes.heygen.com/deploy/gcp-cloud-run.md)）。点名你要的那一个（“render this on Cloud Run”）；路由是显式的，从不推断。",
        ],
        codeBlocks: [],
        bullets: [
          "**避免：** `set up Lambda so I can preview edits faster`——云分发只给快速本地循环加延迟",
          "**改为：** `render the final 3-minute 4K cut on Lambda`——真正值得扇出的负载",
        ],
        id: "where-the-render-runs",
      },
      {
        h: "在花钱渲慢片之前先预览",
        p: "",
        paras: [
          "避免浪费 `high`/4K/HDR 渲染的最便宜办法是先判断帧。技能遵循的习惯： [!TIP] 渲染按设计需用户把关——智能体在预览处停下，只在你批准时才渲染。利用这个停顿，在付费导出昂贵文件之前锁定剪辑。",
        ],
        codeBlocks: [],
        bullets: [
          "保持 `preview` 运行并拖动时间线——与渲染同运行时，所见即所得。",
          "需要真实文件检查时用 `draft` 渲染迭代。",
          "剪辑锁定后才要求最终等级 / 分辨率 / 格式。",
          "**避免：** `render the final 4K HDR master` 给还没完整看过的剪辑",
          "**改为：** `draft render so I can check timing` → 批准 → `now the 4K final`",
        ],
        id: "preview-before-you-commit-the-slow-render",
      },
      {
        h: "渲染失败时",
        p: "",
        paras: [
          "运行： 保留第一条精确错误，而非只有最后的“渲染失败”消息。后续检查见[故障排查](https://hyperframes.heygen.com/help.md)。",
          "[!TIP] 务必观看导出文件本身。预览证明项目可以播放；输出文件证明交付正确。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes doctor\nnpx hyperframes lint\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "if-rendering-fails",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)",
          "[修复慢预览或慢渲染](https://hyperframes.heygen.com/guides/performance.md)",
          "[4K 渲染](https://hyperframes.heygen.com/guides/4k-rendering.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
