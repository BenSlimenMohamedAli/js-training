// 2^53 - 1 => Maximum value of a number in javascript

const bigInt1 = 1222433243253534n;
const bigInt2 = BigInt("993534234645364");

console.log(bigInt1);

console.log(bigInt2);

console.log(bigInt1 + bigInt2);
console.log(bigInt1 - bigInt2);
console.log(bigInt1 * bigInt2);
console.log(bigInt1 === bigInt2);
console.log(bigInt1 > bigInt2);

console.log(bigInt1 + BigInt(2)); // Cannot mix BigInt and other types, use explicit conversions

/**
 * Use Case : Factorial
 */

const largeFactorial = factorial(100n);

function factorial(bigInt) {
  if (bigInt == 0n) return 1n;
  else return bigInt * factorial(bigInt - 1n);
}

/**
 * Use Case: cryptoKey
 */

const key = "3253456346453645654374767453457453765n";
