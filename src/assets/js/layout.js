const swup = new Swup();

function updateActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // For root url, we need to handle it separately
        if (link.getAttribute('href') === '/' && currentPath === '/') {
            link.classList.add('bg-cyan-400/20');
        } else if (link.getAttribute('href') !== '/' && currentPath.startsWith(link.getAttribute('href'))) {
            link.classList.add('bg-cyan-400/20');
        } else {
            link.classList.remove('bg-cyan-400/20');
        }
    });
}

// Run on initial page load
document.addEventListener('DOMContentLoaded', updateActiveNav);

// Run after swup replaces content
swup.hooks.on('page:view', updateActiveNav);

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        if (mobileMenu.classList.contains('opacity-0')) { // Show menu
            mobileMenu.classList.remove('opacity-0', 'invisible', '-translate-y-4');
            mobileMenu.classList.add('opacity-100', 'visible', 'translate-y-0');
        } else { // Hide menu
            mobileMenu.classList.remove('opacity-100', 'visible', 'translate-y-0');
            mobileMenu.classList.add('opacity-0', 'invisible', '-translate-y-4');
        }
    });
}

function updateProfileImageTheme() {
    const img = document.getElementById('profile-img');
    if (!img) return;
    let theme = document.documentElement.getAttribute('data-theme');
    if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    img.src = theme === 'dark' ? 'assets/seb-red.png' : 'assets/seb-blue.png';
}

document.addEventListener('DOMContentLoaded', updateProfileImageTheme);
swup.hooks.on('page:view', updateProfileImageTheme);

// If theme is toggled, update image
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const root = document.documentElement;
        let currentTheme = root.getAttribute('data-theme');

        // If no theme is set manually, check the OS preference
        if (!currentTheme) {
            currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        // Toggle to the opposite theme
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        updateProfileImageTheme();
    });
}
