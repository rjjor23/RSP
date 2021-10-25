// Rock, Scissors, Paper
// Project from the OP boot camp
// 20211006 

// variables
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

const player = document.querySelector('#playerScore');
const computer = document.querySelector('#computerScore');

const blocks = document.querySelectorAll('.block');
// console.log(blocks);

// game logic
blocks.forEach((block) => {
  block.addEventListener('click', () => {
    const img = block.querySelector('img');
    let playerChoice = img.alt.toLowerCase();
    let computerChoice = computerPlay();
    console.log(playerChoice, computerChoice);
    singleRound(playerChoice, computerChoice);
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
  });
});


// Returns Rock | Paper | Scissors randomly
function computerPlay() {
  var list = ["rock", "scissors", "paper"];
  let res = list[Math.floor(Math.random()*list.length)];
  // console.log(res);
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
          let roundWinner = 'Human wins!!!';
          playerScore++;
          console.log(roundWinner);
  } else if (//computer wins
      (playerSelection == 'scissors' && computerSelection == 'rock') ||
      (playerSelection == 'rock' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'scissors')) {
          let roundWinner = 'Computer wins!!!';
          computerScore++;
          console.log(roundWinner);
  } else if (//tie
      playerSelection === computerSelection) {
          let roundWinner = 'Tie!!!';
          return roundWinner;
  } else {//invalid input
      let roundWinner = 'Please enter valid values, thanks.';
      return roundWinner;
  }// end if
  
}// end singleRound() 

// function game() {

// }

// document.getElementById('rock').addEventListener('click', playerChoice);
// document.getElementById('scissors').addEventListener('click', game);
// document.getElementById('paper').addEventListener('click', game);