function townPopulation(inputArr) {
    let towns = {}

    for (let line of inputArr) {
        let [town, population] = line.split(' <-> ')
        population = +population
        if (!towns.hasOwnProperty(town)) {
            towns[town] = population
        } else {
            towns[town] += population
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)