function calculator() {
    let num1 = 0
    let num2 = 0
    let result = 0

    const calcObj = {
        init
        , add
        , subtract
    }

    function init(selector1, selector2, resultSelector) {
        num1 = document.querySelector(selector1)
        num2 = document.querySelector(selector2)
        result = document.querySelector(resultSelector)
    }

    function add() {
        result.value = Number(num1.value) + Number(num2.value)
    }
    function subtract() {
        result.value = Number(num1.value) - Number(num2.value)
    }
    // TODO:

    return calcObj
}




