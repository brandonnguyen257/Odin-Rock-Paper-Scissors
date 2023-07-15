const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', () => playRound(GAME_OPTIONS.ROCK));
paperButton.addEventListener('click', () => playRound(GAME_OPTIONS.PAPER));
scissorsButton.addEventListener('click', () => playRound(GAME_OPTIONS.SCISSORS));


function playRound(humanInput) {
    const computerInput = getComputerGameInput();
    console.log(humanInput, computerInput);
}

function getComputerGameInput() {
    const randomGameOption = Math.floor(Math.random() * 3) + 1;

    switch (randomGameOption) {
        case 1:
            return GAME_OPTIONS.ROCK;
        case 2:
            return GAME_OPTIONS.PAPER;
        case 3: 
            return GAME_OPTIONS.SCISSORS;
        default:
            return undefined;
    }
}