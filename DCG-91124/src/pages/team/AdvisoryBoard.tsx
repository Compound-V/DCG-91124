import React from 'react';
import InternalNavbar from '../../components/InternalNavbar';
import TeamTree from '../../components/TeamTree';
import Footer from '../../components/Footer';

// Corrected advisors array
const advisors = [
  {
    id: 5,
    name: 'Monnappa K A',
    role: 'Advisory Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/C5603AQFVadbJ7oHbZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516971305792?e=2147483647&v=beta&t=uJnKpE9ePgYodeZnAzZD9KvHdTcNEEM1TiTpaTjLAnM',
    bio: 'Security professional with over 17 years of experience in incident response and investigation. He previously worked for Microsoft & Cisco as a threat hunter, mainly focusing on threat hunting, investigation, and research of advanced cyber attacks.',
    expertise: ['Malware Analysis', 'Threat Hunting'],
    achievements: [
      'Published 50+ research papers',
      'Awarded multiple research grants',
      'Keynote speaker at major conferences',
      'Led major security research initiatives',
    ],
    publications: [
      'Advanced Network Security Protocols (2024)',
      'Future of Cryptographic Systems (2023)',
      'Security Research Methodologies (2022)',
    ],
    certifications: ['Ph.D. in Computer Science', 'CISSP', 'Security+'],
    social: {
      linkedin: 'https://www.linkedin.com/in/monnappa-k-a-1b845a42/',
    },
  },
  {
    id: 6,
    name: 'Adhokshaj Mishra',
    role: 'Advisory Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/D4D03AQFnLKTfEwE8Tg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715524267240?e=1747267200&v=beta&t=WAiVxrCOWlOsJIn1dPXwwWDndxZmWzOx_TbCjgU7bYE',
    bio: 'He specializes in the field of information security, with a focus on malware research, apart from occasional dabbing in applied cryptography. He is on the review board of Vulncon and currently the staff detection engineer at SentinelOne.',
    expertise: ['Linux Kernel Development & Exploit', 'Reverse Engineering'],
    achievements: [
      'Led security transformation for Fortune 500 companies',
      'Developed industry-standard security frameworks',
      'Advisory board member for security startups',
      'Regular speaker at security conferences',
    ],
    publications: [
      'Critical Infrastructure Protection (2024)',
      'Enterprise Security Strategy (2023)',
    ],
    certifications: ['CISSP', 'CISM', 'CRISC'],
    social: {
      linkedin: 'https://www.linkedin.com/in/adhokshajmishra/',
    },
  },
  {
    id: 7,
    name: 'Vandana Verma',
    role: 'Advisory Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/C5603AQFhgElDYE2OrA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646746141404?e=1747267200&v=beta&t=9J-QNFVuG6VF5oI4U_ruquDR4ykpjd2aQ9xf8pYi0Xs',
    bio: 'With over 19 years of experience in the cybersecurity industry, She is the Security Relations Leader at Snyk. She works with the developer and security communities to raise awareness, educate, and enable them to build secure software faster and better.',
    expertise: ['DevSecOps', 'Vulnerability Assessment'],
    achievements: [
      'Developed national cybersecurity policies',
      'Led public-private security initiatives',
      'Advisory board member for policy think tanks',
      'Regular contributor to policy forums',
    ],
    publications: [
      'Cybersecurity Policy Framework (2024)',
      'Public-Private Security Collaboration (2023)',
    ],
    certifications: ['CISSP', 'CIPP', 'Policy Professional'],
    social: {
      linkedin: 'https://www.linkedin.com/in/vandana-verma/',
    },
  },
  {
    id: 8,
    name: 'Manoj Kumar Kushwaha',
    role: 'Advisory Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQGO9ebir6aotg/profile-displayphoto-shrink_800_800/B56ZUm47IsHQAk-/0/1740114212532?e=1747267200&v=beta&t=Wl2gSrnTgxhBQdtE7WiA-RgUh4UDTVEEGtGd5Xg2YJU',
    bio: 'Leading the charge in cyber security at HDFC Education, He is dedicated to safeguarding digital assets through comprehensive threat hunting and incident response strategies.',
    expertise: ['Wireless & Network Security', 'VAPT'],
    achievements: [
      'Published groundbreaking AI security research',
      'Led major research initiatives',
      'Developed innovative security courses',
      'Mentored numerous researchers',
    ],
    publications: [
      'AI Security Challenges (2024)',
      'Machine Learning in Security (2023)',
    ],
    certifications: ['Ph.D. in Computer Science', 'CISSP', 'AI Professional'],
    social: {
      linkedin: 'https://www.linkedin.com/in/manoj-kumar-kushwaha-6771a05b/',
    },
  },
];

const AdvisoryBoard: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-10"></div>
      <div className="fixed inset-0 bg-grid opacity-10 pointer-events-none z-10"></div>

      <InternalNavbar />

      <main className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

        <div className="relative z-10">
          <TeamTree title="Advisory Board" members={advisors} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvisoryBoard;
