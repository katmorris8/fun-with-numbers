import React from 'react';

const Button = props => {
  return <button onClick={props.click} value={props.name}>{props.name}</button>
}

export default Button;