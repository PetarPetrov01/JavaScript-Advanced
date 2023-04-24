function create(words) {
   //Itterate the array
   for (let str of words) {
      let newDiv = document.createElement('div')
      let newP = document.createElement('p')
      newP.style.display = 'none'
      newP.textContent = str

      newDiv.appendChild(newP)

      //Display content event
      newDiv.addEventListener('click', displayContent)

      //Append each div
      document.querySelector('#content').appendChild(newDiv)
   }

   function displayContent(event) {
      let childP = event.target.querySelector('p')
      childP.style.display = 'block'
      console.log('kon');
   }
}