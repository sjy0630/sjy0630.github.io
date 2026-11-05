// ============================================================
//  ✏️  Site content — edit this file to change what the page says.
//  Empty strings "" are hidden.
// ============================================================

export const site = {
  name: "Jiangyu Su",
  nameAlt: "苏姜禹",
  nameAltLang: "zh-CN",
  handle: "sjy0630",
  lang: "en",

  // Interface text (section names, buttons)
  ui: {
    sections: {
      about: "About", now: "Now", projects: "Projects", honors: "Honors",
      life: "Elsewhere", notes: "Notes", contact: "Contact",
    },
    seeProjects: "See projects ↓",
    email: "Email",
    cv: "CV",
    toolkit: "Toolkit",
    updated: "Updated",
    contactTitle: "Let's talk.",
    contactText: "If you work on computer architecture, AI hardware, or chip design, or just want to talk, feel free to email me.",
    backToTop: "Back to top ↑",
    homeHref: "#top",
    switchHref: "/zh/",
    switchLabel: "中文",
    switchLang: "zh-CN",
  },

  // Browser tab title & search description
  title: "Jiangyu Su",
  description:
    "Jiangyu Su (苏姜禹), undergraduate in Integrated Circuits at Fudan University. Computer architecture, digital IC design, and AI accelerators.",

  // One-line intro under the name
  intro:
    "Undergraduate in Integrated Circuits at Fudan University, interested in computer architecture, digital IC design, and AI accelerators.",

  location: "Shanghai, China",
  affiliation: "Fudan University",
  currently: "Current focus: AI accelerators & HW/SW co-design",
  interests: ["AI accelerators", "HW/SW co-design", "Computer architecture", "Digital IC design", "Memristors", "Causal learning"],

  about: [
    "I'm an undergraduate at the College of Integrated Circuits and Micro-Nano Electronics, Fudan University (entered 2025). My interests are computer architecture, digital IC design, and AI hardware acceleration — in particular, how algorithms and hardware can be designed together so models run efficiently on chips.",
    "In research, I've worked on physical modeling and simulator development for 2D-material memristors, and on Transformer-based causal inference. I've also competed in an agentic AI chip-design hackathon and the Mathematical Contest in Modeling. Outside class I'm studying MIT 6.004 (computer architecture) and MIT 6.5940 (efficient deep learning).",
    "This site collects my projects and notes, and I update it as I go.",
  ],

  toolkit: ["Python", "PyTorch", "Verilog", "Vivado", "Linux", "Git", "GPU servers"],

  // What I'm focused on right now
  nowUpdated: "Nov 2026",
  now: [
    {
      label: "Learning",
      title: "AI accelerators & hardware–software co-design",
      desc: "Studying how model structure, dataflow, compilation, and microarchitecture interact, and why memory access is often the bottleneck. Small experiments so far, such as benchmarking GPU matrix multiplication at different numeric precisions.",
    },
    {
      label: "Research",
      title: "Transformers for causal inference & active experiment design",
      desc: "Whether a model can learn causal structure from offline data and decide which experiment to run next. I work on data generation, training, and evaluation.",
    },
    {
      label: "Modeling",
      title: "VULCAN-2D",
      desc: "Physical modeling is mostly done; next is calibrating the model with more experimental data.",
    },
  ],

  projects: [
    {
      title: "VULCAN-2D",
      status: "Research · open source",
      kind: "open",
      desc: "A multi-scale modeling framework and simulator for 2D-material memristors (Fudan Xiyuan undergraduate research program). It covers conductive-filament evolution, charge transport, Joule heating, and device variability; I worked on numerical modeling, I–V simulation, and variability analysis.",
      note: "Takeaway: fitting the data doesn't mean a model explains the physics — it still has to be tested against experiments.",
      tags: ["Memristors", "Physical modeling", "Simulation"],
      link: "https://github.com/sjy0630/VULCAN-2D",
    },
    {
      title: "Causal Transformer",
      status: "Research · in progress",
      kind: "progress",
      desc: "Research on Transformer-based causal inference and active experiment design: can a model learn latent causal rules from offline data and choose its own experiments? I handle data generation, training, and evaluation in PyTorch, and have analyzed distribution shift in closed-loop decisions.",
      note: "Takeaway: code that runs and metrics that improve are still a long way from a trustworthy result.",
      tags: ["Causal inference", "Active experiment design", "PyTorch"],
      link: "",
    },
    {
      title: "Agentic4Systems Hackathon",
      status: "2026 · Third prize",
      kind: "award",
      desc: "A four-day agentic AI chip-design competition; our team of three won third prize. I was responsible for the C model, the synthesis flow, and part of the RTL changes.",
      note: "Takeaway: ISA semantics, reference model, RTL, and PPA are tightly coupled — a change in one has to be carried through the rest.",
      tags: ["C model", "RTL", "Synthesis", "PPA"],
      link: "",
    },
    {
      title: "WaveLength",
      status: "Startup project · semifinalist",
      kind: "progress",
      desc: "A campus platform for in-depth one-on-one conversations. As a core technical member, I worked on software development. The project reached the semifinals of the 6th Xing·Quan Cup Social Enterprise Innovation Competition (2026).",
      tags: ["Product", "Full-stack"],
      link: "",
    },
  ],

  honors: [
    { year: "2026", title: "National Scholarship", detail: "" },
    { year: "2026", title: "Agentic4Systems Hackathon — Third Prize", detail: "Agentic AI for chip design" },
    { year: "2026", title: "Mathematical Contest in Modeling (MCM) — Successful Participant", detail: "" },
    { year: "2025", title: "Chinese Mathematics Competitions — Third Prize", detail: "Shanghai division, non-math majors (Category A)" },
  ],

  // Life outside technical work
  life: {
    text: "Outside of work I enjoy magic and guitar, as well as astronomy, swimming, and ball sports, and I take short trips when I can.",
    items: ["🃏 Magic", "🎸 Guitar", "🔭 Astronomy", "🏊 Swimming", "🏀 Ball sports", "🧳 Short trips"],
  },

  // Contact / social links (empty ones are hidden)
  socials: {
    email: "25803040192@m.fudan.edu.cn",
    github: "https://github.com/sjy0630",
    bilibili: "",
    twitter: "",
  },
};
