import React, { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import { TodoDate } from "./TodoDate";
import TodoItem from "./TodoItem";
export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
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

  // todo handleDltTodo function

  const handleDltTodo = (curTaskVal) => {
    // console.log(task);
    // console.log(curTaskVal);
    const updatedTask = task.filter((curTask) => curTask !== curTaskVal);
    setTask(updatedTask);
  };

  // HandleClearTodoTada btn

  const HandleClearTodoTada = () => {
    setTask([]);
  };

  return (
    <>
      <section className="todo-container">
        <TodoDate />
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
                <TodoItem
                  key={i}
                  data={curTask}
                  onHandleDltTodo={handleDltTodo}
                />
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={HandleClearTodoTada}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};
