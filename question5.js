/*  
let, var, and const are all keywords used for variable declaration in JavaScript,
but they have some differences:
*/

// Example with var
function varExample() {
    var x = 10;
    if (true) {
        var x = 20; // This redeclaration affects the outer scope
        console.log("var: ", x); // Output: 20
    }
    console.log("outer var: ", x); // Output: 20
}
varExample();

// Example with let
function letExample() {
    let y = 10;
    if (true) {
        let y = 20; // This is a new variable declaration in a different block scope
        console.log("let: ", y); // Output: 20
    }
    console.log("outer let: ", y); // Output: 10 (the outer 'y' is not affected)
}
letExample();

// Example with const
function constExample() {
    const z = 10;
    if (true) {
        // const z = 20; // This would throw an error: SyntaxError: Identifier 'z' has already been declared
        console.log("const: ", z); // Output: 10
    }
    console.log("outer const: ", z); // Output: 10
}
constExample();

// Reassignment with let and const
console.log("reassignment with let and const: ")
let a = 10;
a = 20; // This is allowed with let
console.log(a); // Output: 20

const b = 10;
// b = 20; // This would throw an error: TypeError: Assignment to constant variable.
console.log(b); // Output: 10
