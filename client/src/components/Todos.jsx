import { useEffect, useState } from "react";
import Header from "./Header";
import Todo from "./Todo";

function Todos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/todos", {
        credentials: "include",
      });
      if (res.ok) {
        const { data } = await res.json();
        console.log(data);
        setTodos(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.ok) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
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
