function sameNumbers(num) {
    let str = String(num)
    let oldCh = str[0]
    let isSame = true
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        let newCh = str[i]
        if (oldCh !== newCh) {
            isSame = false
        }
        oldCh = str[i]
        sum += +str[i]
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222)