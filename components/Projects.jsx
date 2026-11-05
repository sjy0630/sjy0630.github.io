import Section from "@/components/Section";

const kindColor = {
  progress: "bg-warn",
  open: "bg-ok",
  award: "bg-award",
};

export default function Projects({ site, index }) {
  return (
    <Section id="projects" index={index} title={site.ui.sections.projects}>
      <ul className="space-y-5">
        {site.projects.map((p) => (
          <li
            key={p.title}
            className="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/40 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <h3 className="font-serif text-xl">
                {p.link ? (
                  <a href={p.link} className="link" target="_blank" rel="noopener noreferrer">
                    {p.title} ↗
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <span className={`h-1.5 w-1.5 rounded-full ${kindColor[p.kind] || "bg-muted"}`} />
                {p.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">{p.desc}</p>
            {p.note ? (
              <p className={`mt-4 border-l-2 border-accent/30 pl-4 text-[15px] leading-relaxed text-muted ${site.lang === "en" ? "font-serif italic" : ""}`}>
                {p.note}
              </p>
            ) : null}
            {p.tags?.length ? (
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
