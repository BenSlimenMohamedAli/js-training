// task 1 : 1h => task 2: 2h => task 3: 5h => 8h

// concurrency => API call => action
// animation => spinner
// i need to put the spinner animation in a loop and then stop it once i get data from the api
// Task scheduling t1, t2, t3

// Event loop is the technique that is responsible for ensuring that javascript remains single-threaded and non-blocking, allowing for responsive user interfaces and efficient handling of I/O operations.

// synchronous execution

let a = 10;

console.log(a * 7);

console.log("hello");

// Microtask Queue ( Job Queue )
Promise.resolve().then(() => {
  console.log("Promise");
});

// MacroTask Queue ( Task Queue)
// setTimeout(function, time), setInterval(function, time)

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
