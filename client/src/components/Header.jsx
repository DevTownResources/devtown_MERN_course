import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../redux/features/todosSlice.js";
import "../styles/header.css";

function Header() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/todos", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todo }),
      });

      if (res.ok) {
        const { data } = await res.json();
        dispatch(addToDo(data));
        setTodo("");
      }
    } catch (error) {
      console.log(error);
    }
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
