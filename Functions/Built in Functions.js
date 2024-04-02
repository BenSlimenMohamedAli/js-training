// Global functions
parseInt("1");
parseFloat("1.1");

isNaN("54");

console.log(isFinite(43)); // true
console.log(isFinite(43 / 0)); // false

// String functions

console.log("achref".toUpperCase());
console.log("ACHREF".toLowerCase());

console.log("Hello".charAt(0).toLowerCase());

let str = "Hello";
console.log(str.charAt(0));
console.log(str.charCodeAt(0)); // Ascii code of character

// Math functions
let maxNum = Math.max(5, 10, 15);
console.log(maxNum); // 15

let minNum = Math.min(-5, 0, 5);
console.log(minNum); // -5

let abs = Math.abs(-5);
console.log(abs);

let round = Math.round(12.6);
console.log(round);

let floor = Math.floor(12.6);
console.log(floor);
