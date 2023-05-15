const { expect } = require('chai')
const PaymentPackage = require('./paymentPackage')


describe('paymentClass', () => {


    describe('Name property', () => {
        it('Constructor sets all properties correctly', () => {
            let package = new PaymentPackage('John', 100);
 
            expect(package._name).to.equal('John')
            expect(package._value).to.equal(100)
            expect(package._VAT).to.equal(20)
            expect(package._active).to.equal(true)
        });
        //Check for empty parameters
        it('Throws an error if the passed parameter is number', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw()
        })

        it('Throws an error if the passed parameter is array', () => {
            expect(() => new PaymentPackage([123], 123)).to.throw()
        })

        it('Throws an error if the passed parameter is empty string', () => {
            expect(() => new PaymentPackage('', 123)).to.throw()
        })

        it('Does not Throw an error for right parameters', () => {
            expect(() => new PaymentPackage('abc', 123)).not.to.throw()
        })
    })


    describe('Value property', () => {

        it('Throws errow when the new Value is a string', () => {
            expect(() => new PaymentPackage('abc', 'abc')).to.throw('Value must be a non-negative number');
        });

        it('Throws errow when the new Value is an array', () => {
            expect(() => new PaymentPackage('abc', [123])).to.throw('Value must be a non-negative number');
        });

        it('Throws errow when the new Value is negative', () => {
            expect(() => new PaymentPackage('abc', -123)).to.throw('Value must be a non-negative number');
        });

        it('Tetursn the new Value if the input is good', () => {
            expect(() => new PaymentPackage('abc', 123)).not.to.throw('Value must be a non-negative number');
        });

        it('Set value to null', () => {
            let package = new PaymentPackage('Joe', 100);
            expect(() => {package.value = 0}).to.not.throw
        });
    })

    describe('Tests for the VAT', () => {

        it('Throws errow when the passed VAT is a string', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });

        it('Throws errow when the passed VAT is an array', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.VAT = [123]).to.throw('VAT must be a non-negative number');
        });

        it('Throws errow when the passed VAT is negative', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.VAT = -123).to.throw('VAT must be a non-negative number');
        });

        it('Returns the new VAT if the input is good', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.VAT = 123).not.to.throw('VAT must be a non-negative number');
        });
    });


    describe('Tests for the Active property', () => {

        it('Should throw errow when the new Active is a string', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.active = 'abc').to.throw('Active status must be a boolean');
        });

        it('Should throw errow when the new Active is an array', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.active = [123]).to.throw('Active status must be a boolean');
        });

        it('Should throw errow when the new Active is negative', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.active = -123).to.throw('Active status must be a boolean');
        });

        it('Should return the new Active if the input is good', () => {
            let package = new PaymentPackage('abc', 123);
            expect(() => package.active = true).not.to.throw('Active status must be a boolean');
        });
    });

    describe('Tests for toString Method', () => {

        it('Should return a string as all the input is correct - 1', () => {
            let package = new PaymentPackage('John', 123);
            let output = [
                `Package: John`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });

        it('Return a string if all the input is correct VAT change', () => {
            let package = new PaymentPackage('cba', 123);
            package.VAT = 30;
            let output = [
                `Package: cba`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });

        it('Return a string if all the input is correct active change', () => {
            let package = new PaymentPackage('Alice', 123);
            package.active = false;
            let output = [
                `Package: Alice (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });

        it('Return a string as all the input is correct both active and VAT parameters change', () => {
            let package = new PaymentPackage('John', 123);
            package.VAT = 30;
            package.active = false;
            let output = [
                `Package: John (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });
    });
})

// let kotka = new PaymentPackage('sda')

// console.log(kotka)