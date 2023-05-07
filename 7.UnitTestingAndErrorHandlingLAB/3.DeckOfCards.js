function printDeckOfCards(cards) {
    function createCard(face, suit) {

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

    const cardsArr = []

    for (let el of cards) {
        let card = el.split('')
        let suit = card.splice(card.length - 1, 1)[0]
        let face = card.join('')

        try {
            const finalCard = createCard(face, suit).toString()
            cardsArr.push(finalCard)
        } catch (er) {
            console.log(`Invalid card: ${face}${suit}`);
            return
        }
    }
    console.log(cardsArr.join(' '))
}
printDeckOfCards(['AS', '10D', 'KH', '2C'])
console.log('-----\n-----')
printDeckOfCards(['5S', '3D', 'QD', '1C'])