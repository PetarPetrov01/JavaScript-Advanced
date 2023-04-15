function solve() {

    let create = {
        mage,
        fighter
    }

    function mage(name) {
        let mage = {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                console.log(`${mage.name} cast ${spell}`);
                mage.mana--
            }
        }
        return mage
    }

    function fighter(name) {
        let fighter = {
            name,
            health: 100,
            stamina: 100,
            fight() {
                console.log(`${fighter.name} slashes at the foe!`);
                fighter.stamina--
            }
        }

        return fighter
    }

    return create
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
