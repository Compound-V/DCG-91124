import React from 'react';
import InternalNavbar from '../../components/InternalNavbar';
import TeamTree from '../../components/TeamTree';
import Footer from '../../components/Footer';

const reviewers = [
  {
    id: 9,
    name: 'Mohsin Quresh',
    role: 'Review Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQEF7_803IATOw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725262927688?e=1747267200&v=beta&t=9rRVatKRFLlNv_0Qmxt8itoc7mfE9HOAo1-2F0_49iA',
    bio: 'Senior Subject Matter Expert at HackTheBox (HTB), experienced corporate trainer for over 8 years.',
    expertise: ['Application Security', 'Firewall Pentesting'],
    achievements: [
      'Led hardware security reviews for major conferences',
      'Discovered critical hardware vulnerabilities',
      'Developed hardware security testing frameworks',
      'Mentored security researchers',
    ],
    publications: [
      'Hardware Security Testing Methods (2024)',
      'IoT Security Challenges (2023)',
    ],
    certifications: ['CISSP', 'CEH', 'Hardware Security Expert'],
    social: {
      linkedin: 'https://www.linkedin.com/in/mohsin-quresh/',
    },
  },
  {
    id: 10,
    name: 'Aravind C Ajayan',
    role: 'Review Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQHRe5yWYTebrQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716031982422?e=1747267200&v=beta&t=MukwQhg4NCkEty-1cFeHWVaV3MD0-NsPUp6jwTbs2oQ',
    bio: 'Security research engineer at Philips, trainer and speaker at C0c0n, based in Kerala.',
    expertise: ['Security Architecture Reviews', 'Threat Modelling'],
    achievements: [
      'Reviewed 500+ security research papers',
      'Developed cloud security frameworks',
      'Led major cloud security initiatives',
      'Regular conference speaker',
    ],
    publications: [
      'Cloud Security Best Practices (2024)',
      'DevSecOps Implementation Guide (2023)',
    ],
    certifications: ['AWS Security Specialist', 'CCSP', 'CISSP'],
    social: {
      linkedin: 'https://www.linkedin.com/in/aravind-c-ajayan-773759169/',
    },
  },
  {
    id: 11,
    name: 'Amrit Chhetri',
    role: 'Review Board Member',
    image:
      'https://media.licdn.com/dms/image/v2/C4D03AQGK9827D6aNzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1623424853972?e=1747267200&v=beta&t=1GN_jmvLhsOQt5LoTIQsqbMeL1VYtng22rlnX9g217E',
    bio: 'Research Scientist with 21 years of experience in IT/ICT, AI, Cyber Security, Digital Forensics, and SOC.',
    expertise: ['Cyber Forensics', 'Cyber Law'],
    achievements: [
      'Led network security reviews for conferences',
      'Developed penetration testing methodologies',
      'Published research on network vulnerabilities',
      'Regular conference speaker',
    ],
    publications: [
      'Advanced Network Attacks (2024)',
      'Penetration Testing Guide (2023)',
    ],
    certifications: ['OSCP', 'CISSP', 'Network+'],
    social: {
      linkedin: 'https://www.linkedin.com/in/amritchhetrib/',
    },
  },
  {
    id: 12,
    name: 'Harpreet Singh',
    role: 'Review Board Member',
    image:
      'https://th.bing.com/th/id/OIP.BjgOmh7A0E3yxNE2T8IeUQHaJ4?rs=1&pid=ImgDetMain',
    bio: 'Cybersecurity expert with a decade of experience in Ethical Hacking, Penetration Testing, and Red Teaming.',
    expertise: ['Red Team', 'Pentester'],
    achievements: [
      'Discovered critical mobile vulnerabilities',
      'Developed mobile security testing tools',
      'Led mobile security research teams',
      'Regular conference speaker',
    ],
    publications: [
      'Mobile Security Architecture (2024)',
      'iOS Security Deep Dive (2023)',
    ],
    certifications: ['OSCE', 'CISSP', 'Mobile Security Expert'],
    social: {
      linkedin: 'https://www.linkedin.com/in/hs-ninja/',
    },
  },
];

const ReviewBoard: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-10"></div>
      <div className="fixed inset-0 bg-grid opacity-10 pointer-events-none z-10"></div>

      {/* Navbar */}
      <InternalNavbar />

      {/* Main Content */}
      <main className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
        <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

        <div className="relative z-10">
          <TeamTree title="Review Board" members={reviewers} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ReviewBoard;
