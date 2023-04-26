function attachEventsListeners() {

    const distancesObj = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }
    const inputUnits = document.querySelector('#inputUnits')
    const outputUnits = document.querySelector('#outputUnits')

    const convertBtn = document.querySelector('#convert')

    convertBtn.addEventListener('click', onConvert)

    function onConvert() {
        const input = +document.querySelector('#inputDistance').value
        const output = document.querySelector('#outputDistance')

        let selectedInput = Array.from(inputUnits.children)[inputUnits.selectedIndex].value
        let selectedOutput = Array.from(outputUnits.children)[outputUnits.selectedIndex].value

        let distanceInMeters = input * distancesObj[selectedInput]
        
        output.value = distanceInMeters / distancesObj[selectedOutput]
    }
}


// function attachEventsListeners() {
//     const inputUnits = document.querySelector('#inputUnits')
//     const outputUnits = document.querySelector('#outputUnits')

//     const convertBtn = document.querySelector('#convert')

//     convertBtn.addEventListener('click', convert)

//     function convert() {
//         const input = +document.querySelector('#inputDistance').value
//         const output = document.querySelector('#outputDistance')

//         let selectedInput = Array.from(inputUnits.children)[inputUnits.selectedIndex].value
//         let selectedOutput = Array.from(outputUnits.children)[outputUnits.selectedIndex].value

//         let valueInMeters = 0
//         let result = 0

//         output.value = 0
//         //Turn any unit to meters
//         switch (selectedInput) {
//             case 'km':
//                 valueInMeters = input * 1000
//                 break;
//             case 'm':
//                 valueInMeters = input
//                 break;
//             case 'cm':
//                 valueInMeters = input / 100
//                 break;
//             case 'mm':
//                 valueInMeters = input / 1000
//                 break;
//             case 'mi':
//                 valueInMeters = input * 1609.34
//                 break;
//             case 'yrd':
//                 valueInMeters = input * 0.9144
//                 break;
//             case 'ft':
//                 valueInMeters = input * 0.3048
//                 break;
//             case 'in':
//                 valueInMeters = input * 0.0254
//                 break;
//         }
//         console.log('Current value:');
//         console.log(valueInMeters);
//         //Turn meters to any unit
//         switch (selectedOutput) {
//             case 'km':
//                 result = valueInMeters / 1000
//                 break;
//             case 'm':
//                 result = valueInMeters
//                 break;
//             case 'cm':
//                 result = valueInMeters * 100
//                 break;
//             case 'mm':
//                 result = valueInMeters * 1000
//                 break;
//             case 'mi':
//                 result = valueInMeters / 1609.34
//                 break;
//             case 'yrd':
//                 result = valueInMeters / 0.9144
//                 break;
//             case 'ft':
//                 result = valueInMeters / 0.3048
//                 break;
//             case 'in':
//                 result = valueInMeters / 0.0254
//                 break;
//         }
//         output.value = result
//     }
// }