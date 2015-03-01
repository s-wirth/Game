window.Game = function(boardWidth) {
  this.board = new Board(boardWidth);
  this.board.setRingPattern();

  this.tokenPool = [];

  for(var symbolIndex = 0; symbolIndex < Token.SYMBOLS.length; symbolIndex++) {
    var symbol = Token.SYMBOLS[symbolIndex];

    for(var colorIndex = 0; colorIndex < Token.COLORS.length; colorIndex++) {
      var color = Token.COLORS[colorIndex],
      token = new Token(color, symbol);
      this.tokenPool.push(token);
    }
  }

  this.tokenPool = _.shuffle(this.tokenPool);

  this.players = [
    { name: 'Player 1', hand: [] },
    { name: 'Player 2', hand: [] }
  ];
}

Game.prototype.start = function() {
  for( var i = 0; i < this.players.length; i++ ) {
    var player = this.players[i],
        hand = player.hand;

    this.refillHand(hand);
  }
}

var HAND_SIZE = 6;
Game.prototype.refillHand = function(hand) {
  while( hand.length < HAND_SIZE && this.tokenPool.length > 0 ) {
    hand.push( this.tokenPool.pop() );
  }
}
