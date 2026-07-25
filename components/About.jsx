import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {"// about"}
        </h2>
      </Reveal>
      <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
        {site.about.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
