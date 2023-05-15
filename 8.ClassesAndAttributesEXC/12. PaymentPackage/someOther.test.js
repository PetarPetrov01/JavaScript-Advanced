const { expect } = require("chai");

describe('Tests for PaymentPackage Class', () => {

    describe('Tests for the John', () => {

        it('constructor', () => {
            let package = new PaymentPackage('John', 100);

            expect(package._name).to.equal('John')
            expect(package._value).to.equal(100)
            expect(package._VAT).to.equal(20)
            expect(package._active).to.equal(true)
        });

        it('Throws errow when the new Name is a number', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
        });

        it('Throws errow when the new Name is an array', () => {
            expect(() => new PaymentPackage(['John'], 123)).to.throw('Name must be a non-empty string');
        });

        it('Throws errow when the new Name is empty', () => {
            expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
        });

        it('Returns the new Name if the input is good', () => {
            expect(() => new PaymentPackage('John', 123)).not.to.throw('Name must be a non-empty string');
        });
    });

    describe('Tests for the Value', () => {

        it('Throws errow when the new Value is a string', () => {
            expect(() => new PaymentPackage('John', 'John')).to.throw('Value must be a non-negative number');
        });

        it('Throws errow when the new Value is an array', () => {
            expect(() => new PaymentPackage('John', [123])).to.throw('Value must be a non-negative number');
        });

        it('Throws errow when the new Value is negative', () => {
            expect(() => new PaymentPackage('John', -123)).to.throw('Value must be a non-negative number');
        });

        it('Returns the new Value if the input is good', () => {
            expect(() => new PaymentPackage('John', 123)).not.to.throw('Value must be a non-negative number');
        });

        it('Set value to null', () => {
            let package = new PaymentPackage('John', 100);

            //expect(() => package.value = 0).to.not.throw       DOES NOT WORK FOR SOME REASON IN JUDGE????
            assert.doesNotThrow(() => { package.value = 0 })
        });
    });

    describe('Tests for the VAT', () => {

        it('Throws errow when the new VAT is a string', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.VAT = 'John').to.throw('VAT must be a non-negative number');
        });

        it('Throws errow when the new VAT is an array', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.VAT = [123]).to.throw('VAT must be a non-negative number');
        });

        it('Throws errow when the new VAT is negative', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.VAT = -123).to.throw('VAT must be a non-negative number');
        });

        it('Returns the new VAT if the input is good', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.VAT = 123).not.to.throw('VAT must be a non-negative number');
        });
    });

    describe('Tests for the Active', () => {

        it('Throws error when the new Active is a string', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.active = 'John').to.throw('Active status must be a boolean');
        });

        it('Throws error when the new Active is an array', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.active = [123]).to.throw('Active status must be a boolean');
        });

        it('Throws error when the new Active is negative', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.active = -123).to.throw('Active status must be a boolean');
        });

        it('Returns the new Active if the input is good', () => {
            let package = new PaymentPackage('John', 123);
            expect(() => package.active = true).not.to.throw('Active status must be a boolean');
        });
    });

    describe('Tests for toString Method', () => {

        it('Returns a string as all the input is correct - 1', () => {
            let package = new PaymentPackage('John', 123);
            let output = [
                `Package: John`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });

        it('Returns a string as all the input is correct - 2', () => {
            let package = new PaymentPackage('John', 123);
            package.VAT = 30;
            let output = [
                `Package: John`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });

        it('Returns a string as all the input is correct - 3', () => {
            let package = new PaymentPackage('John', 123);
            package.active = false;
            let output = [
                `Package: John (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(package.toString()).to.equal(output.join('\n'));
        });

        it('Returns a string as all the input is correct - 4', () => {
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
});