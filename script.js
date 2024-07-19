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