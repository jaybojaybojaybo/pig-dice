// business logic
var turnScore = 0;
var playerScore = 0;
var turnCount = 1;

function Player(name) {
  this.playerName = name;
  this.turnScore = 0;
  this.playerScore = 0;
}

function Die(sides) {
  this.sides = [1, 2, 3, 4, 5, 6]
}

var die = new Die();

function TurnPlayer(player1, player2, turnCount) {
  if (turnCount % 2 === 0) {
    return player2;
  } else {
    return player1;
  }
}

Die.prototype.rollDie = function(turnCount, player) {
  var rolledSide = this.sides[Math.floor(Math.random() * this.sides.length)];
  console.log(rolledSide);
  if (rolledSide === 1) {
    player.turnScore = 0
    turnCount += 1;
  } else {
    player.turnScore += rolledSide;
  }
}

// front end logic
$(document).ready(function() {
  var player1;
  var player2;

  $("form").submit(function(event) {
    event.preventDefault();

  var player1Name = $("input#player1Name").val();
  player1 = new Player(player1Name, turnScore, playerScore);

  var player2Name = $("input#player2Name").val();
  player2 = new Player(player2Name, turnScore, playerScore);

  console.log(player1);
  console.log(player2);
  });

  $("#rollButton").click(function(){
    var currentPlayer = TurnPlayer(player1, player2, turnCount)
    die.rollDie(turnCount, currentPlayer);


    console.log(turnScore);
    console.log(player1);
    console.log(player2);
  })
});
