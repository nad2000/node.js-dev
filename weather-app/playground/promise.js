var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers.");
      }
    }, 2500);
  });
};

asyncAdd(5, 7).then((result) => {
  console.log("Success:", result);
}, (message) => {
  console.log("Error:", message);
});

asyncAdd(5, undefined).then((result) => {
  console.log("Success:", result);
}, (message) => {
  console.log("Error:", message);
});

// chaining:
asyncAdd(5, '7').then((result) => {
  console.log("Success:", result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log("Should be 45:", result);
}).catch((message) => {
  console.log("Error:", message);
});
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hey. It  worked!");
//     resolve(); // thist one won't get called as with callbacks
//     reject("Unable to fulfill promise");
//   }, 2500);
// });


// somePromise.then((message) => {
//   console.log("Success:", message);
// }, (message) => {
//   console.log("Error:", message);
// });

