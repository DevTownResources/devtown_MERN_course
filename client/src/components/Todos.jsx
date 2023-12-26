import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TodoContext } from "../context/TodoProvider";
import { checkToken } from "../utils";

import Header from "./Header";
import Todo from "./Todo";
import hoc from "./withLogger";

function Todos() {
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkToken()) {
      // getTodos();
    } else {
      navigate("/login");
    }
  }, []);

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
      <Header setTodos={setTodos}>
        <p>This is INSIDE HEADER IN TODOS</p>
        <p>This is INSIDE HEADER IN TODOS</p>
        <p>This is INSIDE HEADER IN TODOS</p>
      </Header>
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

export default hoc(Todos);
