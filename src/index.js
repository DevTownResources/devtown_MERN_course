// Create a promise

const promise = new Promise((resolve, reject) => {
  // Do something async here
  setTimeout(() => {
    console.log("Async work complete");
    resolve();
  }, 1000);
});

// console.log(promise);

// promise.then(() => {
//   console.log("Promise consumed....");
// });

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ name: "Priya", age: 21 });
    } else {
      reject("Error in fetching user");
    }
  }, 1000);
});

getUser
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("This promise is either resolved or rejected");
  });

console.log("Hey, I am not async");
