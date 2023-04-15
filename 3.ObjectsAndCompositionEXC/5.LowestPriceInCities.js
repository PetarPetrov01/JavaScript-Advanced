function lowestPrice(input) {

    let productsObj = {}
    for (let line of input) {
        let [town, product, price] = line.split(' | ')
        price = +price

        if (productsObj.hasOwnProperty(product)) {
            if (productsObj[product].price > price) {
                productsObj[product].town = town
                productsObj[product].price = price
            }
        } else {
            productsObj[product] = {
                town,
                price: +price
            }
        }

    }

    for (let key in productsObj) {
        console.log(`${key} -> ${productsObj[key].price} (${productsObj[key].town})`);
    }
}


lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)