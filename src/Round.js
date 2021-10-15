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

// total turn is 3
// 2 correct guesses
//1 total incorrect guesses
// should be 1 divided by 3 which equals 33.3333 etc. We're on the right track

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