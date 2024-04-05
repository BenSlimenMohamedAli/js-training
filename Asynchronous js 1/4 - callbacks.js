// Handling asynchronous operations

function fetchData(callback) {
  fetch("https://fakestoreapi.com/products/1") // returns promise that contains data
    .then((response) => response.json()) // returns a promise that contains a json data
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("This code will work no matter the situation is");
    });
}

// Callback Hell

// function => function => function
