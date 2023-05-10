function solve() {

  const [input, output] = Array.from(document.querySelectorAll('#exercise textarea'))
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('#exercise button'))
  const table = document.querySelector('.table tbody')

  generateBtn.addEventListener('click', generate)
  buyBtn.addEventListener('click', buyItems)

  //Generate item
  function generate() {
    const itemArr = JSON.parse(input.value)

    for (let itemObj of itemArr) {
      let newTr = document.createElement('tr')

      //Create all cells
      newTr.appendChild(createTd('img', { src: itemObj.img }))
      newTr.appendChild(createTd('p', {}, itemObj.name))
      newTr.appendChild(createTd('p', {}, itemObj.price))
      newTr.appendChild(createTd('p', {}, itemObj.decFactor))
      newTr.appendChild(createTd('input', { type: 'checkbox' }))

      console.log(newTr.children);
      table.appendChild(newTr)
    }
  }

  //Create all child elements
  function createTd(nestedEl, properties, content) {

    let newTd = document.createElement('td')
    let childEl = document.createElement(nestedEl)

    for (let prop in properties) {
      childEl[prop] = properties[prop]
    }

    if (content) {
      childEl.textContent = content
    }

    newTd.appendChild(childEl)

    return newTd
  }


  function buyItems() {

    //Check which items are checked -/- Get the corrseponding row -/- return object of its children
    const checkedBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(cell => cell.parentElement.parentElement)    
      .map(row => ({
        name: row.children[1].textContent,
        price: +row.children[2].textContent,
        decFactor: +row.children[3].textContent
      }))

    const furniture = []
    let totalPrice = 0
    let sumFactor = 0

    for (let piece of checkedBoxes) {
      furniture.push(piece.name)
      totalPrice += piece.price
      sumFactor += piece.decFactor
    }

    let result = `Bought furniture: ${furniture.join(', ')}
Total price: ${totalPrice.toFixed(2)}
Average decoration factor: ${sumFactor / furniture.length}`

    output.value = result
  }
}

solve()