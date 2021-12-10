/**
 * Declare constants for DOM elements
 * and possible choices to select from
 */

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const buttons = document.getElementsByClassName("control");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            game(playerChoice);
        });
}

/**
 * Main game function
 * Checks button clicked by user and compares to computers random selection
 */
function game(playerChoice) {
    
    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[playerChoice], choices[computerChoice]);

    // updateScores(result);
}

/** 
 * Checks who wins
 * Displays result in scoreboard
 */

function checkWinner(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            playerScore.innerHTML++;
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerScore.innerHTML++;
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            break;
    }
}








