import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
        };
      })
    );
  };

  return (
    <div className="App">
      <div className="container">
        <Header setTodos={setTodos} />
        <br />
        <br />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
