import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPost } from "@/lib/posts";

// 静态导出：只生成已知文章，未知路径直接 404
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? post.title : "Not found" };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-2xl px-6 py-28">
      <Link href="/#writing" className="font-mono text-xs text-accent hover:text-accent2">
        ← back
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-foreground">{post.title}</h1>
      <p className="mt-2 font-mono text-xs text-muted">{post.date}</p>
      <div className="md-body mt-10 text-foreground/85">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>
    </main>
  );
}
