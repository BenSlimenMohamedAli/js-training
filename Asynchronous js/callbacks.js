// Handling asynchronous operations

function fetchData() {
  fetch("https://fakestoreapi.com/products/1") // returns promise that contains data
    .then((response) => response.json()) // returns a promise that contains a json data
    .then((data) => {
      processResponse(data);
    }) // log the json data
    .catch((error) => {
      console.log("block A", error);
      // Deal with the error
    })
    .finally(() => {
      // it will execute in any situation
      console.log("This will be executed after the promise finishes");
    });
}

function processResponse(data) {
  console.log("Data Recieved", data);
}

fetchData();

// Callback Hell

// function => function => function
