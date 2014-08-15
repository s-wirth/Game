App = function(board) {
  this.board = board;
};


App.prototype.render = function() {

  var htmlString = '<table>';
  var middle = ((Math.round(board.tilesToASide/2))-1);
  var limit = board.tilesToASide;

  var widthOfRing = 7, // 3 on each side plus the 1 tile in the middle
      minimumBoardSizeForInnerBonusTileRing = widthOfRing + 2, // 1 for space, 1 for the outer ring
      topOfRing = middle - 3, // These additions/subtractions should be derived from widthOfRing
      bottomOfRing = middle + 3,
      leftSideOfRing = middle - 3,
      rightSideOfRing = middle + 3;

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

      // At the beginning of the top or bottom row of the inner ring, output a number of 2x bonus tiles equal to the
      // width of the ring.
      else if( board.tilesToASide >= minimumBoardSizeForInnerBonusTileRing && // Board is large enough to draw the ring
                tr == topOfRing && td == leftSideOfRing || // We're at the top-left corner of the ring
                tr == bottomOfRing && td == leftSideOfRing ) // We're at the bottom-left corner of the ring
      {
        for(var i = 0; i < widthOfRing; i++) {
          htmlString += '<td id="bonusTimes2">x2</td>';
        }
        td = rightSideOfRing;
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
