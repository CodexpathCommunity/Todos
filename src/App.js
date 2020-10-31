import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setTodo([inputText, ...todo]);
    setInputText("");
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form action="">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleClick}>Add todo</button>
      </form>
      {todo.map((todos) => (
        <h2> {todos} </h2>
      ))}
    </div>
  );
}

export default App;
