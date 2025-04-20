
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (visible) {
          const speed = section.getAttribute('data-speed') || '0.5';
          const yPos = -(rect.top * Number(speed));
          section.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Platform />
        <Services />
        <Benefits />
        <QuoteForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

