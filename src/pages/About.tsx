
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-[#1AD1A5]">Lexend</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We are pioneers in AI automation and digital transformation, dedicated to helping 
              businesses unlock their full potential through innovative technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1AD1A5]">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                At Lexend, we believe in the transformative power of artificial intelligence and automation. 
                Our mission is to bridge the gap between cutting-edge technology and practical business solutions, 
                making advanced AI accessible to organizations of all sizes.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1AD1A5]">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where businesses operate with unprecedented efficiency, 
                where AI-powered solutions eliminate repetitive tasks, and where human creativity 
                is amplified by intelligent automation systems.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-[#1AD1A5]/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in every project and solution we deliver.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-[#1AD1A5]/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We push the boundaries of what's possible with emerging technologies.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-[#1AD1A5]/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-white mb-3">Partnership</h3>
                <p className="text-gray-300">We build lasting partnerships with our clients for mutual success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
