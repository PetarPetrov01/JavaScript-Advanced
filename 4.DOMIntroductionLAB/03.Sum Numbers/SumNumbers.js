function calc() {
    let inp1 = document.getElementById('num1').value
    let inp2 = document.getElementById('num2').value
    let sum = Number(inp1) + Number(inp2)

    let output = document.getElementById('sum')
    output.value = sum
}
