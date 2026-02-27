// App.js
import React from "react";
import Greeting from "./Greeting";
import UserInfo from "./UserInfo";
import TaskComponent from "./TaskComponent";

function App() {
  const tasks = [
    "Finish React assignment",
    "Review JavaScript notes",
    "Push project to GitHub"
  ];

  function getRandomTask() {
    const index = Math.floor(Math.random() * tasks.length);
    return tasks[index];
  }

  return (
    <div>
      <Greeting />
      <UserInfo />
      <TaskComponent task={getRandomTask()} />
    </div>
  );
}

const taskList = [
  "Finish homework",
  "Study React",
  "Walk the dog",
  "Clean the room",
  "Push project to GitHub"
];

<ul>
  {taskList.map((task, index) => (
    <li key={index}>{task}</li>
  ))}
</ul>

function handleAlert() {
  alert("Button clicked from UserInfo component!");
}

<UserInfo handleClick={handleAlert} />

export default App;