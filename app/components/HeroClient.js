'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootSequence from './BootSequence';
import TypeWriter from './TypeWriter';

export default function HeroClient({ children }) {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-32 pt-20">
            <div className="max-w-4xl">
              <p className="text-[#00ff9d] text-xs md:text-sm mb-4">
                {'>'} system.status: <span className="text-[#666666]">online</span>
              </p>
              
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <TypeWriter 
                  text="I build AI automations that eliminate manual work." 
                  delay={30}
                  className="text-[#e0e0e0]"
                />
              </h1>

              <p className="text-[#666666] text-base md:text-lg lg:text-xl max-w-2xl mb-8 md:mb-10">
                IT student turning repetitive tasks into automated workflows.
                From video processing to content generation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-3 bg-[#00ff9d] text-[#0a0a0a] font-bold hover:bg-[#00cc7d] transition-colors text-center text-sm md:text-base"
                  data-hover
                >
                  [VIEW_PROJECTS]
                </button>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 py-3 border border-[#00ff9d] text-[#00ff9d] font-bold hover:bg-[#00ff9d]/10 transition-colors text-center text-sm md:text-base"
                  data-hover
                >
                  [CONTACT_ME]
                </button>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#666666]">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-[#666666] to-transparent"></div>
            </div>
          </section>

          {/* Rest of the page (server components passed as children) */}
          {children}
        </>
      )}
    </>
  );
}