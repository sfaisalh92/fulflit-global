
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('Name', formData.name);
    formDataToSubmit.append('Email', formData.email);
    formDataToSubmit.append('Company Name', formData.company);
    formDataToSubmit.append('Message', formData.message);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxcxEvjksN5dK29seJpaTVuHjLR1Bdq4ZxFLMov_kJkrpbPRt7BAbK57SgKYgCOPE3DPg/exec', {
        method: 'POST',
        body: formDataToSubmit
      });
      
      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your request has been submitted successfully.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="quote"
      className="py-20 bg-[#f6f6f7] relative flex justify-center items-center min-h-[550px] sm:min-h-[700px] overflow-x-hidden"
      data-speed="0.25"
    >
      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-0 md:gap-0">
        {/* Orange background panel with text */}
        <div
          className="relative flex-1 bg-[#eec899] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none rounded-b-none md:rounded-br-none px-8 py-12 md:py-0 flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(135deg, #eec899 0%, #f8e2be 100%)",
            minHeight: "460px",
          }}
        >
          <div className="text-left max-w-lg ml-0 md:ml-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              How to ensure<br />logistics in a new<br />region?
            </h2>
            <div className="text-lg text-white/90 mt-4">
              Tell us more about your task, we will calculate the cost and contact you within a few hours
            </div>
          </div>
          {/* Decorative background graphics could go here */}
        </div>
        {/* White card with form */}
        <div className="relative flex-1 flex justify-center items-center bg-white rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none shadow-lg px-6 py-10 md:py-14 min-h-[460px] z-10 md:-ml-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto space-y-6"
          >
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="bg-[#f5f5f5] text-[#191919] placeholder:text-gray-500 rounded-lg border-none h-12"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#f5f5f5] text-[#191919] placeholder:text-gray-500 rounded-lg border-none h-12"
              />
            </div>
            <div>
              <Input
                name="company"
                placeholder="Company Name"
                required
                value={formData.company}
                onChange={handleInputChange}
                className="bg-[#f5f5f5] text-[#191919] placeholder:text-gray-500 rounded-lg border-none h-12"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your logistics needs"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="bg-[#f5f5f5] text-[#191919] placeholder:text-gray-500 rounded-lg border-none h-24 resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#eec899] hover:bg-[#e5b880] text-white text-lg h-12 rounded-full font-semibold shadow-md transition"
            >
              Share your needs with us
            </Button>
            <div className="text-xs text-gray-400 text-center pt-1 leading-relaxed">
              By clicking on the button "Get quote" you confirm that you agree<br />
              with the{" "}
              <a
                href="#"
                className="underline text-[#eec899] hover:text-[#e5b880] transition"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;

