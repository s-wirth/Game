App = function(board) {
  this.board = board;
};


App.prototype.render = function() {

  var middle = ((Math.round(board.tilesToASide/2))-1);
  var htmlString = '<table>';
  var limit = board.tilesToASide;

  for(var tr = 0; tr < board.tilesToASide; tr++) {
    htmlString += '<tr>';
    var l = 0;
    var v = 0;
    for (var td = 0; td < board.tilesToASide; td++) {
      if((tr == middle)&&(td == middle)){
        htmlString += '<td id="middle"></td>';
      }
      else if(tr == 0) {
        htmlString += '<td id="bonusTimes3">x3</td>';
      }
      else if(tr == (board.tilesToASide-1)) {
        htmlString += '<td id="bonusTimes3">x3</td>';
      }
      else if(td == 0) {
        htmlString += '<td id="bonusTimes3">x3</td>';
      }
      else if(td == (board.tilesToASide-1)) {
        htmlString += '<td id="bonusTimes3">x3</td>';
      }

      else if((limit >=11) && (tr == middle-2 && td == middle -2)) {
       var r = middle-2;
        while (r < middle+3) {
          htmlString += '<td id="bonusTimes2">x2</td>';
          r++;
          l++;
          console.log(" " + r + "r ");
          console.log(" " + l + "l ");
        }
      }
      else if((limit >=11) && (tr == middle+2 && td == middle -2)) {
        r = middle-2;
        while (r < middle+3) {
          htmlString += '<td id="bonusTimes2">x2</td>';
          l++;
          r++;
          console.log(" " + r + "r ");
          console.log(" " + l + "l ");
        }

      }
      else if(td == (middle-2) && (!(tr<=(middle-2)) && !(tr>=(middle+2)))) {
        htmlString += '<td id="bonusTimes2">x2</td>';
      }
      else if(td == (middle+2) && (!(tr<=(middle-2)) && !(tr>=(middle+2)))) {
        htmlString += '<td id="bonusTimes2">x2</td>';
      }
      else if((v+l)<=(limit-3)) {
        //if the board is smaller than
          htmlString += '<td id="normal"></td>';
          v++;
        console.log(" " + v + "v ");
        }
      else {
      }
    }

    htmlString += '</tr>';
  }
  htmlString += '</table>';



  var insertionPoint = $('#insertion-point');
  insertionPoint.html(htmlString);
  console.log(" " + htmlString + " ");
};