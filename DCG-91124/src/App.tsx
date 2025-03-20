import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Team from './components/Team';
import Venue from './components/Venue';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialAnnouncements from './components/SocialAnnouncements';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight &&
          sectionId
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      {/* Digital noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-10"></div>
      
      {/* Grid overlay */}
      <div className="fixed inset-0 bg-grid opacity-10 pointer-events-none z-10"></div>
      
      <Navbar 
        activeSection={activeSection} 
        toggleMobileMenu={toggleMobileMenu} 
        mobileMenuOpen={mobileMenuOpen}
      />
      
      <main className="relative z-0">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Team />
        <Venue />
        <Contact />
        <SocialAnnouncements />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;