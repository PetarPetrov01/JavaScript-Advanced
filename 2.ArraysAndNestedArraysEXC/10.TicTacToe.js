function TicTacToe(inputArr) {

    let isFull = function (dashBoard) {
        for (let row of dashBoard) {
            for (let el of row) {
                if (el === false) {
                    return false
                }
            }
        }
        return true
    }

    let winCondition = function (dashBoard) {
        let leftDiagonal = []
        let rightDiagonal = []

        for (let i = 0; i < dashBoard.length; i++) {
            //Check for rows
            let row = dashBoard[i]
            if (row[0] !== false && row[0] === row[1] && row[1] === row[2]) {
                return true
            }

            //Check for columns
            let column = []
            for (let j = 0; j < row.length; j++) {
                column.push(dashBoard[j][i])
            }

            if (column[0] !== false && column[0] === column[1] && column[1] === column[2]) {
                return true
            }
            //Fill diagonals

            leftDiagonal.push(dashBoard[i][i])
            rightDiagonal.push(row[row.length - 1 - i])
        }
        if ((rightDiagonal[0] !== false && rightDiagonal[0] === rightDiagonal[1] && rightDiagonal[1] === rightDiagonal[2])
            || (leftDiagonal[0] !== false && leftDiagonal[0] === leftDiagonal[1] && leftDiagonal[1] === leftDiagonal[2])) {
            return true
        }
        return false
    }

    let dashBoard = [[false, false, false],[false, false, false],[false, false, false]]
    let move = 'X'
    let endGame = false

    for (let i = 0; i < inputArr.length; i++) {
        if (endGame) break;
        let [row, column] = inputArr[i].split(' ').map(Number)

        if (dashBoard[row][column] === false) {
            dashBoard[row][column] = move

            endGame = winCondition(dashBoard)
            if (endGame) break;
            endGame = isFull(dashBoard)
            move = move === 'X' ? 'O' : 'X'
        } else {
            console.log('This place is already taken. Please choose another!');
        }

    }
    if (endGame) {
        if (isFull(dashBoard)) {
            console.log('The game ended! Nobody wins :(');
        } else {
            console.log(`Player ${move} wins!`);
        }
        for (let row of dashBoard) {
            console.log(row.join('\t'));
        }
    }
}

TicTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]


)