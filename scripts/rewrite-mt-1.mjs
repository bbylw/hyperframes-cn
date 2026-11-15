import fs from 'node:fs';

let s = fs.readFileSync('src/data/docs-full.ts', 'utf8');
s = s.replace(/^import.*\n/, '').replace('export const DOCS_FULL: Record<string, DocContent> = ', '').replace(/;\s*$/, '').trim().replace(/;$/, '');
const j = JSON.parse(s);

// Batch 1: introduction, avatar, free-agents, general-video, slideshow, with-cursor
const R = {
  introduction: {
    lede: 'HyperFrames 是免费开源框架，把 HTML 变为视频：你提需求，智能体建可编辑工程，HyperFrames 负责播放与渲染。',
    sections: [
      { h: '它能做什么？', paras: ['下面每块都是已做好的 HyperFrames 成片，点开带声观看。'] },
      { h: '三件事要知道', paras: [
        '**智能体构建。** 你描述视频，智能体写 HTML、CSS 与 JavaScript，走这条路你无需自己写代码。',
        '**可编辑。** 产出的是工程文件夹，不是不可改的黑盒成品。智能体、浏览器编辑器与你的工具操作同一批文件。',
        '**渲染可靠。** HyperFrames 让工程给出每一帧的精确画面，不靠实时播放硬扛，慢机器也不会丢帧。',
      ] },
      { h: '做一个', paras: ['[card] [制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md) 装好技能，写一句短请求，再选往下怎么走。'] },
    ],
  },
  avatar: {
    sections: [
      { h: '怎么做', paras: [
        '在 Studio 应用里，或与你自己的智能体对话，说清数字人站在哪、说什么。若已有头像与声音（你自己的数字分身，或 HeyGen 库里的某个），报名字即可；只有描述，智能体也会替你选。头像由 HeyGen 制作，需要你的 HeyGen 账号：在 Studio 应用加 HeyGen API 密钥；用自家智能体则装 [HeyGen CLI](https://developers.heygen.com/cli) 并 `heygen auth login --oauth` 登录。头像消耗 HeyGen 积分，额度来自套餐赠送或带密钥的 API 积分。',
        '**已自己录好？** 跳过头像，加剪辑即可，看[字幕与剪辑](https://hyperframes.heygen.com/guides/captions-and-recuts.md)。**只想要数字人，不要成片设计？** 直接在 HeyGen 里做，那不是可编辑的 HyperFrames 工程。',
      ] },
      { h: '围绕数字人能做什么', paras: [
        '抠像（见[如何](https://hyperframes.heygen.com/guides/remove-background.md)）后，标题可从他身后穿过。',
      ], bullets: [
        '把数字人置于前景、背景或前景与背景之间切换。',
        '切到全屏产品图或图表，再切回。',
        '逐字逐句给台词打字幕。',
        '剪辑存入工程做文件，渲染永远不依赖临时下载。',
      ] },
    ],
  },
  'free-agents': {
    sections: [
      { h: '同一提示，付费与开放模型同场比拼', paras: [
        '在 HeyGen 的 [Code2Video 基准测试](https://www.heygen.com/research/introducing-code2video-benchmark) 里，模型拿 168 份简报用 HyperFrames 技能写视频、再互评。开源权重模型（Qwen 3.8 Max、DeepSeek V4.1 Flash、Kimi K3、GLM 5.3）都在第一名后 50 Elo 以内。对两类模型给出同一提示：',
        '**Claude Fable 5**',
        '__KEEP_V0__',
        '**DeepSeek V4 Flash**',
        '__KEEP_V1__',
        '顶级模型难段更稳：时机、构图、收尾。初稿、社媒贴图或教学材料，开源模型通常够用。',
      ] },
      { h: '在 Studio 应用里：OpenCode', paras: [
        '[连接智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md) 选 **OpenCode**，应用来装，无需登录跑免费模型。它要**完全访问**，应用第一次打开时会索取。',
      ] },
      { h: '在你自己的机器上', paras: [
        'OpenCode 也能跑本地模型，不出机器、不花钱。起 [Ollama](https://ollama.com) 后 OpenCode 自行发现模型，选支持工具调用的即可。模型细节见 [OpenCode 模型文档](https://opencode.ai/v2/docs/models)。',
        '本地模型比托管版慢且弱，从短视频起步。',
      ] },
      { h: '还有什么是免费的', paras: [
        '渲染、预览、Kokoro 声音、抠像、内置音效都在你机器上免费跑；用自家智能体时转录也是。Studio 应用免费，要个免费 HeyGen 账号。HeyGen 声音、头像与生成剪辑耗 HeyGen 积分，其余皆代码。免费与 HeyGen 质量之别见 [免费或 HeyGen 质量](https://hyperframes.heygen.com/guides/voice-and-audio.md#free-or-heygen-quality)。',
      ] },
    ],
    fixBullets: {
      '相关主题': [
        '[HyperFrames 常见问题解答](https://hyperframes.heygen.com/faq.md)',
        '[制作你的第一个视频](https://hyperframes.heygen.com/quickstart.md)',
        '[用 AI 制作产品发布视频](https://hyperframes.heygen.com/guides/product-launch-video.md)',
      ],
    },
  },
  'general-video': {
    sections: [
      { h: '怎么做', paras: [
        '**先给一支手感对的视频。** 把链接贴到**做点什么**，或用首页 **Reference**，说清要留什么（节奏、外观、开场），以及哪些得换成自己的。首页**灵感改编**里有真实视频的短片段。Reference 用你的 HeyGen API 密钥，应用第一次会索取。',
        '**或直接描述想要的结果**，附上手头材料。想先定故事再开工就先要大纲。用自家智能体而非应用时，以 `/hyperframes` 开头。',
      ] },
      { h: '智能体应如何与你协作？', paras: [
        '在请求里说清你要哪种：',
      ], bullets: [
        '**直接构建** —— 让智能体定创意、回完整的第一版预览。',
        '**先审故事** —— 先批故事板与粗布局，再做细部。',
        '**共同导演** —— 与智能体一起定故事、视觉系统、动效、转场、音频与起止。',
      ] },
      { h: '用自定义路线时', paras: [
        '若某来源已定工作（产品 URL、文章、PR、音轨、真人剪辑或短动效），从[该来源指南](https://hyperframes.heygen.com/workflows.md) 入。',
      ], bullets: [
        '多种素材须合成一支成片；',
        '底层素材可能被剪、重排或替换；',
        '成片需较长或反常规的多幕结构；',
        '同一想法要为不同规格专门重做；',
        '想与智能体一起定创作方案。',
      ] },
      { h: '保持反馈有效', paras: [
        '先看故事再抠动效。用浏览器编辑器做可指点的直改。问智能体时点名哪些影响多幕、源文件、媒体或整体叙事。',
        '导出前确认：[card][成片并分享](https://hyperframes.heygen.com/guides/export-and-share.md) 检查完整结果，再从你中意的出口渲染。',
      ], bullets: [
        '只剩为故事服务的原始材料；',
        '旁白、音乐、音效与静默各有去处；',
        '各请求规格都拼好，不只裁一刀；',
        '设计落在开头与结尾的气质；',
        '全工程过检查。',
      ] },
    ],
  },
  slideshow: {
    sections: [
      { h: '怎么做', paras: [
        '给智能体演示应达的材料与决策：智能体确认受众、主诉，以及是否需要显现、分支或演讲者备注，每页内容你无需排好。用自家智能体而非应用时，以 `/hyperframes` 开头。',
        '点名受众姓名，以及演示后希望听众改变什么。若要无人值守从头播到尾就做[视频](https://hyperframes.heygen.com/workflows.md)，牌组还不能直接导出 MP4。',
      ] },
      { h: '一套好演示怎么做', paras: [
        '要手改顺序、备注、显现或分支，用浏览器编辑器里的[演示面板](https://hyperframes.heygen.com/studio/export.md#build-a-slideshow)。',
      ], bullets: [
        '**每页一主张**，配一张视觉证据。',
        '**显现**在演示者恰当时一次加一个想法。',
        '**分支与热点**放可选细节，不碰主故事也能讲通。',
        '**演讲者备注**为讲者服务，不复读页面。',
      ] },
      { h: '提示有效', paras: [
        '点名牌组活动部件：“一次显现一个 bullet”“从热点分岔到细节页”“加演讲者备注”。一次提示给全套：做 5 页 1920×1080 演示，每页一想法，标题即完整主张句（非标签），重点在前。页 2 分三次显现三个痛点；页 3 用自下而上市场账（账号数 × ACV），而非一句“$40B 市场”。每页加演讲者备注，页 3 挂热点分岔到“测算方法”细节页。用 `hyperframes present` 放映。',
        '把牌组当翻页讲，不是播视频。每次显现都是页内停点，热点开细节页，“后退”回到含该页的组。',
      ] },
      { h: '放映它', paras: [
        '打开本地链接按 **P**（或点**放映**）。观众拿到干净全屏，你同时看到实时页、备注、下一页与计时器。Meet 分享选观众**选项卡**，Zoom 移到独立窗口再共享。',
        '用**下一页**逐步放，包括末页内容。末页最后一项显现完，按钮消失。',
        '提示：不要对牌组跑 `hyperframes render`。它不会报错——牌组没有根合成，渲染只取**第一**页，静默截掉成片，得 6 秒而非 40 秒，丢了什么不告知。',
        '现场牌组用 `hyperframes present`，或 `hyperframes snapshot` 每页一张静帧。',
      ] },
    ],
  },
  'with-cursor': {
    sections: [
      { h: '准备工作', paras: [
        '装好 HyperFrames 技能，打开 Cursor，智能体即按你的话写视频，预览并在本机渲 MP4。',
      ] },
      { h: '安装', paras: [
        '[tab] 项目技能：在项目文件夹跑上方命令，技能随项目走，装完重载 Cursor 或新开一轮智能体对话。',
        '[tab] 用户级：每个项目装一次核心集，Cursor 装有则链入 `~/.cursor/skills`，以后再跑即更新。',
        '[tab] 插件：团队走 Cursor 团队市场加 HyperFrames 插件，或加载本地副本，见[装插件](https://hyperframes.heygen.com/guides/plugins.md#cursor)。',
      ], codeBlocks: [
        { code: 'npx skills add heygen-com/hyperframes', file: 'bash' },
        { code: 'npx hyperframes skills update', file: 'bash' },
      ] },
      { h: '要你的第一个视频', paras: [
        '在新空项目开智能体新对话，粘贴：',
      ] },
      { h: '会发生什么', paras: [
        '智能体读你的视频类型（如发布片或讲解片）的 HyperFrames 指南，在文件夹建工程。长故事型先给三条故事情节任选。',
        '智能体跑终端命令装包、启预览、渲成片，Cursor 弹窗请批准。同对话看第一版，直接说改哪。',
      ], bullets: [
        '智能体读对应类型的 HyperFrames 指南。',
        '工程检查完开本地预览。',
      ] },
      { h: '预览与渲染', paras: [
        '日后重开预览，在项目文件夹的 Cursor 终端跑：',
        '预览开在浏览器编辑器，可手改。渲 MP4：',
        '也可让智能体替你渲。',
      ], codeBlocks: [
        { code: 'npx hyperframes preview', file: 'bash' },
        { code: 'npx hyperframes render --output final.mp4', file: 'bash' },
      ] },
      { h: '更喜欢应用？', paras: [
        'Mac、Windows、Linux 的 [HyperFrames Studio 应用](https://hyperframes.heygen.com/studio-app.md) 把对话、预览、编辑收一窗。它跑 Claude Code、Codex 与其他智能体，不跑 Cursor。见[连接你的智能体](https://hyperframes.heygen.com/studio-app/connect-your-agent.md)。',
      ] },
      { h: '出问题？', paras: [
        '按类型修：',
      ], bullets: [
        '**智能体看不到技能。** 新开一轮对话，确认 `.agents/skills`（项目装）或 `~/.cursor/skills`（用户装）含 `hyperframes`，再跑 `npx hyperframes skills check`。',
        '**渲染失败。** 跑 `npx hyperframes doctor`，按报告修。',
        '**其余。** 见[疑难解答](https://hyperframes.heygen.com/help.md)。',
      ] },
    ],
  },
};

