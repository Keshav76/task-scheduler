import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import NewTask from "./components/NewTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState("home");
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      {page === "home" && (
        <Home tasks={tasks} setTasks={setTasks} setPage={setPage} />
      )}
      {page === "new" && <NewTask setTasks={setTasks} setPage={setPage} />}
    </>
  );
}
