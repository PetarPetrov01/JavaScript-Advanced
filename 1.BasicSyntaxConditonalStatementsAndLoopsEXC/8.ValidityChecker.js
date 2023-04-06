function validCheck(x1, y1, x2, y2) {

    let checkDistance = (x1, y1, x2, y2) => {
        let result = (Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)) % 1 == 0
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${result?'valid':'invalid'}`
    }

    console.log(checkDistance(x1, y1, 0, 0))
    console.log(checkDistance(x2, y2, 0, 0))
    console.log(checkDistance(x1, y1, x2, y2))
}
validCheck(2, 1, 1, 1)