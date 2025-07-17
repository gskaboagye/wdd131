const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Wind chill calculator
function calculateWindChill(temp, speed) {
  return Math.round(
    13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
  );
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chill = document.getElementById("chill");

if (temp <= 10 && speed > 4.8) {
  chill.textContent = `${calculateWindChill(temp, speed)} °C`;
} else {
  chill.textContent = "N/A";
}
