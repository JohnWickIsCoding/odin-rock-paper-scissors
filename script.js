let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let max = 4
    let min = 1
    let randNum = Math.floor(Math.random() * (max - min) + min)
    
    switch (randNum) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

function getHumanChoice() {
    let userChoice = prompt("Make a choice!! rock, paper or scissors?", "rock")
    return userChoice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++
    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper")
        computerScore++
    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors")
        computerScore++
    }else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors")
        humanScore++
    }else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock")
        humanScore++
    }else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper")
        humanScore++
    }else {
        console.log("Draw")
    }
}