import React, { useEffect, useState, useRef } from 'react';

// Import university logo
import universityLogo from '../assets/uwu.jpeg';
import capitalTrustLogo from '../assets/capital.png';

const Timeline = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    education: false,
    experience1: false,
    experience2: false
  });
  const sectionRef = useRef(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height + window.innerHeight);
        setScrollY(scrollProgress);

        // Trigger animations when section is in view
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible({
            education: true,
            experience1: true,
            experience2: true
          });
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data with violet theme
  const skills = [
    { name: 'React', gradient: 'from-violet-500 to-purple-600' },
    { name: 'JavaScript', gradient: 'from-purple-500 to-violet-600' },
    { name: 'Node.js', gradient: 'from-violet-600 to-purple-700' },
    { name: 'HTML/CSS', gradient: 'from-purple-600 to-violet-700' },
    { name: 'Python', gradient: 'from-violet-500 to-purple-500' },
    { name: 'UI/UX', gradient: 'from-purple-500 to-violet-500' },
    { name: 'Git', gradient: 'from-violet-600 to-purple-600' },
    { name: 'SQL', gradient: 'from-purple-600 to-violet-600' },
    { name: 'Tailwind', gradient: 'from-violet-500 to-purple-700' },
    { name: 'TypeScript', gradient: 'from-purple-700 to-violet-500' },
    { name: 'SaaS', gradient: 'from-violet-600 to-purple-500' },
    { name: 'Django', gradient: 'from-purple-500 to-violet-600' },
    { name: 'Spring Boot', gradient: 'from-violet-700 to-purple-600' },
    { name: '3D SketchUp', gradient: 'from-purple-600 to-violet-700' },
    { name: '2D AutoCAD', gradient: 'from-violet-500 to-purple-500' },
    { name: 'ReactJS', gradient: 'from-purple-500 to-violet-700' },
    { name: 'PHP', gradient: 'from-violet-600 to-purple-700' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1: Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-violet-950/30 to-purple-950/30"
          style={{
            transform: `translateY(${scrollY * 50}px)`,
          }}
        />
        
        {/* Layer 2: Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
            transform: `translateY(${scrollY * -30}px) scale(${1 + scrollY * 0.1})`,
          }}
        />

        {/* Layer 3: Floating particles */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 20}px)`,
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-violet-500/20 blur-sm"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Layer 4: Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * -40}px)`,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Title */}
        <div 
          className="text-center mb-16"
          style={{
            transform: `translateY(${scrollY * -20}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.5),
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 mb-4 animate-gradient">
            Journey & Expertise
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse-glow" />
        </div>

        {/* Timeline Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 items-start">
          {/* Education Card */}
          <div
            className={`group relative transition-all duration-1000 h-full ${
              isVisible.education ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{
              transform: `translateY(${scrollY * 10}px)`,
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 hover:border-violet-500/60 transition-all duration-500 h-full flex flex-col min-h-[400px]">
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <span className="text-violet-400 font-semibold text-sm">Education</span>
              </div>

              {/* Content */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/50 p-1 shadow-lg shadow-violet-500/30">
                    <img
                      src={universityLogo}
                      alt="University"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">BSc (Hons) Computer Science</h3>
                  <p className="text-violet-300 text-sm mb-1">Uva Wellassa University</p>
                  <p className="text-purple-400 text-xs mb-3">Sri Lanka</p>
                  <div className="h-px w-full bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-transparent mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Strong foundation in programming, software development, and emerging technologies for innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Card 1 */}
          <div
            className={`group relative transition-all duration-1000 delay-200 h-full ${
              isVisible.experience1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{
              transform: `translateY(${scrollY * 5}px)`,
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-500 h-full flex flex-col min-h-[400px]">
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-purple-400 font-semibold text-sm">Experience</span>
              </div>

              {/* Content */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-2 border-purple-500/50 p-1 shadow-lg shadow-purple-500/30">
                    <img
                      src={capitalTrustLogo}
                      alt="Capital Trust"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Investor</h3>
                  <p className="text-purple-300 text-sm mb-1">Capital TRUST Holdings Ltd</p>
                  <p className="text-violet-400 text-xs mb-3">Feb 2023 - Present · Kandy</p>
                  <div className="h-px w-full bg-gradient-to-r from-purple-500/50 via-violet-500/50 to-transparent mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    Expertise in stock trading, market analysis, and investment strategies.
                  </p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 animate-pulse-glow">
                    Current Position
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div
            className={`group relative transition-all duration-1000 delay-400 h-full ${
              isVisible.experience2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{
              transform: `translateY(${scrollY * 15}px)`,
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 hover:border-violet-500/60 transition-all duration-500 h-full flex flex-col min-h-[400px]">
              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-violet-400 font-semibold text-sm">Experience</span>
              </div>

              {/* Content */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 border-2 border-violet-500/50 flex items-center justify-center shadow-lg shadow-violet-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Marketing Coordinator</h3>
                  <p className="text-violet-300 text-sm mb-1">The Business School Kandy</p>
                  <p className="text-purple-400 text-xs mb-3">Jan 2019 - Jan 2025 · Kandy</p>
                  <div className="h-px w-full bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-transparent mb-3" />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mentored students in emerging technologies and guided technical skill development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div 
          className="relative group"
          style={{
            transform: `translateY(${scrollY * -10}px)`,
          }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-purple-600 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
          <div className="relative bg-black/60 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-8">
              Tech Stack & Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${skill.gradient} shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer`}
                  style={{
                    animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
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
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
            }
            50% { 
              transform: translateY(-10px) rotate(2deg);
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% { 
              opacity: 0.3;
            }
            50% { 
              opacity: 0.6;
            }
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
              opacity: 1;
              box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
            }
            50% { 
              opacity: 0.7;
              box-shadow: 0 0 30px rgba(168, 85, 247, 0.8);
            }
          }
          
          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
};

export default Timeline;
