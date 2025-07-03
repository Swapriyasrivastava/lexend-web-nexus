
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = [
    {
      title: "AI Fundamentals",
      duration: "8 Weeks",
      level: "Beginner",
      description: "Learn the basics of artificial intelligence and machine learning",
      topics: ["Introduction to AI", "Machine Learning Basics", "Data Analysis", "Practical Projects"],
      price: "$299"
    },
    {
      title: "Advanced Automation",
      duration: "12 Weeks",
      level: "Intermediate",
      description: "Master advanced automation techniques and implementation strategies",
      topics: ["Process Design", "Integration Patterns", "Scalability", "Performance Optimization"],
      price: "$599"
    },
    {
      title: "AI Leadership",
      duration: "6 Weeks",
      level: "Executive",
      description: "Strategic AI implementation for business leaders and decision makers",
      topics: ["AI Strategy", "Team Management", "ROI Analysis", "Change Management"],
      price: "$899"
    },
    {
      title: "Custom Enterprise",
      duration: "Flexible",
      level: "All Levels",
      description: "Tailored training programs designed for your organization's specific needs",
      topics: ["Custom Curriculum", "On-site Training", "Ongoing Support", "Certification"],
      price: "Contact Us"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Training <span className="text-[#1AD1A5]">Programs</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Advance your skills and knowledge with our comprehensive AI and automation training programs. 
              From beginners to experts, we have the right program for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card key={index} className="bg-white/10 border-[#1AD1A5]/20 hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#1AD1A5]">{program.title}</h3>
                    <span className="bg-[#1AD1A5]/20 text-[#1AD1A5] px-3 py-1 rounded-full text-sm">
                      {program.level}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-gray-300">
                    <span>📅 {program.duration}</span>
                    <span>💰 {program.price}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="text-[#1AD1A5] mr-2">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-[#1AD1A5] hover:bg-[#15b28e] text-black font-semibold">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center bg-white/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Program?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We can create a tailored training program that meets your organization's specific needs and objectives.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-[#1AD1A5] hover:bg-[#15b28e] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Discuss Custom Program
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;
