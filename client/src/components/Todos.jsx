import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkToken } from "../utils";

import Header from "./Header";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkToken()) {
      getTodos();
    } else {
      navigate("/login");
    }
  }, []);

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/todos", {
        credentials: "include",
      });
      if (res.ok) {
        const { data } = await res.json();
        setTodos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (id) => {
    const res = await fetch(`http://localhost:8000/api/todos/${id}`, {
      method: "PATCH",
      credentials: "include",
    });

    if (res.ok) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          return {
            ...todo,
            isCompleted: todo._id === id ? !todo.isCompleted : todo.isCompleted,
          };
        })
      );
    }
  };
  return (
    <div>
      <Header setTodos={setTodos} />
      <br />
      <br />
      {todos.map((todo) => (
        <Todo
          key={todo._id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      ))}
    </div>
  );
}

export default Todos;
