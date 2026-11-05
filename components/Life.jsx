import Section from "@/components/Section";

// Simple 24px line icons, drawn to match the chip illustration.
const icons = {
  magic: (
    <>
      <rect x="4" y="5" width="10" height="14" rx="1.5" transform="rotate(-10 9 12)" />
      <rect x="10" y="5" width="10" height="14" rx="1.5" transform="rotate(8 15 12)" />
      <path d="M15 10.5l.9 1.6 1.7.4-1.2 1.3.2 1.8-1.6-.8-1.6.8.2-1.8-1.2-1.3 1.7-.4z" />
    </>
  ),
  guitar: (
    <>
      <path d="M14 10l6-6M18.5 3.5l2 2" />
      <path d="M13.5 10.5a3 3 0 00-4.2-.4c-.6.6-.8 1.3-1.6 1.6-1.4.5-3 .4-4 1.5-1.6 1.7-.9 4.9 1.3 7 2.2 2.1 5.3 2.8 7 1.2 1.1-1.1 1-2.7 1.5-4.1.3-.8 1-1 1.6-1.6a3 3 0 00.4-4.2z" />
      <circle cx="10.5" cy="15.5" r="1.3" />
    </>
  ),
  astronomy: (
    <>
      <path d="M4 14l11-6 2 4-11 6z" />
      <path d="M15 8l3-1.5 2 4-3 1.5M9 16.5L7 21M11 15.5l2 5.5" />
      <path d="M5 4.5v3M3.5 6h3" />
    </>
  ),
  swimming: (
    <>
      <path d="M2.5 17c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
      <path d="M2.5 20.5c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1" />
      <circle cx="17" cy="7" r="2" />
      <path d="M5 13l4.5-5 3 2.5L9 14" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5v17M6 6c2.2 1.6 3.3 3.6 3.3 6S8.2 16.4 6 18M18 6c-2.2 1.6-3.3 3.6-3.3 6s1.1 4.4 3.3 6" />
    </>
  ),
  travel: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
};

export default function Life({ site, index }) {
  if (!site.life?.items?.length) return null;
  return (
    <Section id="life" index={index} title={site.ui.sections.life}>
      {site.life.text ? <p className="mb-6 leading-relaxed text-foreground/90">{site.life.text}</p> : null}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {site.life.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0 text-accent"
            >
              {icons[item.icon]}
            </svg>
            <span className="text-sm">{item.label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
