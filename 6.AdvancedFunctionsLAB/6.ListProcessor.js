function solve(inputArr) {
    let collection = []

    inputArr.forEach(c => process(...c.split(' ')))  // == [command,str] = c.split // Using rest

    function process(command, str) {
        let processCommands = {
            add,
            remove,
            print
        }
        return processCommands[command](str)

        function add(str) {
            collection.push(str)
        }
        function remove(str) {
            while (collection.includes(str)) {
                let index = collection.indexOf(str)
                collection.splice(index, 1)
            }
        }
        function print() {
            console.log(collection.join(','));
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])