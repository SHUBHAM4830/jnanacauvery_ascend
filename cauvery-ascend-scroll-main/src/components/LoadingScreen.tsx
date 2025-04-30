import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start animation after a short delay
    setTimeout(() => {
      setShowContent(true);
    }, 300);

    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Wait a moment after reaching 100% before calling onComplete
          setTimeout(() => {
            setShowContent(false);
            setTimeout(onComplete, 500);
          }, 1500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={cn(
      "fixed inset-0 bg-theme-darker flex flex-col items-center justify-center z-50 transition-opacity duration-500",
      showContent ? "opacity-100" : "opacity-0"
    )}>
      <div className="w-24 h-24 mb-6 flex items-center justify-center">
        {/* Placeholder for logo */}
        <div className="w-full h-full rounded-full border-4 border-theme-purple border-t-transparent animate-spin"></div>
      </div>
      {/* Responsive font sizes for 2025 */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white flex flex-col items-center justify-center">
        <span className="block animate-fade-in">Jnana Cauvery <span className="gradient-text block sm:inline">{''}
          <span className="inline sm:hidden text-5xl font-extrabold tracking-widest">2025</span>
          <span className="hidden sm:inline">2025</span>
        </span></span>
      </h1>
      <h2 className="text-xl md:text-2xl text-white/80 font-medium mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
        Ascend Club Presents
      </h2>
      <div className="w-64 max-w-full h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-theme-purple to-theme-blue transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-4 text-gray-400 font-medium animate-pulse">
        {Math.round(progress)}%
      </div>
    </div>
  );
};

export default LoadingScreen;
