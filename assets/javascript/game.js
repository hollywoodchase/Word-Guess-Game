var words = ["daisy", "jordan", "eckleberg", "gatsby", "carraway"];
var chosenWord = words[Math.floor(Math.random()*words.length)];
var dashedWord = [];
var livesCount = 5;
var winCount = 0;

splitWord = chosenWord.split('');
for (let i = 0; i < splitWord.length; i++) {
    dashedWord.push('-');
}
dashedWord=dashedWord.join('');

var dashes = document.getElementById('dashes');
dashes.innerHTML=dashedWord;
var lives = document.getElementById('lives');
lives.innerHTML="<h3>Lives remaining: </h3>" + livesCount;
var gameZone = document.getElementById("game-zone");
var nickSad = document.getElementById('loss-screen');
var winScreen = document.getElementById('win-screen');
var guessedLetters = document.getElementById('guessed-letters');

document.onkeyup = function(event) {
    var userInput = event.key;
    currentLetter.innerHTML = "<h3>Letter you pushed: <br>" + userInput + "</h3>";
    for (let j = 0, noCount = 0, dashCount = 0; j < splitWord.length; j++) {
        if (userInput === splitWord[j]) {
            dashedWord=dashedWord.split('');
            dashedWord[j]=splitWord[j];
            if (j===0) {
                dashedWord[0]=dashedWord[0].toUpperCase();
            }
            dashedWord=dashedWord.join('');
            dashes.innerHTML=dashedWord;
        } 
        else {
            noCount++;
        }
        if (noCount === dashedWord.length) {
            livesCount--;
            lives.innerHTML="<h3>Lives remaining: </h3>" + livesCount;
            guessedLetters.innerHTML = "<h3 class='text'>Letters Already Guessed</h3><br><h4>" + userInput;
        }
        dashedWord=dashedWord.split('');
        for (let k = 0, noDash = 0; k < dashedWord.length; k++) {
            if (dashedWord[k]!=='-') {
                noDash++;
            }
            if (noDash === dashedWord.length) {
                gameZone.classList.add('game-over');
                winScreen.classList.remove('game-over');

            }
        }
        dashedWord=dashedWord.join('');
        
    }
    if (livesCount === 0) {
        gameZone.classList.add('game-over');
        nickSad.classList.remove('game-over');
    }

}

