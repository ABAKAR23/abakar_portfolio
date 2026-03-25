// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all sections and cards to observe
document.querySelectorAll('section, .card, .timeline-item').forEach(el => {
    el.style.opacity = "0"; // Initially hide
    observer.observe(el);
});

// Update styles for observable elements to handle the opacity toggle
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        animation: fadeIn 0.8s ease forwards;
    }
`;
document.head.appendChild(style);

// Dynamic Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(2, 6, 23, 0.95)';
        nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(2, 6, 23, 0.8)';
        nav.style.boxShadow = 'none';
    }
});
