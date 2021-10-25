// Rock, Scissors, Paper
// Project from the OP boot camp
// 20211006 

// Returns Rock | Paper | Scissors randomly
function computerPlay() {
    var list = ["rock", "scissors", "paper"];
    let res = list[Math.floor(Math.random()*list.length)];
    // console.log(res);
    return res;
}

// input the necessary arguments to determine a victor in RPS
function singleRound(playerSelection, computerSelection) {
    // local variable
    let victor = '';
    let playerSelection2 = playerSelection.toLowerCase();
    console.log(playerSelection);
    // logic
    
    if (//human wins
        (playerSelection2 == 'rock' && computerSelection == 'scissors') ||
        (playerSelection2 == 'paper' && computerSelection == 'rock') ||
        (playerSelection2 == 'scissors' && computerSelection == 'paper')) {
            let victor = 'Human wins!!!';
            return victor;
    } else if (//computer wins
        (playerSelection2 == 'scissors' && computerSelection == 'rock') ||
        (playerSelection2 == 'rock' && computerSelection == 'paper') ||
        (playerSelection2 == 'paper' && computerSelection == 'scissors')) {
            let victor = 'Computer wins!!!';
            return victor;
    } else if (//tie
        (playerSelection2 == 'scissors' && computerSelection == 'scissors') ||
        (playerSelection2 == 'rock' && computerSelection == 'rock') ||
        (playerSelection2 == 'paper' && computerSelection == 'paper')){
            let victor = 'Tie!!!';
            return victor;
    } else {//invalid input
        let victor = 'Please enter valid values, thanks.';
        return victor;
    }// end if
    
}// end singleRound() 
// console.log(singleRound('rock', computerPlay()))


// Run singleRound 5 times
function game() {
    // local variables
    let playerCounter = 0;
    let computerCounter = 0;
    let tiesCounter = 0;
    let playerChoice = '';

    // game logic
        // let playerSelection3 = window.prompt('Choose Rock, Paper, Scissors');
        const blocks = document.querySelectorAll('.block');
        let playerSelection3 = blocks.forEach((block) => {
            const img = block.querySelector('img');
            playerChoice = img.alt.toLowerCase();
            console.log(playerChoice);
            return playerChoice;
        });

        let x = singleRound(playerChoice,  computerPlay() /*'rock'*/);
        console.log(x);
        if(x == 'Human wins!!!') {
            playerCounter++;
        } else if (x == "Computer wins!!!") {
            computerCounter++;
        } else if (x == "Tie!!!") {
            tiesCounter++;
        }
        console.log("Human: " + playerCounter + " Computer: " + computerCounter + " Ties: " + tiesCounter);
        // console.log(singleRound(playerSelection3, computerPlay()));
    
    if( playerCounter > computerCounter) {
        console.log("Human victory!!!");
    } else if (playerCounter < computerCounter) {
        console.log("Computer victory!!!");
    } else if (playerCounter == computerCounter) {
        console.log("Tie game, try again!!!");
    } else {
        console.log("We may have a problem with logic");
    }
}


// game();

// const blocks = document.querySelectorAll('.block');
// console.log(blocks);

// blocks.forEach((block) => {
//     block.addEventListener('click', () => {
//         const img = block.querySelector('img');
//         val = img.alt.toLocaleLowerCase();
//         console.log(val);
//     })
// });

document.getElementById('rock').addEventListener('click', game);
document.getElementById('scissors').addEventListener('click', game);
document.getElementById('paper').addEventListener('click', game);