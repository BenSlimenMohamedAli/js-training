const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Operation Completed Succefully"); // returns a success data
    reject("Oparation Completed with error"); // returns a failure data
  }, 4000);
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation Completed Succefully"); // returns a success data
    //reject("Oparation Completed with error"); // returns a failure data
  }, 8000);
});

myPromise1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Operation Completed Succefully"); // returns a success data
    reject("Oparation Completed with error 1"); // returns a failure data
  }, 2000);
});

myPromise2
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
