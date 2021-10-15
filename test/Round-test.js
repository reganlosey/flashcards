const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function () {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    deck = new Deck([card1, card2, card3]);
    round = new Round(deck)
  })

  it('should be a function', function () {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function () {
    expect(round).to.be.an.instanceof(Round);
  })

  it('should be able to display incorrect guess message', function () {
    expect(round.takeTurn('capybara')).to.equal('Incorrect!');
  })

  it('should be able to store incorrect guesses', function () {
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    expect(round.incorrectGuesses.length).to.equal(1);
  })

  it('should be able to calculate the percentage of correct guesses', function () {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('x');
    round.calculatePercentCorrect();
    expect(round.calculatePercentCorrect()).to.equal(33);
  })

  it('should be able to end the round', function () {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('x');
    round.calculatePercentCorrect();
    expect('**Round Over!** You answered 33 percent of the questions correctly!')
  })
})