// Wait for the DOM to finish loading before running the game
// Get the buttom elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

/** the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType) {
    
}