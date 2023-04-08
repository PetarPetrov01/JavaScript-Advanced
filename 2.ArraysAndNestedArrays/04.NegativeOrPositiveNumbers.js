function negativeOrPositiveNums(inArr) {
    let resultArr = []
    for (let num of inArr) {
        num >= 0 ? resultArr.push(num):resultArr.unshift(num)
    }
    console.log(resultArr.join('\n'));
}
negativeOrPositiveNums([7, -2, 8, 9])