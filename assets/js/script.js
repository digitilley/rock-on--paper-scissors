//Wait for the DOM to finsih loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-choice") === "0") {
                alert("You chose Rock");
            }    
            if (this.getAttribute("data-choice") === "1") {
                    alert("You chose Paper");
            }        
            if (this.getAttribute("data-choice") === "2") {
                    alert("You chose Scissors");    
            }    
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function userWins() {

}

function userLoses() {

}

function userDraws() {

}