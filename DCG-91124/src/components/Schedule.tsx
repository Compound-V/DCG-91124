import React, { useState } from 'react';
import ScheduleEventModal from './ScheduleEventModal';

interface Event {
  id: number;
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: 'keynote' | 'talk' | 'workshop' | 'panel' | 'break';
  description?: string;
  requirements?: string[];
  topics?: string[];
}

interface DaySchedule {
  date: string;
  day: string;
  events: Event[];
}

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(0);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const schedule: DaySchedule[] = [
    {
      date: 'April 18, 2025',
      day: 'Day 1',
      events: [
        {
          id: 1,
          time: '08:00 - 10:00',
          title: 'Registration & Check-in',
          speaker: 'N/A',
          location: 'TBD',
          type: 'break',
          description:
            'Welcome to DCG - 91124! Pick up your meetup badge, swag bag, and get ready for an exciting day of learning and networking.',
        },
        {
          id: 2,
          time: '10:00 - 11:00',
          title: 'Opening Ceremony & Keynote',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'keynote',
          description:
            'Join us for the official opening of DCG - 91124 as we explore the current state of cybersecurity and set the stage for the meetup themes.',
          topics: [
            'Conference Overview',
            'Industry Trends',
            'Future of Security',
          ],
        },
        {
          id: 3,
          time: '11:15 - 05:30',
          title: 'Workshop: DevSecOps Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'This workshop focuses on integrating security into the software development and operations lifecycle, a core principle of DevSecOps.',
          topics: [
            'Secure Coding',
            'Automated Security Testing',
            'Continuous Security Monitoring',
          ],
          requirements: [
            'Basic knowledge of software development',
            'Basic knowledge of security concepts',
          ],
        },
        {
          id: 4,
          time: '11:15 - 05:30',
          title: 'Workshop: IoT & Hardware Hacking Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Exploring security challenges and solutions for IoT devices in critical infrastructure.',
          topics: ['IoT Security', 'Embedded Programming'],
          requirements: [
            'Basic understanding of embedded systems',
            'Familiarity with IoT devices',
          ],
        },
        {
          id: 5,
          time: '11:15 - 05:30',
          title: 'Workshop: Threat Hunting Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'This workshop introduces the proactive practice of threat hunting in cybersecurity.',
          topics: [
            'Threat Hunting Methodologies',
            'Tools and Techniques',
            'Advanced Threat Detection',
          ],
          requirements: [
            'Familiarity with cybersecurity concepts',
            'Basic knowledge of networking',
          ],
        },
        {
          id: 6,
          time: '11:15 - 05:30',
          title: 'Workshop: Blockchain & Smart Contract Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'This workshop dives into the security aspects of blockchain technology and smart contracts.',
          topics: ['Blockchain Fundamentals', 'Smart Contract Security'],
          requirements: [
            'Familiarity with blockchain concepts',
            'Basic programming skills',
          ],
        },
        {
          id: 7,
          time: '11:15 - 05:30',
          title: 'Workshop: Social Engineering & OSINT Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'This workshop covers the techniques of social engineering and the use of open-source intelligence (OSINT) for cybersecurity.',
          topics: ['Social Engineering Techniques', 'Phishing', 'OSINT Tools'],
          requirements: [
            'Basic understanding of cybersecurity',
            'Basic knowledge of human psychology',
          ],
        },
        {
          id: 8,
          time: '11:15 - 02:15',
          title: 'Talk - 1: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 9,
          time: '02:30 - 05:30',
          title: 'Talk - 2: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 10,
          time: '11:15 - 02:15',
          title: 'Talk - 3: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 11,
          time: '02:30 - 05:30',
          title: 'Talk - 4: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 33,
          time: '11:30 - 05:30',
          title: 'Capture The Flag',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'break',
          description: 'Join and showcase your hacking skills.',
        },
      ],
    },
    {
      date: 'April 19, 2025',
      day: 'Day 2',
      events: [
        {
          id: 12,
          time: '08:00 - 10:00',
          title: 'Registration & Check-in',
          speaker: 'N/A',
          location: 'TBD',
          type: 'break',
          description:
            'Welcome to DCG - 91124! Pick up your conference badge, swag bag, and get ready for an exciting day of learning and networking.',
        },
        {
          id: 13,
          time: '10:00 - 11:00',
          title: 'Opening Ceremony & Keynote',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'keynote',
          description:
            'Join us for the official opening of DCG - 91124 as we explore the current state of cybersecurity and set the stage for the conference themes.',
          topics: [
            'Conference Overview',
            'Industry Trends',
            'Future of Security',
          ],
        },
        {
          id: 14,
          time: '11:15 - 05:30',
          title: 'Workshop: Network Security Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Hands-on workshop on securing networks, identifying vulnerabilities, and implementing defensive strategies.',
          topics: [
            'Network Security',
            'Vulnerability Assessment',
            'Defensive Strategies',
          ],
          requirements: [
            'Basic knowledge of networking',
            'Familiarity with security tools',
          ],
        },
        {
          id: 15,
          time: '11:15 - 05:30',
          title: 'Workshop: Bug Bounty Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Learn bug bounty hunting techniques, responsible disclosure, and how to earn rewards for finding vulnerabilities.',
          topics: [
            'Bug Bounty',
            'Vulnerability Hunting',
            'Responsible Disclosure',
          ],
          requirements: [
            'Basic understanding of web security',
            'Familiarity with penetration testing',
          ],
        },
        {
          id: 16,
          time: '11:15 - 05:30',
          title: 'Workshop: AI & ML Security Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Investigate security implications of AI and ML, including adversarial attacks and model protection.',
          topics: ['AI Security', 'ML Vulnerabilities', 'Adversarial Attacks'],
          requirements: [
            'Basic understanding of AI and ML',
            'Familiarity with Python',
          ],
        },
        {
          id: 17,
          time: '11:15 - 05:30',
          title: 'Workshop: Red Team / Blue Team Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Simulate real-world attacks and defenses in a controlled environment to enhance cybersecurity skills.',
          topics: ['Red Teaming', 'Blue Teaming', 'Cybersecurity Simulations'],
          requirements: [
            'Basic knowledge of offensive and defensive security',
            'Familiarity with cybersecurity tools',
          ],
        },
        {
          id: 18,
          time: '11:15 - 05:30',
          title: 'Workshop: Android & Mobile Security Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Secure mobile applications, identify vulnerabilities, and implement best practices for Android security.',
          topics: [
            'Mobile Security',
            'Android Vulnerabilities',
            'Secure Development',
          ],
          requirements: [
            'Basic knowledge of Android development',
            'Familiarity with security concepts',
          ],
        },
        {
          id: 19,
          time: '11:15 - 02:15',
          title: 'Talk - 1: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 20,
          time: '02:30 - 05:30',
          title: 'Talk - 2: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 21,
          time: '11:15 - 02:15',
          title: 'Talk - 3: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 22,
          time: '02:30 - 05:30',
          title: 'Talk - 4: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 34,
          time: '11:30 - 05:30',
          title: 'Capture The Flag',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'break',
          description: 'Join and showcase your hacking skills.',
        },
      ],
    },
    {
      date: 'April 20, 2025',
      day: 'Day 3',
      events: [
        {
          id: 23,
          time: '08:00 - 10:00',
          title: 'Registration & Check-in',
          speaker: 'N/A',
          location: 'TBD',
          type: 'break',
          description:
            'Welcome to DCG - 91124! Pick up your conference badge, swag bag, and get ready for an exciting day of learning and networking.',
        },
        {
          id: 24,
          time: '10:00 - 11:00',
          title: 'Opening Ceremony & Keynote',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'keynote',
          description:
            'Join us for the official opening of DCG - 91124 as we explore the current state of cybersecurity and set the stage for the conference themes.',
          topics: [
            'Conference Overview',
            'Industry Trends',
            'Future of Security',
          ],
        },
        {
          id: 25,
          time: '11:15 - 05:30',
          title: 'Workshop: Threat Intelligence Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Gather, analyze, and apply threat intelligence to proactively defend against cyber threats.',
          topics: [
            'Threat Intelligence',
            'Cyber Threat Analysis',
            'Proactive Defense',
          ],
          requirements: [
            'Basic understanding of cybersecurity',
            'Interest in threat research',
          ],
        },
        {
          id: 26,
          time: '11:15 - 05:30',
          title: 'Workshop: Linux Security & Kernel Exploitation Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Secure Linux systems, exploit kernel vulnerabilities, and implement hardening techniques.',
          topics: ['Linux Security', 'Kernel Exploitation', 'System Hardening'],
          requirements: [
            'Basic knowledge of Linux',
            'Familiarity with programming',
          ],
        },
        {
          id: 27,
          time: '11:15 - 05:30',
          title: 'Workshop: Security Operations (SOC) Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Operate a Security Operations Center (SOC), monitor threats, and respond to incidents.',
          topics: ['SOC Operations', 'Threat Monitoring', 'Incident Response'],
          requirements: [
            'Basic knowledge of cybersecurity',
            'Familiarity with SIEM tools',
          ],
        },
        {
          id: 28,
          time: '11:15 - 05:30',
          title: 'Workshop: Malware & Reverse Engineering Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Analyze malware behavior, reverse engineer code, and develop strategies to mitigate threats.',
          topics: [
            'Malware Analysis',
            'Reverse Engineering',
            'Threat Mitigation',
          ],
          requirements: [
            'Basic knowledge of programming',
            'Familiarity with disassembly tools',
          ],
        },
        {
          id: 29,
          time: '11:15 - 05:30',
          title: 'Workshop: Security Automation & Orchestration Village',
          speaker: 'TBA',
          location: 'TBD',
          type: 'workshop',
          description:
            'Automate security workflows and orchestrate responses to enhance efficiency and threat mitigation.',
          topics: [
            'Security Automation',
            'Orchestration Tools',
            'Threat Response',
          ],
          requirements: [
            'Basic knowledge of cybersecurity',
            'Familiarity with scripting or automation tools',
          ],
        },
        {
          id: 30,
          time: '11:15 - 02:15',
          title: 'Talk - 1: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 31,
          time: '11:15 - 02:15',
          title: 'Talk - 2: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'talk',
          description: 'N/A',
        },
        {
          id: 32,
          time: '02:45 - 04:30',
          title: 'Panel Discussion: TBA',
          speaker: 'TBA',
          location: 'TBD',
          type: 'panel',
          description: 'N/A',
        },
        {
          id: 35,
          time: '10:00 - 04:00',
          title: 'Capture The Flag',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'break',
          description: 'Join and showcase your hacking skills.',
        },
        {
          id: 36,
          time: '04:15 - 05:30',
          title: 'Closing Ceremoney',
          speaker: 'DCG 91124 Organizers',
          location: 'TBD',
          type: 'keynote',
          description: 'Ending note.',
        },
      ],
    },
  ];

  const getEventTypeClass = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'border-l-4 border-[#ff5500]';
      case 'talk':
        return 'border-l-4 border-blue-500';
      case 'workshop':
        return 'border-l-4 border-green-500';
      case 'panel':
        return 'border-l-4 border-purple-500';
      case 'break':
        return 'border-l-4 border-gray-500 opacity-75';
      default:
        return '';
    }
  };

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Event Schedule</h2>

        {/* Day Selection */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-[#333] overflow-hidden">
            {schedule.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 ${
                  activeDay === index
                    ? 'bg-[#ff5500] text-black'
                    : 'bg-transparent text-white hover:bg-[#333]'
                }`}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Date */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-[#ff5500]">
            {schedule[activeDay].date}
          </h3>
        </div>

        {/* Schedule Table */}
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th width="15%">Time</th>
                <th width="40%">Session</th>
                <th width="25%">Speaker</th>
                <th width="20%">Location</th>
              </tr>
            </thead>
            <tbody>
              {schedule[activeDay].events.map((event) => (
                <tr
                  key={event.id}
                  className={`${getEventTypeClass(
                    event.type
                  )} cursor-pointer hover:bg-[#1a1a1a]`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <td className="font-mono">{event.time}</td>
                  <td className="font-bold">{event.title}</td>
                  <td>{event.speaker}</td>
                  <td>{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-[#ff5500] mr-2"></span>
            <span className="text-sm">Keynote</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-blue-500 mr-2"></span>
            <span className="text-sm">Talk</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-green-500 mr-2"></span>
            <span className="text-sm">Workshop</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-purple-500 mr-2"></span>
            <span className="text-sm">Panel</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-4 h-4 bg-gray-500 mr-2"></span>
            <span className="text-sm">Break</span>
          </div>
        </div>
      </div>

      {selectedEvent && (
        <ScheduleEventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
};

export default Schedule;
