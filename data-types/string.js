let singleQuoteString = "Formation JS";
let doubleQuoteString = "Formation JS";

let myVariable = 12;

let templateLiterals = `Formation JS ${myVariable}`;

console.log(templateLiterals);

// Escape Characters

let myString = 'Abc " EFG'; // Double Quote
myString = "Abc ' EFG"; // Single Quote
myString = "Abc \\ EFG"; // Backslash
myString = "Abc \n EFG"; // NewLine
myString = "Abc \r EFG"; // NewLine
myString = "Abc \b EFG"; // BackSpace
myString = "Abc \t EFG"; // BackSpace

console.log(myString);

// concatenation

const s1 = "S1";
const s2 = "S2";

const sConcat = s1 + " " + s2; // using + operator

const sConcatFn = s1.concat(s2); // using concat function

console.log(sConcatFn);

// String length
const str = "Hello, World!"; //  start counting from 0 in a string

console.log(str.length);

console.log(str[1]); // it should print e
