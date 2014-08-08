App = function(board) {
  this.board = board;
};


App.prototype.render = function() {

  var middle = ((Math.round(board.tilesToASide/2))-1);
  var htmlString = '<table>';
  var r = 0;
  var v = 0;
  for(var tr = 0; tr < board.tilesToASide; tr++) {
    htmlString += '<tr>';
    for (var td = 0; td < board.tilesToASide; td++) {
      if((tr == middle)&&(td == middle)){
        htmlString += '<td id="middle"></td>';
      }
      else if(tr == 0) {
        htmlString += '<td id="bonusTimes3"></td>';
      }
      else if(tr == (board.tilesToASide-1)) {
        htmlString += '<td id="bonusTimes3"></td>';
      }
      else if(td == 0) {
        htmlString += '<td id="bonusTimes3"></td>';
      }
      else if(td == (board.tilesToASide-1)) {
        htmlString += '<td id="bonusTimes3"></td>';
      }
      else if(tr == middle-2 && td == middle -2) {
       r = tr;
        while (r < middle+3) {
          r++;
          htmlString += '<td id="bonusTimes2"></td>';
        }
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
  console.log(htmlString);
};