(function extendString() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this
        }
        return this.toString()
    }

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str
        }
        return this.toString()
    }

    String.prototype.isEmpty = function () {
        return this.toString() ? false : true
    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString()
        }

        if (this.includes(' ')) {
            let lastSpaceIndex = this.length;

            while (lastSpaceIndex !== -1 && lastSpaceIndex + 3 > n) {
                lastSpaceIndex = this.lastIndexOf(' ', lastSpaceIndex - 1);
            }
            return `${this.slice(0, lastSpaceIndex)}...`;
        }

        if (n > 3) {
            return this.slice(0, n - 3) + '...'

        }
        return '.'.repeat(n)
    }

    String.format = function (txt, ...params) {
        let replacePattern = /{(\d)+}/
        let match = txt.match(replacePattern)

        while (match && params.length) {
            txt = txt.replace(replacePattern, params.shift())

            match = txt.match(replacePattern)
        }
        return txt
    }
})()

str ='kon s glava bez laino'
console.log(str.truncate(10))



