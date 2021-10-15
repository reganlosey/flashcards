const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    this.turns++
    this.currentCard = this.deck[this.turns];
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.unshift(newTurn.card.id);
    } else {
      this.correctGuesses += 1
    }
    return newTurn.giveFeedback();
  }
  
  calculatePercentCorrect() {
    var guessSum = this.correctGuesses - this.incorrectGuesses.length;
    return (Math.floor(guessSum/this.turns * 100));
  }

  endRound(){
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()} percent of the questions correctly!`)
    return `**Round Over!** You answered ${this.calculatePercentCorrect()} percent of the questions correctly!`
  }
}



module.exports = Round;