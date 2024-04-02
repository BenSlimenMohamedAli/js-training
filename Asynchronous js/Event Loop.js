// synchronous execution

let a = 10;

console.log(a * 7);

console.log("hello");

// Microtask Queue ( Job Queue )
Promise.resolve().then(() => {
  console.log("Promise");
});

// MacroTask Queue ( Task Queue)
// setTimeout, setInterval

setTimeout(() => {
  // Make something that will execute after some time
  console.log("Timeout --------------------");
}, 5000);

setInterval(() => {
  // Make something that will execute in an infinite loop after a range of time
  console.log("Interval");
}, 1000);

// Callbacks

function doSomething(callbak) {
  setTimeout(function () {
    console.log("Operation Completed!");
    callbak();
  }, 2000);
}

function callbackFunction() {
  console.log("Callback Executed");
}

doSomething(callbackFunction);

// Animation Frames
