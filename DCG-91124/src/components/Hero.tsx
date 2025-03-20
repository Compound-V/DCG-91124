import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('April 18, 2025 00:00:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: 'brightness(0.4) contrast(1.2)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-noise opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 glitch"
          data-text="DCG 91124"
        >
          DCG 91124
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          <span className="text-[#ff5500] font-bold italic">
            Presented By DEF CON Groups Gurugram
          </span>
        </p>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          <span className="text-[#ff5500] font-bold">APRIL 18-20, 2025</span> •
          TBD
        </p>

        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Learn. Share. <span className="text-[#ff5500]">Grow Together.</span>
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Join our community of cybersecurity enthusiasts where knowledge
            flows freely and innovation thrives.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            <div className="countdown-item">
              <span className="text-2xl md:text-4xl font-bold text-[#ff5500]">
                {timeLeft.days}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                Days
              </span>
            </div>
            <div className="countdown-item">
              <span className="text-2xl md:text-4xl font-bold text-[#ff5500]">
                {timeLeft.hours}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                Hours
              </span>
            </div>
            <div className="countdown-item">
              <span className="text-2xl md:text-4xl font-bold text-[#ff5500]">
                {timeLeft.minutes}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                Minutes
              </span>
            </div>
            <div className="countdown-item">
              <span className="text-2xl md:text-4xl font-bold text-[#ff5500]">
                {timeLeft.seconds}
              </span>
              <span className="text-xs md:text-sm uppercase tracking-wider">
                Seconds
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScS3gROzCq0fYYZVVm_FN4n7mhle3Qqf168eu438r5hR_nNcQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary min-w-[140px]"
          >
            Submit CFP
          </a>
          <a
            href="https://discord.gg/shHWbTjY"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary min-w-[140px]"
          >
            Join Discord
          </a>
          <a href="#about" className="btn btn-secondary min-w-[140px]">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
