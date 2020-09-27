import React from 'react';
import classes from '../Choice.module.css'
import {
  Link
} from "react-router-dom";

const choiceWater = () => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'cadetblue' }}>
      <Link to='/react-app-easy-diet-app/water-demand-calculator'>Water Demand</Link>
    </div>
  );
}

export default choiceWater;