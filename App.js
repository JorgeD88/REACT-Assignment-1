// App.js
import React, { useState } from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";
import TaskForm from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", description: "Milk, eggs, bread" },
    { id: 2, name: "Study React", description: "Hooks, props, state" },
    { id: 3, name: "Clean room", description: "Organize desk" }
  ]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div>
      <Greeting username="Alice" />

      <UserInfo />

      <TaskForm onAddTask={addTask} />

      <TaskComponent tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
