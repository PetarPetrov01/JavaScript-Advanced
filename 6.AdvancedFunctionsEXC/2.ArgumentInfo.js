function solve(...arr) {

    const typesObj = {}
    arr.forEach(el => {
        console.log(`${typeof el}: ${el}`)
        let currentType = typeof el

        typesObj[currentType] = !typesObj.hasOwnProperty(currentType) ? 1 : ++typesObj[currentType]
    })

    Object.entries(typesObj).sort((a, b) => b[1] - a[1]).forEach((el) => console.log(`${el[0]} = ${el[1]}`))
}
solve('cat', 42, function () { console.log('Hello world!'); }, 'sad')