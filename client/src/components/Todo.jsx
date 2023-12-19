function Todo({ todo, handleDelete, handleComplete }) {
  return (
    <div>
      <span style={{ color: todo.isCompleted ? "red" : "black" }}>
        {todo.text}
      </span>
      <button onClick={() => handleComplete(todo.id)}>Completed</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
