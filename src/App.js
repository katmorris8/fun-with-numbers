import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import Fact from "./Fact";
import "tachyons";

const App = () => {
  const types = ["random", "trivia", "math", "date", "year"];
  const [{ defaultText, url, text, number }, setState] = useState({
    defaultText: "Welcome! Click on a button to get a fact.",
    url: null,
    text: null,
    number: null,
    status: "idle",
  });

  function handleClick(e) {
    const { value } = e.target;
    setState({
      url: `http://numbersapi.com/random/${
        value === "random" ? "" : value
      }?json`,
    });
  }

  useEffect(() => {
    if (!url) {
      return;
    }
    setState({ text: null, number: null, status: "pending" });
    fetch(url)
      .then((data) => data.json())
      .then((fact) => {
        if (fact.text.toLowerCase().includes("invalid type")) {
          setState({
            status: "rejected",
            text: "There was an error trying to receive this fact. Try again!",
          });
        } else {
          setState({
            text: fact.text,
            number: fact.number,
            status: "resolved",
          });
        }
      });
  }, [url]);

  return (
    <div className="app">
      <h1 className="tc f1 avenir">fun facts about numbers</h1>
      <Nav names={types} click={handleClick} />
      <Fact fact={text ? text : defaultText} number={text ? number : ""} />
    </div>
  );
};

export default App;
