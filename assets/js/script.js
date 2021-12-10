/**
 * Declare constants for DOM elements
 * and possible choices to select from
 */

const buttons = document.getElementsByClassName("button");
const userScore = document.getElementById("userscore");
const compScore = document.getElementById("compscore");
const userImage = document.getElementById("userimage");
const compImage = document.getElementById("compimage");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**
 * Add event listener to all the buttons
 */
for (let button of buttons){
        button.addEventListener("click", function() {
            let userChoice = this.getAttribute("data-choice");
            game(userChoice);
        });

/**
 * Main game function
 * Checks button clicked by user and compares to computers random selection
 */
function game(userChoice) {
    
    userImage.src = `assets/images/${choices[userChoice]}.png`;
    userImage.alt = choices[userChoice];

    let compChoice = Math.floor(Math.random() * 3);

    compImage.src = `assets/images/${choices[compChoice]}.png`;
    compImage.alt = choices[compChoice];

    let result = checkWinner(choices[compChoice], choices[userChoice]);

    updateScores(result);
}

/** 
 * Checks to see who winner is
 */
function 