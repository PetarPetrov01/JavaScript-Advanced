function playingCards(face, suit) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = {
        S: `\u2660`,
        H: `\u2665`,
        D: `\u2666`,
        C: `\u2663`
    }

    if (!validFaces.includes(face) || !suits.hasOwnProperty(suit)) {
        throw new Error('Invalid face or suit')
    }

    return {
        suit: suits[suit],
        face: face,
        toString: function returnCard() {
            return this.face + this.suit
        }
    }

}
const card = playingCards('1', 'C')
console.log(card.toString())