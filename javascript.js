let option = ["rock", "paper", "scissors"]
let comp = 0, player = 0; // Initial scores

// computerPlay is the function to generate a choice for the computer
// Input: none
// Output: computerSelection
function computerPlay () {
    return option[Math.floor((Math.random()*3))];
}

// playRound is the function to play 1 round of RPS 
// Input: playerSelection
// Output: winner (draw/comp/player)
const container = document.querySelector('body');
const content = document.createElement('p');
function playRound (playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        content.textContent = `The computer chooses: ${computerSelection}. It's a draw!`;
        container.appendChild(content);
        return "draw";
    }

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            content.textContent = `The computer chooses: ${computerSelection}. You've lost!`;
            container.appendChild(content);
            return "comp";
        } else {
            content.textContent = `The computer chooses: ${computerSelection}. You've won!`;
            container.appendChild(content);
            return "player";
        }
    }

    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            content.textContent = `The computer chooses: ${computerSelection}. You've lost!`;
            container.appendChild(content);
            return "comp";
        } else {
            content.textContent = `The computer chooses: ${computerSelection}. You've won!`;
            container.appendChild(content);
            return "player";
        }
    }

    if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            content.textContent = `The computer chooses: ${computerSelection}. You've lost!`;
            container.appendChild(content);
            return "comp";
        } else {
            content.textContent = `The computer chooses: ${computerSelection}. You've won!`;
            container.appendChild(content);
            return "player";
        }
    }
}

// calculateScores announces the winner of 1 round and update scores
// Input: winner
// Output: update and display updated scores
const scores = document.createElement('p')
function calculateScores(winner) {
    console.log(`The winner is: ${winner}`);
    if (winner == "comp") {
        comp++;
    } else if (winner == "player") {
        player++;
    }
    scores.textContent = `Scores:\
    Comp : Player\
    ${comp} : ${player}`;
    container.appendChild(scores);
}

// checkWinner after updating scores
// Input: none
// Output: announce the final winner and end the game
function checkWinner() {
    if (comp == 5) {
        console.log(`You lose ${comp} : ${player}`);
        content.textContent = `You've lost ${comp} : ${player}`;
        endGame();
    } else if (player == 5) {
        console.log(`You've won ${player} : ${comp}`);
        content.textContent = `You've won ${comp} : ${player}`;
        endGame();
    }
}
const buttons = document.querySelectorAll('button');
// endGame
// Output: end the game - remove all buttons
function endGame() {
    buttons.forEach(
        function(node) {
            container.removeChild(node);
        }
    );
    container.appendChild(content);
}




// Buttons & Events
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// addEventListener
// Input: click
// Output: call a function to play 1 round and then calculate scores and then check winner
rock.addEventListener('click', function() {
    eventHandler("rock");
});
paper.addEventListener('click', function() {
    eventHandler("paper");
});
scissors.addEventListener('click', function() {
    eventHandler("scissors");
});

// eventHandler
function eventHandler(playerSelection) {
    calculateScores(playRound(playerSelection));
    console.log(`Current Score: comp : player => ${comp} : ${player}`);
    checkWinner();
}


