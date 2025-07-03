
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIAutomation = () => {
  const automationServices = [
    {
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation",
      features: ["Workflow Optimization", "Task Scheduling", "Performance Monitoring"]
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analysis",
      features: ["Predictive Analytics", "Real-time Reporting", "Pattern Recognition"]
    },
    {
      title: "Customer Service AI",
      description: "Enhance customer experience with intelligent chatbots and support systems",
      features: ["24/7 Support", "Multi-language", "Smart Routing"]
    },
    {
      title: "Business Intelligence",
      description: "Make data-driven decisions with advanced AI business intelligence tools",
      features: ["Market Analysis", "Trend Forecasting", "Risk Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI <span className="text-[#1AD1A5]">Automation</span> Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionize your business operations with our cutting-edge AI automation technologies. 
              Increase efficiency, reduce costs, and unlock new possibilities for growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {automationServices.map((service, index) => (
              <Card key={index} className="bg-white/10 border-[#1AD1A5]/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#1AD1A5] mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="text-[#1AD1A5] mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-white/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI automation solutions can transform your operations 
              and drive unprecedented efficiency in your organization.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-[#1AD1A5] hover:bg-[#15b28e] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Start Your Automation Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIAutomation;
