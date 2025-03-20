import React from 'react';
import { X, Github, Twitter, Linkedin } from 'lucide-react';
import { useModal } from '../hooks/useModal';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    name: string;
    role: string;
    image: string;
    description: string;
    social?: {
      github?: string;
      linkedin?: string;
      twitter?: string;
    };
  };
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose, profile }) => {
  useModal(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]"
      onClick={onClose}
    >
      <div 
        className="bg-[#1a1a1a] w-full max-w-2xl relative border border-[#333] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#ff5500] transition-colors z-10 bg-[#333] p-1.5 rounded-sm"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <div className="flex gap-6 mb-8">
            <div className="w-32 h-32 relative overflow-hidden border border-[#333]">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-[#ff5500] mb-2">{profile.name}</h2>
              <p className="text-lg text-white mb-4">{profile.role}</p>
              
              <div className="flex gap-3">
                {profile.social?.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a66c2] hover:text-[#ff5500] transition-colors bg-[#333] p-2 rounded-sm"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {profile.social?.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ff5500] transition-colors bg-[#333] p-2 rounded-sm"
                  >
                    <Github size={20} />
                  </a>
                )}
                {profile.social?.twitter && (
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1da1f2] hover:text-[#ff5500] transition-colors bg-[#333] p-2 rounded-sm"
                  >
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#999] leading-relaxed">{profile.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;