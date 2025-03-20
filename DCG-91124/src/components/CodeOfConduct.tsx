import React from 'react';
import { AlertTriangle } from 'lucide-react';

const CodeOfConduct: React.FC = () => {
  return (
    <section id="code-of-conduct" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Code of Conduct</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card mb-8 border-[#ff5500]">
            <div className="flex items-center mb-6">
              <AlertTriangle className="text-[#ff5500] mr-4" size={32} />
              <h3 className="text-2xl font-bold">Our Commitment</h3>
            </div>
            <p>
              DEFCON 91124 is dedicated to providing a harassment-free conference experience for everyone, 
              regardless of gender, gender identity and expression, sexual orientation, disability, physical 
              appearance, body size, race, age, religion, or technology choices. We do not tolerate harassment 
              of conference participants in any form.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#ff5500]">Expected Behavior</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Participate in an authentic and active way</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Exercise consideration and respect in your speech and actions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Attempt collaboration before conflict</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Refrain from demeaning, discriminatory, or harassing behavior and speech</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Be mindful of your surroundings and of your fellow participants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Alert conference organizers if you notice violations of this Code of Conduct</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#ff5500]">Unacceptable Behavior</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Intimidating, harassing, abusive, discriminatory, derogatory, or demeaning conduct</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Offensive verbal comments related to gender, sexual orientation, race, religion, disability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Inappropriate use of nudity and/or sexual images in public spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Deliberate intimidation, stalking or following</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Harassing photography or recording</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Sustained disruption of talks or other events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Unwelcome sexual attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Advocating for, or encouraging, any of the above behavior</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#ff5500]">Consequences of Unacceptable Behavior</h3>
              <p className="mb-4">
                Unacceptable behavior from any conference participant, including sponsors and those with 
                decision-making authority, will not be tolerated. Anyone asked to stop unacceptable behavior 
                is expected to comply immediately.
              </p>
              <p>
                If a participant engages in unacceptable behavior, the conference organizers may take any 
                action they deem appropriate, up to and including a temporary ban or permanent expulsion 
                from the conference without warning or refund.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#ff5500]">Reporting Guidelines</h3>
              <p className="mb-4">
                If you are subject to or witness unacceptable behavior, or have any other concerns, please 
                notify a conference organizer as soon as possible. You can report concerns in the following ways:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>In person at the Information Desk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Email: <a href="mailto:conduct@defcon91124.org" className="text-[#ff5500] hover:underline">conduct@defcon91124.org</a></span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Phone: +91-XXXX-XXXXXX (available during conference hours)</span>
                </li>
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-bold mb-4 text-[#ff5500]">Scope</h3>
              <p>
                We expect all conference participants (attendees, speakers, sponsors, volunteers, staff, etc.) 
                to abide by this Code of Conduct in all conference venues—online and in-person—as well as in 
                all one-on-one communications pertaining to conference business. This code of conduct applies 
                to all DEFCON 91124 activities, including events sponsored by organizations other than DEFCON 91124 
                but held in conjunction with DEFCON 91124 events.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg">
              By attending DEFCON 91124, you agree to abide by this Code of Conduct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;