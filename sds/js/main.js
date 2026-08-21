document.addEventListener("DOMContentLoaded", () => {
    // Lucide Icon initation 
    if (window.lucide) {
        lucide.createIcons();
    }

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        // Ouvrir / Fermer au clic sur le bouton burger
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Fermer automatiquement le menu dès qu'on clique sur un lien de navigation
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Intersection Observer for Smooth Fade-in Animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
});

