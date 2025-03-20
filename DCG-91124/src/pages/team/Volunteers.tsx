import React, { useState } from 'react';
import InternalNavbar from '../../components/InternalNavbar';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import { Linkedin } from 'lucide-react';
import { volunteerSections } from '../../data/volunteers';

const Volunteers: React.FC = () => {
  const [showClosedModal, setShowClosedModal] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-10"></div>
      <div className="fixed inset-0 bg-grid opacity-10 pointer-events-none z-10"></div>

      <InternalNavbar />

      <main className="py-20 relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="section-title text-center">Volunteer Teams</h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-[#999]">
              Meet our dedicated volunteers who contribute their time and expertise to make 
              DCG - 91124 an exceptional event. Join us in building the future of cybersecurity.
            </p>
          </div>
          
          {volunteerSections.map((section) => (
            <div key={section.id} className="mb-16">
              <div className="card mb-8 border-[#ff5500]">
                <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                <p className="text-[#999] mb-6">{section.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.members.map((member) => (
                    <div 
                      key={member.id}
                      className="card hover:scale-105 transition-transform duration-300 bg-[#1a1a1a] border border-[#333] hover:border-[#ff5500]"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 relative overflow-hidden rounded-sm border border-[#333]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                          
                          {member.social?.linkedin && (
                            <a
                              href={member.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute bottom-1 right-1 text-white hover:text-[#0a66c2] transition-colors bg-black/50 p-1.5 rounded-sm"
                              aria-label={`${member.name}'s LinkedIn profile`}
                            >
                              <Linkedin size={14} />
                            </a>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#ff5500]">{member.name}</h3>
                          <p className="text-sm text-white mb-2">{member.role}</p>
                          <p className="text-xs text-[#999] line-clamp-2">{member.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="text-center">
            <button 
              onClick={() => setShowClosedModal(true)} 
              className="btn btn-primary"
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </main>

      <Modal
        isOpen={showClosedModal}
        onClose={() => setShowClosedModal(false)}
        title="Volunteer Applications"
        maxWidth="max-w-lg"
      >
        <div className="text-center">
          <p className="text-[#999] mb-8">
            Thank you for your interest in volunteering for DCG - 91124. Unfortunately, 
            volunteer applications are currently closed. Please check back later or 
            follow us on social media for updates on future opportunities.
          </p>
          <button 
            onClick={() => setShowClosedModal(false)}
            className="btn btn-primary"
          >
            Close
          </button>
        </div>
      </Modal>
      
      <Footer />
    </div>
  );
};

export default Volunteers;