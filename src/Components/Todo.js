import React from "react";

function Todo({ text, ele, todo, setTodo }) {
  const handleDelete = () => {
    setTodo(todo.filter((e) => e.id !== ele.id));
  };
  const handleComplete = () => {
    setTodo(
      todo.map((e) => {
        if (e.id === ele.id) {
          return { ...e, completed: !e.completed };
        }
        return e;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${ele.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
