function biggerHalf(inArr) {
    let resultArr = inArr.slice()
        .sort((a, b) => a - b)
        .slice(Math.floor(inArr.length / 2))

    return resultArr
}
biggerHalf([4, 7, 2, 5, 2, 2, 2])