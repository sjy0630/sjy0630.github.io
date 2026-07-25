import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <h2 className="mb-12 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {"// projects"}
        </h2>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {site.projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <article className="group h-full rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.04]">
              <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-accent/80">
                {p.status}
              </p>
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              {p.note ? (
                <p className="mt-4 border-l border-accent/30 pl-4 text-sm leading-relaxed text-foreground/75">
                  {p.note}
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-accent/30 px-2.5 py-0.5 font-mono text-[11px] text-accent/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-mono text-xs text-accent transition-colors hover:text-accent2"
                >
                  查看项目 →
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
