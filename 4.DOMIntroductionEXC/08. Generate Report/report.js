function generateReport() {
    let talbeHeadings = Array.from(document.querySelectorAll('tr th'))
    let checkBoxes = Array.from(document.querySelectorAll('tr th input'))
    let infoTable = Array.from(document.querySelectorAll('tbody tr'))
    let output = document.querySelector('#output')

    let outputArr = []
    for (let col = 0; col < talbeHeadings.length; col++) {
        let columnName = checkBoxes[col].name        //FORGOT that input has attribute "name" !!!

        //If column is checked iterate every row
        if (checkBoxes[col].checked) {

            for (let row = 0; row < infoTable.length; row++) {
                let cellObj = {}
                let currentRow = Array.from(infoTable[row].children)
                let currentCell = currentRow[col].innerText

                //If the element is object take its properties
                if (typeof outputArr[row] === 'object') {
                    cellObj = outputArr[row]
                }
                cellObj[columnName] = currentCell
                outputArr[row] = cellObj
            }
        }
    }
    let parsed = JSON.stringify(outputArr)
    output.textContent = parsed
}