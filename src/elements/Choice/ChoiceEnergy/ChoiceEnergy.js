import React from 'react';
import classes from '../Choice.module.css'
import {
  Link
} from "react-router-dom";

const choiceEnergy = () => {
  return (
    <div className={classes.Choice} style={{ backgroundColor: 'rgb(211, 117, 117)' }}>
      <Link to='EnergyDemandCalculator'>Energy Demand</Link>
    </div>
  );
}

export default choiceEnergy;