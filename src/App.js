import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Fact from "./Fact";
import "tachyons";
import { useFetch } from "./useFetch";

const App = () => {
  const types = ["random", "trivia", "math", "date", "year"];
  const [{ currentType, message }, setState] = useState({
    currentType: null,
    message: "Click on a button to get a fact!",
  });

  function handleClick(e) {
    setState({currentType: e.target.value})
  }
  
  const {type, text, number, found, status} = useFetch(`http://numbersapi.com/random/${currentType}?json`)

  return (
    <div className="app">
      <h1 className="tc f1 avenir">fun facts about numbers</h1>
      <Nav names={types} click={handleClick} />
      <Fact fact={found ? text : message} number={found ? number : ''} />
    </div>
  );
};

export default App;
