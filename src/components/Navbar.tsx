
import { Link } from "react-scroll";
import { Button } from "./ui/button";

const Navbar = () => {
  const menuItems = [
    { name: "About", to: "about" },
    { name: "Platform", to: "platform" },
    { name: "Services", to: "services" },
    { name: "Why Choose Us", to: "benefits" },
    { name: "Get Quote", to: "quote" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-5xl font-bold text-blue-900">fulflit.</div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={() => window.open('https://core.fulflit.com/', '_blank')}
              className="bg-[#eec899] hover:bg-[#191919] text-[#191919] hover:text-[#eec899] px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Sign up Here!
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
