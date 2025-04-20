
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Global Reach with Local Expertise",
    "Cost-Effective Solutions",
    "Real-Time Tracking & Visibility",
    "Dedicated Customer Support",
    "Customizable Solutions",
    "Fast Delivery Times",
  ];

  return (
    <section id="benefits" className="py-20 bg-[#191919] text-white relative" data-speed="0.2">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#eec899]">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-[#eec899] flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

