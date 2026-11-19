let humanScore = 0;
let computerScore = 0;

// set available choices for the game
const choices = ['rock', 'paper', 'scissors'];

const LOSE = 0;
const WIN = 1;
const TIE = 2;

// rules when player select a specific choice
const selectRock = { rock: TIE, paper: LOSE, scissors: WIN };
const selectPaper = { rock: WIN, paper: TIE, scissors: LOSE };
const selectScissor = { rock: LOSE, paper: WIN, scissors: TIE };

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return 'rock';
  if (randomNumber === 1) return 'paper';
  if (randomNumber === 2) return 'scissors';
}

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * choices.length); // 0, 1, or 2

  // select from choices using randomNumber by index
  return choices[randomNumber];
}

function getHumanChoice() {
  const humanChoice = prompt('Enter your choice:');
  return humanChoice.trim().toLowerCase();
}

function getOutcome(computerChoice, humanChoice) {
  if (humanChoice === 'rock') return selectRock[computerChoice];
  if (humanChoice === 'paper') return selectPaper[computerChoice];
  if (humanChoice === 'scissors') return selectScissor[computerChoice];
}

function playRound(humanChoice, computerChoice) {
  const outcome = getOutcome(getComputerChoice(), getHumanChoice());

  if (outcome === WIN) {
    alert(`You won, ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }

  if (outcome === LOSE) {
    alert(`You lost, ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  if (outcome === TIE) alert(`It's a tie, ${humanChoice} and ${computerChoice}`);
}

function playGame() {
  alert(`
    WELCOME TO ROCK, PAPER, SCISSORS!

    You face to a Computer in a 5-round match.
    The player with the most wins takes the title.

    Available choices: Rock, Paper, Scissors
  `);

  for (let i = 0; i < 5; i++) playRound();

  let result;

  if (humanScore === computerScore) {
    result = "It's a tie! Good Game";
  }

  if (humanScore < computerScore) {
    result = 'You lose! Try again next time';
  }

  if (humanScore > computerScore) {
    result = 'You win! Congratualations';
  }

  alert(`
    SCORES
      You: ${humanScore}
      Computer: ${computerScore}

      - ${result}
  `);
}

playGame();
