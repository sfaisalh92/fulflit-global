import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const QuoteForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <section id="quote" className="py-20 bg-gray-50 relative" data-speed="0.25">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Request a Quote</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input placeholder="Your Name" required />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" required />
            </div>
            <div>
              <Input placeholder="Company Name" required />
            </div>
            <div>
              <Textarea placeholder="Tell us about your logistics needs" required />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Get Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
