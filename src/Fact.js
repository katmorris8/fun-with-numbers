import React from 'react';
import './Fact.css';

const Fact = props => {
  return (
    <p className="fact avenir">{props.fact}</p>
  )
}

export default Fact;