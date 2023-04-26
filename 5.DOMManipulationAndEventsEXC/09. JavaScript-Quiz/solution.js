function solve() {

  const sections = Array.from(document.querySelectorAll('section'))
  const questions = Array.from(document.querySelectorAll('.question-wrap h2'))
  const resultUl = document.querySelector('#results')
  let correct = 0

  let answersObj = {
    'Question #1: Which event occurs when the user clicks on an HTML element?': 'onclick',
    'Question #2: Which function converting JSON to string?': 'JSON.stringify()',
    'Question #3: What is DOM?': 'A programming API for HTML and XML documents'
  }

  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i].textContent
    let currentSection = sections[i]

    currentSection.addEventListener('click', answer)

    function answer(e) {

      //Caller is button
      if (e.target.tagName === 'P') {

        //Check the right answer
        if (e.target.textContent === answersObj[currentQuestion]) {
          correct++
        }
        sections[i].style.display = 'none'

        //Index of section
        if (i < 2) {
          sections[i + 1].style.display = 'block'
        } else if (i == 2) {
          resultUl.style.display = 'block'

          //Check correct answers
          if (correct === 3) {
            resultUl.querySelector('h1').textContent = 'You are recognized as top JavaScript fan!'
          } else {
            resultUl.querySelector('h1').textContent = `You have ${correct} right answers`
          }
        }
      }
    }
  }
}



