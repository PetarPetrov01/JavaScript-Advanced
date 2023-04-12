function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += population * this.taxRate
        },
        applyGrowth(percent) {
            this.population *= 1 + (percent / 100)
        },
        applyRecession(percent) {
            this.treasury *= 1 - percent / 100
        }
    }
    return city
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);

console.log(city.treasury);
console.log(city.population);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

