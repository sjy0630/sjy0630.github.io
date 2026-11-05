import { site } from "@/content/site";
import Section from "@/components/Section";

function getLinks() {
  const s = site.socials || {};
  const out = [];
  if (s.email) out.push({ label: "Email", href: `mailto:${s.email}` });
  if (s.github) out.push({ label: "GitHub", href: s.github });
  if (s.bilibili) out.push({ label: "Bilibili", href: s.bilibili });
  if (s.twitter) out.push({ label: "Twitter / X", href: s.twitter });
  return out;
}

export default function Contact() {
  const links = getLinks();
  return (
    <Section id="contact" title="Contact">
      <p className="leading-relaxed text-foreground/90">
        If you&apos;re also working on problems between AI, systems, and chips, I&apos;d be glad to hear
        from you.
      </p>
      <p className="mt-4 flex flex-wrap gap-5 text-sm">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="link" target="_blank" rel="noopener noreferrer">
            {l.label}
          </a>
        ))}
      </p>
    </Section>
  );
}
