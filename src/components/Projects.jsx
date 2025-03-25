import React, { useState, useEffect } from 'react';

const Projects = () => {
  // Animation state for circles
  const [activeIndex, setActiveIndex] = useState(null);

  // Animation effect for blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % 6;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Enhanced projects data with 6 projects and LinkedIn links
  const projects = [
    {
      id: 1,
      name: 'Wellassa Uni Hub',
      technologies: ['Bootstrap', 'php', 'mysql'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      linkedinPost: 'https://www.linkedin.com/posts/geeth-hashan-66b12b250_wellassaunihub-innovation-webdevelopment-ugcPost-7283867057782145024-_pyK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: '/src/assets/hub.jpg', // Add image path
    },
    {
      id: 2,
      name: 'Portfolio Website',
      technologies: ['react js', 'Tailwind CSS', 'vite'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://portfolio-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/yourusername_portfolio-nextjs-frontend-activity-234567',
      image: '/src/assets/portfolio.png', // Add image path
    },
    {
      id: 3,
      name: 'Hospital Appointment Booking System',
      technologies: ['Bootstrap, HTML, CSS', 'MySql', 'JSP, Servlets'],
      githubLink: 'https://github.com/yourusername/taskmanager',
      //liveLink: 'https://taskmanager-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_webdevelopment-rapidapplicationdevelopment-activity-7283871597445218304-nPQZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: '/src/assets/hospital.jpg', // Add image path
    },
    {
      id: 4,
      name: 'Game Store',
      technologies: ['HTML,CSS', 'Php', 'MySql','JavaScript'],
      githubLink: 'https://github.com/yourusername/aichat',
      liveLink: 'https://aichat-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_webdevelopment-softwarearchitecture-mvc-activity-7243678221236412416-cVp-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: '/src/assets/game.png', // Add image path
    },
    {
      id: 5,
      name: 'SketchUp Cabana design',
      technologies: ['3D SketchUp', 'Vray', 'Photoshop'],
      githubLink: 'https://github.com/yourusername/fitnesstracker',
      //liveLink: 'https://fitnesstracker-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_3ddesign-ai-architecture-activity-7254358667309862912-VWmi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: '/src/assets/cabana.jpeg', // Add image path
    },
    {
      id: 6,
      name: 'E-commerce frontend',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/wallet',
      //liveLink: 'https://wallet-project.com',
      linkedinPost: 'https://www.linkedin.com/posts/sarath-kumar-07aa14302_ecommercedevelopment-htmlcssjavascript-innovation-activity-7185473606498291712-6b1s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE1khF4B1r3oCV7Oy05moQcW1_9s-N_-7_k',
      image: '/src/assets/ecom.jpeg', // Add image path
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden"
    >
      {/* Programming & 3D Design Background */}
      <div className="absolute inset-0 bg-gray-900 z-0">
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Code elements in the background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
          <div className="absolute -left-20 top-10 text-purple-500 text-opacity-50 text-4xl font-mono transform -rotate-12">
            &lt;div className="projects"&gt;
          </div>
          <div className="absolute right-10 top-1/4 text-green-400 text-opacity-50 text-3xl font-mono transform rotate-6">
            const [state, setState] = useState();
          </div>
          <div className="absolute left-1/4 bottom-1/3 text-blue-400 text-opacity-50 text-3xl font-mono transform -rotate-3">
            function render() &#123; return; &#125;
          </div>
          <div className="absolute right-1/3 bottom-20 text-teal-400 text-opacity-50 text-2xl font-mono transform rotate-2">
            .container &#123; display: flex; &#125;
          </div>
          <div className="absolute left-1/2 top-1/3 text-orange-400 text-opacity-50 text-2xl font-mono transform -rotate-5">
            import React from 'react';
          </div>
        </div>

        {/* 3D elements in the background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 right-20">
            <svg width="150" height="150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 0 L200 50 L100 100 L0 50 Z" fill="#9333ea" />
              <path d="M100 100 L200 50 L200 150 L100 200 Z" fill="#7e22ce" />
              <path d="M100 100 L0 50 L0 150 L100 200 Z" fill="#6b21a8" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-10">
            <svg width="120" height="120" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,20 L180,20 L180,180 L20,180 Z" fill="none" stroke="#f97316" strokeWidth="4" />
              <path d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" stroke="#f97316" strokeWidth="4" />
              <line x1="20" y1="20" x2="50" y2="50" stroke="#f97316" strokeWidth="4" />
              <line x1="180" y1="20" x2="150" y2="50" stroke="#f97316" strokeWidth="4" />
              <line x1="180" y1="180" x2="150" y2="150" stroke="#f97316" strokeWidth="4" />
              <line x1="20" y1="180" x2="50" y2="150" stroke="#f97316" strokeWidth="4" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/3">
            <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#06b6d4" strokeWidth="4" />
              <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="#06b6d4" strokeWidth="4" transform="rotate(30)" />
              <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="#06b6d4" strokeWidth="4" transform="rotate(90)" />
            </svg>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-600 opacity-30"
              style={{
                width: Math.random() * 10 + 5 + 'px',
                height: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 20}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Topic at the top */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 pb-2">
            My Projects
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
            Explore my latest work and creative solutions. Click on any project to view more details.
          </p>
        </div>

        {/* LinkedIn and GitHub Icons */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/in/sarath-kumar-07aa14302"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="text-gray-200 hover:text-purple-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.766.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Mobile view instruction */}
        <div className="block md:hidden text-center mb-4">
          <p className="text-gray-200 italic">Swipe horizontally to see more projects</p>
        </div>

        {/* Scrollable container for mobile devices */}
        <div className="overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
          {/* Project Circles - Horizontal scrollable on mobile, grid on larger screens */}
          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 justify-items-center min-w-max md:min-w-0">
            {projects.map((project, index) => (
              <div key={project.id} className="relative w-64 md:w-full max-w-xs aspect-square mx-2 md:mx-0">
                <a
                  href={project.linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div
                    className={`
                      absolute inset-0 rounded-full overflow-hidden
                      transform transition-all duration-700 ease-in-out
                      ${activeIndex === index ? 'scale-110 shadow-lg shadow-purple-500/50' : 'scale-100'}
                    `}
                  >
                    {/* Project Image */}
                    <img
                      src={project.image} // Use the image from the projects array
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/50 rounded-full">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.name}</h3>

                      <div className="flex flex-wrap justify-center gap-1 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs font-medium text-white bg-black/30 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Click Here Button */}
                      <button
                        className={`
                          mt-2 px-4 py-2 bg-white text-purple-700 rounded-full font-semibold
                          transform transition-all duration-500 hover:scale-105
                          shadow-md hover:shadow-xl
                          ${activeIndex === index ? 'animate-pulse' : ''}
                        `}
                      >
                        Click Here
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Add CSS for hiding scrollbar but keeping functionality */}
        <style jsx>{`
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
            }
            25% {
              transform: translateY(-20px) translateX(10px);
            }
            50% {
              transform: translateY(0) translateX(20px);
            }
            75% {
              transform: translateY(20px) translateX(10px);
            }
            100% {
              transform: translateY(0) translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;