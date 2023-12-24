import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Timer from "./components/Timer";
import Posts from "./components/Posts";

function App() {
  const [view, setView] = useState("home");
  const changeView = (view) => setView(view);

  return (
    <div className="App">
      <Navbar changeView={changeView} />
      {view === "home" ? (
        <Home />
      ) : view === "counter" ? (
        <Counter />
      ) : view === "timer" ? (
        <Timer />
      ) : (
        <Posts />
      )}
    </div>
  );
}

export default App;
