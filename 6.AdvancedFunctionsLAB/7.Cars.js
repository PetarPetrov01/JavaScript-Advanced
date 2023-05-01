function solve(inputArr) {
    const carObj = {}

    inputArr.forEach(line => {
        let [command, ...rest] = line.split(' ')
        carCreation.call(carObj, command, rest)
    })

    function carCreation(command, rest) {
        const commandObj = {
            create,
            set,
            print
        }

        return commandObj[command](rest)

        function create(restArr) {
            let name = restArr[0]
            if (restArr.length > 1) {
                let [name, , parent] = restArr
                carObj[name] = Object.create(carObj[parent])
                //Create and inherit
            } else {
                //Create
                carObj[name] = {}
            }
        }
        function set(restArr) {
            let [name, key, value] = restArr
            carObj[name][key] = value
        }
        function print(restArr) {
            let result = []
            let currentCar = carObj[restArr[0]]
            for (let key in currentCar) {
                result.push(`${key}:${currentCar[key]}`);
            }
            console.log(result.join(','));
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)