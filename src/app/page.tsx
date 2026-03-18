"use client";

import { BarrancasSection } from "@/components/BarrancasSection";
import ExperienceWizardModal from "@/components/experience/ExperienceWizardModal";
import { DesignSection } from "@/components/DesignSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { GroupsSection } from "@/components/GroupsSection";
import { Hero } from "@/components/Hero";
import { InclusionsSection } from "@/components/InclusionsSection";
import { PackagesSection } from "@/components/PackagesSection";
import { RoutesSection } from "@/components/RoutesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhySection } from "@/components/WhySection";
import { Header } from "@/components/Header";
import { ExperienceProvider } from "@/contexts/ExperienceContext";

function HomeContent() {
  return (
    <>
      <Header />
      <main className="pt-[96px]">
        <Hero />
        <RoutesSection />
        <PackagesSection />
        <DesignSection />
        <ExperienceSection />
        <InclusionsSection />
        <WhySection />
        <GroupsSection />
        <BarrancasSection />
        <FaqSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <ExperienceWizardModal />
    </>
  );
}

export default function Home() {
  return (
    <ExperienceProvider>
      <HomeContent />
    </ExperienceProvider>
  );
}
