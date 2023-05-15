class Textbox {
    //TODO
    constructor(selector, regEx) {
        this._value
        this._elements = Array.from(document.querySelectorAll(selector))
        this._invalidSymbols = regEx

        let count = 1
        this._elements.forEach(el => {
            el.value = `this is ${count++}`
            el.addEventListener('change', () => {
                this._value = el.value
                this._elements.forEach((item) => {
                    item.value = this._value;
                });
            })
        })
    }

    get value() {
        return this._value
    }
    set value(newValue) {
        this._value = newValue
        this._elements.forEach((el) => {
            el.value = newValue;
        });
    }

    get elements() {
        return this._elements
    }

    isValid() {
        if (this._invalidSymbols.exec(this._value) === null) {
            return true;
        } else {
            return false;
        }
    }
}
let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });

