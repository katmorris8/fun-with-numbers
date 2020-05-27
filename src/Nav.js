import React from 'react';
import Button from './Button';

const Nav = props => {
  return (
    <div>
      <Button name={props.names} click={props.click} />
    </div>
  )
}

export default Nav;