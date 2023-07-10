import React, { useState } from "react";
import {
  TaskContainer,
  TaskWrapper,
  Checkbox,
  TaskLabel,
  DeleteButton,
  AddButton,
  AddTask,
} from "../styles/TodoForm";

function TodoForm() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div>
        {tasks.map((task, index) => (
          <TaskContainer key={index}>
            <TaskWrapper>
              <div>
                <Checkbox
                  type="checkbox"
                  id={`task${index}`}
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <TaskLabel completed={task.completed} htmlFor={`task${index}`}>
                  {task.title}
                </TaskLabel>
              </div>
              <DeleteButton onClick={() => deleteTask(index)}>-</DeleteButton>
            </TaskWrapper>
          </TaskContainer>
        ))}
      </div>
      <AddTask>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          style={{ width: "80%", height: "1.3rem", fontSize: "16px" }}
        />
        <AddButton onClick={addTask}>+</AddButton>
      </AddTask>
    </div>
  );
}

export default TodoForm;
