console.log("start");

setTimeout(() => {
  console.log("inside timeout");
}, 0);

console.log("end");
console.log("end 1");
console.log("end 2");

setTimeout(() => {
  console.log("inside timeout 2");
}, 1000);

console.log("end 3");
