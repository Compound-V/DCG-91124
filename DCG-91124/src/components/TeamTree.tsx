import React from 'react';
import ProfileCard from './ProfileCard';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  publications: string[];
  certifications: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface TeamTreeProps {
  title: string;
  members: TeamMember[];
}

const TeamTree: React.FC<TeamTreeProps> = ({ title, members }) => {
  return (
    <div className="relative py-20 z-[1]">
      {/* Central Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#ff5500] transform -translate-x-1/2"></div>

      {/* Title */}
      <div className="relative z-10 mb-16">
        <div className="bg-[#1a1a1a] border-2 border-[#ff5500] p-4 max-w-xs mx-auto text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid gap-16">
          {members.map((member, index) => (
            <div
              key={member.id}
              className={`relative ${
                index % 2 === 0 ? 'text-left' : 'text-left'
              }`}
            >
              {/* Branch Line */}
              <div
                className={`absolute top-1/2 ${
                  index % 2 === 0 ? 'right-0 left-1/2' : 'left-0 right-1/2'
                } h-px bg-[#ff5500]`}
              ></div>

              {/* Node Point */}
              <div
                className={`absolute top-1/2 ${
                  index % 2 === 0
                    ? 'right-[calc(50%-5px)]'
                    : 'left-[calc(50%-5px)]'
                } w-2.5 h-2.5 bg-[#ff5500] transform -translate-y-1/2 rotate-45`}
              ></div>

              {/* Profile Card Container */}
              <div
                className={`relative ${
                  index % 2 === 0
                    ? 'mr-[calc(50%+2rem)]'
                    : 'ml-[calc(50%+2rem)]'
                }`}
              >
                <ProfileCard {...member} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTree;
