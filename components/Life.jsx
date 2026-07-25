import { site } from "@/content/site";
import Reveal from "@/components/Reveal";

export default function Life() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
          <p className="font-mono text-xs tracking-[0.25em] text-accent/80">
            ELSEWHERE IN LIFE
          </p>
          <h2 className="mt-5 text-2xl font-semibold text-foreground">{site.life.title}</h2>
          <p className="mt-4 text-base leading-8 text-foreground/75">{site.life.body}</p>
        </div>
      </Reveal>
    </section>
  );
}
