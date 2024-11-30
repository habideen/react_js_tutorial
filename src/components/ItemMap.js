import React, { useState } from "react";

function ItemMap() {
  /*
  // try to avoid using system generated index like below
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
  */
  /*
  // better static approach
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ];

  return (
    <div>
      <h1>Fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
  */
  /*
  // Dynamic data rendering
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Master React" },
  ]);

  return (
    <div>
      <h1>Tasks:</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
  */

  // Interactive list
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask }]);
      setNewTask("");
    }
  };

  return (
    <div>
      <h1>Interactive Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
}

export default ItemMap;
