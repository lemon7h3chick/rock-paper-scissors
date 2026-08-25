/* 

  LOGIC FOR GETTING COMPUTER CHOICE

    - Create a fuction named getComputerChoice
    - Create a variable named randomNumber and assign with three random 
      numbers using Math.floor(Math.random() * 3) it's 0, 1, or 2
    - Check if randomNumber is equal to 0 then return "rock"
    - Check if randomNumber is equal to 1 then return "paper"
    - Check if randomNumber is equal to 2 then return "scissors"

*/

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if(randomNumber === 0) return "rock";
  if(randomNumber === 1) return "paper";
  if(randomNumber === 2) return "scissors";
}

/*

  LOGIC FOR GETTING HUMAN CHOICE 

    - Create a function named getHumanChoice
    - Create a variable named humanChoice
    - Ask the user "Enter your choice:" and put answer to humanChoice
    - Return humanChoice trimmed and in lowercase

*/

function getHumanChoice() {
  const humanChoice = prompt("Enter your choice:");
  return humanChoice.trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

/*
    
  LOGIC TO PLAY A SINGLE ROUND

    ** sub problem functions **

    SETTING RULES IF USER SELECT ROCK

      - Create a function named getRockResult
      - Define a parameter to getRockResult: computerChoice
      - Check if computerChoice is equal to "rock" then return
        "It's a tie! Rock loves another Rock"
      - Check if computerChoice is equal to "paper" then increment
        computerScore and return "You lose! Rock loses to Paper"
      - Check if computerChoice is equal to "scissors" then increment
        humanScore and return "You win! Rock beats Scissors"

    SETTING RULES IF USER SELCT PAPER

      - Create a function named getPaperResult
      - Define a parameter to getPaperResult: computerChoice
      - Check if computerChoice is equal to "paper" then return
        "It's a tie! Paper loves another Paper"
      - Check if computerChoice is equal to "scissors" then increment
        computerScore and return "You lose! Paper loses to Scissors"
      - Check if computerChoice is equal to "rock" then increment
        humanScore and return "You win! Paper beats Rock"

    SETTING RULES IF USER SELCT SCISSORS

      - Create a function named getScissorsResult
      - Define a parameter to getScissorsResult: computerChoice
      - Check if computerChoice is equal to "scissors" then return
        "It's a tie! Scissors loves another Scissors"
      - Check if computerChoice is equal to "rock" then increment
        computerScore and return "You lose! Scissors loses to Rock"
      - Check if computerChoice is equal to "paper" then increment
        humanScore and return "You win! Scissors beats paper"

    ** main problem function **

    - Create a function named playRound
    - Define a parameter to playRound: humanChoice, computerChoice
    - Create a variable named outcome
    - Check if humanChoice is equal to "rock" then asign outcome to
      getRockResult functin
    - Check if humanChoice is equal to "paper" then asign outcome to
      getPaperResult function
    - Check if humanChoice is equal to "scissors" then asign outcome to
      getScissorsResult function
    - Show outcome

*/

function getRockResult(computerChoice) {
  if(computerChoice === "rock") {
    return "It's a tie! Rock loves another Rock";
  }

  if(computerChoice === "paper") {
    computerScore++;
    return "You lose! Rock loses to paper";
  }

  if(computerChoice === "scissors") {
    humanScore++;
    return "You win! Rock beats Scissors";
  }
}

function getPaperResult(computerChoice) {
  if(computerChoice === "paper") {
    return "It's a tie! Paper loves another Paper";
  }

  if(computerChoice === "scissors") {
    computerScore++;
    return "You lose! Paper loses to Scissors";
  }

  if(computerChoice === "rock") {
    humanScore++;
    return "You win! Paper beats Rock";
  }
}

function getScissorsResult(computerChoice) {
  if(computerChoice === "scissors") {
    return "It's a tie! Scissors loves another Scissors";
  }

  if(computerChoice === "rock") {
    computerScore++;
    return "You lose! Scissors loses to rock";
  }

  if(computerChoice === "paper") {
    humanScore++;
    return "You win! Scissors beats Paper";
  }
}

function playRound(humanChoice, computerChoice) {
  let outcome;

  if(humanChoice === "rock") outcome = getRockResult(computerChoice);
  if(humanChoice === "paper") outcome = getPaperResult(computerChoice);
  if(humanChoice === "scissors") outcome = getScissorsResult(computerChoice);

  alert(outcome);
}

/*

 LOGIC TO PLAY ENTIRE GAME 
    
    - Create a function named playGame
    - Display welcome prompt and the possible choices
    - Call playRound five times
    - Create a variable name result
    - Check if humanScore is equal to computerScore then assign result
      to "It's a tie! Good Game"
    - Check if humanScore is less than to computerScore then assign
      result to "You lose! Try again next time"
    - Check if humanScore is greater than to computerScore then assign
      result to "You win! Congratualations"
    - Show scores and result

*/

function playGame() {
  alert(`
    WELCOME TO ROCK, PAPER, SCISSORS!

    You face to a Computer in a 5-round match.
    The player with the most wins takes the title.

    Available choices: Rock, Paper, Scissors
  `);

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  let result;

  if(humanScore === computerScore) {
    result = "It's a tie! Good Game";
  }

  if(humanScore < computerScore) {
    result = "You lose! Try again next time";
  }

  if(humanScore > computerScore) {
    result = "You win! Congratualations";
  }

  alert(`
    SCORES
      You: ${humanScore}
      Computer: ${computerScore}

      - ${result}
  `);
}

playGame();
