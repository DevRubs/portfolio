'use client';

import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 px-4 md:px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => scrollTo('hero')} 
          className="text-[#00ff9d] font-bold tracking-tight"
          data-hover
        >
          {'>'} RUBEN_
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm">
          <button onClick={() => scrollTo('projects')} className="text-[#666666] hover:text-[#00ff9d] transition-colors" data-hover>
            [PROJECTS]
          </button>
          <button onClick={() => scrollTo('stack')} className="text-[#666666] hover:text-[#00ff9d] transition-colors" data-hover>
            [STACK]
          </button>
          <button onClick={() => scrollTo('about')} className="text-[#666666] hover:text-[#00ff9d] transition-colors" data-hover>
            [ABOUT]
          </button>
          <button onClick={() => scrollTo('contact')} className="text-[#666666] hover:text-[#00ff9d] transition-colors" data-hover>
            [CONTACT]
          </button>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="md:hidden text-[#00ff9d] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[#1a1a1a] pt-4">
          <div className="flex flex-col gap-4 text-sm">
            <button onClick={() => scrollTo('projects')} className="text-[#666666] hover:text-[#00ff9d] transition-colors text-left">
              [PROJECTS]
            </button>
            <button onClick={() => scrollTo('stack')} className="text-[#666666] hover:text-[#00ff9d] transition-colors text-left">
              [STACK]
            </button>
            <button onClick={() => scrollTo('about')} className="text-[#666666] hover:text-[#00ff9d] transition-colors text-left">
              [ABOUT]
            </button>
            <button onClick={() => scrollTo('contact')} className="text-[#666666] hover:text-[#00ff9d] transition-colors text-left">
              [CONTACT]
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}