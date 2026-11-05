
export default function Footer({ site }) {
  return (
    <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-8 text-xs text-muted">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <a href="#top" className="hover:text-foreground">{site.ui.backToTop}</a>
    </footer>
  );
}
