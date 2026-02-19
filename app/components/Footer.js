export default function Footer() {
    return (
      <footer className="px-4 md:px-12 lg:px-32 py-8 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[#666666] text-xs">
          <p>{'>'} Built with Next.js + Tailwind + Framer Motion</p>
          <p>© 2025 Ruben. All rights reserved.</p>
        </div>
      </footer>
    );
  }