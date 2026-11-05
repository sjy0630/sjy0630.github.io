import { site } from "@/content/site";
import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 leading-relaxed text-foreground/90">
        {site.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
