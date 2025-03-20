import React from 'react';

const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Speakers</h2>
        
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-[#ff5500] mb-4">
              To Be Announced Soon
            </h3>
            <p className="text-lg text-[#999]">
              Stay tuned for our incredible lineup of industry experts, researchers, and thought leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers