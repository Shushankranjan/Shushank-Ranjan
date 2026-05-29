import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

import ScrollToTop from '@/components/ScrollToTop';
import Finale from '@/components/Finale';
import EasterEgg from '@/components/EasterEgg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <EasterEgg />
      <Navbar />
      <ScrollToTop />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <Finale />
    </div>
  );
};

export default Index;
