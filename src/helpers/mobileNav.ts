// mobileNav.ts
// Handles mobile nav show/hide

function addTransitions(nav: HTMLElement): void {
  nav.classList.add("transition-transform", "duration-300", "ease-in-out");
}

function removeTransitions(nav: HTMLElement): void {
  nav.classList.remove("transition-transform", "duration-300", "ease-in-out");
}

// Attach transition classes, run mutation, then clean them up after the first transitionend.
function runWithTransition(nav: HTMLElement, mutate: () => void): void {
  addTransitions(nav);
  const handler = () => {
    removeTransitions(nav);
  };
  // Using once ensures the handler is removed automatically (prevents accumulation)
  nav.addEventListener("transitionend", handler, { once: true });
  mutate();
}

export function showNav(): void {
  const nav = document.getElementById("main-nav");
  if (!nav) return;
  runWithTransition(nav, () => {
    nav.classList.remove("translate-x-full");
    nav.classList.add("translate-x-0");
  });
  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    // Avoid stacking duplicate listeners
    link.removeEventListener("click", hideNav);
    link.addEventListener("click", hideNav);
  });
}

export function hideNav(): void {
  const nav = document.getElementById("main-nav");
  if (!nav) return;
  runWithTransition(nav, () => {
    nav.classList.add("translate-x-full");
    nav.classList.remove("translate-x-0");
  });
  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.removeEventListener("click", hideNav);
  });
}
