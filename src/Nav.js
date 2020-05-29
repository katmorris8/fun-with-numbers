import React from 'react';
import Button from './Button';

const Nav = ({ names, click}) => {
  return (
    <div className="flex justify-center">
      {
        names.map(name => {
          return(
            <Button
              key={name}
              name={name}
              click={click}
            />
          )
        })
      }
    </div>
  )
}

export default Nav;