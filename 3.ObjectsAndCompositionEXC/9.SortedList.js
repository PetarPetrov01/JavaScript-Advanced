function createSortedList() {
    let arr = []

    const obj = {
        add,
        get,
        remove,
        size: 0
    }

    function add(el) {
        arr.push(el)
        obj.size++
        arr = arr.sort((a, b) => a - b)
    }

    function get(index) {
        if (index >= 0 && index < arr.length) {
            return arr[index]
        }

    }

    function remove(index) {
        if (index >= 0 && index < arr.length) {
            arr.splice(index, 1)
            obj.size--
        }
    }

    return obj;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);





