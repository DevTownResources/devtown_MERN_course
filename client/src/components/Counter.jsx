import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  const clicked = () => {
    console.log("clicked");
  };

  useEffect(() => {
    document.addEventListener("click", clicked);
    return () => {
      document.removeEventListener("click", clicked);
    };
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment +</button>
      <br />
      <br />
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1> this is name {name}</h1>
    </div>
  );
}

export default Counter;
