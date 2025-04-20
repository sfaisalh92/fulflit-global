
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-[#eec899]/10 to-white relative" data-speed="0.3">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#191919] mb-6 transition-transform">
            Simplify Your Global Logistics Operations
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your cross-border warehousing and logistics with our intelligent management platform
          </p>
          <Link to="quote" spy={true} smooth={true} offset={-64} duration={500}>
            <Button className="bg-[#eec899] hover:bg-[#e5b880] text-[#191919] font-semibold px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

