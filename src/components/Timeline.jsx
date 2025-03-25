import React, { useEffect, useState } from 'react';

const Timeline = () => {
  const [isVisible, setIsVisible] = useState({
    education: false,
    experience1: false,
    experience2: false
  });

  // Animation trigger based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const timelineSection = document.getElementById('about');
      
      if (timelineSection) {
        const sectionTop = timelineSection.offsetTop;
        
        // When section comes into view
        if (scrollPosition > sectionTop + 100) {
          setIsVisible(prev => ({
            education: true,
            experience1: true,
            experience2: true
          }));
        }
      }
    };

    // Set initial state based on current scroll position
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data for the blinking skill badges
  const skills = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'HTML/CSS', color: 'bg-orange-500' },
    { name: 'Python', color: 'bg-indigo-500' },
    { name: 'UI/UX', color: 'bg-pink-500' },
    { name: 'Git', color: 'bg-red-500' },
    { name: 'SQL', color: 'bg-purple-500' },
    { name: 'Tailwind', color: 'bg-cyan-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },{ name: 'SaaS', color: 'bg-purple-500' },
    { name: 'Django', color: 'bg-green-700' },
    { name: 'Spring Boot (Java)', color: 'bg-teal-600' },
    { name: '3D SketchUp', color: 'bg-orange-500' },
    { name: '2D AutoCAD', color: 'bg-gray-600' },
    { name: 'ReactJS', color: 'bg-cyan-500' },
    { name: 'PHP', color: 'bg-yellow-600' }
  ];

  return (
    <section id="about" className="relative py-16 md:py-20 min-h-screen flex items-center">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('./src/assets/exx.jpeg')" }}
      ></div>

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 backdrop-blur-sm z-10"></div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-white/30 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with blinking effect */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white inline-block relative">
            Education & Experience Highlights
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500 animate-pulse"></span>
          </h2>
        </div>

        {/* Mobile view instruction */}
        <div className="block lg:hidden text-center mb-4">
          <p className="text-white italic">Swipe horizontally to see more</p>
        </div>
        
        {/* Horizontal scrollable container for smaller screens */}
        <div className="overflow-x-auto pb-4 lg:pb-0 hide-scrollbar">
          <div className="flex lg:grid lg:grid-cols-3 lg:gap-6 min-w-max lg:min-w-0 lg:gap-8">
            {/* Education Section */}
            <div 
              className={`bg-white/95 p-5 rounded-lg shadow-lg transition-all duration-1000 transform mx-2 lg:mx-0 w-80 lg:w-auto ${
                isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } hover:shadow-2xl hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-indigo-900">Education</h2>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center border-2 border-indigo-500 p-1">
                      <img
                        src="./src/assets/uwu.jpeg"
                        alt="Uva Wellassa University"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">Bachelor of Science - BSc (Hons)</h3>
                    <p className="text-sm text-gray-600">Uva Wellassa University of Sri Lanka</p>
                    <p className="text-sm font-medium text-indigo-600">Computer Science and Technology</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 my-2 animate-shimmer"></div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Gained a strong foundation in programming, software development, and emerging technologies, 
                      equipping me to tackle complex problems and innovate in the tech industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience: Capital TRUST Holdings Limited */}
            <div 
              className={`bg-white/95 p-5 rounded-lg shadow-lg transition-all duration-1000 transform mx-2 lg:mx-0 w-80 lg:w-auto ${
                isVisible.experience1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } hover:shadow-2xl hover:scale-105`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-indigo-900">Experience</h2>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center border-2 border-indigo-500 p-1">
                      <img
                        src="./src/assets/capital.png"
                        alt="Capital TRUST Holdings"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">Investor</h3>
                    <p className="text-sm text-gray-600">Capital TRUST Holdings Limited · Part-time</p>
                    <p className="text-xs text-indigo-600">Feb 2023 - Present · Kandy, Sri Lanka</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 my-2 animate-shimmer"></div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Gained hands-on expertise in stock trading, market analysis, and investment strategies 
                      using their trade platform, enhancing my understanding of financial markets and decision-making.
                    </p>
                    
                    {/* Blinking highlight */}
                    <div className="mt-3 inline-block relative">
                      <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded animate-pulse">
                        Current Position
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience: The Business School Kandy */}
            <div 
              className={`bg-white/95 p-5 rounded-lg shadow-lg transition-all duration-1000 transform mx-2 lg:mx-0 w-80 lg:w-auto ${
                isVisible.experience2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } hover:shadow-2xl hover:scale-105`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-indigo-900">Experience</h2>
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center border-2 border-indigo-500 animate-pulse">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-black">Marketing Coordinator</h3>
                    <p className="text-sm text-gray-600">The Business School Kandy · Part-time</p>
                    <p className="text-xs text-indigo-600">Jan 2019 - Jan 2025 · Kandy, Sri Lanka</p>
                    <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 to-purple-500 my-2 animate-shimmer"></div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Mentored students, introduced emerging technologies, and guided them to develop 
                      technical skills for real-world applications and financial independence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section with blinking badges */}
        <div className="mt-10 bg-white/80 rounded-lg p-6 backdrop-blur-sm shadow-lg">
          <h3 className="text-2xl font-bold text-center text-indigo-900 mb-6 relative inline-block">
            My Tech Stack & Expertise
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 animate-pulse"></span>
          </h3>
          
          {/* Scrollable skills on mobile */}
          <div className="overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex flex-wrap justify-center gap-3 min-w-max md:min-w-0">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`${skill.color} text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110`}
                  style={{ 
                    animation: `blinkFade 3s infinite ${index * 0.3}s`,
                    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                  }}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes blinkFade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          
          .animate-float {
            animation-name: float;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
          
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 2s infinite linear;
          }
          
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          /* Hide scrollbar but maintain functionality */
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `
      }} />
    </section>
  );
};

export default Timeline;