//DELEGATION 

function attachEventsListeners() {

    const ratioObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    let main = document.querySelector('body main')
    main.addEventListener('click', onConvert)

    const inputs = {
        days: document.querySelector('#days'),
        hours: document.querySelector('#hours'),
        minutes: document.querySelector('#minutes'),
        seconds: document.querySelector('#seconds')
    }

    function onConvert(event) {
        if (event.target.type === 'button') {
            const input = event.target.parentElement.querySelector('input[type="text"]')
            const timeObj = convert(+input.value, input.id)

            Object.keys(timeObj).forEach((unit) => inputs[unit].value = timeObj[unit])
        }
    }
    function convert(value, units) {
        let inDays = value / ratioObj[units]

        return {
            days: inDays,
            hours: inDays * ratioObj.hours,
            minutes: inDays * ratioObj.minutes,
            seconds: inDays * ratioObj.seconds
        }
    }
}

//WITHOUT DELEGATION
// function attachEventsListeners() {
//     let inputDays = document.querySelector('#days')
// let inputHours = document.querySelector('#hours')
// let inputMinutes = document.querySelector('#minutes')
// let inputSeconds = document.querySelector('#seconds')

// let daysBtn = document.querySelector('#daysBtn')
// let hoursBtn = document.querySelector('#hoursBtn')
// let minutesBtn = document.querySelector('#minutesBtn')
// let secondsBtn = document.querySelector('#secondsBtn')

// daysBtn.addEventListener('click', function () {
//     inputHours.value = +inputDays.value * 24
//     inputMinutes.value = +inputDays.value * 24 * 60
//     inputSeconds.value = +inputDays.value * 24 * 3600
// })

// hoursBtn.addEventListener('click', function () {
//     inputDays.value = +inputHours.value /24
//     inputMinutes.value = +inputHours.value * 60
//     inputSeconds.value = +inputHours.value * 3600
// })

// minutesBtn.addEventListener('click', function () {
//     inputDays.value = +inputMinutes.value /(24*60)
//     inputHours.value = +inputMinutes.value /60
//     inputSeconds.value = +inputMinutes.value *60
// })

// secondsBtn.addEventListener('click', function () {
//     inputDays.value = +inputSeconds.value /(24*60*60)
//     inputHours.value =+inputSeconds.value /(60*60)
//     inputMinutes.value = +inputSeconds.value /60
// })
// }

