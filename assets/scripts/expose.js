// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById("horn-select");

  const allImages = {
    "air-horn" : "assets/images/air-horn.svg",
    "car-horn" : "assets/images/car-horn.svg",
    "party-horn" : "assets/images/party-horn.svg"
  };

  const hornImage = document.querySelector("img[alt='No image selected']");

  selectElement.addEventListener("change", function(e) {
    const horn = e.target.value;
    if (allImages[horn]) {
      hornImage.src = allImages[horn];
    }
  });
}