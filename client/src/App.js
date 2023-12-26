import { Outlet } from "react-router-dom";
import { TodoContext, TodoContextProvider } from "./context/TodoProvider";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(TodoContext);
  console.log(context);
  return <div>Navbar</div>;
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <TodoContextProvider>
          <Outlet />
        </TodoContextProvider>
      </div>
    </div>
  );
}

export default App;
