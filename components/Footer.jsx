import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center font-mono text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {site.name} · built with Next.js
      </p>
      <p className="mt-2 opacity-70">
        提示：右下角有个 <span className="text-accent">{">_"}</span>，点开试试 🙂
      </p>
    </footer>
  );
}
