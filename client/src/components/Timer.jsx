import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  }, []);

  //   useEffect(() => {
  //     console.log("time changed");
  //   });

  return <div>{time}</div>;
}

export default Timer;
