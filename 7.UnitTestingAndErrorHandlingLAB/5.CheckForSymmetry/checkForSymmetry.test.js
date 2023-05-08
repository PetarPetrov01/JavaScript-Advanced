const { expect } = require('chai')
const isSymmetric = require('./checkForSymmetry')

describe('test', () => {
    it('Return false if input is string', () => {
        expect(isSymmetric('ad')).to.equal(false)
    })

    it('Return true for even elements symmetric arr', () => {
        expect(isSymmetric([1, 1])).to.equal(true)
    })

    it('Return fales for non-symmetric arr', () => {
        expect(isSymmetric([1, 2])).to.equal(false)
    })

    //test overload
    it('Return false if input is number', () => {
        expect(isSymmetric(9)).to.equal(false)
    })

    it('Return true for odd elements symmetric arr', () => {
        expect(isSymmetric([2, 2, 2])).to.equal(true)
    })

    it('Return true for valid string elements input', () => {
        expect(isSymmetric(['a', 'a'])).to.equal(true)
    })

    it('Return false for valid non-symmetric string elements input', () => {
        expect(isSymmetric(['a', 'b'])).to.equal(false)
    })

    it('Return false for valid symmetric array containing number and stringifeid number', () => {
        expect(isSymmetric(['1', 1])).to.equal(false)
    })

})