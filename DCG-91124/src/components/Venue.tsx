import React from 'react';

const Venue: React.FC = () => {
  return (
    <section id="venue" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Venue</h2>

        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ff5500] mb-4">
              To Be Announced Soon
            </h3>
            <p className="text-lg text-[#999]">
              The venue for DCG 91124 will be announced soon. We are finalizing
              a location that will provide the perfect setting for our
              cybersecurity meetup.
            </p>
          </div>
        </div>

        {/* <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-[#ff5500]">
                Facilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Main Conference Hall (500+ capacity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>4 Workshop Rooms (100 capacity each)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Dedicated CTF Arena</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Sponsor Exhibition Area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Networking Spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>High-speed Wi-Fi throughout the venue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ff5500] mr-2">•</span>
                  <span>Catering and Refreshment Areas</span>
                </li>
              </ul>
            </div>
          

          {/* <div>
            <div className="card mb-8">
              <h3 className="text-xl font-bold mb-4 text-[#ff5500]">
                Accommodation
              </h3>
              <p className="mb-4">
                Once the venue is confirmed, we will provide information about
                nearby accommodations and special rates for conference
                attendees.
              </p>

              <h4 className="text-lg font-bold mb-2 mt-6">Transportation</h4>
              <p className="text-[#999] mb-4">
                Transportation details will be announced along with the venue
                confirmation.
              </p>

              <p>
                For any venue-related queries, please contact us at{' '}
                <a
                  href="mailto:defcongurugram@gmail.com"
                  className="text-[#ff5500] hover:underline"
                >
                  defcongurugram@gmail.com
                </a>
              </p>
            </div>
          </div> */}
      </div>
    </section>
  );
};

export default Venue;
