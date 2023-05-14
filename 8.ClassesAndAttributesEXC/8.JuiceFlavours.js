function solve(input) {
    const qtyObj = {}
    const bottlesObj = {}

    for (let line of input) {
        let [product, qty] = line.split(' => ')
        qty = +qty

        if (!qtyObj.hasOwnProperty(product)) {
            qtyObj[product] = qty
        } else {
            qtyObj[product] += qty
        }

        if (qtyObj[product] >= 1000) {
            if (!bottlesObj.hasOwnProperty(product)) {
                bottlesObj[product] = 0
            }

            bottlesObj[product] = Math.floor(qtyObj[product] / 1000)
        }
    }

    for (let [prod, qty] of Object.entries(bottlesObj)) {
        console.log(`${prod} => ${qty}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])
console.log('------------')
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
)
