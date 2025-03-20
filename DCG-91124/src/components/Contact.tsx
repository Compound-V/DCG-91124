import React from 'react';
import { Mail, Globe, MapPin, Twitter, Instagram, Linkedin, Youtube, Globe2 } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-concrete opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="card hover:transform-none">
              <h3 className="text-2xl font-bold mb-4 text-[#ff5500]">
                Get In Touch
              </h3>
              <p className="mb-6">
                Have questions about DCG - 91124? Want to become a sponsor or
                volunteer? Reach out to us through our email and social media channels.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold mb-2">Email</h4>
                  <a
                    href="mailto:defcongurugram@gmail.com"
                    className="text-[#ff5500] hover:underline flex items-center gap-2"
                  >
                    <Mail size={20} />
                    defcongurugram@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Website</h4>
                  <a
                    href="https://dcg91124.com"
                    className="text-[#ff5500] hover:underline flex items-center gap-2"
                  >
                    <Globe size={20} />
                    dcg91124.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Location</h4>
                  <p className="text-[#999] flex items-center gap-2">
                    <MapPin size={20} />
                    Gurugram, Haryana, India
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Social Media</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/dcg91124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#E4405F] transition-colors duration-300"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="https://twitter.com/dcg91124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#1DA1F2] transition-colors duration-300"
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="https://linkedin.com/company/dcg91124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#0A66C2] transition-colors duration-300"
                      aria-label="Follow us on LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://youtube.com/@dcg91124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#FF0000] transition-colors duration-300"
                      aria-label="Subscribe to our YouTube channel"
                    >
                      <Youtube size={24} />
                    </a>
                    <a
                      href="https://mastodon.social/@dcg91124"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#6364FF] transition-colors duration-300"
                      aria-label="Follow us on Mastodon"
                    >
                      <Globe2 size={24} />
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-2">Support Hours</h4>
                  <p className="text-[#999]">
                    Monday - Friday: 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card hover:transform-none bg-[#1a1a1a]/50 backdrop-blur">
            <div className="aspect-video w-full mb-6 relative overflow-hidden rounded border border-[#333]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2061541835357!2d77.09201827607067!3d28.478499875727985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c11a04d0d1%3A0xe4b6223264a6f83!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1709667547893!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-bold mb-2">Meetup Dates</h4>
                <p className="text-[#999]">April 18-20, 2025</p>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-2">Venue</h4>
                <p className="text-[#999]">To be announced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;