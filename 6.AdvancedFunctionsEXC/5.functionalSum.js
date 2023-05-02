function solve(num) {
    let sum = num

    function nSum(num2) {
        sum += num2
        return nSum
    }

    nSum.toString = function () { return sum }
    return nSum
}
console.log(solve(2)(1).toString())
