import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#now", label: "Now", wide: true },
  { href: "#projects", label: "Projects" },
  { href: "#honors", label: "Honors", wide: true },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 -mx-5 flex bg-background/85 px-5 backdrop-blur sm:-mx-6 sm:px-6 border-b border-transparent items-center justify-between py-4 text-sm">
      <a href="#top" className="font-serif text-lg whitespace-nowrap text-foreground">
        {site.name}
      </a>
      <nav>
        <ul className="flex gap-4 text-muted sm:gap-5">
          {links.map((l) => (
            <li key={l.href} className={l.wide ? "hidden sm:block" : ""}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
