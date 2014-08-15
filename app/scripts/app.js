App = function(board) {
  this.board = board;
};


App.prototype.render = function() {

  var htmlString = '<table>';
  var middle = ((Math.round(board.tilesToASide/2))-1);
  var limit = board.tilesToASide;

  for(var tr = 0; tr < board.tilesToASide; tr++) {
    htmlString += '<tr>';
    for (var td = 0; td < board.tilesToASide; td++) {

      //condition for orange middle tile
      if((tr == middle)&&(td == middle)){
        htmlString += '<td id="middle"></td>';
      }


      //condition for x3 bonus tiles, outer border
      else if((tr == 0) || (tr == (limit-1)) || (td == 0) || (td == (limit-1))) {
        htmlString += '<td id="bonusTimes3">x3</td>';
      }


      //condition for x2 bonus tiles, inner border, top and bottom row
      // (Why the heck do I need the td -= 1; ?! It works, but I do not know why.)
      else if(((limit >=9) && (tr == middle+3 && td == middle -3)) || ((tr == middle-3 && td == middle -3))) {
        while (td < middle+4) {
          td++;
          htmlString += '<td id="bonusTimes2">x2</td>';
        }
        td -= 1;
      }

      // condition for x2 bonus tiles, inner border, left and right columns
      else if(/* left side */(td == (middle-3) || /* right side */td == (middle+3)) &&
        /* condition, so the tiles don't fill out the entire column*/
        (!(tr<=(middle-3)) && !(tr>=(middle+3)))) {
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
  console.log(" " + htmlString + " ");
};
