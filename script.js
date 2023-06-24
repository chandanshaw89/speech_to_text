

let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let voices = [];


if("speechSynthesis" in window){
  speechSynthesis.onvoiceschanged=()=>{
    voices = speechSynthesis.getVoices();
    const voiceSelect = document.querySelector("#voices");
    for(let i = 0 ; i<voices.length;i++){
        voiceSelect.options[i] = new Option(voices[i].name,i);
    }
    // console.log(voice_select);

  }
  document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
  });

  document.querySelector("#startSpeech").addEventListener("click", (e) => {
    e.preventDefault();
    speech.text = document.querySelector("textarea").value;
    speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  });
 

}



