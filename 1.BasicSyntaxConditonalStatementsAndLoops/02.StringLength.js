function length(...arr) {
    let sum = 0
    for(el of arr){
        sum += el.length
    }
    console.log(sum);
    console.log(Math.round(sum/3));
}
length('chocolate', 'ice cream', 'cake')