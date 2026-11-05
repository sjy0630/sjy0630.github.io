// ============================================================
//  ✏️  中文版内容（对应 /zh/ 页面）。结构和 site.js 完全一样，
//  改英文版时记得同步改这里。留空 "" 的项不会显示。
// ============================================================

import { site } from "@/content/site";

export const siteZh = {
  name: "苏姜禹",
  nameAlt: "Jiangyu Su",
  nameAltLang: "en",
  handle: site.handle,
  lang: "zh-CN",

  ui: {
    sections: {
      about: "关于", now: "近况", projects: "项目", honors: "荣誉",
      life: "技术之外", notes: "笔记", contact: "联系",
    },
    seeProjects: "项目经历 ↓",
    email: "邮箱",
    cv: "简历",
    toolkit: "常用工具",
    updated: "更新于",
    contactTitle: "",
    contactText: "对体系结构、AI 硬件或芯片设计方向感兴趣，或者有合作、交流的想法，欢迎发邮件联系我。",
    backToTop: "回到顶部 ↑",
    homeHref: "#top",
    switchHref: "/",
    switchLabel: "EN",
    switchLang: "en",
  },

  title: "苏姜禹 · Jiangyu Su",
  description: "苏姜禹，复旦大学集成电路专业本科生。关注计算机体系结构、数字芯片设计与 AI 加速器。",

  intro: "复旦大学集成电路专业本科生（2025 级），关注计算机体系结构、数字芯片设计和 AI 加速器。",

  location: "中国上海",
  affiliation: "复旦大学",
  currently: "目前关注：AI 加速器与软硬件协同",
  interests: ["AI 加速器", "软硬件协同", "计算机体系结构", "数字芯片设计", "忆阻器", "因果学习"],

  about: [
    "我是复旦大学集成电路与微纳电子创新学院 2025 级本科生。目前的兴趣主要在计算机体系结构、数字芯片设计和 AI 硬件加速，尤其是算法和硬件怎样配合，才能把模型高效地跑在芯片上。",
    "科研上，我参与过二维材料忆阻器的物理建模与仿真器开发，以及基于 Transformer 的因果推断研究。课外在自学 MIT 6.004（计算机体系结构）和 MIT 6.5940（高效深度学习）。",
    "这个网站用来整理我做过的项目和学习记录，会持续更新。",
  ],

  toolkit: ["Python", "PyTorch", "Verilog", "Vivado", "Linux", "Git", "GPU 服务器"],

  nowUpdated: "2026 年 11 月",
  now: [
    {
      label: "学习",
      title: "AI 加速器与软硬件协同",
      desc: "在学习模型结构、数据流、编译和微架构之间的关系，以及访存为什么常常比计算更容易成为瓶颈。做过一些小实验，比如测试不同数值精度下的 GPU 矩阵乘法性能。",
    },
    {
      label: "研究",
      title: "Transformer 因果推断与主动实验设计",
      desc: "研究模型能否从离线数据中学到因果规律，并自己决定下一步做什么实验。我主要负责数据生成、模型训练和评估。",
    },
    {
      label: "建模",
      title: "VULCAN-2D",
      desc: "物理建模部分已基本完成，接下来要用更多实验数据校准模型。",
    },
  ],

  projects: [
    {
      title: "VULCAN-2D",
      status: "科研 · 开源",
      kind: "open",
      desc: "曦源计划项目，开发面向二维材料忆阻器的多尺度物理建模与仿真器。模型涵盖导电细丝演化、电荷输运、焦耳热和器件变异性，我参与了数值建模、I–V 仿真和变异性分析。",
      note: "体会：模型能拟合数据，不代表它解释了真实的物理机制，还需要实验数据来检验。",
      tags: ["忆阻器", "物理建模", "仿真"],
      link: site.projects[0].link,
    },
    {
      title: "Causal Transformer",
      status: "科研 · 进行中",
      kind: "progress",
      desc: "基于 Transformer 的因果推断与主动实验设计研究，探索模型能否从离线数据中学习潜在的因果规律，并自主做出实验决策。我用 PyTorch 完成数据生成、模型训练和评估，也分析过闭环决策中的分布偏移问题。",
      note: "体会：代码跑通、指标变好，和得到可信的研究结论之间还有很大距离。",
      tags: ["因果推断", "主动实验设计", "PyTorch"],
      link: "",
    },
    {
      title: "Agentic4Systems Hackathon",
      status: "2026 · 三等奖",
      kind: "award",
      desc: "为期四天的 Agentic AI 芯片设计比赛，三人组队获三等奖。我负责 CModel、综合流程和部分 RTL 修改。",
      note: "体会：指令语义、参考模型、RTL 和 PPA 是环环相扣的，任何一处改动都要整条链一起对齐。",
      tags: ["CModel", "RTL", "综合", "PPA"],
      link: "",
    },
    {
      title: "频遇 WaveLength",
      status: "创业项目 · 半决赛",
      kind: "progress",
      desc: "一个校园深度对话平台，我是核心技术成员，负责软件开发。项目进入 2026 年第六届“兴·泉杯”社会企业创新创业大赛半决赛。",
      tags: ["产品", "全栈"],
      link: "",
    },
  ],

  honors: [
    { year: "2026", title: "国家奖学金", detail: "" },
    { year: "2026", title: "Agentic4Systems Hackathon 三等奖", detail: "Agentic AI 芯片设计" },
    { year: "2026", title: "美国大学生数学建模竞赛 S 奖", detail: "" },
    { year: "2025", title: "全国大学生数学竞赛三等奖", detail: "上海赛区 · 非数学专业 A 类" },
  ],

  life: {
    text: "课余喜欢变魔术和弹吉他，也喜欢天文、游泳和打球，有空会去周边短途旅行。",
    items: ["🃏 魔术", "🎸 吉他", "🔭 天文", "🏊 游泳", "🏀 球类", "🧳 短途旅行"],
  },

  socials: site.socials,
};
