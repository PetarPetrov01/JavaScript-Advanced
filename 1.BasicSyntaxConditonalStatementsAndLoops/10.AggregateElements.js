function aggregateEl(arr) {
    let sum = arr.reduce((a, b) => a + b, 0)
    let inverse = 0
    let concat = arr.join('')

    for (el of arr) {
        inverse += 1 / el
    }
    
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
aggregateEl([1, 2, 3])