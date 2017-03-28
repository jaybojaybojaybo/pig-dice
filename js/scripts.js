// business logic
function Player(name, turnScore, playerScore) {
  this.playerName = name;
  this.turnScore = turnScore;
  this.playerScore = playerScore;
}

function Die(sides) {
  sides = [1, 2, 3, 4, 5, 6]
}

function TurnPlayer(player1, player2, turnCount) {
  if (turnCount % 2 === 0) {
    player2Turn = true;
  } else {
    player1Turn = true;
  }
}

// front end logic

var name;
var turnScore = 0;
var playerScore = 0;
var turnCount = 1;
