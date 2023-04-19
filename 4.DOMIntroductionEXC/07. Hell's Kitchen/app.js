function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //getting all elements
      const inputArr = JSON.parse(document.querySelector('textarea').value)
      let bestRestaurant = document.querySelector('#bestRestaurant p')
      let bestWorkers = document.querySelector('#workers p')

      //Creating an object for all restaurants
      let restaurantsObj = {}
      for (let restaurant of inputArr) {
         let [name, workersStr] = restaurant.split(' - ')
         let workersArr = workersStr.split(', ').map(worker => worker.split(' '))

         if (!restaurantsObj.hasOwnProperty(name)) {
            restaurantsObj[name] = {}
         }

         for (let workerInfo of workersArr) {
            let worker = workerInfo[0]
            let salary = +workerInfo[1]

            restaurantsObj[name][worker] = salary
         }
      }

      //OBJ => Asoc array, sorting
      let sortedArr = Object.entries(restaurantsObj)
         .sort((first, second) => {
            let firstArr = Object.values(first[1])
            let secondArr = Object.values(second[1])

            let firstAverage = firstArr.reduce((acc, b) => acc + b, 0) / firstArr.length
            let secondAverage = secondArr.reduce((acc, b) => acc + b, 0) / secondArr.length

            return secondAverage - firstAverage;
         })

      //Taking the first element of the sorted Arr(best restaurant) and sorting all workers
      let bestSorted = sortedArr[0]
      let bestSalaries = Object.entries(bestSorted[1])
         .sort((a, b) => b[1] - a[1])

      let averageSalary = 0
      let workersOutput = ''

      for (let salary of bestSalaries) {
         workersOutput += `Name: ${salary[0]} With Salary: ${salary[1]} `
         averageSalary += salary[1] / bestSalaries.length
         console.log(salary);
      }

      bestRestaurant.textContent = `Name: ${bestSorted[0]} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${bestSalaries[0][1].toFixed(2)}`
      bestWorkers.textContent = workersOutput.trimEnd()
   }
}