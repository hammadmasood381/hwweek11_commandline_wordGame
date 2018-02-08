function Letter(letchar) {
    this.letterchar = letchar.toLowerCase();
    this.guessed = false;
    this.letterstatus = function() {
        if(this.guessed) {
            return this.letterchar;
        }
        else {
            return "_";
        }
    }
    this.checkguess = function(Char) {
        var char = Char.toLowerCase();
        if(char === this.letterchar) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;