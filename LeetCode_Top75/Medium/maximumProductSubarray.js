class Person {
  constructor(first, last, age, gender, interests) {
    //Constructor Method that represents our Person Class
    this.name = { first, last };
    this.age = age;
    this.gender = gender;
    this.interested = interests;
  }
  greeting() {
    //Class Methods
    console.log(`Hi! I'm ${this.name.first}`);
  }
  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

//Instantiate object instances using the new operate, in just the same way as we did before:

let han = new Person("Han", "Solo", 25, "male", ["Smuggling"]);
han.greeting();

let leia = new Person("Leia", "Organa", 19, "female", ["Government"]);
leia.farewell();
console.log(han.age);

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests); //now 'this' is initialized by calling the parent constructor.
    this.subject = subject;
    this.grade = grade;
  }
}

let snape = new Teacher(
  "Severus",
  "Snape",
  42,
  "male",
  ["Loving Lily Potter"],
  "Potions",
  "5"
);
console.log(snape);
