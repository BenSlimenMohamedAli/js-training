// setInterval( function, delay);

function greet() {
  console.log("Hello world!");
}

const intervalId = setInterval(greet, 1000);

// console.log(intervalId);

setTimeout(() => {
  clearInterval(intervalId);
}, 5100);
