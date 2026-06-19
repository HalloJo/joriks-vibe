import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Brands from './components/Brands';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Brands />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
