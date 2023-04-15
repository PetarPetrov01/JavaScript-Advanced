function heroInventort(inputArr) {
    let heroesArr = []

    for (let hero of inputArr) {
        let [name, level, items] = hero.split(' / ')
        level = +level
        items = items ? items.split(', ') : []

        let heroObj = {
            name,
            level,
            items
        }
        heroesArr.push(heroObj);
    }
    console.log(JSON.stringify(heroesArr));
}
heroInventort(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)