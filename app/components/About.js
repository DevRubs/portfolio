export default function About() {
    return (
      <section id="about" className="px-4 md:px-12 lg:px-32 py-20 border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#00ff9d] text-xs md:text-sm mb-4">{'>'} about.read()</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] mb-8">
            ABOUT_
          </h2>
  
          <div className="space-y-4 md:space-y-6 text-[#666666]">
            <p className="text-[#e0e0e0] text-base md:text-lg">
              Hey, I&apos;m Ruben — I build systems that work while you sleep.
            </p>
  
            <p className="text-sm md:text-base">
              I got into AI automation because manual work is a bug, not a feature. 
              If you&apos;re doing the same task twice, it should be automated.
            </p>
  
            <p className="text-sm md:text-base">
              My approach: tinker until it works. I learn by building, not watching tutorials. 
              One video, it clicks, then I ship.
            </p>
          </div>
        </div>
      </section>
    );
  }