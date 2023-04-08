function equalNeighbours(matrix) {
    let count = 0
    for (let row = 0; row < matrix.length; row++) {

        for (let column = 0; column < matrix[row].length; column++) {

            if (row !== matrix.length - 1 && matrix[row][column] === matrix[row + 1][column]) {
                count++
            }
            if (column !== matrix[row].length - 1 && matrix[row][column] === matrix[row][column + 1]) {
                count++
            }
        }
    }
    console.log(count);
}
equalNeighbours([['2', '4', '4', '7', '0'],
['4', '0', '5', '3', '0'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)