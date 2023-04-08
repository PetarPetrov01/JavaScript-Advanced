function evenPosition(arr) {
    let resultArr = []
    for (let i = 0; i < arr.length; i += 2) {
        resultArr.push(arr[i])
    }
    console.log(resultArr.join(' '));
}
evenPosition(['20', '30', '40', '50', '60'])