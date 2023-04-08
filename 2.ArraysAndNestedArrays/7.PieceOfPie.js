function PieceOfPie(flavoursArr, pieStart, pieEnd) {

    let startIndex = flavoursArr.indexOf(pieStart)
    let endIndex = flavoursArr.indexOf(pieEnd) + 1

    let resultArr = flavoursArr.slice(startIndex,endIndex)
    
    return resultArr
}
PieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)