/* 
1) Create three buttons, one for each selection. 
2)Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
3) Add a div for displaying results and change all of your console.logs into DOM methods.
4) Display the running score, and announce a winner of the game once one player reaches 5 points.
*/
const container = document.querySelector("#container");
const points = document.createElement("p");
const para = document.createElement("p");
const div = document.createElement("div");
const winner = document.createElement("h2");
container.append(div);
let playerSelection;
let computerScore = 0;
let playerScore = 0;
///
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.id;
    playRound(playerSelection, computerSelection);
  })
);

///

const computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "scissors";
  } else if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  }
};

const display = () => {
  div.setAttribute(
    "style",
    "font-size: 20px; line-height: 200%; margin-top:15px; background-color: white; padding: 20px; border-radius: 5px; max-width: 600px; margin: auto"
  );
  div.textContent = `Your choice: ${playerSelection} - Computer's choice: ${computerSelection}`;
  div.appendChild(para);
  div.appendChild(points);
  points.setAttribute("style", "font-size:18px; margin-top:15px");
  points.textContent = `Your points: ${playerScore} - Computer's points: ${computerScore}`;
  checkWinner();
};

const computerSelection = computerPlay();

const playRound = (playerSelection, computerSelection) => {
  para.setAttribute(
    "style",
    "font-size: 25px; font-family: 'Playfair Display', serif; letter-spacing:2px; font-weight:600; margin-top: 10px"
  );
  if (playerSelection === computerSelection) {
    display();
    para.textContent = "This round is a tie";
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore += 1;
    display();
    para.textContent = "Computer wins this round!";
  } else {
    playerScore += 1;
    display();
    para.textContent = "You win this round!";
  }
};

function checkWinner() {
  if (playerScore == 5) {
    winner.setAttribute(
      "style",
      "font-size: 40px; font-family: 'Playfair Display', serif; letter-spacing:2px; font-weight:600; margin: 20px"
    );
    div.appendChild(winner);
    winner.textContent = "You win this game!";
    reset();
  } else if (computerScore == 5) {
    div.appendChild(winner);
    winner.textContent = "Computer wins this game!";
    reset();
  }
}

function reset() {
  totalRounds = 0;
  playerScore = 0;
  computerScore = 0;
}

/*
******change back id in html

document.querySelector("#btn-rock").addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

document.querySelector("#btn-paper").addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

document.querySelector("#btn-scissors").addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});




*/
