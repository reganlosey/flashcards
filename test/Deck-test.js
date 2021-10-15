const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function () {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function () {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
  })
  
  it('should be a function', function () {

    expect(Deck).to.be.a('function');
  })

  it('should be able to count the cards in the deck', function () {
    deck.countCards();
    expect(deck.cards.length).to.equal(3);
  })
})