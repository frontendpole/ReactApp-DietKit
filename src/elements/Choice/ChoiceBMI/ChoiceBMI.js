import React from 'react';
import classes from '../Choice.module.css'
import {
  Link
} from "react-router-dom";

const choiceBMI = () => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'rgb(80, 126, 80)' }}>
      <Link to='BMICalculator'>Body Mass Index</Link>
    </div>
  );
}

export default choiceBMI;