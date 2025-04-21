
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Truck transport networks in Krasnoyarsk",
    description:
      "We take on the task of providing a quality of the first and the last mile. We know the requirements of warehouses and are ready to fulfill them. We work with the approach, manage risks and minimize the likelihood of being late.",
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
    color: "#eec899",
    isActive: false,
  },
  {
    title: "3PL solutions to Siberia",
    description:
      "We build a chain to meet the needs of your business and cargo. We will pick up or accept the goods at our warehouse in Moscow, deliver them to Krasnoyarsk and Irkutsk, prepare them for delivery to warehouses or retail outlets and deliver them to your door.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <rect x="8" y="13" width="40" height="23" rx="4" stroke="#eec899" strokeWidth="2" />
        <rect x="17" y="4" width="23" height="18" rx="3" stroke="#eec899" strokeWidth="2" />
        <rect x="26" y="21" width="7" height="11" rx="2" stroke="#eec899" strokeWidth="2" />
      </svg>
    ),
    color: "#eec899",
    isActive: false,
  },
  {
    title: "Import to Moscow and Siberia",
    description:
      "We will build an optimal and profitable route for the transportation of cargo in a container through land border crossings and ports. We will provide warehouses for the distribution center function in Moscow and Krasnoyarsk. We will stabilize the chain with our assets - containers, cars, warehouses and terminals.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <path d="M33 42C33 35.9249 40.9518 32.4931 41 23C41.0296 17.5526 34.8767 8.75958 30.6046 9.00661C25.3553 9.29684 23.0055 17.3662 23 22.5C22.9946 27.6338 32 31 32 42" stroke="#eec899" strokeWidth="2" />
        <circle cx="32" cy="22" r="4" stroke="#eec899" strokeWidth="2" />
        <line x1="32" y1="3" x2="32" y2="7" stroke="#eec899" strokeWidth="2" />
      </svg>
    ),
    color: "#eec899",
    isActive: false,
  },
  {
    title: "International forwarding",
    description:
      "We will take care of international delivery at all stages: we will prepare transport documents, clear the goods at customs, deliver or send on time. Logistics with China and 11 countries of Southeast Asia has been worked out, we also provide other directions.",
    icon: (
      <svg width={62} height={46} viewBox="0 0 62 46" fill="none" className="mb-4">
        <rect x="18" y="8" width="29" height="18" rx="2" stroke="#191919" strokeWidth="2" />
        <rect x="1.5" y="16.5" width="29" height="18" rx="2.5" stroke="#191919" strokeWidth="2" />
        <path d="M32.5 26L46.5 39" stroke="#191919" strokeWidth="2"/>
        <path d="M47.5 8.5L60.5 21.5" stroke="#191919" strokeWidth="2"/>
      </svg>
    ),
    color: "#191919",
    isActive: true,
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
            <button className="inline-flex items-center gap-2 bg-[#eec899] hover:bg-[#e5b880] text-[#191919] font-semibold px-6 py-3 rounded-lg shadow transition mt-2 mb-3">
              All Solutions <ArrowRight className="h-5 w-5" />
            </button>
            <div className="flex justify-end mt-4 gap-3">
              <button className="w-9 h-9 rounded-full bg-[#191919] hover:bg-[#191919]/80 flex items-center justify-center text-white transition">
                <ArrowRight className="rotate-180" />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#191919] hover:bg-[#191919]/80 flex items-center justify-center text-white transition">
                <ArrowRight />
              </button>
            </div>
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
                "rounded-2xl bg-white px-7 py-8 h-full min-h-[340px]",
                service.isActive
                  ? "bg-[#eec899] text-[#191919] border-[#eec899] shadow-lg"
                  : "hover:border-[#eec899]/60",
              ].join(" ")}
              style={service.isActive ? { color: "#191919" } : { color: "#191919" }}
            >
              <div className="absolute top-7 right-7">
                <button
                  className={[
                    "inline-flex items-center justify-center rounded-full",
                    "bg-[#191919] hover:bg-[#191919]/80 text-white transition",
                    "w-7 h-7",
                  ].join(" ")}
                >
                  <ArrowRight
                    className={service.isActive ? "text-[#eec899]" : "text-[#191919]"}
                    strokeWidth={2}
                  />
                </button>
              </div>
              <div>
                <div
                  className={
                    service.isActive
                      ? "mb-5"
                      : "mb-5"
                  }
                  style={
                    service.isActive
                      ? { color: "#191919" }
                      : { color: "#eec899" }
                  }
                >
                  {service.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3" style={service.isActive ? { color: "#191919" } : {}}>
                  {service.title}
                </h3>
                <p className="text-base opacity-80" style={service.isActive ? { color: "#191919" } : {}}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

