
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0A1F2F] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-[#1AD1A5] mb-4">LEXEND</div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transform your business with AI-powered solutions and comprehensive programs 
              designed for the future.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-[#1AD1A5] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#15b28e] transition-colors">
                <span className="text-black font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-[#1AD1A5] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#15b28e] transition-colors">
                <span className="text-black font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-[#1AD1A5] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#15b28e] transition-colors">
                <span className="text-black font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-[#1AD1A5] transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-[#1AD1A5] transition-colors">About</Link>
              <Link to="/ai-automation" className="block text-gray-300 hover:text-[#1AD1A5] transition-colors">AI Automation</Link>
              <Link to="/programs" className="block text-gray-300 hover:text-[#1AD1A5] transition-colors">Programs</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@lexend.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <Link to="/contact" className="block text-[#1AD1A5] hover:text-[#15b28e] transition-colors">
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Lexend. All rights reserved. | Built with innovation and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
