import { Card } from "./ui/card";
import { Monitor } from "lucide-react";

const Platform = () => {
  return (
    <section id="platform" className="py-20 bg-gray-50 relative" data-speed="0.15">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center">
                  <Monitor className="mr-2 h-5 w-5 text-blue-600" />
                  Real-time Tracking
                </h3>
                <p className="text-gray-600">Monitor your shipments and inventory in real-time</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-xl mb-3">Automated Workflows</h3>
                <p className="text-gray-600">Streamline operations with intelligent automation</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold text-xl mb-3">Analytics Dashboard</h3>
                <p className="text-gray-600">Data-driven insights for better decision making</p>
              </Card>
            </div>
            <div className="bg-gray-200 rounded-lg h-[400px] flex items-center justify-center">
              <p className="text-gray-500">Platform Screenshot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
