const timeoutId = setTimeout(function () {
  console.log("This message will not be logged!");
}, 4000);

clearTimeout(timeoutId);
