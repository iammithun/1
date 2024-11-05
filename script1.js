function playGame(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine the result
  let result = "";
  if (playerChoice === computerChoice) {
      result = "It's a Draw!";
  } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
      result = "You Win!";
  } else {
      result = "You Lose!";
  }

  // Display the choices and result
  document.getElementById("player-choice").textContent = `Your choice: ${playerChoice}`;
  document.getElementById("computer-choice").textContent = `Computer's choice: ${computerChoice}`;
  document.getElementById("game-result").textContent = `Result: ${result}`;
}
