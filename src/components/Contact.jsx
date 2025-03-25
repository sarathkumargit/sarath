import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
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
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-70 translate-x-1/4 translate-y-1/4"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-green-100 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-60"></div>
      
      {/* Subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-500">Have a project in mind? Let's talk about it.</p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 backdrop-blur-sm bg-opacity-95">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <strong className="font-bold">Thanks!</strong>
                  <span className="block sm:inline"> Your message has been sent successfully.</span>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100 backdrop-blur-sm bg-opacity-95">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">Feel free to reach out through any of these channels. I'm always open to discussing new projects and opportunities.</p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:ksarathkumar.pro@gmail.com" 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2 text-blue-500" />
                    <span>ksarathkumar.pro@gmail.com</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/94726637867" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-2 text-green-500" />
                    <span>+94 0726637867</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md p-6 text-white border border-blue-400">
                <h3 className="text-xl font-semibold mb-2">Ready to Start a Project?</h3>
                <p className="mb-4">Contact me today and let's bring your ideas to life!</p>
                <div className="flex space-x-3">
                  <a 
                    href="mailto:ksarathkumar.pro@gmail.com" 
                    className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-1" /> Email
                  </a>
                  <a 
                    href="https://wa.me/94726637867" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-1" /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;