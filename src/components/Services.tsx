
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Inbound Logistics",
    description:
      "We handle the coordination, receipt, and transportation of your goods into your storage facilities or production plants, ensuring timely and accurate deliveries every step of the way.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <rect x="1" y="15" width="40" height="23" rx="3" stroke="#eec899" strokeWidth="2" />
        <rect x="12" y="1" width="23" height="18" rx="2" stroke="#eec899" strokeWidth="2" />
        <rect x="20" y="25" width="6" height="6" rx="2" stroke="#eec899" strokeWidth="2" />
        <line x1="5" y1="38" x2="37" y2="38" stroke="#eec899" strokeWidth="1.5" />
        <circle cx="10" cy="40" r="3" stroke="#eec899" strokeWidth="2" />
        <circle cx="32" cy="40" r="3" stroke="#eec899" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Outbound Logistics",
    description:
      "From order picking to final mile delivery, we ensure your products reach customers efficiently, safely and with optimized routes for speed and cost.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <rect x="8" y="13" width="40" height="23" rx="4" stroke="#eec899" strokeWidth="2" />
        <rect x="17" y="4" width="23" height="18" rx="3" stroke="#eec899" strokeWidth="2" />
        <rect x="26" y="21" width="7" height="11" rx="2" stroke="#eec899" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Warehousing and Order Fulfillment",
    description:
      "Store products in secure, modern facilities and let us handle picking, packing, and order shipping with end-to-end tracking.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <path d="M33 42C33 35.9249 40.9518 32.4931 41 23C41.0296 17.5526 34.8767 8.75958 30.6046 9.00661C25.3553 9.29684 23.0055 17.3662 23 22.5C22.9946 27.6338 32 31 32 42" stroke="#eec899" strokeWidth="2" />
        <circle cx="32" cy="22" r="4" stroke="#eec899" strokeWidth="2" />
        <line x1="32" y1="3" x2="32" y2="7" stroke="#eec899" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Cross Border Logistics",
    description:
      "Simplify global shipping: we manage customs, paperwork, and international transport for seamless cross-border fulfillment.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <rect x="18" y="8" width="29" height="18" rx="2" stroke="#191919" strokeWidth="2" />
        <rect x="1.5" y="16.5" width="29" height="18" rx="2.5" stroke="#191919" strokeWidth="2" />
        <path d="M32.5 26L46.5 39" stroke="#191919" strokeWidth="2"/>
        <path d="M47.5 8.5L60.5 21.5" stroke="#191919" strokeWidth="2"/>
      </svg>
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
            <h2 className="font-bold text-3xl md:text-5xl text-[#191919] mb-3 leading-tight text-right md:text-right">
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
                "hover:bg-[#eec899] hover:border-[#eec899] hover:shadow-lg",
              ].join(" ")}
              style={{ color: "#191919" }}
            >
              <div className="absolute top-7 right-7">
                <button
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "bg-[#191919] text-white transition",
                    "w-7 h-7",
                  ].join(" ")}
                >
                  <ArrowRight
                    className="transition"
                    strokeWidth={2}
                    color="white"
                  />
                </button>
              </div>
              <div>
                <div className="mb-5" style={{ color: "#eec899" }}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3">
                  {service.title}
                </h3>
                <p className="text-base opacity-80">
                  {service.description}
                </p>
              </div>
              {/* Hover effects */}
              <style dangerouslySetInnerHTML={{ __html: `
                .group:hover .text-white svg {
                  color: #eec899 !important;
                }
                .group:hover h3,
                .group:hover p {
                  color: #191919 !important;
                }
                .group:hover button {
                  background: #191919 !important;
                }
              `}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
