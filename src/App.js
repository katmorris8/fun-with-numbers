import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Fact from "./Fact";
import "tachyons";
import { useFetch } from "./useFetch";

const App = () => {
  const types = ["random", "trivia", "math", "date", "year"];
  const [{ currentType, initialMessage }, setState] = useState({
    currentType: null,
    initialMessage: "Click on a button to get a fact!",
  });

  function handleClick(e) {
    const { value } = e.target;
    setState({ currentType: value === "random" ? "" : value });
  }

  const { type, text, number, found, status } = useFetch(
    `http://numbersapi.com/random/${currentType}?json`
  );

  return (
    <div className="app">
      <h1 className="tc f1 avenir">fun facts about numbers</h1>
      <Nav names={types} click={handleClick} />
      <Fact fact={found ? text : initialMessage} number={found ? number : ""} />
    </div>
  );
};

export default App;
