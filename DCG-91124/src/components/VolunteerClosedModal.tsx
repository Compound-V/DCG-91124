import React, { useEffect } from 'react';
import { X, AlertTriangle, Twitter, Linkedin, Instagram, Github, Globe } from 'lucide-react';

interface VolunteerClosedModalProps {
  onClose: () => void;
}

const VolunteerClosedModal: React.FC<VolunteerClosedModalProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999] p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-[#1a1a1a] w-full max-w-lg relative border border-[#333] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#ff5500] transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-[#ff5500] bg-opacity-20 flex items-center justify-center">
              <AlertTriangle size={24} className="text-[#ff5500]" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4 uppercase tracking-wider">
            Volunteer Applications Closed
          </h2>
          
          <p className="text-[#999] text-center mb-8">
            Thank you for your interest in volunteering for DCG - 91124. Unfortunately, volunteer applications are currently closed. Please check back later or follow us on social media for updates on future opportunities.
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-6">
              <a 
                href="https://twitter.com/dcg91124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5500] transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://linkedin.com/company/dcg91124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5500] transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://instagram.com/dcg91124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5500] transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://github.com/dcg91124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5500] transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://mastodon.social/@dcg91124" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#ff5500] transition-colors"
              >
                <Globe size={24} />
              </a>
            </div>

            <button 
              onClick={onClose}
              className="px-8 py-2 bg-transparent text-white border border-[#ff5500] hover:bg-[#ff5500] transition-colors uppercase tracking-wider text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerClosedModal;