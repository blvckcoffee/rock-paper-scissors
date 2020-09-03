let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function capitalizeFirstLetter(selection) {
   if (selection === "rock") return "Rock";
   if (selection === "paper") return "Paper";
   else return "Scissors";
}

function win(userSelection, computerSelection) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${capitalizeFirstLetter(userSelection)} beats ${computerSelection}. You win!`;
  document.getElementById(userSelection).classList.add('green-glow');
  setTimeout(() => document.getElementById(userSelection).classList.remove('green-glow'), 700);
  if (userScore === 5) {
    result_p.innerHTML = `You Won!`;
  }
}

function lose(userSelection, computerSelection) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${capitalizeFirstLetter(computerSelection)} beats ${userSelection}. You lose.`;
  document.getElementById(userSelection).classList.add('red-glow');
  setTimeout(() => document.getElementById(userSelection).classList.remove('red-glow'), 700);
  if (computerScore === 5) {
    result_p.innerHTML = `The Computer Won!`
  }
}

function draw(userSelection, computerSelection) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${capitalizeFirstLetter(computerSelection)} matches ${userSelection}. It\'s a tie.`;
  document.getElementById(userSelection).classList.add('grey-glow');
  setTimeout(() => document.getElementById(userSelection).classList.remove('grey-glow'), 700);
}

function playRound(userSelection) {
  const computerSelection = getComputerSelection();
  switch (userSelection + computerSelection) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userSelection, computerSelection);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userSelection, computerSelection);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userSelection, computerSelection);
      break;                        
}
    
}

function main() {
  rock_div.addEventListener('click', () => playRound("rock"));
  paper_div.addEventListener('click', () => playRound("paper"));
  scissors_div.addEventListener('click', () => playRound("scissors"));  
}

main();