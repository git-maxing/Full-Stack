console.log("expjs loaded");

var name = "expjs";
var name = "osdfk";
console.log("name:", name);

let age = 25;
console.log("age:", age);
let age = 30; // This will cause an error because 'age' is already declared with 'let'
age = 30; // This is valid, reassigning the value of 'age'
console.log("new age:", age);

const country = "USA";
console.log("country:", country);
const country = "Canada"; // This will cause an error because 'country' is already declared with 'const'
country = "Canada"; // This will cause an error because 'const' variables cannot be reassigned
console.log("new country:", country);
