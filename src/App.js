import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Fact from './Fact';
import 'tachyons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      types: ['random', 'trivia', 'math', 'date', 'year'],
      number: '',
      fact: '',
    }
  }

  handleClick = async (e) => {
    try {
      if (e.target.value === 'random') {
        e.target.value = ''
      }
      const response = await fetch(`http://numbersapi.com/random/${e.target.value}?json`);
      const json = await response.json();
      this.setState({ 
        number: json.number,
        fact: json.text
      });
    } catch (error) {
      this.setState({ fact: 'sorry! could not find fact. please try again later' });
      throw error;
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="tc f1 avenir">fun facts about numbers</h1>
        <Nav names={this.state.types} click={this.handleClick} />
        <Fact fact={this.state.fact} number={this.state.number} />
      </div>
    );
  }
}

export default App;
