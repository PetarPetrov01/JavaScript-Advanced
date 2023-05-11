function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (e) => {
        console.log(e.target);
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    document.querySelector('#submit').addEventListener('click', (e) => {
        let validEls = []
        let username = document.querySelector("#username");
        let email = document.querySelector("#email");
        let pass = document.querySelector("#password");
        let confirmPass = document.querySelector("#confirm-password");
        let companyCheck = document.querySelector('#company')

        let userTest = /^[A-Za-z0-9]{3,20}$/
        let mailTest = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTest = /^[\w]{5,15}$/
        //Check username
        if (userTest.exec(username.value) === null) {
            username.style.borderColor = 'red'
            validEls.push(false)
        } else {
            username.style.borderColor = ''
            validEls.push(true)
        }

        //Check email
        if (mailTest.exec(email.value) === null) {
            email.style.borderColor = 'red'
            validEls.push(false)
        } else {
            email.style.borderColor = ''
            validEls.push(true)
        }

        if (pass.value === confirmPass.value && passTest.exec(pass.value) != null && passTest.exec(confirmPass.value) != null) {
            pass.style.borderColor = ''
            confirmPass.style.borderColor = ''
            validEls.push(true)
        } else {
            pass.style.borderColor = 'red'
            confirmPass.style.borderColor = 'red'
            validEls.push(false)
        }

        if (companyCheck.checked) {
            let companyNumber = document.querySelector('#companyNumber')
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red'
                validEls.push(false)
            } else {
                companyNumber.style.borderColor = ''
                validEls.push(true)
            }
        }

        if (!validEls.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }
    });
}
