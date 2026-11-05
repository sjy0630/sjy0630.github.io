import Section from "@/components/Section";

function getLinks(site) {
  const s = site.socials || {};
  const out = [];
  if (s.email) out.push({ label: s.email, href: `mailto:${s.email}` });
  if (s.github) out.push({ label: "GitHub", href: s.github });
  if (s.bilibili) out.push({ label: "Bilibili", href: s.bilibili });
  if (s.twitter) out.push({ label: "Twitter / X", href: s.twitter });
  return out;
}

export default function Contact({ site, index }) {
  const links = getLinks(site);
  return (
    <Section id="contact" index={index} title={site.ui.sections.contact}>
      {site.ui.contactTitle ? (
        <p className="mb-3 font-serif text-2xl leading-snug">{site.ui.contactTitle}</p>
      ) : null}
      <p className="leading-relaxed text-foreground/90">{site.ui.contactText}</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="rounded-md border border-line bg-surface px-4 py-2 transition-colors hover:border-accent/50 hover:text-accent"
          >
            {l.label} →
          </a>
        ))}
      </div>
    </Section>
  );
}
