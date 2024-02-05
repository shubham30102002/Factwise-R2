import React, { useEffect, useState } from "react";
import "./App.css";
import { text } from "stream/consumers";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storedTodos = json.parse(localStorage.getItem('todos'));
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', json.stringify(todos))
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { text, checked: false, created_at: new Date().getTime() }]);
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  }
  return (
    <div className="app">
      {/* <div className="header">
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/coderpad_logo.svg" />
        </div>
        <div>
          <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
          <span>React App</span>
        </div>
      </div>
      <div className="content">
        <img src="https://storage.googleapis.com/coderpad_project_template_assets/react.svg" />
        <p>Hello React!</p>
      </div>
      <div className="footer">Use the hell to install new packages.</div> */}

      <h1>Todo List</h1>
      <input type="text" id="todoInput" />
      <button onClick={() => {
        addTodo(document.getElementById('todoInput')).value
      }}>Add</button>
      <ul>
        {todos.map((todo, index) => {
          <li key={index}
            className={todo.checked ? "completed" : ""}
            onClick={() => toggleTodo(index)}
          >{todo.text}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
