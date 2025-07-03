
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      title: "AI Automation",
      description: "Streamline your processes with intelligent automation solutions",
      icon: "🤖"
    },
    {
      title: "Custom Programs",
      description: "Tailored programs designed for your specific business needs",
      icon: "💻"
    },
    {
      title: "Expert Consultation",
      description: "Get guidance from industry experts and experienced professionals",
      icon: "👥"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need help",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-[#1AD1A5]">Lexend</span>?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive solutions that drive real results for your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 border-[#1AD1A5]/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
