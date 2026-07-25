import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Reveal from "@/components/Reveal";

export default function Writing() {
  const posts = getAllPosts();
  return (
    <section id="writing" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <h2 className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          {"// notes"}
        </h2>
      </Reveal>
      <Reveal>
        <p className="mb-12 text-sm text-muted">
          技术学习、项目复盘，也包括一些方向变化和生活里的问题。
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <Reveal>
          <div className="rounded-xl border border-dashed border-white/10 px-6 py-8 text-sm leading-relaxed text-muted">
            这里暂时还是空的。我想等一篇文字真正值得留下时，再从这里开始。
          </div>
        </Reveal>
      ) : (
        <ul className="divide-y divide-white/10">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li className="py-5">
                <Link
                  href={`/writing/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4"
                >
                  <span className="text-lg text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted">{post.date}</span>
                </Link>
                {post.summary ? <p className="mt-1 text-sm text-muted">{post.summary}</p> : null}
              </li>
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}
