import React, { useEffect, useState } from 'react';
import image from 'IMG_1321.JPG';

// Profile Image
import profileImage from 'IMG_1321.JPG';

// Technology Icons
import dotnetIcon from '../assets/icons/dotnet-core.png';
import tailwindIcon from '../assets/icons/tailwind.jpg';
import sketchupIcon from '../assets/icons/sketchup.jpeg';
import sassIcon from '../assets/icons/sass.png';
import reactIcon from '../assets/icons/react.png';
import htmlIcon from '../assets/icons/html.jpg';
import jsIcon from '../assets/icons/js.png';
import pythonIcon from '../assets/icons/python.png';
import djangoIcon from '../assets/icons/dj.png';
import springIcon from '../assets/icons/spring.png';
import javaIcon from '../assets/icons/java.png';
import phpIcon from '../assets/icons/php.png';

// CV File
import cvFile from '../assets/sarathkumar.pdf';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [popupsVisible, setPopupsVisible] = useState({});
  
  // Messages that will pop up around the image
  const messages = [
    { id: 'developer', text: 'Developer', position: 'top-1/4 -left-4 sm:-left-8' },
    { id: 'designer', text: 'Designer', position: '-top-8 left-1/2 -translate-x-1/2' },
    { id: 'innovator', text: 'Innovator', position: 'bottom-1/4 -left-4 sm:-left-8' },
    { id: 'techEnthusiast', text: 'Tech Enthusiast', position: 'bottom-8 right-1/4' },
    { id: 'martialArtist', text: 'Martial Artist', position: 'bottom-1/3 -right-12' }
  ];
  
  // Technology icons that will animate
  const technologies = [
    { name: '.dotnet', icon: dotnetIcon },
    { name: 'Tailwind', icon: tailwindIcon },
    { name: 'SketchUp', icon: sketchupIcon },
    { name: 'Sass', icon: sassIcon },
    { name: 'React', icon: reactIcon },
    { name: 'html,css', icon: htmlIcon },
    { name: 'js', icon: jsIcon },
    { name: 'python', icon: pythonIcon },
    { name: 'django', icon: djangoIcon },
    { name: 'springboot', icon: springIcon },
    { name: 'java', icon: javaIcon },
    { name: 'php', icon: phpIcon },
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'sarathkumar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    // Load Spline viewer script
    const splineScript = document.createElement('script');
    splineScript.type = 'module';
    splineScript.src = 'https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js';
    document.head.appendChild(splineScript);
    
    // Show main content
    setVisible(true);
    
    // Function to animate popups in a continuous cycle
    const startPopupCycle = () => {
      // Initial display of messages
      const animateMessages = () => {
        messages.forEach((message, index) => {
          // Show message after delay based on index
          const showTimeout = setTimeout(() => {
            setPopupsVisible(prev => ({ ...prev, [message.id]: true }));
            
            // Hide message after 2 seconds
            const hideTimeout = setTimeout(() => {
              setPopupsVisible(prev => ({ ...prev, [message.id]: false }));
            }, 2000); // Visibility duration
            
            return () => {
              clearTimeout(hideTimeout);
            };
          }, index * 500); // Stagger delay between messages
          
          return () => {
            clearTimeout(showTimeout);
          };
        });
      };
      
      // Start animation immediately
      animateMessages();
      
      // Set interval to continuously repeat the animation
      const cycleInterval = setInterval(() => {
        animateMessages();
      }, messages.length * 500 + 2500); // Cycle time = (stagger delay × number of messages) + visibility duration + small gap
      
      return () => {
        clearInterval(cycleInterval);
      };
    };
    
    // Start the continuous popup cycle
    const cleanupCycle = startPopupCycle();
    
    // Clean up everything when component unmounts
    return () => {
      cleanupCycle();
      if (document.head.contains(splineScript)) {
        document.head.removeChild(splineScript);
      }
    };
  }, []);

  return (
    <section id="home" className="relative bg-indigo-900 overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-black z-0"></div>

      {/* Spline 3D model with opacity overlay */}
      <div className="absolute inset-0 z-0 opacity-70">
        <spline-viewer
          url="https://prod.spline.design/RJHvLFVM0NzQbwMV/scene.splinecode"
          events-target="global" // Enable global cursor interaction
        ></spline-viewer>
      </div>

      <div className="max-w-8xl mx-auto relative z-10 px-4 sm:px-6 md:px-8">
        {/* Mobile-first approach using flex-col on mobile and flex-row on lg and up */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-16">
          {/* For mobile: First show image, then text. For desktop: Keep original order */}
          <div className="hidden lg:block lg:w-1/2 mb-12 lg:mb-0">
            {/* This is the text content for desktop only (shows on left) */}
            <div className={`backdrop-blur-sm bg-indigo-900/30 p-4 sm:p-6 rounded-lg text-white transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-center lg:text-left">
                <span className="block">Hi, I'm Sarathkumar</span>
                <span className="block text-indigo-300 mt-1 text-[40px]">Innovator in Code and Creativity</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-indigo-100 text-center lg:text-left">
                Passionate developer skilled in web and mobile app development and 3D SketchUp design. I excel at creating user-friendly products with intuitive interfaces and robust systems while leveraging my collaboration skills to achieve impactful results. Let's connect and build something extraordinary!
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a 
                    href="#projects" 
                    className="w-full flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50 transition-colors"
                  >
                    View Projects
                  </a>
                </div>
                <div className="w-full sm:w-auto">
                  <button 
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-indigo-300 text-sm sm:text-base font-medium rounded-md text-white bg-transparent hover:bg-indigo-800 transition-colors"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Image - Shows on both mobile and desktop */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mt-8 xs:mt-12 sm:mt-16 md:mt-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-indigo-300 shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <img
                  className="w-full h-full object-cover"
                  src={profileImage}
                  alt="Profile"
                />
              </div>
              
              {/* Popup messages that blink continuously */}
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`absolute ${message.position} transform bg-indigo-800 px-2 py-1 sm:px-3 sm:py-1 rounded-lg shadow-lg z-20 transition-all duration-500 text-xs sm:text-sm
                  ${popupsVisible[message.id] 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-0'}`}
                  style={{
                    transformOrigin: 'center center',
                    animation: popupsVisible[message.id] ? 'popupZoom 0.5s forwards' : 'none'
                  }}
                >
                  <p className="font-medium text-indigo-200 whitespace-nowrap">{message.text}</p>
                </div>
              ))}
              
              {/* Circular path for visual effect */}
              <div className="absolute inset-0 border-2 border-indigo-400/50 border-dashed rounded-full" style={{
                animation: "spin 20s linear infinite",
              }}></div>
            </div>
          </div>
          
          {/* Mobile-only text content that appears below the image */}
          <div className="w-full lg:hidden mt-12">
            <div className={`backdrop-blur-sm bg-indigo-900/30 p-4 sm:p-6 rounded-lg text-white transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-3xl sm:text-4xl tracking-tight font-extrabold text-center">
                <span className="block">Hi, I'm Sarathkumar</span>
                <span className="block text-indigo-300 mt-1 text-[32px]">Innovator in Code and Creativity</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-indigo-100 text-center">
                Passionate developer skilled in web and mobile app development and 3D SketchUp design. I excel at creating user-friendly products with intuitive interfaces and robust systems while leveraging my collaboration skills to achieve impactful results. Let's connect and build something extraordinary!
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <div className="rounded-md shadow w-full sm:w-auto">
                  <a 
                    href="#projects" 
                    className="w-full flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50 transition-colors"
                  >
                    View Projects
                  </a>
                </div>
                <div className="w-full sm:w-auto">
                  <button 
                    onClick={handleDownloadCV}
                    className="w-full flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border border-indigo-300 text-sm sm:text-base font-medium rounded-md text-white bg-transparent hover:bg-indigo-800 transition-colors"
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Technology icons moving from left to right */}
      <div className="absolute bottom-0 w-full overflow-hidden h-16 sm:h-20 md:h-24 lg:h-28 bg-indigo-800/50 backdrop-blur-sm z-10">
        <div style={{
          display: "flex",
          width: "fit-content",
          animation: "scroll 30s linear infinite",
          paddingTop: "8px",
          paddingBottom: "8px",
        }}>
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center mx-3 sm:mx-4 md:mx-6 lg:mx-8 transition-transform duration-300 hover:scale-110"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-md p-1 sm:p-2">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="max-w-full max-h-full"
                />
              </div>
              <span className="text-xs mt-1 text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add inline styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${technologies.length * 100}px);
            }
          }
          
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes popupZoom {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            70% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes blink {
            0%, 50% { opacity: 0; }
            25%, 75% { opacity: 1; }
            100% { opacity: 0; }
          }
          
          @media (max-width: 640px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-${technologies.length * 60}px);
              }
            }
          }
        `
      }} />
    </section>
  );
};

export default Hero;
