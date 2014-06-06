function determineWinner(move1, move2){
  if (move1 === move2){
    return false;
  }
  if (move1 === 'rock'){
    if (move2 === 'paper'){
      return move2;
    } else if (move2 === 'scissors'){
      return move1;
    }
  }
  if (move1 === 'paper'){
    if (move2 === 'rock'){
      return move1;
    } else if (move2 === 'scissors'){
      return move2;
    }
  }
  if (move1 === 'scissors'){
    if (move2 === 'rock'){
      return move2;
    } else if (move2 === 'paper'){
      return move1;
    }
  }
}

function endGame(player1, player2){
  if (player1.wins === 3 || player2.wins === 3){
    console.log('the game has ended and will start anew');
    player1.wins = 0;
    player2.wins = 0;
  }
}

function rpsMatch(player1, player2){
  if (determineWinner(player1, player2) === player1){
    player1.wins += 1;
  } else if (determineWinner(player1, player2) === player2) {
    player2.wins += 1;
  } else {
    player1.wins = 0;
    player2.wins = 0;
  }
  endGame(player1, player2);
}

function Player(name){
  this.name = name;
  this.wins = 0;
  this.choice = undefined;
}

Player.prototype.choose = function(){
  play = ['rock', 'paper', 'scissors'];
  this.choice = play[Math.floor(Math.random) * 3];
}

$(function(){
  var player1 = new Player('1');
  var player2 = new Player('2');

  $('.pick-button').click(function(e){
    player1.choice = e.target.innerText.toLowerCase();
    player2.choose();
    rpsMatch(player1, player2);
  })
})
