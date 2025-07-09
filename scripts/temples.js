// Dynamic Footer Year and Last Modified
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Hamburger Menu Toggle
  const menuButton = document.querySelector("#menu");
  const nav = document.querySelector("nav");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav.classList.toggle("open");
  });
});
