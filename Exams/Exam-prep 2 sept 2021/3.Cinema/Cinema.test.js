const { expect } = require('chai')
const cinema = require('./Cinema')


describe('cinema tests', () => {

    describe('showMovies', () => {
        it('Returns right message for empty array', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        })

        it('Returns joined array of available movies', () => {
            expect(cinema.showMovies(['str1', 'str2'])).to.equal('str1, str2')
        })
    })

    describe('ticketPrice', () => {
        it('Working with Premiere projection', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
        })

        it('Working with Normal projection', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.5)
        })

        it('Working with Discount projection', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.5)
        })

        it('Throws error for not existing projection', () => {
            expect(() => cinema.ticketPrice('aa')).to.throw('Invalid projection type.')
        })
    })

    describe('swapSeatsInHall', () => {
        it('Returns successful when passing two correct inputs', () => {
            expect(cinema.swapSeatsInHall(2, 3)).to.equal('Successful change of seats in the hall.')
        })

        it('Returns successful when passing 1 and 20', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.')
        })

        it('Returns successful when passing two correct inputs (string type)', () => {
            expect(cinema.swapSeatsInHall('4', '3')).to.equal('Successful change of seats in the hall.')
        })

        //Unsuccessful
        it('Returns unsuccessful when passing only one number', () => {
            expect(cinema.swapSeatsInHall(2)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing more than 2 params', () => {
            expect(cinema.swapSeatsInHall(2, 3, 5)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing the same numbers', () => {
            expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing floating point number', () => {
            expect(cinema.swapSeatsInHall(1.2, 2)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing a number thats bigger than the capacity of the hall', () => {
            expect(cinema.swapSeatsInHall(2, 23)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing negative number', () => {
            expect(cinema.swapSeatsInHall(-2, 3)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing 0 for a seat', () => {
            expect(cinema.swapSeatsInHall(0, 2)).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when a string is passed', () => {
            expect(cinema.swapSeatsInHall('a', 'b')).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing an array', () => {
            expect(cinema.swapSeatsInHall([2, 3])).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing an object', () => {
            expect(cinema.swapSeatsInHall({})).to.equal('Unsuccessful change of seats in the hall.')
        })

        it('Returns unsuccessful when passing an object', () => {
            expect(cinema.swapSeatsInHall([2, 3])).to.equal('Unsuccessful change of seats in the hall.')
        })
    })
})
