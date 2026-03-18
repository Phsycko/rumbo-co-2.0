export function scrollToSection(sectionId: string, offset: number = 100) {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
