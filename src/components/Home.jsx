import React from "react";

export default function Home(props) {
  const timeRemaining = (date) => {
    const now = new Date();
    const future = new Date(date);
    const diff = future.getMilliseconds();
  };
  const handleDelete = (index) => {
    props.setTasks((prev) => prev.filter((task, i) => i !== index));
  };
  const handleCheck = (index) => {
    props.setTasks((prev) =>
      prev.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };
  return (
    <>
      <nav>
        <h3>Todo</h3>
        <button onClick={() => props.setPage("new")}>
          <h3>+</h3>
        </button>
      </nav>
      <main>
        <ul>
          {props.tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleCheck(index)}
              />
              <p>
                {task.title}
                {task.link && <a href={task.link}> &#x1F517;</a>}
                {task.date && (
                  <span title={timeRemaining(task.date)}> &#128337;</span>
                )}
              </p>
              <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
