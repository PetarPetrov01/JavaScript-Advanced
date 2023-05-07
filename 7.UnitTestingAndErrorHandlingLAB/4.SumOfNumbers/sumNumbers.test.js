const { expect } = require('chai')
const sum = require('./sumNumbers')

describe('test', () => {
    it('Sum of two numbers', () => {
        expect(sum([1, 1])).to.equal(2)
    })

    //Over loading
    it('array of odd elements sum', () => {
        expect(sum([3, 4, 5])).to.equal(12)
    })

    it('array of even elements 3,5,7,9', () => {
        expect(sum([3, 5, 7, 9])).to.equal(24)
    })
})


