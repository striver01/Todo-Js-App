import React from "react";
import Todo from "./Todo";

function TodoList({ todo, setTodo }) {
  console.log(todo);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((ele) => (
          <Todo
            key={ele.id}
            text={ele.text}
            ele={ele}
            todo={todo}
            setTodo={setTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
