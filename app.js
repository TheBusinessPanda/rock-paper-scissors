function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1)

    if (choice === 1) {
        return "rock"
    } else if (choice === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Choose Rock Paper or Scissors:").toLowerCase();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        function playRound(humanChoice, computerChoice) {
            console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}`);
            if (humanChoice === computerChoice) {
                console.log("Its a tie. You both get 1 points.")
                humanScore++;
                computerScore++;
            } else if (humanChoice === "rock" && computerChoice === "scissors") {
                console.log("You win!")
                humanScore++;
            } else if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("You lose!")
                computerScore++;
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You lose!")
                computerScore++;
            } else if (humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You win!")
                humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "rock") {
                console.log("You win!")
                humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("You lose!")
                computerScore++;
            }
        }


        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        return `You lose! Your score is ${humanScore} and the computer's score is ${computerScore}`
    } else if (humanScore > computerScore) {
        return `You win! Your score is ${humanScore} and the computer's score is ${computerScore}`
    } else {
        return `Its a tie! Your score is ${humanScore} and the computer's score is ${computerScore}`
    }
}