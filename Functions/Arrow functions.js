// How to define an arrow function

const functionName = (param1, param2) => {
  return expression;
};

/**
 * If the function body consists of a single expression, you can omit the curly braces
 *
 */
const functionName1 = () => true;

// => arrow

/**
 * Examples
 */

const greet = (name) => "Hello, " + name + "!";
const greet1 = (name) => `Hello, ${name}!`;
console.log(greet("Ahmed"));

const sum = (a, b) => {
  let result = a + b;
  return result;
};
