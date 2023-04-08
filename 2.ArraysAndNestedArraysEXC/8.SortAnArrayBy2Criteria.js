function sortArrBy2Criteria(inputArr) {
    inputArr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach((a)=>console.log(a))
}
sortArrBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']

)