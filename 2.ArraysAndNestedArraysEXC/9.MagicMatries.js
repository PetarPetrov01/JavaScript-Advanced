function magicMatrice(matrix) {
    let currentRowSum = 0
    let previousRowSum = 0
    let equal = true
    for (let i = 0; i < matrix.length; i++) {
        
        currentRowSum = matrix[i].reduce((acc, b) => acc + b, 0)

        if (i !== 0 && currentRowSum !== previousRowSum) {
            equal = false
            break;
        }
        previousRowSum = currentRowSum
    }
    let previousColumnSum = 0
    for (let i = 0; i < matrix.length; i++) {

        let currentColumnSum = 0
        for (let j = 0; j < matrix.length; j++) {
            currentColumnSum += matrix[j][i]
        }

        if (i !== 0 && currentColumnSum !== previousColumnSum) {
            equal = false
            break;
        }
        previousColumnSum = currentColumnSum
    }
    console.log(equal);
}
magicMatrice([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)