// && , || , !

let result = true && false;
console.log(result); // false

result = true || false;
console.log(result); // true

result = !true;
console.log(result); // false

if (5 === 2 && 5 == "5") {
  console.log("i'm in");
}

if (5 === 2 || 5 == "5") {
  console.log("i'm in");
}

if (!(5 === 2 && 5 == "5")) {
  console.log("i'm in");
}
