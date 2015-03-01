App = function() {
  this.game = new Game(15)
  this.board = this.game.board;

  this.game.start();
};

App.prototype.render = function() {
  var board = this.drawBoard();
  $('.board-insertion-point').html(board);

  var player1Hand = this.drawPlayerHand(this.game.players[0].hand);
  $('.player-1-hand-insertion-point').html(player1Hand);
  var player2Hand = this.drawPlayerHand(this.game.players[1].hand);
  $('.player-2-hand-insertion-point').html(player2Hand);
};

App.prototype.drawBoard = function() {
  var htmlString = '<table>';

  for(var tr = 0; tr < this.board.tilesToASide; tr++) {
    htmlString += '<tr>';
    for (var td = 0; td < this.board.tilesToASide; td++) {
      var tile = this.board.tiles[tr][td],
          token = tile.token,
          tileClass,
          multiplierString = '',
          tokenString = '';

      if(tile.middle) {
        tileClass = 'middle';
      }
      else if(tile.multiplier == 3) {
        tileClass = 'bonus-times-3';
      }
      else if(tile.multiplier == 2) {
        tileClass = 'bonus-times-2';
      }
      else {
        tileClass = 'normal';
      }

      if( tile.token ) {
        tokenString = this.drawToken(token);
      }

      htmlString += '<td class="tile ' + tileClass + '">' +
        tokenString +
      '</td>';
    }
    htmlString += '</tr>';
  }
  htmlString += '</table>';

  return htmlString;
}

App.prototype.drawToken = function(token) {
  return '<div class="token ' + token.color + ' ' + token.symbol + '"></div>';
}

App.prototype.drawPlayerHand = function(hand) {
  var htmlString = '<ul>';

  for( var i = 0; i < hand.length; i++ ) {
    var token = hand[i];
    htmlString += '<li>' +
      App.prototype.drawToken(token) +
    '</li>';
  }

  htmlString += '</ul>';
  return htmlString;
}
