function filterEmployees(employees, filter) {
    const [propertyKey, propertyValue] = filter.split('-')
    let filtered = 0

    JSON.parse(employees).forEach(pObj => filterByCriteria.call(pObj))

    function filterByCriteria() {
        if (this[propertyKey] == propertyValue || this[propertyKey] == 'all') {
            return console.log(`${filtered++}. ${this.first_name} ${this.last_name} - ${this.email}`)
        }
    }
}

const data = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`

filterEmployees(data, 'gender-Female')
