"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ExperienceWizardContext {
  origen?: string;
  ruta?: string;
  duracion?: string;
  clase?: string;
  tipo?: string;
}

interface ExperienceContextType {
  isOpen: boolean;
  context: ExperienceWizardContext | undefined;
  triggerPosition: { top: number; left: number; width: number; height: number } | null;
  openModal: (_ctx?: ExperienceWizardContext, _triggerElement?: HTMLElement | null) => void;
  closeModal: () => void;
}

const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<ExperienceWizardContext | undefined>(undefined);
  const [triggerPosition, setTriggerPosition] = useState<{ top: number; left: number; width: number; height: number } | null>(null);

  const openModal = (ctx?: ExperienceWizardContext, _triggerElement?: HTMLElement | null) => {
    setContext(ctx);
    
    // Calcular posición del botón que activó el modal
    if (_triggerElement) {
      const rect = _triggerElement.getBoundingClientRect();
      const position = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
      // Guardar posición ANTES de abrir el modal
      setTriggerPosition(position);
      setIsOpen(true);
    } else {
      setTriggerPosition(null);
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setContext(undefined);
    setTriggerPosition(null);
  };

  return (
    <ExperienceContext.Provider value={{ isOpen, context, triggerPosition, openModal, closeModal }}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience() {
  const ctx = useContext(ExperienceContext);
  if (!ctx) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }
  return ctx;
}
