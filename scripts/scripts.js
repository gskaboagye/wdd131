const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage" },
  { id: "jj-1969", name: "Warp Drive" },
  { id: "vc-1800", name: "Dark Matter" },
  { id: "tc-2022", name: "Gravity Booster" }
];

const productSelect = document.querySelector("#productName");

products.forEach(product => {
  let option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});


// Display the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
