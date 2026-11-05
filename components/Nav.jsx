import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#now", label: "Now" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="flex items-center justify-between py-6 text-sm">
      <a href="#top" className="font-medium text-foreground">
        {site.handle}
      </a>
      <nav>
        <ul className="flex gap-5 text-muted">
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
