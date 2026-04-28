"use client";

import { useCallback, useState } from "react";
import type { WizardPackagePreset } from "@/components/landing/wizard/wizardTypes";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { HeroSection } from "@/components/landing/HeroSection";
import { ManifestoSection } from "@/components/landing/ManifestoSection";
import { BrandPrinciplesSection } from "@/components/landing/BrandPrinciplesSection";
import { RoutesSection } from "@/components/landing/RoutesSection";
import { ToursSection } from "@/components/landing/ToursSection";
import { BeyondCreelSection } from "@/components/landing/BeyondCreelSection";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { DesignExperienceSection } from "@/components/landing/DesignExperienceSection";
import { InclusionsSection } from "@/components/landing/InclusionsSection";
import { WhyRumboSection } from "@/components/landing/WhyRumboSection";
import { BarrancasEditorialSection } from "@/components/landing/BarrancasEditorialSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { GroupsSection } from "@/components/landing/GroupsSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingWizard } from "@/components/landing/wizard/LandingWizard";
import { ChepeEffectProvider } from "@/components/landing/chepe/ChepeEffect";

export function LandingHome() {
  const [wizardOpen, setWizardOpen] = useState(false);
  const [wizardPackagePreset, setWizardPackagePreset] = useState<WizardPackagePreset | null>(null);

  const onOpenWizard = useCallback(() => {
    setWizardPackagePreset(null);
    setWizardOpen(true);
  }, []);

  const onConfigurePackage = useCallback((preset: WizardPackagePreset) => {
    setWizardPackagePreset(preset);
    setWizardOpen(true);
  }, []);

  const onCloseWizard = useCallback(() => {
    setWizardOpen(false);
    setWizardPackagePreset(null);
  }, []);

  const onScrollToPackages = useCallback(() => {
    const el = document.getElementById("paquetes");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <ChepeEffectProvider>
      <LandingHeader onOpenWizard={onOpenWizard} />
      <main id="contenido-principal" className="pt-[76px]">
        <HeroSection onOpenWizard={onOpenWizard} onScrollToPackages={onScrollToPackages} />
        <ManifestoSection />
        <BrandPrinciplesSection />
        <RoutesSection onOpenWizard={onOpenWizard} />
        <ToursSection />
        <BeyondCreelSection />
        <PackagesSection onOpenWizard={onOpenWizard} onConfigurePackage={onConfigurePackage} />
        <DesignExperienceSection onOpenWizard={onOpenWizard} />
        <InclusionsSection />
        <WhyRumboSection />
        <BarrancasEditorialSection />
        <TestimonialsSection />
        <FaqSection />
        <GroupsSection />
        <FinalCtaSection onOpenWizard={onOpenWizard} />
      </main>
      <LandingFooter />
      <LandingWizard open={wizardOpen} onClose={onCloseWizard} packagePreset={wizardPackagePreset} />
    </ChepeEffectProvider>
  );
}
