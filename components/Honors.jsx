import Section from "@/components/Section";

export default function Honors({ site, index }) {
  if (!site.honors?.length) return null;
  return (
    <Section id="honors" index={index} title={site.ui.sections.honors}>
      <ul className="divide-y divide-line">
        {site.honors.map((h) => (
          <li key={h.title} className="grid grid-cols-[3.5rem_1fr] gap-3 py-3 first:pt-0">
            <span className="font-mono text-xs leading-6 text-muted">{h.year}</span>
            <div>
              <p className="font-medium">{h.title}</p>
              {h.detail ? <p className="text-sm text-muted">{h.detail}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
