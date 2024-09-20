function playGame() {
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
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You lose! Paper beats Rock")
            computerScore++
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You lose! Scissors beats Paper")
            computerScore++
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You lose! Rock beats Scissors")
            computerScore++
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You win! Rock beats Scissors")
            humanScore++
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You win! Paper beats Rock")
            humanScore++
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("You win! Scissors beats paper")
            humanScore++
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }else {
            console.log(`You chose ${humanChoice}`)
            console.log(`Computer chose ${computerChoice}`)
            console.log("Draw")
            console.log(`Your score: ${humanScore}`)
            console.log(`Computer score: ${computerScore}`)
            console.log("")
        }
    }

    function getFinalWinner(humanScore, computerScore) {
        if (humanScore > computerScore) {
            return "You win!"
        }else if (humanScore < computerScore){
            return "You lose!"
        }
    }

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        playRound( getHumanChoice(), getComputerChoice() )
    }

    console.log(`All rounds are over!`)
    console.log(`Your Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
    console.log(getFinalWinner(humanScore, computerScore))
}

playGame()