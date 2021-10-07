// Rock, Scissors, Paper
// Project from the OP boot camp
// 20211006 

// Returns Rock | Paper | Scissors randomly
function computerPlay() {
    var list = ["rock", "scissors", "paper"];
    let res = list[Math.floor(Math.random()*list.length)];
    console.log(res);
    return res;
}

// input the necessary arguments to determine a victor in RPS
function singleRound(playerSelection, computerSelection) {
    // local variables
    let playerSelection2 = playerSelection.toLowerCase();
    let computerSelection2 = computerSelection.toLowerCase();
    let victor = '';

    // logic
    
    if (//human wins
        (playerSelection2 == 'rock' && computerSelection2 == 'scissors') ||
        (playerSelection2 == 'paper' && computerSelection2 == 'rock') ||
        (playerSelection2 == 'scissors' && computerSelection2 == 'paper')) {
            let victor = 'Human wins!!!';
            return victor;
    } else if (//computer wins
        (playerSelection2 == 'scissors' && computerSelection2 == 'rock') ||
        (playerSelection2 == 'rock' && computerSelection2 == 'paper') ||
        (playerSelection2 == 'paper' && computerSelection2 == 'scissors')) {
            let victor = 'Computer wins!!!';
            return victor;
    } else if (//tie
        (playerSelection2 == 'scissors' && computerSelection2 == 'scissors') ||
        (playerSelection2 == 'rock' && computerSelection2 == 'rock') ||
        (playerSelection2 == 'paper' && computerSelection2 == 'paper')){
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
    let playerCounter = 0;
    let computerCounter = 0;
    let tiesCounter = 0;
    for (i = 1; i <= 5; i++) {
        let playerSelection3 = window.prompt('Choose Rock, Paper, Scissors');
        let x = singleRound(playerSelection3, computerPlay());
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
    }    
}


game();

// let a = 0;
// let b = 0;
// for(i = 1;i <= 5; i++) {
//     a++;
//     b++;
//     console.log(b);
// }