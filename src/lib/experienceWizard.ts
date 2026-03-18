const EVENT_NAME = "rumbo-experience-open";

export interface ExperienceWizardContext {
  origen?: string;
  ruta?: string;
  duracion?: string;
  clase?: string;
  tipo?: string;
}

export function openExperienceWizard(context?: ExperienceWizardContext) {
  if (typeof window === "undefined") {
    console.log("openExperienceWizard: window is undefined");
    return;
  }
  console.log("openExperienceWizard: Dispatching event", context);
  const event = new CustomEvent(EVENT_NAME, { detail: context });
  window.dispatchEvent(event);
  console.log("openExperienceWizard: Event dispatched");
}

export function subscribeExperienceWizard(callback: (_context?: ExperienceWizardContext) => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<ExperienceWizardContext>;
    callback(customEvent.detail);
  };
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}