// preserve free-agents video paras before overwrite
const _faV0 = j['free-agents'] ? (j['free-agents'].sections[0].paras[2] ?? null) : null;
const _faV1 = j['free-agents'] ? (j['free-agents'].sections[0].paras[4] ?? null) : null;
// preserve with-cursor related topics (last section)
const _wcRelated = j['with-cursor'] ? JSON.parse(JSON.stringify(j['with-cursor'].sections[j['with-cursor'].sections.length - 1])) : null;

for (const [slug, patch] of Object.entries(R)) {
  const v = j[slug];
  if (!v) { console.log('missing', slug); continue; }
  if (patch.lede) v.lede = patch.lede;
  // special: rebuild with-cursor fully (section count changed)
  if (slug === 'with-cursor') {
    const rebuilt = patch.sections.map((ns) => ({ h: ns.h, p: ns.p ?? '', paras: ns.paras ?? [], codeBlocks: ns.codeBlocks ?? [], ...(ns.bullets ? { bullets: ns.bullets } : {}) }));
    if (_wcRelated) rebuilt.push(_wcRelated);
    v.sections = rebuilt;
    console.log('rebuilt with-cursor', rebuilt.length);
    continue;
  }
  // map sections by new h (must match existing h list order)
  const map = {};
  for (const ns of patch.sections) map[ns.h] = ns;
  // we need to align by index using known order: patch.sections listed in order
  // verify lengths
  // Existing sections include 相关主题 last (ours fixed) – patch excludes it
  for (let i = 0; i < patch.sections.length; i++) {
    const ns = patch.sections[i];
    const target = v.sections[i];
    if (!target) continue;
    // keep codeBlocks unless patch provides new ones
    const keepCB = target.codeBlocks;
    const keepBullets = target.bullets;
    target.h = ns.h;
    if (ns.paras) {
      target.paras = ns.paras.map((p) => {
        if (p === '__KEEP_V0__') return _faV0 ?? p;
        if (p === '__KEEP_V1__') return _faV1 ?? p;
        return p;
      });
    }
    if (ns.bullets) target.bullets = ns.bullets;
    if (ns.codeBlocks) target.codeBlocks = ns.codeBlocks;
    else target.codeBlocks = keepCB;
    if (!ns.bullets && keepBullets && ns.preserveBullets !== false) {
      // only keep if patch didn't intend to drop; for free-agents video paras case keep structure
    }
  }
  if (patch.fixBullets) {
    for (const sec of v.sections) {
      if (patch.fixBullets[sec.h]) sec.bullets = patch.fixBullets[sec.h];
    }
  }
  console.log('done', slug, v.sections.length, 'secs');
}

const ts = 'import type { DocContent } from "./docs";\n\nexport const DOCS_FULL: Record<string, DocContent> = ' + JSON.stringify(j, null, 1) + ';\n';
fs.writeFileSync('src/data/docs-full.ts', ts, 'utf8');
console.log('wrote', ts.length);
