/**
 * Type Conversion => Casting
 */

const str = "123";
const num = Number(str);

console.log(num); // it should return NaN

const str1 = "1.34";
const num1 = Number(str1);

console.log(num1);

/**
 * Type Coercion
 */

const str3 = "Hello";
const num3 = 123;

const result = str3 + num;

console.log(result);
