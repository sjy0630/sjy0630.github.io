import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#now", label: "Now" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Notes" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-background/40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="glow font-mono text-sm font-bold tracking-widest text-accent">
          {site.nameEn}
        </a>
        <ul className="hidden gap-7 font-mono text-xs text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
