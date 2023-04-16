function editElement(ref, match, replace) {
    let pattern = new RegExp(match,'g')
    let result = ref.textContent.replace(pattern, replace)

    ref.textContent = result
}