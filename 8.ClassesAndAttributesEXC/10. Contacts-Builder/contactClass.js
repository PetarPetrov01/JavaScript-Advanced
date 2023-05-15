class Contact {
    #online;

    constructor(fName, lName, phone, email) {
        this.firstName = fName
        this.lastName = lName
        this.phone = phone
        this.email = email
        this.online = false
    }

    get online() {
        return this.#online;
    }

    set online(value) {
        this.#online = value;

        if (this.titleDiv) {
            this.titleDiv.className = this.#online ? 'title online' : 'title';
        }
    }

    render(id) {
        this.newArticle = document.createElement('article')
        //Title DIV
        this.titleDiv = document.createElement('div')

        this.titleDiv.classList.add('title')
        this.titleDiv.textContent = `${this.firstName} ${this.lastName}`

        //Button
        this.infoBtn = document.createElement('button')
        this.infoBtn.textContent = '\u2139'

        this.infoBtn.addEventListener('click', (e) => {
            this.infoDiv.style.display =
                this.infoDiv.style.display === 'none' ? 'block' : 'none';
        })

        this.titleDiv.appendChild(this.infoBtn)

        //Info DIV
        this.infoDiv = document.createElement('div')
        this.infoDiv.classList.add('info')
        this.infoDiv.style.display = 'none'

        this.phoneSpan = document.createElement('span')
        this.phoneSpan.textContent = `\u260E ${this.phone}`

        this.emailSpan = document.createElement('span')
        this.emailSpan.textContent = `\u2709  ${this.email}`

        this.infoDiv.appendChild(this.phoneSpan)
        this.infoDiv.appendChild(this.emailSpan)

        this.newArticle.appendChild(this.titleDiv)
        this.newArticle.appendChild(this.infoDiv)

        document.getElementById(id).appendChild(this.newArticle)
    }
}