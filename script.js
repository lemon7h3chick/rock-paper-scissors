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

console.log(getHumanChoice());
