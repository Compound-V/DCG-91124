import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import ProfileModal from './ProfileModal';
import { teamSections } from '../data/teams';

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Our Team</h2>

        <div className="mb-8 max-w-3xl mx-auto text-center">
          <p>
            DCG - 91124 is organized by a dedicated team of cybersecurity
            professionals, researchers, and enthusiasts who are committed to
            creating an exceptional community-driven conference experience.
          </p>
        </div>

        {teamSections.map((section) => (
          <div key={section.id} className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-[#ff5500]">
                {section.title}
              </h3>
              <Link
                to={`/team/${section.id}`}
                className="text-[#ff5500] hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider flex items-center gap-2"
              >
                View All
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {section.members.map((member) => (
                <ProfileCard 
                  key={member.id} 
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.description}
                  expertise={member.expertise}
                  social={member.social}
                  onClick={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <Link to="/team/volunteers" className="btn btn-primary">
            Join Our Team
          </Link>
        </div>
      </div>

      {selectedMember && (
        <ProfileModal
          profile={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

export default Team;