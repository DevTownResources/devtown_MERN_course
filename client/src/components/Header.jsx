import { useState } from "react";
import { nanoid } from "nanoid";
import "../styles/Header.css";

function Header({ setTodos }) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: nanoid(), text: todo, isCompleted: false },
    ]);
    setTodo("");
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={todo}
        onChange={handleChange}
        type="text"
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default Header;
