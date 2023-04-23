function validate() {
    const inputEmail = document.querySelector('#email')

    inputEmail.addEventListener('change', (event) => {
        let valid = /^[a-z]+@[a-z]+\.[a-z]+$/g.exec(inputEmail.value)
        console.log(valid);
        if (valid) {
            event.target.className = ''
        } else {

            event.target.className = 'error'
        }
    })
}