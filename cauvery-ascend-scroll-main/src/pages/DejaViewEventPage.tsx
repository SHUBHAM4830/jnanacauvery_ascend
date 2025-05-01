import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import CodeMatrix from '../components/CodeMatrix';
import { FaTrophy, FaGift, FaCertificate, FaUsers, FaClock, FaLaptop, FaCode, FaAward, FaRegCalendarAlt, FaRegListAlt, FaHome, FaArrowLeft, FaBrain, FaEye, FaPencilRuler, FaMapMarkerAlt, FaSwatchbook, FaStickyNote, FaMugHot, FaHeadphones } from 'react-icons/fa';

const sections = [
  { id: 'about', title: 'About', icon: <FaRegListAlt /> },
  { id: 'timeline', title: 'Timeline', icon: <FaRegCalendarAlt /> },
  { id: 'rules', title: 'Rules', icon: <FaRegListAlt /> },
  { id: 'prizes', title: 'Prizes', icon: <FaAward /> },
];

const timeline = [
  { time: '11:00 AM', activity: 'Team Registration' },
  { time: '11:30 AM', activity: 'Kick-off Briefing & Reference Site Reveal' },
  { time: '11:45 AM', activity: 'Web Development Sprint Begins' },
  { time: '12:45 PM', activity: 'Coding Ends' },
  { time: '01:00 PM', activity: 'Demos & Judging' },
  { time: '01:45 PM', activity: 'Results & Closing Ceremony' },
];

const DejaViewEventPage = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const slides = [
    '/src/assets/web-design1.jpg',
    '/src/assets/web-design2.jpg',
    '/src/assets/web-design3.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

      {/* Hero Section with Sliding Images */}
      <div className="relative min-h-screen overflow-hidden flex flex-col items-center px-2 md:px-4 pt-24 md:pt-24">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-theme-darker/80 to-theme-darker/95">
              <img src={slide} alt="Web Design" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}

        <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto text-center space-y-3 md:space-y-6 py-8 md:py-16 mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-7xl font-bold gradient-text">Déjà View</h1>
          <p className="text-sm sm:text-base md:text-2xl text-gray-300">The Ultimate Web Recreation Showdown</p>
          <CountdownTimer targetDate={new Date('2025-05-09T11:30:00')} />
          <a href="https://forms.gle/SmdVMD5tM4nrHz7h7" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 md:py-3">Register Now</a>
        </div>
        <div className="relative w-full max-w-4xl mx-auto mb-8 md:mb-0">
          <CodeMatrix />
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section id="about" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Déjà View</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-theme-purple/5 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-theme-purple/10 rounded-full flex items-center justify-center mb-6">
                  <FaEye className="text-3xl text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visual Recreation</h3>
                <p className="text-gray-400">Challenge yourself to recreate a given website design with pixel-perfect accuracy and attention to detail.</p>
              </div>
            </div>
            <div className="bg-theme-purple/5 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-theme-purple/10 rounded-full flex items-center justify-center mb-6">
                  <FaBrain className="text-3xl text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Problem Solving</h3>
                <p className="text-gray-400">Test your ability to analyze designs and implement efficient solutions using modern web technologies.</p>
              </div>
            </div>
            <div className="bg-theme-purple/5 rounded-xl p-8 transform hover:scale-105 transition-transform">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-theme-purple/10 rounded-full flex items-center justify-center mb-6">
                  <FaPencilRuler className="text-3xl text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold mb-4">Creative Freedom</h3>
                <p className="text-gray-400">While matching the design, showcase your creativity in implementation and optimization techniques.</p>
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
                <h3 className="text-xl font-bold">Duration</h3>
                <p className="text-gray-400">3 Hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaMapMarkerAlt className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Venue</h3>
                <p className="text-gray-400">MBA Smart Room 1</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaLaptop className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mode</h3>
                <p className="text-gray-400">Offline (On-Campus)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaCode className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tech Stack</h3>
                <p className="text-gray-400">HTML, CSS, JavaScript, React, Bootstrap, Tailwind</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-theme-purple/20 rounded-lg">
                <FaAward className="text-3xl text-theme-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Prize Pool</h3>
                <p className="text-gray-400">₹4500 + Certificates + Merchandise</p>
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
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-theme-purple/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Rules</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>Bring your own laptops and chargers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>Build everything from scratch</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>Strict time constraints apply</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-theme-purple">•</span>
                  <span>No plagiarism allowed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-theme-purple/10 rounded-lg p-8 text-center">
              <FaTrophy className="text-5xl text-theme-purple mx-auto mb-6" />
              <h3 className="text-xl font-bold mb-4">Cash Prizes</h3>
              <ul className="space-y-2">
                <li>1st Prize: ₹2000</li>
                <li>2nd Prize: ₹1500</li>
                <li>3rd Prize: ₹1000</li>
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
                <li>Social media features</li>
                <li>Portfolio showcase</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DejaViewEventPage; 