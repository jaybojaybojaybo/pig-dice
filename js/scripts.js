// business logic

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

Die.prototype.rollDie = function(player) {
  var rolledSide = this.sides[Math.floor(Math.random() * this.sides.length)];
  console.log(rolledSide);
  if (rolledSide === 1) {
    player.turnScore = 0;
  } else {
    player.turnScore += rolledSide;
  }
  return rolledSide;
}

Player.prototype.checkForWin = function(player) {
  if (this.playerScore >= 100) {
    return true;
  } else {
    return false;
  }
}

// front end logic
$(document).ready(function() {
  var player1;
  var player2;
  var turnCount = 1;
  var currentPlayer;
  var rolledSide;

  $("form").submit(function(event) {
    event.preventDefault();

    var player1Name = $("input#player1Name").val();
    player1 = new Player(player1Name);
    $("#player1Info").show();
    $("#player1TurnScore").text(" " + player1.turnScore);
    $("#player1PlayerScore").text(" " + player1.playerScore);

    var player2Name = $("input#player2Name").val();
    player2 = new Player(player2Name);
    $("#player2Info").show();
    $("#player2TurnScore").text(" " + player2.turnScore);
    $("#player2PlayerScore").text(" " + player2.playerScore);
  });

  $("#rollButton").click(function(){
    var currentPlayer = TurnPlayer(player1, player2, turnCount)
    var rolledSide = die.rollDie(currentPlayer);
    $("#player1TurnScore").text(" " + player1.turnScore);
    $("#player2TurnScore").text(" " + player2.turnScore);
    $("#rollScore").text(" " + rolledSide);

    if (currentPlayer.turnScore === 0) {
      turnCount++;
    }
    console.log(turnCount);
    console.log(player1);
    console.log(player2);
  });

  $("#holdButton").click(function() {
    var currentPlayer = TurnPlayer(player1, player2, turnCount)
      currentPlayer.playerScore += currentPlayer.turnScore;
      $("#player1PlayerScore").text(" " + player1.playerScore);
      $("#player2PlayerScore").text(" " + player2.playerScore);
      currentPlayer.turnScore = 0;
      $("#player1TurnScore").text(" " + player1.turnScore);
      $("#player2TurnScore").text(" " + player2.turnScore);
      turnCount++;

    var win = currentPlayer.checkForWin();
      if (currentPlayer === player1 && win === true) {
        $("#player1Win").show();
      } else if (currentPlayer === player2 && win === true) {
        $("#player2Win").show();
      }

    console.log(currentPlayer);
  })
});
