function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const table = Array.from(document.querySelectorAll('tbody tr'))
      let input = document.querySelector('#searchField')
      let searchString = input.value

      console.log(searchString);
      console.log(table);

      for (let row of table) {
         let elArr = Array.from(row.children)
         let stringsArr = elArr.map(el => el.innerText)

         if (searchString && stringsArr.some(el => el.includes(searchString))) {
            row.className = 'select'
         } else {
            if (row.className === 'select') {
               row.classList.remove('select')
            }

         }
      }

      //Clear previous search
      input.value = ''
   }
}