describe("Rock, Paper Scissors", function(){
  it("paper beats rock", function(){
    var winningMove = determineWinner('paper', 'rock');
    expect(winningMove).toEqual('paper');
  })
  it("rock beats scissors", function(){
    var winningMove = determineWinner('rock', 'scissors');
    expect(winningMove).toEqual('rock');
  })
  it("scissors beats paper", function(){
    var winningMove = determineWinner('scissors', 'paper');
    expect(winningMove).toEqual('scissors');
  })
  it("two of the same moves is a draw", function(){
    var winningMove = determineWinner('scissors', 'scissors');
    expect(winningMove).toEqual(false);
  })
})
