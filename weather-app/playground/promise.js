var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hey. It  worked!");
    resolve(); // thist one won't get called as with callbacks
    reject("Unable to fulfill promise");
  }, 2500);
});


somePromise.then((message) => {
  console.log("Success:", message);
}, (message) => {
  console.log("Error:", message);
});

