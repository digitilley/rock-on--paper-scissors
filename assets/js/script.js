/**
 * Declare constants for DOM elements
 * and possible choices to select from
 */

let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let outcomeText = document.getElementById("outcome");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const buttons = document.getElementsByClassName("control");
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

    checkWinner(choices[playerChoice], choices[computerChoice]);
}

/** 
 * Checks who wins
 * Displays result in scoreboard
 * ---- External source used to help with this section: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch -----
 */

function checkWinner(playerChoice, computerChoice) {
    switch (playerChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            playerScore.innerHTML++;
            outcomeText.innerHTML = "VICTORY!";
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            computerScore.innerHTML++;
            outcomeText.innerHTML = "ALAS, NOT THIS TIME!";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            outcomeText.innerHTML = "TIS A DRAW!";
            break;
    }
}




