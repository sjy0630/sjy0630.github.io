import { site } from "@/content/site";
import ChipMark from "@/components/ChipMark";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-14 pb-16 sm:pt-20 sm:pb-20">
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 sm:-inset-x-6" />
      <ChipMark className="pointer-events-none absolute top-10 right-0 hidden w-56 text-accent opacity-25 md:block" />

      <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
        <span className="pulse h-1.5 w-1.5 rounded-full bg-ok" />
        {site.currently}
      </p>

      <h1 className="rise mt-7 font-serif text-5xl tracking-tight sm:text-6xl" style={{ animationDelay: "80ms" }}>
        {site.name}
        <span lang="zh-CN" className="ml-3 font-sans text-2xl font-light text-muted sm:text-3xl">
          {site.nameZh}
        </span>
      </h1>

      <p className="rise mt-5 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "160ms" }}>
        {site.intro}
      </p>

      <p className="rise mt-4 font-mono text-xs text-muted" style={{ animationDelay: "200ms" }}>
        {site.affiliation} · {site.location}
      </p>

      <ul className="rise mt-6 flex max-w-xl flex-wrap gap-2" style={{ animationDelay: "240ms" }}>
        {site.interests.map((t) => (
          <li key={t} className="rounded-md bg-accent/10 px-2.5 py-1 text-xs text-accent">
            {t}
          </li>
        ))}
      </ul>

      <div className="rise mt-8 flex flex-wrap gap-3 text-sm" style={{ animationDelay: "320ms" }}>
        {site.socials?.github ? (
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-background transition-opacity hover:opacity-85"
          >
            <GitHubIcon /> GitHub
          </a>
        ) : null}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-4 py-2 text-foreground transition-colors hover:border-accent/50"
        >
          See projects ↓
        </a>
      </div>
    </section>
  );
}
