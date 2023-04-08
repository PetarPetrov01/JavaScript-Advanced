function sumFirstAndLast(inputArr){
    let finalArr = inputArr.map(Number)
    let sum = finalArr[0] + finalArr[finalArr.length-1]
    return sum

}
console.log(sumFirstAndLast(['20', '30', '40']))