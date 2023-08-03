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
    document.getElementById("answer-box").addEventListener("keydown",function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    });
    runGame("addition");
});

/**
 * Tha main game "loop", called when the script is first loaded
 * 
 */
function runGame(gameType) {
    document.getElementById("answer-box").value ="";
    document.getElementById("answer-box").focus();

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultilyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaysubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2);
    }   else {
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
    } else if (operator === "x") {
        return [oparend1 * oparend2, "multiply"];
    } else if (operator === "-") {
        return [oparend1 - oparend2, "subtract"];
    } else if (operator === "/") {
        return [oparend1 / oparend2, "division"];
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
function displaysubtractQuestion(operand1, operand2){ 
    document.getElementById('oparend1').textContent = operand1;
    document.getElementById('oparend2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
}

function displayMultilyQuestion(operand1, operand2){
    document.getElementById('oparend1').textContent = operand1;
    document.getElementById('oparend2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById('oparend1').textContent = operand1;
    document.getElementById('oparend2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
}
