import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EventSection from '@/components/EventSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loader if not already shown in this session
    return sessionStorage.getItem('jnana-loader-shown') !== 'true';
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('jnana-loader-shown', 'true');
  };

  useEffect(() => {
    // Preload images for better experience
    const imageUrls = [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <div className="app min-h-screen bg-theme-darker text-white overflow-x-hidden">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <Navigation isLoading={isLoading} />
      
      <main className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <HeroSection />
        
        <EventSection 
          id="beatTheClock"
          title="Beat The Clock"
          description="Challenge your limits and race against time in this thrilling competition. Solve complex puzzles, overcome obstacles and demonstrate your skills before the clock runs out. Are you quick enough to beat the clock?"
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        />
        
        <EventSection 
          id="dejaView"
          title="Deja View"
          description="Experience the extraordinary sensation of remembering something you've never seen before. This mind-bending event challenges your perception, memory and creative thinking. Step into a world where past and present collide."
          imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22"
          isReversed
        />
        
        <Footer />
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
