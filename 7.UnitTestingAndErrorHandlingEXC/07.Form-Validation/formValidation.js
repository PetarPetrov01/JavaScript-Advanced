function validate() {
    const [username, email, pass, confirmPass, company] = Array.from(document.querySelectorAll('div.pairContainer input'))
    const submitBtn = document.querySelector('button#submit')

    const companyField = document.querySelector('#companyInfo')
    const companyNumber = document.querySelector('#companyNumber')

    company.addEventListener('change', () => {
        if (company.checked) {
            companyField.style.display = 'block'
        } else {
            companyField.style.display = 'none'
        }
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        //Array of all input elements
        const elementsArr = [username, email, pass, confirmPass, companyNumber]

        //The keys match each element's id
        const inputsObj = {
            "username": /^[A-Za-z0-9]{3,20}$/.exec(username.value) ? true : false,
            "email": /^[^@.]+@[^@]*\.[^@]*$/.exec(email.value) ? true : false,
            "password": /^\w{5,15}$/.exec(pass.value) && confirmPass.value === pass.value ? true : false,
            "confirm-password": /^\w{5,15}$/.exec(confirmPass.value) && confirmPass.value === pass.value ? true : false,
            "companyNumber": true
        }

        if (company.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                inputsObj.companyNumber = false
            } else {
                companyNumber.style.borderColor = "";
                inputsObj.companyNumber = true
            }
        }

        for (let el of elementsArr) {
            if (inputsObj[el.id]) {
                el.style.borderColor = ''
            } else {
                el.style.borderColor = "red"
            }
        }

        //If all validations are true >> show the div else hide it        
        if (Object.values(inputsObj).includes(false)) {
            document.querySelector('div#valid').style.display = 'none'
        } else {
            document.querySelector('div#valid').style.display = 'block'
        }
    })
}