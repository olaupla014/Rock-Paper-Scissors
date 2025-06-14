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
    let result = 0;
    if (computerChoice == "rock" && humanChoice == "paper" ||computerChoice == "scissors" && humanChoice == "rock"||computerChoice == "paper" && humanChoice == "scissors"){
        result = 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if (computerChoice == humanChoice){
        console.log("It's a tie!")
    } else{
        console.log(`You loose! ${computerChoice} beats ${humanChoice}`)
        result = 2;
    }

    return result;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; ++i){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        result = playRound(computerChoice, humanChoice);
        if (result == 1){
            ++humanScore;
        } else if (result == 2){
            ++computerScore;
        }
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