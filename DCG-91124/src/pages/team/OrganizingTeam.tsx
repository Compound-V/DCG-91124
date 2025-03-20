import React from 'react';
import InternalNavbar from '../../components/InternalNavbar';
import TeamTree from '../../components/TeamTree';
import Footer from '../../components/Footer';

const organizers = [
  {
    id: 1,
    name: 'Kashish Kanojia',
    role: 'Point of Contact',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHJDmF-ZiVw-g/profile-displayphoto-shrink_800_800/B56ZSQImgUHEAc-/0/1737584962063?e=1747267200&v=beta&t=a5zLFCijRucr2ozz2Q6JpxP2HiVeBDf9QznuP5pOz9g',
    bio: 'A cybersecurity professional specializing in cloud computing, networking, and ethical hacking. He is a Committee Member at the Global Cybersecurity Association (GCA) and leads the Cybersecurity team at Ideation Axis, Ghana.',
    expertise: ['Cloud Security', 'Technical Invesitgation'],
    achievements: [
      'Founded multiple successful cybersecurity initiatives',
      'Speaker at major security conferences including BlackHat and DEFCON',
      'Published author in security journals',
      'Advisory board member for security startups',
    ],
    publications: [
      'Modern Security Architecture Patterns (2024)',
      'Building Resilient Security Communities (2023)',
      'The Future of Cybersecurity Education (2022)',
    ],
    certifications: ['CISSP', 'CISM', 'CEH', 'OSCP'],
    social: {
      linkedin: 'https://www.linkedin.com/in/cyberfascinate/',
    },
  },
  {
    id: 2,
    name: 'Deepak Kumar',
    role: 'Point of Contact',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQFswb8CpWArqw/profile-displayphoto-shrink_800_800/B56ZUufWUkHQAc-/0/1740241725423?e=1747267200&v=beta&t=9aaWymrq_A40FG4mFqkeHfLKJIUi0f-M_lhwPMBMWNk',
    bio: 'Expert in event management and logistics. Ensures that DCG - 91124 runs smoothly from planning to execution.',
    expertise: [
      'Event Management',
      'Project Management',
      'Vendor Relations',
      'Budget Planning',
      'Team Coordination',
    ],
    achievements: [
      'Successfully managed 50+ tech conferences',
      'Developed innovative event management systems',
      'Created sustainable event practices',
      'Built strong vendor partnerships',
    ],
    publications: [
      'Sustainable Tech Events: A Guide (2024)',
      'Digital Event Management Best Practices (2023)',
    ],
    certifications: ['PMP', 'CAPM', 'Event Management Professional'],
    social: {
      linkedin: 'https://www.linkedin.com/in/cyberengulf/',
    },
  },
];

const OrganizingTeam: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-10"></div>
      <div className="fixed inset-0 bg-grid opacity-10 pointer-events-none z-10"></div>

      <InternalNavbar />

      <main className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

        <div className="relative z-10">
          <TeamTree title="Organizing Team" members={organizers} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrganizingTeam;
