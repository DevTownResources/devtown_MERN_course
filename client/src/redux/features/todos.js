import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (curState, action) => {
      curState.todos.push(action.payload); // it might seem like we are mutating the state, but we are not. Redux Toolkit uses Immer under the hood to make sure we are not mutating the state
    },
    deleteToDo: (curState, action) => {
      curState.todos = curState.todos.filter((todo) => todo !== action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { addToDo, deleteToDo } = todoSlice.actions;
