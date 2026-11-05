import Section from "@/components/Section";

export default function Now({ site }) {
  return (
    <Section id="now" index="02" title={site.ui.sections.now} aside={`${site.ui.updated} ${site.nowUpdated}`}>
      <ol className="relative space-y-8 border-l border-line pl-6">
        {site.now.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
            <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{item.label}</p>
            <h3 className="mt-1 font-medium">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
