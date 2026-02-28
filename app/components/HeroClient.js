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
            <div className="max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <div className="order-1 lg:order-1">
                  <p className="text-[#00ff9d] text-xs md:text-sm mb-4">
                    Status: <span className="text-[#666666]">online</span>
                  </p>

                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                    <TypeWriter
                      text="I build AI automations that eliminate manual work."
                      delay={30}
                      className="text-[#e0e0e0]"
                    />
                  </h1>

                  <p className="text-[#666666] text-base md:text-lg lg:text-xl max-w-2xl mb-8 md:mb-10">
                    Turning tedious, repetitive work into seamless automations.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                      className="px-5 py-3 bg-[#00ff9d] text-[#0a0a0a] font-bold hover:bg-[#00cc7d] transition-colors text-center text-sm md:text-base"
                      data-hover
                    >
                      View Projects
                    </button>
                    <button
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                      className="px-5 py-3 border border-[#00ff9d] text-[#00ff9d] font-bold hover:bg-[#00ff9d]/10 transition-colors text-center text-sm md:text-base"
                      data-hover
                    >
                      Contact Me
                    </button>
                  </div>
                </div>

                {/* Right Column - Profile Photo */}
                <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative max-w-md w-full">
                    {/* Terminal-style frame */}
                    <div className="relative border border-[#00ff9d]/30 bg-[#0b0f0d] shadow-[0_0_0_1px_rgba(0,255,157,0.08),0_0_30px_rgba(0,255,157,0.08)]">
                      {/* Terminal header */}
                      <div className="flex items-center justify-between border-b border-[#00ff9d]/25 px-3 md:px-4 py-2 bg-[#0a0a0a]">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#00ff9d]/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#666666]/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#1a1a1a]" />
                        </div>
                        <p className="text-[10px] md:text-xs text-[#00ff9d] tracking-wide">
                          Profile
                        </p>
                      </div>

                      {/* Grid pattern background */}
                      <div
                        className="absolute inset-0 pointer-events-none opacity-[0.08]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(0deg, rgba(0,255,157,0.5) 0px, rgba(0,255,157,0.5) 1px, transparent 1px, transparent 3px)',
                        }}
                      />

                      {/* Profile photo container */}
                      <div className="p-6 md:p-8">
                        <div className="aspect-square w-full max-w-sm mx-auto bg-[#0d1110] border border-[#00ff9d]/20 rounded-lg overflow-hidden group/photo">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-[#00ff9d]/60 text-center">
                              <div className="text-4xl mb-3">📸</div>
                              <div className="text-sm font-medium">Profile Photo</div>
                              <div className="text-xs mt-1 opacity-60">Add your image here</div>
                            </div>
                          </div>

                          {/* Hover glow effect */}
                          <div className="absolute inset-0 border border-[#00ff9d]/10 group-hover/photo:border-[#00ff9d]/40 transition-all duration-300 rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#666666]">
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