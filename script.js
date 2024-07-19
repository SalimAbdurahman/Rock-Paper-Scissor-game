function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();
  
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
      choice = prompt(
        "Invalid choice. Please enter rock, paper, or scissors:"
      ).toLowerCase();
    }
  
    return choice;
  }
  
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return "tie";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(
        `You win! ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }`
      );
      return "human";
    } else {
      console.log(
        `You lose! ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
      );
      return "computer";
    }
  }
  