function extract(content) {
    let paragraph = document.getElementById(content).innerText
    let result = ''
    const pattern = /\((?<name>[A-Za-z ]+)\)/g

    let match = pattern.exec(paragraph)
    const text = []
    while (match) {
        text.push(match.groups.name)
        match = pattern.exec(paragraph)
    }

    result = text.join('; ')
    return result
}
