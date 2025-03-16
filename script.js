// Funkce pro plynulé posouvání s offsetem navigace
function smoothScroll(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Posouvání pro tlačítko "Prozkoumat"
document.querySelector('.cta-button').addEventListener('click', () => {
    smoothScroll('#about');
});

// Posouvání pro odkazy v navigaci na této stránce
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            smoothScroll(targetId);
        } else {
            window.location.href = targetId;
        }
    });
});

// Zpracování kotvy z URL při načtení stránky
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        smoothScroll(hash);
    }
});

// 3D efekty na kartách dovedností
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${(rect.height / 2 - y) / 20}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
});

// Scroll reveal efekt
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));