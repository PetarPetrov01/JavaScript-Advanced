function solve() {

    let [checkBtn, clearButton] = document.querySelectorAll('td button')
    let resultP = document.querySelector('#check p')

    let table = document.querySelector('table')
    let tbody = document.querySelector('table tbody')

    //Check if all numbers are in range\\
    checkBtn.addEventListener('click', check)
    clearButton.addEventListener('click', clear)

    function check() {

        //Turn it in matrix
        let inputMatrix = Array.from(tbody.children).map(row => Array.from(row.querySelectorAll('input')).map(el => +el.value))

        if (checkColumns() && checkRows() && checkRange()) {
            console.log('Totally okay');
            resultP.textContent = 'You solve it! Congratulations!'
            resultP.style.color = 'green'
            table.style.border = "2px solid green"
        } else {
            resultP.textContent = 'NOP! You are not done yet...'
            resultP.style.color = 'red'
            table.style.border = "2px solid red"
        }

        function checkRange() {
            let allInputs = Array.from(tbody.querySelectorAll('td input'))
            let inRange = allInputs.some((el) => +el.value > 3 || +el.value < 1)
            return !inRange
        }

        //COLUMNS
        function checkColumns() {
            let currentSum = 0
            let newSum = 0

            for (let row = 0; row < inputMatrix.length; row++) {
                for (let col = 0; col < inputMatrix[row].length; col++) {
                    newSum += inputMatrix[col][row]
                }

                if (row > 0 && currentSum !== newSum) {
                    return false
                }
                currentSum = newSum
                newSum = 0
            }
            return true
        }

        //ROWS
        function checkRows() {
            let currentSum = 0
            let newSum = 0

            for (let row = 0; row < inputMatrix.length; row++) {
                for (let col = 0; col < inputMatrix[row].length; col++) {
                    newSum += inputMatrix[row][col]
                }
                if (row > 0 && currentSum !== newSum) {
                    return false
                }
                currentSum = newSum
                newSum = 0
            }
            return true
        }

        //DIAGONALS
    }

    function clear() {
        resultP.textContent = ''
        table.style.border = "none"
        let inputs = Array.from(tbody.querySelectorAll('input'))
        inputs.map(el => el.value = '')
        console.log(inputs);
    }
}

// NO NEED OF DIAGONALS :))))))))
// function checkDiagonals() {
//     let rightDiagonal = 0
//     let leftDiagonal = 0

//     //LEFT diagonal
//     for (let row = 0; row < inputMatrix.length; row++) {
//         leftDiagonal += inputMatrix[row][row]
//     }

//     //RIGHT diagonal
//     for (let row = 0; row < inputMatrix.length; row++) {
//         rightDiagonal += inputMatrix[row][inputMatrix.length - 1 - row]
//     }

//     return rightDiagonal === leftDiagonal
// }