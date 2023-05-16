function result() {
    class Person {
        constructor(name, email) {
            this.name = name
            this.email = email
        }

        toString() {
            let result = Object.entries(this).map(ar => `${ar[0]}: ${ar[1]}`).join(', ')
            return `${this.constructor.name} (${result})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email)
            this.subject = subject
        }

    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email)
            this.course = course
        }


    }
    return { Person, Teacher, Student }
}

let classes = result()
let Teacher = classes.Teacher
let Student = classes.Student

let myStudent = new Student('Ivan', 'koo@mail.bg', 'Math')
console.log(myStudent.toString())
