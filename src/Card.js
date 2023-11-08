import React, { useState } from "react";

const TodoCard = () => {
  const [tasks, setTasks] = useState([
    { text: "Identify and contextualize the problem", checked: false },
    { text: "Present ideas and changes to the team", checked: false },
    { text: "Prepare User Flows", checked: false },
    { text: "Prepare design style guide and Delivery stage", checked: false },
    { text: "Test and release", checked: false }
  ]);

  const [newTask, setNewTask] = useState("");
  const [progress, setProgress] = useState(0);

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
    updateProgress(updatedTasks);
  };

  const updateProgress = (updatedTasks) => {
    const completedTasks = updatedTasks.filter((task) => task.checked).length;
    setProgress(`${completedTasks}/${updatedTasks.length}`);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, checked: false }]);
      setNewTask("");
      updateProgress([...tasks, { text: newTask, checked: false }]);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.fullScreenDiv}>
        <div style={styles.card}>
          <div style={styles.header}>
            <img
              src="https://intellsys-optimizer.b-cdn.net/interviews/978ea909-91ec-49c2-bd69-d494c097d38d/header.jpg"
              alt="Header"
              style={styles.headerImage}
            />
            <div style={styles.overlayText}>TODO</div>
          </div>
          <div style={styles.taskListCard}>
            <h2
              style={{
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              Task List
              <span style={styles.progress}>{progress}</span>
            </h2>
            <ul style={styles.taskList}>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  style={{
                    textDecoration: task.checked ? "line-through" : "none"
                  }}
                >
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => toggleTask(index)}
                  />
                  {task.text}
                </li>
              ))}
            </ul>
            <div style={styles.addTask}>
              <input
                type="text"
                placeholder="New Task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button class="b" onClick={handleAddTask}>
                + Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  fullScreenDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  header: {
    position: "relative"
  },
  headerImage: {
    width: "100%"
  },
  overlayText: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#9999A3",
    fontSize: "20px"
  },
  taskListCard: {
    marginTop: "20px",
    width: "100%"
  },
  progress: {
    fontSize: "16px",
    color: "#9999A3"
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
    lineHeight: "32px"
  },
  b: {
    backgroundColor: "#2F69FE",
    color: "white",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer"
  },
  addTask: {
    marginTop: "20px"
  }
};

export default TodoCard;
