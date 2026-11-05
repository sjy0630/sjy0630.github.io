// ============================================================
//  ✏️  Site content — edit this file to change what the page says.
//  Empty strings "" are hidden.
// ============================================================

export const site = {
  name: "Jiangyu Su",
  nameZh: "苏姜禹",
  handle: "sjy0630",

  // Browser tab title & search description
  title: "Jiangyu Su",
  description:
    "Personal site of Jiangyu Su (苏姜禹) — integrated circuits, AI systems, research notes.",

  // One-line intro under the name
  intro:
    "Second-year undergraduate in Integrated Circuits at Fudan University, drawn to computer architecture, digital IC design, and hardware for AI.",

  location: "Shanghai, China",
  affiliation: "Fudan University",
  currently: "Exploring AI accelerators & hardware–software co-design",
  interests: ["AI accelerators", "HW/SW co-design", "Computer architecture", "Digital IC design", "Memristors", "Causal learning"],

  about: [
    "I'm an undergraduate at the College of Integrated Circuits and Micro-Nano Electronics, Fudan University (class of 2025). Chips were what drew me in first. Over time I've become more interested in the whole path from an algorithm to silicon: how models turn into real computation, what system constraints limit their capabilities, and how to tell whether a result that looks good is actually trustworthy.",
    "So far that has taken me through physical modeling of memristors, Transformer-based causal inference, and an agentic chip-design hackathon. Alongside coursework I've been working through MIT 6.004 (computer architecture) and MIT 6.5940 (efficient deep learning), which is where my current interest in AI accelerators and hardware–software co-design comes from.",
    "This site isn't a finished résumé. It's a place to keep the parts of the process that stuck: a piece of code, an experiment, a question I didn't let myself gloss over.",
  ],

  toolkit: ["Python", "PyTorch", "Verilog", "Vivado", "Linux", "Git", "GPU servers"],

  // What I'm focused on right now
  nowUpdated: "Nov 2026",
  now: [
    {
      label: "Exploring",
      title: "AI accelerators & hardware–software co-design",
      desc: "How model structure, dataflow, compilers, and microarchitecture shape each other — and why the bottleneck is so often memory movement rather than arithmetic. Small experiments so far, like benchmarking GPU matrix multiplication across numeric precisions.",
    },
    {
      label: "Research",
      title: "Transformers for causal inference & active experiment design",
      desc: "Can a model learn latent causal structure from offline data and then decide which experiment to run next? Working on data generation, training, and evaluation, including distribution shift in closed-loop decisions.",
    },
    {
      label: "Modeling",
      title: "VULCAN-2D",
      desc: "Most of the physical modeling is done; now waiting on more experimental data to calibrate the model and test its assumptions.",
    },
  ],

  projects: [
    {
      title: "VULCAN-2D",
      status: "Research · open source",
      kind: "open",
      desc: "A multi-scale physical modeling framework and simulator for 2D-material memristors, built as a Fudan Xiyuan undergraduate research project. It covers conductive-filament evolution, charge transport, Joule heating, and device-to-device variability, with numerical models and I–V simulation.",
      note: "The first time I really faced it: a model that fits the data hasn't necessarily explained the mechanism.",
      tags: ["Memristors", "Physical modeling", "Simulation"],
      link: "https://github.com/sjy0630/VULCAN-2D",
    },
    {
      title: "Causal Transformer",
      status: "Research · in progress",
      kind: "progress",
      desc: "Research on whether Transformer models can learn latent causal rules from offline data and make their own experimental decisions. I run experiments in PyTorch — data generation, training, evaluation — and have analyzed distribution shift that appears once the model acts in a closed loop.",
      note: "No conclusions yet — but it's teaching me to separate “the code runs”, “a metric moved”, and evidence I can actually trust.",
      tags: ["Causal inference", "Active experiment design", "PyTorch"],
      link: "",
    },
    {
      title: "Agentic4Systems Hackathon",
      status: "2026 · Third prize",
      kind: "award",
      desc: "A four-day agentic AI chip-design hackathon. On a team of three, I was responsible for the C model, the synthesis flow, and part of the RTL changes.",
      note: "More than the ranking: ISA semantics, reference model, RTL, and PPA aren't separate boxes — they're one chain that has to be kept in sync.",
      tags: ["C model", "RTL", "Synthesis", "PPA"],
      link: "",
    },
    {
      title: "WaveLength",
      status: "Startup project · semifinalist",
      kind: "progress",
      desc: "A campus platform for deeper one-on-one conversations. As a core member of the tech team I led software development. The project reached the semifinals of the 6th Xing·Quan Cup Social Enterprise Innovation Competition (2026).",
      tags: ["Product", "Full-stack"],
      link: "",
    },
  ],

  honors: [
    { year: "2026", title: "National Scholarship", detail: "" },
    { year: "2026", title: "Agentic4Systems Hackathon — Third Prize", detail: "Agentic AI for chip design" },
    { year: "2025", title: "Chinese Mathematics Competitions — Third Prize", detail: "Shanghai division, non-math majors (Category A)" },
  ],

  // Life outside technical work
  life: {
    text: "Away from the desk I do magic, play guitar, look at the night sky, and try to stay moving. None of it needs to produce anything — it's a reminder that life isn't a pipeline to keep optimizing.",
    items: ["🃏 Magic", "🎸 Guitar", "🔭 Astronomy", "🏊 Swimming", "🏀 Ball sports", "🧳 Short trips"],
  },

  // Contact / social links (empty ones are hidden)
  socials: {
    email: "",
    github: "https://github.com/sjy0630",
    bilibili: "",
    twitter: "",
  },
};
