export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sjy0630.github.io/sitemap.xml",
  };
}
