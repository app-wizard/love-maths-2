document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
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


function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    console.log(userAnswer);
    if (isCorrect) {
        alert("Hey! You got it right!");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer} but correct answer ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
function calculateCorrectAnswer() {
    let oparend1 = parseInt(document.getElementById('oparend1').innerText);
    let oparend2 = parseInt(document.getElementById('oparend2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [oparend1 + oparend2, "addition"];
    } else {
        alert(`Unknown operator type: ${operator}`);
        throw `Unknown operator type: ${operator}. Aborting!`;
    }

}
function incrementScore() { 
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() { 
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('oparend1').textContent = operand1;
    document.getElementById('oparend2').textContent = operand2;
    document.getElementById('operator').textContent = '+';


}
function subtractQuestion() { }
function displayMultilyQuestion() { }
