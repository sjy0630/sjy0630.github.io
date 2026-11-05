import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Life from "@/components/Life";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-6">
      <Nav />
      <main>
        <Hero />
        <About />
        <Now />
        <Projects />
        <Life />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
