let result = document.querySelector('.result');
let yourScore = document.querySelector('.humanScores');
let compScore = document.querySelector('.compScores');
let roundResult = document.querySelector('.roundResult');
let resetBtn = document.querySelector('.reset');

resetBtn.disabled = true;

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

// function getHumanChoice() {
//     let choice = prompt("Choose Rock Paper or Scissors:").toLowerCase();
//     return choice;
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    roundResult.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice} \n`;
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        yourScore.innerText = humanScore;
        compScore.innerText = computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        yourScore.innerText = humanScore;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        compScore.innerText = computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        compScore.innerText = computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        yourScore.innerText = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        yourScore.innerText = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        compScore.innerText = computerScore;
    }
}

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    resetBtn.disabled = false;
}

resetBtn.addEventListener('click', () => {
    roundResult.innerText = '';
    result.innerText = '';
    yourScore.innerText = '';
    compScore.innerText = '';

    humanScore = 0;
    computerScore = 0;

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    resetBtn.disabled = true;
})

function playGame(e) {
    const humanSelection = (e.target.innerText).toLowerCase();
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection);

    if (computerScore >= 5) {
        result.innerText = `You lose! Your score is ${humanScore} and the computer's score is ${computerScore}`
        disableButtons();
    } else if (humanScore >= 5) {
        result.innerText = `You win! Your score is ${humanScore} and the computer's score is ${computerScore}`
        disableButtons();
    } else if (computerScore === 5 && humanScore === 5) {
        result.innerText = `Its a tie! Your score is ${humanScore} and the computer's score is ${computerScore}`
        disableButtons();
    }
}

rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissors.addEventListener('click', playGame);

