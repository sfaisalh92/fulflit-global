
const aboutCards = [
  {
    title: "Global Network",
    description: "Connected warehouses across key global markets",
  },
  {
    title: "Smart Technology",
    description: "AI-powered logistics optimization",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer assistance",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative" data-speed="0.1">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-gray-600 mb-8">
            We're revolutionizing cross-border logistics management by providing businesses with a comprehensive platform that simplifies complex operations. With years of industry expertise, we deliver innovative solutions that help companies scale globally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-[#eec899] rounded-lg font-medium transition-colors duration-200 hover:bg-[#191919] hover:text-white cursor-pointer"
              >
                <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
