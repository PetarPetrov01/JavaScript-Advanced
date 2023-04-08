function cookingByNums(...input) {
    let num = +input.shift()
    for (el of input) {
        switch (el) {
            case 'chop':
                num /= 2
                break;
            case 'dice':
                num = num ** (1 / 2)
                break;
            case 'spice':
                num++
                break;
            case 'bake':
                num *= 3
                break;
            case 'fillet':
                num *= 0.8
                break;
        }
        console.log(num);
    }
}
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet')