import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-8 text-xs text-muted">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <a href="#top" className="hover:text-foreground">Back to top ↑</a>
    </footer>
  );
}
