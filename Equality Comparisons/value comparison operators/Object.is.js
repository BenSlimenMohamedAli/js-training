// Object.is(value1, value2);

// comparing values

console.log(Object.is(5, 5)); // true
console.log(Object.is("5", "5")); // true
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0)); // false

console.log(-0 === +0); // true
console.log(NaN === NaN); // false
