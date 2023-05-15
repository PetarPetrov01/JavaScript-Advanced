function solve(inArr) {
    const brands = {}

    for (let line of inArr) {
        let [brand, model, qty] = line.split(' | ')
        qty = +qty
        if (!brands.hasOwnProperty(brand)) {
            brands[brand] = {}
        }

        if (!brands[brand].hasOwnProperty(model)) {
            brands[brand][model] = qty
        } else {
            brands[brand][model] += qty
        }


    }

    for (let key in brands) {
        console.log(key);
        for (let model in brands[key]) {
            console.log(`###${model} -> ${brands[key][model]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)