import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

// YAML turns `date: 2026-11-05` into a Date object; normalise to YYYY-MM-DD.
function formatDate(d) {
  if (!d) return "";
  if (d instanceof Date) return d.toISOString().slice(0, 10);
  return String(d);
}

// 读取 content/posts 下所有 .md 文章（跳过 draft: true），按日期倒序
export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      date: formatDate(data.date),
      summary: data.summary || "",
      // Language: set `lang: en` or `lang: zh` in the front matter, otherwise
      // guessed from whether the post contains Chinese characters.
      lang: data.lang ? (String(data.lang).startsWith("zh") ? "zh-CN" : "en") : /[\u4e00-\u9fff]/.test(content) ? "zh-CN" : "en",
      draft: Boolean(data.draft),
      content,
    };
  });
  return posts.filter((p) => !p.draft).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  return getAllPosts().find((p) => p.slug === slug) || null;
}
