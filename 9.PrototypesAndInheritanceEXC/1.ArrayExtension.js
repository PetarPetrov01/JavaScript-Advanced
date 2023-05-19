(function extendArray() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (n) {
        return this.slice(n)
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, b) => acc + b, 0)
    }

    Array.prototype.average = function () {
        return this.reduce((acc, b) => acc + b, 0) / this.length
    }
})()

const konche = [1, 2, 3, 4, 5]
console.log(konche.last())
console.log(konche.skip(2))
console.log(konche.take(2))
console.log(konche.sum())
console.log(konche.average())