import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">About DCG 91124</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-[#ff5500]">Mission</h3>
              <p>
                DEFCON Groups (DCGs) are dedicated to fostering a global network of cybersecurity 
                professionals, researchers, and enthusiasts. We create inclusive spaces for knowledge 
                sharing and collaborative innovation, empowering individuals to shape the future of 
                digital security responsibly.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-[#ff5500]">Vision</h3>
              <p>
                We envision a cybersecurity landscape driven by curiosity, innovation, and integrity. 
                Through hands-on learning and collaboration, we bridge the gap between experts and 
                newcomers, creating an environment where everyone contributes to advancing security 
                technology.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-[#ff5500]">Legacy</h3>
              <p>
                Since 1993, DEFCON has evolved from a small hacker gathering to the world's premier 
                cybersecurity conference. DCGs extend this legacy globally, hosting technical workshops, 
                CTF challenges, and collaborative events that embody our commitment to open knowledge 
                exchange and community-driven innovation.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-[#ff5500]">Community</h3>
              <p>
                Our events thrive on community participation, powered by passionate volunteers, expert 
                speakers, and engaged participants. This collaborative approach ensures our content 
                remains cutting-edge and relevant, while fostering an inclusive environment that 
                welcomes diverse perspectives and experience levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;