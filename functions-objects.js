// =======================
// 01_Function Declarations
// =======================
console.log("Function Declaration Example:");
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Ahmed"));

// =======================
// 02_Function Expressions
// =======================
console.log("Function Expression Example:");
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 7));

// =======================
// 03_Arrow Functions
// =======================
console.log("Arrow Function Example:");
const multiply = (x, y) => x * y;
console.log(multiply(6, 8));

// =======================
// 04_Default Parameters
// =======================
console.log("Default Parameters:");
const welcome = (name = "Student") => `Welcome, ${name}!`;
console.log(welcome());
console.log(welcome("Ahmed"));

// =======================
// 05_Scope
// =======================
console.log("Scope Example:");
let globalVar = "I am global";

function showScope() {
    let localVar = "I am local";
    console.log(globalVar); // accessible
    console.log(localVar); // accessible
}
showScope();
// console.log(localVar); // Uncaught ReferenceError

// =======================
// 06_Objects
// =======================
console.log("Objects Example:");
const person = {
    name: "Ahmed",
    age: 30,
    job: "Teacher"
};
console.log(person);

// Access properties
console.log(person.name);
console.log(person["age"]);

// Modify properties
person.job = "Data Scientist";
console.log(person.job);

// =======================
// 07_Object Methods
// =======================
console.log("Object Methods:");
const calculator = {
    add: function (a, b) { return a + b; },
    subtract(a, b) { return a - b; },
    multiply: (a, b) => a * b
};
console.log(calculator.add(5, 10));
console.log(calculator.subtract(10, 4));
console.log(calculator.multiply(3, 7));

// =======================
// 08_Nested Objects
// =======================
console.log("Nested Objects:");
const student = {
    name: "Ahmed",
    courses: {
        math: "A",
        science: "B+",
        programming: "A+"
    }
};
console.log(student.courses.math);
console.log(student.courses.programming);

// =======================
// 09_Destructuring
// =======================
console.log("Destructuring:");
const { name, age, job } = person;
console.log(name, age, job);

// Nested destructuring
const { courses: { math, science } } = student;
console.log(math, science);

// =======================
// 10_Functions with Objects
// =======================
console.log("Functions with Objects:");
function printStudent({ name, courses }) {
    console.log(`Student: ${name}`);
    for (let subject in courses) {
        console.log(`${subject}: ${courses[subject]}`);
    }
}
printStudent(student);
