Board = function(tilesToASide) {
  this.tilesToASide = tilesToASide;
  var tiles = [];
  for(var i = 0; i < tilesToASide; i++){
    tiles[i] = [];
  }
  for(var i = 0; i < tilesToASide; i++) {
    for (var j = 0; j < tilesToASide; j++) {
      tiles[i][j] = new Tile();
    }
  }

  this.tiles = tiles;
};

Board.prototype.placeToken = function(row, col, token) {
  if(this.tiles[row][col].token) throw 'full!!!';
  this.tiles[row][col].token = token;
};

Board.prototype.setRingPattern = function() {
  var middle = ((Math.round(this.tilesToASide/2))-1),
      limit = this.tiles.length,
      widthOfRing = 7, // 3 on each side plus the 1 tile in the middle
      minimumBoardSizeForInnerBonusTileRing = widthOfRing + 2, // 1 for space, 1 for the outer ring
      topOfRing = middle - 3, // These additions/subtractions should be derived from widthOfRing
      bottomOfRing = middle + 3,
      leftSideOfRing = middle - 3,
      rightSideOfRing = middle + 3;

  this.tiles[middle][middle].middle = true;

  for(var tr = 0; tr < this.tiles.length; tr++) {
    for (var td = 0; td < this.tiles.length; td++) {
      //condition for x3 bonus tiles, outer border
      if((tr == 0) || (tr == (limit-1)) || (td == 0) || (td == (limit-1))) {
        this.tiles[tr][td].multiplier = 3;
      }

      // At the beginning of the top or bottom row of the inner ring, output a number of 2x bonus tiles equal to the
      // width of the ring.
      else if( this.tilesToASide >= minimumBoardSizeForInnerBonusTileRing && // Board is large enough to draw the ring
                tr == topOfRing && td == leftSideOfRing || // We're at the top-left corner of the ring
                tr == bottomOfRing && td == leftSideOfRing ) // We're at the bottom-left corner of the ring
      {
        for(var i = 0; i < widthOfRing; i++) {
          this.tiles[tr][td + i].multiplier = 2;
        }
        td = rightSideOfRing;
      }

      // condition for x2 bonus tiles, inner border, left and right columns
      else if(/* left side */(td == (middle-3) || /* right side */td == (middle+3)) &&
        /* condition, so the tiles don't fill out the entire column*/
        (!(tr<=(middle-3)) && !(tr>=(middle+3)))) {
        this.tiles[tr][td].multiplier = 2;
      }
    }
  }
};