import React, { useState, useEffect } from 'react';
import aiImage from './assets/ai.jpg';
import webdevImage from './assets/webdev.png';
import aimovieImage from './assets/aimovie.png';

const Blog = () => {
  // State to manage the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState('');
  const [loadingPdf, setLoadingPdf] = useState(false);

  // Sample blog data with imported images
  const blogs = [
    {
      id: 2,
      title: 'The Future of Web Development',
      description: 'Discover how modern frameworks and tools are reshaping the landscape of web development in 2025.',
      pdfUrl: './src/assets/lt.pdf',
      imageUrl: webdevImage,
      date: 'March 10, 2025',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Artificial Intelligence in movies',
      description: 'Learn the essential techniques and strategies for implementing effective machine learning solutions.',
      pdfUrl: './src/assets/ai.pdf',
      imageUrl: aimovieImage,
      date: 'March 5, 2025',
      readTime: '10 min read',
    },
  ];

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
  }, []);

  return (
    <section id="blog" className="py-12 md:py-20 relative overflow-x-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="hidden md:block absolute -bottom-10 -right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      {/* Content container with z-index to appear above background */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with animated underline */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 inline-block relative">
            Latest Articles
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto my-4"></div>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-600 mx-auto">
            Thoughts and insights about design, development, and technology.
          </p>
        </div>

        {/* Search and Filter Bar - Improved for mobile responsiveness */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Enhanced horizontal scrollable filter buttons with visual cues */}
          <div className="relative w-full md:w-auto">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent scrollbar-rounded scroll-smooth scroll-px-4 md:scroll-px-0 -mx-4 px-4 md:mx-0 md:px-0">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 whitespace-nowrap">
                All
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                AI
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                Web Dev
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                Design
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                UX/UI
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                Mobile
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                Frontend
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none whitespace-nowrap">
                Backend
              </button>
            </div>
            {/* Scroll indicators */}
            <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 w-6 h-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Blog Cards with horizontal scrolling on mobile */}
        <div className="relative mb-12">
          {/* Mobile horizontal scroll view */}
          <div className="md:hidden flex overflow-x-auto gap-4 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent pb-4 -mx-4 px-4 scroll-smooth scroll-px-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                onClick={() => openModal(blog.pdfUrl)}
              >
                {/* Card image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  
                  {/* Read more button */}
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
            
            {/* "See more" card */}
            <div className="flex-shrink-0 w-48 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-md flex flex-col items-center justify-center p-6 cursor-pointer transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-center text-purple-800 font-medium">See All Articles</p>
            </div>
          </div>
          
          {/* Scroll indicators for mobile */}
          <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-48 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-48 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          {/* Desktop regular grid view */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                onClick={() => openModal(blog.pdfUrl)}
              >
                {/* Card image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                  
                  {/* Read more button */}
                  <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Button (Desktop only) */}
        <div className="hidden md:flex justify-center">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium">
            View All Articles
          </button>
        </div>
      </div>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-xl shadow-2xl w-11/12 md:w-4/5 lg:w-3/4 max-h-[90vh] flex flex-col animate-scale-up">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-6 border-b flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Article Preview</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
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

            {/* Modal Content */}
            <div className="p-4 flex-grow bg-gray-50 overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {loadingPdf ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-16 h-16 border-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
                  <p className="mt-4 text-gray-600">Loading document...</p>
                </div>
              ) : (
                <iframe
                  src={selectedPdf}
                  title="PDF Viewer"
                  className="w-full h-full min-h-[50vh] rounded-md border border-gray-200"
                />
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 md:p-6 border-t bg-white flex flex-col sm:flex-row justify-between items-center gap-3 flex-shrink-0">
              <button
                onClick={closeModal}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium order-2 sm:order-1"
              >
                Close
              </button>
              <button className="w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium flex items-center justify-center order-1 sm:order-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* CSS for animations and custom scrollbar */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 30px) scale(1.05);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
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
        
        /* Enhanced custom scrollbar styles */
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        
        /* For Webkit browsers (Chrome, Safari) */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(168, 85, 247, 0.3);
          border-radius: 9999px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(168, 85, 247, 0.5);
        }
        
        .scrollbar-rounded::-webkit-scrollbar-thumb {
          border-radius: 9999px;
        }
        
        * {
          scrollbar-color: rgba(168, 85, 247, 0.3) transparent;
          scrollbar-width: thin;
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Blog;
