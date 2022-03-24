let option = ["rock", "paper", "scissors"]

function computerPlay () {
    return option[Math.floor((Math.random()*3))];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "comp";
        } else {
            return "player";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "comp";
        } else {
            return "player";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "comp";
        } else {
            return "player";
        }
    }
}

function game() {
    let playerSelection, computerSelection, winner;
    let player = 0, comp = 0;

    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        playerSelection = (window.prompt("Your choice: ")).toLowerCase();
        
        console.log(`\nComputer chooses: ${computerSelection}`);
        console.log(`You choose : ${playerSelection}`);
        
        if ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors")) {
            console.log("Dude do you want to play or not?");
        } else {
            winner = playRound(playerSelection, computerSelection);
        }

        console.log(`The winner is: ${winner}`);

        if (winner == "player") {
            console.log(`You've won this round!`);
            player++;
        } else if (winner == "comp") {
            console.log(`You've lost this round..`);
            comp++;
        } else {
            console.log ("Congrats. Draw!");
        }
    }

    // Conclusion:
    if (player > comp) {
        console.log(`Congrats. You've won ${player} : ${comp}.`);
    } else if (comp > player) {
        console.log(`Congrats. You've lost ${player} : ${comp}.`);
    } else {
        console.log("Draw!");
    }
}

