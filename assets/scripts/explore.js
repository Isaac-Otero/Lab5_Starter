// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //to access the synth database
  const synth = window.speechSynthesis;
  //to go to the voice select area
  const voicePicked=document.getElementById('voice-select');
  //where we store our list of voices
  let voiceList;
  //to access the button
  const buttonPressed= document.querySelector('button');
  //to access the text area
  let textArea= document.getElementById('text-to-speak');
  //so that the synth can speak some straight facts 
  let speakFacts= new SpeechSynthesisUtterance(textArea.value);
  //to iterate through the synth voices
  let currentVoice;
  //event listener right on call to load all the synth voices
  synth.addEventListener('voiceschanged',(event) => {
    voiceList=synth.getVoices();
    if (typeof speechSynthesis === 'undefined') {
      return;
    }

    for (let i = 0; i < voiceList.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voiceList[i].name} (${voiceList[i].lang})`;
      if (voiceList[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voiceList[i].lang);
      option.setAttribute('data-name', voiceList[i].name);
      voicePicked.appendChild(option);
    }
    
  });
  //even listener when the button is clicked
  buttonPressed.addEventListener('click',(event) => {
   speakFacts= new SpeechSynthesisUtterance(textArea.value);
   //to ge the current voice
 currentVoice=voicePicked.selectedOptions[0].getAttribute('data-name');
    for(let i=0; i<voiceList.length; i++) {
      if(voiceList[i].name ===currentVoice){
        speakFacts.voice=voiceList[i];
      }
    } 
    synth.speak(speakFacts); 
    speakFacts.onstart = (event) => {
      textArea.previousElementSibling.src="assets/images/smiling-open.png";
    }
    speakFacts.onend = (event) => {
      textArea.previousElementSibling.src="assets/images/smiling.png";
    }
    
  });


}