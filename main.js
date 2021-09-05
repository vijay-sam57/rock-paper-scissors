function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    if(choice === 0){
        return "ROCK";
    }
    else if(choice === 1){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

function gamePlay(player,computer){
    player = player.toUpperCase();
    if(player==="PAPER"){
        if(computer === "ROCK"){
        return "You win! Paper beats Rock yo!!" + gameScore("Player");
        }
        else if(computer === "SCISSORS"){
            return "You lose! Scissors beats Paper yo!!" + gameScore("Computer");
        }
        else{
            return "It's a Tie!" + gameScore("Tie");
        }
    }
    else if(player==="ROCK"){
        if(computer === "ROCK"){
        return "It's a Tie!" + gameScore("Tie");
        }
        else if(computer === "SCISSORS"){
            return "You win! Rock beats Scissors yo!!" + gameScore("Player");
        }
        else{
            return "You lose! Paper beats Rock yo!!" + gameScore("Computer");
        }
    }
    else{
        if(computer === "ROCK"){
        return "You lose! Rock beats Scissors yo!!" + gameScore("Computer");
        }
        else if(computer === "SCISSORS"){
            return "It's a Tie!" + gameScore("Tie");
        }
        else{
            return "You win! Scissors beats Paper yo!!" + gameScore("Player");
        }
    }
}
let playerScore = 0;
let computerScore = 0
function gameScore(winner){
    if(winner === 'Player'){
        playerScore+=1;
        return `\nPlayerscore = ${playerScore} Computerscore = ${computerScore}`;
    }
    else if(winner === 'Computer'){
        computerScore+=1;
        return `\nPlayerscore = ${playerScore} Computerscore = ${computerScore}`;
    }
    else{
        return `\nPlayerscore = ${playerScore} Computerscore = ${computerScore}`;
    }
}

function game(playerSelect,computerSelect){
    console.log(gamePlay(playerSelect,computerSelect));

}

function gameOver(){
    if(computerScore === 5){
        console.log("Computer wins the game. Better luck next time!");
    }
    else if(playerScore === 5){
        console.log("Player wins the game. Alright you the man!");
    }
}

while(playerScore!==5 && computerScore!==5){
    let playerSelect = prompt("Enter rock paper or scissors");
    let computerSelect = computerPlay();
    game(playerSelect,computerSelect);
}
gameOver();