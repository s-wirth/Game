App = function(board) {
  this.board = board;
};


App.prototype.render = function() {
  this.drawBoard();
  // this.drawPlayerHand();
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

  var insertionPoint = $('#insertion-point');
  insertionPoint.html(htmlString);
}

App.prototype.drawToken = function(token) {
  return '<div class="token ' + token.color + ' ' + token.symbol + '"></div>';
}
