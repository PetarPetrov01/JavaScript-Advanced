function solve() {
    const inputTask = document.querySelector('form input#task')
    const inputDescription = document.querySelector('form textarea#description')
    const inputDate = document.querySelector('form input#date')

    const [, openDiv, inProgressDiv, completeDiv] = Array.from(document.querySelectorAll('.wrapper section')).map(section => section.children[1])

    const btn = document.querySelector('form button#add')
    btn.addEventListener('click', add)

    function add(e) {
        e.preventDefault()
        const task = inputTask.value
        const description = inputDescription.value
        const date = inputDate.value

        if (!task || !description || !date) {
            return
        }
        createArticle('Open', 'green', 'red', task, description, date)
    }

    function createArticle(secType, btn1, btn2, task, description, date) {
        const newArticle = document.createElement('article')
        const head = document.createElement('h3')
        head.textContent = task

        const firstP = document.createElement('p')
        firstP.textContent = `Description: ${description}`

        const secondP = document.createElement('p')
        secondP.textContent = `Due Date: ${date}`

        newArticle.appendChild(head)
        newArticle.appendChild(firstP)
        newArticle.appendChild(secondP)

        if (secType === 'Open' || secType === 'InProgress') {

            let newDiv = document.createElement('div')
            newDiv.className = 'flex'

            let firstBtn = document.createElement('button')
            let secondBtn = document.createElement('button')

            firstBtn.className = btn1
            secondBtn.className = btn2

            newDiv.appendChild(firstBtn)
            newDiv.appendChild(secondBtn)

            newArticle.appendChild(newDiv)
            
            if (secType === 'Open') {
                firstBtn.textContent = 'Start'
                firstBtn.addEventListener('click', () => {
                    delArticle(newArticle)
                    createArticle('InProgress', 'red', 'orange',task,description,date)
                })

                secondBtn.textContent = 'Delete'
                secondBtn.addEventListener('click', () => delArticle(newArticle))

                openDiv.appendChild(newArticle)
            } else {
                firstBtn.textContent = 'Delete'
                secondBtn.textContent = 'Finish'

                firstBtn.addEventListener('click', () => delArticle(newArticle))
                secondBtn.addEventListener('click', () => {
                    delArticle(newArticle)
                    createArticle('Complete', null, null,task,description,date)
                })

                inProgressDiv.appendChild(newArticle)
            }

        } else if (secType === 'Complete') {
            completeDiv.appendChild(newArticle)
        }
    }
    function delArticle(article) {
        article.remove()
    }
}




// if (secType === 'Open' || secType === 'InProgress') {

//     let newDiv = document.createElement('div')
//     newDiv.className = 'flex'

//     let firstBtn = document.createElement('button')
//     let secondBtn = document.createElement('button')

//     firstBtn.className = btn1
//     secondBtn.className = btn2
    
//     newDiv.appendChild(firstBtn)
//     newDiv.appendChild(secondBtn)

//     newArticle.appendChild(newDiv)

//     //If OPEN
//     if (secType === 'Open') {
//         firstBtn.textContent = 'Start'
//         firstBtn.addEventListener('click', () => {
//             delArticle(newArticle)
//             createArticle('InProgress', 'red', 'orange')
//         })

//         secondBtn.textContent = 'Delete'
//         secondBtn.addEventListener('click', () => delArticle(newArticle))

//         openDiv.appendChild(newArticle)
//     } else {
//         firstBtn.textContent = 'Delete'
//         secondBtn.textContent = 'Finish'

//         firstBtn.addEventListener('click', () => delArticle(newArticle))
//         secondBtn.addEventListener('click', () => {
//             delArticle(newArticle)
//             createArticle('Complete', null, null)
//         })

//         inProgressDiv.appendChild(newArticle)
//     }

// } else if (secType === 'Complete') {
//     completeDiv.appendChild(newArticle)
// }
// }