export interface FrameTemplate {
  id: string;
  name: string;
  category: string;
  tagline: string;
  primaryColor: string;
  accentColor: string;
  bgColor: string;
  fontPair: string;
  ratio: "16:9" | "9:16" | "4:5";
  link: string;
}

export const frameTemplates: FrameTemplate[] = [
  {
    id: "biennale-yellow",
    name: "Biennale Yellow",
    category: "High Impact / Festival",
    tagline: "顶级设计双年展风格：极黑底色与高能亮黄，工业感粗衬线冲击力",
    primaryColor: "#FFE500",
    accentColor: "#FFFFFF",
    bgColor: "#0A0A0A",
    fontPair: "Anton + Noto Serif SC",
    ratio: "16:9",
    link: "https://www.hyperframes.dev/design/biennale-yellow",
  },
  {
    id: "blockframe",
    name: "BlockFrame",
    category: "SaaS / Modular",
    tagline: "现代模块化 UI 结构，极简边框线与微发光芯片风",
    primaryColor: "#E2A63D",
    accentColor: "#EFE8DA",
    bgColor: "#131110",
    fontPair: "JetBrains Mono + Inter",
    ratio: "16:9",
    link: "https://www.hyperframes.dev/design/blockframe",
  },
  {
    id: "blue-professional",
    name: "Blue Professional",
    category: "Enterprise / Fintech",
    tagline: "深邃企业蓝与冷银高光，专为金融、B2B SaaS 财报与路演打造",
    primaryColor: "#3B82F6",
    accentColor: "#60A5FA",
    bgColor: "#09111E",
    fontPair: "Plus Jakarta Sans + Roboto",
    ratio: "16:9",
    link: "https://www.hyperframes.dev/design/blue-professional",
  },
  {
    id: "bold-poster",
    name: "Bold Poster",
    category: "Editorial / Brand",
    tagline: "瑞士平面海报排版美学，超大字号跨帧撞击与留白张力",
    primaryColor: "#FF3B30",
    accentColor: "#FFFFFF",
    bgColor: "#181818",
    fontPair: "Outfit + Noto Sans SC",
    ratio: "9:16",
    link: "https://www.hyperframes.dev/design/bold-poster",
  },
  {
    id: "broadside",
    name: "Broadside",
    category: "Print / Editorial",
    tagline: "复古报刊铜版纸质感，细腻网点噪波与精致衬线排版",
    primaryColor: "#D4AF37",
    accentColor: "#F4ECD8",
    bgColor: "#1C1814",
    fontPair: "Noto Serif SC + Garamond",
    ratio: "16:9",
    link: "https://www.hyperframes.dev/design/broadside",
  },
  {
    id: "capsule",
    name: "Capsule",
    category: "Consumer / Mobile",
    tagline: "胶囊圆角几何形态与平滑毛玻璃，极具苹果生态精致度",
    primaryColor: "#A855F7",
    accentColor: "#F3E8FF",
    bgColor: "#110E1A",
    fontPair: "SF Pro + HarmonyOS Sans",
    ratio: "9:16",
    link: "https://www.hyperframes.dev/design/capsule",
  },
  {
    id: "cartesian",
    name: "Cartesian",
    category: "Tech / Architecture",
    tagline: "笛卡尔坐标系准线、十字光标与毫米级技术标注网格",
    primaryColor: "#10B981",
    accentColor: "#6EE7B7",
    bgColor: "#091512",
    fontPair: "JetBrains Mono + Fira Code",
    ratio: "16:9",
    link: "https://www.hyperframes.dev/design/cartesian",
  },
  {
    id: "cobalt-grid",
    name: "Cobalt Grid",
    category: "Cyber / Data Viz",
    tagline: "深海钴蓝激光网格与霓虹脉冲，极速科技感的视听舞台",
    primaryColor: "#06B6D4",
    accentColor: "#22D3EE",
    bgColor: "#081325",
    fontPair: "Space Grotesk + JetBrains Mono",
    ratio: "16:9",
    link: "https://www.hyperframes.dev/design/cobalt-grid",
  },
  {
    id: "coral",
    name: "Coral",
    category: "Lifestyle / Creator",
    tagline: "温暖珊瑚粉橙与柔和渐变，活力充沛的社交媒体创作者首选",
    primaryColor: "#F97316",
    accentColor: "#FB923C",
    bgColor: "#1A0F0A",
    fontPair: "Outfit + PingFang SC",
    ratio: "9:16",
    link: "https://www.hyperframes.dev/design/coral",
  },
];
