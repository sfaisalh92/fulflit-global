
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000")',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#191919]/70" />

      {/* Content */}
      <div className="relative pt-32 pb-20 px-4 md:px-8 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your end-to-end supply chain, all in one platform
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              CargoGlide is the platform that coordinates global logistics from factory
              to customer door — empowering businesses to ship anywhere, sell
              everywhere and grow faster.
            </p>
            <Link to="quote" spy={true} smooth={true} offset={-64} duration={500}>
              <Button 
                className="bg-[#eec899] hover:bg-[#191919] text-[#191919] hover:text-[#eec899] font-semibold px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
