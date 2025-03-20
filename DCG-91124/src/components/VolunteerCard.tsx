import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { Volunteer } from '../types/volunteer';

interface VolunteerCardProps extends Volunteer {
  onClick: () => void;
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({
  name,
  role,
  image,
  expertise = [],
  achievements = [],
  social,
  onClick
}) => {
  return (
    <div 
      className="card hover:scale-105 transition-transform duration-300 cursor-pointer bg-[#1a1a1a] border border-[#333] hover:border-[#ff5500]"
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className="w-20 h-20 relative overflow-hidden rounded-sm border border-[#333]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-[#ff5500]">{name}</h3>
          <p className="text-sm text-white mb-2">{role}</p>
          
          <div className="flex flex-wrap gap-1.5 mb-3">
            {expertise.slice(0, 2).map((skill, index) => (
              <span 
                key={index}
                className="text-xs bg-[#333] text-[#999] px-2 py-0.5 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
          
          {achievements.length > 0 && (
            <p className="text-xs text-[#666] mb-2 line-clamp-1">
              {achievements[0]}
            </p>
          )}
          
          <div className="flex gap-2">
            {social?.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#ff5500] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
              </a>
            )}
            {social?.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666] hover:text-[#ff5500] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <Twitter size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;