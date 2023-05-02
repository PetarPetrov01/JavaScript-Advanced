function solution() {

    const recipesLibrary = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    const ingridients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function (str) {
        let [instruction, ...rest] = str.split(' ')

        const instrucions = {
            restock,
            prepare,
            report
        }

        //Call function with given input
        return instrucions[instruction](...rest)
    }

    function restock(microEl, qty) {
        ingridients[microEl] += +qty
        return 'Success'
    }

    function prepare(recipe, qty) {
        //Check for enough ingredients
        for (let ingr in recipesLibrary[recipe]) {            
            if (recipesLibrary[recipe][ingr] * qty > ingridients[ingr]) {
                return `Error: not enough ${ingr} in stock`
            }
        }

        //Reduce ingredients in stock
        for (let ingr in recipesLibrary[recipe]) {
            ingridients[ingr] -= recipesLibrary[recipe][ingr] * qty
        }
        
        return 'Success'
    }

    function report() {
        let result = Object.entries(ingridients)
            .map((tuple) => tuple.join('='))
            .join(' ')
        return result
    }
}

let manager = solution();
console.log(manager("restock flavour 50 "));
console.log(manager("prepare lemonade 4 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
