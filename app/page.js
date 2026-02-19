import HeroClient from './components/HeroClient';
import ProjectsSection from './components/ProjectSection';
import TechStack from './components/TechStack';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroClient>
        <ProjectsSection />
        <TechStack />
        <About />
        <Testimonials />
        <ContactSection />
        <Footer />
      </HeroClient>
    </main>
  );
}
