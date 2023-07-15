let humanScore = 0;
let computerScore = 0;

const GAME_OPTIONS = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors'
}

const ROUND_DECISION = {
    HUMAN_WIN: 'Human',
    COMPUTER_WIN: 'Computer',
    TIE: 'Tie'
}

//initialize DOM manipulation elements

//Get DOM score elements
const humanScoreElement = document.getElementById('human-score');
function updateHumanScoreElement() {
    humanScoreElement.textContent = humanScore;
}

const computerScoreElement = document.getElementById('computer-score');
function updateComputerScoreElement() {
    computerScoreElement.textContent = computerScore;
}

function updateScoreElements() {
    updateHumanScoreElement();
    updateComputerScoreElement();
}

const roundDecisionElement = document.getElementById('round-decision');

const humanDecisionElement = document.getElementById('human-decision');
const computerDecisionElement = document.getElementById('computer-decision');

function updatePlayerDecisionElements(humanInput, computerInput){
    humanDecisionElement.textContent = humanInput;
    computerDecisionElement.textContent = computerInput;
}

//Get DOM Game Option elements
const rockButton = document.getElementById("rock-button");
rockButton.addEventListener('click', () => playRound(GAME_OPTIONS.ROCK));

const paperButton = document.getElementById('paper-button');
paperButton.addEventListener('click', () => playRound(GAME_OPTIONS.PAPER));

const scissorsButton = document.getElementById('scissors-button');
scissorsButton.addEventListener('click', () => playRound(GAME_OPTIONS.SCISSORS));

//initialize UI elements with default values
updateScoreElements();

//main method to run
function playRound(humanInput) {
    const computerInput = getComputerGameInput();
    updatePlayerDecisionElements(humanInput, computerInput);
    const roundDecision = getRoundDecision(humanInput, computerInput);
    processRoundDecision(roundDecision, humanInput, computerInput);
    updateScoreElements();
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

function processRoundDecision(roundDecision, humanInput, computerInput) {
    switch (roundDecision) {
        case ROUND_DECISION.HUMAN_WIN:
            humanScore+=1;
            roundDecisionElement.textContent = `Human Win, ${humanInput} beats ${computerInput}`;
            break;
        case ROUND_DECISION.COMPUTER_WIN:
            computerScore+=1;
            roundDecisionElement.textContent = `Computer Win, ${computerInput} beats ${humanInput}`;
            break;
        default:
            roundDecisionElement.textContent = `Tie, both players chose ${humanInput}`;
    }
}