function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'))

    for (let btn of buttons) {
        btn.addEventListener('click', function () {
            let profile = btn.parentElement
            let inputCheck = profile.querySelector('input[value="lock"]')
            let hiddenInfo = profile.querySelector('div')

            if (!inputCheck.checked) {
                if (btn.textContent === 'Show more') {
                    hiddenInfo.style.display = 'block'
                    btn.textContent = 'Hide it'
                } else {
                    hiddenInfo.style.display = 'none'
                    btn.textContent = 'Show more'
                }
            }
        })
    }
}