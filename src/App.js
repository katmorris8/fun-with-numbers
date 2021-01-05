import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Fact from "./Fact";
import "tachyons";

const App = () => {
  const types = ["random", "trivia", "math", "date", "year"]
  const [state, setState] = useState({
    number: '',
    fact: 'Click on a button to get a fact!'
  })

  async function handleClick(e) {
    try {
      if (e.target.value === "random") {
        e.target.value = "";
      }
      const response = await fetch(
        `http://numbersapi.com/random/${e.target.value}?json`
      );
      const json = await response.json();
      setState({
        number: json.number,
        fact: json.text,
      });
    } catch (error) {
      setState({
        fact: "sorry! could not find fact. please try again later",
      });
      throw error;
    }
  };

  return (
    <div className="app">
      <h1 className="tc f1 avenir">fun facts about numbers</h1>
      <Nav names={types} click={handleClick} />
      <Fact fact={state.fact} number={state.number} />
    </div>
  );
}

export default App;
