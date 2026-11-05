import { getAllPosts } from "@/lib/posts";

const BASE = "https://sjy0630.github.io";

export const dynamic = "force-static";

export default function sitemap() {
  const pages = [
    { url: `${BASE}/`, alternates: { languages: { "zh-CN": `${BASE}/zh/` } } },
    { url: `${BASE}/zh/`, alternates: { languages: { en: `${BASE}/` } } },
  ];
  const posts = getAllPosts().map((p) => ({
    url: `${BASE}/writing/${p.slug}/`,
    lastModified: p.date || undefined,
  }));
  return [...pages, ...posts];
}
