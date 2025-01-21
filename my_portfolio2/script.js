// Toggle Navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
            });
        }
    });

    // Sticky Header
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', scrollY > 100);

    // Close Navbar on Scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal Animations
ScrollReveal().reveal('.home-content, .heading', { origin: 'bottom', distance: '80px', duration: 2000 });
ScrollReveal().reveal('.home-img, .services-container, .project-box', { origin: 'top', distance: '80px', duration: 2000 });
ScrollReveal().reveal('.about-img, .contact form', { origin: 'right', distance: '80px', duration: 2000 });
ScrollReveal().reveal('.about-content, .project-layer', { origin: 'left', distance: '80px', duration: 2000 });

// Typed.js Text Effect
const typed = new Typed('.multiple-text', {
    strings: ['IT Student', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
});
