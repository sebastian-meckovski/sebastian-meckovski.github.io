// mobileNav.ts
// Handles mobile nav show/hide and outside click

export function showNav(): void {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
  nav.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');

  // Add outside click listener
  document.addEventListener('mousedown', outsideClickListener);
}

export function hideNav(): void {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
  nav.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');

  // Remove outside click listener
  document.removeEventListener('mousedown', outsideClickListener);
}

export function outsideClickListener(e: MouseEvent): void {
  const nav = document.getElementById('main-nav');
  const burger = document.querySelector('button[aria-label]') as HTMLElement | null;
  if (!nav || !burger) return;
  if (!nav.contains(e.target as Node) && !burger.contains(e.target as Node)) {
    hideNav();
    // Optionally, set burger to closed state if needed
  }
}
