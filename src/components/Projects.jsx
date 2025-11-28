import React, { useState, useEffect } from 'react';

// Import images directly
import hubImage from '../assets/hub.jpg';
import portfolioImage from '../assets/portfolio.png';
import hospitalImage from '../assets/hospital.jpg';
import gameImage from '../assets/game.png';
import cabanaImage from '../assets/cabana.jpeg';
import ecomImage from '../assets/ecom.jpeg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Enhanced projects data with 6 projects and LinkedIn links
  const projects = [
    {
      id: 1,
      name: 'Wellassa Uni Hub',
      description: 'A comprehensive university hub platform built with modern web technologies',
      technologies: ['Bootstrap', 'php', 'mysql'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      linkedinPost: 'https://www.linkedin.com/posts/geeth-hashan-66b12b250_wellassaunihub-innovation-webdevelopment-ugcPost-7283867057782145024-_pyK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: hubImage,
    },
    {
      id: 2,
      name: 'Portfolio Website',
      description: 'A modern, responsive portfolio showcasing creative work and projects',
      technologies: ['react js', 'Tailwind CSS', 'vite'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://portfolio-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/yourusername_portfolio-nextjs-frontend-activity-234567',
      image: portfolioImage,
    },
    {
      id: 3,
      name: 'Hospital Appointment Booking System',
      description: 'Streamlined healthcare appointment management system',
      technologies: ['Bootstrap, HTML, CSS', 'MySql', 'JSP, Servlets'],
      githubLink: 'https://github.com/yourusername/taskmanager',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_webdevelopment-rapidapplicationdevelopment-activity-7283871597445218304-nPQZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: hospitalImage,
    },
    {
      id: 4,
      name: 'Game Store',
      description: 'Full-featured e-commerce platform for gaming enthusiasts',
      technologies: ['HTML,CSS', 'Php', 'MySql','JavaScript'],
      githubLink: 'https://github.com/yourusername/aichat',
      liveLink: 'https://aichat-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_webdevelopment-softwarearchitecture-mvc-activity-7243678221236412416-cVp-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: gameImage,
    },
    {
      id: 5,
      name: 'SketchUp Cabana design',
      description: 'Stunning 3D architectural visualization and design',
      technologies: ['3D SketchUp', 'Vray', 'Photoshop'],
      githubLink: 'https://github.com/yourusername/fitnesstracker',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_3ddesign-ai-architecture-activity-7254358667309862912-VWmi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: cabanaImage,
    },
    {
      id: 6,
      name: 'E-commerce frontend',
      description: 'Modern and intuitive e-commerce user interface',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/wallet',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_ecommercedevelopment-htmlcssjavascript-innovation-activity-7185473606498291712-6b1s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: ecomImage,
    },
  ];

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const totalCards = projects.length;
    
    // Normalize the difference to be between -totalCards/2 and totalCards/2
    let normalizedDiff = diff;
    if (diff > totalCards / 2) {
      normalizedDiff = diff - totalCards;
    } else if (diff < -totalCards / 2) {
      normalizedDiff = diff + totalCards;
    }

    return normalizedDiff;
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Dark Background */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Static grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Blinking Violet Outline Lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-blink-line"></div>
          
          {/* Bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-blink-line" style={{ animationDelay: '1s' }}></div>
          
          {/* Left border */}
          <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-violet-500 to-transparent animate-blink-line" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Right border */}
          <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-violet-500 to-transparent animate-blink-line" style={{ animationDelay: '1.5s' }}></div>

          {/* Diagonal lines */}
          <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent animate-blink-line-slow"></div>
          <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent animate-blink-line-slow" style={{ animationDelay: '1s' }}></div>
          
          {/* Vertical accent lines */}
          <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-gradient-to-b from-transparent via-violet-400/50 to-transparent animate-blink-line-slow" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-gradient-to-b from-transparent via-violet-400/50 to-transparent animate-blink-line-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-purple-500 pb-2 mb-4">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://www.linkedin.com/in/sarath-kumar-07aa14302"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-violet-400 transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/sarathkumargit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-violet-400 transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* 3D Card Carousel */}
        <div className="relative h-[600px] md:h-[700px]" style={{ perspective: '2000px' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => {
              const position = getCardPosition(index);
              const isActive = position === 0;
              const absPosition = Math.abs(position);
              
              return (
                <div
                  key={project.id}
                  className="absolute transition-all duration-1000 ease-out"
                  style={{
                    transform: `
                      translateX(${position * 350}px)
                      translateZ(${-absPosition * 300}px)
                      rotateY(${position * -25}deg)
                      scale(${isActive ? 1.05 : 0.7 - absPosition * 0.1})
                    `,
                    opacity: absPosition > 2 ? 0 : 1 - absPosition * 0.3,
                    zIndex: 10 - absPosition,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <a
                    href={project.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className={`w-[350px] md:w-[450px] h-[500px] md:h-[600px] bg-gradient-to-br from-violet-900/90 to-violet-700/90 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-lg border-2 transition-all duration-700 ${
                      isActive ? 'border-violet-400 animate-blink-border' : 'border-violet-500/30'
                    } hover:border-violet-400/60`}>
                      {/* Card Image */}
                      <div className="h-1/2 overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent"></div>
                      </div>

                      {/* Card Content */}
                      <div className="p-8 h-1/2 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                            {project.name}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-base mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-semibold text-violet-200 bg-violet-800/50 rounded-full border border-violet-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* View Project Button */}
                        <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-violet-500 hover:from-violet-500 hover:to-violet-400 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-violet-500/50 text-lg">
                          View Project
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 bg-violet-600/80 hover:bg-violet-500 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 md:w-16 md:h-16 bg-violet-600/80 hover:bg-violet-500 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-violet-500/50 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            aria-label="Next project"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 1000);
                }
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-gradient-to-r from-violet-500 to-violet-400' 
                  : 'w-3 bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blink-border {
          0%, 100% {
            border-color: rgb(167 139 250);
            box-shadow: 0 0 20px rgba(167, 139, 250, 0.6), 0 0 40px rgba(167, 139, 250, 0.4);
          }
          50% {
            border-color: rgb(196 181 253);
            box-shadow: 0 0 30px rgba(196, 181, 253, 0.8), 0 0 60px rgba(196, 181, 253, 0.5);
          }
        }
        
        .animate-blink-border {
          animation: blink-border 2s ease-in-out infinite;
        }

        @keyframes blink-line {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.4);
          }
        }

        @keyframes blink-line-slow {
          0%, 100% {
            opacity: 0.2;
            box-shadow: 0 0 8px rgba(139, 92, 246, 0.3);
          }
          50% {
            opacity: 0.6;
            box-shadow: 0 0 15px rgba(139, 92, 246, 0.6), 0 0 30px rgba(139, 92, 246, 0.3);
          }
        }

        .animate-blink-line {
          animation: blink-line 2s ease-in-out infinite;
        }

        .animate-blink-line-slow {
          animation: blink-line-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Projects;
