const expect = chai.expect;

describe("Card Deck", function() {
    describe("createDeck", function() {
        it("should take the suits and name of cards and create an array called this deck", function() {
        // Arrange and Act
        const suits = ["Spades", "Diamonds", "Clubs", "Hearts"  ];
        const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.deck = [];

        for(let suit in suits) {
            for(let card in cards) {
                this.deck.push(`${cards[card]} of ${suits[suit]}`
                )}; 

        // Assert
        expect(this.deck[0]).to.equal('A of Spades'); //true
        expect(this.deck[1]).to.equal('2 of Spades'); //true


            //this expect statements need Plug-in but will not work. It is not able to work with require. note: found that 'require' is not working. needs more research
                    // const chai = require('chai');
                    // const assertArrays = require('chai-arrays');
                    // chai.use(assertArrays);
            // expect(this.deck).to.be.an('array');
            // expect(this.deck).to.be.equalTo(52);
        }})
    })
})