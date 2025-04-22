
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const benefits = [
  {
    title: "Global Reach with Local Expertise",
    description: "Our logistics network spans worldwide, with teams on the ground to ensure smooth, locally optimized operations wherever you need to ship.",
    image: "/lovable-uploads/2ceb0cf4-de0e-4bff-9668-58c0755ea7fa.png"
  },
  {
    title: "Cost-Effective Solutions",
    description: "We develop flexible, scalable logistics plans to minimize your costs and maximize efficiency, tailored to your unique business needs.",
    image: "/lovable-uploads/2ceb0cf4-de0e-4bff-9668-58c0755ea7fa.png"
  },
  {
    title: "Real-Time Tracking & Visibility",
    description: "Track your shipments, inventory, and fulfillment in real-time with clear, actionable data and proactive notifications at every step.",
    image: "/lovable-uploads/2ceb0cf4-de0e-4bff-9668-58c0755ea7fa.png"
  },
  {
    title: "Dedicated Customer Support",
    description: "Our customer service experts are always available to answer your questions and support your business, 24/7.",
    image: "/lovable-uploads/2ceb0cf4-de0e-4bff-9668-58c0755ea7fa.png"
  },
  {
    title: "Customizable Solutions",
    description: "No two businesses are the same. We customize every aspect of your logistics and supply chain for ideal performance.",
    image: "/lovable-uploads/2ceb0cf4-de0e-4bff-9668-58c0755ea7fa.png"
  },
  {
    title: "Fast Delivery Times",
    description: "We optimize every mile for speed—so your products reach their destination as quickly and reliably as possible.",
    image: "/lovable-uploads/2ceb0cf4-de0e-4bff-9668-58c0755ea7fa.png"
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white relative" data-speed="0.2">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16">
          Finally, first-class delivery.
        </h2>
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {benefits.map((benefit, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                <div className="relative group overflow-hidden rounded-2xl">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-4xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-white/90">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-16" />
          <CarouselNext className="hidden md:flex -right-16" />
        </Carousel>
      </div>
    </section>
  );
};

export default Benefits;
