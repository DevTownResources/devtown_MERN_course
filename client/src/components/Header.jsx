import { useState } from "react";
import { nanoid } from "nanoid";

function Header({ setTodos }) {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: nanoid(),
          text: todo,
          isCompleted: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        value={todo}
        onChange={handleChange}
        type="text"
        placeholder="Add a new task"
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}
export default Header;
