import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/content/site";
import { siteZh } from "@/content/site.zh";

export const dynamicParams = false;

// Static export refuses an empty list, so until the first post exists we emit
// one placeholder path that just renders the 404 page.
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_" }];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const author = post.lang === "zh-CN" ? siteZh.name : site.name;
  return {
    title: `${post.title} · ${author}`,
    description: post.summary || undefined,
    alternates: { canonical: `/writing/${slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary || undefined,
      url: `/writing/${slug}/`,
      publishedTime: post.date || undefined,
    },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const s = post.lang === "zh-CN" ? siteZh : site;
  const home = post.lang === "zh-CN" ? "/zh/" : "/";

  return (
    <div lang={post.lang} className="mx-auto max-w-2xl px-5 sm:px-6">
      <header className="flex items-center justify-between py-6 text-sm">
        <Link href={home} className="font-serif text-lg text-foreground">
          {s.name}
        </Link>
        <Link href={`${home}#writing`} className="text-muted transition-colors hover:text-foreground">
          ← {s.ui.sections.notes}
        </Link>
      </header>

      <article className="pt-10 pb-20 sm:pt-16">
        {post.date ? <p className="font-mono text-xs text-muted">{post.date}</p> : null}
        <h1 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{post.title}</h1>
        {post.summary ? <p className="mt-4 text-lg leading-relaxed text-muted">{post.summary}</p> : null}
        <div className="md-body mt-10 border-t border-line pt-8 leading-relaxed text-foreground/90">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>

      <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-8 text-xs text-muted">
        <span>© {new Date().getFullYear()} {s.name}</span>
        <Link href={home} className="hover:text-foreground">
          {s.ui.backHome}
        </Link>
      </footer>
    </div>
  );
}
