function addAndRemove(inArr) {
    let resultArr = []
    for (let i = 0; i < inArr.length; i++) {
        if (inArr[i] === 'add') {
            resultArr.push(i + 1)
        } else {
            resultArr.pop(inArr[i - 1])
        }
    }
    if (resultArr.length > 0) {
        console.log(resultArr.join('\n'));
    } else {
        console.log('Empty');
    }
}
addAndRemove(['add', 
'add', 
'remove', 
'add', 
'add']



)