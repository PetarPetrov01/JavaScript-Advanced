function diagonalAttack(inputArr) {
    let matrix = inputArr.map((row) => row.split(' ').map(Number))
    let leftToRight = []
    let rightToLeft = []
    let half = 0

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i]
        leftToRight.push(matrix[i][i])
        rightToLeft.push(row[row.length - 1 - i])
    }

    if (leftToRight.reduce((a, b) => a + b, 0) === rightToLeft.reduce((a, b) => a + b, 0)) {
        //First And Last Row
        let filler = leftToRight.reduce((a, b) => a + b, 0)

        if(matrix.length % 2 === 0){
            half = Math.floor(matrix.length / 2 - 1)  
        } else {
            half = Math.floor(matrix.length / 2) 
        }

        for (let row = 0; row <= half; row++) {
            matrix[row].fill(filler, 0, row)  //Left
            matrix[row].fill(filler, row + 1, matrix[row].length - 1 - row) //Middle
            matrix[row].fill(filler, matrix[row].length - row, matrix[row].length)  //Right
        }

        //Lower part
        for (let row = matrix.length - 1; row > half; row--) {
            matrix[row].fill(filler, 0, matrix[row].length - 1 - row)  //Left
            matrix[row].fill(filler, matrix[row].length - row, row)
            matrix[row].fill(filler, row + 1, matrix[row].length)  //Left
        }
    }
    matrix.forEach((el) => console.log(el.join(' ')))
}
diagonalAttack(['5 3 12 2',
    '11 4 3 2',
    '10 4 3 21',
    '5 4 5 2'])

console.log('_______');

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)
console.log('_______');
diagonalAttack(['1 3 12 3 1 1',
    '11 2 23 2 2 2',
    '101 12 3 3 10 3',
    '1 4 4 4 2 4',
    '5 5 33 11 5 1',
    '6 22 33 11 1 6']
)

