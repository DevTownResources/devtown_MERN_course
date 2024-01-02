import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { checkToken } from "../utils";
import {
  deleteToDo,
  markAsComplete,
  fetchTodos,
} from "../redux/features/todosSlice";

import Header from "./Header";
import Todo from "./Todo";

function Todos() {
  const navigate = useNavigate();
  const { todos: reduxtodos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checkToken()) {
      dispatch(fetchTodos());
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
        dispatch(deleteToDo(id));
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
      dispatch(markAsComplete(id));
    }
  };
  return (
    <div>
      <Header />
      <br />
      <br />
      {reduxtodos.map((todo) => (
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
