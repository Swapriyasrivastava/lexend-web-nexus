import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Download, ArrowDown } from "lucide-react";
import { useState } from "react";

// Navbar Component
const Navbar = () => {
  return (
    <header className="bg-white border-b px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Lexend</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Learn</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <a href="#" className="text-gray-700 hover:text-gray-900">Upskill your Team</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Login</Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">Apply as Mentor</Button>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownload = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      city: "",
    });
    setSubmitted(false);
    setShowForm(false);
  };

  return (
    <section>
      <div className="bg-white text-black pt-3 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0b2a25] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              <div className="w-full lg:w-1/2">
                <img
                  src="https://d3kl8zsmmx4oop.cloudfront.net/MCP_39e7df7c6c_d9c653a440.webp"
                  alt="Management Consulting"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              <div className="w-full lg:w-1/2 text-white">
                <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
                  Management Consulting
                </h1>
                <p className="text-white/90 text-lg mb-6">
                  A 15-week AI-powered mentorship program designed by consultants
                  from McKinsey, Bain & more to help you understand, practice, and
                  implement the principles of management consulting.
                </p>

                <div className="mb-6">
                  <p className="text-white/70 text-sm mb-1">Cohort start date</p>
                  <p className="text-lg font-semibold">Coming Soon</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#2ecc71] text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition">
                    Apply Now
                  </button>
                  <button
                    className="bg-[#f7f1e9] text-black font-semibold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-[#e0d7cb] transition"
                    onClick={() => setShowForm(true)}
                  >
                    <Download className="w-4 h-4" />
                    Brochure
                  </button>
                </div>

                {showForm && (
                  <div className="bg-white text-black mt-6 p-6 rounded-xl shadow-lg animate-fade-in">
                    {!submitted ? (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium">Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">Contact</label>
                          <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2ecc71]"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-[#2ecc71] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#27ae60] transition"
                        >
                          Submit
                        </button>
                      </form>
                    ) : (
                      <div className="text-center">
                        <p className="mb-4 font-medium text-green-600">Thank you for submitting!</p>
                        <a
                          href="/your-brochure.pdf"
                          download
                          onClick={handleDownload}
                          className="bg-[#2ecc71] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#27ae60] transition inline-flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download Brochure
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

// Features Grid Component
const FeaturesGrid = () => {
  const companies = [
    "https://d3kl8zsmmx4oop.cloudfront.net/Group_77e1b17517.svg",
    "https://d3kl8zsmmx4oop.cloudfront.net/Vector_1_3f59974b49.svg",
    "https://d3kl8zsmmx4oop.cloudfront.net/Google_c2d8e527c7.svg",
    "https://d3kl8zsmmx4oop.cloudfront.net/layer1_001742dcec.svg",
    "https://d3kl8zsmmx4oop.cloudfront.net/LOGO_07fbe3c627.svg",
    "https://d3kl8zsmmx4oop.cloudfront.net/Vector_8abe02abf9.svg"
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setActiveImage(src === activeImage ? null : src);
  };

  return (
    <section className="py-6 px-6 bg-[#fffefd]">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-x-5 gap-y-1">
        <div className="flex flex-col justify-between gap-3">
          <Card className="bg-[#FFF8F0] border border-[#EAE6DF] rounded-xl shadow-sm h-full">
            <CardContent className="p-5 text-left flex flex-col justify-between h-full">
              <h3 className="text-lg font-bold text-[#0E1D34] mb-1">₹ 15,00,000+</h3>
              <p className="text-[#555A66] uppercase text-xs">Average Annual CTC</p>
              <img
                src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/rs.svg"
                alt="Salary"
                onClick={() => handleImageClick("https://d31bwppm8yl9g2.cloudfront.net/learner/website/rs.svg")}
                className={`w-14 ml-auto cursor-pointer ${activeImage === "https://d31bwppm8yl9g2.cloudfront.net/learner/website/rs.svg" ? "filter-green" : ""}`}
              />
            </CardContent>
          </Card>

          <Card className="bg-[#FFF8F0] border border-[#EAE6DF] rounded-xl shadow-sm h-full">
            <CardContent className="p-5 text-left flex flex-col justify-between h-full">
              <h3 className="text-lg font-bold text-[#0E1D34] mb-1">Secret insights</h3>
              <p className="text-[#555A66] uppercase text-xs">From real case-studies</p>
              <img
                src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/pap.svg"
                alt="Insights"
                onClick={() => handleImageClick("https://d31bwppm8yl9g2.cloudfront.net/learner/website/pap.svg")}
                className={`w-20 self-end mt-3 cursor-pointer ${activeImage === "https://d31bwppm8yl9g2.cloudfront.net/learner/website/pap.svg" ? "filter-green" : ""}`}
              />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#FFF8F0] border border-[#EAE6DF] rounded-xl shadow-sm col-span-2 w-full flex items-center justify-center">
          <CardContent className="p-4 text-center flex flex-col justify-center h-full w-full">
            <h1 className="text-lg font-bold text-[#0E1D34] mb-1">
              Top companies hiring in this industry
            </h1>
            <p className="text-[#555A66] text-xs mb-4 uppercase">
              Get hired to work for these global giants
            </p>
            <div className="overflow-hidden space-y-3">
              <div className="animate-scrollRight flex space-x-4 w-max">
                {companies.concat(companies).map((logo, idx) => (
                  <img
                    key={`row1-${idx}`}
                    src={logo}
                    alt="Company Logo"
                    className="h-5"
                  />
                ))}
              </div>

              <div className="animate-scrollLeft flex space-x-4 w-max">
                {companies.concat(companies).map((logo, idx) => (
                  <img
                    key={`row2-${idx}`}
                    src={logo}
                    alt="Company Logo"
                    className="h-4"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col justify-between gap-1">
          <Card className="bg-[#FFF8F0] border border-[#EAE6DF] rounded-xl shadow-sm h-full">
            <CardContent className="p-5 text-left flex flex-col justify-between h-full">
              <h3 className="text-lg font-bold text-[#0E1D34] mb-1">Multiple projects</h3>
              <p className="text-[#555A66] uppercase text-xs">Learn by doing</p>
              <img
                src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/fold.svg"
                alt="Projects"
                onClick={() => handleImageClick("https://d31bwppm8yl9g2.cloudfront.net/learner/website/fold.svg")}
                className={`w-20 ml-auto cursor-pointer ${activeImage === "https://d31bwppm8yl9g2.cloudfront.net/learner/website/fold.svg" ? "filter-green" : ""}`}
              />
            </CardContent>
          </Card>

          <Card className="bg-[#FFF8F0] border border-[#EAE6DF] rounded-xl shadow-sm h-full">
            <CardContent className="p-5 text-left flex flex-col justify-between h-full">
              <h3 className="text-lg font-bold text-[#0E1D34] mb-1">Live QnA sessions</h3>
              <p className="text-[#555A66] uppercase text-xs">Talk with industry mentors</p>
              <img
                src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/peop.svg"
                alt="QnA"
                onClick={() => handleImageClick("https://d31bwppm8yl9g2.cloudfront.net/learner/website/peop.svg")}
                className={`w-20 ml-auto cursor-pointer ${activeImage === "https://d31bwppm8yl9g2.cloudfront.net/learner/website/peop.svg" ? "filter-green" : ""}`}
              />
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        .animate-scrollRight {
          animation: scrollRight 25s linear infinite;
        }
        .animate-scrollLeft {
          animation: scrollLeft 25s linear infinite;
        }
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollLeft {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .filter-green {
          filter: brightness(0) saturate(100%) invert(52%) sepia(99%) saturate(415%) hue-rotate(72deg) brightness(96%) contrast(91%);
        }
      `}</style>
    </section>
  );
};

// Key Outcomes and Modules Component
const KeyOutcomesAndModules = () => {
  const modules = [
    {
      id: "module1",
      title: "MODULE 1",
      subtitle: "Introduction to Consulting",
      description: "Gain insight into consulting careers, key skills, firm operations, industry trends, and pathways. Explore entry strategies, prominent firms, practice types, and a real-life case study."
    },
    {
      id: "module2",
      title: "MODULE 2",
      subtitle: "Business and Data 101",
      description: "Master fundamental business concepts and data analysis techniques essential for consulting work."
    },
    {
      id: "module3",
      title: "MODULE 3",
      subtitle: "Key Consulting Concepts - Part 1",
      description: "Deep dive into core consulting methodologies and frameworks used by top firms."
    }
  ];

  const mentors = [
    {
      name: "Varun Khullar",
      role: "Director of Business Development, LinkedIn",
      avatar: "/Lexend-uploads/mentor-varun.png"
    },
    {
      name: "Prashanth Balasubramanian",
      role: "Head of Strategy, Meta",
      avatar: "/Lexend-uploads/mentor-prashanth.png"
    },
    {
      name: "Megha Bansal",
      role: "Head of Business- SecureNow, Ex-McKinsey & Co., Ex-Aon",
      avatar: "/Lexend-uploads/mentor-megha.png"
    },
    {
      name: "Rushika HandaSood",
      role: "Ex- Consultant, BCG",
      avatar: "/Lexend-uploads/mentor-rushika.png"
    }
  ];

  const targetAudience = [
    "Aspiring Strategy Consultants",
    "Early-tenure Management Consultants",
    "Job Seekers",
    "Marketers & Growth Managers",
    "Business Students",
    "Anyone curious about what consultants & consulting firms truly do"
  ];

  return (
    <div className="bg-white">
      {/* Key Outcomes */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Key Outcomes</h2>
          <p className="text-lg text-gray-700 mb-8">
            Gain a thorough understanding of the consulting industry, its diverse career trajectories,
            necessary skills, and the inner workings of consulting firms. This knowledge will empower you to
            make well-informed decisions about your potential engagement in this field.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">Understand the role, functions, and daily activities of consultants</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">Explore diverse career paths and strategies to overcome entry barriers</p>
            </div>
          </div>

          <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-2">
            <span>Read More</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* What will you learn */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">What will you learn?</h2>

          <div className="space-y-4">
            {modules.map((module) => (
              <Card key={module.id} className="border border-gray-200 bg-white">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={module.id} className="border-none">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center justify-between w-full">
                          <div className="text-left">
                            <p className="text-sm text-gray-500 font-medium">{module.title}</p>
                            <h3 className="text-lg font-semibold">{module.subtitle}</h3>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-700">{module.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Still wondering If Management Consulting Mentorship Program is for you?</h2>
          <p className="text-lg text-gray-700 mb-12">
            Gain a thorough understanding of the consulting industry, its diverse career trajectories,
            necessary skills, and the inner workings of consulting firms. This knowledge will empower you to
            make well-informed decisions about your potential engagement in this field.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 bg-amber-50 p-8 rounded-2xl">
            {targetAudience.map((audience, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Program Stands Out */}
      <section className="pt-12 px-6 pb-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Why This Mentorship Program Stands Out</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 bg-blue-50 p-8 rounded-2xl">
            {[
              "Designed by industry veterans from McKinsey, BCG, Meta & LinkedIn",
              "15-week structured roadmap with AI-powered tools & templates",
              "Blend of live sessions + self-paced learning + mock interviews",
              "Comprehensive consulting case interview prep modules",
              "Practical frameworks used by top-tier consulting firms",
              "Personal mentorship & career navigation guidance",
              "Certificate of Completion + NSDC Certification",
              "Access to exclusive consulting community & job support"
            ].map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-1 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-900">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Mentors */}
      <section className="py-16 px-6 bg-[#f5eeea]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Meet Your Mentors</h2>

          <div className="grid md:grid-cols-1 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={mentor.avatar} />
                  <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{mentor.name}</h3>
                  <p className="text-gray-600">{mentor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Before you ask!</h2>
          <p className="text-lg text-gray-700 mb-12">Yes! You will be certified for this program.</p>

          <Card className="bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 p-8">
            <CardContent className="p-0">
              <div className="flex items-center justify-center">
                <img
                  src="https://d3kl8zsmmx4oop.cloudfront.net/GS_certificate_b91252c431_b546f36e85.png"
                  alt="Certificate"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* NSDC Certification */}
      <section className="py-16 px-6 bg-[#f5eeea]">
        <div className="max-w-3xl">
          <Badge className="mb-6 bg-blue-100 text-blue-800">GOVERNMENT CERTIFIED</Badge>
          <h2 className="text-3xl font-bold mb-8">Earn NSDC Certification</h2>

          <p className="text-lg text-gray-700 mb-8">
            The National Skill Development Corporation (NSDC), under the Government of India, promotes
            skill development. Your course is a part of NSDC programme and you'll receive a certificate upon
            completion*
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-gray-700"><strong>Benefits of NSDC Certification:</strong></p>
            <div className="space-y-3">
              <p className="text-gray-700">1. Boost your career prospects with a certification acknowledged across India.</p>
              <p className="text-gray-700">2. Improves chances of employment and career advancement.</p>
              <p className="text-gray-700">3. Ensures top-quality education and training.</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            Register for NSDC certification today and advance your career with industry-recognized credentials.
          </p>

          <p className="text-sm text-gray-500 italic">* Subject to evaluation and attendance</p>

          <div className="mt-8 flex justify-center">
            <img
              src="https://d31bwppm8yl9g2.cloudfront.net/learner/website/nsdc.webp"
              alt="NSDC Certificate"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Exclusive Bonus */}
      <section className="py-16 px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Exclusive bonus waiting for you!</h2>
          <p className="text-lg text-gray-700 mb-12">
            Exclusive bonus available to the first 50 enrollees only. Secure your spot now!
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-12">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">Bonus 1</h3>
                <p className="text-emerald-700">Early Bird Access : Consulting Case Interview Preparation - Self Paced Course</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#f5eeea]">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">What is this program about?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-gray-700">
                  This is a comprehensive 15-week AI-powered mentorship program designed by consultants from
                  top firms like McKinsey and Bain to help you understand, practice, and implement the
                  principles of management consulting.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="bg-white border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="py-4 hover:no-underline">
                <span className="text-left font-medium">Is this a completely live program?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <p className="text-gray-700">
                  The program combines live sessions with self-paced learning materials. You'll have
                  live mentorship sessions, Q&A sessions, and interactive workshops along with
                  recorded content you can access anytime.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

// Main Programs Component
const Programs = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-4">
        <div className="w-full lg:w-2/3">
          <KeyOutcomesAndModules />
        </div>
        <div className="hidden lg:block w-[400px]"></div>
      </div>

      {/* Fixed 6.5M+ Learners Box - Only visible from Key Outcomes section onwards */}
      <div className="hidden lg:block fixed top-[200px] right-[40px] w-[400px] z-40 bg-white p-6 shadow-xl rounded-lg border border-gray-200">
        <h3 className="text-2xl font-bold mb-2">6.5M+ Learners</h3>
        <p className="text-gray-600 mb-4">have reaped benefits from our programs</p>
        
        {/* Company Logos Grid - Matching image layout */}
        <div className="grid grid-cols-6 gap-3 mb-6">
          <div className="flex items-center justify-center p-2 bg-gray-50 rounded h-12">
            <span className="text-blue-600 font-bold text-lg">G</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-50 rounded h-12">
            <span className="text-blue-600 font-bold text-lg">F</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-50 rounded h-12">
            <span className="text-blue-600 font-bold text-lg">W</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-50 rounded h-12">
            <span className="text-purple-600 font-bold text-lg">P</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-50 rounded h-12">
            <span className="text-blue-400 font-bold text-lg">V</span>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-50 rounded h-12">
            <span className="text-orange-500 font-bold text-lg">S</span>
          </div>
        </div>

        {/* Company Names */}
        <div className="grid grid-cols-6 gap-3 text-xs text-gray-600 text-center mb-6">
          <span>Google</span>
          <span>Flipkart</span>
          <span>Walmart</span>
          <span>PhonePe</span>
          <span>Vivo</span>
          <span>ShareChat</span>
        </div>

        {/* Benefits with green checkmarks */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700">Stay ahead in your field by mastering industry relevant skills through our online sessions</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700">Dive into real challenges from today's businesses, gaining hands-on experience</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700">Tap into a wealth of career opportunities through our established network</p>
          </div>
        </div>

        {/* LinkedIn badge */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">⚡</span>
          </div>
          <div>
            <span className="text-sm font-medium text-blue-600">LinkedIn</span>
            <p className="text-xs text-gray-500">Top Startup India 2023</p>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f7f1e8] text-black border-t border-slate-700 p-4 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">Management Consulting - Elite</h3>
            <a href="#" className="text-[#0c2218] hover:text-blue-500 underline text-sm">Looking for your team?</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Apply Now</Button>
            <Button variant="outline" className="border-gray-400 text-black hover:bg-white hover:text-gray-900">
              <ArrowDown className="w-4 h-4 mr-2" /> Brochure
            </Button>
          </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
};

export default Programs;
