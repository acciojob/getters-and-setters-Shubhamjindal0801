//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name
	}
	set age(){
		if (typeof age !== 'number' || age < 0) {
	    throw new Error('Age must be a positive number');
	    }
	    this.age = age;
	}
}

class Student extends Person {
	study(){
		super()
		console.log(`${name()} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		super()
		console.log(`${name()} is teaching`)
	}
}
const person = new Person("John", 30)
const student = new Student("John", 30);
const student = new Student("Alice", 30);
const teacher = new Teacher("John", 30); 
const teacher = new Teacher("Alice", 30);
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
