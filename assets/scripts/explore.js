// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  const textToSpeak = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const pressToTalk = document.querySelector('button');
  const faceImage = document.querySelector('img');


  function addVoices(){
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.value = voices[i].name;
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      voiceSelect.appendChild(option);
    };
  }

  speechSynthesis.onvoiceschanged = addVoices;

  pressToTalk.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png'; // Adjust the path to your "open-mouth" image
    };

    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png'; // Reset back to "smiling"
    };

    speechSynthesis.speak(utterance);
  });
}