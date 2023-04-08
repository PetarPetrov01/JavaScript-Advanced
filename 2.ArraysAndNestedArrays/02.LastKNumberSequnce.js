function lastKNum(length, k) {
    let resultArr = [1]

    for (let i = 1; i < length; i++) {
        let startIndex = i-Math.min(i,k)
        let sum = resultArr
        .slice(startIndex, i)
        .reduce((acc, b) => acc + b, 0)

        resultArr.push(sum)
    }
    return resultArr;
}
lastKNum(8, 2)