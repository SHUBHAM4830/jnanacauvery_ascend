import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-theme-dark py-16 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Jnana Cauvery 2025</h3>
            <p className="text-gray-400 mb-4">
              An extraordinary celebration of talent, innovation and creativity brought to you by Ascend Club.
            </p>
            <p className="text-theme-purple font-medium">May 8th, 2025</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:connectascend@gmail.com" className="hover:text-theme-purple transition-colors">
                  connectascend@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Aditya Raj: 8102755701</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Shubham Jha: 9599031330</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Santhosh D: 6364464249</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-theme-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>P.E.S. College of Engineering, Mandya</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/ascend_pesce?igsh=MWh0NHJhZGF5eDhnMw==&utm_source=qr" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-theme-purple transition-colors"
                target="_blank" rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm6 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Ascend Club. All rights reserved.<br />
              Website by <span className="text-theme-purple">Ascend</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B5CF6" d="M45.3,-59.1C58.3,-51.1,68.3,-35.7,73.4,-18.9C78.4,-2.1,78.6,16.2,71.3,30.8C64,45.5,49.2,56.5,33.4,64.4C17.6,72.3,0.9,77.1,-17.7,75.7C-36.2,74.3,-56.7,66.7,-67.5,51.5C-78.3,36.3,-79.5,13.5,-75.1,-6.1C-70.7,-25.6,-60.7,-42,-47.1,-50C-33.5,-58,-16.7,-57.6,-0.1,-57.5C16.6,-57.3,32.2,-67.2,45.3,-59.1Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#6366F1" d="M41.3,-48.3C52.9,-39.2,61.6,-24.7,65.4,-8.8C69.1,7.1,67.9,24.5,59.2,36.8C50.6,49.1,34.5,56.4,17.7,62.3C0.8,68.1,-16.8,72.5,-31.5,67.3C-46.3,62.2,-58.1,47.5,-65.2,30.7C-72.3,13.9,-74.6,-5,-69.2,-21.1C-63.8,-37.2,-50.6,-50.5,-36.3,-58.4C-21.9,-66.3,-6.5,-68.8,6.3,-76.2C19.1,-83.6,30.2,-95.8,35.6,-90C41,-84.1,40.9,-60.2,41.3,-48.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
