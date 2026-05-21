import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

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
    <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28 text-center">
      <Reveal>
        <h2 className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          // contact
        </h2>
      </Reveal>
      <Reveal>
        <p className="mb-10 text-2xl font-semibold text-foreground">想聊聊？随时找我。</p>
      </Reveal>
      <Reveal>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border rounded-full px-6 py-2.5 font-mono text-sm text-foreground transition-all hover:-translate-y-0.5 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
