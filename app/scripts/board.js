Board = function(tilesToASide, tileSize) {
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