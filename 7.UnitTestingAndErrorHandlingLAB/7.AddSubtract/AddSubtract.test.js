const { expect } = require('chai')
const createCalculator = require('./AddSubtract')


describe('testCalcualtor', () => {

    it('The function returns object', () => {
        const calcObj = createCalculator()
        expect(calcObj).to.be.a('object')
    })

    it('The object has add method', () => {
        const calcObj = createCalculator()
        expect(calcObj).to.haveOwnProperty('add')
    })

    it('The object has subtract method', () => {
        const calcObj = createCalculator()
        expect(calcObj).to.haveOwnProperty('subtract')
    })

    it('The object has get method', () => {
        const calcObj = createCalculator()
        expect(calcObj).to.haveOwnProperty('get')
    })

    it('Get function works with initial value', () => {
        const calcObj = createCalculator()
        expect(calcObj.get()).to.equal(0)
    })

    it('Add function works (value is 0 + 3 = 3)', () => {
        const calcObj = createCalculator()
        calcObj.add(3)
        expect(calcObj.get()).to.equal(3)
    })

    it('Decrease function works (value is 3 - 2 = 1)', () => {
        const calcObj = createCalculator()
        calcObj.subtract(2)
        expect(calcObj.get()).to.equal(-2)
    })

    it('Add function parses nums (value is 1 + 2 = 3', () => {
        const calcObj = createCalculator()
        calcObj.add('2')
        expect(calcObj.get()).to.equal(2)
    })

    it('Check the inner state', () => {
        const calcObj = createCalculator()
        calcObj.add(2)
        calcObj.subtract(4)
        expect(calcObj.get()).to.equal(-2)
    })

})

// const calculator = createCalculator()
// calculator.add(23)
// calculator.add(2)
// console.log(calculator.get())
// calculator.add(3)
// calculator.add(4)
// console.log(calculator.get())