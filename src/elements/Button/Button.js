import React from 'react';
import classes from './Button.module.css'

const button = ({ onClick }) => {
  return (
    <button
      className={classes.Button}
      onClick={onClick}
    >calculate</button>
  );
}

export default button;