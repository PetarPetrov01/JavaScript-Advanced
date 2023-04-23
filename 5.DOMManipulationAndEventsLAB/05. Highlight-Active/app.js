// function focused() {
//     let inputs = Array.from(document.querySelectorAll('div input'))

//     for (let input of inputs) {
//         input.addEventListener('focus', (ev) => {
//             ev.target.parentElement.className = 'focused'
//         })
//         input.addEventListener('blur', (ev) => {
//             ev.target.parentElement.className = ''
//         })
//     }
// }

//Using delegation JUDGJE DOESNT ACCEPT!
function focused() {
    let input = document.querySelector('div')

    input.addEventListener('focusin', (event) => {

        //NO NEED TO CHECK BEACAUSE THE ONLY EL WITH focusin att is input
            event.target.parentElement.className = 'focused'
    })
    input.addEventListener('focusout', (event) => {
            event.target.parentElement.className = ''
    })
}