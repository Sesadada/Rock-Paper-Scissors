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
const winner = document.createElement("div");
const getWinner = document.getElementById("winner");
let image = document.createElement("img");
container.append(div);
div.setAttribute("id", "response");

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    playerSelection = button.id;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("computer choice: " + computerSelection);
  })
);

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
  div.style.backgroundColor = "white";
  div.style.lineHeight = "200%";
  div.style.marginTop = "15px";
  div.style.borderRadius = "5px";
  div.style.maxWidth = "600px";
  div.style.margin = "auto";
  div.style.fontSize = "20px";

  div.textContent = `Your choice: ${playerSelection} - Computer's choice: ${computerSelection}`;
  div.appendChild(para);
  div.appendChild(points);
  points.style.fontSize = "18px";
  points.style.marginTop = "15px";
  points.textContent = `Your points: ${playerScore} - Computer's points: ${computerScore}`;
  checkWinner();
};

const playRound = (playerSelection, computerSelection) => {
  para.style.fontSize = "25px";
  para.style.fontFamily = "'Playfair Display', serif";
  para.style.letterSpacing = "2px";
  para.style.fontWeight = "600";
  para.style.marginTop = "10px";

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
  winner.setAttribute("id", "winner");
  //winner.style.visibility = "visible";
  winner.style.fontSize = "20px";
  winner.style.lineHeight = "200%";
  winner.style.marginTop = "15px";
  winner.style.padding = "20px";

  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore == 5) {
      container.append(winner);
      winner.textContent = "You win this game!";
      winner.appendChild(image);
      final();
      console.log(playerScore, computerScore);
    } else if (computerScore == 5) {
      container.append(winner);
      winner.textContent = "Computer wins this game!";
      winner.appendChild(image);
      final();
      console.log(playerScore, computerScore);
    }
    totalRounds = 0;
    playerScore = 0;
    computerScore = 0;
  } else {
    winner.remove();
  }
}

function final() {
  div.textContent = "";
  div.removeAttribute("style");
}

image.setAttribute(
  "src",
  "http://www.cutestpaw.com/wp-content/uploads/2012/08/computer-kitty.jpg"
);
image.setAttribute("width", "250px");
image.setAttribute("height", "315px");
image.setAttribute("style", "display: flex; margin: auto");

/*

if (playerScore >= 5 || computerScore >= 5) { 
      if(){}else{}
    
  totalRounds = 0;
  playerScore = 0;
  computerScore = 0;
} 

else {  winner.remove() } 



div style *****************

 div.setAttribute(
    "style",
    "font-size: 20px; line-height: 200%; margin-top:15px; background-color: white; padding: 20px; border-radius: 5px; max-width: 600px; margin: auto"
  );
**************

para style **********
 para.setAttribute(
    "style",
    "font-size: 25px; font-family: 'Playfair Display', serif; letter-spacing:2px; font-weight:600; margin-top: 10px"
  );

  **********


  winner style *****************
    winner.setAttribute(
    "style",
    "font-size: 20px; line-height: 200%; margin-top:15px; padding: 20px; border-radius: 5px; max-width: px; margin: auto"
  );
******************************



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

****************

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


*/
