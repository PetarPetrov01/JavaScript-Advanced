function extractText() {
    let list = document.getElementById('items').children
    let items = Array.from(list)
    let result = ''
    
    for (let el of items) {
        result += `${el.textContent} \n`
    }

    let output = document.getElementById('result')
    output.value = result
}