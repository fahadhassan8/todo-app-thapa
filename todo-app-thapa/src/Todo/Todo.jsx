import React, { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState();
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    setTask((prevTask) => [...prevTask, inputValue]);

    if (task.includes(inputValue)) {
      return;
    }
    setInputValue("");
  };

  // todo date time
  setInterval(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedDate} ${formattedTime}`);
  }, 1000);

  // todo handleDltTodo function

  const handleDltTodo = (curTaskVal) => {
    // console.log(task);
    // console.log(curTaskVal);
    const updatedTask = task.filter((curTask) => curTask !== curTaskVal)
    setTask(updatedTask)
  }


  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h3 className="date-time">{dateTime}</h3>
        </header>
        <section className="form" onSubmit={handleFormSubmit}>
          <form>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnOrdList">
          <ul>
            {task.map((curTask, i) => {
              return (
                <li key={i} className="todo-item">
                  <span>{curTask}</span>
                  <button className="check-btn">
                    <MdCheck />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDltTodo(curTask)}
                  >
                    <MdDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
