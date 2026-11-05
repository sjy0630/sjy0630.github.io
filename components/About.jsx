import { site } from "@/content/site";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="space-y-4 leading-relaxed text-foreground/90">
        {site.about.map((p, i) => (
          <p key={i} className={i === 0 ? "text-lg" : ""}>
            {p}
          </p>
        ))}
      </div>
      {site.toolkit?.length ? (
        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-xs text-muted">Toolkit</span>
          {site.toolkit.map((t) => (
            <span key={t} className="rounded border border-line bg-surface px-2 py-0.5 font-mono text-xs">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
