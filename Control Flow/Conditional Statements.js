// if statement

const x = 10;

if (x > 5) {
  console.log("x is greater than 5");
}

// if .. else statement

const y = 3;

if (y % 2 === 0) {
  console.log("y is even.");
} else {
  console.log("y is odd.");
}

// if .. else if ... else

const z = 75;

if (z >= 90) {
  console.log("A");
} else if (z >= 80) {
  console.log("B");
} else if (z >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// Ternary conditional operator ( ? : )

const m = 10;

const message = m > 5 ? "x is greater than 5." : "x is less than or equal to 5";

console.log(message);

// switch

const a = 4;

switch (a) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  case 4:
    console.log(4);
    break;
  default:
    console.log("default");
}
