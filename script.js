let humanScore = 0;
let computerScore = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const ROUND_DECISION = {
    HUMAN_WIN: 'human',
    COMPUTER_WIN: 'computer',
    TIE: 'tie'
}

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', () => playRound(GAME_OPTIONS.ROCK));
paperButton.addEventListener('click', () => playRound(GAME_OPTIONS.PAPER));
scissorsButton.addEventListener('click', () => playRound(GAME_OPTIONS.SCISSORS));


function playRound(humanInput) {
    const computerInput = getComputerGameInput();
    const roundDecision = getRoundDecision(humanInput, computerInput);
    processRoundDecision(roundDecision);
    console.log(humanInput, computerInput, roundDecision);
    console.log(humanScore, computerScore);

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

function getRoundDecision(humanInput, computerInput) {
    if (humanInput === computerInput) return ROUND_DECISION.TIE;

    if(humanInput === GAME_OPTIONS.ROCK) {
        return computerInput === GAME_OPTIONS.SCISSORS ? 
        ROUND_DECISION.HUMAN_WIN : ROUND_DECISION.COMPUTER_WIN;
    }

    if(humanInput === GAME_OPTIONS.PAPER) {
        return computerInput === GAME_OPTIONS.ROCK ? 
        ROUND_DECISION.HUMAN_WIN : ROUND_DECISION.COMPUTER_WIN;
    }

    if(humanInput === GAME_OPTIONS.SCISSORS) {
        return computerInput === GAME_OPTIONS.PAPER ? 
        ROUND_DECISION.HUMAN_WIN : ROUND_DECISION.COMPUTER_WIN;
    }
}

function processRoundDecision(roundDecision) {
    switch (roundDecision) {
        case ROUND_DECISION.HUMAN_WIN:
            humanScore+=1;
            break;
        case ROUND_DECISION.COMPUTER_WIN:
            computerScore+=1;
            break;
        default:
            console.log('Tie Switch Case');
    }
}