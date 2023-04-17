function sumTable() {
    let table = document.getElementsByTagName('tr')
    let total = 0
    console.log(table);
    for (let i = 1; i < table.length - 1; i++) {
        let data = table[i].children
        let amount = data[data.length - 1].textContent
        total += Number(amount)
    }
    let sum = document.getElementById('sum')
    sum.textContent = total
}