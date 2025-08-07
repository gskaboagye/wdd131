const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) return;

  const contactInfo = {
    name,
    email,
    message,
    date: new Date().toLocaleString()
  };

  localStorage.setItem("lastContact", JSON.stringify(contactInfo));
  confirmation.classList.remove("hidden");
  form.reset();
});
// Scroll to section behavior
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// LocalStorage Example: Save visit count
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);
console.log(`Welcome! You’ve visited this site ${visits} times.`);
