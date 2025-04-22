
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

const benefits = [
  {
    title: "Global Reach with Local Expertise",
    description:
      "Our logistics network spans worldwide, with teams on the ground to ensure smooth, locally optimized operations wherever you need to ship.",
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "We develop flexible, scalable logistics plans to minimize your costs and maximize efficiency, tailored to your unique business needs.",
  },
  {
    title: "Real-Time Tracking & Visibility",
    description:
      "Track your shipments, inventory, and fulfillment in real-time with clear, actionable data and proactive notifications at every step.",
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Our customer service experts are always available to answer your questions and support your business, 24/7.",
  },
  {
    title: "Customizable Solutions",
    description:
      "No two businesses are the same. We customize every aspect of your logistics and supply chain for ideal performance.",
  },
  {
    title: "Fast Delivery Times",
    description:
      "We optimize every mile for speed—so your products reach their destination as quickly and reliably as possible.",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-20 bg-white text-[#191919] relative"
      data-speed="0.2"
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#eec899]">
          Why Choose Us?
        </h2>
        <Accordion type="single" collapsible className="w-full border-none shadow-none">
          {benefits.map((benefit, idx) => (
            <AccordionItem
              key={idx}
              value={`benefit-${idx}`}
              className="border-b border-[#e5e5e5] last:border-b-0"
            >
              <AccordionTrigger
                className="text-left !no-underline flex items-center px-0 py-6 md:py-8 font-bold text-2xl [&[data-state=open]]:text-[#eec899] hover:text-[#eec899] transition-colors duration-200"
                style={{ boxShadow: "none", margin: 0, background: "transparent" }}
              >
                {benefit.title}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#191919] pb-8 pt-0 pr-0 pl-0">
                {benefit.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Benefits;

