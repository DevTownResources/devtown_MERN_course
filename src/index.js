const apiURL = "https://httpstat.us";

// fetch(`${apiURL}/200`)
//   .then((res) => {
//     return res;
//   })
//   .then(() => {
//     console.log("success");
//   });

// Network error will be caught in the catch block
// fetch(`https://priyabihani.com`)
//   .then((res) => {
//     return res;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

fetch(`${apiURL}/500`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res;
  })
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("catch block", err);
  });

fetch(`${apiURL}/500`)
  .then((res) => {
    if (res.status === 500) {
      throw new Error("Something went wrong");
    }
    return res;
  })
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("catch block", err);
  });
