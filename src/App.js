import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Fact from './Fact';

class App extends Component {
  constructor() {
    super();
    this.state = {
      types: ['trivia', 'math', 'date', 'year'],
      fact: '',
    }
  }

  handleClick = async (e) => {
    const response = await fetch(`http://numbersapi.com/random/${e.target.value}?json`);
    const json = await response.json();
    this.setState({ fact: json.text });
  }

  render() {
    return (
      <div className="">
        <h1>fun facts about numbers</h1>
        <Nav names={this.state.types} click={this.handleClick} />
        <Fact fact={this.state.fact} />
      </div>
    );
  }
}

export default App;
