// console.log("Systems Check...");
let res ='a';

function computerPlay() {
    var list = ["rock", "scissors", "paper"];
    let res = list[Math.floor(Math.random()*list.length)];
    console.log(res);
}

computerPlay();

