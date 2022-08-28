let result = (function () {

    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card {
        constructor(face, suit) {
            this.InnerFace = face;
            this.innerSuit = suit;
        }
        get face() {
            return this.InnerFace;
        }

        get suit() {
            return this.innerSuit;
        }

        set face(f) {
            if (faces.includes(f.toString())) {
                this.InnerFace = f;
            } else {
                throw new Error('No such face');
            }
        }

        set suit(s) {
            if (Object.values(Suits).includes(s)) {
                this.innerSuit = s;
            } else {
                throw new Error('No such suit');
            }
        }
    }

    return {
        Suits: Suits,
        Card: Card
    };
}());

let Card = result.Card; 
let Suits = result.Suits;
let card = new Card ("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
let card2 = new Card("1", Suits.DIAMONDS);
console.log(card.face, card.suit);