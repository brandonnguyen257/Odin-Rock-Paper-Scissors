
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));


function playRound(humanInput) {
    console.log(humanInput);
}