import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/60 backdrop-blur-2xl border-b border-violet-500/40 shadow-lg shadow-violet-500/20' 
          : 'bg-black/20 backdrop-blur-xl border-b border-violet-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            
             
              <img src={logo} alt="Logo" className="w-8 h-8" />
          
            
          </a>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 hover:bg-violet-500/20 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-violet-500/20 animate-slide-down">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-violet-500/10 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold text-center shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
          }
        `
      }} />
    </nav>
  );
};

export default Navbar;
