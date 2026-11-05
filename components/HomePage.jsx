import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Honors from "@/components/Honors";
import Life from "@/components/Life";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getCvHref } from "@/lib/cv";

// The whole one-page site, rendered from a content object (English or Chinese).
export default function HomePage({ site }) {
  return (
    <div lang={site.lang} className="mx-auto max-w-3xl px-5 sm:px-6">
      <Nav site={site} />
      <main>
        <Hero site={site} cv={getCvHref()} />
        <About site={site} />
        <Now site={site} />
        <Projects site={site} />
        <Honors site={site} />
        <Life site={site} />
        <Writing site={site} />
        <Contact site={site} />
      </main>
      <Footer site={site} />
    </div>
  );
}
