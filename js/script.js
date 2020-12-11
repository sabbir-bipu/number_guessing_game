// Define UI Elements

let low = 1;
let high = 10;
let guessesLeft = 3;
let correctAns = getRandomInt(low, high)
let play = document.querySelector('#play');
let guessedNumber = null;

// Define Event Listeners

play.addEventListener('click', playGame);

// Define Functions

//Getting Random Integer

function getRandomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

//The Game Function

function playGame() {
    while (guessesLeft > -1) {
        if (guessesLeft == 0) {
            alert("You Lose!!! Correct Ans is : " + correctAns);
            guessesLeft = 3;
            break;
        } else {
            guessedNumber = prompt("Guess a number between 1 to 10 :  ");
            if (guessedNumber == null) {
                break;
            } else {
                // guessedNumber = parseInt(guessedNumber);
                if(isNaN(guessedNumber) || guessedNumber < low || guessedNumber > high){
                    alert("Please enter a number between 1 and 10");
                }else {
                    if (guessedNumber == correctAns) {
                        alert("Congratulations!!! You Win!")
                        guessesLeft = 3;
                        break;
                    } else if (guessedNumber > correctAns) {
                        alert("Correct ans is smaller than your guessed number!");
                        guessesLeft--;
                    } else {
                        alert("Correct ans is bigger than your guessed number!")
                        guessesLeft--;
                    }
                }
            }
        }
    }
    correctAns = getRandomInt(low, high);
}
