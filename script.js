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