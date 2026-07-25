import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function Now() {
  return (
    <section id="now" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-accent">
            {"// now"}
          </h2>
          <p className="text-sm text-muted">2026 · 这个阶段正在关心的事</p>
        </div>
      </Reveal>

      <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
        {site.now.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <article className="h-full bg-background/95 p-6">
              <p className="font-mono text-[10px] tracking-[0.22em] text-accent/80">
                {item.label}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
