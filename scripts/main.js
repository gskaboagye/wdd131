// Display current date and time
function updateDateTime() {
  const now = new Date();
  const dateTimeElement = document.getElementById("dateTime");
  const formattedTime = now.toLocaleTimeString();
  const formattedDate = now.toLocaleDateString();
  dateTimeElement.textContent = `${formattedDate} ${formattedTime}`;
}
setInterval(updateDateTime, 1000); // update every second
updateDateTime(); // initial load

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Lazy load effect using IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll(".slide-up, .fade-in").forEach((el) => observer.observe(el));

// Save and load reviews using localStorage
const reviewForm = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");

function saveReview(name, message, rating) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  const newReview = {
    name,
    message,
    rating,
    date: new Date().toLocaleString()
  };
  reviews.push(newReview);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  displayReviews();
}

function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviewList.innerHTML = "";
  reviews.forEach(({ name, message, rating, date }) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${name}</strong> (${date})<br>
      <span>Rating: ${"⭐".repeat(rating)}</span><br>
      <p>${message}</p>
    `;
    reviewList.appendChild(item);
  });
}

if (reviewForm) {
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = reviewForm.name.value.trim();
    const message = reviewForm.message.value.trim();
    const rating = parseInt(reviewForm.rating.value);
    if (name && message && rating > 0) {
      saveReview(name, message, rating);
      reviewForm.reset();
    }
  });

  displayReviews();
}
