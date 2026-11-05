import { site } from "@/content/site";
import Section from "@/components/Section";

export default function Now() {
  return (
    <Section id="now" title="Now" aside={`Updated ${site.nowUpdated}`}>
      <ul className="space-y-6">
        {site.now.map((item) => (
          <li key={item.title}>
            <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
            <h3 className="mt-1 font-medium">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
