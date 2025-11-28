import React, { useState, useEffect, useRef } from 'react';
import webdevImage from '../assets/webdev.png';
import aimovieImage from '../assets/aimovie.png';
import ltPdf from '../assets/lt.pdf';
import aiPdf from '../assets/ai.pdf';

const Blog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Sample blog data with imported images and PDFs
  const blogs = [
    {
      id: 2,
      title: 'The Future of Web Development',
      description: 'Discover how modern frameworks and tools are reshaping the landscape of web development in 2025.',
      pdfUrl: ltPdf,
      imageUrl: webdevImage,
      date: 'March 10, 2025',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Artificial Intelligence in movies',
      description: 'Learn the essential techniques and strategies for implementing effective machine learning solutions.',
      pdfUrl: aiPdf,
      imageUrl: aimovieImage,
      date: 'March 5, 2025',
      readTime: '10 min read',
    },
  ];

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = -rect.top / (rect.height + window.innerHeight);
        setScrollY(scrollProgress);

        // Trigger animations when section is in view
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to open the modal with the selected PDF
  const openModal = (pdfUrl) => {
    setSelectedPdf(pdfUrl);
    setLoadingPdf(true);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf('');
  };

  // Simulating PDF load completion
  useEffect(() => {
    if (isModalOpen) {
      const timer = setTimeout(() => {
        setLoadingPdf(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <section 
      ref={sectionRef}
      id="blog" 
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1: Animated gradient background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/30 to-violet-950/30"
          style={{
            transform: `translateY(${scrollY * 50}px)`,
          }}
        />
        
        {/* Layer 2: Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
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
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-purple-500/20 blur-sm"
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
            backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)',
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
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 mb-4 animate-gradient">
            Latest Articles
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse-glow mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Thoughts and insights about design, development, and technology.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{
                transform: `translateY(${scrollY * (index % 2 === 0 ? 10 : 5)}px)`,
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
              <div 
                className="relative bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-500/60 transition-all duration-500 cursor-pointer h-full flex flex-col"
                onClick={() => openModal(blog.pdfUrl)}
              >
                {/* Card Image */}
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col">
                  {/* Meta info */}
                  <div className="flex justify-between items-center text-xs text-purple-300 mb-2">
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {blog.readTime}
                    </span>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 flex-1 leading-relaxed line-clamp-2">
                    {blog.description}
                  </p>
                  
                  {/* Read more button */}
                  <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:text-violet-300 transition-colors">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div 
          className="flex justify-center"
          style={{
            transform: `translateY(${scrollY * -10}px)`,
          }}
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">View All Articles</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-300">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 w-11/12 md:w-4/5 lg:w-3/4 max-h-[90vh] flex flex-col animate-scale-up">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-purple-500/30 flex-shrink-0">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Article Preview</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-purple-500/20 transition-all duration-200"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="p-6 flex-grow bg-black/40 overflow-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent">
              {loadingPdf ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                  <p className="mt-4 text-purple-300">Loading document...</p>
                </div>
              ) : (
                <iframe
                  src={selectedPdf}
                  title="PDF Viewer"
                  className="w-full h-full min-h-[50vh] rounded-lg border border-purple-500/30"
                  frameBorder="0"
                />
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-purple-500/30 bg-black/60 flex flex-col sm:flex-row justify-between items-center gap-3 flex-shrink-0">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-3 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-500/10 font-medium transition-all duration-200 order-2 sm:order-1"
              >
                Close
              </button>
              <a 
                href={selectedPdf} 
                download 
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 font-medium flex items-center justify-center transition-all duration-200 order-1 sm:order-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
      
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
              box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
            }
            50% { 
              opacity: 0.7;
              box-shadow: 0 0 30px rgba(139, 92, 246, 0.8);
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
          
          .animate-scale-up {
            animation: scaleUp 0.3s ease-out forwards;
          }
          
          @keyframes scaleUp {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          /* Custom scrollbar styles */
          .scrollbar-thin {
            scrollbar-width: thin;
          }
          
          .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: rgba(168, 85, 247, 0.5);
            border-radius: 9999px;
          }
          
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background-color: rgba(168, 85, 247, 0.7);
          }
        `
      }} />
    </section>
  );
};

export default Blog;
