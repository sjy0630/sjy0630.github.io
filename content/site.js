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
    "Undergraduate in Integrated Circuits at Fudan University, working somewhere between code, models, and hardware.",

  about: [
    "I study at the School of Integrated Circuits and Micro-Nano Electronics, Fudan University. Chips were what drew me in first. Over time I've become more interested in how algorithms turn into real computation, what system constraints limit a model's capabilities, and how to tell whether a result that looks good is actually trustworthy.",
    "Over the past year I've worked on spiking neural networks, memristor modeling, AI chip development, and Transformer agents in causal environments. Some of these directions excited me; others taught me that finishing a project and understanding it are not the same thing.",
    "This site isn't a finished résumé. It's a place to keep the parts of the process that stuck: a piece of code, an experiment, a question I didn't let myself gloss over.",
    "Outside of technical work, I enjoy astronomy, swimming, ball sports, and short trips.",
  ],

  // What I'm focused on right now
  nowUpdated: "2026",
  now: [
    {
      label: "Research",
      title: "Transformer agents in causal environments",
      desc: "Working on data generation, experiment protocols, and engineering validation — learning how to move from “the code runs” to evidence that holds up.",
    },
    {
      label: "Modeling",
      title: "VULCAN-2D",
      desc: "Continuing to test a physics-inspired model of 2D-material memristors, so its assumptions can be supported or refuted by experimental data.",
    },
    {
      label: "Foundations",
      title: "Digital logic, probability & statistics, mathematical modeling",
      desc: "Building the fundamentals that will keep paying off across AI, systems, and chip research.",
    },
  ],

  projects: [
    {
      title: "CausalTransformer",
      status: "Research · in progress",
      desc: "An ongoing research project on how Transformer agents learn in causal environments, and where their capabilities break down. I mainly contribute to data generation, experiment protocols, and engineering validation.",
      tags: ["Causal learning", "Transformer agents"],
      link: "",
    },
    {
      title: "VULCAN-2D",
      status: "Modeling · open source",
      desc: "A physics-inspired simulator for 2D-material memristors. I worked on model integration, I–V simulation, variability analysis, and auditing the physical evidence behind the model.",
      tags: ["Memristors", "Physical modeling", "Simulation"],
      link: "https://github.com/sjy0630/VULCAN-2D",
    },
    {
      title: "Agentic4Systems",
      status: "Hackathon · 4th place",
      desc: "A four-day Agentic AI chip hackathon. I was responsible for the C model, the synthesis flow, and part of the RTL changes; our three-person team placed fourth (third prize). It was the first time I saw how ISA semantics, reference models, RTL, and PPA form one chain that has to be kept in sync.",
      tags: ["C model", "RTL", "PPA"],
      link: "",
    },
  ],

  // Contact / social links (empty ones are hidden)
  socials: {
    email: "",
    github: "https://github.com/sjy0630",
    bilibili: "",
    twitter: "",
  },
};
