let globalVariable = "I'm global";

function test() {
  console.log(globalVariable);
}

test();

const test1 = () => {
  let localVariable = "I'm Local";
  console.log(localVariable);
};

test1(); // I'm local

// console.log(localVariable); => will give us an error since it's on the local scope of the function

/**
 * Function Stack => its a javascript core principle
 */

function firstFunction() {
  console.log("First Function");
  SecondFunction();
}

function SecondFunction() {
  console.log("Second Function");
}

firstFunction();

// Nested scope

function outerFunction() {
  let outerVariable = "Outer";

  function innerFunction() {
    console.log(outerVariable);
  }

  innerFunction();
}

outerFunction();
