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
    });

    it("should set its properties to what it's given", function() {
      var board = new Board(21, 34);
      expect(board.tilesToASide).toBe(21);
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

  describe('.setRingPattern', function() {
    var board,
        tilesToASide, middle;

    beforeEach(function() {
      tilesToASide = 21;
      middle = Math.round(tilesToASide/2) - 1;

      board = new Board(tilesToASide);

      subject = function() {
        board.setRingPattern();
      };
    });

    it('should mark the middle tile', function() {
      subject();
      expect(board.tiles[middle][middle].middle).toBe(true);
    });

    function expectTilesInRowToHaveMultiplier(row, multiplier, limits) {
      var leftColumn = limits ? limits.from : 0,
          rightColumn = limits ? limits.to + 1 : tilesToASide;

      for(var column = leftColumn; column < rightColumn; column++) {
        expect(board.tiles[row][column].multiplier).toBe(multiplier);
      }
    }

    function expectTilesInColumnToHaveMultiplier(column, multiplier, limits) {
      var topRow = limits ? limits.from : 0,
          bottomRow = limits ? limits.to + 1 : tilesToASide;

      for(var row = topRow; row < bottomRow; row++) {
        expect(board.tiles[row][column].multiplier).toBe(multiplier);
      }
    }

    it('should make the outer tiles of the board 3x multipliers', function() {
      subject();
      expectTilesInRowToHaveMultiplier(0, 3);
      expectTilesInRowToHaveMultiplier(tilesToASide - 1, 3);
      expectTilesInColumnToHaveMultiplier(0, 3);
      expectTilesInColumnToHaveMultiplier(tilesToASide - 1, 3);
    });

    it('should make an inner ring 3 tiles from the center of 2x multipliers', function() {
      subject();
      expectTilesInRowToHaveMultiplier(middle - 3, 2, { from: middle - 3, to: middle + 3 });
      expectTilesInColumnToHaveMultiplier(middle - 3, 2, { from: middle - 3, to: middle + 3 });
      expectTilesInRowToHaveMultiplier(middle + 3, 2, { from: middle - 3, to: middle + 3 });
      expectTilesInColumnToHaveMultiplier(middle + 3, 2, { from: middle - 3, to: middle + 3 });
    });

    it('should leave all the other tiles as normal tiles', function() {
      expect(board.tiles[middle][middle].multiplier).toBeUndefined();
      expect(board.tiles[middle + 1][middle + 1].multiplier).toBeUndefined();
      expect(board.tiles[middle + 4][middle + 4].multiplier).toBeUndefined();
      expect(board.tiles[tilesToASide - 2][tilesToASide - 2].multiplier).toBeUndefined();
    });

  });

});