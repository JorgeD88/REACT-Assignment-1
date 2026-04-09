import React, { useState } from "react";

function TaskComponent({ tasks, onDelete }) {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const filteredTasks = tasks
    .filter((task) =>
      task.taskName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sorted) return 0;
      return a.taskName.localeCompare(b.taskName);
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search Tasks"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setSorted(true)}>Sort by Name</button>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.taskName} — {task.taskDescription}
            <button
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this task?")) {
                  onDelete(task.id);
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskComponent;
