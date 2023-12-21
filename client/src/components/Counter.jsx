import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  //   useEffect(() => {

  //   })

  //   useEffect(() => {
  //     console.log("component mounted");
  //     return () => {
  //       console.log("component unmounted");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("count", count);
    return () => {
      console.log("count cleanup", count);
    };
  }, [count]);

  //   useEffect(() => {
  //     console.log("name");
  //   }, [name]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>This is name: {name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Counter;
