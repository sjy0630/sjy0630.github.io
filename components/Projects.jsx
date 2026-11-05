import { site } from "@/content/site";
import Section from "@/components/Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-10">
        {site.projects.map((p) => (
          <li key={p.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium">
                {p.link ? (
                  <a href={p.link} className="link" target="_blank" rel="noopener noreferrer">
                    {p.title} ↗
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <span className="text-xs text-muted">{p.status}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{p.desc}</p>
            {p.tags?.length ? (
              <p className="mt-2 font-mono text-xs text-muted">{p.tags.join(" · ")}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
