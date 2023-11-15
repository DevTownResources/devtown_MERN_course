// try {
//   console.log(x);
// } catch (error) {
//   console.log("error", error);
// }

const httpStatus = async () => {
  try {
    const res = await fetch("https://httpstat.us/500");

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.text();
    console.log("THis is data", data);
  } catch (err) {
    console.log("error", err);
  }
};

httpStatus();
