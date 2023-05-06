function solve() {

    const [inputName, inputHall, inputPrice] = Array.from(document.querySelectorAll('#container input'))
    const onScreenBtn = document.querySelector('#container button')
    const screenUl = document.querySelector('#movies ul')
    const archiveUl = document.querySelector('#archive ul')
    const clearBtn = document.querySelector('#archive button')

    onScreenBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let movie = inputName.value
        let hall = inputHall.value
        let price = inputPrice.value

        if (movie === '' || hall === '' || price === '') return

        price = Number(price)
        if (isNaN(price)) return

        screenUl.appendChild(createLi('onScreen', movie, hall, price))

        inputName.value = ''
        inputHall.value = ''
        inputPrice.value = ''

    })

    clearBtn.addEventListener('click', () => {
        console.log('sadasd');
        for (let li of Array.from(archiveUl.children)) {
            li.remove()
        }
    })

    function createLi(elType, movie, hall, price) {
        const newLi = document.createElement('li')
        const newSpan = document.createElement('span')
        newSpan.textContent = movie

        newLi.appendChild(newSpan)

        if (elType === 'onScreen') {
            const divEl = document.createElement('div')

            const newStrong = document.createElement('strong')
            newStrong.textContent = `Hall: ${hall}`
            newLi.appendChild(newStrong)

            const priceStrong = document.createElement('strong')
            priceStrong.textContent = price.toFixed(2)
            divEl.appendChild(priceStrong)

            const newInput = document.createElement('input')
            newInput['placeholder'] = 'Ticekts sold'
            divEl.appendChild(newInput)

            const archiveBtn = document.createElement('button')
            archiveBtn.textContent = 'Archive'
            divEl.appendChild(archiveBtn)

            archiveBtn.addEventListener('click', () => {
                
                let inputValue = newInput.value
                if (inputValue === '') return
                inputValue = Number(inputValue)

                if (isNaN(inputValue)) return

                let totalPrice = inputValue * price
                archiveUl.appendChild(createLi('archive', movie, hall, totalPrice))
                newLi.remove()
            })

            newLi.appendChild(divEl)
        } else if (elType === 'archive') {
            const total = document.createElement('strong')
            total.textContent = `Total amount: ${price.toFixed(2)}`
            newLi.appendChild(total)

            const delBtn = document.createElement('button')
            delBtn.textContent = 'Delete'
            newLi.appendChild(delBtn)

            delBtn.addEventListener('click', () => newLi.remove())
        }
        return newLi
    }
}