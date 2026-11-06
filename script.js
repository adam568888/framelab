const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

// Le formulaire est envoyé directement à Formspree via son action HTML.
// Ne pas intercepter son submit : le navigateur gère la requête POST.


// FrameLab — Motion enhancements (respecte les préférences d'accessibilité).
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const progressBar = document.querySelector(".scroll-progress");
const header = document.querySelector(".site-header");
let scrollPending = false;
function updateScrollEffects() {
  const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  progressBar.style.transform = `scaleX(${Math.min(1, window.scrollY / maxScroll)})`;
  header.classList.toggle("scrolled", window.scrollY > 28);
  scrollPending = false;
}
window.addEventListener("scroll", () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateScrollEffects);
  }
}, { passive: true });
window.addEventListener("resize", updateScrollEffects, { passive: true });
updateScrollEffects();

if (!reducedMotion) {
  const revealTargets = document.querySelectorAll(
    ".section-heading, .service-card, .work-card, .payment-card, .offer-card, .test-banner, .payment-bottom, .step, .contact-layout > div, .contact-form, .price-note, .portfolio-disclaimer"
  );
  revealTargets.forEach((element) => {
    element.classList.add("reveal");
    if (element.matches(".service-card, .work-card, .payment-card, .offer-card, .step")) element.classList.add("reveal-stagger");
  });
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.10, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }

  if (window.matchMedia("(pointer: fine)").matches) {
    const glow = document.querySelector(".cursor-glow");
    let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
    document.addEventListener("pointermove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      glow.style.opacity = "1";
    }, { passive: true });
    document.addEventListener("pointerleave", () => { glow.style.opacity = "0"; });
    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.11;
      glowY += (mouseY - glowY) * 0.11;
      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;
      requestAnimationFrame(animateGlow);
    };
    animateGlow();

    document.querySelectorAll(".service-card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
        card.style.setProperty("--my", `${event.clientY - bounds.top}px`);
      }, { passive: true });
    });

    const heroArt = document.querySelector(".hero-art");
    heroArt.addEventListener("pointermove", (event) => {
      const bounds = heroArt.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroArt.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
    }, { passive: true });
    heroArt.addEventListener("pointerleave", () => { heroArt.style.transform = ""; });
  }
}
