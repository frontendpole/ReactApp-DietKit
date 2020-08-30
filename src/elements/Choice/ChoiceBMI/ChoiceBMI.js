import React from 'react';
import classes from '../Choice.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const choiceBMI = (props) => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'rgb(80, 126, 80)' }}>
      <Link to='BMICalculator'>Body Mass Index</Link>
    </div>
  );
}

export default choiceBMI;