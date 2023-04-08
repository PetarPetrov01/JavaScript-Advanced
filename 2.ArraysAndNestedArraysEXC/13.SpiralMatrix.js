function spiralMatrix(row, col) {
    let matrix = []
    for (let i = 0; i < row; i++) {
        let arr = []
        for (let j = 0; j < col; j++) {
            arr.push(0)
        }
        matrix.push(arr)
    }

    let y = 0
    let x = 0
    let step = 0
    for (let num = 0; num < row * col;) {

        while (y + step < col) {
            num++
            matrix[x][y] = num
            y++
        }

        x++
        y--

        while (x + step < row) {
            num++
            matrix[x][y] = num
            x++
        }

        x--
        y--

        while (y >= step) {
            num++
            matrix[x][y] = num
            y--
        }
       
        x--
        y++
        step++

        while (x>=step) {
            num++
            matrix[x][y] = num
            x--
        }

        y++
        x++
        
    }
    matrix.forEach((el) => console.log(el.join(' ')))
}
spiralMatrix(3, 4)