class List {
    constructor() {
        this.collection = []
        this.collection.sort((a, b) => a - b)
        this.size = this.collection.length
    }
    add(num) {
        this.collection.push(num)
        this.collection.sort((a, b) => a - b)
        this.size++
    }

    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Provided index is incorrect!')
        }
        this.collection.splice(index, 1)
        this.size--
    }

    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Provided index is incorrect!')
        }
        return this.collection[index]
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.hasOwnProperty('get'))
console.log(list);
list.remove(1);
console.log(list.get(1));

