
const sections = [
  { id: "about", key: "about", narrow: true },
  { id: "now", key: "now", wide: true },
  { id: "projects", key: "projects" },
  { id: "honors", key: "honors", wide: true },
  { id: "contact", key: "contact" },
];

export default function Nav({ site }) {
  return (
    <header className="sticky top-0 z-20 -mx-5 flex bg-background/85 px-5 backdrop-blur sm:-mx-6 sm:px-6 border-b border-transparent items-center justify-between py-4 text-sm">
      <a href={site.ui.homeHref} className="mr-3 font-serif text-lg whitespace-nowrap text-foreground">
        {site.name}
      </a>
      <nav>
        <ul className="flex items-center gap-3 text-muted sm:gap-5">
          {sections.map((l) => (
            <li key={l.id} className={l.wide ? "hidden sm:block" : l.narrow ? "hidden min-[360px]:block" : ""}>
              <a href={`#${l.id}`} className="transition-colors hover:text-foreground">
                {site.ui.sections[l.key]}
              </a>
            </li>
          ))}
          <li>
            <a
              href={site.ui.switchHref}
              lang={site.ui.switchLang}
              className="rounded border border-line whitespace-nowrap px-1.5 py-0.5 text-xs transition-colors hover:border-accent/50 hover:text-foreground"
            >
              {site.ui.switchLabel}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
