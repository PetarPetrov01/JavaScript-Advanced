const { expect } = require('chai')
const rgbToHexColor = require('./RGBtoHEX')

describe('rgbToHexColor', () => {

    it('Return the right HEX for white ', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000')
    })

    it('Return undefined for less than 3 parameters', () => {
        expect(rgbToHexColor(1, 2)).to.equal(undefined)
    })

    it('Return undefined if any of the given numbers is more than 255',()=>{
        expect(rgbToHexColor(256,256,256)).to.equal(undefined)
    })


    //Test overload

    it('Return the right HEX for Black ', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF')
    })

    it('Return the right HEX for random color (140, 70, 194) ', () => {
        expect(rgbToHexColor(140, 70, 194)).to.equal('#8C46C2')
    })

    it('Return undefined if any of the given numbers is less than 0',()=>{
        expect(rgbToHexColor(-1,-1,-1)).to.equal(undefined)
    })

    it('Return undefined if input is stringified numbers',()=>{
        expect(rgbToHexColor('2','3','6')).to.equal(undefined)
    })
})