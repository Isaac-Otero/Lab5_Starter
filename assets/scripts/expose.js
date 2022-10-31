// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //get horn document value from select horn-select id
  let selectHorn = document.getElementById('horn-select'); 
  //so that audio can be loaded
  let correctAudio = new Audio();
  //to access the volume
  let volControl = document.getElementById('volume');
//to access the button
  let clickclick = document.querySelector('button');

  //for clean free confetti
  const jsConfetti = new JSConfetti();

  selectHorn.addEventListener('change', (event) => { 
    //if the value of the event targets value is the airhorn
    if( selectHorn.value =='air-horn'){
      //to access the img src
      selectHorn.previousElementSibling.src="assets/images/air-horn.svg";
      //set the audio to the correct mp3
      correctAudio.src="assets/audio/air-horn.mp3";
    }
    if( selectHorn.value =='car-horn'){
      selectHorn.previousElementSibling.src="assets/images/car-horn.svg";
      correctAudio.src="assets/audio/car-horn.mp3";
      if(correctAudio.src=="assets/audio/car-horn.mp3"){
        alert(yes);
      }
    }
    if( selectHorn.value =='party-horn'){
      selectHorn.previousElementSibling.src="assets/images/party-horn.svg";
      correctAudio.src="assets/audio/party-horn.mp3";
    }
    });
  
  volControl.addEventListener('change',(event) => {
    if(volControl.value ==0){
      //to access the img
      volControl.nextElementSibling.src="assets/icons/volume-level-0.svg";
      correctAudio.volume =0;
    }
    if(volControl.value > 1 & volControl.value <33){
      volControl.nextElementSibling.src="assets/icons/volume-level-1.svg";
      //audio has to be dividede by 100 because of how the float works from 0 to 1
      correctAudio.volume =  volControl.value/100;
    }
    if(volControl.value > 33 & volControl.value <67){
      volControl.nextElementSibling.src="assets/icons/volume-level-2.svg";
      correctAudio.volume =  volControl.value/100;
    }
    if(volControl.value >67){
      volControl.nextElementSibling.src="assets/icons/volume-level-3.svg";
      correctAudio.volume =  volControl.value/100;
    }
  });
  clickclick.addEventListener('click', (event) =>{
    //plays correct audio
    correctAudio.play();
    if(selectHorn.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  });
  

}