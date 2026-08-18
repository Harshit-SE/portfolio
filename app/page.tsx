"use client";

import { useMode } from "@/context/ModeContext";
import SpotlightCursor     from "@/components/ui/SpotlightCursor";
import ModePill            from "@/components/ui/ModePill";
import Navbar              from "@/components/layout/Navbar";
import Footer              from "@/components/layout/Footer";

/* Standard modes */
import HeroSection         from "@/components/sections/HeroSection";
import AboutSection        from "@/components/sections/AboutSection";
import SkillsSection       from "@/components/sections/SkillsSection";
import ProjectsSection     from "@/components/sections/ProjectsSection";
import ExperienceSection   from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection      from "@/components/sections/ContactSection";

/* Runes mode */
import RunesHeroSection         from "@/components/sections/RunesHeroSection";
import RunesAboutSection        from "@/components/sections/RunesAboutSection";
import RunesSkillsSection       from "@/components/sections/RunesSkillsSection";
import RunesProjectsSection     from "@/components/sections/RunesProjectsSection";
import RunesExperienceSection   from "@/components/sections/RunesExperienceSection";
import RunesAchievementsSection from "@/components/sections/RunesAchievementsSection";
import RunesContactSection      from "@/components/sections/RunesContactSection";

export default function Home() {
  const { isRunes } = useMode();

  return (
    <>
      <SpotlightCursor />
      <ModePill />
      <Navbar />
      <main>
        {isRunes ? (
          <>
            <RunesHeroSection />
            <RunesAboutSection />
            <RunesSkillsSection />
            <RunesProjectsSection />
            <RunesExperienceSection />
            <RunesAchievementsSection />
            <RunesContactSection />
          </>
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <AchievementsSection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
