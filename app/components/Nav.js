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
          className="text-[#00ff9d] font-bold tracking-tight hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all duration-300"
          data-hover
        >
          RUBEN
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm">
          <button onClick={() => scrollTo('projects')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300" data-hover>
            Projects
          </button>
          <button onClick={() => scrollTo('stack')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300" data-hover>
            Stack
          </button>
          <button onClick={() => scrollTo('about')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300" data-hover>
            About
          </button>
          <button onClick={() => scrollTo('contact')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300" data-hover>
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#00ff9d] text-2xl hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[#1a1a1a] pt-4">
          <div className="flex flex-col gap-2 text-base">
            <button onClick={() => scrollTo('projects')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 text-left py-2 w-full">
              Projects
            </button>
            <button onClick={() => scrollTo('stack')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 text-left py-2 w-full">
              Stack
            </button>
            <button onClick={() => scrollTo('about')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 text-left py-2 w-full">
              About
            </button>
            <button onClick={() => scrollTo('contact')} className="text-[#666666] hover:text-[#00ff9d] hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all duration-300 text-left py-2 w-full">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}