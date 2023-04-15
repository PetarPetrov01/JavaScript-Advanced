function storeCatalogue(inputArr) {
    const catalogue = {}
    for (let line of inputArr) {
        let [product, price] = line.split(' : ')
        price = +price
        catalogue[product] = price
    }

    let sortedArr = Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))

    let letter = ''

    for (let [key, value] of sortedArr) {
        if (key.charAt(0) === letter){
            console.log(`  ${key}: ${value}`);
        } else {
            letter = key.charAt(0)
            console.log(letter);
            console.log(`  ${key}: ${value}`);
        }
    }
}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)