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

// Theme dialog logic
const themeToggle = document.getElementById('theme-toggle');
const themeDialog = document.getElementById('theme-dialog');
const themeDialogClose = document.getElementById('theme-dialog-close');

if (themeToggle && themeDialog) {
    themeToggle.addEventListener('click', () => {
        themeDialog.style.opacity = '1';
        themeDialog.style.visibility = 'visible';
        themeDialog.style.pointerEvents = 'auto';
        themeDialog.classList.add('show');
    });
}
if (themeDialogClose && themeDialog) {
    themeDialogClose.addEventListener('click', () => {
        themeDialog.style.opacity = '0';
        themeDialog.style.visibility = 'hidden';
        themeDialog.style.pointerEvents = 'none';
        themeDialog.classList.remove('show');
    });
}

function setTheme(theme) {
    const root = document.documentElement;
    if (theme === 'default') {
        localStorage.setItem('theme', 'default');
        // Use OS preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            root.setAttribute('data-theme', 'dark');
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            root.setAttribute('data-theme', 'light');
        } else {
            root.setAttribute('data-theme', 'light');
        }
    } else {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    updateProfileImageTheme();
}

function setColorScheme(scheme) {
    const root = document.documentElement;
    let color, shadow;
    if (scheme === 'blue') {
        color = '#22d3ee';
        shadow = '#00d1ff';
    } else if (scheme === 'green') {
        color = '#22c55e';
        shadow = '#059669';
    } else {
        color = '#ef4444';
        shadow = '#b91c1c';
    }
    // For dark theme, override with dark values
    if (document.documentElement.getAttribute('data-theme') === 'dark' ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches && document.documentElement.getAttribute('data-theme') !== 'light')) {
        if (scheme === 'blue') {
            color = '#38bdf8';
            shadow = '#0ea5e9';
        } else if (scheme === 'green') {
            color = '#4ade80';
            shadow = '#059669';
        } else {
            color = '#f87171';
            shadow = '#991b1b';
        }
    }
    root.style.setProperty('--accent', color);
    root.style.setProperty('--accent-shadow', shadow);
    localStorage.setItem('colorScheme', scheme);
    updateProfileImageTheme();
}

// Theme selection
document.querySelectorAll('.theme-choice').forEach(btn => {
    btn.addEventListener('click', () => {
        setTheme(btn.getAttribute('data-theme'));
    });
});
// Color scheme selection
document.querySelectorAll('.color-choice').forEach(btn => {
    btn.addEventListener('click', () => {
        setColorScheme(btn.getAttribute('data-color'));
    });
});

function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'light';
}
function getInitialColorScheme() {
    const saved = localStorage.getItem('colorScheme');
    if (saved) return saved;
    return 'red';
}

function applyInitialThemeAndColor() {
    setTheme(getInitialTheme());
    setColorScheme(getInitialColorScheme());
}

function updateProfileImageTheme() {
    const img = document.getElementById('profile-img');
    if (!img) return;
    let scheme = localStorage.getItem('colorScheme') || 'red';
    img.src = scheme === 'blue' ? 'assets/seb-blue.png' : scheme === 'green' ? 'assets/seb-green.png' : 'assets/seb-red.png';
}

document.addEventListener('DOMContentLoaded', applyInitialThemeAndColor);
swup.hooks.on('page:view', applyInitialThemeAndColor);
