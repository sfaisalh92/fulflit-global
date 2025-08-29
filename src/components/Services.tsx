import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Inbound Logistics",
    description:
      "We handle the coordination, receipt, and transportation of your goods into your storage facilities or production plants, ensuring timely and accurate deliveries every step of the way.",
    icon: (
      <img 
        src="/lovable-uploads/9a176d12-31ca-4d9e-8ce3-932daefaed34.png" 
        alt="Inbound Logistics" 
        className="w-12 h-12 mb-4 transition-all group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Outbound Logistics",
    description:
      "From order picking to final mile delivery, we ensure your products reach customers efficiently, safely and with optimized routes for speed and cost.",
    icon: (
      <img 
        src="/lovable-uploads/fe2a8807-cefa-41a7-b0bf-b4b7c2dbe07a.png" 
        alt="Outbound Logistics" 
        className="w-12 h-12 mb-4 transition-all group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Warehousing and Order Fulfillment",
    description:
      "Store products in secure, modern facilities and let us handle picking, packing, and order shipping with end-to-end tracking.",
    icon: (
      <img 
        src="/lovable-uploads/69f3de4a-7009-469e-86f2-93f00eddf90f.png" 
        alt="Warehousing and Order Fulfillment" 
        className="w-12 h-12 mb-4 transition-all group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
  {
    title: "Cross Border Logistics",
    description:
      "Simplify global shipping: we manage customs, paperwork, and international transport for seamless cross-border fulfillment.",
    icon: (
      <img 
        src="/lovable-uploads/be4ea4fb-b861-4b4b-9ffe-42149a56bdcb.png" 
        alt="Cross Border Logistics" 
        className="w-12 h-12 mb-4 transition-all group-hover:brightness-0 group-hover:invert"
      />
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white pt-24 pb-16" data-speed="0.2">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div className="max-w-sm text-gray-700 text-md md:text-lg md:mr-8">
            You give us the task and the desired result, and we will come up with the best logistics scheme for fast and safe delivery.
          </div>
          <div className="relative flex-1 flex flex-col md:items-end">
            <h2 className="font-bold text-3xl md:text-5xl text-[#191919] mb-3 leading-tight text-left md:text-right pr-0 md:pr-8">
              Find the most profitable<br />way of delivery
            </h2>
          </div>
        </div>
        {/* Divider */}
        <div className="border-b border-gray-200 mb-6"></div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={[
                "relative group flex flex-col items-start border transition-all duration-200",
                "rounded-2xl bg-white px-7 py-8 h-full min-h-[340px] cursor-pointer",
                "hover:bg-[#eec899] hover:border-[#eec899] hover:shadow-lg hover:-translate-y-2",
                "will-change-transform",
              ].join(" ")}
              style={{ color: "#191919" }}
            >
              <div className="absolute top-7 right-7">
                <button
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "bg-[#191919] text-white transition",
                    "w-7 h-7"
                  ].join(" ")}
                  tabIndex={-1}
                  type="button"
                  aria-label="Arrow"
                >
                  <ArrowRight
                    className="transition"
                    strokeWidth={2}
                    color="white"
                  />
                </button>
              </div>
              <div>
                <div className="mb-5">
                  {service.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 group-hover:text-[#191919]">{service.title}</h3>
                <p className="text-base opacity-80 group-hover:text-[#191919]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
