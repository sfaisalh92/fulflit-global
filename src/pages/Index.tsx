
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
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        } else {
          section.style.opacity = '0';
          section.style.transform = 'translateY(50px)';
        }
      });
    };

    // Initial check for elements in view
    handleScroll();
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
