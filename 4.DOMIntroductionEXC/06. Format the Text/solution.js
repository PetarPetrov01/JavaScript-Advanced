function solve() {
  let text = document.getElementById('input').value
  let textArr = text.split('.')
  textArr.pop() //Last element is empty, so get rid of it

  let output = document.getElementById('output')
  
  let finalText = ''
  let sentences = 0

  for (let i = 0; i < textArr.length; i++) {

    if (sentences === 0) {
      finalText += `<p>`
    }
    sentences++
    finalText += textArr[i] + '.'
    if (sentences === 3 || i === textArr.length - 1) {
      finalText += `</p>`
      sentences = 0
    }
  }

  output.innerHTML = finalText
}