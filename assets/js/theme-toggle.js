// theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    
    if (!themeToggle) return;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        root.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀';
    } else {
        root.setAttribute('data-theme', 'light');
        themeToggle.textContent = '◑';
    }
    
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const currentTheme = root.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '◑';
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀';
        }
    });
});
