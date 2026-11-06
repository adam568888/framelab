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

const projectForm = document.querySelector("#project-form");
const feedback = document.querySelector("#form-feedback");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!projectForm.reportValidity()) return;

  feedback.textContent =
    "Merci ! La maquette fonctionne, mais l'envoi réel n'est pas encore connecté. Configure une adresse e-mail ou un backend avant de publier ce formulaire.";
});
