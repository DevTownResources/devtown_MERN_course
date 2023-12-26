import "../styles/todo.css";

function Todo({ todo, handleDelete, handleComplete }) {
  return (
    <div className="todo-container">
      <span className={`todo-text ${todo.isCompleted ? "completed" : ""}`}>
        {todo.title}
      </span>
      <button
        onClick={() => handleComplete(todo._id)}
        className="todo-button complete-button"
      >
        Complete
      </button>
      <button
        onClick={() => handleDelete(todo._id)}
        className="todo-button delete-button"
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
