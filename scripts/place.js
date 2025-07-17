// place.js

// Set current year in the footer
const yearSpan = document.getElementById("currentYear");
const modifiedSpan = document.getElementById("lastModified");

const today = new Date();
yearSpan.textContent = today.getFullYear();
modifiedSpan.textContent = document.lastModified;

// Wind chill calculation (in Fahrenheit)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

// Static values for temperature and wind speed
const temperature = 45; // °F
const windSpeed = 5; // mph

const windChillSpan = document.getElementById("windChill");

if (temperature <= 50 && windSpeed > 3) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillSpan.textContent = `${windChill} °F`;
} else {
  windChillSpan.textContent = "N/A";
}
