function addItem() {
    const listMenu = document.querySelector('#menu')
    let inputText = document.querySelector('#newItemText')
    let inputValue = document.querySelector('#newItemValue')

    let newOption = document.createElement('option')

    if (inputText.value && inputValue.value) {
        
        newOption.textContent = inputText.value
        newOption.value = inputValue.value

        listMenu.appendChild(newOption)

        inputText.value = ''
        inputValue.value = ''
    }
}