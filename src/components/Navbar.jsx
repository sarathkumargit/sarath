import React, { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsContactDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-indigo-600/20 border-b border-indigo-500/30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Mobile Menu Toggle (Hamburger Icon) - Now at the left */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-200 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu - Now centered */}
          <div className="hidden sm:flex sm:space-x-8 items-center justify-center w-full">
            <a href="#home" className="text-white hover:text-indigo-200 font-medium">
              Home
            </a>
            <a href="#about" className="text-white hover:text-indigo-200 font-medium">
              About
            </a>
            <a href="#projects" className="text-white hover:text-indigo-200 font-medium">
              Projects
            </a>
            <a href="#blog" className="text-white hover:text-indigo-200 font-medium">
              Blog
            </a>
            {/* Contact Me Button */}
            <a
              href="#contact" // Redirect to the Contact section
              className="bg-indigo-900/30 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-900 transition-colors border border-indigo-300/30"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="sm:hidden bg-indigo-600/20 backdrop-blur-md border-b border-indigo-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block text-white hover:text-indigo-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-white hover:text-indigo-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-white hover:text-indigo-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#blog"
                className="block text-white hover:text-indigo-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              {/* Contact Me Button for Mobile */}
              <a
                href="#contact"
                className="block w-full text-left text-white hover:text-indigo-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;