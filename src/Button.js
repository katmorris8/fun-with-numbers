import React from 'react';
import './Button.css'

const Button = props => {
  return (
    <button 
      className="nav-button avenir br3" 
      onClick={props.click} 
      value={props.name}>
        {props.name}
    </button>
  )
}

export default Button;