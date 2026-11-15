import type { DocContent } from "../docs";

const CONTENT: Record<string, DocContent> = {
  "media-overview": {
    lede: "媒体可以来自你的项目、捕获的网站、上传的内容或生成的素材。把最终结果需要的一切都放在项目内，这样预览和渲染使用的是同一个文件。",
    sections: [
      {
        h: "先定角色，再谈效果",
        p: "",
        paras: [
          "| 媒体 | 给它一个主要任务 |\n| - | - |\n| 产品截图 | 证明产品如何运行 |\n| 镜头素材 | 承载人物、地点、动作或情感 |\n| 图片 | 把一个想法停留足够久，让人看懂 |\n| 配音 | 承载讲解或叙事 |\n| 音乐 | 塑造节奏和氛围 |\n| 音效 | 强化一个有意义的动作 |",
          "更多图层不一定能让视频更强。如果两个素材做的是同一个任务，保留更清晰的那个。",
        ],
        codeBlocks: [],
        id: "start-with-the-role-not-the-effect",
      },
      {
        h: "把素材带进项目",
        p: "",
        paras: [
          "在浏览器编辑器中，打开 **Assets**，选择 **Import media**，或把文件拖到面板中。在放到时间轴之前，先预览文件。你也可以让智能体捕获网站、准备提供的镜头、生成衍生素材，或把已通过的文件复制到项目中。",
          "使用类似 `pricing-page-scroll.mp4` 或 `customer-logo.svg` 这样的名称。清晰的名称能让后续修改对人和智能体都更容易。",
        ],
        codeBlocks: [],
        id: "bring-it-into-the-project",
      },
      {
        h: "只准备结果需要的部分",
        p: "",
        paras: ["原始文件和准备好的文件应当易于区分。"],
        codeBlocks: [],
        bullets: [
          "剪切或裁剪源素材——当未使用的内容拖慢了审阅时。",
          "移除背景——当主体需要叠在设计好的场景上时。",
          "对镜头调色——当素材之间肉眼可见不一致，或故事需要刻意的风格时。",
          "从真实语音生成字幕，然后在样式化之前修正词语和时间。",
          "让旁白清楚地盖过音乐，效果只用于具体的事件。",
        ],
        id: "prepare-only-what-the-result-needs",
      },
      {
        h: "记住已确认的偏好",
        p: "",
        paras: [
          "媒体使用技能会把已确认的选择记录在 `.media/preferences.json` 中。并发记录会保留每一次选择，包括在两个项目中使用后提升为个人默认值的确认。",
          "把 `.media/*.lock` 加入项目的 `.gitignore`，同时保留 `preferences.json` 提交。如果记录时报告 “Settings are locked…”，在删除所命名的 lock 文件并重试之前，先确认没有 HyperFrames 进程正在记录偏好。锁定的个人层级会保留项目记录，并把个人提升推迟到下一次记录时。",
        ],
        codeBlocks: [],
        id: "remember-confirmed-preferences",
      },
      {
        h: "检查最终时间轴",
        p: "",
        paras: ["从头看到尾，检查："],
        codeBlocks: [],
        bullets: [
          "每个视频片段的第一帧和最后一帧；",
          "目标输出尺寸下的裁剪和分辨率；",
          "字幕时间与所说词语是否对齐；",
          "在普通耳机和笔记本扬声器上的配音清晰度；",
          "是否有缺失文件、临时链接和晚加载的媒体。",
        ],
        id: "check-the-final-timeline",
      },
      {
        h: "复用已通过的配方",
        p: "",
        paras: [
          "让智能体把已通过视频的设计和分镜存为一个命名好的配方，供后续项目使用。再次保存同名会创建一个新版本，并归档该项目的旧版本。",
          "如果新版本没有 `BRIEF.md`，把该配方导入另一个项目不会恢复旧简报。早期简报仍在归档版本中可用。",
        ],
        codeBlocks: [],
        id: "reuse-an-approved-recipe",
      },
      {
        h: "选择媒体任务",
        p: "",
        paras: [
          "[card] [图片和视频](https://hyperframes.heygen.com/guides/video-components.md) 导入、放置、替换、剪切和审阅视觉媒体。",
          "[card] [数字主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md) 生成或复用主持人片段，并围绕它构图。",
          "[card] [配音、音乐和音效](https://hyperframes.heygen.com/guides/voice-and-audio.md) 构建听得懂的音频混合。",
          "[card] [移除背景](https://hyperframes.heygen.com/guides/remove-background.md) 从真实图片或片段中分离出人物。",
          "[card] [色彩校正](https://hyperframes.heygen.com/guides/media-effects.md#fix-and-grade-the-color) 修正镜头或确立刻意的观感。",
          "[card] [媒体特效](https://hyperframes.heygen.com/guides/media-effects.md) 应用非破坏性视觉处理。",
        ],
        codeBlocks: [],
        id: "choose-a-media-task",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[CLI 指南](https://hyperframes.heygen.com/developers/cli.md)",
          "[字幕、素材和变量](https://hyperframes.heygen.com/studio/assets-and-blocks.md)",
          "[HyperFrames 项目如何工作](https://hyperframes.heygen.com/concepts/index.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "media-video": {
    lede: "把图片或片段放进视频有三种方式：让智能体处理、拖进编辑器，或写在 HTML 中。这三者改的是同一个文件，所以可以混用。",
    sections: [
      {
        h: "让智能体处理",
        p: "",
        paras: [
          "说出文件名，并用你看到的样子说明应该发生什么： 如果文件还不在项目中，智能体会把它复制进项目。在 Studio 应用中，用 **+** 把文件加到消息里，或直接拖进聊天框。",
        ],
        codeBlocks: [
          {
            code: "Use assets/product-tour.mp4 from 00:04 to 00:10, muted.\nCrop around the editor canvas and place it under the captions.",
            file: "text",
          },
        ],
        id: "ask-the-agent",
      },
      {
        h: "拖进去",
        p: "",
        paras: [
          "在浏览器编辑器（`npx hyperframes preview`）中，打开 **Assets**，选择 **Import media**，或把文件拖到面板里，然后拖到时间轴上。图片、SVG、MP4、WebM 和 MOV 都可以。",
          '<video autoPlay loop muted playsInline preload="metadata" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-media-edit-loop-v1.jpg" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-media-edit-loop-v4.mp4" />',
          "今天的浏览器编辑器正在修改真实项目：查看源文件、改动适配与位置、在画布上裁剪，然后导入另一个本地素材。",
        ],
        codeBlocks: [],
        id: "drag-it-in",
      },
      {
        h: "写在 HTML 中",
        p: "",
        paras: [
          '一张图片在屏幕上停留 3 秒，以及一个静音片段从源素材第 4 秒开始播放 6 秒： `class="clip"` 让时间轴显示和隐藏它；`data-start` 和 `data-duration` 说明什么时候播；`data-media-start` 裁掉源素材的开头。保留片段声音请用 `data-has-audio="true"`，音量用 `data-volume` 设置。要移动或缩放视频，请给它外面的包装层做动画，不要直接给视频本身。所有属性都在 [HTML 架构](https://hyperframes.heygen.com/reference/html-schema.md) 中。',
        ],
        codeBlocks: [
          {
            code: '<img class="clip" src="assets/logo.svg"\n     data-start="0" data-duration="3" data-track-index="1" />\n\n<video class="clip" src="assets/product-tour.mp4" muted playsinline\n       data-start="3" data-duration="6" data-media-start="4" data-track-index="0"></video>',
            file: "html",
          },
        ],
        id: "write-it-in-the-html",
      },
      {
        h: "替换文件",
        p: "",
        paras: [
          "让智能体用新文件，或改 `src`。然后检查裁剪、时长，以及旧图片带来的移动。如果新文件改变了故事，请改提更大的改动。",
        ],
        codeBlocks: [],
        id: "swap-the-file",
      },
      {
        h: "在各处都能正常工作",
        p: "",
        paras: [
          "把每个文件都复制到项目中，并给它清晰的名称（`pricing-page-scroll.mp4`）。会过期或需要登录的链接在另一台电脑上会使渲染失败。`npx hyperframes check` 可以找出缺失和晚加载的文件。",
          "导出之前，先看一遍，检查每个片段的第一帧和最后一帧、最终尺寸下的裁剪，以及是否有拉伸。",
        ],
        codeBlocks: [],
        id: "keep-it-working-everywhere",
      },
      {
        h: "更多媒体任务",
        p: "",
        paras: [
          "[card] [数字主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md) 生成或复用主持人片段，并围绕它构图。",
          "[card] [配音、音乐和音效](https://hyperframes.heygen.com/guides/voice-and-audio.md) 构建听得懂的音频混合。",
          "[card] [移除背景](https://hyperframes.heygen.com/guides/remove-background.md) 从真实图片或片段中分离出人物。",
          "[card] [特效和色彩校正](https://hyperframes.heygen.com/guides/media-effects.md) 应用视觉处理、修正镜头，或确立刻意的观感。",
        ],
        codeBlocks: [],
        id: "more-media-tasks",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[给图片和视频加特效](https://hyperframes.heygen.com/guides/media-effects.md)",
          "[用 HeyGen Video 1 做片段](https://hyperframes.heygen.com/studio-app/video-clips.md)",
          "[做音乐视频或歌词视频](https://hyperframes.heygen.com/guides/music-to-video.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "media-voice": {
    lede: "像给剪辑师下简报一样要求声音。智能体负责找或做每一件，放上时间轴并混好，音乐会在人声下自动压低。",
    sections: [
      {
        h: "提需求",
        p: "",
        paras: [
          "在 Studio 应用或自己的智能体里，一条消息或一条条地说： 词语已定稿时请直接引用脚本；否则只给要点，让智能体写作。也要说清不要什么：“no music” 和 “no sound effects” 会被原样遵循。",
        ],
        codeBlocks: [
          {
            code: "Add a warm, unhurried narration of this script: [paste script]\nPut a calm piano bed under it, quieter while she speaks.\nA soft whoosh on each scene change, nothing else.\nCaptions: two lines at most, key words in the brand color.",
            file: "text",
          },
        ],
        id: "ask-for-it",
      },
      {
        h: "免费的，或 HeyGen 品质",
        p: "",
        paras: [
          "| | 免费，在本机 | 用 HeyGen |\n| - | - | - |\n| **配音** | Kokoro 音色，多语言 | HeyGen 音色和你自己的克隆声音 |\n| **音乐** | 你添加的曲目，或装了本地生成工具的话本地生成 | 10000 首曲库 |\n| **音效** | 自带一套，加上 Openverse | 同左 |\n| **字幕** | 本地转录，用你自己的智能体（Parakeet 或 Whisper） | Studio 应用通过 HeyGen 转录 |",
          "在 Studio 应用中，添加 HeyGen API 密钥时使用 HeyGen（主页会提示 **Add a HeyGen API key to make voiceovers, avatars and clips**）；不加时使用本地音色。用自己的智能体时，登录 HeyGen CLI 或设置 API 密钥。每种情况用的说法在 [配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md) 中。",
        ],
        codeBlocks: [],
        id: "free-or-heygen-quality",
      },
      {
        h: "用你自己的录音",
        p: "",
        paras: [
          "添加文件并说明它是什么（“这是旁白”、“保留访谈音频”）。想自己拿到带时间的词语，本地转录免费： 语音不是英语时传 `--language`。它也会导入现有的 `.srt` 或 `.vtt`。想给露脸片段加字幕或剪得更紧，见 [字幕和剪辑](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes transcribe interview.mp4 --language es",
            file: "bash",
          },
        ],
        id: "use-your-own-recording",
      },
      {
        h: "读取参考音轨",
        p: "",
        paras: [
          "想在做新音轨前先听懂一条现有录音，运行： 有 HeyGen 凭证时，录音会被分成六条音轨：人声、鼓、贝斯、吉他、钢琴和其他。读取会描述每条听得见的音轨，然后给整体描述。`voice-free mix:` 指向去掉人声的混音。`bgm prompt:` 描述音乐，让音乐生成器使用，或说明没有音乐。这些描述走 HeyGen，不使用单独的 Google 或 Gemini API 密钥。没有 HeyGen 凭证，或描述服务失败时，会有警告说明描述不可用，而不是猜。",
          "带时间的音效命名为 `effect`，分组为 `S1`、`S2` 等，不指定音色种类。每条保留它的源音轨、时间、频段、起音、尾音、峰值水平和相对周围音乐的水平。模型描述可以解释声音像什么；时间是近似的。带时间的行带测量数据。",
          "使用 HeyGen 服务前，先用 `npx hyperframes auth login` 登录，或设置 `HEYGEN_API_KEY`。转录稿、范围和本地分析选项见 [音频分析](https://hyperframes.heygen.com/packages/cli.md#audio)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes audio reference.mp4 --read --quality best",
            file: "bash",
          },
        ],
        id: "read-a-reference-soundtrack",
      },
      {
        h: "把字幕做对",
        p: "",
        paras: [
          "先读转录稿再上屏：人名、产品名和数字最容易识别错。保持每行短、按语义断行，避开人脸和按钮，把承载要点的两三个词加粗强调。想手工调整，在浏览器编辑器里打开 [字幕](https://hyperframes.heygen.com/studio/assets-and-blocks.md#edit-captions)。",
        ],
        codeBlocks: [],
        id: "get-captions-right",
      },
      {
        h: "在时段内循环音乐",
        p: "",
        paras: [
          '用原生 `loop` 属性把短曲重复到更长的时段： 曲目会一直重复，直到预览和导出中的 30 秒时段结束。如果设置了 `data-media-start`，每次重复都从该源入点开始。播放速度和速率自动化同样作用于重复的音频。带 `data-has-audio="true"` 的循环视频也会重复声音，包括下一轮之前的静音。',
        ],
        codeBlocks: [
          {
            code: '<audio id="music" src="music.wav" data-start="0" data-duration="30" loop></audio>',
            file: "html",
          },
        ],
        id: "repeat-music-inside-a-slot",
      },
      {
        h: "检查混音",
        p: "",
        paras: [
          "打开声音看一遍，关声看一遍，再只听一遍。",
          "音频分析会给每个声音先猜一个 `voice`、`music` 或 `sfx`。人声需要既有近似说话的水平模式，又有语音范围的音高，所以带近似说话尾音的撞击不太容易被误判为旁白。这些是猜测，不是转录稿标签。检查时间范围时，种类看的是整个片段播放的源跨度，响度、撞击等其他测量仍描述所选范围。因此音乐床的短切片保留床的种类。重复查询范围会复用该猜测，直到源或片段变化。如果整个片段无法分析，结果会警告种类只来自所选范围；范围的其他测量照常返回。见 [音频分析](https://hyperframes.heygen.com/packages/cli.md#audio) 的命令和输出。",
          "想只在人声处压低音乐而不是整体调低，用 [人声挖空](https://hyperframes.heygen.com/studio/audio-effects.md#make-music-sit-under-narration)。",
          "音乐可以晚于旁白开始：压低会从该时刻的正确水平开始，已经结束的说话不会生成新的压低。",
          "[card] [练习：声音](https://hyperframes.heygen.com/lessons/sound) 免费 20 分钟课程，有短视频、测验和练习简报。在简报里说出声音：音乐的氛围、配音、音乐的起止位置。",
        ],
        codeBlocks: [],
        bullets: [
          "音乐最响处人声依然清楚。",
          "每个音效都落在它属于的东西上。",
          "场景切换时没有切掉词或呼吸声。",
          "音乐是有意收尾的，不是到文件末尾才停。",
        ],
        id: "check-the-mix",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[HyperFrames 常见问题](https://hyperframes.heygen.com/faq.md)",
          "[添加配音、音乐和音效](https://hyperframes.heygen.com/prompting/media-and-audio.md)",
          "[用 AI 给视频加字幕](https://hyperframes.heygen.com/guides/captions-and-recuts.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "media-remove-bg": {
    lede: "把人物剪出，让标题从他们身后穿过，把物体从镜头中取出，或替换背后的内容。基础抠图在本机运行：不上传、无账号、无费用。",
    sections: [
      {
        h: "在 Studio 应用中",
        p: "",
        paras: [
          "在预览中右键点击视频或图片： 或者直接问：“把标题放在她身后”、“把桌子上的杯子拿掉”、“把她放到夜里的雨街上”。",
        ],
        codeBlocks: [],
        bullets: [
          "**Cut out object here** 会取出你点击的那个物体——人物或东西。在视频中，它会让抠图跟随该物体贯穿整个片段。按住 Shift 点击可加入选区；在图片上，**B** 键可以刷边缘。它在 Mac 上运行：Apple 芯片搭载 macOS 14 或更新版本，或 Intel 芯片搭载 macOS 13.3 或更新版本的图片；视频仅限 Apple 芯片。",
          "**Remove background** 会保留人物并去掉其余部分。它是免费的，在本机运行，适合纯色背景的人物。如果有 HeyGen API 密钥，可以选择通过 HeyGen 云端抠图，从 API 余额中扣费。",
        ],
        id: "in-the-studio-app",
      },
      {
        h: "在命令行中",
        p: "",
        paras: [
          "首次运行会下载模型，需要 FFmpeg。根据去向选择输出：`.webm` 给 HyperFrames 和 Web，`.mov`（ProRes 4444）给 Premiere、Resolve 或 Final Cut，`.png` 给单张照片。",
          "要让文字在人物身后，先一次生成抠图和带人物形孔洞的背景板，然后叠起来：背景板、你的文字或图形、抠图在最上面。",
          "![The original presenter frame beside its transparent cutout over a green background](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/remove-background-before-after-v1.png)",
          "同一个真实帧在本地模型处理前后的对比。更柔和的头发和手部边缘是这个模型在这段素材上的实际上限。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes remove-background subject.mp4 -o subject.webm",
            file: "bash",
          },
          {
            code: "npx hyperframes remove-background subject.mp4 -o subject.webm --background-output plate.webm",
            file: "bash",
          },
        ],
        id: "on-the-command-line",
      },
      {
        h: "什么时候好用，什么时候不行",
        p: "",
        paras: [
          "免费模型是为人物而做：主体清晰、构图稳定、与背景有一定对比。手持物（深色的麦克风或手机可能消失）、杂背景下的细头发、快速运动都可能出问题。针对物体，请改用应用中的 **Cut out object here**。",
        ],
        codeBlocks: [],
        id: "when-it-works-and-when-it-wont",
      },
      {
        h: "修复、质量和速度",
        p: "",
        paras: [
          "| 问题 | 应该检查什么 |\n| - | - |\n| 背景仍不透明 | 确认输出是透明的 WebM、MOV 或 PNG，并在彩色背景上预览它。 |\n| 边缘闪烁 | 换用更干净的素材、减少快速移动，或使用更强的外部抠图工具。 |\n| 处理很慢 | 查看 `--info`；CPU 处理能用，但比可用的加速服务慢得多。 |\n| 主体有颜色光晕 | 使用 `--quality best`，尤其是叠到原始素材上时。 |\n| “背景板”上有个洞 | 正常现象：它是逆 alpha，不是补好的干净背景板。 |\n| 手持物缺了一部分 | 模型匹配的是人物，不是他们手里拿的东西。那一镜请换其他抠图工具。 |",
          "抠图叠在自己原始镜头上用 `--quality best`，在无关画面上用较小文件要求 `fast`；`--info` 会显示是否找到快速的本地处理器。要移动抠图，请给视频外面的包装层做动画，不要给视频本身。所有参数都在 [CLI 参考](https://hyperframes.heygen.com/packages/cli.md#remove-background) 中。",
        ],
        codeBlocks: [],
        id: "fixes-quality-and-speed",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[添加图片和视频片段](https://hyperframes.heygen.com/guides/video-components.md)",
          "[给视频添加 AI 数字主持人](https://hyperframes.heygen.com/guides/avatar-presenter.md)",
          "[CLI](https://hyperframes.heygen.com/packages/cli.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "media-effects": {
    lede: "特效改变的是图片的观感，不是它本身。文件保持不动，所以之后可以变弱、做动画或去掉。",
    sections: [
      {
        h: "提需求要观感",
        p: "",
        paras: [
          "说出想要的感觉即可，不用知道特效名： 在 Studio 应用和自己的智能体里都一样。想从喜欢的视频偷学观感，把它加为参考，说 “grade it like this”。",
        ],
        codeBlocks: [
          {
            code: "Make the product clip feel like a clean two-ink editorial print. Keep the label readable.\nThe interview looks too dark and slightly cold. Keep skin natural, no filtered look.\nPixelate the email address in the screen recording from 0:04 to 0:07.",
            file: "text",
          },
        ],
        id: "ask-for-a-look",
      },
      {
        h: "特效",
        p: "",
        paras: [
          "![One presenter frame shown as the original, pixelated, two-ink print, and ASCII treatments](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/media-effects-grid-v1.png)",
          "同一个源，四种成品：原图、像素化、双色印刷和 ASCII。",
          "要么果断用强观感，要么不用：半强度的 ASCII 看起来像失误。颗粒和暗角用下面的颜色控制；HUD、漏光和闪光用 [目录叠加层](https://hyperframes.heygen.com/catalog.md)。",
        ],
        codeBlocks: [],
        bullets: [
          "**基础：** 模糊、像素化、辉光。遮住东西、拉焦点、让高光发光。",
          "**复古和故障：** 磁带破损、胶片痕迹、扫描线、CRT 弯曲、通道分离、数字故障、色彩柔化。老磁带、老胶片、老显示器、坏信号，带真实的跟踪抖动和颜色渗漏。",
          "**印刷：** 半调、双色印刷、有序抖动、单色网。",
          "**艺术：** ASCII（八种风格）、雕刻、排线、桑原绘画。",
        ],
        id: "the-effects",
      },
      {
        h: "修正和调色",
        p: "",
        paras: [
          "先修正（曝光、白平衡、对比、饱和），再讲风格。没有观感能救过曝的高光或错镜。",
          "![The same presenter frame before and after a restrained natural portrait grade](https://static.heygen.ai/hyperframes-oss/docs/images/showcase/color-grading-before-after-v1.png)",
          "同一个源在克制的自然人像调色前后的对比。",
          '<video aria-label="Correction, presets, curves, selective colour, scopes and a LUT on real footage" src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/color-grading-demo-v1.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/color-grading-demo-v1.jpg" playsInline preload="metadata" />',
        ],
        codeBlocks: [],
        id: "fix-and-grade-the-color",
      },
      {
        h: "手工微调",
        p: "",
        paras: [
          "在[浏览器编辑器](https://hyperframes.heygen.com/studio/index.md)中，选中图片或视频，在检查器里打开 **Effects** 或 **Grade**。**Grade** 先给十三种预设，每种都在你自己的帧上预览，还有一个 **Strength** 滑块。按住对比按钮闪回原图，活动镜头里多拖几个地方看：对一帧好看的调色可能毁掉下一帧。",
          "| 控制 | 用途 |\n| - | - |\n| 预设和强度 | 先选整套观感，再回调 |\n| 曝光、对比、高光、阴影、白、黑 | 整体和分色调的明暗对比 |\n| 色温、色调、自然饱和、饱和 | 去掉偏色，或把颜色推远 |\n| 色轮 | 分别给阴影、中间调、高光上色 |\n| RGB 曲线 | 重画明暗爬升——整图，或一次一通道地画红、绿、蓝 |\n| 色相曲线 | 挑一种色相，只动它：平移、饱和或提亮 |\n| HSL 选区 | 框住一段色相、饱和和明度，只修正那些像素。最多四个，按顺序 |\n| 颗粒和暗角 | 加质感，或压暗边缘吸住目光 |\n| 自定义 LUT | 加载一个 `.cube` 文件，把每种颜色映射到另一种 |",
          "示波器是为画面说话，不是凭屏幕判断：**直方图** 显示两端丢了多少细节，**波形** 显示画面各处的情况，**RGB 分量** 指出偏色，**矢量示波器** 把肤色放在一条已知线上。",
          "**Copy grade to** 把调色复用到其他片段上，作为起点；同样的数值很少适合两个镜头。",
        ],
        codeBlocks: [],
        id: "adjust-it-by-hand",
      },
      {
        h: "LUT",
        p: "",
        paras: [
          "LUT（一个 `.cube` 文件，每边最多 65 点）把每种颜色映射到另一种，按你设的强度混合。用创意型 Rec.709 LUT。HyperFrames 不会先转相机 LOG 镜头，所以 LOG 片段需要它自带的转换，否则出来是错的。",
        ],
        codeBlocks: [],
        id: "luts",
      },
      {
        h: "限制",
        p: "",
        paras: [
          "[accordion] 给智能体和代码：命令和存储格式",
          "先看有什么、测一个源，再应用。`--dry-run` 显示改动，`--clear` 移除。",
          "```bash\nnpx hyperframes media-treatment --capabilities --json\nnpx hyperframes media-treatment --selector '#interview' --analyze --json\nnpx hyperframes media-treatment --selector '#product' --grading '{\"preset\":\"two-ink-print\"}' --apply --json\n```",
          "在一帧上对比几种观感（最多十六种，原图在前）：",
          "```bash\nnpx hyperframes grade-compare --for frame.png --grades grades.json\n```",
          "手机照片在表格中保留显示方向和宽高比；源图片不变。",
          '一切落在 `data-color-grading`，分命名节：`adjust` 修正，`details` 颗粒和暗角，`effects` 处理。像 `{"exposure":0.15}` 这样的扁平对象什么都不渲染，`npx hyperframes lint` 会说明它属于哪个节。',
          '```html\n<video src="./interview.mp4" data-color-grading=\'{"preset":"skin-soft","intensity":0.7,"adjust":{"exposure":0.15},"effects":{"bloom":0.4}}\'></video>\n```',
          "完整格式在 [HTML 架构](https://hyperframes.heygen.com/reference/html-schema.md#color-grading-and-media-effects) 和 [色彩校正参考](https://hyperframes.heygen.com/reference/color-grading.md) 中。",
        ],
        codeBlocks: [],
        bullets: [
          "特效或调色覆盖整个图层。它不跟着人脸或物体跑：要处理画面的一部分，把那部分放到自己的图层上。",
          "作用于图片、视频和画布，不作用于文字或 HTML。",
          "仅标准视频。HDR 源以 SDR 预览，特效不会带到真正的 HDR。",
          "模糊、辉光和桑原绘画很慢；在大图层上叠几个会拖慢预览和渲染。",
          "把媒体放在项目里。另一台服务器上的文件需要正确的 CORS 头，并可能在渲染前就消失。",
        ],
        id: "limits",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[添加图片和视频片段](https://hyperframes.heygen.com/guides/video-components.md)",
          "[添加配音、音乐、音效和字幕](https://hyperframes.heygen.com/guides/voice-and-audio.md)",
          "[移除视频背景](https://hyperframes.heygen.com/guides/remove-background.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
  "media-export": {
    lede: "通过智能体、浏览器编辑器或命令行完成同一个可编辑项目。路径可以变，质量门槛不变。",
    sections: [
      {
        h: "1. 通过项目，而不只看一帧",
        p: "",
        paras: ["从头完整看一遍预览。先检查信息和顺序，再花时间在细节上。"],
        codeBlocks: [],
        bullets: [
          "开头是否足够快地让主题清楚？",
          "每个场景是否都添了东西？",
          "在交付尺寸下，文字、字幕和产品画面还读得清吗？",
          "旁白、画面、音乐和音效是否一起到达？",
          "结尾是否干净收束，并让下一步动作明确？",
        ],
        id: "1-approve-the-project-not-one-good-frame",
      },
      {
        h: "2. 跑项目检查",
        p: "",
        paras: [
          "在浏览器编辑器里跑、让智能体跑，或用： `lint` 抓构图结构错误。`check` 在 lint 之上再跑浏览器、运行时、布局、动效和 WCAG 对比度校验。",
          "检查代替不了你判断故事。修好技术问题后，如果修复改变了观众看到的东西，再看一遍项目。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes lint\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "2-run-the-project-checks",
      },
      {
        h: "3. 在工作的地方渲染",
        p: "",
        paras: ["三条路径渲染的是同一个源。"],
        codeBlocks: [],
        id: "3-render-from-where-you-are-working",
      },
      {
        h: "让智能体处理",
        p: "",
        paras: [
          "失败的检查可能需要改源时、或想让一个人管完整个交付时用智能体。`/hyperframes` 技能会在最终预览后等渲染批准。",
        ],
        codeBlocks: [
          {
            code: "Run the HyperFrames checks, fix any failures, and show me the final preview.\nWhen I approve it, render an MP4 to renders/final.mp4.",
            file: "text",
          },
        ],
        id: "ask-the-agent",
      },
      {
        h: "用浏览器编辑器",
        p: "",
        paras: [
          "打开 **Export**，选目的地的格式和尺寸，开始渲染。渲染面板显示进度，已完成的文件可下载。",
          '<video src="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-check-render-loop-v2.mp4" poster="https://static.heygen.ai/hyperframes-oss/docs/images/showcase/studio-check-render-loop-v2.jpg" autoPlay muted loop playsInline />',
          "浏览器编辑器正在检查并渲染编辑器中显示的同一个项目。",
        ],
        codeBlocks: [],
        id: "use-the-browser-editor",
      },
      {
        h: "用 CLI",
        p: "",
        paras: [
          "直接本地渲染、脚本、CI 或可重复批处理时用 CLI。已安装版本为准：跑 `npx hyperframes render --help` 看全部选项。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes render --output renders/final.mp4",
            file: "bash",
          },
        ],
        id: "use-the-cli",
      },
      {
        h: "4. 按目的地选",
        p: "",
        paras: [
          "按项目编写的尺寸出 MP4 是常规交付。只有下一步工具或平台要求时，才要别的格式或分辨率。",
          "| 需求 | 从哪里开始 |\n| - | - |\n| 观看、上传或发布普通视频 | MP4 |\n| 在 Web 上叠透明覆盖层 | 带 alpha 兼容构图的 WebM |\n| 继续用专业剪辑工具 | MOV，通常是 ProRes |\n| 交付指定的高分辨率母版 | 匹配的 4K 预设 |",
          "更高的输出分辨率不会给低分辨率媒体加细节。更高的帧率会生成更多帧；不会让按低节拍写的动效更顺。",
          "需要看得见的控制就用[浏览器编辑器导出](https://hyperframes.heygen.com/studio/export.md)；格式、Docker、批输出和高级 CLI 行为见[渲染参考](https://hyperframes.heygen.com/guides/rendering.md)。",
        ],
        codeBlocks: [],
        id: "4-choose-what-the-destination-needs",
      },
      {
        h: "5. 看渲染出的文件",
        p: "",
        paras: ["打开输出文件本身，不要依赖预览。", "预览证明项目能播。导出文件证明交付正确。"],
        codeBlocks: [],
        bullets: [
          "看第一秒和最后一秒。",
          "检查字幕、切点和最复杂的转场。",
          "听旁白是否被切、音效是否迟到、音乐是否戛然而止。",
          "确认时长、尺寸、格式和音频。",
          "用带项目和版本的文件名。",
        ],
        id: "5-watch-the-rendered-file",
      },
      {
        h: "6. 分享正确形态",
        p: "",
        paras: [
          "| 接收方需要 | 发送 |\n| - | - |\n| 要观看或上传的视频 | 渲染出的 MP4、WebM 或 MOV |\n| 当前项目的浏览器链接 | 已发布的项目 URL |\n| 继续编辑的能力 | 源项目和它的素材 |",
          "浏览器链接比文件更合适时，发布项目： 该命令上传项目并返回稳定的 URL。匿名首次发布会生成可认领链接。登录时 CLI 会立即拥有项目、更新已有链接，或发布到共享空间。",
          "用相对路径引用的本地视频海报，例如 `../shared/poster.png`，即使在项目目录外也会被复制进已发布的项目。百分号编码的路径也行，例如 `../shared/poster%20art.svg` 对应 `poster art.svg`，或 `../shared/%E5%B0%81%E9%9D%A2.svg` 对应 `封面.svg`。",
          "通过 `<img>` 或 `<source>` 的 `srcset` 引用的项目外本地图片也会带上。它们的尺寸或像素密度描述会保留，源文件不变。",
          "只复制项目外的图片、视频、音频、字体和 CSS 文件。其他外部文件，如脚本、Lottie `.json` 或 `.pdf`，会被跳过并报警告说明名称；把它们搬进项目目录即可带上。上传前，`publish` 会列出将从项目外复制的每个文件，包括项目仅链接的文件，所以你能看到是什么离开了电脑。",
          "分享源之前，先去掉秘密，并确认每个带上的媒体文件都可以分享。告诉审阅者你需要哪种反馈：故事、视觉、时间、事实，还是最终批准。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes publish",
            file: "bash",
          },
        ],
        id: "6-share-the-right-form",
      },
      {
        h: "如果交付失败",
        p: "",
        paras: [
          "保留第一条精确错误，运行： 项目和渲染失败用 [故障排除](https://hyperframes.heygen.com/help.md)，编辑器或其渲染队列问题用[浏览器编辑器故障排除](https://hyperframes.heygen.com/help.md#in-the-preview-and-browser-editor)。",
        ],
        codeBlocks: [
          {
            code: "npx hyperframes doctor\nnpx hyperframes lint\nnpx hyperframes check",
            file: "bash",
          },
        ],
        id: "if-the-finish-fails",
      },
      {
        h: "从本地 Studio 预览分享",
        p: "",
        paras: [
          "用 `hyperframes preview` 打开项目，然后点 **Export** 旁边的 **Share**。若有提示，选 **Sign in**。也可以在终端运行 `hyperframes auth login`，再回到 Studio。分享会在浏览器登录后或回到面板时自动重连。凭证留在本地 CLI 进程中。如果在终端切换账号，先重载 Studio 或从面板登录再重试。",
          "选择工作区和谁能访问项目，然后选 **Create share link**。Studio 会在渲染和上传项目前先保存未提交的编辑。五个免费共享项目额度与桌面端和 CLI 共用。工作区用量来自服务器；已注册的重发不需要额外名额。",
          "项目文件可用时一并带上。面板会报告上次 Studio 上传是带了文件还是只有视频。如果附文件失败，重试上传，或明确选择 **Retry with video only**。",
          "视频就绪后选 **Copy link**。本地编辑不会自动替换已分享视频：**Update shared version** 会把保存的项目上传到同一审阅页。改访问权限是单独的 **Save access** 动作。**Turn link off** 保留项目和评论；更新视频会让关掉的链接保持关闭。关掉链接不会释放共享项目名额。",
          "分享还没完时可以关掉分享面板，但本地 Studio 服务器要保持运行。重开面板可恢复进度，连接中断后用 **Refresh**。**Manage sharing** 打开网页里的邀请和所有者设置。已有发布项目 URL 继续单独打开。",
          "本地分享桥只在同源回环地址的 Studio 页可用。它不暴露 CLI 凭证，也不接受其他项目路径。与本地预览一样，只打开你信任脚本的项目。",
        ],
        codeBlocks: [],
        id: "share-from-the-local-studio-preview",
      },
      {
        h: "相关主题",
        p: "",
        paras: [],
        codeBlocks: [],
        bullets: [
          "[渲染 HDR 视频](https://hyperframes.heygen.com/guides/hdr.md)",
          "[导出视频](https://hyperframes.heygen.com/studio-app/export.md)",
          "[用 Codex 做视频](https://hyperframes.heygen.com/guides/with-codex.md)",
        ],
        id: "related-topics",
        aliases: ["related", "related-topics"],
      },
    ],
  },
};

export default CONTENT;
