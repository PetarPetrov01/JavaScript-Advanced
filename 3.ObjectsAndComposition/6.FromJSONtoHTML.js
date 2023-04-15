function fromJSONToHTMLTable(input) {
    let arr = JSON.parse(input);
    let resultArr = ['<table>']
    resultArr.push(keyToRow(arr))
    arr.forEach((student) => resultArr.push(valueToRow(student)))
    resultArr.push('</table>')

    console.log(resultArr.join('\n'));

    function keyToRow(arr) {
        let output = '   <tr>'
        for (let key of Object.keys(arr[0])) {
            output += `<th>${escapeHtml(key)}</th>`
        }
        output += '</tr>'
        return output
    }

    function valueToRow(obj) {
        let output = '   <tr>'
        for (let value of Object.values(obj)) {
            output += `<td>${escapeHtml(value)}</td>`
        }
        output += '</tr>'
        return output
    }

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)