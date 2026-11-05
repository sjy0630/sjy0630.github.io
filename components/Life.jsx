import { site } from "@/content/site";
import Section from "@/components/Section";

export default function Life() {
  if (!site.life) return null;
  return (
    <Section id="life" index="05" title="Elsewhere">
      <p className="leading-relaxed text-foreground/90">{site.life.text}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {site.life.items.map((t) => (
          <li key={t} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
            {t}
          </li>
        ))}
      </ul>
    </Section>
  );
}
