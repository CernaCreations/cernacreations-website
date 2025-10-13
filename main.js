// ================================
// GSAP Setup & Configuration
// ================================
gsap.registerPlugin(ScrollTrigger);

// ================================
// Page Load Animations
// ================================
window.addEventListener('load', () => {
    // Animate hero content on page load
    gsap.from('.hero-label', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.hero-title-line', {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
    });

    gsap.from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8
    });

    gsap.from('.cta-button', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1
    });

    gsap.from('.grid-item', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.5
    });

    // Floating shapes animation
    gsap.to('.floating-shape', {
        y: 'random(-50, 50)',
        x: 'random(-30, 30)',
        rotation: 'random(-15, 15)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            amount: 1
        }
    });
});

// ================================
// Smooth Scrolling for Navigation
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 80
                },
                ease: 'power3.inOut'
            });
        }
    });
});

// ================================
// Mobile Menu Toggle
// ================================
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Animate mobile menu items
    if (navLinks.classList.contains('active')) {
        gsap.from('.nav-links li', {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out'
        });
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ================================
// Header Scroll Effect
// ================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ================================
// Services Section Animations
// ================================
gsap.from('.section-header', {
    scrollTrigger: {
        trigger: '.services',
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

// Animate each service item on scroll
document.querySelectorAll('.service-item').forEach((item, index) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });

    // Parallax effect on service numbers
    gsap.to(item.querySelector('.service-number'), {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -30,
        ease: 'none'
    });
});

// ================================
// About Section Animations
// ================================
gsap.from('.about-label', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
});

gsap.from('.about-text h2', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
});

gsap.from('.about-description', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    delay: 0.4
});

// Animate stats with counter effect
gsap.from('.stat', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
});

// Counter animation for stat numbers
document.querySelectorAll('.stat-number').forEach(stat => {
    const target = stat.textContent.trim();
    const isPercent = target.includes('%');
    const isPlus = target.includes('+');
    const number = parseInt(target.replace(/[^0-9]/g, ''));

    // Only animate if we have a valid number
    if (!isNaN(number)) {
        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            once: true, // Only trigger once
            onEnter: () => {
                const obj = { value: 0 };
                gsap.to(obj, {
                    value: number,
                    duration: 2,
                    ease: 'power1.out',
                    onUpdate: function() {
                        const current = Math.ceil(obj.value);
                        if (isPercent) {
                            stat.textContent = current + '%';
                        } else if (isPlus) {
                            stat.textContent = current + '+';
                        } else {
                            stat.textContent = current;
                        }
                    }
                });
            }
        });
    }
});

// Animated circle decoration
gsap.to('.deco-circle', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'bottom top',
        scrub: 1
    },
    rotation: 360,
    ease: 'none'
});

gsap.from('.deco-circle', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: 'back.out(1.7)'
});

gsap.from('.deco-line', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    scaleX: 0,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.3
});

// ================================
// Contact Section Animations
// ================================
gsap.from('.contact-header h2', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('.contact-subtitle', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.info-item', {
    scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -30,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.3
});

// ================================
// Form Handling
// ================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    // Animate button on submit
    gsap.to(submitBtn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            submitBtn.textContent = 'Sending...';

            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#10b981';

                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                }, 2000);
            }, 1500);
        }
    });
});

// Add focus animations to form inputs
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        gsap.to(this, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    input.addEventListener('blur', function() {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ================================
// Visual Grid Parallax Effect
// ================================
gsap.to('.visual-grid', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 100,
    rotation: 10,
    ease: 'none'
});

// Individual grid items parallax
document.querySelectorAll('.grid-item').forEach((item, index) => {
    const speed = 1 + (index * 0.2);
    gsap.to(item, {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 50 * speed,
        ease: 'none'
    });
});

// ================================
// Cursor Trail Effect (Optional Enhancement)
// ================================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor follower animation
function animateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * 0.1;
    cursorY += dy * 0.1;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// ================================
// Performance: Reduce animations on mobile
// ================================
if (window.innerWidth < 768) {
    ScrollTrigger.config({
        limitCallbacks: true
    });
}

// ================================
// Refresh ScrollTrigger on resize
// ================================
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

console.log('%c✨ Cerna Creations Website Loaded ✨', 'color: #6366f1; font-size: 16px; font-weight: bold;');
