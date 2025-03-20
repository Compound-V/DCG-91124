import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SponsorTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  sponsors: Sponsor[];
}

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  url: string;
}

const Sponsors: React.FC = () => {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  const toggleTier = (tierId: string) => {
    if (expandedTier === tierId) {
      setExpandedTier(null);
    } else {
      setExpandedTier(tierId);
    }
  };

  const sponsorTiers: SponsorTier[] = [
    {
      id: 'platinum',
      name: 'Platinum',
      price: '$10,000',
      benefits: [
        'Prime logo placement on all event materials',
        'Dedicated booth space (10x10)',
        '5 complimentary tickets',
        '45-minute speaking slot',
        'Access to attendee list',
        'Logo on event t-shirts',
        'Social media promotion (5 dedicated posts)',
        'Logo on stage backdrop'
      ],
      sponsors: [
        {
          id: 1,
          name: 'CyberShield Technologies',
          logo: 'https://via.placeholder.com/200x100?text=CyberShield',
          url: 'https://example.com'
        },
        {
          id: 2,
          name: 'NetGuard Systems',
          logo: 'https://via.placeholder.com/200x100?text=NetGuard',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'gold',
      name: 'Gold',
      price: '$7,500',
      benefits: [
        'Prominent logo placement on event website',
        'Booth space (8x8)',
        '3 complimentary tickets',
        '30-minute speaking slot',
        'Logo on event t-shirts',
        'Social media promotion (3 dedicated posts)'
      ],
      sponsors: [
        {
          id: 3,
          name: 'SecureMatrix',
          logo: 'https://via.placeholder.com/200x100?text=SecureMatrix',
          url: 'https://example.com'
        },
        {
          id: 4,
          name: 'QuantumLock',
          logo: 'https://via.placeholder.com/200x100?text=QuantumLock',
          url: 'https://example.com'
        },
        {
          id: 5,
          name: 'Firewall Dynamics',
          logo: 'https://via.placeholder.com/200x100?text=FirewallDynamics',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'silver',
      name: 'Silver',
      price: '$5,000',
      benefits: [
        'Logo on event website',
        'Shared booth space',
        '2 complimentary tickets',
        'Lightning talk opportunity (15 minutes)',
        'Social media mention (group post)'
      ],
      sponsors: [
        {
          id: 6,
          name: 'ByteDefender',
          logo: 'https://via.placeholder.com/200x100?text=ByteDefender',
          url: 'https://example.com'
        },
        {
          id: 7,
          name: 'CipherTech',
          logo: 'https://via.placeholder.com/200x100?text=CipherTech',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'bronze',
      name: 'Bronze',
      price: '$2,500',
      benefits: [
        'Logo on event website',
        '1 complimentary ticket',
        'Promotional material in attendee bags',
        'Social media mention (group post)'
      ],
      sponsors: [
        {
          id: 8,
          name: 'HackShield',
          logo: 'https://via.placeholder.com/200x100?text=HackShield',
          url: 'https://example.com'
        },
        {
          id: 9,
          name: 'DataFortress',
          logo: 'https://via.placeholder.com/200x100?text=DataFortress',
          url: 'https://example.com'
        },
        {
          id: 10,
          name: 'SecureNode',
          logo: 'https://via.placeholder.com/200x100?text=SecureNode',
          url: 'https://example.com'
        }
      ]
    },
    {
      id: 'community',
      name: 'Community Partners',
      price: 'Custom Packages',
      benefits: [
        'Logo on community partners section',
        'Cross-promotion opportunities',
        'Potential for collaborative events',
        'Community shoutouts during the event'
      ],
      sponsors: [
        {
          id: 11,
          name: 'Hacker Space Delhi',
          logo: 'https://via.placeholder.com/200x100?text=HackerSpaceDelhi',
          url: 'https://example.com'
        },
        {
          id: 12,
          name: 'CyberSecurity Meetup Group',
          logo: 'https://via.placeholder.com/200x100?text=CSMeetup',
          url: 'https://example.com'
        },
        {
          id: 13,
          name: 'Women in Security Alliance',
          logo: 'https://via.placeholder.com/200x100?text=WISA',
          url: 'https://example.com'
        }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Sponsors</h2>
        
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <p className="mb-8">
            DEFCON 91124 is made possible through the support of our sponsors who share our vision 
            for a community-driven cybersecurity conference. Join us in building this unique platform.
          </p>
          
          <a href="#contact" className="btn btn-primary">
            Become a Sponsor
          </a>
        </div>
        
        {/* Current Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Sponsors</h3>
          
          {sponsorTiers.map((tier) => (
            <div key={tier.id} className="mb-12">
              <h4 className="text-xl font-bold mb-6 text-[#ff5500]">{tier.name} Sponsors</h4>
              
              {tier.sponsors.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {tier.sponsors.map((sponsor) => (
                    <a
                      key={sponsor.id}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card flex items-center justify-center p-4 h-32"
                    >
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#999]">No sponsors in this tier yet. Be the first!</p>
              )}
            </div>
          ))}
        </div>
        
        {/* Sponsorship Tiers */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Sponsorship Tiers</h3>
          
          <div className="space-y-4">
            {sponsorTiers.map((tier) => (
              <div key={tier.id} className="card overflow-hidden">
                <button
                  onClick={() => toggleTier(tier.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h4 className="text-xl font-bold">{tier.name}</h4>
                    <p className="text-[#ff5500]">{tier.price}</p>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`transition-transform duration-300 ${
                      expandedTier === tier.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedTier === tier.id && (
                  <div className="p-6 pt-0 border-t border-[#333]">
                    <h5 className="text-lg font-bold mb-4">Benefits:</h5>
                    <ul className="list-disc pl-6 space-y-2">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="mb-4">
              Custom sponsorship packages are also available. Contact us to discuss your specific needs.
            </p>
            <a href="mailto:defcongurugram@gmail.com" className="text-[#ff5500] hover:underline">
              defcongurugram@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;