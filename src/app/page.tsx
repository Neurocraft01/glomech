import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Milestones from '@/components/Milestones';
import Facilities from '@/components/Facilities';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <div id="about">
        <Products />
      </div>
      <Milestones />
      <Facilities />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
