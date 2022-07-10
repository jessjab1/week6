class CardDeck {
//creates the card deck and runs the methods inside the class
    constructor() {
    this.deck = [];
    this.createDeck();
    this.shuffleDeck();
    this.spiltDeck();

    }

    createDeck() {
        // creates the deck. looping through suits and pairing them with values
        const suits = ["Spades", "Diamonds", "Clubs", "Hearts"  ];
        const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.deck = [];

        for(let suit in suits) {
            for(let card in cards) {
                this.deck.push(`${cards[card]} of ${suits[suit]}`
                )};    
        }
    }  


    shuffleDeck() {
    //take two random locations within the deck and switch location to 'shuffle' deck
    //"shuffles" 1000 times
        for (let i = 0; i < 1000; i++) {
            let locationA = Math.floor((Math.random() * this.deck.length));
            let locationB = Math.floor((Math.random() * this.deck.length));
            let tmp = this.deck[locationA];

            this.deck[locationA] = this.deck[locationB];
            this.deck[locationB] = tmp;
        } return(this.deck);
    }



    spiltDeck() {
        // divides the deck between the two players.
        this.player1Deck = [];
        this.player2Deck = [];
        let result = '';
        for(let i = 0; i < this.deck.length; i++) {
            if(i % 2 === 0) {
               let result = this.player1Deck.push(this.deck[i]);
            } else {
                let result = this.player2Deck.push(this.deck[i]);
            }
        } return result;
    }
}
     

class GameOfWar {
    constructor () {
        this.ptsPlayer1 = 0;
        this.ptsPlayer2 = 0;
        this.gameDeck = new CardDeck();
    }
    start() {
        console.log("Welcome to the game of WAR!");
        ///Code to checking deck to be shuffled-- uncomment below sections to test--
            //  console.log(this.gameDeck);
            //  console.log(this.gameDeck.player1Deck);
            //  console.log(this.gameDeck.player2Deck);
             this.rounds();
     }

     rounds() {
        // rounds of the game. results of rounds are tab over to make it easier to see.
        for(let i = 0; i < 26; i++){
            console.log("Player One: " + this.gameDeck.player1Deck[i] + "   vs   Player Two: " + this.gameDeck.player2Deck[i]);
            if(this.cardValues(this.gameDeck.player1Deck[i].charAt(0)) > this.cardValues(this.gameDeck.player2Deck[i].charAt(0))){
                this.ptsPlayer1 ++;
                console.log("     Player 1 wins!");
            } else if (this.cardValues(this.gameDeck.player1Deck[i].charAt(0)) < this.cardValues(this.gameDeck.player2Deck[i].charAt(0))){
                this.ptsPlayer2 ++;
                console.log("     Player 2 wins!");
            } else if (this.cardValues(this.gameDeck.player1Deck[i].charAt(0)) == this.cardValues(this.gameDeck.player2Deck[i].charAt(0))) { 
                //reseting points to 0 when players tie
                this.ptsPlayer1 = 0;
                this.ptsPlayer2 = 0;
                console.log("      Tie! points are reset!");
            }
        } console.log("Scores! Player 1: " + this.ptsPlayer1 + " Player 2: " + this.ptsPlayer2);
    }

    cardValues(cardName){
        // matches values to card name
        let values;
        switch(cardName) {
            case 'A' :
                values = 1;
                break;
            case '2' :
                values = 2;
                break;
            case '3':
                values = 3;
                break;
            case '4' :
                values = 4;
                break;
            case '5' :
                values = 5;
                break;
            case '6':
                values = 6;
                break;
            case '7' :
                values = 7;
                break;
            case '8' :
                values = 8;
                break;
            case '9':
                values = 9;
                break;
            case '10' :
                values = 10;
                break;
            case 'J' :
                values = 11;
                break;
            case 'Q':
                values =12;
                break;
            default:
                values = 13
        } return values
    }
}
    
// starts the game
const game = new GameOfWar();
game.start();
