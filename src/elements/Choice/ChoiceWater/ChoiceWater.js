import React from 'react';
import classes from '../Choice.module.css'
import {
  Link
} from "react-router-dom";

const choiceWater = (props) => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'cadetblue' }}>
      <Link to='/WaterDemandCalculator'>Water Demand</Link>
    </div>
  );
}

export default choiceWater;