//global scope variables
//========================

//arrays amd variables to hold data
//variable word options array=[];
var frogYoga = ["alive", "bow", "camel", "downwarddog", "elephant", "hero", "king", "lunge", "moon", "nectar", "plank", "rock", "snake", "tree", "table", "warrior", "victory"];
//blank variable for chosen word
var selectedWord = "";
//variable for letters in word
var lettersinWord = [];
//variable for number of blanks in word based on num of letters in word
var numBlanks = 0;
//variable array to hold enough blanks and successes=[]; enoguh for all words in options array
var blanksAndSuccesses = []; //D _ _ _ _ _ _ _ _ _ _
//variable array for wrong letters
var wrongLetters = [];


//game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;



//game functioning
//=====================

function startGame() {
    selectedWord = frogYoga[Math.floor(Math.random() * frogYoga.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;


    //reset
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    

    //populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //change html to reflect round conditions-use .join to avoid commas in between blanks
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    //testing
   // console.log(selectedWord);
    console.log(lettersinWord);
    //console.log(numBlanks);
    //console.log(blanksAndSuccesses);
}


function checkLetters(letter) {
    //check if letter exists anywhere in code at all
    //testing
    //console.log(letter);
    //if it does not exist, skip past the following code
    var isLetterInWord = false;

//for the amount of times there is a blank line
    for (var i = 0; i < numBlanks; i++) {
        //if the letter exists in the word and the user pressed it
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            //testing
           // alert("letter found");
        }
    }
    //check WHERE letter exists in word and populate blanks and successes array
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
                blanksAndSuccesses === selectedWord;
            }
        }

    }
    //if letter is not found
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }

    //testing
    console.log(blanksAndSuccesses);

}


function roundComplete() {
    console.log("Win Count:" + winCount + "| Loss Count:" + lossCount + "| Guesses Left" + guessesLeft);

    //update html with game stats
    document.getElementById("numGuesses").innerHTML = guessesLeft.toString();
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


    //check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You got it!"+"play again?");
       

        //update win counter in html
        document.getElementById("winCounter").innerHTML = winCount;
        startGame();
    }
    //check if user lost
    else if (guessesLeft == 0) {
        lossCount++;
        alert("you lost!");

        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }

}

//main processes
//====================

//initate code first time and for restart
startGame();


//event listener
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
   
    roundComplete();
    

    //testing
    console.log(letterGuessed);
}