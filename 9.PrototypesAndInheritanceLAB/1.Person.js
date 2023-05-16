function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName
    }

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        get: function () {
            return `${this.firstName} ${this.lastName}`
        },
        set: function (full) {
            [this.firstName, this.lastName] = full.split(' ')
        }
    })

    return result
}



let person = createPerson("Peter", "Ivanov");
console.log(person)
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
