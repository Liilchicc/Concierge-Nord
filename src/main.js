// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('show');
});

// Smooth scroll for anchors
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navMenu?.classList.remove('show');
    }
  });
});

// Swiper slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  autoplay: { delay: 2800 },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 1.3 },
    960: { slidesPerView: 1.7 },
  },
});

// GSAP animations
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('[data-animate="fade-up"]', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#services',
      start: 'top 80%'
    }
  });

  gsap.from('[data-animate="fade-in"]', {
    opacity: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top 80%'
    }
  });
}

// Simple plan button interaction
const planButtons = document.querySelectorAll('.plan-button');
planButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    planButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});


// ==============================
// Contact Form (Formspree AJAX)
// ==============================
const form = document.querySelector("#contact-form");
const statusEl = document.querySelector("#form-status");

// Remplace par TON endpoint exact Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgvpewg";

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // empêche la redirection Formspree

    const submitBtn = form.querySelector('button[type="submit"]');
    if (statusEl) statusEl.textContent = "Envoi en cours…";
    if (submitBtn) submitBtn.disabled = true;

    try {
      const data = new FormData(form);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        if (statusEl) {
          statusEl.textContent =
            "Merci. Votre demande a bien été envoyée. Nous vous contacterons au moment indiqué.";
        }
      } else {
        if (statusEl) {
          statusEl.textContent =
            "Erreur lors de l’envoi. Réessayez ou utilisez WhatsApp.";
        }
      }
    } catch {
      if (statusEl) {
        statusEl.textContent =
          "Connexion impossible. Réessayez plus tard.";
      }
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
}
