App = function(board) {
  this.board = board;
};

App.prototype.render = function() {
  // How to create an HTML element
  var headerElement = $('<h1>Hi Sophie :)</h1>');

  var htmlString = '<table>';
  for(var i = 0; i < board.tilesToASide; i++) {
    htmlString += '<tr>';
    for (var j = 0; j < board.tilesToASide; j++) {
      htmlString += '<td></td>';
    }
    htmlString += '</tr>';
  }
  htmlString += '</table>';



  // How to find an element on the page (using a CSS selector)
  var insertionPoint = $('#insertion-point');

  // How to replace the content of an element with HTML you've created
  insertionPoint.html(htmlString);
  console.log(htmlString);
  // Your mission, should you choose to accept it, is to render the board you've been given
  // on the page. You have the building blocks you need:
  //   - You can create any HTML element by passing it as a string to the dollar function ($)
  //   - You can find an HTML element that exists on the page, using $('#any.css .selector')
  //   - You can insert any HTML element in any other HTML element, using someElement.html(foo)
  // (More information on these and other methods is available at http://api.jquery.com/html)
  //
  // Your board must have:
  //   - The given number of rows and columns (tilesToASide)
  //   - A visibly different center tile
};