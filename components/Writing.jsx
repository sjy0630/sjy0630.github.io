import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import Section from "@/components/Section";

// Only shown once there is at least one post in content/posts/.
export default function Writing() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;
  return (
    <Section id="writing" title="Notes">
      <ul className="space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/writing/${post.slug}`} className="group flex items-baseline justify-between gap-4">
              <span className="text-foreground group-hover:text-accent">{post.title}</span>
              <span className="shrink-0 font-mono text-xs text-muted">{post.date}</span>
            </Link>
            {post.summary ? <p className="mt-1 text-sm text-muted">{post.summary}</p> : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
