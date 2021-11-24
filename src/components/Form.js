import React from "react";
import { useState } from "react";

function Form() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setTaskList(...setTaskList, e.target.value);
    setTask("");
    console.log(taskList);
  };

  return (
    <form onSubmit={onSubmitTask}>
      <label htmlFor="taskInput">Enter task</label>
      <input type="text" id="taskInput" onChange={handleChange}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
