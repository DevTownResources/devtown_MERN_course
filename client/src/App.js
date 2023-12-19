import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
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
  );
}

export default App;
