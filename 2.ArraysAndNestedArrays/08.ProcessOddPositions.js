function processOdd(inputArr) {
    let finalArr = []
    for (let i = 1; i <= inputArr.length; i += 2) {
        finalArr.unshift(inputArr[i])
    }
    finalArr = finalArr.map((num) => num *= 2)
    console.log(finalArr.join(' '));
}
processOdd([10, 15, 20, 25])