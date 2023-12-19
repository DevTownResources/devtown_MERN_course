import "../styles/todo.css";

function Todo({ todo, handleDelete, handleComplete }) {
  return (
    <div className="todo-container">
      <span className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
        {todo.text}
      </span>
      <button
        onClick={() => handleComplete(todo.id)}
        className="todo-button complete-button"
      >
        Complete
      </button>
      <button
        onClick={() => handleDelete(todo.id)}
        className="todo-button delete-button"
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
