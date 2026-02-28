const socials = [
    { label: 'EMAIL', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
    { label: 'GITHUB', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/yourprofile', href: 'https://linkedin.com/in/yourprofile' },
  ];
  
  export default function ContactSection() {
    return (
      <section id="contact" className="px-4 md:px-12 lg:px-32 py-16 md:py-20 border-t border-[#1a1a1a]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#00ff9d] text-xs md:text-sm mb-4">Contact</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] mb-4">
            Contact
          </h2>
          <p className="text-[#666666] text-sm md:text-base mb-8">
            Have a project? Need an automation? Let&apos;s talk.
          </p>
  
          <div className="space-y-3 md:space-y-4 mb-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block p-3 md:p-4 border border-[#1a1a1a] hover:border-[#00ff9d] transition-colors group"
                data-hover
              >
                <div className="text-[#00ff9d] text-xs md:text-sm mb-1">{social.label}</div>
                <div className="text-[#e0e0e0] text-sm md:text-base group-hover:text-[#00ff9d] transition-colors break-all">
                  {social.value}
                </div>
              </a>
            ))}
          </div>
  
          {/* Calendly CTA */}
          
            <a
            href="https://calendly.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 md:p-6 bg-[#00ff9d]/5 border border-[#00ff9d] hover:bg-[#00ff9d]/10 transition-colors text-center group"
            data-hover
          >
            <p className="text-[#00ff9d] text-sm md:text-base font-bold mb-1">
              Book a Call
            </p>
            <p className="text-[#666666] text-xs md:text-sm">
              Skip the emails. Let&apos;s talk directly.
            </p>
          </a>
  
          {/* Availability */}
          <div className="mt-8 p-3 md:p-4 border border-[#00ff9d]/30 bg-[#00ff9d]/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse" />
              <span className="text-[#00ff9d] text-xs md:text-sm">STATUS: Available for freelance</span>
            </div>
          </div>
        </div>
      </section>
    );
  }