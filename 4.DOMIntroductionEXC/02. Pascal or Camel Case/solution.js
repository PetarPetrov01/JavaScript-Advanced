function solve() {
  let text = document.getElementById('text').value
  let transformType = document.getElementById('naming-convention').value
  let result = document.getElementById('result')
  const textArr = text.split(' ').map(el => el.toLowerCase())
  let output = ''

  //Function that makes every first letter of every element capital
  function upperCase(arr) {
    arr = arr.map(word => {
      let firstLet = word.charAt(0).toUpperCase()
      word = firstLet + word.substring(1, word.length)
      return word
    })
    return arr
  }

  switch (transformType) {

    //Cut the first one and call the upperCase function with the left array
    case 'Camel Case':
      let fWord = textArr.shift()
      output = fWord + upperCase(textArr).join('')

      break;
    //call the upperCase function
    case 'Pascal Case':
      output = upperCase(textArr).join('')
      break;
    default:
      output = 'Error!'
      break;
  }

  result.innerText = output
}
