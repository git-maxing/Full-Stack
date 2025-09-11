/*
console.log("expjs loaded");

var name = "expjs";
var name = "osdfk";
console.log("name:", name);

let age = 25;
console.log("age:", age);
//let age = 30; // This will cause an error because 'age' is already declared with 'let'
age = 30; // This is valid, reassigning the value of 'age'
console.log("new age:", age);

const country = "USA";
console.log("country:", country);
//const country = "Canada"; // This will cause an error because 'country' is already declared with 'const'
//country = "Canada"; // This will cause an error because 'const' variables cannot be reassigned
console.log("new country:", country);


function greet() {
    var localVar = "Hello,this is javascript";
    console.log(localVar);
}
greet();

function welcome(name) {
    let message = "Welcome, " + name + " to JavaScript ";
    console.log(message);
}

let name = welcome("John")
//console.log(name); // This will log 'undefined' because the 'welcome' function does not return a value


function yourage(age){
    const ageMessage = "Your age is " + age;
    return ageMessage;
}

let age = console.log(yourage(25));

age = yourage(30);
console.log(age);


function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}

function areaOfRectangle(length, width) {
    return length * width;
}
let base = 10;
let height = 5;
let area = areaOfTriangle(base, height);
console.log("Area of triangle:", area);
let area1=areaOfRectangle(height,base);
console.log("Area of rectangle:", area1);

function factorial(n) {
    if (n==0 || n==1) {
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }
 }
let num = 60;
let result = factorial(num);
console.log("Factorial of", num, "is", result);

//different ways of creating  a calculator

function calculator(operation, ...numbers) {
    switch (operation) {
        case 'add':
            return numbers.reduce((acc, curr) => acc + curr, 0);
        case 'subtract':
            return numbers.reduce((acc, curr) => acc - curr);
        case 'multiply':
            return numbers.reduce((acc, curr) => acc * curr, 1);
        case 'divide':
            return numbers.reduce((acc, curr) => acc / curr);
        default:
            return "Invalid operation";
    }
}


console.log("Add:", calculator('add', 1, 2, 3, 4));         
console.log("Subtract:", calculator('subtract', 10, 2, 1)); 
console.log("Multiply:", calculator('multiply', 2, 3, 4));  
console.log("Divide:", calculator('divide', 100, 2, 5));    



class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: Division by zero";
        }
    }
}

// Create an object of Calculator
const calc = new Calculator();

console.log("Add:", calc.add(10, 5));
console.log("Subtract:", calc.subtract(10, 5));
console.log("Multiply:", calc.multiply(10, 5));
console.log("Divide:", calc.divide(10, 5));



function calculator(a, b, operator) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b == 0) {
                return "Error: Division by zero";
            } else {
                return a / b;
                
            }
        default:
            return "Invalid operator";
    }
}

console.log("Add:", calculator(10, 5, '+'));
console.log("Subtract:", calculator(10, 5, '-'));
console.log("Multiply:", calculator(10, 5, '*'));
console.log("Divide:", calculator(10, 0, '/'));

function compoundInterest(loaned, intrst, time, n) {
    // loaned: initial amount
    // rate: annual interest rate (in percent, e.g., 8 for 8%)
    // time: number of years
    // n: number of times interest applied per year
    let amount = loaned * Math.pow((1 + (intrst/ (n * 100))), n * time);
    return amount - loaned; // compound interest earned
}

// Example usage:
let loaned = 10000;
let intrst = 8; // 8%
let time = 2; // 2 years
let n = 4; // compounded quarterly

let ci = compoundInterest(loaned, intrst, time, n);
console.log("Compound Interest:", ci.toFixed(2));


function calculator(operation,a,b){
    if(operation === "add")
    {
        return a + b;
    }
    else if(operation === "sub"){
        return a-b
    }
    else if(operation === "mul")
    {
        return a*b;
    }
    else 
    {
        if (b===0){
            return "error";
        }
        else{
            return a/b;
        }
    }
}
let a = 20;
let b = 30;
console.log(calculator('add',a,b))
console.log(calculator('sub',a,b))
console.log(calculator('mul',a,b))
console.log(calculator('div',a,b))
*/

function Grades(marks)
{
    if(marks > 90){
        return "S";
    }
    else if(marks > 80){
        return 'A';
    }
    else if(marks > 70){
        return 'B';
    }
    else if(marks > 60){
        return 'B';
    }
    else if(marks > 50){
        return;
    }
    else if(marks > 40){
        return 'A';
    }
    else{
        return 'F';
    }


}


let student1marks = 90;
console.log(Grades(student1marks))

let student2marks = 77;
console.log(Grades(student2marks))



//a person is travelling from a to b at a speed 30km/ph the sped will be doubled at every 10 minute calculate the distance b/w a and b after 96min maximum speed 120km/ph 
function distance(a,min,max){
    let speed = min;
    let dis = 0;
    let time = 96;
    for(let i = 0;i + 10<=time;i+=10) {
            dis += 10* speed;
            if (speed <= max ){
            
              speed = speed*2;
            }
            else{
                speed = speed;}
            
        
    }
    dis += 7*speed;
    return dis 
    

}
/*
function distance(min, max) {
    let speed = min;
    let dis = 0;
    let time = 96;
    for(let i = 0; i + 10 <= time; i += 10) {
        dis += speed * 10;
        speed = Math.min(speed * 2, max); // Don't exceed max speed
        
    }
    // Remaining minutes
    let remaining = time % 10;
    dis += speed * remaining;
    return dis;
}

let min = 30/60; // 0.5 km/min
let max = 120/60; // 2 km/min
console.log(distance(min, max));
*/
let a = 0 ;
let min = 30/60;
let max = 120/60;
console.log(distance(a,min,max))
