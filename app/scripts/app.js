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
      var tile = this.board.tiles[tr][td];
      if(tile.middle) {
        htmlString += '<td class="tile middle"></td>';
      }
      else if(tile.multiplier == 3) {
        htmlString += '<td class="tile bonus-times-3">x3</td>';
      }
      else if(tile.multiplier == 2) {
        htmlString += '<td class="tile bonus-times-2">x2</td>';
      }
      else {
        htmlString += '<td class="tile normal"></td>';
      }
    }
    htmlString += '</tr>';
  }
  htmlString += '</table>';

  var insertionPoint = $('#insertion-point');
  insertionPoint.html(htmlString);
}
