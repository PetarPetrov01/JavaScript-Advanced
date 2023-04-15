function calorieObject(input) {
    let obj = {}
    while (input.length !== 0){
        obj[input.shift()] = +input.shift()
    }
    console.log(obj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])