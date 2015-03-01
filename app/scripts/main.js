var board = new Board(15);

board.setRingPattern();

function placeTokens(board) {
  var symbols = ['ferret', 'star', 'triangle', 'circle', 'square'],
      colors = ['red', 'blue', 'green', 'red', 'yellow'];

  for(var symbolIndex = 0; symbolIndex < symbols.length; symbolIndex++) {
    var symbol = symbols[symbolIndex];

    for(var colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      var color = colors[colorIndex],
          token = new Token(color, symbol);

      // Just for readability; these will increase to fill the upper-left 36 tiles of the board
      var row = symbolIndex, column = colorIndex;
      board.placeToken(row, column, token);
    }
  }
}

// Place the tokens
placeTokens(board);

var app = new App(board);
app.render();
