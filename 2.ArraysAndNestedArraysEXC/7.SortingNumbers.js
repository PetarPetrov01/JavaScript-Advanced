function sortingNums(inputArr) {
    let sortedArr = inputArr.sort((a, b) => a - b)
    let endOfLoop = inputArr.length / 2
    let finalArr = []
    for (let i = 0; i < endOfLoop; i++) {
        finalArr.push(sortedArr[i])
        if (i !== sortedArr.length - 1 - i)
            finalArr.push(sortedArr[sortedArr.length - 1 - i])
    }
    return finalArr
}
sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,4])