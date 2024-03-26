let u;
console.log(u);

function greeting(name) {
  console.log("Hello, " + name + "!");
}

greeting(); // undefined name as a function parameter

function noReturn() {}

console.log(noReturn());

if (u === undefined) {
  console.log("variable u is undefined");
} else {
  console.log("variable u is defined");
}
