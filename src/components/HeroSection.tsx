
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block bg-[#1AD1A5]/20 text-[#1AD1A5] px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Welcome to the Future
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transform Your Business with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1AD1A5] to-[#B6F09C]">
            {" "}AI-Powered Solutions
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Discover cutting-edge AI automation, comprehensive programs, and innovative solutions 
          that will revolutionize your workflow and accelerate your success.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/ai-automation">
            <Button 
              size="lg" 
              className="bg-[#1AD1A5] hover:bg-[#15b28e] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore AI Automation
            </Button>
          </Link>
          <Link to="/programs">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#1AD1A5] text-[#1AD1A5] hover:bg-[#1AD1A5] hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Programs
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1AD1A5] mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1AD1A5] mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#1AD1A5] mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
