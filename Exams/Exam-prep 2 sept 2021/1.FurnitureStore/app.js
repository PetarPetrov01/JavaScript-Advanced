window.addEventListener('load', solve);

function solve() {
    //Get reference to all all inputs and elements
    const model = document.querySelector('form #model')
    const year = document.querySelector('form #year')
    const description = document.querySelector('form #description')
    const price = document.querySelector('form #price')
    const inputsArr = [model, year, description, price]

    const addButton = document.querySelector('form #add')

    const tBody = document.querySelector('#furniture-list')

    console.log(tBody)

    //Event listener to add button
    addButton.addEventListener('click', (e) => {
        e.preventDefault()

        //Validate inputs
        if (inputsArr.map(el => el.value).some(val => val == '') || Number(year.value) < 0 || Number(price.value) < 0) {
            return
        }

        //Create elements and append them to the table
        let infoTr = elCreate('tr', { class: 'info' },
            elCreate('td', {}, `${model.value}`),
            elCreate('td', {}, Number(price.value).toFixed(2)),
            elCreate('td', {},
                elCreate('button', { class: 'moreBtn' }, 'More Info'),
                elCreate('button', { class: 'buyBtn' }, 'Buy it')
            )
        )

        let hiddenTr = elCreate('tr', { class: 'hide' },
            elCreate('td', {}, `Year: ${year.value}`),
            elCreate('td', { colspan: 3 }, `Description: ${description.value}`)
        )

        tBody.appendChild(infoTr)
        tBody.appendChild(hiddenTr)

        //Clear the inputs if validation passes
        inputsArr.forEach(el => el.value = '')


        //Other  buttons functionality
        const moreBtn = infoTr.querySelector('.moreBtn')
        const buyBtn = infoTr.querySelector('.buyBtn')

        moreBtn.addEventListener('click', showHideInfo.bind(null, hiddenTr, moreBtn))

        let currentPrice = infoTr.querySelector('.info :nth-child(2)').textContent

        buyBtn.addEventListener('click', buyItem.bind(null, currentPrice))
    })

    function showHideInfo(hiddenTr, btn) {

        if (hiddenTr.style.display != 'contents') {
            btn.textContent = 'Less Info'
            hiddenTr.style.display = 'contents'
        } else {
            btn.textContent = 'More Info'
            hiddenTr.style.display = 'none'
        }
    }

    function buyItem(price) {
        let totaPrice = document.querySelector('.total-price')
        totaPrice.textContent = (Number(totaPrice.textContent) + Number(price)).toFixed(2)

        document.querySelector('.info').remove()
        document.querySelector('.hide').remove()
    }

    function elCreate(elType, attributes, ...content) {
        const newEl = document.createElement(elType)

        for (let prop in attributes) {
            console.log(prop)
            if (prop == 'class') {
                newEl.classList.add(attributes[prop])
            } else {
                newEl.setAttribute(prop, attributes[prop])
            }

        }

        for (let el of content) {
            if (typeof el == 'string' || typeof el == 'number') {
                el = document.createTextNode(el)
            }
            newEl.appendChild(el)
        }
        return newEl
    }
}
