App = function(board) {
  this.board = board;
};


App.prototype.render = function() {
  var htmlString = '<table>';

  for(var tr = 0; tr < this.board.tilesToASide; tr++) {
    htmlString += '<tr>';
    for (var td = 0; td < this.board.tilesToASide; td++) {
      var tile = this.board.tiles[tr][td];
      if(tile.middle) {
        htmlString += '<td id="middle"></td>';
      }
      else if(tile.multiplier == 3) {
        htmlString += '<td id="bonusTimes3">x3</td>';
      }
      else if(tile.multiplier == 2) {
        htmlString += '<td id="bonusTimes2">x2</td>';
      }
      else {
        htmlString += '<td id="normal"></td>';
      }
    }
    htmlString += '</tr>';
  }
  htmlString += '</table>';

  var insertionPoint = $('#insertion-point');
  insertionPoint.html(htmlString);
//  console.log(" " + htmlString + " ");
};
