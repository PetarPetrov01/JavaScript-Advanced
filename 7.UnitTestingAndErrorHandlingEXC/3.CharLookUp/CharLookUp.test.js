const { expect } = require('chai')
const lookupChar = require('./CharLookUp')

describe('Look up character', () => {

    it('Return undefined if first parameter is not string type', () => {
        expect(lookupChar(1, 1)).to.equal(undefined)
    })

    it('Return undefined if second parameter is not number type', () => {
        expect(lookupChar('aa', 'a')).to.equal(undefined)
    })

    //Incorect index parameters

    it('Return "Incorrect index" for number bigger than the string\'s length', () => {
        expect(lookupChar('word', 4)).to.equal('Incorrect index')
    })

    it('Return "Incorrect index" for number smaller than the string\'s length', () => {
        expect(lookupChar('word', -1)).to.equal('Incorrect index')
    })

    it('Return undefined for floating-point number', () => {
        expect(lookupChar('word', 1.5)).to.equal(undefined)
    })

    //Correct character

    it('Expect string: "word" and index : "2" to return "r" ', () => {
        expect(lookupChar('word', 2)).to.equal('r')
    })
})
