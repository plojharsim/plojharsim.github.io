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

// Ovládání hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Zavření menu po kliknutí na odkaz
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                smoothScroll(targetId);
            } else {
                window.location.href = targetId;
            }
            navLinks.classList.remove('active'); // Zavře menu
        });
    });
}

// Posouvání pro tlačítko "Prozkoumat" (jen na index.html)
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        smoothScroll('#about');
    });
}

// Zpracování kotvy z URL při načtení stránky
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        smoothScroll(hash);
    }
});

// 3D efekty na kartách dovedností (jen na index.html)
const skillCards = document.querySelectorAll('.skill-card');
if (skillCards.length > 0) {
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
}

// Scroll reveal efekt pro sekce
const sections = document.querySelectorAll('section');
if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
}