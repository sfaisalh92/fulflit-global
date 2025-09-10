
import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";

const Navbar = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const menuItems = [
    { name: "About", to: "about" },
    { name: "Platform", to: "platform" },
    { name: "Services", to: "services" },
    { name: "Why Choose Us", to: "benefits" },
  ];

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      window.open(`https://core.fulflit.com/tracking?tracking_number=${trackingNumber.trim()}`, '_blank');
      setTrackingNumber("");
      setIsDialogOpen(false);
    }
  };

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
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline"
                  className="border-black text-black bg-transparent hover:bg-black hover:text-white px-4 py-2 rounded-lg transition-all"
                >
                  Track Order
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center">Track Your Order</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleTrackingSubmit} className="space-y-4">
                  <div className="flex flex-col items-center space-y-4">
                    <Input
                      type="text"
                      placeholder="Please enter your tracking number"
                      value={trackingNumber}
                      onChange={(e) => setTrackingNumber(e.target.value)}
                      className="w-full text-center"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-[#eec899] hover:bg-[#191919] text-[#191919] hover:text-[#eec899] px-6 py-2"
                    >
                      Track Now
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            
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
