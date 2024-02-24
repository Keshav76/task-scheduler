import React from "react";

export default function Home(props) {
  return (
    <>
      <nav>
        <h3>Your Tasks</h3>
        <button onClick={() => props.setPage("new")}>
          <h3>+</h3>
        </button>
      </nav>
      <main>
        <ul>
          {props.tasks.map((task, index) =>
            ListItem(index, task, props.setTasks)
          )}
        </ul>
      </main>
    </>
  );
}

const ListItem = (index, task, setTasks) => {
  const handleDelete = (index) => {
    setTasks((prev) => prev.filter((task, i) => i !== index));
  };
  const handleCheck = (index) => {
    setTasks((prev) =>
      prev.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };
  const timeRemaining = (date) => {
    const now = new Date();
    const future = new Date(date);
    const diff = future - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return days + 1;
  };
  const [rem, setRem] = React.useState(timeRemaining(task.date));
  return (
    <li key={index}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => handleCheck(index)}
      />
      <p className={(rem <= 0 ? "red" : "") + (task.done ? " strike" : "")}>
        {task.title}
        {task.link && <a href={task.link}> &#x1F517;</a>}
        {task.date && (
          <span title={rem > 0 ? rem + " day left" : "Missed"}> &#128337;</span>
        )}
      </p>
      <button onClick={() => handleDelete(index)}>X</button>
    </li>
  );
};
