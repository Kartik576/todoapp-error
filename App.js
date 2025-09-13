import React, { useState } from "react";
import "./App.css"; // import CSS file

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault(); // prevent page refresh

    if (task.trim() === "") {
      alert("⚠️ Please enter a todo before adding!");
      return;
    }

    setTodos([...todos, { text: task, completed: false }]);
    alert("✅ Todo added successfully!");
    setTask("");
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const clearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
    alert("🧹 Completed todos cleared!");
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>📝 To-Do App</h1>

        {/* Input + Button */}
        <form onSubmit={handleAdd} className="todo-form">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button type="submit">Add</button>
        </form>

        {/* Todo List */}
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              <div className="todo-left">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                />
                <span className={todo.completed ? "completed" : ""}>
                  {todo.text}
                </span>
              </div>
            </li>
          ))}
        </ul>

        {/* Clear Completed Button */}
        {todos.some((todo) => todo.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
