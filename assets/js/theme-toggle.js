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

    // RTL Toggle Logic
    const themeToggleItem = themeToggle.parentElement;
    if (themeToggleItem && themeToggleItem.classList.contains('nav-item')) {
        const rtlLi = document.createElement('li');
        rtlLi.className = 'nav-item ms-xl-2 me-xl-1 mb-3 mb-xl-0 d-flex align-items-center';
        rtlLi.id = 'rtl-container';
        
        const rtlBtn = document.createElement('button');
        rtlBtn.id = 'rtlToggle';
        rtlBtn.className = 'btn btn-outline-luxury btn-sm';
        rtlBtn.style.padding = '4px 10px';
        rtlBtn.style.fontSize = '0.875rem';
        rtlBtn.textContent = 'RTL';
        
        rtlLi.appendChild(rtlBtn);
        themeToggleItem.parentNode.insertBefore(rtlLi, themeToggleItem);
        
        const updateRtlUI = (isRtl) => {
            if (isRtl) {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
                rtlBtn.className = 'btn btn-primary-luxury btn-sm';
                rtlBtn.textContent = 'LTR';
                
                const links = document.getElementsByTagName('link');
                for (let i = 0; i < links.length; i++) {
                    if (links[i].href.includes('bootstrap.min.css') && !links[i].href.includes('bootstrap.rtl.min.css')) {
                        links[i].href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css';
                    }
                }
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
                rtlBtn.className = 'btn btn-outline-luxury btn-sm';
                rtlBtn.textContent = 'RTL';
                
                const links = document.getElementsByTagName('link');
                for (let i = 0; i < links.length; i++) {
                    if (links[i].href.includes('bootstrap.rtl.min.css')) {
                        links[i].href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
                    }
                }
            }
        };

        const savedRtl = localStorage.getItem('rtl');
        if (savedRtl === 'true') {
            updateRtlUI(true);
        }

        rtlBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
            if (isRtl) {
                localStorage.setItem('rtl', 'false');
                updateRtlUI(false);
            } else {
                localStorage.setItem('rtl', 'true');
                updateRtlUI(true);
            }
        });
    }
});
