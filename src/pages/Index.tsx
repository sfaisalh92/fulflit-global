
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Platform />
      <Services />
      <Benefits />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
