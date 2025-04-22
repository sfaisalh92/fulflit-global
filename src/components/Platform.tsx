import { Card } from "./ui/card";
import { Monitor, Workflow, BarChart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const platformFeatures = [
  {
    title: "Real-time Tracking",
    description: "Monitor your shipments and inventory in real-time",
    icon: <Monitor className="mr-2 h-5 w-5" />,
  },
  {
    title: "Automated Workflows",
    description: "Streamline operations with intelligent automation",
    icon: <Workflow className="mr-2 h-5 w-5" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Data-driven insights for better decision making",
    icon: <BarChart className="mr-2 h-5 w-5" />,
  },
];

const platformImages = [
  "/lovable-uploads/9c55adf8-280f-4506-8710-c70e136d9d83.png",
  "/lovable-uploads/334b8dbf-fc01-4287-97ab-83b92e440a80.png",
  "/lovable-uploads/7ff5c02e-b1e2-499b-955e-e371612d2f05.png"
];

const Platform = () => {
  return (
    <section id="platform" className="py-20 bg-gray-50 relative" data-speed="0.15">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              {platformFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="transition-colors p-6 group hover:bg-[#191919] hover:text-[#eec899] cursor-pointer"
                >
                  <h3 className="font-bold text-xl mb-3 flex items-center group-hover:text-[#eec899] transition-colors">
                    {feature.icon}
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-[#eec899] transition-colors">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Carousel className="w-full">
                <CarouselContent>
                  {platformImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[16/9] relative">
                        <img
                          src={image}
                          alt={`Platform Screenshot ${index + 1}`}
                          className="absolute inset-0 w-full h-full object-contain bg-white"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
