function getComputerChoice() {
  val = Math.random();
  if (val < 1/3) {
    return "rock";
  } else if (val < 2/3) {
    return "paper";
  }
  return "scissors";
}

function getHumanChoice() {
  while (true) {
    let choice = prompt("rock/paper/scissors: ");
    choice = choice.toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissors") {
      return choice;
    }
  }
  return choice;
}

function cap(str) {
  return str.at(0).toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(`Draw! Both played ${cap(humanChoice)}!`);
    return "draw";
  } else if ((humanChoice == "rock" && computerChoice == "paper") ||
             (humanChoice == "paper" && computerChoice == "scissors") ||
             (humanChoice == "scissors" && computerChoice == "rock")) {
    console.log(`You lose! ${cap(computerChoice)} beats ${cap(humanChoice)}!`);
    return "computer";
  } else {
    console.log(`You win! ${cap(humanChoice)} beats ${cap(computerChoice)}!`);
    return "human";
  }
}

function playGame() {
  let round = 1;
  let humanScore = 0;
  let computerScore = 0;
  while (round <= 5) {
    let result = playRound(getHumanChoice(), getComputerChoice());
    switch (result) {
      case "draw":
        humanScore += 0.5;
        computerScore += 0.5;
        break;
      case "human":
        humanScore += 1;
        break;
      case "computer":
        computerScore += 1;
        break;
    }
    round++;
  }
  console.log("Final score:");
  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Draw!");
  }
}

