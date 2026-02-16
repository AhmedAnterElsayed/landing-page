// =======================
// 01_forLoops
// =======================
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

// =======================
// 02_whileLoops
// =======================
console.log("While Loop Example:");
let count = 1;
while (count <= 5) {
    console.log(`Count is ${count}`);
    count++;
}

// =======================
// 03_doWhileLoops
// =======================
console.log("Do-While Loop Example:");
let x = 1;
do {
    console.log(`x = ${x}`);
    x++;
} while (x <= 5);

// =======================
// 04_arrays
// =======================
console.log("Array Example:");
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

// Access elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Cherry

// Modify array
fruits.push("Orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

// Loop through array
console.log("Loop through array:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// =======================
// 05_arrayMethods
// =======================
console.log("Array Methods:");
let numbers = [10, 20, 30, 40, 50];

console.log("Original:", numbers);
console.log("Map x2:", numbers.map(n => n * 2));
console.log("Filter >25:", numbers.filter(n => n > 25));
console.log("Reduce sum:", numbers.reduce((acc, n) => acc + n, 0));

// =======================
// 06_nestedArrays
// =======================
console.log("Nested Arrays:");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        process.stdout.write(matrix[i][j] + " ");
    }
    console.log(); // new line
}

// =======================
// 07_forEach
// =======================
console.log("forEach Example:");
fruits.forEach(fruit => console.log(fruit));

// =======================
// 08_forOf
// =======================
console.log("for...of Example:");
for (let fruit of fruits) {
    console.log(fruit);
}

// =======================
// 09_forIn (objects)
// =======================
console.log("for...in Example:");
let person = { name: "Ahmed", age: 30, job: "Teacher" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
