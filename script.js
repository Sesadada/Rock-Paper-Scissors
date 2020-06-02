const getPlayerChoice = (userChoice) => {
  userChoice = userChoice.toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    console.log("You must choose between rock, paper, scissors)");
  }
};

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

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection.toLowerCase() === computerSelection) {
    return "This game is a tie";
  }
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
};

const game = () => {
  for (var i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice(
      prompt("Choose between rock, paper, scissors")
    );
    if (playerSelection == null) {
      alert("You are a chicken!"), console.log("You know you are a Chicken");
    }

    const computerSelection = computerPlay();

    console.log("your score = " + playerSelection.toLowerCase());
    console.log("Computer's score = " + computerSelection);
    console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  }
};

game();
