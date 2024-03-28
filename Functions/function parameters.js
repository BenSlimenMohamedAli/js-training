// What is a function and for what it is used
/**
 * A function is a reusable code that is defined once and used many times
 */

// how to define a function in js

function functionName(param1, param2) {
  // function body
}

// real life example

function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Achref"); // Hello Achref
greet("Oumaima"); // Hello Oumaima
greet(); // undefined

// default parameters

function greet2(name = "Dali") {
  console.log(`Hello ${name}`);
}

greet2("Achref"); // Hello Achref
greet2("Oumaima"); // Hello Oumaima
greet2(); // Dali

// Rest Parameters

function sum(...numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }

  return result;
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10, 20));
