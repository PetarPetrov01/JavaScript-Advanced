function extractIncrasingSubset(inArr) {
    let currentBiggest = inArr.shift()
    let resultArr = [currentBiggest]
    for (let num of inArr) {
        if (num >= currentBiggest) {
            resultArr.push(num)
            currentBiggest = num
        }

    }
    return resultArr
}
extractIncrasingSubset([20,
    3,
    2,
    15,
    6,
    1]


)

function extract(inputArr) {
    let finalArr = inputArr.reduce((filterdArr, value, index) => {
        if ((value >= inputArr[index - 1] && index > 0) || (index === 0)) {
            filterdArr.push(value)
        }
        return filterdArr
    }, [])
    return finalArr
}
console.log(extract([1,
    3,
    2,
    15,
    6,
    1]))