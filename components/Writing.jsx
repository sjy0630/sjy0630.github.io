import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Reveal from "@/components/Reveal";

export default function Writing() {
  const posts = getAllPosts();
  return (
    <section id="writing" className="mx-auto max-w-3xl scroll-mt-24 px-6 py-28">
      <Reveal>
        <h2 className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-accent">
          // writing &amp; 成果
        </h2>
      </Reveal>
      <Reveal>
        <p className="mb-12 text-sm text-muted">
          想发新内容？往 <code className="text-accent">content/posts/</code> 丢个 .md 文件就行。
        </p>
      </Reveal>

      {posts.length === 0 ? (
        <p className="text-muted">还没有内容，敬请期待。</p>
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
