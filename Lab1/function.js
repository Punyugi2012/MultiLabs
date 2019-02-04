var guess
var turn = 0
var correct

function getEById(id) {
    return document.getElementById(id)
}

function hideTryAgainBtn() {
    tryAgainBtn = getEById('TryAgain')
    tryAgainBtn.hidden = true
}

function showTryAgainBtn() {
    tryAgainBtn = getEById('TryAgain')
    tryAgainBtn.hidden = false
}

function showAlertSpan() {
    alertSpan = getEById('Alert')
    alertSpan.hidden = false
}

function hideAlertSpan() {
    alertSpan = getEById('Alert')
    alertSpan.hidden = true
}

function resetInput() {
    input = getEById('Input')
    input.value = ""
    input.focus()
}

function blurInput() {
    input = getEById('Input')
    input.blur()
}

function showOutput(text) {
    outputDiv = getEById('Output')
    outputDiv.innerHTML = text
}

function init() {
    correct = randomNumber1Between100()
    hideTryAgainBtn()
    hideAlertSpan()
    resetInput()
    showOutput("I'm thinking of number between 0 and 100. Guess my number. and I'll tell if you are too hight. too low, or correct.")
    turn = 0
    console.log(correct)
}

function randomNumber1Between100() {
    var randomed = Math.random()
    return Math.ceil(randomed * 100)
}

function checkGuess(value) {
    var intData = parseInt(value)
    if (intData) {
        turn += 1
        hideAlertSpan()
        if(intData > correct) {
            return "Too Heigh"
        }
        else if (intData < correct) {
            return "Too Low"
        }
        else {
            return "Correct"
        }
    }
    else {
        showAlertSpan()
    }
}

function clickGuessBtn() {
    blurInput()
    var result = checkGuess(input.value)
    if (result) {
        if (result == "Correct") {
            showTryAgainBtn()
        }
        showOutput(`${turn}) ${result}`)
    }
}

function clickTypeAgainBtn() {
    init()
}

init()