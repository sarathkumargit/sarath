import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Open email client with prefilled data
    const subject = `Message from ${formData.name} via Portfolio`;
    const body = `Message from ${formData.name} (${formData.email}):\n\n${formData.message}`;
    window.location.href = `mailto:ksarathkumar.pro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Reset form after submission
    setTimeout(() => {
      setState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
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
            background: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
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
          {Array.from({ length: 20 }).map((_, i) => (
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
            Get in Touch
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-pulse-glow mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about it.
          </p>
        </div>

        {/* Contact Grid */}
        <div 
          className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Contact Form */}
          <div 
            className="group relative"
            style={{
              transform: `translateY(${scrollY * 10}px)`,
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
            <div className="relative bg-black/80 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 hover:border-violet-500/60 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="h-6 w-6 mr-2 text-violet-400" />
                Send a Message
              </h3>
              
              {submitted && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg mb-6 animate-scale-up">
                  <strong className="font-bold">Thanks!</strong>
                  <span className="block sm:inline"> Your message has been sent successfully.</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/40 border border-purple-500/30 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/40 border border-purple-500/30 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-black/40 border border-purple-500/30 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="group relative w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div 
            className="flex flex-col gap-6"
            style={{
              transform: `translateY(${scrollY * 5}px)`,
            }}
          >
            {/* Contact Information */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
              <div className="relative bg-black/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/60 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:ksarathkumar.pro@gmail.com" 
                    className="flex items-center text-gray-300 hover:text-violet-400 transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mr-3 group-hover/link:bg-violet-500/30 transition-colors">
                      <Mail className="h-5 w-5 text-violet-400" />
                    </div>
                    <span className="text-sm">ksarathkumar.pro@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/94726637867" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors group/link"
                  >
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 group-hover/link:bg-green-500/30 transition-colors">
                      <MessageCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <span className="text-sm">+94 0726637867</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="group relative flex-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse-slow" />
              <div className="relative h-full bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl p-6 shadow-lg shadow-violet-500/50">
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Start a Project?</h3>
                <p className="text-violet-100 mb-6 text-sm">Contact me today and let's bring your ideas to life!</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="mailto:ksarathkumar.pro@gmail.com" 
                    className="inline-flex items-center justify-center px-4 py-2 bg-white text-violet-600 rounded-lg hover:bg-gray-100 transition-all font-semibold text-sm hover:scale-105"
                  >
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </a>
                  <a 
                    href="https://wa.me/94726637867" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold text-sm hover:scale-105"
                  >
                    <Phone className="h-4 w-4 mr-2" /> WhatsApp
                  </a>
                </div>
              </div>
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
        `
      }} />
    </section>
  );
};

export default Contact;
