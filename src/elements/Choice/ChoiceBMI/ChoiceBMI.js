import React from 'react';
import classes from '../Choice.module.css'
import {
  Link
} from "react-router-dom";

const choiceBMI = () => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'rgb(80, 126, 80)' }}>
      <Link to='/react-app-easy-diet-app/bmi-calculator'>Body Mass Index</Link>
    </div>
  );
}

export default choiceBMI;