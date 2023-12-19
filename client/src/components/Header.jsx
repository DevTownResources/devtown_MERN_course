import { useState } from "react";
import { nanoid } from "nanoid";
import "../styles/header.css";

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
    <div className="header-container">
      <h1 className="header-title">Todo List</h1>
      <input
        value={todo}
        onChange={handleChange}
        type="text"
        placeholder="Add a new todo"
        className="header-input"
      />
      <button onClick={handleAddTodo} className="header-button">
        Add
      </button>
    </div>
  );
}

export default Header;
