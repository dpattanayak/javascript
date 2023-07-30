import Person from "./Person";

class Student extends Person {
  constructor(subject) {
    super(name, age);
    this._subject = subject;
  }
}

let john = new Student("John", 22, "Maths");
console.log(john.name());
