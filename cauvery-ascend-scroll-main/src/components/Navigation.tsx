import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  isLoading: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isLoading }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  if (isLoading) return null;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-white font-poppins font-bold text-xl md:text-2xl">
              Jnana <span className="gradient-text">Cauvery</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white font-medium hover:text-theme-purple transition-colors">Home</button>
            <a href="/beat-the-clock" className="text-white font-medium hover:text-theme-purple transition-colors">Beat The Clock</a>
            <a href="/deja-view" className="text-white font-medium hover:text-theme-purple transition-colors">Deja View</a>
            <button onClick={() => scrollToSection('contact')} className="text-white font-medium hover:text-theme-purple transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-black/90 rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="text-white font-medium hover:text-theme-purple transition-colors text-left py-2">Home</button>
              <a href="/beat-the-clock" className="text-white font-medium hover:text-theme-purple transition-colors text-left py-2">Beat The Clock</a>
              <a href="/deja-view" className="text-white font-medium hover:text-theme-purple transition-colors text-left py-2">Deja View</a>
              <button onClick={() => scrollToSection('contact')} className="text-white font-medium hover:text-theme-purple transition-colors text-left py-2">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
