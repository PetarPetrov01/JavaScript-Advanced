function solution() {
    let text = ''
    return {
        append(str) {
            text += str
        },
        removeStart(num) {
            text = text.substring(num)
        },
        removeEnd(num) {
            text = text.slice(0, - num)
        },
        print() {
            console.log(text);
        }
    }
    
}


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

// function solution() {
//     let text = ''
//     return {
//         append,
//         removeStart,
//         removeEnd,
//         print
//     }
//     function append(str) {
//         text += str
//     }
//     function removeStart(num) {
//         text = text.substring(num)
//     }
//     function removeEnd(num) {
//         text = text.slice(0, - num)
//     }
//     function print() {
//         console.log(text);
//     }
// }