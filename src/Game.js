const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
    this.deck;
    this.newRoundCards = [];
  }

  start() {
    this.createCards();
    this.createDeck();
    this.createNewRound();
    this.printMessage(this.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  createCards() {
    prototypeQuestions.forEach((cardToCreate) =>
      this.newRoundCards.push(new Card(cardToCreate.id, cardToCreate.question, cardToCreate.answers, cardToCreate.correctAnswer))
    )
  }

  createDeck() {
    this.deck = new Deck(this.newRoundCards)
    return this.deck;
  }

  createNewRound() {
    this.currentRound = new Round(this.deck);
    return this.currentRound;
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;