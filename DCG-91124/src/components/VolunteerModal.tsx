import React, { useEffect } from 'react';
import { X, Github, Twitter } from 'lucide-react';
import { Volunteer } from '../types/volunteer';

interface VolunteerModalProps {
  volunteer: Volunteer;
  onClose: () => void;
}

const VolunteerModal: React.FC<VolunteerModalProps> = ({ volunteer, onClose }) => {
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
        className="bg-[#1a1a1a] w-full max-w-2xl relative border border-[#333] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#ff5500] transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="flex gap-6 mb-8">
            <div className="w-32 h-32 relative overflow-hidden border border-[#333]">
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-[#ff5500] mb-2">{volunteer.name}</h2>
              <p className="text-lg text-white mb-4">{volunteer.role}</p>
              
              <div className="flex gap-3">
                {volunteer.social?.github && (
                  <a
                    href={volunteer.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-[#ff5500] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
                {volunteer.social?.twitter && (
                  <a
                    href={volunteer.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#666] hover:text-[#ff5500] transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {volunteer.expertise && volunteer.expertise.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-[#ff5500]">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {volunteer.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-[#333] text-white px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {volunteer.achievements && volunteer.achievements.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-[#ff5500]">Achievements</h3>
                <ul className="space-y-2">
                  {volunteer.achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 text-[#999]"
                    >
                      <span className="text-[#ff5500] mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {volunteer.certifications && volunteer.certifications.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-[#ff5500]">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {volunteer.certifications.map((cert, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-[#333] text-white px-3 py-1 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {volunteer.projects && volunteer.projects.length > 0 && (
              <div>
                <h3 className="text-lg font-bold mb-3 text-[#ff5500]">Projects</h3>
                <ul className="space-y-2">
                  {volunteer.projects.map((project, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2 text-[#999]"
                    >
                      <span className="text-[#ff5500] mt-1">•</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;