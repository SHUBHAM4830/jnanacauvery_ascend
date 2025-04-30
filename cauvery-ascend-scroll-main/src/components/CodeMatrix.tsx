import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaCode } from 'react-icons/fa';

const codeSnippets = [
  { icon: <FaHtml5 />, text: '<div class="container">' },
  { icon: <FaCss3 />, text: '.container { display: flex; }' },
  { icon: <FaJs />, text: 'const app = () => {' },
  { icon: <FaReact />, text: '<React.StrictMode>' },
  { icon: <FaCode />, text: 'function render() {' },
];

const webElements = [
  { type: 'button', text: 'Click Me' },
  { type: 'input', text: 'Search...' },
  { type: 'card', text: 'Card Title' },
  { type: 'nav', text: 'Navigation' },
  { type: 'form', text: 'Submit' },
];

const CodeMatrix = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % codeSnippets.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <div 
      className="relative w-full h-64 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-theme-purple/5 to-theme-darker/50 backdrop-blur-sm rounded-2xl"></div>
      
      <div className="relative z-10 grid grid-cols-3 gap-4 w-full max-w-4xl px-8">
        {/* Tech-themed loaders */}
        <div className="item bg-theme-purple/10 rounded-lg p-4 flex items-center justify-center">
          <div className="loader loader--1" style={{ '--block-size': '100px' } as React.CSSProperties}>
            <FaHtml5 className="text-3xl text-theme-purple" />
          </div>
        </div>
        <div className="item bg-theme-purple/10 rounded-lg p-4 flex items-center justify-center">
          <div className="loader loader--3" style={{ '--block-size': '100px' } as React.CSSProperties}>
            <FaCss3 className="text-3xl text-theme-purple" />
          </div>
        </div>
        <div className="item bg-theme-purple/10 rounded-lg p-4 flex items-center justify-center">
          <div className="loader loader--5" style={{ '--block-size': '100px' } as React.CSSProperties}>
            <FaJs className="text-3xl text-theme-purple" />
          </div>
        </div>
        <div className="item bg-theme-purple/10 rounded-lg p-4 flex items-center justify-center">
          <div className="loader loader--7" style={{ '--block-size': '100px' } as React.CSSProperties}>
            <FaReact className="text-3xl text-theme-purple" />
          </div>
        </div>
        <div className="item bg-theme-purple/10 rounded-lg p-4 flex items-center justify-center">
          <div className="loader loader--8" style={{ '--block-size': '100px' } as React.CSSProperties}>
            <FaCode className="text-3xl text-theme-purple" />
          </div>
        </div>
        <div className="item bg-theme-purple/10 rounded-lg p-4 flex items-center justify-center">
          <div className="loader loader--9" style={{ '--block-size': '100px' } as React.CSSProperties}>
            <FaHtml5 className="text-3xl text-theme-purple" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .loader {
          --loader-size: calc(var(--block-size) / 2);
          --loader-size-half: calc(var(--loader-size) / 2);
          --loader-size-half-neg: calc(var(--loader-size-half) * -1);
          --light-color: rgba(255, 255, 255, 0.3);
          --dot-size: 5px;
          --dot-size-half: calc(var(--dot-size) / 2);
          --dot-size-half-neg: calc(var(--dot-size-half) * -1);
          
          display: block;
          position: relative;
          width: var(--loader-size);
          display: grid;
          place-items: center;
          color: white;
        }

        .loader::before,
        .loader::after {
          content: '';
          position: absolute;
        }

        /* Loader 1 */
        .loader--1 {
          --anim-duration: 1s;
          --loader-1-dist: calc(var(--loader-size) - var(--dot-size-half) + 1px);
          aspect-ratio: 1 / 1;
          border: 1px solid var(--light-color);
        }

        .loader--1::before,
        .loader--1::after {
          width: var(--dot-size);
          aspect-ratio: 1 / 1;
          background: currentColor;
          border-radius: 50%;
          top: var(--dot-size-half-neg);
          left: var(--dot-size-half-neg);
          animation: loader-1 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
        }

        .loader--1::after {
          animation-delay: calc(var(--anim-duration) / 4 * -1);
        }

        @keyframes loader-1 {
          0%, 100% { transform: none; }
          25% { transform: translateX(var(--loader-1-dist)); }
          50% { transform: translateX(var(--loader-1-dist)) translateY(var(--loader-1-dist)); }
          75% { transform: translateX(0) translateY(var(--loader-1-dist)); }
        }

        /* Loader 3 */
        .loader--3 {
          --anim-duration: 1.2s;
          aspect-ratio: 1 / 1;
          border: 1px solid var(--light-color);
          border-radius: 50%;
          animation: loader-3 calc(var(--anim-duration) * 3) linear infinite;
        }

        .loader--3::before,
        .loader--3::after {
          width: var(--dot-size);
          aspect-ratio: 1 / 1;
          background: currentColor;
          border-radius: 50%;
          top: var(--dot-size-half-neg);
          left: calc(50% - var(--dot-size-half));
          animation: loader-3 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
          transform-origin: center calc(var(--loader-size-half) + var(--dot-size-half) - 1px);
        }

        .loader--3::after {
          animation-delay: calc(var(--anim-duration) / 3 * -1);
        }

        @keyframes loader-3 {
          100% { transform: rotate(1turn); }
        }

        /* Loader 5 */
        .loader--5 {
          --tilt-deg: 40deg;
          --anim-duration: 0.6s;
          aspect-ratio: 1 / 1;
          perspective: 50vmin;
          transform-style: preserve-3d;
          animation: loader-5-1 calc(var(--anim-duration) * 3) linear alternate-reverse infinite;
        }

        .loader--5::before,
        .loader--5::after {
          width: 50%;
          aspect-ratio: 1 / 1;
          background-color: currentColor;
          top: 25%;
          left: 25%;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
          animation: loader-5 var(--anim-duration) cubic-bezier(0.07, 0.59, 0.56, 0.88) infinite;
        }

        .loader--5::before { --turn-deg: 360deg; }
        .loader--5::after { 
          --turn-deg: 410deg;
          animation-delay: calc(var(--anim-duration) / 1.8 * -1);
        }

        @keyframes loader-5 {
          0% { transform: scale(0.3) translateZ(-5vmin); }
          0%, 100% { opacity: 0; }
          66% { 
            opacity: 0.8;
            transform: scale(1.2) translateZ(5vmin) rotate(var(--turn-deg));
          }
          100% { transform: scale(1) translateZ(3vmin) rotate(calc(var(--turn-deg) * 1.2)); }
        }

        @keyframes loader-5-1 {
          0% { transform: rotateX(var(--tilt-deg)) rotateY(-15deg); }
          100% { transform: rotateX(var(--tilt-deg)) rotateY(15deg); }
        }

        /* Loader 7 */
        .loader--7 {
          --anim-duration: 0.8s;
          aspect-ratio: 1 / 1;
          border: 1px solid var(--light-color);
          border-radius: 50%;
          animation: loader-7 calc(var(--anim-duration) * 2) linear infinite;
        }

        .loader--7::before,
        .loader--7::after {
          width: var(--dot-size);
          aspect-ratio: 1 / 1;
          background: currentColor;
          border-radius: 50%;
          top: calc(50% - var(--dot-size-half));
          left: calc(50% - var(--dot-size-half));
          animation: loader-7-1 var(--anim-duration) cubic-bezier(0.32, 0.41, 0.3, 1.87) infinite;
        }

        .loader--7::after {
          animation-name: loader-7-2;
          animation-delay: calc(var(--anim-duration) / 3 * -1);
        }

        @keyframes loader-7 {
          100% { transform: rotate(1turn); }
        }

        @keyframes loader-7-1 {
          0%, 100% { transform: translateX(var(--loader-size-half-neg)); }
          55% { transform: translateX(var(--loader-size-half)); }
        }

        @keyframes loader-7-2 {
          0%, 100% { transform: translateY(var(--loader-size-half-neg)); }
          55% { transform: translateY(var(--loader-size-half)); }
        }

        /* Loader 8 */
        .loader--8 {
          --anim-duration: 0.8s;
          aspect-ratio: 1 / 1;
          border: 1px dashed var(--light-color);
          border-radius: 50%;
          perspective: 50vmin;
          transform-style: preserve-3d;
          transform: rotateX(45deg) rotateY(15deg);
        }

        .loader--8::before,
        .loader--8::after {
          animation: loader-8 var(--anim-duration) cubic-bezier(0.39, 0.24, 0, 0.99) infinite;
        }

        .loader--8::before {
          --z-dist: 8vmin;
          width: var(--dot-size);
          aspect-ratio: 1 / 1;
          background: currentColor;
          border-radius: 50%;
          top: calc(50% - var(--dot-size-half));
          left: calc(50% - var(--dot-size-half));
          animation-delay: calc(var(--anim-duration) / 4 * -1);
        }

        .loader--8::after {
          --z-dist: 4vmin;
          width: 65%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          border: 1px solid currentColor;
        }

        @keyframes loader-8 {
          0%, 100% { transform: translateZ(calc(var(--z-dist) * -1)) scale(0.6); }
          55% { transform: translateZ(var(--z-dist)); }
        }

        /* Loader 9 */
        .loader--9 {
          --anim-duration: 0.6s;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background-color: currentColor;
          box-shadow: 0 0 var(--loader-size) var(--light-color);
          animation: loader-9 calc(var(--anim-duration) * 6) linear infinite;
        }

        .loader--9::before,
        .loader--9::after {
          width: var(--dot-size);
          aspect-ratio: 1 / 1;
          background: currentColor;
          border-radius: 50%;
          animation: loader-9-1 var(--anim-duration) cubic-bezier(0.27, 0.08, 0.26, 0.7) infinite;
        }

        .loader--9::before {
          --x-dist: 0;
          --y-dist: var(--loader-size-half);
          bottom: calc(100% + var(--loader-size));
          left: calc(50% - var(--dot-size-half));
          transform-origin: center var(--loader-size);
        }

        .loader--9::after {
          --x-dist: var(--loader-size-half);
          --y-dist: 0;
          top: calc(50% - var(--dot-size-half));
          right: calc(100% + var(--loader-size));
          transform-origin: var(--loader-size) center;
          animation-delay: calc(var(--anim-duration) / 2 * -1);
        }

        @keyframes loader-9 {
          100% { transform: rotate(1turn); }
        }

        @keyframes loader-9-1 {
          0%, 100% { opacity: 0; }
          33% { opacity: 1; }
          0% { transform: scale(1.1); }
          88% { transform: rotate(180deg) translate(var(--x-dist), var(--y-dist)); }
        }

        .item {
          transition: opacity 0.4s ease;
        }

        .item:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default CodeMatrix; 