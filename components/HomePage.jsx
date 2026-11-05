import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Honors from "@/components/Honors";
import Life from "@/components/Life";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getCvHref } from "@/lib/cv";
import { getAllPosts } from "@/lib/posts";

// The whole one-page site, rendered from a content object (English or Chinese).
// Sections that have nothing to show are skipped and the numbering closes up.
export default function HomePage({ site }) {
  const hasPosts = getAllPosts().length > 0;
  const sections = [
    ["about", About, true],
    ["now", Now, site.now?.length > 0],
    ["projects", Projects, site.projects?.length > 0],
    ["writing", Writing, hasPosts],
    ["honors", Honors, site.honors?.length > 0],
    ["life", Life, site.life?.items?.length > 0],
    ["contact", Contact, true],
  ].filter(([, , show]) => show);

  return (
    <div lang={site.lang} className="mx-auto max-w-3xl px-5 sm:px-6">
      <Nav site={site} hasPosts={hasPosts} />
      <main>
        <Hero site={site} cv={getCvHref()} />
        {sections.map(([key, Component], i) => (
          <Component key={key} site={site} index={String(i + 1).padStart(2, "0")} />
        ))}
      </main>
      <Footer site={site} />
    </div>
  );
}
