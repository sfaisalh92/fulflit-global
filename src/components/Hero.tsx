
import { Button } from "./ui/button";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
            Simplify Your Global Logistics Operations
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your cross-border warehousing and logistics with our intelligent management platform
          </p>
          <Link to="quote" spy={true} smooth={true} offset={-64} duration={500}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
