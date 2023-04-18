function search() {
   let list = Array.from(document.getElementById('towns').children)
   let inputString = document.getElementById('searchText').value
   let result = document.querySelector('#result')

   let match = 0
   list.forEach((town) => {
      let name = town.innerText

      if (inputString && name.indexOf(inputString) >= 0) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         match++
      } else {
         town.style.fontWeight = 'none';
         town.style.textDecoration = 'none';
      }
   })

   result.innerText = `${match} matches found`
}
