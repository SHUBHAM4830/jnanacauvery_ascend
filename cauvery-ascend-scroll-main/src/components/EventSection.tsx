import React, { useEffect, useRef } from 'react';
import CountdownTimer from './CountdownTimer';
import { cn } from '@/lib/utils';

interface EventSectionProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
}

const EventSection: React.FC<EventSectionProps> = ({
  id,
  title,
  description,
  imageUrl,
  isReversed = false,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      className="section relative overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-theme-darker/70 to-theme-darker z-0"></div>
      
      <div className="section-content relative z-10">
        <div className="opacity-0" ref={sectionRef}>
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
            isReversed ? "md:flex-row-reverse" : ""
          )}>
            <div className={cn(isReversed ? "md:order-2" : "")}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">{title}</span>
              </h2>
              
              <p className="text-gray-300 mb-8 text-lg">
                {description}
              </p>
              
              {title === 'Beat The Clock' && (
                <a href="/beat-the-clock#register" className="btn-primary mb-8 block w-fit">Register Now</a>
              )}
              {title === 'Deja View' && (
                <a href="/deja-view#register" className="btn-primary mb-8 block w-fit">Register Now</a>
              )}
              {title === 'Beat The Clock' && (
                <CountdownTimer targetDate={new Date('2025-05-08T11:30:00')} />
              )}
              {title === 'Deja View' && (
                <CountdownTimer targetDate={new Date('2025-05-09T11:30:00')} />
              )}
            </div>
            
            <div className={cn(
              "flex justify-center",
              isReversed ? "md:order-1" : ""
            )}>
              <div className="w-64 h-64 bg-theme-purple/10 rounded-full flex items-center justify-center border-2 border-theme-purple/30 animate-pulse-slow">
                <div className="w-52 h-52 bg-theme-purple/20 rounded-full flex items-center justify-center border border-theme-purple/50">
                  <div className="w-40 h-40 bg-theme-purple/30 rounded-full flex items-center justify-center">
                    <h3 className="text-3xl font-bold gradient-text">
                      {title.split(' ').map((word, i) => (
                        <span key={i} className="block text-center">{word}</span>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
