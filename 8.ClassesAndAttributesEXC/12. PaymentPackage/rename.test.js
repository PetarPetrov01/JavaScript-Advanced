const { expect } = require('chai')
const PaymentPackage = require('./paymentPackage')

describe('paymentClass', () => {

    //Check for empty parameters
    it('Throws an error if no parameters are passed', () => {
        expect(() => new PaymentPackage).to.throw('Name must be a non-empty string')
    })

    it('Throws an error if second parameter is not passed', () => {
        expect(() => new PaymentPackage('John')).to.throw('Value must be a non-negative number')
    })

    //Check getters
    it('Name getter returns the correct name', () => {
        let pay = new PaymentPackage('John', 100)
        expect(pay.name).to.equal('John')
    })

    it('Value getter returns the correct number', () => {
        let pay = new PaymentPackage('John', 100)
        expect(pay.value).to.equal(100)
    })

    it('VAT getter returns the correct number', () => {
        let pay = new PaymentPackage('John', 100)
        expect(pay.VAT).to.equal(20)
    })

    it('Active getter returns the correct result(boolean)', () => {
        let pay = new PaymentPackage('John', 100)
        expect(pay.active).to.equal(true)
    })

   // Check setters
    it('Name setter changes the object\'s name', () => {
        let pay = new PaymentPackage('John', 100)
        pay.name = 'Philip'
        expect(pay.name).to.equal('Philip')
    })

    it('Value setter changes the value of the object', () => {
        let pay = new PaymentPackage('John', 100)
        pay.value = 150
        expect(pay.value).to.equal(150)
    })

    it('VAT setter changes the correct number', () => {
        let pay = new PaymentPackage('John', 100)
        pay.VAT = 30
        expect(pay.VAT).to.equal(30)
    })

    it('Setting the "active" property to be false', () => {
        let pay = new PaymentPackage('John', 100)
        pay.active = false
        expect(pay.active).to.equal(false)
    })

    //ToString method
    it('To string method returns the right string (active)', () => {
        let p = new PaymentPackage('Alice', 100)
        expect(p.toString()).to.equal('Package: Alice\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120')
    })

    it('To string method returns the right string (inactive)', () => {
        let p = new PaymentPackage('Alice', 100)
        p.active = false
        expect(p.toString()).to.equal('Package: Alice (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120')
    })

    it('To string method returns the right string after changing each property', () => {
        let p = new PaymentPackage('Alice', 100)
        p.name = 'John'
        p.value = 1000
        p.VAT = 10
        p.active = false
        expect(p.toString()).to.equal('Package: John (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 10%): 1100')
    })

    //Validating setters
    it('Name setter throws error for non-string', () => {
        let pay = new PaymentPackage('John', 100)
        expect(()=>pay.name = 4).to.throw('Name must be a non-empty string')
    })

    it('Value setter thorws error for string', () => {
        let pay = new PaymentPackage('John', 100)
        expect(()=>pay.value = 'sda').to.throw('Value must be a non-negative number')
    })

    it('Value setter thorws error for negative number', () => {
        let pay = new PaymentPackage('John', 100)
        expect(()=>pay.value = -3).to.throw('Value must be a non-negative number')
    })

    it('VAT setter throws error for string', () => {
        let pay = new PaymentPackage('John', 100)
        expect(() => pay.VAT = 'aabb').to.throw('VAT must be a non-negative number')
    })

    it('VAT setter throws error for negative number', () => {
        let pay = new PaymentPackage('John', 100)
        expect(() => pay.VAT = -3).to.throw('VAT must be a non-negative number')
    })

    it('"Active" setter thrwos error for string type', () => {
        let pay = new PaymentPackage('John', 100)
        expect(() => pay.active = 'aabb').to.throw('Active status must be a boolean')
    })

    it('"Active" setter thrwos error for number type', () => {
        let pay = new PaymentPackage('John', 100)
        expect(() => pay.active = 10).to.throw('Active status must be a boolean')
    })

})