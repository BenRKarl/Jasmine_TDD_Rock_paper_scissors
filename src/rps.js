function Player(name){
  this.name = name;
  this.wins = 0;
  this.choice = undefined;
}

Player.prototype.choose = function(){
  choices = ['rock', 'paper', 'scissors'];
  this.choice = choices[Math.floor(Math.random() * 3)];
}

function pickWinner(move1, move2){
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

function rpsMatch(player1, player2){
  if (pickWinner(player1.choice, player2.choice) === player1.choice){
    player1.wins += 1;
  } else if (pickWinner(player1.choice, player2.choice) === player2.choice) {
    player2.wins += 1;
  } else {
    player1.wins = 0;
    player2.wins = 0;
  }
  endGame(player1, player2);
}


function endGame(player1, player2){
  var winner = undefined;
  if (player1.wins === 3) {
    winner = 'You'; 
  } else {
    winner = 'Computer';
  }

  if (player1.wins === 3 || player2.wins === 3){
    var endGame = function(){
      alert(winner + ' won! The game has ended and will start anew');
    }     
    var resetScore = function(){
      player1.wins = 0;
      player2.wins = 0;
      $('.player1-score').html(player1.wins);
      $('.player2-score').html(player2.wins);      
      $('.player1-choice').empty();
      $('.player2-choice').empty();      
    }
    setTimeout(endGame, 1500);
    setTimeout(resetScore, 2000);
  }
}

$(function(){
  var player1 = new Player('1');
  var player2 = new Player('2');

  $('#start').on('click', function(){  
    $('.player1-score').html(player1.wins);
    $('.player2-score').html(player2.wins);
  })  

  $('.pick-button').on('click', function(e){
    player1.choice = e.target.innerText.toLowerCase();
    player2.choose();
    var match = rpsMatch(player1, player2);
    $('.player1-choice').html(player1.choice);
    $('.player2-choice').html(player2.choice);
    $('.player1-score').html(player1.wins);
    $('.player2-score').html(player2.wins);
  })
})
