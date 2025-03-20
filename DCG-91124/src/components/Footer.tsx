import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-[#333] relative overflow-hidden z-[1]">
      <div className="absolute inset-0 bg-grid opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-noise opacity-5 z-0"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-[#ff5500] mb-4">
              DCG - 91124
            </h3>
            <p className="text-[#999] mb-4">
              A community-driven cybersecurity meetup where digital resistance
              meets brutal innovation.
            </p>
            <p className="text-[#999] italic">"Nobody does it better"</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-[#999] hover:text-[#ff5500] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-[#999] hover:text-[#ff5500] transition-colors duration-300"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-[#999] hover:text-[#ff5500] transition-colors duration-300"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  className="text-[#999] hover:text-[#ff5500] transition-colors duration-300"
                >
                  Venue
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <p className="text-[#999] mb-4">
              Stay updated with the latest news and announcements.
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-[#ff5500]"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] hover:text-[#ff5500]"
              >
                <Github size={24} />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:defcongurugram@gmail.com"
                className="text-[#ff5500] hover:underline block"
              >
                defcongurugram@gmail.com
              </a>
              <a
                href="https://dcg91124.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff5500] hover:underline block"
              >
                dcg91124.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#333] text-center">
          <p className="text-[#999] text-sm">
            &copy; {new Date().getFullYear()} DEFCON 91124. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
