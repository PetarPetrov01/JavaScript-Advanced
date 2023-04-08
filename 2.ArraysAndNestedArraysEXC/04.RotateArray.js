function rotateArr(inArr, rotations) {
    let resultArr = inArr.slice()
    for (let i = 0; i < rotations; i++){
        resultArr.unshift(resultArr.pop())
    }
    console.log(resultArr.join(' '));
}
rotateArr(['1',
    '2',
    '3',
    '4'],
    2
)