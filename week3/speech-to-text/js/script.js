var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent


// RECOGNITION
var recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

// START 
const btnStart = document.querySelector('.btns__btn--start');

btnStart.addEventListener('click', (ev) => {
    recognition.start();
    console.log('Ready to receive a color command.');
})

// RESULT
recognition.onresult = function (event) {
    console.log(event.results);
    const guess = event.result[event.results.length-1];
    const word = guess[0].transcript;
    //var text = event.results[0][0].transcript;
    //diagnostic.textContent = text + '.';
    //console.log('Confidence: ' + event.results[0][0].confidence);
    if (guess.isFinal) {
        console.log(word)
    }
}

// STOP
const btnStop = document.querySelector('.btns__btn--stop');

btnStop.addEventListener('click', (ev) => {
    recognition.stop();
})

