// ============================================================
//  ✏️  在这里改你的网站内容（改完保存，网页会自动刷新）
//  这是你最常动的文件，不用懂 React 也能改。
//  规则：引号里的中文/链接随便改；留空 "" 的项目不会显示。
// ============================================================

export const site = {
  // 首页大标题（会带故障 / glitch 效果）
  name: "sjy0630",
  // 英文短名（用在导航栏、终端）
  nameEn: "SJY0630",

  // 一句话定位（首页副标题）
  tagline: "复旦微电子 · 在硅与代码的交叉地带折腾",

  // 浏览器标签页标题 & 搜索引擎描述
  title: "sjy0630 · 个人主页",
  description: "复旦大学微电子大一学生 sjy0630 的个人网站。",

  // About 段落（想写几段就写几段，每段一个引号）
  about: [
    "我是 sjy0630，复旦大学微电子科学与工程专业大一在读。",
    "兴趣在硬件和算法的交叉地带——从 FPGA 上跑 CNN，到脉冲神经网络（SNN）方向的科研，也喜欢顺着 FlashAttention 这种例子去抠软硬件到底怎么协同。",
    "这个网站是我记录和展示自己的小据点，会慢慢往里塞作品和成果。",
  ],

  // 项目 / 作品卡片（想加一个就复制一整个 { ... } 段，记得用逗号隔开）
  projects: [
    {
      title: "FPGA × CNN 手写数字识别",
      desc: "课程拓展项目：在 FPGA 上实现手写数字识别 CNN——把模型从软件一路落到硬件，practice 软硬件协同。",
      tags: ["FPGA", "CNN", "Verilog"],
      link: "",
    },
    {
      title: "脉冲神经网络（SNN）科研",
      desc: "在类脑计算 / SNN 方向做科研：精读计算机顶会的 SNN 算法论文、复现模型，关注事件相机（event-camera）视觉等方向。",
      tags: ["SNN", "类脑计算", "PyTorch"],
      link: "",
    },
    {
      title: "CS182 深度学习 · 系统自学",
      desc: "跟伯克利 CS182 从零硬啃深度学习：反向传播、CNN、Transformer、扩散模型、RLHF，配套 14 个作业逐个手撕。",
      tags: ["Deep Learning", "Transformer", "PyTorch"],
      link: "",
    },
    {
      title: "从 FlashAttention 看软硬件协同",
      desc: "研讨课题：用 FlashAttention 拆 GPU 内存层级——为什么“少搬数据”常常比“少算”更重要。",
      tags: ["GPU", "FlashAttention", "软硬协同"],
      link: "",
    },
  ],

  // 联系方式 / 社交（留空的不显示）
  socials: {
    email: "", // 你选了不公开邮箱
    github: "https://github.com/sjy0630",
    bilibili: "",
    twitter: "",
  },
};
