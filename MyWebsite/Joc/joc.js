const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'Piatra'
    }
    if (randomNumber === 2) {
        computerChoice = 'Foarfeca'
    }
    if (randomNumber === 3) {
        computerChoice = 'Hartie'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'ai pierdut o haina'
    }
    if (computerChoice === 'Piatra' && userChoice === "Hartie") {
        result = 'ai castigat un pupic!'
    }
    if (computerChoice === 'Piatra' && userChoice === "Foarfeca") {
        result = 'ai pierdut doua haine!'
    }
    if (computerChoice === 'Hartie' && userChoice === "Foarfeca") {
        result = 'ai castigat un pupic!'
    }
    if (computerChoice === 'Hartie' && userChoice === "Piatra") {
        result = 'ai pierdut doua haine!'
    }
    if (computerChoice === 'Foarfeca' && userChoice === "Piatra") {
        result = 'ai castigat un pupic!'
    }
    if (computerChoice === 'Foarfeca' && userChoice === "Hartie") {
        result = 'ai pierdut doua haine!'
    }
    resultDisplay.innerHTML = result
    window.alert(result)
}