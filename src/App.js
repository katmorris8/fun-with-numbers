import React, { Component } from 'react';
import './App.css';
// import Nav from './Nav';
import Fact from './Fact';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: 'trivia',
      fact: '',
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://numbersapi.com/random/${this.state.type}?json`);
    const json = await response.json();
    this.setState({ fact: json.text });
  }

  render() {
    return (
      <div className="">
        <h1>fun facts about numbers</h1>
        {/* <Nav />  */}
        <Button name={this.state.type} />
        <Fact fact={this.state.fact} />
      </div>
    );
  }
}

export default App;
