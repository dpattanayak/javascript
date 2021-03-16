// Class is a template for creating object

class Employee {
    constructor(name, experience, role) {
        this.name = name;
        this.experience = experience;
        this.role = role;
    }
    
    // method

    description() {
        return `${this.name} is a ${this.experience} years experienced ${this.role}`
    }

    // static method can use directly without creating object

    static add(a,b) {
        return a + b;
    }
}

// let newEmp = new Employee('Debidatta', 2, 'Software Developer');
// console.log('newEmp: ', newEmp.description());
// console.log(Employee.add(2,8))

// Inheritance

class Programmer extends Employee{
    constructor(name, experience, role, skill) {
        super(name, experience, role);
        this.skill = skill;
    }
}

let newProgrammer = new Programmer('Debidatta', 3, 'Software developer', 'MEAN Stack');
console.log('newProgrammer: ', newProgrammer.description());