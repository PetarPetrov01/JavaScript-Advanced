class Stringer {
    constructor(string, length) {
        this.innerString = string
        this.innerLength = length
    }

    increase(num) {
        this.innerLength += num
    }

    decrease(num) {
        this.innerLength -= num
        if (this.innerLength < 0) {
            this.innerLength = 0
        }
    }

    toString() {
        return this.innerLength < this.innerString.length ? this.innerString.substring(0, this.innerLength) + '...' : this.innerString
    }
}

let test = new Stringer("Test", 2);
test.decrease(-1)
console.log(test.toString());
test.increase(7)
console.log(test.toString());

