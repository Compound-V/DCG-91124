import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SocialAnnouncements: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Latest Updates</h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Important Update */}
          <div className="card border-[#ff5500]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#ff5500] bg-opacity-20 p-2 rounded">
                <AlertTriangle className="text-[#ff5500]" size={24} />
              </div>
              <h3 className="text-xl font-bold">
                Important Update – DCG 91124
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-[#999]">
                We recognize that some crucial updates and information regarding
                DCG 91124, presented by DEF CON Group Gurugram, were not
                communicated as clearly as intended. We sincerely apologize for
                any confusion this may have caused.
              </p>

              <p className="text-[#999]">
                To ensure transparency and clarity, we will be sharing the
                necessary announcements and follow-ups soon. We appreciate your
                patience and continued support.
              </p>

              <p className="text-[#ff5500] font-bold">
                Stay tuned for updates, and thank you for being a valued part of
                the DCG 91124 community!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialAnnouncements;
