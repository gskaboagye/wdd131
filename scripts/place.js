document.addEventListener("DOMContentLoaded", () => {
  // Update footer year and last modified
  const yearElement = document.getElementById("year");
  const lastModifiedElement = document.getElementById("lastModified");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
  }

  // Wind Chill Calculator
  function calculateWindChill(temp, speed) {
    return Math.round(
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    );
  }

  const tempElement = document.getElementById("temp");
  const speedElement = document.getElementById("speed");
  const chillElement = document.getElementById("chill");

  if (tempElement && speedElement && chillElement) {
    const temp = parseFloat(tempElement.textContent);
    const speed = parseFloat(speedElement.textContent);

    if (!isNaN(temp) && !isNaN(speed)) {
      if (temp <= 10 && speed > 4.8) {
        chillElement.textContent = `${calculateWindChill(temp, speed)} °C`;
      } else {
        chillElement.textContent = "N/A";
      }
    } else {
      chillElement.textContent = "Invalid data";
    }
  }
});
