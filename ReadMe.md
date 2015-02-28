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
