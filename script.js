let playerScore;
let computerScore;

// set available choices for the game
const choices = ['rock', 'paper', 'scissors'];

const LOSE = 0;
const WIN = 1;
const TIE = 2;

// rules when player select a specific choice
const selectRock = { rock: TIE, paper: LOSE, scissors: WIN };
const selectPaper = { rock: WIN, paper: TIE, scissors: LOSE };
const selectScissor = { rock: LOSE, paper: WIN, scissors: TIE };

const playerScoreBoard = document.querySelector('.player-scoreboard');
const computerScoreBoard = document.querySelector('.computer-scoreboard');

const resultBig = document.querySelector('.result .big');
const resultSmall = document.querySelector('.result .small');
const retry = document.querySelector('.retry');

const cards = document.querySelectorAll('.card');
const computerCards = document.querySelectorAll('.card.computer');
const playerCards = document.querySelectorAll('.card.player');

playerCards.forEach((card) => {
  card.addEventListener('click', () => {
    playRound(card, getComputerCard());
    if (playerScore === 5 || computerScore === 5) annnounceResult();
  });
});

function getComputerCard() {
  const randomIndex = Math.floor(Math.random() * choices.length);

  let targetCard;

  computerCards.forEach((card) => {
    if (card.classList.contains(choices[randomIndex])) {
      targetCard = card;
    }
  });

  return targetCard;
}

function playRound(playerCard, computerCard) {
  toggleCards(playerCard, computerCard);
  displayOnlyActiveCards();

  const playerChoice = playerCard.classList[2];
  const computerChoice = computerCard.classList[2];
  const outcome = getOutcome(playerChoice, computerChoice);

  announceOutcome(outcome, playerChoice, computerChoice);
  playerCard.style.pointerEvents = 'none';
  renderScoreboard();

  setTimeout(() => {
    playerCard.style.pointerEvents = 'auto';
    toggleCards(playerCard, computerCard);
    resetResultInfo();
    resetCards();
  }, 1500);
}

function toggleCards(playerCard, computerCard) {
  playerCard.classList.toggle('active');
  computerCard.classList.toggle('active');
}

function displayOnlyActiveCards() {
  cards.forEach((card) => {
    if (!card.classList.contains('active')) {
      card.style.display = 'none';
    } else card.style.display = 'flex';
  });
}

function getOutcome(playerChoice, computerChoice) {
  if (playerChoice === 'rock') return selectRock[computerChoice];
  if (playerChoice === 'paper') return selectPaper[computerChoice];
  if (playerChoice === 'scissors') return selectScissor[computerChoice];
}

function announceOutcome(outcome, playerChoice, computerChoice) {
  let color = '#f3f5f6';

  if (outcome === WIN) {
    resultBig.textContent = 'You won';
    resultSmall.textContent = `${playerChoice} beats ${computerChoice}`;
    color = '#4CAF50';
    playerScore++;
  }

  if (outcome === LOSE) {
    resultBig.textContent = 'You lost';
    resultSmall.textContent = `${computerChoice} beats ${playerChoice}`;
    color = '#C70039';
    computerScore++;
  }

  if (outcome === TIE) {
    resultBig.textContent = "It's a tie";
    resultSmall.textContent = `${playerChoice} and ${computerChoice}`;
  }

  resultBig.style.color = color;
}

function renderScoreboard() {
  playerScoreBoard.textContent = `Score: ${playerScore}`;
  computerScoreBoard.textContent = `Score ${computerScore}`;
}

function resetResultInfo() {
  resultBig.textContent = 'Select your choice';
  resultBig.style.color = '#f3f5f6';
  resultSmall.textContent = 'first to score 5 wins';
}

function resetCards() {
  playerCards.forEach((playerCard) => {
    playerCard.style.display = 'flex';
  });

  computerCards.forEach((computerCard) => {
    if (computerCard.classList.contains('none')) computerCard.style.display = 'flex';
    else computerCard.style.display = 'none';
  });
}

function annnounceResult() {
  let color;

  setTimeout(() => {
    resultSmall.textContent = 'Try again?';

    if (playerScore > computerScore) {
      resultBig.textContent = 'You win, congratulations!';
      color = '#4CAF50';
    } else {
      resultBig.textContent = 'You lost, try again next time.';
      color = '#C70039';
    }

    playerCards.forEach((card) => {
      card.style.pointerEvents = 'none';
    });

    retry.style.display = 'flex';
    resultBig.style.color = color;
  }, 1500);
}

retry.addEventListener('click', () => {
  window.location.reload();
});

function playGame() {
  playerScore = 0;
  computerScore = 0;

  renderScoreboard();
}

playGame();
