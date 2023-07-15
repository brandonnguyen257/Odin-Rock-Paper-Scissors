//Scores
let humanScore = 0;
let computerScore = 0;

//Game Enums
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

const GAME_WIN_SCORE = 5;

//initialize DOM manipulation elements

//DOM elements
const humanScoreElement = document.getElementById('human-score');
const computerScoreElement = document.getElementById('computer-score');

const roundDecisionElement = document.getElementById('round-decision');
const humanDecisionElement = document.getElementById('human-decision');
const computerDecisionElement = document.getElementById('computer-decision');

const gameDoneModal = document.getElementById('game-done-modal');
const restartGameButton = document.getElementById('restart-game-button');

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

//Event Listeners
rockButton.addEventListener('click', () => playRound(GAME_OPTIONS.ROCK));
paperButton.addEventListener('click', () => playRound(GAME_OPTIONS.PAPER));
scissorsButton.addEventListener('click', () => playRound(GAME_OPTIONS.SCISSORS));

restartGameButton.addEventListener('click', () => restartGame());

//Update DOM Element Methods
function updateHumanScoreElement() {
    humanScoreElement.textContent = humanScore;
}

function updateComputerScoreElement() {
    computerScoreElement.textContent = computerScore;
}

function updateScoreElements() {
    updateHumanScoreElement();
    updateComputerScoreElement();
}

function updatePlayerDecisionElements(humanInput, computerInput){
    humanDecisionElement.textContent = humanInput;
    computerDecisionElement.textContent = computerInput;
}

//DOM initialization
updateScoreElements();

//main method to run
function playRound(humanInput) {
    const computerInput = getComputerGameInput();
    updatePlayerDecisionElements(humanInput, computerInput);
    const roundDecision = getRoundDecision(humanInput, computerInput);
    processRoundDecision(roundDecision, humanInput, computerInput);
    // console.log(humanInput, computerInput, roundDecision);
    // console.log(humanScore, computerScore);
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
    const outcomes = {
        [GAME_OPTIONS.ROCK]: 
        {
            [GAME_OPTIONS.ROCK]: ROUND_DECISION.TIE,
            [GAME_OPTIONS.PAPER]: ROUND_DECISION.COMPUTER_WIN,
            [GAME_OPTIONS.SCISSORS]: ROUND_DECISION.HUMAN_WIN,
        },
        [GAME_OPTIONS.PAPER]: 
        {
            [GAME_OPTIONS.ROCK]: ROUND_DECISION.HUMAN_WIN,
            [GAME_OPTIONS.PAPER]: ROUND_DECISION.TIE,
            [GAME_OPTIONS.SCISSORS]: ROUND_DECISION.COMPUTER_WIN,
        },
        [GAME_OPTIONS.SCISSORS]: 
        {
            [GAME_OPTIONS.ROCK]: ROUND_DECISION.COMPUTER_WIN,
            [GAME_OPTIONS.PAPER]: ROUND_DECISION.HUMAN_WIN,
            [GAME_OPTIONS.SCISSORS]: ROUND_DECISION.TIE,
        },
    };
    return outcomes[humanInput][computerInput];
}

function processRoundDecision(roundDecision, humanInput, computerInput) {
    const roundMessages = {
        [ROUND_DECISION.HUMAN_WIN]: `Human Win, ${humanInput} beats ${computerInput}`,
        [ROUND_DECISION.COMPUTER_WIN]: `Computer Win, ${computerInput} beats ${humanInput}`,
        [ROUND_DECISION.TIE]: `Tie, both players chose ${humanInput}`,
    }

    switch (roundDecision) {
        case ROUND_DECISION.HUMAN_WIN:
            humanScore+=1;
            break;
        case ROUND_DECISION.COMPUTER_WIN:
            computerScore+=1;
            break;
        default:
            break;
    }
    roundDecisionElement.textContent = roundMessages[roundDecision];
    updateScoreElements();

    if (humanScore === GAME_WIN_SCORE || computerScore === GAME_WIN_SCORE) {
        gameDoneModal.classList.add('show');
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreElements();

    roundDecisionElement.textContent = '';
    humanDecisionElement.textContent = '';
    computerDecisionElement.textContent = '';

    gameDoneModal.classList.remove('show');
}