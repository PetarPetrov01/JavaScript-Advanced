function solve() {
    const menuTo = document.querySelector('#selectMenuTo')
    const firstOption = document.querySelector('#selectMenuTo option')
    firstOption.value = 'binary'
    firstOption.textContent = 'Binary'

    let hexaDecimalOption = document.createElement('option')
    hexaDecimalOption.value = 'hexadecimal'
    hexaDecimalOption.textContent = 'Hexadecimal'

    menuTo.appendChild(hexaDecimalOption)

    let button = document.querySelector('button')
    button.addEventListener('click', convert)

    function convert() {
        let decimalNum = document.getElementById('input').value
        let selected = document.getElementById('selectMenuTo')

        if (decimalNum) {
            decimalNum = +decimalNum
        }

        let selectedValue = selected.options[selected.selectedIndex].value
        let outputNum = ''
        
        switch (selectedValue) {
            case 'binary':
                outputNum = decimalNum.toString(2)
                break;
            case 'hexadecimal':
                outputNum = decimalNum.toString(16).toUpperCase()
                break;
        }
        document.querySelector('#result').value = outputNum
    }
}