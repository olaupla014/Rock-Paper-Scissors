
function getComputerChoice(){
    let choice = Math.random();

    if (choice < 0.34){
        choice = "rock";
    } else if (0.34 <= choice < 0.67){
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
    
}

function getHumanChoice(){ 
    let choice = prompt("Rock, Paper or Scissors? =>").toLowerCase()
    console.log(`You picked ${choice}`)

    return choice
}


function playRound(computerChoice, humanChoice){
    let winMessage = `You win! ${humanChoice} beats ${computerChoice}`;
    let looseMessage = `You loose! ${computerChoice} beats ${humanChoice}`;
    let tie = "It's a tie!";

    let result;

    if (computerChoice == "rock" && humanChoice == "paper" ||computerChoice == "scissors" && humanChoice == "rock"||computerChoice == "paper" && humanChoice == "scissors"){
        ++humanScore;
        result = winMessage;
    } else if (computerChoice == humanChoice){
        result = tie;
    } else{
        result = looseMessage;
        ++computerChoice;
    }

    return result;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        console.log(playRound(computerChoice, humanChoice))
    }

    if (humanScore == computerScore){
        console.log(`Tie, Score: Human Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanScore > computerScore){
        console.log("You win! Computer looses!")
    } else {
        console.log("You loose! Computer wins!")
    }
}

playGame()