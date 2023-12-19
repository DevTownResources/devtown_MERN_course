import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  setInterval(() => {
    setTime((prevTime) => prevTime + 1);
  }, 1000);

  return <div>{time}</div>;
}

export default Timer;
