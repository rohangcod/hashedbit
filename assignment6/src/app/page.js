"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Load tasks from local storage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📝 To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task..."
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button style={styles.addButton} onClick={addTask}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.sort((a, b) => a.text.localeCompare(b.text)).map((t, index) => (
          <li key={index} style={styles.listItem}>
            <span
              onClick={() => toggleTask(index)}
              style={t.completed ? styles.completed : {}}
            >
              {index + 1}. {t.text}
            </span>
            <button style={styles.deleteButton} onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: { maxWidth: "400px", margin: "auto", textAlign: "center", padding: "20px" },
  heading: { fontSize: "24px", marginBottom: "10px" },
  inputContainer: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { flex: 1, padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" },
  addButton: { padding: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
  list: { listStyle: "none", padding: 0 },
  listItem: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px", borderBottom: "1px solid #ddd" },
  deleteButton: { backgroundColor: "red", color: "white", border: "none", cursor: "pointer", padding: "5px", borderRadius: "5px" },
  completed: { textDecoration: "line-through", color: "gray", cursor: "pointer" },
};
