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
