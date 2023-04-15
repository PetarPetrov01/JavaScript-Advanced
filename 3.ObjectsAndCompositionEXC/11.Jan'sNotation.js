function janNotation(input) {
    let numbers = []
    let error = false

    for (let el of input) {
        if (error) break;

        if (typeof el === 'number') {
            numbers.push(el)

        } else {

            if (numbers.length >= 2) {
                let sNum = numbers.pop()
                let fNum = numbers.pop()
                let result = 0
                switch (el) {
                    case '+':
                        result = sNum + fNum
                        break;
                    case '-':
                        result = fNum - sNum
                        break;
                    case '*':
                        result = fNum * sNum
                        break;
                    case '/':
                        result = fNum / sNum
                        break;
                }
                numbers.push(result)

            } else {
                console.log('Error: not enough operands!');
                error = true
                break;
            }
        }
    }
    if(error) return;

    if (numbers.length !== 1){
        console.log('Error: too many operands!');
    } else {
        console.log(numbers[0]);
    }
}
janNotation([15,
    '/']
     
   
)