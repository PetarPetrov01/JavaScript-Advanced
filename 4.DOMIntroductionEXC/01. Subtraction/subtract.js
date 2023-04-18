function subtract() {
    let fNum = document.getElementById('firstNumber').value
    let sNum = document.getElementById("secondNumber").value
    let sum = Number(fNum) - Number(sNum)

    let output = document.createElement('span')
    output.innerText = sum
    
    let result = document.getElementById('result')
    result.appendChild(output)
    console.log('TODO:...');
}