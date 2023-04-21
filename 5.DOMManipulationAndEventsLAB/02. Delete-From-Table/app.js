function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value
    const table = Array.from(document.querySelectorAll('tbody tr'))
    let deleted = false

    for (let row of table) {
        let cell = row.children[1].textContent

        if (email === cell) {
            row.remove()
            deleted = true
        }
    }

    let result = document.querySelector('#result')
    result.textContent = deleted ? '[Deleted]' : 'Not found.'

}