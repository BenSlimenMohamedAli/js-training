// break

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// continue

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// Labeled statements => giving a label for a block of code, generally a loop

outerLoop: for (let i = 1; i <= 5; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop;
    }
    console.log(i, j);
  }
}

outerLoop: for (let i = 1; i <= 5; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      continue outerLoop;
    }
    console.log(i, j);
  }
}

outerLoop: for (let i = 1; i <= 5; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break innerLoop;
    }
    console.log(i, j);
  }
}

outerLoop: for (let i = 1; i <= 5; i++) {
  innerLoop: for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      continue innerLoop;
    }
    console.log(i, j);
  }
}
