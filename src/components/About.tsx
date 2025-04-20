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
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Global Network</h3>
              <p className="text-gray-600">Connected warehouses across key global markets</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Smart Technology</h3>
              <p className="text-gray-600">AI-powered logistics optimization</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
