describe('Board', function() {

  var subject;

  describe('the constructor', function() {
    var tilesToASide;
    var tileSize;

    beforeEach(function() {
      tilesToASide = 5;
      tileSize = 10;
      subject = function() {
        return new Board(tilesToASide, tileSize);
      }
    });

    describe('the tiles array', function() {
      beforeEach(function() {
        subject = function() {
          var board = new Board(tilesToASide, tileSize);
          return board.tiles;
        }
      });

      it('should have the specified number of rows', function() {
        expect(subject().length).toBe(tilesToASide);
      });

      it('should have the specified number of columns in each row', function() {
        for(var i = 0; i < tilesToASide; i++)
          expect(subject()[i].length).toBe(tilesToASide);
      });

      it('should have a Tile in each row/column', function() {
        var tiles = subject();
        for(var row = 0; row < tilesToASide; row++) {
          for(var col = 0; col < tilesToASide; col++) {
            expect(tiles[row][col]).toEqual(jasmine.any(Tile));
          }
        }
      });
    });

    it("should set its properties", function() {
      var board = subject();
      expect(board.tilesToASide).toBe(tilesToASide);
      expect(board.tileSize).toBe(tileSize);
    });

    it("should set its properties to what it's given", function() {
      var board = new Board(21, 34);
      expect(board.tilesToASide).toBe(21);
      expect(board.tileSize).toBe(34);
    });
  });

  describe('.placeToken', function() {
    var board, tilesToASide,
        placedToken,
        row, col;

    beforeEach(function() {
      tilesToASide = 5;
      var tileSize = 20;
      board = new Board(tilesToASide, tileSize);

      row = 1; col = 2;
      placedToken = new Token('red', 'star');

      subject = function() {
        board.placeToken(row, col, placedToken);
      };
    });

    it('should place the token on the specified tile', function() {
      subject();
      expect(board.tiles[row][col].token).toBe(placedToken);
    });

    context('when the tile is already occupied', function() {
      beforeEach(function() {
        board.placeToken(row, col, placedToken);
      });

      it('should not place the token', function() {
        expect(subject).toThrow();
      });
    });

  });

});