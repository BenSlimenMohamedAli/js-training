let n1 = 10;
let n2 = -10;
let n3 = 0;

console.log(typeof n1, typeof n2, typeof n3); // The 3 variables are numbers

let f1 = 3.14;
let f2 = -0.5;
let f3 = 1.0;

console.log(typeof f1, typeof f2, typeof f3); // The 3 variables are numbers

/**
 * Arithmetic Operations
 */

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

/**
 * NaN ( Not a Number )
 * Infinity
 */

console.log(10 / 0); // Infinity

if (10 / 0 === Infinity) {
  console.log("operation is infinity");
} else {
  console.log("operation is not infinity");
}

console.log(10 / "abc"); // NaN
console.log(10 * "abc"); // NaN
console.log(10 - "abc"); // NaN
console.log(10 + "abc"); // NaN

console.log(10 % 2); // returns 0 as a Remainder

console.log("10" % "3"); // => 0
