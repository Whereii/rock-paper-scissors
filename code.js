function computerPlay () {
    let randoNum = Math.floor(Math.random() * 3) + 1;
    if(randoNum === 1) {
        return 'rock';;
    } else if (randoNum === 2) {
        return 'paper';
    } else if (randoNum === 3) {
        return 'scissors';
    }
}

let rockPress = document.getElementById('rockbtn');
let paperPress = document.getElementById('paperbtn');
let scissorsPress = document.getElementById('scissorsbtn');
let resultsDisplay = document.getElementById('display');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let results = document.getElementById('results');
let playerSelection;


//Mathes the player input to the random answer from the robot. Took the long way to solve this little problem. Im sure there are much quicker ways to create the solution to this one.
function faceOff (player, robot) {
    if (player === 'rock' && robot === 'scissors') {
        return 'You win! Rock beats scissors';
    } else if (player === 'rock' && robot === 'rock') {
        return 'You tie! You both guessed rock';
    } else if (player === 'rock' && robot === 'paper') {
        return 'You lose. You guessed rock and the robot guessed paper';
    } else if (player === 'paper' && robot === 'paper') {
        return 'You tie. Looks like you both guessed paper. Its a draw';
    } else if (player === 'paper' && robot === 'rock') {
        return 'You win! paper beats rock';
    } else if (player === 'paper' && robot === 'scissors') {
        return 'You lose. Yikes. Better luck next time. The robot guessed scissors';
    } else if (player === 'scissors' && robot === 'paper') {
        return 'You win! Looks like you dominated. You guessed scissors which beats the robots thin paper';
    } else if (player === 'scissors' && robot === 'scissors') {
        return 'You tie. You both guessed scissors';
    } else if (player === 'scissors' && robot === 'rock') {
        return 'You lose. What a beatdown! The robot guessed rock which beat your scissors';
    }
}

rockPress.addEventListener('click', function () {
    playerSelection = 'rock';
    results.textContent = '';
    resultsDisplay.textContent = faceOff(playerSelection, computerPlay());
    if(resultsDisplay.textContent.includes('win') === true) {
        playerScore.textContent ++;
    } else if (resultsDisplay.textContent.includes('lose') === true) {
        computerScore.textContent ++;
    };
    if(playerScore.textContent >= 5 || computerScore.textContent >= 5) {
        if(playerScore.textContent > computerScore.textContent){
            results.textContent = 'You win ' + playerScore.textContent + ' to ' + computerScore.textContent +  '! You beat that simple program!'
        } else {
            results.textContent = 'You lost ' + playerScore.textContent + ' to ' + computerScore.textContent +  '. You are a loser and will always be one.'
        };
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
});

paperPress.addEventListener('click', function () {
    playerSelection = 'paper';
    results.textContent = '';
    resultsDisplay.textContent = faceOff(playerSelection, computerPlay());
    if(resultsDisplay.textContent.includes('win') === true) {
        playerScore.textContent ++;
    } else if (resultsDisplay.textContent.includes('lose') === true) {
        computerScore.textContent ++;
    };
    if(playerScore.textContent >= 5 || computerScore.textContent >= 5) {
        if(playerScore.textContent > computerScore.textContent){
            results.textContent = 'You win ' + playerScore.textContent + ' to ' + computerScore.textContent + '! You beat that simple program!'
        } else {
            results.textContent = 'You lost ' + playerScore.textContent + ' to ' + computerScore.textContent +  '. You are a loser and will always be one.'
        };
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
});

scissorsPress.addEventListener('click', function () {
    playerSelection = 'scissors';
    results.textContent = '';
    resultsDisplay.textContent = faceOff(playerSelection, computerPlay());
    if(resultsDisplay.textContent.includes('win') === true) {
        playerScore.textContent ++;
    } else if (resultsDisplay.textContent.includes('lose') === true) {
        computerScore.textContent ++;
    };
    if(playerScore.textContent >= 5 || computerScore.textContent >= 5) {
        if(playerScore.textContent > computerScore.textContent){
            results.textContent = 'You win ' + playerScore.textContent + ' to ' + computerScore.textContent +  '! You beat that simple program!'
        } else {
            results.textContent = 'You lose ' + playerScore.textContent + ' to ' + computerScore.textContent +  '. You are a loser and will always be one.'
        };
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
});


//This little piece of code is very confusing and I should have broken it down into at least another "score" function. Found myself a little too deep and ended up just putting it all together
/*function game () {
    let computerScore = 0;
    let playerScore = 0;
    for(let i = 0; i < 5; i++) {
        //Decided to turn the faceOff function into a variable so it is a little easier for me to wrap my head around and to use .includes a little easier.
        let round = faceOff(playerSelection, computerPlay());
        console.log(round);
        if(round.includes('win') === true) {
            playerScore ++
        } else if (round.includes('lose') === true) {
            computerScore++
        }
        console.log('The computer score is ' + computerScore + '. Your score is ' + playerScore);
    };
    if (computerScore > playerScore) {
        return 'The computer is the champion. The final score is Computer: ' + computerScore + ' Player: ' + playerScore;
    } else if (computerScore === playerScore) {
        return 'BOOOO the battle ended in a tie. How boring. The final score is Computer: ' + computerScore + ' Player: ' + playerScore;
    } else {
        return 'You are the victor of this battle. The final score is Computer: ' + computerScore + ' Player: ' + playerScore;
    }
}


console.log(game());
*/