// business logic
function Player(name) {
  this.playerName = name;
  this.turnScore = 0;
  this.playerScore = 0;
}

function Die(sides) {
  this.sides = [1, 2, 3, 4, 5, 6]
}

function TurnPlayer(player1, player2, turnCount) {
  if (turnCount % 2 === 0) {
    player2Turn = true;
  } else {
    player1Turn = true;
  }
}

// front end logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

  var turnScore = 0;
  var playerScore = 0;
  var turnCount = 1;

  var player1Name = $("input#player1Name").val();
  var player1 = new Player(player1Name, turnScore, playerScore);

  var player2Name = $("input#player2Name").val();
  var player2 = new Player(player2Name, turnScore, playerScore);

  // console.log(player1);
  // console.log(player2);
  });
});
