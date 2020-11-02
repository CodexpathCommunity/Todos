import React, { useState, useEffect } from "react";
import "./Todo.css";
import { GoSearch } from "react-icons/go";
import { MdSettings } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const [am, setAm] = useState(true);
  const [openTodo, setOpenTodo] = useState(false);

  useEffect(() => {
    const time = new Date();
    const id = setInterval(() => setDateTime(new Date()), 1000);
    const Moment = time.getHours();
    Moment >= 12 && setAm(false);
    return () => {
      clearInterval(id);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setTodo([inputText, ...todo]);
    setInputText("");
  };

  return (
    <div className="app">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        src="./Video/vd1.mp4"
        type="video/mp4"
      />
      <div className="app--content">
        <h1 className="content--Time">
          {dateTime.toLocaleTimeString([], {
            timeStyle: "short",
          })}
        </h1>
        <div className="context">
          <h1 className="content--greeting">{`Good ${
            am ? "morning" : "evening"
          }, Friend. I'm skyboy`}</h1>
          <h1 className="content--text">What is your main focus for today?</h1>
        </div>

        <form action="" className="app--form">
          <input
            className="app--form--input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleClick}>Add todo</button>
        </form>
      </div>
      <div className="Links top left">
        <h4> Links </h4>
        <GoSearch className="left--icon" />
      </div>
      <div className="Links buttom left">
        <MdSettings className="right--icon" />
        <h4>Lagos Nigeria</h4>
      </div>
      <div className="Links top right">
        <TiWeatherPartlySunny className="right--icon" />
        <h4>Sunny</h4>
      </div>
      <div
        className="Links buttom right"
        onClick={() => setOpenTodo(!openTodo)}
      >
        <h4>Todo</h4>
      </div>

      {openTodo && (
        <div className="todo--list">
          <h4 className="list--header">Todos</h4>
          <div className="todo">
            {todo.map((todos) => (
              <h5> {todos} </h5>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
