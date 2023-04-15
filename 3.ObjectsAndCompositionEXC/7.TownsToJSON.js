function townsJSON(inputArr) {
    let resultArr = []
    let columns = inputArr.shift().split(/\s*\|\s*/).filter(Boolean)

    for (let line of inputArr) {
        let [,town, latitude, longitude,] = line.split(/\s*\|\s*/)
        let townObj = {}
        townObj[columns[0]] = town
        townObj[columns[1]] = +Number(latitude).toFixed(2)
        townObj[columns[2]] = +Number(longitude).toFixed(2)

        resultArr.push(townObj)
    }
    console.log(JSON.stringify(resultArr));
}
townsJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)