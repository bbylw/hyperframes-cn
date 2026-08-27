import { useState, useMemo } from "react";
import { workflowSkills, domainSkills, type SkillRow } from "../data/content";
import { soundFX } from "../utils/audioFX";
import { copyToClipboard } from "../utils/clipboard";
import { SearchIcon, CloseIcon } from "./Icons";

interface SkillsCatalogProps {
  onShowToast: (msg: string) => void;
}

export default function SkillsCatalog({ onShowToast }: SkillsCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  // 合并全部 20+ 个技能
  const allSkills: SkillRow[] = useMemo(() => {
    return [
      {
        name: "/hyperframes",
        category: "router",
        categoryLabel: "核心路由",
        tag: "总入口 / 能力地图",
        badge: "GATEWAY ROUTER",
        inputFormat: "任何制作/编辑/动效化视频的初始请求",
        cliCommand: "npx hyperframes skills update",
        examplePrompt: "使用 /hyperframes，帮我规划一支 15 秒的企业品牌动态短片。",
        usage:
          "任何「制作 / 创建 / 编辑 / 动效化 / 渲染」视频、动画或动态图形的请求都请先读它 —— 它是领域 skills 的能力地图，也是创作工作流的意图路由器。",
      },
      ...workflowSkills,
      ...domainSkills,
    ];
  }, []);

  const categories = [
    { id: "all", label: "全部技能", count: allSkills.length },
    {
      id: "workflow",
      label: "创作工作流",
      count: allSkills.filter((s) => s.category === "workflow").length,
    },
    {
      id: "domain",
      label: "领域原子能力",
      count: allSkills.filter((s) => s.category === "domain").length,
    },
    {
      id: "media-audio",
      label: "媒体与混音",
      count: allSkills.filter((s) => s.category === "media" || s.category === "audio").length,
    },
  ];

  const filteredSkills = useMemo(() => {
    return allSkills.filter((s) => {
      const matchCat =
        activeCategory === "all" ||
        (activeCategory === "workflow" && s.category === "workflow") ||
        (activeCategory === "domain" && s.category === "domain") ||
        (activeCategory === "media-audio" && (s.category === "media" || s.category === "audio"));

      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        !query ||
        s.name.toLowerCase().includes(query) ||
        s.usage.toLowerCase().includes(query) ||
        (s.tag && s.tag.toLowerCase().includes(query)) ||
        (s.inputFormat && s.inputFormat.toLowerCase().includes(query));

      return matchCat && matchQuery;
    });
  }, [allSkills, activeCategory, searchQuery]);

  const copyCommand = async (command: string) => {
    soundFX.playSnap();
    const ok = await copyToClipboard(command);
    if (ok) {
      onShowToast(`已复制安装命令: ${command}`);
    } else {
      onShowToast("复制失败");
    }
  };

  return (
    <section className="section alt skills-catalog-section" id="skills">
      <div className="container">
        <div className="scene-head">
          <div className="scene-meta">
            <span className="scene-no mono" data-scramble>
              SC.04
            </span>
            <span className="scene-rule" data-draw />
          </div>
          <h2 className="scene-title">内置 20 个智能体 Skills 矩阵</h2>
          <p className="scene-lede">
            按需加载的智能体能力生态 —— 先读 <strong>/hyperframes</strong> 路由器；
            智能体会根据任务意图自动挑选并组合调用创作工作流与底层领域能力，
            <strong>没有任何操作会在你背后偷偷拉取整套集合</strong>。
          </p>
        </div>

        {/* 搜索与分类过滤器 */}
        <div className="skills-filter-bar">
          <div className="skills-tabs" role="tablist">
            {categories.map((c) => {
              const isSelected = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`skills-tab-btn ${isSelected ? "is-active" : ""}`}
                  onClick={() => {
                    soundFX.playClick();
                    setActiveCategory(c.id);
                  }}
                >
                  <span>{c.label}</span>
                  <span className="skills-count mono">{c.count}</span>
                </button>
              );
            })}
          </div>

          <div className="skills-search-box">
            <span className="search-icon" aria-hidden="true">
              <SearchIcon size={15} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索技能名称、输入格式或关键字（如: PR, 字幕, 图表, Figma...）"
              className="skills-search-input mono"
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear mono"
                onClick={() => setSearchQuery("")}
                aria-label="清空搜索"
              >
                <CloseIcon size={12} />
              </button>
            )}
          </div>
        </div>

        {/* 技能卡片网格 */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => {
            const isExpanded = expandedSkill === skill.name;
            return (
              <article key={skill.name} className="skill-card">
                <div className="skill-card-head">
                  <div className="skill-title-row">
                    <h3 className="skill-name mono">{skill.name}</h3>
                    {skill.badge && <span className="skill-badge mono">{skill.badge}</span>}
                  </div>
                  {skill.tag && <span className="skill-tag mono">{skill.tag}</span>}
                </div>

                <p className="skill-usage">{skill.usage}</p>

                {skill.inputFormat && (
                  <div className="skill-input-meta mono">
                    <span className="meta-k">INPUT:</span>
                    <span className="meta-v">{skill.inputFormat}</span>
                  </div>
                )}

                {skill.cliCommand && (
                  <div className="skill-cli-row">
                    <code className="skill-cli-code mono">{skill.cliCommand}</code>
                    <button
                      type="button"
                      className="skill-copy-btn"
                      onClick={() => copyCommand(skill.cliCommand!)}
                      title="复制安装与更新指令"
                    >
                      复制 ⎘
                    </button>
                  </div>
                )}

                {skill.examplePrompt && (
                  <div className="skill-prompt-toggle">
                    <button
                      type="button"
                      className="prompt-toggle-btn mono"
                      onClick={() => {
                        soundFX.playClick();
                        setExpandedSkill(isExpanded ? null : skill.name);
                      }}
                    >
                      {isExpanded ? "收起示例 Prompt ▲" : "查看提问示例 Prompt ▼"}
                    </button>
                    {isExpanded && (
                      <div className="skill-prompt-box mono">
                        <p>{skill.examplePrompt}</p>
                        <button
                          type="button"
                          className="btn btn-ghost btn-xs"
                          style={{ marginTop: "8px" }}
                          onClick={async () => {
                            soundFX.playSnap();
                            const ok = await copyToClipboard(skill.examplePrompt!);
                            if (ok) onShowToast("示例 Prompt 已复制");
                          }}
                        >
                          复制此 Prompt ⎘
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div className="skills-empty mono">
            <p>未找到匹配「{searchQuery}」的技能。</p>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
            >
              重置过滤条件
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
