// Rock, Scissors, Paper
// Project from the OP boot camp
// 20211006 

// variables
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const outcome = document.getElementById('outcome');
const final = document.getElementById('final');
const reset = document.getElementById('reset');

const blocks = document.querySelectorAll('.block');

// game logic
blocks.forEach((block) => {
  block.addEventListener('click', () => {
    const img = block.querySelector('img');
    let playerChoice = img.alt.toLowerCase();
    let computerChoice = computerPlay();
    console.log(playerChoice, computerChoice);
    singleRound(playerChoice, computerChoice);

    player.textContent =`${playerScore}`;
    computer.textContent = `${computerScore}`;

    if (playerScore == 5 | computerScore == 5) {
      final.innerText = "Game Over";
    }
  });
});


// Returns Rock | Paper | Scissors randomly
function computerPlay() {
  var list = ["rock", "scissors", "paper"];
  let res = list[Math.floor(Math.random()*list.length)];
  return res;
}

// input the necessary arguments to determine a roundWinner in RPS
function singleRound(playerSelection, computerSelection) {
  // local variable
  
  // logic
  
  if (//human wins
      (playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')) {
          outcome.innerText ='Human wins!!!';
          playerScore++;
  } else if (//computer wins
      (playerSelection == 'scissors' && computerSelection == 'rock') ||
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors')) {
          outcome.innerText = 'Computer wins!!!';
          computerScore++;
  } else if (//tie
      playerSelection === computerSelection) {
          outcome.innerText = 'Tie!!!';
  } else {//invalid input
      outcome.innerText = 'Please enter valid values, thanks.';
      return roundWinner;
  }// end if
  
}// end singleRound() 
