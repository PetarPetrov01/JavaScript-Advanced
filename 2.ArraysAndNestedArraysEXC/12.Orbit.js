function orbit(input) {
    let rows = input.shift()
        , cols = input.shift()
        , startX = input.shift()
        , startY = input.shift()
        , matrix = []

    for (let i = 0; i < rows; i++){
        matrix.push([])
    }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let distanceX = Math.abs(row - startX)
                    , distanceY = Math.abs(col - startY)

                matrix[row][col] = Math.max(distanceX, distanceY) + 1
            }
        }
    matrix.forEach(el => console.log(el.join(' ')))

}
orbit([4, 4, 1, 1])