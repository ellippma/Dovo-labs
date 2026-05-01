import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Consulting from '../components/Consulting';
import Book from '../components/Book';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="app-shell">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Consulting />
      <Book />
      <Footer />
    </div>
  );
}
