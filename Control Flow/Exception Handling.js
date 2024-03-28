// try ... catch

try {
  const bigNumber = 100n;

  const result = bigNumber * 10;

  console.log(result);
} catch (error) {
  console.error(error);
}
