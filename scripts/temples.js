// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Set the current year in the footer
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Set the last modified date in the footer
  const lastModified = document.querySelector("#lastModified");
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Hamburger menu toggle functionality
  const menuButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      menuButton.classList.toggle("open");
      navigation.classList.toggle("open");
    });
  }
});
