class Company {
    constructor() {
        this.departments = {}
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!')
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = []
        }

        this.departments[department].push({
            name,
            salary,
            position
        })

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestSalary = 0

        let sorted = Object.entries(this.departments).sort((a, b) => {
            let sumSalariesA = a[1].reduce((acc, obj) => acc + obj.salary, 0)
            let sumSalariesB = b[1].reduce((acc, obj) => acc + obj.salary, 0)

            let averageSalaryA = sumSalariesA / a[1].length
            let averageSalaryB = sumSalariesB / b[1].length

            bestSalary = Math.max(Math.max(averageSalaryA, averageSalaryB), bestSalary)
            return averageSalaryB - averageSalaryA
        })
        let bestDep = sorted[0]

        let output = `Best Department is: ${bestDep[0]}
Average salary: ${bestSalary.toFixed(2)}\n`

        let sortedBest = bestDep[1].sort((a, b) => b.salary - a.salary || a.position.localeCompare(b.position))

        for (let obj of sortedBest) {
            output += `${obj.name} ${obj.salary} ${obj.position}\n`
        }
        return output.trim()
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());

