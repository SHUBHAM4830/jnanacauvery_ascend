import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import DynamicCards from '../components/DynamicCards';
import { FaTrophy, FaGift, FaCertificate, FaUsers, FaClock, FaMapMarkerAlt, FaCalendarAlt, FaUniversity, FaHashtag, FaArrowLeft, FaRegListAlt, FaRegCalendarAlt, FaAward, FaLaptop, FaSwatchbook, FaStickyNote, FaMugHot, FaHeadphones } from 'react-icons/fa';

const sections = [
  { id: 'about', title: 'About', icon: <FaRegListAlt /> },
  { id: 'timeline', title: 'Timeline', icon: <FaRegCalendarAlt /> },
  { id: 'rules', title: 'Rules', icon: <FaRegListAlt /> },
  { id: 'prizes', title: 'Prizes', icon: <FaAward /> },
];

const timeline = [
  { time: '11:00 AM', activity: 'Registrations' },
  { time: '11:30 AM', activity: 'Opening Brief' },
  { time: '11:45 AM', activity: 'Game Rounds Begin' },
  { time: '01:30 PM', activity: 'Final Scoring' },
  { time: '01:45 PM', activity: 'Results & Prize Distribution' },
];

const BeatTheClockEventPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-theme-darker text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-theme-darker/95 backdrop-blur-sm z-50 border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <FaArrowLeft />
                <span>Back to Home</span>
              </Link>
            </div>
            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <button onClick={() => setNavOpen(!navOpen)} className="text-theme-purple focus:outline-none">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
            {/* Desktop nav */}
            <div className="hidden md:flex space-x-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(section.id);
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-theme-purple/20 text-theme-purple'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Mobile nav dropdown */}
          {navOpen && (
            <div className="md:hidden flex flex-col space-y-2 py-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setNavOpen(false);
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(section.id);
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-theme-purple/20 text-theme-purple'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-2 md:px-4">
        <div className="w-full flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold gradient-text mb-2">BEAT THE CLOCK</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-theme-purple font-semibold mb-2">The Ultimate Time-Based Challenge</p>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-2xl">Every second counts. Test your mental agility, teamwork and reflexes in a high-energy competition where speed is the only currency that matters!</p>
          <CountdownTimer targetDate={new Date('2025-05-09T10:00:00')} />
          <a href="https://forms.gle/Kk5YjRGW7mD7WT1K6" target="_blank" rel="noopener noreferrer" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 mt-6 mb-4">Register Now</a>
        </div>
        <DynamicCards />
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Beat The Clock</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-theme-purple/5 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-theme-purple/10 rounded-full flex items-center justify-center mb-6">
                  <FaClock className="text-3xl text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Time-Based Games</h3>
                <p className="text-gray-400">Every activity is designed to test how quickly and smartly you can act under pressure.</p>
              </div>
            </div>
            <div className="bg-theme-purple/5 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-theme-purple/10 rounded-full flex items-center justify-center mb-6">
                  <FaUsers className="text-3xl text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Team Spirit</h3>
                <p className="text-gray-400">Win with communication, coordination and composure.</p>
              </div>
            </div>
            <div className="bg-theme-purple/5 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-theme-purple/10 rounded-full flex items-center justify-center mb-6">
                  <FaTrophy className="text-3xl text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Win Big</h3>
                <p className="text-gray-400">Cash prizes, certificates and goodies for top teams.</p>
              </div>
            </div>
          </div>

          {/* 2-column, 3-row grid for event info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaUsers className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Team Size</h3>
                <p className="text-gray-400">2 Members per Team</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaClock className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Event Date</h3>
                <p className="text-gray-400">8th May 2025</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaMapMarkerAlt className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Venue</h3>
                <p className="text-gray-400">MBA Amphitheater</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaLaptop className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mode</h3>
                <p className="text-gray-400">Offline</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaUniversity className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Type</h3>
                <p className="text-gray-400">Inter-college, Offline Event</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaHashtag className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Theme</h3>
                <p className="text-gray-400">Every Second Counts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Event Timeline</h2>
          <div className="flex justify-center">
            <div className="max-w-3xl w-full mx-auto">
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-theme-purple/30"></div>
                {timeline.map((item, idx) => (
                  <div key={idx} className="relative mb-12 last:mb-0 pl-8">
                    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-theme-purple"></div>
                    <div className="flex flex-col">
                      <div className="text-theme-purple font-bold text-lg mb-2">{item.time}</div>
                      <div className="text-white text-base">{item.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Rules</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-theme-purple/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Rules</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>No substitutions allowed after registration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>All teams must play all games</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>Punctuality is mandatory — latecomers may be disqualified</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>Sportsmanship is non-negotiable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>Judges' decisions are final</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>ASCEND reserves media and publishing rights to photos and content</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Prize Pool</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-theme-purple/10 rounded-lg p-8 text-center">
              <FaTrophy className="text-5xl text-theme-purple mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Cash Prizes</h3>
              <ul className="space-y-2">
                <li>1st Prize: ₹2000</li>
                <li>2nd Prize: ₹1000</li>
                <li>3rd Prize: ₹500</li>
              </ul>
            </div>
            <div className="bg-theme-purple/10 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <FaGift className="text-5xl text-theme-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4">Exclusive Merch</h3>
              <p className="text-gray-300">Participate and get to know for yourself!</p>
            </div>
            <div className="bg-theme-purple/10 rounded-lg p-8 text-center">
              <FaCertificate className="text-5xl text-theme-purple mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Recognition</h3>
              <ul className="space-y-2">
                <li>Certificates for all</li>
                <li>Social media recognition for top teams</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeatTheClockEventPage; 