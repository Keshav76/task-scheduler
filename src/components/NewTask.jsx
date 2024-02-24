import React from "react";

export default function NewTask(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("first");
    const [title, link, date] = event.target.elements;

    props.setTasks((prev) => [
      ...prev,
      {
        title: title.value,
        link: link.value,
        date: date.value,
        done: false,
      },
    ]);
    props.setPage("home");
  };
  return (
    <>
      <nav>
        <h3>Add New Task</h3>
        <button onClick={() => props.setPage("home")}>
          <h3>X</h3>
        </button>
      </nav>
      <main>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Title" required />
          <input type="text" placeholder="Link" />
          <input
            type="date"
            placeholder="Due Date"
            min={new Date().toISOString().split("T")[0]}
          />
          <button>Add</button>
        </form>
      </main>
    </>
  );
}
