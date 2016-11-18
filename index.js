/*
  The convention with Node projects is to use `index.js` as the jumping-off
  point for the application. If we were building a larger, more integrated
  Scrabble application, we would bring the various modules/objects we made into
  this file and kick off whatever functions were necessary to run the app.

  We're focusing on learning the module pattern and writing basic JavaScript classes  now, so
  we won't be bringing anything into this file. Later, we may make good
  use of this file.
*/
var Scrabble = function(){
  this.letterScore = {
   "A": 1,"E": 1,"I": 1,"O": 1,"U": 1,"L": 1,"N": 1,"R": 1,"S": 1,"T": 1,
   "D": 2,"G": 2,"B": 3,"C": 3,"M": 3,"P": 3,
   "F": 4,"H": 4,"V": 4,"W": 4,"Y": 4,"K": 5,"J": 8,"X": 8,"Q": 10,"Z": 10};
   this.tiles = ["D","L","S","U","D","L","S","U","D","L","S","U","D","L","S","U","G","G","G","Q","J","K","X","Z","M","B","C","F","H","V","W","Y","P","M","B","C","F","H","V","W","Y","P","E","E","E","E","E","E","E","E","E","E","E","E","I","I","I","I","I","I","I","I","I","O","O","O","O","O","O","O","O","R","R","R","R","R","R","T","T","T","T","T","T","N","N","N","N","N","N"];
};

/////////////////////////tile functions//////////////////////////////////////////////////

//this function shall shuffle the tiles
Scrabble.prototype.shuffle = function(){
    for (let i = this.tiles.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [this.tiles[i - 1], this.tiles[j]] = [this.tiles[j], this.tiles[i - 1]];
    }
    console.log(this.tiles);
    return this.tiles;
};

//this function shall draw tiles from the TileBag after each play
Scrabble.prototype.drawTiles = function(num){
  this.tilesDrawn = tilesDrawn;
  this.tileBag.pop(num); //'tileBag' comes from the instanciation of a player, in this case scrabble.
  return this.tilesDrawn;
};

//this function shall return the number of tiles remaining in the bag
Scrabble.prototype.remainingTiles = function(){
  console.log(this.tileBag.length);
  return this.tileBag.length;
};

/////////////////////////////Scoring Functions////////////////////////////////////////////

// this function shall allocate a 50pt bonus for words of 7 characters
Scrabble.prototype.bonus = function(word){
  this.word = word;
  if(this.word.length === 7){
    this.total += 50;}
  };


// this function shall score each played word.
Scrabble.prototype.score = function(word) {
  var total = 0;
  this.word = (word.toUpperCase());
  for (let current of this.word){
    total = total + this.letterScore[current];
}
    console.log(total);
    return total;

};

//this method needs a few things before itll actually be functional.
//this function shall determine the highest scoring word of the game
Scrabble.prototype.highestScore = function (arrayOfWords) {
  // key = score, value = word
  this.scores = {};
  //the array all the words are shoveled into once played
  this.arrayOfWords = arrayOfWords;
  // iterate through the list of words, if the score of the word is already included as a key in the hash, add the word to the array of values, otherwise add the score as a new key and the word as its value.
  for (let current of this.arrayOfWords){
  //if the score is already a key in scores, shovel the word into the array of its values
  if ((score(current) in this.scores)){
    this.scores[score(current)].push(current);}
  else {
    this.scores[score(word)] = [word];}
}};

arrayOfWords = [30 , 60, 900, 22, -9, 21];
Math.max([array]);

Scrabble.prototype.scoreMax = function (arrayOfWords) {
  this.arrayOfWords = arrayOfWords;
  console.log(Math.max.apply(null, this.arrayOfWords.keys));
  return Math.max.apply(null, this.arrayOfWords.keys);
};


/////////////////////////////// This is the beginning of the player functions ///////////////////////

//this shall be the player Constructor fxn
var Player = function(name){
  this.name = name;
  this.plays = plays;
  this.tiles = tiles;
  this.totalScore = 0;
};

Player.prototype.drawTiles = function (tile_bag) {
  num_tiles = 7 - this.tiles.length;
};

b = new Scrabble();
b.score("ZazZlE");
b.shuffle();



///////////////////////////////////////////////////////////////////////////////////////////

module.exports = Scrabble;
