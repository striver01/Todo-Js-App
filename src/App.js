import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputTxt, setInputTxt] = useState();
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getLocaStorage();
  }, []);

  useEffect(() => {
    handleFilter();
    SaveLocaStorage();
  }, [todo, status]);
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilter(todo.filter((ele) => ele.completed === true));
        break;
      case "incompleted":
        setFilter(todo.filter((ele) => ele.completed === false));
        break;
      default:
        setFilter(todo);
        break;
    }
  };
  const SaveLocaStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  const getLocaStorage = () => {
    if (localStorage.getItem("todo") === null)
      localStorage.setItem("todo", JSON.stringify([]));
    else {
      let todoLocal = localStorage.getItem("todo", JSON.stringify(todo));
      setTodo(JSON.parse(todoLocal));
    }
  };

  return (
    <div>
      <header>
        <h1>Shubh TODO List</h1>
      </header>
      <Form
        todo={todo}
        setTodo={setTodo}
        inputTxt={inputTxt}
        setFilter={filter}
        setStatus={setStatus}
        setInputTxt={setInputTxt}
      />
      <TodoList setTodo={setTodo} todo={filter} />
      <script src="./app.js"></script>
    </div>
  );
}

export default App;
