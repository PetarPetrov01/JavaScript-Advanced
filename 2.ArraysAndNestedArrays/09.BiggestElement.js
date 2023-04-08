function biggestEl(inputArr) {
    let biggestArr = []
    for (let row of inputArr) {
        let sorted = row.sort((a, b) => b - a)
        biggestArr.push(sorted[0])
    }
    biggestArr.sort((a,b)=>b-a)
    return biggestArr[0]
}
console.log(biggestEl([[-3, -5, -7, -12],
[-1, -4, -33, -2]]
))