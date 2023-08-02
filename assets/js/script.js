document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
});

/**
 * Tha main game "loop", called when the script is first loaded
 * 
 */
function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown Game type: ${gameType}`);
        throw `Unknown Game type: ${gameType}. Aborting!`;
    }
}


function checkAnswer() { }
function calculateCorrectAnswer() { }
function incrementScore() { }
function incrementWrongAnswer() { }
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('oparend1').textContent = operand1;
    document.getElementById('oparend2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
function subtractQuestion() { }
function displayMultilyQuestion() { }
