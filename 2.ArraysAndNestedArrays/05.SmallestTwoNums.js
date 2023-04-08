function smallesTwo(inArr) {
    let resultArr = inArr.slice().sort((a, b) => a - b)
    console.log(resultArr[0] + ' ' + resultArr[1]);

}
smallesTwo([30, 15, 50, 5])