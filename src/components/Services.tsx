
import { Truck, Box, Warehouse, Earth } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Box className="h-8 w-8 text-blue-600" />,
      title: "Inbound Logistics",
      description: "Efficient receiving and processing of incoming goods",
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Outbound Logistics",
      description: "Streamlined shipping and delivery management",
    },
    {
      icon: <Warehouse className="h-8 w-8 text-blue-600" />,
      title: "Warehousing and Order Fulfillment",
      description: "Smart inventory management and order processing",
    },
    {
      icon: <Earth className="h-8 w-8 text-blue-600" />,
      title: "Cross Border Logistics",
      description: "Seamless international shipping solutions",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
