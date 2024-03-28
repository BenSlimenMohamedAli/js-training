const numbers = [1, 2, 3, 4, 5];

// instead of doing that

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// We can use this

for (let number of numbers) {
  console.log(number);
}

// it can work also on strings => it prints every letter separately

const achref = "achref";

for (let char of achref) {
  console.log(char);
}

// in gives the keys || of gives the values
