# LuckyMoose

A board game where opponents take turns to lay tiles which contribute to their
score, similar to BoardRush.

## System Dependencies

1. [nodenv](https://github.com/OiNutter/nodenv#basic-github-checkout)
2. [rbenv](https://github.com/sstephenson/rbenv#homebrew-on-mac-os-x)

## Getting Started

1. Clone the project (and `cd` into it)

  `git clone git@github.com:s-wirth/Game.git && cd Game`

2. Install Ruby

   `rbenv install $(cat .ruby-version)`

4. Install Ruby dependencies

   `bundle install`

3. Install NodeJS

   `nodenv install $(cat .node-version)`

5. Install NodeJS dependencies

  `npm install`

6. Install Grunt and Bower

   `npm install -g grunt-cli bower`

7. Rehash nodenv (only necessary to keep running in the same shell - you won't need to do this again)

   `nodenv rehash`

6. Install JavaScript dependencies

  `bower install`

## Definitions:

- Tile: a space on the Board which may be occupied by a Token.
- Token: a coloured playing piece depicting a symbol. There are six colours and six symbols.
- Token Pool: the set of Tokens from which the Players' Hands are drawn.
- A Line: is a sequence of adjacent Tokens, horizontal or vertical.
- Board: an n x n matrix of tiles.
- Hand: the group of tokens owned by a Player. Each player's Hand is visible only to that Player.
- Player: a participant in the game.

## Rules
  - At the beginning of the game, the Token Pool is populated with n sets of Tokens, where each set includes one Token of each colour and symbol combination.
  - Each Player is allocated a Hand of 6 Tokens which are removed from the Pool.
  - Each Player takes it in turn to lay a number of Tokens from their Hand on Tiles on the Board, which:
    - must be laid on unoccupied Tiles,
    - must be adjacent to each other, horizontally or vertically (but not both),
    - constitute part of a Line (see the following rules), and
    - on all but the first turn, must be adjacent to at least one Token previously placed on the board.
  - A Line:
    - may not contain two identical Tokens (same colour and symbol), and
    - must contain only Tokens which share either colour or symbol.
  - After they lay their tiles:
    - the Player's score is incremented by the value of the Lines created by the tiles they laid,
    - they are allocated Tokens from the Pool until their hand is restored to its original size, or as large as possible until the Pool is exhausted.
  - The first Line laid must include a Token occupying the center Tile.
  - Instead of laying tiles, a Player may opt to exchange some subset of their Hand for randomly selected Tokens from the Pool and forfeit their turn.
  - If a Player cannot lay any of their Tokens, and opts not to exchange any of them (or no unallocated Tokens remain), they must forfeit their turn.
  - If, at the end of their turn, a Player has emptied their Hand and no Tokens remain, the game ends and the Player receives an additional 6 points.
  - At the end of the game, the winner is the Player with the highest score.

## Scoring
  - A Player receives points for each Line created by the Tokens they laid.
  - "Created Lines" are calculated as the minimum set of Lines including all Tokens laid by the Player, where:
    - a Line includes at least 2 tiles (i.e. in a single horizontal or vertical Line of n Tokens, the complete set of Tokens is counted as one Line, and individual Tokens are *not* counted as orthogonally-oriented Lines of length 1), and
    - each Line includes at least one previously-laid Token.
  - For each Line created by the Player's Tokens, they receive:
    - 2 points per Token in the Line, including previously-laid Tokens, and
    - if a Line contains a full complement of Tokens (by colour or symbol), the value of the line is increased by 12 (prior to applying the bonus multiplier described below), and
    - if a (newly-laid) Token is laid on a tile with a bonus multiplier, the value of any Line created which includes that Token is multiplied by the value of the bonus multiplier.
