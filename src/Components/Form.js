import React from "react";

function Form({ todo, setStatus, setTodo, inputTxt, setInputTxt, setFilter }) {
  const handleInputTxt = (e) => {
    setInputTxt(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { text: inputTxt, completed: false, id: Math.random() * 1000 },
    ]);
    setInputTxt("");
  };
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={inputTxt}
          className="todo-input"
          onChange={handleInputTxt}
        />
        <button className="todo-button" type="submit" onClick={handleSubmit}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={handleStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incompleted">Incompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
