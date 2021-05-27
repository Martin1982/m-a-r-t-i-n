// speech
let element = document.querySelector('.lds-ellipsis');

element.addEventListener('click', event => {
    let utterance = new SpeechSynthesisUtterance("Let's stick with english");
    speechSynthesis.speak(utterance);
});
