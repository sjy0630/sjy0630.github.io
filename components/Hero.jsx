import { site } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-14 sm:pt-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
        <span lang="zh-CN" className="ml-3 text-2xl font-normal text-muted sm:text-3xl">
          {site.nameZh}
        </span>
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{site.intro}</p>
      {site.socials?.github ? (
        <p className="mt-6 text-sm">
          <a href={site.socials.github} className="link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      ) : null}
    </section>
  );
}
