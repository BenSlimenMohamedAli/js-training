// Accessing arguments

function sum(name) {
  let total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  console.log(arguments);
  return total;
}

console.log(sum("Dali", 1, 2, 3, 4, 2, 0, 9, 2, 1, 4, 21));
