import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "editor-index": {
    lede: "有两个编辑器。**[Studio 应用](https://hyperframes.heygen.com/studio-app/index.md)** 是带智能体位于预览旁边的桌面应用：你说出或画出要改的内容。**浏览器编辑器**即本页的内容，用浏览器打开任意项目文件夹手动编辑，同时你的智能体在终端中工作。两者编辑的是同一批文件。",
    sections: [
      {
        h: "从哪里开始",
        p: "",
        paras: [
          "| 你想改什么 | 从这里开始 |\n| - | - |\n| 当前帧中能看到的东西 | 在预览中点击它，然后使用 **Design** 或 **Layers** |\n| 何时出现或停留多久 | **Timeline**（时间轴） |\n| 一次动态 | 动画控件和关键帧 |\n| 故事、多场景、结构 | 让智能体处理。**Describe a change to the agent**（⌘K）会把现成的请求复制下来，等你粘贴给它 |",
          "面板可以拖到任意位置；**Window** 可以重新打开已关闭的面板或重置布局。",
        ],
        codeBlocks: [],
        id: "where-to-start",
      },
      {
        h: "编辑你所见的画面",
        p: "",
        paras: [
          "在问题所在的位置暂停，点击该元素（如果元素重叠，可在 **Layers** 中选取），然后只改这一处。用拖拽来移动、缩放、旋转或裁剪；用 **Design** 设置文字、布局、样式、媒体、动态和颜色。然后完整播放这一刻：看起来正确的一帧在运动中也可能发生碰撞。",
          "[!WARNING] **Auto-record manual edits as keyframes**（自动将手动编辑录制为关键帧）默认开启，因此你在播放头处做出的改动会变为动画。",
          "如果要做一处在整个片中都保持不变的修正，请在时间轴工具栏中关闭它。",
          "更多内容：[编辑帧画面](https://hyperframes.heygen.com/studio/canvas.md)。",
        ],
        codeBlocks: [],
        id: "edit-what-you-see",
      },
      {
        h: "改变时序",
        p: "",
        paras: [
          "拖动片段来移动它，拖动边缘来加长或缩短它，并使用 **Split at playhead**（在播放头处拆分）把一个片段切成两半。每次修改后，拖过切点再播放一遍。更多内容：[时间轴](https://hyperframes.heygen.com/studio/timeline.md)。",
        ],
        codeBlocks: [],
        id: "change-the-timing",
      },
      {
        h: "在预览中平移播放头",
        p: "",
        paras: [
          "点击或拖动预览播放控件上方的进度条，即可在视频中移动位置。它在隐藏时间轴和全屏时仍然可用。当进度条获得焦点时，可使用方向键，或用 Home 和 End 跳到开头和结尾。跳转会像移动时间轴播放头一样暂停播放。",
        ],
        codeBlocks: [],
        id: "scrub-the-preview",
      },
      {
        h: "检查与导出",
        p: "",
        paras: [
          "运行 **Lint**（左下角），修复它报告的问题，然后在交付前运行完整检查： 选择顶部的 **Export**，或从智能体或命令行渲染，并在分享前先播放一遍成品文件。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes check",
            file: "bash",
          },
        ],
        id: "check-and-export",
      },
      {
        h: "键盘快捷键",
        p: "",
        paras: [
          "快捷键取决于当前活动区域。下表为浏览器编辑器播放器、画布和时间轴已实现的快捷键。",
          "按 `?`（Shift + /）从时间轴工具栏打开快捷键面板，再按一次或按 Esc 关闭。在文本输入框中输入时它不起作用。",
        ],
        codeBlocks: [],
        id: "keyboard-shortcuts",
      },
      {
        h: "播放",
        p: "",
        paras: [
          "| 快捷键 | 操作 |\n| - | - |\n| Space | 播放或暂停 |\n| J / K / L | 倒放、停止或正放 |\n| Left / Right arrow | 单帧步进，或水平微调选中的画布元素 |\n| Up / Down arrow | 垂直微调选中的画布元素 |\n| Shift + arrow | 水平步进十帧，或更大幅度微调选中元素 |\n| M | 静音或取消静音 |\n| Shift + L | 切换循环播放 |\n| I / O | 设置工作区入点或出点 |\n| Shift + I / Shift + O | 清除入点或出点 |\n| A / E | 跳到入点或出点 |\n| F | 切换全屏 |",
        ],
        codeBlocks: [],
        id: "playback",
      },
      {
        h: "编辑",
        p: "",
        paras: [
          "| 快捷键 | 操作 |\n| - | - |\n| V | 选择工具 |\n| B | 切换剃刀工具 |\n| S | 在播放头处拆分选中的符合条件片段 |\n| N | 切换时间轴吸附 |\n| Command/Ctrl + Z | 撤销 |\n| Command/Ctrl + Shift + Z，或 Ctrl + Y | 重做 |\n| Command/Ctrl + C / V / X | 复制、粘贴或剪切选中的元素 |\n| Command/Ctrl + G | 编组选中元素 |\n| Command/Ctrl + Shift + G | 解组 |\n| Delete / Backspace | 删除选中的关键帧或元素 |",
          "获得焦点的区域决定共享快捷键的行为。方向键会微调选中的画布元素；没有可微调的选中项时会逐帧步进；时间轴获得焦点时会移动时间轴目标（见下文 [时间轴导航](#timeline-navigation)）。选中画布元素时，`K` 会在播放头处添加或移除关键帧，为静态元素启动动画，否则停止播放。`J` 始终驱动播放。",
        ],
        codeBlocks: [],
        id: "editing",
      },
      {
        h: "时间轴导航",
        p: "",
        paras: [
          "先 Tab 进入时间轴再使用这些命令。浏览器编辑器在 Tab 顺序中只保留一个逻辑时间轴目标，并移动该目标，无需让每一行或每个片段都保持挂载。",
          "| 快捷键 | 操作 |\n| - | - |\n| Left / Right arrow | 在聚焦行中移动到上一个或下一个目标 |\n| Up / Down arrow | 移动到上一行或下一行逻辑行中相同时间的最近目标 |\n| Home / End | 移动到聚焦行的开头或结尾 |\n| Command/Ctrl + Home / End | 移动到第一个或最后一个逻辑行 |\n| Page Up / Page Down | 按一页可见逻辑行移动 |\n| Enter / Space | 在聚焦轨道行上展开或折叠关键帧属性通道 |\n| Context Menu 或 Shift + F10 | 在可用时打开聚焦目标的上下文菜单 |",
          "在可展开的轨道行上，右箭头展开折叠的关键帧通道，左箭头折叠展开的通道。从关键帧属性行中，左箭头返回其父轨道行。当没有披露或父级操作适用时，这些箭头会在行内继续移动。",
          "如果目标在虚拟视口之外，浏览器编辑器会把它滚动入视图，并在挂载后恢复焦点。",
        ],
        codeBlocks: [],
        id: "timeline-navigation",
      },
      {
        h: "关键帧与录制",
        p: "",
        paras: [
          "| 快捷键 | 操作 |\n| - | - |\n| K | 在当前选择支持时，在播放头处添加或移除关键帧 |\n| R | 开始或停止手势录制 |",
          "手势录制期间，拖拽录制位置，滚动录制深度，Shift 拖拽录制 3D 旋转，Option/Alt 拖拽录制旋转，Command/Ctrl 拖拽或滚动录制不透明度或缩放。",
        ],
        codeBlocks: [],
        id: "keyframes-and-recording",
      },
      {
        h: "画布与面板",
        p: "",
        paras: [
          "| 快捷键 | 操作 |\n| - | - |\n| G | 切换画布网格 |\n| Command/Ctrl + 1 | 打开 Compositions |\n| Command/Ctrl + 2 | 打开 Assets |\n| Option/Alt + drag | 移动整个动画路径 |\n| Shift + drag a resize handle | 等比缩放 |",
          "[!WARNING] 在文本或源代码输入框中输入时，快捷键不应触发。如果焦点区域不对，请先点击画布或时间轴，再使用编辑快捷键。",
          "使用播放控件旁的 **Shortcuts and tools** 按钮查看内置快捷键列表、工作区控件和跳帧输入框。",
        ],
        codeBlocks: [],
        id: "canvas-and-panels",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[用变量复用设计](https://hyperframes.heygen.com/concepts/variables.md)",
          "[动态模糊](https://hyperframes.heygen.com/guides/motion-blur.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "editor-canvas": {
    lede: "在浏览器编辑器中：选中并修改画布上的可见内容、使用关键帧制作动画，以及编辑源码或交给智能体处理。",
    sections: [
      {
        h: "选中它",
        p: "",
        paras: [
          "在元素完全可见的位置暂停并点击它。如果选中了错误的物体（或它被隐藏、在帧外、或在组内），改为在 **Layers** 标签页中选取。选择在预览、面板和时间轴中是同一个。",
        ],
        codeBlocks: [],
        id: "select-it",
      },
      {
        h: "改变它",
        p: "",
        paras: [
          "在预览上：在选中框内拖拽可移动它，拖动控制柄可缩放，使用旋转控件，裁剪图片或视频而不移动其边框，用方向键微调。发生吸附时会显示参考线。",
          "对于精确数值，使用 **Design**。其分组取决于所选内容：",
          "| 需要 | 在 Design 中查看 |\n| - | - |\n| 改措辞或排版 | Text |\n| 设置位置、大小、间距或对齐 | Layout |\n| 改填充、边框、圆角、阴影、不透明度或效果 | Style |\n| 替换或适配图片、视频或音频源 | Media |\n| 调整透视或 3D 变换 | Layout (3D Transform) |\n| 修正图片或视频的外观 | Grade |\n| 改变时序或动画 | Motion |\n| 应用外观或媒体特效 | Effects |",
          "每次只做一类修改，播放一遍，再决定下一处。",
          "[!WARNING] **Auto-record manual edits as keyframes**（自动将手动编辑录制为关键帧）默认开启，因此在一帧上移动物体可能会不知不觉变成动画。",
          "要做一处在整个片段中都应保持的修正，请在时间轴工具栏中关闭它。",
        ],
        codeBlocks: [],
        id: "change-it",
      },
      {
        h: "图层、群组和嵌套场景",
        p: "",
        paras: [
          "在 **Layers** 中拖拽可改变前后关系。时间轴轨道管的是时间，不是叠放顺序。用 **⌘G** 把一起移动的东西编组（解组用 **⌘⇧G**）。打开嵌套场景来改场景本身；停留在父场景中只改它出现的位置或时机。",
        ],
        codeBlocks: [],
        id: "layers-groups-and-nested-scenes",
      },
      {
        h: "替换媒体",
        p: "",
        paras: [
          "选中图片、视频或音频，从 Design 的 **Media** 或 **Assets** 中更换文件。然后检查裁剪、长度和切入切出：新文件可能有不同的形状或时长。",
        ],
        codeBlocks: [],
        id: "replace-media",
      },
      {
        h: "播放检查",
        p: "",
        paras: [
          "从编辑前播放到编辑后：最终尺寸下仍可读，没有遮住重要内容，入场和出场仍然有效，文字在经过的每个背景上都可读。⌘Z 可撤销。",
        ],
        codeBlocks: [],
        id: "check-it-playing",
      },
      {
        h: "无法在此编辑时",
        p: "",
        paras: [
          "某些生成或嵌套元素无法暴露全部属性。尝试在 Layers 中选中确切的父级或子级，或打开嵌套场景。否则选择 Design 中的 **Ask agent about this element**（它会复制该元素和你的请求给智能体），或直接提出更大的改动：",
        ],
        codeBlocks: [
          {
            code: "Keep this scene's content, but rebuild its layout so the product stays readable at phone size.",
            file: "text",
          },
        ],
        id: "when-it-isnt-editable-here",
      },
      {
        h: "用关键帧制作动画",
        p: "",
        paras: [
          "关键帧是某一时刻的一个值；动态发生在两个关键帧之间。关键帧在时间轴上显示为菱形。",
          '<video src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-animation-keyframe-loop-v1.mp4#t=0.1" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-animation-keyframe-loop-v1.jpg" autoPlay muted loop playsInline preload="metadata" />',
          "选中元素，放置播放头，并添加关键帧。",
        ],
        codeBlocks: [],
        id: "animate-with-keyframes",
      },
      {
        h: "先读懂动态",
        p: "",
        paras: [
          "选中元素，在时间轴上展开其动画通道，并从移动前播放到移动后。先说出真正的问题：开始太晚、花太久、路径错了、或变速方向错了。每种需要不同的修正方法。",
        ],
        codeBlocks: [],
        id: "read-the-motion-first",
      },
      {
        h: "添加、移动或删除关键帧",
        p: "",
        paras: [
          "把播放头放在时刻上，选择 **Add keyframe at playhead**（或选中元素后按 **K**），然后改属性。拖动菱形来改时序（离得越近越快），改其值，或按 **Delete**。",
          "开启 **Auto-record manual edits as keyframes**（默认）后，你在播放头处的任何改动都成为关键帧。这就是摆出两个时刻的快捷方式：设第一个，移动播放头，设第二个，播放。要做一处在整个片段都应保持的修正时关闭它。",
        ],
        codeBlocks: [],
        id: "add-move-or-delete-keyframes",
      },
      {
        h: "缓动与路径",
        id: "easing-and-paths",
        p: "",
        paras: [],
        bullets: [
          "**缓动（Easing）** 控制属性在关键帧之间如何加速与减速。先从预设入手；如果起步或停驻依然生硬，再手动微调速度曲线；需要无过渡的直接跳变时使用阶跃保持（Hold）。务必通过实际播放效果来判断，而不是只盯着曲线形状。",
          "**路径（Paths）：** 位置关键帧会在预览画面上画出运动路线。拖拽控制点可改变路径经过点，弯曲某一段可拉出曲线，按住 **Option** 拖拽元素则可整体平移整条路径。仅当元素应当朝向前进方向时再开启自动旋转（Auto-rotate）。",
        ],
        codeBlocks: [],
      },
      {
        h: "录制手势",
        p: "",
        paras: [
          "当动态用表演比用描述更容易时：选中元素，按 **R**（**Record a gesture**），移动指针，再次按 **R**。拖拽录制位置，滚动录制深度；快捷键面板列出旋转、不透明度和缩放的按键。把它当作第一遍：简化路径并重新定时间。",
        ],
        codeBlocks: [],
        id: "record-a-gesture",
      },
      {
        h: "智能体写的动态",
        p: "",
        paras: [
          "某些动态来自代码中的循环或辅助函数。**Unroll to edit** 可以把受支持的情况变成普通关键帧。当值显示 **Computed value. Edit it in the Code tab.** 时，只能在代码中更改，或请智能体处理：",
          "好的动态会揭示、指向或连接；文字有时间被读完；两个无关的移动不在同一时刻争抢。代码层面的规则见 [GSAP 动画指南](https://hyperframes.heygen.com/guides/gsap-animation.md)。",
        ],
        codeBlocks: [
          {
            code: "Keep the same curved route, but make the move finish with the voiceover instead of two beats later.",
            file: "text",
          },
        ],
        id: "motion-the-agent-wrote",
      },
      {
        h: "编辑源文件",
        p: "",
        paras: [
          "浏览器编辑器、智能体和 CLI 都在同一批文件上工作。小改动且你能看懂时用 **Code**；跨文件、改变结构或从不认识的错误开始时用智能体。（在 [Studio 应用](https://hyperframes.heygen.com/studio-app/edit-with-the-agent.md) 中智能体就在预览旁边，因此不需要下面复制的那些步骤。）",
        ],
        codeBlocks: [],
        id: "edit-the-source",
      },
      {
        h: "选择最小的安全编辑面",
        p: "",
        paras: [
          "| 改动 | 最好的起点 |\n| - | - |\n| 可见文字、布局、样式、媒体、时序或受支持的动态 | Canvas、Inspector 或时间轴 |\n| 已知文件中已知的一个值 | Code |\n| 故事、多场景、生成的动画或项目结构 | Agent |\n| 报告的 Lint 问题且有明确直接的修复方法 | 浏览器编辑器或 Code |\n| 不熟悉的失败或跨文件的修复 | 复制到 Agent |",
          "选择是关于改动本身，不是永久的工作流。你可以互换界面，无需导出或转换项目。",
        ],
        codeBlocks: [],
        id: "choose-the-smallest-safe-surface",
      },
      {
        h: "做出聚焦的源文件修改",
        p: "",
        paras: [
          "编辑会自动保存并可撤销。如果保存失败，编辑器会说明；请先修复与预览服务器的连接，再继续。",
          "[!WARNING] 创建、重命名、移动或删除文件会破坏项目其他地方的引用。",
          "搜索旧路径，或请智能体更新每一处引用。",
          "不要同时在此处和其他工具中编辑同一文件。如果对方改动先落下，你的保存会被拒绝并提示消息；重新加载文件，看改了什么，再次应用你的编辑。",
        ],
        codeBlocks: [],
        bullets: [
          "在左面板列中打开 **Code**。",
          "在项目树中选择确切文件。",
          "找到导致可见结果的值。",
          "做一处聚焦修改。",
          "等预览刷新，然后播放受影响的时刻。",
        ],
        id: "make-a-focused-source-edit",
      },
      {
        h: "就选中元素提问",
        p: "",
        paras: [
          "当可见元素需要改源文件时，选中它并选择 **Ask agent about this element**。浏览器编辑器会准备好元素和项目上下文，与你的指令结合，并把提示复制到剪贴板。把那段提示粘贴到智能体对话中。",
          "![HyperFrames browser editor dialog for copying a prompt about the selected element and project context](https://static.heygen.ai/hyperframes-oss/docs/images/studio/ask-agent-v1.jpg)",
          "浏览器编辑器会为选中元素准备提示；你把它粘贴到智能体对话中。",
          "复制的上下文会告诉智能体去哪看。你的一句话会告诉它什么必须保持成立。",
        ],
        codeBlocks: [
          {
            code: "Keep the current narration and scene order. Make this product panel readable\nat the final video size, and do not change the following scene.",
            file: "text",
          },
        ],
        id: "ask-about-the-selected-element",
      },
      {
        h: "运行 Lint",
        p: "",
        paras: [
          "选择左面板列底部的 **Lint**。浏览器编辑器会打开 **HyperFrame Lint Results**，显示错误、警告、文件位置，以及可用时的修复提示。",
          "直接修复简单且已懂的问题，然后再次运行 Lint。当源位置不熟悉或修复可能影响其他文件时，使用 **Copy to Agent**。把错误发生前你的动作和预期结果也写上： 不要只粘贴错误信息，当预期结果很重要时。技术上成立的修复仍可能做错创意修改。",
        ],
        codeBlocks: [
          {
            code: "This appeared after I shortened the intro clip. I expected the title animation\nto keep its current timing. Fix the issue without changing the rest of the\nopening.",
            file: "text",
          },
        ],
        id: "run-lint",
      },
      {
        h: "交付前使用项目级门禁",
        p: "",
        paras: [
          "Lint 是编辑器内的快速检查。项目级命令仍是最终门禁，尤其当项目包含嵌套合成时： `lint` 检查合成结构。`check` 另外验证浏览器、运行时、布局、动态和 WCAG 对比度。",
          "检查通过不等于故事或最终编码已获批准。源文件修复后请播放项目，并在分享前观看渲染好的文件。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "use-the-project-level-gates-before-delivery",
      },
      {
        h: "预览和源文件不一致时",
        p: "",
        paras: [
          "编辑器、预览和渲染队列故障见 [故障排查](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。完整的批准、验证、渲染和交付路径见 [完成和分享](https://hyperframes.heygen.com/guides/export-and-share.md)。",
        ],
        codeBlocks: [],
        bullets: [
          "停止编辑，直到最新保存完成。",
          "保留第一个确切错误或保存警告。",
          "仅在检查其他工具是否改过文件之后，再重载项目。",
          "运行项目检查。",
          "带错误、项目路径、导致它的操作和预期结果向智能体提问。",
        ],
        id: "when-the-preview-and-source-disagree",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[在浏览器编辑器中编辑](https://hyperframes.heygen.com/studio/index.md)",
          "[画布与预览集成](https://hyperframes.heygen.com/sdk/guides/canvas-integration.md)",
          "[编辑能力判定（Affordances）](https://hyperframes.heygen.com/sdk/guides/editing-affordances.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "editor-timeline": {
    lede: "时间轴决定每件事何时出现、停留多久。每一次修改都会直接保存到项目文件中。",
    sections: [
      {
        h: "移动、裁剪、拆分",
        p: "",
        paras: ["任何修改之后，都要播放通过它：入场、出场和旁白不会自行改写。"],
        codeBlocks: [],
        bullets: [
          "**Move：**拖动片段的中部。长度保持不变。",
          "**Trim：**拖动左边缘改变开始时间，拖动右边缘改变结束时间。",
          "**Split：**把播放头放到要切的位置，选择 **Split at playhead**，或按 **B** 使用拆分工具后点击片段（Shift 点击会在该时间拆分所有片段）。按 **V** 返回选择工具。",
          "**Copy、Duplicate、Delete：**右键点击片段。",
        ],
        id: "move-trim-split",
      },
      {
        h: "工具栏",
        p: "",
        paras: [
          "| 按钮 | 作用 |\n| - | - |\n| **Linked Selection** | 点击和编辑会作用到与被触及片段相连的所有片段，例如视频和它的声音 |\n| **Snapping** | 边缘吸附到播放头、其他片段和节拍 |\n| **Ripple edit** | 默认开启：在主轨道上删除片段会关闭空隙而不是留下空位 |\n| **Audio meters** | 播放时显示电平 |\n| **Add keyframe at playhead** / **Auto-record** | 用于动画的关键帧；见 [动画](https://hyperframes.heygen.com/studio/canvas.md#animate-with-keyframes) |\n| **Add beat at playhead** | 用于切点的定时标记，与音乐配合很方便 |\n| **Select leftward / rightward**（工具菜单中的 **[** 和 **]**） | 选择在播放头之前或之后开始的所有片段，用于整体移动一个段落 |",
          "要添加媒体，把文件拖到时间轴上（**Drop media here**）。要在嵌套场景内工作，展开它或打开它，并使用面包屑返回；请确认你改的是其内部时序还是它在整个视频中的位置。",
          "撤销（⌘Z）涵盖移动、裁剪和拆分。",
          "[accordion] 键盘和读屏导航 Tab 进入时间轴，到达其当前逻辑焦点目标。用 Left 和 Right 在该行内移动。用 Up 和 Down 移动到上一行或下一行相同时间的最近目标。",
          "Home 和 End 移动到聚焦行的开头或结尾。按住 Command 或 Ctrl 移动到第一个或最后一个逻辑行。Page Up 和 Page Down 按一页行移动。",
          "在可展开的轨道行上，Right 展开折叠的关键帧属性通道，Left 折叠展开的通道。从关键帧属性行中，Left 返回其父轨道行。Enter 或 Space 切换同样通道。使用 Context Menu 键或 Shift + F10 打开聚焦目标的菜单（当其有菜单时）。",
          "时间轴在 Tab 顺序中只保留一个逻辑时间轴目标。可见性、关键帧操作等原生头部控件仍是独立的 Tab 停止点。当逻辑目标在虚拟视口之外时，浏览器编辑器会保持它挂载、滚动入视图，然后恢复焦点。",
          "读屏软件把时间轴接收为 treegrid。轨道行会播报其层级和展开状态。片段和关键帧会播报其名称、时间和选中状态。缓动控件会播报其名称和时间。",
          "完整列表见 [快捷键](https://hyperframes.heygen.com/studio/index.md#timeline-navigation)。",
        ],
        codeBlocks: [],
        id: "the-toolbar",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[在画布上编辑](https://hyperframes.heygen.com/studio/canvas.md)",
          "[在浏览器编辑器中编辑](https://hyperframes.heygen.com/studio/index.md)",
          "[Lint 规则](https://hyperframes.heygen.com/reference/lint-rules.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "editor-audio": {
    lede: "在浏览器编辑器中：为音轨添加效果与预设、让背景音乐避让旁白人声、编组管理、静音以及随时间变化的参数自动化。",
    sections: [
      {
        id: "effects-and-presets",
        h: "效果与预设",
        p: "浏览器编辑器内置完整的混音台。每条音轨都有效果器机架：滤波器决定允许通过的频段，动态处理器决定电平如何变化，染色类效果改变波形特征，空间类效果营造声场位置。",
        paras: [
          "浏览器编辑器内置完整的混音台。每条音轨都有效果器机架：滤波器决定允许通过的频段，动态处理器决定电平如何变化，染色类效果改变波形特征，空间类效果营造声场位置。",
          "你在这里做出的每一项调整都会直接写回合成的 HTML 中，没有独立的工程会话文件。因此混音结果可以完整地交给其他人继续编辑、提交进仓库，或在其他机器上渲染。",
        ],
      },
      {
        id: "open-a-tracks-effect-rack",
        h: "打开音轨的效果器机架",
        p: "在时间轴上选中一段音频剪辑，右侧面板会显示 **Audio FX** 区块，按信号流经顺序从上到下排列效果链，并在末尾标注 **Out to mix**。空音轨会显示 “No effects on this track.”。",
        paras: [
          "在时间轴上选中一段音频剪辑，右侧面板会显示 **Audio FX** 区块，按信号流经顺序从上到下排列效果链，并在末尾标注 **Out to mix**。空音轨会显示 “No effects on this track.”。",
          "不要与同一面板上的 **Effects** 区块混淆——那个是画面的视觉特效，与声音无关。",
          "你也可以不通过右侧面板直接打开：点击时间轴上音轨标题栏中的 **FX** 按钮即可打开预设架，底部带有 **Open rack ›** 入口。当该音轨已挂载效果器时，按钮会显示数量计数。",
        ],
      },
      {
        id: "fix-a-voice-with-one-preset",
        h: "用单个预设快速修整人声",
        p: "当你觉得“这段人声听起来不太对劲”时，预设是最快且透明的起点。每个预设本质上就是一套你本来也可以手动搭出的普通效果链——展开即可看到里面的每一个独立效果器。",
        paras: [
          "当你觉得“这段人声听起来不太对劲”时，预设是最快且透明的起点。每个预设本质上就是一套你本来也可以手动搭出的普通效果链——展开即可看到里面的每一个独立效果器。",
          "按你听到的症状来选预设，而不是按效果器名字去猜：",
          "| 听起来像 | 选用 |\n| - | - |\n| 底部有嗡嗡声或低频喷麦轰鸣 | `rumble-cut`，或 80 Hz 高通滤波 |\n| 胸腔共振过重、太贴近麦克风发闷 | **Tame Boominess** |\n| 发闷、像隔着纸板说话 | **Reduce Mud** |\n| 字词不够清晰、难听清 | **Add Clarity**，或[为背景音乐做避让雕刻](#make-music-sit-under-narration) |\n| 高频刺耳、听久了发累 | **Soften Harshness** |\n| 某些字明显比别的字响很多 | 压缩器上的 **Evenness**，或 **Even Out Levels** |\n| 句与句停顿间能听见明显底噪/房间声 | `room-gate` |\n| 人声和音乐打架 | [对背景音乐做避让雕刻](#make-music-sit-under-narration) —— 不要各自乱调 EQ |\n| 干涩、毫无空间感 | `room-tight` 或 `room-natural` |\n| 整体只是“业余录音感” | `voice-clean` |",
          "`voice-clean` 是修整旁白人声的默认答案：它依次去除低频隆隆声、削减浑浊频段、压稳动态起伏、补充清晰度，最后加上峰值上限限制器。`voice-broadcast` 思路相同但更紧致靠前；`voice-warm` 则增强中低频质感而非一味削减。",
          "应用预设时效果链会**追加**到末尾，因此“先清理人声，再叠加音色性格”是完全可行的。重复应用同一个预设时，会就地替换其已有的对应节点。",
          "每个命名任务（job）本身也会以相同参数包含在预设里，所以在叠加单独任务之前先检查预设已包含哪些处理——例如在 `voice-clean` 上再加一次 Reduce Mud，250 Hz 就会被叠加削去 −6 dB，而不是预想的 −3 dB。在机架中展开预设就能看到内部各节点名称，这是确认的最快方式。",
          "除了修整类预设外，还有**风格化角色（Character）**预设——`telephone`、`radio-am`、`megaphone`、`lofi-tape`、`pa-system`、`intercom`、`doofus-worble`、`chipmunk`、`giant`、`monster`——以及**空间（Space）**预设：`room-tight`、`room-natural`、`hall`、`slap-echo`、`dub-throw`。角色预设相当于换装特效而非声音修正，而且彼此风格鲜明，请勿叠用两个。其中 `chipmunk`、`giant` 和 `monster` 会改变音高，效果相当于改变“谁在说话”，而不只是“声音通过什么设备传来”。",
        ],
      },
      {
        id: "add-a-single-effect",
        h: "添加单个效果器",
        p: "点击机架中的 **+ effect**。菜单按实际混音思路把效果器划分为四个家族：",
        paras: [
          "点击机架中的 **+ effect**。菜单按实际混音思路把效果器划分为四个家族：",
          "| 家族 | 决定什么 |\n| - | - |\n| **Filters（滤波器）** | 这条音轨可以占据哪些频段 |\n| **Dynamics（动态）** | 音量电平随时间如何响应 |\n| **Non-linear（非线性）** | 波形形状——声音性格、温暖度与颗粒失真 |\n| **Time（时间）** | 声场位置与调制移动：延迟、混响、合唱、移相与变调 |",
          "菜单里用[命名任务](#fix-a-voice-with-one-preset)代替直接列一个裸 `peaking` 滤波器，因为选 `peaking` 只是挑了个“机器”，真正的决定——要切哪个频段——还没定下来。",
          "顺序非常重要，因为链条中的每个效果器处理的都是上一个节点输出的信号。按以下顺序工作，每一步都能收到更干净的信号：",
          "重要节点的名字可以自行重命名，这样机架一眼就能看出它在干什么；否则两行同叫 `peaking` 的节点长相完全相同，你分不清哪个切浑浊、哪个提亮清晰度。",
          "在反复试听对比、尚未决定是否删掉时，请先旁路（Bypass）节点而非直接删除——它会留在链中但不经过信号路径，随时可无损切回参数。",
        ],
        bullets: [
          "**先减后加。** 先切掉嗡嗡底噪和低中频浑浊。发闷的人声往往是低中频过多，而不是高频不够。",
          "**先滤波再稳电平。** 压缩器会对最响的成分反应；把听不到的超低频喷麦滤掉后，压缩器就不会再被它们误触发。",
          "**先定人声再定关系。** 等人声本身声音站稳后再去雕刻音乐。",
          "**先做质感再封顶。** 饱和度与空间效果放在后半段；限制器（Limiter）放到最后，才能真正充当不削波的峰值上限。放在限制器后面的任何处理都不会受它约束。",
        ],
      },
      {
        id: "use-the-one-knob-controls",
        h: "使用单旋钮控制",
        p: "有五个效果器本身无法只靠单一底层参数就让人明白在调什么——比如没有压缩比（ratio），单看压缩器的阈值（threshold）就毫无意义。它们改为呈现一个派生出的综合单旋钮：",
        paras: [
          "有五个效果器本身无法只靠单一底层参数就让人明白在调什么——比如没有压缩比（ratio），单看压缩器的阈值（threshold）就毫无意义。它们改为呈现一个派生出的综合单旋钮：",
          "| 效果器 | 旋钮 | 0 → 1 变化 |\n| - | - | - |\n| Compressor（压缩器） | **Evenness** | 几乎无干预 → 非常平滑、压得颇紧 |\n| Gate（噪声门） | **Tightness** | 仅切掉真正静音 → 连较轻的音节也切掉 |\n| Saturation（饱和器） | **Warmth** | 略带光泽感 → 明显过载失真 |\n| Reverb（混响） | **Space** | 紧凑小房间 → 宽广空旷大厅 |\n| Bitcrush（降比特失真） | **Crush** | 轻微砂砾质感 → 彻底破碎失真 |",
          "**Evenness**、**Warmth** 和 **Space** 做了电平匹配：补偿增益、输出微调与干声通路会随驱动幅度联动变化，因此拧大这些旋钮时不会顺便把整条音轨推得震耳欲聋。**Tightness** 和 **Crush** 没有电平匹配，因为它们本身不包含对应的增益微调结构。",
          "直接修改这些旋钮底层的明细参数也是允许的，界面上的单旋钮会随之联动到对应刻度——效果链最终持久化的是底层机制参数，而不是旋钮位置本身。",
        ],
      },
      {
        id: "even-out-a-drifting-take",
        h: "拉平长段起伏不均的录音",
        p: "**Even Out Levels** 会测量音轨中真正有说话声的片段并写一条音量增益包络。它的目标是这条音轨自身的第 80 百分位响度而非某个绝对值，因此本身已经比较平稳的录音不会被强行破坏。",
        paras: [
          "**Even Out Levels** 会测量音轨中真正有说话声的片段并写一条音量增益包络。它的目标是这条音轨自身的第 80 百分位响度而非某个绝对值，因此本身已经比较平稳的录音不会被强行破坏。",
          "当整段素材前轻后响、段落间整体飘移时使用 **Even Out Levels**；如果问题在于逐词逐字的瞬态起伏过大，改用压缩器的 **Evenness**。点击 **Remove levelling** 可随时撤销这次平顺处理。",
        ],
      },
      {
        id: "what-should-happen",
        h: "正常预期表现",
        p: "",
        bullets: [
          "预览听到的声音应当与最终导出一致：两者依据同一组 HTML 属性构建相同的音频图。",
          "如果浏览器编辑器遇到一条无法解析的效果链，它会在预览中先回退播放**干声（dry）**以便你还能继续工程操作——但**正式渲染时会直接报错失败**，绝不会悄悄交出一个“听着好像对但实际不对”的音轨。如果预览里效果器完全没生效，请优先排查该链条。",
          "混响（reverb）与延迟（delay）带有尾音，会让渲染结果**比源素材更长**。带混响的背景音乐不再卡死在原始剪辑时长结尾截断，这是预期行为。",
        ],
      },
      {
        id: "common-problems",
        h: "常见问题",
        p: "",
        paras: [
          "**完全听不出任何区别。** 检查节点是否处于旁路状态，再确认你查看的是 **Audio FX** 而不是画面视觉上的 **Effects** 区块。",
          "**人声变干净的同时整体变响了很多。** 末尾带有峰值上限限制器的预设会拉高感知响度。请直接适当收小音轨自身的音量推子，而不要拆掉结尾限制器。",
          "**某项削减叠加生效了两次。** 所选预设内部已经包含了你后面又手动添加的同名任务。展开预设并按节点名逐行检查即可发现。",
          "**提亮高频之后声音反而更难听了。** 发闷的人声必须先做低中频削减；如果在闷声基础上直接拉高高频，只会同时又闷又刺耳。",
          "**字词下面一直有嘶嘶底噪。** 机架里没有哪个效果器能无损消除它。噪声门只会关掉句间空白处的噪音，人声发声时底下的噪音依然原封不动——底噪明显的素材需要更换更好的原始录音。",
        ],
      },
      {
        id: "make-music-sit-under-narration",
        h: "让背景音乐主动避让旁白人声",
        p: "旁白下面垫音乐是视频里最常见、却也最容易用错方法解决的音频问题。",
        paras: [
          "旁白下面垫音乐是视频里最常见、却也最容易用错方法解决的音频问题。",
          "简单粗暴地把整条音乐轨整体关小确实有效，但代价是在有人说话的整个期间音乐完全失去存在感——整条铺底音乐在解说期直接瘫掉。事实上，人声并不需要占据全部频谱，它只占自己发声的那几个关键频段。**避让雕刻（Carve）**只从音乐中精准挖让出这些频段，因此铺底音乐的低频律动和明亮泛音依然在场、仍像一首完整好听的音乐，同时人声保持字字清晰。",
          "[!WARNING] 避让雕刻永远挂载在**音乐**音轨上，切勿挂到人声上。它需要填写的是“我要为谁让出空间”的目标音轨——这和侧链压缩（sidechain compressor）的逻辑完全相同：你选中的是被压低的一方，并在其中指定触发压低它的信号源。让人声对自己做避让是逻辑错误，而非高级混音技巧。",
        ],
      },
      {
        id: "when-to-use-it",
        h: "何时使用",
        p: "只要有人声旁白或对白下面垫着背景音乐就用。它不是最后有空才做的润色步骤——两条轨摆好位置后就应该直接做避让雕刻然后试听。",
        paras: [
          "只要有人声旁白或对白下面垫着背景音乐就用。它不是最后有空才做的润色步骤——两条轨摆好位置后就应该直接做避让雕刻然后试听。",
          "只有音乐下方完全没有人声（如纯 MV、片头标题卡、卡点纯音乐剪辑）时才跳过它。",
        ],
      },
      {
        id: "carve-a-bed",
        h: "对铺底音乐做避让雕刻",
        p: "避让雕刻就位于**音乐**轨效果器机架最上方，而不是单独割裂的工具。选中音乐剪辑并打开 **Audio FX**，该模块会请你勾选需要为其让出空间的人声。",
        paras: [
          "避让雕刻就位于**音乐**轨效果器机架最上方，而不是单独割裂的工具。选中音乐剪辑并打开 **Audio FX**，该模块会请你勾选需要为其让出空间的人声。",
          "如果在它上方恰好只有一条候选人声轨，系统会以默认强度**自动处于已雕刻状态**——因为这正是铺底音乐处于人声下方时的常规需求；当同时存在多条候选人声时，选择器会停在等待手动勾选的状态，而不会胡乱猜测。",
        ],
      },
      {
        id: "set-the-strength",
        h: "设置避让强度",
        p: "只需要调节一个总控参数即可完成整套联动。它会同步推导出挖空多深、覆盖几段频带、带宽多宽、电平整体下落多少以及推到人声之下多远——因为这些指标在真实混音中本就联动变化：",
        paras: [
          "只需要调节一个总控参数即可完成整套联动。它会同步推导出挖空多深、覆盖几段频带、带宽多宽、电平整体下落多少以及推到人声之下多远——因为这些指标在真实混音中本就联动变化：",
          "| 强度（Strength） | 实际效果 |\n| - | - |\n| 默认值（0.25） | 三个频段各轻降 6 dB —— 清晰可感但不会像被生生挖了个洞 |\n| 约 0.5 | 衰减深达 10 dB，避让开始成为听得出的主动效果感 |\n| 更高值 | 故意压得很猛的区间，适合极响的背景配乐压在很轻的人声下面 |\n| 0 | 仅做频谱让位——单频段轻挖，完全不做整体电平闪避衰减 |",
          "**Switch the carve off** 能在保留当前配置的前提下暂停避让，这与彻底清除不同：如果只有一个候选人声，彻底清除后只要重新触发评估，系统就又会自动按默认重新加上避让。",
        ],
      },
      {
        id: "what-it-writes",
        h: "它实际写入了什么",
        p: "写入的只是普通效果器节点。完成避让雕刻后展开机架，你会看到几段 `peaking` 滤波器和一个 `gain` 电平级——没有任何黑箱或私有格式。",
        paras: [
          "写入的只是普通效果器节点。完成避让雕刻后展开机架，你会看到几段 `peaking` 滤波器和一个 `gain` 电平级——没有任何黑箱或私有格式。",
          "在被雕刻过的铺底音乐轨内部，信号先经过频谱挖让，再经过电平闪避匹配，最后再流经你自己手动补充的效果器——因此你放在末尾的限制器依然能稳居信号链最末防线。",
        ],
        bullets: [
          "**包络线条依然可手动编辑。** 避让幅度实时跟随语音能量生成，每个关键值都会落地为普通自动化包络轨，你可以事后手动微调。无人声处音乐保持原样，高声段才会拉到最大雕刻深度。没有“全程死死压扁固定深度”的模式，因为固定衰减会把所有停顿缝隙也压得发瘪。",
          "**反复重新雕刻不会毁掉手动成果。** 由避让生成的节点带有专属标记，你调整强度再次执行时只会精确替换它自己写下的那批节点，你另外手动加的效果器和其它自动化包络会原封不动保留。",
        ],
      },
      {
        id: "point-it-at-a-group-not-at-clips",
        h: "指向编组，而不是零散剪辑",
        p: "如果旁白拆成了多段音频剪辑，先[将它们编成组](#group-tracks)，然后让避让雕刻指向这个组。",
        paras: [
          "如果旁白拆成了多段音频剪辑，先[将它们编成组](#group-tracks)，然后让避让雕刻指向这个组。",
          "如果避让对象点名的是一个个具体剪辑 ID，那一旦后面发生剪辑变动就得手工维护清单：你新加第四段旁白剪辑后，它不在清单视野里，音乐就不会在它下方压低音量。而当避让目标指向编组时，每次分析都会实时读取组内最新成员，后来加入同组的剪辑自动生效，完全无需再改雕刻配置。",
          "当你为一条避让选中第二条未编组人声时，浏览器编辑器也会主动帮你完成这件事——它会在后台把这些语音自动拉进一个组，并改由避让指向那个组。",
        ],
      },
      {
        id: "what-should-happen-carve",
        aliases: [],
        h: "避让生效时的正常表现",
        p: "",
        bullets: [
          "人声字句清晰可辨，同时音乐不会听起来被挖空发虚。",
          "音乐在**词句停顿间隙自然回弹推上来**，而不是整段一直死死压扁。",
          "铺底音乐依然保有低频厚实感和高频细节；如果把两端也削没了，那只是粗暴的低通/带阻滤波器。",
        ],
      },
      {
        id: "common-problems-carve",
        h: "避让常见问题",
        p: "",
        paras: [
          "**音乐听起来被掏空或发出怪异嗡响。** 避让强度设得过高，往默认值（0.25）回调即可。这是最容易一听就辨别出的过度处理。",
          "**人声依然被盖住。** 避让不是音量平衡魔法，救不了整体比人声响一大截的配乐——频谱让位解决不了原始电平悬殊问题。先比对两条音轨的实际响度；机器生成配音的原始音量往往远低于经过母带处理的商业配乐，这种差距先靠调对音量推子就能解决。",
          "**一开头的音乐在还没人说话时就已经被压低。** 自动化包络轨会把第一个关键点往回延续保持到剪辑开头。如果音乐早于人声先起奏，请务必在音乐最开头加一个明确的“不切/原声（no cut）”起点关键帧。",
          "**音乐来回明显抽动（抽吸感）。** 电平包络刻意采用较慢的释放时间，因为一个词刚落音音乐立刻猛蹿回来听起来会像机械泵感。如果依然出现明显抽吸，说明句间停顿比释放窗口还短——此时应适度调小避让强度，而不要硬扛包络形态。",
          "**什么也没有发生雕刻。** 当工程中有多条音轨都有可能是人声时，选择器会保守不动。手动明确指定哪条是目标人声即可。",
        ],
      },
      {
        id: "group-tracks",
        h: "编组音轨",
        p: "五段旁白配音通常需要的是同一套效果链和同一只总推子——而不是随编辑越走越散的五份独立副本。音频组（Group）正是为此而生：组内所有成员汇总进同一条母线，母线上统一管理整体音量、效果链和自动化包络。",
        paras: [
          "五段旁白配音通常需要的是同一套效果链和同一只总推子——而不是随编辑越走越散的五份独立副本。音频组（Group）正是为此而生：组内所有成员汇总进同一条母线，母线上统一管理整体音量、效果链和自动化包络。",
        ],
      },
      {
        id: "when-to-use-a-group",
        h: "何时使用音频组",
        p: "",
        paras: ["单个独立剪辑无需编组——它自己的效果器机架就已经是唯一入口。"],
        bullets: [
          "**由多段剪辑拼成的整条旁白。** 用一只机架统一修整整个人声声线，同时让[避让雕刻](#make-music-sit-under-narration)有唯一且动态跟随新剪辑的目标。",
          "**多条音效层。** 用一个总控一键压低全部音效，远远胜过永远不会回去一个个精调零散剪辑。",
          "**任何需要作为一个整体同起同落的声音单元**——例如环境氛围声场或分轨音乐 Stem。",
        ],
      },
      {
        id: "create-a-group",
        h: "创建音频组",
        p: "如果一条音频轨道里放了不止一个未编组的剪辑，点击该轨道标题栏的 **FX** 按钮，面板会先建议把它们合为一组，提示 “Group these clips to add effects to all of them”。选择 **Group** 即可。",
        paras: [
          "如果一条音频轨道里放了不止一个未编组的剪辑，点击该轨道标题栏的 **FX** 按钮，面板会先建议把它们合为一组，提示 “Group these clips to add effects to all of them”。选择 **Group** 即可。",
          "浏览器编辑器会在这些剪辑背后自动建好母线组，并把原本指向零散剪辑 ID 的模块（例如音乐的避让雕刻）自动改指向这个新组。",
        ],
      },
      {
        id: "read-a-group-row",
        h: "看懂音频组轨道行",
        p: "建组后时间轴会出现独立的组行，包含以下控件：",
        paras: [
          "建组后时间轴会出现独立的组行，包含以下控件：",
          "| 控件 | 作用 |\n| - | - |\n| 折叠三角（Caret） | 展开或收起下属成员轨道行 |\n| `▤` 与名称 | 组图标与自定义标签名 |\n| 计数（Count） | 当前包含多少个成员剪辑 |\n| **FX** | 打开整条汇聚母线的组效果器机架 |\n| `∿` | 显示或隐藏[组的自动化包络轨](#automate-over-time) |",
          "折叠三角与 `∿` 开关彼此独立：展开下属成员不会自动摊开成员各自的自动化轨；展开组的自动化轨也不会顺带把下属成员全部撑开。",
          "组级别效果器听到并处理的是所有成员**汇总求和后的混音信号**，而不是分别单算一遍——这正是母线的核心价值：整段旁白经过同一个总压缩器，其呼吸一致性和响度衔接通常远远好过五个独立片段各自硬套五个压缩器。",
        ],
      },
      {
        id: "mute-a-track-or-a-clip",
        h: "静音一条音轨或单个剪辑",
        p: "在音频轨道左侧对应视觉轨“眼睛图标”的位置是喇叭按钮，可用于 **Mute track** 与 **Unmute track**。针对单个选中剪辑，属性面板最顶部也有同样的静音切换，媒体区块里还带有 **Muted** 开关。",
        paras: [
          "在音频轨道左侧对应视觉轨“眼睛图标”的位置是喇叭按钮，可用于 **Mute track** 与 **Unmute track**。针对单个选中剪辑，属性面板最顶部也有同样的静音切换，媒体区块里还带有 **Muted** 开关。",
          "组轨道行本身不设单独的总静音键；需要静音整组时直接静音其所属轨道即可。已被静音的音频不会混入最终渲染导出，交付前请确认需要发声的轨道均已取消静音。",
        ],
      },
      {
        id: "membership-lives-on-the-member",
        h: "归属关系记录在成员自身属性上",
        p: "了解这一数据模型就能想通绝大多数看似奇怪的表现：是每个成员剪辑自己记录了所属的组，而不是组元素反过来存了一份成员列表。",
        paras: [
          "了解这一数据模型就能想通绝大多数看似奇怪的表现：是每个成员剪辑自己记录了所属的组，而不是组元素反过来存了一份成员列表。",
          "因此，删掉某个成员剪辑后，它会自动干净地退出该组，不会留下悬空失效的引用。",
          "组机制**仅适用于纯音频**，且不支持小组套大组（嵌套）。打在 `<video>` 元素上的音频组标记会被忽略。",
        ],
      },
      {
        id: "what-should-happen-group",
        h: "编组后的正常表现",
        p: "",
        bullets: [
          "时间轴出现新组行并将成员收纳折叠在下方；原来轨道 **FX** 按钮里的建组引导随之消失。",
          "挂载到该组的效果链会一次性作用于全部组成员汇总信号。",
          "静音各成员后，在预览与最终渲染中整组均保持静音。",
        ],
      },
      {
        id: "common-problems-group",
        h: "编组常见问题",
        p: "",
        paras: [
          "**组效果器似乎完全不起作用。** 请核对组成员剪辑上是否真正写入了组引用属性，而不是仅从界面列表外观判断。",
          "**点击建组后没有任何反应。** 建组按时间轴当前可见行去收集选中片段；若轨道处于折叠状态或这些剪辑藏在嵌套子合成里面，先展开或进入对应子合成再操作。",
          "**嵌套子合成里的剪辑不提示建组。** 子合成暴露到主时间轴上时表现为独立的一行行结构，而非“一条音轨下装多段同类音频”，因此不会触发快速建组提示。请点进拥有这些剪辑的那个嵌套合成中完成编组。",
          "**导出成品里漏掉了一整条声音。** 请检查对应轨道是否处于静音状态——已静音轨道会在渲染时完全跳过。",
        ],
      },
      {
        id: "automate-over-time",
        h: "随时间自动化调节参数",
        p: "静态的固定参数无法表达“访谈人出镜时压小音乐”或“片尾三秒渐弱淡出”。自动化包络轨（Automation lane）就是用来解决这个的：你在一条参数轨上打下一串关键点，参数值便会随播放头走过而在点之间平滑变化。",
        paras: [
          "静态的固定参数无法表达“访谈人出镜时压小音乐”或“片尾三秒渐弱淡出”。自动化包络轨（Automation lane）就是用来解决这个的：你在一条参数轨上打下一串关键点，参数值便会随播放头走过而在点之间平滑变化。",
          "自动化既适用于音轨自身的 **volume（音量）**，也适用于任何受支持的效果器参数；[音频组](#group-tracks)同样拥有作用于整条母线的专属包络轨。",
        ],
      },
      {
        id: "show-a-tracks-lanes",
        h: "展开音轨的自动化轨",
        p: "点击音轨或组轨道行标题上的 `∿` 开关。如果该轨已有包络数据，按钮上会显示已有包络数量；同样地，此开关与组的成员折叠按钮完全独立。",
        paras: [
          "点击音轨或组轨道行标题上的 `∿` 开关。如果该轨已有包络数据，按钮上会显示已有包络数量；同样地，此开关与组的成员折叠按钮完全独立。",
          "要为某项效果器参数开启自动化，直接从机架上该参数自身的控制栏点击启用自动化即可。一旦启用包络轨，对应参数的静态滑块就会变成 **Automated** 状态并禁用直接拖动，自此完全由时间包络轨接管数值。",
        ],
      },
      {
        id: "draw-and-edit-an-envelope",
        h: "绘制与编辑包络曲线",
        p: "你可以直接在展开的时间轴自动化轨上操作：",
        paras: [
          "你可以直接在展开的时间轴自动化轨上操作：",
          "拉选一段区间后点击鼠标右键，可以呼出包络塑形与清理快捷菜单：",
          "| 菜单项 | 功能 |\n| - | - |\n| **Ramp up** / **Ramp down** | 将选区内原有变化替换为单向线性的斜坡推升或下降 |\n| **Swell** | 先推升至高点再回落 |\n| **Dip** | 先拉低再恢复原值 —— 大多数闪避（ducking）操作常用的经典曲线 |\n| **Simplify** | 在尽量保持波形外轮廓的前提下清理冗余密点；选区内至少需要包含 3 个控制点 |",
          "选区内容同样支持**复制与粘贴**到其他包络轨，也可以拖拽左右边缘进行**时间伸缩（retime）**——当你挪动旁白时间点、需要对应的闪避包络跟着伸缩对齐时非常顺手。",
        ],
        bullets: [
          "**添加关键点：** 在包络轨想要变化的时间刻度上点击落点。",
          "**拖动关键点：** 自由调整点在时间（横轴）与参数数值（纵轴）上的位置。",
          "**双击输入精确值：** 对数值敏感时不必用手硬拖；注意音量轨允许突破 0 dB 单位增益，最高支持推至 **+12 dB**，而不是只到 1。",
          "**弯曲中间段曲线：** 拖动两点之间的连接线段弧度，即可让参数先稳住再在后半程快速变化，而不只是死板均速滑动。",
          "**框选一个时间区间：** 同时批处理多个连续控制点。",
        ],
      },
      {
        id: "two-things-that-surprise-people",
        h: "两个容易让人意外的时钟与边界规则",
        p: "",
        paras: [
          "**普通音轨自动化点的时间相对于该剪辑自身起点。** 比如铺底音乐在第 8 秒开始，它在第 8 秒处的关键点在时间轴对应处记录；当你左右拖动挪移这个音乐剪辑时，身上的包络关键帧会跟随着一起搬家。",
          "**组母线的自动化点采用整个合成的绝对时间。** 音频组本身并没有自己的 `data-start` 起点，所以组母线上的包络始终以整部视频 0 秒作为零点计算。给组画曲线时请按全局绝对时间阅读刻度。",
          "**包络会将第一个关键点的值向前倒推维持至剪辑开头，并将最后一个点的值向后延续至结尾。** 因此，如果背景音乐早于旁白开始播放，却在第一句人声处放了个向下闪避的控制点，那在无人声的前奏里音乐就会提前一直处于被压扁的状态——请在剪辑最开头显式打一个“原声不衰减”起点关键帧。这是自动化里排名第一的高发失误。",
        ],
      },
      {
        id: "not-every-knob-can-move",
        h: "并非所有旋钮都能做自动化动画",
        p: "音频引擎必须能够实时逐帧调度对应参数，才能支持自动化变化。以下三类属性目前不支持包络驱动：",
        paras: [
          "音频引擎必须能够实时逐帧调度对应参数，才能支持自动化变化。以下三类属性目前不支持包络驱动：",
          "| 这些项目 | 为何无法做自动化 |\n| - | - |\n| 压缩器（Compressor）、限制器（Limiter）、噪声门（Gate）、降比特（Bitcrush）、变调（Pitch shift） | 属于整机配置级参数而非纯即时标量调度 —— **这些模块上所有参数都不可动态移动** |\n| 饱和器（Saturation）的 type、threshold 与 oversample | 会重建非线性失真曲线本身；仅其输出级（gain/mix）可动态调节 |\n| 混响（Reverb）的 size 与 damping | 会重新计算冲激房间响应结构；仅其湿声（wet）与干声（dry）混合比可移动 |",
          "**强行给不支持的参数画包络会在播放与渲染时静默无效**——数据能存进 HTML，但听起来毫无变化。其中尤其容易踩坑的是变调（pitch shift），因为大家直觉上很容易想画一条持续升调的包络，但它实际上在底层属于 worklet 级节点而无法逐帧驱动且不主动报错。同理，如果希望压缩器在不同时刻发挥不同压限力度，可以在它**前面**串一个可自动化的 `gain` 增益级并画音量包络——改变送进压缩器的信号推动强度，刚好能达成大多数时候调阈值想做出的变化效果。",
          "如果要对整套预设整体做淡入淡出，请针对预设总控本身挂自动化而不是分别画里面每个小节点——内部节点往往互不共享通用旋钮，只有预设外层整体才是有用抓手。",
          "[音频效果器技术参考](https://hyperframes.heygen.com/reference/audio-effects.md#effect-registry) 中明确标注了每一个效果器的可自动化参数。",
        ],
      },
      {
        id: "what-should-happen-auto",
        h: "自动化生效时的正常表现",
        p: "",
        bullets: [
          "参数随播放进度在各关键点之间连续变化，浏览预览与最终视频渲染完全一致。",
          "带自动化轨的参数标签会变为 **Automated**，原有的静态固定控件保持禁用状态。",
          "由[避让雕刻](#make-music-sit-under-narration)写出的包络也是完全标准的自动化轨，事后可像自己手画的轨一样继续修改调整。",
        ],
      },
      {
        id: "common-problems-auto",
        h: "自动化常见问题",
        p: "",
        paras: [
          "**包络画了完全不生效。** 要么选到了上述三类不可自动化参数，要么它绑定的那个效果器已经被删掉了。指向已删除效果器的孤立包络线在运行时会被静默跳过而不是报错。",
          "**刚新增的效果器一上来就自动显示 “Automated”。** 如果同一内部槽位 ID 之前挂过一条效果链并遗留了包络轨，新加入占用相同 ID 的效果器就可能“继承”那条旧包络。直接清理掉过期包络轨即可。",
          "**音量包络直接被忽略。** 同一个元素不能既在音量包络轨画曲线、又拿 GSAP timeline 去动画 `volume`；混音阶段以自动化包络优先（见两条写法二选一说明）。",
          "**包络形状没问题但响度不对。** 在时间线里直接动画 `volume` 的值属于绝对值，会直接替代 `data-volume` 静态增益，而非在原有推子基础之上相乘缩放。排查该剪辑是否还带着额外静态增益设定。",
          "**还没人开口前音乐就已经变轻了。** 这是首个压低点向后前缘全盘保持惹的祸。请在音乐剪辑的起始位置补上一枚原始大小控制点。",
        ],
      },
      {
        id: "related-topics",
        h: "相关主题",
        p: "",
        bullets: [
          "[音频效果器参考（HTML 属性与实现细节）](https://hyperframes.heygen.com/reference/audio-effects.md)",
          "[更新日志（Changelog）](https://hyperframes.heygen.com/changelog.md)",
          "[Lint 校验规则目录](https://hyperframes.heygen.com/reference/lint-rules.md)",
        ],
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "editor-assets": {
    lede: "用 **Assets** 管理媒体文件。用 **Catalog** 获取可复用的视觉场景和组件。",
    sections: [
      {
        h: "导入素材",
        p: "",
        paras: [
          "保持清晰的文件名。`product-dashboard-dark.png` 比 `Screenshot 42.png` 更易于复用。",
        ],
        codeBlocks: [],
        bullets: [
          "打开 **Assets**。",
          "选择 **Import media**，或把文件拖到面板中。",
          "在加入项目之前先预览它。",
          "把它拖到时间轴，或从相关检查器控件中使用它。",
        ],
        id: "import-an-asset",
      },
      {
        h: "复用项目素材",
        p: "",
        paras: [
          "**This project**（此项目）包含当前打开项目可用的文件。**All projects**（所有项目）是全局 `~/.media` 缓存的只读索引，跨项目可以重新找到已解析的媒体。它不是文件管理器，因此不能从该视图删除或替换文件。",
          "如果大视频仍在准备预览或代理，请先等该进程完成，再判断播放性能。",
        ],
        codeBlocks: [],
        id: "reuse-project-assets",
      },
      {
        h: "添加 Catalog 条目",
        p: "",
        paras: [
          "打开 **Catalog**，搜索或选择分类（**Captions**、**Code Animations**、**VFX**、**Transitions**、**Effects**），并预览所需内容。凡是提供 **Add** 的地方，选择它即可在播放头处放置；或选择 **Ask agent**，复制一个现成的请求给你的智能体，由它把条目适配到你的合成中。然后把示例内容换成你自己的，并匹配项目的时序和外观。",
          "浏览完整 [Catalog](https://hyperframes.heygen.com/catalog.md) 以便比较分类和各个示例。",
          "[!TIP] 可复用不等于已完成。删除不支持你故事的示例内容和装饰性动态。",
        ],
        codeBlocks: [],
        id: "add-a-catalog-item",
      },
      {
        h: "编辑字幕",
        p: "",
        paras: [
          "当合成包含字幕时，编辑器会切换到字幕编辑：点击帧上某个词，或在预览下方的字幕轨道中找到它。",
          "![HyperFrames browser editor with one caption word selected, word blocks in the caption rail, and position and transform controls](https://static.heygen.ai/hyperframes-oss/docs/images/studio-captions-panel-v1.jpg)",
          "选中的词会把画布、字幕栏和浏览器编辑器当前保存的控件连接起来。",
        ],
        codeBlocks: [],
        id: "edit-captions",
      },
      {
        h: "这里可以改什么",
        p: "",
        paras: [
          "选择一个词（Shift 点击可多选），然后在帧上拖动、缩放或旋转它。方向键以 1 像素为单位微调，Shift + 方向键以 10 像素为单位。颜色、不透明度、字号、字重和字体在面板中。这些编辑会自动为你保存，写入 `caption-overrides.json`，在你修改后稍等片刻即保存。",
        ],
        codeBlocks: [],
        id: "what-you-can-change-here",
      },
      {
        h: "应请智能体做什么",
        p: "",
        paras: [
          "措辞、时序、词语如何分行以及字幕风格本身都在字幕源文件中，不在编辑器里。请智能体处理（例如“把字幕拆成两词一组”“修正 HeyGen 的拼写”），或直接修改源文件。",
          "然后有声看一次、无声看一次：人名和数字正确，没有遮住脸或按钮，最后一条字幕干净地退出。对于可复用的样式，浏览 [字幕组件](https://hyperframes.heygen.com/catalog/components/caption-highlight.md)。",
        ],
        codeBlocks: [],
        id: "what-to-ask-the-agent-for",
      },
      {
        h: "使用变量",
        p: "",
        paras: [
          "变量让一个项目可以生成许多版本，而无需重建布局或动画。",
          "![HyperFrames browser editor showing a composition beside the Variables panel with Title, Subtitle, and Background inputs](https://static.heygen.ai/hyperframes-oss/docs/images/studio-variables-panel-v1.jpg)",
          "当前 Variables 面板会在真实合成旁预览数值。",
        ],
        codeBlocks: [],
        id: "use-variables",
      },
      {
        h: "创建一个可复用的输入",
        p: "",
        paras: [
          "最快的方法从画布开始： 在绑定到现有变量之前，浏览器编辑器会显示其已保存的默认值；对对象值会使用字体名或图片 URL。",
          "对于不与选中元素绑定的值，点击 **Add variable**。浏览器编辑器支持 string、number、color、boolean、enum、font 和 image 变量。Number 变量可以包含最小值、最大值和步进值；enum 可以定义允许的选项。",
          "按含义命名输入——例如 `customerName`、`headline` 或 `brandColor`，而不是按其在设计中的位置。",
        ],
        codeBlocks: [],
        bullets: [
          "选择元素。",
          "在右面板打开 **Variables**。",
          "绑定文字、媒体源、文字颜色、背景或字体属性。",
          "创建新变量，或选择一个兼容的现有变量。",
        ],
        id: "create-one-reusable-input",
      },
      {
        h: "在不改变模板的情况下预览",
        p: "",
        paras: [
          "在 Variables 面板中改动数值即可立即预览该版本。预览是覆盖层：不会替换已保存的默认值。",
          "面板会告诉你预览的是默认值还是自定义值。使用 **Reset** 清除所有预览覆盖。希望标量预览成为新的默认值时，使用 **Set default**。",
          "使用 **Edit** 修改变量的标签、说明或已保存默认值。对于 font 和 image 对象，**Default** 编辑字体名或图片 URL。保存会保留字体来源、图片 alt 文本和 fit，以及任何其他存储元数据，包括只改标签或说明时也是如此。",
          "[!NOTE] 其他合成的变量会单独列出。可以编辑其声明，但在当前合成中不会实时预览其值。",
        ],
        codeBlocks: [],
        id: "preview-without-changing-the-template",
      },
      {
        h: "交接项目",
        p: "",
        paras: [
          "在面板底部，**Use this template** 可以复制： 这样你刚查看的数值就依附在渲染请求上，下一个人不必重新拼凑。",
        ],
        codeBlocks: [],
        bullets: [
          "当前生效值为 JSON；",
          "现成的 `npx hyperframes render ... --variables ...` 命令。",
        ],
        id: "hand-the-project-off",
      },
      {
        h: "测试回退",
        p: "",
        paras: [
          "有用的模板能经受真实的变化。交接之前，请测试： 关于 schema、HTML 绑定和批量渲染示例，请阅读 [Variables](https://hyperframes.heygen.com/concepts/variables.md)。",
        ],
        codeBlocks: [],
        bullets: [
          "长句和短句名称或标题；",
          "图片宽高比；",
          "颜色对比度；",
          "数字格式；",
          "缺少可选值的情况。",
        ],
        id: "test-the-fallback",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[可变字体轴动画（Variable Axis Type）](https://hyperframes.heygen.com/catalog/components/variable-axis-type.md)",
          "[镜头跟随字幕（Camera Follow Captions）](https://hyperframes.heygen.com/catalog/components/caption-camera-follow.md)",
          "[字重波浪（Weight Wave）](https://hyperframes.heygen.com/catalog/blocks/weight-wave.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "editor-export": {
    lede: "顶部的 **Export** 会立即开始渲染，使用右侧 **Renders** 面板中的设置。所以请先设置好这些。",
    sections: [
      {
        h: "设置文件",
        p: "",
        paras: [
          "| 设置 | 选择 |\n| - | - |\n| **Format** | 分享和上传选 **MP4**；用于 Web 和透明叠加选 **WebM**；其他编辑器需要高质量母版时选 **MOV**（ProRes） |\n| **Resolution** | **Auto** 保持项目尺寸。更大的渲染更慢，也不会让低分辨率镜头变清晰 |\n| **Frame rate** | 默认 30，除非目标或镜头需要 24 或 60 |\n| **Quality** | MOV 时隐藏，因为它始终使用 ProRes 质量 |\n| **Use GPU encoding** | 在支持的机器上更快 |",
          "设置旁的 **About video formats** 会解释这些选择。",
        ],
        codeBlocks: [],
        id: "set-up-the-file",
      },
      {
        h: "渲染队列",
        p: "",
        paras: [
          "每次导出在 **Renders** 中成为一行，带进度。可以取消正在运行的导出，也可以下载或删除已完成的导出，还可以用 **Hide finished** 整理列表而不删除文件。",
          "发送之前：打开文件本身，观看开头和结尾，在最忙的时刻检查字幕、剪辑和声音，并给它起一个能说明是哪个版本的名字。如果渲染失败，保留错误并查看 [故障排查](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。",
        ],
        codeBlocks: [],
        id: "the-render-queue",
      },
      {
        h: "构建幻灯片",
        p: "",
        paras: [
          "幻灯片是实时可导航的演示——不是一条线性视频。当活动合成包含 HyperFrames 幻灯片清单时，会出现 **Slideshow** 标签页。",
          "![HyperFrames browser editor showing three main-line slides in the Slideshow panel beside the deck timeline](https://static.heygen.ai/hyperframes-oss/docs/images/studio-slideshow-panel-v1.jpg)",
          "Slideshow 面板基于真实场景构建主路线，然后再加入可选分支。",
        ],
        codeBlocks: [],
        id: "build-a-slideshow",
      },
      {
        h: "构建主路径",
        p: "",
        paras: [
          "先确定大家都应该看到的路线： 浏览器编辑器会把幻灯片修改保存到项目清单中。备注在短暂延迟后保存；其他编辑立即保存，并参与项目历史。",
        ],
        codeBlocks: [],
        bullets: [
          "在 **Slides** 中勾选属于主演示的场景。",
          "用箭头把它们排到顺序位置。",
          "选中每张幻灯片，确认它独立表达一个完整要点。",
          "在 **Slide Inspector** 中添加帮助演讲者而不是重复幻灯片的备注。",
        ],
        id: "build-the-main-path",
      },
      {
        h: "添加分段揭示",
        p: "",
        paras: [
          "把播放头移到演示应该暂停的时刻，然后点击 Slide Inspector 中的 **Mark**。该时间会成为选中幻灯片的片段停留点。",
          "在演讲者需要完整揭示一个要点之前先分段呈现时，使用片段。并非每条要点都需要停留点。",
        ],
        codeBlocks: [],
        id: "add-fragment-reveals",
      },
      {
        h: "添加可选路径",
        p: "",
        paras: [
          "分支把可选细节保留在主故事之外： 删除分支会移除该分支定义和指向它的每个热点，因此浏览器编辑器会先要求确认。源场景仍保留在项目中。",
        ],
        codeBlocks: [],
        bullets: [
          "打开 **Branches**，给分支命名，并分配其幻灯片。",
          "在出现选择的幻灯片上，在画布中选中可见按钮或对象。",
          "打开 **Hotspot Tool**，选择目标分支，添加有用的标签，并点击 **Make hotspot**。",
          "保留回到主故事的清晰路线。",
        ],
        id: "add-an-optional-path",
      },
      {
        h: "作为演示测试它",
        p: "",
        paras: [
          "在本地运行演示： 测试下一张/上一张导航、每个片段、每个热点、每个分支以及返回路径。点击 **Present** 或按 **P** 打开同步的观众视图。",
          "[!NOTE] 幻灯片保持交互性。如果结果只应该从头到尾播放为 MP4，请改用 [视频工作流](https://hyperframes.heygen.com/workflows.md)。",
          "如需先用智能体创建演示，再在此处打磨，请按照 [用 AI 制作交互式演示](https://hyperframes.heygen.com/guides/slideshow.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes present <project-directory>",
            file: "bash",
          },
        ],
        id: "test-it-as-a-presentation",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[@hyperframes/parsers](https://hyperframes.heygen.com/packages/parsers.md)",
          "[导出视频](https://hyperframes.heygen.com/studio-app/export.md)",
          "[更新日志](https://hyperframes.heygen.com/changelog.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
