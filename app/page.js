import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Now from "@/components/Now";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Life from "@/components/Life";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Now />
        <Projects />
        <Writing />
        <Life />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
