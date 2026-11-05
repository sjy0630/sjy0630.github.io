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
    seeProjects: "看看项目 ↓",
    email: "邮箱",
    cv: "简历",
    toolkit: "常用工具",
    updated: "更新于",
    contactTitle: "欢迎交流。",
    contactText: "如果你也在摸索 AI、系统与芯片之间的问题，欢迎发邮件或来 GitHub 看看。",
    backToTop: "回到顶部 ↑",
    homeHref: "#top",
    switchHref: "/",
    switchLabel: "EN",
    switchLang: "en",
  },

  title: "苏姜禹 · Jiangyu Su",
  description: "苏姜禹的个人网站：集成电路、AI 加速器与软硬件协同、科研与项目记录。",

  intro: "复旦大学集成电路专业大二本科生，关注计算机体系结构、数字芯片设计与 AI 计算硬件。",

  location: "中国上海",
  affiliation: "复旦大学",
  currently: "正在探索 AI 加速器与软硬件协同",
  interests: ["AI 加速器", "软硬件协同", "计算机体系结构", "数字芯片设计", "忆阻器", "因果学习"],

  about: [
    "我是复旦大学集成电路与微纳电子创新学院 2025 级本科生。最初吸引我的是芯片本身，后来我越来越在意从算法到硅片的整条链路：模型怎样变成真实的计算，它的能力受哪些系统条件限制，以及怎样判断一个看起来不错的结果是否真的可信。",
    "这一路上，我做过二维材料忆阻器的物理建模、基于 Transformer 的因果推断研究，也参加过 Agentic AI 芯片设计 Hackathon。课外我在自学 MIT 6.004（计算机体系结构）和 MIT 6.5940（高效深度学习），现在对 AI 加速器和软硬件协同的兴趣，正是从这里开始的。",
    "这个网站不是一份完成态的履历。我更想用它保存那些真正留下东西的过程：一段代码、一次实验、一个没有被轻易糊弄过去的问题。",
  ],

  toolkit: ["Python", "PyTorch", "Verilog", "Vivado", "Linux", "Git", "GPU 服务器"],

  nowUpdated: "2026 年 11 月",
  now: [
    {
      label: "探索",
      title: "AI 加速器与软硬件协同",
      desc: "模型结构、数据流、编译器和微架构如何相互塑造，以及为什么瓶颈常常在数据搬运而不是计算本身。目前做了一些小实验，比如对比不同数值精度下的 GPU 矩阵乘法性能。",
    },
    {
      label: "研究",
      title: "Transformer 因果推断与主动实验设计",
      desc: "模型能否从离线数据中学到潜在的因果规律，并自主决定下一步做什么实验？我主要负责数据生成、模型训练和评估，也分析过闭环决策中的分布偏移问题。",
    },
    {
      label: "建模",
      title: "VULCAN-2D",
      desc: "大部分物理建模工作已经完成，正在等待更多实验数据，用来校准模型、检验其中的物理假设。",
    },
  ],

  projects: [
    {
      title: "VULCAN-2D",
      status: "科研 · 开源",
      kind: "open",
      desc: "复旦曦源计划项目：面向二维材料忆阻器的多尺度物理建模与仿真器。研究导电细丝演化、电荷输运、焦耳热和器件变异性等机制，并完成数值建模与 I–V 仿真。",
      note: "它让我第一次认真面对：模型能够拟合数据，并不意味着它已经解释了真实机制。",
      tags: ["忆阻器", "物理建模", "仿真"],
      link: site.projects[0].link,
    },
    {
      title: "Causal Transformer",
      status: "科研 · 进行中",
      kind: "progress",
      desc: "研究 Transformer 能否从离线数据中学习潜在因果规律并自主做实验决策。我用 PyTorch 开展数据生成、训练和评估实验，并分析了模型进入闭环后出现的分布偏移。",
      note: "还没有可以写成结论的结果，但它正在教我区分：代码跑通、指标变化，和真正可信的研究证据。",
      tags: ["因果推断", "主动实验设计", "PyTorch"],
      link: "",
    },
    {
      title: "Agentic4Systems Hackathon",
      status: "2026 · 三等奖",
      kind: "award",
      desc: "为期四天的 Agentic AI 芯片设计 Hackathon。三人团队中，我负责 CModel、综合流程和部分 RTL 修改。",
      note: "比名次更重要的是：指令语义、参考模型、RTL 实现和 PPA 不是几个孤立模块，而是一条需要不断校准的工程链。",
      tags: ["CModel", "RTL", "综合", "PPA"],
      link: "",
    },
    {
      title: "频遇 WaveLength",
      status: "创业项目 · 半决赛",
      kind: "progress",
      desc: "校园深度对话平台。我作为核心技术成员负责软件研发，项目晋级 2026 年第六届“兴·泉杯”社会企业创新创业大赛半决赛。",
      tags: ["产品", "全栈"],
      link: "",
    },
  ],

  honors: [
    { year: "2026", title: "国家奖学金", detail: "" },
    { year: "2026", title: "Agentic4Systems Hackathon 三等奖", detail: "Agentic AI 芯片设计" },
    { year: "2026", title: "美国大学生数学建模竞赛 S 奖", detail: "负责数学建模、程序实现与数据分析" },
    { year: "2025", title: "全国大学生数学竞赛三等奖", detail: "上海赛区 · 非数学专业 A 类" },
  ],

  life: {
    text: "离开书桌的时候，我会变魔术、弹吉他、看星星，也尽量让自己动起来。它们不一定产生什么成果，但会提醒我，生活并不是一条需要持续优化的流水线。",
    items: ["🃏 魔术", "🎸 吉他", "🔭 天文", "🏊 游泳", "🏀 球类", "🧳 短途旅行"],
  },

  socials: site.socials,
};
