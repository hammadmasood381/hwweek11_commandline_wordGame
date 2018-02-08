var inquirer = require('inquirer');
var Word = require("./lib/word.js");
var wordlist = require("./lib/wordlist");

console.log("Welcome To My Word Game" + "\n");

var theGame = new Game(randomWord());
theGame.play();




//Game Constructor
function Game(word) {
    this.wordstring = word;
    this.maxturns = word.length * 2;
    this.turnstaken = 0;
    this.gameover = false;
    this.gamewon = false;
    this.word = new Word(word);
    this.play = function () {
        var self = this;
        if(self.turnstaken == self.maxturns) {
            self.gameover = true;
        }
        if (!self.gameover && !self.gamewon) {
            console.log(self.maxturns - self.turnstaken + " Turns Left" + "\n");
            inquirer.prompt({
                type: "input",
                name: "guess",
                message: "enter guess (char)",
                validate: function (input) {
                    if (input.match("[a-z]") && input.length < 2 && input.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }).then(function (answers) {
                self.word.guesser(answers.guess);
                console.log(self.word.makestring() + "\n");
                self.turnstaken++;
                if(self.wordstring == self.word.makestring()) {
                    self.gamewon = true;
                }
                self.play();
            });

        }
        else {
            console.log("Game Over");
            if (this.gamewon) {
                console.log("You Won");
            }
            else {
                console.log("You Lost");
            }
        }
    }
}

//Helper Functions
function randomWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)].toLowerCase();
}

