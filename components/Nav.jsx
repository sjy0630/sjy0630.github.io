import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#now", label: "Now" },
  { href: "#projects", label: "Projects" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 -mx-5 flex bg-background/85 px-5 backdrop-blur sm:-mx-6 sm:px-6 border-b border-transparent items-center justify-between py-4 text-sm">
      <a href="#top" className="flex items-center gap-2 font-medium text-foreground">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground font-serif text-sm text-background">
          {site.name.split(" ").map((w) => w[0]).join("")}
        </span>
        <span className="hidden sm:inline">{site.handle}</span>
      </a>
      <nav>
        <ul className="flex gap-4 text-muted sm:gap-5">
          {links.map((l) => (
            <li key={l.href}>
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
