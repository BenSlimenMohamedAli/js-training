function f() {
  console.log("Hello Oumaima");
}

f();

// Immidiately invoked function
(function f(name) {
  console.log("Hello " + name);
})("Ahmed");

// Immidiately invoked function => arrow function
((name) => {
  console.log("Hello " + name);
})("Achref");
