// mobileNav.ts
// Handles mobile nav show/hide and outside click

function addTransitions(nav: HTMLElement): void {
  nav.classList.add("transition-transform", "duration-300", "ease-in-out");
}

function removeTransitions(nav: HTMLElement): void {
  nav.classList.remove("transition-transform", "duration-300", "ease-in-out");
}

export function showNav(): void {
  const nav = document.getElementById("main-nav");
  if (!nav) return;
  nav.addEventListener("transitionend", () => {
    removeTransitions(nav);
    nav.removeEventListener("transitionend", () => {
      removeTransitions(nav);
    });
  });
  addTransitions(nav);
  nav.classList.remove("translate-x-full");
  nav.classList.add("translate-x-0");

  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", hideNav);
  });
}

export function hideNav(): void {
  const nav = document.getElementById("main-nav");
  if (!nav) return;
  nav.addEventListener("transitionend", () => {
    removeTransitions(nav);
    nav.removeEventListener("transitionend", () => {
      removeTransitions(nav);
    });
  });
  addTransitions(nav);
  nav.classList.add("translate-x-full");
  nav.classList.remove("translate-x-0");

  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.removeEventListener("click", hideNav);
  });
}
