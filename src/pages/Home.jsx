import Nav from "../components/landing/Nav";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Expertise from "../components/landing/Expertise";
import Experience from "../components/landing/Experience";
import Projects from "../components/landing/Projects";
import Focus from "../components/landing/Focus";
import Manifesto from "../components/landing/Manifesto";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-ink)]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Focus />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
