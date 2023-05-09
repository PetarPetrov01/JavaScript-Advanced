const { expect } = require('chai')
const isOddOrEven = require('./EvenOrOdd')

describe('Is even or odd', () => {
    it('Returns undefined for number type input', () => {
        expect(isOddOrEven(1)).to.equal(undefined)
    })

    it('Returns undefined for object type input', () => {
        expect(isOddOrEven({})).to.equal(undefined)
    })

    it('Returns even for even length input',()=>{
        expect(isOddOrEven('aa')).to.equal('even')
    })

    it('Returns odd for odd length input',()=>{
        expect(isOddOrEven('aaa')).to.equal('odd')
    })

    //overload 

    it('Returns odd for "key" input',()=>{
        expect(isOddOrEven('aaa')).to.equal('odd')
    })

    it('Returns even for "name" input',()=>{
        expect(isOddOrEven('name')).to.equal('even')
    })
})