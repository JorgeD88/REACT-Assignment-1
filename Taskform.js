// TaskForm.js
import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (taskName.trim() === "" || description.trim() === "") {
      alert("Both fields are required.");
      return;
    }

    onAddTask({
      id: Date.now(),
      name: taskName,
      description: description
    });

    setTaskName("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
