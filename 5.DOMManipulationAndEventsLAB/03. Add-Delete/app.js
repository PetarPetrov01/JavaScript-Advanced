function addItem() {
    let text = document.querySelector('#newItemText').value
    let newLi = document.createElement('li')

    newLi.textContent = text

    const deleteBtn = document.createElement('a')
    
    deleteBtn.href = '#'
    deleteBtn.textContent = '[Delete]'
    deleteBtn.addEventListener('click', (event) => event.target.parentElement.remove())

    newLi.appendChild(deleteBtn)

    if (text) {
        document.querySelector('#items').appendChild(newLi)
    }
}