
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${scrolled ? "bg-[#0A1F2F]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold text-[#1AD1A5]">LEXEND</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link 
            to="/" 
            className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
              isActive('/') ? 'text-[#1AD1A5]' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
              isActive('/about') ? 'text-[#1AD1A5]' : ''
            }`}
          >
            About
          </Link>
          <Link 
            to="/ai-automation" 
            className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
              isActive('/ai-automation') ? 'text-[#1AD1A5]' : ''
            }`}
          >
            AI Automation
          </Link>
          <Link 
            to="/programs" 
            className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
              isActive('/programs') ? 'text-[#1AD1A5]' : ''
            }`}
          >
            Programs
          </Link>
          <Link 
            to="/contact" 
            className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
              isActive('/contact') ? 'text-[#1AD1A5]' : ''
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Contact Button */}
        <Link to="/contact">
          <Button className="hidden md:block bg-[#1AD1A5] hover:bg-[#15b28e] text-black px-6 py-2 rounded-lg transition-colors font-semibold">
            Get Started
          </Button>
        </Link>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-[#1AD1A5]/20"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-[#0A1F2F]/95 backdrop-blur-sm border-t border-teal-600/20 md:hidden">
          <div className="flex flex-col space-y-4 p-6 text-white">
            <Link 
              to="/" 
              className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
                isActive('/') ? 'text-[#1AD1A5]' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
                isActive('/about') ? 'text-[#1AD1A5]' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/ai-automation" 
              className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
                isActive('/ai-automation') ? 'text-[#1AD1A5]' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              AI Automation
            </Link>
            <Link 
              to="/programs" 
              className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
                isActive('/programs') ? 'text-[#1AD1A5]' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className={`cursor-pointer hover:text-[#B6F09C] transition-colors ${
                isActive('/contact') ? 'text-[#1AD1A5]' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-[#1AD1A5] hover:bg-[#15b28e] text-black px-6 py-2 rounded-lg transition-colors w-full mt-4 font-semibold">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
