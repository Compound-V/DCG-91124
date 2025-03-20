import React, { memo } from 'react';
import { Linkedin } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise?: string[];
  social?: {
    linkedin?: string;
  };
  onClick?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = memo(({
  name,
  role,
  image,
  bio,
  expertise = [],
  social,
  onClick
}) => {
  return (
    <div
      className="group card hover-glitch cursor-pointer transition-all duration-300 hover:scale-[1.02] relative z-10"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
      aria-label={`View ${name}'s profile`}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-1/3 flex-shrink-0">
          <div className="aspect-square relative overflow-hidden border border-[#333] group-hover:border-[#ff5500] transition-colors duration-300">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            {social?.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-white hover:text-[#0a66c2] transition-colors bg-black/50 p-1.5 rounded-sm"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div>
            <h3 className="text-lg font-bold mb-1 group-hover:text-[#ff5500] transition-colors">
              {name}
            </h3>
            <p className="text-sm text-[#ff5500] mb-2">{role}</p>
            <p className="text-sm text-[#999] mb-3">{bio}</p>
          </div>

          {expertise.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#1a1a1a] text-[#999] px-2 py-0.5 border border-[#333] group-hover:border-[#ff5500]/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ProfileCard.displayName = 'ProfileCard';

export default ProfileCard;