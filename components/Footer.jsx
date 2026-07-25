import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-center font-mono text-xs text-muted">
      <p>
        © {new Date().getFullYear()} {site.name} · built with Next.js
      </p>
      <p className="mt-2 opacity-70">
        慢慢建立，诚实记录。右下角仍留着一个小小的 <span className="text-accent">{">_"}</span>。
      </p>
    </footer>
  );
}
