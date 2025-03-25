import React from 'react';
import Navbar from './/components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      <Timeline />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;