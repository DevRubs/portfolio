const techStack = {
    'LANGUAGES': ['JavaScript', 'Python', 'TypeScript'],
    'FRAMEWORKS': ['React', 'Next.js', 'Node.js', 'Express'],
    'AUTOMATION': ['Zapier', 'n8n', 'Make'],
    'AI/ML': ['Gemini AI', 'OpenAI', 'Claude'],
    'TOOLS': ['VS Code', 'Cursor', 'Git', 'Figma'],
    'DATABASES': ['MongoDB', 'PostgreSQL'],
  };
  
  export default function TechStack() {
    return (
      <section id="stack" className="px-4 md:px-12 lg:px-32 py-20 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#00ff9d] text-xs md:text-sm mb-4">{'>'} stack.installed()</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] mb-8">
            TECH_STACK_
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, items]) => (
              <div 
                key={category} 
                className="p-4 md:p-6 border border-[#1a1a1a] hover:border-[#00ff9d]/50 transition-colors"
              >
                <p className="text-[#00ff9d] text-xs mb-3">{'>'} {category.toLowerCase()}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span 
                      key={item} 
                      className="text-xs md:text-sm text-[#e0e0e0] bg-[#1a1a1a] px-2 py-1 hover:bg-[#00ff9d]/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }