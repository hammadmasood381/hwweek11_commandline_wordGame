var Letter = require("./letter.js")

function Word(wordtouse) {
    this.letters = arrayfromword(wordtouse);
    this.makestring = function() {
        var string = "";
        for(var i = 0; i < this.letters.length; i++) {
            string += this.letters[i].letterstatus();
        }
        return string;
    }
    this.guesser = function(char) {
        for(var i = 0; i < this.letters.length; i++) {
            this.letters[i].checkguess(char);
        }
    }
}

function arrayfromword(word) {
    var array = [];
    for(var i = 0; i < word.length; i++) {
        array.push(new Letter(word[i]));
    }
    return array;
}

module.exports = Word;