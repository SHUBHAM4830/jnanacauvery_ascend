import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const backgroundImages = [
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
  'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start the image slider
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    // Trigger animation
    setIsVisible(true);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('beatTheClock');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section relative flex items-center justify-center overflow-hidden">
      {/* Background image slider */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 bg-cover bg-center",
            index === activeIndex ? "opacity-70" : "opacity-0"
          )}
          style={{
            backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.5), rgba(10, 10, 10, 0.5)), url(${image})`,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darker/30 to-theme-darker z-0"></div>
      
      {/* Content */}
      <div className="section-content relative z-10" ref={sectionRef}>
        <div className={cn(
          "flex flex-col items-center text-center transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            Jnana <span className="gradient-text">Cauvery</span> 2025
          </h1>

          <div className="flex justify-center mb-6">
            <div className="p-2 rounded-full bg-gradient-to-r from-theme-purple to-theme-blue shadow-xl" style={{ display: 'inline-block' }}>
              <img 
                src="/ascend-logo.png" 
                alt="Ascend Club Logo" 
                className="h-32 w-32 md:h-48 md:w-48 max-w-full rounded-full object-cover border-4 border-white"
                style={{ aspectRatio: '1 / 1' }}
              />
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            <span className="text-theme-purple font-['Orbitron'] font-bold tracking-wider ">Department Of Computer Science and Business Systems</span>
            <br />
            <span className="text-gray-400 font-['Roboto'] font-medium">through</span>{' '}
            <span className="text-theme-purple font-['Orbitron'] font-bold tracking-wider">Ascend</span>{' '}
            <span className="text-gray-400 font-['Roboto'] font-medium">presents</span>
          </h2>
          
          
          
          <button onClick={scrollToNext} className="btn-primary">
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
