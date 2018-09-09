

function Person() {
  this.name = '';

  this.setLastName = function(lastName) {
    this.name += " " + lastName;
  }
}

Person.prototype.setName = function(name) {
  this.name = name;
}

var person = new Person();
console.log("Name: ", person.name);

person.setName("Prathamesh");
console.log("Name: ", person.name);

person.setLastName("Paiyyar");
console.log("Name: ", person.name);

// Classes

class NewPerson {

  // static code = 1;
  static getCode() {
    if (NewPerson.count === undefined) {
      NewPerson.count = 10000;
    } else {
      NewPerson.count++;
    }

    return NewPerson.count;
  }

  constructor(name) {
    this.code = NewPerson.getCode();
    this.name = name;
  }

  setName (firstName, lastName) {
    this.name = `${firstName} ${lastName}`;
  }

}

console.log("Person 1");
var person1 = new NewPerson();
person1.setName("Yashaswini", "Academy");
console.log("Person Code: " + person1.code)
console.log("Person Name: " + person1.name)
console.log(" ");

NewPerson.count = 1;

console.log("Person 2");
var person2 = new NewPerson("Dev Chandragiri");
console.log("Person Code: " + person2.code)
console.log("Person Name: " + person2.name)
console.log(" ");


console.log("Person 3");
var person3 = new NewPerson("Shreeja Nair");
console.log("Person Code: " + person3.code)
console.log("Person Name: " + person3.name)
console.log(" ");

