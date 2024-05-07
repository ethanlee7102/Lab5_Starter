// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti();
  const selectElement = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const playButton = document.getElementsByTagName("button")[0];

  const allImages = {
    "air-horn" : "assets/images/air-horn.svg",
    "car-horn" : "assets/images/car-horn.svg",
    "party-horn" : "assets/images/party-horn.svg"
  };

  const allSounds = {
    "air-horn" : "assets/audio/air-horn.mp3",
    "car-horn" : "assets/audio/car-horn.mp3",
    "party-horn" : "assets/audio/party-horn.mp3"
  }

  const hornImage = document.querySelector("img[alt='No image selected']");
  const hornAudio = document.querySelector(".hidden");
  const volumeImage = document.querySelector("img[alt='Volume level 2']");

  selectElement.addEventListener("change", function(e) {
    const horn = e.target.value;
    if (allImages[horn]) {
      hornImage.src = allImages[horn];
    }
    if (allSounds[horn]){
      hornAudio.src = allSounds[horn];
    }
  });

  volumeSlider.addEventListener("change", function() {
    hornAudio.volume = volumeSlider.value / 100;
    if (volumeSlider.value == 0){
      volumeImage.src = "assets/icons/volume-level-0.svg"
    }
    if (1 <= volumeSlider.value && volumeSlider.value < 33){
      volumeImage.src = "assets/icons/volume-level-1.svg"
    }
    if (33 <= volumeSlider.value && volumeSlider.value < 67){
      volumeImage.src = "assets/icons/volume-level-2.svg"
    }
    if (67 <= volumeSlider.value){
      volumeImage.src = "assets/icons/volume-level-3.svg"
    }
  });

  playButton.addEventListener("click", function() {
    hornAudio.play();
    if (selectElement.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });


}