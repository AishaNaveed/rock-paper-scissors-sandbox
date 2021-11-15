const getRandomMove = () => {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
  };
  
  const getOutcome = (moveOne, moveTwo) => {
    if (moveOne === moveTwo) {
      return "It's a draw!";
    }
  
    if (
      (moveOne === "scissors" && moveTwo === "paper") ||
      (moveOne === "rock" && moveTwo === "scissors") ||
      (moveOne === "paper" && moveTwo === "rock")
    ) {
      return "Player One wins!";
    }
  
    return "Player Two wins!";
  };
  
  // Removing elements (nodes) from the DOM
  const resetGame = () => {
    if (document.getElementById("outcome")) {
      const outcome = document.body.lastChild;
      document.body.removeChild(outcome);
    }
  };
  
  const playGame = () => {
    resetGame();
    const playerOneMove = getRandomMove();
    const playerTwoMove = getRandomMove();
    const outcome = getOutcome(playerOneMove, playerTwoMove);
    updateDOM(playerOneMove, playerTwoMove, outcome);
  };
  
  const updateDOM = (moveOne, moveTwo, outcome) => {
  
    const changeTitle = document.querySelector("h1");
    changeTitle.textContent = "Update the heading";
    const playerOneImg = document.getElementById("player-one-move__name");
    const playerTwoImg = document.getElementById("player-two-move__name");
    playerOneImg.textContent = moveOne;
    playerTwoImg.textContent = moveTwo;
  
    const resultDisplay = document.querySelector("body");
    const result = document.createElement("p");
    result.textContent = outcome;
    resultDisplay.append(result);
    // There are some images you can use in the images directory
  };
  
  const playButton = document.getElementById("play-btn");
  playButton.addEventListener("click", playGame);
  