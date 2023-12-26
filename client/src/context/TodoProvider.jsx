import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

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

  const addTodo = () => {
    // this a better way
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
