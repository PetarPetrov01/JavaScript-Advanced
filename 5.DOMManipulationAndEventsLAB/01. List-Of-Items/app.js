function addItem() {
    let text = document.querySelector('#newItemText').value
    let newLi = document.createElement('li')

    newLi.textContent = text
    console.log(newLi.textContent);

    if(text){
        document.querySelector('#items').appendChild(newLi)
    }
    
}