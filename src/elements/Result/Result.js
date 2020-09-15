import React from 'react';
import classes from './Result.module.css'

const result = ({ result }) => {
  return (
    <div className={classes.Result}>{result}</div>
  );
}

export default result;