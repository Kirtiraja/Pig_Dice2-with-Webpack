export function Player(turn) {
  this.roll = 0;
  this.turnScore = 0;
  this.totalScore = 0;
  this.turn = turn;
};

Player.prototype.throwDice = function() {
  if (this.turn === true) {
    this.roll = Math.floor(6*Math.random())+1;

  } else {
    this.turnScore = 0;
    this.roll = 0;
  }
}

Player.prototype.checkRoll = function(player) {
  if (this.turn === true) {
    if (this.roll === 1) {
      this.turnScore = 0;
      this.turn = false;
      alert("You rolled a 1. Your turn is over.");
      this.roll = 0;
      player.turn = true;
    } else {
      this.turnScore += this.roll
    }
  }
}

Player.prototype.hold = function(player) {
  if (this.turn === true) {
    this.totalScore += this.turnScore;
    this.turnScore = 0;
    player.turn = true;
    this.turn = false;
  } else {
    player.totalScore += player.turnScore;
    player.turnScore = 0;
    this.turn = true;
    player.turn = false;
  }
}

Player.prototype.computerEasy = function(player) {
  if (this.turn === true) {
    if (this.roll === 1) {
      this.turn = false;
      player.turn = true;
      this.roll = 0;
      this.turnScore = 0;
    } else {
      this.turnScore += this.roll;
      console.log(this.roll);
      this.roll = Math.floor(6*Math.random())+1;
      if (this.roll === 1) {
        this.turn = false;
        player.turn = true;
        console.log(this.roll);
        this.roll = 0;
        this.turnScore = 0;
      } else {
        this.turnScore += this.roll;
        this.totalScore += this.turnScore;
        console.log(this.roll);
        this.turn = false;
        player.turn = true;
        alert("YOUR TURN HUMAN! BEEP BOOP");
      }
    }
  }
}

Player.prototype.winner = function(player) {
  if (this.totalScore >= 20) {
    alert("Congratulations " + player + " you win!");

  } else {
    return false;
  }
}
