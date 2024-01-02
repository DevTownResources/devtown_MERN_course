import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { _id: 1, title: "Buy milk", isCompleted: false },
    { _id: 2, title: "Buy milk", isCompleted: false },
    { _id: 3, title: "Buy milk", isCompleted: false },
  ],
};

/**
 *
 * action = {
 * type: "todos/addToDo",
 * payload: "Buy milk"
 * }
 *
 *
 */

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const res = await fetch("http://localhost:8000/api/todos", {
      credentials: "include",
    });
    if (res.ok) {
      const { data } = await res.json();
      return data;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (curState, action) => {
      curState.todos.push(action.payload); // it might seem like we are mutating the state, but we are not. Redux Toolkit uses Immer under the hood to make sure we are not mutating the state
    },
    deleteToDo: (curState, action) => {
      curState.todos = curState.todos.filter(
        (todo) => todo._id !== action.payload
      );
    },
    markAsComplete: (curState, action) => {
      curState.todos = curState.todos.map((todo) => {
        if (todo._id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export default todoSlice.reducer;
export const { addToDo, deleteToDo, markAsComplete } = todoSlice.actions;
