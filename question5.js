/*  
let, var, and const are all keywords used for variable declaration in JavaScript,
but they have some differences:
*/

// Example 1: 
// block scope declaration
{
    var varVal = 8;
    const constVal = 5;
    let letVal = 7;
    letVal = 5;
    console.log(`const: ${constVal}`);   // O/P = 5
}
console.log(`var: ${varVal}`); // O/P = 8
// console.log(`let: ${letVal}`); // throw an error
// console.log(`const: ${constVal}`); // throw an error


// Example 2:
// Example with var
function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // This redeclaration affects the outer scope
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20
}
varExample();

// Example with let
function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // This is a new variable declaration in a different block scope
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10 (the outer 'y' is not affected)
}
letExample();

// Example with const
function constExample() {
    const z = 10;
    if (true) {
        // const z = 20; // This would throw an error: SyntaxError: Identifier 'z' has already been declared
        console.log(z); // Output: 10
    }
    console.log(z); // Output: 10
}
constExample();

// Reassignment with let and const
let a = 10;
a = 20; // This is allowed with let
console.log(a); // Output: 20

const b = 10;
// b = 20; // This would throw an error: TypeError: Assignment to constant variable.
console.log(b); // Output: 10
